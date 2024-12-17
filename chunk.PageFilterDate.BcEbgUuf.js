import{A as _,a as $}from"./chunk.AlohaExample.LgY88rgr.js";import{aT as a,_ as i,A as x}from"./bundle.index.8Q71sPSv.js";import{P as E,a as P,b as F}from"./chunk.PageFilterTest.B8IWf2-9.js";import{m as e,K as c,J as l,aK as Y,P as n}from"./chunk.vendor.64oIaR0X.js";import{P as M}from"./chunk.PageFilterImportCompositionApi.DniSnJSa.js";import"./chunk.vendor-lodash.LcYqUmOZ.js";import"./chunk.vendor-tinymce.BwLm5pZR.js";function I(){return{codeJs:`filterDate("2014-09-08T08:02:17-05:00");
// ${a("2014-09-08T08:02:17-05:00")}

filterDate("2013-02-08");
// ${a("2013-02-08")}

filterDate("6 Mar 17 21:22 UT");
// ${a("6 Mar 17 21:22 UT")}`}}const C={name:"PageFilterDateExample",components:{AlohaExample:_},setup(){const{codeJs:t}=I();return{codeJs:t}}};function J(t,r,s,m,p,f){const o=e("aloha-example");return l(),c(o,{"code-js":t.codeJs,header:"_A_BASIC_USAGE_","is-code-visible-default":!0},null,8,["code-js"])}const v=i(C,[["render",J]]);function S(){return{codeJs:`filterDate("2014-09-08T08:02:17-05:00" { format: "datetime" });
// ${a("2014-09-08T08:02:17-05:00",{format:"datetime"})}

filterDate("2014-09-08T08:02:17-05:00", { format: "fullDate" });
// ${a("2014-09-08T08:02:17-05:00",{format:"fullDate"})}

filterDate("2014-09-08T08:02:17-05:00", { format: "time" });
// ${a("2014-09-08T08:02:17-05:00",{format:"time"})}

filterDate("2014-09-08T08:02:17-05:00", { format: "timeWithSeconds" });
// ${a("2014-09-08T08:02:17-05:00",{format:"timeWithSeconds"})}

filterDate("2014-09-08T08:02:17-05:00", { format: "MM.YYYY" });
// ${a("2014-09-08T08:02:17-05:00",{format:"MM.YYYY"})}`}}const y={name:"PageFilterDateFormat",components:{AlohaExample:_},setup(){const{codeJs:t}=S();return{codeJs:t}}};function R(t,r,s,m,p,f){const o=e("aloha-example");return l(),c(o,{"code-js":t.codeJs,header:"format","is-code-visible-default":!0},null,8,["code-js"])}const b=i(y,[["render",R]]);function G(){return{argumentsText:[{value:"value",types:["Any"],text:"_PAGE_FILTER_DATE_ARGUMENTS_VALUE_"},{value:'[format="date"]',types:["String"],text:"_PAGE_FILTER_DATE_ARGUMENTS_FORMAT_"}]}}function U(){return{pageTitle:"filterDate"}}const j=`import filterDate from "../filterDate";
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
`,w={name:"PageFilterDate",components:{AlohaPage:$,ATranslation:x,PageFilterArguments:E,PageFilterDateExample:v,PageFilterDateFormat:b,PageFilterImportCompositionApi:M,PageFilterImportFunction:P,PageFilterTest:F},setup(){const{pageTitle:t}=U(),{argumentsText:r}=G();return{argumentsText:r,pageTitle:t,test:j}}};function L(t,r,s,m,p,f){const o=e("a-translation"),u=e("page-filter-import-function"),d=e("page-filter-import-composition-api"),g=e("page-filter-arguments"),T=e("page-filter-date-example"),D=e("page-filter-date-format"),h=e("page-filter-test"),A=e("aloha-page");return l(),c(A,{"page-title":t.pageTitle},{body:Y(()=>[n(o,{tag:"p",html:"_PAGE_FILTER_DATE_DESCRIPTION_"}),n(u,{"function-name":"filterDate","type-import":"filters"}),n(d,{"function-name":"filterDate"}),n(g,{"arguments-text":t.argumentsText,"function-description":'filterDate(value, { [format="date"] })'},null,8,["arguments-text"]),n(T),n(D),n(h,{test:t.test},null,8,["test"])]),_:1},8,["page-title"])}const W=i(w,[["render",L]]);export{W as default};
