# ASkeleton

Skeleton placeholder that swaps for content when loading finishes.

Reference for the repository build of `aloha-vue@3.0.0-alpha.1`. See the [quick start](../quick-start.md) for package differences.

## Usage

```js
import { ASkeleton } from "aloha-vue";
```

[Runnable Vue example](../examples/ASkeleton.vue) · [Application setup](../quick-start.md) · [Interactive documentation](https://ilia-brykin.github.io/aloha/skeleton)

Choose placeholder dimensions that resemble the loaded content and keep the status announcement concise.

## Props

| JavaScript prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `animated` | Boolean | `true` (plugin default) | — | Shows a moving band over the shapes. |
| `avatar` | Boolean | `false` | — | Default layout: shows a circle on the left. |
| `count` | Number | `1` | — | How often the skeleton is repeated. |
| `extra` | Object | `undefined` | — | Values for the placeholders of the loading text. |
| `loading` | Boolean | `true` | — | Shows the skeleton. With false the default slot is shown. |
| `rows` | Number | `3` (plugin default) | — | Default layout: the number of text rows. |
| `tag` | String | `"div"` (plugin default) | — | HTML tag of the shape. |
| `text` | String | `"_A_SKELETON_LOADING_"` (plugin default) | — | Loading text for screen readers. |
| `throttle` | Number | `0` (plugin default) | — | Delay in milliseconds before the skeleton is shown. |
| `title` | Boolean | `true` | — | Default layout: shows a title. |

## Events and model bindings

This component does not declare dedicated events. See the usage notes for callback props or delegated behavior.

## Slots

| Slot | Slot props | Description |
| --- | --- | --- |
| `default` | — | The content that is shown when loading is false. |
| `template` | `{ index }` | Own layout of the skeleton instead of the default one. The slot scope provides index. |

[Component source](https://github.com/ilia-brykin/aloha/blob/d40c0018addf72c7fac33b40eb3146e11d493147/src/ASkeleton/ASkeleton.js)
