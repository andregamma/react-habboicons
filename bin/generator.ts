const fs = require('fs')
const path = require('path')

export interface IconMap {
  [key: string]: FileToIcon[]
}

interface FileToIcon {
  iconName: string;
  iconType: string;
  fileName: string;
  fileType: string;
}

export class Generator {
  private readonly IMAGES_PATH = path.resolve('src', 'images')
  private readonly OUTPUT_DIR = path.resolve('src', 'icons')

  public async generate() {
    try {
      const iconsMap = await this.getIcons();
      const parsedIconMap = this.parseIconMap(iconsMap);
      this.generateStub(parsedIconMap);
      // console.log(parsedIconMap)
    } catch (e) {
      throw new Error(e)
    }
  }

  private generateStub(iconMap: IconMap) {
    const keys = Object.keys(iconMap) as Array<keyof typeof iconMap>
    keys.forEach((iconType) => {
      const mapped: FileToIcon[] = iconMap[iconType];

      mapped.forEach((mappedIcon) => {
        const stub = this.replaceInStub(mappedIcon)
        this.writeOutput(mappedIcon.iconName, mappedIcon.iconType, stub);
      })
    })
  }

  private replaceInStub({ fileName, fileType, iconName, iconType }: FileToIcon) {
    return this.stub
      .replace(/{{fileName}}/g, fileName)
      .replace(/{{fileType}}/g, fileType)
      .replace(/{{iconName}}/g, iconName.toLowerCase())
      .replace(/{{IconName}}/g, this.capitalizeFirst(iconName))
      .replace(/{{IconType}}/g, this.capitalizeFirst(iconType))
  }

  private writeOutput(fileName: string, categoryName: string, data: string): void {
    const fullpath = path.resolve(this.OUTPUT_DIR, `${this.capitalizeFirst(categoryName) + fileName}.tsx`)
    console.log('Escrevendo arquivo:', fileName)
    fs.writeFile(fullpath, data, (err: any) => {
      if (err) {
        console.log('Não foi possível escrever:', fileName, '->', err.message)
      } else {
        console.log(`[OK] ${fileName}.tsx`)
      }
    });
  }

  private getIcons(): Promise<string[]> {
    return new Promise(((resolve, reject) => {
      fs.readdir(this.IMAGES_PATH, (error: any, dir: string[]) => {
        if (error) {
          return reject(error);
        }
        const icons: string[] = []

        dir.forEach((file) => {
          if (file.endsWith('png') || file.endsWith('gif')) {
            icons.push(file);
          }
        })

        resolve(icons)
      })
    }))
  }

  private parseIconMap(iconsMap: string[]): IconMap {
    const transformed: IconMap = {}
    iconsMap.forEach((icon) => {
      const iconMap = this.getIconNameAndTypeByFile(icon);

      if (transformed[iconMap.iconType]) {
        transformed[iconMap.iconType].push(iconMap)
      } else {
        transformed[iconMap.iconType] = [iconMap];
      }
    })

    return transformed;
  }

  private getIconNameAndTypeByFile(filename: string): FileToIcon {
    const _ = filename.split('.');
    const fileName = _.slice(_.length - 2, _.length - 1).join()

    const splitted = fileName.split('_');

    const fileType = _[_.length - 1];

    const [iconType] = splitted;

    let iconName = '';

    for (let i = 1; i < splitted.length; i++) {
      const part = splitted[i];
      iconName += this.capitalizeFirst(part)
    }

    return { iconName, iconType, fileType, fileName }
  }

  private get stub() {
    return fs.readFileSync(path.resolve(__dirname, 'model', 'IconModel.stub'), 'utf-8')
  }

  private capitalizeFirst(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
  }
}
