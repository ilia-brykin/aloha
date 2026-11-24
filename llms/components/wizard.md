# AWizard (Wizard)

A wizard is a sequential, step-by-step interface designed to guide users through complex tasks or processes by breaking them into manageable steps. It includes clear instructions and often provides users with the ability to navigate forward and backward for a efficient and straightforward user experience.

Accessibility:

- The wizard is a `role="group"` with a name, without `role="application"` and without its own tab stop, so the browse mode of screen readers works.
- The steps are native buttons in a list; the current step is text with `aria-current="step"`. Every step says its state (current, visited, upcoming) and an error or warning.
- Every step is a group named by its heading "Step 2 of 4: Address". After a change of the step the focus goes to this heading (has-focus-jump), so the screen reader reads where the user is. The heading is only for screen readers or visible with `is-step-heading-visible`; then the slot needs no own heading.
- `before-step-change` can keep the step; the focus goes to the error summary (`.a_errors`) or the first field with `aria-invalid="true"`.

## Basic usage

*props: `wizard-steps`*

```html
<a-wizard
  :steps="wizardSteps"
>
  <template
    v-slot:step1
  >
    <a-translation
      tag="h3"
      text="_A_MODAL_WIZARD_STEP_1_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step2
  >
    <a-translation
      tag="h3"
      text="_A_MODAL_WIZARD_STEP_2_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step3
  >
    <a-translation
      tag="h3"
      text="_A_MODAL_WIZARD_STEP_3_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step4
  >
    <a-translation
      tag="h3"
      text="_A_MODAL_WIZARD_STEP_4_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
</a-wizard>
```

```js
import {
  ATranslation,
  AWizard,
} from "aloha-vue";
    
export default {
  name: "PageWizardBasic",
  components: {
    ATranslation,
    AWizard,
  },
  setup() {
    const wizardSteps = [
      {
        slot: "step1",
        label: "_A_WIZARD_STEP_1_",
        title: "_A_WIZARD_STEP_1_",
      },
      {
        slot: "step2",
        label: "_A_WIZARD_STEP_2_",
        title: "_A_WIZARD_STEP_2_",
      },
      {
        slot: "step3",
        label: "_A_WIZARD_STEP_3_",
        title: "_A_WIZARD_STEP_3_",
      },
      {
        slot: "step4",
        label: "_A_WIZARD_STEP_4_",
        title: "_A_WIZARD_STEP_4_",
      },
    ];
    const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
        pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
        Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
        in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent`;

    return {
      text,
      wizardSteps,
    };
  },
};
```

## Type

Allows for the selection of the visual representation of steps in header. An overview of all the steps is shown at the top of the wizard. The following values are accepted: **basic**, **arrows**, **line** and **round**.

*props: `type`*

```html
<h3 class="a_my_3">type="basic"</h3>
<a-wizard
  :steps="wizardSteps"
  type="basic"
>
  <template
    v-slot:step1
  >
    <a-translation
      tag="h4"
      text="_A_MODAL_WIZARD_STEP_1_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step2
  >
    <a-translation
      tag="h4"
      text="_A_MODAL_WIZARD_STEP_2_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step3
  >
    <a-translation
      tag="h4"
      text="_A_MODAL_WIZARD_STEP_3_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step4
  >
    <a-translation
      tag="h4"
      text="_A_MODAL_WIZARD_STEP_4_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
</a-wizard>

<h3 class="a_my_3">type="line"</h3>
<a-wizard
  :steps="wizardSteps"
  type="line"
>
  <template
    v-slot:step1
  >
    <a-translation
      tag="h4"
      text="_A_MODAL_WIZARD_STEP_1_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step2
  >
    <a-translation
      tag="h4"
      text="_A_MODAL_WIZARD_STEP_2_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step3
  >
    <a-translation
      tag="h4"
      text="_A_MODAL_WIZARD_STEP_3_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step4
  >
    <a-translation
      tag="h4"
      text="_A_MODAL_WIZARD_STEP_4_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
</a-wizard>

<h3 class="a_my_3">type="round"</h3>
<a-wizard
  :steps="wizardSteps"
  type="round"
>
  <template
    v-slot:step1
  >
    <a-translation
      tag="h4"
      text="_A_MODAL_WIZARD_STEP_1_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step2
  >
    <a-translation
      tag="h4"
      text="_A_MODAL_WIZARD_STEP_2_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step3
  >
    <a-translation
      tag="h4"
      text="_A_MODAL_WIZARD_STEP_3_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step4
  >
    <a-translation
      tag="h4"
      text="_A_MODAL_WIZARD_STEP_4_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
</a-wizard>

<h3 class="a_my_3">type="arrows"</h3>
<a-wizard
  :steps="wizardSteps"
  type="arrows"
>
  <template
    v-slot:step1
  >
    <a-translation
      tag="h4"
      text="_A_MODAL_WIZARD_STEP_1_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step2
  >
    <a-translation
      tag="h4"
      text="_A_MODAL_WIZARD_STEP_2_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step3
  >
    <a-translation
      tag="h4"
      text="_A_MODAL_WIZARD_STEP_3_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step4
  >
    <a-translation
      tag="h4"
      text="_A_MODAL_WIZARD_STEP_4_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
</a-wizard>
```

```js
import {
  ATranslation,
  AWizard,
} from "aloha-vue";
    
export default {
  name: "PageWizardType",
  components: {
    ATranslation,
    AWizard,
  },
  setup() {
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

    return {
      text,
      wizardSteps,
    };
  },
};
```

## Subtypes for **line** type

These examples demonstrate how to use various subtypes to alter the appearance of active steps when using the **line** type.

*props: `sub-type`, `type`*

```html
<h3 class="a_my_3">type="line", sub-type="square"</h3>
<a-wizard
  :steps="wizardSteps"
  type="line"
  sub-type="square"
>
  <template
    v-slot:step1
  >
    <a-translation
      tag="h4"
      text="_A_MODAL_WIZARD_STEP_1_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step2
  >
    <a-translation
      tag="h4"
      text="_A_MODAL_WIZARD_STEP_2_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step3
  >
    <a-translation
      tag="h4"
      text="_A_MODAL_WIZARD_STEP_3_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step4
  >
    <a-translation
      tag="h4"
      text="_A_MODAL_WIZARD_STEP_4_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
</a-wizard>

<h3 class="a_my_3">type="line", sub-type="circle"</h3>
<a-wizard
  :steps="wizardSteps"
  type="line"
  sub-type="circle"
>
  <template
    v-slot:step1
  >
    <a-translation
      tag="h4"
      text="_A_MODAL_WIZARD_STEP_1_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step2
  >
    <a-translation
      tag="h4"
      text="_A_MODAL_WIZARD_STEP_2_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step3
  >
    <a-translation
      tag="h4"
      text="_A_MODAL_WIZARD_STEP_3_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step4
  >
    <a-translation
      tag="h4"
      text="_A_MODAL_WIZARD_STEP_4_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
</a-wizard>

<h3 class="a_my_3">type="line", sub-type="square-bordered"</h3>
<a-wizard
  :steps="wizardSteps"
  type="line"
  sub-type="square-bordered"
>
  <template
    v-slot:step1
  >
    <a-translation
      tag="h4"
      text="_A_MODAL_WIZARD_STEP_1_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step2
  >
    <a-translation
      tag="h4"
      text="_A_MODAL_WIZARD_STEP_2_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step3
  >
    <a-translation
      tag="h4"
      text="_A_MODAL_WIZARD_STEP_3_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step4
  >
    <a-translation
      tag="h4"
      text="_A_MODAL_WIZARD_STEP_4_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
</a-wizard>

<h3 class="a_my_3">type="line", sub-type="circle-bordered"</h3>
<a-wizard
  :steps="wizardSteps"
  type="line"
  sub-type="circle-bordered"
>
  <template
    v-slot:step1
  >
    <a-translation
      tag="h4"
      text="_A_MODAL_WIZARD_STEP_1_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step2
  >
    <a-translation
      tag="h4"
      text="_A_MODAL_WIZARD_STEP_2_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step3
  >
    <a-translation
      tag="h4"
      text="_A_MODAL_WIZARD_STEP_3_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step4
  >
    <a-translation
      tag="h4"
      text="_A_MODAL_WIZARD_STEP_4_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
