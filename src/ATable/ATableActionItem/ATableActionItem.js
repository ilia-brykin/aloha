import {
  computed,
  h,
  resolveComponent,
  toRef,
  withDirectives,
} from "vue";

import AIcon from "../../AIcon/AIcon";

import ASafeHtml from "../../directives/ASafeHtml";

export default {
  name: "ATableActionItem",
  props: {
    action: {
      type: Object,
      required: true,
    },
    disabled: {
      type: Boolean,
      required: false,
    },
  },
  setup(props) {
    const action = toRef(props, "action");
    const type = computed(() => {
      return action.value.type || "button";
    });


    const callbackLocal = () => {
      action.value.callback({
        id: action.value.id,
        action: action.value,
      });
    };

    return {
      callbackLocal,
      type,
    };
  },
  render() {
    if (this.type === "button") {
      return h("button", {
        id: this.action.id,
        class: ["a_table__action", this.action.class],
        disabled: this.action.disabled || this.disabled,
        onClick: this.callbackLocal,
      }, [
        this.action.title && h("span", {
          class: "a_position_absolute_all",
          title: this.action.title,
          ariaHidden: true,
        }),
        this.action.icon && h(AIcon, {
          class: "a_table__action__icon",
          icon: this.action.icon,
        }),
        withDirectives(h("span"), [
          [ASafeHtml, this.action.label],
        ]),
      ]);
    }
    if (this.type === "link") {
      const LINK_TAG = this.action.to ?
        resolveComponent("RouterLink") :
        "a";

      return h(LINK_TAG, {
        id: this.action.id,
        class: ["a_table__action", this.action.class],
        to: this.action.to,
        href: this.action.href,
        disabled: this.action.disabled,
      }, () => [
        this.action.title && h("span", {
          class: "a_position_absolute_all",
          title: this.action.title,
          ariaHidden: true,
        }),
        this.action.icon && h(AIcon, {
          class: "a_table__action__icon",
          icon: this.action.icon,
        }),
        withDirectives(h("span"), [
          [ASafeHtml, this.action.label],
        ]),
      ]);
    }
    if (this.type === "dropdown") {
      return h("span", "muster dropdown");
    }
  },
};
