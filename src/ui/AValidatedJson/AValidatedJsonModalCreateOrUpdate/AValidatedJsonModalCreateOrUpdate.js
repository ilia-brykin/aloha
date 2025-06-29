import {
  h,
} from "vue";
import {
  AModalForm,
} from "../../../index";

import DisabledAPI from "./composiitionAPI/DisabledAPI";
import ModelAPI from "./composiitionAPI/ModelAPI";
import SaveAPI from "./composiitionAPI/SaveAPI";
import TextAPI from "./composiitionAPI/TextAPI";

// @vue/component
export default {
  name: "AValidatedJsonModalCreateOrUpdate",
  props: {
    close: {
      type: Function,
      required: true,
    },
    children: {
      type: Array,
      required: true,
    },
    currentModel: {
      type: Object,
      required: false,
      default: undefined,
    },
    elementLabelTranslated: {
      type: String,
      required: false,
      default: undefined,
    },
    isCreate: {
      type: Boolean,
      required: true,
    },
    selectorCloseIds: {
      type: String,
      required: false,
      default: undefined,
    },
  },
  setup(props) {
    const {
      headerText,
      saveButtonText,
    } = TextAPI(props);

    const {
      initModel,
      model,
      updateModel,
    } = ModelAPI(props);

    const {
      isAnyRequiredElementEmpty,
    } = DisabledAPI(props, {
      model,
    });

    const {
      save,
    } = SaveAPI(props, {
      isAnyRequiredElementEmpty,
      model,
    });

    initModel();

    return {
      headerText,
      isAnyRequiredElementEmpty,
      model,
      save,
      saveButtonText,
      updateModel,
    };
  },
  render() {
    return h(AModalForm, {
      close: this.close,
      dataForm: this.children,
      disabledSave: this.isAnyRequiredElementEmpty,
      headerText: this.headerText,
      extra: {
        elementLabel: this.elementLabelTranslated,
      },
      modelValue: this.model,
      save: this.save,
      saveButtonText: this.saveButtonText,
      selectorCloseIds: this.selectorCloseIds,
      size: "large",
      "onUpdate:modelValue": this.updateModel,
    });
  },
};
