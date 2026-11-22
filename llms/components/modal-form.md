# AModalForm (Modal window with a form)

**AModalForm** is a modal window ([AModal](modal.md)) with a form ([AForm](form.md)) in the body. The form is built from `data-form`, the model is bound with `v-model`. Props with the same name work like in **AModal** and **AForm**.

## AModalForm: form columns

The `class-columns` and `class-column-default` props are passed to the inner `AForm`. In this example, the name and email fields occupy half the width and stack on touch devices. The notes field defines its own `classColumn` and spans the full width. If these props are omitted, the defaults from `AForm` apply.

*props: `class-columns`, `class-column-default`*

```html
<a-button
  class="a_btn a_btn_primary"
  text="_A_MODAL_PAGE_BTN_OPEN_MODAL_"
  @click="openModal"
/>

<a-modal-form
  v-if="isModalVisible"
  v-model="model"
  :data-form="dataForm"
  :close="closeModal"
  :is-save-button-hide="true"
  header-text="_A_MODAL_FORM_COLUMNS_HEADER_"
  size="large"
  class-columns="a_columns a_columns_count_12 a_columns_gap_3"
  class-column-default="a_column a_column_6 a_column_12_touch"
/>
<pre>{{ model }}</pre>
```

```js
import {
  ref,
} from "vue";

import {
  AButton,
  AModalForm,
} from "aloha-vue";

export default {
  components: {
    AButton,
    AModalForm,
  },
  setup() {
    const model = ref({ name: "Aloha", email: "aloha@example.com", notes: "" });
    const dataForm = [
      {
        type: "text",
        id: "name",
        label: "_A_FORM_EXAMPLE_NAME_",
      },
      {
        type: "email",
        id: "email",
        label: "_A_FORM_EXAMPLE_EMAIL_",
      },
      {
        type: "textarea",
        id: "notes",
        label: "_A_FORM_EXAMPLE_NOTES_",
        classColumn: "a_column a_column_12",
      },
    ];
    const isModalVisible = ref(false);

    const openModal = () => {
      isModalVisible.value = true;
    };

    const closeModal = () => {
      isModalVisible.value = false;
    };

    return {
      closeModal,
      dataForm,
      isModalVisible,
      model,
      openModal,
    };
  },
};
```

## Props

