# ADatepicker

Single date, time or date-time input with a calendar or time popup.

Reference for the repository build of `aloha-vue@3.0.0-alpha.1`. See the [quick start](../quick-start.md) for package differences.

## Usage

```js
import { ADatepicker } from "aloha-vue";
```

[Runnable Vue example](../examples/ADatepicker.vue) · [Application setup](../quick-start.md) · [Interactive documentation](https://ilia-brykin.github.io/aloha/datepicker)

Use format for the displayed value and formatSave for the stored value when valueType is format. Try Tab to the field and use the calendar controls with the keyboard.

## Props

| JavaScript prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `alwaysTranslate` | Boolean | `false` | — | Forces translation regardless of the `is-translate` flag. |
| `appendToBody` | Boolean | `false` (plugin default) | — | Determines whether the calendar popover is rendered directly inside the document body. |
| `change` | Function | Default callback | — | Function called when the model changes. It accepts the new model value and additional parameters for processing the change. |
| `class` | String, Object | `undefined` (plugin default) | — | CSS class or class object applied to the outer datepicker container. |
| `clearable` | Boolean | `true` (plugin default) | — | Displays a clear icon that removes the current value from the field. |
| `confirm` | Boolean | `false` (plugin default) | — | Requires explicit confirmation before the selected value is emitted. |
| `confirmText` | String | `"OK"` (plugin default) | — | Label of the confirm button shown inside the calendar panel. |
| `dateFormat` | String | `undefined` (plugin default) | — | Format used for the date tooltip and time header inside the panel. |
| `dependencies` | Array, Object | `undefined` | — | Specifies dependencies that may affect the visibility or behavior of the component based on the values of other elements. |
| `disabled` | Boolean | `false` | — | Determines whether the component is disabled. If set to true, the component becomes inactive and the user cannot interact with it. |
| `editable` | Boolean | `true` (plugin default) | — | Allows typing directly into the input field. If disabled, the value can only be changed via the panel. |
| `errorIcon` | String, Object | `undefined` | — | Specifies the icon displayed when the component has validation errors. If the component has an input field, the icon is shown inside it; otherwise, it is displayed next to the control. The icon is shown only when errors is present. |
| `errors` | String, Array | `undefined` | — | Contains text or an array of errors that should be displayed to the user. If there are errors, they are displayed below the component. |
| `errorsAll` | Object | `{}` | — | An object containing errors for all child elements passed through children. Each error should be specified for the corresponding element by its id. |
| `errorsClass` | String, Object | `undefined` | — | — |
| `excludeRenderAttributes` | Array | `[]` | — | Array of attributes that should not be rendered for this component. Useful for excluding unnecessary attributes from the final DOM. |
| `extra` | Object | `undefined` | — | An object that contains variables for substitution in the translation template. It is used for dynamically replacing values in translation strings. For example, if the translation string has placeholders like "_WELCOME_{{foo}}_{{bar}}_", which is translated as "Welcome {{ foo }}: {{ bar }}", you can pass an object like { foo: "abc", bar: "123" }, and the result will be the translation "Welcome abc: 123". |
| `firstDayOfWeek` | Number | `1` (plugin default) | — | Sets which day is shown as the first day of the week in the calendar. Allowed values are 1 to 7. |
| `focusStartDate` | Boolean | `false` (plugin default) | — | If set, the initial calendar focus is moved to start-date when the panel opens. |
| `format` | String, Object | `undefined` (plugin default) | — | Display format used in the input field and for parsing manually entered values. |
| `formatSave` | String | `undefined` (plugin default) | — | Format used when saving or emitting the component value. |
| `helpText` | String | — | — | Help text displayed below the component. Provides the user with additional information or instruction. |
| `htmlId` | String | `undefined` | — | Sets the HTML ID of the element. Can be used to uniquely identify the component on the page. |
| `iconDay` | Number, String | `undefined` (plugin default) | — | Custom icon displayed inside the input field. |
| `id` | String, Number | Generated ID | — | The identifier of the component, which can be used to track or refer to the component in the code. |
| `idPrefix` | String | `undefined` | — | Prefix for the component's ID. Used to create a unique identifier based on the specified prefix. |
| `inputAttr` | Object | `{}` (plugin default) | — | Attributes applied directly to the internal input element of the datepicker. |
| `inputAttributes` | Object | `{}` | — | An object of attributes applied directly to the input element. Allows adding or customizing additional input attributes. |
| `inputClass` | String, Number, Boolean, Array, Object, Date, Function, Symbol | Default callback | — | CSS class(es) applied to the input element. Allows styling the component according to your requirements. |
| `inputName` | String | `"date"` (plugin default) | — | Name attribute of the internal input element. |
| `isHide` | Boolean | `false` | — | Determines whether the component should be hidden. If set to true, the component is not displayed on the page. |
| `isLabelFloat` | Boolean | `undefined` | — | Determines whether the label of the component should be positioned above the field. If true, the label will move above the text field when focused or when content is present. Deprecated, use label-position. |
| `isRender` | Boolean | `true` | — | Indicates whether the component should be rendered. If set to false, the component will not be created in the DOM. |
| `label` | String, Number | `undefined` | — | Label text displayed next to the component. Typically used to describe the purpose of the input element. |
| `labelClass` | Any | `undefined` | — | CSS class(es) applied to the label. Allows customizing the label's style. |
| `labelDescription` | String | `undefined` | — | Additional description displayed next to the component label. Helps the user better understand the purpose of the field. |
| `labelPosition` | String | `undefined` | — | Position of the label: "float", "inset" or "top". The default comes from the component plugin or AFormPlugin (labelPosition). |
| `labelScreenReader` | String | `undefined` | — | Label intended for screen readers. Useful for improving accessibility. |
| `maxDate` | String, Date | `undefined` (plugin default) | — | Maximum selectable date. |
| `minDate` | String, Date | `undefined` (plugin default) | — | Minimum selectable date. |
| `minuteStep` | Number | `0` (plugin default) | — | Step used for minutes in the time panel. Allowed values are between 0 and 60. |
| `modelDependencies` | Object | `{}` | — | Determines model dependencies that may affect the visibility or behavior of the component. |
| `modelUndefined` | Any | `null` | — | The value used to reset the model to an undefined state. Useful for clearing the model value. |
| `modelValue` | String, Number, Boolean, Array, Object, Date, Function, Symbol | `undefined` | — | The current model value associated with the component. Used to manage the data displayed in the component. |
| `options` | Object | `{}` | — | Additional data object available within the component, in slots, or custom logic. |
| `placeholder` | String | `undefined` (plugin default) | — | Specifies the placeholder text that will be displayed in the input field until the user enters data. The placeholder helps the user understand what data is expected in the field. |
| `placeholdersDefault` | Object | Built-in configuration (plugin default) | — | Defines default placeholder values for different datepicker scenarios when the regular placeholder prop is not provided. Supported keys include date, dateRange, timeHour, timeMinute, timeSecond, datetimeHour, datetimeMinute, and datetimeSecond. |
| `placement` | String | `"bottom-start"` (plugin default) | — | Placement of the calendar popover relative to the input field. |
| `popupStyle` | Object | `{}` (plugin default) | — | Inline styles applied to the popup calendar container. |
| `range` | Boolean | `false` (plugin default) | — | Enables range selection mode. |
| `rangeSeparator` | String | `"~"` (plugin default) | — | Separator string used between start and end values in range mode. |
| `readonly` | Boolean | `false` | — | Enables read-only mode, where the value is displayed as text without the possibility of editing. |
| `readonlyDefault` | String | `""` (plugin default) | — | The default text that is shown if the value is missing in read-only mode. |
| `readonlyValueParentClass` | String, Object, Array | `undefined` | — | — |
| `required` | Boolean | `false` | — | Indicates whether the component is required. If set to true, the component requires user input. |
| `shortcuts` | Boolean, Array | `true` (plugin default) | — | Shows shortcut presets in the calendar panel. Can be a boolean or a custom shortcuts array. |
| `startDate` | String, Date | `undefined` (plugin default) | — | Initial date used for the first visible calendar view. |
| `timePrecision` | String | `"minute"` (plugin default) | — | Controls which time units are shown in the time panel. Supported values are hour, minute, and second. |
| `type` | String | `"date"` (plugin default) | — | Defines the datepicker mode. Supported values are date, datetime, month, year, and time. |
| `valueType` | Any | `"format"` (plugin default) | — | Defines the format of the emitted model value. Supported values are timestamp, format, date, or a custom object. |
| `width` | String, Number | `null` (plugin default) | — | Width of the datepicker input. Accepts a number in pixels or any valid CSS width value. |

## Events and model bindings

| Event | Payload |
| --- | --- |
| `blur` | `event` |
| `change` | See source or linked demo |
| `changeCalendarMonth` | See source or linked demo |
| `changeCalendarYear` | See source or linked demo |
| `clear` | None |
| `confirm` | See source or linked demo |
| `focus` | `event` |
| `input` | See source or linked demo |
| `inputError` | `value` |
| `update:modelValue` | Selected value in the representation set by `valueType` and `formatSave`. |

Vue model bindings: `v-model`.

## Slots

See the linked example and source for forwarded content and any component-specific extension points.

[Component source](https://github.com/ilia-brykin/aloha/blob/d40c0018addf72c7fac33b40eb3146e11d493147/src/ui/ADatepicker/ADatepicker.js)
