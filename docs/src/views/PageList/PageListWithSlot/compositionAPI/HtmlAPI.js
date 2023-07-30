export default function HtmlAPI() {
  const codeHtml = `<a-list :data="items" key-children="items"><template v-slot:listItem="vm">
        <pre>{{ vm.item.label }}</pre>
    </template></a-list>`;

  return {
    codeHtml,
  };
}
