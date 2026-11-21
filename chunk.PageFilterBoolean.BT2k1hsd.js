import{t as e}from"./chunk.AlohaPage.DkILLbn5.js";import{n as t,r as n,t as r}from"./chunk.PageFilterTest.ZGahdob1.js";import{t as i}from"./chunk.AlohaExample.BXW-VBsT.js";import{$t as a,It as o,Pt as s,Vt as c,rn as l,sn as u}from"./chunk.vendor.BvryzG0o.js";import{Lt as d,qt as f}from"./bundle.index.b2KYNVgN.js";import{t as p}from"./chunk._plugin-vue_export-helper.BDNMzG2s.js";import{t as m}from"./chunk.PageFilterImportCompositionApi.CRE9j6zA.js";function h(){return{codeJs:s(()=>`filterBoolean(true);
// ${d(!0)}
filterBoolean(false);
// ${d(!1)}

filterBoolean(1);
// ${d(1)}
filterBoolean(0);
// ${d(0)}

filterBoolean("aloha");
// ${d(`aloha`)}
filterBoolean("");
// ${d(``)}`)}}var g={name:`PageFilterBooleanExample`,components:{AlohaExample:i},setup(){let{codeJs:e}=h();return{codeJs:e}}};function _(e,t,n,r,i,s){let c=l(`aloha-example`);return a(),o(c,{"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,"is-code-visible-default":!0},null,8,[`code-js`])}var v=p(g,[[`render`,_]]);function y(){return{codeJs:s(()=>`filterBoolean(true, { trueValue: "1", falseValue: "0" });
// ${d(!0,{trueValue:`1`,falseValue:`0`})}
filterBoolean(false, { trueValue: "1", falseValue: "0" });
// ${d(!1,{trueValue:`1`,falseValue:`0`})}

filterBoolean(1, { trueValue: "true", falseValue: "false" });
// ${d(1,{trueValue:`true`,falseValue:`false`})}
filterBoolean(0, { trueValue: "true", falseValue: "false" });
// ${d(0,{trueValue:`true`,falseValue:`false`})}`)}}var b={name:`PageFilterBooleanTrueFalseValues`,components:{AlohaExample:i},setup(){let{codeJs:e}=y();return{codeJs:e}}};function x(e,t,n,r,i,s){let c=l(`aloha-example`);return a(),o(c,{"code-js":e.codeJs,header:`trueValue, falseValue`,"is-code-visible-default":!0},null,8,[`code-js`])}var S=p(b,[[`render`,x]]);function C(){return{codeJs:s(()=>`filterBoolean(null, { useNil: true });
// ${d(null,{useNil:!0})}
filterBoolean(null, { useNil: false });
// ${d(null,{useNil:!1})}

filterBoolean(undefined, { useNil: true });
// ${d(void 0,{useNil:!0})}
filterBoolean(undefined, { useNil: false });
// ${d(void 0,{useNil:!1})}

filterBoolean("null", { useNil: true });
// ${d(`null`,{useNil:!0})}
filterBoolean("null", { useNil: false });
// ${d(`null`,{useNil:!1})}

filterBoolean("undefined", { useNil: true });
// ${d(`undefined`,{useNil:!0})}
filterBoolean("undefined", { useNil: false });
// ${d(`undefined`,{useNil:!1})}`)}}var w={name:`PageFilterBooleanUseNil`,components:{AlohaExample:i},setup(){let{codeJs:e}=C();return{codeJs:e}}};function T(e,t,n,r,i,s){let c=l(`aloha-example`);return a(),o(c,{"code-js":e.codeJs,header:`useNil`,"is-code-visible-default":!0},null,8,[`code-js`])}var E=p(w,[[`render`,T]]);function D(){return{argumentsText:[{value:`value`,types:[`Any`],text:`_PAGE_FILTER_BOOLEAN_ARGUMENTS_VALUE_`},{value:`[trueValue="_YES_"]`,types:[`String`],text:`_PAGE_FILTER_BOOLEAN_ARGUMENTS_TRUE_VALUE_`},{value:`[falseValue="_NO_"]`,types:[`String`],text:`_PAGE_FILTER_BOOLEAN_ARGUMENTS_FALSE_VALUE_`},{value:`[useNil=true]`,types:[`Boolean`],text:`_PAGE_FILTER_BOOLEAN_ARGUMENTS_USE_NIL_`}]}}function O(){return{pageTitle:`filterBoolean`}}var k=`import {
  describe,
  expect,
  it,
} from "vitest";

import filterBoolean from "../filterBoolean";

describe("filterBoolean", () => {
  it("value=true", () => {
    expect(filterBoolean(true)).toBe("_YES_");
    expect(filterBoolean(123)).toBe("_YES_");
    expect(filterBoolean("1")).toBe("_YES_");
    expect(filterBoolean(true, { trueValue: "yes" })).toBe("yes");
  });

  it("value=false", () => {
    expect(filterBoolean(false)).toBe("_NO_");
    expect(filterBoolean(0)).toBe("_NO_");
    expect(filterBoolean("")).toBe("_NO_");
    expect(filterBoolean(false, { falseValue: "no" })).toBe("no");
  });

  it("useNil=true", () => {
    expect(filterBoolean(undefined, { useNil: true })).toBe("");
    expect(filterBoolean(null, { useNil: true })).toBe("");
    expect(filterBoolean(false, { useNil: true })).toBe("_NO_");
    expect(filterBoolean(true, { useNil: true })).toBe("_YES_");
  });

  it("useNil=false", () => {
    expect(filterBoolean(undefined, { useNil: false })).toBe("_NO_");
    expect(filterBoolean(null, { useNil: false })).toBe("_NO_");
    expect(filterBoolean(false, { useNil: false })).toBe("_NO_");
    expect(filterBoolean(true, { useNil: false })).toBe("_YES_");
  });
});

`,A={name:`PageFilterBoolean`,components:{AlohaPage:e,ATranslation:f,PageFilterArguments:n,PageFilterBooleanExample:v,PageFilterBooleanTrueFalseValues:S,PageFilterBooleanUseNil:E,PageFilterImportCompositionApi:m,PageFilterImportFunction:t,PageFilterTest:r},setup(){let{pageTitle:e}=O(),{argumentsText:t}=D();return{argumentsText:t,pageTitle:e,test:k}}};function j(e,t,n,r,i,s){let d=l(`a-translation`),f=l(`page-filter-import-function`),p=l(`page-filter-import-composition-api`),m=l(`page-filter-arguments`),h=l(`page-filter-boolean-example`),g=l(`page-filter-boolean-true-false-values`),_=l(`page-filter-boolean-use-nil`),v=l(`page-filter-test`),y=l(`aloha-page`);return a(),o(y,{"page-title":e.pageTitle},{body:u(()=>[c(d,{tag:`p`,html:`_PAGE_FILTER_BOOLEAN_DESCRIPTION_`}),c(f,{"function-name":`filterBoolean`,"type-import":`filters`}),c(p,{"function-name":`filterBoolean`}),c(m,{"function-description":`filterBoolean(value, { [trueValue="_YES_"], [falseValue="_NO_"], [useNil=true] })`,"arguments-text":e.argumentsText},null,8,[`arguments-text`]),c(h),c(g),c(_),c(v,{test:e.test},null,8,[`test`])]),_:1},8,[`page-title`])}var M=p(A,[[`render`,j]]);export{M as default};