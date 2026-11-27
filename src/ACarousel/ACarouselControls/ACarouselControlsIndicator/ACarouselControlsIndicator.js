import {
  h,
  resolveComponent,
} from "vue";

import AElement from "../../../AElement/AElement";

import ActiveAPI from "./compositionAPI/ActiveAPI";
import AttributesAPI from "./compositionAPI/AttributesAPI";
import IconAPI from "./compositionAPI/IconAPI";

import {
  AKeyChildren,
  AKeyId,
} from "../../../const/AKeys";

export default {
  name: "ACarouselControlsIndicator",
  props: {
    activeId: {
      type: [String, Number],
      required: false,
      default: undefined,
    },
    ariaDisabled: {
      type: Boolean,
      required: false,
    },
    data: {
      type: Object,
      required: true,
    },
    disabled: {
      type: Boolean,
      required: false,
    },
    extra: {
      type: Object,
      required: false,
      default: undefined,
    },
    hide: {
      type: Boolean,
      required: false,
    },
    indicatorsType: {
      type: String,
      required: false,
      default: "dots",
    },
    parentId: {
      type: String,
      required: true,
    },
    texts: {
      type: Object,
      required: true,
    },
  },
  emits: [
    "changeActiveId",
  ],
  setup(props) {
    const {
      indicatorIcon,
    } = IconAPI(props);

    const {
      isActive,
      isActiveInChildren,
    } = ActiveAPI(props);

    const {
      ariaControls,
      extraLocal,
      id,
      tabindex,
      tabText,
    } = AttributesAPI(props, {
      isActive,
    });

    return {
      ariaControls,
      extraLocal,
      id,
      indicatorIcon,
      isActive,
      isActiveInChildren,
      tabindex,
      tabText,
    };
  },
  render() {
    const IS_LABELS = this.indicatorsType === "labels";

    return h("div", {
      class: "a_carousel__tabs__btn__wrapper",
    }, [
      h(AElement, {
        id: this.id,
        "aria-selected": this.isActive ? "true" : "false",
        "aria-controls": this.ariaControls,
        "aria-disabled": this.ariaDisabled,
        class: [
          "a_carousel__tabs__btn",
          {
            a_carousel__tabs__btn_active: this.isActive,
            a_carousel__tabs__btn_hide: this.hide,
          },
        ],
        disabled: this.disabled,
        extra: this.extraLocal,
        iconLeft: IS_LABELS ? undefined : this.indicatorIcon,
        role: "tab",
        tabindex: this.tabindex,
        text: IS_LABELS ? this.tabText : undefined,
        textScreenReader: IS_LABELS ? undefined : this.tabText,
        title: IS_LABELS ? undefined : this.tabText,
        type: "button",
        onClick: () => this.$emit("changeActiveId", { id: this.data[AKeyId] }),
      }),
      this.data?.[AKeyChildren]?.length ?
        h("div", {
          class: [
            "a_carousel__tabs__btn__children",
            {
              a_carousel__tabs__btn__children_active: this.isActiveInChildren,
            },
          ],
        }, [
          this.data[AKeyChildren].map(item => {
            return h(resolveComponent("ACarouselControlsIndicator"), {
              key: item[AKeyId],
              activeId: this.activeId,
              "aria-disabled": this.ariaDisabled,
              data: item,
              disabled: this.disabled,
              extra: this.extra,
              hide: true,
              indicatorsType: this.indicatorsType,
              parentId: this.parentId,
              texts: this.texts,
              onChangeActiveId: arg => this.$emit("changeActiveId", arg),
            });
          }),
        ]) :
        undefined,
    ]);
  },
};
