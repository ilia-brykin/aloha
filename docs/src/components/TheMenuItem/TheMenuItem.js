import AIcon from "../../../../src/AIcon/AIcon";

export default {
  name: "TheMenuItem",
  components: {
    AIcon,
  },
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      isOpen: false,
    };
  },
  computed: {
    collapseIcon() {
      return this.isOpen ? "ChevronUp" : "ChevronDown";
    },
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen;
    },
  },
};
