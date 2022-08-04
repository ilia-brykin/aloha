import {
  h,
} from "vue";

import AIcon from "../AIcon/AIcon";

export default {
  name: "AResizer",
  props: {
    direction: {
      type: String,
      required: true,
      validator: value => ["x", "y"].indexOf(value) !== -1,
    },
  },
  emits: [
    "mousedown",
    "mousemove",
    "mouseoutDocument",
    "mouseup",
  ],
  data() {
    return {
      clientHeight: 0,
      clientWidth: 0,
    };
  },
  computed: {
    isDirectionX() {
      return this.direction === "x";
    },

    isDirectionY() {
      return this.direction === "y";
    },

    directionClass() {
      return `a_resizer_${ this.direction }`;
    },

    directionIcon() {
      if (this.direction === "x") {
        return "OptionVertical";
      }
      if (this.direction === "y") {
        return "OptionHorizontal";
      }
    },
  },
  unmounted() {
    this.removeMouseEventListeners();
  },
  methods: {
    mousedown($event) {
      this.addMouseEventListeners();
      this.clientHeight = document.documentElement.clientHeight;
      this.clientWidth = document.documentElement.clientWidth;
      this.$emit("mousedown", {
        $event,
        clientHeight: this.clientHeight,
        clientWidth: this.clientWidth,
      });
    },

    mousemove($event) {
      this.$emits("mousemove", {
        $event,
        clientX: $event.clientX,
        clientY: $event.clientY,
        clientHeight: this.clientHeight,
        clientWidth: this.clientWidth,
      });
    },

    mouseup($event) {
      this.removeMouseEventListeners();
      this.$emit("mouseup", {
        $event,
        clientHeight: this.clientHeight,
        clientWidth: this.clientWidth,
      });
    },

    mouseoutDocument($event) {
      this.removeMouseEventListeners();
      this.$emit("mouseoutDocument", {
        $event,
        clientHeight: this.clientHeight,
        clientWidth: this.clientWidth,
      });
    },

    addMouseEventListeners() {
      document.addEventListener("mousemove", this.mousemove);
      document.addEventListener("mouseup", this.mouseup);
      document.addEventListener("mouseleave", this.mouseoutDocument);
    },

    removeMouseEventListeners() {
      document.removeEventListener("mouseup", this.mouseup);
      document.removeEventListener("mousemove", this.mousemove);
      document.removeEventListener("mouseout", this.mouseoutDocument);
    },
  },
  render() {
    return h("div", {
      class: ["a_resizer", this.directionClass],
      ariaHidden: true,
    }, [
      h("div", {
        class: "a_resizer__line",
        onMousedown: this.mousedown,
      }),
      h(AIcon, {
        icon: this.directionIcon,
      }),
    ]);
  },
};
