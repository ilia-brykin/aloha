import{Tt as e,Ut as t,kt as n,qt as r,zt as i}from"./chunk.vendor.CZPox1kV.js";import{Z as a,t as o,xt as s}from"./bundle.index.CLtYDDlb.js";import{n as c,t as l}from"./chunk.AlohaExample.BFgfeYtr.js";import{n as u,r as d,t as f}from"./chunk.PageFilterTest.DEb_j_8g.js";import{t as p}from"./chunk.PageFilterImportCompositionApi.D-8n-B7g.js";function m(){return{codeJs:`filterDate("2014-09-08T08:02:17-05:00");
// ${s(`2014-09-08T08:02:17-05:00`)}

filterDate("2013-02-08");
// ${s(`2013-02-08`)}

filterDate("6 Mar 17 21:22 UT");
// ${s(`6 Mar 17 21:22 UT`)}`}}var h={name:`PageFilterDateExample`,components:{AlohaExample:l},setup(){let{codeJs:e}=m();return{codeJs:e}}};function g(n,r,a,o,s,c){let l=t(`aloha-example`);return i(),e(l,{"code-js":n.codeJs,header:`_A_BASIC_USAGE_`,"is-code-visible-default":!0},null,8,[`code-js`])}var _=o(h,[[`render`,g]]);function v(){return{codeJs:`filterDate("2014-09-08T08:02:17-05:00" { format: "datetime" });
// ${s(`2014-09-08T08:02:17-05:00`,{format:`datetime`})}

filterDate("2014-09-08T08:02:17-05:00", { format: "fullDate" });
// ${s(`2014-09-08T08:02:17-05:00`,{format:`fullDate`})}

filterDate("2014-09-08T08:02:17-05:00", { format: "time" });
// ${s(`2014-09-08T08:02:17-05:00`,{format:`time`})}

filterDate("2014-09-08T08:02:17-05:00", { format: "timeWithSeconds" });
// ${s(`2014-09-08T08:02:17-05:00`,{format:`timeWithSeconds`})}

filterDate("2014-09-08T08:02:17-05:00", { format: "MM.YYYY" });
// ${s(`2014-09-08T08:02:17-05:00`,{format:`MM.YYYY`})}`}}var y={name:`PageFilterDateFormat`,components:{AlohaExample:l},setup(){let{codeJs:e}=v();return{codeJs:e}}};function b(n,r,a,o,s,c){let l=t(`aloha-example`);return i(),e(l,{"code-js":n.codeJs,header:`format`,"is-code-visible-default":!0},null,8,[`code-js`])}var x=o(y,[[`render`,b]]);function S(){return{argumentsText:[{value:`value`,types:[`Any`],text:`_PAGE_FILTER_DATE_ARGUMENTS_VALUE_`},{value:`[format="date"]`,types:[`String`],text:`_PAGE_FILTER_DATE_ARGUMENTS_FORMAT_`}]}}function C(){return{pageTitle:`filterDate`}}var w=`import {
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
`,T={name:`PageFilterDate`,components:{AlohaPage:c,ATranslation:a,PageFilterArguments:d,PageFilterDateExample:_,PageFilterDateFormat:x,PageFilterImportCompositionApi:p,PageFilterImportFunction:u,PageFilterTest:f},setup(){let{pageTitle:e}=C(),{argumentsText:t}=S();return{argumentsText:t,pageTitle:e,test:w}}};function E(a,o,s,c,l,u){let d=t(`a-translation`),f=t(`page-filter-import-function`),p=t(`page-filter-import-composition-api`),m=t(`page-filter-arguments`),h=t(`page-filter-date-example`),g=t(`page-filter-date-format`),_=t(`page-filter-test`),v=t(`aloha-page`);return i(),e(v,{"page-title":a.pageTitle},{body:r(()=>[n(d,{tag:`p`,html:`_PAGE_FILTER_DATE_DESCRIPTION_`}),n(f,{"function-name":`filterDate`,"type-import":`filters`}),n(p,{"function-name":`filterDate`}),n(m,{"arguments-text":a.argumentsText,"function-description":`filterDate(value, { [format="date"] })`},null,8,[`arguments-text`]),n(h),n(g),n(_,{test:a.test},null,8,[`test`])]),_:1},8,[`page-title`])}var D=o(T,[[`render`,E]]);export{D as default};