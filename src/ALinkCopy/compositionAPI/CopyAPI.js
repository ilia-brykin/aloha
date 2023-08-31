import {
  ref,
  toRef,
} from "vue";

import ANotificationAPI from "../../compositionAPI/ANotificationAPI";

import {
  forEach,
} from "lodash-es";

export default function CopyAPI(props) {
  const textCopy = toRef(props, "textCopy");

  const linkRef = ref(undefined);

  const {
    addNotification,
  } = ANotificationAPI();

  const copyText = async() => {
    let text = "";
    if (textCopy.value) {
      text = textCopy.value;
    } else if (linkRef.value?.$el) {
      forEach(linkRef.value.$el.children, child => {
        if (!child.classList.contains("a_sr_only")) { // check visible
          text += child.textContent;
        }
      });
    }
    if (text) {
      try {
        await navigator.clipboard.writeText(text);
        addNotification({
          text: "_A_LINK_COPY_COPIED_TO_CLIPBOARD_",
        });
      } catch (error) {
        console.error(error);
      }
    }
  };

  return {
    copyText,
    linkRef,
  };
}
