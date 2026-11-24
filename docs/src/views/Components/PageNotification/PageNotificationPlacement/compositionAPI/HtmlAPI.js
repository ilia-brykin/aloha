export default function HtmlAPI() {
  const codeHtml = `<a-radio
  v-model="placement"
  :data="placements"
  label="placement"
/>
<a-radio
  v-model="size"
  :data="sizes"
  label="size"
/>
<a-button
  class="a_btn a_btn_primary"
  text="_A_NOTIFICATION_EXAMPLE_SHOW_BTN_"
  @click="add"
/>
<a-notification
  name="example_placement"
  :max="3"
  :placement="placement"
  :size="size === 'default' ? undefined : size"
/>`;

  return {
    codeHtml,
  };
}
