import {
  ref,
  toRef,
} from "vue";

import {
  getModelFromFile,
  isFileAccepted,
} from "../utils/utils";

import {
  getTranslatedText,
} from "../../../ATranslation/compositionAPI/UtilsAPI";

export default function FilesAPI(props, {
  changeModel,
  clearModel,
  emit,
  maxSizeText,
  modelValueListLocal,
  releasePreviewUrl,
}) {
  const accept = toRef(props, "accept");
  const disabled = toRef(props, "disabled");
  const isAppend = toRef(props, "isAppend");
  const isMultiple = toRef(props, "isMultiple");
  const maxFiles = toRef(props, "maxFiles");
  const maxSize = toRef(props, "maxSize");

  const rejectedFiles = ref([]);
  // Text for the aria-live region: what has changed
  const liveMessage = ref("");

  const getReason = ({ file, count }) => {
    if (!isFileAccepted({ file, accept: accept.value })) {
      return {
        reason: "type",
        text: getTranslatedText({ placeholder: "_A_INPUT_FILE_ERROR_TYPE_" }),
      };
    }
    if (maxSize.value > 0 && file.size > maxSize.value) {
      return {
        reason: "size",
        text: getTranslatedText({ placeholder: "_A_INPUT_FILE_ERROR_SIZE_{{size}}_", extra: { size: maxSizeText.value } }),
      };
    }
    const LIMIT = isMultiple.value ? maxFiles.value : 1;
    if (LIMIT > 0 && count >= LIMIT) {
      return {
        reason: "count",
        text: getTranslatedText({ placeholder: "_A_INPUT_FILE_ERROR_MAX_FILES_{{count}}_", extra: { count: LIMIT } }),
      };
    }
    return undefined;
  };

  const addFiles = files => {
    if (disabled.value || !files?.length) {
      return;
    }
    const IS_APPEND = isMultiple.value && isAppend.value;
    const MODELS_OLD = IS_APPEND ? [...modelValueListLocal.value] : [];
    const MODELS_NEW = [];
    const REJECTED = [];
    files.forEach(file => {
      const ERROR = getReason({ file, count: MODELS_OLD.length + MODELS_NEW.length });
      if (ERROR) {
        REJECTED.push({ name: file.name, file, ...ERROR });
        return;
      }
      MODELS_NEW.push(getModelFromFile(file));
    });

    rejectedFiles.value = REJECTED;
    if (REJECTED.length) {
      emit("reject", { files: REJECTED });
    }

    const MESSAGES = [];
    if (MODELS_NEW.length) {
      if (!IS_APPEND) {
        modelValueListLocal.value.forEach(releasePreviewUrl);
      }
      const MODELS = [...MODELS_OLD, ...MODELS_NEW];
      changeModel({
        model: isMultiple.value ? MODELS : MODELS[0],
      });
      MESSAGES.push(getTranslatedText({ placeholder: "_A_INPUT_FILE_ADDED_{{count}}_", extra: { count: MODELS_NEW.length } }));
    }
    if (REJECTED.length) {
      MESSAGES.push(getTranslatedText({ placeholder: "_A_INPUT_FILE_REJECTED_{{count}}_", extra: { count: REJECTED.length } }));
    }
    liveMessage.value = MESSAGES.join(" ");
  };

  const removeFile = ({ index }) => {
    if (disabled.value) {
      return;
    }
    const MODELS = [...modelValueListLocal.value];
    const [MODEL] = MODELS.splice(index, 1);
    releasePreviewUrl(MODEL);
    if (isMultiple.value) {
      changeModel({ model: MODELS });
    } else {
      clearModel();
    }
    emit("remove", { model: MODEL, index });
    liveMessage.value = getTranslatedText({ placeholder: "_A_INPUT_FILE_REMOVED_{{name}}_", extra: { name: MODEL?.name } });
  };

  const closeRejected = () => {
    rejectedFiles.value = [];
  };

  const onInput = $event => {
    const FILES = $event.target.files;
    if (FILES?.length) {
      addFiles(Array.from(FILES));
    }
    // So the same file can be chosen again
    $event.target.value = "";
  };

  return {
    addFiles,
    closeRejected,
    liveMessage,
    onInput,
    rejectedFiles,
    removeFile,
  };
}