</a-wizard>
```

```js
import {
  ATranslation,
  AWizard,
} from "aloha-vue";
    
export default {
  name: "PageWizardSubType",
  components: {
    ATranslation,
    AWizard,
  },
  setup() {
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

    return {
      text,
      wizardSteps,
    };
  },
};
```

## Example with icons

This example showcases different types of wizards where icons or numbers are used to represent steps.

*props: `steps.icon`*

```html
<h3 class="a_my_3">type="basic"</h3>
<a-wizard
  :steps="wizardSteps"
  type="basic"
>
  <template
    v-slot:step1
  >
    <a-translation
      tag="h4"
      text="_A_MODAL_WIZARD_STEP_1_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step2
  >
    <a-translation
      tag="h4"
      text="_A_MODAL_WIZARD_STEP_2_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step3
  >
    <a-translation
      tag="h4"
      text="_A_MODAL_WIZARD_STEP_3_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step4
  >
    <a-translation
      tag="h4"
      text="_A_MODAL_WIZARD_STEP_4_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
</a-wizard>

<h3 class="a_my_3">type="line"</h3>
<a-wizard
  :steps="wizardSteps"
  type="line"
>
  <template
    v-slot:step1
  >
    <a-translation
      tag="h4"
      text="_A_MODAL_WIZARD_STEP_1_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step2
  >
    <a-translation
      tag="h4"
      text="_A_MODAL_WIZARD_STEP_2_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step3
  >
    <a-translation
      tag="h4"
      text="_A_MODAL_WIZARD_STEP_3_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step4
  >
    <a-translation
      tag="h4"
      text="_A_MODAL_WIZARD_STEP_4_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
</a-wizard>

<h3 class="a_my_3">type="round"</h3>
<a-wizard
  :steps="wizardSteps"
  type="round"
>
  <template
    v-slot:step1
  >
    <a-translation
      tag="h4"
      text="_A_MODAL_WIZARD_STEP_1_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step2
  >
    <a-translation
      tag="h4"
      text="_A_MODAL_WIZARD_STEP_2_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step3
  >
    <a-translation
      tag="h4"
      text="_A_MODAL_WIZARD_STEP_3_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step4
  >
    <a-translation
      tag="h4"
      text="_A_MODAL_WIZARD_STEP_4_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
</a-wizard>

<h3 class="a_my_3">type="arrows"</h3>
<a-wizard
  :steps="wizardSteps"
  type="arrows"
>
  <template
    v-slot:step1
  >
    <a-translation
      tag="h4"
      text="_A_MODAL_WIZARD_STEP_1_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step2
  >
    <a-translation
      tag="h4"
      text="_A_MODAL_WIZARD_STEP_2_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step3
  >
    <a-translation
      tag="h4"
      text="_A_MODAL_WIZARD_STEP_3_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step4
  >
    <a-translation
      tag="h4"
      text="_A_MODAL_WIZARD_STEP_4_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
</a-wizard>
```

```js
import {
  ATranslation,
  AWizard,
} from "aloha-vue";
    
