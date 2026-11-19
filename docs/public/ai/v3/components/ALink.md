# ALink

Navigation link with optional icons and router integration.

Reference for the repository build of `aloha-vue@3.0.0-alpha.1`. See the [quick start](../quick-start.md) for package differences.

## Usage

```js
import { ALink } from "aloha-vue";
```

[Runnable Vue example](../examples/ALink.vue) · [Application setup](../quick-start.md) · [Interactive documentation](https://ilia-brykin.github.io/aloha/link)

Use link text that names the destination. Use href for a conventional URL and to for router navigation.

## Props

| JavaScript prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `alwaysTranslate` | Boolean | `false` | — | Forces translation regardless of the `is-translate` flag. |
| `ariaLabel` | String, Number, Object | `undefined` | — | — |
| `attributes` | Object | `{}` | — | Non-prop attributes to be passed to component. |
| `class` | String, Object | `undefined` | — | An extra CSS class. |
| `classDefault` | String | `"a_element"` | — | Defines the base CSS class for the element, setting a general visual default style. |
| `classDefaultHidden` | String | `"a_element__hidden"` | — | Specifies a CSS class to hide the element, used to control the visibility of the element in different contexts. |
| `classDisabled` | String | `"disabled"` | — | Specifies the CSS class applied to the link when it is disabled. |
| `disabled` | Boolean | `undefined` | — | Indicator of disabled state. |
| `excludeRenderAttributes` | Array | `[]` | — | — |
| `extra` | Object | `undefined` | — | Extra values used in translation placeholders. |
| `extraData` | String, Number, Boolean, Array, Object, Date, Function, Symbol, Any, Any | `undefined` | — | — |
| `href` | String | `undefined` | — | Specifies the URL of the page the link goes to. |
| `html` | String, Number, Object, Array | `undefined` | — | Anchor text in HTML format. |
| `htmlScreenReader` | String, Number, Object, Array | `undefined` | — | Anchor content in HTML format for screen reader. |
| `iconAttributes` | Object | `{}` | — | Non-prop attributes to be passed to icon. |
| `iconClass` | String, Object | `undefined` | — | A CSS class for icon. |
| `iconLeft` | String, Object | `undefined` | — | Name of the icon to be shown to the left of anchor text. |
| `iconRight` | String, Object | `undefined` | — | Name of the icon to be shown to the right of anchor text. |
| `iconTag` | String | `undefined` | — | Tag of the inline HTML element which will then be used to display icon. |
| `id` | String | Generated ID | — | Specifies a unique ID for the HTML element corresponding to link. |
| `isTitleHtml` | Boolean | `undefined` | — | Specifies if the regular title or HTML tooltip are shown when a mouse hovers over component. |
| `loading` | Boolean | `false` | — | Displays spinner next to anchor text that indicates loading. |
| `loadingAlign` | String | `"right"` | — | A CSS alignment of the loading spinner. |
| `loadingClass` | String, Object | `"a_spinner_small"` | — | A CSS class for loading spinner. |
| `preventKeyboardRepeat` | Boolean | `false` | — | Prevents repeated activation while a keyboard key is held down. When enabled, repeated Enter and Space key events are ignored after the first press. |
| `safeHtml` | String, Number, Object, Array | `undefined` | — | Anchor content in HTML format to be displayed. |
| `safeHtmlScreenReader` | String, Number, Object, Array | `undefined` | — | Anchor content in HTML format for screen reader, without sanitation. |
| `stop` | Boolean | `undefined` | — | — |
| `target` | String | `undefined` | — | Specifies where the linked content will be open after clicking the link. |
| `text` | String, Number, Object, Array | `undefined` | — | Anchor text to be displayed. |
| `textAfter` | String, Number, Object | `undefined` | — | Additional character or text displayed to the right of the anchor text. |
| `textAriaHidden` | Boolean | `undefined` | — | Anchor text hidden from screen readers. |
| `textBefore` | String, Number, Object | `undefined` | — | Additional character or text displayed to the left of the anchor text. |
| `textClass` | String | `undefined` | — | Additional CSS class for anchor text. |
| `textScreenReader` | String, Number, Object, Array | `undefined` | — | Anchor text for screen reader. |
| `textTag` | String | `"span"` | — | This prop allows you to customize the HTML tag in which the text within the link is rendered. |
| `title` | String, Number, Object, Array | `undefined` | — | Additional piece(s) of information to be shown when a mouse hovers over component. |
| `titleAttributes` | Object | `{}` | — | Provides an object to set additional HTML attributes for the title of the element, allowing detailed customization of its behavior and style. |
| `titlePlacement` | String | `"top"` | — | A position relative to the link where the title will be displayed. |
| `titleZIndex` | Number, String | `"auto"` | — | Sets the "z-index" for the element's title, determining its stacking order in the context of other overlapping elements. |
| `to` | Object, String | `undefined` | — | Internal link to another component by using Vue Router. |

## Events and model bindings

| Event | Payload |
| --- | --- |
| `click` | See source or linked demo |

## Slots

| Slot | Slot props | Description |
| --- | --- | --- |
| `default` | See linked demo | Can be used to define the anchor content of the link. |
| `linkAppend` | See linked demo | Appends custom content to the anchor text. |
| `linkPrepend` | See linked demo | Prepends custom content to the anchor text. |
| `linkTitle` | See linked demo | Displays custom information when a mouse hovers over component. |

[Component source](https://github.com/ilia-brykin/aloha/blob/d40c0018addf72c7fac33b40eb3146e11d493147/src/ALink/ALink.js)
