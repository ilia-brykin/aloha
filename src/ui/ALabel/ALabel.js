import {
  h,
} from "vue";

import ASpinner from "../../ASpinner/ASpinner";
import ATranslation from "../../ATranslation/ATranslation";

import ClickAPI from "./compositionAPI/ClickAPI";
import IdAPI from "./compositionAPI/IdAPI";
import LabelAPI from "./compositionAPI/LabelAPI";
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
    id: {
      type: String,
      required: true,
    },
    isIdVisible: {
      type: Boolean,
      required: false,
      default: true,
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
    required: {
      type: Boolean,
      required: false,
      default: false,
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
      idLabelAttribut,
    } = IdAPI(props);

    const {
      textAfterLabel,
    } = TextAfterAPI(props);

    const {
      isLabel,
    } = LabelAPI(props);

    const {
      onClick,
    } = ClickAPI(props);

    return {
      attributesToExcludeFromRender,
      idLabelAttribut,
      isLabel,
      onClick,
      textAfterLabel,
    };
  },
  render() {
    return h("label", {
      for: this.id,
      class: ["a_form_element_label", this.labelClass],
      onClick: this.onClick,
      ...this.idLabelAttribut,
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
