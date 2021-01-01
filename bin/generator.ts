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
  private readonly IMAGES_DIR = path.resolve('src', 'images')
  private readonly OUTPUT_DIR = path.resolve('src', 'icons')
  private readonly EXPORT_INDEX_DIR = path.resolve('src');

  private stub: string = '';

  private exports: string[] = [];

  public async generate() {
    try {
      const iconsMap = await this.getIcons();
      const parsedIconMap = this.parseIconMap(iconsMap);
      await this.generateStub(parsedIconMap);
      this.generateExportIndex()

      console.log('Todos os icones foram gerados.')
    } catch (e) {
      throw new Error(e)
    }
  }

  private generateExportIndex() {
    const str = this.exports.join('\n')
    const filePath = path.resolve(this.EXPORT_INDEX_DIR, 'index.tsx')

    fs.writeFileSync(filePath, str)
    console.log('Exportações escritas')
  }

  private async generateStub(iconMap: IconMap) {
    const keys = Object.keys(iconMap) as Array<keyof typeof iconMap>
    for (const iconKey of keys) {
      const mapped: FileToIcon[] = iconMap[iconKey];

      for (const mappedIcon of mapped) {
        const stub = this.replaceInStub(mappedIcon)
        await this.writeOutput(mappedIcon, stub);
      }
    }
  }

  private replaceInStub({ fileName, fileType, iconName, iconType }: FileToIcon) {
    this.loadStub();

    return this.stub
      .replace(/{{fileName}}/g, fileName)
      .replace(/{{fileType}}/g, fileType)
      .replace(/{{iconName}}/g, iconName.toLowerCase())
      .replace(/{{IconName}}/g, this.capitalizeFirst(iconName))
      .replace(/{{IconType}}/g, this.capitalizeFirst(iconType))
  }

  private writeOutput(icon: FileToIcon, data: string): Promise<void> {
    const filename = this.capitalizeFirst(icon.iconType) + icon.iconName
    const fullpath = path.resolve(this.OUTPUT_DIR, `${filename}.tsx`)
    console.log('Escrevendo arquivo:', filename)
    return new Promise((resolve, reject) => {
      fs.writeFile(fullpath, data, (err: any) => {
        if (err) {
          console.log('Não foi possível escrever:', icon.fileName, '->', err.message)
          reject(err)
        } else {
          console.log(`[OK] ${filename}.tsx`)
          this.addToExport(icon)
          resolve()
        }
      });
    })
  }

  private addToExport({ iconType, iconName }: FileToIcon)  {
    const component = this.capitalizeFirst(iconType) + iconName;

    this.exports.push(`export { default as ${component} } from './icons/${component}'`)
  }

  private getIcons(): Promise<string[]> {
    return new Promise(((resolve, reject) => {
      fs.readdir(this.IMAGES_DIR, (error: any, dir: string[]) => {
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

  private loadStub() {
    if (!this.stub) {
      this.stub = fs.readFileSync(path.resolve(__dirname, 'model', 'IconModel.stub'), 'utf-8')
    }
  }

  private capitalizeFirst(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
  }
}
