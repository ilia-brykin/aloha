![npm (scoped)](https://img.shields.io/npm/v/aloha-vue?label=NPM)
![NPM](https://img.shields.io/npm/l/aloha-vue?label=License)
![npm](https://img.shields.io/npm/dt/aloha-vue?label=Downloads)

![Aloha Framework logo](.images/aloha_logo.png)

---
# Versions

## 2.45.0

- Feature: Add `APaginationPages` component and export it, with new documentation pages, examples, and localized translations.
- Feature: Add `TextsAPI` to improve text customization and i18n support in `APaginationPages`.
- Refactor: Rename pagination props for clarity (`countAllRows` -> `totalCount`, `paginationMaxItems` -> `maxPages`), remove `totalRowsCount`, and update related logic, docs, and translations.
- Refactor: Align pagination markup/styles by sharing SCSS variables and simplifying rendering (including removal of `hasRows`).
- Doc/UX: Add `AlohaPaginationItems` helper and refresh pagination demo examples (basic, disabled, max pages, limits per page, short/mode).
- Refactor: Use `null` instead of empty strings in `ATabsContent` and `ATabsTab` render defaults.

## 2.44.0

- Feature: Add `class` and `classMenuSearch` props to `ASelect`, with default values in `ASelectPluginOptions`. Enhance menu class binding to support conditional styling for search functionality.


## 2.43.1

- Feature: `countAllRows` in ATableTopPanel multipleActionActiveSlot


## 2.43.0

-  Feature: Introduce `aSortBy` utility with extended sorting capabilities, including case-insensitive sorting and mixed iteratee support. Add comprehensive test coverage.
-  Feature: Add `aOrderBy` utility for extended ordering functionality with support for case-insensitive sorting, iteratee arrays, mixed orders, nested paths, and additional options. Include comprehensive test coverage.
-  Refactor: Replace `lodash-es` `sortBy` with internal `aSortBy` utility across multiple components for consistency and enhanced functionality
-  Refactor: Replace `lodash-es` `orderBy` with internal `aOrderBy` utility across composition APIs for consistency and extended functionality.


## 2.42.1

- Fixed bug when model is updated outside `AInputCurrency`

## 2.42.0

- Add `onlyMobile` prop to `AMenu` for enhanced mobile-specific behavior support.

## 2.41.5

- Wrap `textSelectAll` and `textDeselectAll` in `ATranslation` for improved localization support in `ASelect`.

## 2.41.4

- Fix `isActionColumnVisible` reference in `SimpleTableAPI` to ensure correct return logic.

## 2.41.3

- Fix `isActionIconVisible` initialization in `SimpleTableAPI` to correctly reference its prop.

## 2.41.2

- Revert to `dompurify` from `isomorphic-dompurify` for simplicity and update related imports and usage in `utils.js`.

## 2.41.1

- Export `DOMPurify` from `utils.js` for enhanced modularity and clarify `isomorphic-dompurify` usage.

## 2.41.0

- Replace `dompurify` with `isomorphic-dompurify` for improved isomorphic compatibility.

## 2.40.0

- Feature: Add `useHtmlIdAsKey` prop to support using `htmlId` instead of index as key for form elements across AForm, AGroup, AFieldset, AModalForm, and related components. Update i18n files with descriptions.

## 2.39.6

- Fix: Update modal responsive widths for large, XL, and XXL variants in SCSS.

## 2.39.5

- Fix: Add optional chaining for `inputRef.value` to safely access DOM properties in InputEventsAPI.
- Fix: Update `getLabelsFromChildren` call to use object destructuring for `children` parameter in LabelsAPI.

## 2.39.4

- Refactor `ATableTd`: simplify ternary expressions for readability and update `ATranslation` prop from `text` to `html`.

## 2.39.3

- CSS Replace `color-adjust` to `print-color-adjust`

## 2.39.2

- Minor fixes: ScrollAPI error, AMenu render

## 2.39.1

- SSR
  - Update `getRemPx` in `ARemPxAPI`: replace `defaultRemPx.value` with static `16` for non-browser environments. 

## 2.39.0

- SSR
  - Refactor mounting logic: introduce `isMounted` state and move `addPopperContainerInBody` calls into `onMounted` lifecycle hook across components for consistent initialization timing. Adjust render methods to account for `isMounted` state. 
  - Integrate `isBrowser` checks into `AMobileAPI`, `ANotification`, `AMenu`, `APageTabTitleAPI`, and `ARemPxAPI` to ensure compatibility with non-browser environments. Update lifecycle hooks for proper rendering and initialization timing.
  - Refactor popper initialization: move `addPopperContainerInBody` calls into `onMounted` lifecycle hook in `ATooltip`, `ADropdown`, and `ASelect` for proper mounting timing.
  - Integrate `isBrowser` checks into `AMobilePlugin` and `ARemPxPlugin` to ensure compatibility with non-browser environments.
  - Refactor browser environment checks: integrate `isBrowser` utility into `autosize`, `utils`, and `utilsDOM` to improve maintainability and consistency.
  - Add `isBrowser` utility function: detect browser environment and export through `index.js`.

## 2.38.1

- Feature: Add `a_fieldset_with_legend` class for fieldsets with labels, enhance collapsible functionality and update related SCSS styles for AFieldset and other components.

## 2.38.0

- Feature: Add `labelTitle` prop support and enhance title behavior in AMultiselectOrdered, ACheckboxLegend, and AFieldset. Update AFieldset styles for responsive legend text and improve collapsible fieldset functionality.

## 2.37.0

- Feature: Add `default` prop support to `ASwitch` and integrate `initDefaultModel` logic. Update documentation, examples, and translations with `PageSwitchDefault` component.

## 2.36.0

- Feature: Add "one_per_group" mode for ASelect component with grouped selection support and update associated documentation, examples, and translations.
- Feature: Enhance PageFilters with "one_per_group" mode support in multiselect, update translations, examples, and logic in ModelValuesAPI for grouped selection handling.

## 2.35.1

- Enhance `ASlider`'s `DataAPI`: refine step value handling with decimal precision and update computed data to ensure accurate values using `toFixed`.

## 2.35.0

- `ASlider`: added vertical slider support with updated styles, orientation logic, and a new example `PageSliderVertical` integrated into the documentation.
- `ASlider`: improved stop rendering logic using `lodash.forEach` and computed positions; added SCSS variables for customizing stops and included a new `PageSliderStops` example in the documentation.
- `ASlider`: implemented full ARIA attribute support via `AriaAttributesAPI` (`aria-valuemin`, `aria-valuemax`, `aria-valuenow`, `aria-valuetext`, `aria-orientation`) to improve accessibility.
- `ASlider`: modularized internal logic by extracting `StopsAPI`, `DataAPI`, `LabelAPI`, `AttributesAPI`, `StylesAPI`, `DragAndDropAPI`, and `TitleAPI` to improve maintainability and clarity.
- `ASlider`: enhanced dragging and keyboard accessibility, added support for `step`, and integrated proper focus management for accessible interactions.
- `Documentation`: added new usage examples to the documentation, including `PageSliderVertical`, `PageSliderStops`, `PageSliderRange`, `PageSliderMinMax`, `PageSliderErrors`, `PageSliderHelpText`, `PageSliderLabelDescription`, and `PageSliderChange`, with accompanying Pug templates, JavaScript content, and i18n keys.


## 2.34.0

- Add gap utilities for spacing, including `.a_gap_*`, `.a_gap_x_*`, and `.a_gap_y_*` classes based on `$a_spacing_values`.
- Migrate `ADatepicker` localization to JSON-based i18n files, remove hardcoded language definitions, and refactor related APIs for improved modularity and maintainability.
- Add `startDate` and `focusStartDate` props to `ADatepicker`
- Add `maxDate` and `minDate` props to `ADatepicker`

## 2.33.4

- Default RemPx value in Plugin

## 2.33.3

- Fixed: Add missing border radius to `.a_modal_footer_actions` for consistent styling

## 2.33.2

- Add `btnCloseIcon` prop to AAlert for configurable close button icon and update associated SCSS

## 2.33.1

- Add `alertParentClassLocal` to `AAlert` component

## 2.33.0

- Add customizable button class props to `AFilterCenter` and `AFilterCenterItem` components, refactor `AFilters` to use `filtersPluginOptions` defaults, and update plugin configuration for button styles.

## 2.32.5

-  Add `classExtra` prop to components for customizable additional classes, update related logic in `AModal`, `AWizard`, and `AModalWizard` components

## 2.32.4

- Refactor: Update AConfirmAPI to use named exports for improved modularity and adjust index.js for updated export structure

## 2.32.3

- Fixed: Add null checks for `aTableRef` and `_previewRef` in `PreviewRightResizeAPI` to improve stability

## 2.32.2

- Fixed: Add defensive checks for `getBoundingClientRect` across components to improve stability when handling DOM elements

## 2.32.1

- Feature: Add `aria-hidden` attribute to divider type in `ADropdownAction` for improved accessibility

## 2.32.0

- Feature: Add `selectRoute` and `multiselectRoute` types to `ARouterLinkConfig`

## 2.31.0

- Feature: Add `useRem` support and adjustments across `ATable` and `ADropdown` components for REM-based scaling

## 2.30.4

- Feature: Add error handling, improved validation, and extended `AValidatedJson` API functionality
- Feature: Extend `AValidatedJson` functionality with `parentHtmlId`, improved error labels, and IdAPI integration

## 2.30.3

- Style: Add support for `border-radius` in ATable preview down styles

## 2.30.2

- Feature: Add `changeFontSize` callback to ARemPxPlugin for dynamic font size updates

## 2.30.1

- Feature: Export `remPx` from ARemPxAPI for enhanced utility

## 2.30.0

- Feature: Add `mobileBreakpoint` ref for better breakpoint management in AMobilePlugin and AMobileAPI

## 2.29.0

- Add `labelDescription` prop across components and examples
- Feature: Add support for `init` and `change` events in `ACarousel` with related documentation and examples

## 2.28.6

- `AValidatedJson` code cleanup

## 2.28.5

- fixed `AValidatedJson`

## 2.28.4

- fixed `AValidatedJson`

## 2.28.3

- Refactor: Update component mappings to include `AValidatedJson` only in `AUiComponents`


## 2.28.2

- Add `AValidatedJson` to `AFieldset` and ´AUiContainerComponents´ for extended component support.

## 2.28.1

- Refactor `ACarousel`: Introduce `ArrowsAPI` to manage arrow visibility logic and update related components for improved reusability and maintainability.

## 2.28.0

- Add component `AValidatedJson`

## 2.27.1

- Fix casing in `ARemPxAPI` export path for consistency with compositionAPI folder structure.

## 2.27.0

- Refactor `SCSS`: Convert all pixel-based units to `rem`
- Refactor `ACarousel`: Introduce rem-based unit mapping for consistent scaling, integrate global `ARemPxAPI`, and update `ACarousel` `SCSS`, composition APIs, and plugins accordingly.

## 2.26.0

- Refactor `ACarousel` controls: introduce `ACarouselControlsIndicator` component, update related indicators handling logic, and add support for nested children and new margin property.

## 2.25.2

- Add `AValidatedJson` list mode functionality with composition API

## 2.25.1

- Added selector-close for AMenu, to set focus on a desired element after the menu close
- Added integerPartMaxLength prop for AInputCurrency to set custom length for integer part of the value
- Minor fixes to AInputCurrency

## 2.25.0

- Add button style groups and translations to `ASelectStyle`, update plugin and documentation

## 2.24.0

- Add new component `ASelectStyle` with docu

## 2.23.0

- Documentation `CSS`: `Text`
- Refactor `ACarousel` styles
- Add `text_line_through` and `text_decoration_none` utilities for text decoration styling
- Add `text_justify` utility for text alignment and responsive breakpoint support in text styles
- Add `text_clamp` utility to support multiline text truncation with CSS clamp technique

## 2.22.0

- Documentation `AElement`
- Add-ons for `ACarousel`
  - `indicators-type`: `squares`
  - `indicatorsAutoLimit`
  - `indicatorsLimit`
  - `indicatorWidth`

## 2.21.5

- Adjust padding-right in `ASelect` dropdown for improved spacing.

## 2.21.4

- Fix toggle behavior in `ASelect` to prevent premature closing when interacting with HTML elements

## 2.21.3

- Fix: ATable, Sorting for columns defect

## 2.21.2

- Refactor badge `SCSS` variables for `.a_badge` to use consistent naming convention

## 2.21.1

- Broken version

## 2.21.0

- Add badge styles, documentation, and localization

## 2.20.0

- Feature: Introduced `pagination.position` (`top`, `bottom`, `y`) for `ATable`

## 2.19.1

- Fix translation in `AErrors`

## 2.19.0

- Translations: `AErrors`, `AAlert`, `APagination`, `AFilters`, `AFormElementBtnClear`

## 2.18.0

- Add Props: `useFlatModel` for `AForm`, `AModalForm`, `AFieldset`, `AGroup`

## 2.17.0

- Add props: `useFlatErrors` for `AForm`, `AModalForm`, `AErrors`, `AFieldset`, `AGroup`

## 2.16.0

- New component: `ACarousel`

## 2.15.0

- Add a new function `getTranslatedAttributes`
- `AModal`: Fix Styles

## 2.14.1

- `ASelectValueCloseable`: Fix in close function

## 2.14.0

- Change Styles for `Errors`, `Legend` and `Fieldset`
- `ALabel`: Fix für `onClick`
- `AErrors`: extension `goTo` function

## 2.13.1

- Add `updateI18nForLanguage` function to `ATranslationAPI`

## 2.13.0

- Add `updateI18n` function to support dynamic `i18n` updates

## 2.12.1

- `ASelect` Fix

## 2.12.0

- Add `ASelectIcon` component

## 2.11.3

- Prioritize data from server for ASelect

## 2.11.2

- Refactor focus handling in `UiAPI`

## 2.11.1

- Add export for `AFilterCenter` component

## 2.11.0

- Add `focusin` and `focusout` event handling to `ARadio` component
- Add `focusin` and `focusout` event handling to `ACheckbox` component
- Add support for `type` prop and `minuteStep` in `ADatepicker`
- Refactor `ADatepicker` format handling with `TypeAPI` integration
- Refactor focus handling in `ADatepicker` components.
- Refactor `APanelYear` to composition API
- Refactor `APanelTime` to composition API

## 2.10.1 

- Fix model update in `AFilters`

## 2.10.0

- Add utility classes for vertical alignment

## 2.9.2

- `ATableTopPanel`: fix `currentMultipleActions`

## 2.9.1

- `AModal`: added "modal inside a modal" feature with proper `z-index` stacking support

## 2.9.0

- Added `.column_offset_right_*` classes to grid utilities for right column offsets with dynamic margin-right
  calculations

## 2.8.4

- `ADatePicker`: Added customizable class prop and fixed `SCSS` indentation

## 2.8.3

- Fix model update in `AFilters`

## 2.8.2

- Fix buttons ids in `ATableTdAction`

## 2.8.1

- Fix `//` in `AHttpAPI` 

## 2.8.0

- New component `AMultiselectOrdered`
- Props `attributesFieldset` for `ACheckbox`, `ARadio`, `AFieldset`, `AMultiselectOrdered`, `ARouterLinkConfig`

## 2.7.3

- `AFilters`: fix `changeModel` functions

## 2.7.2

- `ATemplate`: fix `type` for `modelValue`

## 2.7.1

- `ATemplate`: fix `props`

## 2.7.0

- New component `AFormElement`
- Props `keyDisabledCallback` for `ASelect`, `ACheckbox`, `ARadio`
- Fix in `keyDisabledCallback`

## 2.6.1

- Fix model in AModalForm

## 2.6.0

- Update logic model change in ui-components

## 2.5.0

- readonly for ui-components

## 2.4.1

- `ASelect`: fix `watch` for `url`, `apiSaveId`, `urlParams`

## 2.4.0

- New component `ARouterLinkConfig`
- `ARouterLinkConfig`: Improvements
-  Fix padding for `a_search_highlight`
- `filterJson`: new arguments `isHtml`, `jsonClass`, `tag`
- `filterJson`: fix for `jsonClass`

## 2.3.1

- Fix: import `APopupAPI` and functions

## 2.3.0

- `AModal`: don't close modal if popup opened
- `AAlert`: new props ariaAtomic and role
- `AHttpAPI`: ignoreErrorHandler as function
- `ASelect`: Fixed validator for isExclusiveOptionEnabled.

## 2.2.0

### Enhancements:
- Expanded `ASelect` component by adding three new props:
  - `exclusive-option-label`
  - `exclusive-option-value`
  - `is-exclusive-option-enabled`

### Description:
An exclusive option can be defined as a special choice that, when selected, prevents the selection of any other options or deselects all previously chosen options.

## 2.1.13

- Fix 2 import from moment.js

## 2.1.12

- Fix import from moment.js

## 2.1.11

- Test version

## 2.1.10

- **Fix:** Corrected SCSS import order.

## 2.1.9

- Fixed arguments for `filterSearchHighlight` in CompositionAPI.
- Added documentation for the `ATranslation` component.

## 2.1.8

- **New Exports Added**
  - `UiAPI`, `UIExcludeRenderAttributesAPI`, `UiStyleHideAPI`, `AErrorsText`

## 2.1.7

- **New Exports Added**
  - **ATranslationAPI**
    - `translation`
  - **AMenuButtonToggle**
    - `AMenuButtonToggle_ToggleAPI`

## 2.1.6

- **New Exports Added**
  - **Utils**
    - `dompurify`
    - `sanitize`

## 2.1.5

- **New Export Added**
  - **AFiltersAPI**
    - `AFiltersAPI_additionFilters`

## 2.1.4

- **New Exports Added**
  - **AHttpAPI**
    - `AHttpAPI_abortHttp`
    - `AHttpAPI_API_CONFIG`
    - `AHttpAPI_callHttpRequestAndCheckSavedApi`
    - `AHttpAPI_clearAllApiSaved`
    - `AHttpAPI_clearApiSaved`
    - `AHttpAPI_deleteHttp`
    - `AHttpAPI_getHttp`
    - `AHttpAPI_getListHttp`
    - `AHttpAPI_getOptionsHttp`
    - `AHttpAPI_getUrlParams`
    - `AHttpAPI_patchHttp`
    - `AHttpAPI_postHttp`
    - `AHttpAPI_putHttp`
    - `AHttpAPI_setBaseUrl`
    - `AHttpAPI_setErrorCallbacks`
    - `AHttpAPI_setHeaderParams`
    - `AHttpAPI_setUrlForArray`
    - `AHttpAPI_setUrlWithParams`
  - **AMobileAPI**
    - `AMobileAPI_isMobileWidth`
    - `AMobileAPI_setIsMobileWidth`
  - **ANotificationAPI**
    - `ANotificationAPI_addNotification`
    - `ANotificationAPI_setNotificationTimeout`
  - **APageTabTitleAPI**
    - `APageTabTitleAPI_setBaseTitle` 

## 2.1.3

- New Imports:
  - Added imports for the following components, functions, and constants:
    - Components: `AMenuButtonToggle`, `APlacements`.
    - Functions: `getTranslatedText`, `isPlaceholderTranslate`, `setI18n`, `setLanguage`, `toggleTranslate`, `updateTranslation`
    - Constants: `i18n`, `focusableList`, `focusableSelector`, `AKeyChildren`, `AKeyId`, `AKeyLabel`, `AKeyParent`, `AKeysCode`, `timeTranslationLastChanged`, `isTranslate`.
  - Renamed `i18n` to `i18nAll` for better clarity.

## 2.1.2

- Linting Enhancements:
  - Implemented linting for Vue.js components and codebase using ESLint
- Documentation Updates:
  - Updated configuration and import examples in the documentation.

## 2.1.1

- `AOneCheckbox`: Fixed warnings related to the slot usage.

## 2.1.0

- `AOneCheckbox`: Added new props:
  - `slotName` for customizing slots.
  - `labelAttributes` for configuring additional attributes on labels.

## 2.0.1

- Bug Fix: Added missing `CSS` file to the library.
- New Imports:
  - Functions:
    - `concatTwoStringsWithSpace`, `colorToHex`, `hexToRgb`, `mixBlack`, `mixColor`, `mixWhite`, `rgbToHex`, `sanitizeLocal`, `getUniqueSelector`, `scrollToElement`, `setFocusToElement`, `setFocusToPreviousFocusableElement`, `setFocusToNextFocusableElement`, `toPrecision`.
  - Constants:
    - `focusableList`, `focusableSelector`, `AKeyChildren`, `AKeyId`, `AKeyLabel`, `AKeyParent`, `AKeysCode`.

## 2.0.0

- Major refactoring and expanded documentation.
- Migration Guide:
  - `AMenu2` → `AMenu`: Component renamed, updated CSS classes, and variables.
  - `ATinymce` removed: License change to `GPL-2.0-or-later`.
- Style updates:
  - Fixed `.a_columns_gab_` typo to `.a_columns_gap_`.
  - Integrated `aloha-css` styles into `aloha-vue`.
- Improved import system: Direct import for all components, directives, and plugins.
- Dependency updates for compatibility.

***

## 1.12.2

- ASelect Fix

## 1.12.1

- Prioritize data from server for ASelect

## 1.11.1

- Fix in `keyDisabledCallback`

## 1.11.0

- Props `keyDisabledCallback` for `ASelect`, `ACheckbox`, `ARadio`

## 1.10.1

- `filterJson`: fix for `jsonClass`

## 1.10.0

- `filterJson`: new arguments `isHtml`, `jsonClass`, `tag`

## 1.9.2

- Fix padding for `a_search_highlight`

## 1.9.1

- `ARouterLinkConfig`: Improvements

## 1.9.0

- New component `ARouterLinkConfig`

## 1.8.0

- `AModal`: don't close modal if popup opened

## 1.7.0

- `AAlert`: new props ariaAtomic and role

## 1.6.0

- `AHttpAPI`: ignoreErrorHandler as function

## 1.5.1

- `ASelect`: Fixed validator for isExclusiveOptionEnabled.

## 1.5.0

### Enhancements:
- Expanded `ASelect` component by adding three new props:
  - `exclusive-option-label`
  - `exclusive-option-value`
  - `is-exclusive-option-enabled`

### Description:
An exclusive option can be defined as a special choice that, when selected, prevents the selection of any other options or deselects all previously chosen options.

## 1.4.0

### New Arguments for `filterSearchHighlight`
- `tag`
- `attributes`
- `caseSensitive`
- `isHtml`

## 1.3.1

- `AOneCheckbox`: Fixed warnings related to the slot usage.

## 1.3.0

- `AOneCheckbox`: Added new props:
  - `slotName` for customizing slots.
  - `labelAttributes` for configuring additional attributes on labels.

## 1.2.285

- Minor fix to the `focus` logic in the `AMenu2` component for improved usability and accessibility.

## 1.2.284

- Improved `focus` management for the `AMenu2` component, ensuring better accessibility when the menu is closed.

## 1.2.283

- Fixed the `HTML` structure of the  component to improve accessibility and ensure compliance with accessibility standards.

## 1.2.282

- Fixed the `ATable` component to ensure the `aria-labelledby` attribute is not used when the table has no header, improving accessibility compliance.

## 1.2.281

- Excluded `isConfirm` and `callbackLocal` attributes from the rendering of the `ADropdown` component to improve accessibility.


## 1.2.280

- Excluded `isConfirm` and `callbackLocal` attributes from the rendering of the `AGroupButtonDropdown` component to improve accessibility.

## 1.2.279

- Removed the `disabled` attribute from the `HTML` output of the `ASelect` component to improve accessibility.

## 1.2.278

- Fixed the `disabled` state handling for elements with `type="link"` in the `AElement` component.

## 1.2.277

- Removed the unnecessary `role="button"` attribute from buttons in`AInputCurrency` and `AInputNumber` components.
- Added `title` and `textScreenReader` props for buttons in `AInputCurrency` and `AInputNumber` to enhance accessibility and screen reader support.

## 1.2.276

- Fixed the `aria-describedby` attribute for UI components to ensure proper association with error messages, improving accessibility.

## 1.2.275

- Improved the `AModal` component by managing `z-index` for multiple modal windows, ensuring proper stacking order.

## 1.2.274

- Added translations for the `ARequired` component to support multiple languages.

## 1.2.273

- Added `text-break` `CSS` styling to the `AModal` component to improve text handling and prevent overflow issues.

## 1.2.272

- Fixed input behaviour in AInputCurrency for Mozilla Firefox (Firefox has slightly different event times than Webkit browsers).

## 1.2.271

- Documentation Build: Replaced `Webpack` with `Vite` for building the documentation. 
- Corrected styles for the `ATabs` component when the `isVertical` prop is set to ´true´.

## 1.2.270

- Fixed styling issues for the `ALoading` component when used in the footer of the `AModal` component.

## 1.2.269

- Fixed an issue with the `"select all"` button in the `ASelect` component to ensure it functions correctly.

## 1.2.268

- Enhanced the `AWizard` component to support icons in addition to numbers, providing more flexibility in step representation. Documentation has been updated to include details on this new feature.

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

## 1.2.256

- Expanded accessibility attributes for the `AFieldset`, `ACheckbox` and `ARadio` components to improve screen reader support.
- Added translations for the documentation of the `AModal` component.

## 1.2.255

- Enhanced accessibility for the `APagination` component, improving its support for screen readers

## 1.2.254

- Made structural adjustments to the templates of `AInputCurrency` and `AInputNumber` components and added new CSS classes for improved styling and layout consistency

## 1.2.253

- Applied `font-weight: bolder` styling to labels in the `ALabel` component when `isLabelFloat` is set to `false`.

## 1.2.252

- Introduced new props and made changes to enhance accessibility for the `AModal` component, improving its usability with screen readers and assistive technologies.

## 1.2.251

- `ATooltip`: Added the `withoutAriaDescribedby` prop for more flexible ARIA descriptions.
- `FilterList`: Introduced a new `lastSeparator` parameter in the `filterList` function, with documentation updates.
- `AGroup`: Refactored the component and added the first part of its documentation.
- Menu Sorting: Adjusted the order of links in the documentation menu.
- `ATabs` Fixes: Applied CSS, HTML, and disabled state fixes to improve component styling and functionality.
- `AFieldset`: Renamed the ´classColumn´ prop to ´classColumnDefault´ for a consistent structure among form elements.
- Accessibility Extensions: Added ´inheritAttrs: false´ to form element components to enhance accessibility customization.
- ´ATabs´ Documentation: Added parts 3 and 4 of the ´ATabs´ component documentation.

## 1.2.250

- ´AHttpAPI´: Fixed the ´postHttp´ function by adding the ´urlBase´ argument.
- ´ATabs´ Documentation: Added parts 1 and 2 of the ´ATabs´ component documentation.
- ´ATabs´ Refactoring: Expanded the ´ATabs´ component with new props and additional functionality.
- ´ALoading´ Documentation and Refactoring: Refactored the ´ALoading´ component and provided full documentation.
- ´ASpinner´ Documentation: Documented the ´ASpinner´ component and added translations.
- ´ACloak´ Documentation: Added documentation and translations for the ´ACloak´ component.
- ´AFieldset´ Documentation and Refactoring: Documented the ´AFieldset´ component with structural improvements.
- ´ATemplate´ Documentation: Added complete documentation for the ´ATemplate´ component.
- ´label-screen-reader´ Fixes and Documentation: Introduced the ´label-screen-reader´ prop for form elements and added corresponding documentation.

## 1.2.249

- Added the ´modalStyle´ prop to the ´AModal` component, allowing for additional style customization. Documentation has been updated to include details on this new prop.

## 1.2.248

- Added support for custom HTML attributes to the `AModal` component

## 1.2.247

- Added the ´minHeightBody´ prop to set a minimum height for the ´ATinymce´ editor body
- Updated the context menu functionality within the ´ATinymce´ component for improved contextual behavior

## 1.2.246

- Enhanced the ´rowClass´ prop in the ´ATable´ component by adding a level argument for cases where ´rowClass´ is a function, allowing for more granular row styling based on hierarchy or depth

## 1.2.245

- Added the ´isTreeCollapsible´ and ´isTreeOpened´ props to the ´ATable´ component, enabling collapsible tree functionality and control over the initial open state of tree nodes.
