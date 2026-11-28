import{t as e}from"./chunk.AlohaPage.IS3NRfGI.js";import{t}from"./chunk.AlohaTableTranslate.Bs0gql66.js";import{n,r,t as i}from"./chunk.PageFilterTest.BiQNU7rf.js";import{t as a}from"./chunk.AlohaExample.CDuUdjpI.js";import{Bt as o,Ht as s,an as c,ln as l,pn as u,qt as d}from"./chunk.vendor.SEynj6EJ.js";import{Ht as f,mn as p,t as m}from"./bundle.index.DikcaTJ9.js";import{t as h}from"./chunk.PageFilterImportCompositionApi.r8Qpa9Lw.js";function g(){return{codeJs:o(()=>`filterDuration(3725);
// ${f(3725)}

filterDuration(90061);
// ${f(90061)}

filterDuration(0);
// ${f(0)}`)}}var _={name:`PageFilterDurationExample`,components:{AlohaExample:a},setup(){let{codeJs:e}=g();return{codeJs:e}}};function v(e,t,n,r,i,a){let o=l(`aloha-example`);return c(),s(o,{"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,"is-code-visible-default":!0},null,8,[`code-js`])}var y=m(_,[[`render`,v]]);function b(){return{codeJs:o(()=>`filterDuration(3725, { format: "clock" });
// ${f(3725,{format:`clock`})}

filterDuration(90061, { format: "clock" });
// ${f(90061,{format:`clock`})}`)}}var x={name:`PageFilterDurationFormat`,components:{AlohaExample:a},setup(){let{codeJs:e}=b();return{codeJs:e}}};function S(e,t,n,r,i,a){let o=l(`aloha-example`);return c(),s(o,{"code-js":e.codeJs,header:`format`,"is-code-visible-default":!0},null,8,[`code-js`])}var C=m(x,[[`render`,S]]);function w(){return{codeJs:o(()=>`filterDuration(90061, { maxUnits: 2 });
// ${f(90061,{maxUnits:2})}

filterDuration(3725, { maxUnits: 1 });
// ${f(3725,{maxUnits:1})}`)}}var T={name:`PageFilterDurationMaxUnits`,components:{AlohaExample:a},setup(){let{codeJs:e}=w();return{codeJs:e}}};function E(e,t,n,r,i,a){let o=l(`aloha-example`);return c(),s(o,{"code-js":e.codeJs,header:`maxUnits`,"is-code-visible-default":!0},null,8,[`code-js`])}var D=m(T,[[`render`,E]]);function O(){return{codeJs:o(()=>`filterDuration(90061, { showDays: false });
// ${f(90061,{showDays:!1})}`)}}var k={name:`PageFilterDurationShowDays`,components:{AlohaExample:a},setup(){let{codeJs:e}=O();return{codeJs:e}}};function A(e,t,n,r,i,a){let o=l(`aloha-example`);return c(),s(o,{"code-js":e.codeJs,header:`showDays`,"is-code-visible-default":!0},null,8,[`code-js`])}var j=m(k,[[`render`,A]]);function M(){return{codeJs:o(()=>`filterDuration(1500, { sourceUnits: "ms" });
// ${f(1500,{sourceUnits:`ms`})}

filterDuration(90, { sourceUnits: "m" });
// ${f(90,{sourceUnits:`m`})}

filterDuration(1.5, { sourceUnits: "h" });
// ${f(1.5,{sourceUnits:`h`})}`)}}var N={name:`PageFilterDurationSourceUnits`,components:{AlohaExample:a},setup(){let{codeJs:e}=M();return{codeJs:e}}};function P(e,t,n,r,i,a){let o=l(`aloha-example`);return c(),s(o,{"code-js":e.codeJs,header:`sourceUnits`,"is-code-visible-default":!0},null,8,[`code-js`])}var F=m(N,[[`render`,P]]);function I(){return{argumentsText:[{value:`value`,types:[`Number`,`String`],text:`_PAGE_FILTER_DURATION_ARGUMENTS_VALUE_`},{value:`[sourceUnits="s"]`,types:[`String`],text:`_PAGE_FILTER_DURATION_ARGUMENTS_SOURCE_UNITS_`},{value:`[format="long"]`,types:[`String`],text:`_PAGE_FILTER_DURATION_ARGUMENTS_FORMAT_`},{value:`[maxUnits=0]`,types:[`Number`],text:`_PAGE_FILTER_DURATION_ARGUMENTS_MAX_UNITS_`},{value:`[showDays=true]`,types:[`Boolean`],text:`_PAGE_FILTER_DURATION_ARGUMENTS_SHOW_DAYS_`}]}}function L(){return{pageTitle:`filterDuration`}}function R(){return{dataTranslate:[`_A_DURATION_DAYS_`,`_A_DURATION_HOURS_`,`_A_DURATION_MINUTES_`,`_A_DURATION_SECONDS_`]}}var z=`import {
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
`,B={name:`PageFilterDuration`,components:{AlohaPage:e,AlohaTableTranslate:t,ATranslation:p,PageFilterArguments:r,PageFilterDurationExample:y,PageFilterDurationFormat:C,PageFilterDurationMaxUnits:D,PageFilterDurationShowDays:j,PageFilterDurationSourceUnits:F,PageFilterImportCompositionApi:h,PageFilterImportFunction:n,PageFilterTest:i},setup(){let{pageTitle:e}=L(),{dataTranslate:t}=R(),{argumentsText:n}=I();return{argumentsText:n,dataTranslate:t,pageTitle:e,test:z}}};function V(e,t,n,r,i,a){let o=l(`a-translation`),f=l(`page-filter-import-function`),p=l(`page-filter-import-composition-api`),m=l(`page-filter-arguments`),h=l(`page-filter-duration-example`),g=l(`page-filter-duration-source-units`),_=l(`page-filter-duration-format`),v=l(`page-filter-duration-max-units`),y=l(`page-filter-duration-show-days`),b=l(`aloha-table-translate`),x=l(`page-filter-test`),S=l(`aloha-page`);return c(),s(S,{"page-title":e.pageTitle},{body:u(()=>[d(o,{tag:`p`,html:`_PAGE_FILTER_DURATION_DESCRIPTION_`}),d(f,{"function-name":`filterDuration`,"type-import":`filters`}),d(p,{"function-name":`filterDuration`}),d(m,{"arguments-text":e.argumentsText,"function-description":`filterDuration(value, { [sourceUnits="s"], [format="long"], [maxUnits=0], [showDays=true] })`},null,8,[`arguments-text`]),d(h),d(g),d(_),d(v),d(y),d(b,{data:e.dataTranslate},null,8,[`data`]),d(x,{test:e.test},null,8,[`test`])]),_:1},8,[`page-title`])}var H=m(B,[[`render`,V]]);export{H as default};