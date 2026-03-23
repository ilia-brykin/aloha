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
  const timePrecision = toRef(props, "timePrecision");
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

  const timePrecisionLocal = computed(() => {
    if (timePrecision.value) {
      return timePrecision.value;
    }

    return minuteStep.value === 0 ? "second" : "minute";
  });

  const minuteStepLocal = computed(() => {
    return minuteStep.value || 1;
  });

  const minuteLength = computed(() => {
    return parseInt(60 / minuteStepLocal.value);
  });

  const minutes = computed(() => {
    if (timePrecisionLocal.value === "hour") {
      return [];
    }

    return range(0, minuteLength.value * minuteStepLocal.value, minuteStepLocal.value);
  });

  const currentMinutes = computed(() => {
    return value.value ?
      new Date(value.value).getMinutes() :
      0;
  });

  const seconds = computed(() => {
    return timePrecisionLocal.value === "second" ?
      range(0, 60) :
      [];
  });

  const normalizeTimeByPrecision = time => {
    const TIME_LOCAL = new Date(time);

    if (timePrecisionLocal.value === "hour") {
      TIME_LOCAL.setMinutes(0, 0, 0);
    } else if (timePrecisionLocal.value === "minute") {
      TIME_LOCAL.setSeconds(0, 0);
    }

    return TIME_LOCAL;
  };

  const currentSeconds = computed(() => {
    return value.value ?
      new Date(value.value).getSeconds() :
      0;
  });

  const setColumn = ({ times, timeFunctionName, currentTime, ariaLabel, columnIndex }) => {
    const TIMES_COLUMN = [];
    times.forEach((time, timeIndex) => {
      const CURRENT_TIME_LOCAL = new Date(date.value);
      CURRENT_TIME_LOCAL[timeFunctionName](time);
      const CURRENT_TIME = normalizeTimeByPrecision(CURRENT_TIME_LOCAL).getTime();
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
