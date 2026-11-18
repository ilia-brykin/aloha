import {
  computed,
  inject,
  toRef,
} from "vue";

import {
  AVATAR_GROUP_KEY,
} from "../const";
import {
  avatarPluginOptions,
} from "../../plugins/AAvatarPlugin";
import {
  isNumber,
} from "lodash-es";

export default function SizeAPI(props) {
  const shape = toRef(props, "shape");
  const size = toRef(props, "size");

  const group = inject(AVATAR_GROUP_KEY, undefined);

  // Own prop > AAvatarGroup > plugin
  const sizeLocal = computed(() => {
    return size.value ?? group?.size.value ?? avatarPluginOptions.value.propsDefault.size;
  });

  const shapeLocal = computed(() => {
    return shape.value ?? group?.shape.value ?? avatarPluginOptions.value.propsDefault.shape;
  });

  const sizeClass = computed(() => {
    return isNumber(sizeLocal.value) ? undefined : `a_avatar_${ sizeLocal.value }`;
  });

  const sizeStyle = computed(() => {
    return isNumber(sizeLocal.value) ? { "--a_avatar_size": `${ sizeLocal.value }px` } : undefined;
  });

  return {
    shapeLocal,
    sizeClass,
    sizeStyle,
  };
}
