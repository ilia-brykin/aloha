import{A as x,a as A}from"./chunk.AlohaExample.hQI5Jr0F.js";import{au as o,_ as r,A as E}from"./bundle.index.CGdZpDI2.js";import{P as I,a as J,b as F}from"./chunk.PageFilterTest.NRL-fUhD.js";import{P as b}from"./chunk.PageFilterImportCompositionApi.Cl5IXcK_.js";import{k as t,Q as s,O as p,aR as C,V as a}from"./chunk.vendor.CQXHzgd8.js";import"./chunk.vendor-lodash.Cdu0tpky.js";import"./chunk.APageTabTitle.BoJJkmX0.js";import"./chunk.AlohaHighlightjs.dTNt8W7q.js";import"./chunk.translations-ar.Bl94ryzA.js";import"./chunk.translations-de.B7d9jdMO.js";import"./chunk.translations-en.BtgGWXka.js";import"./chunk.translations-es.BSOZWCCF.js";import"./chunk.translations-fr.CcWHH1cx.js";import"./chunk.translations-hr.CJ7NF5Fz.js";import"./chunk.translations-it.DU_NwUPS.js";import"./chunk.translations-ru.FgtNK4nl.js";function R(){return{codeJs:`filterLink("example.com");
// ${o("example.com")}

filterLink("https://example.com");
// ${o("https://example.com")}`}}const N={name:"PageFilterLinkExample",components:{AlohaExample:x},setup(){const{codeJs:e}=R();return{codeJs:e}}};function S(e,l,i,c,m,_){const n=t("aloha-example");return p(),s(n,{"code-js":e.codeJs,header:"_A_BASIC_USAGE_","is-code-visible-default":!0},null,8,["code-js"])}const v=r(N,[["render",S]]);function B(){return{codeJs:`filterLink("example.com", { linkClass: "a_btn a_btn_link" });
// ${o("example.com",{linkClass:"a_btn a_btn_link"})}`}}const G={name:"PageFilterLinkLinkClass",components:{AlohaExample:x},setup(){const{codeJs:e}=B();return{codeJs:e}}};function j(e,l,i,c,m,_){const n=t("aloha-example");return p(),s(n,{"code-js":e.codeJs,header:"linkClass","is-code-visible-default":!0},null,8,["code-js"])}const K=r(G,[["render",j]]);function U(){return{codeJs:`filterLink("example.com", { linkText: "example" });
// ${o("example.com",{linkText:"example"})}

filterLink("https://example.com", { linkText: "Aloha" });
// ${o("https://example.com",{linkText:"Aloha"})}`}}const y={name:"PageFilterLinkLinkText",components:{AlohaExample:x},setup(){const{codeJs:e}=U();return{codeJs:e}}};function w(e,l,i,c,m,_){const n=t("aloha-example");return p(),s(n,{"code-js":e.codeJs,header:"linkText","is-code-visible-default":!0},null,8,["code-js"])}const M=r(y,[["render",w]]);function O(){return{codeJs:`filterLink("example.com", { protocol: "" });
// ${o("example.com",{protocol:""})}

filterLink("https://example.com", { protocol: "http://" });
// ${o("example.com",{protocol:"http://"})}`}}const V={name:"PageFilterLinkProtocol",components:{AlohaExample:x},setup(){const{codeJs:e}=O();return{codeJs:e}}};function D(e,l,i,c,m,_){const n=t("aloha-example");return p(),s(n,{"code-js":e.codeJs,header:"protocol","is-code-visible-default":!0},null,8,["code-js"])}const Q=r(V,[["render",D]]);function X(){return{codeJs:`filterLink("example.com", { target: "_blank" });
// ${o("example.com",{target:"_blank"})}

filterLink("https://example.com", { target: "_self" });
// ${o("example.com",{target:"_self"})}

filterLink("https://example.com", { target: "_parent" });
// ${o("example.com",{target:"_parent"})}

filterLink("https://example.com", { target: "_top" });
// ${o("example.com",{target:"_top"})}`}}const q={name:"PageFilterLinkTarget",components:{AlohaExample:x},setup(){const{codeJs:e}=X();return{codeJs:e}}};function z(e,l,i,c,m,_){const n=t("aloha-example");return p(),s(n,{"code-js":e.codeJs,header:"target","is-code-visible-default":!0},null,8,["code-js"])}const H=r(q,[["render",z]]);function W(){return{argumentsText:[{value:"url",types:["String"],text:"_PAGE_FILTER_LINK_ARGUMENTS_URL_"},{value:'[linkText=""]',types:["String"],text:"_PAGE_FILTER_LINK_ARGUMENTS_LINK_TEXT_"},{value:'[protocol="https://"]',types:["String"],text:"_PAGE_FILTER_LINK_ARGUMENTS_PROTOCOL_"},{value:'[target=""]',types:["String"],text:"_PAGE_FILTER_LINK_ARGUMENTS_TARGET_"},{value:'[linkClass=""]',types:["String"],text:"_PAGE_FILTER_LINK_ARGUMENTS_LINK_CLASS_"}]}}function Y(){return{pageTitle:"filterLink"}}const Z=`import filterLink from "../filterLink";

describe("filterLink", () => {
  test("default behavior", () => {
    expect(filterLink("example.com")).toBe("<a href=\\"https://example.com\\">example.com</a>");
    expect(filterLink("http://example.com")).toBe("<a href=\\"http://example.com\\">http://example.com</a>");
  });

  test("with linkText", () => {
    expect(filterLink("example.com", { linkText: "Example" })).toBe("<a href=\\"https://example.com\\">Example</a>");
  });

  test("with protocol", () => {
    expect(filterLink("example.com", { protocol: "http://" })).toBe("<a href=\\"http://example.com\\">example.com</a>");
  });

  test("with target", () => {
    expect(filterLink("example.com", { target: "_blank" })).toBe("<a href=\\"https://example.com\\" target=\\"_blank\\">example.com</a>");
  });

  test("with linkClass", () => {
    expect(filterLink("example.com", { linkClass: "custom-class" })).toBe("<a href=\\"https://example.com\\" class=\\"custom-class\\">example.com</a>");
  });

  test("invalid URL", () => {
    expect(filterLink(null)).toBe("");
    expect(filterLink(undefined)).toBe("");
    expect(filterLink(123)).toBe("");
  });

  test("combined options", () => {
    expect(filterLink("example.com", { linkText: "Example", target: "_blank", linkClass: "custom-class" }))
      .toBe("<a href=\\"https://example.com\\" target=\\"_blank\\" class=\\"custom-class\\">Example</a>");
  });
});
`,ee={name:"PageFilterLink",components:{AlohaPage:A,ATranslation:E,PageFilterArguments:I,PageFilterImportCompositionApi:b,PageFilterImportFunction:J,PageFilterLinkExample:v,PageFilterLinkLinkClass:K,PageFilterLinkLinkText:M,PageFilterLinkProtocol:Q,PageFilterLinkTarget:H,PageFilterTest:F},setup(){const{pageTitle:e}=Y(),{argumentsText:l}=W();return{argumentsText:l,pageTitle:e,test:Z}}};function te(e,l,i,c,m,_){const n=t("a-translation"),f=t("page-filter-import-function"),u=t("page-filter-import-composition-api"),k=t("page-filter-arguments"),g=t("page-filter-link-example"),d=t("page-filter-link-link-text"),L=t("page-filter-link-protocol"),h=t("page-filter-link-target"),$=t("page-filter-link-link-class"),T=t("page-filter-test"),P=t("aloha-page");return p(),s(P,{"page-title":e.pageTitle},{body:C(()=>[a(n,{tag:"p",html:"_PAGE_FILTER_LINK_DESCRIPTION_"}),a(f,{"function-name":"filterLink","type-import":"filters"}),a(u,{"function-name":"filterLink"}),a(k,{"arguments-text":e.argumentsText,"function-description":'filterLink(url, { [linkText=""], [protocol="https://"], [target=""], [linkClass=""] })'},null,8,["arguments-text"]),a(g),a(d),a(L),a(h),a($),a(T,{test:e.test},null,8,["test"])]),_:1},8,["page-title"])}const de=r(ee,[["render",te]]);export{de as default};
