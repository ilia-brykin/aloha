import {
  computed,
  ref,
  toRef,
} from "vue";

import PointerDragAPI from "../../compositionAPI/PointerDragAPI";
import {
  getValueForKey,
} from "../../compositionAPI/KeyboardStepAPI";

export default function SaturationAPI(props, { emit }) {
  const brightness = toRef(props, "brightness");
  const hue = toRef(props, "hue");
  const saturation = toRef(props, "saturation");

  const areaRef = ref(undefined);
  const thumbRef = ref(undefined);

  const areaStyle = computed(() => {
    return {
      "--a_color_picker_hue": `hsl(${ hue.value }, 100%, 50%)`,
    };
  });

  const thumbStyle = computed(() => {
    return {
      left: `${ saturation.value }%`,
      top: `${ 100 - brightness.value }%`,
    };
  });

  const update = ({ s = saturation.value, v = brightness.value }) => {
    emit("change", {
      saturation: Math.round(s),
      brightness: Math.round(v),
    });
  };

  const focusThumb = () => {
    thumbRef.value?.focus();
  };

  const {
    onPointerDown,
  } = PointerDragAPI(props, {
    elementRef: areaRef,
    onStart: focusThumb,
    onMove: ({ x, y }) => update({ s: x * 100, v: (1 - y) * 100 }),
  });

  // ←/→ and Home/End: saturation, ↑/↓ and Page Up/Page Down: brightness
  const onKeydown = $event => {
    const IS_SATURATION = ["ArrowLeft", "ArrowRight", "Home", "End"].includes($event.key);
    const VALUE = getValueForKey({
      key: $event.key,
      shiftKey: $event.shiftKey,
      value: IS_SATURATION ? saturation.value : brightness.value,
      min: 0,
      max: 100,
    });
    if (VALUE === undefined) {
      return;
    }
    $event.preventDefault();
    update(IS_SATURATION ? { s: VALUE } : { v: VALUE });
  };

  return {
    areaRef,
    areaStyle,
    onKeydown,
    onPointerDown,
    thumbRef,
    thumbStyle,
  };
}
