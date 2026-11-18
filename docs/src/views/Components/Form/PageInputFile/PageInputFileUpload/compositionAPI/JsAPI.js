export default function JsAPI() {
  const codeJs = `import {
  ref,
} from "vue";

import {
  AInputFile,
} from "aloha-vue";

export default {
  name: "PageInputFileUpload",
  components: {
    AInputFile,
  },
  setup() {
    const model = ref([]);

    // Simulated upload. In a real application send item.file, e.g. with FormData and AHttpAPI,
    // and set progress, status and errorText of the item.
    const upload = item => {
      item.status = "uploading";
      item.progress = 0;
      const TIMER = setInterval(() => {
        item.progress += 20;
        if (item.progress < 100) {
          return;
        }
        clearInterval(TIMER);
        if (/error/i.test(item.name)) {
          item.status = "error";
          item.errorText = "_A_INPUT_FILE_EXAMPLE_SERVER_ERROR_";
          return;
        }
        item.status = "success";
      }, 400);
    };

    const onUpdateModel = files => {
      model.value = files;
      model.value.forEach(item => {
        if (!item.status) {
          upload(item);
        }
      });
    };

    return {
      model,
      onUpdateModel,
    };
  },
};`;

  return {
    codeJs,
  };
}
