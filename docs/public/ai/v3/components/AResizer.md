# AResizer

Pointer drag handle for resizing a pane along the x or y axis.

Reference for the repository build of `aloha-vue@3.0.0-alpha.1`. See the [quick start](../quick-start.md) for package differences.

## Usage

```js
import { AResizer } from "aloha-vue";
```

[Runnable Vue example](../examples/AResizer.vue) · [Application setup](../quick-start.md)

Use the move event coordinates to size the pane. Provide keyboard controls for the same resize operation when users need it.

## Props

| JavaScript prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `direction` | String | — | Yes | — |
| `disabled` | Boolean | `false` | — | — |

## Events and model bindings

| Event | Payload |
| --- | --- |
| `mousedown` | `{ $event, clientHeight, clientWidth }` |
| `mousemove` | `{ $event, clientX, clientY, clientHeight, clientWidth }` |
| `mouseoutDocument` | `{ $event, clientHeight, clientWidth }` |
| `mouseup` | `{ $event, clientHeight, clientWidth }` |

## Slots

See the linked example and source for forwarded content and any component-specific extension points.

[Component source](https://github.com/ilia-brykin/aloha/blob/d40c0018addf72c7fac33b40eb3146e11d493147/src/AResizer/AResizer.js)
