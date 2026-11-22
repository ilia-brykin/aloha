# AModal (Modal Window)

AModal is a component that enables the implementation of modal windows. It provides a multitude of customization options, including various parameters for content, button behavior, visibility controls, and size adjustments. With customizable slots for header, body, and footer, it allows for flexible styling of modal windows for various use cases.

## Basic usage

*props: `close`, `header-text`*

```html
<a-button
  class="a_btn a_btn_primary"
  text="_A_MODAL_PAGE_BTN_OPEN_MODAL_"
  @click="openModal"
></a-button>

<a-modal
  v-if="isModalVisible"
  header-text="Aloha"
  :close="closeModal"
></a-modal>
```

```js
import {
  ref,
} from "vue";

import { 
  AButton,
  AModal,
} from "aloha-vue";
    
export default {
  name: "PageModalBasic",
  components: {
    AButton,
    AModal,
  },
  setup() {
    const isModalVisible = ref(undefined);

    const openModal = () => {
      isModalVisible.value = true;
    };

    const closeModal = () => {
      isModalVisible.value = false;
    };

    return {
      closeModal,
      isModalVisible,
      openModal,
    };
  },
};
```

## Using **body-html**

The **body-html** prop is used to display custom HTML content in the modal window.

*props: `body-html`*

```html
<a-button
  class="a_btn a_btn_primary"
  text="_A_MODAL_PAGE_BTN_OPEN_MODAL_"
  @click="openModal"
></a-button>

<a-modal
  v-if="isModalVisible"
  header-text="Aloha"
  :body-html="bodyHtml"
  :close="closeModal"
></a-modal>
```

```js
import {
  ref,
} from "vue";

import { 
  AButton,
  AModal,
} from "aloha-vue";
    
export default {
  name: "PageModalBodyHtml",
  components: {
    AButton,
    AModal,
  },
  setup() {
    const isModalVisible = ref(undefined);
    const bodyHtml = `<ul>
      <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
      <li>Aliquam tincidunt mauris eu risus.</li>
      <li>Vestibulum auctor dapibus neque.</li>
    </ul>`;

    const openModal = () => {
      isModalVisible.value = true;
    };

    const closeModal = () => {
      isModalVisible.value = false;
    };

    return {
      bodyHtml,
      closeModal,
      isModalVisible,
      openModal,
    };
  },
};
```

## Customizing the Close Button

This example demonstrates various options for customizing the close button.

Here, the props **close-button-attributes**, **close-button-class**, **close-button-id**, and **close-button-text** are used to customize the close button. The close button is given a custom text tag, custom classes, and a custom ID, and the button text is loaded from a translation file.

*props: `close-button-attributes`, `close-button-class`, `close-button-id`, `close-button-text`*

```html
<a-button
  class="a_btn a_btn_primary"
  text="_A_MODAL_PAGE_BTN_OPEN_MODAL_"
  @click="openModal"
></a-button>

<a-modal
  v-if="isModalVisible"
  header-text="Aloha"
  :close="closeModal"
  :close-button-attributes="{ textTag: 'strong' }"
  close-button-class="a_btn a_btn_danger"
  close-button-id="btn_close"
  close-button-text="_A_MODAL_PAGE_BTN_CLOSE_"
></a-modal>
```

```js
import {
  ref,
} from "vue";

import { 
  AButton,
  AModal,
} from "aloha-vue";
    
export default {
  name: "PageModalCloseButton",
  components: {
    AButton,
    AModal,
  },
  setup() {
    const isModalVisible = ref(undefined);
    
    const openModal = () => {
      isModalVisible.value = true;
    };

    const closeModal = () => {
      isModalVisible.value = false;
    };

    return {
      closeModal,
      isModalVisible,
      openModal,
    };
  },
};
```

## Modal Window with Sticky Footer

Example of a modal window with a footer fixed at the bottom that remains in place as the content scrolls.

*props: `is-footer-sticky`*

