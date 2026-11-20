import{t as e}from"./chunk.AlohaPage.01_65sYq.js";import{n as t,r as n,t as r}from"./chunk.PageFilterTest.BhAWcOR4.js";import{t as i}from"./chunk.PageFilterImportCompositionApi.BcQjZ8CR.js";import{t as a}from"./chunk.AlohaExample.DMDNc2GO.js";import{It as o,Pt as s,Qt as c,Vt as l,nn as u,on as d}from"./chunk.vendor.CTxSDDRk.js";import{_t as f,it as p}from"./bundle.index.DciiaRRT.js";import{t as m}from"./chunk._plugin-vue_export-helper.BDNMzG2s.js";function h(){return{codeJs:s(()=>`filterTitleCase("max mustermann");
// ${f(`max mustermann`)}

filterTitleCase("jean-luc picard");
// ${f(`jean-luc picard`)}

filterTitleCase("the NASA report");
// ${f(`the NASA report`)}`)}}var g={name:`PageFilterTitleCaseExample`,components:{AlohaExample:a},setup(){let{codeJs:e}=h();return{codeJs:e}}};function _(e,t,n,r,i,a){let s=u(`aloha-example`);return c(),o(s,{"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,"is-code-visible-default":!0},null,8,[`code-js`])}var v=m(g,[[`render`,_]]);function y(){return{argumentsText:[{value:`value`,types:[`String`],text:`_PAGE_FILTER_TITLE_CASE_ARGUMENTS_VALUE_`}]}}function b(){return{pageTitle:`filterTitleCase`}}var x=`import {
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
`,S={name:`PageFilterTitleCase`,components:{AlohaPage:e,ATranslation:p,PageFilterArguments:n,PageFilterImportCompositionApi:i,PageFilterImportFunction:t,PageFilterTest:r,PageFilterTitleCaseExample:v},setup(){let{pageTitle:e}=b(),{argumentsText:t}=y();return{argumentsText:t,pageTitle:e,test:x}}};function C(e,t,n,r,i,a){let s=u(`a-translation`),f=u(`page-filter-import-function`),p=u(`page-filter-import-composition-api`),m=u(`page-filter-arguments`),h=u(`page-filter-title-case-example`),g=u(`page-filter-test`),_=u(`aloha-page`);return c(),o(_,{"page-title":e.pageTitle},{body:d(()=>[l(s,{tag:`p`,html:`_PAGE_FILTER_TITLE_CASE_DESCRIPTION_`}),l(f,{"function-name":`filterTitleCase`,"type-import":`filters`}),l(p,{"function-name":`filterTitleCase`}),l(m,{"arguments-text":e.argumentsText,"function-description":`filterTitleCase(value)`},null,8,[`arguments-text`]),l(h),l(g,{test:e.test},null,8,[`test`])]),_:1},8,[`page-title`])}var w=m(S,[[`render`,C]]);export{w as default};