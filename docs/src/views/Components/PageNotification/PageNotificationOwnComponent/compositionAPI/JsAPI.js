export default function JsAPI() {
  const codeJs = `import {
  h,
} from "vue";

import {
  AButton,
  ANotificationAPI,
  ATranslation,
} from "aloha-vue";

// own content: gets its props, the notification and close()
const UploadDone = {
  props: {
    close: {
      type: Function,
      required: true,
    },
    file: {
      type: String,
      required: true,
    },
    notification: {
      type: Object,
      required: true,
    },
  },
  render() {
    return h("div", [
      h(ATranslation, {
        tag: "p",
        class: "a_mb_2",
        text: "_A_NOTIFICATION_EXAMPLE_UPLOAD_TEXT_",
        extra: { file: this.file },
      }),
      h(AButton, {
        class: "a_btn a_btn_primary a_btn_small",
        text: "_A_NOTIFICATION_EXAMPLE_UPLOAD_OPEN_",
        onClick: this.close,
      }),
    ]);
  },
};

export default {
  components: {
    AButton,
  },
  setup() {
    const {
      addNotification,
    } = ANotificationAPI();

    const add = () => {
      addNotification({
        component: UploadDone,
        props: { file: "report.pdf" },
        timeout: 0,
      });
    };

    return {
      add,
    };
  },
};`;

  return {
    codeJs,
  };
}
