# ADropdown

An action or content popup attached to a trigger.

Reference for the repository build of `aloha-vue@3.0.0-alpha.1`. See the [quick start](../quick-start.md) for package differences.

## Usage

```js
import { ADropdown } from "aloha-vue";
```

[Runnable Vue example](../examples/ADropdown.vue) · [Application setup](../quick-start.md) · [Interactive documentation](https://ilia-brykin.github.io/aloha/dropdown)

Give the trigger a meaningful name. Use the dropdown slot for custom content and supply standard keyboard-operable controls inside it.

## Props

| JavaScript prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `actions` | Array | `[]` | — | A list of actions to choose from. |
| `alwaysTranslate` | Boolean | `false` | — | Forces translation regardless of the `is-translate` flag. |
| `buttonAttributes` | Object | `{}` | — | Additional attributes for customizing the dropdown button. The attributes are passed as an object containing the names of the desired attributes and their corresponding values. |
| `buttonClass` | String, Object | `"a_btn a_btn_secondary"` | — | Specifies an additional class for the dropdown button. |
| `buttonIconAttributes` | Object | `{}` | — | Additional attributes for the dropdown button icon. The attributes are passed as an object containing the names of the desired attributes and their corresponding values. |
| `buttonIconClass` | String | `undefined` | — | Specifies an additional class for the dropdown button icon. |
| `buttonIconLeft` | String, Object | `undefined` | — | Defines the icon on the left side of the dropdown button. The icon name is passed as a string, or different icons for different devices can be defined as an object. |
| `buttonIconRight` | String, Object | `undefined` | — | Defines the icon on the right side of the dropdown button. The icon name is passed as a string, or different icons for different devices can be defined as an object. |
| `buttonIconTag` | String | `undefined` | — | Specifies a custom HTML tag for the dropdown button icon. |
| `buttonIsTitleHtml` | Boolean | `false` | — | Determines whether the tooltip displayed on mouse hover over the link will be in plain text or HTML format. |
| `buttonLoading` | Boolean | `false` | — | Displays a loading indicator on the dropdown button. |
| `buttonLoadingAlign` | String | `"right"` | — | CSS positioning of the loading indicator on the dropdown button. |
| `buttonLoadingClass` | String, Object | `"a_spinner_small"` | — | CSS class for the dropdown button loading indicator. |
| `buttonPrevent` | Boolean | `false` | — | Determines whether the default behavior of event handlers for the dropdown button will be prevented. |
| `buttonStop` | Boolean | `false` | — | Specifies whether further event propagation for the dropdown button will be stopped. |
| `buttonTag` | String | `"button"` | — | Specifies the HTML tag to be used for the dropdown button. |
| `buttonText` | String, Number, Object, Array | `undefined` | — | A string or object containing the dropdown button text for different devices. The keys 'mobile' and 'desktop' are used to define the appropriate text for each device. |
| `buttonTextAriaHidden` | Boolean | `false` | — | Determines whether the dropdown button text will be hidden from screen readers. |
| `buttonTextClass` | String | `undefined` | — | CSS class for the dropdown button text. |
| `buttonTextScreenReader` | String, Number, Object, Array | `undefined` | — | Dropdown button text for screen readers. |
| `buttonTitle` | String, Number, Object, Array | `undefined` | — | One or more additional pieces of information that will be displayed when hovering over the dropdown button. |
| `buttonTitlePlacement` | String | `"top"` | — | The position relative to the dropdown button where the tooltip will be displayed. It only works if is-title-html is set to true. |
| `caretIcon` | String | Built-in SVG | — | Caret icon next to the dropdown button. The default is a downward arrow. |
| `class` | String, Object | `undefined` | — | Additional CSS class for the dropdown menu. |
| `disabled` | Boolean | `false` | — | Indicator of a disabled state. |
| `dropdownAttributes` | Object | `{}` | — | Additional dropdown attributes that are not defined as props. |
| `dropdownClass` | String | `undefined` | — | Additional CSS class for the dropdown menu. |
| `dropdownRenderDefault` | Boolean | `false` | — | Determines whether the dropdown menu will initially be open. The default value is false. |
| `dropdownTag` | String | `"ul"` | — | Specifies the HTML tag to be used for dropdown menu elements. The default value is ul. |
| `elementsForArrows` | String | Built-in text | — | Defines the elements that can be navigated with the arrows within the drop-down menu. |
| `extra` | Object | `undefined` | — | Additional values used for insertion into translations. |
| `floatingFlip` | Object | `{}` | — | Configuration for the flip function. It optimizes the visibility of the dropdown menu by changing its position along the x-axis to keep it in view when the preferred position is out of bounds. |
| `floatingShift` | Object | `{"use":true,"crossAxis":true,"padding":20}` | — | Configuration for the shift function. It optimizes the visibility of the dropdown menu by changing its position along the y-axis to keep it in view when the preferred position is out of bounds. |
| `hasCaret` | Boolean | `true` | — | Determines whether there is an icon next to the dropdown button. The default value is true. |
| `id` | String | Generated ID | — | Specifies a unique ID for the HTML element corresponding to the dropdown menu. |
| `inBody` | Boolean | `false` | — | Determines whether the content of the dropdown menu is generated in the body or immediately after the dropdown button. |
| `isCloseByButtonInvisibleInViewport` | Boolean | `true` | — | Determines whether the dropdown closes automatically when its trigger button leaves the visible viewport of the scrollable area. |
| `isCloseByClickInside` | Boolean | `true` | — | Determines whether the component will close when the user clicks inside it. |
| `isCloseByClickOutside` | Boolean | `true` | — | Determines whether the component will close when the user clicks outside it. |
| `isHideWithoutActionAndSlot` | Boolean | `true` | — | Determines whether the dropdown menu will exist at all if there are no selectable options or defined slots. |
| `isListWidthSameWithButton` | Boolean | `false` | — | Determines whether the width of the dropdown button is the same as the width of the selection list. |
| `keyGroup` | String, Number, Array | `undefined` | — | A field name or an array of field names used to group actions. Arrays create nested groups. |
| `keyGroupLabelCallback` | Function | `undefined` | — | Callback for customizing the displayed label of a group. |
| `lockArrowsNavigation` | Boolean | `true` | — | Determines whether arrow key navigation within the dropdown menu is allowed. |
| `lockTabNavigation` | Boolean | `true` | — | Determines whether Tab key navigation within the dropdown menu is allowed. |
| `menuWidth` | Number | `undefined` | — | Sets a fixed width for the dropdown menu in pixels. |
| `persist` | Boolean | `true` | — | Determines whether the dropdown menu will remain open after the user interacts with other elements until explicitly closed. |
| `placement` | String | `"bottom-start"` | — | The position at which the dropdown menu will open. |
| `popperContainerId` | String | `"a_tooltip_container"` | — | ID of the container element that holds the dropdown menu options. |
| `readonly` | Boolean | `false` | — | Determines whether the dropdown button is in a readonly state without hover or focus effects. |
| `sortOrderGroup` | String | `undefined` | — | Controls sorting of group labels. Possible values: asc and desc. |
| `triggers` | Array | `["click"]` | — | A list of events that trigger the opening or closing of the dropdown menu. |
| `useEscape` | Boolean | `true` | — | Determines whether the Esc key can be used to close the dropdown menu. |
| `useRem` | Boolean | `true` | — | Determines whether the menu-width value should be scaled according to the root font size before being applied. |

## Events and model bindings

| Event | Payload |
| --- | --- |
| `close` | None |
| `open` | None |

## Slots

| Slot | Slot props | Description |
| --- | --- | --- |
| `button` | — | — |
| `dropdown` | — | — |

[Component source](https://github.com/ilia-brykin/aloha/blob/d40c0018addf72c7fac33b40eb3146e11d493147/src/ADropdown/ADropdown.js)
