import{t as e}from"./chunk.AlohaPage.sulZ3BAz.js";import{n as t,r as n,t as r}from"./chunk.PageFilterTest.HIbnCuB_.js";import{t as i}from"./chunk.PageFilterImportCompositionApi.DRj5dFQL.js";import{t as a}from"./chunk.AlohaExample.Dh7-vA8e.js";import{et as o,pt as s}from"./bundle.index.Csp1_sOL.js";import{Ft as c,Xt as l,en as u,in as d,zt as f}from"./chunk.vendor.Cx127fe1.js";import{t as p}from"./chunk._plugin-vue_export-helper.BDNMzG2s.js";function m(){return{codeJs:`filterMask("1234567812345678");
// ${s(`1234567812345678`)}

filterMask("9876543210", { chars: 3 });
// ${s(`9876543210`,{chars:3})}

filterMask("secretData", { chars: 3, mask: "#" });
// ${s(`secretData`,{chars:3,mask:`#`})}

filterMask("abc", { chars: 4 });
// ${s(`abc`,{chars:4})}

filterMask(null);
// ${s(null)}

filterMask(undefined);
// ${s(void 0)}

filterMask("");
// ${s(``)}

filterMask("12345678", { chars: 0 });
// ${s(`12345678`,{chars:0})}

filterMask("12345678", { chars: 10 });
// ${s(`12345678`,{chars:10})}`}}var h={name:`PageFilterMaskExample`,components:{AlohaExample:a},setup(){let{codeJs:e}=m();return{codeJs:e}}};function g(e,t,n,r,i,a){let o=u(`aloha-example`);return l(),c(o,{"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,"is-code-visible-default":!0},null,8,[`code-js`])}var _=p(h,[[`render`,g]]);function v(){return{argumentsText:[{value:`value`,types:[`Any`],text:`_PAGE_FILTER_MASK_ARGUMENTS_VALUE_`},{value:`[chars=4]`,types:[`Number`],text:`_PAGE_FILTER_MASK_ARGUMENTS_CHARS_`},{value:`[mask="*"]`,types:[`String`],text:`_PAGE_FILTER_MASK_ARGUMENTS_MASK_`}]}}function y(){return{pageTitle:`filterMask`}}var b=`import {
  describe,
  expect,
  it,
} from "vitest";

import filterMask from "../filterMask";


describe("filterMask", () => {
  it("masks a credit card number, showing last 4 characters", () => {
    const result = filterMask("1234567812345678", { chars: 4 });
    expect(result).toBe("************5678");
  });

  it("masks a phone number, showing last 3 characters", () => {
    const result = filterMask("9876543210", { chars: 3 });
    expect(result).toBe("*******210");
  });

  it("masks a number, showing last 4 characters", () => {
    const result = filterMask(12345678, { chars: 4 });
    expect(result).toBe("****5678");
  });

  it("masks a string with a different mask character", () => {
    const result = filterMask("secretData", { chars: 3, mask: "#" });
    expect(result).toBe("#######ata");
  });

  it("returns the original string if its length is less than or equal to chars", () => {
    const result = filterMask("abc", { chars: 4 });
    expect(result).toBe("abc");
  });

  it("returns an empty string if the input is null", () => {
    const result = filterMask(null);
    expect(result).toBe("");
  });

  it("returns an empty string if the input is undefined", () => {
    const result = filterMask(undefined);
    expect(result).toBe("");
  });

  it("converts non-string values to strings and masks them", () => {
    const result = filterMask({ key: "value" }, { chars: 4 });
    expect(result).toBe("***********ect]");
  });

  it("handles empty string correctly", () => {
    const result = filterMask("", { chars: 4 });
    expect(result).toBe("");
  });

  it("handles negative chars value by masking the entire string", () => {
    const result = filterMask("12345678", { chars: -1 });
    expect(result).toBe("********");
  });

  it("handles zero chars value by masking the entire string", () => {
    const result = filterMask("12345678", { chars: 0 });
    expect(result).toBe("********");
  });

  it("handles large chars value by returning the original string", () => {
    const result = filterMask("12345678", { chars: 10 });
    expect(result).toBe("12345678");
  });

  it("masks a boolean value correctly", () => {
    const result = filterMask(true, { chars: 3 });
    expect(result).toBe("*rue");
  });

  it("masks an array value correctly", () => {
    const result = filterMask([1, 2, 3, 4, 5], { chars: 3 });
    expect(result).toBe("******4,5");
  });
});
`,x={name:`PageFilterMask`,components:{AlohaPage:e,ATranslation:o,PageFilterArguments:n,PageFilterImportCompositionApi:i,PageFilterImportFunction:t,PageFilterMaskExample:_,PageFilterTest:r},setup(){let{pageTitle:e}=y(),{argumentsText:t}=v();return{argumentsText:t,pageTitle:e,test:b}}};function S(e,t,n,r,i,a){let o=u(`a-translation`),s=u(`page-filter-import-function`),p=u(`page-filter-import-composition-api`),m=u(`page-filter-arguments`),h=u(`page-filter-mask-example`),g=u(`page-filter-test`),_=u(`aloha-page`);return l(),c(_,{"page-title":e.pageTitle},{body:d(()=>[f(o,{tag:`p`,html:`_PAGE_FILTER_MASK_DESCRIPTION_`}),f(s,{"function-name":`filterMask`,"type-import":`filters`}),f(p,{"function-name":`filterMask`}),f(m,{"arguments-text":e.argumentsText,"function-description":`filterMask(value, { [chars=4], [mask="*"] })`},null,8,[`arguments-text`]),f(h),f(g,{test:e.test},null,8,[`test`])]),_:1},8,[`page-title`])}var C=p(x,[[`render`,S]]);export{C as default};