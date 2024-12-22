import{A as d,a as x}from"./chunk.AlohaExample.yE023I1X.js";import{ar as e,_ as i,A}from"./bundle.index.C9lpaoUP.js";import{P,a as T,b as $}from"./chunk.PageFilterTest.HHPB_jIn.js";import{P as y}from"./chunk.PageFilterImportCompositionApi.DVluyLc8.js";import{k as s,J as l,H as c,aO as B,O as n}from"./chunk.vendor.QyCKSPD8.js";import"./chunk.vendor-lodash.GuFqEw-8.js";import"./chunk.APageTabTitle.BP4gNxYd.js";import"./chunk.translations-ar.D84EYJUC.js";import"./chunk.translations-de.B3_DNkZv.js";import"./chunk.translations-en.DZoFKckB.js";import"./chunk.translations-es.92fkcSMr.js";import"./chunk.translations-fr.DBliKyyP.js";import"./chunk.translations-hr.KiqIBbb_.js";import"./chunk.translations-it.BBYgaTTr.js";import"./chunk.translations-ru.CgZqQiYL.js";function E(){return{codeJs:`filterMask("1234567812345678");
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
// ${e("12345678",{chars:10})}`}}const b={name:"PageFilterMaskExample",components:{AlohaExample:d},setup(){const{codeJs:t}=E();return{codeJs:t}}};function v(t,a,o,p,u,m){const r=s("aloha-example");return c(),l(r,{"code-js":t.codeJs,header:"_A_BASIC_USAGE_","is-code-visible-default":!0},null,8,["code-js"])}const F=i(b,[["render",v]]);function S(){return{argumentsText:[{value:"value",types:["Any"],text:"_PAGE_FILTER_MASK_ARGUMENTS_VALUE_"},{value:"[chars=4]",types:["Number"],text:"_PAGE_FILTER_MASK_ARGUMENTS_CHARS_"},{value:'[mask="*"]',types:["String"],text:"_PAGE_FILTER_MASK_ARGUMENTS_MASK_"}]}}function I(){return{pageTitle:"filterMask"}}const R=`import filterMask from "../filterMask";


describe("filterMask", () => {
  test("masks a credit card number, showing last 4 characters", () => {
    const result = filterMask("1234567812345678", { chars: 4 });
    expect(result).toBe("************5678");
  });

  test("masks a phone number, showing last 3 characters", () => {
    const result = filterMask("9876543210", { chars: 3 });
    expect(result).toBe("*******210");
  });

  test("masks a number, showing last 4 characters", () => {
    const result = filterMask(12345678, { chars: 4 });
    expect(result).toBe("****5678");
  });

  test("masks a string with a different mask character", () => {
    const result = filterMask("secretData", { chars: 3, mask: "#" });
    expect(result).toBe("#######ata");
  });

  test("returns the original string if its length is less than or equal to chars", () => {
    const result = filterMask("abc", { chars: 4 });
    expect(result).toBe("abc");
  });

  test("returns an empty string if the input is null", () => {
    const result = filterMask(null);
    expect(result).toBe("");
  });

  test("returns an empty string if the input is undefined", () => {
    const result = filterMask(undefined);
    expect(result).toBe("");
  });

  test("converts non-string values to strings and masks them", () => {
    const result = filterMask({ key: "value" }, { chars: 4 });
    expect(result).toBe("***********ect]");
  });

  test("handles empty string correctly", () => {
    const result = filterMask("", { chars: 4 });
    expect(result).toBe("");
  });

  test("handles negative chars value by masking the entire string", () => {
    const result = filterMask("12345678", { chars: -1 });
    expect(result).toBe("********");
  });

  test("handles zero chars value by masking the entire string", () => {
    const result = filterMask("12345678", { chars: 0 });
    expect(result).toBe("********");
  });

  test("handles large chars value by returning the original string", () => {
    const result = filterMask("12345678", { chars: 10 });
    expect(result).toBe("12345678");
  });

  test("masks a boolean value correctly", () => {
    const result = filterMask(true, { chars: 3 });
    expect(result).toBe("*rue");
  });

  test("masks an array value correctly", () => {
    const result = filterMask([1, 2, 3, 4, 5], { chars: 3 });
    expect(result).toBe("******4,5");
  });
});
`,G={name:"PageFilterMask",components:{AlohaPage:x,ATranslation:A,PageFilterArguments:P,PageFilterImportCompositionApi:y,PageFilterImportFunction:T,PageFilterMaskExample:F,PageFilterTest:$},setup(){const{pageTitle:t}=I(),{argumentsText:a}=S();return{argumentsText:a,pageTitle:t,test:R}}};function C(t,a,o,p,u,m){const r=s("a-translation"),f=s("page-filter-import-function"),_=s("page-filter-import-composition-api"),g=s("page-filter-arguments"),h=s("page-filter-mask-example"),k=s("page-filter-test"),M=s("aloha-page");return c(),l(M,{"page-title":t.pageTitle},{body:B(()=>[n(r,{tag:"p",html:"_PAGE_FILTER_MASK_DESCRIPTION_"}),n(f,{"function-name":"filterMask","type-import":"filters"}),n(_,{"function-name":"filterMask"}),n(g,{"arguments-text":t.argumentsText,"function-description":'filterMask(value, { [chars=4], [mask="*"] })'},null,8,["arguments-text"]),n(h),n(k,{test:t.test},null,8,["test"])]),_:1},8,["page-title"])}const X=i(G,[["render",C]]);export{X as default};
