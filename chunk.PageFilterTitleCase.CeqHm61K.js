import{t as e}from"./chunk.AlohaPage.CNwNARGV.js";import{n as t,r as n,t as r}from"./chunk.PageFilterTest.BtENWl1q.js";import{t as i}from"./chunk.PageFilterImportCompositionApi.BTnH2nYd.js";import{t as a}from"./chunk.AlohaExample.NZuewB4M.js";import{Jt as o,Ut as s,Vt as c,mn as l,on as u,un as d}from"./chunk.vendor.Bjd2408Z.js";import{Tt as f,mn as p,t as m}from"./bundle.index.DHnbMku0.js";function h(){return{codeJs:c(()=>`filterTitleCase("max mustermann");
// ${f(`max mustermann`)}

filterTitleCase("jean-luc picard");
// ${f(`jean-luc picard`)}

filterTitleCase("the NASA report");
// ${f(`the NASA report`)}`)}}var g={name:`PageFilterTitleCaseExample`,components:{AlohaExample:a},setup(){let{codeJs:e}=h();return{codeJs:e}}};function _(e,t,n,r,i,a){let o=d(`aloha-example`);return u(),s(o,{"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,"is-code-visible-default":!0},null,8,[`code-js`])}var v=m(g,[[`render`,_]]);function y(){return{argumentsText:[{value:`value`,types:[`String`],text:`_PAGE_FILTER_TITLE_CASE_ARGUMENTS_VALUE_`}]}}function b(){return{pageTitle:`filterTitleCase`}}var x=`import {
  describe,
  expect,
  it,
} from "vitest";

import filterTitleCase from "../filterTitleCase.js";

describe("filterTitleCase", () => {
  it("default", () => {
    expect(filterTitleCase("max mustermann")).toBe("Max Mustermann");
    expect(filterTitleCase("jean-luc picard")).toBe("Jean-Luc Picard");
    expect(filterTitleCase("über  äpfel")).toBe("Über  Äpfel");
    expect(filterTitleCase("иван петров")).toBe("Иван Петров");
  });

  it("keeps the other letters as they are", () => {
    expect(filterTitleCase("the NASA report")).toBe("The NASA Report");
    expect(filterTitleCase("mcDonald")).toBe("McDonald");
  });

  it("does not change numbers", () => {
    expect(filterTitleCase("3 kleine schweinchen")).toBe("3 Kleine Schweinchen");
  });

  it("empty values", () => {
    expect(filterTitleCase(undefined)).toBe("");
    expect(filterTitleCase(null)).toBe("");
    expect(filterTitleCase("")).toBe("");
  });
});
`,S={name:`PageFilterTitleCase`,components:{AlohaPage:e,ATranslation:p,PageFilterArguments:n,PageFilterImportCompositionApi:i,PageFilterImportFunction:t,PageFilterTest:r,PageFilterTitleCaseExample:v},setup(){let{pageTitle:e}=b(),{argumentsText:t}=y();return{argumentsText:t,pageTitle:e,test:x}}};function C(e,t,n,r,i,a){let c=d(`a-translation`),f=d(`page-filter-import-function`),p=d(`page-filter-import-composition-api`),m=d(`page-filter-arguments`),h=d(`page-filter-title-case-example`),g=d(`page-filter-test`),_=d(`aloha-page`);return u(),s(_,{"page-title":e.pageTitle},{body:l(()=>[o(c,{tag:`p`,html:`_PAGE_FILTER_TITLE_CASE_DESCRIPTION_`}),o(f,{"function-name":`filterTitleCase`,"type-import":`filters`}),o(p,{"function-name":`filterTitleCase`}),o(m,{"arguments-text":e.argumentsText,"function-description":`filterTitleCase(value)`},null,8,[`arguments-text`]),o(h),o(g,{test:e.test},null,8,[`test`])]),_:1},8,[`page-title`])}var w=m(S,[[`render`,C]]);export{w as default};