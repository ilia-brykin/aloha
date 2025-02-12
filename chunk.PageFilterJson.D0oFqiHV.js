import{aw as n,_ as c,A}from"./bundle.index.CbZKgd5H.js";import{O as p,b as t,Q as u,aR as P,V as r}from"./chunk.vendor.CjhiT8UL.js";import"./chunk.vendor-lodash.DyQEPI1B.js";import{A as m,a as E}from"./chunk.AlohaExample.CairEjLR.js";import{P as T,a as v,b as F}from"./chunk.PageFilterTest.UEeFyJzc.js";import{P as N}from"./chunk.PageFilterImportCompositionApi.B4-Wj_n1.js";import"./chunk.translations-ar.DWwaQC1L.js";import"./chunk.translations-de.Bm_NRjKi.js";import"./chunk.translations-en.CfLmKpaQ.js";import"./chunk.translations-es.C_tSILxJ.js";import"./chunk.translations-fr.acyQpqB8.js";import"./chunk.translations-hr.CEzAvuHv.js";import"./chunk.translations-it.CSGg6_Uy.js";import"./chunk.translations-ru.VBYVnDIE.js";import"./chunk.APageTabTitle.CLu0twYi.js";import"./chunk.AlohaHighlightjs.rF1jvLhM.js";function R(){return{codeJs:`filterJson({ x: 5, y: 6 });
// ${n({x:5,y:6})}

filterJson({ x: "aloha", y: 6 });
// ${n({x:"aloha",y:6})}

filterJson(true);
// ${n(!0)}

filterJson("aloha");
// ${n("aloha")}

filterJson([1, "false", false]);
// ${n([1,"false",!1])}

filterJson([NaN, null, Infinity, undefined]);
// ${n([NaN,null,1/0,void 0])}`}}const S={name:"PageFilterJsonExample",components:{AlohaExample:m},setup(){const{codeJs:e}=R();return{codeJs:e}}};function I(e,o,i,l,s,f){const a=t("aloha-example");return u(),p(a,{"code-js":e.codeJs,header:"_A_BASIC_USAGE_","is-code-visible-default":!0},null,8,["code-js"])}const j=c(S,[["render",I]]);function b(){function e(l,s){if(typeof s!="string")return s}const o={foundation:"Mozilla",model:"box",week:45,transport:"car",month:7};return{codeJs:`function replacer(key, value) {
  // Filtering out properties
  if (typeof value === "string") {
    return undefined;
  }
  return value;
}

const aloha = {
  foundation: "Mozilla",
  model: "box",
  week: 45,
  transport: "car",
  month: 7,
};

filterJson(aloha, { replacer });
// ${n(o,{replacer:e})}

filterJson(aloha, { replacer: ["week", "month", "model"] });
// ${n(o,{replacer:["week","month","model"]})}`}}const O={name:"PageFilterJsonReplacer",components:{AlohaExample:m},setup(){const{codeJs:e}=b();return{codeJs:e}}};function w(e,o,i,l,s,f){const a=t("aloha-example");return u(),p(a,{"code-js":e.codeJs,header:"replacer","is-code-visible-default":!0},null,8,["code-js"])}const k=c(O,[["render",w]]);function G(){return{codeJs:`filterJson({ x: 5, y: 6 }, { space: 0 });
// ${n({x:5,y:6},{space:0})}

filterJson({ x: 5, y: 6 }, { space: 1 });
// ${n({x:5,y:6},{space:1})}

filterJson({ x: 5, y: 6 }, { space: "\\t" });
// ${n({x:5,y:6},{space:"	"})}`}}const B={name:"PageFilterJsonSpace",components:{AlohaExample:m},setup(){const{codeJs:e}=G();return{codeJs:e}}};function C(e,o,i,l,s,f){const a=t("aloha-example");return u(),p(a,{"code-js":e.codeJs,header:"space","is-code-visible-default":!0},null,8,["code-js"])}const L=c(B,[["render",C]]);function M(){return{argumentsText:[{value:"value",types:["Any"],text:"_PAGE_FILTER_JSON_ARGUMENTS_VALUE_"},{value:"[replacer]",types:["Function","Array"],text:"_PAGE_FILTER_JSON_ARGUMENTS_REPLACER_"},{value:"[space=2]",types:["Number","String"],text:"_PAGE_FILTER_JSON_ARGUMENTS_SPACE_"}]}}function U(){return{pageTitle:"filterJson"}}const V=`import {
  describe,
  expect,
  it,
} from "@jest/globals";

import filterJson from "../filterJson";

describe("filterJson", () => {
  it("returns empty string when input value is null", () => {
    expect(filterJson(null)).toBe("");
  });

  it("returns empty string when input value is undefined", () => {
    expect(filterJson(undefined)).toBe("");
  });

  it("returns a stringified JSON when input value is a valid JSON", () => {
    const value = { key: "value" };
    const expectedOutput = JSON.stringify(value, null, 2);

    expect(filterJson(value)).toBe(expectedOutput);
  });

  it("returns empty string when an error occurs during stringifying", () => {
    const circularReference = {};
    circularReference.self = circularReference;

    expect(filterJson(circularReference)).toBe("");
  });
});
`,z={name:"PageFilterJson",components:{AlohaPage:E,ATranslation:A,PageFilterArguments:F,PageFilterImportCompositionApi:N,PageFilterImportFunction:v,PageFilterJsonExample:j,PageFilterJsonReplacer:k,PageFilterJsonSpace:L,PageFilterTest:T},setup(){const{pageTitle:e}=U(),{argumentsText:o}=M();return{argumentsText:o,pageTitle:e,test:V}}};function D(e,o,i,l,s,f){const a=t("a-translation"),_=t("page-filter-import-function"),d=t("page-filter-import-composition-api"),g=t("page-filter-arguments"),J=t("page-filter-json-example"),x=t("page-filter-json-space"),h=t("page-filter-json-replacer"),$=t("page-filter-test"),y=t("aloha-page");return u(),p(y,{"page-title":e.pageTitle},{body:P(()=>[r(a,{tag:"p",html:"_PAGE_FILTER_JSON_DESCRIPTION_"}),r(_,{"function-name":"filterJson","type-import":"filters"}),r(d,{"function-name":"filterJson"}),r(g,{"arguments-text":e.argumentsText,"function-description":"filterJson(value, { [replacer], [space=2] })"},null,8,["arguments-text"]),r(J),r(x),r(h),r($,{test:e.test},null,8,["test"])]),_:1},8,["page-title"])}const le=c(z,[["render",D]]);export{le as default};
