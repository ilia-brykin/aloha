export default function HtmlAPI() {
  const codeHtml = `<a-show-more 
  btn-text-less=""
  btn-text-more=""
>
  <template
    v-slot:button="{ isButtonVisible, isOpen }"
  >
    <spa>{{ isOpen ? "Show less" : "Show more" }}</spa>
  </template>
  
  <template
    v-slot:default="{ isButtonVisible, isOpen }"
  >
    <p>isButtonVisible: {{ isButtonVisible }}</p>
    <p>isOpen: {{ isOpen }}</p>
    <ul>
      <li>1 aloha</li>
      <li>2 aloha</li>
      <li>3 aloha</li>
      <li>4 aloha</li>
      <li>5 aloha</li>
      <li>6 aloha</li>
      <li>7 aloha</li>
      <li>8 aloha</li>
      <li>9 aloha</li>
      <li>10 aloha</li>
      <li>11 aloha</li>
      <li>12 aloha</li>
    </ul>
  </template>
  
</a-show-more>`;

  return {
    codeHtml,
  };
}
