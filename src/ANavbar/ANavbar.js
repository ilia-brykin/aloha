import {
  computed,
  h,
  provide,
  ref,
  toRef,
} from "vue";

import ADrawer from "../ADrawer/ADrawer";
import AElement from "../AElement/AElement";

import AMobileAPI from "../compositionAPI/AMobileAPI";
import OpenAPI from "./compositionAPI/OpenAPI";
import OverflowAPI from "./compositionAPI/OverflowAPI";
import UtilsAPI, {
  getTranslatedText,
} from "../ATranslation/compositionAPI/UtilsAPI";

import ANavbarItem from "./ANavbarItem";
import {
  getPropDefault,
} from "../plugins/AComponentsPlugin";
import {
  uniqueId,
} from "lodash-es";

const List = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/></svg>`;
const ThreeDots = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"/></svg>`;

// the texts of the navigation, every key falls back to its default
export const TEXTS_DEFAULT = {
  drawer: "_A_NAVBAR_DRAWER_",
  more: "_A_NAVBAR_MORE_",
  navigation: "_A_NAVBAR_NAVIGATION_",
  submenu: "_A_NAVBAR_SUBMENU_",
  toggle: "_A_NAVBAR_TOGGLE_",
};

// the default can be set for all navigations: app.use(AComponentsPlugin, { ANavbar: { props: { trigger: "hover" } } })
const plugin = (type, name, defaultValue) => ({
  type,
  required: false,
  default: () => getPropDefault("ANavbar", name, defaultValue),
});

