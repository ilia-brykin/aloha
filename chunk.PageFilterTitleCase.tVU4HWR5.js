import{t as e}from"./chunk.AlohaPage.IS3NRfGI.js";import{n as t,r as n,t as r}from"./chunk.PageFilterTest.BiQNU7rf.js";import{t as i}from"./chunk.PageFilterImportCompositionApi.r8Qpa9Lw.js";import{t as a}from"./chunk.AlohaExample.CDuUdjpI.js";import{Bt as o,Ht as s,an as c,ln as l,pn as u,qt as d}from"./chunk.vendor.SEynj6EJ.js";import{Tt as f,mn as p,t as m}from"./bundle.index.DikcaTJ9.js";function h(){return{codeJs:o(()=>`filterTitleCase("max mustermann");
// ${f(`max mustermann`)}

filterTitleCase("jean-luc picard");
// ${f(`jean-luc picard`)}

filterTitleCase("the NASA report");
// ${f(`the NASA report`)}`)}}var g={name:`PageFilterTitleCaseExample`,components:{AlohaExample:a},setup(){let{codeJs:e}=h();return{codeJs:e}}};function _(e,t,n,r,i,a){let o=l(`aloha-example`);return c(),s(o,{"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,"is-code-visible-default":!0},null,8,[`code-js`])}var v=m(g,[[`render`,_]]);function y(){return{argumentsText:[{value:`value`,types:[`String`],text:`_PAGE_FILTER_TITLE_CASE_ARGUMENTS_VALUE_`}]}}function b(){return{pageTitle:`filterTitleCase`}}var x=`import {
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
`,S={name:`PageFilterTitleCase`,components:{AlohaPage:e,ATranslation:p,PageFilterArguments:n,PageFilterImportCompositionApi:i,PageFilterImportFunction:t,PageFilterTest:r,PageFilterTitleCaseExample:v},setup(){let{pageTitle:e}=b(),{argumentsText:t}=y();return{argumentsText:t,pageTitle:e,test:x}}};function C(e,t,n,r,i,a){let o=l(`a-translation`),f=l(`page-filter-import-function`),p=l(`page-filter-import-composition-api`),m=l(`page-filter-arguments`),h=l(`page-filter-title-case-example`),g=l(`page-filter-test`),_=l(`aloha-page`);return c(),s(_,{"page-title":e.pageTitle},{body:u(()=>[d(o,{tag:`p`,html:`_PAGE_FILTER_TITLE_CASE_DESCRIPTION_`}),d(f,{"function-name":`filterTitleCase`,"type-import":`filters`}),d(p,{"function-name":`filterTitleCase`}),d(m,{"arguments-text":e.argumentsText,"function-description":`filterTitleCase(value)`},null,8,[`arguments-text`]),d(h),d(g,{test:e.test},null,8,[`test`])]),_:1},8,[`page-title`])}var w=m(S,[[`render`,C]]);export{w as default};