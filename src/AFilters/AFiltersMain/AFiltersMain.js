import {
  h,
} from "vue";
import {
  AButton,
  AForm,
} from "../../index";

import IdAPI from "./compositionAPI/IdAPI";
import MainFilterAPI from "./compositionAPI/MainFilterAPI";
import SearchAPI from "./compositionAPI/SearchAPI";

const Search = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
</svg>`;


export default {
  name: "AFiltersMain",
  props: {
    disabled: {
      type: Boolean,
      required: false,
    },
    excludeRenderAttributes: {
      type: Array,
      required: false,
      default: () => [],
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
      return null;
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
        excludeRenderAttributes: this.excludeRenderAttributes,
        modelValue: this.mainModel,
        showErrors: false,
        onChange: this.updateMainModel,
      }, {
        formDataAppend: () => h(AButton, {
          class: "a_btn a_btn_primary a_text_nowrap a_filters_top__search",
          iconLeft: Search,
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