| name | type | default | required | description |
| --- | --- | --- | --- | --- |
| always-translate | Boolean |  |  | Forces translation regardless of the `is-translate` flag. |
| backdrop-z-index | Number |  |  | If set, this prop specifies the CSS z-index for the modal window's backdrop. |
| body-html | Object | "" |  | The HTML content of the modal window. |
| body-html-class | String / Array / Object |  |  | Adds a **CSS** class to the **HTML** that can be used in the modal window. **body-html** |
| class-column-default | String / Object | a_column a_column_12 |  | Default CSS class applied to each configured field when the item does not define its own **classColumn**. |
| class-columns | String / Object | a_columns a_columns_count_12 a_columns_gap_2 |  | CSS classes applied to the container that holds all fields from **data**. |
| class-extra | String / Object | a_modal_class_extra |  | Additional **CSS** class for the modal window, which can be used for automated tests or as an additional selector. |
| close | Function |  | yes | The function that enables closing the modal. |
| close-button-class | String / Array / Object | a_btn a_btn_secondary |  | The class or classes of the close button. [(AButton)](button.md) |
| close-button-id | String |  |  | The ID of the close button. |
| close-button-text | String | _A_MODAL_BTN_CANCEL_ |  | The text on the close button. |
| close-button-text-screen-reader-footer | String | _A_MODAL_BTN_TEXT_SCREEN_READER_CLOSE_FOOTER_ |  | Adds screen reader text for the 'Close modal window' button in the footer. |
| close-button-text-screen-reader-header | String | _A_MODAL_BTN_TEXT_SCREEN_READER_CLOSE_HEADER_ |  | Adds screen reader text for the 'Close modal window' button in the header. |
| data-form | Array |  | yes | Required array of field configurations. Every item needs a **type** and **id**, and may contain props supported by the selected UI component. |
| disabled | Boolean | false |  | Specifies whether the modal is disabled. |
| disabled-save | Boolean | false |  | Specifies whether the save button in the modal is disabled. |
| errors | Object | () => ({}) |  | Object containing validation errors keyed by field ID. Values are passed to the corresponding fields and can also be displayed in the form error summary. |
| extra | Object |  |  | An object with parameters for translations. [(ATranslation)](translation.md) |
| focus-start-id | String |  |  | If an **ID** is set, the focus is placed on the element with this **ID** when the modal window opens (if **use-focus-on-start** is set to **true**). |
| header-tag | String | h2 |  | The HTML tag for the modal header. |
| header-text | String |  |  | The text in the modal header. |
| hide-footer | Boolean |  |  | Specifies whether to hide the footer in the modal window. |
| hide-header | Boolean |  |  | Hides the header of the modal window. |
| id | String | uniqueId("a_modal_") |  | The ID of the modal. |
| id-prefix | String |  |  | Prefix for the component's **ID**. Used to create a unique identifier based on the specified prefix. |
| is-close-button-hide | Boolean | false |  | Determines whether the close button is visible. |
| is-confirm | Boolean |  |  | Specifies whether the modal requires confirmation. (Only for [AConfirm](confirm.md)) |
| is-data-form-hide | Boolean |  |  | Determines whether the component should be hidden. If set to **true**, the component is not displayed on the page. |
| is-data-form-render | Boolean | true |  | Indicates whether the component should be rendered. If set to **false**, the component will not be created in the **DOM**. |
| is-footer-sticky | Boolean | false |  | Determines if the footer is fixed to the bottom of the modal window. |
| is-modal-hidden | Boolean | false |  | Determines whether the modal is hidden. (Only for [AConfirm](confirm.md)) |
| is-required | Boolean |  |  | Explicitly controls whether the form displays required-field information. When omitted, the value is inferred from configured fields. |
| is-save-button-hide | Boolean | false |  | Determines whether the save button is visible. |
| loading | Boolean |  |  | Specifies whether the modal is in a loading state. |
| modal-class | String / Object |  |  | The class or classes of the modal. |
| modal-style | String / Object |  |  | The style or styles of the modal window. |
| model-value | Object |  |  | The complete form model. Field values are read from and written to keys matching their IDs. |
| save | Function |  |  | The function that enables saving in the modal. |
| save-button-class | String / Array / Object | a_btn a_btn_primary |  | The class or classes of the save button. [(AButton)](button.md) |
| save-button-id | String |  |  | The ID of the save button. |
| save-button-text | String | _A_MODAL_BTN_SAVE_ |  | The text on the save button. |
| save-button-text-screen-reader | String | _A_MODAL_BTN_TEXT_SCREEN_READER_SAVE_ |  | Adds screen reader text for the 'Save' button in the modal window. |
| selector-close | String / Array |  |  | The focus selector to ensure that focus is not lost in the browser when the modal is closed. |
| selector-close-ids | String / Array |  |  | The ID or IDs for focus to ensure that focus is not lost in the browser when the modal is closed. |
| size | String |  |  | The size of the modal (small, large, xl, xxl, fullscreen). |
| stop | Boolean |  |  | Adds a click event with stopPropagation to the modal window's parent element to prevent the event from propagating further. |
| teleport-selector | String | body |  | CSS selector of the element the modal window is moved to (Vue `Teleport`). Default: `body`. |
| text-error-header | String |  |  | Custom heading for the form-level error summary. |
| text-required | String |  |  | Custom text for the required-fields notice. |
| use-escape | Boolean | true |  | Specifies whether the Escape key can close the modal. |
| use-flat-errors | Boolean | true |  | When enabled, errors are resolved directly by field ID. Disable it when nested container errors follow the nested model structure. |
| use-flat-model | Boolean | true |  | When enabled, container fields work with the shared flat model. Disable it to store container values in nested objects. |
| use-focus-on-start | Boolean | true |  | If set to **true** and no **focus-start-id** is set, focus is placed on the first focusable element in the modal window. |
| use-html-id-as-key | Boolean | false |  | Uses each field's resolved HTML ID as its Vue key instead of the array index. |
| z-index | Number |  |  | Specifies the CSS z-index for the modal window itself. |

## Emits

| name | type | description |
| --- | --- | --- |
| update:model-value | Function | Event triggered when the component's model value is updated. Used to synchronize data between the component and the parent component. |
| change | Function | Emitted after a field changes. The payload contains the field ID, new and previous values, complete model, item data when available, and reactive props. |

## Slots

| name | description |
| --- | --- |
| modalHeader | A slot containing the content of the modal header. |
| modalFooterPrepend | A slot displayed before the save and close buttons in the modal footer. |
| modalFooterAppend | A slot displayed after the save and close buttons in the modal footer. |
| modalBodyPrepend | A slot displayed in the body before the text (`body-html`) and the form. |
| modalBodyAppend | A slot displayed in the body after the form. |
| formPrepend | Content rendered at the beginning of the form, before required information and errors. |
| formPrependAfterRequired | Content rendered after the required-fields notice and before the error summary. |
| formDataPrepend | Content rendered inside the field container before configured fields. |
| formDataAppend | Content rendered inside the field container after configured fields. |
| formAppend | Content rendered at the end of the form after the field container. |
