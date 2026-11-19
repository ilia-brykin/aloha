# AGet

Displays a value from a nested object or array.

Reference for the repository build of `aloha-vue@3.0.0-alpha.1`. See the [quick start](../quick-start.md) for package differences.

## Usage

```js
import { AGet } from "aloha-vue";
```

[Runnable Vue example](../examples/AGet.vue) · [Application setup](../quick-start.md)

Use keyLabel for the path and defaultValue for a missing path. Use a plain-text source value when rendering untrusted data.

## Props

| JavaScript prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `data` | String, Number, Boolean, Array, Object, Date, Function, Symbol | `undefined` | — | — |
| `defaultValue` | String, Number, Boolean, Array, Object, Date, Function, Symbol | `undefined` | — | — |
| `filter` | String | `undefined` | — | — |
| `filterParameters` | Object, String, Number, Boolean | `undefined` | — | — |
| `keyLabel` | String, Array | — | Yes | — |
| `replacedWithDefault` | String, Number, Boolean, Array, Object, Date, Function, Symbol | `undefined` | — | — |
| `tag` | String | `"span"` | — | — |

## Events and model bindings

This component does not declare dedicated events. See the usage notes for callback props or delegated behavior.

## Slots

See the linked example and source for forwarded content and any component-specific extension points.

[Component source](https://github.com/ilia-brykin/aloha/blob/d40c0018addf72c7fac33b40eb3146e11d493147/src/AGet/AGet.js)
