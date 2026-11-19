# AFormElementBtnClear

Reusable icon button for clearing a field.

Reference for the repository build of `aloha-vue@3.0.0-alpha.1`. See the [quick start](../quick-start.md) for package differences.

## Usage

```js
import { AFormElementBtnClear } from "aloha-vue";
```

[Runnable Vue example](../examples/AFormElementBtnClear.vue) · [Application setup](../quick-start.md)

Set textScreenReader to identify the field or value the button clears and handle the clear event.

## Props

| JavaScript prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `alwaysTranslate` | Boolean | `false` | — | — |
| `class` | String, Object | `"a_btn a_btn_transparent_dark a_btn_small"` | — | — |
| `disabled` | Boolean | `false` | — | Determines whether the component is disabled. If set to true, the component becomes inactive and the user cannot interact with it. |
| `icon` | String | Built-in SVG | — | — |
| `iconClass` | String | `"a_form_element__btn_close__icon"` | — | — |
| `tabindex` | Number | `-1` | — | — |
| `textScreenReader` | String | `"_A_FORM_ELEMENT_REMOVE_FIELD_CONTENT_"` | — | — |
| `title` | String | `"_A_FORM_ELEMENT_REMOVE_FIELD_CONTENT_"` | — | — |

## Events and model bindings

| Event | Payload |
| --- | --- |
| `clear` | `$event` |

## Slots

See the linked example and source for forwarded content and any component-specific extension points.

[Component source](https://github.com/ilia-brykin/aloha/blob/d40c0018addf72c7fac33b40eb3146e11d493147/src/ui/AFormElementBtnClear/AFormElementBtnClear.js)
