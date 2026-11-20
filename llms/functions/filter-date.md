# filterDate

The function **filterDate** uses the [moment.js](https://momentjs.com/docs/#/displaying/format/) library to format dates and times. It takes a date or time value and returns it in the specified format. Note that moment.js is considered a deprecated library and is planned to be replaced by another solution in the future. There are also plans to expand the function to support various languages.

## Import as Function

```js
import { filterDate } from "aloha-vue";
```

## Import as composition API

```js
import { AFiltersAPI } from "aloha-vue";

export default {
  setup() {  
    const {
      filterDate,
    } = AFiltersAPI();
  },
};
```

## Arguments

```js
filterDate(value, { [format="date"] })
```

- **value** (Any): The date or time to be formatted
- **[format="date"]** (String): The display format for the date. Possible values: "date" (date), "datetime" (date and time), "fullDate" (full date and time), "time" (time), "timeWithSeconds" (time with seconds) or a valid format from [moment.js](https://momentjs.com/docs/#/displaying/format/)

## Basic usage

```js
filterDate("2014-09-08T08:02:17-05:00");
// 08.09.2014

filterDate("2013-02-08");
// 08.02.2013

filterDate("6 Mar 17 21:22 UT");
// 06.03.2017
```

## format

```js
filterDate("2014-09-08T08:02:17-05:00" { format: "datetime" });
// 08.09.2014 15:02

filterDate("2014-09-08T08:02:17-05:00", { format: "fullDate" });
// Monday, 08. September 2014, 15:02

filterDate("2014-09-08T08:02:17-05:00", { format: "time" });
// 15:02

filterDate("2014-09-08T08:02:17-05:00", { format: "timeWithSeconds" });
// 15:02:17

filterDate("2014-09-08T08:02:17-05:00", { format: "MM.YYYY" });
// 09.2014
```
