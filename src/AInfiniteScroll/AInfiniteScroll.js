import {
  h,
  onBeforeUnmount,
  onMounted,
} from "vue";

import ObserverAPI from "./compositionAPI/ObserverAPI";

export default {
  name: "AInfiniteScroll",
  props: {
    callback: {
      type: Function,
      required: true,
    },
    disabled: {
      type: Boolean,
      required: false,
    },
    rootMargin: {
      type: String,
      required: false,
      default: "300px",
    },
    sentinelTag: {
      type: String,
      required: false,
      default: "span",
    },
    tag: {
      type: String,
      required: false,
      default: "div",
    },
    threshold: {
      type: [Number, Array],
      required: false,
      default: 0.5,
    },
  },
  setup(props) {
    const {
      disconnectObserver,
      sentinelRef,
      setIntersectionObserver,
      setObserverOptions,
      startObserver,
    } = ObserverAPI(props);

    onMounted(() => {
      setObserverOptions();
      setIntersectionObserver();
      startObserver();
    });

    onBeforeUnmount(() => {
      disconnectObserver();
    });

    return {
      sentinelRef,
    };
  },
  render() {
    return h(this.tag, {}, [
      this.$slots.default ? this.$slots.default() : null,
      h(this.sentinelTag, {
        ref: "sentinelRef",
        style: "height: 1px; display: block;",
        ariaHidden: true,
      }),
    ]);
  },
};
