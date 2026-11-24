export default function HtmlAPI() {
  const codeHtml = `<a-show-more
  :height="80"
>
  <p
    v-for="index in 5"
    :key="index"
  >
    <span>{{ index }}. Lorem ipsum dolor sit amet. </span>
    <a
      href="#"
      @click.prevent
    >Link {{ index }}</a>
  </p>
</a-show-more>`;

  return {
    codeHtml,
  };
}
