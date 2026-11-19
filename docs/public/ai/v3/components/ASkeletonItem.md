# ASkeletonItem

Single line, shape or block used in a custom skeleton.

Reference for the repository build of `aloha-vue@3.0.0-alpha.1`. See the [quick start](../quick-start.md) for package differences.

## Usage

```js
import { ASkeletonItem } from "aloha-vue";
```

[Runnable Vue example](../examples/ASkeletonItem.vue) · [Application setup](../quick-start.md) · [Interactive documentation](https://ilia-brykin.github.io/aloha/skeleton)

Combine items in a layout that resembles the content they represent.

## Props

| JavaScript prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `height` | String, Number | `undefined` | — | Height of the shape. A number is taken as pixels. |
| `tag` | String | `"span"` | — | HTML tag of the shape. |
| `variant` | String | `"text"` | — | Shape: text, heading, circle, rect, button, input or image. |
| `width` | String, Number | `undefined` | — | Width of the shape. A number is taken as pixels. |

## Events and model bindings

This component does not declare dedicated events. See the usage notes for callback props or delegated behavior.

## Slots

| Slot | Slot props | Description |
| --- | --- | --- |
| `default` | See linked demo | The content that is shown when loading is false. |
| `template` | See linked demo | Own layout of the skeleton instead of the default one. The slot scope provides index. |

[Component source](https://github.com/ilia-brykin/aloha/blob/d40c0018addf72c7fac33b40eb3146e11d493147/src/ASkeleton/ASkeletonItem/ASkeletonItem.js)
