import {
  filterDate,
} from "aloha-vue";

export default function JsAPI() {
  const codeJs = `filterDate("2014-09-08T08:02:17-05:00" { format: "datetime" });
// ${ filterDate("2014-09-08T08:02:17-05:00", { format: "datetime" }) }

filterDate("2014-09-08T08:02:17-05:00", { format: "fullDate" });
// ${ filterDate("2014-09-08T08:02:17-05:00", { format: "fullDate" }) }

filterDate("2014-09-08T08:02:17-05:00", { format: "time" });
// ${ filterDate("2014-09-08T08:02:17-05:00", { format: "time" }) }

filterDate("2014-09-08T08:02:17-05:00", { format: "timeWithSeconds" });
// ${ filterDate("2014-09-08T08:02:17-05:00", { format: "timeWithSeconds" }) }

filterDate("2014-09-08T08:02:17-05:00", { format: "MM.YYYY" });
// ${ filterDate("2014-09-08T08:02:17-05:00", { format: "MM.YYYY" }) }`;

  return {
    codeJs,
  };
}
