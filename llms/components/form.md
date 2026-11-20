# AForm (Dynamic form)

The **AForm** component builds a complete form from a configuration array. Each item in **data** selects a UI component through its **type**, uses its **id** as the model key, and accepts all props supported by that UI component. The form manages the shared model, validation errors, dependencies, responsive layout, read-only mode, events, and content slots.

## Basic configuration

Pass field configurations through **data** and bind one object with **v-model**. The value of every field is stored under its **id**.

*props: `data`, `model-value`, `class-columns`, `class-column-default`; emits: `update:model-value`*

```html
<a-form
  v-model="model"
  :data="data"
  :show-errors="false"
  :show-required-text="false"
></a-form>
<pre>{{ model }}</pre>
```

```js
import { ref } from "vue";
import { AForm } from "aloha-vue";

export default {
  components: { AForm },
  setup() {
    const data = [
      {
        type: "text",
        id: "name",
        label: "Name",
        required: true,
        classColumn: "a_column a_column_6 a_column_12_touch",
      },
      {
        type: "email",
        id: "email",
        label: "Email",
        classColumn: "a_column a_column_6 a_column_12_touch",
      },
      {
        type: "select",
        id: "country",
        label: "Country",
        data: [
          { label: "Deutschland", value: "de" },
          { label: "France", value: "fr" },
          { label: "Italia", value: "it" },
        ],
        classColumn: "a_column a_column_6 a_column_12_touch",
      },
      {
        type: "switch",
        id: "notifications",
        label: "Notifications",
        classColumn: "a_column a_column_6 a_column_12_touch",
      },
    ];
    const model = ref({
      name: "Aloha",
      email: "aloha@example.com",
      country: "de",
      notifications: true,
    });

    return { data, model };
  },
};
```

## Conditional fields

A field can declare one condition as a **dependencies** object or multiple required conditions as an array. **AForm** supplies the current model to every UI component automatically.

*props: `data`, `model-value`, `dependencies`*

```html
<a-form
  v-model="model"
  :data="data"
  :show-errors="false"
  :show-required-text="false"
></a-form>
<pre>{{ model }}</pre>
```

```js
import { ref } from "vue";
import { AForm } from "aloha-vue";

export default {
  components: { AForm },
  setup() {
    const data = [
      {
        type: "switch",
        id: "hasDetails",
        label: "Show details",
      },
      {
        type: "radio",
        id: "detailsType",
        label: "Detail type",
        data: [
          { label: "Basic", value: "basic" },
          { label: "Advanced", value: "advanced" },
        ],
      },
      {
        type: "text",
        id: "details",
        label: "Details",
        dependencies: { id: "hasDetails", value: true },
      },
      {
        type: "dateRange",
        id: "period",
        label: "Period",
        dependencies: [
          { id: "hasDetails", value: true },
          { id: "detailsType", value: "advanced" },
        ],
      },
    ];
    const model = ref({
      hasDetails: false,
      detailsType: "basic",
    });

    return { data, model };
  },
};
```

## Errors and read-only mode

The **errors** object is keyed by field ID. Form-level error navigation and required-field information can be configured independently, while **readonly** switches every field to its read-only representation.

*props: `errors`, `readonly`, `show-errors`, `show-required-text`, `text-error-header`, `text-required`*

```html
<a-button text="Validate" @click="validate"></a-button>
<a-button text="Clear errors" @click="clearErrors"></a-button>
<a-button :text="readonly ? 'Edit' : 'Read only'" @click="toggleReadonly"></a-button>

<a-form
  v-model="model"
  :data="data"
  :errors="errors"
  :readonly="readonly"
  text-error-header="Please correct the following fields"
  text-required="Required fields are marked"
></a-form>
```

```js
import { ref } from "vue";
import { AButton, AForm } from "aloha-vue";

export default {
  components: { AButton, AForm },
  setup() {
    const data = [
      { type: "text", id: "name", label: "Name", required: true },
      { type: "email", id: "email", label: "Email", required: true },
      { type: "textarea", id: "notes", label: "Notes" },
    ];
    const model = ref({ name: "", email: "", notes: "" });
    const errors = ref({});
    const readonly = ref(false);

    const validate = () => {
      const errorsLocal = {};
      if (!model.value.name) errorsLocal.name = "This field is required.";
      if (!model.value.email) errorsLocal.email = "This field is required.";
      errors.value = errorsLocal;
    };
    const clearErrors = () => {
      errors.value = {};
    };
    const toggleReadonly = () => {
      readonly.value = !readonly.value;
    };

    return {
      clearErrors,
      data,
      errors,
      model,
      readonly,
      toggleReadonly,
      validate,
    };
  },
};
```

## Events and slots

