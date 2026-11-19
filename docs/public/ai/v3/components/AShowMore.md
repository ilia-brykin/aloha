# AShowMore

Collapses long HTML or slotted content to a fixed preview height.

Reference for the repository build of `aloha-vue@3.0.0-alpha.1`. See the [quick start](../quick-start.md) for package differences.

## Usage

```js
import { AShowMore } from "aloha-vue";
```

[Runnable Vue example](../examples/AShowMore.vue) · [Application setup](../quick-start.md) · [Interactive documentation](https://ilia-brykin.github.io/aloha/show-more)

Give the expand and collapse controls distinct labels and keep the preview tall enough to show useful context.

## Props

| JavaScript prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `alwaysTranslate` | Boolean | `false` | — | Forces translation regardless of the `is-translate` flag. |
| `btnAttributes` | Object | `{}` | — | Button attributes that are not explicitly defined as props. |
| `btnClass` | String, Object | `"a_btn a_btn_link a_p_0"` | — | CSS button class for showing and hiding more text. |
| `btnIconLeftLess` | String | `undefined` | — | Left side icon for 'Show less' button. |
| `btnIconLeftMore` | String | `undefined` | — | Left side icon for 'Show more' button. |
| `btnIconRightLess` | String | `undefined` | — | Right side icon for 'Show less' button. |
| `btnIconRightMore` | String | `undefined` | — | Right side icon for 'Show more' button. |
| `btnId` | String | `undefined` | — | ID for the button. |
| `btnParentClass` | String | `"a_text_center"` | — | CSS class for parent button tag. |
| `btnTextLess` | String | `"_A_SHOW_MORE_LESS_"` | — | Text for 'Show less' button. |
| `btnTextMore` | String | `"_A_SHOW_MORE_MORE_"` | — | Text for 'Show more' button. |
| `btnTitleLess` | String | `undefined` | — | Title for 'Show less' button. |
| `btnTitleMore` | String | `undefined` | — | Title for 'Show more' button. |
| `btnTitlePlacement` | String | `undefined` | — | Title placement for the button, only works when is-btn-title-html is true. |
| `disabled` | Boolean | `false` | — | Whether button is disabled |
| `height` | Number | `200` | — | The height of the HTML block, if this height is exceeded, a button will be shown. |
| `html` | String | `undefined` | — | HTML to be shown inside the component. |
| `id` | String | Generated ID | — | Specifies a unique ID for the HTML element corresponding to the component. |
| `isBtnTitleHtml` | Boolean | `false` | — | If the title in the HTML format. |
| `isOpenDefault` | Boolean | `false` | — | All text is shown by default. |
| `safeHtml` | String | `undefined` | — | Component content in safe HTML format. |
| `showLess` | Boolean | `true` | — | Is button 'Show less' visible. |
| `text` | String | `undefined` | — | Content of the component in plain text format. |
| `textLength` | Number | `undefined` | — | Text block length, in characters. |

## Events and model bindings

| Event | Payload |
| --- | --- |
| `toggle` | `{ isOpen }` |

## Slots

| Slot | Slot props | Description |
| --- | --- | --- |
| `button` | `{ isButtonVisible, isOpen }` | Content displayed inside the button. |
| `default` | `{ isButtonVisible, isOpen }` | Content to be displayed within the component. |

[Component source](https://github.com/ilia-brykin/aloha/blob/d40c0018addf72c7fac33b40eb3146e11d493147/src/AShowMore/AShowMore.js)
