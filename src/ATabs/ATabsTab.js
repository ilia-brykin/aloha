import {
  computed,
  h,
  toRef,
} from "vue";

import ATabAPI from "./compositionAPI/ATabAPI";

import AKeysCode from "../const/AKeysCode";

export default {
  name: "ATabsTab",
  props: {
    parentId: {
      type: String,
      required: true,
    },
    tab: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
    idForActiveTab: {
      type: [String, Number],
      required: true,
    },
    keyId: {
      type: String,
      required: true,
    },
  },
  emits: [
    "changeTab",
  ],
  setup(props, { emit }) {
    const {
      idForContent,
      idLocal,
      isActive,
    } = ATabAPI(props);

    const tab = toRef(props, "tab");
    const onChangeTabLocal = $event => {
      if (tab.value.disabled) {
        return;
      }
      emit("changeTab", { $event, tab: tab.value });
    };

    const tabindexLocal = computed(() => {
      return tab.value.disabled ? -1 : 0;
    });

    const onKeydown = $event => {
      if ($event.keyCode === AKeysCode.enter ||
        $event.keyCode === AKeysCode.space) {
        onChangeTabLocal($event);
        $event.stopPropagation();
        $event.preventDefault();
      }
    };

    return {
      idForContent,
      idLocal,
      isActive,
      onChangeTabLocal,
      onKeydown,
      tabindexLocal,
    };
  },
  render() {
    return h("li", {
      class: "a_tabs__list__item",
    }, [
      h("a", {
        id: this.idLocal,
        class: ["a_tabs__list__link", this.tab.class, {
          a_tabs__list__link_active: this.isActive,
          a_tabs__list__link_disabled: this.tab.disabled,
        }],
        role: "tab",
        ariaDisabled: this.tab.disabled,
        ariaControls: this.idForContent,
        ariaSelected: this.isActive,
        tabindex: this.tabindexLocal,
        onClick: this.onChangeTabLocal,
        onKeydown: this.onKeydown,
      }, [
        this.tab.title && h("span", {
          class: "a_position_absolute_all",
          title: this.tab.title,
          ariaHidden: true,
        }),
        h("span", {
          innerHTML: this.tab.label,
        })
      ]),
    ]);
  },
};