export default {
  name: "PageWizardIcon",
  components: {
    ATranslation,
    AWizard,
  },
  setup() {
    const wizardSteps = [
      {
        slot: "step1",
        label: "_A_WIZARD_STEP_1_",
        title: "_A_WIZARD_STEP_1_",
        icon: "Gear",
      },
      {
        slot: "step2",
        label: "_A_WIZARD_STEP_2_",
        title: "_A_WIZARD_STEP_2_",
        icon: "Boxes",
      },
      {
        slot: "step3",
        label: "_A_WIZARD_STEP_3_",
        title: "_A_WIZARD_STEP_3_",
      },
      {
        slot: "step4",
        label: "_A_WIZARD_STEP_4_",
        title: "_A_WIZARD_STEP_4_",
      },
    ];
    const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
        pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
        Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
        in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent`;

    return {
      text,
      wizardSteps,
    };
  },
};
```

## Navigation buttons

Navigation buttons allow users to move forward or backward through the steps of the wizard. They can be fully customized by using the listed props.

*props: `back-button-attributes`, `back-button-class`, `back-button-icon-left`, `back-button-icon-right`, `back-button-text`, `back-button-title`, `forward-button-attributes`, `forward-button-class`, `forward-button-icon-left`, `forward-button-icon-right`, `forward-button-text`, `forward-button-title`*

```html
<a-wizard
  :steps="wizardSteps"
  :back-button-attributes="{ stop: true }"
  back-button-class="a_btn a_btn_warning"
  back-button-icon-left="ChevronLeft"
  back-button-icon-right="ChevronLeft"
  back-button-text="_A_WIZARD_PAGE_BACK_BTN_TEXT_"
  back-button-title="_A_WIZARD_PAGE_BACK_BTN_TEXT_"
  :forward-button-attributes="{ stop: true }"
  forward-button-class="a_btn a_btn_primary"
  forward-button-icon-left="ChevronRight"
  forward-button-icon-right="ChevronRight"
  forward-button-text="_A_WIZARD_PAGE_FORWARD_BTN_TEXT_"
  forward-button-title="_A_WIZARD_PAGE_FORWARD_BTN_TEXT_"
>
  <template
    v-slot:step1
  >
    <a-translation
      tag="h3"
      text="_A_MODAL_WIZARD_STEP_1_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step2
  >
    <a-translation
      tag="h3"
      text="_A_MODAL_WIZARD_STEP_2_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step3
  >
    <a-translation
      tag="h3"
      text="_A_MODAL_WIZARD_STEP_3_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step4
  >
    <a-translation
      tag="h3"
      text="_A_MODAL_WIZARD_STEP_4_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
</a-wizard>
```

```js
import {
  ATranslation,
  AWizard,
} from "aloha-vue";
    
export default {
  name: "PageWizardButtons",
  components: {
    ATranslation,
    AWizard,
  },
  setup() {    
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

    return {
      text,
      wizardSteps,
    };
  },
};
```

## Disabling navigation buttons

An alternative way of navigating the wizard is by directly selecting the step in header, rather than relying solely on forward and backward buttons. Both navigations for moving forward or backward and steps in the overview can be disabled when necessary.

*props: `is-back-button-disabled`, `is-back-step-button-disabled`, `is-forward-button-disabled`, `is-forward-step-button-disabled`*

```html
<div
  class="a_columns a_columns_count_12"
>
  <div
    class="a_column.a_column_6 a_columns_count_12_touch a_mb_5"
  >
    <a-switch
      v-model="isBackButtonDisabled"
      label="is-back-button-disabled"
    ></a-switch>
    <a-switch
      v-model="isBackStepButtonDisabled"
      label="is-back-step-button-disabled"
    ></a-switch>
    <a-switch
      v-model="isForwardButtonDisabled"
      label="is-forward-button-disabled"
    ></a-switch>
    <a-switch
      v-model="isForwardStepButtonDisabled"
      label="is-forward-step-button-disabled"
    ></a-switch>
  </div>
</div>
<a-wizard
  :steps="wizardSteps"
  :is-back-button-disabled="isBackButtonDisabled"
  :is-back-step-button-disabled="isBackStepButtonDisabled"
  :is-forward-button-disabled="isForwardButtonDisabled"
  :is-forward-step-button-disabled="isForwardStepButtonDisabled"
>
  <template
    v-slot:step1
  >
    <a-translation
      tag="h3"
      text="_A_MODAL_WIZARD_STEP_1_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step2
  >
    <a-translation
      tag="h3"
      text="_A_MODAL_WIZARD_STEP_2_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step3
  >
    <a-translation
      tag="h3"
      text="_A_MODAL_WIZARD_STEP_3_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step4
  >
    <a-translation
      tag="h3"
      text="_A_MODAL_WIZARD_STEP_4_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
</a-wizard>
```

```js
import {
  ref,
} from "vue";

import {
  ASwitch,
  ATranslation,
  AWizard,
} from "aloha-vue";
    
export default {
  name: "PageWizardButtonsDisabled",
  components: {
    ASwitch,
    ATranslation,
    AWizard,
  },
  setup() {
    const isBackButtonDisabled = ref(true);
    const isBackStepButtonDisabled = ref(true);
    const isForwardButtonDisabled = ref(true);
    const isForwardStepButtonDisabled = ref(true);
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

    return {
      isBackButtonDisabled,
      isBackStepButtonDisabled,
      isForwardButtonDisabled,
      isForwardStepButtonDisabled,
      text,
      wizardSteps,
    };
  },
};
```

## Hiding navigation buttons

Visibility of both navigation buttons can be controlled separately, including visibility in first and last step, respectively.

*props: `is-back-button-hide`, `is-back-first-button-hide`, `is-forward-button-hide`, `is-forward-last-button-hide`*

```html
<div
  class="a_columns a_columns_count_12"
>
  <div
    class="a_column.a_column_6 a_columns_count_12_touch a_mb_5"
  >
    <a-switch
      v-model="isBackButtonHide"
      label="is-back-button-hide"
    ></a-switch>
    <a-switch
      v-model="isBackFirstButtonHide"
      label="is-back-first-button-hide"
    ></a-switch>
    <a-switch
      v-model="isForwardButtonHide"
      label="is-forward-button-hide"
    ></a-switch>
    <a-switch
      v-model="isForwardLastButtonHide"
      label="is-forward-last-button-hide"
    ></a-switch>
  </div>
</div>
<a-wizard
  :steps="wizardSteps"
  :is-back-button-hide="isBackButtonHide"
  :is-back-first-button-hide="isBackFirstButtonHide"
  :is-forward-button-hide="isForwardButtonHide"
  :is-forward-last-button-hide="isForwardLastButtonHide"
>
  <template
    v-slot:step1
  >
    <a-translation
      tag="h3"
      text="_A_MODAL_WIZARD_STEP_1_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step2
  >
    <a-translation
      tag="h3"
      text="_A_MODAL_WIZARD_STEP_2_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step3
  >
    <a-translation
      tag="h3"
      text="_A_MODAL_WIZARD_STEP_3_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step4
  >
    <a-translation
      tag="h3"
      text="_A_MODAL_WIZARD_STEP_4_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
</a-wizard>
```

```js
import {
  ref,
} from "vue";

import { 
  ASwitch,
  ATranslation,
  AWizard,
} from "aloha-vue";
    
export default {
  name: "PageWizardButtonsHide",
  components: {
    ASwitch,
    ATranslation,
    AWizard,
  },
  setup() {
    const isBackButtonHide = ref(true);
    const isBackFirstButtonHide = ref(true);
    const isForwardButtonHide = ref(false);
    const isForwardLastButtonHide = ref(true);
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

    return {
      isBackButtonHide,
      isBackFirstButtonHide,
      isForwardButtonHide,
      isForwardLastButtonHide,
      text,
      wizardSteps,
    };
  },
};
```

## Steps justification

Alignment of the steps in the wizard header can be customized to be left or justified. By justifying, the both edges of the header are aligned with both edges of wizard, and the steps are evenly distributed across the available width, regardless of the total number of steps.

*props: `is-steps-justified`*

```html
<div
  class="a_columns a_columns_count_12"
>
  <div
    class="a_column.a_column_6 a_columns_count_12_touch a_mb_5"
  >
    <a-switch
      v-model="isStepsJustified"
      label="is-steps-justified"
    ></a-switch>
  </div>
</div>
<a-wizard
  :steps="wizardSteps"
  :is-steps-justified="isStepsJustified"
>
  <template
    v-slot:step1
  >
    <a-translation
      tag="h3"
      text="_A_MODAL_WIZARD_STEP_1_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step2
  >
    <a-translation
      tag="h3"
      text="_A_MODAL_WIZARD_STEP_2_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step3
  >
    <a-translation
      tag="h3"
      text="_A_MODAL_WIZARD_STEP_3_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step4
  >
    <a-translation
      tag="h3"
      text="_A_MODAL_WIZARD_STEP_4_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
</a-wizard>
```

```js
import {
  ref,
} from "vue";

import {
  ASwitch,
  ATranslation,
  AWizard,
} from "aloha-vue";
    
export default {
  name: "PageWizardIsStepsJustified",
  components: {
    ASwitch,
    ATranslation,
    AWizard,
  },
  setup() {
    const isStepsJustified = ref(false);
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

    return {
      isStepsJustified,
      text,
      wizardSteps,
    };
  },
};
```

## Loading indicator

The **AWizard** component allows for displaying the loading indicator inside navigation buttons. This can be useful to indicate that a specific operation is running in the background and the user needs to wait for completion of the step.

*props: `is-buttons-loading`*

```html
<div
  class="a_columns a_columns_count_12"
>
  <div
    class="a_column.a_column_6 a_columns_count_12_touch a_mb_5"
  >
    <a-switch
      v-model="isButtonsLoading"
      label="is-buttons-loading"
    ></a-switch>
  </div>
</div>
<a-wizard
  :steps="wizardSteps"
  :is-buttons-loading="isButtonsLoading"
>
  <template
    v-slot:step1
  >
    <a-translation
      tag="h3"
      text="_A_MODAL_WIZARD_STEP_1_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step2
  >
    <a-translation
      tag="h3"
      text="_A_MODAL_WIZARD_STEP_2_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step3
  >
    <a-translation
      tag="h3"
      text="_A_MODAL_WIZARD_STEP_3_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step4
  >
    <a-translation
      tag="h3"
      text="_A_MODAL_WIZARD_STEP_4_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
</a-wizard>
```

```js
import {
  ref,
} from "vue";

import {
  ASwitch,
  ATranslation,
  AWizard,
} from "aloha-vue";
    
export default {
  name: "PageWizardIsButtonsLoading",
  components: {
    ASwitch,
    ATranslation,
    AWizard,
  },
  setup() {
    const isButtonsLoading = ref(false);
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

    return {
      isButtonsLoading,
      text,
      wizardSteps,
    };
  },
};
```

## Positioning of navigation buttons toolbar

The position of the toolbar containing navigation buttons can be customized by using one of the two props. Supported positions are top and bottom.

*props: `is-toolbar-bottom`, `is-toolbar-top`*

```html
<div
  class="a_columns a_columns_count_12"
>
  <div
    class="a_column.a_column_6 a_columns_count_12_touch a_mb_5"
  >
    <a-switch
      v-model="isToolbarBottom"
      label="is-toolbar-bottom"
    ></a-switch>
    <a-switch
      v-model="isToolbarTop"
      label="is-toolbar-top"
    ></a-switch>
  </div>
</div>
<a-wizard
  :steps="wizardSteps"
  :is-toolbar-bottom="isToolbarBottom"
  :is-toolbar-top="isToolbarTop"
>
  <template
    v-slot:step1
  >
    <a-translation
      tag="h3"
      text="_A_MODAL_WIZARD_STEP_1_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step2
  >
    <a-translation
      tag="h3"
      text="_A_MODAL_WIZARD_STEP_2_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step3
  >
    <a-translation
      tag="h3"
      text="_A_MODAL_WIZARD_STEP_3_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step4
  >
    <a-translation
      tag="h3"
      text="_A_MODAL_WIZARD_STEP_4_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
</a-wizard>
```

```js
import {
  ref,
} from "vue";

import {
  ASwitch,
  ATranslation,
  AWizard,
} from "aloha-vue";
    
export default {
  name: "PageWizardIsToolbar",
  components: {
    ASwitch,
    ATranslation,
    AWizard,
  },
  setup() {
    const isToolbarBottom = ref(true);
    const isToolbarTop = ref(true);
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

    return {
      isToolbarBottom,
      isToolbarTop,
      text,
      wizardSteps,
    };
  },
};
```

## Enumeration of the steps

Numbers can be sequentially appended to the steps for the purpose of providing clarity in the order of execution.

*props: `is-step-number-visible`*

```html
<div
  class="a_columns a_columns_count_12"
>
  <div
    class="a_column.a_column_6 a_columns_count_12_touch a_mb_5"
  >
    <a-switch
      v-model="isStepNumberVisible"
      label="is-step-number-visible"
    ></a-switch>
  </div>
</div>
<a-wizard
  :steps="wizardSteps"
  :is-step-number-visible="isStepNumberVisible"
>
  <template
    v-slot:step1
  >
    <a-translation
      tag="h3"
      text="_A_MODAL_WIZARD_STEP_1_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step2
  >
    <a-translation
      tag="h3"
      text="_A_MODAL_WIZARD_STEP_2_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step3
  >
    <a-translation
      tag="h3"
      text="_A_MODAL_WIZARD_STEP_3_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step4
  >
    <a-translation
      tag="h3"
      text="_A_MODAL_WIZARD_STEP_4_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
</a-wizard>
```

```js
import {
  ref,
} from "vue";

import { 
  ASwitch,
  ATranslation,
  AWizard,
} from "aloha-vue";
    
export default {
  name: "PageWizardIsStepNumberVisible",
  components: {
    ASwitch,
    ATranslation,
    AWizard,
  },
  setup() {
    const isStepNumberVisible = ref(false);
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

    return {
      isStepNumberVisible,
      text,
      wizardSteps,
    };
  },
};
```

## Active step

An integer corresponding to the index (starting at 0) can be provided to set the initially active step in the wizard.

*props: `step-active`*

```html
<a-wizard
  :steps="wizardSteps"
  :step-active="2"
>
  <template
    v-slot:step1
  >
    <a-translation
      tag="h3"
      text="_A_MODAL_WIZARD_STEP_1_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step2
  >
    <a-translation
      tag="h3"
      text="_A_MODAL_WIZARD_STEP_2_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step3
  >
    <a-translation
      tag="h3"
      text="_A_MODAL_WIZARD_STEP_3_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step4
  >
    <a-translation
      tag="h3"
      text="_A_MODAL_WIZARD_STEP_4_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
</a-wizard>
```

```js
import {
  ATranslation,
  AWizard,
} from "aloha-vue";
    
export default {
  name: "PageWizardStepActive",
  components: {
    ATranslation,
    AWizard,
  },
  setup() {    
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

    return {
      text,
      wizardSteps,
    };
  },
};
```

## Step error

Each step of the wizard can contain boolean property "error". For value true, the corresponding step will be highlighted as erroneous.

*props: `steps.error`*

```html
<div
  class="a_columns a_columns_count_12"
>
  <div
    class="a_column.a_column_6 a_columns_count_12_touch a_mb_5"
  >
    <a-select
      v-model="modelType"
      label="_A_WIZARD_LABEL_TYPE_"
      key-id="value"
      key-label="label"
      :data="types"
      :deselectable="false"
      :translate-data="true"
    ></a-select>
    <a-switch
      v-model="wizardSteps[0].error"
      label="_A_WIZARD_STEP_1_"
    ></a-switch>
    <a-switch
      v-model="wizardSteps[1].error"
      label="_A_WIZARD_STEP_2_"
    ></a-switch>
    <a-switch
      v-model="wizardSteps[2].error"
      label="_A_WIZARD_STEP_3_"
    ></a-switch>
    <a-switch
      v-model="wizardSteps[3].error"
      label="_A_WIZARD_STEP_4_"
    ></a-switch>
  </div>
</div>
<a-wizard
  :steps="wizardSteps"
  :type="modelType"
>
  <template
    v-slot:step1
  >
    <a-translation
      tag="h3"
      text="_A_MODAL_WIZARD_STEP_1_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step2
  >
    <a-translation
      tag="h3"
      text="_A_MODAL_WIZARD_STEP_2_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step3
  >
    <a-translation
      tag="h3"
      text="_A_MODAL_WIZARD_STEP_3_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step4
  >
    <a-translation
      tag="h3"
      text="_A_MODAL_WIZARD_STEP_4_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
</a-wizard>
```

```js
import {
  ref,
} from "vue";

import {
  ASelect,
  ASwitch,
  ATranslation,
  AWizard,
} from "aloha-vue";
    
export default {
  name: "PageWizardStepsErrors",
  components: {
    ASelect,
    ASwitch,
    ATranslation,
    AWizard,
  },
  setup() {
    const modelType = ref("basic");
    const types = [
      {
        label: "_A_WIZARD_TYPE_BASIC_",
        value: "basic",
      },
      {
        label: "_A_WIZARD_TYPE_ARROWS_",
        value: "arrows",
      },
      {
        label: "_A_WIZARD_TYPE_LINE_",
        value: "line",
      },
      {
        label: "_A_WIZARD_TYPE_ROUND_",
        value: "round",
      },
    ];
    const wizardSteps = ref([
      {
        slot: "step1",
        label: "_A_WIZARD_STEP_1_",
        title: "_A_WIZARD_STEP_1_",
        error: false,
      },
      {
        slot: "step2",
        label: "_A_WIZARD_STEP_2_",
        title: "_A_WIZARD_STEP_2_",
        error: false,
      },
      {
        slot: "step3",
        label: "_A_WIZARD_STEP_3_",
        title: "_A_WIZARD_STEP_3_",
        error: true,
      },
      {
        slot: "step4",
        label: "_A_WIZARD_STEP_4_",
        title: "_A_WIZARD_STEP_4_",
        error: false,
      },
    ]);
    const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
        pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
        Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
        in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent`;

    return {
      modelType,
      text,
      types,
      wizardSteps,
    };
  },
};
```

## Step warning

Each step of the wizard can contain boolean property "warning". For value true, the corresponding step will be highlighted as questionable. This is useful when suggesting that something in a step might be deviating from the norm, without necessarily indicating an error.

*props: `steps.warning`*

```html
<div
  class="a_columns a_columns_count_12"
