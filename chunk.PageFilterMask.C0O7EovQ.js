import{A as d,a as x}from"./chunk.AlohaExample.LlWhnD4d.js";import{P as A,a as P,b as T}from"./chunk.PageFilterTest.EeAXEkA3.js";import{P as $}from"./chunk.PageFilterImportCompositionApi.DmQCkSvc.js";import{aG as e,_ as o,A as b}from"./bundle.index.NARqDgQK.js";import{U as l,e as n,V as c,aS as y,Z as s}from"./chunk.vendor.B8i9Zb03.js";import"./chunk.vendor-lodash.GQwVh4JN.js";import"./chunk.APageTabTitle.ZRujXYBG.js";import"./chunk.AlohaHighlightjs.DOgKZA3M.js";import"./chunk.translations-ar.DEWt73y8.js";import"./chunk.translations-de.BUYjlGcE.js";import"./chunk.translations-en.CPCEcTAP.js";import"./chunk.translations-es.BKTK5PUv.js";import"./chunk.translations-fr.CslimZmU.js";import"./chunk.translations-hr.CiJ7_Y2m.js";import"./chunk.translations-it.H45F8miC.js";import"./chunk.translations-ru.o-dOzdYz.js";function B(){return{codeJs:`filterMask("1234567812345678");
// ${e("1234567812345678")}

filterMask("9876543210", { chars: 3 });
// ${e("9876543210",{chars:3})}

filterMask("secretData", { chars: 3, mask: "#" });
// ${e("secretData",{chars:3,mask:"#"})}

filterMask("abc", { chars: 4 });
// ${e("abc",{chars:4})}

filterMask(null);
// ${e(null)}

filterMask(undefined);
// ${e(void 0)}

filterMask("");
// ${e("")}

filterMask("12345678", { chars: 0 });
// ${e("12345678",{chars:0})}

filterMask("12345678", { chars: 10 });
// ${e("12345678",{chars:10})}`}}const E={name:"PageFilterMaskExample",components:{AlohaExample:d},setup(){const{codeJs:t}=B();return{codeJs:t}}};function v(t,a,i,p,u,m){const r=n("aloha-example");return c(),l(r,{"code-js":t.codeJs,header:"_A_BASIC_USAGE_","is-code-visible-default":!0},null,8,["code-js"])}const S=o(E,[["render",v]]);function F(){return{argumentsText:[{value:"value",types:["Any"],text:"_PAGE_FILTER_MASK_ARGUMENTS_VALUE_"},{value:"[chars=4]",types:["Number"],text:"_PAGE_FILTER_MASK_ARGUMENTS_CHARS_"},{value:'[mask="*"]',types:["String"],text:"_PAGE_FILTER_MASK_ARGUMENTS_MASK_"}]}}function I(){return{pageTitle:"filterMask"}}const G=`import {
  describe,
  expect,
  it,
} from "@jest/globals";

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
`,R={name:"PageFilterMask",components:{AlohaPage:x,ATranslation:b,PageFilterArguments:T,PageFilterImportCompositionApi:$,PageFilterImportFunction:P,PageFilterMaskExample:S,PageFilterTest:A},setup(){const{pageTitle:t}=I(),{argumentsText:a}=F();return{argumentsText:a,pageTitle:t,test:G}}};function C(t,a,i,p,u,m){const r=n("a-translation"),f=n("page-filter-import-function"),_=n("page-filter-import-composition-api"),g=n("page-filter-arguments"),h=n("page-filter-mask-example"),k=n("page-filter-test"),M=n("aloha-page");return c(),l(M,{"page-title":t.pageTitle},{body:y(()=>[s(r,{tag:"p",html:"_PAGE_FILTER_MASK_DESCRIPTION_"}),s(f,{"function-name":"filterMask","type-import":"filters"}),s(_,{"function-name":"filterMask"}),s(g,{"arguments-text":t.argumentsText,"function-description":'filterMask(value, { [chars=4], [mask="*"] })'},null,8,["arguments-text"]),s(h),s(k,{test:t.test},null,8,["test"])]),_:1},8,["page-title"])}const X=o(R,[["render",C]]);export{X as default};
