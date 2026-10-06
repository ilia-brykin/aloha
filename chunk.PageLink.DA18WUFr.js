import{Ct as e,Tt as t,Ut as n,Yt as r,kt as i,qt as a,wt as o,zt as s}from"./chunk.vendor.CZPox1kV.js";import{At as ee,C as c,Z as te,kt as l,t as u}from"./bundle.index.BmSiyQNH.js";import{n as d,t as f}from"./chunk.AlohaExample.CD4LlhAz.js";import{t as p}from"./chunk.AlohaTableProps.Dksi7fmb.js";function m(){return{codeHtml:`<a-Link
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
</a-Link>`}}function h(){return{codeJs:`import { 
  ALink,
} from "aloha-vue";
    
export default {
  name: "PageLinkBasic",
  components: {
    ALink,
  },
};`}}var g={name:`PageLinkBasic`,components:{ALink:c,AlohaExample:f},setup(){let{codeHtml:e}=m(),{codeJs:t}=h();return{codeHtml:e,codeJs:t}}};function _(e,r,o,ee,c,te){let l=n(`a-link`),u=n(`aloha-example`);return s(),t(u,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,props:[`text`,`href`,`to`]},{default:a(()=>[i(l,{text:`https://github.com/`,href:`https://github.com/`}),i(l,{class:`a_ml_2`,text:`Aloha`,to:{name:`PageButton`}}),i(l,{class:`a_ml_2`,text:`Aloha`,to:`/button`})]),_:1},8,[`code-html`,`code-js`])}var v=u(g,[[`render`,_]]);function y(){return{codeHtml:`<a-link
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
</a-link>`}}function b(){return{codeJs:`import Alink from "aloha-vue/src/Alink/Alink";
    
export default {
  name: "PageLinkClass",
  components: {
    Alink,
  },
};`}}var x={name:`PageLinkClass`,components:{ALink:c,AlohaExample:f},setup(){let{codeHtml:e}=y(),{codeJs:t}=b();return{codeHtml:e,codeJs:t}}};function S(e,r,o,ee,c,te){let l=n(`a-link`),u=n(`aloha-example`);return s(),t(u,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_LINK_GROUP_CLASS_HEADER_`,description:`_A_LINK_GROUP_CLASS_DESCRIPTION_`,props:`class`},{default:a(()=>[i(l,{class:`a_btn a_btn_link`,text:`link`,href:`https://github.com/`}),i(l,{class:`a_btn a_btn_primary a_ml_2`,text:`primary`,href:`https://github.com/`}),i(l,{class:`a_btn a_btn_secondary a_ml_2`,text:`secondary`,href:`https://github.com/`}),i(l,{class:`a_btn a_btn_tertiary a_ml_2`,text:`tertiary`,href:`https://github.com/`}),i(l,{class:`a_btn a_btn_success a_ml_2`,text:`success`,href:`https://github.com/`}),i(l,{class:`a_btn a_btn_info a_ml_2`,text:`info`,href:`https://github.com/`}),i(l,{class:`a_btn a_btn_warning a_ml_2`,text:`warning`,href:`https://github.com/`}),i(l,{class:`a_btn a_btn_danger a_ml_2`,text:`danger`,href:`https://github.com/`}),i(l,{class:`a_btn a_btn_dark a_ml_2`,text:`dark`,href:`https://github.com/`}),i(l,{class:`a_btn a_btn_light a_ml_2`,text:`light`,href:`https://github.com/`})]),_:1},8,[`code-html`,`code-js`])}var C=u(x,[[`render`,S]]);function w(){return{codeHtml:`<a-link
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
</a-link>`}}function T(){return{codeJs:`import { 
  ALink,
} from "aloha-vue";
    
export default {
  name: "PageLinkComplex",
  components: {
    ALink,
  },
};`}}var E={name:`PageLinkComplex`,components:{ALink:c,AlohaExample:f},setup(){let{codeHtml:e}=w(),{codeJs:t}=T();return{codeHtml:e,codeJs:t}}};function D(e,r,o,ee,c,te){let l=n(`a-link`),u=n(`aloha-example`);return s(),t(u,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_LINK_GROUP_COMPLEX_HEADER_`,description:`_A_LINK_GROUP_COMPLEX_DESCRIPTION_`},{default:a(()=>[i(l,{class:`a_btn a_btn_primary`,text:{desktop:`Aloha`},"text-before":{desktop:`$ `},"icon-left":{desktop:`Gear`,mobile:`Code`},"icon-right":{mobile:`Code`},title:{desktop:`Aloha`},"text-aria-hidden":!0,"text-screen-reader":{desktop:`Aloha`,mobile:`Aloha-mobile`},href:`https://github.com/`})]),_:1},8,[`code-html`,`code-js`])}var O=u(E,[[`render`,D]]);function k(){return{codeHtml:`<a-link
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
</a-link>`}}function A(){return{codeJs:`import { 
  ALink,
} from "aloha-vue";
    
export default {
  name: "PageLinkDisabled",
  components: {
    ALink,
  },
};`}}var j={name:`PageLinkDisabled`,components:{ALink:c,AlohaExample:f},setup(){let{codeHtml:e}=k(),{codeJs:t}=A();return{codeHtml:e,codeJs:t}}};function M(e,r,o,ee,c,te){let l=n(`a-link`),u=n(`aloha-example`);return s(),t(u,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_LINK_GROUP_DISABLED_HEADER_`,description:`_A_LINK_GROUP_DISABLED_DESCRIPTION_`,props:`disabled`},{default:a(()=>[i(l,{class:`a_btn a_btn_link`,text:`primary`,disabled:!0,href:`https://github.com/`}),i(l,{class:`a_btn a_btn_primary a_ml_2`,text:`primary`,disabled:!0,to:{name:`PageButton`}}),i(l,{class:`a_btn a_btn_secondary a_ml_2`,text:`secondary`,disabled:!0,href:`https://github.com/`}),i(l,{class:`a_btn a_btn_tertiary a_ml_2`,text:`tertiary`,disabled:!0,href:`https://github.com/`}),i(l,{class:`a_btn a_btn_success a_ml_2`,text:`success`,disabled:!0,href:`https://github.com/`}),i(l,{class:`a_btn a_btn_info a_ml_2`,text:`info`,disabled:!0,href:`https://github.com/`}),i(l,{class:`a_btn a_btn_warning a_ml_2`,text:`warning`,disabled:!0,href:`https://github.com/`}),i(l,{class:`a_btn a_btn_danger a_ml_2`,text:`danger`,disabled:!0,href:`https://github.com/`}),i(l,{class:`a_btn a_btn_dark a_ml_2`,text:`dark`,disabled:!0,href:`https://github.com/`}),i(l,{class:`a_btn a_btn_light a_ml_2`,text:`light`,disabled:!0,href:`https://github.com/`}),i(l,{class:`a_btn a_btn_outline_primary a_ml_2`,text:`outline-primary`,disabled:!0,href:`https://github.com/`}),i(l,{class:`a_btn a_btn_outline_secondary a_ml_2`,text:`outline-secondary`,disabled:!0,href:`https://github.com/`}),i(l,{class:`a_btn a_btn_outline_tertiary a_ml_2`,text:`outline-tertiary`,disabled:!0,href:`https://github.com/`}),i(l,{class:`a_btn a_btn_outline_success a_ml_2`,text:`outline-success`,disabled:!0,href:`https://github.com/`}),i(l,{class:`a_btn a_btn_outline_info a_ml_2`,text:`outline-info`,disabled:!0,href:`https://github.com/`}),i(l,{class:`a_btn a_btn_outline_warning a_ml_2`,text:`outline-warning`,disabled:!0,href:`https://github.com/`}),i(l,{class:`a_btn a_btn_outline_danger a_ml_2`,text:`outline-danger`,disabled:!0,href:`https://github.com/`}),i(l,{class:`a_btn a_btn_outline_dark a_ml_2`,text:`outline-dark`,disabled:!0,href:`https://github.com/`}),i(l,{class:`a_btn a_btn_outline_light a_ml_2`,text:`outline-light`,disabled:!0,href:`https://github.com/`}),i(l,{class:`a_btn a_btn_transparent_primary a_ml_2`,text:`transparent-primary`,disabled:!0,href:`https://github.com/`}),i(l,{class:`a_btn a_btn_transparent_secondary a_ml_2`,text:`transparent-secondary`,disabled:!0,href:`https://github.com/`}),i(l,{class:`a_btn a_btn_transparent_tertiary a_ml_2`,text:`transparent-tertiary`,disabled:!0,href:`https://github.com/`}),i(l,{class:`a_btn a_btn_transparent_success a_ml_2`,text:`transparent-success`,disabled:!0,href:`https://github.com/`}),i(l,{class:`a_btn a_btn_transparent_info a_ml_2`,text:`transparent-info`,disabled:!0,href:`https://github.com/`}),i(l,{class:`a_btn a_btn_transparent_warning a_ml_2`,text:`transparent-warning`,disabled:!0,href:`https://github.com/`}),i(l,{class:`a_btn a_btn_transparent_danger a_ml_2`,text:`transparent-danger`,disabled:!0,href:`https://github.com/`}),i(l,{class:`a_btn a_btn_transparent_dark a_ml_2`,text:`transparent-dark`,disabled:!0,href:`https://github.com/`}),i(l,{class:`a_btn a_btn_transparent_light a_ml_2`,text:`transparent-light`,disabled:!0,href:`https://github.com/`})]),_:1},8,[`code-html`,`code-js`])}var N=u(j,[[`render`,M]]);function P(){return{codeHtml:`<div
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
</div>`}}function F(){return{codeJs:`import { 
  ALink,
} from "aloha-vue";
    
export default {
  name: "PageLinkGroup",
  components: {
    ALink,
  },
};`}}var I={name:`PageLinkGroup`,components:{ALink:c,AlohaExample:f},setup(){let{codeHtml:e}=P(),{codeJs:t}=F();return{codeHtml:e,codeJs:t}}},L={class:`a_btn_group`},R={class:`a_btn_group a_ml_3`};function z(e,r,ee,c,te,l){let u=n(`a-link`),d=n(`aloha-example`);return s(),t(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_LINK_GROUP_GROUP_HEADER_`,description:`_A_LINK_GROUP_GROUP_DESCRIPTION_`},{default:a(()=>[o(`div`,L,[i(u,{class:`a_btn a_btn_primary`,text:`primary`,href:`https://github.com/`}),i(u,{class:`a_btn a_btn_secondary`,text:`secondary`,href:`https://github.com/`}),i(u,{class:`a_btn a_btn_success`,text:`success`,href:`https://github.com/`}),i(u,{class:`a_btn a_btn_info`,text:`info`,href:`https://github.com/`})]),o(`div`,R,[i(u,{class:`a_btn a_btn_outline_primary`,text:`outline-primary`,href:`https://github.com/`}),i(u,{class:`a_btn a_btn_outline_secondary`,text:`outline-secondary`,href:`https://github.com/`}),i(u,{class:`a_btn a_btn_outline_success`,text:`outline-success`,href:`https://github.com/`}),i(u,{class:`a_btn a_btn_outline_info`,text:`outline-info`,href:`https://github.com/`})])]),_:1},8,[`code-html`,`code-js`])}var B=u(I,[[`render`,z]]);function V(){return{codeHtml:`<div
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
};`}}var U={name:`PageLinkGroupHorizontalVertical`,components:{ALink:c,AlohaExample:f},setup(){let{codeHtml:e}=V(),{codeJs:t}=H();return{codeHtml:e,codeJs:t}}},W={class:`a_btn_group_vertical`},G={class:`a_btn_group`},K={class:`a_btn_group`},q={class:`a_btn_group`};function J(e,r,ee,c,te,l){let u=n(`a-link`),d=n(`aloha-example`);return s(),t(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_LINK_GROUP_GROUP_HORIZONTAL_VERTICAL_HEADER_`,description:`_A_LINK_GROUP_GROUP_HORIZONTAL_VERTICAL_DESCRIPTION_`},{default:a(()=>[o(`div`,W,[o(`div`,G,[i(u,{class:`a_btn a_btn_outline_primary`,text:`outline-primary`,href:`https://github.com/`}),i(u,{class:`a_btn a_btn_outline_secondary`,text:`outline-secondary`,href:`https://github.com/`}),i(u,{class:`a_btn a_btn_outline_success`,text:`outline-success`,href:`https://github.com/`}),i(u,{class:`a_btn a_btn_outline_info`,text:`outline-info`,href:`https://github.com/`})]),o(`div`,K,[i(u,{class:`a_btn a_btn_outline_primary`,text:`outline-primary`,href:`https://github.com/`}),i(u,{class:`a_btn a_btn_outline_secondary`,text:`outline-secondary`,href:`https://github.com/`}),i(u,{class:`a_btn a_btn_outline_success`,text:`outline-success`,href:`https://github.com/`}),i(u,{class:`a_btn a_btn_outline_info`,text:`outline-info`,href:`https://github.com/`})]),o(`div`,q,[i(u,{class:`a_btn a_btn_outline_primary`,text:`outline-primary`,href:`https://github.com/`}),i(u,{class:`a_btn a_btn_outline_secondary`,text:`outline-secondary`,href:`https://github.com/`}),i(u,{class:`a_btn a_btn_outline_success`,text:`outline-success`,href:`https://github.com/`}),i(u,{class:`a_btn a_btn_outline_info`,text:`outline-info`,href:`https://github.com/`})])])]),_:1},8,[`code-html`,`code-js`])}var Y=u(U,[[`render`,J]]);function X(){return{codeHtml:`<div
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
};`}}var Q={name:`PageLinkGroupSizes`,components:{ALink:c,AlohaExample:f},setup(){let{codeHtml:e}=X(),{codeJs:t}=Z();return{codeHtml:e,codeJs:t}}},ne={class:`a_btn_group a_btn_group_large`},re={class:`a_btn_group a_btn_group_small a_ml_3`};function ie(e,r,ee,c,te,l){let u=n(`a-link`),d=n(`aloha-example`);return s(),t(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_LINK_GROUP_GROUP_SIZES_HEADER_`,description:`_A_LINK_GROUP_GROUP_SIZES_DESCRIPTION_`},{default:a(()=>[o(`div`,ne,[i(u,{class:`a_btn a_btn_primary`,text:`primary`,href:`https://github.com/`}),i(u,{class:`a_btn a_btn_secondary`,text:`secondary`,href:`https://github.com/`}),i(u,{class:`a_btn a_btn_success`,text:`success`,href:`https://github.com/`}),i(u,{class:`a_btn a_btn_info`,text:`info`,href:`https://github.com/`})]),o(`div`,re,[i(u,{class:`a_btn a_btn_outline_primary`,text:`outline-primary`,href:`https://github.com/`}),i(u,{class:`a_btn a_btn_outline_secondary`,text:`outline-secondary`,href:`https://github.com/`}),i(u,{class:`a_btn a_btn_outline_success`,text:`outline-success`,href:`https://github.com/`}),i(u,{class:`a_btn a_btn_outline_info`,text:`outline-info`,href:`https://github.com/`})])]),_:1},8,[`code-html`,`code-js`])}var ae=u(Q,[[`render`,ie]]);function oe(){return{codeHtml:`<div
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
};`}}var ce={name:`PageLinkGroupVertical`,components:{ALink:c,AlohaExample:f},setup(){let{codeHtml:e}=oe(),{codeJs:t}=se();return{codeHtml:e,codeJs:t}}},le={class:`a_btn_group_vertical`},ue={class:`a_btn_group_vertical a_ml_3`};function de(e,r,ee,c,te,l){let u=n(`a-link`),d=n(`aloha-example`);return s(),t(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_LINK_GROUP_GROUP_VERTICAL_HEADER_`,description:`_A_LINK_GROUP_GROUP_VERTICAL_DESCRIPTION_`},{default:a(()=>[o(`div`,le,[i(u,{class:`a_btn a_btn_primary`,text:`primary`,href:`https://github.com/`}),i(u,{class:`a_btn a_btn_secondary`,text:`secondary`,href:`https://github.com/`}),i(u,{class:`a_btn a_btn_success`,text:`success`,href:`https://github.com/`}),i(u,{class:`a_btn a_btn_info`,text:`info`,href:`https://github.com/`})]),o(`div`,ue,[i(u,{class:`a_btn a_btn_outline_primary`,text:`outline-primary`,href:`https://github.com/`}),i(u,{class:`a_btn a_btn_outline_secondary`,text:`outline-secondary`,href:`https://github.com/`}),i(u,{class:`a_btn a_btn_outline_success`,text:`outline-success`,href:`https://github.com/`}),i(u,{class:`a_btn a_btn_outline_info`,text:`outline-info`,href:`https://github.com/`})])]),_:1},8,[`code-html`,`code-js`])}var fe=u(ce,[[`render`,de]]);function pe(){return{codeHtml:`<a-link
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
};`}}var he={name:`PageLinkHtml`,components:{ALink:c,AlohaExample:f},setup(){let{codeHtml:e}=pe(),{codeJs:t}=me();return{codeHtml:e,codeJs:t}}};function ge(e,r,o,ee,c,te){let l=n(`a-link`),u=n(`aloha-example`);return s(),t(u,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_LINK_GROUP_HTML_HEADER_`,description:`_A_LINK_GROUP_HTML_DESCRIPTION_`,props:`html`},{default:a(()=>[i(l,{class:`a_btn a_btn_primary`,html:`_A_LINK_EXAMPLE_HTML_`}),i(l,{class:`a_btn a_btn_primary a_ml_2`,html:`<span onclick='alert("Aloha")'>Aloha</button>`})]),_:1},8,[`code-html`,`code-js`])}var _e=u(he,[[`render`,ge]]);function ve(){return{codeHtml:`<a-link
  class="a_btn a_btn_primary"
  icon-left="Gear"
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
};`}}var be={name:`PageLinkIcons`,components:{ALink:c,AlohaExample:f},setup(){let{codeHtml:e}=ve(),{codeJs:t}=ye();return{codeHtml:e,codeJs:t}}};function xe(e,r,o,ee,c,te){let l=n(`a-link`),u=n(`aloha-example`);return s(),t(u,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_LINK_GROUP_ICONS_HEADER_`,description:`_A_LINK_GROUP_ICONS_DESCRIPTION_`,props:[`icon-left`,`icon-right`]},{default:a(()=>[i(l,{class:`a_btn a_btn_primary`,"icon-left":`Gear`,href:`https://github.com/`}),i(l,{class:`a_btn a_btn_primary a_ml_2`,"icon-left":`Gear`,text:`Aloha`,href:`https://github.com/`}),i(l,{class:`a_btn a_btn_primary a_ml_2`,"icon-right":`Gear`,text:`Aloha`,href:`https://github.com/`}),i(l,{class:`a_btn a_btn_primary a_ml_2`,"icon-left":`Gear`,"icon-right":`Gear`,text:`Aloha`,href:`https://github.com/`}),i(l,{class:`a_btn a_btn_primary a_ml_2`,"icon-left":`Gear`,"icon-right":`Gear`,href:`https://github.com/`})]),_:1},8,[`code-html`,`code-js`])}var Se=u(be,[[`render`,xe]]);function Ce(){return{codeHtml:`<a-link
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
};`}}var Te={name:`PageLinkLoading`,components:{AButton:ee,ALink:c,AlohaExample:f},setup(){let{codeHtml:e}=Ce(),{codeJs:t}=we(),n=r(!0);return{codeHtml:e,codeJs:t,loading:n,toggleLoading:()=>{n.value=!n.value}}}};function Ee(e,r,o,ee,c,te){let l=n(`a-link`),u=n(`a-button`),d=n(`aloha-example`);return s(),t(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_LINK_GROUP_LOADING_HEADER_`,description:`_A_LINK_GROUP_LOADING_DESCRIPTION_`,props:[`loading`,`loading-align`]},{default:a(()=>[i(l,{class:`a_btn a_btn_primary`,loading:e.loading,"loading-align":`left`,text:`loading-align="left"`,href:`https://github.com/`},null,8,[`loading`]),i(l,{class:`a_btn a_btn_primary a_ml_2`,loading:e.loading,"loading-align":`right`,text:`loading-align="right"`,href:`https://github.com/`},null,8,[`loading`]),i(u,{class:`a_btn a_btn_secondary a_ml_5`,text:`a-button toggle`,onClick:e.toggleLoading},null,8,[`onClick`])]),_:1},8,[`code-html`,`code-js`])}var De=u(Te,[[`render`,Ee]]);function Oe(){return{codeHtml:`<a-link
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
};`}}var Ae={name:`PageLinkOutline`,components:{ALink:c,AlohaExample:f},setup(){let{codeHtml:e}=Oe(),{codeJs:t}=ke();return{codeHtml:e,codeJs:t}}};function je(e,r,o,ee,c,te){let l=n(`a-link`),u=n(`aloha-example`);return s(),t(u,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_LINK_GROUP_OUTLINE_HEADER_`,description:`_A_LINK_GROUP_OUTLINE_DESCRIPTION_`,props:`class`},{default:a(()=>[i(l,{class:`a_btn a_btn_outline_primary`,text:`outline-primary`,href:`https://github.com/`}),i(l,{class:`a_btn a_btn_outline_secondary a_ml_2`,text:`outline-secondary`,href:`https://github.com/`}),i(l,{class:`a_btn a_btn_outline_tertiary a_ml_2`,text:`outline-tertiary`,href:`https://github.com/`}),i(l,{class:`a_btn a_btn_outline_success a_ml_2`,text:`outline-success`,href:`https://github.com/`}),i(l,{class:`a_btn a_btn_outline_info a_ml_2`,text:`outline-info`,href:`https://github.com/`}),i(l,{class:`a_btn a_btn_outline_warning a_ml_2`,text:`outline-warning`,href:`https://github.com/`}),i(l,{class:`a_btn a_btn_outline_danger a_ml_2`,text:`outline-danger`,href:`https://github.com/`}),i(l,{class:`a_btn a_btn_outline_dark a_ml_2`,text:`outline-dark`,href:`https://github.com/`}),i(l,{class:`a_btn a_btn_outline_light a_ml_2`,text:`outline-light`,href:`https://github.com/`})]),_:1},8,[`code-html`,`code-js`])}var Me=u(Ae,[[`render`,je]]);function Ne(){return{codeHtml:`<a-link
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
};`}}var Fe={name:`PageLinkSafeHtml`,components:{ALink:c,AlohaExample:f},setup(){let{codeHtml:e}=Ne(),{codeJs:t}=Pe();return{codeHtml:e,codeJs:t}}};function Ie(e,r,o,ee,c,te){let l=n(`a-link`),u=n(`aloha-example`);return s(),t(u,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_LINK_GROUP_SAFE_HTML_HEADER_`,description:`_A_LINK_GROUP_SAFE_HTML_DESCRIPTION_`,props:`safe-html`},{default:a(()=>[i(l,{class:`a_btn a_btn_primary`,"safe-html":`_A_LINK_EXAMPLE_HTML_`}),i(l,{class:`a_btn a_btn_primary a_ml_2`,"safe-html":`<span onclick='alert("Aloha")'>Aloha</button>`})]),_:1},8,[`code-html`,`code-js`])}var Le=u(Fe,[[`render`,Ie]]);function Re(){return{codeHtml:`<a-link
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
};`}}var Be={name:`PageLinkSizes`,components:{ALink:c,AlohaExample:f},setup(){let{codeHtml:e}=Re(),{codeJs:t}=ze();return{codeHtml:e,codeJs:t}}};function Ve(e,r,o,ee,c,te){let l=n(`a-link`),u=n(`aloha-example`);return s(),t(u,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_LINK_GROUP_SIZES_HEADER_`,description:`_A_LINK_GROUP_SIZES_DESCRIPTION_`,props:`class`},{default:a(()=>[i(l,{class:`a_btn a_btn_primary a_btn_large`,text:`large`,href:`https://github.com/`}),i(l,{class:`a_btn a_btn_primary a_btn_small a_ml_2`,text:`small`,href:`https://github.com/`})]),_:1},8,[`code-html`,`code-js`])}var He=u(Be,[[`render`,Ve]]);function Ue(){return{codeHtml:`<a-link
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
};`}}var Ge={name:`PageLinkSlotAppend`,components:{ALink:c,AlohaExample:f},setup(){let{codeHtml:e}=Ue(),{codeJs:t}=We();return{codeHtml:e,codeJs:t}}};function Ke(e,r,ee,c,te,l){let u=n(`a-link`),d=n(`aloha-example`);return s(),t(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_LINK_GROUP_SLOT_APPEND_HEADER_`,description:`_A_LINK_GROUP_SLOT_APPEND_DESCRIPTION_`,slots:`linkAppend`},{default:a(()=>[i(u,{class:`a_btn a_btn_primary`,text:`Aloha`,href:`https://github.com/`},{linkAppend:a(()=>[...r[0]||=[o(`span`,null,`(***)`,-1)]]),_:1})]),_:1},8,[`code-html`,`code-js`])}var qe=u(Ge,[[`render`,Ke]]);function Je(){return{codeHtml:`<a-link
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
};`}}var Xe={name:`PageLinkSlotDefault`,components:{ALink:c,AlohaExample:f},setup(){let{codeHtml:e}=Je(),{codeJs:t}=Ye();return{codeHtml:e,codeJs:t}}};function Ze(e,r,ee,c,te,l){let u=n(`a-link`),d=n(`aloha-example`);return s(),t(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_LINK_GROUP_SLOT_DEFAULT_HEADER_`,description:`_A_LINK_GROUP_SLOT_DEFAULT_DESCRIPTION_`,slots:`default`},{default:a(()=>[i(u,{class:`a_btn a_btn_primary`,href:`https://github.com/`},{default:a(()=>[...r[0]||=[o(`span`,null,`(Aloha)`,-1)]]),_:1})]),_:1},8,[`code-html`,`code-js`])}var Qe=u(Xe,[[`render`,Ze]]);function $e(){return{codeHtml:`<a-link
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
};`}}var tt={name:`PageLinkSlotPrepend`,components:{ALink:c,AlohaExample:f},setup(){let{codeHtml:e}=$e(),{codeJs:t}=et();return{codeHtml:e,codeJs:t}}};function nt(e,r,ee,c,te,l){let u=n(`a-link`),d=n(`aloha-example`);return s(),t(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_LINK_GROUP_SLOT_PREPEND_HEADER_`,description:`_A_LINK_GROUP_SLOT_PREPEND_DESCRIPTION_`,slots:`linkPrepend`},{default:a(()=>[i(u,{class:`a_btn a_btn_primary`,text:`Aloha`,href:`https://github.com/`},{linkPrepend:a(()=>[...r[0]||=[o(`span`,null,`(***)`,-1)]]),_:1})]),_:1},8,[`code-html`,`code-js`])}var rt=u(tt,[[`render`,nt]]);function it(){return{codeHtml:`<a-link
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
};`}}var ot={name:`PageLinkSlotTitle`,components:{ALink:c,AlohaExample:f},setup(){let{codeHtml:e}=it(),{codeJs:t}=at();return{codeHtml:e,codeJs:t}}};function st(e,r,ee,c,te,l){let u=n(`a-link`),d=n(`aloha-example`);return s(),t(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_LINK_GROUP_SLOT_TITLE_HEADER_`,description:`_A_LINK_GROUP_SLOT_TITLE_DESCRIPTION_`,slots:`linkTitle`},{default:a(()=>[i(u,{class:`a_btn a_btn_primary`,text:`Aloha`,"is-title-html":!0,href:`https://github.com/`},{linkTitle:a(()=>[...r[0]||=[o(`strong`,null,`(***Aloha***)`,-1)]]),_:1})]),_:1},8,[`code-html`,`code-js`])}var ct=u(ot,[[`render`,st]]);function lt(){return{codeHtml:`<a-link
  class="a_btn a_btn_primary"
  text="_SHOW_MORE_"
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
};`}}var dt={name:`PageLinkTextAfterBefore`,components:{ALink:c,AlohaExample:f},setup(){let{codeHtml:e}=lt(),{codeJs:t}=ut();return{codeHtml:e,codeJs:t}}};function ft(e,r,o,ee,c,te){let l=n(`a-link`),u=n(`aloha-example`);return s(),t(u,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_LINK_GROUP_TEXT_AFTER_BEFORE_HEADER_`,description:`_A_LINK_GROUP_TEXT_AFTER_BEFORE_DESCRIPTION_`,props:[`text-before`,`text-after`]},{default:a(()=>[i(l,{class:`a_btn a_btn_primary`,text:`_SHOW_MORE_`,"text-after":` €`,"text-before":`$ `,href:`https://github.com/`})]),_:1},8,[`code-html`,`code-js`])}var pt=u(dt,[[`render`,ft]]);function mt(){return{codeHtml:`<a-link
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
};`}}var gt={name:`PageLinkTextObject`,components:{ALink:c,AlohaExample:f},setup(){let{codeHtml:e}=mt(),{codeJs:t}=ht();return{codeHtml:e,codeJs:t}}};function _t(e,r,o,ee,c,te){let l=n(`a-link`),u=n(`aloha-example`);return s(),t(u,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_LINK_GROUP_TEXT_OBJECT_HEADER_`,description:`_A_LINK_GROUP_TEXT_OBJECT_DESCRIPTION_`,props:`text (as object)`},{default:a(()=>[i(l,{class:`a_btn a_btn_primary`,text:{mobile:`Aloha`,desktop:`Aloha-desktop`},href:`https://github.com/`})]),_:1},8,[`code-html`,`code-js`])}var vt=u(gt,[[`render`,_t]]);function yt(){return{codeHtml:`<a-link
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
};`}}var xt={name:`PageLinkTextTag`,components:{ALink:c,AlohaExample:f},setup(){let{codeHtml:e}=yt(),{codeJs:t}=bt();return{codeHtml:e,codeJs:t}}};function St(e,r,o,ee,c,te){let l=n(`a-link`),u=n(`aloha-example`);return s(),t(u,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_LINK_GROUP_TEXT_TAG_HEADER_`,description:`_A_LINK_GROUP_TEXT_TAG_DESCRIPTION_`,props:`text-tag`},{default:a(()=>[i(l,{class:`a_btn a_btn_secondary`,text:`Aloha`,"text-tag":`strong`,href:`https://github.com/`})]),_:1},8,[`code-html`,`code-js`])}var Ct=u(xt,[[`render`,St]]);function wt(){return{codeHtml:`<a-link
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
};`}}var Et={name:`PageLinkTitleArray`,components:{ALink:c,AlohaExample:f},setup(){let{codeHtml:e}=wt(),{codeJs:t}=Tt();return{codeHtml:e,codeJs:t}}};function Dt(e,r,o,ee,c,te){let l=n(`a-link`),u=n(`aloha-example`);return s(),t(u,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_LINK_GROUP_TITLE_ARRAY_HEADER_`,description:`_A_LINK_GROUP_TITLE_ARRAY_DESCRIPTION_`,props:`title (as array)`},{default:a(()=>[i(l,{class:`a_btn a_btn_primary`,title:[`Aloha`,`$(Aloha)`],text:`Aloha`,href:`https://github.com/`})]),_:1},8,[`code-html`,`code-js`])}var Ot=u(Et,[[`render`,Dt]]);function kt(){return{codeHtml:`<a-link
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
};`}}var jt={name:`PageLinkTitleHtml`,components:{ALink:c,AlohaExample:f},setup(){let{codeHtml:e}=kt(),{codeJs:t}=At();return{codeHtml:e,codeJs:t}}};function Mt(e,r,o,ee,c,te){let l=n(`a-link`),u=n(`aloha-example`);return s(),t(u,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_LINK_GROUP_TITLE_HTML_HEADER_`,description:`_A_LINK_GROUP_TITLE_HTML_DESCRIPTION_`,props:[`title`,`is-title-html`,`title-placement`]},{default:a(()=>[i(l,{class:`a_btn a_btn_success a_mt_2`,title:`_A_LINK_EXAMPLE_BIG_TITLE_`,text:`placement: top`,"is-title-html":!0,"title-placement":`top`,href:`https://github.com/`}),i(l,{class:`a_btn a_btn_success a_ml_2 a_mt_2`,title:`_A_LINK_EXAMPLE_BIG_TITLE_`,text:`placement: auto`,"is-title-html":!0,"title-placement":`auto`,href:`https://github.com/`}),i(l,{class:`a_btn a_btn_success a_ml_2 a_mt_2`,title:`_A_LINK_EXAMPLE_BIG_TITLE_`,text:`placement: auto-start`,"is-title-html":!0,"title-placement":`auto-start`,href:`https://github.com/`}),i(l,{class:`a_btn a_btn_success a_ml_2 a_mt_2`,title:`_A_LINK_EXAMPLE_BIG_TITLE_`,text:`placement: auto-end`,"is-title-html":!0,"title-placement":`auto-end`,href:`https://github.com/`}),i(l,{class:`a_btn a_btn_success a_ml_2 a_mt_2`,title:`_A_LINK_EXAMPLE_BIG_TITLE_`,text:`placement: top-start`,"is-title-html":!0,"title-placement":`top-start`,href:`https://github.com/`}),i(l,{class:`a_btn a_btn_success a_ml_2 a_mt_2`,title:`_A_LINK_EXAMPLE_BIG_TITLE_`,text:`placement: top-end`,"is-title-html":!0,"title-placement":`top-end`,href:`https://github.com/`}),i(l,{class:`a_btn a_btn_success a_ml_2 a_mt_2`,title:`_A_LINK_EXAMPLE_BIG_TITLE_`,text:`placement: right`,"is-title-html":!0,"title-placement":`right`,href:`https://github.com/`}),i(l,{class:`a_btn a_btn_success a_ml_2 a_mt_2`,title:`_A_LINK_EXAMPLE_BIG_TITLE_`,text:`placement: right-start`,"is-title-html":!0,"title-placement":`right-start`,href:`https://github.com/`}),i(l,{class:`a_btn a_btn_success a_ml_2 a_mt_2`,title:`_A_LINK_EXAMPLE_BIG_TITLE_`,text:`placement: right-end`,"is-title-html":!0,"title-placement":`right-end`,href:`https://github.com/`}),i(l,{class:`a_btn a_btn_success a_ml_2 a_mt_2`,title:`_A_LINK_EXAMPLE_BIG_TITLE_`,text:`placement: bottom`,"is-title-html":!0,"title-placement":`bottom`,href:`https://github.com/`}),i(l,{class:`a_btn a_btn_success a_ml_2 a_mt_2`,title:`_A_LINK_EXAMPLE_BIG_TITLE_`,text:`placement: bottom-start`,"is-title-html":!0,"title-placement":`bottom-start`,href:`https://github.com/`}),i(l,{class:`a_btn a_btn_success a_ml_2 a_mt_2`,title:`_A_LINK_EXAMPLE_BIG_TITLE_`,text:`placement: bottom-end`,"is-title-html":!0,"title-placement":`bottom-end`,href:`https://github.com/`}),i(l,{class:`a_btn a_btn_success a_ml_2 a_mt_2`,title:`_A_LINK_EXAMPLE_BIG_TITLE_`,text:`placement: left`,"is-title-html":!0,"title-placement":`left`,href:`https://github.com/`}),i(l,{class:`a_btn a_btn_success a_ml_2 a_mt_2`,title:`_A_LINK_EXAMPLE_BIG_TITLE_`,text:`placement: left-start`,"is-title-html":!0,"title-placement":`left-start`,href:`https://github.com/`}),i(l,{class:`a_btn a_btn_success a_ml_2 a_mt_2`,title:`_A_LINK_EXAMPLE_BIG_TITLE_`,text:`placement: left-end`,"is-title-html":!0,"title-placement":`left-end`,href:`https://github.com/`}),i(l,{class:`a_btn a_btn_success a_ml_2 a_mt_2`,title:`_A_LINK_EXAMPLE_BIG_TITLE_`,text:`placement: auto, html-title max-width 150`,"is-title-html":!0,"title-placement":`auto`,"title-attributes":{maxWidth:150},href:`https://github.com/`})]),_:1},8,[`code-html`,`code-js`])}var Nt=u(jt,[[`render`,Mt]]);function $(){return{codeHtml:`<a-link
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
};`}}var Ft={name:`PageLinkTransparent`,components:{ALink:c,AlohaExample:f},setup(){let{codeHtml:e}=$(),{codeJs:t}=Pt();return{codeHtml:e,codeJs:t}}};function It(e,r,o,ee,c,te){let l=n(`a-link`),u=n(`aloha-example`);return s(),t(u,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_LINK_GROUP_TRANSPARENT_HEADER_`,description:`_A_LINK_GROUP_TRANSPARENT_DESCRIPTION_`,props:`class`},{default:a(()=>[i(l,{class:`a_btn a_btn_transparent_primary`,text:`transparent-primary`,href:`https://github.com/`}),i(l,{class:`a_btn a_btn_transparent_secondary a_ml_2`,text:`transparent-secondary`,href:`https://github.com/`}),i(l,{class:`a_btn a_btn_transparent_tertiary a_ml_2`,text:`transparent-tertiary`,href:`https://github.com/`}),i(l,{class:`a_btn a_btn_transparent_success a_ml_2`,text:`transparent-success`,href:`https://github.com/`}),i(l,{class:`a_btn a_btn_transparent_info a_ml_2`,text:`transparent-info`,href:`https://github.com/`}),i(l,{class:`a_btn a_btn_transparent_warning a_ml_2`,text:`transparent-warning`,href:`https://github.com/`}),i(l,{class:`a_btn a_btn_transparent_danger a_ml_2`,text:`transparent-danger`,href:`https://github.com/`}),i(l,{class:`a_btn a_btn_transparent_dark a_ml_2`,text:`transparent-dark`,href:`https://github.com/`}),i(l,{class:`a_btn a_btn_transparent_light a_ml_2`,text:`transparent-light`,href:`https://github.com/`})]),_:1},8,[`code-html`,`code-js`])}var Lt=u(Ft,[[`render`,It]]);function Rt(){return{dataExposes:[{name:`buttonRef`,description:`_A_SHOW_MORE_EXPOSES_BUTTON_REF_DESCRIPTION_`,type:`Object`},{name:`containerRef`,description:`_A_SHOW_MORE_EXPOSES_CONTAINER_REF_DESCRIPTION_`,type:`Object`},{name:`isButtonVisible`,description:`_A_SHOW_MORE_EXPOSES_IS_BUTTON_VISIBLE_DESCRIPTION_`,type:`Boolean`},{name:`isOpen`,description:`_A_SHOW_MORE_EXPOSES_IS_OPEN_DESCRIPTION_`,type:`Boolean`},{name:`toggleButton`,description:`_A_SHOW_MORE_EXPOSES_TOGGLE_BUTTON_DESCRIPTION_`,type:`Function`}]}}function zt(){let t=e(()=>l({placeholder:`_A_LINK_COMPONENT_NAME_`}));return{pageTitle:e(()=>`ALink${t.value?` (${t.value})`:``}`)}}function Bt(){return{dataProps:[{name:`always-translate`,description:`_A_TRANSLATION_PROPS_ALWAYS_TRANSLATE_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`attributes`,description:`_A_LINK_PROPS_ATTRIBUTES_DESCRIPTION_`,type:`Object`,default:`() => ({})`,required:!1},{name:`class`,description:`_A_LINK_PROPS_CLASS_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`class-default`,description:`_A_LINK_PROPS_CLASS_DEFAULT_DESCRIPTION_`,type:`String`,default:`aloha_element`,required:!1},{name:`class-default-hidden`,description:`_A_LINK_PROPS_CLASS_DEFAULT_HIDDEN_DESCRIPTION_`,type:`String`,default:`aloha_element__hidden`,required:!1},{name:`class-disabled`,description:`_A_LINK_PROPS_CLASS_DISABLED_DESCRIPTION_`,type:`String`,default:`disabled`,required:!1},{name:`disabled`,description:`_A_LINK_PROPS_DISABLED_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`extra`,description:`_A_LINK_PROPS_EXTRA_DESCRIPTION_`,type:`Object`,default:void 0,required:!1},{name:`href`,description:`_A_LINK_PROPS_HREF_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`html`,description:`_A_LINK_PROPS_HTML_DESCRIPTION_`,type:`String / Number / Object / Array`,default:void 0,required:!1},{name:`html-screen-reader`,description:`_A_LINK_PROPS_HTML_SCREEN_READER_DESCRIPTION_`,type:`String / Number / Object / Array`,default:void 0,required:!1},{name:`icon-attributes`,description:`_A_LINK_PROPS_ICON_ATTRIBUTES_DESCRIPTION_`,type:`Object`,default:`() => ({})`,required:!1},{name:`icon-class`,description:`_A_LINK_PROPS_ICON_CLASS_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`icon-left`,description:`_A_LINK_PROPS_ICON_LEFT_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`icon-right`,description:`_A_LINK_PROPS_ICON_RIGHT_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`icon-tag`,description:`_A_LINK_PROPS_ICON_TAG_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`id`,description:`_A_LINK_PROPS_ID_DESCRIPTION_`,type:`String`,default:`() => uniqueId("a_link_")`,required:!1},{name:`is-title-html`,description:`_A_LINK_PROPS_IS_TITLE_HTML_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`loading`,description:`_A_LINK_PROPS_LOADING_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`loading-align`,description:`_A_LINK_PROPS_LOADING_ALIGN_DESCRIPTION_`,type:`String`,default:`right`,required:!1},{name:`loading-class`,description:`_A_LINK_PROPS_LOADING_CLASS_DESCRIPTION_`,type:`String / Object`,default:`a_spinner_small`,required:!1},{name:`prevent-keyboard-repeat`,description:`_A_ELEMENT_PROPS_PREVENT_KEYBOARD_REPEAT_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`safe-html`,description:`_A_LINK_PROPS_SAFE_HTML_DESCRIPTION_`,type:`String / Number / Object / Array`,default:void 0,required:!1},{name:`safe-html-screen-reader`,description:`_A_LINK_PROPS_SAFE_HTML_SCREEN_READER_DESCRIPTION_`,type:`String / Number / Object / Array`,default:void 0,required:!1},{name:`target`,description:`_A_LINK_PROPS_TARGET_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`text`,description:`_A_LINK_PROPS_TEXT_DESCRIPTION_`,type:`String / Number / Object / Array`,default:void 0,required:!1},{name:`text-after`,description:`_A_LINK_PROPS_TEXT_AFTER_DESCRIPTION_`,type:`String / Number / Object`,default:void 0,required:!1},{name:`text-aria-hidden`,description:`_A_LINK_PROPS_TEXT_ARIA_HIDDEN_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`text-before`,description:`_A_LINK_PROPS_TEXT_BEFORE_DESCRIPTION_`,type:`String / Number / Object`,default:void 0,required:!1},{name:`text-class`,description:`_A_LINK_PROPS_TEXT_CLASS_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`text-screen-reader`,description:`_A_LINK_PROPS_TEXT_SCREEN_READER_DESCRIPTION_`,type:`String / Number / Object / Array`,default:void 0,required:!1},{name:`text-tag`,description:`_A_LINK_PROPS_TEXT_TAG_DESCRIPTION_`,type:`String`,default:`span`,required:!1},{name:`title`,description:`_A_LINK_PROPS_TITLE_DESCRIPTION_`,type:`String / Number / Object / Array`,default:void 0,required:!1},{name:`title-attributes`,description:`_A_LINK_PROPS_TITLE_ATTRIBUTES_DESCRIPTION_`,type:`Object`,default:`{}`,required:!1},{name:`title-placement`,description:`_A_LINK_PROPS_TITLE_PLACEMENT_DESCRIPTION_`,type:`String`,default:`top`,required:!1},{name:`title-z-index`,description:`_A_LINK_PROPS_TITLE_Z_INDEX_DESCRIPTION_`,type:`String / Number`,default:`auto`,required:!1},{name:`to`,description:`_A_LINK_PROPS_TO_DESCRIPTION_`,type:`Object / String`,default:void 0,required:!1}]}}function Vt(){return{dataSlots:[{name:`linkAppend`,description:`_A_LINK_SLOT_LINK_APPEND_DESCRIPTION_`},{name:`linkPrepend`,description:`_A_LINK_SLOT_LINK_PREPEND_DESCRIPTION_`},{name:`linkTitle`,description:`_A_LINK_SLOT_LINK_TITLE_DESCRIPTION_`},{name:`default`,description:`_A_LINK_SLOT_DEFAULT_DESCRIPTION_`}]}}var Ht={name:`PageLink`,components:{AlohaPage:d,AlohaTableProps:p,ATranslation:te,PageLinkBasic:v,PageLinkClass:C,PageLinkComplex:O,PageLinkDisabled:N,PageLinkGroup:B,PageLinkGroupHorizontalVertical:Y,PageLinkGroupSizes:ae,PageLinkGroupVertical:fe,PageLinkHtml:_e,PageLinkIcons:Se,PageLinkLoading:De,PageLinkOutline:Me,PageLinkSafeHtml:Le,PageLinkSizes:He,PageLinkSlotAppend:qe,PageLinkSlotDefault:Qe,PageLinkSlotPrepend:rt,PageLinkSlotTitle:ct,PageLinkTextAfterBefore:pt,PageLinkTextObject:vt,PageLinkTextTag:Ct,PageLinkTitleArray:Ot,PageLinkTitleHtml:Nt,PageLinkTransparent:Lt},setup(){let{pageTitle:e}=zt(),{dataProps:t}=Bt(),{dataSlots:n}=Vt(),{dataExposes:r}=Rt();return{dataExposes:r,dataProps:t,dataSlots:n,pageTitle:e}}};function Ut(e,r,o,ee,c,te){let l=n(`a-translation`),u=n(`page-link-basic`),d=n(`page-link-class`),f=n(`page-link-outline`),p=n(`page-link-transparent`),m=n(`page-link-sizes`),h=n(`page-link-group`),g=n(`page-link-group-vertical`),_=n(`page-link-group-horizontal-vertical`),v=n(`page-link-group-sizes`),y=n(`page-link-icons`),b=n(`page-link-disabled`),x=n(`page-link-loading`),S=n(`page-link-text-after-before`),C=n(`page-link-text-tag`),w=n(`page-link-safe-html`),T=n(`page-link-html`),E=n(`page-link-text-object`),D=n(`page-link-title-array`),O=n(`page-link-title-html`),k=n(`page-link-slot-default`),A=n(`page-link-slot-prepend`),j=n(`page-link-slot-append`),M=n(`page-link-slot-title`),N=n(`page-link-complex`),P=n(`aloha-table-props`),F=n(`aloha-page`);return s(),t(F,{"page-title":e.pageTitle},{body:a(()=>[i(l,{tag:`p`,html:`_A_LINK_COMPONENT_DESCRIPTION_`}),i(u),i(d),i(f),i(p),i(m),i(h),i(g),i(_),i(v),i(y),i(b),i(x),i(S),i(C),i(w),i(T),i(E),i(D),i(O),i(k),i(A),i(j),i(M),i(N),i(P,{data:e.dataProps},null,8,[`data`]),i(P,{"table-label":`Slots`,data:e.dataSlots,columns:[`name`,`description`]},null,8,[`data`])]),_:1},8,[`page-title`])}var Wt=u(Ht,[[`render`,Ut]]);export{Wt as default};