import{t as e}from"./chunk.AlohaPage.CNwNARGV.js";import{n as t,r as n,t as r}from"./chunk.PageFilterTest.BtENWl1q.js";import{t as i}from"./chunk.AlohaExample.NZuewB4M.js";import{Gt as a,mn as o,t as s}from"./bundle.index.DHnbMku0.js";import{Jt as c,Ut as l,mn as u,on as d,un as f}from"./chunk.vendor.Bjd2408Z.js";import{t as p}from"./chunk.PageFilterImportCompositionApi.BTnH2nYd.js";function m(){return{codeJs:`filterDate("2014-09-08T08:02:17-05:00");
// ${a(`2014-09-08T08:02:17-05:00`)}

filterDate("2013-02-08");
// ${a(`2013-02-08`)}

filterDate("6 Mar 17 21:22 UT");
// ${a(`6 Mar 17 21:22 UT`)}`}}var h={name:`PageFilterDateExample`,components:{AlohaExample:i},setup(){let{codeJs:e}=m();return{codeJs:e}}};function g(e,t,n,r,i,a){let o=f(`aloha-example`);return d(),l(o,{"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,"is-code-visible-default":!0},null,8,[`code-js`])}var _=s(h,[[`render`,g]]);function v(){return{codeJs:`filterDate("2014-09-08T08:02:17-05:00" { format: "datetime" });
// ${a(`2014-09-08T08:02:17-05:00`,{format:`datetime`})}

filterDate("2014-09-08T08:02:17-05:00", { format: "fullDate" });
// ${a(`2014-09-08T08:02:17-05:00`,{format:`fullDate`})}

filterDate("2014-09-08T08:02:17-05:00", { format: "time" });
// ${a(`2014-09-08T08:02:17-05:00`,{format:`time`})}

filterDate("2014-09-08T08:02:17-05:00", { format: "timeWithSeconds" });
// ${a(`2014-09-08T08:02:17-05:00`,{format:`timeWithSeconds`})}

filterDate("2014-09-08T08:02:17-05:00", { format: "MM.YYYY" });
// ${a(`2014-09-08T08:02:17-05:00`,{format:`MM.YYYY`})}`}}var y={name:`PageFilterDateFormat`,components:{AlohaExample:i},setup(){let{codeJs:e}=v();return{codeJs:e}}};function b(e,t,n,r,i,a){let o=f(`aloha-example`);return d(),l(o,{"code-js":e.codeJs,header:`format`,"is-code-visible-default":!0},null,8,[`code-js`])}var x=s(y,[[`render`,b]]);function S(){return{argumentsText:[{value:`value`,types:[`Any`],text:`_PAGE_FILTER_DATE_ARGUMENTS_VALUE_`},{value:`[format="date"]`,types:[`String`],text:`_PAGE_FILTER_DATE_ARGUMENTS_FORMAT_`}]}}function C(){return{pageTitle:`filterDate`}}var w=`import {
  describe,
  expect,
  it,
} from "vitest";

import filterDate from "../filterDate";
import moment from "moment";

describe("filterDate function", () => {
  it("returns empty string when input is null, undefined or an empty string", () => {
    const testCases = [null, undefined, ""];
    testCases.forEach(tc => {
      expect(filterDate(tc)).toEqual("");
    });
  });

  it("returns the original value when the input is not a valid date", () => {
    const testCases = ["abc", "a123", "12a3", "123a"];
    testCases.forEach(tc => {
      expect(filterDate(tc)).toEqual(tc);
    });
  });

  it("returns the formatted date when the input is a valid date", () => {
    const testCases = [
      {
        input: "2023-03-01",
        format: "YYYY-MM-DD",
        expected: "2023-03-01",
      },
      {
        input: "2023-03-01",
        format: "date",
        expected: moment("2023-03-01").format("DD.MM.YYYY"),
      },
    ];
    testCases.forEach(tc => {
      expect(filterDate(tc.input, { format: tc.format })).toEqual(tc.expected);
    });
  });
});
`,T={name:`PageFilterDate`,components:{AlohaPage:e,ATranslation:o,PageFilterArguments:n,PageFilterDateExample:_,PageFilterDateFormat:x,PageFilterImportCompositionApi:p,PageFilterImportFunction:t,PageFilterTest:r},setup(){let{pageTitle:e}=C(),{argumentsText:t}=S();return{argumentsText:t,pageTitle:e,test:w}}};function E(e,t,n,r,i,a){let o=f(`a-translation`),s=f(`page-filter-import-function`),p=f(`page-filter-import-composition-api`),m=f(`page-filter-arguments`),h=f(`page-filter-date-example`),g=f(`page-filter-date-format`),_=f(`page-filter-test`),v=f(`aloha-page`);return d(),l(v,{"page-title":e.pageTitle},{body:u(()=>[c(o,{tag:`p`,html:`_PAGE_FILTER_DATE_DESCRIPTION_`}),c(s,{"function-name":`filterDate`,"type-import":`filters`}),c(p,{"function-name":`filterDate`}),c(m,{"arguments-text":e.argumentsText,"function-description":`filterDate(value, { [format="date"] })`},null,8,[`arguments-text`]),c(h),c(g),c(_,{test:e.test},null,8,[`test`])]),_:1},8,[`page-title`])}var D=s(T,[[`render`,E]]);export{D as default};