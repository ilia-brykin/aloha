import {
  h,
  nextTick,
  onMounted,
  ref,
  watch,
} from "vue";

import FloatingAPI from "../compositionAPI/FloatingAPI";

/**
 * List of times (WAI-ARIA listbox): the focus is on the list, the active option is aria-activedescendant.
 */
export default {
  name: "ADateInputTimeList",
  props: {
    getReference: {
      type: Function,
      required: false,
      default: undefined,
    },
    id: {
      type: String,
      required: true,
    },
    inBody: {
      type: Boolean,
      required: false,
    },
    isCloseByButtonInvisibleInViewport: {
      type: Boolean,
      required: false,
    },
    label: {
      type: String,
      required: true,
    },
    // [{ value, text, disabled }]
    options: {
      type: Array,
      required: true,
    },
    ownerId: {
      type: String,
      required: false,
      default: undefined,
    },
    // the text of the field, e.g. "09:30"
    selected: {
      type: String,
      required: false,
      default: undefined,
    },
  },
  emits: [
    "close",
    "select",
  ],
  setup(props, { emit }) {
    const rootRef = ref(undefined);
    const listRef = ref(undefined);

    FloatingAPI(props, {
      floatingRef: rootRef,
      onReferenceHidden: () => emit("close", { focusButton: true, preventScroll: true }),
    });

    const firstEnabled = () => props.options.findIndex(option => !option.disabled);
    const SELECTED_INDEX = props.options.findIndex(option => option.text === props.selected);
    const activeIndex = ref(SELECTED_INDEX !== -1 ? SELECTED_INDEX : firstEnabled());

    const getOptionId = index => `${ props.id }_${ index }`;

    const scrollToActive = () => {
      nextTick(() => {
        document.getElementById(getOptionId(activeIndex.value))?.scrollIntoView?.({ block: "nearest" });
      });
    };

    watch(activeIndex, scrollToActive);

    // the next option that is not disabled, -1 / 1 for the direction
    const move = (from, direction) => {
      let index = from;
      do {
        index += direction;
      } while (index >= 0 && index < props.options.length && props.options[index].disabled);
      if (index >= 0 && index < props.options.length) {
        activeIndex.value = index;
      }
    };

    const select = index => {
      const OPTION = props.options[index];
      if (OPTION && !OPTION.disabled) {
        emit("select", OPTION);
      }
    };

    const onKeydown = $event => {
      const ACTIONS = {
        ArrowDown: () => move(activeIndex.value, 1),
        ArrowUp: () => move(activeIndex.value, -1),
        Home: () => move(-1, 1),
        End: () => move(props.options.length, -1),
        Enter: () => select(activeIndex.value),
        " ": () => select(activeIndex.value),
      };
      if (ACTIONS[$event.key]) {
        $event.preventDefault();
        ACTIONS[$event.key]();
        return;
      }
      if ($event.key === "Escape") {
        // the list closes, not the modal around it
        $event.preventDefault();
        $event.stopPropagation();
        emit("close", { focusButton: true });
      } else if ($event.key === "Tab") {
        emit("close", { focusButton: false });
      }
    };

    onMounted(() => {
      // the popup gets its position later (floating-ui is async): no scroll of the page to its first place
      listRef.value?.focus({ preventScroll: true });
      scrollToActive();
    });

    return {
      activeIndex,
      getOptionId,
      listRef,
      onKeydown,
      rootRef,
      select,
    };
  },
  render() {
    return h("div", {
      ref: "rootRef",
      class: ["a_date_input__time_list", {
        a_date_input__popup_in_body: this.inBody,
      }],
      "data-owner": this.ownerId,
    }, [
      h("ul", {
        ref: "listRef",
        id: this.id,
        class: "a_date_input__time_list__ul",
        role: "listbox",
        tabindex: 0,
        "aria-label": this.label,
        "aria-activedescendant": this.activeIndex !== -1 ? this.getOptionId(this.activeIndex) : undefined,
        onKeydown: this.onKeydown,
      }, this.options.map((option, index) => h("li", {
        key: option.value,
        id: this.getOptionId(index),
        class: ["a_date_input__time_list__option", {
          a_date_input__time_list__option_active: index === this.activeIndex,
          a_date_input__time_list__option_selected: option.text === this.selected,
        }],
        role: "option",
        "aria-selected": option.text === this.selected ? "true" : "false",
        "aria-disabled": option.disabled ? "true" : undefined,
        onClick: () => this.select(index),
      }, option.text))),
    ]);
  },
};
