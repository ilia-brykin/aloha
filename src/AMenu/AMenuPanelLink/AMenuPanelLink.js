import {
  computed,
  h,
  inject,
  toRef,
} from "vue";

import AIcon from "../../AIcon/AIcon";
import ATooltip from "../../ATooltip/ATooltip";

import AFiltersAPI from "../../compositionAPI/AFiltersAPI";
import TitleAPI from "./compositionAPI/TitleAPI";

import AKeyId from "../../ui/const/AKeyId";
import AKeyLabel from "../../ui/const/AKeyLabel";
import AKeyParent from "../../ui/const/AKeyParent";
import AKeysCode from "../../const/AKeysCode";
import {
  setFocusToFirstLinkInPanel
} from "../utils/utils";
import {
  get,
} from "lodash-es";


export default {
  name: "AMenuPanelLink",
  props: {
    dataProParentChildren: {
      type: Object,
      required: true,
    },
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
      required: false,
      default: undefined,
    },
    isLinkInSearchPanel: {
      type: Boolean,
      required: false,
    },
    modelSearch: {
      type: String,
      required: false,
      default: undefined,
    },
    idsSearchVisible: {
      type: Object,
      required: false,
      default: undefined,
    },
  },
  setup(props) {
    const keyIcon = toRef(props, "keyIcon");
    const isLinkInSearchPanel = toRef(props, "isLinkInSearchPanel");
    const modelSearch = toRef(props, "modelSearch");
    const item = toRef(props, "item");
    const idsSearchVisible = toRef(props, "idsSearchVisible");
    const dataProParentChildren = toRef(props, "dataProParentChildren");

    const togglePanel = inject("togglePanel");
    const isLinkTruncated = inject("isLinkTruncated");
    const keySlot = inject("keySlot");

    const currentSlot = computed(() => {
      if (keySlot.value) {
        return get(item.value, keySlot.value);
      }
      return undefined;
    });

    const isLinkDisabled = computed(() => {
      return !!item.value.disabled;
    });

    const isLinkVisible = computed(() => {
      if (isLinkInSearchPanel.value) {
        return !!idsSearchVisible.value.rest[item.value[AKeyId]];
      }
      return true;
    });

    const {
      filterSearchHighlight,
    } = AFiltersAPI();

    const labelWithoutFilter = computed(() => {
      return item.value[AKeyLabel];
    });

    const label = computed(() => {
      const LABEL = labelWithoutFilter.value;
      if (isLinkInSearchPanel.value && isLinkVisible.value) {
        return filterSearchHighlight(LABEL, { searchModel: modelSearch.value });
      }
      return LABEL;
    });

    const id = computed(() => {
      return item.value[AKeyId];
    });

    const icon = computed(() => {
      if (isLinkInSearchPanel.value) {
        return undefined;
      }
      return get(item.value, keyIcon.value);
    });

    const countChildren = computed(() => {
      if (item.value.to) {
        return 0;
      }
      return dataProParentChildren.value[id.value] && dataProParentChildren.value[id.value].length;
    });

    const toLocal = computed(() => {
      if (isLinkDisabled.value) {
        return "#";
      }
      return item.value.to;
    });

    const openSubMenu = () => {
      togglePanel({ parentId: id.value, isLinkInSearchPanel: isLinkInSearchPanel.value });
      setFocusToFirstLinkInPanel(id.value);
    };

    const onKeydown = $event => {
      if ($event.keyCode === AKeysCode.enter ||
        $event.keyCode === AKeysCode.space) {
        openSubMenu();
        $event.stopPropagation();
        $event.preventDefault();
      }
    };

    const clickMenuLink = inject("clickMenuLink");
    const clickLink = () => {
      if (isLinkInSearchPanel.value) {
        togglePanel({ parentId: item.value[AKeyParent], isLinkInSearchPanel: isLinkInSearchPanel.value });
      }
      clickMenuLink();
    };

    const {
      isTitleHtml,
      title,
    } = TitleAPI(props, {
      labelWithoutFilter,
    });

    return {
      clickLink,
      countChildren,
      currentSlot,
      icon,
      isLinkDisabled,
      isLinkTruncated,
      isLinkVisible,
      isTitleHtml,
      label,
      labelWithoutFilter,
      onKeydown,
      openSubMenu,
      title,
      toLocal,
    };
  },
  render() {
    if (!this.isLinkVisible) {
      return "";
    }
    const ICON_AND_TEXT = [
      this.icon && h(AIcon, {
        class: ["a_menu__link__icon", this.item.iconClass],
        icon: this.icon,
      }),
      h("span", {
        class: "a_menu__link__text",
      }, [
        this.title && h("span", {
          class: "a_position_absolute_all",
          title: this.title,
          ariaHidden: true,
        }),
        h("span", {
          innerHTML: this.label,
        }),
      ]),
    ];

    return h("dd", {
      class: "a_menu__listitem",
    }, [
      this.currentSlot && this.$slots[this.currentSlot] ?
        this.$slots[this.currentSlot]({
          item: this.item,
          isPanelOpen: this.isPanelOpen,
          clickLink: this.clickLink,
          openSubMenu: this.openSubMenu,
          onKeydown: this.onKeydown,
          countChildren: this.countChildren,
          label: this.label,
          labelWithoutFilter: this.labelWithoutFilter,
        }) :
        this.item.to ?
          h(ATooltip, {
            tag: "RouterLink",
            placement: "right",
            isHide: !this.isTitleHtml,
            class: ["a_menu__link a_menu__link__text_truncated", {
              a_menu__link_disabled: this.isLinkDisabled,
            }],
            to: this.toLocal,
            tabindex: this.isPanelOpen ? 0 : -1,
            onClick: this.clickLink,
          }, {
            default: () => ICON_AND_TEXT,
            title: () => h("div", {
              innerHTML: this.item.titleHtml,
            })
          }) :
          h("a", {
            class: "a_menu__link a_menu__link_btn a_menu__link__text_truncated",
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
                ariaHidden: true, // TODO: ariaLabel
              }, this.countChildren),
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
