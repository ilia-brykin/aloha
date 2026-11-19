# ARequired

Text explaining the required-field marker used by form controls.

Reference for the repository build of `aloha-vue@3.0.0-alpha.1`. See the [quick start](../quick-start.md) for package differences.

## Usage

```js
import { ARequired } from "aloha-vue";
```

[Runnable Vue example](../examples/ARequired.vue) · [Application setup](../quick-start.md)

Put the explanation before the related form fields and use each control’s required prop where needed.

## Props

| JavaScript prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `alwaysTranslate` | Boolean | `false` | — | — |
| `text` | String | `"_A_REQUIRED_TEXT_"` | — | — |

## Events and model bindings

This component does not declare dedicated events. See the usage notes for callback props or delegated behavior.

## Slots

See the linked example and source for forwarded content and any component-specific extension points.

[Component source](https://github.com/ilia-brykin/aloha/blob/d40c0018addf72c7fac33b40eb3146e11d493147/src/ui/ARequired/ARequired.js)
