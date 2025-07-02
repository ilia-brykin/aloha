import {
  computed,
  toRef,
} from "vue";

import {
  AKeyId,
} from "../../../const/AKeys";
import {
  cloneDeep,
  isArray,
} from "lodash-es";

export default function ChildrenAPI(props) {
  const children = toRef(props, "children");
  const keyId = toRef(props, "keyId");
  const mode = toRef(props, "mode");
  const readonly = toRef(props, "readonly");
  const showReadonlyChildren = toRef(props, "showReadonlyChildren");

  const idOptions = computed(() => {
    return {
      id: AKeyId,
      type: "text",
      required: true,
      label: "_A_VALIDATED_JSON_ID_LABEL_",
      helpText: "_A_VALIDATED_JSON_ID_HELP_TEXT_",
    };
  });

  const filterReadonlyRecursive = childrenLocal => {
    return childrenLocal.reduce((acc, child) => {
      if (!child.readonly) {
        if (isArray(child.children) && child.children.length) {
          child.children = filterReadonlyRecursive(child.children);
        }
        acc.push(child);
      }
      return acc;
    }, []);
  };

  const childrenFiltered = computed(() => {
    if (readonly.value || showReadonlyChildren.value) {
      if (mode.value === "json" && !keyId.value) {
        return [
          idOptions.value,
          ...children.value,
        ];
      }

      return children.value;
    }

    const CHILDREN_FILTERED = filterReadonlyRecursive(cloneDeep(children.value));

    if (mode.value === "json" && !keyId.value) {
      return [
        idOptions.value,
        ...CHILDREN_FILTERED,
      ];
    }

    return CHILDREN_FILTERED;
  });

  return {
    childrenFiltered,
  };
}
