import {
  h,
} from "vue";

import AButton from "../../AButton/AButton";
import AForm from "../../ui/AForm/AForm";

import IdAPI from "./compositionAPI/IdAPI";
import MainFilterAPI from "./compositionAPI/MainFilterAPI";
import SearchAPI from "./compositionAPI/SearchAPI";


export default {
  name: "AFiltersMain",
  props: {
    disabled: {
      type: Boolean,
      required: false,
    },
    filterMain: {
      type: Object,
      required: false,
    },
    id: {
      type: String,
      required: true,
    },
    mainModel: {
      type: Object,
      required: false,
    },
    updateDataKeyByIdFromFilter: {
      type: Function,
      required: true,
    },
    updateMainModel: {
      type: Function,
      required: true,
    },
  },
  emits: [
    "startSearch",
  ],
  setup(props, context) {
    const {
      hasFilterMain,
      dataMainFilter,
    } = MainFilterAPI(props);

    const {
      idFilterTop,
    } = IdAPI(props);

    const {
      onSearch,
    } = SearchAPI(props, context);


    return {
      hasFilterMain,
      dataMainFilter,
      idFilterTop,
      onSearch,
    };
  },
  render() {
    if (!this.hasFilterMain) {
      return "";
    }

    return h("div", {
      id: this.idFilterTop,
      class: "a_filters_top",
    }, [
      h(AForm, {
        idPrefix: this.idFilterTop,
        class: "a_filters_top__form",
        classColumns: "a_filters_top__main_wrapper",
        classColumnDefault: "a_filters_top__main",
        data: this.dataMainFilter,
        modelValue: this.mainModel,
        showErrors: false,
        onChange: this.updateMainModel,
      }, {
        formDataAppend: () => h(AButton, {
          class: "a_btn a_btn_primary a_text_nowrap a_filters_top__search",
          iconLeft: "Search",
          type: "submit",
          text: {
            desktop: "_A_FILTERS_START_SEARCH_",
          },
          textScreenReader: {
            mobile: "_A_FILTERS_START_SEARCH_",
          },
          prevent: true,
          stop: true,
          disabled: this.disabled,
          onClick: this.onSearch,
        }),
      }),
    ]);
  },
};