export default {
  name: "ANavbar",
  props: {
    alwaysTranslate: {
      type: Boolean,
      required: false,
    },
    closeDelay: plugin(Number, "closeDelay", 200),
    // { id, label, to | href, target, icon, isActive, disabled, children }
    data: {
      type: Array,
      required: false,
      default: () => [],
    },
    drawerPlacement: {
      type: String,
      required: false,
      default: () => getPropDefault("ANavbar", "drawerPlacement", "left"),
      validator: value => ["left", "right"].indexOf(value) !== -1,
    },
    extra: {
      type: Object,
      required: false,
      default: undefined,
    },
    id: {
      type: String,
      required: false,
      default: () => uniqueId("a_navbar_"),
    },
    // mobile: the slot end in the drawer instead of the bar
    isEndInDrawer: plugin(Boolean, "isEndInDrawer", false),
    // mobile (AMobilePlugin): a button opens the navigation in a drawer
    isMobileMenu: plugin(Boolean, "isMobileMenu", true),
    // a submenu closes when its item is scrolled out of the view
    isCloseByButtonInvisibleInViewport: plugin(Boolean, "isCloseByButtonInvisibleInViewport", true),
    isSticky: plugin(Boolean, "isSticky", false),
    keyChildren: {
      type: String,
      required: false,
      default: "children",
    },
    keyId: {
      type: String,
      required: false,
      default: "id",
    },
    keyLabel: {
      type: String,
      required: false,
      default: "label",
    },
    // the name of the navigation landmark (else the text navigation)
    label: {
      type: String,
      required: false,
      default: undefined,
    },
    openDelay: plugin(Number, "openDelay", 100),
    // more: the items that do not fit go into "…"; wrap: a second line; scroll: horizontal scroll
    overflow: {
      type: String,
      required: false,
      default: () => getPropDefault("ANavbar", "overflow", "more"),
      validator: value => ["more", "wrap", "scroll"].indexOf(value) !== -1,
    },
    texts: plugin(Object, "texts", {}),
    // click (default): reliable for the keyboard and touch; hover: opens with a delay, the click still works
    trigger: {
      type: String,
      required: false,
      default: () => getPropDefault("ANavbar", "trigger", "click"),
      validator: value => ["click", "hover"].indexOf(value) !== -1,
    },
  },
  emits: [
    "navigate",
  ],
  setup(props, context) {
    const navRef = ref(undefined);
    const drawerNavRef = ref(undefined);
    const listRef = ref(undefined);
    const isDrawerOpen = ref(false);

    const {
      isMobileWidth,
    } = AMobileAPI();
    const isMobile = computed(() => !!(props.isMobileMenu && isMobileWidth.value));
    const isBar = computed(() => !isMobile.value);

    const {
      replaceText,
    } = UtilsAPI();

    const textsLocal = computed(() => ({ ...TEXTS_DEFAULT, ...props.texts }));
    const translate = (key, extra) => {
      const TEXT = getTranslatedText({
        placeholder: textsLocal.value[key],
        extra,
        alwaysTranslate: props.alwaysTranslate,
      });
      return extra ? replaceText({ text: TEXT, object: extra }) : TEXT;
    };

    const navId = toRef(props, "id");
    const toggleId = computed(() => `${ props.id }_toggle`);

    const openApi = OpenAPI(props, {
      getContainers: () => [navRef.value, drawerNavRef.value],
    });

    const {
      visibleCount,
    } = OverflowAPI(props, {
      isBar,
      listRef,
    });

    const visibleItems = computed(() => props.data.slice(0, visibleCount.value));
    const hiddenItems = computed(() => props.data.slice(visibleCount.value));
    const moreItem = computed(() => ({
      [props.keyId]: "more",
      [props.keyLabel]: translate("more"),
      [props.keyChildren]: hiddenItems.value,
      icon: ThreeDots,
    }));

    const onNavigate = item => {
      context.emit("navigate", { item });
      openApi.closeAll();
      isDrawerOpen.value = false;
    };

    // Escape closes the deepest open submenu and gives the focus to its button (not the drawer around)
    const onKeydown = $event => {
      if ($event.key !== "Escape" || !openApi.openPath.value) {
        return;
      }
      const PATH = openApi.openPath.value;
      openApi.close(PATH);
      document.getElementById(`${ props.id }_button_${ PATH }`)?.focus();
      $event.preventDefault();
      $event.stopPropagation();
    };

    provide("aNavbar", {
      alwaysTranslate: toRef(props, "alwaysTranslate"),
      isCloseByButtonInvisibleInViewport: toRef(props, "isCloseByButtonInvisibleInViewport"),
      close: openApi.close,
      closeLater: openApi.closeLater,
      extra: toRef(props, "extra"),
      getParentPath: openApi.getParentPath,
      isAccordion: isMobile,
      isHover: computed(() => props.trigger === "hover"),
      isOpen: openApi.isOpen,
      keyChildren: toRef(props, "keyChildren"),
      keyId: toRef(props, "keyId"),
      keyLabel: toRef(props, "keyLabel"),
      navId,
      onNavigate,
      open: openApi.open,
      openLater: openApi.openLater,
      overflow: toRef(props, "overflow"),
      slots: context.slots,
      toggle: openApi.toggle,
      translate,
    });

    const openDrawer = () => {
      isDrawerOpen.value = true;
    };

    const closeDrawer = () => {
      isDrawerOpen.value = false;
      openApi.closeAll();
    };

    return {
      closeDrawer,
      drawerNavRef,
      hiddenItems,
      isDrawerOpen,
      isMobile,
      listRef,
      moreItem,
      navRef,
      onFocusout: openApi.onFocusout,
      onKeydown,
      openDrawer,
      toggleId,
      translate,
      visibleItems,
    };
  },
  methods: {
    renderItems(items) {
      return items.map((item, index) => h(ANavbarItem, {
        key: `${ index }_${ item[this.keyId] ?? "" }`,
        item,
        level: 0,
        path: String(index),
      }));
    },
  },
  render() {
    const LABEL = this.label || this.translate("navigation");
    const START = this.$slots.start && h("div", { class: "a_navbar__start" }, this.$slots.start());
    const END = this.$slots.end && h("div", { class: "a_navbar__end" }, this.$slots.end());

    // mobile: the bar has the button, the navigation is in the drawer
    if (this.isMobile) {
      return h("div", {
        ref: "navRef",
        class: ["a_navbar a_navbar_mobile", { a_navbar_sticky: this.isSticky }],
      }, [
        h(AElement, {
          id: this.toggleId,
          alwaysTranslate: this.alwaysTranslate,
          "aria-expanded": this.isDrawerOpen ? "true" : "false",
          class: "a_btn a_btn_transparent_dark a_navbar__toggle_mobile",
          iconLeft: List,
          textScreenReader: this.translate("toggle"),
          title: this.translate("toggle"),
          type: "button",
          onClick: this.openDrawer,
        }),
        START,
        this.isEndInDrawer ? null : END,
        this.isDrawerOpen && h(ADrawer, {
          close: this.closeDrawer,
          headerText: this.translate("drawer"),
          placement: this.drawerPlacement,
          selectorCloseIds: this.toggleId,
        }, {
          modalBody: () => [
            h("nav", {
              ref: "drawerNavRef",
              id: this.id,
              "aria-label": LABEL,
              class: "a_navbar__drawer",
              onFocusout: this.onFocusout,
              onKeydown: this.onKeydown,
            }, [
              h("ul", { class: "a_navbar__list a_navbar__list_accordion" }, this.renderItems(this.$props.data)),
            ]),
            this.isEndInDrawer ? END : null,
          ],
        }),
      ]);
    }

    return h("nav", {
      ref: "navRef",
      id: this.id,
      "aria-label": LABEL,
      class: ["a_navbar", `a_navbar_overflow_${ this.overflow }`, { a_navbar_sticky: this.isSticky }],
      onFocusout: this.onFocusout,
      onKeydown: this.onKeydown,
    }, [
      START,
      h("ul", {
        ref: "listRef",
        class: "a_navbar__list",
      }, [
        ...this.renderItems(this.visibleItems),
        this.hiddenItems.length > 0 && h(ANavbarItem, {
          key: "more",
          isMore: true,
          item: this.moreItem,
          level: 0,
          path: "more",
        }),
      ]),
      END,
    ]);
  },
};
