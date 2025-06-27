import {
  h,
} from "vue";
import {
  AModalForm,
} from "../../../index";

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
  },
  setup(props) {
    const {
      headerText,
      saveButtonText,
    } = TextAPI(props);

    const {
      save,
    } = SaveAPI();

    return {
      headerText,
      save,
      saveButtonText,
    };
  },
  render() {
    return h(AModalForm, {
      close: this.close,
      dataForm: this.children,
      headerText: this.headerText,
      extra: {
        elementLabel: this.elementLabelTranslated,
      },
      save: this.save,
      saveButtonText: this.saveButtonText,
      size: "large",
    });
  },
};
