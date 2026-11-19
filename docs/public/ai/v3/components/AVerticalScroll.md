# AVerticalScroll

Scrollable region with scroll-up and scroll-down controls.

Reference for the repository build of `aloha-vue@3.0.0-alpha.1`. See the [quick start](../quick-start.md) for package differences.

## Usage

```js
import { AVerticalScroll } from "aloha-vue";
```

[Runnable Vue example](../examples/AVerticalScroll.vue) · [Application setup](../quick-start.md)

Constrain the region’s height in the page layout and provide accessible labels when overriding the scroll controls.

## Props

| JavaScript prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `btnDownProps` | Object | `{}` | — | — |
| `btnUpProps` | Object | `{}` | — | — |
| `disabled` | Boolean | `undefined` | — | — |
| `scrollContentAttributes` | Object | `{}` | — | — |
| `scrollDistance` | Number | `100` | — | — |
| `tag` | String | `"div"` | — | — |
| `tagScrollContent` | String | `"div"` | — | — |

## Events and model bindings

This component does not declare dedicated events. See the usage notes for callback props or delegated behavior.

## Slots

| Slot | Slot props | Description |
| --- | --- | --- |
| `default` | — | — |

[Component source](https://github.com/ilia-brykin/aloha/blob/d40c0018addf72c7fac33b40eb3146e11d493147/src/AVerticalScroll/AVerticalScroll.js)
