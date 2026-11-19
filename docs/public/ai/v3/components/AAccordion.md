# AAccordion

Expandable sections with independent or coordinated open state.

Reference for the repository build of `aloha-vue@3.0.0-alpha.1`. See the [quick start](../quick-start.md) for package differences.

## Usage

```js
import { AAccordion } from "aloha-vue";
```

[Runnable Vue example](../examples/AAccordion.vue) · [Application setup](../quick-start.md) · [Interactive documentation](https://ilia-brykin.github.io/aloha/accordion)

Give every section a stable ID and a descriptive header. Test Tab to the header, then Enter or Space to toggle it.

## Props

| JavaScript prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `alwaysOpen` | Boolean | `false` | — | — |
| `classBody` | String, Object | `""` | — | — |
| `classButton` | String, Object | `undefined` | — | — |
| `classHeader` | String, Object | `""` | — | — |
| `data` | Array | — | Yes | — |
| `disabled` | Boolean | `false` | — | — |
| `id` | String | Generated ID | — | — |
| `idsForOpenDefault` | Array | `[]` | — | — |
| `indexesForOpen` | Array | `[]` | — | — |
| `isCaret` | Boolean | `true` | — | — |
| `keyChildren` | String | `"children"` | — | — |
| `keyClassBody` | String | `"classBody"` | — | — |
| `keyClassButton` | String | `"classButton"` | — | — |
| `keyClassHeader` | String | `"classHeader"` | — | — |
| `keyContent` | String | `"content"` | — | — |
| `keyId` | String | `undefined` | — | — |
| `keyIsRender` | String | `"isRender"` | — | — |
| `keyIsRenderBodyByFirstOpen` | String | `"isRenderBodyByFirstOpen"` | — | — |
| `keyLabel` | String | `"label"` | — | — |
| `oneItemAlwaysOpen` | Boolean | `false` | — | — |
| `prevent` | Boolean | `false` | — | — |
| `readonly` | Boolean | `false` | — | — |
| `stop` | Boolean | `false` | — | — |
| `withGap` | Boolean | `false` | — | — |

## Events and model bindings

| Event | Payload |
| --- | --- |
| `toggle` | `{ idsForOpen, currentId, parentsIds, isOpen, $event, item }` |

## Slots

| Slot | Slot props | Description |
| --- | --- | --- |
| `Dynamic item content` | `See keyContent and the item data` | — |

[Component source](https://github.com/ilia-brykin/aloha/blob/d40c0018addf72c7fac33b40eb3146e11d493147/src/AAccordion/AAccordion.js)
