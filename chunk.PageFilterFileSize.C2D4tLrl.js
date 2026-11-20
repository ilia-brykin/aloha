import{t as e}from"./chunk.AlohaPage.BP2MUQSS.js";import{t}from"./chunk.AlohaTableTranslate.DSzFfBUA.js";import{n,r,t as i}from"./chunk.PageFilterTest.OuAC5iI8.js";import{t as a}from"./chunk.AlohaExample.BVhM0naJ.js";import{It as o,Pt as s,Qt as c,Vt as l,nn as u,on as d}from"./chunk.vendor.CTxSDDRk.js";import{At as f,it as p}from"./bundle.index.DbAjsKDm.js";import{t as m}from"./chunk._plugin-vue_export-helper.BDNMzG2s.js";import{t as h}from"./chunk.PageFilterImportCompositionApi.Bahw5NUv.js";function g(){return{codeJs:s(()=>`filterFileSize(1024, { digits: 0 });
// ${f(1024,{digits:0})}

filterFileSize(10241, { digits: 2 });
// ${f(10241,{digits:2})}`)}}var _={name:`PageFilterFileSizeDigits`,components:{AlohaExample:a},setup(){let{codeJs:e}=g();return{codeJs:e}}};function v(e,t,n,r,i,a){let s=u(`aloha-example`);return c(),o(s,{"code-js":e.codeJs,header:`digits`,"is-code-visible-default":!0},null,8,[`code-js`])}var y=m(_,[[`render`,v]]);function b(){return{codeJs:s(()=>`filterFileSize(2000);
// ${f(2e3)}

filterFileSize(1024);
// ${f(1024)}`)}}var x={name:`PageFilterFileSizeExample`,components:{AlohaExample:a},setup(){let{codeJs:e}=b();return{codeJs:e}}};function S(e,t,n,r,i,a){let s=u(`aloha-example`);return c(),o(s,{"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,"is-code-visible-default":!0},null,8,[`code-js`])}var C=m(x,[[`render`,S]]);function w(){return{codeJs:s(()=>`filterFileSize(1024, { sourceUnits: "b" });
// ${f(1024,{sourceUnits:`b`})}

filterFileSize(2, { sourceUnits: "kb" });
// ${f(2,{sourceUnits:`kb`})}

filterFileSize(1, { sourceUnits: "mb" });
// ${f(1,{sourceUnits:`mb`})}

filterFileSize(0.1, { sourceUnits: "gb" });
// ${f(.1,{sourceUnits:`gb`})}

filterFileSize(0.0001, { sourceUnits: "tb" });
// ${f(1e-4,{sourceUnits:`tb`})}`)}}var T={name:`PageFilterFileSizeSourceUnits`,components:{AlohaExample:a},setup(){let{codeJs:e}=w();return{codeJs:e}}};function E(e,t,n,r,i,a){let s=u(`aloha-example`);return c(),o(s,{"code-js":e.codeJs,header:`sourceUnits`,"is-code-visible-default":!0},null,8,[`code-js`])}var D=m(T,[[`render`,E]]);function O(){return{codeJs:s(()=>`filterFileSize(1024, { units: "b" });
// ${f(1024,{units:`b`})}

filterFileSize(1024, { units: "kb" });
// ${f(1024,{units:`kb`})}

filterFileSize(1048576, { units: "mb" });
// ${f(1048576,{units:`mb`})}

filterFileSize(1073741824, { units: "gb" });
// ${f(1073741824,{units:`gb`})}

filterFileSize(1073741824 * 1024, { units: "tb" });
// ${f(1099511627776,{units:`tb`})}`)}}var k={name:`PageFilterFileSizeUnits`,components:{AlohaExample:a},setup(){let{codeJs:e}=O();return{codeJs:e}}};function A(e,t,n,r,i,a){let s=u(`aloha-example`);return c(),o(s,{"code-js":e.codeJs,header:`units`,"is-code-visible-default":!0},null,8,[`code-js`])}var j=m(k,[[`render`,A]]);function M(){return{codeJs:s(()=>`filterFileSize(1024, { units: "" });
// ${f(1024,{units:``})}

filterFileSize(1048576, { units: "" });
// ${f(1048576,{units:``})}

filterFileSize(1073741824, { units: "" });
// ${f(1073741824,{units:``})}

filterFileSize(1073741824 * 1024, { units: "" });
// ${f(1099511627776,{units:``})}`)}}var N={name:`PageFilterFileSizeUnitsEmpty`,components:{AlohaExample:a},setup(){let{codeJs:e}=M();return{codeJs:e}}};function P(e,t,n,r,i,a){let s=u(`aloha-example`);return c(),o(s,{"code-js":e.codeJs,header:`units=""`,"is-code-visible-default":!0},null,8,[`code-js`])}var F=m(N,[[`render`,P]]);function I(){return{argumentsText:[{value:`value`,types:[`Number`],text:`_PAGE_FILTER_FILE_SIZE_ARGUMENTS_VALUE_`},{value:`[units="kb"]`,types:[`String`],text:`_PAGE_FILTER_FILE_SIZE_ARGUMENTS_UNITS_`},{value:`[sourceUnits="b"]`,types:[`String`],text:`_PAGE_FILTER_FILE_SIZE_ARGUMENTS_SOURCE_UNITS_`},{value:`[digits=2]`,types:[`Number`],text:`_PAGE_FILTER_FILE_SIZE_ARGUMENTS_DIGITS_`}]}}function L(){return{pageTitle:`filterFileSize`}}function R(){return{dataTranslate:[`_A_FILE_SIZE_B_`,`_A_FILE_SIZE_KB_`,`_A_FILE_SIZE_MB_`,`_A_FILE_SIZE_GB_`,`_A_FILE_SIZE_TB_`,`_A_FILE_SIZE_PB_`,`_A_FILE_SIZE_EB_`,`_A_FILE_SIZE_ZB_`,`_A_FILE_SIZE_YB_`]}}var z=`import {
  describe,
  expect,
  it,
} from "vitest";

import filterFileSize from "../filterFileSize.js";

describe("filterFileSize", () => {
  it("default", () => {
    expect(filterFileSize(1024)).toBe("1,00 _A_FILE_SIZE_KB_");
    expect(filterFileSize(0)).toBe("0,00 _A_FILE_SIZE_KB_");
    expect(filterFileSize(500)).toBe("0,49 _A_FILE_SIZE_KB_");
    expect(filterFileSize(504547643)).toBe("492.722,31 _A_FILE_SIZE_KB_");
  });

  it("units", () => {
    expect(filterFileSize(1048576, { units: "mb" })).toBe("1,00 _A_FILE_SIZE_MB_");
    expect(filterFileSize(0, { units: "mb" })).toBe("0,00 _A_FILE_SIZE_MB_");
    expect(filterFileSize(9226889999, { units: "gb" })).toBe("8,59 _A_FILE_SIZE_GB_");
    expect(filterFileSize(1024, { units: "" })).toBe("1,00 _A_FILE_SIZE_KB_");
    expect(filterFileSize(0, { units: "" })).toBe("0,00 _A_FILE_SIZE_B_");
  });

  it("sourceUnits", () => {
    expect(filterFileSize(1, { units: "mb", sourceUnits: "mb" })).toBe("1,00 _A_FILE_SIZE_MB_");
    expect(filterFileSize(1, { units: "kb", sourceUnits: "gb" })).toBe("1.048.576,00 _A_FILE_SIZE_KB_");
    expect(filterFileSize(0, { sourceUnits: "mb" })).toBe("0,00 _A_FILE_SIZE_KB_");
    expect(filterFileSize(1024, { sourceUnits: "b" })).toBe("1,00 _A_FILE_SIZE_KB_");
    expect(filterFileSize(12, { units: "tb", sourceUnits: "pb" })).toBe("12.288,00 _A_FILE_SIZE_TB_");
  });

  it("digits", () => {
    expect(filterFileSize(1024, { digits: 0 })).toBe("1 _A_FILE_SIZE_KB_");
    expect(filterFileSize(500, { digits: 1 })).toBe("0,5 _A_FILE_SIZE_KB_");
  });

  it("combined", () => {
    expect(filterFileSize(133889, { units: "tb", sourceUnits: "mb", digits: 3 })).toBe("0,128 _A_FILE_SIZE_TB_");
  });

  it("value (String)", () => {
    expect(filterFileSize("1024.1")).toBe("1,00 _A_FILE_SIZE_KB_");
  });
});
`,B={name:`PageFilterFileSize`,components:{AlohaPage:e,AlohaTableTranslate:t,ATranslation:p,PageFilterArguments:r,PageFilterFileSizeDigits:y,PageFilterFileSizeExample:C,PageFilterFileSizeSourceUnits:D,PageFilterFileSizeUnits:j,PageFilterFileSizeUnitsEmpty:F,PageFilterImportCompositionApi:h,PageFilterImportFunction:n,PageFilterTest:i},setup(){let{pageTitle:e}=L(),{dataTranslate:t}=R(),{argumentsText:n}=I();return{argumentsText:n,dataTranslate:t,pageTitle:e,test:z}}};function V(e,t,n,r,i,a){let s=u(`a-translation`),f=u(`page-filter-import-function`),p=u(`page-filter-import-composition-api`),m=u(`page-filter-arguments`),h=u(`page-filter-file-size-example`),g=u(`page-filter-file-size-units`),_=u(`page-filter-file-size-units-empty`),v=u(`page-filter-file-size-source-units`),y=u(`page-filter-file-size-digits`),b=u(`aloha-table-translate`),x=u(`page-filter-test`),S=u(`aloha-page`);return c(),o(S,{"page-title":e.pageTitle},{body:d(()=>[l(s,{tag:`p`,html:`_PAGE_FILTER_FILE_SIZE_DESCRIPTION_`}),l(f,{"function-name":`filterFileSize`,"type-import":`filters`}),l(p,{"function-name":`filterFileSize`}),l(m,{"arguments-text":e.argumentsText,"function-description":`filterFileSize(value, { [units="kb"], [sourceUnits="b"], [digits=2] })`},null,8,[`arguments-text`]),l(h),l(g),l(_),l(v),l(y),l(b,{data:e.dataTranslate},null,8,[`data`]),l(x,{test:e.test},null,8,[`test`])]),_:1},8,[`page-title`])}var H=m(B,[[`render`,V]]);export{H as default};