import {
  h,
} from "vue";

import AElement from "../../AElement/AElement";

import ClickAPI from "./compositionAPI/ClickAPI";
import IdAPI from "./compositionAPI/IdAPI";
import LabelAPI from "./compositionAPI/LabelAPI";
import PropsTypeAPI from "./compositionAPI/PropsTypeAPI";
import UIExcludeRenderAttributesAPI from "../compositionApi/UIExcludeRenderAttributesAPI";

export default {
  name: "ALabel",
  props: {
    clickLabel: {
      type: Function,
      required: false,
      default: undefined,
    },
    excludeRenderAttributes: {
      type: Array,
      required: false,
      default: () => [],
    },
    hideFor: {
      type: Boolean,
      required: false,
      default: undefined,
    },
    hideId: {
      type: Boolean,
      required: false,
      default: undefined,
    },
    id: {
      type: String,
      required: true,
    },
    idSuffix: {
      type: String,
      required: false,
      default: "_label",
    },
    isLabelFloat: {
      type: Boolean,
      required: false,
    },
    label: {
      type: [String, Number],
      required: false,
      default: undefined,
    },
    labelClass: {
      required: false,
    },
    labelScreenReader: {
      type: String,
      required: false,
      default: undefined,
    },
    loading: {
      type: Boolean,
      required: false,
    },
    prevent: {
      type: Boolean,
      required: false,
      default: undefined,
    },
    required: {
      type: Boolean,
      required: false,
      default: false,
    },
    stop: {
      type: Boolean,
      required: false,
      default: undefined,
    },
    tag: {
      type: String,
      required: false,
      default: "label",
    },
    type: {
      type: String,
      required: false,
    },
  },
  setup(props) {
    const {
      attributesToExcludeFromRender,
    } = UIExcludeRenderAttributesAPI(props);

    const {
      hideForLocal,
      hideIdLocal,
      preventLocal,
      stopLocal,
    } = PropsTypeAPI(props);

    const {
      forLabelLocal,
      idLabelLocal,
    } = IdAPI(props, {
      hideForLocal,
      hideIdLocal,
    });

    const {
      isLabel,
      labelLocal,
      textAfterLabel,
      titleLocal,
    } = LabelAPI(props);

    const {
      onClick,
    } = ClickAPI(props, {
      idLabelLocal,
      preventLocal,
      stopLocal,
    });

    return {
      attributesToExcludeFromRender,
      forLabelLocal,
      idLabelLocal,
      isLabel,
      labelLocal,
      onClick,
      textAfterLabel,
      titleLocal,
    };
  },
  render() {
    return h(AElement, {
      id: this.idLabelLocal,
      class: ["a_form_element_label", this.labelClass],
      for: this.forLabelLocal,
      html: this.labelLocal,
      loading: this.loading,
      loadingAlign: "right",
      loadingClass: "a_spinner_small a_form_element_label__spinner",
      tag: this.tag,
      textAfter: this.textAfterLabel,
      textAriaHidden: !!this.labelScreenReader,
      textScreenReader: this.labelScreenReader,
      title: this.titleLocal,
      type: "text",
      onClick: this.onClick,
      ...this.attributesToExcludeFromRender,
    });
  },
};
