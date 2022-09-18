import {
  computed,
  h, inject,
  resolveComponent,
  toRef,
} from "vue";

import AIcon from "../AIcon/AIcon";

import {
  get,
} from "lodash-es";
import AKeysCode from "../const/AKeysCode";

export default {
  name: "AMenuPanelLink",
  props: {
    isPanelOpen: {
      type: Boolean,
      required: false,
    },
    item: {
      type: Object,
      required: true,
    },
    keyIcon: {
      type: String,
      required: true,
    },
    keyId: {
      type: String,
      required: true,
    },
    keyLabel: {
      type: String,
      required: true,
    },
    parentId: {
      type: String,
      required: false,
      default: undefined,
    },
  },
  setup(props) {
    const keyIcon = toRef(props, "keyIcon");
    const keyId = toRef(props, "keyId");
    const keyLabel = toRef(props, "keyLabel");
    const item = toRef(props, "item");
    const togglePanel = inject("togglePanel");

    const label = computed(() => {
      return get(item.value, keyLabel.value);
    });

    const id = computed(() => {
      return get(item.value, keyId.value);
    });

    const icon = computed(() => {
      return get(item.value, keyIcon.value);
    });

    const openSubMenu = () => {
      togglePanel({ parentId: id.value });
      const PANEL_ID = `#a_menu_panel_${ id.value || "" }`;
      const PANEL_LINKS_SELECTOR = `${ PANEL_ID } a`;
      setTimeout(() => {
        const EL_LINK = document.querySelector(PANEL_LINKS_SELECTOR);
        if (EL_LINK) {
          EL_LINK.focus();
        }
      });
    };

    const onKeydown = $event => {
      if ($event.keyCode === AKeysCode.enter ||
        $event.keyCode === AKeysCode.space) {
        openSubMenu();
        $event.stopPropagation();
        $event.preventDefault();
      }
    };

    return {
      icon,
      label,
      onKeydown,
      openSubMenu,
    };
  },
  render() {
    const ICON_AND_TEXT = [
      this.icon && h(AIcon, {
        class: "a_menu__link__icon",
        icon: this.icon,
      }),
      h("span", {
        class: "a_menu__link__text",
      }, [
        h("span", {
          class: "a_position_absolute_all",
          title: this.label,
          ariaHidden: true,
        }),
        this.label,
      ]),
    ];

    return h("dd", {
      class: "a_menu__listitem",
    }, [
      this.item.to ?
        h(resolveComponent("RouterLink"), {
          class: "a_menu__link",
          to: this.item.to,
          tabindex: this.isPanelOpen ? 0 : -1,
        }, () => ICON_AND_TEXT) :
        h("a", {
          class: "a_menu__link a_menu__link_btn",
          ariaLabel: "Untermenü öffnen",
          role: "button",
          tabindex: this.isPanelOpen ? 0 : -1,
          onClick: this.openSubMenu,
          onKeydown: this.onKeydown,
        }, [
          h("span", {
            class: "a_menu__link__counter",
          }, [
            h("span", {
              ariaHidden: true,
            }, "5"),
            h(AIcon, {
              class: "a_menu__link__counter__icon",
              icon: "ChevronRight",
            })
          ]),
          ...ICON_AND_TEXT,
        ]),
    ]);
  },
};
