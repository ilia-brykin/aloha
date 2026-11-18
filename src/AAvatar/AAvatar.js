import {
  computed,
  h,
  toRef,
} from "vue";

import AIcon from "../AIcon/AIcon";

import AttributesAPI from "./compositionAPI/AttributesAPI";
import ColorAPI from "./compositionAPI/ColorAPI";
import ImageAPI from "./compositionAPI/ImageAPI";
import SizeAPI from "./compositionAPI/SizeAPI";

import filterInitials from "../filters/filterInitials";
import {
  AVATAR_COLORS_ALL,
  AVATAR_SHAPES,
  AVATAR_SIZES,
  AVATAR_STATUSES,
} from "./const";
import {
  Person,
} from "./utils/icons";
import {
  avatarPluginOptions,
} from "../plugins/AAvatarPlugin";
import {
  isNumber,
} from "lodash-es";

export default {
  name: "AAvatar",
  props: {
    alt: {
      type: String,
      required: false,
      default: undefined,
    },
    color: {
      type: String,
      required: false,
      default: () => avatarPluginOptions.value.propsDefault.color,
      validator: value => AVATAR_COLORS_ALL.indexOf(value) !== -1,
    },
    decorative: {
      type: Boolean,
      required: false,
    },
    icon: {
      type: [String, Object],
      required: false,
      default: undefined,
    },
    initials: {
      type: String,
      required: false,
      default: undefined,
    },
    initialsLimit: {
      type: Number,
      required: false,
      default: () => avatarPluginOptions.value.propsDefault.initialsLimit,
    },
    name: {
      type: String,
      required: false,
      default: undefined,
    },
    shape: {
      type: String,
      required: false,
      default: undefined,
      validator: value => AVATAR_SHAPES.indexOf(value) !== -1,
    },
    size: {
      type: [String, Number],
      required: false,
      default: undefined,
      validator: value => isNumber(value) || AVATAR_SIZES.indexOf(value) !== -1,
    },
    src: {
      type: String,
      required: false,
      default: undefined,
    },
    status: {
      type: String,
      required: false,
      default: undefined,
      validator: value => AVATAR_STATUSES.indexOf(value) !== -1,
    },
    statusText: {
      type: String,
      required: false,
      default: undefined,
    },
    tag: {
      type: String,
      required: false,
      default: () => avatarPluginOptions.value.propsDefault.tag,
    },
  },
  emits: [
    "error",
  ],
  setup(props, context) {
    const initials = toRef(props, "initials");
    const initialsLimit = toRef(props, "initialsLimit");
    const name = toRef(props, "name");

    const {
      shapeLocal,
      sizeClass,
      sizeStyle,
    } = SizeAPI(props);

    const {
      colorClass,
    } = ColorAPI(props);

    const {
      isImageVisible,
      onImageError,
    } = ImageAPI(props, context);

    const {
      attributes,
    } = AttributesAPI(props);

    const initialsLocal = computed(() => {
      return initials.value || filterInitials(name.value, { limit: initialsLimit.value });
    });

    return {
      attributes,
      colorClass,
      initialsLocal,
      isImageVisible,
      onImageError,
      shapeLocal,
      sizeClass,
      sizeStyle,
    };
  },
  render() {
    let content;
    if (this.$slots.default) {
      content = this.$slots.default();
    } else if (this.isImageVisible) {
      content = h("img", {
        class: "a_avatar__image",
        src: this.src,
        alt: "",
        onError: this.onImageError,
      });
    } else if (this.initialsLocal) {
      content = h("span", {
        class: "a_avatar__initials",
      }, this.initialsLocal);
    } else {
      content = h(AIcon, {
        class: "a_avatar__icon",
        icon: this.icon || Person,
      });
    }

    return h(this.tag, {
      class: [
        "a_avatar",
        this.sizeClass,
        this.colorClass,
        `a_avatar_${ this.shapeLocal }`,
        {
          a_avatar_with_image: this.isImageVisible,
        },
      ],
      style: this.sizeStyle,
      ...this.attributes,
    }, [
      content,
      this.status && h("span", {
        class: [
          "a_avatar__status",
          `a_avatar__status_${ this.status }`,
        ],
        "aria-hidden": "true",
      }),
    ]);
  },
};
