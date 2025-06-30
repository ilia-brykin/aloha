import {
  computed,
  ref,
  toRef,
} from "vue";

import {
  cloneDeep,
  forEach,
  get,
  isEmpty,
  unset,
} from "lodash-es";

export default function DataFormAPI(props, {
  model = ref({}),
  updateModel = () => {},
}) {
  const children = toRef(props, "children");
  const typedBaseId = toRef(props, "typedBaseId");
  const typedChildren = toRef(props, "typedChildren");

  const isFormTyped = computed(() => {
    return !(isEmpty(typedChildren.value) || !typedBaseId.value);
  });

  const modelTyped = computed(() => {
    return get(model.value, typedBaseId.value);
  });

  const dataFormTyped = computed(() => {
    if (modelTyped.value &&
      typedChildren.value[modelTyped.value]?.length) {
      return typedChildren.value[modelTyped.value];
    }

    return [];
  });

  const dataForm = computed(() => {
    if (!isFormTyped.value) {
      return children.value;
    }

    const DATA_FORM = [
      ...children.value,
      ...dataFormTyped.value,
    ];

    return DATA_FORM;
  });

  const changeDataForm = ({ fullModel, id } = {}) => {
    if (id === typedBaseId.value) {
      const FULL_MODEL = cloneDeep(fullModel) || {};
      forEach(dataFormTyped.value, item => {
        unset(FULL_MODEL, item.id);
      });
      updateModel(FULL_MODEL);
    } else {
      updateModel(fullModel);
    }
  };

  return {
    changeDataForm,
    dataForm,
  };
}
