import{t as e}from"./chunk.AlohaPage.BSfHVC43.js";import{t}from"./chunk.AlohaTableTranslate.CZ7cJb8v.js";import{n,r,t as i}from"./chunk.PageFilterTest.AYOenCaD.js";import{t as a}from"./chunk.PageFilterImportCompositionApi.Ds7D27Yo.js";import{t as o}from"./chunk.AlohaExample.VTWuqY0j.js";import{Jt as s,Ut as c,Vt as l,mn as u,on as d,un as f}from"./chunk.vendor.DL09mhUf.js";import{At as p,mn as m,t as h}from"./bundle.index.D-5bYXwk.js";function g(){return{codeJs:l(()=>`filterNumberCompact(1234567, { digits: 2 });
// ${p(1234567,{digits:2})}

filterNumberCompact(1234567, { digits: 0 });
// ${p(1234567,{digits:0})}`)}}var _={name:`PageFilterNumberCompactDigits`,components:{AlohaExample:o},setup(){let{codeJs:e}=g();return{codeJs:e}}};function v(e,t,n,r,i,a){let o=f(`aloha-example`);return d(),c(o,{"code-js":e.codeJs,header:`digits`,"is-code-visible-default":!0},null,8,[`code-js`])}var y=h(_,[[`render`,v]]);function b(){return{codeJs:l(()=>`filterNumberCompact(1234567);
// ${p(1234567)}

filterNumberCompact(15300);
// ${p(15300)}

filterNumberCompact(2500000000);
// ${p(25e8)}

filterNumberCompact(999);
// ${p(999)}`)}}var x={name:`PageFilterNumberCompactExample`,components:{AlohaExample:o},setup(){let{codeJs:e}=b();return{codeJs:e}}};function S(e,t,n,r,i,a){let o=f(`aloha-example`);return d(),c(o,{"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,"is-code-visible-default":!0},null,8,[`code-js`])}var C=h(x,[[`render`,S]]);function w(){return{codeJs:l(()=>`filterNumberCompact(1000000);
// ${p(1e6)}

filterNumberCompact(1000000, { isTrailingZeros: true });
// ${p(1e6,{isTrailingZeros:!0})}`)}}var T={name:`PageFilterNumberCompactIsTrailingZeros`,components:{AlohaExample:o},setup(){let{codeJs:e}=w();return{codeJs:e}}};function E(e,t,n,r,i,a){let o=f(`aloha-example`);return d(),c(o,{"code-js":e.codeJs,header:`isTrailingZeros`,"is-code-visible-default":!0},null,8,[`code-js`])}var D=h(T,[[`render`,E]]);function O(){return{codeJs:l(()=>`filterNumberCompact(15300, { minValue: 100000 });
// ${p(15300,{minValue:1e5})}

filterNumberCompact(153000, { minValue: 100000 });
// ${p(153e3,{minValue:1e5})}`)}}var k={name:`PageFilterNumberCompactMinValue`,components:{AlohaExample:o},setup(){let{codeJs:e}=O();return{codeJs:e}}};function A(e,t,n,r,i,a){let o=f(`aloha-example`);return d(),c(o,{"code-js":e.codeJs,header:`minValue`,"is-code-visible-default":!0},null,8,[`code-js`])}var j=h(k,[[`render`,A]]);function M(){return{argumentsText:[{value:`value`,types:[`Number`,`String`],text:`_PAGE_FILTER_NUMBER_COMPACT_ARGUMENTS_VALUE_`},{value:`[digits=1]`,types:[`Number`],text:`_PAGE_FILTER_NUMBER_COMPACT_ARGUMENTS_DIGITS_`},{value:`[minValue=1000]`,types:[`Number`],text:`_PAGE_FILTER_NUMBER_COMPACT_ARGUMENTS_MIN_VALUE_`},{value:`[isTrailingZeros=false]`,types:[`Boolean`],text:`_PAGE_FILTER_NUMBER_COMPACT_ARGUMENTS_IS_TRAILING_ZEROS_`}]}}function N(){return{pageTitle:`filterNumberCompact`}}function P(){return{dataTranslate:[`_A_NUMBER_COMPACT_THOUSAND_`,`_A_NUMBER_COMPACT_MILLION_`,`_A_NUMBER_COMPACT_BILLION_`,`_A_NUMBER_COMPACT_TRILLION_`]}}var F=`import {
  describe,
  expect,
  it,
} from "vitest";

import filterNumberCompact from "../filterNumberCompact.js";

const K = "_A_NUMBER_COMPACT_THOUSAND_";
const M = "_A_NUMBER_COMPACT_MILLION_";
const B = "_A_NUMBER_COMPACT_BILLION_";
const T = "_A_NUMBER_COMPACT_TRILLION_";

describe("filterNumberCompact", () => {
  it("default", () => {
    expect(filterNumberCompact(1234567)).toBe(\`1,2 \${ M }\`);
    expect(filterNumberCompact(15300)).toBe(\`15,3 \${ K }\`);
    expect(filterNumberCompact(1000)).toBe(\`1 \${ K }\`);
    expect(filterNumberCompact(2500000000)).toBe(\`2,5 \${ B }\`);
    expect(filterNumberCompact(7e12)).toBe(\`7 \${ T }\`);
    expect(filterNumberCompact(1234567e12)).toBe(\`1.234.567 \${ T }\`);
    expect(filterNumberCompact(-1234567)).toBe(\`-1,2 \${ M }\`);
    expect(filterNumberCompact("15300")).toBe(\`15,3 \${ K }\`);
  });

  it("does not shorten small numbers", () => {
    expect(filterNumberCompact(999)).toBe("999");
    expect(filterNumberCompact(12.34)).toBe("12,3");
    expect(filterNumberCompact(0)).toBe("0");
  });

  it("moves to the next unit after rounding", () => {
    expect(filterNumberCompact(999950)).toBe(\`1 \${ M }\`);
    expect(filterNumberCompact(999949)).toBe(\`999,9 \${ K }\`);
  });

  it("digits", () => {
    expect(filterNumberCompact(1234567, { digits: 2 })).toBe(\`1,23 \${ M }\`);
    expect(filterNumberCompact(1234567, { digits: 0 })).toBe(\`1 \${ M }\`);
  });

  it("minValue", () => {
    expect(filterNumberCompact(15300, { minValue: 100000 })).toBe("15.300");
    expect(filterNumberCompact(153000, { minValue: 100000 })).toBe(\`153 \${ K }\`);
  });

  it("isTrailingZeros", () => {
    expect(filterNumberCompact(1000000, { isTrailingZeros: true })).toBe(\`1,0 \${ M }\`);
  });

  it("empty values", () => {
    expect(filterNumberCompact(undefined)).toBe("");
    expect(filterNumberCompact(null)).toBe("");
    expect(filterNumberCompact("")).toBe("");
    expect(filterNumberCompact("abc")).toBe("");
  });
});
`,I={name:`PageFilterNumberCompact`,components:{AlohaPage:e,AlohaTableTranslate:t,ATranslation:m,PageFilterArguments:r,PageFilterImportCompositionApi:a,PageFilterImportFunction:n,PageFilterNumberCompactDigits:y,PageFilterNumberCompactExample:C,PageFilterNumberCompactIsTrailingZeros:D,PageFilterNumberCompactMinValue:j,PageFilterTest:i},setup(){let{pageTitle:e}=N(),{dataTranslate:t}=P(),{argumentsText:n}=M();return{argumentsText:n,dataTranslate:t,pageTitle:e,test:F}}};function L(e,t,n,r,i,a){let o=f(`a-translation`),l=f(`page-filter-import-function`),p=f(`page-filter-import-composition-api`),m=f(`page-filter-arguments`),h=f(`page-filter-number-compact-example`),g=f(`page-filter-number-compact-digits`),_=f(`page-filter-number-compact-min-value`),v=f(`page-filter-number-compact-is-trailing-zeros`),y=f(`aloha-table-translate`),b=f(`page-filter-test`),x=f(`aloha-page`);return d(),c(x,{"page-title":e.pageTitle},{body:u(()=>[s(o,{tag:`p`,html:`_PAGE_FILTER_NUMBER_COMPACT_DESCRIPTION_`}),s(l,{"function-name":`filterNumberCompact`,"type-import":`filters`}),s(p,{"function-name":`filterNumberCompact`}),s(m,{"arguments-text":e.argumentsText,"function-description":`filterNumberCompact(value, { [digits=1], [minValue=1000], [isTrailingZeros=false] })`},null,8,[`arguments-text`]),s(h),s(g),s(_),s(v),s(y,{data:e.dataTranslate},null,8,[`data`]),s(b,{test:e.test},null,8,[`test`])]),_:1},8,[`page-title`])}var R=h(I,[[`render`,L]]);export{R as default};