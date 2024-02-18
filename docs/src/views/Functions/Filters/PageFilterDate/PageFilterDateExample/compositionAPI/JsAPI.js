import filterDate from "../../../../../../../../src/filters/filterDate";

export default function JsAPI() {
  const codeJs = `filterDate("2014-09-08T08:02:17-05:00");
// ${ filterDate("2014-09-08T08:02:17-05:00") }

filterDate("2013-02-08");
// ${ filterDate("2013-02-08") }

filterDate("6 Mar 17 21:22 UT");
// ${ filterDate("6 Mar 17 21:22 UT") }`;

  return {
    codeJs,
  };
}