>
  <div
    class="a_column.a_column_6 a_columns_count_12_touch a_mb_5"
  >
    <a-select
      v-model="modelType"
      label="_A_WIZARD_LABEL_TYPE_"
      key-id="value"
      key-label="label"
      :data="types"
      :deselectable="false"
      :translate-data="true"
    ></a-select>
    <a-switch
      v-model="wizardSteps[0].warning"
      label="_A_WIZARD_STEP_1_"
    ></a-switch>
    <a-switch
      v-model="wizardSteps[1].warning"
      label="_A_WIZARD_STEP_2_"
    ></a-switch>
    <a-switch
      v-model="wizardSteps[2].warning"
      label="_A_WIZARD_STEP_3_"
    ></a-switch>
    <a-switch
      v-model="wizardSteps[3].warning"
      label="_A_WIZARD_STEP_4_"
    ></a-switch>
  </div>
</div>
<a-wizard
  :steps="wizardSteps"
  :type="modelType"
>
  <template
    v-slot:step1
  >
    <a-translation
      tag="h3"
      text="_A_MODAL_WIZARD_STEP_1_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step2
  >
    <a-translation
      tag="h3"
      text="_A_MODAL_WIZARD_STEP_2_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step3
  >
    <a-translation
      tag="h3"
      text="_A_MODAL_WIZARD_STEP_3_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step4
  >
    <a-translation
      tag="h3"
      text="_A_MODAL_WIZARD_STEP_4_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
</a-wizard>
```

```js
import {
  ref,
} from "vue";

import { 
  ASelect,
  ASwitch,
  ATranslation,
  AWizard,
} from "aloha-vue";
    
