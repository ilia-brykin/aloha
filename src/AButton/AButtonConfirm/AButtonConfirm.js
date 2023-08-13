import {
  ref,
  h,
  computed
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
      default: "Are you sure?",
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
      default: "Processing...",
    },
    yesAttributes: {
      type: Object,
      default: () => ({}),
    },
    noAttributes: {
      type: Object,
      default: () => ({}),
    }
  },
  setup(props, { emit }) {
    const isActionInProgress = ref(false);
    const isActionCompleted = ref(false);
    let actionTimeoutId = null;

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
        text: "Yes",
      };
      return getButtonAttributes(defaultYesAttributes, props.yesAttributes);
    });

    const noButtonAttributes = computed(() => {
      const defaultNoAttributes = {
        class: "a_btn_modal_button a_btn_modal_button_no",
        onClick: isActionInProgress.value ? handleCancel : handleNo,
        disabled: !isActionInProgress.value && isActionCompleted.value,
        text: isActionInProgress.value ? "Cancel" : "No",
      };
      return getButtonAttributes(defaultNoAttributes, props.noAttributes);
    });

    return {
      handleYes,
      handleNo,
      handleCancel,
      isActionInProgress,
      isActionCompleted,
      yesButtonAttributes,
      noButtonAttributes
    };
  },
  render() {
    return h("div", { class: "a_btn_modal_content" }, [
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

