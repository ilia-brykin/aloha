import {
  Comment,
  computed,
  Fragment,
  h,
  provide,
  toRef,
} from "vue";

import AAvatar from "../AAvatar/AAvatar";

import {
  getTranslatedText,
} from "../ATranslation/compositionAPI/UtilsAPI";

import {
  AVATAR_GROUP_KEY,
  AVATAR_SHAPES,
  AVATAR_SIZES,
} from "../AAvatar/const";
import {
  isNumber,
} from "lodash-es";

const getChildren = vnodes => {
  const CHILDREN = [];
  (vnodes || []).forEach(vnode => {
    if (vnode.type === Comment) {
      return;
    }
    if (vnode.type === Fragment) {
      CHILDREN.push(...getChildren(vnode.children));
      return;
    }
    CHILDREN.push(vnode);
  });
  return CHILDREN;
};

export default {
  name: "AAvatarGroup",
  props: {
    label: {
      type: String,
      required: false,
      default: undefined,
    },
    max: {
      type: Number,
      required: false,
      default: undefined,
    },
    moreText: {
      type: String,
      required: false,
      default: "_A_AVATAR_GROUP_MORE_{{count}}_",
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
    tag: {
      type: String,
      required: false,
      default: "div",
    },
  },
  setup(props) {
    const label = toRef(props, "label");
    const shape = toRef(props, "shape");
    const size = toRef(props, "size");

    provide(AVATAR_GROUP_KEY, {
      shape,
      size,
    });

    const labelTranslated = computed(() => {
      return label.value ? getTranslatedText({ placeholder: label.value }) : undefined;
    });

    return {
      labelTranslated,
    };
  },
  render() {
    const CHILDREN = getChildren(this.$slots.default?.());
    const HAS_MORE = this.max > 0 && CHILDREN.length > this.max;
    const VISIBLE = HAS_MORE ? CHILDREN.slice(0, this.max) : CHILDREN;
    const COUNT_MORE = CHILDREN.length - VISIBLE.length;

    return h(this.tag, {
      class: "a_avatar_group",
      role: "group",
      "aria-label": this.labelTranslated,
    }, [
      ...VISIBLE,
      HAS_MORE && h(AAvatar, {
        class: "a_avatar_group__more",
        color: "gray",
        initials: `+${ COUNT_MORE }`,
        alt: getTranslatedText({
          placeholder: this.moreText,
          extra: { count: COUNT_MORE },
        }),
      }),
    ]);
  },
};
