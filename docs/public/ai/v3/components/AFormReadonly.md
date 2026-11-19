# AFormReadonly

Renders a labeled, non-editable representation of a field.

Reference for the repository build of `aloha-vue@3.0.0-alpha.1`. See the [quick start](../quick-start.md) for package differences.

## Usage

```js
import { AFormReadonly } from "aloha-vue";
```

[Runnable Vue example](../examples/AFormReadonly.vue) · [Application setup](../quick-start.md)

Set the field’s type so the displayed value uses the appropriate formatting.

## Props

| JavaScript prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `alwaysTranslate` | Boolean | `false` | — | — |
| `collapsible` | Boolean | `undefined` | — | — |
| `excludeRenderAttributes` | Array | `[]` | — | Array of attributes that should not be rendered for this component. Useful for excluding unnecessary attributes from the final DOM. |
| `extra` | Object | `undefined` | — | — |
| `helpText` | String | `undefined` | — | Help text displayed below the component. Provides the user with additional information or instruction. |
| `id` | String | — | Yes | The identifier of the component, which can be used to track or refer to the component in the code. |
| `isCollapsed` | Boolean | `undefined` | — | — |
| `isRange` | Boolean | `undefined` | — | — |
| `label` | String, Number | `undefined` | — | Label text displayed next to the component. Typically used to describe the purpose of the input element. |
| `labelClass` | String, Object | `undefined` | — | CSS class(es) applied to the label. Allows customizing the label's style. |
| `labelDescription` | String | `undefined` | — | Additional description displayed next to the component label. Helps the user better understand the purpose of the field. |
| `labelScreenReader` | String, Number | `undefined` | — | Label intended for screen readers. Useful for improving accessibility. |
| `modelValue` | String, Number, Object, Array, Boolean | `undefined` | — | The current model value associated with the component. Used to manage the data displayed in the component. |
| `readonlyDefault` | String | `""` | — | The default text that is shown if the value is missing in read-only mode. |
| `required` | Boolean | `false` | — | Indicates whether the component is required. If set to true, the component requires user input. |
| `type` | String | `undefined` | — | — |
| `valueClass` | String, Object | `undefined` | — | — |
| `valueParentClass` | String, Object, Array | `undefined` | — | — |
| `valueTag` | String | `"span"` | — | — |

## Events and model bindings

This component does not declare dedicated events. See the usage notes for callback props or delegated behavior.

## Slots

| Slot | Slot props | Description |
| --- | --- | --- |
| `default` | — | — |

[Component source](https://github.com/ilia-brykin/aloha/blob/d40c0018addf72c7fac33b40eb3146e11d493147/src/ui/AFormReadonly/AFormReadonly.js)
