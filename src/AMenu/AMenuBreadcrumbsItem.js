import {
  h, inject, toRef,
} from "vue";

import AIcon from "../AIcon/AIcon";

import AKeysCode from "../const/AKeysCode";
import ChevronLeft from "aloha-svg/dist/js/bootstrap/ChevronLeft";

export default {
  name: "AMenuBreadcrumbsItem",
  props: {
    label: {
      type: [String, Number],
      required: true,
    },
    isBreadcrumbsLinkTruncated: {
      type: Boolean,
      required: true,
    },
    panelParentId: {
      type: [String, Number],
      required: true,
    },
  },
  setup(props,) {
    const panelParentId = toRef(props, "panelParentId");
    const togglePanel = inject("togglePanel");
    const onClick = () => {
      togglePanel({ parentId: panelParentId.value });
    };

    const onKeydown = $event => {
      if ($event.keyCode === AKeysCode.enter ||
        $event.keyCode === AKeysCode.space) {
        onClick();
        $event.stopPropagation();
        $event.preventDefault();
      }
    };

    return {
      onClick,
      onKeydown,
    };
  },
  render() {
    return h("a", {
      class: "a_menu__breadcrumbs__item a_menu__link",
      role: "button",
      tabindex: 0,
      ariaLabel: "Untermenü schließen",
      onClick: this.onClick,
      onKeydown: this.onKeydown,
    }, [
      h(AIcon, {
        icon: ChevronLeft,
        class: "a_mr_2",
      }),
      h("span", {
        class: {
          a_menu__link__text_truncated: this.isBreadcrumbsLinkTruncated,
        },
      }, [
        h("span", {
          ariaHidden: true,
        }, this.label),
        h("span", {
          class: "a_position_absolute_all",
          ariaHidden: true,
          title: this.label
        }),
      ]),
    ]);
  },
};
