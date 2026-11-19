# AElement

Shared primitive for buttons, links and text.

Reference for the repository build of `aloha-vue@3.0.0-alpha.1`. See the [quick start](../quick-start.md) for package differences.

## Usage

```js
import { AElement } from "aloha-vue";
```

[Runnable Vue example](../examples/AElement.vue) · [Application setup](../quick-start.md) · [Interactive documentation](https://ilia-brykin.github.io/aloha/element)

Choose type for the intended semantic role. Use AButton for an action or ALink for navigation in ordinary consumer code.

## Props

| JavaScript prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `alwaysTranslate` | Boolean | `false` | — | Forces translation regardless of the `is-translate` flag. |
| `ariaDisabled` | Boolean | `undefined` | — | Determines whether the element is inactive. If set to true, the element will appear as inactive, and the "aria-disabled" accessibility attribute will be added. |
| `ariaLabel` | String, Number, Object | `undefined` | — | Defines the ARIA label for the element. You can use a string, number, or object as the value to set the desired label. |
| `attributes` | Object | `{}` | — | Specifies additional attributes for the element. You can use an object to define the required attributes and their values. |
| `class` | String, Object | `undefined` | — | CSS class |
| `classDefault` | String | `"a_element"` | — | Sets the default style class for the element, establishing its general visual style. |
| `classDefaultHidden` | String | `"a_element__hidden"` | — | Defines the class used to hide the element, used for managing its visibility in different contexts. |
| `classDisabled` | String | `"disabled"` | — | Specifies the CSS class applied when the element is disabled. |
| `disabled` | Boolean | `undefined` | — | Determines whether the element is disabled. If set to true, the element will be non-interactive. |
| `excludeRenderAttributes` | Array | `[]` | — | Array of attributes that should not be rendered for this component. Useful for excluding unnecessary attributes from the final DOM. |
| `extra` | Object | `undefined` | — | Additional object for translation |
| `extraData` | String, Number, Boolean, Array, Object, Date, Function, Symbol, Any, Any | `undefined` | — | Provides additional data for all slots of the component, allowing you to pass custom data and information for flexible and detailed slot customization. |
| `href` | String | `undefined` | — | Specifies the URL of the page the link goes to. |
| `html` | String, Number, Object, Array | `undefined` | — | HTML content to be rendered inside the element. |
| `htmlScreenReader` | String, Number, Object, Array | `undefined` | — | Defines HTML content for screen reader accessibility. You can use a string, number, or object to specify the desired HTML content. |
| `iconAttributes` | Object | `{}` | — | Defines additional attributes for icons. You can use an object to specify the necessary attributes and their values for icons. |
| `iconClass` | String, Object | `undefined` | — | Specifies an additional CSS class for the icons. |
| `iconLeft` | String, Object | `undefined` | — | Defines the icon displayed to the left of the element. You can specify the icon name as a string or provide different icons for different devices as an object. |
| `iconRight` | String, Object | `undefined` | — | Defines the icon displayed to the right of the element. You can specify the icon name as a string or provide different icons for different devices as an object. |
| `iconTag` | String | `undefined` | — | Defines a custom HTML tag for the icons. |
| `id` | String | Generated ID | — | Defines a unique ID for the element. If not specified, a unique ID will be automatically generated. |
| `isSwitch` | Boolean | `undefined` | — | Determines whether the element should be used as a switch. If set to true, the element will be rendered as a toggle. |
| `isTitleHtml` | Boolean | `undefined` | — | Determines whether the title should be interpreted as HTML. If set to true, the title will be rendered as HTML. |
| `loading` | Boolean | `false` | — | Determines whether the element is in a loading state. If set to true, a loading indicator will be shown. |
| `loadingAlign` | String | `"right"` | — | Defines the alignment of the loading indicator. Accepts values "left" or "right". |
| `loadingClass` | String, Object | `"a_spinner_small"` | — | Specifies the CSS class used when the element is in a loading state. Accepts a string or an object for different state styles. |
| `modelSwitch` | Boolean | `undefined` | — | The model value that controls the toggle state of the element. If set to true, the element is active (pressed=true); otherwise, it is inactive (pressed=false). |
| `prevent` | Boolean | `undefined` | — | Determines whether to prevent the default behavior of event handlers for the element (preventDefault). |
| `preventKeyboardRepeat` | Boolean | `false` | — | Prevents repeated activation while a keyboard key is held down. When enabled, repeated Enter and Space key events are ignored after the first press. |
| `safeHtml` | String, Number, Object, Array | `undefined` | — | Enables trust for the provided HTML string, allowing it to be rendered inside the element. |
| `safeHtmlScreenReader` | String, Number, Object, Array | `undefined` | — | Defines safe HTML content for screen reader regions. Accepts a string, number, or object for different states. |
| `stop` | Boolean | `undefined` | — | Determines whether to stop event propagation (stopPropagation). |
| `tabindex` | Number, String | `undefined` | — | Defines the tabindex value for the element. Can be a number or a string. |
| `tag` | String | `undefined` | — | Specifies the HTML tag to be used for rendering the element. |
| `target` | String | `undefined` | — | Specifies where the linked content will be open after clicking the link. |
| `text` | String, Number, Object, Array | `undefined` | — | String or object containing text for different devices. Use the keys "mobile" and "desktop" to set respective texts. |
| `textAfter` | String, Number, Object | `undefined` | — | Defines the text to be displayed after the main element text. |
| `textAriaHidden` | Boolean | `undefined` | — | Indicates whether the element's text should be marked as aria-hidden="true". |
| `textBefore` | String, Number, Object | `undefined` | — | Defines the text to be displayed before the main element text. |
| `textClass` | String | `undefined` | — | Specifies the CSS class to be applied to the element’s text. |
| `textScreenReader` | String, Number, Object, Array | `undefined` | — | Defines the text to be read by a screen reader. |
| `textTag` | String | `"span"` | — | This prop allows customizing the HTML tag used to wrap the text inside the element. |
| `title` | String, Number, Object, Array | `undefined` | — | String or array of elements that will be merged into a single title. |
| `titleAttributes` | Object | `{}` | — | Provides an object for configuring additional HTML attributes for the element's title, allowing more detailed control over its behavior and style. |
| `titlePlacement` | String | `"top"` | — | Positioning of the HTML title. |
| `titleZIndex` | Number, String | `"auto"` | — | Sets the z-index for the element's title to define its stacking order among overlapping elements. |
| `to` | Object, String | `undefined` | — | Internal link to another component by using Vue Router. |
| `type` | String | `"text"` | Yes | Specifies the element type. Allowed values: button, link, text, submit, and reset. |

## Events and model bindings

| Event | Payload |
| --- | --- |
| `click` | `{ props, $event }` |

## Slots

| Slot | Slot props | Description |
| --- | --- | --- |
| `buttonAppend` | `{ extraData }` | Slot containing content to be rendered after the element’s text. |
| `buttonPrepend` | `{ extraData }` | Slot containing content to be rendered before the element’s text. |
| `buttonTitle` | `{ extraData }` | Slot that contains HTML content to be used as the element’s title. |
| `default` | `{ extraData }` | Default slot that contains content for the element. |

[Component source](https://github.com/ilia-brykin/aloha/blob/d40c0018addf72c7fac33b40eb3146e11d493147/src/AElement/AElement.js)
