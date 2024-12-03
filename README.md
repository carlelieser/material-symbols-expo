# Expo Icon Sets for Material Symbols

Easily integrate **Material Symbols** icons into your [Expo](https://expo.dev) projects with this library. It
leverages [@expo/vector-icons](https://docs.expo.dev/guides/icons/#expovector-icons) and provides pre-configured icon
sets for seamless usage.

This library converts **variable font files**
from [Material Design Icons](https://github.com/google/material-design-icons) into **static font files** by removing the
`GRAD`, `opsz`, and `wght` axes. It supports the `FILL` axis with two values: `0` (outline) and `1` (filled). These font
variants are packaged as icon sets using Expo’s [createIconSet](https://docs.expo.dev/guides/icons/#createiconset).

## Features

- **Predefined Variants**: Includes outlined, rounded, sharp, and their filled versions.
- **Convenient API**: A single component to configure variants, size, fill, and color.
- **Optimized for Expo**: Fonts are bundled and compatible with the Expo ecosystem.

---

## Installation

Install the library using npm:

```bash
npm install material-symbols-expo
```

---

## Setup

Depending on your project setup, you can load the font assets using `useFonts` or via `expo-font` in your `app.config`
file.

### Using `useFonts`

```typescript
import { useFonts } from "expo-font";
import { MaterialSymbolsFonts } from "material-symbols-expo";

const [fontsLoaded] = useFonts({
	...MaterialSymbolsFonts,
	...OtherFonts, // Include your other font assets here
});
```

### Using `expo-font`

Configure font assets in your `app.config.mjs`:

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
};
```

You probably won't use all font variants. In that case, you can import specific variants:

```typescript
import { MaterialSymbolsOutlinedFont } from "material-symbols-expo";

export default {
	expo: {
		plugins: [
			[
				"expo-font",
				{
					fonts: [
						MaterialSymbolsOutlinedFont,
					]
				}
			]
		]
	}
};
```

> **Note**: Ensure your `app.config` uses the `.mjs` extension to support ES Modules. Importing `MaterialSymbolsFonts`
> without it will result in an error.

---

## Usage

### 1. Simplified Component

Use the `MaterialSymbols` component to specify variants, size, fill, and color directly:

```tsx
import { MaterialSymbols } from "material-symbols-expo";

<MaterialSymbols
	name="account_circle" // Required
	variant="rounded"     // Optional: outlined (default), rounded, sharp
	size={24}             // Optional: Default is 24
	color="#000"          // Optional: Default is "currentColor"
	filled={true}         // Optional: Default is false
/>
```

### 2. Direct Variant Imports

You can also import specific icon variants directly:

```tsx
import { MaterialSymbolsOutlined, MaterialSymbolsRoundedFilled } from "material-symbols-expo";

// Outlined variant
<MaterialSymbolsOutlined
	name="account_circle"
	size={24}
	color="#000"
/>

// Rounded + Filled variant
<MaterialSymbolsRoundedFilled
	name="account_circle"
	size={24}
	color="#000"
/>
```

---

## Variants

This library includes the following icon styles:

- **Outlined**: `MaterialSymbolsOutlined`
- **Rounded**: `MaterialSymbolsRounded`
- **Sharp**: `MaterialSymbolsSharp`
- **Filled Variants**:
- Outlined + Fill: `MaterialSymbolsOutlinedFilled`
- Rounded + Fill: `MaterialSymbolsRoundedFilled`
- Sharp + Fill: `MaterialSymbolsSharpFilled`

---

## License

This library utilizes Material Symbols under
the [Apache License 2.0](https://github.com/google/material-design-icons/blob/master/LICENSE). Ensure compliance with
the terms when using the icons.
