import {
  computed,
  toRef,
} from "vue";

import {
  typesLabelProps,
} from "../../const/AUiTypes";
import {
  isUndefined,
} from "lodash-es";

export default function PropsTypeAPI(props) {
  const hideFor = toRef(props, "hideFor");
  const hideId = toRef(props, "hideId");
  const prevent = toRef(props, "prevent");
  const stop = toRef(props, "stop");
  const type = toRef(props, "type");

  const propsForType = computed(() => {
    return typesLabelProps.value[type.value] || {};
  });

  const getLocalBooleanProp = ({ prop, propForType }) => {
    if (!isUndefined(prop)) {
      return prop;
    }

    return propForType;
  };

  const stopLocal = computed(() => {
    return getLocalBooleanProp({
      prop: stop.value,
      propForType: propsForType.value.stop,
    });
  });

  const preventLocal = computed(() => {
    return getLocalBooleanProp({
      prop: prevent.value,
      propForType: propsForType.value.prevent,
    });
  });

  const hideIdLocal = computed(() => {
    return getLocalBooleanProp({
      prop: hideId.value,
      propForType: propsForType.value.hideId,
    });
  });

  const hideForLocal = computed(() => {
    return getLocalBooleanProp({
      prop: hideFor.value,
      propForType: propsForType.value.hideFor,
    });
  });

  return {
    hideForLocal,
    hideIdLocal,
    preventLocal,
    stopLocal,
  };
}
