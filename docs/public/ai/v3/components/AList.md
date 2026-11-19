# AList

Renders simple values or structured nested data as a list.

Reference for the repository build of `aloha-vue@3.0.0-alpha.1`. See the [quick start](../quick-start.md) for package differences.

## Usage

```js
import { AList } from "aloha-vue";
```

[Runnable Vue example](../examples/AList.vue) · [Application setup](../quick-start.md) · [Interactive documentation](https://ilia-brykin.github.io/aloha/list)

Set isDataSimpleArray for string values or supply keys for structured data. Choose ol when order matters.

## Props

| JavaScript prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `classItem` | String, Object, Array | `undefined` | — | CSS class for each item in the list |
| `classMain` | String, Object, Array | `undefined` | — | CSS class for each parent element |
| `data` | Array | `[]` | — | Array with the data to be rendered |
| `isDataSimpleArray` | Boolean | `false` | — | Indicates whether only a simple array without objects is used |
| `isHtml` | Boolean | `true` | — | If true, an HTML list (&lt;ul&gt;&lt;li&gt;...&lt;/li&gt;&lt;/ul&gt;) is created. Otherwise, a text list is generated (&lt;span&gt;...&lt;/span&gt;) |
| `keyChildren` | String | `undefined` | — | Key for sub-items, if data is an array of objects |
| `keyId` | String | `undefined` | — | Key for unique IDs, if data is an array of objects (for performance improvement) |
| `keyLabel` | String | `undefined` | — | Key for the label to be displayed, if data is an array of objects |
| `keyLabelCallback` | Function | `undefined` | — | Function to generate labels with two parameters (item and itemIndex), if data is an array of objects |
| `labelTag` | String | `"span"` | — | HTML tag for the labels |
| `listItemTag` | String | `"li"` | — | HTML tag for the items in the list |
| `separator` | String | `undefined` | — | Separator between items in the list. |
| `separatorHtml` | String | `undefined` | — | Separator between items in HTML format. |
| `tag` | String | `"ul"` | — | HTML tag for the entire list |

## Events and model bindings

This component does not declare dedicated events. See the usage notes for callback props or delegated behavior.

## Slots

| Slot | Slot props | Description |
| --- | --- | --- |
| `listItem` | See linked demo | Custom content for each item in the list |

[Component source](https://github.com/ilia-brykin/aloha/blob/d40c0018addf72c7fac33b40eb3146e11d493147/src/AList/AList.js)
