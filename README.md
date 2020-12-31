# react-habboicons

**This library is a work in progress.** The icons are encoded in BASE64 and returned as an HTML image. Any PR or suggestions are welcome.


[![NPM](https://img.shields.io/npm/v/react-habboicons.svg)](https://www.npmjs.com/package/react-habboicons) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-habboicons

# or use yarn:

yarn add react-habboicons

```

## Usage

```tsx
import React from 'react'

import { CurrencyDiamond } from 'react-habboicons'

const Example = () => {
  return (
    <CurrencyDiamond />
  )
}

export default Example
```

## Roadmap
Below are my main ideas for the future of the library

#### **Combine similar icons into a unique component with variants**

> Habbo has multiple icons and some of then are just variants from a base icon. Maybe it's better to have one unique component that you can change the icon via a **variant prop**.

## All icons

### 1. Currency
```
CurrencyDucket
CurrencyDucketNoShadow
CurrencyDucketShadowBottom
CurrencyDucketShadowBottomPlus
CurrencyDucketShadow
CurrencyCoin
CurrencyCoinCircular
CurrencyCoinCircularShadow
CurrencyCoinShadowBottom
CurrencyCoinShadowBottomPlus
CurrencyDiamond
CurrencyDiamondIsometricShadow
CurrencyDiamondShadow
```

### 2. Room
```
RoomNavigator
RoomNavigatorShadow
RoomCapacityEmpty
RoomCapacityFew
RoomCapacityQuite
RoomCapacityMany
RoomCapacityFull
```

### 3. Hotel
```
HotelOffline
HotelOnline
HotelBuildingIsometricSmall
```

## License

MIT © [andregamma](https://github.com/andregamma)
