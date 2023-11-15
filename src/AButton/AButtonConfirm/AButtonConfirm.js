import {
  computed,
  h,
  onMounted,
  onUnmounted,
  ref,
  toRef,
  watch,
} from "vue";

import AButton from "../../AButton/AButton.js";
import ASpinner from "../../ASpinner/ASpinner.js";
import ATranslation from "../../ATranslation/ATranslation.js";

export default {
  name: "AButtonConfirm",
  components: {
    ASpinner,
    ATranslation
  },
  emits: [
    "action",
    "cancel"
  ],
  props: {
    confirmMessage: {
      type: String,
      default: "_CONFIRM_MESSAGE_",
    },
    extra: {
      type: Object,
      required: false,
    },
    confirmTime: {
      type: Number,
      default: 5,
    },
    inProgressMessage: {
      type: String,
      default: "_PROCESSING_",
    },
    yesAttributes: {
      type: Object,
      default: () => ({}),
    },
    noAttributes: {
      type: Object,
      default: () => ({}),
    },
    isVisible: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    const isActionInProgress = ref(false);
    const isActionCompleted = ref(false);
    let actionTimeoutId = null;
    const confirmRef = ref(null);
    const isVisible = toRef(props, "isVisible");

    const handleYes = () => {
      isActionInProgress.value = true;
      actionTimeoutId = setTimeout(() => {
        emit("action");
        isActionInProgress.value = false;
        isActionCompleted.value = true;
      }, props.confirmTime * 1000);
    };

    const handleNo = () => {
      emit("cancel");
    };

    const handleCancel = () => {
      clearTimeout(actionTimeoutId);
      isActionInProgress.value = false;
      isActionCompleted.value = false;
      emit("cancel");
    };

    const getButtonAttributes = (defaultAttributes, providedAttributes) => {
      return {
        ...defaultAttributes,
        ...providedAttributes
      };
    };

    const yesButtonAttributes = computed(() => {
      const defaultYesAttributes = {
        class: "a_btn_modal_button a_btn_modal_button_yes",
        onClick: handleYes,
        disabled: isActionInProgress.value,
        text: "_YES_",
      };
      return getButtonAttributes(defaultYesAttributes, props.yesAttributes);
    });

    const noButtonAttributes = computed(() => {
      const defaultNoAttributes = {
        class: "a_btn_modal_button a_btn_modal_button_no",
        onClick: isActionInProgress.value ? handleCancel : handleNo,
        disabled: !isActionInProgress.value && isActionCompleted.value,
        text: isActionInProgress.value ? "_CANCEL_" : "_NO_",
      };
      return getButtonAttributes(defaultNoAttributes, props.noAttributes);
    });

    const checkOutsideClick = event => {
      if (confirmRef.value && !confirmRef.value.contains(event.target)) {
        handleCancel();
      }
    };

    const addClickListener = () => {
      document.addEventListener("click", checkOutsideClick);
    };

    const delayedAddClickListener = () => {
      setTimeout(addClickListener, 100);
    };

    watch(isVisible, newVal => {
      if (newVal) {
        delayedAddClickListener();
      } else {
        document.removeEventListener("click", checkOutsideClick);
      }
    });

    onMounted(() => {
      if (isVisible.value) {
        delayedAddClickListener();
      }
    });

    onUnmounted(() => {
      document.removeEventListener("click", checkOutsideClick);
    });

    return {
      handleYes,
      handleNo,
      handleCancel,
      isActionInProgress,
      isActionCompleted,
      yesButtonAttributes,
      noButtonAttributes,
      confirmRef,
    };
  },
  render() {
    return h("div", { class: "a_btn_modal_content", ref: "confirmRef" }, [
      this.isActionInProgress ? [
        h(ASpinner, { class: "a_btn_modal_spinner" }),
        h(ATranslation, {
          tag: "p",
          text: this.inProgressMessage,
          extra: this.extra,
        }),
      ] :
        h(ATranslation, {
          text: this.confirmMessage,
          extra: this.extra,
        }),
      h("div", { class: "a_btn_modal_buttons" }, [
        h(AButton, this.yesButtonAttributes),
        h(AButton, this.noButtonAttributes),
      ]),
    ]);
  }
};
