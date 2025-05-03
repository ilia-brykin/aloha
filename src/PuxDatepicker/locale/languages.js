export default {
  en: {
    days: [
      {
        shortName: "Sun",
        longName: "Sunday",
      },
      {
        shortName: "Mon",
        longName: "Monday",
      },
      {
        shortName: "Tue",
        longName: "Tuesday",
      },
      {
        shortName: "Wed",
        longName: "Wednesday",
      },
      {
        shortName: "Thu",
        longName: "Thursday",
      },
      {
        shortName: "Fri",
        longName: "Friday",
      },
      {
        shortName: "Sat",
        longName: "Saturday",
      },
    ],
    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    pickers: ["next 7 days", "next 30 days", "previous 7 days", "previous 30 days"],
    placeholder: {
      date: "Enter date in format DD.MM.YYYY",
      time: "Enter time in format HH:MM",
      dateRange: "Select Date Range",
      regionDate: "Date picker",
      regionTime: "Time picker",
    },
    today: "today",
    buttons: {
      lastYear: "Last year",
      lastYears: "Last 10 years",
      nextYear: "Next year",
      nextYears: "Next 10 years",
      lastMonth: "Last month",
      nextMonth: "Next month",
      monthsView: "Show detailed month view",
      toDaysView: "Switch to the day selection",
      toMonthsView: "Switch to the month selection",
      toYearsView: "switch to the selection of the years",
    },
    hours: "Hours",
    minutes: "Minutes",
    seconds: "Seconds",
    headerYears: (firstYear, lastYear) => `${ firstYear } to ${ lastYear }`,
  },
  ru: {
    days: [
      {
        shortName: "Вс",
        longName: "Воскресенье",
      },
      {
        shortName: "Пн",
        longName: "Понедельник",
      },
      {
        shortName: "Вт",
        longName: "Вторник",
      },
      {
        shortName: "Ср",
        longName: "Среда",
      },
      {
        shortName: "Чт",
        longName: "Четверг",
      },
      {
        shortName: "Пт",
        longName: "Пятница",
      },
      {
        shortName: "Сб",
        longName: "Суббота",
      },
    ],
    months: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
    pickers: ["след. 7 дней", "след. 30 дней", "прош. 7 дней", "прош. 30 дней"],
    placeholder: {
      date: "Введите дату в формате ДД.ММ.ГГГГ",
      time: "Enter время in format ЧЧ.ММ",
      dateRange: "Выберите период",
      regionDate: "Выбор даты",
      regionTime: "Выбор времени",
    },
    today: "Сегодня",
    buttons: {
      lastYear: "Предыдущий год",
      lastYears: "Предыдущие 10 лет",
      nextYear: "Следующий год",
      nextYears: "Следующие 10 лет",
      lastMonth: "Предыдущий месяц",
      nextMonth: "Следующий месяц",
      toDaysView: "Перейти к выбору дня",
      toMonthsView: "Перейти к выбору месяца",
      toYearsView: "Перейти к выбору года",
    },
    hours: "Часы",
    minutes: "Минуты",
    seconds: "Секунды",
    headerYears: (firstYear, lastYear) => `с ${ firstYear } по ${ lastYear }`,
  },
  de: {
    days: [
      {
        shortName: "So",
        longName: "Sontag",
      },
      {
        shortName: "Mo",
        longName: "Montag",
      },
      {
        shortName: "Di",
        longName: "Dienstag",
      },
      {
        shortName: "Mi",
        longName: "Mittwoch",
      },
      {
        shortName: "Do",
        longName: "Donnerstag",
      },
      {
        shortName: "Fr",
        longName: "Freitag",
      },
      {
        shortName: "Sa",
        longName: "Samstag",
      },
    ],
    months: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
    pickers: ["nächste 7 Tage", "nächste 30 Tage", "vorige 7 Tage", "vorige 30 Tage"],
    placeholder: {
      date: "Datum im Format TT.MM.JJJJ eingeben",
      time: "Zeit im Format HH.MM eingeben",
      dateRange: "Zeitraum auswählen",
      regionDate: "Datumsauswahl",
      regionTime: "Zeitauswahl",
    },
    today: "Heute",
    buttons: {
      lastYear: "Voriges Jahr",
      lastYears: "Vorige 10 Jahre",
      nextYear: "Nächstes Jahr",
      nextYears: "Nächste 10 Jahre",
      lastMonth: "Voriger Monat",
      nextMonth: "Nächster Monat",
      toDaysView: "Zur Auswahl der Tage wechseln",
      toMonthsView: "Zur Auswahl der Monate wechseln",
      toYearsView: "Zur Auswahl der Jahre wechseln",
    },
    hours: "Stunden",
    minutes: "Minuten",
    seconds: "Sekunden",
    headerYears: (firstYear, lastYear) => `${ firstYear } bis ${ lastYear }`,
  },
};
