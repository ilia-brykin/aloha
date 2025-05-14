import {
  computed,
  toRef,
} from "vue";

import {
  isFunction,
  range,
} from "lodash-es";

export default function TimesAPI(props) {
  const currentLanguage = toRef(props, "currentLanguage");
  const disabledTime = toRef(props, "disabledTime");
  const id = toRef(props, "id");
  const minuteStep = toRef(props, "minuteStep");
  const value = toRef(props, "value");

  const isDisabledTimeFunction = computed(() => {
    return isFunction(disabledTime.value);
  });

  const stringifyText = value => {
    return ("00" + value).slice(String(value).length);
  };

  const date = computed(() => {
    return value.value ?
      new Date(value.value) :
      new Date().setHours(0, 0, 0, 0);
  });

  const getCurrentId = ({ columnIndex, rowIndex }) => {
    return `${ id.value }_time_${ columnIndex }_${ rowIndex }`;
  };

  const hours = computed(() => {
    return range(24);
  });

  const currentHours = computed(() => {
    return value.value ?
      new Date(value.value).getHours() :
      0;
  });

  const minuteStepLocal = computed(() => {
    return minuteStep.value || 1;
  });

  const minuteLength = computed(() => {
    return parseInt(60 / minuteStepLocal.value);
  });

  const minutes = computed(() => {
    return range(0, minuteLength.value * minuteStepLocal.value, minuteStepLocal.value);
  });

  const currentMinutes = computed(() => {
    return value.value ?
      new Date(value.value).getMinutes() :
      0;
  });

  const seconds = computed(() => {
    return minuteStep.value === 0 ?
      range(0, 60) :
      [];
  });

  const currentSeconds = computed(() => {
    return value.value ?
      new Date(value.value).getSeconds() :
      0;
  });

  const setColumn = ({ times, timeFunctionName, currentTime, ariaLabel, columnIndex }) => {
    const TIMES_COLUMN = [];
    times.forEach((time, timeIndex) => {
      const CURRENT_TIME = new Date(date.value)[timeFunctionName](time);
      const IS_ACTIVE = time === currentTime;
      const IS_DISABLED = isDisabledTimeFunction.value && disabledTime.value(CURRENT_TIME);
      const LABEL = stringifyText(time);
      TIMES_COLUMN.push({
        label: LABEL,
        time: CURRENT_TIME,
        isActive: IS_ACTIVE,
        isDisabled: IS_DISABLED,
        ariaLabel: `${ ariaLabel }: ${ LABEL }`,
        id: getCurrentId({
          columnIndex,
          rowIndex: timeIndex,
        }),
      });
    });

    return TIMES_COLUMN;
  };

  const timesFiltered = computed(() => {
    const TIMES_FILTERED = [];
    let columnIndex = 0;
    const HOURS_COLUMN = setColumn({
      times: hours.value,
      timeFunctionName: "setHours",
      currentTime: currentHours.value,
      ariaLabel: currentLanguage.value.hours,
      columnIndex,
    });
    if (HOURS_COLUMN.length) {
      TIMES_FILTERED.push(HOURS_COLUMN);
      columnIndex++;
    }
    const MINUTES_COLUMN = setColumn({
      times: minutes.value,
      timeFunctionName: "setMinutes",
      currentTime: currentMinutes.value,
      ariaLabel: currentLanguage.value.minutes,
      columnIndex,
    });
    if (MINUTES_COLUMN.length) {
      TIMES_FILTERED.push(MINUTES_COLUMN);
      columnIndex++;
    }
    const SECONDS_COLUMN = setColumn({
      times: seconds.value,
      timeFunctionName: "setSeconds",
      currentTime: currentSeconds.value,
      ariaLabel: currentLanguage.value.seconds,
      columnIndex,
    });
    if (SECONDS_COLUMN.length) {
      TIMES_FILTERED.push(SECONDS_COLUMN);
    }

    return TIMES_FILTERED;
  });

  return {
    getCurrentId,
    timesFiltered,
  };
}
