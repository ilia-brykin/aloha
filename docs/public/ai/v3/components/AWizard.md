# AWizard

Multi-step navigation and content panels for a guided flow.

Reference for the repository build of `aloha-vue@3.0.0-alpha.1`. See the [quick start](../quick-start.md) for package differences.

## Usage

```js
import { AWizard } from "aloha-vue";
```

[Runnable Vue example](../examples/AWizard.vue) · [Application setup](../quick-start.md) · [Interactive documentation](https://ilia-brykin.github.io/aloha/wizard)

Set a label and a stable ID per step. Match each step’s slot field to the Vue slot for its content.

## Props

| JavaScript prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `ariaLabel` | String | `"_A_WIZARD_ARIA_LABEL_"` | — | Translatable aria-label for the main element of the Wizard |
| `ariaLabelSteps` | String | `"_A_WIZARD_STEPS_ARIA_LABEL_"` | — | Translatable aria-label for the block with all steps of the Wizard |
| `backButtonAttributes` | Object | `{}` | — | Additional attributes for the button navigating to the previous step that are not explicitly defined as props. |
| `backButtonClass` | String, Array, Object | `"a_btn a_btn_secondary"` | — | One or more additional CSS-classes for the button navigating to the previous step. |
| `backButtonIconLeft` | String | `undefined` | — | Name of the icon to be shown to the left of the label for the button navigating to the previous step. |
| `backButtonIconRight` | String | `undefined` | — | Name of the icon to be shown to the right of the label for the button navigating to the previous step. |
| `backButtonText` | String | `"_A_WIZARD_PREVIOUS_"` | — | Custom label for the button navigating to the previous step. |
| `backButtonTitle` | String | `"_A_WIZARD_PREVIOUS_TITLE_"` | — | Custom title for the button navigating to the previous step. |
| `classExtra` | String, Object | `"a_wizard_class_extra"` | — | Additional CSS class for the wizard that can be used for automated tests or as an additional selector. |
| `extra` | Object | `{}` | — | Extra values used in wizard. |
| `forwardButtonAttributes` | Object | `{}` | — | Additional attributes for the button navigating to the next step that are not explicitly defined as props. |
| `forwardButtonClass` | String, Array, Object | `"a_btn a_btn_secondary"` | — | One or more additional CSS-classes for the button navigating to the next step. |
| `forwardButtonIconLeft` | String | `undefined` | — | Name of the icon to be shown to the left of the label for the button navigating to the next step. |
| `forwardButtonIconRight` | String | `undefined` | — | Name of the icon to be shown to the right of the label for the button navigating to the next step. |
| `forwardButtonText` | String | `"_A_WIZARD_NEXT_"` | — | Custom label for the button navigating to the next step. |
| `forwardButtonTitle` | String | `"_A_WIZARD_NEXT_TITLE_"` | — | Custom title for the button navigating to the next step. |
| `hasFocusJump` | Boolean | `true` | — | Is focus jump used when transitioning to a different step in a wizard. |
| `id` | String | Generated ID | — | Specifies a unique ID of the wizard. |
| `isBackButtonDisabled` | Boolean | `false` | — | Specifies whether the button navigating to the previous step should be disabled. |
| `isBackButtonHide` | Boolean | `false` | — | Specifies whether the button navigating to the previous step should be hidden. |
| `isBackFirstButtonHide` | Boolean | `false` | — | Specifies whether the button navigating to the previous step should be hidden in the first step of the wizard. |
| `isBackStepButtonDisabled` | Boolean | `false` | — | Specifies whether the transition to one of the previous steps by clicking on it in header is disabled. |
| `isButtonsLoading` | Boolean | `false` | — | Specifies whether the buttons in the navigation toolbar are in the loading state. |
| `isControlOutside` | Boolean | `false` | — | Specifies weather the external logic is for step navigation in wizard. |
| `isForwardButtonDisabled` | Boolean | `false` | — | Specifies whether the button navigating to the next step should be disabled. |
| `isForwardButtonHide` | Boolean | `false` | — | Specifies whether the button navigating to the next step should be hidden. |
| `isForwardLastButtonHide` | Boolean | `false` | — | Specifies whether the button navigating to the next step should be hidden in the last step of the wizard. |
| `isForwardStepButtonDisabled` | Boolean | `true` | — | Specifies whether the transition to one of the next steps by clicking on it in header is disabled. |
| `isMobile` | Boolean | `false` | — | Indicator whether the wizard is being displayed on a mobile device or not. |
| `isStepNumberVisible` | Boolean | `true` | — | Specifies weather the steps are sequentially enumerated in steps header. |
| `isStepsJustified` | Boolean | `true` | — | Specifies weather the alignment of the steps is justified. |
| `isToolbarBottom` | Boolean | `true` | — | Specifies weather the wizard navigation toolbar will be placed at the bottom, under the content of the currently active step. This is the default placement. |
| `isToolbarTop` | Boolean | `false` | — | Specifies weather the wizard navigation toolbar will be placed at the top, above the content of the currently active step. |
| `keyId` | String | `undefined` | — | A unique identifier key for each step. Used for performance enhancement. |
| `showOnlyActiveStepMobile` | Boolean | `true` | — | Show only the currently active step in a wizard. |
| `stepActive` | Number | `undefined` | — | Index of the currently active step in the wizard. |
| `stepIconError` | String | Built-in SVG | — | — |
| `stepIconErrorText` | String | `"_A_WIZARD_STEP_ERROR_"` | — | — |
| `stepIconWarning` | String | Built-in SVG | — | — |
| `stepIconWarningText` | String | `"_A_WIZARD_STEP_WARNING_"` | — | — |
| `steps` | Array | `[]` | — | An array of objects containing information about each step in a wizard. |
| `stepsProgressbarText` | String | `"_A_WIZARD_STEPS_PROGRESSBAR_TEXT_{{stepActive}}_{{stepsCount}}_"` | — | Text indicating the user's progress within the wizard. Variables available inside placeholder are stepActive (currently active step), stepsCount (total number of steps) stepActiveLabel (label of the currently active step). |
| `stepsVisited` | Object | `undefined` | — | Represents an object where each key corresponds to a step index, and the associated boolean value indicates whether the respective step has been visited or not. |
| `subType` | String | `undefined` | — | The subType property is used to define the style of active steps in the line type. It allows choosing between square and round shapes, with or without an additional border. |
| `toolbarBottomTeleportId` | String | `undefined` | — | Id for teleport (dynamic movement) of the navigation toolbar to the bottom of the wizard. |
| `type` | String | `"basic"` | — | Customizes visual representation of steps in header. |

## Events and model bindings

| Event | Payload |
| --- | --- |
| `changeStep` | `{ step, stepIndex, previousStepIndex }` |
| `goStepBack` | `{ step, targetStepIndex, currentStepIndex }` |
| `goStepForward` | `{ step, targetStepIndex, currentStepIndex }` |

## Slots

| Slot | Slot props | Description |
| --- | --- | --- |
| `slot` | See linked demo | A slot containing a step in wizard. |
| `slotLabel` | See linked demo | A slot containing the labels of the steps in wizard header. |
| `Step label (step.slotLabel)` | `{ isStepActive, isStepDisabled, step, stepIndex, stepNumber, stepTextId }` | — |
| `Step slot (step.slot)` | `{ step, stepIndex }` | — |
| `toolbar` | See linked demo | A slot containing navigation buttons toolbar. |

[Component source](https://github.com/ilia-brykin/aloha/blob/d40c0018addf72c7fac33b40eb3146e11d493147/src/AWizard/AWizard.js)
