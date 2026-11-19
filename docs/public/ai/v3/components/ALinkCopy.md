# ALinkCopy

Link paired with a clipboard-copy action.

Reference for the repository build of `aloha-vue@3.0.0-alpha.1`. See the [quick start](../quick-start.md) for package differences.

## Usage

```js
import { ALinkCopy } from "aloha-vue";
```

[Runnable Vue example](../examples/ALinkCopy.vue) · [Application setup](../quick-start.md) · [Interactive documentation](https://ilia-brykin.github.io/aloha/link-copy)

Give the link a clear text label. Test copying in a secure context with clipboard support.

## Props

| JavaScript prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `alwaysTranslate` | Boolean | `false` | — | — |
| `buttonOptions` | Object | `{}` | — | Define properties and HTML attributes for the button using the AButton component. |
| `buttonPosition` | String | `"right"` | — | Position of the button. You can use either right or left. |
| `class` | String, Object | `undefined` | — | CSS Classes |
| `classDefault` | String | `"a_btn_group"` | — | The default CSS class for the outer grouping |
| `disabled` | Boolean | `false` | — | Disabling the component |
| `linkOptions` | Object | `{}` | — | The appearance and behavior of the link by defining all the properties and HTML attributes used within ALink. |
| `textCopy` | String | `undefined` | — | The text that should be copied in place of the default link text. |

## Events and model bindings

This component does not declare dedicated events. See the usage notes for callback props or delegated behavior.

## Slots

| Slot | Slot props | Description |
| --- | --- | --- |
| `button` | See linked demo | The text of the button. The content of this slot is forwarded as button text to the AButton component. |
| `link` | See linked demo | The text of the link. The content of this slot is forwarded as link text to the ALink component. |

[Component source](https://github.com/ilia-brykin/aloha/blob/d40c0018addf72c7fac33b40eb3146e11d493147/src/ALinkCopy/ALinkCopy.js)
