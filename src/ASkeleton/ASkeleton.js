import {
  h,
} from "vue";

import ASkeletonItem from "./ASkeletonItem/ASkeletonItem";
import ATranslation from "../ATranslation/ATranslation";

import ThrottleAPI from "./compositionAPI/ThrottleAPI";

import {
  skeletonPluginOptions,
} from "../plugins/ASkeletonPlugin";
import {
  times,
} from "lodash-es";

export default {
  name: "ASkeleton",
  props: {
    animated: {
      type: Boolean,
      required: false,
      default: () => skeletonPluginOptions.value.propsDefault.animated,
    },
    avatar: {
      type: Boolean,
      required: false,
    },
    count: {
      type: Number,
      required: false,
      default: 1,
    },
    extra: {
      type: Object,
      required: false,
      default: undefined,
    },
    loading: {
      type: Boolean,
      required: false,
      default: true,
    },
    rows: {
      type: Number,
      required: false,
      default: () => skeletonPluginOptions.value.propsDefault.rows,
    },
    tag: {
      type: String,
      required: false,
      default: () => skeletonPluginOptions.value.propsDefault.tag,
    },
    text: {
      type: String,
      required: false,
      default: () => skeletonPluginOptions.value.propsDefault.text,
    },
    throttle: {
      type: Number,
      required: false,
      default: () => skeletonPluginOptions.value.propsDefault.throttle,
    },
    title: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  setup(props) {
    const {
      isSkeletonVisible,
    } = ThrottleAPI(props);

    return {
      isSkeletonVisible,
    };
  },
  render() {
    if (!this.loading) {
      return this.$slots.default?.();
    }
    if (!this.isSkeletonVisible) {
      return null;
    }

    const renderDefault = () => h("div", {
      class: "a_skeleton__default",
    }, [
      this.avatar && h(ASkeletonItem, {
        class: "a_skeleton__avatar",
        variant: "circle",
      }),
      h("div", {
        class: "a_skeleton__paragraph",
      }, [
        this.title && h(ASkeletonItem, {
          class: "a_skeleton__title",
          variant: "heading",
        }),
        ...times(this.rows, index => h(ASkeletonItem, {
          key: index,
          class: "a_skeleton__row",
        })),
      ]),
    ]);

    return h(this.tag, {
      class: [
        "a_skeleton",
        {
          a_skeleton_animated: this.animated,
        },
      ],
      "aria-busy": "true",
    }, [
      h(ATranslation, {
        tag: "span",
        class: "a_sr_only",
        role: "status",
        text: this.text,
        extra: this.extra,
      }),
      ...times(Math.max(1, this.count), index => h("div", {
        key: index,
        class: "a_skeleton__group",
        "aria-hidden": "true",
      }, this.$slots.template ? this.$slots.template({ index }) : renderDefault())),
    ]);
  },
};