```html
<a-button
  class="a_btn a_btn_primary"
  text="_A_MODAL_PAGE_BTN_OPEN_MODAL_"
  @click="openModal"
></a-button>

<a-modal
  v-if="isModalVisible"
  :body-html="bodyHtml"
  :close="closeModal"
  :is-footer-sticky="true"
  header-text="Aloha"
></a-modal>
```

```js
import {
  ref,
} from "vue";

import { 
  AButton,
  AModal,
} from "aloha-vue";
    
export default {
  name: "PageModalFooterSticky",
  components: {
    AButton,
    AModal,
  },
  setup() {
    const isModalVisible = ref(undefined);
    const bodyHtml = `<ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
      <li>10</li>
      <li>11</li>
      <li>12</li>
      <li>13</li>
      <li>14</li>
      <li>15</li>
      <li>16</li>
      <li>17</li>
      <li>18</li>
      <li>19</li>
      <li>20</li>
      <li>21</li>
      <li>22</li>
      <li>23</li>
      <li>24</li>
      <li>25</li>
      <li>26</li>
      <li>27</li>
      <li>28</li>
      <li>29</li>
      <li>30</li>
      <li>31</li>
      <li>32</li>
      <li>33</li>
      <li>34</li>
      <li>35</li>
      <li>36</li>
      <li>37</li>
      <li>38</li>
      <li>39</li>
      <li>40</li>
    </ul>`;

    const openModal = () => {
      isModalVisible.value = true;
    };

    const closeModal = () => {
      isModalVisible.value = false;
    };

    return {
      bodyHtml,
      closeModal,
      isModalVisible,
      openModal,
    };
  },
};
```

## Customizing the Save Button

This example demonstrates various options for customizing the save button.

Here, the props **save**, **save-button-attributes**, **save-button-class**, and **save-button-id** are used to customize the save button. The save button is given a custom text tag, custom classes, and a custom ID.

*props: `save`, `save-button-attributes`, `save-button-class`, `save-button-id`, `save-button-text`*

```html
<a-button
  class="a_btn a_btn_primary"
  text="_A_MODAL_PAGE_BTN_OPEN_MODAL_"
  @click="openModal"
></a-button>

<a-modal
  v-if="isModalVisible"
  header-text="Aloha"
  :close="closeModal"
  :save="saveModal"
  :save-button-attributes="{ textTag: 'strong' }"
  save-button-class="a_btn a_btn_success"
  save-button-id="btn_save"
></a-modal>
```

```js
import {
  ref,
} from "vue";

import { 
  AButton,
  AModal,
} from "aloha-vue";
    
export default {
  name: "PageModalSaveButton",
  components: {
    AButton,
    AModal,
  },
  setup() {
    const isModalVisible = ref(undefined);
    
    const openModal = () => {
      isModalVisible.value = true;
    };

    const closeModal = () => {
      isModalVisible.value = false;
    };
    
    const saveModal = () => {
      console.log("saveModal");
      closeModal();
    };

    return {
      closeModal,
      isModalVisible,
      openModal,
      saveModal,
    };
  },
};
```

## Using **selector-close** for Focus

This example demonstrates the use of **selector-close** to set focus on specific elements after closing the modal.

Focus is set to the elements with IDs 'btn_aloha' and 'btn_open_modal' after closing the modal. This helps to maintain focus in the browser.

*props: `selector-close`*

```html
<a-button
  id="btn_open_modal"
  class="a_btn a_btn_primary"
  text="_A_MODAL_PAGE_BTN_OPEN_MODAL_"
  @click="openModal"
></a-button>

<a-modal
  v-if="isModalVisible"
  header-text="Aloha"
  :close="closeModal"
  :selector-close="['#btn_aloha', '#btn_open_modal']"
></a-modal>
```

```js
import {
  ref,
} from "vue";

import { 
  AButton,
  AModal,
} from "aloha-vue";
    
export default {
  name: "PageModalSelectorClose",
  components: {
    AButton,
    AModal,
  },
  setup() {
    const isModalVisible = ref(undefined);
    
    const openModal = () => {
      isModalVisible.value = true;
    };

    const closeModal = () => {
      isModalVisible.value = false;
    };

    return {
      closeModal,
      isModalVisible,
      openModal,
    };
  },
};
```

