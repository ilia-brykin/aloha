![npm (scoped)](https://img.shields.io/npm/v/aloha-vue?label=NPM)
![NPM](https://img.shields.io/npm/l/aloha-vue?label=License)
![npm](https://img.shields.io/npm/dt/aloha-vue?label=Downloads)

![Aloha Framework logo](.images/aloha_logo.png)

---
# Versions

## 1.2.267

- Removed the password reveal button for `Edge`

## 1.2.266

- Added support for the `disabled` prop in the `AFieldset` and `AGroup` components. When `disabled` is set to `true` for `AFieldset` or `AGroup`, all child form elements within these components are also `disabled`.

## 1.2.265

- Introduced the `searchInGroup` prop for the `ASelect`, `ARadio`, and `ACheckbox` components. When `searchInGroup` is set to `true`, the internal search functionality includes group names in addition to individual elements, allowing for a broader search scope.

## 1.2.264

- Fixed an issue with the `AMenu2` component where the menu did not close upon pressing the `'Esc'` key.

## 1.2.263

- Enhanced accessibility for the `AMenu2` component by adding the `aria-labelledby` attribute to improve screen reader support for menu reading.

## 1.2.262

- Improved `accessibility` for the `AMenu2` component on mobile devices, where the menu functions as a modal window. Relevant accessibility attributes have been added to support this functionality.
- Enhanced the `AMenu2` component's `accessibility` on mobile by implementing focus trapping within the menu when it is open. The menu now also closes upon pressing the `'Esc'` key.

## 1.2.261

- Added a new slot, `formPrependAfterRequired`, to the `AForm` component

## 1.2.260

- Added the `autocomplete` prop to form elements, enabling `autocomplete` functionality. Also included support for `placeholders` where applicable.

## 1.2.259

- Added a new field, `classHeaderParent`, for elements within the `columns` array prop in the `ATable` component, allowing for additional customization of header parent classes.

## 1.2.258

- Fixed an issue with `computePosition` when using the `floating-ui` library
- Resolved a bug in the `AInput` component for `type='color'`

## 1.2.257

- Implemented a `debounce` function for `ResizeObserver` in components to address intermittent errors related to resize events.

