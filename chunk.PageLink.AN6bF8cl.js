import{t as e}from"./chunk.AlohaPage.BIw9NYpI.js";import{t}from"./chunk.AlohaTableProps.9D5sSTzx.js";import{t as n}from"./chunk.AlohaExample.CEueonn8.js";import{hn as r,mn as ee,rn as i,sn as a,t as o}from"./bundle.index.Dor-y9Rj.js";import{Ht as s,Jt as c,Ut as l,Vt as u,_n as d,mn as f,on as p,un as m}from"./chunk.vendor.Bjd2408Z.js";function h(){return{codeHtml:`<a-Link
  text="https://github.com/"
  href="https://github.com/"
>
</a-Link>
<a-Link
  class="a_ml_2"
  text="Aloha"
  :to="{ name: 'PageButton' }"
>
</a-Link>
<a-Link
  class="a_ml_2"
  text="Aloha"
  to="/button"
>
</a-Link>`}}function g(){return{codeJs:`import { 
  ALink,
} from "aloha-vue";
    
export default {
  name: "PageLinkBasic",
  components: {
    ALink,
  },
};`}}var _={name:`PageLinkBasic`,components:{ALink:i,AlohaExample:n},setup(){let{codeHtml:e}=h(),{codeJs:t}=g();return{codeHtml:e,codeJs:t}}};function v(e,t,n,r,ee,i){let a=m(`a-link`),o=m(`aloha-example`);return p(),l(o,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,props:[`text`,`href`,`to`]},{default:f(()=>[c(a,{text:`https://github.com/`,href:`https://github.com/`}),c(a,{class:`a_ml_2`,text:`Aloha`,to:{name:`PageButton`}}),c(a,{class:`a_ml_2`,text:`Aloha`,to:`/button`})]),_:1},8,[`code-html`,`code-js`])}var y=o(_,[[`render`,v]]);function b(){return{codeHtml:`<a-link
  class="a_btn a_btn_link"
  text="link"
  href="https://github.com/"
>
</a-link>
<a-link
  class="a_btn a_btn_primary a_ml_2"
  text="primary"
  href="https://github.com/"
>
</a-link>
<a-link
  class="a_btn a_btn_secondary a_ml_2"
  text="secondary"
  href="https://github.com/"
>
</a-link>
<a-link
  class="a_btn a_btn_tertiary a_ml_2"
  text="tertiary"
  href="https://github.com/"
>
</a-link>
<a-link
  class="a_btn a_btn_success a_ml_2"
  text="success"
  href="https://github.com/"
>
</a-link>
<a-link
  class="a_btn a_btn_info a_ml_2"
  text="info"
  href="https://github.com/"
>
</a-link>
<a-link
  class="a_btn a_btn_warning a_ml_2"
  text="warning"
  href="https://github.com/"
>
</a-link>
<a-link
  class="a_btn a_btn_danger a_ml_2"
  text="danger"
  href="https://github.com/"
>
</a-link>
<a-link
  class="a_btn a_btn_dark a_ml_2"
  text="dark"
  href="https://github.com/"
>
</a-link>
<a-link
  class="a_btn a_btn_light a_ml_2"
  text="light"
  href="https://github.com/"
>
</a-link>`}}function x(){return{codeJs:`import Alink from "aloha-vue/src/Alink/Alink";
    
export default {
  name: "PageLinkClass",
  components: {
    Alink,
  },
};`}}var S={name:`PageLinkClass`,components:{ALink:i,AlohaExample:n},setup(){let{codeHtml:e}=b(),{codeJs:t}=x();return{codeHtml:e,codeJs:t}}};function C(e,t,n,r,ee,i){let a=m(`a-link`),o=m(`aloha-example`);return p(),l(o,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_LINK_GROUP_CLASS_HEADER_`,description:`_A_LINK_GROUP_CLASS_DESCRIPTION_`,props:`class`},{default:f(()=>[c(a,{class:`a_btn a_btn_link`,text:`link`,href:`https://github.com/`}),c(a,{class:`a_btn a_btn_primary a_ml_2`,text:`primary`,href:`https://github.com/`}),c(a,{class:`a_btn a_btn_secondary a_ml_2`,text:`secondary`,href:`https://github.com/`}),c(a,{class:`a_btn a_btn_tertiary a_ml_2`,text:`tertiary`,href:`https://github.com/`}),c(a,{class:`a_btn a_btn_success a_ml_2`,text:`success`,href:`https://github.com/`}),c(a,{class:`a_btn a_btn_info a_ml_2`,text:`info`,href:`https://github.com/`}),c(a,{class:`a_btn a_btn_warning a_ml_2`,text:`warning`,href:`https://github.com/`}),c(a,{class:`a_btn a_btn_danger a_ml_2`,text:`danger`,href:`https://github.com/`}),c(a,{class:`a_btn a_btn_dark a_ml_2`,text:`dark`,href:`https://github.com/`}),c(a,{class:`a_btn a_btn_light a_ml_2`,text:`light`,href:`https://github.com/`})]),_:1},8,[`code-html`,`code-js`])}var w=o(S,[[`render`,C]]);function T(){return{codeHtml:`<a-link
  class="a_btn a_btn_primary"
  :text="{ desktop: 'Aloha' }"
  :text-before="{ desktop: '$ ' }"
  :icon-left="{ desktop: 'Gear', mobile: 'Code' }"
  :icon-right="{ mobile: 'Code' }"
  :title="{ desktop: 'Aloha' }"
  :text-aria-hidden="true"
  :text-screen-reader="{ desktop: 'Aloha', mobile: 'Aloha-mobile' }"
  href="https://github.com/"
>
</a-link>`}}function E(){return{codeJs:`import { 
  ALink,
} from "aloha-vue";
    
export default {
  name: "PageLinkComplex",
  components: {
    ALink,
  },
};`}}var D={name:`PageLinkComplex`,components:{ALink:i,AlohaExample:n},setup(){let{codeHtml:e}=T(),{codeJs:t}=E();return{codeHtml:e,codeJs:t}}};function O(e,t,n,r,ee,i){let a=m(`a-link`),o=m(`aloha-example`);return p(),l(o,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_LINK_GROUP_COMPLEX_HEADER_`,description:`_A_LINK_GROUP_COMPLEX_DESCRIPTION_`},{default:f(()=>[c(a,{class:`a_btn a_btn_primary`,text:{desktop:`Aloha`},"text-before":{desktop:`$ `},"icon-left":{desktop:`Gear`,mobile:`Code`},"icon-right":{mobile:`Code`},title:{desktop:`Aloha`},"text-aria-hidden":!0,"text-screen-reader":{desktop:`Aloha`,mobile:`Aloha-mobile`},href:`https://github.com/`})]),_:1},8,[`code-html`,`code-js`])}var k=o(D,[[`render`,O]]);function A(){return{codeHtml:`<a-link
  class="a_btn a_btn_link"
  text="primary"
  :disabled="true"
  href="https://github.com/"
>
</a-link>
<a-link
  class="a_btn a_btn_primary a_ml_2"
  text="primary"
  :disabled="true"
  :to="{ name: 'PageButton' }"
>
</a-link>
<a-link
  class="a_btn a_btn_secondary a_ml_2"
  text="secondary"
  :disabled="true"
  href="https://github.com/"
>
</a-link>
<a-link
  class="a_btn a_btn_tertiary a_ml_2"
  text="tertiary"
  :disabled="true"
  href="https://github.com/"
>
</a-link>
<a-link
  class="a_btn a_btn_success a_ml_2"
  text="success"
  :disabled="true"
  href="https://github.com/"
>
</a-link>
<a-link
  class="a_btn a_btn_info a_ml_2"
  text="info"
  :disabled="true"
  href="https://github.com/"
>
</a-link>
<a-link
  class="a_btn a_btn_warning a_ml_2"
  text="warning"
  :disabled="true"
  href="https://github.com/"
>
</a-link>
<a-link
  class="a_btn a_btn_danger a_ml_2"
  text="danger"
  :disabled="true"
  href="https://github.com/"
>
</a-link>
<a-link
  class="a_btn a_btn_dark a_ml_2"
  text="dark"
  :disabled="true"
  href="https://github.com/"
>
</a-link>
<a-link
  class="a_btn a_btn_light a_ml_2"
  text="light"
  :disabled="true"
  href="https://github.com/"
>
</a-link>
<a-link
  class="a_btn a_btn_outline_primary a_ml_2"
  text="outline-primary"
  :disabled="true"
  href="https://github.com/"
>
</a-link>
<a-link
  class="a_btn a_btn_outline_secondary a_ml_2"
  text="outline-secondary"
  :disabled="true"
  href="https://github.com/"
>
</a-link>
<a-link
  class="a_btn a_btn_outline_tertiary a_ml_2"
  text="outline-tertiary"
  :disabled="true"
  href="https://github.com/"
>
</a-link>
<a-link
  class="a_btn a_btn_outline_success a_ml_2"
  text="outline-success"
  :disabled="true"
  href="https://github.com/"
>
</a-link>
<a-link
  class="a_btn a_btn_outline_info a_ml_2"
  text="outline-info"
  :disabled="true"
  href="https://github.com/"
>
</a-link>
<a-link
  class="a_btn a_btn_outline_warning a_ml_2"
  text="outline-warning"
  :disabled="true"
  href="https://github.com/"
>
</a-link>
<a-link
  class="a_btn a_btn_outline_danger a_ml_2"
  text="outline-danger"
  :disabled="true"
  href="https://github.com/"
>
</a-link>
<a-link
  class="a_btn a_btn_outline_dark a_ml_2"
  text="outline-dark"
  :disabled="true"
  href="https://github.com/"
>
</a-link>
<a-link
  class="a_btn a_btn_outline_light a_ml_2"
  text="outline-light"
  :disabled="true"
  href="https://github.com/"
>
</a-link>
<a-link
  class="a_btn a_btn_transparent_primary a_ml_2"
  text="transparent-primary"
  :disabled="true"
  href="https://github.com/"
>
</a-link>
<a-link
  class="a_btn a_btn_transparent_secondary a_ml_2"
  text="transparent-secondary"
  :disabled="true"
  href="https://github.com/"
>
</a-link>
<a-link
  class="a_btn a_btn_transparent_tertiary a_ml_2"
  text="transparent-tertiary"
  :disabled="true"
  href="https://github.com/"
>
</a-link>
<a-link
  class="a_btn a_btn_transparent_success a_ml_2"
  text="transparent-success"
  :disabled="true"
  href="https://github.com/"
>
</a-link>
<a-link
  class="a_btn a_btn_transparent_info a_ml_2"
  text="transparent-info"
  :disabled="true"
  href="https://github.com/"
>
</a-link>
<a-link
  class="a_btn a_btn_transparent_warning a_ml_2"
  text="transparent-warning"
  :disabled="true"
  href="https://github.com/"
>
</a-link>
<a-link
  class="a_btn a_btn_transparent_danger a_ml_2"
  text="transparent-danger"
  :disabled="true"
  href="https://github.com/"
>
</a-link>
<a-link
  class="a_btn a_btn_transparent_dark a_ml_2"
  text="transparent-dark"
  :disabled="true"
  href="https://github.com/"
>
</a-link>
<a-link
  class="a_btn a_btn_transparent_light a_ml_2"
  text="transparent-light"
  :disabled="true"
  href="https://github.com/"
>
</a-link>`}}function j(){return{codeJs:`import { 
  ALink,
} from "aloha-vue";
    
export default {
  name: "PageLinkDisabled",
  components: {
    ALink,
  },
};`}}var M={name:`PageLinkDisabled`,components:{ALink:i,AlohaExample:n},setup(){let{codeHtml:e}=A(),{codeJs:t}=j();return{codeHtml:e,codeJs:t}}};function N(e,t,n,r,ee,i){let a=m(`a-link`),o=m(`aloha-example`);return p(),l(o,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_LINK_GROUP_DISABLED_HEADER_`,description:`_A_LINK_GROUP_DISABLED_DESCRIPTION_`,props:`disabled`},{default:f(()=>[c(a,{class:`a_btn a_btn_link`,text:`primary`,disabled:!0,href:`https://github.com/`}),c(a,{class:`a_btn a_btn_primary a_ml_2`,text:`primary`,disabled:!0,to:{name:`PageButton`}}),c(a,{class:`a_btn a_btn_secondary a_ml_2`,text:`secondary`,disabled:!0,href:`https://github.com/`}),c(a,{class:`a_btn a_btn_tertiary a_ml_2`,text:`tertiary`,disabled:!0,href:`https://github.com/`}),c(a,{class:`a_btn a_btn_success a_ml_2`,text:`success`,disabled:!0,href:`https://github.com/`}),c(a,{class:`a_btn a_btn_info a_ml_2`,text:`info`,disabled:!0,href:`https://github.com/`}),c(a,{class:`a_btn a_btn_warning a_ml_2`,text:`warning`,disabled:!0,href:`https://github.com/`}),c(a,{class:`a_btn a_btn_danger a_ml_2`,text:`danger`,disabled:!0,href:`https://github.com/`}),c(a,{class:`a_btn a_btn_dark a_ml_2`,text:`dark`,disabled:!0,href:`https://github.com/`}),c(a,{class:`a_btn a_btn_light a_ml_2`,text:`light`,disabled:!0,href:`https://github.com/`}),c(a,{class:`a_btn a_btn_outline_primary a_ml_2`,text:`outline-primary`,disabled:!0,href:`https://github.com/`}),c(a,{class:`a_btn a_btn_outline_secondary a_ml_2`,text:`outline-secondary`,disabled:!0,href:`https://github.com/`}),c(a,{class:`a_btn a_btn_outline_tertiary a_ml_2`,text:`outline-tertiary`,disabled:!0,href:`https://github.com/`}),c(a,{class:`a_btn a_btn_outline_success a_ml_2`,text:`outline-success`,disabled:!0,href:`https://github.com/`}),c(a,{class:`a_btn a_btn_outline_info a_ml_2`,text:`outline-info`,disabled:!0,href:`https://github.com/`}),c(a,{class:`a_btn a_btn_outline_warning a_ml_2`,text:`outline-warning`,disabled:!0,href:`https://github.com/`}),c(a,{class:`a_btn a_btn_outline_danger a_ml_2`,text:`outline-danger`,disabled:!0,href:`https://github.com/`}),c(a,{class:`a_btn a_btn_outline_dark a_ml_2`,text:`outline-dark`,disabled:!0,href:`https://github.com/`}),c(a,{class:`a_btn a_btn_outline_light a_ml_2`,text:`outline-light`,disabled:!0,href:`https://github.com/`}),c(a,{class:`a_btn a_btn_transparent_primary a_ml_2`,text:`transparent-primary`,disabled:!0,href:`https://github.com/`}),c(a,{class:`a_btn a_btn_transparent_secondary a_ml_2`,text:`transparent-secondary`,disabled:!0,href:`https://github.com/`}),c(a,{class:`a_btn a_btn_transparent_tertiary a_ml_2`,text:`transparent-tertiary`,disabled:!0,href:`https://github.com/`}),c(a,{class:`a_btn a_btn_transparent_success a_ml_2`,text:`transparent-success`,disabled:!0,href:`https://github.com/`}),c(a,{class:`a_btn a_btn_transparent_info a_ml_2`,text:`transparent-info`,disabled:!0,href:`https://github.com/`}),c(a,{class:`a_btn a_btn_transparent_warning a_ml_2`,text:`transparent-warning`,disabled:!0,href:`https://github.com/`}),c(a,{class:`a_btn a_btn_transparent_danger a_ml_2`,text:`transparent-danger`,disabled:!0,href:`https://github.com/`}),c(a,{class:`a_btn a_btn_transparent_dark a_ml_2`,text:`transparent-dark`,disabled:!0,href:`https://github.com/`}),c(a,{class:`a_btn a_btn_transparent_light a_ml_2`,text:`transparent-light`,disabled:!0,href:`https://github.com/`})]),_:1},8,[`code-html`,`code-js`])}var P=o(M,[[`render`,N]]);function F(){return{codeHtml:`<div
  class="a_btn_group"
>
  <a-link
    class="a_btn a_btn_primary"
    text="primary"
    href="https://github.com/"
  >
  </a-link>
  <a-link
    class="a_btn a_btn_secondary"
    text="secondary"
    href="https://github.com/"
  >
  </a-link>
  <a-link
    class="a_btn a_btn_success"
    text="success"
    href="https://github.com/"
  >
  </a-link>
  <a-link
    class="a_btn a_btn_info"
    text="info"
    href="https://github.com/"
  >
  </a-link>
</div>
<div
  class="a_btn_group a_ml_3"
>
  <a-link
    class="a_btn a_btn_outline_primary"
    text="outline-primary"
    href="https://github.com/"
  >
  </a-link>
  <a-link
    class="a_btn a_btn_outline_secondary"
    text="outline-secondary"
    href="https://github.com/"
  >
  </a-link>
  <a-link
    class="a_btn a_btn_outline_success"
    text="outline-success"
    href="https://github.com/"
  >
  </a-link>
  <a-link
    class="a_btn a_btn_outline_info"
    text="outline-info"
    href="https://github.com/"
  >
  </a-link>
</div>`}}function I(){return{codeJs:`import { 
  ALink,
} from "aloha-vue";
    
export default {
  name: "PageLinkGroup",
  components: {
    ALink,
  },
};`}}var te={name:`PageLinkGroup`,components:{ALink:i,AlohaExample:n},setup(){let{codeHtml:e}=F(),{codeJs:t}=I();return{codeHtml:e,codeJs:t}}},L={class:`a_btn_group`},R={class:`a_btn_group a_ml_3`};function z(e,t,n,r,ee,i){let a=m(`a-link`),o=m(`aloha-example`);return p(),l(o,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_LINK_GROUP_GROUP_HEADER_`,description:`_A_LINK_GROUP_GROUP_DESCRIPTION_`},{default:f(()=>[s(`div`,L,[c(a,{class:`a_btn a_btn_primary`,text:`primary`,href:`https://github.com/`}),c(a,{class:`a_btn a_btn_secondary`,text:`secondary`,href:`https://github.com/`}),c(a,{class:`a_btn a_btn_success`,text:`success`,href:`https://github.com/`}),c(a,{class:`a_btn a_btn_info`,text:`info`,href:`https://github.com/`})]),s(`div`,R,[c(a,{class:`a_btn a_btn_outline_primary`,text:`outline-primary`,href:`https://github.com/`}),c(a,{class:`a_btn a_btn_outline_secondary`,text:`outline-secondary`,href:`https://github.com/`}),c(a,{class:`a_btn a_btn_outline_success`,text:`outline-success`,href:`https://github.com/`}),c(a,{class:`a_btn a_btn_outline_info`,text:`outline-info`,href:`https://github.com/`})])]),_:1},8,[`code-html`,`code-js`])}var B=o(te,[[`render`,z]]);function V(){return{codeHtml:`<div
  class="a_btn_group_vertical"
>
  <div
    class="a_btn_group"
  >
    <a-link
      class="a_btn a_btn_outline_primary"
      text="outline-primary"
      href="https://github.com/"
    >
    </a-link>
    <a-link
      class="a_btn a_btn_outline_secondary"
      text="outline-secondary"
      href="https://github.com/"
    >
    </a-link>
    <a-link
      class="a_btn a_btn_outline_success"
      text="outline-success"
      href="https://github.com/"
    >
    </a-link>
    <a-link
      class="a_btn a_btn_outline_info"
      text="outline-info"
      href="https://github.com/"
    >
    </a-link>
  </div>
  <div
    class="a_btn_group"
  >
    <a-link
      class="a_btn a_btn_outline_primary"
      text="outline-primary"
      href="https://github.com/"
    >
    </a-link>
    <a-link
      class="a_btn a_btn_outline_secondary"
      text="outline-secondary"
      href="https://github.com/"
    >
    </a-link>
    <a-link
      class="a_btn a_btn_outline_success"
      text="outline-success"
      href="https://github.com/"
    >
    </a-link>
    <a-link
      class="a_btn a_btn_outline_info"
      text="outline-info"
      href="https://github.com/"
    >
    </a-link>
  </div>
  <div
    class="a_btn_group"
  >
    <a-link
      class="a_btn a_btn_outline_primary"
      text="outline-primary"
      href="https://github.com/"
    >
    </a-link>
    <a-link
      class="a_btn a_btn_outline_secondary"
      text="outline-secondary"
      href="https://github.com/"
    >
    </a-link>
    <a-link
      class="a_btn a_btn_outline_success"
      text="outline-success"
      href="https://github.com/"
    >
    </a-link>
    <a-link
      class="a_btn a_btn_outline_info"
      text="outline-info"
      href="https://github.com/"
    >
    </a-link>
  </div>
</div>`}}function H(){return{codeJs:`import { 
  ALink,
} from "aloha-vue";
    
export default {
  name: "PageLinkGroupHorizontalVertical",
  components: {
    ALink,
  },
};`}}var U={name:`PageLinkGroupHorizontalVertical`,components:{ALink:i,AlohaExample:n},setup(){let{codeHtml:e}=V(),{codeJs:t}=H();return{codeHtml:e,codeJs:t}}},W={class:`a_btn_group_vertical`},G={class:`a_btn_group`},K={class:`a_btn_group`},q={class:`a_btn_group`};function J(e,t,n,r,ee,i){let a=m(`a-link`),o=m(`aloha-example`);return p(),l(o,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_LINK_GROUP_GROUP_HORIZONTAL_VERTICAL_HEADER_`,description:`_A_LINK_GROUP_GROUP_HORIZONTAL_VERTICAL_DESCRIPTION_`},{default:f(()=>[s(`div`,W,[s(`div`,G,[c(a,{class:`a_btn a_btn_outline_primary`,text:`outline-primary`,href:`https://github.com/`}),c(a,{class:`a_btn a_btn_outline_secondary`,text:`outline-secondary`,href:`https://github.com/`}),c(a,{class:`a_btn a_btn_outline_success`,text:`outline-success`,href:`https://github.com/`}),c(a,{class:`a_btn a_btn_outline_info`,text:`outline-info`,href:`https://github.com/`})]),s(`div`,K,[c(a,{class:`a_btn a_btn_outline_primary`,text:`outline-primary`,href:`https://github.com/`}),c(a,{class:`a_btn a_btn_outline_secondary`,text:`outline-secondary`,href:`https://github.com/`}),c(a,{class:`a_btn a_btn_outline_success`,text:`outline-success`,href:`https://github.com/`}),c(a,{class:`a_btn a_btn_outline_info`,text:`outline-info`,href:`https://github.com/`})]),s(`div`,q,[c(a,{class:`a_btn a_btn_outline_primary`,text:`outline-primary`,href:`https://github.com/`}),c(a,{class:`a_btn a_btn_outline_secondary`,text:`outline-secondary`,href:`https://github.com/`}),c(a,{class:`a_btn a_btn_outline_success`,text:`outline-success`,href:`https://github.com/`}),c(a,{class:`a_btn a_btn_outline_info`,text:`outline-info`,href:`https://github.com/`})])])]),_:1},8,[`code-html`,`code-js`])}var Y=o(U,[[`render`,J]]);function X(){return{codeHtml:`<div
  class="a_btn_group a_btn_group_large"
>
  <a-link
    class="a_btn a_btn_primary"
    text="primary"
    href="https://github.com/"
  >
  </a-link>
  <a-link
    class="a_btn a_btn_secondary"
    text="secondary"
    href="https://github.com/"
  >
  </a-link>
  <a-link
    class="a_btn a_btn_success"
    text="success"
    href="https://github.com/"
  >
  </a-link>
  <a-link
    class="a_btn a_btn_info"
    text="info"
    href="https://github.com/"
  >
  </a-link>
</div>
<div
  class="a_btn_group a_btn_group_small a_ml_3"
>
  <a-link
    class="a_btn a_btn_outline_primary"
    text="outline-primary"
    href="https://github.com/"
  >
  </a-link>
  <a-link
    class="a_btn a_btn_outline_secondary"
    text="outline-secondary"
    href="https://github.com/"
  >
  </a-link>
  <a-link
    class="a_btn a_btn_outline_success"
    text="outline-success"
    href="https://github.com/"
  >
  </a-link>
  <a-link
    class="a_btn a_btn_outline_info"
    text="outline-info"
    href="https://github.com/"
  >
  </a-link>
</div>`}}function Z(){return{codeJs:`import { 
  ALink,
} from "aloha-vue";
    
export default {
  name: "PageLinkGroupSizes",
  components: {
    ALink,
  },
};`}}var Q={name:`PageLinkGroupSizes`,components:{ALink:i,AlohaExample:n},setup(){let{codeHtml:e}=X(),{codeJs:t}=Z();return{codeHtml:e,codeJs:t}}},ne={class:`a_btn_group a_btn_group_large`},re={class:`a_btn_group a_btn_group_small a_ml_3`};function ie(e,t,n,r,ee,i){let a=m(`a-link`),o=m(`aloha-example`);return p(),l(o,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_LINK_GROUP_GROUP_SIZES_HEADER_`,description:`_A_LINK_GROUP_GROUP_SIZES_DESCRIPTION_`},{default:f(()=>[s(`div`,ne,[c(a,{class:`a_btn a_btn_primary`,text:`primary`,href:`https://github.com/`}),c(a,{class:`a_btn a_btn_secondary`,text:`secondary`,href:`https://github.com/`}),c(a,{class:`a_btn a_btn_success`,text:`success`,href:`https://github.com/`}),c(a,{class:`a_btn a_btn_info`,text:`info`,href:`https://github.com/`})]),s(`div`,re,[c(a,{class:`a_btn a_btn_outline_primary`,text:`outline-primary`,href:`https://github.com/`}),c(a,{class:`a_btn a_btn_outline_secondary`,text:`outline-secondary`,href:`https://github.com/`}),c(a,{class:`a_btn a_btn_outline_success`,text:`outline-success`,href:`https://github.com/`}),c(a,{class:`a_btn a_btn_outline_info`,text:`outline-info`,href:`https://github.com/`})])]),_:1},8,[`code-html`,`code-js`])}var ae=o(Q,[[`render`,ie]]);function oe(){return{codeHtml:`<div
  class="a_btn_group_vertical"
>
  <a-link
    class="a_btn a_btn_primary"
    text="primary"
    href="https://github.com/"
  >
  </a-link>
  <a-link
    class="a_btn a_btn_secondary"
    text="secondary"
    href="https://github.com/"
  >
  </a-link>
  <a-link
    class="a_btn a_btn_success"
    text="success"
    href="https://github.com/"
  >
  </a-link>
  <a-link
    class="a_btn a_btn_info"
    text="info"
    href="https://github.com/"
  >
  </a-link>
</div>
<div
  class="a_btn_group_vertical a_ml_3"
>
  <a-link
    class="a_btn a_btn_outline_primary"
    text="outline-primary"
    href="https://github.com/"
  >
  </a-link>
  <a-link
    class="a_btn a_btn_outline_secondary"
    text="outline-secondary"
    href="https://github.com/"
  >
  </a-link>
  <a-link
    class="a_btn a_btn_outline_success"
    text="outline-success"
    href="https://github.com/"
  >
  </a-link>
  <a-link
    class="a_btn a_btn_outline_info"
    text="outline-info"
    href="https://github.com/"
  >
  </a-link>
</div>`}}function se(){return{codeJs:`import { 
  ALink,
} from "aloha-vue";
    
export default {
  name: "PageLinkGroupVertical",
  components: {
    ALink,
  },
};`}}var ce={name:`PageLinkGroupVertical`,components:{ALink:i,AlohaExample:n},setup(){let{codeHtml:e}=oe(),{codeJs:t}=se();return{codeHtml:e,codeJs:t}}},le={class:`a_btn_group_vertical`},ue={class:`a_btn_group_vertical a_ml_3`};function de(e,t,n,r,ee,i){let a=m(`a-link`),o=m(`aloha-example`);return p(),l(o,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_LINK_GROUP_GROUP_VERTICAL_HEADER_`,description:`_A_LINK_GROUP_GROUP_VERTICAL_DESCRIPTION_`},{default:f(()=>[s(`div`,le,[c(a,{class:`a_btn a_btn_primary`,text:`primary`,href:`https://github.com/`}),c(a,{class:`a_btn a_btn_secondary`,text:`secondary`,href:`https://github.com/`}),c(a,{class:`a_btn a_btn_success`,text:`success`,href:`https://github.com/`}),c(a,{class:`a_btn a_btn_info`,text:`info`,href:`https://github.com/`})]),s(`div`,ue,[c(a,{class:`a_btn a_btn_outline_primary`,text:`outline-primary`,href:`https://github.com/`}),c(a,{class:`a_btn a_btn_outline_secondary`,text:`outline-secondary`,href:`https://github.com/`}),c(a,{class:`a_btn a_btn_outline_success`,text:`outline-success`,href:`https://github.com/`}),c(a,{class:`a_btn a_btn_outline_info`,text:`outline-info`,href:`https://github.com/`})])]),_:1},8,[`code-html`,`code-js`])}var fe=o(ce,[[`render`,de]]);function pe(){return{codeHtml:`<a-link
  class="a_btn a_btn_primary"
  html="_A_LINK_EXAMPLE_HTML_"
>
</a-link>
<a-link
  class="a_btn a_btn_primary a_ml_2"
  html="<span onclick='alert(\\"Aloha\\")'>Aloha</button>"
>
</a-link>`}}function me(){return{codeJs:`import { 
  ALink,
} from "aloha-vue";
    
export default {
  name: "PageLinkHtml",
  components: {
    ALink,
  },
};`}}var he={name:`PageLinkHtml`,components:{ALink:i,AlohaExample:n},setup(){let{codeHtml:e}=pe(),{codeJs:t}=me();return{codeHtml:e,codeJs:t}}};function ge(e,t,n,r,ee,i){let a=m(`a-link`),o=m(`aloha-example`);return p(),l(o,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_LINK_GROUP_HTML_HEADER_`,description:`_A_LINK_GROUP_HTML_DESCRIPTION_`,props:`html`},{default:f(()=>[c(a,{class:`a_btn a_btn_primary`,html:`_A_LINK_EXAMPLE_HTML_`}),c(a,{class:`a_btn a_btn_primary a_ml_2`,html:`<span onclick='alert("Aloha")'>Aloha</button>`})]),_:1},8,[`code-html`,`code-js`])}var _e=o(he,[[`render`,ge]]);function ve(){return{codeHtml:`<a-link
  class="a_btn a_btn_primary"
  icon-left="Gear"
  title="GitHub"
  href="https://github.com/"
>
</a-link>
<a-link
  class="a_btn a_btn_primary a_ml_2"
  icon-left="Gear"
  text="Aloha"
  href="https://github.com/"
>
</a-link>
<a-link
  class="a_btn a_btn_primary a_ml_2"
  icon-right="Gear"
  text="Aloha"
  href="https://github.com/"
>
</a-link>
<a-link
  class="a_btn a_btn_primary a_ml_2"
  icon-left="Gear"
  icon-right="Gear"
  text="Aloha"
  href="https://github.com/"
>
</a-link>
<a-link
  class="a_btn a_btn_primary a_ml_2"
  icon-left="Gear"
  icon-right="Gear"
  title="GitHub"
  href="https://github.com/"
>
</a-link>`}}function ye(){return{codeJs:`import { 
  ALink,
} from "aloha-vue";
    
export default {
  name: "PageLinkIcons",
  components: {
    ALink,
  },
};`}}var be={name:`PageLinkIcons`,components:{ALink:i,AlohaExample:n},setup(){let{codeHtml:e}=ve(),{codeJs:t}=ye();return{codeHtml:e,codeJs:t}}};function xe(e,t,n,r,ee,i){let a=m(`a-link`),o=m(`aloha-example`);return p(),l(o,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_LINK_GROUP_ICONS_HEADER_`,description:`_A_LINK_GROUP_ICONS_DESCRIPTION_`,props:[`icon-left`,`icon-right`]},{default:f(()=>[c(a,{class:`a_btn a_btn_primary`,"icon-left":`Gear`,title:`GitHub`,href:`https://github.com/`}),c(a,{class:`a_btn a_btn_primary a_ml_2`,"icon-left":`Gear`,text:`Aloha`,href:`https://github.com/`}),c(a,{class:`a_btn a_btn_primary a_ml_2`,"icon-right":`Gear`,text:`Aloha`,href:`https://github.com/`}),c(a,{class:`a_btn a_btn_primary a_ml_2`,"icon-left":`Gear`,"icon-right":`Gear`,text:`Aloha`,href:`https://github.com/`}),c(a,{class:`a_btn a_btn_primary a_ml_2`,"icon-left":`Gear`,"icon-right":`Gear`,title:`GitHub`,href:`https://github.com/`})]),_:1},8,[`code-html`,`code-js`])}var Se=o(be,[[`render`,xe]]);function Ce(){return{codeHtml:`<a-link
  class="a_btn a_btn_primary"
  :loading="loading"
  loading-align="left"
  text="loading-align=\\"left\\""
  href="https://github.com/"
>
</a-link>
<a-link
  class="a_btn a_btn_primary a_ml_2"
  :loading="loading"
  loading-align="right"
  text="loading-align=\\"right\\""
  href="https://github.com/"
>
</a-link>
<a-button
  class="a_btn a_btn_secondary a_ml_5"
  text="a-button toggle"
  @click="toggleLoading"
>
</a-button>`}}function we(){return{codeJs:`import {
  ref,
} from "vue";

import {
  AButton,
  ALink,
} from "aloha-vue";
    
export default {
  name: "PageLinkLoading",
  components: {
    AButton,
    ALink,
  },
  setup() {
    const loading = ref(true);

    const toggleLoading = () => {
      loading.value = !loading.value;
    };

    return {
      loading,
      toggleLoading,
    };
  },
};`}}var Te={name:`PageLinkLoading`,components:{AButton:a,ALink:i,AlohaExample:n},setup(){let{codeHtml:e}=Ce(),{codeJs:t}=we(),n=d(!0);return{codeHtml:e,codeJs:t,loading:n,toggleLoading:()=>{n.value=!n.value}}}};function Ee(e,t,n,r,ee,i){let a=m(`a-link`),o=m(`a-button`),s=m(`aloha-example`);return p(),l(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_LINK_GROUP_LOADING_HEADER_`,description:`_A_LINK_GROUP_LOADING_DESCRIPTION_`,props:[`loading`,`loading-align`]},{default:f(()=>[c(a,{class:`a_btn a_btn_primary`,loading:e.loading,"loading-align":`left`,text:`loading-align="left"`,href:`https://github.com/`},null,8,[`loading`]),c(a,{class:`a_btn a_btn_primary a_ml_2`,loading:e.loading,"loading-align":`right`,text:`loading-align="right"`,href:`https://github.com/`},null,8,[`loading`]),c(o,{class:`a_btn a_btn_secondary a_ml_5`,text:`a-button toggle`,onClick:e.toggleLoading},null,8,[`onClick`])]),_:1},8,[`code-html`,`code-js`])}var De=o(Te,[[`render`,Ee]]);function Oe(){return{codeHtml:`<a-link
  class="a_btn a_btn_outline_primary"
  text="outline-primary"
  href="https://github.com/"
>
</a-link>
<a-link
  class="a_btn a_btn_outline_secondary a_ml_2"
  text="outline-secondary"
  href="https://github.com/"
>
</a-link>
<a-link
  class="a_btn a_btn_outline_tertiary a_ml_2"
  text="outline-tertiary"
  href="https://github.com/"
>
</a-link>
<a-link
  class="a_btn a_btn_outline_success a_ml_2"
  text="outline-success"
  href="https://github.com/"
>
</a-link>
<a-link
  class="a_btn a_btn_outline_info a_ml_2"
  text="outline-info"
  href="https://github.com/"
>
</a-link>
<a-link
  class="a_btn a_btn_outline_warning a_ml_2"
  text="outline-warning"
  href="https://github.com/"
>
</a-link>
<a-link
  class="a_btn a_btn_outline_danger a_ml_2"
  text="outline-danger"
  href="https://github.com/"
>
</a-link>
<a-link
  class="a_btn a_btn_outline_dark a_ml_2"
  text="outline-dark"
  href="https://github.com/"
>
</a-link>
<a-link
  class="a_btn a_btn_outline_light a_ml_2"
  text="outline-light"
  href="https://github.com/"
>
</a-link>`}}function ke(){return{codeJs:`import { 
  ALink,
} from "aloha-vue";
    
export default {
  name: "PageLinkOutline",
  components: {
    ALink,
  },
};`}}var Ae={name:`PageLinkOutline`,components:{ALink:i,AlohaExample:n},setup(){let{codeHtml:e}=Oe(),{codeJs:t}=ke();return{codeHtml:e,codeJs:t}}};function je(e,t,n,r,ee,i){let a=m(`a-link`),o=m(`aloha-example`);return p(),l(o,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_LINK_GROUP_OUTLINE_HEADER_`,description:`_A_LINK_GROUP_OUTLINE_DESCRIPTION_`,props:`class`},{default:f(()=>[c(a,{class:`a_btn a_btn_outline_primary`,text:`outline-primary`,href:`https://github.com/`}),c(a,{class:`a_btn a_btn_outline_secondary a_ml_2`,text:`outline-secondary`,href:`https://github.com/`}),c(a,{class:`a_btn a_btn_outline_tertiary a_ml_2`,text:`outline-tertiary`,href:`https://github.com/`}),c(a,{class:`a_btn a_btn_outline_success a_ml_2`,text:`outline-success`,href:`https://github.com/`}),c(a,{class:`a_btn a_btn_outline_info a_ml_2`,text:`outline-info`,href:`https://github.com/`}),c(a,{class:`a_btn a_btn_outline_warning a_ml_2`,text:`outline-warning`,href:`https://github.com/`}),c(a,{class:`a_btn a_btn_outline_danger a_ml_2`,text:`outline-danger`,href:`https://github.com/`}),c(a,{class:`a_btn a_btn_outline_dark a_ml_2`,text:`outline-dark`,href:`https://github.com/`}),c(a,{class:`a_btn a_btn_outline_light a_ml_2`,text:`outline-light`,href:`https://github.com/`})]),_:1},8,[`code-html`,`code-js`])}var Me=o(Ae,[[`render`,je]]);function Ne(){return{codeHtml:`<a-link
  class="a_btn a_btn_primary"
  safe-html="_A_LINK_EXAMPLE_HTML_"
>
</a-link>
<a-link
  class="a_btn a_btn_primary a_ml_2"
  safe-html="<span onclick='alert(\\"Aloha\\")'>Aloha</button>"
>
</a-link>`}}function Pe(){return{codeJs:`import { 
  ALink,
} from "aloha-vue";
    
export default {
  name: "PageLinkSafeHtml",
  components: {
    ALink,
  },
};`}}var Fe={name:`PageLinkSafeHtml`,components:{ALink:i,AlohaExample:n},setup(){let{codeHtml:e}=Ne(),{codeJs:t}=Pe();return{codeHtml:e,codeJs:t}}};function Ie(e,t,n,r,ee,i){let a=m(`a-link`),o=m(`aloha-example`);return p(),l(o,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_LINK_GROUP_SAFE_HTML_HEADER_`,description:`_A_LINK_GROUP_SAFE_HTML_DESCRIPTION_`,props:`safe-html`},{default:f(()=>[c(a,{class:`a_btn a_btn_primary`,"safe-html":`_A_LINK_EXAMPLE_HTML_`}),c(a,{class:`a_btn a_btn_primary a_ml_2`,"safe-html":`<span onclick='alert("Aloha")'>Aloha</button>`})]),_:1},8,[`code-html`,`code-js`])}var Le=o(Fe,[[`render`,Ie]]);function Re(){return{codeHtml:`<a-link
  class="a_btn a_btn_primary a_btn_large"
  text="large"
  href="https://github.com/"
>
</a-link>
<a-link
  class="a_btn a_btn_primary a_btn_small a_ml_2"
  text="small"
  href="https://github.com/"
>
</a-link>`}}function ze(){return{codeJs:`import { 
  ALink,
} from "aloha-vue";
    
export default {
  name: "PageLinkSizes",
  components: {
    ALink,
  },
};`}}var Be={name:`PageLinkSizes`,components:{ALink:i,AlohaExample:n},setup(){let{codeHtml:e}=Re(),{codeJs:t}=ze();return{codeHtml:e,codeJs:t}}};function Ve(e,t,n,r,ee,i){let a=m(`a-link`),o=m(`aloha-example`);return p(),l(o,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_LINK_GROUP_SIZES_HEADER_`,description:`_A_LINK_GROUP_SIZES_DESCRIPTION_`,props:`class`},{default:f(()=>[c(a,{class:`a_btn a_btn_primary a_btn_large`,text:`large`,href:`https://github.com/`}),c(a,{class:`a_btn a_btn_primary a_btn_small a_ml_2`,text:`small`,href:`https://github.com/`})]),_:1},8,[`code-html`,`code-js`])}var He=o(Be,[[`render`,Ve]]);function Ue(){return{codeHtml:`<a-link
  class="a_btn a_btn_primary"
  text="Aloha"
  href="https://github.com/"
>
  <template
    v-slot:linkAppend
  >
    <span>(***)</span>
  </template>
</a-link>`}}function We(){return{codeJs:`import { 
  ALink,
} from "aloha-vue";
    
export default {
  name: "PageLinkSlotAppend",
  components: {
    ALink,
  },
};`}}var Ge={name:`PageLinkSlotAppend`,components:{ALink:i,AlohaExample:n},setup(){let{codeHtml:e}=Ue(),{codeJs:t}=We();return{codeHtml:e,codeJs:t}}};function Ke(e,t,n,r,ee,i){let a=m(`a-link`),o=m(`aloha-example`);return p(),l(o,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_LINK_GROUP_SLOT_APPEND_HEADER_`,description:`_A_LINK_GROUP_SLOT_APPEND_DESCRIPTION_`,slots:`linkAppend`},{default:f(()=>[c(a,{class:`a_btn a_btn_primary`,text:`Aloha`,href:`https://github.com/`},{linkAppend:f(()=>[...t[0]||=[s(`span`,null,`(***)`,-1)]]),_:1})]),_:1},8,[`code-html`,`code-js`])}var qe=o(Ge,[[`render`,Ke]]);function Je(){return{codeHtml:`<a-link
  class="a_btn a_btn_primary"
  href="https://github.com/"
>
  <span>(Aloha)</span>
</a-link>`}}function Ye(){return{codeJs:`import { 
  ALink,
} from "aloha-vue";
    
export default {
  name: "PageLinkSlotDefault",
  components: {
    ALink,
  },
};`}}var Xe={name:`PageLinkSlotDefault`,components:{ALink:i,AlohaExample:n},setup(){let{codeHtml:e}=Je(),{codeJs:t}=Ye();return{codeHtml:e,codeJs:t}}};function Ze(e,t,n,r,ee,i){let a=m(`a-link`),o=m(`aloha-example`);return p(),l(o,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_LINK_GROUP_SLOT_DEFAULT_HEADER_`,description:`_A_LINK_GROUP_SLOT_DEFAULT_DESCRIPTION_`,slots:`default`},{default:f(()=>[c(a,{class:`a_btn a_btn_primary`,href:`https://github.com/`},{default:f(()=>[...t[0]||=[s(`span`,null,`(Aloha)`,-1)]]),_:1})]),_:1},8,[`code-html`,`code-js`])}var Qe=o(Xe,[[`render`,Ze]]);function $e(){return{codeHtml:`<a-link
  class="a_btn a_btn_primary"
  text="Aloha"
  href="https://github.com/"
>
  <template
    v-slot:linkPrepend
  >
    <span>(***)</span>
  </template>
</a-link>`}}function et(){return{codeJs:`import { 
  ALink,
} from "aloha-vue";
    
export default {
  name: "PageLinkSlotPrepend",
  components: {
    ALink,
  },
};`}}var tt={name:`PageLinkSlotPrepend`,components:{ALink:i,AlohaExample:n},setup(){let{codeHtml:e}=$e(),{codeJs:t}=et();return{codeHtml:e,codeJs:t}}};function nt(e,t,n,r,ee,i){let a=m(`a-link`),o=m(`aloha-example`);return p(),l(o,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_LINK_GROUP_SLOT_PREPEND_HEADER_`,description:`_A_LINK_GROUP_SLOT_PREPEND_DESCRIPTION_`,slots:`linkPrepend`},{default:f(()=>[c(a,{class:`a_btn a_btn_primary`,text:`Aloha`,href:`https://github.com/`},{linkPrepend:f(()=>[...t[0]||=[s(`span`,null,`(***)`,-1)]]),_:1})]),_:1},8,[`code-html`,`code-js`])}var rt=o(tt,[[`render`,nt]]);function it(){return{codeHtml:`<a-link
  class="a_btn a_btn_primary"
  text="Aloha"
  :is-title-html="true"
  href="https://github.com/"
>
  <template
    v-slot:linkTitle
  >
    <strong>(***Aloha***)</strong>
  </template>
</a-link>`}}function at(){return{codeJs:`import { 
  ALink,
} from "aloha-vue";
    
export default {
  name: "PageLinkSlotTitle",
  components: {
    ALink,
  },
};`}}var ot={name:`PageLinkSlotTitle`,components:{ALink:i,AlohaExample:n},setup(){let{codeHtml:e}=it(),{codeJs:t}=at();return{codeHtml:e,codeJs:t}}};function st(e,t,n,r,ee,i){let a=m(`a-link`),o=m(`aloha-example`);return p(),l(o,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_LINK_GROUP_SLOT_TITLE_HEADER_`,description:`_A_LINK_GROUP_SLOT_TITLE_DESCRIPTION_`,slots:`linkTitle`},{default:f(()=>[c(a,{class:`a_btn a_btn_primary`,text:`Aloha`,"is-title-html":!0,href:`https://github.com/`},{linkTitle:f(()=>[...t[0]||=[s(`strong`,null,`(***Aloha***)`,-1)]]),_:1})]),_:1},8,[`code-html`,`code-js`])}var ct=o(ot,[[`render`,st]]);function lt(){return{codeHtml:`<a-link
  class="a_btn a_btn_primary"
  text="_A_SHOW_MORE_MORE_"
  text-after=" €"
  text-before="$ "
  href="https://github.com/"
>
</a-link>`}}function ut(){return{codeJs:`import { 
  ALink,
} from "aloha-vue";
    
export default {
  name: "PageLinkTextAfterBefore",
  components: {
    ALink,
  },
};`}}var dt={name:`PageLinkTextAfterBefore`,components:{ALink:i,AlohaExample:n},setup(){let{codeHtml:e}=lt(),{codeJs:t}=ut();return{codeHtml:e,codeJs:t}}};function ft(e,t,n,r,ee,i){let a=m(`a-link`),o=m(`aloha-example`);return p(),l(o,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_LINK_GROUP_TEXT_AFTER_BEFORE_HEADER_`,description:`_A_LINK_GROUP_TEXT_AFTER_BEFORE_DESCRIPTION_`,props:[`text-before`,`text-after`]},{default:f(()=>[c(a,{class:`a_btn a_btn_primary`,text:`_A_SHOW_MORE_MORE_`,"text-after":` €`,"text-before":`$ `,href:`https://github.com/`})]),_:1},8,[`code-html`,`code-js`])}var pt=o(dt,[[`render`,ft]]);function mt(){return{codeHtml:`<a-link
  class="a_btn a_btn_primary"
  :text="{ mobile: 'Aloha', desktop: 'Aloha-desktop' }"
  href="https://github.com/"
>
</a-link>`}}function ht(){return{codeJs:`import { 
  ALink,
} from "aloha-vue";
    
export default {
  name: "PageLinkTextObject",
  components: {
    ALink,
  },
};`}}var gt={name:`PageLinkTextObject`,components:{ALink:i,AlohaExample:n},setup(){let{codeHtml:e}=mt(),{codeJs:t}=ht();return{codeHtml:e,codeJs:t}}};function _t(e,t,n,r,ee,i){let a=m(`a-link`),o=m(`aloha-example`);return p(),l(o,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_LINK_GROUP_TEXT_OBJECT_HEADER_`,description:`_A_LINK_GROUP_TEXT_OBJECT_DESCRIPTION_`,props:`text (as object)`},{default:f(()=>[c(a,{class:`a_btn a_btn_primary`,text:{mobile:`Aloha`,desktop:`Aloha-desktop`},href:`https://github.com/`})]),_:1},8,[`code-html`,`code-js`])}var vt=o(gt,[[`render`,_t]]);function yt(){return{codeHtml:`<a-link
  class="a_btn a_btn_secondary"
  text="Aloha"
  text-tag="strong"
  href="https://github.com/"
></a-link>`}}function bt(){return{codeJs:`import { 
  ALink,
} from "aloha-vue";
    
export default {
  name: "PageLinkTextTag",
  components: {
    ALink,
  },
};`}}var xt={name:`PageLinkTextTag`,components:{ALink:i,AlohaExample:n},setup(){let{codeHtml:e}=yt(),{codeJs:t}=bt();return{codeHtml:e,codeJs:t}}};function St(e,t,n,r,ee,i){let a=m(`a-link`),o=m(`aloha-example`);return p(),l(o,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_LINK_GROUP_TEXT_TAG_HEADER_`,description:`_A_LINK_GROUP_TEXT_TAG_DESCRIPTION_`,props:`text-tag`},{default:f(()=>[c(a,{class:`a_btn a_btn_secondary`,text:`Aloha`,"text-tag":`strong`,href:`https://github.com/`})]),_:1},8,[`code-html`,`code-js`])}var Ct=o(xt,[[`render`,St]]);function wt(){return{codeHtml:`<a-link
  class="a_btn a_btn_primary"
  :title="['Aloha', '$(Aloha)']"
  text="Aloha"
  href="https://github.com/"
>
</a-link>`}}function Tt(){return{codeJs:`import { 
  ALink,
} from "aloha-vue";
    
export default {
  name: "PageLinkTitleArray",
  components: {
    ALink,
  },
};`}}var Et={name:`PageLinkTitleArray`,components:{ALink:i,AlohaExample:n},setup(){let{codeHtml:e}=wt(),{codeJs:t}=Tt();return{codeHtml:e,codeJs:t}}};function Dt(e,t,n,r,ee,i){let a=m(`a-link`),o=m(`aloha-example`);return p(),l(o,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_LINK_GROUP_TITLE_ARRAY_HEADER_`,description:`_A_LINK_GROUP_TITLE_ARRAY_DESCRIPTION_`,props:`title (as array)`},{default:f(()=>[c(a,{class:`a_btn a_btn_primary`,title:[`Aloha`,`$(Aloha)`],text:`Aloha`,href:`https://github.com/`})]),_:1},8,[`code-html`,`code-js`])}var Ot=o(Et,[[`render`,Dt]]);function kt(){return{codeHtml:`<a-link
  class="a_btn a_btn_success a_mt_2"
  title="_A_LINK_EXAMPLE_BIG_TITLE_"
  text="placement: top"
  :is-title-html="true"
  title-placement="top"
  href="https://github.com/"
>
</a-link>
<a-link
  class="a_btn a_btn_success a_ml_2 a_mt_2"
  title="_A_LINK_EXAMPLE_BIG_TITLE_"
  text="placement: auto"
  :is-title-html="true"
  title-placement="auto"
  href="https://github.com/"
>
</a-link>
<a-link
  class="a_btn a_btn_success a_ml_2 a_mt_2"
  title="_A_LINK_EXAMPLE_BIG_TITLE_"
  text="placement: auto-start"
  :is-title-html="true"
  title-placement="auto-start"
  href="https://github.com/"
>
</a-link>
<a-link
  class="a_btn a_btn_success a_ml_2 a_mt_2"
  title="_A_LINK_EXAMPLE_BIG_TITLE_"
  text="placement: auto-end"
  :is-title-html="true"
  title-placement="auto-end"
  href="https://github.com/"
>
</a-link>
<a-link
  class="a_btn a_btn_success a_ml_2 a_mt_2"
  title="_A_LINK_EXAMPLE_BIG_TITLE_"
  text="placement: top-start"
  :is-title-html="true"
  title-placement="top-start"
  href="https://github.com/"
>
</a-link>
<a-link
  class="a_btn a_btn_success a_ml_2 a_mt_2"
  title="_A_LINK_EXAMPLE_BIG_TITLE_"
  text="placement: top-end"
  :is-title-html="true"
  title-placement="top-end"
  href="https://github.com/"
>
</a-link>
<a-link
  class="a_btn a_btn_success a_ml_2 a_mt_2"
  title="_A_LINK_EXAMPLE_BIG_TITLE_"
  text="placement: right"
  :is-title-html="true"
  title-placement="right"
  href="https://github.com/"
>
</a-link>
<a-link
  class="a_btn a_btn_success a_ml_2 a_mt_2"
  title="_A_LINK_EXAMPLE_BIG_TITLE_"
  text="placement: right-start"
  :is-title-html="true"
  title-placement="right-start"
  href="https://github.com/"
>
</a-link>
<a-link
  class="a_btn a_btn_success a_ml_2 a_mt_2"
  title="_A_LINK_EXAMPLE_BIG_TITLE_"
  text="placement: right-end"
  :is-title-html="true"
  title-placement="right-end"
  href="https://github.com/"
>
</a-link>
<a-link
  class="a_btn a_btn_success a_ml_2 a_mt_2"
  title="_A_LINK_EXAMPLE_BIG_TITLE_"
  text="placement: bottom"
  :is-title-html="true"
  title-placement="bottom"
  href="https://github.com/"
>
</a-link>
<a-link
  class="a_btn a_btn_success a_ml_2 a_mt_2"
  title="_A_LINK_EXAMPLE_BIG_TITLE_"
  text="placement: bottom-start"
  :is-title-html="true"
  title-placement="bottom-start"
  href="https://github.com/"
>
</a-link>
<a-link
  class="a_btn a_btn_success a_ml_2 a_mt_2"
  title="_A_LINK_EXAMPLE_BIG_TITLE_"
  text="placement: bottom-end"
  :is-title-html="true"
  title-placement="bottom-end"
  href="https://github.com/"
>
</a-link>
<a-link
  class="a_btn a_btn_success a_ml_2 a_mt_2"
  title="_A_LINK_EXAMPLE_BIG_TITLE_"
  text="placement: left"
  :is-title-html="true"
  title-placement="left"
  href="https://github.com/"
>
</a-link>
<a-link
  class="a_btn a_btn_success a_ml_2 a_mt_2"
  title="_A_LINK_EXAMPLE_BIG_TITLE_"
  text="placement: left-start"
  :is-title-html="true"
  title-placement="left-start"
  href="https://github.com/"
>
</a-link>
<a-link
  class="a_btn a_btn_success a_ml_2 a_mt_2"
  title="_A_LINK_EXAMPLE_BIG_TITLE_"
  text="placement: left-end"
  :is-title-html="true"
  title-placement="left-end"
  href="https://github.com/"
>
</a-link>
<a-link
  class="a_btn a_btn_success a_ml_2 a_mt_2"
  title="_A_LINK_EXAMPLE_BIG_TITLE_"
  text="placement: auto, html-title max-width 150"
  :is-title-html="true"
  title-placement="auto"
  :title-attributes="{ maxWidth: 150 }"
  href="https://github.com/"
>
</a-link>`}}function At(){return{codeJs:`import { 
  ALink,
} from "aloha-vue";
    
export default {
  name: "PageLinkTitleHtml",
  components: {
    ALink,
  },
};`}}var jt={name:`PageLinkTitleHtml`,components:{ALink:i,AlohaExample:n},setup(){let{codeHtml:e}=kt(),{codeJs:t}=At();return{codeHtml:e,codeJs:t}}};function Mt(e,t,n,r,ee,i){let a=m(`a-link`),o=m(`aloha-example`);return p(),l(o,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_LINK_GROUP_TITLE_HTML_HEADER_`,description:`_A_LINK_GROUP_TITLE_HTML_DESCRIPTION_`,props:[`title`,`is-title-html`,`title-placement`]},{default:f(()=>[c(a,{class:`a_btn a_btn_success a_mt_2`,title:`_A_LINK_EXAMPLE_BIG_TITLE_`,text:`placement: top`,"is-title-html":!0,"title-placement":`top`,href:`https://github.com/`}),c(a,{class:`a_btn a_btn_success a_ml_2 a_mt_2`,title:`_A_LINK_EXAMPLE_BIG_TITLE_`,text:`placement: auto`,"is-title-html":!0,"title-placement":`auto`,href:`https://github.com/`}),c(a,{class:`a_btn a_btn_success a_ml_2 a_mt_2`,title:`_A_LINK_EXAMPLE_BIG_TITLE_`,text:`placement: auto-start`,"is-title-html":!0,"title-placement":`auto-start`,href:`https://github.com/`}),c(a,{class:`a_btn a_btn_success a_ml_2 a_mt_2`,title:`_A_LINK_EXAMPLE_BIG_TITLE_`,text:`placement: auto-end`,"is-title-html":!0,"title-placement":`auto-end`,href:`https://github.com/`}),c(a,{class:`a_btn a_btn_success a_ml_2 a_mt_2`,title:`_A_LINK_EXAMPLE_BIG_TITLE_`,text:`placement: top-start`,"is-title-html":!0,"title-placement":`top-start`,href:`https://github.com/`}),c(a,{class:`a_btn a_btn_success a_ml_2 a_mt_2`,title:`_A_LINK_EXAMPLE_BIG_TITLE_`,text:`placement: top-end`,"is-title-html":!0,"title-placement":`top-end`,href:`https://github.com/`}),c(a,{class:`a_btn a_btn_success a_ml_2 a_mt_2`,title:`_A_LINK_EXAMPLE_BIG_TITLE_`,text:`placement: right`,"is-title-html":!0,"title-placement":`right`,href:`https://github.com/`}),c(a,{class:`a_btn a_btn_success a_ml_2 a_mt_2`,title:`_A_LINK_EXAMPLE_BIG_TITLE_`,text:`placement: right-start`,"is-title-html":!0,"title-placement":`right-start`,href:`https://github.com/`}),c(a,{class:`a_btn a_btn_success a_ml_2 a_mt_2`,title:`_A_LINK_EXAMPLE_BIG_TITLE_`,text:`placement: right-end`,"is-title-html":!0,"title-placement":`right-end`,href:`https://github.com/`}),c(a,{class:`a_btn a_btn_success a_ml_2 a_mt_2`,title:`_A_LINK_EXAMPLE_BIG_TITLE_`,text:`placement: bottom`,"is-title-html":!0,"title-placement":`bottom`,href:`https://github.com/`}),c(a,{class:`a_btn a_btn_success a_ml_2 a_mt_2`,title:`_A_LINK_EXAMPLE_BIG_TITLE_`,text:`placement: bottom-start`,"is-title-html":!0,"title-placement":`bottom-start`,href:`https://github.com/`}),c(a,{class:`a_btn a_btn_success a_ml_2 a_mt_2`,title:`_A_LINK_EXAMPLE_BIG_TITLE_`,text:`placement: bottom-end`,"is-title-html":!0,"title-placement":`bottom-end`,href:`https://github.com/`}),c(a,{class:`a_btn a_btn_success a_ml_2 a_mt_2`,title:`_A_LINK_EXAMPLE_BIG_TITLE_`,text:`placement: left`,"is-title-html":!0,"title-placement":`left`,href:`https://github.com/`}),c(a,{class:`a_btn a_btn_success a_ml_2 a_mt_2`,title:`_A_LINK_EXAMPLE_BIG_TITLE_`,text:`placement: left-start`,"is-title-html":!0,"title-placement":`left-start`,href:`https://github.com/`}),c(a,{class:`a_btn a_btn_success a_ml_2 a_mt_2`,title:`_A_LINK_EXAMPLE_BIG_TITLE_`,text:`placement: left-end`,"is-title-html":!0,"title-placement":`left-end`,href:`https://github.com/`}),c(a,{class:`a_btn a_btn_success a_ml_2 a_mt_2`,title:`_A_LINK_EXAMPLE_BIG_TITLE_`,text:`placement: auto, html-title max-width 150`,"is-title-html":!0,"title-placement":`auto`,"title-attributes":{maxWidth:150},href:`https://github.com/`})]),_:1},8,[`code-html`,`code-js`])}var Nt=o(jt,[[`render`,Mt]]);function $(){return{codeHtml:`<a-link
  class="a_btn a_btn_transparent_primary"
  text="transparent-primary"
  href="https://github.com/"
>
</a-link>
<a-link
  class="a_btn a_btn_transparent_secondary a_ml_2"
  text="transparent-secondary"
  href="https://github.com/"
>
</a-link>
<a-link
  class="a_btn a_btn_transparent_tertiary a_ml_2"
  text="transparent-tertiary"
  href="https://github.com/"
>
</a-link>
<a-link
  class="a_btn a_btn_transparent_success a_ml_2"
  text="transparent-success"
  href="https://github.com/"
>
</a-link>
<a-link
  class="a_btn a_btn_transparent_info a_ml_2"
  text="transparent-info"
  href="https://github.com/"
>
</a-link>
<a-link
  class="a_btn a_btn_transparent_warning a_ml_2"
  text="transparent-warning"
  href="https://github.com/"
>
</a-link>
<a-link
  class="a_btn a_btn_transparent_danger a_ml_2"
  text="transparent-danger"
  href="https://github.com/"
>
</a-link>
<a-link
  class="a_btn a_btn_transparent_dark a_ml_2"
  text="transparent-dark"
  href="https://github.com/"
>
</a-link>
<a-link
  class="a_btn a_btn_transparent_light a_ml_2"
  text="transparent-light"
  href="https://github.com/"
>
</a-link>`}}function Pt(){return{codeJs:`import { 
  ALink,
} from "aloha-vue";
    
export default {
  name: "PageLinkTransparent",
  components: {
    ALink,
  },
};`}}var Ft={name:`PageLinkTransparent`,components:{ALink:i,AlohaExample:n},setup(){let{codeHtml:e}=$(),{codeJs:t}=Pt();return{codeHtml:e,codeJs:t}}};function It(e,t,n,r,ee,i){let a=m(`a-link`),o=m(`aloha-example`);return p(),l(o,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_LINK_GROUP_TRANSPARENT_HEADER_`,description:`_A_LINK_GROUP_TRANSPARENT_DESCRIPTION_`,props:`class`},{default:f(()=>[c(a,{class:`a_btn a_btn_transparent_primary`,text:`transparent-primary`,href:`https://github.com/`}),c(a,{class:`a_btn a_btn_transparent_secondary a_ml_2`,text:`transparent-secondary`,href:`https://github.com/`}),c(a,{class:`a_btn a_btn_transparent_tertiary a_ml_2`,text:`transparent-tertiary`,href:`https://github.com/`}),c(a,{class:`a_btn a_btn_transparent_success a_ml_2`,text:`transparent-success`,href:`https://github.com/`}),c(a,{class:`a_btn a_btn_transparent_info a_ml_2`,text:`transparent-info`,href:`https://github.com/`}),c(a,{class:`a_btn a_btn_transparent_warning a_ml_2`,text:`transparent-warning`,href:`https://github.com/`}),c(a,{class:`a_btn a_btn_transparent_danger a_ml_2`,text:`transparent-danger`,href:`https://github.com/`}),c(a,{class:`a_btn a_btn_transparent_dark a_ml_2`,text:`transparent-dark`,href:`https://github.com/`}),c(a,{class:`a_btn a_btn_transparent_light a_ml_2`,text:`transparent-light`,href:`https://github.com/`})]),_:1},8,[`code-html`,`code-js`])}var Lt=o(Ft,[[`render`,It]]);function Rt(){return{dataExposes:[{name:`buttonRef`,description:`_A_SHOW_MORE_EXPOSES_BUTTON_REF_DESCRIPTION_`,type:`Object`},{name:`containerRef`,description:`_A_SHOW_MORE_EXPOSES_CONTAINER_REF_DESCRIPTION_`,type:`Object`},{name:`isButtonVisible`,description:`_A_SHOW_MORE_EXPOSES_IS_BUTTON_VISIBLE_DESCRIPTION_`,type:`Boolean`},{name:`isOpen`,description:`_A_SHOW_MORE_EXPOSES_IS_OPEN_DESCRIPTION_`,type:`Boolean`},{name:`toggleButton`,description:`_A_SHOW_MORE_EXPOSES_TOGGLE_BUTTON_DESCRIPTION_`,type:`Function`}]}}function zt(){let e=u(()=>r({placeholder:`_A_LINK_COMPONENT_NAME_`}));return{pageTitle:u(()=>`ALink${e.value?` (${e.value})`:``}`)}}function Bt(){return{dataProps:[{name:`always-translate`,description:`_A_TRANSLATION_PROPS_ALWAYS_TRANSLATE_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`attributes`,description:`_A_LINK_PROPS_ATTRIBUTES_DESCRIPTION_`,type:`Object`,default:`() => ({})`,required:!1},{name:`class`,description:`_A_LINK_PROPS_CLASS_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`class-default`,description:`_A_LINK_PROPS_CLASS_DEFAULT_DESCRIPTION_`,type:`String`,default:`a_element`,required:!1},{name:`class-default-hidden`,description:`_A_LINK_PROPS_CLASS_DEFAULT_HIDDEN_DESCRIPTION_`,type:`String`,default:`a_element__hidden`,required:!1},{name:`class-disabled`,description:`_A_LINK_PROPS_CLASS_DISABLED_DESCRIPTION_`,type:`String`,default:`disabled`,required:!1},{name:`disabled`,description:`_A_LINK_PROPS_DISABLED_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`extra`,description:`_A_LINK_PROPS_EXTRA_DESCRIPTION_`,type:`Object`,default:void 0,required:!1},{name:`href`,description:`_A_LINK_PROPS_HREF_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`html`,description:`_A_LINK_PROPS_HTML_DESCRIPTION_`,type:`String / Number / Object / Array`,default:void 0,required:!1},{name:`html-screen-reader`,description:`_A_LINK_PROPS_HTML_SCREEN_READER_DESCRIPTION_`,type:`String / Number / Object / Array`,default:void 0,required:!1},{name:`icon-attributes`,description:`_A_LINK_PROPS_ICON_ATTRIBUTES_DESCRIPTION_`,type:`Object`,default:`() => ({})`,required:!1},{name:`icon-class`,description:`_A_LINK_PROPS_ICON_CLASS_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`icon-left`,description:`_A_LINK_PROPS_ICON_LEFT_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`icon-right`,description:`_A_LINK_PROPS_ICON_RIGHT_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`icon-tag`,description:`_A_LINK_PROPS_ICON_TAG_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`id`,description:`_A_LINK_PROPS_ID_DESCRIPTION_`,type:`String`,default:`() => uniqueId("a_link_")`,required:!1},{name:`is-title-html`,description:`_A_LINK_PROPS_IS_TITLE_HTML_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`loading`,description:`_A_LINK_PROPS_LOADING_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`loading-align`,description:`_A_LINK_PROPS_LOADING_ALIGN_DESCRIPTION_`,type:`String`,default:`right`,required:!1},{name:`loading-class`,description:`_A_LINK_PROPS_LOADING_CLASS_DESCRIPTION_`,type:`String / Object`,default:`a_spinner_small`,required:!1},{name:`prevent-keyboard-repeat`,description:`_A_ELEMENT_PROPS_PREVENT_KEYBOARD_REPEAT_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`safe-html`,description:`_A_LINK_PROPS_SAFE_HTML_DESCRIPTION_`,type:`String / Number / Object / Array`,default:void 0,required:!1},{name:`safe-html-screen-reader`,description:`_A_LINK_PROPS_SAFE_HTML_SCREEN_READER_DESCRIPTION_`,type:`String / Number / Object / Array`,default:void 0,required:!1},{name:`target`,description:`_A_LINK_PROPS_TARGET_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`text`,description:`_A_LINK_PROPS_TEXT_DESCRIPTION_`,type:`String / Number / Object / Array`,default:void 0,required:!1},{name:`text-after`,description:`_A_LINK_PROPS_TEXT_AFTER_DESCRIPTION_`,type:`String / Number / Object`,default:void 0,required:!1},{name:`text-aria-hidden`,description:`_A_LINK_PROPS_TEXT_ARIA_HIDDEN_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`text-before`,description:`_A_LINK_PROPS_TEXT_BEFORE_DESCRIPTION_`,type:`String / Number / Object`,default:void 0,required:!1},{name:`text-class`,description:`_A_LINK_PROPS_TEXT_CLASS_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`text-screen-reader`,description:`_A_LINK_PROPS_TEXT_SCREEN_READER_DESCRIPTION_`,type:`String / Number / Object / Array`,default:void 0,required:!1},{name:`text-tag`,description:`_A_LINK_PROPS_TEXT_TAG_DESCRIPTION_`,type:`String`,default:`span`,required:!1},{name:`title`,description:`_A_LINK_PROPS_TITLE_DESCRIPTION_`,type:`String / Number / Object / Array`,default:void 0,required:!1},{name:`title-attributes`,description:`_A_LINK_PROPS_TITLE_ATTRIBUTES_DESCRIPTION_`,type:`Object`,default:`{}`,required:!1},{name:`title-placement`,description:`_A_LINK_PROPS_TITLE_PLACEMENT_DESCRIPTION_`,type:`String`,default:`top`,required:!1},{name:`title-z-index`,description:`_A_LINK_PROPS_TITLE_Z_INDEX_DESCRIPTION_`,type:`String / Number`,default:`auto`,required:!1},{name:`to`,description:`_A_LINK_PROPS_TO_DESCRIPTION_`,type:`Object / String`,default:void 0,required:!1}]}}function Vt(){return{dataSlots:[{name:`linkAppend`,description:`_A_LINK_SLOT_LINK_APPEND_DESCRIPTION_`},{name:`linkPrepend`,description:`_A_LINK_SLOT_LINK_PREPEND_DESCRIPTION_`},{name:`linkTitle`,description:`_A_LINK_SLOT_LINK_TITLE_DESCRIPTION_`},{name:`default`,description:`_A_LINK_SLOT_DEFAULT_DESCRIPTION_`}]}}var Ht={name:`PageLink`,components:{AlohaPage:e,AlohaTableProps:t,ATranslation:ee,PageLinkBasic:y,PageLinkClass:w,PageLinkComplex:k,PageLinkDisabled:P,PageLinkGroup:B,PageLinkGroupHorizontalVertical:Y,PageLinkGroupSizes:ae,PageLinkGroupVertical:fe,PageLinkHtml:_e,PageLinkIcons:Se,PageLinkLoading:De,PageLinkOutline:Me,PageLinkSafeHtml:Le,PageLinkSizes:He,PageLinkSlotAppend:qe,PageLinkSlotDefault:Qe,PageLinkSlotPrepend:rt,PageLinkSlotTitle:ct,PageLinkTextAfterBefore:pt,PageLinkTextObject:vt,PageLinkTextTag:Ct,PageLinkTitleArray:Ot,PageLinkTitleHtml:Nt,PageLinkTransparent:Lt},setup(){let{pageTitle:e}=zt(),{dataProps:t}=Bt(),{dataSlots:n}=Vt(),{dataExposes:r}=Rt();return{dataExposes:r,dataProps:t,dataSlots:n,pageTitle:e}}};function Ut(e,t,n,r,ee,i){let a=m(`a-translation`),o=m(`page-link-basic`),s=m(`page-link-class`),u=m(`page-link-outline`),d=m(`page-link-transparent`),h=m(`page-link-sizes`),g=m(`page-link-group`),_=m(`page-link-group-vertical`),v=m(`page-link-group-horizontal-vertical`),y=m(`page-link-group-sizes`),b=m(`page-link-icons`),x=m(`page-link-disabled`),S=m(`page-link-loading`),C=m(`page-link-text-after-before`),w=m(`page-link-text-tag`),T=m(`page-link-safe-html`),E=m(`page-link-html`),D=m(`page-link-text-object`),O=m(`page-link-title-array`),k=m(`page-link-title-html`),A=m(`page-link-slot-default`),j=m(`page-link-slot-prepend`),M=m(`page-link-slot-append`),N=m(`page-link-slot-title`),P=m(`page-link-complex`),F=m(`aloha-table-props`),I=m(`aloha-page`);return p(),l(I,{"page-title":e.pageTitle},{body:f(()=>[c(a,{tag:`p`,html:`_A_LINK_COMPONENT_DESCRIPTION_`}),c(o),c(s),c(u),c(d),c(h),c(g),c(_),c(v),c(y),c(b),c(x),c(S),c(C),c(w),c(T),c(E),c(D),c(O),c(k),c(A),c(j),c(M),c(N),c(P),c(F,{data:e.dataProps},null,8,[`data`]),c(F,{"table-label":`Slots`,data:e.dataSlots,columns:[`name`,`description`]},null,8,[`data`])]),_:1},8,[`page-title`])}var Wt=o(Ht,[[`render`,Ut]]);export{Wt as default};