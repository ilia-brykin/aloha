import{Tt as e,Ut as t,kt as n,qt as r,zt as i}from"./chunk.vendor.CZPox1kV.js";import{Z as a,t as o,ut as s}from"./bundle.index.CLtYDDlb.js";import{n as c,t as l}from"./chunk.AlohaExample.BFgfeYtr.js";import{n as u,r as d,t as f}from"./chunk.PageFilterTest.DEb_j_8g.js";import{t as p}from"./chunk.PageFilterImportCompositionApi.D-8n-B7g.js";function m(){return{codeJs:`filterMask("1234567812345678");
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
// ${s(`12345678`,{chars:10})}`}}var h={name:`PageFilterMaskExample`,components:{AlohaExample:l},setup(){let{codeJs:e}=m();return{codeJs:e}}};function g(n,r,a,o,s,c){let l=t(`aloha-example`);return i(),e(l,{"code-js":n.codeJs,header:`_A_BASIC_USAGE_`,"is-code-visible-default":!0},null,8,[`code-js`])}var _=o(h,[[`render`,g]]);function v(){return{argumentsText:[{value:`value`,types:[`Any`],text:`_PAGE_FILTER_MASK_ARGUMENTS_VALUE_`},{value:`[chars=4]`,types:[`Number`],text:`_PAGE_FILTER_MASK_ARGUMENTS_CHARS_`},{value:`[mask="*"]`,types:[`String`],text:`_PAGE_FILTER_MASK_ARGUMENTS_MASK_`}]}}function y(){return{pageTitle:`filterMask`}}var b=`import {
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
`,x={name:`PageFilterMask`,components:{AlohaPage:c,ATranslation:a,PageFilterArguments:d,PageFilterImportCompositionApi:p,PageFilterImportFunction:u,PageFilterMaskExample:_,PageFilterTest:f},setup(){let{pageTitle:e}=y(),{argumentsText:t}=v();return{argumentsText:t,pageTitle:e,test:b}}};function S(a,o,s,c,l,u){let d=t(`a-translation`),f=t(`page-filter-import-function`),p=t(`page-filter-import-composition-api`),m=t(`page-filter-arguments`),h=t(`page-filter-mask-example`),g=t(`page-filter-test`),_=t(`aloha-page`);return i(),e(_,{"page-title":a.pageTitle},{body:r(()=>[n(d,{tag:`p`,html:`_PAGE_FILTER_MASK_DESCRIPTION_`}),n(f,{"function-name":`filterMask`,"type-import":`filters`}),n(p,{"function-name":`filterMask`}),n(m,{"arguments-text":a.argumentsText,"function-description":`filterMask(value, { [chars=4], [mask="*"] })`},null,8,[`arguments-text`]),n(h),n(g,{test:a.test},null,8,[`test`])]),_:1},8,[`page-title`])}var C=o(x,[[`render`,S]]);export{C as default};