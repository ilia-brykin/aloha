import {
  computed,
  toRef,
} from "vue";

import AKeyId from "../../../const/AKeyId";
import {
  get,
} from "lodash-es";

export default function AttributesAPI(props) {
  const isLinkInSearchPanel = toRef(props, "isLinkInSearchPanel");
  const item = toRef(props, "item");
  const keyIcon = toRef(props, "keyIcon");

  const id = computed(() => {
    return item.value[AKeyId];
  });

  const icon = computed(() => {
    if (isLinkInSearchPanel.value) {
      return undefined;
    }
    return get(item.value, keyIcon.value);
  });

  const iconClassLocal = computed(() => {
    const CLASS = "a_menu__link__icon";
    if (item.value.iconClass) {
      return `{ CLASS } ${ item.value.iconClass }`;
    }
    return CLASS;
  });

  return {
    icon,
    iconClassLocal,
    id,
  };
}