export default {
  name: "PageWizardStepsWarnings",
  components: {
    ASelect,
    ASwitch,
    ATranslation,
    AWizard,
  },
  setup() {
    const modelType = ref("basic");
    const types = [
      {
        label: "_A_WIZARD_TYPE_BASIC_",
        value: "basic",
      },
      {
        label: "_A_WIZARD_TYPE_ARROWS_",
        value: "arrows",
      },
      {
        label: "_A_WIZARD_TYPE_LINE_",
        value: "line",
      },
      {
        label: "_A_WIZARD_TYPE_ROUND_",
        value: "round",
      },
    ];
    const wizardSteps = ref([
      {
        slot: "step1",
        label: "_A_WIZARD_STEP_1_",
        title: "_A_WIZARD_STEP_1_",
        warning: false,
      },
      {
        slot: "step2",
        label: "_A_WIZARD_STEP_2_",
        title: "_A_WIZARD_STEP_2_",
        warning: false,
      },
      {
        slot: "step3",
        label: "_A_WIZARD_STEP_3_",
        title: "_A_WIZARD_STEP_3_",
        warning: true,
      },
      {
        slot: "step4",
        label: "_A_WIZARD_STEP_4_",
        title: "_A_WIZARD_STEP_4_",
        warning: false,
      },
    ]);
    const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
        pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
        Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
        in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent`;

    return {
      modelType,
      text,
      types,
      wizardSteps,
    };
  },
};
```

## Unique Identifier Key

A unique identifier key for each step. Used for performance enhancement. This is the key for each of the objects in the **steps** prop. The value of this key will be found in the object and used as the **key** in the loop. If **key-id** is not specified, the **index** will be used in the loop.

*props: `key-id`*

```html
<a-wizard
  :steps="wizardSteps"
  key-id="id"
>
  <template
    v-slot:step1
  >
    <a-translation
      tag="h3"
      text="_A_MODAL_WIZARD_STEP_1_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step2
  >
    <a-translation
      tag="h3"
      text="_A_MODAL_WIZARD_STEP_2_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step3
  >
    <a-translation
      tag="h3"
      text="_A_MODAL_WIZARD_STEP_3_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step4
  >
    <a-translation
      tag="h3"
      text="_A_MODAL_WIZARD_STEP_4_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
</a-wizard>
```

```js
import {
  ATranslation,
  AWizard,
} from "aloha-vue";
    
export default {
  name: "PageWizardKeyId",
  components: {
    ATranslation,
    AWizard,
  },
  setup() {    
    const wizardSteps = [
      {
        id: "0",
        slot: "step1",
        label: "_A_WIZARD_STEP_1_",
        title: "_A_WIZARD_STEP_1_",
      },
      {
        id: "1",
        slot: "step2",
        label: "_A_WIZARD_STEP_2_",
        title: "_A_WIZARD_STEP_2_",
      },
      {
        id: "2",
        slot: "step3",
        label: "_A_WIZARD_STEP_3_",
        title: "_A_WIZARD_STEP_3_",
      },
      {
        id: "3",
        slot: "step4",
        label: "_A_WIZARD_STEP_4_",
        title: "_A_WIZARD_STEP_4_",
      },
    ];
    const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
        pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
        Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
        in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent`;

    return {
      text,
      wizardSteps,
    };
  },
};
```

## Focus jump

When transitioning to different step from the current one in a wizard, a focus jump can be used to direct the user to the relevant content, in contrast to the keeping focus on the navigation button that was interacted with.

*props: `has-focus-jump`*

```html
<div
  class="a_columns a_columns_count_12"
>
  <div
    class="a_column.a_column_6 a_columns_count_12_touch a_mb_5"
  >
    <a-switch
      v-model="hasFocusJump"
      label="has-focus-jump"
    ></a-switch>
  </div>
</div>
<a-wizard
  :steps="wizardSteps"
  :has-focus-jump="hasFocusJump"
>
  <template
    v-slot:step1
  >
    <a-translation
      tag="h3"
      text="_A_MODAL_WIZARD_STEP_1_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step2
  >
    <a-translation
      tag="h3"
      text="_A_MODAL_WIZARD_STEP_2_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step3
  >
    <a-translation
      tag="h3"
      text="_A_MODAL_WIZARD_STEP_3_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step4
  >
    <a-translation
      tag="h3"
      text="_A_MODAL_WIZARD_STEP_4_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
</a-wizard>
```

```js
import {
  ref,
} from "vue";

import { 
  ASwitch,
  ATranslation,
  AWizard,
} from "aloha-vue";
    
export default {
  name: "PageWizardHasFocusJump",
  components: {
    ASwitch,
    ATranslation,
    AWizard,
  },
  setup() {
    const hasFocusJump = ref(false);
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

    return {
      hasFocusJump,
      text,
      wizardSteps,
    };
  },
};
```

## Check before the next step and finish

`before-step-change` keeps the first step while the name is empty, the focus goes to the field with the error. `is-step-heading-visible` shows the heading of the step, `finish-button-text` adds the finish button on the last step.

```html
<a-wizard
  :steps="wizardSteps"
  :before-step-change="beforeStepChange"
  is-step-heading-visible
  finish-button-text="_A_WIZARD_FINISH_"
  @finish="onFinish"
>
  <template v-slot:step1>
    <a-input
      v-model="name"
      label="_A_WIZARD_EXAMPLE_NAME_"
      required
      :errors="errors"
    />
  </template>
  <template v-slot:step2>
    <a-translation
      tag="p"
      text="_A_WIZARD_EXAMPLE_CHECK_"
    />
  </template>
</a-wizard>
<a-translation
  v-if="isFinished"
  tag="p"
  role="status"
  text="_A_WIZARD_EXAMPLE_FINISHED_"
/>
```

```js
import {
  ref,
} from "vue";

import {
  AInput,
  ATranslation,
  AWizard,
} from "aloha-vue";

export default {
  components: {
    AInput,
    ATranslation,
    AWizard,
  },
  setup() {
    const wizardSteps = [
      {
        slot: "step1",
        label: "_A_WIZARD_EXAMPLE_STEP_PERSON_",
      },
      {
        slot: "step2",
        label: "_A_WIZARD_EXAMPLE_STEP_CHECK_",
      },
    ];
    const name = ref("");
    const errors = ref([]);
    const isFinished = ref(false);

    // false keeps the step, the focus goes to the invalid field; going back is always allowed
    const beforeStepChange = ({ direction, from }) => {
      if (direction === "back" || from !== 0) {
        return true;
      }
      errors.value = name.value.trim() ? [] : ["_A_WIZARD_EXAMPLE_NAME_REQUIRED_"];
      return errors.value.length === 0;
    };

    const onFinish = () => {
      isFinished.value = true;
    };

    return {
      beforeStepChange,
      errors,
      isFinished,
      name,
      onFinish,
      wizardSteps,
    };
  },
};
```

## External step navigation

External step navigation involves the dynamic control of multi-step process of a wizard using external variables or custom logic, enabling customized progression through the steps based on different needs and factors.

*props: `is-control-outside`, `step-active`, `steps-visited`; emits: `go-step-back`, `go-step-forward`*

```html
<a-wizard
  :steps="wizardSteps"
  :is-control-outside="true"
  :step-active="stepActive"
  :steps-visited="stepsVisited"
  @go-step-back="goStepBack"
  @go-step-forward="goStepForward"
>
  <template
    v-slot:step1
  >
    <a-translation
      tag="h3"
      text="_A_MODAL_WIZARD_STEP_1_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step2
  >
    <a-translation
      tag="h3"
      text="_A_MODAL_WIZARD_STEP_2_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step3
  >
    <a-translation
      tag="h3"
      text="_A_MODAL_WIZARD_STEP_3_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step4
  >
    <a-translation
      tag="h3"
      text="_A_MODAL_WIZARD_STEP_4_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
</a-wizard>
```

```js
import {
  ATranslation,
  AWizard,
} from "aloha-vue";
    
