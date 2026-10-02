import {
  computed,
  h,
  ref,
  toRefs,
} from "vue";

import AIcon from "../AIcon/AIcon";
import ARateIcon from "./ARateIcon/ARateIcon";
import ATranslation from "../ATranslation/ATranslation";

const Star = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
  <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/>
</svg>`;
const StarFill = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>`;


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
