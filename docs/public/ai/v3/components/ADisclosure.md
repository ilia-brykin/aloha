# ADisclosure

Toggle between collapsed and expanded content.

Reference for the repository build of `aloha-vue@3.0.0-alpha.1`. See the [quick start](../quick-start.md) for package differences.

## Usage

```js
import { ADisclosure } from "aloha-vue";
```

[Runnable Vue example](../examples/ADisclosure.vue) · [Application setup](../quick-start.md) · [Interactive documentation](https://ilia-brykin.github.io/aloha/disclosure)

Use action labels that make the open and closed states clear and check Enter and Space on the toggle.

## Props

| JavaScript prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `alwaysTranslate` | Boolean | `false` | — | Forces translation regardless of the `is-translate` flag. |
| `btnAttributes` | Object | `{}` | — | Props or HTML attributes for the "Show More/Show Less" button (AButton) |
| `btnClass` | String, Object | `"a_btn a_btn_link a_p_0"` | — | The CSS classes for the "Show More/Show Less" button. |
| `btnIconLeftLess` | String | `undefined` | — | The icon displayed on the left side of the "Show Less" button. |
| `btnIconLeftMore` | String | `undefined` | — | The icon displayed on the left side of the "Show More" button. |
| `btnIconRightLess` | String | `undefined` | — | The icon displayed on the right side of the "Show Less" button. |
| `btnIconRightMore` | String | `undefined` | — | The icon displayed on the right side of the "Show More" button. |
| `btnId` | String | `undefined` | — | ID for the "Show More/Show Less" button. |
| `btnParentClass` | String | `"a_text_center"` | — | The CSS class for the parent element of the button. |
| `btnTextLess` | String | `"_A_DISCLOSURE_LESS_"` | — | The text for the "Show Less" button. |
| `btnTextMore` | String | `"_A_DISCLOSURE_MORE_"` | — | The text for the "Show More" button. |
| `btnTitleLess` | String | `undefined` | — | The title text for the "Show Less" button. |
| `btnTitleMore` | String | `undefined` | — | The title text for the "Show More" button. |
| `btnTitlePlacement` | String | `undefined` | — | The placement of the HTML title. |
| `disabled` | Boolean | `false` | — | A boolean value indicating whether the "Show More/Show Less" button should be disabled. |
| `htmlLess` | String | `undefined` | — | A string containing the shorter HTML-formatted text content to be displayed when the user clicks "Show Less." This content is secured using DOMPurify.sanitize() to prevent malicious code. |
| `htmlMore` | String | `undefined` | — | A string containing the longer HTML-formatted text content to be displayed when the user clicks "Show More." This content is secured using DOMPurify.sanitize() to prevent malicious code. |
| `id` | String | Generated ID | — | ID for the component. |
| `isBtnTitleHtml` | Boolean | `false` | — | A boolean value indicating whether the provided button titles should be interpreted and rendered as HTML. |
| `isOpenDefault` | Boolean | `false` | — | A boolean value indicating whether the extended text content (text-more) should be displayed by default. |
| `safeHtmlLess` | String | `undefined` | — | A string containing the shorter HTML-formatted text content to be displayed when the user clicks "Show Less." Note that this content is rendered directly and should only be used when you are confident that the HTML code is trustworthy and poses no security risks. |
| `safeHtmlMore` | String | `undefined` | — | A string containing the longer HTML-formatted text content to be displayed when the user clicks "Show More." Note that this content is rendered directly and should only be used when you are confident that the HTML code is trustworthy and poses no security risks. |
| `showLess` | Boolean | `true` | — | A boolean value indicating whether the "Show Less" button should be displayed. |
| `showMore` | Boolean | `true` | — | A boolean value indicating whether the "Show More" button should be displayed. |
| `textLess` | String | `undefined` | — | The shorter text content to be displayed when the user clicks "Show Less." |
| `textMore` | String | `undefined` | — | The longer text content to be displayed when the user clicks "Show More." |

## Events and model bindings

| Event | Payload |
| --- | --- |
| `toggle` | `{ isOpen }` |

## Slots

| Slot | Slot props | Description |
| --- | --- | --- |
| `button` | `{ isButtonVisible, isOpen }` | Here, you can customize the content of the "Show More/Show Less" button. You have access to the values isButtonVisible and isOpen, which provide information about the button's visibility and current state. |
| `less` | `{ isButtonVisible, isOpen }` | This slot allows you to customize the shorter text content displayed when the user clicks "Show Less." You have access to the values isButtonVisible and isOpen, which provide information about the button's visibility and current state. |
| `more` | `{ isButtonVisible, isOpen }` | This slot allows you to customize the longer text content displayed when the user clicks "Show More." You have access to the values isButtonVisible and isOpen, which provide information about the button's visibility and current state. |

[Component source](https://github.com/ilia-brykin/aloha/blob/d40c0018addf72c7fac33b40eb3146e11d493147/src/ADisclosure/ADisclosure.js)
