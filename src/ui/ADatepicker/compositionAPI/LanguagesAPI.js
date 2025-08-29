import {
  computed,
} from "vue";

import {
  getTranslatedText,
} from "../../../ATranslation/compositionAPI/UtilsAPI";


export default function LanguagesAPI() {
  const currentLanguage = computed(() => {
    return {
      days: [
        {
          shortName: getTranslatedText({ placeholder: "_A_DATEPICKER_DAY_SHORT_SUNDAY_" }),
          longName: getTranslatedText({ placeholder: "_A_DATEPICKER_DAY_LONG_SUNDAY_" }),
        },
        {
          shortName: getTranslatedText({ placeholder: "_A_DATEPICKER_DAY_SHORT_MONDAY_" }),
          longName: getTranslatedText({ placeholder: "_A_DATEPICKER_DAY_LONG_MONDAY_" }),
        },
        {
          shortName: getTranslatedText({ placeholder: "_A_DATEPICKER_DAY_SHORT_TUESDAY_" }),
          longName: getTranslatedText({ placeholder: "_A_DATEPICKER_DAY_LONG_TUESDAY_" }),
        },
        {
          shortName: getTranslatedText({ placeholder: "_A_DATEPICKER_DAY_SHORT_WEDNESDAY_" }),
          longName: getTranslatedText({ placeholder: "_A_DATEPICKER_DAY_LONG_WEDNESDAY_" }),
        },
        {
          shortName: getTranslatedText({ placeholder: "_A_DATEPICKER_DAY_SHORT_THURSDAY_" }),
          longName: getTranslatedText({ placeholder: "_A_DATEPICKER_DAY_LONG_THURSDAY_" }),
        },
        {
          shortName: getTranslatedText({ placeholder: "_A_DATEPICKER_DAY_SHORT_FRIDAY_" }),
          longName: getTranslatedText({ placeholder: "_A_DATEPICKER_DAY_LONG_FRIDAY_" }),
        },
        {
          shortName: getTranslatedText({ placeholder: "_A_DATEPICKER_DAY_SHORT_SATURDAY_" }),
          longName: getTranslatedText({ placeholder: "_A_DATEPICKER_DAY_LONG_SATURDAY_" }),
        },
      ],
      months: [
        getTranslatedText({ placeholder: "_A_DATEPICKER_MONTH_JANUARY_" }),
        getTranslatedText({ placeholder: "_A_DATEPICKER_MONTH_FEBRUARY_" }),
        getTranslatedText({ placeholder: "_A_DATEPICKER_MONTH_MARCH_" }),
        getTranslatedText({ placeholder: "_A_DATEPICKER_MONTH_APRIL_" }),
        getTranslatedText({ placeholder: "_A_DATEPICKER_MONTH_MAY_" }),
        getTranslatedText({ placeholder: "_A_DATEPICKER_MONTH_JUNE_" }),
        getTranslatedText({ placeholder: "_A_DATEPICKER_MONTH_JULY_" }),
        getTranslatedText({ placeholder: "_A_DATEPICKER_MONTH_AUGUST_" }),
        getTranslatedText({ placeholder: "_A_DATEPICKER_MONTH_SEPTEMBER_" }),
        getTranslatedText({ placeholder: "_A_DATEPICKER_MONTH_OCTOBER_" }),
        getTranslatedText({ placeholder: "_A_DATEPICKER_MONTH_NOVEMBER_" }),
        getTranslatedText({ placeholder: "_A_DATEPICKER_MONTH_DECEMBER_" }),
      ],
      pickers: [
        getTranslatedText({ placeholder: "_A_DATEPICKER_PICKER_NEXT_7_DAYS_" }),
        getTranslatedText({ placeholder: "_A_DATEPICKER_PICKER_NEXT_30_DAYS_" }),
        getTranslatedText({ placeholder: "_A_DATEPICKER_PICKER_PREVIOUS_7_DAYS_" }),
        getTranslatedText({ placeholder: "_A_DATEPICKER_PICKER_PREVIOUS_30_DAYS_" }),
      ],
      placeholder: {
        date: getTranslatedText({ placeholder: "_A_DATEPICKER_PLACEHOLDER_DATE_" }),
        time: getTranslatedText({ placeholder: "_A_DATEPICKER_PLACEHOLDER_TIME_" }),
        dateRange: getTranslatedText({ placeholder: "_A_DATEPICKER_PLACEHOLDER_DATE_RANGE_" }),
        regionDate: getTranslatedText({ placeholder: "_A_DATEPICKER_PLACEHOLDER_REGION_DATE_" }),
        regionTime: getTranslatedText({ placeholder: "_A_DATEPICKER_PLACEHOLDER_REGION_TIME_" }),
      },
      today: getTranslatedText({ placeholder: "_A_DATEPICKER_TODAY_" }),
      buttons: {
        lastYear: getTranslatedText({ placeholder: "_A_DATEPICKER_BUTTON_LAST_YEAR_" }),
        lastYears: getTranslatedText({ placeholder: "_A_DATEPICKER_BUTTON_LAST_YEARS_" }),
        nextYear: getTranslatedText({ placeholder: "_A_DATEPICKER_BUTTON_NEXT_YEAR_" }),
        nextYears: getTranslatedText({ placeholder: "_A_DATEPICKER_BUTTON_NEXT_YEARS_" }),
        lastMonth: getTranslatedText({ placeholder: "_A_DATEPICKER_BUTTON_LAST_MONTH_" }),
        nextMonth: getTranslatedText({ placeholder: "_A_DATEPICKER_BUTTON_NEXT_MONTH_" }),
        monthsView: getTranslatedText({ placeholder: "_A_DATEPICKER_BUTTON_MONTHS_VIEW_" }),
        toDaysView: getTranslatedText({ placeholder: "_A_DATEPICKER_BUTTON_TO_DAYS_VIEW_" }),
        toMonthsView: getTranslatedText({ placeholder: "_A_DATEPICKER_BUTTON_TO_MONTHS_VIEW_" }),
        toYearsView: getTranslatedText({ placeholder: "_A_DATEPICKER_BUTTON_TO_YEARS_VIEW_" }),
      },
      hours: getTranslatedText({ placeholder: "_A_DATEPICKER_HOURS_" }),
      minutes: getTranslatedText({ placeholder: "_A_DATEPICKER_MINUTES_" }),
      seconds: getTranslatedText({ placeholder: "_A_DATEPICKER_SECONDS_" }),
      headerYears: (firstYear, lastYear) => getTranslatedText({
        placeholder: "_A_DATEPICKER_HEADER_YEARS_{{firstYear}}_{{lastYear}}_",
        extra: {
          firstYear,
          lastYear,
        },
      }),
    };
  });

  return {
    currentLanguage,
  };
}
