export default function ModelAPI() {
  const dataModel = [
    {
      name: "name",
      type: "String",
      description: "_A_INPUT_FILE_MODEL_NAME_DESCRIPTION_",
    },
    {
      name: "size",
      type: "Number",
      description: "_A_INPUT_FILE_MODEL_SIZE_DESCRIPTION_",
    },
    {
      name: "type",
      type: "String",
      description: "_A_INPUT_FILE_MODEL_TYPE_DESCRIPTION_",
    },
    {
      name: "file",
      type: "File",
      description: "_A_INPUT_FILE_MODEL_FILE_DESCRIPTION_",
    },
    {
      name: "url",
      type: "String",
      description: "_A_INPUT_FILE_MODEL_URL_DESCRIPTION_",
    },
    {
      name: "download",
      type: "Boolean",
      description: "_A_INPUT_FILE_MODEL_DOWNLOAD_DESCRIPTION_",
    },
    {
      name: "previewUrl",
      type: "String",
      description: "_A_INPUT_FILE_MODEL_PREVIEW_URL_DESCRIPTION_",
    },
    {
      name: "status",
      type: "String",
      description: "_A_INPUT_FILE_MODEL_STATUS_DESCRIPTION_",
    },
    {
      name: "progress",
      type: "Number",
      description: "_A_INPUT_FILE_MODEL_PROGRESS_DESCRIPTION_",
    },
    {
      name: "errorText",
      type: "String",
      description: "_A_INPUT_FILE_MODEL_ERROR_TEXT_DESCRIPTION_",
    },
  ];

  return {
    dataModel,
  };
}
