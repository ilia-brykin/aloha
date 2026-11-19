# AModalForm

Dialog containing a schema-driven AForm.

Reference for the repository build of `aloha-vue@3.0.0-alpha.1`. See the [quick start](../quick-start.md) for package differences.

## Usage

```js
import { AModalForm } from "aloha-vue";
```

[Runnable Vue example](../examples/AModalForm.vue) · [Application setup](../quick-start.md) · [Interactive documentation](https://ilia-brykin.github.io/aloha/modal)

Pass dataForm and a close callback, and bind the form model. Name the dialog and restore focus to the trigger after close.

## Props

| JavaScript prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `alwaysTranslate` | Boolean | `false` | — | Forces translation regardless of the `is-translate` flag. |
| `backdropZIndex` | Number | `undefined` | — | If set, this prop specifies the CSS z-index for the modal window's backdrop. |
| `bodyHtml` | String | `""` | — | The HTML content of the modal window. |
| `bodyHtmlClass` | String, Array, Object | `undefined` | — | Adds a CSS class to the HTML that can be used in the modal window. body-html |
| `classColumnDefault` | String, Object | `undefined` | — | Default CSS class applied to each configured field when the item does not define its own classColumn. |
| `classColumns` | String, Object | `undefined` | — | CSS classes applied to the container that holds all fields from data. |
| `classExtra` | String, Object | `"a_modal_class_extra"` | — | Additional CSS class for the modal window, which can be used for automated tests or as an additional selector. |
| `close` | Function | — | Yes | The function that enables closing the modal. |
| `closeButtonClass` | String, Array, Object | `"a_btn a_btn_secondary"` (plugin default) | — | The class or classes of the close button. (AButton) |
| `closeButtonId` | String | `undefined` | — | The ID of the close button. |
| `closeButtonText` | String | `"_A_MODAL_BTN_CANCEL_"` (plugin default) | — | The text on the close button. |
| `closeButtonTextScreenReaderFooter` | String | `"_A_MODAL_BTN_TEXT_SCREEN_READER_CLOSE_FOOTER_"` (plugin default) | — | Adds screen reader text for the 'Close modal window' button in the footer. |
| `closeButtonTextScreenReaderHeader` | String | `"_A_MODAL_BTN_TEXT_SCREEN_READER_CLOSE_HEADER_"` (plugin default) | — | Adds screen reader text for the 'Close modal window' button in the header. |
| `dataForm` | Array | `[]` | — | — |
| `disabled` | Boolean | `false` | — | Specifies whether the modal is disabled. |
| `disabledSave` | Boolean | `false` | — | Specifies whether the save button in the modal is disabled. |
| `errors` | Object | `{}` | — | — |
| `extra` | Object | `undefined` | — | An object with parameters for translations. (ATranslation) |
| `focusStartId` | String | `undefined` | — | If an ID is set, the focus is placed on the element with this ID when the modal window opens (if use-focus-on-start is set to true). |
| `headerTag` | String | `"h2"` (plugin default) | — | The HTML tag for the modal header. |
| `headerText` | String | `undefined` | — | The text in the modal header. |
| `hideFooter` | Boolean | `false` | — | Specifies whether to hide the footer in the modal window. |
| `hideHeader` | Boolean | `false` | — | Hides the header of the modal window. |
| `id` | String | Generated ID | — | The ID of the modal. |
| `idPrefix` | String | `undefined` (plugin default) | — | — |
| `isCloseButtonHide` | Boolean | `false` (plugin default) | — | Determines whether the close button is visible. |
| `isConfirm` | Boolean | `false` | — | Specifies whether the modal requires confirmation. (Only for AConfirm) |
| `isDataFormHide` | Boolean | `false` (plugin default) | — | — |
| `isDataFormRender` | Boolean | `true` (plugin default) | — | — |
| `isFooterSticky` | Boolean | `false` (plugin default) | — | Determines if the footer is fixed to the bottom of the modal window. |
| `isModalHidden` | Boolean | `false` | — | Determines whether the modal is hidden. (Only for AConfirm) |
| `isRequired` | Boolean | `false` | — | — |
| `isSaveButtonHide` | Boolean | `false` (plugin default) | — | Determines whether the save button is visible. |
| `loading` | Boolean | `false` | — | Specifies whether the modal is in a loading state. |
| `modalClass` | String, Object | `undefined` (plugin default) | — | The class or classes of the modal. |
| `modalStyle` | String, Object | `undefined` (plugin default) | — | The style or styles of the modal window. |
| `modelValue` | Object | `undefined` | — | — |
| `save` | Function | `undefined` | — | The function that enables saving in the modal. |
| `saveButtonClass` | String, Array, Object | `"a_btn a_btn_primary"` (plugin default) | — | The class or classes of the save button. (AButton) |
| `saveButtonId` | String | `undefined` | — | The ID of the save button. |
| `saveButtonText` | String | `"_A_MODAL_BTN_SAVE_"` (plugin default) | — | The text on the save button. |
| `saveButtonTextScreenReader` | String | `"_A_MODAL_BTN_TEXT_SCREEN_READER_SAVE_"` (plugin default) | — | Adds screen reader text for the 'Save' button in the modal window. |
| `selectorClose` | String, Array | `undefined` (plugin default) | — | The focus selector to ensure that focus is not lost in the browser when the modal is closed. |
| `selectorCloseIds` | String, Array | `undefined` (plugin default) | — | The ID or IDs for focus to ensure that focus is not lost in the browser when the modal is closed. |
| `size` | String | `undefined` (plugin default) | — | The size of the modal (small, large, xl, xxl, fullscreen). |
| `stop` | Boolean | `false` | — | Adds a click event with stopPropagation to the modal window's parent element to prevent the event from propagating further. |
| `teleportSelector` | String | `"body"` (plugin default) | — | — |
| `textErrorHeader` | String | `undefined` | — | — |
| `textRequired` | String | `undefined` (plugin default) | — | — |
| `useEscape` | Boolean | `true` (plugin default) | — | Specifies whether the Escape key can close the modal. |
| `useFlatErrors` | Boolean | `true` | — | — |
| `useFlatModel` | Boolean | `true` | — | — |
| `useFocusOnStart` | Boolean | `true` | — | If set to true and no focus-start-id is set, focus is placed on the first focusable element in the modal window. |
| `useHtmlIdAsKey` | Boolean | `false` | — | — |
| `zIndex` | Number | `undefined` | — | Specifies the CSS z-index for the modal window itself. |

## Events and model bindings

| Event | Payload |
| --- | --- |
| `change` | `arg` |
| `update:modelValue` | `model` |

Vue model bindings: `v-model`.

## Slots

| Slot | Slot props | Description |
| --- | --- | --- |
| `modalBody` | See linked demo | A slot containing the main content of the modal window. |
| `modalBodyAppend` | — | — |
| `modalBodyPrepend` | — | — |
| `modalFooterAppend` | — | A slot displayed after the save and close buttons in the modal footer. |
| `modalFooterPrepend` | — | A slot displayed before the save and close buttons in the modal footer. |
| `modalHeader` | — | A slot containing the content of the modal header. |

[Component source](https://github.com/ilia-brykin/aloha/blob/d40c0018addf72c7fac33b40eb3146e11d493147/src/AModalForm/AModalForm.js)
