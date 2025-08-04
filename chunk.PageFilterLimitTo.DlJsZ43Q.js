import{A as _,a as E}from"./chunk.AlohaExample.BCtkijZ7.js";import{P as $,a as P,b as A}from"./chunk.PageFilterTest.Eoq9_4WL.js";import{P as D}from"./chunk.PageFilterImportCompositionApi.Lr9kbAcb.js";import{au as i,_ as n,A as I}from"./bundle.index.QHguqoOB.js";import{V as a,e,W as l,aT as F,_ as o}from"./chunk.vendor.DOXCeh_m.js";import"./chunk.vendor-lodash.xKfd5mqF.js";import"./chunk.APageTabTitle.D36kz1jJ.js";import"./chunk.AlohaHighlightjs.DItoDPrl.js";import"./chunk.translations-ar.BojwqMl_.js";import"./chunk.translations-de.Cs8AX5zd.js";import"./chunk.translations-en.B6SbFZD7.js";import"./chunk.translations-es.Bq5-ThmB.js";import"./chunk.translations-fr.CNUiPhMd.js";import"./chunk.translations-hr.BHL5VI6-.js";import"./chunk.translations-it.CT6ME8Ab.js";import"./chunk.translations-ru.-V16kngL.js";function X(){const t="Lorem ipsum dolor sit amet consectetur adipisicing elit";return{codeJs:`const TEXT = "Lorem ipsum dolor sit amet consectetur adipisicing elit";

filterList(TEXT);
// ${i(t)}

filterList(TEXT, { limit: 10 });
// ${i(t,{limit:10})}

filterList(TEXT, { limit: 100 });
// ${i(t,{limit:100})}`}}const B={name:"PageFilterLimitToLimit",components:{AlohaExample:_},setup(){const{codeJs:t}=X();return{codeJs:t}}};function M(t,r,s,p,c,T){const m=e("aloha-example");return l(),a(m,{"code-js":t.codeJs,header:"limit","is-code-visible-default":!0},null,8,["code-js"])}const J=n(B,[["render",M]]);function R(){const t="Aloha...";return{codeJs:`const TEXT = "Aloha...";

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
// ${i(t,{limit:5,maxThreeDots:!1})}`}}const b={name:"PageFilterLimitToMaxThreeDots",components:{AlohaExample:_},setup(){const{codeJs:t}=R();return{codeJs:t}}};function v(t,r,s,p,c,T){const m=e("aloha-example");return l(),a(m,{"code-js":t.codeJs,header:"maxThreeDots","is-code-visible-default":!0},null,8,["code-js"])}const G=n(b,[["render",v]]);function y(){return{argumentsText:[{value:"text",types:["String"],text:"_PAGE_FILTER_LIMIT_TO_ARGUMENTS_TEXT_"},{value:"[limit=30]",types:["Number"],text:"_PAGE_FILTER_LIMIT_TO_ARGUMENTS_LIMIT_"},{value:"[maxThreeDots=true]",types:["Boolean"],text:"_PAGE_FILTER_LIMIT_TO_ARGUMENTS_MAX_THREE_DOTS_"}]}}function N(){return{pageTitle:"filterLimitTo"}}const O=`import {
  describe,
  expect,
  it,
} from "@jest/globals";

import filterLimitTo from "../filterLimitTo";

describe("filterLimitTo", () => {
  it("text exactly at limit", () => {
    expect(filterLimitTo("Lorem ipsum dolor sit amet, cons", { limit: 30 })).toBe("Lorem ipsum dolor sit amet, co...");
  });

  it("long text exceeding limit", () => {
    expect(filterLimitTo("Lorem ipsum dolor sit amet, consectetur adipiscing elit", { limit: 30 })).toBe("Lorem ipsum dolor sit amet, co...");
  });

  it("text ending with a period", () => {
    expect(filterLimitTo("Lorem ipsum dolor sit amet.", { limit: 30 })).toBe("Lorem ipsum dolor sit amet.");
  });

  it("text with multiple periods at the end", () => {
    expect(filterLimitTo("Lorem ipsum dolor sit amet...", { limit: 30 })).toBe("Lorem ipsum dolor sit amet...");
  });

  it("numeric value treated as text", () => {
    expect(filterLimitTo(1234567890, { limit: 10 })).toBe("1234567890");
    expect(filterLimitTo(1234567890, { limit: 9 })).toBe("123456789...");
  });

  it("null value", () => {
    expect(filterLimitTo(null, { limit: 30 })).toBe("");
  });

  it("maxThreeDots false", () => {
    expect(filterLimitTo("Lorem ipsum dolor sit amet, c..", { limit: 30, maxThreeDots: false })).toBe("Lorem ipsum dolor sit amet, c....");
    expect(filterLimitTo("Lorem ipsum dolor sit ame, c...", { limit: 30, maxThreeDots: false })).toBe("Lorem ipsum dolor sit ame, c.....");
  });
});
`,S={name:"PageFilterLimitTo",components:{AlohaPage:E,ATranslation:I,PageFilterArguments:A,PageFilterImportCompositionApi:D,PageFilterImportFunction:P,PageFilterLimitToLimit:J,PageFilterLimitToMaxThreeDots:G,PageFilterTest:$},setup(){const{pageTitle:t}=N(),{argumentsText:r}=y();return{argumentsText:r,pageTitle:t,test:O}}};function j(t,r,s,p,c,T){const m=e("a-translation"),u=e("page-filter-import-function"),f=e("page-filter-import-composition-api"),d=e("page-filter-arguments"),L=e("page-filter-limit-to-limit"),x=e("page-filter-limit-to-max-three-dots"),g=e("page-filter-test"),h=e("aloha-page");return l(),a(h,{"page-title":t.pageTitle},{body:F(()=>[o(m,{tag:"p",html:"_PAGE_FILTER_LIMIT_TO_DESCRIPTION_"}),o(u,{"function-name":"filterLimitTo","type-import":"filters"}),o(f,{"function-name":"filterLimitTo"}),o(d,{"arguments-text":t.argumentsText,"function-description":"filterLimitTo(text, { [limit=30], [maxThreeDots=true] })"},null,8,["arguments-text"]),o(L),o(x),o(g,{test:t.test},null,8,["test"])]),_:1},8,["page-title"])}const ot=n(S,[["render",j]]);export{ot as default};
