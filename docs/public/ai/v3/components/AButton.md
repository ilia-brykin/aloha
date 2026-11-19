# AButton

Action button with optional icons, loading state and switch styling.

Reference for the repository build of `aloha-vue@3.0.0-alpha.1`. See the [quick start](../quick-start.md) for package differences.

## Usage

```js
import { AButton } from "aloha-vue";
```

[Runnable Vue example](../examples/AButton.vue) · [Application setup](../quick-start.md) · [Interactive documentation](https://ilia-brykin.github.io/aloha/button)

Use a visible action label or ariaLabel for an icon-only button. Use type="submit" explicitly for a submit action.

## Props

| JavaScript prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `alwaysTranslate` | Boolean | `false` | — | Forces translation regardless of the `is-translate` flag. |
| `ariaDisabled` | Boolean | `undefined` | — | Specifies whether the button should be marked as disabled. When set to true, the button is displayed as disabled, and the "aria-disabled" accessibility property is added. |
| `ariaLabel` | String, Number, Object | `undefined` | — | Specifies the ARIA label for the button. You can use a string, number, or object as the value to set the desired label. |
| `attributes` | Object | `{}` | — | Specifies additional attributes for the button. You can use an object to set the desired attributes and their values. |
| `class` | String, Object | `undefined` | — | CSS class |
| `classDefault` | String | `"a_element"` | — | Defines the base CSS class for the element, setting a general visual standard style. |
| `classDefaultHidden` | String | `"a_element__hidden"` | — | Sets a CSS class to hide the element, used to control the visibility of the element in various contexts. |
| `classDisabled` | String | `"disabled"` | — | Specifies the CSS class to be applied to the button when it is disabled. |
| `disabled` | Boolean | `undefined` | — | Specifies whether the button should be disabled. When set to true, the button is disabled. |
| `excludeRenderAttributes` | Array | `[]` | — | — |
| `extra` | Object | `undefined` | — | Extra object for translation |
| `extraData` | String, Number, Boolean, Array, Object, Date, Function, Symbol, Any, Any | `undefined` | — | Provides additional data for all component slots, enabling the transfer of custom data and information to be used within the slots for more flexible and detailed content customization. |
| `html` | String, Number, Object, Array | `undefined` | — | Specifies the HTML content to be displayed inside the button. |
| `htmlScreenReader` | String, Number, Object, Array | `undefined` | — | Specifies the HTML for the screen reader content of the button. You can use a string, number, or object as the value to set the desired HTML content. |
| `iconAttributes` | Object | `{}` | — | Specifies additional attributes for the icons. You can use an object to set the desired attributes and their values for the icons. |
| `iconClass` | String, Object | `undefined` | — | Specifies an additional CSS class for the icons. |
| `iconLeft` | String, Object | `undefined` | — | Defines the icon on the left side of the button. You can either specify an icon name as a string or define different icons for different devices as an object. |
| `iconRight` | String, Object | `undefined` | — | Defines the icon on the right side of the button. You can either specify an icon name as a string or define different icons for different devices as an object. |
| `iconTag` | String | `undefined` | — | Specifies the custom HTML tag for the icons. |
| `id` | String | Generated ID | — | Specifies a unique ID for the button. If no ID is provided, a unique ID will be automatically generated. |
| `isSwitch` | Boolean | `undefined` | — | Specifies whether the button should be used in switch mode. When set to true, the button is rendered as a button switch. |
| `isTitleHtml` | Boolean | `undefined` | — | Specifies whether the title should be interpreted as HTML. When set to true, the title is rendered as HTML. |
| `loading` | Boolean | `false` | — | Specifies whether the button is in the loading state. When set to true, the button is displayed as "loading". |
| `loadingAlign` | String | `"right"` | — | Specifies the alignment of the loading indicator. You can either specify "left" or "right" as the value. |
| `loadingClass` | String, Object | `"a_spinner_small"` | — | Specifies the CSS class for the loading state of the button. You can either provide a string with the CSS class or use an object to specify different CSS classes for different states. |
| `modelSwitch` | Boolean | `undefined` | — | The model value that controls the state of the button switch. When set to true, the button is enabled (pressed=true); otherwise, the button is disabled (pressed=false). |
| `prevent` | Boolean | `undefined` | — | Specifies whether to prevent the default behavior of event handling functions for the button. |
| `preventKeyboardRepeat` | Boolean | `false` | — | Prevents repeated activation while a keyboard key is held down. When enabled, repeated Enter and Space key events are ignored after the first press. |
| `safeHtml` | String, Number, Object, Array | `undefined` | — | Enables trust in the passed HTML string and allows its rendering in the button. |
| `safeHtmlScreenReader` | String, Number, Object, Array | `undefined` | — | Specifies the safe HTML content for the screen reader area. You can either use a string, number, or object to specify different content for different states. |
| `stop` | Boolean | `undefined` | — | Specifies whether to stop the further propagation of the event. |
| `tabindex` | Number, String | `undefined` | — | Specifies the tabindex value for the button. The tabindex can be specified as a number or a string. |
| `tag` | String | `undefined` | — | Specifies the HTML tag to use for rendering the button. |
| `text` | String, Number, Object, Array | `undefined` | — | A string or object that contains the text for different devices. Use the keys "mobile" and "desktop" to specify the corresponding text for each device. |
| `textAfter` | String, Number, Object | `undefined` | — | Defines the text to be displayed after the button text. |
| `textAriaHidden` | Boolean | `undefined` | — | Specifies whether the button text should be marked as aria-hidden="true". |
| `textBefore` | String, Number, Object | `undefined` | — | Defines the text to be displayed before the button text. |
| `textClass` | String | `undefined` | — | Specifies the CSS class to apply to the button text. |
| `textScreenReader` | String, Number, Object, Array | `undefined` | — | Specifies the text to be used for screen readers. |
| `textTag` | String | `"span"` | — | This prop allows you to customize the HTML tag that displays the text inside the button. |
| `title` | String, Number, Object, Array | `undefined` | — | A string or an array of elements to be concatenated into a single title. |
| `titleAttributes` | Object | `{}` | — | Provides an object for setting additional HTML attributes for the element's title, enabling detailed customization of its behavior and style. |
| `titlePlacement` | String | `"top"` | — | The placement of the HTML title. |
| `titleZIndex` | Number, String | `"auto"` | — | Sets the z-index for the element's title, determining its overlay order in the context of other overlapping elements. |
| `type` | String | `"button"` | — | Specifies the type of the button. Allowed values are "button", "submit", and "reset". |

## Events and model bindings

| Event | Payload |
| --- | --- |
| `click` | `arg` |

## Slots

| Slot | Slot props | Description |
| --- | --- | --- |
| `buttonAppend` | See linked demo | The slot that contains the content to be displayed after the text in the button. |
| `buttonPrepend` | See linked demo | The slot that contains the content to be displayed before the text in the button. |
| `buttonTitle` | See linked demo | The slot that contains the HTML content to be used as the title for the button. |
| `default` | See linked demo | The default slot that contains the content for the button. |

[Component source](https://github.com/ilia-brykin/aloha/blob/d40c0018addf72c7fac33b40eb3146e11d493147/src/AButton/AButton.js)
