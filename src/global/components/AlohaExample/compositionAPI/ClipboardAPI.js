import {
  toRef,
} from "vue";

import ANotificationAPI from "../../../../../../src/compositionAPI/ANotificationAPI";

export default function ClipboardAPI(props) {
  const codeHtml = toRef(props, "codeHtml");
  const codeJs = toRef(props, "codeJs");

  const {
    addNotification,
  } = ANotificationAPI();

  async function copyTextToClipboard(textToCopy) {
    try {
      await navigator.clipboard.writeText(textToCopy);
      addNotification({
        text: "_COPIED_TO_CLIPBOARD_",
      });
    } catch (error) {
      addNotification({
        text: error,
        type: "danger",
      });
    }
  }

  const copyHtmlToClipboard = () => {
    copyTextToClipboard(codeHtml.value);
  };

  const copyJsToClipboard = () => {
    copyTextToClipboard(codeJs.value);
  };

  return {
    copyHtmlToClipboard,
    copyJsToClipboard,
  };
}
