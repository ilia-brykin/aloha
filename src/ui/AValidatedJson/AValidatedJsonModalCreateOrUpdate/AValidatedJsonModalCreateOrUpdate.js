import {
  h,
} from "vue";
import {
  AModalForm,
} from "../../../index";

import DataFormAPI from "./composiitionAPI/DataFormAPI";
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
    currentIndex: {
      type: Number,
      required: false,
      default: undefined,
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
    modelAll: {
      type: Array,
      required: true,
    },
    selectorCloseIds: {
      type: String,
      required: false,
      default: undefined,
    },
    typedBaseId: {
      type: String,
      required: false,
      default: undefined,
    },
    typedChildren: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    uniqueChildrenIds: {
      type: Array,
      required: false,
      default: () => [],
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
      changeDataForm,
      dataForm,
    } = DataFormAPI(props, {
      model,
      updateModel,
    });

    const {
      isAnyRequiredElementEmpty,
    } = DisabledAPI(props, {
      dataForm,
      model,
    });

    const {
      errorsLocal,
      save,
    } = SaveAPI(props, {
      isAnyRequiredElementEmpty,
      model,
    });

    initModel();

    return {
      changeDataForm,
      dataForm,
      errorsLocal,
      headerText,
      isAnyRequiredElementEmpty,
      model,
      save,
      saveButtonText,
    };
  },
  render() {
    return h(AModalForm, {
      close: this.close,
      dataForm: this.dataForm,
      disabledSave: this.isAnyRequiredElementEmpty,
      headerText: this.headerText,
      extra: {
        elementLabel: this.elementLabelTranslated,
      },
      errors: this.errorsLocal,
      modelValue: this.model,
      save: this.save,
      saveButtonText: this.saveButtonText,
      selectorCloseIds: this.selectorCloseIds,
      size: "large",
      onChange: this.changeDataForm,
    });
  },
};
