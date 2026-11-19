# AErrors

Validation summary with optional navigation to invalid fields.

Reference for the repository build of `aloha-vue@3.0.0-alpha.1`. See the [quick start](../quick-start.md) for package differences.

## Usage

```js
import { AErrors } from "aloha-vue";
```

[Runnable Vue example](../examples/AErrors.vue) · [Application setup](../quick-start.md)

Match error keys with the field IDs when using error links. Set autoFocus explicitly when a static summary must leave focus in place.

## Props

| JavaScript prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `alwaysTranslate` | Boolean | `false` | — | — |
| `autoFocus` | Boolean | `true` | — | — |
| `closable` | Boolean | `true` | — | — |
| `errors` | Object | `{}` | — | Contains text or an array of errors that should be displayed to the user. If there are errors, they are displayed below the component. |
| `goToError` | Function | `undefined` | — | — |
| `idPrefix` | String | `undefined` | — | Prefix for the component's ID. Used to create a unique identifier based on the specified prefix. |
| `isErrorLink` | Boolean | `true` | — | — |
| `optionsList` | Array | `[]` | — | — |
| `textErrorHeader` | String | `"_A_ERRORS_TEXT_HEADER_"` | — | — |
| `useFlatErrors` | Boolean | `true` | — | — |

## Events and model bindings

| Event | Payload |
| --- | --- |
| `close` | None |

## Slots

See the linked example and source for forwarded content and any component-specific extension points.

[Component source](https://github.com/ilia-brykin/aloha/blob/d40c0018addf72c7fac33b40eb3146e11d493147/src/ui/AErrors/AErrors.js)
