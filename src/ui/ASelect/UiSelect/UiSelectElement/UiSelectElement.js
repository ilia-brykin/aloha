import {
  h,
} from "vue";

import PuxTranslate from "../../../PuxTranslate/PuxTranslate.vue";

import IsFilter from "../../../../filters/IsFilter";
import {
  get
} from "lodash-es";

// @vue/component
export default {
  name: "UiSelectElement",
  components: {
    PuxTranslate,
  },
  props: {
    options: {
      type: Object,
      default: () => ({}),
      required: true,
    },
    element: {
      type: [String, Number, Boolean, Array, Object, Date, Function, Symbol],
      required: false,
      default: undefined,
    },
    isEmpty: {
      type: Boolean
    },
    iconOkShow: {
      type: Boolean,
    },
    labelClassName: {
      type: String,
      default: undefined,
    },
  },
  computed: {
    emptyLabel() {
      if (this.isEmpty) {
        return this.options.emptyLabel || "_LBL_UI_SELECT_ELEMENT_EMPTY_";
      }
      return undefined;
    },

    notFoundLabel() {
      if (!this.isEmpty) {
        return this.options.notFoundLabel || "_LBL_UI_SELECT_ELEMENT_NOT_FOUND_";
      }
      return undefined;
    },

    labelLocal() {
      if (this.options.keyArray) {
        return this.element;
      }
      const LABEL = this.options.keyLabelCallback ? this.options.keyLabelCallback({ item: this.element }) : get(this.element, this.keyLabelLocal);
      return LABEL;
    },

    keyLabelLocal() {
      return this.options.keyLabel || "label";
    },

    getLabelPart() {
      return ({ item }) => {
        return item.string || get(this.element, item.keyLabel || "label");
      };
    },

    getLabelWithFilter() {
      return ({ item }) => {
        if (item.filter) {
          return IsFilter(this.getLabelPart({ item }), item.filter, item.filterParameter);
        }
        return this.getLabelPart({ item });
      };
    },

    placeholderLocal() {
      return this.options.placeholder;
    },

    labelRender() {
      if (this.options.dataTranslate) {
        return h(PuxTranslate, {
          tag: "span",
          class: this.labelClassName,
          html: this.labelLocal,
          title: this.labelLocal,
          extra: this.options.extra,
        });
      }
      return h("span", {
        class: this.labelClassName,
        title: this.labelLocal,
      }, this.labelLocal);
    },

    placeholderRender() {
      return h(PuxTranslate, {
        tag: "span",
        html: this.placeholderLocal,
        title: this.placeholderLocal,
        extra: this.options.extra,
      });
    },

    emptyLabelRender() {
      return h(PuxTranslate, {
        tag: "span",
        html: this.emptyLabel,
        title: this.emptyLabel,
        extra: this.options.extra,
      });
    },

    notFoundLabelRender() {
      return h(PuxTranslate, {
        tag: "span",
        html: this.notFoundLabel,
        title: this.notFoundLabel,
        extra: this.options.extra,
      });
    },
  },
  render() {
    return h("span", {
      class: [
        this.labelClassName,
      ],
    }, [
      this.iconOkShow && h(
        "span",
        {
          class: "ui_select__menu__link__icon_box",
        },
      ),
      this.options.slot &&
      this.options.slot !== "form-element-readonly" && // TODO: Workaround für KatalogeAdminDetails
      this.$slots[this.options.slot] ?
        h(
          "span",
          this.$slots[this.options.slot]({
            item: this.element
          }),
        ) :
      this.options.keyLabelJson ?

        this.options.keyLabelJson.map(item => {
          return h(
            item.tag || "span",
            {
              class: [
                item.class
              ],
              style: item.style,
              attrs: item.attrs,
            },
            this.getLabelWithFilter({ item }),
          );
        }) :
        this.labelLocal ?
          this.labelRender :
          this.placeholderLocal ?
            this.placeholderRender :
            this.emptyLabel ?
              this.emptyLabelRender :
              this.notFoundLabelRender
    ]);
  },
};
