# AFormHelpText

Displays descriptive help text for a form field.

Reference for the repository build of `aloha-vue@3.0.0-alpha.1`. See the [quick start](../quick-start.md) for package differences.

## Usage

```js
import { AFormHelpText } from "aloha-vue";
```

[Runnable Vue example](../examples/AFormHelpText.vue) · [Application setup](../quick-start.md)

When composing manually, reference the help text ID from the input’s aria-describedby.

## Props

| JavaScript prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `alwaysTranslate` | Boolean | `false` | — | — |
| `extra` | Object | `undefined` | — | — |
| `html` | String, Number | — | — | — |
| `id` | String | — | Yes | The identifier of the component, which can be used to track or refer to the component in the code. |

## Events and model bindings

This component does not declare dedicated events. See the usage notes for callback props or delegated behavior.

## Slots

See the linked example and source for forwarded content and any component-specific extension points.

[Component source](https://github.com/ilia-brykin/aloha/blob/d40c0018addf72c7fac33b40eb3146e11d493147/src/ui/AFormHelpText/AFormHelpText.js)
