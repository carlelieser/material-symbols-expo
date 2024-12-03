## Expo Icon Sets for Material Symbols

This package provides a set of icons for use with the [Expo](https://expo.dev) framework using [@expo/vector-icons](https://docs.expo.dev/guides/icons/#expovector-icons).

It sources variable font files from [Material Design Icons repo](https://github.com/google/material-design-icons) and splits them into static fonts by removing GRAD, opsz, and wght axis for use with Expo. The FILL axis is restricted to 0 (no fill) and 1 (filled). These variants are then transformed into icon sets using [createIconSet](https://docs.expo.dev/guides/icons/#createiconset).

### Installation

```
npm install material-symbols-expo
```

Then, depending on your project's font setup, load the provided font assets in your project.

#### With `useFonts`

```typescript
import { useFonts } from "expo-font";
import { MaterialSymbolsFonts } from "material-symbols-expo";

const [fontsLoaded] = useFonts({
    ...MaterialSymbolsFonts
    ...OtherFonts
});
```

#### With `expo-font`

```typescript
// app.config.mjs

import { MaterialSymbolsFonts } from "material-symbols-expo";

export default {
    expo: {
        plugins: [
            [
                "expo-font",
                {
                    fonts: [...MaterialSymbolsFonts]
                }
            ]
        ]
    }
}
```

> NOTE: Importing `MaterialSymbolsFonts` from `app.config` without the `mjs` extension will result in an error. You cannot use an import statement outside a module.

### Usage

The library provides a convenience component that lets you specify variants and fill without explicitly importing those components separately.

```typescript
import { MaterialSymbols } from "material-symbols-expo";

<MaterialSymbols
    variant={"rounded"}
    name={"account_circle"}
    size={24}
    color={"#000"}
    filled={true}
/>
```

You can also import variants with or without fill directly:

```typescript
import { MaterialSymbolsOutlined, MaterialSymbolsRoundedFilled } from "material-symbols-expo";

<MaterialSymbolsOutlined {...props} />

<MaterialSymbolsRoundedFilled {...props} />

```