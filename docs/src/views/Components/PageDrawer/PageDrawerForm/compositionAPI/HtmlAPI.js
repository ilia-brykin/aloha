export default function HtmlAPI() {
  const codeHtml = `<a-button
  id="btn_drawer_form"
  class="a_btn a_btn_primary"
  text="_A_DRAWER_BTN_EDIT_"
  @click="openDrawer"
/>

<a-drawer
  v-if="isDrawerVisible"
  selector-close-ids="btn_drawer_form"
  :close="closeDrawer"
  :save="save"
  :is-footer-sticky="true"
  header-text="_A_DRAWER_FORM_HEADER_"
>
  <template v-slot:modalBody>
    <a-form
      v-model="modelLocal"
      :data="dataForm"
    />
  </template>
</a-drawer>

<pre>{{ model }}</pre>`;

  return {
    codeHtml,
  };
}
