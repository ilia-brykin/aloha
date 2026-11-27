export default function HtmlAPI() {
  const codeHtml = `<a-button
  id="btn_drawer_right"
  class="a_btn a_btn_primary"
  text="_A_DRAWER_BTN_OPEN_RIGHT_"
  @click="openDrawer('right')"
/>
<a-button
  id="btn_drawer_left"
  class="a_btn a_btn_secondary"
  text="_A_DRAWER_BTN_OPEN_LEFT_"
  @click="openDrawer('left')"
/>

<a-drawer
  v-if="placement"
  :placement="placement"
  :selector-close-ids="\`btn_drawer_\${ placement }\`"
  :close="closeDrawer"
  header-text="_A_DRAWER_COMPONENT_NAME_"
>
  <template v-slot:modalBody>
    <a-translation
      tag="p"
      text="_A_DRAWER_EXAMPLE_BODY_"
    />
  </template>
</a-drawer>`;

  return {
    codeHtml,
  };
}
