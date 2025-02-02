export default function HtmlAPI() {
  const codeHtml = `<a-one-checkbox
  v-model="model"
  label="Aloha"
  slot-name="aloha"
>
  <template
    v-slot:aloha="{ id, labelClass, label, labelScreenReader, required, props }"
  >
    <span
      :class="labelClass"
    >
      <span>{{ label }}</span>
      <a-element
        :is-title-html="true"
        class="a_ml_2"
        icon-left="Window"
        tabindex="0"
        text-screen-reader="Aloha"
        title="Aloha"
        type="text"
      ></a-element>
    </span>
  </template>
</a-one-checkbox>`;

  return {
    codeHtml,
  };
}
