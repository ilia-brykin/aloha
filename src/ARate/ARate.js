import {
  computed,
  h,
  ref,
  toRefs,
} from "vue";

import AIcon from "../AIcon/AIcon";
import ATranslation from "../ATranslation/ATranslation";
import ARateIcon from "./ARateIcon/ARateIcon";

import Star from "aloha-svg/dist/js/bootstrap/Star";
import StarFill from "aloha-svg/dist/js/bootstrap/StarFill";

export default {
  name: "ARate",
  components: {
    AIcon,
    ATranslation,
    ARateIcon,
  },
  props: {
    text: {
      type: String,
      default: null,
    },
    extra: {
      type: Object,
      required: false,
    },
    rating: {
      type: Number,
      default: 5,
    },
    icon: {
      type: String,
      default: Star,
    },
    iconFill: {
      type: String,
      default: StarFill,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    showScore: {
      type: Boolean,
      default: false,
    },
    modelValue: {
      type: Number,
      default: 0,
    },
    color: {
      type: String,
      default: "yellow",
    },
    hoveredColor: {
      type: String,
      default: "orange",
    },
    halfIcon: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: "medium",
      validator: value => ["small", "medium", "big"].includes(value),
    },
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const {
      text,
      rating,
      modelValue,
      showScore,
      readonly,
      icon,
      extra,
      color,
      hoveredColor,
      halfIcon,
      size,
    } = toRefs(props);

    const localValue = ref(undefined);
    const hoveredValue = ref(undefined);
    const hoveredIndex = ref(-1);

    const initLocalVars = () => {
      localValue.value = modelValue.value;
      hoveredValue.value = modelValue.value;
    };

    const iconFillValue = computed(() => {
      return props.iconFill ? props.iconFill : `${ props.icon }Fill`;
    });

    const onDoubleClickIcon = () => {
      if (readonly.value) {
        return;
      }

      localValue.value = 0;
      emit("update:modelValue", localValue.value);
    };

    const onMouseEnterIcon = (event, index) => {
      if (readonly.value) {
        return;
      }

      hoveredIndex.value = index;

      let value = index + 1;

      if (halfIcon.value) {
        const rect = event.target.getBoundingClientRect();
        const isLeftHalf = event.clientX - rect.left < rect.width / 2;

        value = isLeftHalf ? index + 0.5 : index + 1;
      }

      hoveredValue.value = value;
    };

    const onMouseLeaveIcon = () => {
      if (readonly.value) {
        return;
      }

      hoveredIndex.value = -1;
    };

    const computedColor = computed(() => {
      return Array(rating.value).fill(null).map((_, index) => {
        if (index <= hoveredIndex.value) {
          return hoveredColor.value;
        }
        return index < localValue.value ? color.value : null;
      });
    });

    const onClickIcon = (event, index) => {
      if (readonly.value) {
        return;
      }

      let value = index + 1;

      if (halfIcon.value) {
        const rect = event.target.getBoundingClientRect();
        const isLeftHalf = event.clientX - rect.left < rect.width / 2;

        value = isLeftHalf ? index + 0.5 : index + 1;
      }

      emit("update:modelValue", value);
      localValue.value = value;
    };

    const computedIconValues = computed(() => {
      const value = hoveredIndex.value >= 0 ? hoveredValue.value : localValue.value;
      const wholePart = Math.floor(value);
      const fractionPart = value % 1;

      const iconsValues = Array(rating.value).fill(0);

      for (let i = 0; i < wholePart; i++) {
        iconsValues[i] = 100;
      }

      if (fractionPart !== 0 && wholePart < rating.value) {
        iconsValues[wholePart] = fractionPart * 100;
      }

      return iconsValues;
    });

    const onMouseMoveIcon = (event, index) => {
      if (readonly.value) {
        return;
      }

      let value = index + 1;

      if (halfIcon.value) {
        const rect = event.target.getBoundingClientRect();
        const isLeftHalf = event.clientX - rect.left < rect.width / 2;

        value = isLeftHalf ? index + 0.5 : index + 1;
      }

      if (hoveredValue.value !== value) {
        hoveredValue.value = value;
        hoveredIndex.value = index;
      }
    };

    initLocalVars();

    return {
      rating,
      showScore,
      readonly,
      icon,
      iconFill: iconFillValue,
      text,
      extra,
      color,
      size,
      onMouseEnterIcon,
      onMouseLeaveIcon,
      onClickIcon,
      onDoubleClickIcon,
      onMouseMoveIcon,
      modelValue: computed(() => localValue.value),
      iconValues: computedIconValues,
      computedColor,
    };
  },
  render() {
    return h("div", { class: "a_rate_container" }, [
      ...Array.from({ length: this.rating }, (_, index) => h(ARateIcon, {
        class: "a_rate_icon",
        icon: this.icon,
        iconFill: this.iconFill,
        value: this.iconValues[index],
        onClick: event => this.onClickIcon(event, index),
        onDblclick: this.onDoubleClickIcon,
        onMouseenter: event => this.onMouseEnterIcon(event, index),
        onMouseleave: this.onMouseLeaveIcon,
        onMousemove: event => this.onMouseMoveIcon(event, index),
        color: this.computedColor[index],
        size: this.size,
        key: index,
      })),
      this.showScore && h("span", { class: "a_rate_score" }, this.modelValue.toString()),
      h(ATranslation, {
        class: "a_rate_label",
        text: this.text,
        extra: this.extra,
      }),
    ]);
  },
};