export default {
  name: "PageWizardIsControlOutside",
  components: {
    ATranslation,
    AWizard,
  },
  setup() {    
    const stepActive = ref(0);
    const stepsVisited = ref({
      0: true,
    });
    const wizardSteps = [
      {
        slot: "step1",
        label: "_A_WIZARD_STEP_1_",
        title: "_A_WIZARD_STEP_1_",
      },
      {
        slot: "step2",
        label: "_A_WIZARD_STEP_2_",
        title: "_A_WIZARD_STEP_2_",
      },
      {
        slot: "step3",
        label: "_A_WIZARD_STEP_3_",
        title: "_A_WIZARD_STEP_3_",
      },
      {
        slot: "step4",
        label: "_A_WIZARD_STEP_4_",
        title: "_A_WIZARD_STEP_4_",
      },
    ];
    const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
        pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
        Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
        in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent`;

    const goStepBack = ({ targetStepIndex, currentStepIndex, step }) => {
      console.log("currentStepIndex", currentStepIndex);
      console.log("step", step);
      stepActive.value = targetStepIndex;
      stepsVisited.value[targetStepIndex] = true;
    };

    const goStepForward = ({ targetStepIndex, currentStepIndex, step }) => {
      console.log("currentStepIndex", currentStepIndex);
      console.log("step", step);
      stepActive.value = targetStepIndex;
      stepsVisited.value[targetStepIndex] = true;
    };

    return {
      goStepBack,
      goStepForward,
      stepActive,
      stepsVisited,
      text,
      wizardSteps,
    };
  },
};
```

## Custom navigation control toolbar

A slot **toolbar** can be used to customize toolbar with navigations control. For example, an additional button can be provided.

*slots: `toolbar`*

```html
<a-wizard
  :steps="wizardSteps"
>
  <template
    v-slot:toolbar
  >
    <a-button
      class="a_btn a_btn_primary"
      text="aloha"
    ></a-button>
  </template>
  <template
    v-slot:step1
  >
    <a-translation
      tag="h3"
      text="_A_MODAL_WIZARD_STEP_1_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step2
  >
    <a-translation
      tag="h3"
      text="_A_MODAL_WIZARD_STEP_2_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step3
  >
    <a-translation
      tag="h3"
      text="_A_MODAL_WIZARD_STEP_3_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step4
  >
    <a-translation
      tag="h3"
      text="_A_MODAL_WIZARD_STEP_4_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
</a-wizard>
```

```js
import {
  AButton,
  ATranslation,
  AWizard,
} from "aloha-vue";
    
export default {
  name: "PageWizardSlotToolbar",
  components: {
    AButton,
    ATranslation,
    AWizard,
  },
  setup() {    
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

    return {
      text,
      wizardSteps,
    };
  },
};
```

## Custom labels in steps header

A slot **stepLabel** can be used to customize label for each of the steps in wizard header.

*props: `steps.slotLabel`; slots: `slotLabel`*

```html
<a-wizard
  :steps="wizardSteps"
>
  <template
    v-slot:stepLabel="{ step, stepNumber, stepIndex, isStepDisabled, isStepActive }"
  >
    <a-translation
      tag="span"
      :text="step.label"
    ></a-translation>
  </template>
  <template
    v-slot:step1
  >
    <a-translation
      tag="h3"
      text="_A_MODAL_WIZARD_STEP_1_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step2
  >
    <a-translation
      tag="h3"
      text="_A_MODAL_WIZARD_STEP_2_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step3
  >
    <a-translation
      tag="h3"
      text="_A_MODAL_WIZARD_STEP_3_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step4
  >
    <a-translation
      tag="h3"
      text="_A_MODAL_WIZARD_STEP_4_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
</a-wizard>
```

```js
import {
  ATranslation,
  AWizard,
} from "aloha-vue";
    
export default {
  name: "PageWizardSlotLabel",
  components: {
    ATranslation,
    AWizard,
  },
  setup() {    
    const wizardSteps = [
      {
        slot: "step1",
        slotLabel: "stepLabel",
        label: "_A_WIZARD_STEP_1_",
        title: "_A_WIZARD_STEP_1_",
      },
      {
        slotLabel: "stepLabel",
        slot: "step2",
        label: "_A_WIZARD_STEP_2_",
        title: "_A_WIZARD_STEP_2_",
      },
      {
        slotLabel: "stepLabel",
        slot: "step3",
        label: "_A_WIZARD_STEP_3_",
        title: "_A_WIZARD_STEP_3_",
      },
      {
        slotLabel: "stepLabel4",
        slot: "step4",
        label: "_A_WIZARD_STEP_4_",
        title: "_A_WIZARD_STEP_4_",
      },
    ];
    const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
        pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
        Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
        in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent`;

    return {
      text,
      wizardSteps,
    };
  },
};
```

## Custom content inside step

A slot **step** can be defined in order to customize content inside a wizard step. slot can be used by a single step or by multiple ones.

*props: `steps.slot`; slots: `slot`*

```html
<a-wizard
  :steps="wizardSteps"
>
  <template
    v-slot:step="{ step, stepIndex }"
  >
    <a-translation
      tag="h3"
      :text="step.label"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
 
  <template
    v-slot:step4
  >
    <h2>ALOHA</h2>
    <p>{{ text }}</p>
  </template>
</a-wizard>
```

```js
import {
  ATranslation,
  AWizard,
} from "aloha-vue";
    
export default {
  name: "PageWizardSlot",
  components: {
    ATranslation,
    AWizard,
  },
  setup() {    
    const wizardSteps = [
      {
        slot: "step",
        label: "_A_WIZARD_STEP_1_",
        title: "_A_WIZARD_STEP_1_",
      },
      {
        slot: "step",
        label: "_A_WIZARD_STEP_2_",
        title: "_A_WIZARD_STEP_2_",
      },
      {
        slot: "step",
        label: "_A_WIZARD_STEP_3_",
        title: "_A_WIZARD_STEP_3_",
      },
      {
        slot: "step4",
        label: "_A_WIZARD_STEP_4_",
        title: "_A_WIZARD_STEP_4_",
      },
    ];
    const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
        pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
        Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
        in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent`;

    return {
      text,
      wizardSteps,
    };
  },
};
```

## Show only currently active step (mobile)

Showing only the active step or all steps in a wizard can be customized based on design choices, screen space, and user experience priorities.

*props: `show-only-active-step-mobile`, `is-mobile`*

```html
<div
  class="a_columns a_columns_count_12"
>
  <div
    class="a_column.a_column_6 a_columns_count_12_touch a_mb_5"
  >
    <a-switch
      v-model="showOnlyActiveStepMobile"
        label="show-only-active-step-mobile"
    ></a-switch>
    <a-select
      v-model="modelType"
      class="a_mt_4"
      label="_A_WIZARD_LABEL_TYPE_"
      key-id="value"
      key-label="label"
      :data="types"
      :deselectable="false"
      :translate-data="true"
    ></a-select>
  </div>
</div>
<a-wizard
  :steps="wizardSteps"
  :is-mobile="true"
  :show-only-active-step-mobile="showOnlyActiveStepMobile"
  :type="modelType"
>
  <template
    v-slot:step="{ step }"
  >
    <h2>{{ step.label }}</h2>
    <p>{{ text }}</p>
  </template>
</a-wizard>
```

```js
import {
  ref,
} from "vue";

import {
  ASwitch,
  ATranslation,
  AWizard,
} from "aloha-vue";
    
export default {
  name: "PageWizardShowOnlyActiveStepMobile",
  components: {
    ASwitch,
    ATranslation,
    AWizard,
  },
  setup() {
    const showOnlyActiveStepMobile = ref(true);
    const modelType = ref("line");
    const types = [
      {
        label: "_A_WIZARD_TYPE_BASIC_",
        value: "basic",
      },
      {
        label: "_A_WIZARD_TYPE_ARROWS_",
        value: "arrows",
      },
      {
        label: "_A_WIZARD_TYPE_LINE_",
        value: "line",
      },
      {
        label: "_A_WIZARD_TYPE_ROUND_",
        value: "round",
      },
    ];
    const wizardSteps = [
      {
        id: "1",
        slot: "step",
        label: "Lorem",
      },
      {
        id: "2",
        slot: "step",
        label: "ipsum",
      },
      {
        id: "3",
        slot: "step",
        label: "dolor",
      },
      {
        id: "4",
        slot: "step",
        label: "sit",
      },
      {
        id: "5",
        slot: "step",
        label: "amet",
      },
      {
        id: "6",
        slot: "step",
        label: "consectetur",
      },
      {
        id: "7",
        slot: "step",
        label: "adipiscing",
      },
      {
        id: "8",
        slot: "step",
        label: "elit",
      },
      {
        id: "9",
        slot: "step",
        label: "Quisque",
      },
      {
        id: "10",
        slot: "step",
        label: "nisl",
      },
    ];
    const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
        pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
        Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
        in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent`;

    return {
      modelType,
      showOnlyActiveStepMobile,
      text,
      types,
      wizardSteps,
    };
  },
};
```

## Showcase example

A showcase example of an **AWizard** component.

*props: `steps`, `type`*

```html
<div 
  class="a_columns a_columns_count_12"
>
  <div 
    class="a_column a_column_6 a_columns_count_12_touch a_mb_5"
  >
    <a-switch 
      v-model="isStepsJustified" 
      label="is-steps-justified"
    ></a-switch>
    <a-select 
      v-model="modelType" 
      class="a_mt_4" 
      label="_A_WIZARD_LABEL_TYPE_" 
      key-id="value" 
      key-label="label" 
      :data="types" 
      :deselectable="false" 
      :translate-data="true"
    ></a-select>
    <div 
      class="a_d_flex a_mt_4"
    >
      <a-input 
        v-model="modelStepName" 
        label="_A_WIZARD_STEP_NAME_" 
        :required="true"
      ></a-input>
      <a-button 
        class="a_btn a_btn_primary a_ml_2" 
        :disabled="!modelStepName" 
        text="_A_WIZARD_BTN_ADD_STEP_" 
        @click="addStep"
      ></a-button>
    </div>
    <div 
      class="a_d_flex a_mt_4"
    >
      <a-select 
        v-model="modelStepId" 
        label="_A_WIZARD_LABEL_STEPS_" 
        key-id="id" 
        key-label="label" 
        :data="wizardSteps" 
        :search="true"
      ></a-select>
      <a-button 
        class="a_btn a_btn_primary a_ml_2" 
        :disabled="!modelStepId || wizardSteps.length < 2" 
        text="_A_WIZARD_BTN_DELETE_STEP_" 
        @click="deleteStep"
      ></a-button>
    </div>
  </div>
