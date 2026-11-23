# AModalWizard (Wizard in a modal window)

This component is a combination of a modal window (AModal) and a wizard (AWizard). You can use almost all props from AModal and AWizard.

## Basic usage

*props: `steps`*

```html
<a-button
  id="wizard_basic"
  class="a_btn a_btn_primary"
  text="open"
  @click="openModalWizard"
></a-button>
<a-modal-wizard
  v-if="isModalWizardVisible"
  size="xxl"
  selector-close-ids="wizard_basic"
  header-text="Wizard"
  :close="closeModalWizard"
  :steps="wizardSteps"
>
  <template
    v-slot:step1
  >
    <a-translation
      tag="h2"
      text="_A_MODAL_WIZARD_STEP_1_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step2
  >
    <a-translation
      tag="h2"
      text="_A_MODAL_WIZARD_STEP_2_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step3
  >
    <a-translation
      tag="h2"
      text="_A_MODAL_WIZARD_STEP_3_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step4
  >
    <a-translation
      tag="h2"
      text="_A_MODAL_WIZARD_STEP_4_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
</a-modal-wizard>
```

```js
import {
  ref,
} from "vue";

import { 
  AButton, 
  AModalWizard, 
  ATranslation,
} from "aloha-vue";
    
export default {
  name: "PageModalWizardBasic",
  components: {
    AButton,
    AModalWizard,
    ATranslation,
  },
  setup() {
    const isModalWizardVisible = ref(undefined);

    const wizardSteps = [
      {
        slot: "step1",
        label: "_A_MODAL_WIZARD_STEP_1_",
        title: "_A_MODAL_WIZARD_STEP_1_",
      },
      {
        slot: "step2",
        label: "_A_MODAL_WIZARD_STEP_2_",
        title: "_A_MODAL_WIZARD_STEP_2_",
      },
      {
        slot: "step3",
        label: "_A_MODAL_WIZARD_STEP_3_",
        title: "_A_MODAL_WIZARD_STEP_3_",
      },
      {
        slot: "step4",
        label: "_A_MODAL_WIZARD_STEP_4_",
        title: "_A_MODAL_WIZARD_STEP_4_",
      },
    ];
    const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
        pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
        Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
        in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent`;

    const openModalWizard = () => {
      isModalWizardVisible.value = true;
    };

    const closeModalWizard = () => {
      isModalWizardVisible.value = false;
    };

    return {
      closeModalWizard,
      isModalWizardVisible,
      openModalWizard,
      text,
      wizardSteps,
    };
  },
};
```

## Props

| name | type | default | required | description |
| --- | --- | --- | --- | --- |
| always-translate | Boolean |  |  | Forces translation regardless of the `is-translate` flag. |
| backdrop-z-index | Number |  |  | If set, this prop specifies the CSS z-index for the modal window's backdrop. |
| class-extra | String / Object | a_modal_class_extra |  | Additional **CSS** class for the modal window, which can be used for automated tests or as an additional selector. |
| class-wizard-extra | String / Object | a_wizard_class_extra |  | Additional **CSS** class for the wizard that can be used for automated tests or as an additional selector. |
| close | Function |  | yes | The function that enables closing the modal. |
| close-button-attributes | Object | () => ({}) |  | Attributes for the modal's close button. [(AButton)](button.md) |
| close-button-class | String / Array / Object | a_btn a_btn_secondary |  | The class or classes of the close button. [(AButton)](button.md) |
| close-button-id | String |  |  | The ID of the close button. |
| close-button-text | String | _A_MODAL_BTN_CANCEL_ |  | The text on the close button. |
| close-button-text-screen-reader-footer | String | _A_MODAL_BTN_TEXT_SCREEN_READER_CLOSE_FOOTER_ |  | Adds screen reader text for the 'Close modal window' button in the footer. |
| close-button-text-screen-reader-header | String | _A_MODAL_BTN_TEXT_SCREEN_READER_CLOSE_HEADER_ |  | Adds screen reader text for the 'Close modal window' button in the header. |
| disabled | Boolean | false |  | Specifies whether the modal is disabled. |
| disabled-save | Boolean | false |  | Specifies whether the save button in the modal is disabled. |
| extra | Object |  |  | An object with parameters for translations. [(ATranslation)](translation.md) |
| focus-start-id | String |  |  | If an **ID** is set, the focus is placed on the element with this **ID** when the modal window opens (if **use-focus-on-start** is set to **true**). |
| header-tag | String | h2 |  | The HTML tag for the modal header. |
| header-text | String |  |  | The text in the modal header. |
| hide-header | Boolean |  |  | Hides the header of the modal window. |
| is-close-button-hide | Boolean | false |  | Determines whether the close button is visible. |
| is-footer-sticky | Boolean | false |  | Determines if the footer is fixed to the bottom of the modal window. |
| is-save-button-hide | Boolean | false |  | Determines whether the save button is visible. |
| loading | Boolean |  |  | Specifies whether the modal is in a loading state. |
| modal-class | String / Object |  |  | The class or classes of the modal. |
| modal-style | String / Object |  |  | The style or styles of the modal window. |
| save | Function |  |  | The function that enables saving in the modal. |
| save-button-attributes | Object | () => ({}) |  | Attributes for the save button in the modal. [(AButton)](button.md) |
| save-button-class | String / Array / Object | a_btn a_btn_primary |  | The class or classes of the save button. [(AButton)](button.md) |
| save-button-id | String |  |  | The ID of the save button. |
| save-button-text | String | _A_MODAL_BTN_SAVE_ |  | The text on the save button. |
| save-button-text-screen-reader | String | _A_MODAL_BTN_TEXT_SCREEN_READER_SAVE_ |  | Adds screen reader text for the 'Save' button in the modal window. |
| selector-close | String / Array |  |  | The focus selector to ensure that focus is not lost in the browser when the modal is closed. |
| selector-close-ids | String / Array |  |  | The ID or IDs for focus to ensure that focus is not lost in the browser when the modal is closed. |
| show-close-button-header | Boolean | true |  | Determines whether to display the close button ("x") in the header of the modal window. |
| size | String |  |  | The size of the modal (small, large, xl, xxl, fullscreen). |
| stop | Boolean |  |  | Adds a click event with stopPropagation to the modal window's parent element to prevent the event from propagating further. |
| use-escape | Boolean | true |  | Specifies whether the Escape key can close the modal. |
| use-focus-on-start | Boolean | true |  | If set to **true** and no **focus-start-id** is set, focus is placed on the first focusable element in the modal window. |
| z-index | Number |  |  | Specifies the CSS z-index for the modal window itself. |
| aria-label | String | _A_WIZARD_ARIA_LABEL_ |  | Translatable aria-label for the main element of the Wizard |
| aria-label-steps | String | _A_WIZARD_STEPS_ARIA_LABEL_ |  | Translatable aria-label for the block with all steps of the Wizard |
| back-button-attributes | Object | () => ({}) |  | Additional attributes for the button navigating to the previous step that are not explicitly defined as props. |
| back-button-class | String / Array / Object | a_btn a_btn_secondary |  | One or more additional CSS-classes for the button navigating to the previous step. |
| back-button-icon-left | String |  |  | Name of the icon to be shown to the left of the label for the button navigating to the previous step. |
| back-button-icon-right | String |  |  | Name of the icon to be shown to the right of the label for the button navigating to the previous step. |
| back-button-text | String | _A_WIZARD_PREVIOUS_ |  | Custom label for the button navigating to the previous step. |
| back-button-title | String |  |  | Custom title for the button navigating to the previous step. |
| extra | Object | () => ({}) |  | Extra values used in wizard. |
| forward-button-attributes | Object | () => ({}) |  | Additional attributes for the button navigating to the next step that are not explicitly defined as props. |
| forward-button-class | String / Array / Object | a_btn a_btn_secondary |  | One or more additional CSS-classes for the button navigating to the next step. |
| forward-button-icon-left | String |  |  | Name of the icon to be shown to the left of the label for the button navigating to the next step. |
| forward-button-icon-right | String |  |  | Name of the icon to be shown to the right of the label for the button navigating to the next step. |
| forward-button-text | String | _A_WIZARD_PREVIOUS_ |  | Custom label for the button navigating to the next step. |
| forward-button-title | String |  |  | Custom title for the button navigating to the next step. |
| has-focus-jump | Boolean | true |  | Is focus jump used when transitioning to a different step in a wizard. |
| id | String | () => uniqueId("a_modal_wizard_") |  | Specifies a unique ID of the wizard. |
| is-back-button-disabled | Boolean | false |  | Specifies whether the button navigating to the previous step should be disabled. |
| is-back-button-hide | Boolean | false |  | Specifies whether the button navigating to the previous step should be hidden. |
| is-back-first-button-hide | Boolean | false |  | Specifies whether the button navigating to the previous step should be hidden in the first step of the wizard. |
| is-back-step-button-disabled | Boolean | false |  | Specifies whether the transition to one of the previous steps by clicking on it in header is disabled. |
| is-buttons-loading | Boolean | false |  | Specifies whether the buttons in the navigation toolbar are in the loading state. |
| is-control-outside | Boolean | false |  | Specifies weather the external logic is for step navigation in wizard. |
| is-forward-button-disabled | Boolean | false |  | Specifies whether the button navigating to the next step should be disabled. |
| is-forward-button-hide | Boolean | false |  | Specifies whether the button navigating to the next step should be hidden. |
| is-forward-last-button-hide | Boolean | false |  | Specifies whether the button navigating to the next step should be hidden in the last step of the wizard. |
| is-forward-step-button-disabled | Boolean | false |  | Specifies whether the transition to one of the next steps by clicking on it in header is disabled. |
| is-mobile | Boolean | false |  | Indicator whether the wizard is being displayed on a mobile device or not. |
| is-step-number-visible | Boolean | true |  | Specifies weather the steps are sequentially enumerated in steps header. |
| is-steps-justified | Boolean | true |  | Specifies weather the alignment of the steps is justified. |
| key-id | String |  |  | A unique identifier key for each step. Used for performance enhancement. |
| scroll-to-top-on-step-change | Boolean | true |  | Determines whether the modal body scrolls to the top when the active wizard step changes. |
| show-only-active-step-mobile | Boolean | true |  | Show only the currently active step in a wizard. |
| step-active | Number |  |  | Index of the currently active step in the wizard. |
| steps-icon-error | String | AlertDanger |  | Icon displayed in case of an error in the step |
| steps-icon-error-text | String | _A_WIZARD_STEP_ERROR_ |  | Text and title for the screen reader for the error icon |
| steps-icon-warning | String | AlertWarning |  | Icon displayed in case of a warning in the step |
| steps-icon-warning-text | String | _A_WIZARD_STEP_WARNING_ |  | Text and title for the screen reader for the warning icon |
| steps | Array | () => [] |  | An array of objects containing information about each step in a wizard. |
| steps-progressbar-text | String | _A_WIZARD_STEPS_PROGRESSBAR_TEXT_{{stepActive}}_{{stepsCount}}_{{stepActiveLabel}}_ |  | Text indicating the user's progress within the wizard. Variables available inside placeholder are **stepActive** (currently active step), **stepsCount** (total number of steps) **stepActiveLabel** (label of the currently active step). |
| sub-type | String |  |  | The **subType** property is used to define the style of active steps in the **line** type. It allows choosing between square and round shapes, with or without an additional border. |
| steps-visited | Object |  |  | Represents an object where each key corresponds to a step index, and the associated boolean value indicates whether the respective step has been visited or not. |
| type | String | basic |  | Customizes visual representation of steps in header. |

## Events

| name | type | description |
| --- | --- | --- |
| change-step | Function | Emitted after the active wizard step changes. The payload contains **step**, **stepIndex**, and **previousStepIndex**. |
| go-step-back | Function | A function responsible for moving the user back to the previous step of the wizard and any additional logic relevant to transition. |
| go-step-forward | Function | A function responsible for moving the user to the next step of the wizard and any additional logic relevant to transition. |
