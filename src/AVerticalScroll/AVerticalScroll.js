import {
  h,
  onBeforeUnmount,
  onMounted,
  toRef,
  watch,
} from "vue";

import AButton from "../AButton/AButton";

import ListenerAPI from "./compositionAPI/ListenerAPI";
import ObserverAPI from "./compositionAPI/ObserverAPI";
import ScrollAPI from "./compositionAPI/ScrollAPI";

export default {
  name: "AVerticalScroll",
  props: {
    btnDownProps: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    btnUpProps: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    disabled: {
      type: Boolean,
      required: false,
      default: undefined,
    },
    scrollContentAttributes: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    scrollDistance: {
      type: Number,
      required: false,
      default: 100,
    },
    tag: {
      type: String,
      required: false,
      default: "div",
    },
    tagScrollContent: {
      type: String,
      required: false,
      default: "div",
    },
  },
  setup(props) {
    const disabled = toRef(props, "disabled");

    const {
      canScrollDown,
      canScrollUp,
      checkScroll,
      containerRef,
      hasScroll,
      onScroll,
      scrollContentRef,
      scrollDown,
      scrollUp,
    } = ScrollAPI(props);

    const {
      connectObservers,
      destroyObservers,
      disconnectObservers,
      initObservers,
    } = ObserverAPI({
      checkScroll,
      containerRef,
      scrollContentRef,
    });

    const {
      addScrollListener,
      destroyScrollListener,
    } = ListenerAPI({
      onScroll,
      scrollContentRef,
    });

    onMounted(() => {
      initObservers();
      if (!disabled.value) {
        connectObservers();
        addScrollListener();
      }
    });

    onBeforeUnmount(() => {
      destroyObservers();
      destroyScrollListener();
    });

    watch(disabled, newValue => {
      if (newValue) {
        disconnectObservers();
        destroyScrollListener();
      } else {
        connectObservers();
        addScrollListener();
      }
    });

    return {
      canScrollDown,
      canScrollUp,
      containerRef,
      hasScroll,
      scrollContentRef,
      scrollDown,
      scrollUp,
    };
  },
  render() {
    return h(this.tag, {
      ref: "containerRef",
      class: [
        "a_vertical_scroll",
        {
          a_vertical_scroll_scrollable: this.hasScroll && !this.disabled,
        },
      ],
    }, [
      h("div", {
        class: "a_vertical_scroll__btn__wrapper a_vertical_scroll__btn__wrapper_up"
      }, [
        h(AButton, {
          class: "a_btn a_btn_transparent_secondary a_btn_small a_vertical_scroll__btn a_vertical_scroll__btn_up",
          iconLeft: "ChevronUp",
          disabled: !this.canScrollUp,
          tabindex: -1,
          title: "_A_VERTICAL_SCROLL_BTN_UP_TITLE_",
          textScreenReader: "_A_VERTICAL_SCROLL_BTN_UP_TITLE_",
          onClick: this.scrollUp,
          ...this.btnUpProps,
        }),
      ]),
      h(this.tagScrollContent, {
        ref: "scrollContentRef",
        class: "a_scroll_content",
        ...this.scrollContentAttributes,
      }, [
        this.$slots.default && this.$slots.default(),
      ]),
      h("div", {
        class: "a_vertical_scroll__btn__wrapper a_vertical_scroll__btn__wrapper_down"
      }, [
        h(AButton, {
          class: "a_btn a_btn_transparent_secondary a_btn_small a_vertical_scroll__btn a_vertical_scroll__btn_down",
          iconLeft: "ChevronDown",
          disabled: !this.canScrollDown,
          title: "_A_VERTICAL_SCROLL_BTN_DOWN_TITLE_",
          textScreenReader: "_A_VERTICAL_SCROLL_BTN_DOWN_TITLE_",
          tabindex: -1,
          onClick: this.scrollDown,
          ...this.btnDownProps,
        }),
      ]),
    ]);
  },
};
