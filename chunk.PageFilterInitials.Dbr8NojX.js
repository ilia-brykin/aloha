import{t as e}from"./chunk.AlohaPage.BvUvrvQ4.js";import{n as t,r as n,t as r}from"./chunk.PageFilterTest.C-ArH7Yp.js";import{t as i}from"./chunk.PageFilterImportCompositionApi.D4dHtW7t.js";import{t as a}from"./chunk.AlohaExample.Bx3NX4bX.js";import{dn as o,mn as s,t as c}from"./bundle.index.LlT2KVEy.js";import{Bt as l,Cn as u,Ht as d,Rt as f,Vt as p,Wt as m,an as h,ln as g,pn as _,qt as v,sn as y}from"./chunk.vendor.SEynj6EJ.js";function b(){return{codeHtml:`<div
  v-for="user in users"
  :key="user.name"
  class="a_d_flex a_align_items_center a_gap_2"
>
  <span
    class="a_rounded_circle a_bg_primary a_color_white a_d_inline_flex a_align_items_center a_justify_content_center"
    style="width: 2.5rem; height: 2.5rem;"
    aria-hidden="true"
  >{{ user.initials }}</span>
  <span>{{ user.name }}</span>
</div>`,codeJs:`import {
  filterInitials,
} from "aloha-vue";

const users = [
  "Ilia Brykin",
  "Anna Maria Schmidt",
  "Ölçer Ünal",
].map(name => ({
  name,
  initials: filterInitials(name),
}));`,users:[`Ilia Brykin`,`Anna Maria Schmidt`,`Ölçer Ünal`].map(e=>({name:e,initials:o(e)}))}}var x={name:`PageFilterInitialsAvatar`,components:{AlohaExample:a},setup(){let{codeHtml:e,codeJs:t,users:n}=b();return{codeHtml:e,codeJs:t,users:n}}},S={class:`a_d_flex a_flex_column a_gap_2`},C={class:`a_rounded_circle a_bg_primary a_color_white a_d_inline_flex a_align_items_center a_justify_content_center`,style:{width:`2.5rem`,height:`2.5rem`},"aria-hidden":`true`};function w(e,t,n,r,i,a){let o=g(`aloha-example`);return h(),d(o,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_PAGE_FILTER_INITIALS_AVATAR_HEADER_`,description:`_PAGE_FILTER_INITIALS_AVATAR_DESCRIPTION_`,"is-code-visible-default":!0},{default:_(()=>[p(`div`,S,[(h(!0),m(f,null,y(e.users,e=>(h(),m(`div`,{class:`a_d_flex a_align_items_center a_gap_2`,key:e.name},[p(`span`,C,u(e.initials),1),p(`span`,null,u(e.name),1)]))),128))])]),_:1},8,[`code-html`,`code-js`])}var T=c(x,[[`render`,w]]);function E(){return{codeJs:l(()=>`filterInitials("Ilia Brykin");
// ${o(`Ilia Brykin`)}

filterInitials("Anna Maria Schmidt");
// ${o(`Anna Maria Schmidt`)}

filterInitials("Anna-Lena Müller");
// ${o(`Anna-Lena Müller`)}

filterInitials("Ölçer Ünal");
// ${o(`Ölçer Ünal`)}

filterInitials("Max");
// ${o(`Max`)}`)}}var D={name:`PageFilterInitialsExample`,components:{AlohaExample:a},setup(){let{codeJs:e}=E();return{codeJs:e}}};function O(e,t,n,r,i,a){let o=g(`aloha-example`);return h(),d(o,{"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,"is-code-visible-default":!0},null,8,[`code-js`])}var k=c(D,[[`render`,O]]);function A(){return{codeJs:l(()=>`filterInitials("anna schmidt", { isUppercase: false });
// ${o(`anna schmidt`,{isUppercase:!1})}`)}}var j={name:`PageFilterInitialsIsUppercase`,components:{AlohaExample:a},setup(){let{codeJs:e}=A();return{codeJs:e}}};function M(e,t,n,r,i,a){let o=g(`aloha-example`);return h(),d(o,{"code-js":e.codeJs,header:`isUppercase`,"is-code-visible-default":!0},null,8,[`code-js`])}var N=c(j,[[`render`,M]]);function P(){return{codeJs:l(()=>`filterInitials("Anna Maria Schmidt", { limit: 3 });
// ${o(`Anna Maria Schmidt`,{limit:3})}

filterInitials("Anna Maria Schmidt", { limit: 1 });
// ${o(`Anna Maria Schmidt`,{limit:1})}`)}}var F={name:`PageFilterInitialsLimit`,components:{AlohaExample:a},setup(){let{codeJs:e}=P();return{codeJs:e}}};function I(e,t,n,r,i,a){let o=g(`aloha-example`);return h(),d(o,{"code-js":e.codeJs,header:`limit`,"is-code-visible-default":!0},null,8,[`code-js`])}var L=c(F,[[`render`,I]]);function R(){return{argumentsText:[{value:`value`,types:[`String`],text:`_PAGE_FILTER_INITIALS_ARGUMENTS_VALUE_`},{value:`[limit=2]`,types:[`Number`],text:`_PAGE_FILTER_INITIALS_ARGUMENTS_LIMIT_`},{value:`[isUppercase=true]`,types:[`Boolean`],text:`_PAGE_FILTER_INITIALS_ARGUMENTS_IS_UPPERCASE_`}]}}function z(){return{pageTitle:`filterInitials`}}var B=`import {
  describe,
  expect,
  it,
} from "vitest";

import filterInitials from "../filterInitials.js";

describe("filterInitials", () => {
  it("default", () => {
    expect(filterInitials("Ilia Brykin")).toBe("IB");
    expect(filterInitials("anna maria schmidt")).toBe("AS");
    expect(filterInitials("Anna-Lena Schmidt")).toBe("AS");
    expect(filterInitials("  Max  ")).toBe("M");
    expect(filterInitials("Ölçer Ünal")).toBe("ÖÜ");
    expect(filterInitials("Иван Петров")).toBe("ИП");
    expect(filterInitials("(Max) Mustermann")).toBe("MM");
  });

  it("limit", () => {
    expect(filterInitials("Anna Maria Schmidt", { limit: 3 })).toBe("AMS");
    expect(filterInitials("Anna Maria Schmidt", { limit: 1 })).toBe("A");
    expect(filterInitials("Anna Maria Schmidt", { limit: 0 })).toBe("");
  });

  it("isUppercase", () => {
    expect(filterInitials("anna schmidt", { isUppercase: false })).toBe("as");
  });

  it("empty values", () => {
    expect(filterInitials(undefined)).toBe("");
    expect(filterInitials(null)).toBe("");
    expect(filterInitials("")).toBe("");
    expect(filterInitials(" - ")).toBe("");
  });
});
`,V={name:`PageFilterInitials`,components:{AlohaPage:e,ATranslation:s,PageFilterArguments:n,PageFilterImportCompositionApi:i,PageFilterImportFunction:t,PageFilterInitialsAvatar:T,PageFilterInitialsExample:k,PageFilterInitialsIsUppercase:N,PageFilterInitialsLimit:L,PageFilterTest:r},setup(){let{pageTitle:e}=z(),{argumentsText:t}=R();return{argumentsText:t,pageTitle:e,test:B}}};function H(e,t,n,r,i,a){let o=g(`a-translation`),s=g(`page-filter-import-function`),c=g(`page-filter-import-composition-api`),l=g(`page-filter-arguments`),u=g(`page-filter-initials-example`),f=g(`page-filter-initials-limit`),p=g(`page-filter-initials-is-uppercase`),m=g(`page-filter-initials-avatar`),y=g(`page-filter-test`),b=g(`aloha-page`);return h(),d(b,{"page-title":e.pageTitle},{body:_(()=>[v(o,{tag:`p`,html:`_PAGE_FILTER_INITIALS_DESCRIPTION_`}),v(s,{"function-name":`filterInitials`,"type-import":`filters`}),v(c,{"function-name":`filterInitials`}),v(l,{"arguments-text":e.argumentsText,"function-description":`filterInitials(value, { [limit=2], [isUppercase=true] })`},null,8,[`arguments-text`]),v(u),v(f),v(p),v(m),v(y,{test:e.test},null,8,[`test`])]),_:1},8,[`page-title`])}var U=c(V,[[`render`,H]]);export{U as default};