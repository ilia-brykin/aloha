export default function HtmlAPI() {
  const codeHtml = `<div class="a_d_flex a_flex_wrap a_gap_2">
  <a-button
    v-for="type in types"
    :key="type"
    :class="\`a_btn a_btn_\${ type }\`"
    :text="\`_A_NOTIFICATION_EXAMPLE_BTN_\${ type.toUpperCase() }_\`"
    @click="add(type)"
  />
</div>

<!-- once in App.vue -->
<a-notification />`;

  return {
    codeHtml,
  };
}
