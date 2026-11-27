export default function HtmlAPI() {
  const codeHtml = `<a-disclosure
  v-model="isOpen"
  :text-less="textLess"
  :text-more="textMore"
/>
<p class="a_my_3">v-model: {{ isOpen }}</p>
<a-button
  class="a_btn a_btn_secondary"
  text="_A_DISCLOSURE_EXAMPLE_TOGGLE_"
  @click="isOpen = !isOpen"
/>`;

  return {
    codeHtml,
  };
}
