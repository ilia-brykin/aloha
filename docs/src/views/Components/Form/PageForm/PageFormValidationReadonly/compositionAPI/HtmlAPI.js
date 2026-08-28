export default function HtmlAPI() {
  const codeHtml = `<a-button text="Validate" @click="validate"></a-button>
<a-button text="Clear errors" @click="clearErrors"></a-button>
<a-button :text="readonly ? 'Edit' : 'Read only'" @click="toggleReadonly"></a-button>

<a-form
  v-model="model"
  :data="data"
  :errors="errors"
  :readonly="readonly"
  text-error-header="Please correct the following fields"
  text-required="Required fields are marked"
></a-form>`;

  return {
    codeHtml,
  };
}
