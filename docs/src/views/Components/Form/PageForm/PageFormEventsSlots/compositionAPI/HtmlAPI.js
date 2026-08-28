export default function HtmlAPI() {
  const codeHtml = `<a-form
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
<pre>{{ lastEvent }}</pre>`;

  return {
    codeHtml,
  };
}
