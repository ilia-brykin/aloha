import {
  computed,
  h, toRef,
} from "vue";

export default {
  name: "AScaleBalance",
  props: {
    degree: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const degree = toRef(props, "degree");

    const transformRotate = computed(() => {
      return `rotate(${ degree.value }, 26.5, 0)`;
    });

    const transform = computed(() => {
      return `translate(-39.183535,10.674876), ${ transformRotate.value }`;
    });

    return {
      transform,
    };
  },
  render() {
    return h("g", {
      transform: this.transform,
    }, [
      h("rect", {
        style: "fill:currentColor;stroke-width:0;paint-order:markers fill stroke",
        width: 25,
        height: 3,
        x: 0,
        y: -1.5,
        rx: 1.3,
        ry: 1.3,
      }),
      h("rect", {
        style: "fill:currentColor;stroke-width:0;paint-order:markers fill stroke",
        width: 25,
        height: 3,
        x: 30.910397,
        y: -1.5,
        rx: 1.3,
        ry: 1.3,
      }),
      h("circle", {
        style: "fill:none;stroke:currentColor;stroke-width:2.60155;stroke-linecap:round",
        cx: "27.264812",
        cy: "-6.3741679",
        r: "3.6999805",
        transform: "rotate(13.158691)",
      }),
      h("rect", {
        style: "fill:currentColor;stroke-width:0;paint-order:markers fill stroke",
        width: 3,
        height: 6,
        x: 26.5,
        y: -9.5,
        rx: 1.3,
        ry: 1.3,
      }),
    ]);
  },
};
