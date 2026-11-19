# AIcon

Renders an icon from a registered name or inline SVG.

Reference for the repository build of `aloha-vue@3.0.0-alpha.1`. See the [quick start](../quick-start.md) for package differences.

## Usage

```js
import { AIcon } from "aloha-vue";
```

[Runnable Vue example](../examples/AIcon.vue) · [Application setup](../quick-start.md)

Icons in labelled buttons are decorative by default. For an icon that conveys meaning on its own, the public prop is spelled ariLabel.

## Props

| JavaScript prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `ariLabel` | String | `undefined` | — | — |
| `icon` | String, Object | `undefined` | — | — |
| `iconTag` | String | `"i"` | — | — |
| `isSaveHtml` | Boolean | `true` | — | — |

## Events and model bindings

This component does not declare dedicated events. See the usage notes for callback props or delegated behavior.

## Slots

See the linked example and source for forwarded content and any component-specific extension points.

[Component source](https://github.com/ilia-brykin/aloha/blob/d40c0018addf72c7fac33b40eb3146e11d493147/src/AIcon/AIcon.js)
