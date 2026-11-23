# Migration Guide from aloha-vue 1.2.x to 2.0.x

## 1. Removed and Renamed Components

### **AMenu2** → **AMenu**

- The `AMenu2` component has been renamed to `AMenu`
- All **CSS** classes have been renamed:

- `.a_menu_2` → `.a_menu`.
- CSS variables: `--a_menu_2_` → `--a_menu_`.

The component is now imported as follows:

```javascript
import {
  AMenu,
} from "aloha-vue";
```

### **TinyMCE**

- The **TinyMCE** component is no longer supported due to the license change of **TinyMCE** from **MIT** to **GPL-2.0-or-later**.

## 2. Style Changes

### Removed Classes

- The `.a_columns_gab_` styles have been removed (typo). Use `.a_columns_gap_` instead.

### Integration of **aloha-css**

- The styles from `aloha-css` are now integrated into `aloha-vue`.
- `aloha-css` is deprecated and will be removed in the near future.

It is recommended to include styles as follows:

```javascript
import "aloha-vue/dist/aloha-vue.css";
```

## 3. Improved Import System

All entities, such as components, directives, plugins, functions, and translations, can now be imported directly:

```javascript
import {
  ATabs,
  AMobileAPI,
  AAlertPlugin,
} from "aloha-vue";
```

## 4. Dependency Updates

Check for updates in your project to meet the new requirements.
