import AIcon from "../AIcon/AIcon.vue";
import ASlot from "../ASlot/ASlot.vue";

export default {
  name: "AAlert",
  components: {
    AIcon,
    ASlot,
  },
  props: {
    isVisible: {
      type: Boolean,
      required: false,
      default: true,
    },
    type: {
      type: String,
      required: false,
      default: "danger",
      validator: type => [
        "primary",
        "secondary",
        "success",
        "danger",
        "warning",
        "info",
        "light",
        "dark",
      ].indexOf(type) !== -1,
    },
  },
  data() {
    return {
      isCloseLocal: false,
    };
  },
  computed: {
    alertClass() {
      return `alert-${ this.type }`;
    },
  },
  methods: {
    close() {
      this.isCloseLocal = true;
    }
  },
};
