import {
  computed,
  toRef,
} from "vue";

import {
  formatDate,
} from "../../../utils";

export default function TableAPI(props, {
  dates = computed(() => []),
}) {
  const calendarMonth = toRef(props, "calendarMonth");
  const currentLanguage = toRef(props, "currentLanguage");
  const disabledDate = toRef(props, "disabledDate");
  const dateFormat = toRef(props, "dateFormat");
  const endAt = toRef(props, "endAt");
  const firstDayOfWeek = toRef(props, "firstDayOfWeek");
  const id = toRef(props, "id");
  const startAt = toRef(props, "startAt");
  const value = toRef(props, "value");

  const ths = computed(() => {
    const days = currentLanguage.value.days;
    const firstDay = parseInt(firstDayOfWeek.value, 10);

    return days.concat(days).slice(firstDay, firstDay + 7);
  });

  const getCellTime = ({ year, month, day }) => {
    return new Date(year, month, day).getTime();
  };

  const isCurrentDayToday = ({ year, month, day }) => {
    const CELL_TIME = getCellTime({ year, month, day });
    const TODAY = new Date().setHours(0, 0, 0, 0);
    return CELL_TIME === TODAY;
  };


  const getCellClasses = ({ cellTime, isToday, month }) => {
    const CLASSES = [];
    const CURRENT_TIME = value.value && new Date(value.value).setHours(0, 0, 0, 0);
    const START_TIME = startAt.value && new Date(startAt.value).setHours(0, 0, 0, 0);
    const END_TIME = endAt.value && new Date(endAt.value).setHours(0, 0, 0, 0);

    if (month < calendarMonth.value) {
      CLASSES.push("last-month");
    } else if (month > calendarMonth.value) {
      CLASSES.push("next-month");
    } else {
      CLASSES.push("cur-month");
    }

    if (isToday) {
      CLASSES.push("today");
    }

    if (disabledDate.value(cellTime)) {
      CLASSES.push("disabled");
    }

    if (CURRENT_TIME) {
      if (cellTime === CURRENT_TIME) {
        CLASSES.push("actived");
      } else if (START_TIME && cellTime <= CURRENT_TIME) {
        CLASSES.push("inrange");
      } else if (END_TIME && cellTime >= CURRENT_TIME) {
        CLASSES.push("inrange");
      }
    }
    return CLASSES.join(" ");
  };

  const getId = ({ month, day }) => {
    let _id = `${ id.value }_${ day }`;
    if (month < calendarMonth.value) {
      _id += "_last_month";
    } else if (month > calendarMonth.value) {
      _id += "_next_month";
    }

    return _id;
  };

  const getCellTitle = ({ year, month, day }) => {
    return formatDate(new Date(year, month, day), dateFormat.value);
  };

  const trsWithTds = computed(() => {
    const TRS_WITH_TDS = [];
    for (let i = 0; i < 6; i++) {
      const TDS = [];
      dates.value.slice(7 * i, 7 * i + 7).forEach(date => {
        const IS_TODAY = isCurrentDayToday(date);
        const CELL_TIME = getCellTime(date);
        const IS_DISABLED = disabledDate.value(CELL_TIME);
        TDS.push({
          class: getCellClasses({
            cellTime: CELL_TIME,
            isToday: IS_TODAY,
            month: date.month,
          }),
          id: getId({
            month: date.month,
            day: date.day,
          }),
          year: date.year,
          month: date.month,
          fullDate: getCellTitle(date),
          date: date,
          label: date.day,
          isToday: IS_TODAY,
          isDisabled: IS_DISABLED,
          isCurrentMonth: date.month === calendarMonth.value,
        });
      });
      TRS_WITH_TDS.push(TDS);
    }

    return TRS_WITH_TDS;
  });

  return {
    ths,
    trsWithTds,
  };
}
