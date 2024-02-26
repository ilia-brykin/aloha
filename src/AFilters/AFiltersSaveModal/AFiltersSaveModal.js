import {
  h,
} from "vue";

import AAlert from "../../AAlert/AAlert";
import AModalForm from "../../AModalForm/AModalForm";

import DataFormAPI from "./compositionAPI/DataFormAPI";
import ModelAPI from "./compositionAPI/ModelAPI";
import SaveAPI from "./compositionAPI/SaveAPI";

export default {
  name: "AFiltersSaveModal",
  props: {
    changeModelFiltersSaved: {
      type: Function,
      required: true,
    },
    filtersSaved: {
      type: Array,
      required: true,
    },
    isModelFilterSavedNew: {
      type: Boolean,
      required: true,
    },
    modelFiltersSaved: {
      type: String,
      required: false,
      default: undefined,
    },
    selectorCloseIds: {
      type: String,
      required: true,
    },
    updateFiltersSaved: {
      type: Function,
      required: true,
    },
  },
  emits: [
    "close",
  ],
  setup(props, context) {
    const {
      initModel,
      model,
      updateModel,
    } = ModelAPI(props);

    const {
      dataForm,
      isUpdate,
    } = DataFormAPI(props, {
      model,
    });

    const {
      close,
      disabledBtnSave,
      loading,
      save,
    } = SaveAPI(props, context, {
      isUpdate,
      model,
    });

    initModel();

    return {
      close,
      dataForm,
      disabledBtnSave,
      initModel,
      loading,
      model,
      save,
      updateModel,
    };
  },
  render() {
    return h(AModalForm, {
      close: this.close,
      dataForm: this.dataForm,
      disabledSave: this.disabledBtnSave,
      headerText: "_A_FILTERS_SAVE_MODAL_HEADER_",
      modelValue: this.model,
      idPrefix: "modal_filter_top_",
      loading: this.loading,
      selectorCloseIds: this.selectorCloseIds,
      size: "large",
      save: this.save,
      stop: true,
      zIndex: 1901,
      backdropZIndex: 1900,
      "onUpdate:modelValue": this.updateModel,
    }, {
      modalBodyPrepend: () => [
        h(AAlert, {
          type: "info",
          isVisible: true,
          safeHtml: "_A_FILTERS_SAVE_MODAL_BODY_PREPEND_",
        })
      ],
    });
  },
};
