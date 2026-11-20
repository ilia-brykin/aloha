import{t as e}from"./chunk.AlohaPage.C2Vrb1gB.js";import{t}from"./chunk.AlohaTableTranslate.ahnsPCqy.js";import{n,r,t as i}from"./chunk.PageFilterTest.BaO93RBI.js";import{t as a}from"./chunk.AlohaExample.v2GP0Oep.js";import{It as o,Pt as s,Qt as c,Vt as l,nn as u,on as d}from"./chunk.vendor.CTxSDDRk.js";import{Nt as f,it as p}from"./bundle.index.CwzuX9ei.js";import{t as m}from"./chunk._plugin-vue_export-helper.BDNMzG2s.js";import{t as h}from"./chunk.PageFilterImportCompositionApi.Dd09kgXu.js";function g(){return{codeJs:s(()=>`filterDuration(3725);
// ${f(3725)}

filterDuration(90061);
// ${f(90061)}

filterDuration(0);
// ${f(0)}`)}}var _={name:`PageFilterDurationExample`,components:{AlohaExample:a},setup(){let{codeJs:e}=g();return{codeJs:e}}};function v(e,t,n,r,i,a){let s=u(`aloha-example`);return c(),o(s,{"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,"is-code-visible-default":!0},null,8,[`code-js`])}var y=m(_,[[`render`,v]]);function b(){return{codeJs:s(()=>`filterDuration(3725, { format: "clock" });
// ${f(3725,{format:`clock`})}

filterDuration(90061, { format: "clock" });
// ${f(90061,{format:`clock`})}`)}}var x={name:`PageFilterDurationFormat`,components:{AlohaExample:a},setup(){let{codeJs:e}=b();return{codeJs:e}}};function S(e,t,n,r,i,a){let s=u(`aloha-example`);return c(),o(s,{"code-js":e.codeJs,header:`format`,"is-code-visible-default":!0},null,8,[`code-js`])}var C=m(x,[[`render`,S]]);function w(){return{codeJs:s(()=>`filterDuration(90061, { maxUnits: 2 });
// ${f(90061,{maxUnits:2})}

filterDuration(3725, { maxUnits: 1 });
// ${f(3725,{maxUnits:1})}`)}}var T={name:`PageFilterDurationMaxUnits`,components:{AlohaExample:a},setup(){let{codeJs:e}=w();return{codeJs:e}}};function E(e,t,n,r,i,a){let s=u(`aloha-example`);return c(),o(s,{"code-js":e.codeJs,header:`maxUnits`,"is-code-visible-default":!0},null,8,[`code-js`])}var D=m(T,[[`render`,E]]);function O(){return{codeJs:s(()=>`filterDuration(90061, { showDays: false });
// ${f(90061,{showDays:!1})}`)}}var k={name:`PageFilterDurationShowDays`,components:{AlohaExample:a},setup(){let{codeJs:e}=O();return{codeJs:e}}};function A(e,t,n,r,i,a){let s=u(`aloha-example`);return c(),o(s,{"code-js":e.codeJs,header:`showDays`,"is-code-visible-default":!0},null,8,[`code-js`])}var j=m(k,[[`render`,A]]);function M(){return{codeJs:s(()=>`filterDuration(1500, { sourceUnits: "ms" });
// ${f(1500,{sourceUnits:`ms`})}

filterDuration(90, { sourceUnits: "m" });
// ${f(90,{sourceUnits:`m`})}

filterDuration(1.5, { sourceUnits: "h" });
// ${f(1.5,{sourceUnits:`h`})}`)}}var N={name:`PageFilterDurationSourceUnits`,components:{AlohaExample:a},setup(){let{codeJs:e}=M();return{codeJs:e}}};function P(e,t,n,r,i,a){let s=u(`aloha-example`);return c(),o(s,{"code-js":e.codeJs,header:`sourceUnits`,"is-code-visible-default":!0},null,8,[`code-js`])}var F=m(N,[[`render`,P]]);function I(){return{argumentsText:[{value:`value`,types:[`Number`,`String`],text:`_PAGE_FILTER_DURATION_ARGUMENTS_VALUE_`},{value:`[sourceUnits="s"]`,types:[`String`],text:`_PAGE_FILTER_DURATION_ARGUMENTS_SOURCE_UNITS_`},{value:`[format="long"]`,types:[`String`],text:`_PAGE_FILTER_DURATION_ARGUMENTS_FORMAT_`},{value:`[maxUnits=0]`,types:[`Number`],text:`_PAGE_FILTER_DURATION_ARGUMENTS_MAX_UNITS_`},{value:`[showDays=true]`,types:[`Boolean`],text:`_PAGE_FILTER_DURATION_ARGUMENTS_SHOW_DAYS_`}]}}function L(){return{pageTitle:`filterDuration`}}function R(){return{dataTranslate:[`_A_DURATION_DAYS_`,`_A_DURATION_HOURS_`,`_A_DURATION_MINUTES_`,`_A_DURATION_SECONDS_`]}}var z=`import {
  describe,
  expect,
  it,
} from "vitest";

import filterDuration from "../filterDuration.js";

const D = "_A_DURATION_DAYS_";
const H = "_A_DURATION_HOURS_";
const M = "_A_DURATION_MINUTES_";
const S = "_A_DURATION_SECONDS_";

describe("filterDuration", () => {
  it("default", () => {
    expect(filterDuration(3725)).toBe(\`1 \${ H } 2 \${ M } 5 \${ S }\`);
    expect(filterDuration(3600)).toBe(\`1 \${ H }\`);
    expect(filterDuration(90061)).toBe(\`1 \${ D } 1 \${ H } 1 \${ M } 1 \${ S }\`);
    expect(filterDuration(0)).toBe(\`0 \${ S }\`);
    expect(filterDuration("125")).toBe(\`2 \${ M } 5 \${ S }\`);
    expect(filterDuration(-65)).toBe(\`-1 \${ M } 5 \${ S }\`);
  });

  it("sourceUnits", () => {
    expect(filterDuration(1500, { sourceUnits: "ms" })).toBe(\`2 \${ S }\`);
    expect(filterDuration(90, { sourceUnits: "m" })).toBe(\`1 \${ H } 30 \${ M }\`);
    expect(filterDuration(1.5, { sourceUnits: "h" })).toBe(\`1 \${ H } 30 \${ M }\`);
    expect(filterDuration(2, { sourceUnits: "d" })).toBe(\`2 \${ D }\`);
    expect(filterDuration(2, { sourceUnits: "years" })).toBe("");
  });

  it("maxUnits and showDays", () => {
    expect(filterDuration(90061, { maxUnits: 2 })).toBe(\`1 \${ D } 1 \${ H }\`);
    expect(filterDuration(90061, { showDays: false })).toBe(\`25 \${ H } 1 \${ M } 1 \${ S }\`);
  });

  it("format clock", () => {
    expect(filterDuration(3725, { format: "clock" })).toBe("01:02:05");
    expect(filterDuration(90061, { format: "clock" })).toBe("25:01:01");
    expect(filterDuration(0, { format: "clock" })).toBe("00:00:00");
    expect(filterDuration(-59, { format: "clock" })).toBe("-00:00:59");
  });

  it("empty values", () => {
    expect(filterDuration(undefined)).toBe("");
    expect(filterDuration(null)).toBe("");
    expect(filterDuration("")).toBe("");
    expect(filterDuration("abc")).toBe("");
  });
});
`,B={name:`PageFilterDuration`,components:{AlohaPage:e,AlohaTableTranslate:t,ATranslation:p,PageFilterArguments:r,PageFilterDurationExample:y,PageFilterDurationFormat:C,PageFilterDurationMaxUnits:D,PageFilterDurationShowDays:j,PageFilterDurationSourceUnits:F,PageFilterImportCompositionApi:h,PageFilterImportFunction:n,PageFilterTest:i},setup(){let{pageTitle:e}=L(),{dataTranslate:t}=R(),{argumentsText:n}=I();return{argumentsText:n,dataTranslate:t,pageTitle:e,test:z}}};function V(e,t,n,r,i,a){let s=u(`a-translation`),f=u(`page-filter-import-function`),p=u(`page-filter-import-composition-api`),m=u(`page-filter-arguments`),h=u(`page-filter-duration-example`),g=u(`page-filter-duration-source-units`),_=u(`page-filter-duration-format`),v=u(`page-filter-duration-max-units`),y=u(`page-filter-duration-show-days`),b=u(`aloha-table-translate`),x=u(`page-filter-test`),S=u(`aloha-page`);return c(),o(S,{"page-title":e.pageTitle},{body:d(()=>[l(s,{tag:`p`,html:`_PAGE_FILTER_DURATION_DESCRIPTION_`}),l(f,{"function-name":`filterDuration`,"type-import":`filters`}),l(p,{"function-name":`filterDuration`}),l(m,{"arguments-text":e.argumentsText,"function-description":`filterDuration(value, { [sourceUnits="s"], [format="long"], [maxUnits=0], [showDays=true] })`},null,8,[`arguments-text`]),l(h),l(g),l(_),l(v),l(y),l(b,{data:e.dataTranslate},null,8,[`data`]),l(x,{test:e.test},null,8,[`test`])]),_:1},8,[`page-title`])}var H=m(B,[[`render`,V]]);export{H as default};