## Using **selector-close-ids** for Focus

This example demonstrates the use of **selector-close-ids** to set focus on specific elements with IDs after closing the modal.

Focus is set to the elements with IDs 'btn_aloha' and 'btn_open_modal_id' after closing the modal. This helps to maintain focus in the browser.

*props: `selector-close-ids`*

```html
<a-button
  id="btn_open_modal_id"
  class="a_btn a_btn_primary"
  text="_A_MODAL_PAGE_BTN_OPEN_MODAL_"
  @click="openModal"
></a-button>

<a-modal
  v-if="isModalVisible"
  header-text="Aloha"
  :close="closeModal"
  :selector-close-ids="['btn_aloha', 'btn_open_modal_id']"
></a-modal>
```

```js
import {
  ref,
} from "vue";

import { 
  AButton,
  AModal,
} from "aloha-vue";
    
export default {
  name: "PageModalSelectorCloseIds",
  components: {
    AButton,
    AModal,
  },
  setup() {
    const isModalVisible = ref(undefined);
    
    const openModal = () => {
      isModalVisible.value = true;
    };

    const closeModal = () => {
      isModalVisible.value = false;
    };

    return {
      closeModal,
      isModalVisible,
      openModal,
    };
  },
};
```

## Using the **size** prop to control modal size

This example demonstrates the use of the **size** prop to adjust the size of the modal as needed.

The modal size is based on options such as 'small', 'large', 'xl', 'xxl', and 'fullscreen'.

*props: `size`*

```html
<div 
  class="a_btn_group"
  role="group"
>
  <a-button
    class="a_btn a_btn_outline_secondary"
    text="_A_MODAL_PAGE_BTN_OPEN_MODAL_"
    text-after=" (small)"
    @click="openModal('small')"
  ></a-button>
  <a-button
    class="a_btn a_btn_outline_secondary"
    text="_A_MODAL_PAGE_BTN_OPEN_MODAL_"
    text-after=" (large)"
    @click="openModal('large')"
  ></a-button>
  <a-button
    class="a_btn a_btn_outline_secondary"
    text="_A_MODAL_PAGE_BTN_OPEN_MODAL_"
    text-after=" (xl)"
    @click="openModal('xl')"
  ></a-button>
  <a-button
    class="a_btn a_btn_outline_secondary"
    text="_A_MODAL_PAGE_BTN_OPEN_MODAL_"
    text-after=" (xxl)"
    @click="openModal('xxl')"
  ></a-button>
  <a-button
    class="a_btn a_btn_outline_secondary"
    text="_A_MODAL_PAGE_BTN_OPEN_MODAL_"
    text-after=" (fullscreen)"
    @click="openModal('fullscreen')"
  ></a-button>
</div>

<a-modal
  v-if="isModalVisible"
  header-text="Aloha"
  :close="closeModal"
  :size="sizeModal"
></a-modal>
```

```js
import {
  ref,
} from "vue";

import { 
  AButton,
  AModal,
} from "aloha-vue";
    
export default {
  name: "PageModalSize",
  components: {
    AButton,
    AModal,
  },
  setup() {
    const isModalVisible = ref(undefined);
    const sizeModal = ref(undefined);

    const openModal = size => {
      sizeModal.value = size;
      isModalVisible.value = true;
    };

    const closeModal = () => {
      isModalVisible.value = false;
    };

    return {
      closeModal,
      isModalVisible,
      openModal,
      sizeModal,
    };
  },
};
```

## Using slots for modal content

This example demonstrates the use of various slots for customizing the content in the modal.

*slots: `modalHeader`, `modalBody`, `modalFooterPrepend`, `modalFooterAppend`*

