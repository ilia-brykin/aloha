# ALabel

Form label with required, loading and error presentation.

Reference for the repository build of `aloha-vue@3.0.0-alpha.1`. See the [quick start](../quick-start.md) for package differences.

## Usage

```js
import { ALabel } from "aloha-vue";
```

[Runnable Vue example](../examples/ALabel.vue) · [Application setup](../quick-start.md)

Pass the corresponding input ID so the generated label can target that control.

## Props

| JavaScript prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `alwaysTranslate` | Boolean | `false` | — | — |
| `clickLabel` | Function | `undefined` | — | — |
| `excludeRenderAttributes` | Array | `[]` | — | Array of attributes that should not be rendered for this component. Useful for excluding unnecessary attributes from the final DOM. |
| `extra` | Object | `undefined` | — | — |
| `hideFor` | Boolean | `undefined` | — | — |
| `hideId` | Boolean | `undefined` | — | — |
| `id` | String | — | Yes | The identifier of the component, which can be used to track or refer to the component in the code. |
| `idSuffix` | String | `"_label"` | — | — |
| `isError` | Boolean | `false` | — | — |
| `isLabelFloat` | Boolean | `false` | — | Determines whether the label of the component should be positioned above the field. If true, the label will move above the text field when focused or when content is present. Deprecated, use label-position. |
| `label` | String, Number | `undefined` | — | Label text displayed next to the component. Typically used to describe the purpose of the input element. |
| `labelClass` | String, Object | `undefined` | — | CSS class(es) applied to the label. Allows customizing the label's style. |
| `labelScreenReader` | String, Number | `undefined` | — | Label intended for screen readers. Useful for improving accessibility. |
| `loading` | Boolean | `false` | — | Indicates whether the item is in a loading state. If set to true, the item displays a loading indicator. |
| `prevent` | Boolean | `undefined` | — | — |
| `readonly` | Boolean | `false` | — | Enables read-only mode, where the value is displayed as text without the possibility of editing. |
| `required` | Boolean | `false` | — | Indicates whether the component is required. If set to true, the component requires user input. |
| `stop` | Boolean | `undefined` | — | — |
| `tag` | String | `"label"` | — | — |
| `type` | String | — | — | — |

## Events and model bindings

This component does not declare dedicated events. See the usage notes for callback props or delegated behavior.

## Slots

See the linked example and source for forwarded content and any component-specific extension points.

[Component source](https://github.com/ilia-brykin/aloha/blob/d40c0018addf72c7fac33b40eb3146e11d493147/src/ui/ALabel/ALabel.js)
