# AFormLabelDescription

Renders additional description beside a form label.

Reference for the repository build of `aloha-vue@3.0.0-alpha.1`. See the [quick start](../quick-start.md) for package differences.

## Usage

```js
import { AFormLabelDescription } from "aloha-vue";
```

[Runnable Vue example](../examples/AFormLabelDescription.vue) · [Application setup](../quick-start.md)

Keep the field label short and place the detailed explanation here. Link the description to the control when composing manually.

## Props

| JavaScript prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `alwaysTranslate` | Boolean | `false` | — | — |
| `extra` | Object | `undefined` | — | — |
| `html` | String, Number | — | — | — |
| `id` | String | — | Yes | The identifier of the component, which can be used to track or refer to the component in the code. |
| `isLabelFloat` | Boolean | `false` | — | Determines whether the label of the component should be positioned above the field. If true, the label will move above the text field when focused or when content is present. Deprecated, use label-position. |

## Events and model bindings

This component does not declare dedicated events. See the usage notes for callback props or delegated behavior.

## Slots

See the linked example and source for forwarded content and any component-specific extension points.

[Component source](https://github.com/ilia-brykin/aloha/blob/d40c0018addf72c7fac33b40eb3146e11d493147/src/ui/AFormLabelDescription/AFormLabelDescription.js)
