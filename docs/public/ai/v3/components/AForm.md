# AForm

Schema-driven layout and model binding for form fields.

Reference for the repository build of `aloha-vue@3.0.0-alpha.1`. See the [quick start](../quick-start.md) for package differences.

## Usage

```js
import { AForm } from "aloha-vue";
```

[Runnable Vue example](../examples/AForm.vue) · [Application setup](../quick-start.md) · [Interactive documentation](https://ilia-brykin.github.io/aloha/form)

Provide stable IDs and a label for each field. With the default shape, form field values are written under their configured IDs.

## Props

| JavaScript prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `alwaysTranslate` | Boolean | `false` | — | Forces translation regardless of the `is-translate` flag. |
| `classColumnDefault` | String, Object | `"a_column a_column_12"` | — | Default CSS class applied to each configured field when the item does not define its own classColumn. |
| `classColumns` | String, Object | `"a_columns a_columns_count_12 a_columns_gap_2"` | — | CSS classes applied to the container that holds all fields from data. |
| `data` | Array | — | Yes | Required array of field configurations. Every item needs a type and id, and may contain props supported by the selected UI component. |
| `errors` | Object | `{}` | — | Object containing validation errors keyed by field ID. Values are passed to the corresponding fields and can also be displayed in the form error summary. |
| `excludeRenderAttributes` | Array | `[]` | — | Array of attributes that should not be rendered for this component. Useful for excluding unnecessary attributes from the final DOM. |
| `idPrefix` | String | `undefined` | — | Prefix for the component's ID. Used to create a unique identifier based on the specified prefix. |
| `isHide` | Boolean | `false` | — | Determines whether the component should be hidden. If set to true, the component is not displayed on the page. |
| `isRender` | Boolean | `true` | — | Indicates whether the component should be rendered. If set to false, the component will not be created in the DOM. |
| `isRequired` | Boolean | `false` | — | Explicitly controls whether the form displays required-field information. When omitted, the value is inferred from configured fields. |
| `modelValue` | Object | `undefined` | — | The complete form model. Field values are read from and written to keys matching their IDs. |
| `readonly` | Boolean | `false` | — | Enables read-only mode, where the value is displayed as text without the possibility of editing. |
| `readonlyDefault` | String | `""` | — | The default text that is shown if the value is missing in read-only mode. |
| `readonlyValueParentClass` | String, Object, Array | `undefined` | — | — |
| `showErrors` | Boolean | `true` | — | Controls display of the form-level error summary. Field-level errors remain available to individual components. |
| `showRequiredText` | Boolean | `true` | — | Controls display of the required-fields notice above the fields. |
| `tag` | String | `"form"` | — | HTML tag used for the root element of the form. |
| `textErrorHeader` | String | `undefined` | — | Custom heading for the form-level error summary. |
| `textRequired` | String | `undefined` | — | Custom text for the required-fields notice. |
| `useFlatErrors` | Boolean | `true` | — | When enabled, errors are resolved directly by field ID. Disable it when nested container errors follow the nested model structure. |
| `useFlatModel` | Boolean | `true` | — | When enabled, container fields work with the shared flat model. Disable it to store container values in nested objects. |
| `useHtmlIdAsKey` | Boolean | `false` | — | Uses each field's resolved HTML ID as its Vue key instead of the array index. |

## Events and model bindings

| Event | Payload |
| --- | --- |
| `change` | `{ currentModel, id, item, fullModel, model, props }` |
| `update:modelValue` | `MODEL_VALUE` / `model` |

Vue model bindings: `v-model`.

## Slots

| Slot | Slot props | Description |
| --- | --- | --- |
| `formAppend` | — | Content rendered at the end of the form after the field container. |
| `formDataAppend` | — | Content rendered inside the field container after configured fields. |
| `formDataPrepend` | — | Content rendered inside the field container before configured fields. |
| `formPrepend` | — | Content rendered at the beginning of the form, before required information and errors. |
| `formPrependAfterRequired` | — | Content rendered after the required-fields notice and before the error summary. |

[Component source](https://github.com/ilia-brykin/aloha/blob/d40c0018addf72c7fac33b40eb3146e11d493147/src/ui/AForm/AForm.js)
