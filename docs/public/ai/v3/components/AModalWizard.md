# AModalWizard

Dialog containing a multi-step AWizard.

Reference for the repository build of `aloha-vue@3.0.0-alpha.1`. See the [quick start](../quick-start.md) for package differences.

## Usage

```js
import { AModalWizard } from "aloha-vue";
```

[Runnable Vue example](../examples/AModalWizard.vue) · [Application setup](../quick-start.md) · [Interactive documentation](https://ilia-brykin.github.io/aloha/modal-wizard)

Supply the step array and content slots and a close callback. Give both the dialog and the steps descriptive labels.

## Props

| JavaScript prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `alwaysTranslate` | Boolean | `false` | — | Forces translation regardless of the `is-translate` flag. |
| `ariaLabel` | String | `"_A_WIZARD_ARIA_LABEL_"` | — | Translatable aria-label for the main element of the Wizard |
| `ariaLabelSteps` | String | `"_A_WIZARD_STEPS_ARIA_LABEL_"` | — | Translatable aria-label for the block with all steps of the Wizard |
| `backButtonAttributes` | Object | `{}` | — | Additional attributes for the button navigating to the previous step that are not explicitly defined as props. |
| `backButtonClass` | String, Array, Object | `"a_btn a_btn_secondary"` | — | One or more additional CSS-classes for the button navigating to the previous step. |
| `backButtonIconLeft` | String | `undefined` | — | Name of the icon to be shown to the left of the label for the button navigating to the previous step. |
| `backButtonIconRight` | String | `undefined` | — | Name of the icon to be shown to the right of the label for the button navigating to the previous step. |
| `backButtonText` | String | `"_A_WIZARD_PREVIOUS_"` | — | Custom label for the button navigating to the previous step. |
| `backButtonTitle` | String | `"_A_WIZARD_PREVIOUS_TITLE_"` | — | Custom title for the button navigating to the previous step. |
| `backdropZIndex` | Number | `undefined` | — | If set, this prop specifies the CSS z-index for the modal window's backdrop. |
| `classExtra` | String, Object | `"a_modal_class_extra"` | — | Additional CSS class for the modal window, which can be used for automated tests or as an additional selector. |
| `classWizardExtra` | String, Object | `"a_wizard_class_extra"` | — | Additional CSS class for the wizard that can be used for automated tests or as an additional selector. |
| `close` | Function | — | Yes | The function that enables closing the modal. |
| `closeButtonAttributes` | Object | `{}` | — | Attributes for the modal's close button. (AButton) |
| `closeButtonClass` | String, Array, Object | `"a_btn a_btn_secondary"` (plugin default) | — | The class or classes of the close button. (AButton) |
| `closeButtonId` | String | `undefined` | — | The ID of the close button. |
| `closeButtonText` | String | `"_A_MODAL_BTN_CANCEL_"` (plugin default) | — | The text on the close button. |
| `closeButtonTextScreenReaderFooter` | String | `"_A_MODAL_BTN_TEXT_SCREEN_READER_CLOSE_FOOTER_"` (plugin default) | — | Adds screen reader text for the 'Close modal window' button in the footer. |
| `closeButtonTextScreenReaderHeader` | String | `"_A_MODAL_BTN_TEXT_SCREEN_READER_CLOSE_HEADER_"` (plugin default) | — | Adds screen reader text for the 'Close modal window' button in the header. |
| `disabled` | Boolean | `false` | — | Specifies whether the modal is disabled. |
| `disabledSave` | Boolean | `false` | — | Specifies whether the save button in the modal is disabled. |
| `extra` | Object | `undefined` | — | Extra values used in wizard. |
| `focusStartId` | String | `undefined` | — | If an ID is set, the focus is placed on the element with this ID when the modal window opens (if use-focus-on-start is set to true). |
| `forwardButtonAttributes` | Object | `{}` | — | Additional attributes for the button navigating to the next step that are not explicitly defined as props. |
| `forwardButtonClass` | String, Array, Object | `"a_btn a_btn_secondary"` | — | One or more additional CSS-classes for the button navigating to the next step. |
| `forwardButtonIconLeft` | String | `undefined` | — | Name of the icon to be shown to the left of the label for the button navigating to the next step. |
| `forwardButtonIconRight` | String | `undefined` | — | Name of the icon to be shown to the right of the label for the button navigating to the next step. |
| `forwardButtonText` | String | `"_A_WIZARD_NEXT_"` | — | Custom label for the button navigating to the next step. |
| `forwardButtonTitle` | String | `"_A_WIZARD_NEXT_TITLE_"` | — | Custom title for the button navigating to the next step. |
| `hasFocusJump` | Boolean | `true` | — | Is focus jump used when transitioning to a different step in a wizard. |
| `headerTag` | String | `"h2"` (plugin default) | — | The HTML tag for the modal header. |
| `headerText` | String | `undefined` | — | The text in the modal header. |
| `hideHeader` | Boolean | `false` | — | Hides the header of the modal window. |
| `id` | String | Generated ID | — | Specifies a unique ID of the wizard. |
| `isBackButtonDisabled` | Boolean | `false` | — | Specifies whether the button navigating to the previous step should be disabled. |
| `isBackButtonHide` | Boolean | `false` | — | Specifies whether the button navigating to the previous step should be hidden. |
| `isBackFirstButtonHide` | Boolean | `false` | — | Specifies whether the button navigating to the previous step should be hidden in the first step of the wizard. |
| `isBackStepButtonDisabled` | Boolean | `false` | — | Specifies whether the transition to one of the previous steps by clicking on it in header is disabled. |
| `isButtonsLoading` | Boolean | `false` | — | Specifies whether the buttons in the navigation toolbar are in the loading state. |
| `isCloseButtonHide` | Boolean | `false` (plugin default) | — | Determines whether the close button is visible. |
| `isControlOutside` | Boolean | `false` | — | Specifies weather the external logic is for step navigation in wizard. |
| `isFooterSticky` | Boolean | `false` (plugin default) | — | Determines if the footer is fixed to the bottom of the modal window. |
| `isForwardButtonDisabled` | Boolean | `false` | — | Specifies whether the button navigating to the next step should be disabled. |
| `isForwardButtonHide` | Boolean | `false` | — | Specifies whether the button navigating to the next step should be hidden. |
| `isForwardLastButtonHide` | Boolean | `false` | — | Specifies whether the button navigating to the next step should be hidden in the last step of the wizard. |
| `isForwardStepButtonDisabled` | Boolean | `true` | — | Specifies whether the transition to one of the next steps by clicking on it in header is disabled. |
| `isMobile` | Boolean | `false` | — | Indicator whether the wizard is being displayed on a mobile device or not. |
| `isSaveButtonHide` | Boolean | `false` (plugin default) | — | Determines whether the save button is visible. |
| `isStepNumberVisible` | Boolean | `true` | — | Specifies weather the steps are sequentially enumerated in steps header. |
| `isStepsJustified` | Boolean | `true` | — | Specifies weather the alignment of the steps is justified. |
| `keyId` | String | `undefined` | — | A unique identifier key for each step. Used for performance enhancement. |
| `loading` | Boolean | `false` | — | Specifies whether the modal is in a loading state. |
| `modalClass` | String, Object | `undefined` (plugin default) | — | The class or classes of the modal. |
| `modalStyle` | String, Object | `undefined` (plugin default) | — | The style or styles of the modal window. |
| `save` | Function | `undefined` | — | The function that enables saving in the modal. |
| `saveButtonAttributes` | Object | `{}` | — | Attributes for the save button in the modal. (AButton) |
| `saveButtonClass` | String, Array, Object | `"a_btn a_btn_primary"` (plugin default) | — | The class or classes of the save button. (AButton) |
| `saveButtonId` | String | `undefined` | — | The ID of the save button. |
| `saveButtonText` | String | `"_A_MODAL_BTN_SAVE_"` (plugin default) | — | The text on the save button. |
| `saveButtonTextScreenReader` | String | `"_A_MODAL_BTN_TEXT_SCREEN_READER_SAVE_"` (plugin default) | — | Adds screen reader text for the 'Save' button in the modal window. |
| `scrollToTopOnStepChange` | Boolean | `true` | — | Determines whether the modal body scrolls to the top when the active wizard step changes. |
| `selectorClose` | String, Array | `undefined` (plugin default) | — | The focus selector to ensure that focus is not lost in the browser when the modal is closed. |
| `selectorCloseIds` | String, Array | `undefined` (plugin default) | — | The ID or IDs for focus to ensure that focus is not lost in the browser when the modal is closed. |
| `showCloseButtonHeader` | Boolean | `true` | — | Determines whether to display the close button ("x") in the header of the modal window. |
| `showOnlyActiveStepMobile` | Boolean | `true` | — | Show only the currently active step in a wizard. |
| `size` | String | `undefined` (plugin default) | — | The size of the modal (small, large, xl, xxl, fullscreen). |
| `stepActive` | Number | `undefined` | — | Index of the currently active step in the wizard. |
| `stepIconError` | String | Built-in SVG | — | — |
| `stepIconErrorText` | String | `"_A_WIZARD_STEP_ERROR_"` | — | — |
| `stepIconWarning` | String | Built-in SVG | — | — |
| `stepIconWarningText` | String | `"_A_WIZARD_STEP_WARNING_"` | — | — |
| `steps` | Array | `[]` | — | An array of objects containing information about each step in a wizard. |
| `stepsProgressbarText` | String | `"_A_WIZARD_STEPS_PROGRESSBAR_TEXT_{{stepActive}}_{{stepsCount}}_"` | — | Text indicating the user's progress within the wizard. Variables available inside placeholder are stepActive (currently active step), stepsCount (total number of steps) stepActiveLabel (label of the currently active step). |
| `stepsVisited` | Object | `undefined` | — | Represents an object where each key corresponds to a step index, and the associated boolean value indicates whether the respective step has been visited or not. |
| `stop` | Boolean | `false` | — | Adds a click event with stopPropagation to the modal window's parent element to prevent the event from propagating further. |
| `subType` | String | `undefined` | — | The subType property is used to define the style of active steps in the line type. It allows choosing between square and round shapes, with or without an additional border. |
| `type` | String | `"basic"` | — | Customizes visual representation of steps in header. |
| `useEscape` | Boolean | `true` (plugin default) | — | Specifies whether the Escape key can close the modal. |
| `useFocusOnStart` | Boolean | `true` | — | If set to true and no focus-start-id is set, focus is placed on the first focusable element in the modal window. |
| `zIndex` | Number | `undefined` | — | Specifies the CSS z-index for the modal window itself. |

## Events and model bindings

| Event | Payload |
| --- | --- |
| `changeStep` | `arg` |
| `goStepBack` | `arg` |
| `goStepForward` | `arg` |

## Slots

| Slot | Slot props | Description |
| --- | --- | --- |
| `default` | See linked demo | Default slot for the main content of the component. |
| `modalFooterAppend` | — | — |
| `modalFooterPrepend` | — | — |
| `modalHeader` | — | — |
| `modalWizardFooterAppend` | — | — |
| `modalWizardFooterPrepend` | — | — |
| `Step label (step.slotLabel)` | `{ isStepActive, isStepDisabled, step, stepIndex, stepNumber, stepTextId }` | — |
| `Step slot (step.slot)` | `{ step, stepIndex }` | — |

[Component source](https://github.com/ilia-brykin/aloha/blob/d40c0018addf72c7fac33b40eb3146e11d493147/src/AModalWizard/AModalWizard.js)
