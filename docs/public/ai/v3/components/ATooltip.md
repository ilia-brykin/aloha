# ATooltip

Tooltip positioned relative to a slotted trigger.

Reference for the repository build of `aloha-vue@3.0.0-alpha.1`. See the [quick start](../quick-start.md) for package differences.

## Usage

```js
import { ATooltip } from "aloha-vue";
```

[Runnable Vue example](../examples/ATooltip.vue) · [Application setup](../quick-start.md)

Use the default slot for a focusable trigger and title for supplemental text. Keep essential instructions available without relying on the tooltip.

## Props

| JavaScript prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `arrowPadding` | Number, Function | `undefined` | — | — |
| `id` | String | Generated ID | — | ID for the component. |
| `isHide` | Boolean | `false` | — | — |
| `maxWidth` | Number | `undefined` | — | — |
| `minWidth` | Number | `undefined` | — | — |
| `offsetDistance` | Number | `6` | — | — |
| `offsetSkidding` | Number | `0` | — | — |
| `placement` | String | `"top"` | — | — |
| `popperContainerId` | String | `"a_tooltip_container"` | — | — |
| `showArrow` | Boolean | `true` | — | — |
| `tag` | String | `"span"` | — | — |
| `timeClose` | Number | `100` | — | — |
| `width` | Number | `undefined` | — | — |
| `withoutAriaDescribedby` | Boolean | `false` | — | — |

## Events and model bindings

This component does not declare dedicated events. See the usage notes for callback props or delegated behavior.

## Slots

| Slot | Slot props | Description |
| --- | --- | --- |
| `button` | See linked demo | Here, you can customize the content of the "Show More/Show Less" button. You have access to the values isButtonVisible and isOpen, which provide information about the button's visibility and current state. |
| `default` | — | — |
| `less` | See linked demo | This slot allows you to customize the shorter text content displayed when the user clicks "Show Less." You have access to the values isButtonVisible and isOpen, which provide information about the button's visibility and current state. |
| `more` | See linked demo | This slot allows you to customize the longer text content displayed when the user clicks "Show More." You have access to the values isButtonVisible and isOpen, which provide information about the button's visibility and current state. |
| `title` | — | — |

[Component source](https://github.com/ilia-brykin/aloha/blob/d40c0018addf72c7fac33b40eb3146e11d493147/src/ATooltip/ATooltip.js)
