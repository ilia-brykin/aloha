import {
  h,
} from "vue";

import ASpinner from "../../ASpinner/ASpinner";
import ATranslation from "../../ATranslation/ATranslation";

import ClickAPI from "./compositionAPI/ClickAPI";
import IdAPI from "./compositionAPI/IdAPI";
import LabelAPI from "./compositionAPI/LabelAPI";
import PropsTypeAPI from "./compositionAPI/PropsTypeAPI";
import TextAfterAPI from "./compositionAPI/TextAfterAPI";
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
      textAfterLabel,
    } = TextAfterAPI(props);

    const {
      isLabel,
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
      onClick,
      textAfterLabel,
    };
  },
  render() {
    return h("label", {
      id: this.idLabelLocal,
      for: this.forLabelLocal,
      class: ["a_form_element_label", this.labelClass],
      onClick: this.onClick,
      ...this.attributesToExcludeFromRender,
    }, [
      this.isLabel && h(ATranslation, {
        tag: "span",
        html: this.label,
        textAfter: this.textAfterLabel,
      }, () => [
        this.isLabelFloat && h(ATranslation, {
          class: "a_position_absolute_all",
          ariaHidden: true,
          tag: "span",
          title: this.label,
        })
      ]),
      this.loading && h(ASpinner, {
        class: "a_spinner_small a_form_element_label__spinner",
      }),
    ]);
  },
};
