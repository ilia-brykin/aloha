export default function HtmlAPI() {
  const codeHtml = `<a-show-more
  v-model="isOpen"
  :text="text"
  :text-length="60"
/>
<p class="a_my_3">v-model: {{ isOpen }}</p>
<a-button
  class="a_btn a_btn_secondary"
  text="_A_SHOW_MORE_EXAMPLE_TOGGLE_"
  @click="isOpen = !isOpen"
/>`;

  return {
    codeHtml,
  };
}
