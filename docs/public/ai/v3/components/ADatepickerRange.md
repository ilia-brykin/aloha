# ADatepickerRange

Two linked date inputs representing a start and end date.

Reference for the repository build of `aloha-vue@3.0.0-alpha.1`. See the [quick start](../quick-start.md) for package differences.

## Usage

```js
import { ADatepickerRange } from "aloha-vue";
```

[Runnable Vue example](../examples/ADatepickerRange.vue) · [Application setup](../quick-start.md) · [Interactive documentation](https://ilia-brykin.github.io/aloha/datepicker-range)

The model is an object indexed by keyFrom and keyUntil. Give both endpoints distinct labels if the defaults are unsuitable.

## Props

| JavaScript prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `alwaysTranslate` | Boolean | `false` | — | — |
| `appendToBody` | Boolean | `false` | — | Determines if the datepicker dropdown attaches directly to the HTML body. |
| `change` | Function | Default callback | — | A function that's called whenever the date selection is changed. |
| `clearable` | Boolean | `true` | — | Allows you to clear the date selection. |
| `dependencies` | Array, Object | `undefined` | — | Specifies dependencies that may affect the visibility or behavior of the component based on the values of other elements. |
| `disabled` | Boolean | `false` | — | Prevents any interaction with the datepicker. |
| `disabledFrom` | Boolean | `false` | — | Disables interaction with the start date. |
| `disabledUntil` | Boolean | `false` | — | Disables interaction with the end date. |
| `errors` | String, Array | `undefined` | — | Displays error messages if there are issues with the date selection. |
| `errorsAll` | Object | `{}` | — | Collects all error messages related to the datepicker. |
| `errorsClass` | String, Object | `undefined` | — | — |
| `excludeRenderAttributes` | Array | `[]` | — | Array of attributes that should not be rendered for this component. Useful for excluding unnecessary attributes from the final DOM. |
| `extra` | Object | `undefined` | — | extra for helpText. |
| `firstDayOfWeek` | Number | `1` | — | Sets which day is considered the start of the week. |
| `format` | String, Object | `"DD.MM.YYYY"` | — | Determines the format of the date displayed. |
| `formatSave` | String | `"YYYY-MM-DD"` | — | Determines the format of the date when it's saved. |
| `helpText` | String | — | — | Provides helpful text or guidance for using the datepicker. |
| `htmlId` | String | `undefined` | — | An alternative ID that overrides the default 'id' value in case specific HTML interactions are required. |
| `iconDay` | Number, String | `undefined` | — | Allows for a special icon to be used for certain days. |
| `id` | String, Number | Generated ID | — | An internal identifier used to create specific IDs for elements within the component. |
| `idPrefix` | String | `undefined` | — | Provides a way to customize the ID attributes of component elements in case multiple instances exist on the same page. |
| `inputAttributes` | Object | `{}` | — | Allows additional attributes to be set for the datepicker input. |
| `inputAttributesFrom` | Object | `{}` | — | Allows additional attributes for the start date input. |
| `inputAttributesUntil` | Object | `{}` | — | Allows additional attributes for the end date input. |
| `inputClass` | String, Number, Boolean, Array, Object, Date, Function, Symbol | `"a_datepicker__input"` | — | Applies CSS classes to the datepicker input for styling. |
| `inputName` | String | `"date"` | — | Sets the name attribute of the datepicker input field. |
| `inputWidth` | Number, String | `270` | — | Determines the width of the datepicker input field. |
| `isHide` | Boolean | `false` | — | Determines if the datepicker is visible or not. |
| `isRender` | Boolean | `true` | — | Determines if the datepicker should be rendered. |
| `keyFrom` | Any | `"from"` | — | Sets the key name for the start date in the data model. |
| `keyUntil` | Any | `"until"` | — | Sets the key name for the end date in the data model. |
| `label` | String, Number | `undefined` | — | Defines the label text for the datepicker. |
| `labelClass` | Any | `undefined` | — | Applies CSS classes to the label for styling. |
| `labelDescription` | String | `undefined` | — | Additional description displayed next to the component label. Helps the user better understand the purpose of the field. |
| `labelFrom` | String | `"_A_DATEPICKER_RANGE_FROM_"` | — | Label for the "From" datepicker. |
| `labelScreenReader` | String | `undefined` | — | Label intended for screen readers. Useful for improving accessibility. |
| `labelUntil` | String | `"_A_DATEPICKER_RANGE_UNTIL_"` | — | Label for the "Until" datepicker. |
| `lang` | String | `"de"` | — | Sets the language used for the datepicker. |
| `modelDependencies` | Object | `undefined` | — | Determines model dependencies that may affect the visibility or behavior of the component. |
| `modelUndefined` | Any | `undefined` | — | Holds a placeholder if the data model doesn't exist. |
| `modelValue` | Object | `{}` | — | The current selected date range in the datepicker. |
| `options` | Object | `{}` | — | Allows for additional configuration options for the datepicker. |
| `placeholderFrom` | String, Number | `undefined` | — | Placeholder text for the "From" datepicker when no date is selected. |
| `placeholderUntil` | String, Number | `undefined` | — | Placeholder text for the "Until" datepicker when no date is selected. |
| `placement` | String | `"bottom-start"` | — | Controls where the datepicker dropdown will be positioned relative to the input field. |
| `popupStyle` | Object | `{}` | — | Custom styles for the datepicker dropdown. |
| `readonly` | Boolean | `false` | — | Enables read-only mode, where the value is displayed as text without the possibility of editing. |
| `readonlyDefault` | String | `""` | — | The default text that is shown if the value is missing in read-only mode. |
| `readonlyDefaultFrom` | String | `undefined` | — | — |
| `readonlyDefaultUntil` | String | `undefined` | — | — |
| `readonlyValueParentClass` | String, Object, Array | `undefined` | — | — |
| `required` | Boolean | `false` | — | Determines if a date selection is mandatory before submitting a form. |
| `shortcuts` | Boolean, Array | `true` | — | Sets predefined date ranges for quick selection. |
| `type` | String | `"dateRange"` | — | Specifies the type of datepicker, like single date or date range. |

## Events and model bindings

This component does not declare dedicated events. See the usage notes for callback props or delegated behavior.

## Slots

See the linked example and source for forwarded content and any component-specific extension points.

[Component source](https://github.com/ilia-brykin/aloha/blob/d40c0018addf72c7fac33b40eb3146e11d493147/src/ui/ADatepickerRange/ADatepickerRange.js)
