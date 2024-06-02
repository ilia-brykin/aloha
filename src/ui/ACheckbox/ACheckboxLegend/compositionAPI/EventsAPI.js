import {
  computed,
  toRef,
} from "vue";

import AKeysCode from "../../../../const/AKeysCode";
import AKeyId from "../../../../const/AKeyId";
import {
  filter,
  forEach,
} from "lodash-es";

export default function EventsAPI(props, { emit }, {
  isCheckedAll = computed(() => false),
  isIndeterminate = computed(() => undefined),
}) {
  const data = toRef(props, "data");
  const dataKeyByKeyId = toRef(props, "dataKeyByKeyId");
  const modelValue = toRef(props, "modelValue");

  const getModelEmpty = () => {
    return filter(modelValue.value || [], value => {
      return !dataKeyByKeyId.value[value];
    });
  };

  const getModelAll = ({ model }) => {
    forEach(data.value, item => {
      const ID = item[AKeyId];
      model.push(ID);
    });

    return model;
  };

  const changeModel = $event => {
    let model = getModelEmpty();
    if (isIndeterminate.value || !isCheckedAll.value) {
      model = getModelAll({ model });
    }

    emit("changeModelValue", {
      $event,
      model,
    });
  };

  const onClick = $event => {
    $event.stopPropagation();
    $event.preventDefault();
    changeModel($event);
  };

  const onKeydown = $event => {
    if ($event.keyCode === AKeysCode.enter ||
      $event.keyCode === AKeysCode.space) {
      onClick($event);
      $event.stopPropagation();
      $event.preventDefault();
    }
  };

  return {
    onClick,
    onKeydown,
  };
}
