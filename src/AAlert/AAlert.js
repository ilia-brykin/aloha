import {
  h,
} from "vue";

export default {
  name: "AAlert",
  props: {
    isVisible: {
      type: Boolean,
      required: false,
    },
    type: {
      type: String,
      required: false,
      default: "danger",
    },
    isDismissible: {
      type: Boolean,
      required: false,
      default: false,
    },
    alertClass: {
      type: [String, Object],
      required: false,
      default: undefined,
    },
  },
  emits: [
    "onDismiss",
  ],
  computed: {
    alertClassLocal() {
      let alertClass = `a_alert a_alert_${ this.type }`;
      if (this.isDismissible) {
        alertClass += " a_alert_dismissible";
      }
      return alertClass;
    },
  },
  methods: {
    onDismissLocal() {
      this.$emit("onDismiss");
    },
  },
  render() {
    return h("div", {
      role: "alert",
    }, [
      this.isVisible && h("div", {
        class: [this.alertClass, this.alertClassLocal],
      }, [
        this.$slots.default && this.$slots.default(),
        this.isDismissible && h("button", {
          type: "button",
          class: "a_btn_close",
          ariaLabel: "Close",
          onClick: this.onDismissLocal,
        })
      ]),
    ]);
  },
};