```html
<a-button
  class="a_btn a_btn_primary"
  text="_A_MODAL_PAGE_BTN_OPEN_MODAL_"
  @click="openModal"
></a-button>

<a-modal
  v-if="isModalVisible"
  :close="closeModal"
>
  <template
    v-slot:modalHeader
  >
    <span>Aloha</span>
  </template>
  
  <template
    v-slot:modalBody
  >
    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
  </template>
  
  <template
    v-slot:modalFooterPrepend
  >
    <a-button
      class="a_btn a_btn_primary"
      icon-left="ChevronLeft"
    ></a-button>
  </template>
  
  <template
    v-slot:modalFooterAppend
  >
    <a-button
      class="a_btn a_btn_primary"
      text="Aloha"
    ></a-button>
  </template>
</a-modal>
```

```js
import {
  ref,
} from "vue";

import { 
  AButton,
  AModal,
} from "aloha-vue";
    
export default {
  name: "PageModalSlots",
  components: {
    AButton,
    AModal,
  },
  setup() {
    const isModalVisible = ref(undefined);
    
    const openModal = () => {
      isModalVisible.value = true;
    };

    const closeModal = () => {
      isModalVisible.value = false;
    };

    return {
      closeModal,
      isModalVisible,
      openModal,
    };
  },
};
```

## Modal inside a modal

This example demonstrates the ability to open one modal window inside another. All modals can be correctly stacked by **z-index** and function independently of each other.

```html
<a-button
  class="a_btn a_btn_primary"
  text="_A_MODAL_PAGE_BTN_OPEN_MODAL_"
  @click="openModal"
></a-button>

<a-modal
  v-if="isModalVisible"
  :close="closeModal"
>
  <template
    v-slot:modalHeader
  >
    <span>Aloha</span>
  </template>
  
  <template
    v-slot:modalBody
  >
    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
  </template>
  
  <template
    v-slot:modalFooterPrepend
  >
    <a-button
      class="a_btn a_btn_primary"
      icon-left="ChevronLeft"
    ></a-button>
  </template>
  
  <template
    v-slot:modalFooterAppend
  >
    <a-button
      class="a_btn a_btn_primary"
      text="Aloha"
    ></a-button>
  </template>
</a-modal>
```

```js
import {
  ref,
} from "vue";

import { 
  AButton,
  AModal,
} from "aloha-vue";
    
export default {
  name: "PageModalSlots",
  components: {
    AButton,
    AModal,
  },
  setup() {
    const isModalVisible = ref(undefined);
    
    const openModal = () => {
      isModalVisible.value = true;
    };

    const closeModal = () => {
      isModalVisible.value = false;
    };

    return {
      closeModal,
      isModalVisible,
      openModal,
    };
  },
};
```

## Props

| name | type | default | required | description |
| --- | --- | --- | --- | --- |
| always-translate | Boolean |  |  | Forces translation regardless of the `is-translate` flag. |
| backdrop-z-index | Number |  |  | If set, this prop specifies the CSS z-index for the modal window's backdrop. |
| body-html | Object | "" |  | The HTML content of the modal window. |
| body-html-class | String / Array / Object |  |  | Adds a **CSS** class to the **HTML** that can be used in the modal window. **body-html** |
| class-extra | String / Object | a_modal_class_extra |  | Additional **CSS** class for the modal window, which can be used for automated tests or as an additional selector. |
| close | Function |  | yes | The function that enables closing the modal. |
| close-button-attributes | Object | () => ({}) |  | Attributes for the modal's close button. [(AButton)](button.md) |
| close-button-class | String / Array / Object | a_btn a_btn_secondary |  | The class or classes of the close button. [(AButton)](button.md) |
| close-button-id | String |  |  | The ID of the close button. |
| close-button-text | String | _A_MODAL_BTN_CANCEL_ |  | The text on the close button. |
| close-button-text-screen-reader-footer | String | _A_MODAL_BTN_TEXT_SCREEN_READER_CLOSE_FOOTER_ |  | Adds screen reader text for the 'Close modal window' button in the footer. |
| close-button-text-screen-reader-header | String | _A_MODAL_BTN_TEXT_SCREEN_READER_CLOSE_HEADER_ |  | Adds screen reader text for the 'Close modal window' button in the header. |
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
| save | Function |  |  | The function that enables saving in the modal. |
| save-button-attributes | Object | () => ({}) |  | Attributes for the save button in the modal. [(AButton)](button.md) |
| save-button-class | String / Array / Object | a_btn a_btn_primary |  | The class or classes of the save button. [(AButton)](button.md) |
| save-button-id | String |  |  | The ID of the save button. |
| save-button-text | String | _A_MODAL_BTN_SAVE_ |  | The text on the save button. |
| save-button-text-screen-reader | String | _A_MODAL_BTN_TEXT_SCREEN_READER_SAVE_ |  | Adds screen reader text for the 'Save' button in the modal window. |
| selector-close | String / Array |  |  | The focus selector to ensure that focus is not lost in the browser when the modal is closed. |
| selector-close-ids | String / Array |  |  | The ID or IDs for focus to ensure that focus is not lost in the browser when the modal is closed. |
| show-close-button-header | Boolean | true |  | Determines whether to display the close button ("x") in the header of the modal window. |
| size | String |  |  | The size of the modal (small, large, xl, xxl, fullscreen). |
| stop | Boolean |  |  | Adds a click event with stopPropagation to the modal window's parent element to prevent the event from propagating further. |
| teleport-selector | String | body |  | CSS selector of the element the modal window is moved to (Vue `Teleport`). Default: `body`. |
| use-escape | Boolean | true |  | Specifies whether the Escape key can close the modal. |
| use-focus-on-start | Boolean | true |  | If set to **true** and no **focus-start-id** is set, focus is placed on the first focusable element in the modal window. |
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