</div>
<a-wizard
  key-id="id"
  :is-steps-justified="isStepsJustified"
  :steps="wizardSteps"
  :type="modelType"
>
  <template
    v-slot:step="{ step }"
  >
    <h2>{{ step.label }}</h2>
    <p>{{ text }}</p>
  </template>
</a-wizard>
```

```js
import {
  ref,
} from "vue";

import { 
  AButton,
  AInput,
  ASelect,
  ASwitch,
  AWizard,
} from "aloha-vue";
    
export default {
  name: "PageWizardDemo",
  components: {
    AButton,
    AInput,
    ASelect,
    ASwitch,
    AWizard,
  },
  setup() {
    const modelType = ref("line");
    const modelStepName = ref("");
    const modelStepId = ref(undefined);
    const isStepsJustified = ref(true);
    const types = [
      {
        label: "_A_WIZARD_TYPE_BASIC_",
        value: "basic",
      },
      {
        label: "_A_WIZARD_TYPE_ARROWS_",
        value: "arrows",
      },
      {
        label: "_A_WIZARD_TYPE_LINE_",
        value: "line",
      },
      {
        label: "_A_WIZARD_TYPE_ROUND_",
        value: "round",
      },
    ];
    const wizardSteps = ref([
      {
        id: "1",
        slot: "step",
        label: "Lorem",
      },
      {
        id: "2",
        slot: "step",
        label: "ipsum",
      },
      {
        id: "3",
        slot: "step",
        label: "dolor",
      },
      {
        id: "4",
        slot: "step",
        label: "sit",
      },
      {
        id: "5",
        slot: "step",
        label: "amet",
      },
      {
        id: "6",
        slot: "step",
        label: "consectetur",
      },
      {
        id: "7",
        slot: "step",
        label: "adipiscing",
      },
      {
        id: "8",
        slot: "step",
        label: "elit",
      },
      {
        id: "9",
        slot: "step",
        label: "Quisque",
      },
      {
        id: "10",
        slot: "step",
        label: "nisl",
      },
    ]);
    const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
        pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
        Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
        in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent`;

    const addStep = () => {
      wizardSteps.value.push({
        id: uniqueId("wizard_demo_"),
        slot: "step",
        label: modelStepName.value,
      });
    };

    const deleteStep = () => {
      const STEP_INDEX = findIndex(wizardSteps.value, ["id", modelStepId.value]);
      wizardSteps.value.splice(STEP_INDEX, 1);
      modelStepId.value = undefined;
    };

    return {
      addStep,
      deleteStep,
      isStepsJustified,
      modelStepId,
      modelStepName,
      modelType,
      text,
      types,
      wizardSteps,
    };
  },
};
```

## Props

| name | type | default | required | description |
| --- | --- | --- | --- | --- |
| aria-label | String | _A_WIZARD_ARIA_LABEL_ |  | Name of the wizard (a group). Without a name the wizard is no group. |
| aria-label-steps | String | _A_WIZARD_STEPS_ARIA_LABEL_ |  | Translatable aria-label for the block with all steps of the Wizard |
| back-button-attributes | Object | () => ({}) |  | Additional attributes for the button navigating to the previous step that are not explicitly defined as props. |
| back-button-class | String / Array / Object | a_btn a_btn_secondary |  | One or more additional CSS-classes for the button navigating to the previous step. |
| back-button-icon-left | String |  |  | Name of the icon to be shown to the left of the label for the button navigating to the previous step. |
| back-button-icon-right | String |  |  | Name of the icon to be shown to the right of the label for the button navigating to the previous step. |
| back-button-text | String | _A_WIZARD_PREVIOUS_ |  | Custom label for the button navigating to the previous step. |
| back-button-title | String |  |  | Custom title for the button navigating to the previous step. |
| before-step-change | Function |  |  | Function `{ from, to, step, direction }` with direction `"back" / "forward" / "finish"`. It returns `false` (or a Promise with false) to stay on the step; the focus goes to the error summary or the first invalid field. While a Promise waits, the buttons show the loading. |
| class-extra | String / Object | a_wizard_class_extra |  | Additional **CSS** class for the wizard that can be used for automated tests or as an additional selector. |
| extra | Object | () => ({}) |  | Extra values used in wizard. |
| finish-button-attributes | Object | () => ({}) |  | Attributes of the finish button. |
| finish-button-class | String / Array / Object | a_btn a_btn_primary |  | Class of the finish button. |
| finish-button-text | String |  |  | Text of the finish button, e.g. `_A_WIZARD_FINISH_`. With it the last step has this button (event `finish`) instead of the disabled next button. |
| forward-button-attributes | Object | () => ({}) |  | Additional attributes for the button navigating to the next step that are not explicitly defined as props. |
| forward-button-class | String / Array / Object | a_btn a_btn_secondary |  | One or more additional CSS-classes for the button navigating to the next step. |
| forward-button-icon-left | String |  |  | Name of the icon to be shown to the left of the label for the button navigating to the next step. |
| forward-button-icon-right | String |  |  | Name of the icon to be shown to the right of the label for the button navigating to the next step. |
| forward-button-text | String | _A_WIZARD_PREVIOUS_ |  | Custom label for the button navigating to the next step. |
| forward-button-title | String |  |  | Custom title for the button navigating to the next step. |
| has-focus-jump | Boolean | true |  | After a change of the step the focus goes to the heading of the new step, so the screen reader reads it. |
| id | String | () => uniqueId("a_wizard_") |  | Specifies a unique ID of the wizard. |
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
| is-step-heading-visible | Boolean | false |  | The heading "Step 2 of 4: Address" of the step is visible. Without it the heading is only for screen readers. |
| is-step-number-visible | Boolean | true |  | Specifies weather the steps are sequentially enumerated in steps header. |
| is-steps-justified | Boolean | true |  | Specifies weather the alignment of the steps is justified. |
| is-toolbar-bottom | Boolean | true |  | Specifies weather the wizard navigation toolbar will be placed at the bottom, under the content of the currently active step. This is the default placement. |
| is-toolbar-top | Boolean | false |  | Specifies weather the wizard navigation toolbar will be placed at the top, above the content of the currently active step. |
| key-id | String |  |  | A unique identifier key for each step. Used for performance enhancement. |
| show-only-active-step-mobile | Boolean | true |  | Show only the currently active step in a wizard. |
| step-active | Number |  |  | Index of the currently active step in the wizard. |
| step-heading-tag | String | h3 |  | Tag of the heading of the step, default `"h3"`. |
| steps-icon-error | String | AlertDanger |  | Icon displayed in case of an error in the step |
| steps-icon-error-text | String | _A_WIZARD_STEP_ERROR_ |  | Text and title for the screen reader for the error icon |
| steps-icon-warning | String | AlertWarning |  | Icon displayed in case of a warning in the step |
| steps-icon-warning-text | String | _A_WIZARD_STEP_WARNING_ |  | Text and title for the screen reader for the warning icon |
| steps | Array | () => [] |  | An array of objects containing information about each step in a wizard. |
| steps-progressbar-text | String | _A_WIZARD_STEPS_PROGRESSBAR_TEXT_{{stepActive}}_{{stepsCount}}_{{stepActiveLabel}}_ |  | Text indicating the user's progress within the wizard. Variables available inside placeholder are **stepActive** (currently active step), **stepsCount** (total number of steps) **stepActiveLabel** (label of the currently active step). |
| steps-visited | Object |  |  | Represents an object where each key corresponds to a step index, and the associated boolean value indicates whether the respective step has been visited or not. |
| sub-type | String |  |  | The **subType** property is used to define the style of active steps in the **line** type. It allows choosing between square and round shapes, with or without an additional border. |
| toolbar-bottom-teleport-id | String |  |  | Id for teleport (dynamic movement) of the navigation toolbar to the bottom of the wizard. |
| type | String | basic |  | Customizes visual representation of steps in header. |

## Slots

| name | description |
| --- | --- |
| toolbar | A slot containing navigation buttons toolbar. |
| slot | A slot containing a step in wizard. |
| slotLabel | A slot containing the labels of the steps in wizard header. |

## Events

| name | type | description |
| --- | --- | --- |
| change-step | Function | Emitted after the active wizard step changes. The payload contains **step**, **stepIndex**, and **previousStepIndex**. |
| finish | Function | The finish button was clicked (after `before-step-change`). Argument: `{ step, stepIndex }`. |
| go-step-back | Function | A function responsible for moving the user back to the previous step of the wizard and any additional logic relevant to transition. |
| go-step-forward | Function | A function responsible for moving the user to the next step of the wizard and any additional logic relevant to transition. |

## Translations

| key | en |
| --- | --- |
| `_A_WIZARD_ARIA_LABEL_` | Wizard |
| `_A_WIZARD_FINISH_` | Finish |
| `_A_WIZARD_NEXT_` | Next |
| `_A_WIZARD_NEXT_TITLE_` | Next step |
| `_A_WIZARD_PREVIOUS_` | Previous |
| `_A_WIZARD_PREVIOUS_TITLE_` | Previous step |
| `_A_WIZARD_STEP_ACTIVE_` | Step current |
| `_A_WIZARD_STEP_ERROR_` | Step error |
| `_A_WIZARD_STEP_HEADING_{{stepNumber}}_{{stepsCount}}_{{label}}_` | Step {{ stepNumber }} of {{ stepsCount }}: {{ label }} |
| `_A_WIZARD_STEP_NUMBER_OF_{{stepActive}}_{{stepsCount}}_` | {{ stepActive }} of {{ stepsCount }} |
| `_A_WIZARD_STEP_UPCOMING_` | Step upcoming |
| `_A_WIZARD_STEP_VISITED_` | Step visited |
| `_A_WIZARD_STEP_WARNING_` | Step warning |
| `_A_WIZARD_STEPS_ARIA_LABEL_` | Wizard steps |
| `_A_WIZARD_STEPS_PROGRESSBAR_TEXT_{{stepActive}}_{{stepsCount}}_` | Step {{ stepActive }} of {{ stepsCount }} |

## CSS variables (`scss/components/AWizard.scss`)

| name | value | description |
| --- | --- | --- |
| `--a_wizard_border_color` |  | Border color of the wizard. In the line variant also the color of the dashed line and of the step number background. |
| `--a_wizard_border_width` |  | Border width of the wizard. |
| `--a_wizard_border_radius` |  | Corner radius of the step number in the line variant. Changed by the square and circle variants. |
| `--a_wizard_step_default_primary_color` |  | Main color of an upcoming step: fill in the arrows and round variants. |
| `--a_wizard_step_default_secondary_color` |  | Second color of an upcoming step: text in the basic, arrows and round variants. |
| `--a_wizard_step_active_primary_color` |  | Main color of the active step: fill in the arrows and round variants, marker in the basic variant. |
| `--a_wizard_step_active_text_color` |  | Text color of the active step in the basic and line variants. |
| `--a_wizard_step_active_secondary_color` |  | Second color of the active step: text on the fill in the arrows and round variants. |
| `--a_wizard_step_active_font_weight` |  | Font weight of the active step. |
| `--a_wizard_step_done_primary_color` |  | Main color of a completed step: fill in the arrows and round variants, text and marker in the basic variant. |
| `--a_wizard_step_done_secondary_color` |  | Second color of a completed step: text on the fill in the arrows and round variants. |
| `--a_wizard_step_disabled_primary_color` |  | Main color of a disabled step: fill in the arrows and round variants, text and marker in the basic variant. |
| `--a_wizard_step_disabled_secondary_color` |  | Second color of a disabled step: text on the fill in the arrows and round variants. |
| `--a_wizard_step_error_primary_color` |  | Main color of a step with an error: fill in the arrows and round variants, marker in the basic variant. |
| `--a_wizard_step_error_text_color` |  | Text color of a step with an error in the basic and line variants. |
| `--a_wizard_step_error_secondary_color` |  | Second color of a step with an error: text on the fill in the arrows and round variants. |
| `--a_wizard_step_warning_primary_color` |  | Main color of a step with a warning: fill in the arrows and round variants, marker in the basic variant. |
| `--a_wizard_step_warning_secondary_color` |  | Second color of a step with a warning: text on the fill in the arrows and round variants. |
| `--a_wizard_step_warning_text_color` |  | Text color of a step with a warning in the basic and line variants. |
| `--a_wizard_step_focus_shadow` |  | Color of the focus outline around a step in the arrows variant. |
| `--a_wizard_step_focus_box_shadow` |  | Focus ring of a step. |
| `--a_wizard_line_step_default_text_color` |  | Line variant: label color of an upcoming step. |
| `--a_wizard_line_step_default_number_color` |  | Line variant: number color of an upcoming step. |
| `--a_wizard_line_step_default_number_bg` |  | Line variant: number background of an upcoming step. |
| `--a_wizard_line_step_default_number_border_width` |  | Line variant: number border width of an upcoming step. |
| `--a_wizard_line_step_default_number_border_style` |  | Line variant: number border style of an upcoming step. |
| `--a_wizard_line_step_default_number_border_color` |  | Line variant: number border color of an upcoming step. |
| `--a_wizard_line_step_active_text_color` |  | Line variant: label color of the active step. |
| `--a_wizard_line_step_active_number_color` |  | Line variant: number color of the active step. |
| `--a_wizard_line_step_active_number_bg` |  | Line variant: number background of the active step. |
| `--a_wizard_line_step_active_number_border_width` |  | Line variant: number border width of the active step. |
| `--a_wizard_line_step_active_number_border_style` |  | Line variant: number border style of the active step. |
| `--a_wizard_line_step_active_number_border_color` |  | Line variant: number border color of the active step. |
| `--a_wizard_line_step_active_number_box_shadow` |  | Line variant: shadow of the number of the active step. None in the bordered variants. |
| `--a_wizard_line_step_done_text_color` |  | Line variant: label color of a completed step. |
| `--a_wizard_line_step_done_number_color` |  | Line variant: number color of a completed step. |
| `--a_wizard_line_step_done_number_bg` |  | Line variant: number background of a completed step. |
| `--a_wizard_line_step_done_number_border_width` |  | Line variant: number border width of a completed step. |
| `--a_wizard_line_step_done_number_border_style` |  | Line variant: number border style of a completed step. |
| `--a_wizard_line_step_done_number_border_color` |  | Line variant: number border color of a completed step. |
| `--a_wizard_line_step_disabled_text_color` |  | Line variant: label color of a disabled step. |
| `--a_wizard_line_step_disabled_number_color` |  | Line variant: number color of a disabled step. |
| `--a_wizard_line_step_disabled_number_bg` |  | Line variant: number background of a disabled step. |
| `--a_wizard_line_step_disabled_number_border_width` |  | Line variant: number border width of a disabled step. |
| `--a_wizard_line_step_disabled_number_border_style` |  | Line variant: number border style of a disabled step. |
| `--a_wizard_line_step_disabled_number_border_color` |  | Line variant: number border color of a disabled step. |
| `--a_wizard_line_step_error_text_color` |  | Line variant: label color of a step with an error. |
| `--a_wizard_line_step_error_number_color` |  | Line variant: number color of a step with an error. |
| `--a_wizard_line_step_error_number_bg` |  | Line variant: number background of a step with an error. |
| `--a_wizard_line_step_error_number_border_width` |  | Line variant: number border width of a step with an error. |
| `--a_wizard_line_step_error_number_border_style` |  | Line variant: number border style of a step with an error. |
| `--a_wizard_line_step_error_number_border_color` |  | Line variant: number border color of a step with an error. |
| `--a_wizard_line_step_warning_text_color` |  | Line variant: label color of a step with a warning. |
| `--a_wizard_line_step_warning_number_color` |  | Line variant: number color of a step with a warning. |
| `--a_wizard_line_step_warning_number_bg` |  | Line variant: number background of a step with a warning. |
| `--a_wizard_line_step_warning_number_border_width` |  | Line variant: number border width of a step with a warning. |
| `--a_wizard_line_step_warning_number_border_style` |  | Line variant: number border style of a step with a warning. |
| `--a_wizard_line_step_warning_number_border_color` |  | Line variant: number border color of a step with a warning. |
