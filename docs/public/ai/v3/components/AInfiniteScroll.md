# AInfiniteScroll

Calls a loader when a scroll sentinel becomes visible.

Reference for the repository build of `aloha-vue@3.0.0-alpha.1`. See the [quick start](../quick-start.md) for package differences.

## Usage

```js
import { AInfiniteScroll } from "aloha-vue";
```

[Runnable Vue example](../examples/AInfiniteScroll.vue) · [Application setup](../quick-start.md)

Guard against duplicate or overlapping loads and stop requesting data after the last page. Provide a manual loading action if required by the experience.

## Props

| JavaScript prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `callback` | Function | — | Yes | — |
| `disabled` | Boolean | `false` | — | — |
| `rootMargin` | String | `"300px"` | — | — |
| `sentinelTag` | String | `"span"` | — | — |
| `tag` | String | `"div"` | — | — |
| `threshold` | Number, Array | `0.5` | — | — |

## Events and model bindings

This component does not declare dedicated events. See the usage notes for callback props or delegated behavior.

## Slots

| Slot | Slot props | Description |
| --- | --- | --- |
| `default` | — | — |

[Component source](https://github.com/ilia-brykin/aloha/blob/d40c0018addf72c7fac33b40eb3146e11d493147/src/AInfiniteScroll/AInfiniteScroll.js)