## CSS variables (`scss/utils/modal.scss`, `scss/components/AModal.scss`, `scss/utils/backdrop.scss`)

| name | value | description |
| --- | --- | --- |
| `--a_modal_z_index` |  | Stacking order of the modal. Confirm dialogs use a higher value. |
| `--a_modal_width` |  | Width of the dialog. Changed by the size classes (small, large, xl, xxl). |
| `--a_modal_padding` |  | Padding of the body and the footer. |
| `--a_modal_margin` |  | Space between the dialog and the window edge. 1.75rem from the mobile breakpoint. |
| `--a_modal_color` |  | Text color of the dialog. |
| `--a_modal_bg` |  | Background of the dialog. |
| `--a_modal_border_color` |  | Border color of the dialog. |
| `--a_modal_border_width` |  | Border width of the dialog. |
| `--a_modal_border_radius` |  | Corner radius of the dialog. |
| `--a_modal_box_shadow` |  | Shadow of the dialog. |
| `--a_modal_inner_border_radius` |  | Corner radius of the header and the footer, so they fit inside the border. |
| `--a_modal_header_padding_x` |  | Horizontal padding of the header. |
| `--a_modal_header_padding_y` |  | Vertical padding of the header. |
| `--a_modal_header_padding` |  | Padding of the header. Built from the two values above. |
| `--a_modal_header_border_color` |  | Color of the line under the header. |
| `--a_modal_header_border_width` |  | Width of the line under the header. |
| `--a_modal_title_line_height` |  | Line height of the title. |
| `--a_modal_footer_gap` |  | Space between the buttons in the footer. |
| `--a_modal_footer_bg` |  | Background of the footer. |
| `--a_modal_footer_border_color` |  | Color of the line above the footer. |
| `--a_modal_footer_border_width` |  | Width of the line above the footer. |
| `--a_modal_footer_sticky_gap` |  | Space around the buttons in the sticky footer. |
| `--a_modal_footer_sticky_bg` |  | Background of the sticky footer. Translucent, so the content shows through. |
| `--a_modal_footer_sticky_blur` |  | Blur of the content behind the sticky footer. |
| `--a_modal_footer_sticky_actions_bg` |  | Background of the button area in the sticky footer. |
| `--a_backdrop_z_index` |  | Stacking order of the backdrop. Confirm dialogs use a higher value. |
| `--a_backdrop_bg` |  | Color of the backdrop. |
| `--a_backdrop_opacity` |  | Opacity of the visible backdrop. |