Listen to **update:modelValue** for the complete model and **change** for details about the changed field. Slots insert content before or after the form and its field container.

*slots: `formPrepend`, `formPrependAfterRequired`, `formDataPrepend`, `formDataAppend`, `formAppend`; emits: `update:model-value`, `change`*

```html
<a-form
  v-model="model"
  :data="data"
  :show-errors="false"
  @update:model-value="onUpdateModelValue"
  @change="onChange"
>
  <template #formPrepend><strong>Before form content</strong></template>
  <template #formPrependAfterRequired><div>After required notice</div></template>
  <template #formDataPrepend><div>Before fields</div></template>
  <template #formDataAppend><div>After fields</div></template>
  <template #formAppend><strong>After form content</strong></template>
</a-form>
<pre>{{ lastEvent }}</pre>
```

```js
import { ref } from "vue";
import { AForm } from "aloha-vue";

export default {
  components: { AForm },
  setup() {
    const data = [
      { type: "text", id: "title", label: "Title", required: true },
    ];
    const model = ref({ title: "" });
    const lastEvent = ref();

    const onUpdateModelValue = modelUpdated => {
      lastEvent.value = { event: "update:modelValue", model: modelUpdated };
    };
    const onChange = ({ id, model: modelField, fullModel }) => {
      lastEvent.value = {
        event: "change",
        id,
        model: modelField,
        fullModel,
      };
    };

    return {
      data,
      lastEvent,
      model,
      onChange,
      onUpdateModelValue,
    };
  },
};
```

## Props

| name | type | default | required | description |
| --- | --- | --- | --- | --- |
| always-translate | Boolean |  |  | Forces translation regardless of the `is-translate` flag. |
| class-column-default | String / Object | a_column a_column_12 |  | Default CSS class applied to each configured field when the item does not define its own **classColumn**. |
| class-columns | String / Object | a_columns a_columns_count_12 a_columns_gap_2 |  | CSS classes applied to the container that holds all fields from **data**. |
| data | Array |  | yes | Required array of field configurations. Every item needs a **type** and **id**, and may contain props supported by the selected UI component. |
| errors | Object | () => ({}) |  | Object containing validation errors keyed by field ID. Values are passed to the corresponding fields and can also be displayed in the form error summary. |
| exclude-render-attributes | Array | () => [] |  | Array of attributes that should not be rendered for this component. Useful for excluding unnecessary attributes from the final **DOM**. |
| id-prefix | String |  |  | Prefix for the component's **ID**. Used to create a unique identifier based on the specified prefix. |
| is-hide | Boolean |  |  | Determines whether the component should be hidden. If set to **true**, the component is not displayed on the page. |
| is-render | Boolean | true |  | Indicates whether the component should be rendered. If set to **false**, the component will not be created in the **DOM**. |
| is-required | Boolean |  |  | Explicitly controls whether the form displays required-field information. When omitted, the value is inferred from configured fields. |
| model-value | Object |  |  | The complete form model. Field values are read from and written to keys matching their IDs. |
| readonly | Boolean |  |  | Enables read-only mode, where the value is displayed as text without the possibility of editing. |
| readonly-default | String |  |  | The default text that is shown if the value is missing in read-only mode. |
| show-errors | Boolean | true |  | Controls display of the form-level error summary. Field-level errors remain available to individual components. |
| show-required-text | Boolean | true |  | Controls display of the required-fields notice above the fields. |
| tag | String | form |  | HTML tag used for the root element of the form. |
| text-error-header | String |  |  | Custom heading for the form-level error summary. |
| text-required | String |  |  | Custom text for the required-fields notice. |
| use-flat-errors | Boolean | true |  | When enabled, errors are resolved directly by field ID. Disable it when nested container errors follow the nested model structure. |
| use-flat-model | Boolean | true |  | When enabled, container fields work with the shared flat model. Disable it to store container values in nested objects. |
| use-html-id-as-key | Boolean | false |  | Uses each field's resolved HTML ID as its Vue key instead of the array index. |

## Emits

| name | type | description |
| --- | --- | --- |
| update:model-value | Function | Event triggered when the component's model value is updated. Used to synchronize data between the component and the parent component. |
| change | Function | Emitted after a field changes. The payload contains the field ID, new and previous values, complete model, item data when available, and reactive props. |

## Slots

| name | description |
| --- | --- |
| formPrepend | Content rendered at the beginning of the form, before required information and errors. |
| formPrependAfterRequired | Content rendered after the required-fields notice and before the error summary. |
| formDataPrepend | Content rendered inside the field container before configured fields. |
| formDataAppend | Content rendered inside the field container after configured fields. |
| formAppend | Content rendered at the end of the form after the field container. |
