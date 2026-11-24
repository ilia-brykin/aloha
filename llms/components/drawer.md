# ADrawer (Side panel)

**ADrawer** is a panel at the left or the right edge of the window, e.g. for the details of a table row, filters or settings. It is a modal dialog: it has all props and slots of [AModal](modal.md) (header, footer with buttons, `save`, `selector-close-ids`…), traps the focus, closes with Escape and returns the focus to the button that opened it.

## Basic usage

`placement` sets the edge. `selector-close-ids` returns the focus to the button that opened the panel. On a narrow window the panel takes the whole width. The panel slides in, without animation if the user prefers reduced motion.

*props: `placement`, `selector-close-ids`*

```html
<a-button
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
  :selector-close-ids="`btn_drawer_${ placement }`"
  :close="closeDrawer"
  header-text="_A_DRAWER_COMPONENT_NAME_"
>
  <template v-slot:modalBody>
    <a-translation
      tag="p"
      text="_A_DRAWER_EXAMPLE_BODY_"
    />
  </template>
</a-drawer>
```

```js
import {
  ref,
} from "vue";

import {
  AButton,
  ADrawer,
  ATranslation,
} from "aloha-vue";

export default {
  components: {
    AButton,
    ADrawer,
    ATranslation,
  },
  setup() {
    // undefined: closed, "right" or "left": open at this edge
    const placement = ref(undefined);

    const openDrawer = value => {
      placement.value = value;
    };

    const closeDrawer = () => {
      placement.value = undefined;
    };

    return {
      closeDrawer,
      openDrawer,
      placement,
    };
  },
};
```

## Width

The prop `size` of [AModal](modal.md) sets the width: `small` 300px, `large` 600px, `xl` 900px, without `size` 400px. The widths are CSS variables.

*props: `size`*

```html
<!-- width: small 300px, default 400px, large 600px, xl 900px; the whole width on a narrow window -->
<a-drawer
  v-if="isDrawerVisible"
  size="large"
  :close="closeDrawer"
  header-text="Aloha"
>
  <template v-slot:modalBody>...</template>
</a-drawer>
```

```js
import {
  ref,
} from "vue";

import {
  ADrawer,
} from "aloha-vue";

export default {
  components: {
    ADrawer,
  },
  setup() {
    const isDrawerVisible = ref(false);

    const closeDrawer = () => {
      isDrawerVisible.value = false;
    };

    return {
      closeDrawer,
      isDrawerVisible,
    };
  },
};
```

## Edit in a side panel

A form in the panel with the buttons Save and Cancel. With `is-footer-sticky` the buttons stay visible while the form scrolls. The form edits a copy of the model, so Cancel does not change the data.

*props: `save`, `is-footer-sticky`*

```html
<a-button
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

<pre>{{ model }}</pre>
```

```js
import {
  ref,
} from "vue";

import {
  AButton,
  ADrawer,
  AForm,
} from "aloha-vue";

export default {
  components: {
    AButton,
    ADrawer,
    AForm,
  },
  setup() {
    const dataForm = [
      { type: "text", id: "name", label: "_A_FORM_EXAMPLE_NAME_", required: true },
      { type: "email", id: "email", label: "_A_FORM_EXAMPLE_EMAIL_" },
      {
        type: "select",
        id: "country",
        label: "_A_FORM_EXAMPLE_COUNTRY_",
        data: [
          { label: "Deutschland", value: "de" },
          { label: "France", value: "fr" },
          { label: "Italia", value: "it" },
        ],
      },
      { type: "switch", id: "notifications", label: "_A_FORM_EXAMPLE_NOTIFICATIONS_" },
      { type: "textarea", id: "notes", label: "_A_FORM_EXAMPLE_NOTES_" },
    ];
    const model = ref({
      name: "Aloha",
      email: "aloha@example.com",
      country: "de",
      notifications: true,
      notes: "",
    });
    // the form edits a copy, so "Cancel" does not change the model
    const modelLocal = ref({});
    const isDrawerVisible = ref(false);

    const openDrawer = () => {
      modelLocal.value = { ...model.value };
      isDrawerVisible.value = true;
    };

    const closeDrawer = () => {
      isDrawerVisible.value = false;
    };

    const save = () => {
      model.value = { ...modelLocal.value };
      closeDrawer();
    };

    return {
      closeDrawer,
      dataForm,
      isDrawerVisible,
      model,
      modelLocal,
      openDrawer,
      save,
    };
  },
};
```

## Props

