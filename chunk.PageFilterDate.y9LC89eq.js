import{A as _,a as $}from"./chunk.AlohaExample.yE023I1X.js";import{ay as a,_ as s,A as x}from"./bundle.index.C9lpaoUP.js";import{P as E,a as P,b as F}from"./chunk.PageFilterTest.HHPB_jIn.js";import{k as e,J as m,H as p,aO as Y,O as n}from"./chunk.vendor.QyCKSPD8.js";import"./chunk.vendor-lodash.GuFqEw-8.js";import{P as M}from"./chunk.PageFilterImportCompositionApi.DVluyLc8.js";import"./chunk.APageTabTitle.BP4gNxYd.js";import"./chunk.translations-ar.D84EYJUC.js";import"./chunk.translations-de.B3_DNkZv.js";import"./chunk.translations-en.DZoFKckB.js";import"./chunk.translations-es.92fkcSMr.js";import"./chunk.translations-fr.DBliKyyP.js";import"./chunk.translations-hr.KiqIBbb_.js";import"./chunk.translations-it.BBYgaTTr.js";import"./chunk.translations-ru.CgZqQiYL.js";function I(){return{codeJs:`filterDate("2014-09-08T08:02:17-05:00");
// ${a("2014-09-08T08:02:17-05:00")}

filterDate("2013-02-08");
// ${a("2013-02-08")}

filterDate("6 Mar 17 21:22 UT");
// ${a("6 Mar 17 21:22 UT")}`}}const C={name:"PageFilterDateExample",components:{AlohaExample:_},setup(){const{codeJs:t}=I();return{codeJs:t}}};function J(t,r,i,c,l,f){const o=e("aloha-example");return p(),m(o,{"code-js":t.codeJs,header:"_A_BASIC_USAGE_","is-code-visible-default":!0},null,8,["code-js"])}const v=s(C,[["render",J]]);function y(){return{codeJs:`filterDate("2014-09-08T08:02:17-05:00" { format: "datetime" });
// ${a("2014-09-08T08:02:17-05:00",{format:"datetime"})}

filterDate("2014-09-08T08:02:17-05:00", { format: "fullDate" });
// ${a("2014-09-08T08:02:17-05:00",{format:"fullDate"})}

filterDate("2014-09-08T08:02:17-05:00", { format: "time" });
// ${a("2014-09-08T08:02:17-05:00",{format:"time"})}

filterDate("2014-09-08T08:02:17-05:00", { format: "timeWithSeconds" });
// ${a("2014-09-08T08:02:17-05:00",{format:"timeWithSeconds"})}

filterDate("2014-09-08T08:02:17-05:00", { format: "MM.YYYY" });
// ${a("2014-09-08T08:02:17-05:00",{format:"MM.YYYY"})}`}}const S={name:"PageFilterDateFormat",components:{AlohaExample:_},setup(){const{codeJs:t}=y();return{codeJs:t}}};function R(t,r,i,c,l,f){const o=e("aloha-example");return p(),m(o,{"code-js":t.codeJs,header:"format","is-code-visible-default":!0},null,8,["code-js"])}const b=s(S,[["render",R]]);function G(){return{argumentsText:[{value:"value",types:["Any"],text:"_PAGE_FILTER_DATE_ARGUMENTS_VALUE_"},{value:'[format="date"]',types:["String"],text:"_PAGE_FILTER_DATE_ARGUMENTS_FORMAT_"}]}}function U(){return{pageTitle:"filterDate"}}const j=`import filterDate from "../filterDate";
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
      }
    ];
    testCases.forEach(tc => {
      expect(filterDate(tc.input, { format: tc.format })).toEqual(tc.expected);
    });
  });
});
`,w={name:"PageFilterDate",components:{AlohaPage:$,ATranslation:x,PageFilterArguments:E,PageFilterDateExample:v,PageFilterDateFormat:b,PageFilterImportCompositionApi:M,PageFilterImportFunction:P,PageFilterTest:F},setup(){const{pageTitle:t}=U(),{argumentsText:r}=G();return{argumentsText:r,pageTitle:t,test:j}}};function L(t,r,i,c,l,f){const o=e("a-translation"),u=e("page-filter-import-function"),d=e("page-filter-import-composition-api"),g=e("page-filter-arguments"),D=e("page-filter-date-example"),T=e("page-filter-date-format"),h=e("page-filter-test"),A=e("aloha-page");return p(),m(A,{"page-title":t.pageTitle},{body:Y(()=>[n(o,{tag:"p",html:"_PAGE_FILTER_DATE_DESCRIPTION_"}),n(u,{"function-name":"filterDate","type-import":"filters"}),n(d,{"function-name":"filterDate"}),n(g,{"arguments-text":t.argumentsText,"function-description":'filterDate(value, { [format="date"] })'},null,8,["arguments-text"]),n(D),n(T),n(h,{test:t.test},null,8,["test"])]),_:1},8,["page-title"])}const at=s(w,[["render",L]]);export{at as default};
