import {
  computed,
  toRef,
} from "vue";

import {
  iconPluginOptions,
} from "../../../plugins/AIconPlugin";
import {
  cloneDeep,
  forEach,
} from "lodash-es";

export default function IconsAPI(props) {
  const iconsFromPlugin = computed(() => {
    const ICONS_MAP = cloneDeep(iconPluginOptions.value.icons);
    delete ICONS_MAP.Aloha;
    const ICONS = [];
    forEach(ICONS_MAP, (_, iconKey) => {
      ICONS.push({
        value: iconKey,
        label: iconKey,
      });
    });

    return ICONS;
  });

  return {
    iconsFromPlugin,
  };
}
