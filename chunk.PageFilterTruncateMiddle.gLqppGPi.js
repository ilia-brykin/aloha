import{t as e}from"./chunk.AlohaPage.BIw9NYpI.js";import{n as t,r as n,t as r}from"./chunk.PageFilterTest.CI3luh4y.js";import{t as i}from"./chunk.PageFilterImportCompositionApi.CoQWM7Rj.js";import{t as a}from"./chunk.AlohaExample.CEueonn8.js";import{Jt as o,Ut as s,Vt as c,mn as l,on as u,un as d}from"./chunk.vendor.Bjd2408Z.js";import{mn as f,t as p,wt as m}from"./bundle.index.Dor-y9Rj.js";function h(){return{codeJs:c(()=>`filterTruncateMiddle("3f9a1c7e-42b0-4d1e-9c55-7a1d2e3f4b5c");
// ${m(`3f9a1c7e-42b0-4d1e-9c55-7a1d2e3f4b5c`)}

filterTruncateMiddle("Short");
// ${m(`Short`)}`)}}var g={name:`PageFilterTruncateMiddleExample`,components:{AlohaExample:a},setup(){let{codeJs:e}=h();return{codeJs:e}}};function _(e,t,n,r,i,a){let o=d(`aloha-example`);return u(),s(o,{"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,"is-code-visible-default":!0},null,8,[`code-js`])}var v=p(g,[[`render`,_]]);function y(){return{codeJs:c(()=>`filterTruncateMiddle("/home/user/projects/aloha/src/index.js", { start: 5, end: 8, separator: "/…/" });
// ${m(`/home/user/projects/aloha/src/index.js`,{start:5,end:8,separator:`/…/`})}

filterTruncateMiddle("0x71C7656EC7ab88b098defB751B7401B5f6d8976F", { separator: "..." });
// ${m(`0x71C7656EC7ab88b098defB751B7401B5f6d8976F`,{separator:`...`})}`)}}var b={name:`PageFilterTruncateMiddleSeparator`,components:{AlohaExample:a},setup(){let{codeJs:e}=y();return{codeJs:e}}};function x(e,t,n,r,i,a){let o=d(`aloha-example`);return u(),s(o,{"code-js":e.codeJs,header:`separator`,"is-code-visible-default":!0},null,8,[`code-js`])}var S=p(b,[[`render`,x]]);function C(){return{codeJs:c(()=>`filterTruncateMiddle("DE89370400440532013000", { start: 4, end: 4 });
// ${m(`DE89370400440532013000`,{start:4,end:4})}

filterTruncateMiddle("3f9a1c7e-42b0-4d1e-9c55", { start: 8, end: 0 });
// ${m(`3f9a1c7e-42b0-4d1e-9c55`,{start:8,end:0})}`)}}var w={name:`PageFilterTruncateMiddleStartEnd`,components:{AlohaExample:a},setup(){let{codeJs:e}=C();return{codeJs:e}}};function T(e,t,n,r,i,a){let o=d(`aloha-example`);return u(),s(o,{"code-js":e.codeJs,header:`start, end`,"is-code-visible-default":!0},null,8,[`code-js`])}var E=p(w,[[`render`,T]]);function D(){return{argumentsText:[{value:`value`,types:[`String`,`Number`],text:`_PAGE_FILTER_TRUNCATE_MIDDLE_ARGUMENTS_VALUE_`},{value:`[start=6]`,types:[`Number`],text:`_PAGE_FILTER_TRUNCATE_MIDDLE_ARGUMENTS_START_`},{value:`[end=4]`,types:[`Number`],text:`_PAGE_FILTER_TRUNCATE_MIDDLE_ARGUMENTS_END_`},{value:`[separator="…"]`,types:[`String`],text:`_PAGE_FILTER_TRUNCATE_MIDDLE_ARGUMENTS_SEPARATOR_`}]}}function O(){return{pageTitle:`filterTruncateMiddle`}}var k=`import {
  describe,
  expect,
  it,
} from "vitest";

import filterTruncateMiddle from "../filterTruncateMiddle.js";

describe("filterTruncateMiddle", () => {
  it("default", () => {
    expect(filterTruncateMiddle("3f9a1c7e-42b0-4d1e-9c55")).toBe("3f9a1c…9c55");
    expect(filterTruncateMiddle("short")).toBe("short");
    expect(filterTruncateMiddle("12345678901")).toBe("12345678901");
    expect(filterTruncateMiddle("123456789012")).toBe("123456…9012");
    expect(filterTruncateMiddle(1234567890123)).toBe("123456…0123");
  });

  it("start, end and separator", () => {
    expect(filterTruncateMiddle("DE89370400440532013000", { start: 4, end: 4, separator: " … " })).toBe("DE89 … 3000");
    expect(filterTruncateMiddle("/home/user/projects/aloha/src/index.js", { start: 5, end: 8, separator: "/…/" })).toBe("/home/…/index.js");
    expect(filterTruncateMiddle("abcdefghijklmnop", { start: 3, end: 0 })).toBe("abc…");
  });

  it("keeps characters made of two code units together", () => {
    expect(filterTruncateMiddle("😀😀😀😀😀😀😀😀😀😀😀😀", { start: 2, end: 2 })).toBe("😀😀…😀😀");
  });

  it("empty values", () => {
    expect(filterTruncateMiddle(undefined)).toBe("");
    expect(filterTruncateMiddle(null)).toBe("");
    expect(filterTruncateMiddle("")).toBe("");
  });
});
`,A={name:`PageFilterTruncateMiddle`,components:{AlohaPage:e,ATranslation:f,PageFilterArguments:n,PageFilterImportCompositionApi:i,PageFilterImportFunction:t,PageFilterTest:r,PageFilterTruncateMiddleExample:v,PageFilterTruncateMiddleSeparator:S,PageFilterTruncateMiddleStartEnd:E},setup(){let{pageTitle:e}=O(),{argumentsText:t}=D();return{argumentsText:t,pageTitle:e,test:k}}};function j(e,t,n,r,i,a){let c=d(`a-translation`),f=d(`page-filter-import-function`),p=d(`page-filter-import-composition-api`),m=d(`page-filter-arguments`),h=d(`page-filter-truncate-middle-example`),g=d(`page-filter-truncate-middle-start-end`),_=d(`page-filter-truncate-middle-separator`),v=d(`page-filter-test`),y=d(`aloha-page`);return u(),s(y,{"page-title":e.pageTitle},{body:l(()=>[o(c,{tag:`p`,html:`_PAGE_FILTER_TRUNCATE_MIDDLE_DESCRIPTION_`}),o(f,{"function-name":`filterTruncateMiddle`,"type-import":`filters`}),o(p,{"function-name":`filterTruncateMiddle`}),o(m,{"arguments-text":e.argumentsText,"function-description":`filterTruncateMiddle(value, { [start=6], [end=4], [separator="…"] })`},null,8,[`arguments-text`]),o(h),o(g),o(_),o(v,{test:e.test},null,8,[`test`])]),_:1},8,[`page-title`])}var M=p(A,[[`render`,j]]);export{M as default};