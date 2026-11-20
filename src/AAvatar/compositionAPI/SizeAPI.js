import {
  computed,
  inject,
  toRef,
} from "vue";

import {
  AVATAR_GROUP_KEY,
} from "../const";
import {
  getPropDefault,
} from "../../plugins/AComponentsPlugin";
import {
  isNumber,
} from "lodash-es";

export default function SizeAPI(props) {
  const shape = toRef(props, "shape");
  const size = toRef(props, "size");

  const group = inject(AVATAR_GROUP_KEY, undefined);

  // Own prop > AAvatarGroup > AComponentsPlugin
  const sizeLocal = computed(() => {
    return size.value ?? group?.size.value ?? getPropDefault("AAvatar", "size", "medium");
  });

  const shapeLocal = computed(() => {
    return shape.value ?? group?.shape.value ?? getPropDefault("AAvatar", "shape", "circle");
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
