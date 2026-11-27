import {
  computed,
  h,
  inject,
  nextTick,
  onBeforeUnmount,
  ref,
  watch,
} from "vue";

import AElement from "../AElement/AElement";
import {
  autoUpdate,
  computePosition,
  flip,
  offset,
  shift,
} from "@floating-ui/vue";

import {
  get,
} from "lodash-es";

const ChevronDown = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/></svg>`;
const ChevronRight = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/></svg>`;

const getControls = list => {
  return list ? Array.from(list.querySelectorAll(":scope > li > .a_navbar__control")) : [];
};

const isRtl = element => !!element && getComputedStyle(element).direction === "rtl";

/**
 * An item of ANavbar: a link, a button with a submenu or both (link + button "submenu").
 * Recursive: the submenu has ANavbarItem again, so the depth is not limited.
 * WAI-ARIA disclosure navigation: no menu roles, the buttons have aria-expanded.
 */
const ANavbarItem = {
  name: "ANavbarItem",
  props: {
    item: {
      type: Object,
      required: true,
    },
    // the item "…" of overflow "more"
    isMore: {
      type: Boolean,
      required: false,
    },
    level: {
      type: Number,
      required: true,
    },
    path: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const navbar = inject("aNavbar");

    const liRef = ref(undefined);
    const submenuRef = ref(undefined);
    let cleanup;

    const children = computed(() => get(props.item, navbar.keyChildren.value) || []);
    const hasChildren = computed(() => children.value.length > 0);
    const hasLink = computed(() => !!(props.item.to || props.item.href));
    const isOpen = computed(() => hasChildren.value && navbar.isOpen(props.path));
    const isAccordion = computed(() => navbar.isAccordion.value);
    const label = computed(() => get(props.item, navbar.keyLabel.value));
    const buttonId = computed(() => `${ navbar.navId.value }_button_${ props.path }`);
    const submenuId = computed(() => `${ navbar.navId.value }_submenu_${ props.path }`);

    // the active item or an item with an active child (the way to the current page)
    const isActiveParent = computed(() => {
      const HAS_ACTIVE = items => items.some(item => item.isActive || HAS_ACTIVE(get(item, navbar.keyChildren.value) || []));
      return HAS_ACTIVE(children.value);
    });

    const stopFloating = () => {
      cleanup?.();
      cleanup = undefined;
    };

    // in the bar: the first level under the item, deeper levels at its side (right, in right-to-left left)
    const startFloating = async() => {
      stopFloating();
      await nextTick();
      const REFERENCE = liRef.value;
      const FLOATING = submenuRef.value;
      if (isAccordion.value || !REFERENCE || !FLOATING) {
        return;
      }
      const SIDE = isRtl(REFERENCE) ? "left-start" : "right-start";
      cleanup = autoUpdate(REFERENCE, FLOATING, () => {
        computePosition(REFERENCE, FLOATING, {
          placement: props.level === 0 ? "bottom-start" : SIDE,
          // overflow "scroll": the list scrolls, the submenu is fixed (not cut)
          strategy: navbar.overflow.value === "scroll" ? "fixed" : "absolute",
          middleware: [
            offset(props.level === 0 ? 4 : 0),
            flip(),
            shift({ padding: 8 }),
          ],
        }).then(({ x, y }) => {
          if (!submenuRef.value) {
            return;
          }
          Object.assign(submenuRef.value.style, {
            left: `${ x }px`,
            top: `${ y }px`,
          });
        });
      });
    };

    watch(isOpen, value => {
      if (value) {
        startFloating();
      } else {
        stopFloating();
      }
    });

    onBeforeUnmount(stopFloating);

    const focusFirstChild = () => {
      nextTick(() => getControls(submenuRef.value)[0]?.focus());
    };

    const focusParentButton = () => {
      document.getElementById(`${ navbar.navId.value }_button_${ navbar.getParentPath(props.path) }`)?.focus();
    };

    /**
     * Keyboard: in the bar the arrows go between the items, ArrowDown opens; in a submenu ArrowUp / ArrowDown,
     * Home / End, ArrowRight opens the next level, ArrowLeft goes back (right-to-left: swapped).
     */
    const onKeydown = $event => {
      if (isAccordion.value) {
        return;
      }
      const LIST = liRef.value?.parentElement;
      const CONTROLS = getControls(LIST);
      const INDEX = CONTROLS.indexOf($event.currentTarget);
      const RTL = isRtl(liRef.value);
      const NEXT = RTL ? "ArrowLeft" : "ArrowRight";
      const PREVIOUS = RTL ? "ArrowRight" : "ArrowLeft";
      const IS_BAR = props.level === 0;
      const move = step => {
        if (CONTROLS.length) {
          CONTROLS[(INDEX + step + CONTROLS.length) % CONTROLS.length].focus();
        }
      };
      let isHandled = true;
      if ($event.key === "Home") {
        CONTROLS[0]?.focus();
      } else if ($event.key === "End") {
        CONTROLS[CONTROLS.length - 1]?.focus();
      } else if (IS_BAR && $event.key === NEXT) {
        move(1);
      } else if (IS_BAR && $event.key === PREVIOUS) {
        move(-1);
      } else if (IS_BAR && $event.key === "ArrowDown" && hasChildren.value) {
        navbar.open(props.path);
        focusFirstChild();
      } else if (!IS_BAR && $event.key === "ArrowDown") {
        move(1);
      } else if (!IS_BAR && $event.key === "ArrowUp") {
        move(-1);
      } else if (!IS_BAR && $event.key === NEXT && hasChildren.value) {
        navbar.open(props.path);
        focusFirstChild();
      } else if (!IS_BAR && $event.key === PREVIOUS) {
        navbar.close(navbar.getParentPath(props.path));
        focusParentButton();
      } else {
        isHandled = false;
      }
      if (isHandled) {
        $event.preventDefault();
        $event.stopPropagation();
      }
    };

    const onToggle = () => {
      navbar.toggle(props.path);
    };

    // hover (trigger "hover") only in the bar, not on a touch screen in the drawer
    const onMouseenter = () => {
      if (navbar.isHover.value && hasChildren.value && !isAccordion.value) {
        navbar.openLater(props.path);
      }
    };

    const onMouseleave = () => {
      if (navbar.isHover.value && hasChildren.value && !isAccordion.value) {
        navbar.closeLater(props.path);
      }
    };

    return {
      buttonId,
      children,
      hasChildren,
      hasLink,
      isAccordion,
      isActiveParent,
      isOpen,
      label,
      liRef,
      navbar,
      onKeydown,
      onMouseenter,
      onMouseleave,
      onToggle,
      submenuId,
      submenuRef,
    };
  },
  methods: {
    renderContent(isOpen) {
      const SLOT = this.navbar.slots.item;
      return SLOT ?
        { default: () => SLOT({ item: this.item, level: this.level, isOpen, isMore: this.isMore }) } :
        undefined;
    },
  },
  render() {
    const SLOT_CONTENT = this.renderContent(this.isOpen);
    // "…": only the icon, the name for the screen reader
    const TEXT = SLOT_CONTENT || this.isMore ? undefined : this.label;
    const COMMON = {
      alwaysTranslate: this.navbar.alwaysTranslate.value,
      extra: this.navbar.extra.value,
      disabled: this.item.disabled,
      iconLeft: this.item.icon,
    };
    const CARET = this.isAccordion || this.level === 0 ? ChevronDown : ChevronRight;

    const LINK = this.hasLink && h(AElement, {
      ...COMMON,
      class: "a_navbar__link a_navbar__control",
      "aria-current": this.item.isActive ? "page" : undefined,
      href: this.item.href,
      target: this.item.target,
      text: TEXT,
      to: this.item.to,
      type: "link",
      onClick: () => this.navbar.onNavigate(this.item),
      onKeydown: this.onKeydown,
    }, SLOT_CONTENT);

    const BUTTON = this.hasChildren && h(AElement, {
      ...COMMON,
      id: this.buttonId,
      "aria-controls": this.isOpen ? this.submenuId : undefined,
      "aria-expanded": this.isOpen ? "true" : "false",
      class: [
        "a_navbar__button",
        // with a link the button is only the toggle of the submenu
        this.hasLink ? "a_navbar__toggle" : "a_navbar__control",
      ],
      iconLeft: this.hasLink ? undefined : this.item.icon,
      iconRight: CARET,
      text: this.hasLink ? undefined : TEXT,
      textScreenReader: this.hasLink ?
        this.navbar.translate("submenu", { label: this.label }) :
        (this.isMore ? this.navbar.translate("more") : undefined),
      title: this.isMore ? this.navbar.translate("more") : undefined,
      type: "button",
      onClick: this.onToggle,
      onKeydown: this.onKeydown,
    }, this.hasLink ? undefined : SLOT_CONTENT);

    return h("li", {
      ref: "liRef",
      class: [
        "a_navbar__item",
        `a_navbar__item_level_${ this.level }`,
        {
          a_navbar__item_top: this.level === 0 && !this.isMore,
          a_navbar__more: this.isMore,
          a_navbar__item_open: this.isOpen,
          a_navbar__item_active: this.item.isActive,
          a_navbar__item_active_parent: this.isActiveParent,
          a_navbar__item_split: this.hasLink && this.hasChildren,
        },
      ],
      onMouseenter: this.onMouseenter,
      onMouseleave: this.onMouseleave,
    }, [
      LINK || null,
      BUTTON || null,
      this.isOpen && h("ul", {
        ref: "submenuRef",
        id: this.submenuId,
        class: ["a_navbar__submenu", {
          a_navbar__submenu_accordion: this.isAccordion,
          a_navbar__submenu_floating: !this.isAccordion,
        }],
      }, this.children.map((child, index) => h(ANavbarItem, {
        key: `${ index }_${ get(child, this.navbar.keyId.value) ?? "" }`,
        item: child,
        level: this.level + 1,
        path: `${ this.path }.${ index }`,
      }))),
    ]);
  },
};

export default ANavbarItem;