| name | type | default | required | description |
| --- | --- | --- | --- | --- |
| always-translate | Boolean |  |  | Forces translation regardless of the `is-translate` flag. |
| aria-label | String |  |  | Name of the modal for screen readers, e.g. with `hide-header`. Accepts a translation key. |
| backdrop-z-index | Number |  |  | If set, this prop specifies the CSS z-index for the modal window's backdrop. |
| body-html | Object | "" |  | The HTML content of the modal window. |
| body-html-class | String / Array / Object |  |  | Adds a **CSS** class to the **HTML** that can be used in the modal window. **body-html** |
| class-extra | String / Object | a_modal_class_extra |  | Additional **CSS** class for the modal window, which can be used for automated tests or as an additional selector. |
| close | Function |  | yes | The function that enables closing the modal. |
| close-button-attributes | Object | () => ({}) |  | Attributes for the modal's close button. [(AButton)](button.md) |
| close-button-class | String / Array / Object | a_btn a_btn_secondary |  | The class or classes of the close button. [(AButton)](button.md) |
| close-button-id | String |  |  | The ID of the close button. |
| close-button-text | String | _A_MODAL_BTN_CANCEL_ |  | The text on the close button. |
| close-button-text-screen-reader-footer | String |  |  | Name of the close button in the footer for screen readers, only when set; without it the visible text is the name (WCAG 2.5.3). |
| close-button-text-screen-reader-header | String | _A_MODAL_BTN_TEXT_SCREEN_READER_CLOSE_HEADER_ |  | Name of the close button with the icon in the header for screen readers. |
| close-on-backdrop | Boolean | false |  | A click outside of the dialog closes the modal. |
| disabled | Boolean | false |  | Specifies whether the modal is disabled. |
| disabled-save | Boolean | false |  | Specifies whether the save button in the modal is disabled. |
| extra | Object |  |  | An object with parameters for translations. [(ATranslation)](translation.md) |
| focus-start-id | String |  |  | If an **ID** is set, the focus is placed on the element with this **ID** when the modal window opens (if **use-focus-on-start** is set to **true**). |
| header-tag | String | h2 |  | The HTML tag for the modal header. |
| header-text | String |  |  | The text in the modal header. |
| hide-footer | Boolean |  |  | Specifies whether to hide the footer in the modal window. |
| hide-header | Boolean |  |  | Hides the header of the modal window. |
| id | String | uniqueId("a_modal_") |  | The ID of the modal. |
| is-close-button-hide | Boolean | false |  | Determines whether the close button is visible. |
| is-confirm | Boolean |  |  | Specifies whether the modal requires confirmation. (Only for [AConfirm](confirm.md)) |
| is-footer-sticky | Boolean | false |  | Determines if the footer is fixed to the bottom of the modal window. |
| is-modal-hidden | Boolean | false |  | Determines whether the modal is hidden. (Only for [AConfirm](confirm.md)) |
| is-save-button-hide | Boolean | false |  | Determines whether the save button is visible. |
| loading | Boolean |  |  | Specifies whether the modal is in a loading state. |
| modal-class | String / Object |  |  | The class or classes of the modal. |
| modal-style | String / Object |  |  | The style or styles of the modal window. |
| placement | String | "right" |  | Edge of the window: `right` or `left`. |
| save | Function |  |  | The function that enables saving in the modal. |
| save-button-attributes | Object | () => ({}) |  | Attributes for the save button in the modal. [(AButton)](button.md) |
| save-button-class | String / Array / Object | a_btn a_btn_primary |  | The class or classes of the save button. [(AButton)](button.md) |
| save-button-id | String |  |  | The ID of the save button. |
| save-button-text | String | _A_MODAL_BTN_SAVE_ |  | The text on the save button. |
| save-button-text-screen-reader | String |  |  | Name of the save button for screen readers, only when set; without it the visible text is the name (WCAG 2.5.3). |
| selector-close | String / Array |  |  | Focus selector after closing the modal. If no element is found, the focus goes back to the element that opened the modal. |
| selector-close-ids | String / Array |  |  | ID or IDs for the focus after closing the modal. If no element is found, the focus goes back to the element that opened the modal. |
| show-close-button-header | Boolean | true |  | Determines whether to display the close button ("x") in the header of the modal window. |
| size | String |  |  | The size of the modal (small, large, xl, xxl, fullscreen). |
| stop | Boolean |  |  | Adds a click event with stopPropagation to the modal window's parent element to prevent the event from propagating further. |
| teleport-selector | String | body |  | CSS selector of the element the modal window is moved to (Vue `Teleport`). Default: `body`. |
| use-escape | Boolean | true |  | Specifies whether the Escape key can close the modal. |
| use-focus-on-start | Boolean | true |  | If set to **true** and no **focus-start-id** is set, focus is placed on the first focusable element in the modal window. |
| use-inert | Boolean | true |  | While the modal is open, the rest of the page gets `inert`. Popups (dropdowns, tooltips, datepicker), notifications, live regions and elements with `data-a-not-inert` stay usable. |
| z-index | Number |  |  | Specifies the CSS z-index for the modal window itself. |

## Slots

| name | description |
| --- | --- |
| modalHeader | A slot containing the content of the modal header. |
| modalBody | A slot containing the main content of the modal window. |
| modalFooterPrepend | A slot displayed before the save and close buttons in the modal footer. |
| modalFooterAppend | A slot displayed after the save and close buttons in the modal footer. |

## Translations

| key | en |
| --- | --- |
| `_A_MODAL_BTN_CANCEL_` | cancel |
| `_A_MODAL_BTN_SAVE_` | save |
| `_A_MODAL_BTN_TEXT_SCREEN_READER_CLOSE_HEADER_` | Close modal window (located in the header) |
| `_A_MODAL_BTN_TEXT_SCREEN_READER_CLOSE_FOOTER_` | Close modal window (located in the footer) |
| `_A_MODAL_BTN_TEXT_SCREEN_READER_SAVE_` | Save data in the modal window |

## CSS variables (`scss/components/ADrawer.scss`)

| name | value | description |
| --- | --- | --- |
| `--a_drawer_width` |  | Width of the panel. On a narrow window the panel takes the whole width. |
| `--a_drawer_width_small` |  | Width with size="small". |
| `--a_drawer_width_large` |  | Width with size="large". |
| `--a_drawer_width_xl` |  | Width with size="xl", "xxl" or "fullscreen". |
| `--a_drawer_box_shadow` |  | Shadow of the panel. |
