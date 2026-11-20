# AConfirm (Confirm)

AConfirm is a confirmation dialog API built on top of the modal system. Use **AConfirmAPI** to open a confirm window, pass content and button settings, and optionally control loading state, focus return, or external closing.

## Basic usage

The simplest setup: open a confirm dialog with a header, message, and save handler.

*props: `header-text`, `body-html`, `save`*

```html
<a-button
  class="a_btn a_btn_primary"
  text="_A_CONFIRM_EXAMPLE_BASIC_BTN_"
  @click="openConfirmLocal"
></a-button>
```

```js
import {
  AButton,
  AConfirmAPI,
} from "aloha-vue";

export default {
  name: "PageConfirmBasic",
  components: {
    AButton,
  },
  setup() {
    const {
      closeConfirm,
      openConfirm,
    } = AConfirmAPI();

    const onSave = () => {
      closeConfirm();
    };

    const openConfirmLocal = () => {
      openConfirm({
        headerText: "_A_CONFIRM_EXAMPLE_BASIC_MODAL_HEADER_",
        bodyHtml: "_A_CONFIRM_EXAMPLE_BASIC_MODAL_BODY_",
        save: onSave,
      });
    };

    return {
      openConfirmLocal,
    };
  },
};
```

## Custom buttons and size

This example customizes button labels and opens the confirm dialog in a larger size.

*props: `save-button-text`, `close-button-text`, `size`*

```html
<a-button
  class="a_btn a_btn_primary"
  text="_A_CONFIRM_EXAMPLE_BUTTONS_BTN_"
  @click="openConfirmLocal"
></a-button>
```

```js
import {
  AButton,
  AConfirmAPI,
} from "aloha-vue";

export default {
  name: "PageConfirmButtons",
  components: {
    AButton,
  },
  setup() {
    const {
      closeConfirm,
      openConfirm,
    } = AConfirmAPI();

    const onArchive = () => {
      closeConfirm();
    };

    const openConfirmLocal = () => {
      openConfirm({
        headerText: "_A_CONFIRM_EXAMPLE_BUTTONS_MODAL_HEADER_",
        bodyHtml: "_A_CONFIRM_EXAMPLE_BUTTONS_MODAL_BODY_",
        save: onArchive,
        size: "large",
        saveButtonText: "_A_CONFIRM_EXAMPLE_BUTTONS_SAVE_TEXT_",
        closeButtonText: "_A_CONFIRM_EXAMPLE_BUTTONS_CLOSE_TEXT_",
      });
    };

    return {
      openConfirmLocal,
    };
  },
};
```

## Returning focus after close

Use **selector-close-ids** to return focus to specific elements after the confirm dialog is closed.

*props: `selector-close-ids`, `save-button-text`*

```html
<div class="a_btn_group">
  <a-button
    id="btn_confirm_focus"
    class="a_btn a_btn_primary"
    text="_A_CONFIRM_EXAMPLE_FOCUS_BTN_"
    @click="openConfirmLocal"
  ></a-button>

  <a-button
    id="btn_confirm_focus_secondary"
    class="a_btn a_btn_secondary"
    text="_A_CONFIRM_EXAMPLE_FOCUS_SECONDARY_BTN_"
  ></a-button>
</div>
```

```js
import {
  AButton,
  AConfirmAPI,
} from "aloha-vue";

export default {
  name: "PageConfirmFocus",
  components: {
    AButton,
  },
  setup() {
    const {
      closeConfirm,
      openConfirm,
    } = AConfirmAPI();

    const onDelete = () => {
      closeConfirm();
    };

    const openConfirmLocal = () => {
      openConfirm({
        headerText: "_A_CONFIRM_EXAMPLE_FOCUS_MODAL_HEADER_",
        bodyHtml: "_A_CONFIRM_EXAMPLE_FOCUS_MODAL_BODY_",
        saveButtonText: "_A_CONFIRM_EXAMPLE_FOCUS_SAVE_TEXT_",
        save: onDelete,
        selectorCloseIds: [
          "btn_confirm_focus",
          "btn_confirm_focus_secondary",
        ],
      });
    };

    return {
      openConfirmLocal,
    };
  },
};
```

## Loading state and external close

AConfirm can update its state after opening. Here the first example toggles **loading** during an async save, while the second closes the dialog from outside through the event bus.

*props: `loading`, `stop`, `selector-close`*

```html
<div class="a_btn_group">
  <a-button
    class="a_btn a_btn_primary"
    text="_A_CONFIRM_EXAMPLE_ASYNC_BTN_"
    @click="openConfirmLoading"
  ></a-button>

  <a-button
    id="btn_confirm_timeout"
    class="a_btn a_btn_secondary"
    text="_A_CONFIRM_EXAMPLE_TIMEOUT_BTN_"
    @click="openConfirmTimeout"
  ></a-button>
</div>
```

```js
import {
  AButton,
  AConfirmAPI,
  EventBus,
} from "aloha-vue";

export default {
  name: "PageConfirmAsync",
  components: {
    AButton,
  },
  setup() {
    const {
      changeConfirmOptions,
      closeConfirm,
      openConfirm,
    } = AConfirmAPI();

    const onSave = () => {
      changeConfirmOptions({
        loading: true,
      });

      setTimeout(() => {
        changeConfirmOptions({
          loading: false,
        });
        closeConfirm();
      }, 1200);
    };

    const openConfirmLoading = () => {
      openConfirm({
        headerText: "_A_CONFIRM_EXAMPLE_ASYNC_MODAL_HEADER_",
        bodyHtml: "_A_CONFIRM_EXAMPLE_ASYNC_MODAL_BODY_",
        saveButtonText: "_A_CONFIRM_EXAMPLE_ASYNC_SAVE_TEXT_",
        save: onSave,
        stop: true,
      });
    };

    const openConfirmTimeout = () => {
      openConfirm({
        headerText: "_A_CONFIRM_EXAMPLE_TIMEOUT_MODAL_HEADER_",
        bodyHtml: "_A_CONFIRM_EXAMPLE_TIMEOUT_MODAL_BODY_",
        selectorClose: "#btn_confirm_timeout",
      });

      setTimeout(() => {
        EventBus.$emit("closeModalConfirm");
      }, 2500);
    };

    return {
      openConfirmLoading,
      openConfirmTimeout,
    };
  },
};
```

## Props

| name | type | default | required | description |
| --- | --- | --- | --- | --- |
| header-text | String |  |  | The text in the modal header. |
| body-html | String | "" |  | The HTML content of the modal window. |
| save | Function |  |  | The function that enables saving in the modal. |
| close | Function |  |  | The function that enables closing the modal. |
| extra | Object |  |  | An object with parameters for translations. [(ATranslation)](translation.md) |
| save-button-text | String | _A_MODAL_BTN_SAVE_ |  | The text on the save button. |
| close-button-text | String | _A_MODAL_BTN_CANCEL_ |  | The text on the close button. |
| selector-close | String / Array |  |  | The focus selector to ensure that focus is not lost in the browser when the modal is closed. |
| selector-close-ids | String / Array |  |  | The ID or IDs for focus to ensure that focus is not lost in the browser when the modal is closed. |
| size | String |  |  | The size of the modal (small, large, xl, xxl, fullscreen). |
| loading | Boolean | false |  | Specifies whether the modal is in a loading state. |
| stop | Boolean |  |  | Adds a click event with stopPropagation to the modal window's parent element to prevent the event from propagating further. |
