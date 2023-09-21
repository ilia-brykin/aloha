export default function HtmlAPI() {
  const codeHtml = `<a-fieldset
  :collapsible="true"
  slot-name="fieldset"
  class-columns=""
  label="Aloha"
>
  <template
    v-slot:fieldset
  >
    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum</div>
  </template>
</a-fieldset>
<a-fieldset
  class="a_mt_5"
  :collapsible="true"
  :is-collapsed="true"
  slot-name="fieldset"
  class-columns=""
>
  <template
    v-slot:fieldset
  >
    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum</div>
  </template>
</a-fieldset>`;

  return {
    codeHtml,
  };
}
