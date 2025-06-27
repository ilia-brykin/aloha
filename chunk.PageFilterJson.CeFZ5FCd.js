import{A as m,a as S}from"./chunk.AlohaExample.BVPccFCr.js";import{P as O,a as T,b as N}from"./chunk.PageFilterTest.C7zimzcm.js";import{P as j}from"./chunk.PageFilterImportCompositionApi.BkUvg23v.js";import{aI as n,_ as i,A as E}from"./bundle.index.DoG8zCpg.js";import{U as p,e as t,V as u,aS as F,Z as a}from"./chunk.vendor.COYgx38y.js";import"./chunk.vendor-lodash.xyEKcfD7.js";import"./chunk.APageTabTitle.Cf4ot2uq.js";import"./chunk.AlohaHighlightjs.CW1W2LCP.js";import"./chunk.translations-ar.DEWt73y8.js";import"./chunk.translations-de.B16ttyfK.js";import"./chunk.translations-en.CPCEcTAP.js";import"./chunk.translations-es.BKTK5PUv.js";import"./chunk.translations-fr.CslimZmU.js";import"./chunk.translations-hr.CiJ7_Y2m.js";import"./chunk.translations-it.H45F8miC.js";import"./chunk.translations-ru.o-dOzdYz.js";function I(){return{codeJs:`filterJson({ x: 5, y: 6 }, { isHtml: true, class: "aloha" });
// ${n({x:5,y:6},{isHtml:!0})}`}}const H={name:"PageFilterJsonClass",components:{AlohaExample:m},setup(){const{codeJs:e}=I();return{codeJs:e}}};function R(e,s,l,c,r,_){const o=t("aloha-example");return u(),p(o,{"code-js":e.codeJs,header:"jsonClass","is-code-visible-default":!0},null,8,["code-js"])}const k=i(H,[["render",R]]);function w(){return{codeJs:`filterJson({ x: 5, y: 6 });
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
// ${n([NaN,null,1/0,void 0])}`}}const C={name:"PageFilterJsonExample",components:{AlohaExample:m},setup(){const{codeJs:e}=w();return{codeJs:e}}};function G(e,s,l,c,r,_){const o=t("aloha-example");return u(),p(o,{"code-js":e.codeJs,header:"_A_BASIC_USAGE_","is-code-visible-default":!0},null,8,["code-js"])}const L=i(C,[["render",G]]);function b(){return{codeJs:`filterJson({ x: 5, y: 6 }, { isHtml: true });
// ${n({x:5,y:6},{isHtml:!0})}

filterJson({ x: 5, y: 6 }, { isHtml: false });
// ${n({x:5,y:6},{isHtml:!1})}`}}const B={name:"PageFilterJsonIsHtml",components:{AlohaExample:m},setup(){const{codeJs:e}=b();return{codeJs:e}}};function M(e,s,l,c,r,_){const o=t("aloha-example");return u(),p(o,{"code-js":e.codeJs,header:"isHtml","is-code-visible-default":!0},null,8,["code-js"])}const U=i(B,[["render",M]]);function V(){function e(c,r){if(typeof r!="string")return r}const s={foundation:"Mozilla",model:"box",week:45,transport:"car",month:7};return{codeJs:`function replacer(key, value) {
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
// ${n(s,{replacer:e})}

filterJson(aloha, { replacer: ["week", "month", "model"] });
// ${n(s,{replacer:["week","month","model"]})}`}}const z={name:"PageFilterJsonReplacer",components:{AlohaExample:m},setup(){const{codeJs:e}=V();return{codeJs:e}}};function D(e,s,l,c,r,_){const o=t("aloha-example");return u(),p(o,{"code-js":e.codeJs,header:"replacer","is-code-visible-default":!0},null,8,["code-js"])}const Z=i(z,[["render",D]]);function q(){return{codeJs:`filterJson({ x: 5, y: 6 }, { space: 0 });
// ${n({x:5,y:6},{space:0})}

filterJson({ x: 5, y: 6 }, { space: 1 });
// ${n({x:5,y:6},{space:1})}

filterJson({ x: 5, y: 6 }, { space: "\\t" });
// ${n({x:5,y:6},{space:"	"})}`}}const K={name:"PageFilterJsonSpace",components:{AlohaExample:m},setup(){const{codeJs:e}=q();return{codeJs:e}}};function Q(e,s,l,c,r,_){const o=t("aloha-example");return u(),p(o,{"code-js":e.codeJs,header:"space","is-code-visible-default":!0},null,8,["code-js"])}const W=i(K,[["render",Q]]);function X(){return{codeJs:`filterJson({ x: 5, y: 6 }, { isHtml: true, tag: "pre" });
// ${n({x:5,y:6},{isHtml:!0,tag:"pre"})}

filterJson({ x: 5, y: 6 }, { isHtml: true, tag: "div" });
// ${n({x:5,y:6},{isHtml:!0,tag:"div"})}`}}const Y={name:"PageFilterJsonTag",components:{AlohaExample:m},setup(){const{codeJs:e}=X();return{codeJs:e}}};function ee(e,s,l,c,r,_){const o=t("aloha-example");return u(),p(o,{"code-js":e.codeJs,header:"tag","is-code-visible-default":!0},null,8,["code-js"])}const te=i(Y,[["render",ee]]);function ne(){return{argumentsText:[{value:"value",types:["Any"],text:"_PAGE_FILTER_JSON_ARGUMENTS_VALUE_"},{value:"[replacer]",types:["Function","Array"],text:"_PAGE_FILTER_JSON_ARGUMENTS_REPLACER_"},{value:"[space=2]",types:["Number","String"],text:"_PAGE_FILTER_JSON_ARGUMENTS_SPACE_"},{value:"[isHtml=false]",types:["Boolean"],text:"_PAGE_FILTER_JSON_ARGUMENTS_IS_HTML_"},{value:"[jsonClass=a_code_content]",types:["String"],text:"_PAGE_FILTER_JSON_ARGUMENTS_JSON_CLASS_"},{value:"[tag=pre]",types:["String"],text:"_PAGE_FILTER_JSON_ARGUMENTS_TAG_"}]}}function oe(){return{pageTitle:"filterJson"}}const se=`import {
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

  it("returns formatted HTML output when isHtml is true", () => {
    const value = { key: "value" };
    const expectedOutput = \`<pre class="a_code_content">\${ JSON.stringify(value, null, 2) }</pre>\`;

    expect(filterJson(value, { isHtml: true })).toBe(expectedOutput);
  });

  it("returns formatted HTML output with custom class", () => {
    const value = { key: "value" };
    const expectedOutput = \`<pre class="custom_class">\${ JSON.stringify(value, null, 2) }</pre>\`;

    expect(filterJson(value, { isHtml: true, jsonClass: "custom_class" })).toBe(expectedOutput);
  });

  it("returns formatted HTML output with custom tag", () => {
    const value = { key: "value" };
    const expectedOutput = \`<div class="a_code_content">\${ JSON.stringify(value, null, 2) }</div>\`;

    expect(filterJson(value, { isHtml: true, tag: "div" })).toBe(expectedOutput);
  });

  it("returns formatted HTML output with custom tag and class", () => {
    const value = { key: "value" };
    const expectedOutput = \`<span class="custom_class">\${ JSON.stringify(value, null, 2) }</span>\`;

    expect(filterJson(value, { isHtml: true, tag: "span", jsonClass: "custom_class" })).toBe(expectedOutput);
  });

  it("returns correctly formatted JSON when using a replacer function", () => {
    const value = { key1: "value1", key2: "value2" };
    const replacer = (key, val) => (key === "key1" ? undefined : val);
    const expectedOutput = JSON.stringify(value, replacer, 2);

    expect(filterJson(value, { replacer })).toBe(expectedOutput);
  });

  it("returns correctly formatted JSON with a custom space indentation", () => {
    const value = { key: "value" };
    const expectedOutput = JSON.stringify(value, null, 4);

    expect(filterJson(value, { space: 4 })).toBe(expectedOutput);
  });
});
`,ae={name:"PageFilterJson",components:{AlohaPage:S,ATranslation:E,PageFilterArguments:N,PageFilterImportCompositionApi:j,PageFilterImportFunction:T,PageFilterJsonClass:k,PageFilterJsonExample:L,PageFilterJsonIsHtml:U,PageFilterJsonReplacer:Z,PageFilterJsonSpace:W,PageFilterJsonTag:te,PageFilterTest:O},setup(){const{pageTitle:e}=oe(),{argumentsText:s}=ne();return{argumentsText:s,pageTitle:e,test:se}}};function re(e,s,l,c,r,_){const o=t("a-translation"),f=t("page-filter-import-function"),d=t("page-filter-import-composition-api"),J=t("page-filter-arguments"),g=t("page-filter-json-example"),x=t("page-filter-json-space"),$=t("page-filter-json-replacer"),y=t("page-filter-json-is-html"),v=t("page-filter-json-class"),h=t("page-filter-json-tag"),P=t("page-filter-test"),A=t("aloha-page");return u(),p(A,{"page-title":e.pageTitle},{body:F(()=>[a(o,{tag:"p",html:"_PAGE_FILTER_JSON_DESCRIPTION_"}),a(f,{"function-name":"filterJson","type-import":"filters"}),a(d,{"function-name":"filterJson"}),a(J,{"arguments-text":e.argumentsText,"function-description":'filterJson(value, { [replacer], [space=2], [isHtml=false], [jsonClass="a_code_content"], [tag="pre"] })'},null,8,["arguments-text"]),a(g),a(x),a($),a(y),a(v),a(h),a(P,{test:e.test},null,8,["test"])]),_:1},8,["page-title"])}const Pe=i(ae,[["render",re]]);export{Pe as default};
