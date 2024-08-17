import {
  ref,
  toRef,
} from "vue";

import autosize from "../../../utils/autosize";

export default function AutosizeAPI(props) {
  const isScalable = toRef(props, "isScalable");

  const isAutosizeStarted = ref(false);
  const textareaRef = ref(undefined);

  const initAutosize = () => {
    if (isScalable.value) {
      autosize(textareaRef.value);
      isAutosizeStarted.value = true;
    }
  };

  const destroyAutosize = () => {
    if (isAutosizeStarted.value) {
      autosize.destroy(textareaRef.value);
      isAutosizeStarted.value = false;
    }
  };

  const updateAutosize = () => {
    if (isScalable.value && isAutosizeStarted.value) {
      setTimeout(() => {
        autosize.update(textareaRef.value);
      });
    }
  };

  return {
    destroyAutosize,
    initAutosize,
    textareaRef,
    updateAutosize,
  };
}
