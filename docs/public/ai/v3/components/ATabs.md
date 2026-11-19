# ATabs

Tab list and associated content panels.

Reference for the repository build of `aloha-vue@3.0.0-alpha.1`. See the [quick start](../quick-start.md) for package differences.

## Usage

```js
import { ATabs } from "aloha-vue";
```

[Runnable Vue example](../examples/ATabs.vue) · [Application setup](../quick-start.md) · [Interactive documentation](https://ilia-brykin.github.io/aloha/tabs)

Provide a descriptive label per tab and stable IDs. Check focus and panel activation when customizing tab contents.

## Props

| JavaScript prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `activeTabId` | String, Number | `undefined` | — | Defines the ID or index of the active tab. If key-id is not set, the tab index is used. The component tracks changes to this value to update the active tab. |
| `data` | Array | — | Yes | The array of data describing the tabs. Each element in the array is an object with properties for the tab's title, content, and other settings. |
| `disabled` | Boolean | `undefined` | — | Disables tab interaction. If set to true, tabs cannot be switched. |
| `id` | String | Generated ID | — | Unique identifier for the component |
| `isBoxed` | Boolean | `undefined` | — | Determines whether the active tab will be surrounded by a border. If set to true, a border will be displayed. |
| `isChangeOutside` | Boolean | `undefined` | — | If set to true, the tab will not change automatically when clicked. You must use the change event to update active-tab-id. |
| `isTitleHtml` | Boolean | `undefined` | — | Determines whether the tooltip should be interpreted as HTML. If set to true, the content of the tooltip will be displayed with HTML formatting. |
| `isVertical` | Boolean | `undefined` | — | Specifies whether the tabs will be arranged vertically or horizontally. If set to true, tabs will be displayed vertically. |
| `keyActive` | String | `"active"` | — | Defines the key used to activate a tab when initializing the component. If the field specified by key-active is set to true, the corresponding tab will be activated. |
| `keyContent` | String | `"content"` | — | Allows specifying the key for the data that will be used as the content for each tab. |
| `keyDisabled` | String | `undefined` | — | Key to disable individual tabs. If the tab's key value is true, the tab will be disabled. |
| `keyId` | String | `undefined` | — | Unique identifier for the tabs. If key-id is not specified, the tab index is used. |
| `keyLabel` | String | `"label"` | — | Key for specifying the field that will be used for the tab labels. |
| `keyTitle` | String | `"title"` | — | Allows specifying the key for the data that will be used for the tab titles. |
| `titlePlacement` | String | `"top"` | — | Specifies the position of the tooltip relative to the element. Various positions are supported, such as top, bottom, left, right, and others. This property only works if isTitleHtml is set to true. |

## Events and model bindings

| Event | Payload |
| --- | --- |
| `change` | `{ $event, tab, tabId, index }` |

## Slots

| Slot | Slot props | Description |
| --- | --- | --- |
| `content` | See linked demo | Static slot for customizing the tab's content display. Slot arguments include: activeTabId, contentId, index, isActive, parentId, tab, tabId. |
| `slotContent` | See linked demo | Dynamic slot for customizing the tab's content display. The slot name is specified in the data array for each tab. Slot arguments include: activeTabId, contentId, index, isActive, parentId, tab, tabId. |
| `slotTab` | See linked demo | Dynamic slot for customizing the tab's display. The slot name is specified in the data array for each tab. Slot arguments include: activeTabId, contentId, index, isActive, parentId, tab, tabId. |
| `tab` | See linked demo | Static slot for customizing the tab's display. Slot arguments include: activeTabId, contentId, index, isActive, parentId, tab, tabId. |

[Component source](https://github.com/ilia-brykin/aloha/blob/d40c0018addf72c7fac33b40eb3146e11d493147/src/ATabs/ATabs.js)
