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

    cursor() {
      if (this.direction === "x") {
        return "w-resize";
      }
      if (this.direction === "y") {
        return "s-resize";
      }
    },

    bodyClass() {
      return `a_resizer_${ this.direction }_active__body`;
    },
  },
  unmounted() {
    this.removeMouseEventListeners();
    this.removeClassFromBody();
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
      this.addClassToBody();
    },

    mousemove($event) {
      this.$emit("mousemove", {
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
      this.removeClassFromBody();
    },

    mouseoutDocument($event) {
      this.removeMouseEventListeners();
      this.$emit("mouseoutDocument", {
        $event,
        clientHeight: this.clientHeight,
        clientWidth: this.clientWidth,
      });
      this.removeClassFromBody();
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

    addClassToBody() {
      document.body.classList.add(this.bodyClass);
    },

    removeClassFromBody() {
      document.body.classList.remove(this.bodyClass);
    },
  },
  render() {
    return h("div", {
      class: ["a_resizer", this.directionClass],
      ariaHidden: true,
      onMousedown: this.mousedown,
    }, [
      h("div", {
        class: "a_resizer__line",
      }),
      h(AIcon, {
        class: "a_resizer__icon",
        icon: this.directionIcon,
      }),
    ]);
  },
};
