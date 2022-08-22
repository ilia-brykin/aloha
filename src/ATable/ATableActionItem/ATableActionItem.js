import {
  computed,
  h,
  resolveComponent,
  toRef,
} from "vue";

import AIcon from "../../AIcon/AIcon";

export default {
  name: "ATableActionItem",
  props: {
    action: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const action = toRef(props, "action");
    const type = computed(() => {
      return action.value.type || "button";
    });

    return {
      type,
    };
  },
  render() {
    if (this.type === "button") {
      return h("button", {
        id: this.action.id,
        class: ["a_table__action", this.action.class],
        disabled: this.action.disabled,
        onClick: this.action.callback,
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
        h("span", {
          innerHTML: this.action.label,
        }),
      ]);
    }
    if (this.type === "link") {
      return h(resolveComponent("RouterLink"), {
        id: this.action.id,
        class: ["a_table__action", this.action.class],
        to: this.action.to,
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
        h("span", {
          innerHTML: this.action.label,
        }),
      ]);
    }
    if (this.type === "dropdown") {
      return h("span", "muster dropdown");
    }
  },
};
