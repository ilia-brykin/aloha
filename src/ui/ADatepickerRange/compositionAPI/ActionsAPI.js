import {
  ref,
  toRef,
} from "vue";

import {
  cloneDeep,
} from "lodash-es";

import moment from "moment";

export default function ActionsAPI(props, { emit }) {
  const model = toRef(props, "model");
  const options = toRef(props, "options");
  const id = toRef(props, "id");

  const popupStyles = ref({
    min: {},
    max: {},
  });

  const isDate = date => moment(date, "YYYY-MM-DD", true).isValid();

  const onFocus = $event => {
    emit("focus", {
      event: $event,
      props,
    });
  };

  const formatDate = date => {
    return isDate(date) ? moment(date).format("YYYY-MM-DD") : date;
  };

  const onSelect = ({ arg, label }) => {
    const data = formatDate(arg);
    const MODEL = cloneDeep(model.value);

    if (label === "min") {
      MODEL.date_before = data;
    } else if (label === "max") {
      MODEL.date_after = data;
    }
    emit("input", {
      model: MODEL,
      id: id.value,
      param: options.value.param,
      options: options.value,
    });
    emit("change", {
      model: MODEL,
      id: id.value,
      param: options.value.param,
      options: options.value,
    });
  };

  const onSelectMin = date => onSelect({ arg: date, label: "min" });
  const onSelectMax = date => onSelect({ arg: date, label: "max" });
  const onFocusMin = $event => onFocus($event, "min");
  const onFocusMax = $event => onFocus($event, "max");

  return {
    onSelectMin,
    onSelectMax,
    onFocusMin,
    onFocusMax,
    popupStyles,
  };
}
