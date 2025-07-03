import{A as _,a as x}from"./chunk.AlohaExample.DVatJQen.js";import{P as $,a as E,b as P}from"./chunk.PageFilterTest.nnRijRnk.js";import{aO as a,_ as s,A as F}from"./bundle.index.D7U4WhBz.js";import{U as m,e,V as p,aS as Y,Z as n}from"./chunk.vendor.B8i9Zb03.js";import"./chunk.vendor-lodash.BGdgYQ9t.js";import{P as M}from"./chunk.PageFilterImportCompositionApi.BjbfEgS7.js";import"./chunk.APageTabTitle.CWoEuX_1.js";import"./chunk.AlohaHighlightjs.DOgKZA3M.js";import"./chunk.translations-ar.DEWt73y8.js";import"./chunk.translations-de.CN5eAU-4.js";import"./chunk.translations-en.CPCEcTAP.js";import"./chunk.translations-es.BKTK5PUv.js";import"./chunk.translations-fr.CslimZmU.js";import"./chunk.translations-hr.CiJ7_Y2m.js";import"./chunk.translations-it.H45F8miC.js";import"./chunk.translations-ru.o-dOzdYz.js";function I(){return{codeJs:`filterDate("2014-09-08T08:02:17-05:00");
// ${a("2014-09-08T08:02:17-05:00")}

filterDate("2013-02-08");
// ${a("2013-02-08")}

filterDate("6 Mar 17 21:22 UT");
// ${a("6 Mar 17 21:22 UT")}`}}const C={name:"PageFilterDateExample",components:{AlohaExample:_},setup(){const{codeJs:t}=I();return{codeJs:t}}};function v(t,r,i,c,l,f){const o=e("aloha-example");return p(),m(o,{"code-js":t.codeJs,header:"_A_BASIC_USAGE_","is-code-visible-default":!0},null,8,["code-js"])}const J=s(C,[["render",v]]);function S(){return{codeJs:`filterDate("2014-09-08T08:02:17-05:00" { format: "datetime" });
// ${a("2014-09-08T08:02:17-05:00",{format:"datetime"})}

filterDate("2014-09-08T08:02:17-05:00", { format: "fullDate" });
// ${a("2014-09-08T08:02:17-05:00",{format:"fullDate"})}

filterDate("2014-09-08T08:02:17-05:00", { format: "time" });
// ${a("2014-09-08T08:02:17-05:00",{format:"time"})}

filterDate("2014-09-08T08:02:17-05:00", { format: "timeWithSeconds" });
// ${a("2014-09-08T08:02:17-05:00",{format:"timeWithSeconds"})}

filterDate("2014-09-08T08:02:17-05:00", { format: "MM.YYYY" });
// ${a("2014-09-08T08:02:17-05:00",{format:"MM.YYYY"})}`}}const b={name:"PageFilterDateFormat",components:{AlohaExample:_},setup(){const{codeJs:t}=S();return{codeJs:t}}};function y(t,r,i,c,l,f){const o=e("aloha-example");return p(),m(o,{"code-js":t.codeJs,header:"format","is-code-visible-default":!0},null,8,["code-js"])}const R=s(b,[["render",y]]);function U(){return{argumentsText:[{value:"value",types:["Any"],text:"_PAGE_FILTER_DATE_ARGUMENTS_VALUE_"},{value:'[format="date"]',types:["String"],text:"_PAGE_FILTER_DATE_ARGUMENTS_FORMAT_"}]}}function G(){return{pageTitle:"filterDate"}}const j=`import {
  describe,
  expect,
  it,
} from "@jest/globals";

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
`,w={name:"PageFilterDate",components:{AlohaPage:x,ATranslation:F,PageFilterArguments:P,PageFilterDateExample:J,PageFilterDateFormat:R,PageFilterImportCompositionApi:M,PageFilterImportFunction:E,PageFilterTest:$},setup(){const{pageTitle:t}=G(),{argumentsText:r}=U();return{argumentsText:r,pageTitle:t,test:j}}};function L(t,r,i,c,l,f){const o=e("a-translation"),u=e("page-filter-import-function"),d=e("page-filter-import-composition-api"),g=e("page-filter-arguments"),D=e("page-filter-date-example"),T=e("page-filter-date-format"),h=e("page-filter-test"),A=e("aloha-page");return p(),m(A,{"page-title":t.pageTitle},{body:Y(()=>[n(o,{tag:"p",html:"_PAGE_FILTER_DATE_DESCRIPTION_"}),n(u,{"function-name":"filterDate","type-import":"filters"}),n(d,{"function-name":"filterDate"}),n(g,{"arguments-text":t.argumentsText,"function-description":'filterDate(value, { [format="date"] })'},null,8,["arguments-text"]),n(D),n(T),n(h,{test:t.test},null,8,["test"])]),_:1},8,["page-title"])}const nt=s(w,[["render",L]]);export{nt as default};
