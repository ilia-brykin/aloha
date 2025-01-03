import{A as _,a as E}from"./chunk.AlohaExample.cTOk7xT4.js";import{aj as i,_ as n,A as $}from"./bundle.index.SPVPGWdh.js";import{P,a as A,b as D}from"./chunk.PageFilterTest.D-N4odJA.js";import{P as I}from"./chunk.PageFilterImportCompositionApi.D9z6xteT.js";import{k as e,J as a,H as l,aQ as F,O as o}from"./chunk.vendor.DLLz6Lf-.js";import"./chunk.vendor-lodash.8DDoa4UG.js";import"./chunk.APageTabTitle.CG33Ucqu.js";import"./chunk.AlohaHighlightjs.By9QHzu7.js";import"./chunk.translations-ar.CGL8aVo9.js";import"./chunk.translations-de.RdwLQ5AB.js";import"./chunk.translations-en.DDBINhYl.js";import"./chunk.translations-es.Db8DPcgi.js";import"./chunk.translations-fr.Bj0H1VLd.js";import"./chunk.translations-hr.D6Hyl4N8.js";import"./chunk.translations-it.BR5rbHtH.js";import"./chunk.translations-ru.BkDZ_0rg.js";function X(){const t="Lorem ipsum dolor sit amet consectetur adipisicing elit";return{codeJs:`const TEXT = "Lorem ipsum dolor sit amet consectetur adipisicing elit";

filterList(TEXT);
// ${i(t)}

filterList(TEXT, { limit: 10 });
// ${i(t,{limit:10})}

filterList(TEXT, { limit: 100 });
// ${i(t,{limit:100})}`}}const B={name:"PageFilterLimitToLimit",components:{AlohaExample:_},setup(){const{codeJs:t}=X();return{codeJs:t}}};function J(t,r,s,p,c,T){const m=e("aloha-example");return l(),a(m,{"code-js":t.codeJs,header:"limit","is-code-visible-default":!0},null,8,["code-js"])}const M=n(B,[["render",J]]);function R(){const t="Aloha...";return{codeJs:`const TEXT = "Aloha...";

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
// ${i(t,{limit:5,maxThreeDots:!1})}`}}const v={name:"PageFilterLimitToMaxThreeDots",components:{AlohaExample:_},setup(){const{codeJs:t}=R();return{codeJs:t}}};function G(t,r,s,p,c,T){const m=e("aloha-example");return l(),a(m,{"code-js":t.codeJs,header:"maxThreeDots","is-code-visible-default":!0},null,8,["code-js"])}const O=n(v,[["render",G]]);function b(){return{argumentsText:[{value:"text",types:["String"],text:"_PAGE_FILTER_LIMIT_TO_ARGUMENTS_TEXT_"},{value:"[limit=30]",types:["Number"],text:"_PAGE_FILTER_LIMIT_TO_ARGUMENTS_LIMIT_"},{value:"[maxThreeDots=true]",types:["Boolean"],text:"_PAGE_FILTER_LIMIT_TO_ARGUMENTS_MAX_THREE_DOTS_"}]}}function y(){return{pageTitle:"filterLimitTo"}}const N=`import filterLimitTo from "../filterLimitTo";

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
`,S={name:"PageFilterLimitTo",components:{AlohaPage:E,ATranslation:$,PageFilterArguments:P,PageFilterImportCompositionApi:I,PageFilterImportFunction:A,PageFilterLimitToLimit:M,PageFilterLimitToMaxThreeDots:O,PageFilterTest:D},setup(){const{pageTitle:t}=y(),{argumentsText:r}=b();return{argumentsText:r,pageTitle:t,test:N}}};function j(t,r,s,p,c,T){const m=e("a-translation"),u=e("page-filter-import-function"),f=e("page-filter-import-composition-api"),L=e("page-filter-arguments"),d=e("page-filter-limit-to-limit"),x=e("page-filter-limit-to-max-three-dots"),g=e("page-filter-test"),h=e("aloha-page");return l(),a(h,{"page-title":t.pageTitle},{body:F(()=>[o(m,{tag:"p",html:"_PAGE_FILTER_LIMIT_TO_DESCRIPTION_"}),o(u,{"function-name":"filterLimitTo","type-import":"filters"}),o(f,{"function-name":"filterLimitTo"}),o(L,{"arguments-text":t.argumentsText,"function-description":"filterLimitTo(text, { [limit=30], [maxThreeDots=true] })"},null,8,["arguments-text"]),o(d),o(x),o(g,{test:t.test},null,8,["test"])]),_:1},8,["page-title"])}const ot=n(S,[["render",j]]);export{ot as default};
