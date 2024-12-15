import{A as _,a as E}from"./chunk.AlohaExample.A9Ef-QbL.js";import{aE as i,_ as n,A as $}from"./bundle.index.Dn7qpWjQ.js";import{P,a as A,b as D}from"./chunk.PageFilterTest.Dwl2cJEE.js";import{P as I}from"./chunk.PageFilterImportCompositionApi.dDZ0bVyw.js";import{m as e,K as a,J as l,aK as F,P as o}from"./chunk.vendor.DQz1Isc4.js";import"./chunk.vendor-lodash.Cgq9oNCy.js";import"./chunk.vendor-tinymce.cPIiul0H.js";function X(){const t="Lorem ipsum dolor sit amet consectetur adipisicing elit";return{codeJs:`const TEXT = "Lorem ipsum dolor sit amet consectetur adipisicing elit";

filterList(TEXT);
// ${i(t)}

filterList(TEXT, { limit: 10 });
// ${i(t,{limit:10})}

filterList(TEXT, { limit: 100 });
// ${i(t,{limit:100})}`}}const B={name:"PageFilterLimitToLimit",components:{AlohaExample:_},setup(){const{codeJs:t}=X();return{codeJs:t}}};function J(t,s,m,c,p,T){const r=e("aloha-example");return l(),a(r,{"code-js":t.codeJs,header:"limit","is-code-visible-default":!0},null,8,["code-js"])}const M=n(B,[["render",J]]);function R(){const t="Aloha...";return{codeJs:`const TEXT = "Aloha...";

filterList(TEXT, { limit: 7, maxThreeDots: true });
// ${i(t,{limit:7,maxThreeDots:!0})}
filterList(TEXT, { limit: 7, maxThreeDots: false });
// ${i(t,{limit:7,maxThreeDots:!1})}

filterList(TEXT, { limit: 6, maxThreeDots: true });
// ${i(t,{limit:6,maxThreeDots:!0})}
filterList(TEXT, { limit: 6, maxThreeDots: false });
// ${i(t,{limit:6,maxThreeDots:!1})}

filterList(TEXT, { limit: 5, maxThreeDots: true });
// ${i(t,{limit:5,maxThreeDots:!0})}
filterList(TEXT, { limit: 5, maxThreeDots: false });
// ${i(t,{limit:5,maxThreeDots:!1})}`}}const v={name:"PageFilterLimitToMaxThreeDots",components:{AlohaExample:_},setup(){const{codeJs:t}=R();return{codeJs:t}}};function G(t,s,m,c,p,T){const r=e("aloha-example");return l(),a(r,{"code-js":t.codeJs,header:"maxThreeDots","is-code-visible-default":!0},null,8,["code-js"])}const b=n(v,[["render",G]]);function y(){return{argumentsText:[{value:"text",types:["String"],text:"_PAGE_FILTER_LIMIT_TO_ARGUMENTS_TEXT_"},{value:"[limit=30]",types:["Number"],text:"_PAGE_FILTER_LIMIT_TO_ARGUMENTS_LIMIT_"},{value:"[maxThreeDots=true]",types:["Boolean"],text:"_PAGE_FILTER_LIMIT_TO_ARGUMENTS_MAX_THREE_DOTS_"}]}}function N(){return{pageTitle:"filterLimitTo"}}const O=`import filterLimitTo from "../filterLimitTo";

describe("filterLimitTo", () => {
  test("text exactly at limit", () => {
    expect(filterLimitTo("Lorem ipsum dolor sit amet, cons", { limit: 30 })).toBe("Lorem ipsum dolor sit amet, co...");
  });

  test("long text exceeding limit", () => {
    expect(filterLimitTo("Lorem ipsum dolor sit amet, consectetur adipiscing elit", { limit: 30 })).toBe("Lorem ipsum dolor sit amet, co...");
  });

  test("text ending with a period", () => {
    expect(filterLimitTo("Lorem ipsum dolor sit amet.", { limit: 30 })).toBe("Lorem ipsum dolor sit amet.");
  });

  test("text with multiple periods at the end", () => {
    expect(filterLimitTo("Lorem ipsum dolor sit amet...", { limit: 30 })).toBe("Lorem ipsum dolor sit amet...");
  });

  test("numeric value treated as text", () => {
    expect(filterLimitTo(1234567890, { limit: 10 })).toBe("1234567890");
    expect(filterLimitTo(1234567890, { limit: 9 })).toBe("123456789...");
  });

  test("null value", () => {
    expect(filterLimitTo(null, { limit: 30 })).toBe("");
  });

  test("maxThreeDots false", () => {
    expect(filterLimitTo("Lorem ipsum dolor sit amet, c..", { limit: 30, maxThreeDots: false })).toBe("Lorem ipsum dolor sit amet, c....");
    expect(filterLimitTo("Lorem ipsum dolor sit ame, c...", { limit: 30, maxThreeDots: false })).toBe("Lorem ipsum dolor sit ame, c.....");
  });
});
`,S={name:"PageFilterLimitTo",components:{AlohaPage:E,ATranslation:$,PageFilterArguments:P,PageFilterImportCompositionApi:I,PageFilterImportFunction:A,PageFilterLimitToLimit:M,PageFilterLimitToMaxThreeDots:b,PageFilterTest:D},setup(){const{pageTitle:t}=N(),{argumentsText:s}=y();return{argumentsText:s,pageTitle:t,test:O}}};function j(t,s,m,c,p,T){const r=e("a-translation"),u=e("page-filter-import-function"),f=e("page-filter-import-composition-api"),L=e("page-filter-arguments"),d=e("page-filter-limit-to-limit"),x=e("page-filter-limit-to-max-three-dots"),g=e("page-filter-test"),h=e("aloha-page");return l(),a(h,{"page-title":t.pageTitle},{body:F(()=>[o(r,{tag:"p",html:"_PAGE_FILTER_LIMIT_TO_DESCRIPTION_"}),o(u,{"function-name":"filterLimitTo","type-import":"filters"}),o(f,{"function-name":"filterLimitTo"}),o(L,{"arguments-text":t.argumentsText,"function-description":"filterLimitTo(text, { [limit=30], [maxThreeDots=true] })"},null,8,["arguments-text"]),o(d),o(x),o(g,{test:t.test},null,8,["test"])]),_:1},8,["page-title"])}const q=n(S,[["render",j]]);export{q as default};
