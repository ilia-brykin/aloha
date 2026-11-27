import{t as e}from"./chunk.AlohaPage.BIw9NYpI.js";import{n as t,r as n,t as r}from"./chunk.PageFilterTest.CI3luh4y.js";import{t as i}from"./chunk.PageFilterImportCompositionApi.CoQWM7Rj.js";import{t as a}from"./chunk.AlohaExample.CEueonn8.js";import{dn as o,mn as s,t as c}from"./bundle.index.Dor-y9Rj.js";import{Gt as l,Ht as u,Jt as d,Ut as f,Vt as p,cn as m,mn as h,on as g,un as _,wn as v,zt as y}from"./chunk.vendor.Bjd2408Z.js";function b(){return{codeHtml:`<div
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
}));`,users:[`Ilia Brykin`,`Anna Maria Schmidt`,`Ölçer Ünal`].map(e=>({name:e,initials:o(e)}))}}var x={name:`PageFilterInitialsAvatar`,components:{AlohaExample:a},setup(){let{codeHtml:e,codeJs:t,users:n}=b();return{codeHtml:e,codeJs:t,users:n}}},S={class:`a_d_flex a_flex_column a_gap_2`},C={class:`a_rounded_circle a_bg_primary a_color_white a_d_inline_flex a_align_items_center a_justify_content_center`,style:{width:`2.5rem`,height:`2.5rem`},"aria-hidden":`true`};function w(e,t,n,r,i,a){let o=_(`aloha-example`);return g(),f(o,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_PAGE_FILTER_INITIALS_AVATAR_HEADER_`,description:`_PAGE_FILTER_INITIALS_AVATAR_DESCRIPTION_`,"is-code-visible-default":!0},{default:h(()=>[u(`div`,S,[(g(!0),l(y,null,m(e.users,e=>(g(),l(`div`,{class:`a_d_flex a_align_items_center a_gap_2`,key:e.name},[u(`span`,C,v(e.initials),1),u(`span`,null,v(e.name),1)]))),128))])]),_:1},8,[`code-html`,`code-js`])}var T=c(x,[[`render`,w]]);function E(){return{codeJs:p(()=>`filterInitials("Ilia Brykin");
// ${o(`Ilia Brykin`)}

filterInitials("Anna Maria Schmidt");
// ${o(`Anna Maria Schmidt`)}

filterInitials("Anna-Lena Müller");
// ${o(`Anna-Lena Müller`)}

filterInitials("Ölçer Ünal");
// ${o(`Ölçer Ünal`)}

filterInitials("Max");
// ${o(`Max`)}`)}}var D={name:`PageFilterInitialsExample`,components:{AlohaExample:a},setup(){let{codeJs:e}=E();return{codeJs:e}}};function O(e,t,n,r,i,a){let o=_(`aloha-example`);return g(),f(o,{"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,"is-code-visible-default":!0},null,8,[`code-js`])}var k=c(D,[[`render`,O]]);function A(){return{codeJs:p(()=>`filterInitials("anna schmidt", { isUppercase: false });
// ${o(`anna schmidt`,{isUppercase:!1})}`)}}var j={name:`PageFilterInitialsIsUppercase`,components:{AlohaExample:a},setup(){let{codeJs:e}=A();return{codeJs:e}}};function M(e,t,n,r,i,a){let o=_(`aloha-example`);return g(),f(o,{"code-js":e.codeJs,header:`isUppercase`,"is-code-visible-default":!0},null,8,[`code-js`])}var N=c(j,[[`render`,M]]);function P(){return{codeJs:p(()=>`filterInitials("Anna Maria Schmidt", { limit: 3 });
// ${o(`Anna Maria Schmidt`,{limit:3})}

filterInitials("Anna Maria Schmidt", { limit: 1 });
// ${o(`Anna Maria Schmidt`,{limit:1})}`)}}var F={name:`PageFilterInitialsLimit`,components:{AlohaExample:a},setup(){let{codeJs:e}=P();return{codeJs:e}}};function I(e,t,n,r,i,a){let o=_(`aloha-example`);return g(),f(o,{"code-js":e.codeJs,header:`limit`,"is-code-visible-default":!0},null,8,[`code-js`])}var L=c(F,[[`render`,I]]);function R(){return{argumentsText:[{value:`value`,types:[`String`],text:`_PAGE_FILTER_INITIALS_ARGUMENTS_VALUE_`},{value:`[limit=2]`,types:[`Number`],text:`_PAGE_FILTER_INITIALS_ARGUMENTS_LIMIT_`},{value:`[isUppercase=true]`,types:[`Boolean`],text:`_PAGE_FILTER_INITIALS_ARGUMENTS_IS_UPPERCASE_`}]}}function z(){return{pageTitle:`filterInitials`}}var B=`import {
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
`,V={name:`PageFilterInitials`,components:{AlohaPage:e,ATranslation:s,PageFilterArguments:n,PageFilterImportCompositionApi:i,PageFilterImportFunction:t,PageFilterInitialsAvatar:T,PageFilterInitialsExample:k,PageFilterInitialsIsUppercase:N,PageFilterInitialsLimit:L,PageFilterTest:r},setup(){let{pageTitle:e}=z(),{argumentsText:t}=R();return{argumentsText:t,pageTitle:e,test:B}}};function H(e,t,n,r,i,a){let o=_(`a-translation`),s=_(`page-filter-import-function`),c=_(`page-filter-import-composition-api`),l=_(`page-filter-arguments`),u=_(`page-filter-initials-example`),p=_(`page-filter-initials-limit`),m=_(`page-filter-initials-is-uppercase`),v=_(`page-filter-initials-avatar`),y=_(`page-filter-test`),b=_(`aloha-page`);return g(),f(b,{"page-title":e.pageTitle},{body:h(()=>[d(o,{tag:`p`,html:`_PAGE_FILTER_INITIALS_DESCRIPTION_`}),d(s,{"function-name":`filterInitials`,"type-import":`filters`}),d(c,{"function-name":`filterInitials`}),d(l,{"arguments-text":e.argumentsText,"function-description":`filterInitials(value, { [limit=2], [isUppercase=true] })`},null,8,[`arguments-text`]),d(u),d(p),d(m),d(v),d(y,{test:e.test},null,8,[`test`])]),_:1},8,[`page-title`])}var U=c(V,[[`render`,H]]);export{U as default};