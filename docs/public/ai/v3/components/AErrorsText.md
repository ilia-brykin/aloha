# AErrorsText

Validation text for an individual input.

Reference for the repository build of `aloha-vue@3.0.0-alpha.1`. See the [quick start](../quick-start.md) for package differences.

## Usage

```js
import { AErrorsText } from "aloha-vue";
```

[Runnable Vue example](../examples/AErrorsText.vue) · [Application setup](../quick-start.md)

Reference its ID in the invalid input’s aria-describedby when composing it outside the form components.

## Props

| JavaScript prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `alwaysTranslate` | Boolean | `false` | — | — |
| `errors` | String, Array | `undefined` | — | Contains text or an array of errors that should be displayed to the user. If there are errors, they are displayed below the component. |
| `errorsClass` | String, Object | `undefined` | — | — |
| `id` | String | — | Yes | The identifier of the component, which can be used to track or refer to the component in the code. |

## Events and model bindings

This component does not declare dedicated events. See the usage notes for callback props or delegated behavior.

## Slots

See the linked example and source for forwarded content and any component-specific extension points.

[Component source](https://github.com/ilia-brykin/aloha/blob/d40c0018addf72c7fac33b40eb3146e11d493147/src/ui/AErrorsText/AErrorsText.js)
