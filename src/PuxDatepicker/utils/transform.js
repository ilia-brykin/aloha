import {
  isValidDate,
} from "./index";


const TODAY = new Date();

export const transformDate = {
  date: {
    value2date: value => {
      if (isValidDate(value)) {
        return new Date(value);
      }
      const DATE_STRING = `${ TODAY.toDateString() } ${ value }`;
      return isValidDate(DATE_STRING) ? new Date(DATE_STRING) : null;
    },
    date2value: date => date,
  },
  timestamp: {
    value2date: value => isValidDate(value) ? new Date(value) : null,
    date2value: date => date && new Date(date).getTime(),
  },
};
