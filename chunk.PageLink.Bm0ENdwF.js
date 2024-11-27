import{A as h,a as M}from"./chunk.AlohaExample.BT0L4sPf.js";import{A as X}from"./chunk.AlohaTableProps.AKmRY_Bl.js";import{a0 as d,_ as c,b as q,g as w,A as F}from"./bundle.index.CgpAdSdY.js";import{m as a,C as r,L as l,B as m,G as e,F as b,r as z,a as k}from"./chunk.vendor.D-Y3mz6a.js";import"./chunk.vendor-lodash.ClBXVCWL.js";import"./chunk.ATable.DALhqzqJ.js";import"./chunk.utilsMath.7PmiGUbm.js";import"./chunk.AForm.CpIOokJc.js";import"./chunk.ADatepicker.BS_Ghotq.js";import"./chunk.UiMixinProps.BVfs3aDc.js";import"./chunk.AInputNumber.C93fy0SX.js";import"./chunk.ATinymce.1a39zYU1.js";import"./chunk.vendor-tinymce.2RT9eEW9.js";function V(){return{codeHtml:`<a-Link
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
</a-Link>`}}function W(){return{codeJs:`import ALink from "aloha-vue/src/ALink/ALink";
    
export default {
  name: "PageLinkBasic",
  components: {
    ALink,
  },
};`}}const Z={name:"PageLinkBasic",components:{ALink:d,AlohaExample:h},setup(){const{codeHtml:t}=V(),{codeJs:_}=W();return{codeHtml:t,codeJs:_}}};function Y(t,_,o,i,p,u){const n=a("a-link"),s=a("aloha-example");return m(),r(s,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_BASIC_USAGE_",props:["text","href","to"]},{default:l(()=>[e(n,{text:"https://github.com/",href:"https://github.com/"}),e(n,{class:"a_ml_2",text:"Aloha",to:{name:"PageButton"}}),e(n,{class:"a_ml_2",text:"Aloha",to:"/button"})]),_:1},8,["code-html","code-js"])}const Q=c(Z,[["render",Y]]);function tt(){return{codeHtml:`<a-link
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
</a-link>`}}function et(){return{codeJs:`import Alink from "aloha-vue/src/Alink/Alink";
    
export default {
  name: "PageLinkClass",
  components: {
    Alink,
  },
};`}}const nt={name:"PageLinkClass",components:{ALink:d,AlohaExample:h},setup(){const{codeHtml:t}=tt(),{codeJs:_}=et();return{codeHtml:t,codeJs:_}}};function at(t,_,o,i,p,u){const n=a("a-link"),s=a("aloha-example");return m(),r(s,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_LINK_GROUP_CLASS_HEADER_",description:"_A_LINK_GROUP_CLASS_DESCRIPTION_",props:"class"},{default:l(()=>[e(n,{class:"a_btn a_btn_link",text:"link",href:"https://github.com/"}),e(n,{class:"a_btn a_btn_primary a_ml_2",text:"primary",href:"https://github.com/"}),e(n,{class:"a_btn a_btn_secondary a_ml_2",text:"secondary",href:"https://github.com/"}),e(n,{class:"a_btn a_btn_tertiary a_ml_2",text:"tertiary",href:"https://github.com/"}),e(n,{class:"a_btn a_btn_success a_ml_2",text:"success",href:"https://github.com/"}),e(n,{class:"a_btn a_btn_info a_ml_2",text:"info",href:"https://github.com/"}),e(n,{class:"a_btn a_btn_warning a_ml_2",text:"warning",href:"https://github.com/"}),e(n,{class:"a_btn a_btn_danger a_ml_2",text:"danger",href:"https://github.com/"}),e(n,{class:"a_btn a_btn_dark a_ml_2",text:"dark",href:"https://github.com/"}),e(n,{class:"a_btn a_btn_light a_ml_2",text:"light",href:"https://github.com/"})]),_:1},8,["code-html","code-js"])}const _t=c(nt,[["render",at]]);function st(){return{codeHtml:`<a-link
  class="a_btn a_btn_primary"
  :text="{ desktop: 'Aloha' }"
  :text-before="{ desktop: '$ ' }"
  :icon-left="{ desktop: 'Dnd', mobile: 'Cog' }"
  :icon-right="{ mobile: 'Cog' }"
  :title="{ desktop: 'Aloha' }"
  :text-aria-hidden="true"
  :text-screen-reader="{ desktop: 'Aloha', mobile: 'Aloha-mobile' }"
  href="https://github.com/"
>
</a-link>`}}function ot(){return{codeJs:`import ALink from "aloha-vue/src/ALink/ALink";
    
export default {
  name: "PageLinkComplex",
  components: {
    ALink,
  },
};`}}const lt={name:"PageLinkComplex",components:{ALink:d,AlohaExample:h},setup(){const{codeHtml:t}=st(),{codeJs:_}=ot();return{codeHtml:t,codeJs:_}}};function it(t,_,o,i,p,u){const n=a("a-link"),s=a("aloha-example");return m(),r(s,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_LINK_GROUP_COMPLEX_HEADER_",description:"_A_LINK_GROUP_COMPLEX_DESCRIPTION_"},{default:l(()=>[e(n,{class:"a_btn a_btn_primary",text:{desktop:"Aloha"},"text-before":{desktop:"$ "},"icon-left":{desktop:"Dnd",mobile:"Cog"},"icon-right":{mobile:"Cog"},title:{desktop:"Aloha"},"text-aria-hidden":!0,"text-screen-reader":{desktop:"Aloha",mobile:"Aloha-mobile"},href:"https://github.com/"})]),_:1},8,["code-html","code-js"])}const ct=c(lt,[["render",it]]);function rt(){return{codeHtml:`<a-link
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
</a-link>`}}function mt(){return{codeJs:`import ALink from "aloha-vue/src/ALink/ALink";
    
export default {
  name: "PageLinkDisabled",
  components: {
    ALink,
  },
};`}}const pt={name:"PageLinkDisabled",components:{ALink:d,AlohaExample:h},setup(){const{codeHtml:t}=rt(),{codeJs:_}=mt();return{codeHtml:t,codeJs:_}}};function ut(t,_,o,i,p,u){const n=a("a-link"),s=a("aloha-example");return m(),r(s,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_LINK_GROUP_DISABLED_HEADER_",description:"_A_LINK_GROUP_DISABLED_DESCRIPTION_",props:"disabled"},{default:l(()=>[e(n,{class:"a_btn a_btn_link",text:"primary",disabled:!0,href:"https://github.com/"}),e(n,{class:"a_btn a_btn_primary a_ml_2",text:"primary",disabled:!0,to:{name:"PageButton"}}),e(n,{class:"a_btn a_btn_secondary a_ml_2",text:"secondary",disabled:!0,href:"https://github.com/"}),e(n,{class:"a_btn a_btn_tertiary a_ml_2",text:"tertiary",disabled:!0,href:"https://github.com/"}),e(n,{class:"a_btn a_btn_success a_ml_2",text:"success",disabled:!0,href:"https://github.com/"}),e(n,{class:"a_btn a_btn_info a_ml_2",text:"info",disabled:!0,href:"https://github.com/"}),e(n,{class:"a_btn a_btn_warning a_ml_2",text:"warning",disabled:!0,href:"https://github.com/"}),e(n,{class:"a_btn a_btn_danger a_ml_2",text:"danger",disabled:!0,href:"https://github.com/"}),e(n,{class:"a_btn a_btn_dark a_ml_2",text:"dark",disabled:!0,href:"https://github.com/"}),e(n,{class:"a_btn a_btn_light a_ml_2",text:"light",disabled:!0,href:"https://github.com/"}),e(n,{class:"a_btn a_btn_outline_primary a_ml_2",text:"outline-primary",disabled:!0,href:"https://github.com/"}),e(n,{class:"a_btn a_btn_outline_secondary a_ml_2",text:"outline-secondary",disabled:!0,href:"https://github.com/"}),e(n,{class:"a_btn a_btn_outline_tertiary a_ml_2",text:"outline-tertiary",disabled:!0,href:"https://github.com/"}),e(n,{class:"a_btn a_btn_outline_success a_ml_2",text:"outline-success",disabled:!0,href:"https://github.com/"}),e(n,{class:"a_btn a_btn_outline_info a_ml_2",text:"outline-info",disabled:!0,href:"https://github.com/"}),e(n,{class:"a_btn a_btn_outline_warning a_ml_2",text:"outline-warning",disabled:!0,href:"https://github.com/"}),e(n,{class:"a_btn a_btn_outline_danger a_ml_2",text:"outline-danger",disabled:!0,href:"https://github.com/"}),e(n,{class:"a_btn a_btn_outline_dark a_ml_2",text:"outline-dark",disabled:!0,href:"https://github.com/"}),e(n,{class:"a_btn a_btn_outline_light a_ml_2",text:"outline-light",disabled:!0,href:"https://github.com/"}),e(n,{class:"a_btn a_btn_transparent_primary a_ml_2",text:"transparent-primary",disabled:!0,href:"https://github.com/"}),e(n,{class:"a_btn a_btn_transparent_secondary a_ml_2",text:"transparent-secondary",disabled:!0,href:"https://github.com/"}),e(n,{class:"a_btn a_btn_transparent_tertiary a_ml_2",text:"transparent-tertiary",disabled:!0,href:"https://github.com/"}),e(n,{class:"a_btn a_btn_transparent_success a_ml_2",text:"transparent-success",disabled:!0,href:"https://github.com/"}),e(n,{class:"a_btn a_btn_transparent_info a_ml_2",text:"transparent-info",disabled:!0,href:"https://github.com/"}),e(n,{class:"a_btn a_btn_transparent_warning a_ml_2",text:"transparent-warning",disabled:!0,href:"https://github.com/"}),e(n,{class:"a_btn a_btn_transparent_danger a_ml_2",text:"transparent-danger",disabled:!0,href:"https://github.com/"}),e(n,{class:"a_btn a_btn_transparent_dark a_ml_2",text:"transparent-dark",disabled:!0,href:"https://github.com/"}),e(n,{class:"a_btn a_btn_transparent_light a_ml_2",text:"transparent-light",disabled:!0,href:"https://github.com/"})]),_:1},8,["code-html","code-js"])}const ht=c(pt,[["render",ut]]);function dt(){return{codeHtml:`<div
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
</div>`}}function bt(){return{codeJs:`import ALink from "aloha-vue/src/ALink/ALink";
    
export default {
  name: "PageLinkGroup",
  components: {
    ALink,
  },
};`}}const ft={name:"PageLinkGroup",components:{ALink:d,AlohaExample:h},setup(){const{codeHtml:t}=dt(),{codeJs:_}=bt();return{codeHtml:t,codeJs:_}}},gt={class:"a_btn_group"},kt={class:"a_btn_group a_ml_3"};function At(t,_,o,i,p,u){const n=a("a-link"),s=a("aloha-example");return m(),r(s,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_LINK_GROUP_GROUP_HEADER_",description:"_A_LINK_GROUP_GROUP_DESCRIPTION_"},{default:l(()=>[b("div",gt,[e(n,{class:"a_btn a_btn_primary",text:"primary",href:"https://github.com/"}),e(n,{class:"a_btn a_btn_secondary",text:"secondary",href:"https://github.com/"}),e(n,{class:"a_btn a_btn_success",text:"success",href:"https://github.com/"}),e(n,{class:"a_btn a_btn_info",text:"info",href:"https://github.com/"})]),b("div",kt,[e(n,{class:"a_btn a_btn_outline_primary",text:"outline-primary",href:"https://github.com/"}),e(n,{class:"a_btn a_btn_outline_secondary",text:"outline-secondary",href:"https://github.com/"}),e(n,{class:"a_btn a_btn_outline_success",text:"outline-success",href:"https://github.com/"}),e(n,{class:"a_btn a_btn_outline_info",text:"outline-info",href:"https://github.com/"})])]),_:1},8,["code-html","code-js"])}const Lt=c(ft,[["render",At]]);function It(){return{codeHtml:`<div
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
</div>`}}function Pt(){return{codeJs:`import ALink from "aloha-vue/src/ALink/ALink";
    
export default {
  name: "PageLinkGroupHorizontalVertical",
  components: {
    ALink,
  },
};`}}const xt={name:"PageLinkGroupHorizontalVertical",components:{ALink:d,AlohaExample:h},setup(){const{codeHtml:t}=It(),{codeJs:_}=Pt();return{codeHtml:t,codeJs:_}}},Et={class:"a_btn_group_vertical"},Tt={class:"a_btn_group"},Nt={class:"a_btn_group"},Ot={class:"a_btn_group"};function yt(t,_,o,i,p,u){const n=a("a-link"),s=a("aloha-example");return m(),r(s,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_LINK_GROUP_GROUP_HORIZONTAL_VERTICAL_HEADER_",description:"_A_LINK_GROUP_GROUP_HORIZONTAL_VERTICAL_DESCRIPTION_"},{default:l(()=>[b("div",Et,[b("div",Tt,[e(n,{class:"a_btn a_btn_outline_primary",text:"outline-primary",href:"https://github.com/"}),e(n,{class:"a_btn a_btn_outline_secondary",text:"outline-secondary",href:"https://github.com/"}),e(n,{class:"a_btn a_btn_outline_success",text:"outline-success",href:"https://github.com/"}),e(n,{class:"a_btn a_btn_outline_info",text:"outline-info",href:"https://github.com/"})]),b("div",Nt,[e(n,{class:"a_btn a_btn_outline_primary",text:"outline-primary",href:"https://github.com/"}),e(n,{class:"a_btn a_btn_outline_secondary",text:"outline-secondary",href:"https://github.com/"}),e(n,{class:"a_btn a_btn_outline_success",text:"outline-success",href:"https://github.com/"}),e(n,{class:"a_btn a_btn_outline_info",text:"outline-info",href:"https://github.com/"})]),b("div",Ot,[e(n,{class:"a_btn a_btn_outline_primary",text:"outline-primary",href:"https://github.com/"}),e(n,{class:"a_btn a_btn_outline_secondary",text:"outline-secondary",href:"https://github.com/"}),e(n,{class:"a_btn a_btn_outline_success",text:"outline-success",href:"https://github.com/"}),e(n,{class:"a_btn a_btn_outline_info",text:"outline-info",href:"https://github.com/"})])])]),_:1},8,["code-html","code-js"])}const St=c(xt,[["render",yt]]);function Rt(){return{codeHtml:`<div
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
</div>`}}function $t(){return{codeJs:`import ALink from "aloha-vue/src/ALink/ALink";
    
export default {
  name: "PageLinkGroupSizes",
  components: {
    ALink,
  },
};`}}const Ht={name:"PageLinkGroupSizes",components:{ALink:d,AlohaExample:h},setup(){const{codeHtml:t}=Rt(),{codeJs:_}=$t();return{codeHtml:t,codeJs:_}}},Dt={class:"a_btn_group a_btn_group_large"},Kt={class:"a_btn_group a_btn_group_small a_ml_3"};function Jt(t,_,o,i,p,u){const n=a("a-link"),s=a("aloha-example");return m(),r(s,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_LINK_GROUP_GROUP_SIZES_HEADER_",description:"_A_LINK_GROUP_GROUP_SIZES_DESCRIPTION_"},{default:l(()=>[b("div",Dt,[e(n,{class:"a_btn a_btn_primary",text:"primary",href:"https://github.com/"}),e(n,{class:"a_btn a_btn_secondary",text:"secondary",href:"https://github.com/"}),e(n,{class:"a_btn a_btn_success",text:"success",href:"https://github.com/"}),e(n,{class:"a_btn a_btn_info",text:"info",href:"https://github.com/"})]),b("div",Kt,[e(n,{class:"a_btn a_btn_outline_primary",text:"outline-primary",href:"https://github.com/"}),e(n,{class:"a_btn a_btn_outline_secondary",text:"outline-secondary",href:"https://github.com/"}),e(n,{class:"a_btn a_btn_outline_success",text:"outline-success",href:"https://github.com/"}),e(n,{class:"a_btn a_btn_outline_info",text:"outline-info",href:"https://github.com/"})])]),_:1},8,["code-html","code-js"])}const Ct=c(Ht,[["render",Jt]]);function Gt(){return{codeHtml:`<div
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
</div>`}}function jt(){return{codeJs:`import ALink from "aloha-vue/src/ALink/ALink";
    
export default {
  name: "PageLinkGroupVertical",
  components: {
    ALink,
  },
};`}}const Bt={name:"PageLinkGroupVertical",components:{ALink:d,AlohaExample:h},setup(){const{codeHtml:t}=Gt(),{codeJs:_}=jt();return{codeHtml:t,codeJs:_}}},vt={class:"a_btn_group_vertical"},Ut={class:"a_btn_group_vertical a_ml_3"};function Mt(t,_,o,i,p,u){const n=a("a-link"),s=a("aloha-example");return m(),r(s,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_LINK_GROUP_GROUP_VERTICAL_HEADER_",description:"_A_LINK_GROUP_GROUP_VERTICAL_DESCRIPTION_"},{default:l(()=>[b("div",vt,[e(n,{class:"a_btn a_btn_primary",text:"primary",href:"https://github.com/"}),e(n,{class:"a_btn a_btn_secondary",text:"secondary",href:"https://github.com/"}),e(n,{class:"a_btn a_btn_success",text:"success",href:"https://github.com/"}),e(n,{class:"a_btn a_btn_info",text:"info",href:"https://github.com/"})]),b("div",Ut,[e(n,{class:"a_btn a_btn_outline_primary",text:"outline-primary",href:"https://github.com/"}),e(n,{class:"a_btn a_btn_outline_secondary",text:"outline-secondary",href:"https://github.com/"}),e(n,{class:"a_btn a_btn_outline_success",text:"outline-success",href:"https://github.com/"}),e(n,{class:"a_btn a_btn_outline_info",text:"outline-info",href:"https://github.com/"})])]),_:1},8,["code-html","code-js"])}const Xt=c(Bt,[["render",Mt]]);function qt(){return{codeHtml:`<a-link
  class="a_btn a_btn_primary"
  html="_A_LINK_EXAMPLE_HTML_"
>
</a-link>
<a-link
  class="a_btn a_btn_primary a_ml_2"
  html="<span onclick='alert(\\"Aloha\\")'>Aloha</button>"
>
</a-link>`}}function wt(){return{codeJs:`import ALink from "aloha-vue/src/ALink/ALink";
    
export default {
  name: "PageLinkHtml",
  components: {
    ALink,
  },
};`}}const Ft={name:"PageLinkHtml",components:{ALink:d,AlohaExample:h},setup(){const{codeHtml:t}=qt(),{codeJs:_}=wt();return{codeHtml:t,codeJs:_}}};function zt(t,_,o,i,p,u){const n=a("a-link"),s=a("aloha-example");return m(),r(s,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_LINK_GROUP_HTML_HEADER_",description:"_A_LINK_GROUP_HTML_DESCRIPTION_",props:"html"},{default:l(()=>[e(n,{class:"a_btn a_btn_primary",html:"_A_LINK_EXAMPLE_HTML_"}),e(n,{class:"a_btn a_btn_primary a_ml_2",html:`<span onclick='alert("Aloha")'>Aloha</button>`})]),_:1},8,["code-html","code-js"])}const Vt=c(Ft,[["render",zt]]);function Wt(){return{codeHtml:`<a-link
  class="a_btn a_btn_primary"
  icon-left="Dnd"
  href="https://github.com/"
>
</a-link>
<a-link
  class="a_btn a_btn_primary a_ml_2"
  icon-left="Dnd"
  text="Aloha"
  href="https://github.com/"
>
</a-link>
<a-link
  class="a_btn a_btn_primary a_ml_2"
  icon-right="Dnd"
  text="Aloha"
  href="https://github.com/"
>
</a-link>
<a-link
  class="a_btn a_btn_primary a_ml_2"
  icon-left="Dnd"
  icon-right="Dnd"
  text="Aloha"
  href="https://github.com/"
>
</a-link>
<a-link
  class="a_btn a_btn_primary a_ml_2"
  icon-left="Dnd"
  icon-right="Dnd"
  href="https://github.com/"
>
</a-link>`}}function Zt(){return{codeJs:`import ALink from "aloha-vue/src/ALink/ALink";
    
export default {
  name: "PageLinkIcons",
  components: {
    ALink,
  },
};`}}const Yt={name:"PageLinkIcons",components:{ALink:d,AlohaExample:h},setup(){const{codeHtml:t}=Wt(),{codeJs:_}=Zt();return{codeHtml:t,codeJs:_}}};function Qt(t,_,o,i,p,u){const n=a("a-link"),s=a("aloha-example");return m(),r(s,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_LINK_GROUP_ICONS_HEADER_",description:"_A_LINK_GROUP_ICONS_DESCRIPTION_",props:["icon-left","icon-right"]},{default:l(()=>[e(n,{class:"a_btn a_btn_primary","icon-left":"Dnd",href:"https://github.com/"}),e(n,{class:"a_btn a_btn_primary a_ml_2","icon-left":"Dnd",text:"Aloha",href:"https://github.com/"}),e(n,{class:"a_btn a_btn_primary a_ml_2","icon-right":"Dnd",text:"Aloha",href:"https://github.com/"}),e(n,{class:"a_btn a_btn_primary a_ml_2","icon-left":"Dnd","icon-right":"Dnd",text:"Aloha",href:"https://github.com/"}),e(n,{class:"a_btn a_btn_primary a_ml_2","icon-left":"Dnd","icon-right":"Dnd",href:"https://github.com/"})]),_:1},8,["code-html","code-js"])}const te=c(Yt,[["render",Qt]]);function ee(){return{codeHtml:`<a-link
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
</a-button>`}}function ne(){return{codeJs:`import {
  ref,
} from "vue";

import AButton from "aloha-vue/src/AButton/AButton";
import ALink from "aloha-vue/src/ALink/ALink";
    
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
};`}}const ae={name:"PageLinkLoading",components:{AButton:q,ALink:d,AlohaExample:h},setup(){const{codeHtml:t}=ee(),{codeJs:_}=ne(),o=z(!0);return{codeHtml:t,codeJs:_,loading:o,toggleLoading:()=>{o.value=!o.value}}}};function _e(t,_,o,i,p,u){const n=a("a-link"),s=a("a-button"),f=a("aloha-example");return m(),r(f,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_LINK_GROUP_LOADING_HEADER_",description:"_A_LINK_GROUP_LOADING_DESCRIPTION_",props:["loading","loading-align"]},{default:l(()=>[e(n,{class:"a_btn a_btn_primary",loading:t.loading,"loading-align":"left",text:'loading-align="left"',href:"https://github.com/"},null,8,["loading"]),e(n,{class:"a_btn a_btn_primary a_ml_2",loading:t.loading,"loading-align":"right",text:'loading-align="right"',href:"https://github.com/"},null,8,["loading"]),e(s,{class:"a_btn a_btn_secondary a_ml_5",text:"a-button toggle",onClick:t.toggleLoading},null,8,["onClick"])]),_:1},8,["code-html","code-js"])}const se=c(ae,[["render",_e]]);function oe(){return{codeHtml:`<a-link
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
</a-link>`}}function le(){return{codeJs:`import ALink from "aloha-vue/src/ALink/ALink";
    
export default {
  name: "PageLinkOutline",
  components: {
    ALink,
  },
};`}}const ie={name:"PageLinkOutline",components:{ALink:d,AlohaExample:h},setup(){const{codeHtml:t}=oe(),{codeJs:_}=le();return{codeHtml:t,codeJs:_}}};function ce(t,_,o,i,p,u){const n=a("a-link"),s=a("aloha-example");return m(),r(s,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_LINK_GROUP_OUTLINE_HEADER_",description:"_A_LINK_GROUP_OUTLINE_DESCRIPTION_",props:"class"},{default:l(()=>[e(n,{class:"a_btn a_btn_outline_primary",text:"outline-primary",href:"https://github.com/"}),e(n,{class:"a_btn a_btn_outline_secondary a_ml_2",text:"outline-secondary",href:"https://github.com/"}),e(n,{class:"a_btn a_btn_outline_tertiary a_ml_2",text:"outline-tertiary",href:"https://github.com/"}),e(n,{class:"a_btn a_btn_outline_success a_ml_2",text:"outline-success",href:"https://github.com/"}),e(n,{class:"a_btn a_btn_outline_info a_ml_2",text:"outline-info",href:"https://github.com/"}),e(n,{class:"a_btn a_btn_outline_warning a_ml_2",text:"outline-warning",href:"https://github.com/"}),e(n,{class:"a_btn a_btn_outline_danger a_ml_2",text:"outline-danger",href:"https://github.com/"}),e(n,{class:"a_btn a_btn_outline_dark a_ml_2",text:"outline-dark",href:"https://github.com/"}),e(n,{class:"a_btn a_btn_outline_light a_ml_2",text:"outline-light",href:"https://github.com/"})]),_:1},8,["code-html","code-js"])}const re=c(ie,[["render",ce]]);function me(){return{codeHtml:`<a-link
  class="a_btn a_btn_primary"
  safe-html="_A_LINK_EXAMPLE_HTML_"
>
</a-link>
<a-link
  class="a_btn a_btn_primary a_ml_2"
  safe-html="<span onclick='alert(\\"Aloha\\")'>Aloha</button>"
>
</a-link>`}}function pe(){return{codeJs:`import ALink from "aloha-vue/src/ALink/ALink";
    
export default {
  name: "PageLinkSafeHtml",
  components: {
    ALink,
  },
};`}}const ue={name:"PageLinkSafeHtml",components:{ALink:d,AlohaExample:h},setup(){const{codeHtml:t}=me(),{codeJs:_}=pe();return{codeHtml:t,codeJs:_}}};function he(t,_,o,i,p,u){const n=a("a-link"),s=a("aloha-example");return m(),r(s,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_LINK_GROUP_SAFE_HTML_HEADER_",description:"_A_LINK_GROUP_SAFE_HTML_DESCRIPTION_",props:"safe-html"},{default:l(()=>[e(n,{class:"a_btn a_btn_primary","safe-html":"_A_LINK_EXAMPLE_HTML_"}),e(n,{class:"a_btn a_btn_primary a_ml_2","safe-html":`<span onclick='alert("Aloha")'>Aloha</button>`})]),_:1},8,["code-html","code-js"])}const de=c(ue,[["render",he]]);function be(){return{codeHtml:`<a-link
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
</a-link>`}}function fe(){return{codeJs:`import ALink from "aloha-vue/src/ALink/ALink";
    
export default {
  name: "PageLinkSizes",
  components: {
    ALink,
  },
};`}}const ge={name:"PageLinkSizes",components:{ALink:d,AlohaExample:h},setup(){const{codeHtml:t}=be(),{codeJs:_}=fe();return{codeHtml:t,codeJs:_}}};function ke(t,_,o,i,p,u){const n=a("a-link"),s=a("aloha-example");return m(),r(s,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_LINK_GROUP_SIZES_HEADER_",description:"_A_LINK_GROUP_SIZES_DESCRIPTION_",props:"class"},{default:l(()=>[e(n,{class:"a_btn a_btn_primary a_btn_large",text:"large",href:"https://github.com/"}),e(n,{class:"a_btn a_btn_primary a_btn_small a_ml_2",text:"small",href:"https://github.com/"})]),_:1},8,["code-html","code-js"])}const Ae=c(ge,[["render",ke]]);function Le(){return{codeHtml:`<a-link
  class="a_btn a_btn_primary"
  text="Aloha"
  href="https://github.com/"
>
  <template
    v-slot:linkAppend
  >
    <span>(***)</span>
  </template>
</a-link>`}}function Ie(){return{codeJs:`import ALink from "aloha-vue/src/ALink/ALink";
    
export default {
  name: "PageLinkSlotAppend",
  components: {
    ALink,
  },
};`}}const Pe={name:"PageLinkSlotAppend",components:{ALink:d,AlohaExample:h},setup(){const{codeHtml:t}=Le(),{codeJs:_}=Ie();return{codeHtml:t,codeJs:_}}},xe=b("span",null,"(***)",-1);function Ee(t,_,o,i,p,u){const n=a("a-link"),s=a("aloha-example");return m(),r(s,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_LINK_GROUP_SLOT_APPEND_HEADER_",description:"_A_LINK_GROUP_SLOT_APPEND_DESCRIPTION_",slots:"linkAppend"},{default:l(()=>[e(n,{class:"a_btn a_btn_primary",text:"Aloha",href:"https://github.com/"},{linkAppend:l(()=>[xe]),_:1})]),_:1},8,["code-html","code-js"])}const Te=c(Pe,[["render",Ee]]);function Ne(){return{codeHtml:`<a-link
  class="a_btn a_btn_primary"
  href="https://github.com/"
>
  <span>(Aloha)</span>
</a-link>`}}function Oe(){return{codeJs:`import ALink from "aloha-vue/src/ALink/ALink";
    
export default {
  name: "PageLinkSlotDefault",
  components: {
    ALink,
  },
};`}}const ye={name:"PageLinkSlotDefault",components:{ALink:d,AlohaExample:h},setup(){const{codeHtml:t}=Ne(),{codeJs:_}=Oe();return{codeHtml:t,codeJs:_}}},Se=b("span",null,"(Aloha)",-1);function Re(t,_,o,i,p,u){const n=a("a-link"),s=a("aloha-example");return m(),r(s,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_LINK_GROUP_SLOT_DEFAULT_HEADER_",description:"_A_LINK_GROUP_SLOT_DEFAULT_DESCRIPTION_",slots:"default"},{default:l(()=>[e(n,{class:"a_btn a_btn_primary",href:"https://github.com/"},{default:l(()=>[Se]),_:1})]),_:1},8,["code-html","code-js"])}const $e=c(ye,[["render",Re]]);function He(){return{codeHtml:`<a-link
  class="a_btn a_btn_primary"
  text="Aloha"
  href="https://github.com/"
>
  <template
    v-slot:linkPrepend
  >
    <span>(***)</span>
  </template>
</a-link>`}}function De(){return{codeJs:`import ALink from "aloha-vue/src/ALink/ALink";
    
export default {
  name: "PageLinkSlotPrepend",
  components: {
    ALink,
  },
};`}}const Ke={name:"PageLinkSlotPrepend",components:{ALink:d,AlohaExample:h},setup(){const{codeHtml:t}=He(),{codeJs:_}=De();return{codeHtml:t,codeJs:_}}},Je=b("span",null,"(***)",-1);function Ce(t,_,o,i,p,u){const n=a("a-link"),s=a("aloha-example");return m(),r(s,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_LINK_GROUP_SLOT_PREPEND_HEADER_",description:"_A_LINK_GROUP_SLOT_PREPEND_DESCRIPTION_",slots:"linkPrepend"},{default:l(()=>[e(n,{class:"a_btn a_btn_primary",text:"Aloha",href:"https://github.com/"},{linkPrepend:l(()=>[Je]),_:1})]),_:1},8,["code-html","code-js"])}const Ge=c(Ke,[["render",Ce]]);function je(){return{codeHtml:`<a-link
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
</a-link>`}}function Be(){return{codeJs:`import ALink from "aloha-vue/src/ALink/ALink";
    
export default {
  name: "PageLinkSlotTitle",
  components: {
    ALink,
  },
};`}}const ve={name:"PageLinkSlotTitle",components:{ALink:d,AlohaExample:h},setup(){const{codeHtml:t}=je(),{codeJs:_}=Be();return{codeHtml:t,codeJs:_}}},Ue=b("strong",null,"(***Aloha***)",-1);function Me(t,_,o,i,p,u){const n=a("a-link"),s=a("aloha-example");return m(),r(s,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_LINK_GROUP_SLOT_TITLE_HEADER_",description:"_A_LINK_GROUP_SLOT_TITLE_DESCRIPTION_",slots:"linkTitle"},{default:l(()=>[e(n,{class:"a_btn a_btn_primary",text:"Aloha","is-title-html":!0,href:"https://github.com/"},{linkTitle:l(()=>[Ue]),_:1})]),_:1},8,["code-html","code-js"])}const Xe=c(ve,[["render",Me]]);function qe(){return{codeHtml:`<a-link
  class="a_btn a_btn_primary"
  text="_SHOW_MORE_"
  text-after=" €"
  text-before="$ "
  href="https://github.com/"
>
</a-link>`}}function we(){return{codeJs:`import ALink from "aloha-vue/src/ALink/ALink";
    
export default {
  name: "PageLinkTextAfterBefore",
  components: {
    ALink,
  },
};`}}const Fe={name:"PageLinkTextAfterBefore",components:{ALink:d,AlohaExample:h},setup(){const{codeHtml:t}=qe(),{codeJs:_}=we();return{codeHtml:t,codeJs:_}}};function ze(t,_,o,i,p,u){const n=a("a-link"),s=a("aloha-example");return m(),r(s,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_LINK_GROUP_TEXT_AFTER_BEFORE_HEADER_",description:"_A_LINK_GROUP_TEXT_AFTER_BEFORE_DESCRIPTION_",props:["text-before","text-after"]},{default:l(()=>[e(n,{class:"a_btn a_btn_primary",text:"_SHOW_MORE_","text-after":" €","text-before":"$ ",href:"https://github.com/"})]),_:1},8,["code-html","code-js"])}const Ve=c(Fe,[["render",ze]]);function We(){return{codeHtml:`<a-link
  class="a_btn a_btn_primary"
  :text="{ mobile: 'Aloha', desktop: 'Aloha-desktop' }"
  href="https://github.com/"
>
</a-link>`}}function Ze(){return{codeJs:`import ALink from "aloha-vue/src/ALink/ALink";
    
export default {
  name: "PageLinkTextObject",
  components: {
    ALink,
  },
};`}}const Ye={name:"PageLinkTextObject",components:{ALink:d,AlohaExample:h},setup(){const{codeHtml:t}=We(),{codeJs:_}=Ze();return{codeHtml:t,codeJs:_}}};function Qe(t,_,o,i,p,u){const n=a("a-link"),s=a("aloha-example");return m(),r(s,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_LINK_GROUP_TEXT_OBJECT_HEADER_",description:"_A_LINK_GROUP_TEXT_OBJECT_DESCRIPTION_",props:"text (as object)"},{default:l(()=>[e(n,{class:"a_btn a_btn_primary",text:{mobile:"Aloha",desktop:"Aloha-desktop"},href:"https://github.com/"})]),_:1},8,["code-html","code-js"])}const tn=c(Ye,[["render",Qe]]);function en(){return{codeHtml:`<a-link
  class="a_btn a_btn_secondary"
  text="Aloha"
  text-tag="strong"
  href="https://github.com/"
></a-link>`}}function nn(){return{codeJs:`import ALink from "aloha-vue/src/ALink/ALink";
    
export default {
  name: "PageLinkTextTag",
  components: {
    ALink,
  },
};`}}const an={name:"PageLinkTextTag",components:{ALink:d,AlohaExample:h},setup(){const{codeHtml:t}=en(),{codeJs:_}=nn();return{codeHtml:t,codeJs:_}}};function _n(t,_,o,i,p,u){const n=a("a-link"),s=a("aloha-example");return m(),r(s,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_LINK_GROUP_TEXT_TAG_HEADER_",description:"_A_LINK_GROUP_TEXT_TAG_DESCRIPTION_",props:"text-tag"},{default:l(()=>[e(n,{class:"a_btn a_btn_secondary",text:"Aloha","text-tag":"strong",href:"https://github.com/"})]),_:1},8,["code-html","code-js"])}const sn=c(an,[["render",_n]]);function on(){return{codeHtml:`<a-link
  class="a_btn a_btn_primary"
  :title="['Aloha', '$(Aloha)']"
  text="Aloha"
  href="https://github.com/"
>
</a-link>`}}function ln(){return{codeJs:`import ALink from "aloha-vue/src/ALink/ALink";
    
export default {
  name: "PageLinkTitleArray",
  components: {
    ALink,
  },
};`}}const cn={name:"PageLinkTitleArray",components:{ALink:d,AlohaExample:h},setup(){const{codeHtml:t}=on(),{codeJs:_}=ln();return{codeHtml:t,codeJs:_}}};function rn(t,_,o,i,p,u){const n=a("a-link"),s=a("aloha-example");return m(),r(s,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_LINK_GROUP_TITLE_ARRAY_HEADER_",description:"_A_LINK_GROUP_TITLE_ARRAY_DESCRIPTION_",props:"title (as array)"},{default:l(()=>[e(n,{class:"a_btn a_btn_primary",title:["Aloha","$(Aloha)"],text:"Aloha",href:"https://github.com/"})]),_:1},8,["code-html","code-js"])}const mn=c(cn,[["render",rn]]);function pn(){return{codeHtml:`<a-link
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
</a-link>`}}function un(){return{codeJs:`import ALink from "aloha-vue/src/ALink/ALink";
    
export default {
  name: "PageLinkTitleHtml",
  components: {
    ALink,
  },
};`}}const hn={name:"PageLinkTitleHtml",components:{ALink:d,AlohaExample:h},setup(){const{codeHtml:t}=pn(),{codeJs:_}=un();return{codeHtml:t,codeJs:_}}};function dn(t,_,o,i,p,u){const n=a("a-link"),s=a("aloha-example");return m(),r(s,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_LINK_GROUP_TITLE_HTML_HEADER_",description:"_A_LINK_GROUP_TITLE_HTML_DESCRIPTION_",props:["title","is-title-html","title-placement"]},{default:l(()=>[e(n,{class:"a_btn a_btn_success a_mt_2",title:"_A_LINK_EXAMPLE_BIG_TITLE_",text:"placement: top","is-title-html":!0,"title-placement":"top",href:"https://github.com/"}),e(n,{class:"a_btn a_btn_success a_ml_2 a_mt_2",title:"_A_LINK_EXAMPLE_BIG_TITLE_",text:"placement: auto","is-title-html":!0,"title-placement":"auto",href:"https://github.com/"}),e(n,{class:"a_btn a_btn_success a_ml_2 a_mt_2",title:"_A_LINK_EXAMPLE_BIG_TITLE_",text:"placement: auto-start","is-title-html":!0,"title-placement":"auto-start",href:"https://github.com/"}),e(n,{class:"a_btn a_btn_success a_ml_2 a_mt_2",title:"_A_LINK_EXAMPLE_BIG_TITLE_",text:"placement: auto-end","is-title-html":!0,"title-placement":"auto-end",href:"https://github.com/"}),e(n,{class:"a_btn a_btn_success a_ml_2 a_mt_2",title:"_A_LINK_EXAMPLE_BIG_TITLE_",text:"placement: top-start","is-title-html":!0,"title-placement":"top-start",href:"https://github.com/"}),e(n,{class:"a_btn a_btn_success a_ml_2 a_mt_2",title:"_A_LINK_EXAMPLE_BIG_TITLE_",text:"placement: top-end","is-title-html":!0,"title-placement":"top-end",href:"https://github.com/"}),e(n,{class:"a_btn a_btn_success a_ml_2 a_mt_2",title:"_A_LINK_EXAMPLE_BIG_TITLE_",text:"placement: right","is-title-html":!0,"title-placement":"right",href:"https://github.com/"}),e(n,{class:"a_btn a_btn_success a_ml_2 a_mt_2",title:"_A_LINK_EXAMPLE_BIG_TITLE_",text:"placement: right-start","is-title-html":!0,"title-placement":"right-start",href:"https://github.com/"}),e(n,{class:"a_btn a_btn_success a_ml_2 a_mt_2",title:"_A_LINK_EXAMPLE_BIG_TITLE_",text:"placement: right-end","is-title-html":!0,"title-placement":"right-end",href:"https://github.com/"}),e(n,{class:"a_btn a_btn_success a_ml_2 a_mt_2",title:"_A_LINK_EXAMPLE_BIG_TITLE_",text:"placement: bottom","is-title-html":!0,"title-placement":"bottom",href:"https://github.com/"}),e(n,{class:"a_btn a_btn_success a_ml_2 a_mt_2",title:"_A_LINK_EXAMPLE_BIG_TITLE_",text:"placement: bottom-start","is-title-html":!0,"title-placement":"bottom-start",href:"https://github.com/"}),e(n,{class:"a_btn a_btn_success a_ml_2 a_mt_2",title:"_A_LINK_EXAMPLE_BIG_TITLE_",text:"placement: bottom-end","is-title-html":!0,"title-placement":"bottom-end",href:"https://github.com/"}),e(n,{class:"a_btn a_btn_success a_ml_2 a_mt_2",title:"_A_LINK_EXAMPLE_BIG_TITLE_",text:"placement: left","is-title-html":!0,"title-placement":"left",href:"https://github.com/"}),e(n,{class:"a_btn a_btn_success a_ml_2 a_mt_2",title:"_A_LINK_EXAMPLE_BIG_TITLE_",text:"placement: left-start","is-title-html":!0,"title-placement":"left-start",href:"https://github.com/"}),e(n,{class:"a_btn a_btn_success a_ml_2 a_mt_2",title:"_A_LINK_EXAMPLE_BIG_TITLE_",text:"placement: left-end","is-title-html":!0,"title-placement":"left-end",href:"https://github.com/"}),e(n,{class:"a_btn a_btn_success a_ml_2 a_mt_2",title:"_A_LINK_EXAMPLE_BIG_TITLE_",text:"placement: auto, html-title max-width 150","is-title-html":!0,"title-placement":"auto","title-attributes":{maxWidth:150},href:"https://github.com/"})]),_:1},8,["code-html","code-js"])}const bn=c(hn,[["render",dn]]);function fn(){return{codeHtml:`<a-link
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
</a-link>`}}function gn(){return{codeJs:`import ALink from "aloha-vue/src/ALink/ALink";
    
export default {
  name: "PageLinkTransparent",
  components: {
    ALink,
  },
};`}}const kn={name:"PageLinkTransparent",components:{ALink:d,AlohaExample:h},setup(){const{codeHtml:t}=fn(),{codeJs:_}=gn();return{codeHtml:t,codeJs:_}}};function An(t,_,o,i,p,u){const n=a("a-link"),s=a("aloha-example");return m(),r(s,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_LINK_GROUP_TRANSPARENT_HEADER_",description:"_A_LINK_GROUP_TRANSPARENT_DESCRIPTION_",props:"class"},{default:l(()=>[e(n,{class:"a_btn a_btn_transparent_primary",text:"transparent-primary",href:"https://github.com/"}),e(n,{class:"a_btn a_btn_transparent_secondary a_ml_2",text:"transparent-secondary",href:"https://github.com/"}),e(n,{class:"a_btn a_btn_transparent_tertiary a_ml_2",text:"transparent-tertiary",href:"https://github.com/"}),e(n,{class:"a_btn a_btn_transparent_success a_ml_2",text:"transparent-success",href:"https://github.com/"}),e(n,{class:"a_btn a_btn_transparent_info a_ml_2",text:"transparent-info",href:"https://github.com/"}),e(n,{class:"a_btn a_btn_transparent_warning a_ml_2",text:"transparent-warning",href:"https://github.com/"}),e(n,{class:"a_btn a_btn_transparent_danger a_ml_2",text:"transparent-danger",href:"https://github.com/"}),e(n,{class:"a_btn a_btn_transparent_dark a_ml_2",text:"transparent-dark",href:"https://github.com/"}),e(n,{class:"a_btn a_btn_transparent_light a_ml_2",text:"transparent-light",href:"https://github.com/"})]),_:1},8,["code-html","code-js"])}const Ln=c(kn,[["render",An]]);function In(){return{dataExposes:[{name:"buttonRef",description:"_A_SHOW_MORE_EXPOSES_BUTTON_REF_DESCRIPTION_",type:"Object"},{name:"containerRef",description:"_A_SHOW_MORE_EXPOSES_CONTAINER_REF_DESCRIPTION_",type:"Object"},{name:"isButtonVisible",description:"_A_SHOW_MORE_EXPOSES_IS_BUTTON_VISIBLE_DESCRIPTION_",type:"Boolean"},{name:"isOpen",description:"_A_SHOW_MORE_EXPOSES_IS_OPEN_DESCRIPTION_",type:"Boolean"},{name:"toggleButton",description:"_A_SHOW_MORE_EXPOSES_TOGGLE_BUTTON_DESCRIPTION_",type:"Function"}]}}function Pn(){const t=k(()=>w({placeholder:"_A_LINK_COMPONENT_NAME_"}));return{pageTitle:k(()=>`ALink${t.value?` (${t.value})`:""}`)}}function xn(){return{dataProps:[{name:"always-translate",description:"_A_TRANSLATION_PROPS_ALWAYS_TRANSLATE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"attributes",description:"_A_LINK_PROPS_ATTRIBUTES_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"class",description:"_A_LINK_PROPS_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"class-default",description:"_A_LINK_PROPS_CLASS_DEFAULT_DESCRIPTION_",type:"String",default:"aloha_element",required:!1},{name:"class-default-hidden",description:"_A_LINK_PROPS_CLASS_DEFAULT_HIDDEN_DESCRIPTION_",type:"String",default:"aloha_element__hidden",required:!1},{name:"class-disabled",description:"_A_LINK_PROPS_CLASS_DISABLED_DESCRIPTION_",type:"String",default:"disabled",required:!1},{name:"disabled",description:"_A_LINK_PROPS_DISABLED_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"extra",description:"_A_LINK_PROPS_EXTRA_DESCRIPTION_",type:"Object",default:void 0,required:!1},{name:"href",description:"_A_LINK_PROPS_HREF_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"html",description:"_A_LINK_PROPS_HTML_DESCRIPTION_",type:"String / Number / Object / Array",default:void 0,required:!1},{name:"html-screen-reader",description:"_A_LINK_PROPS_HTML_SCREEN_READER_DESCRIPTION_",type:"String / Number / Object / Array",default:void 0,required:!1},{name:"icon-attributes",description:"_A_LINK_PROPS_ICON_ATTRIBUTES_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"icon-class",description:"_A_LINK_PROPS_ICON_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"icon-left",description:"_A_LINK_PROPS_ICON_LEFT_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"icon-right",description:"_A_LINK_PROPS_ICON_RIGHT_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"icon-tag",description:"_A_LINK_PROPS_ICON_TAG_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"id",description:"_A_LINK_PROPS_ID_DESCRIPTION_",type:"String",default:'() => uniqueId("a_link_")',required:!1},{name:"is-title-html",description:"_A_LINK_PROPS_IS_TITLE_HTML_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"loading",description:"_A_LINK_PROPS_LOADING_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"loading-align",description:"_A_LINK_PROPS_LOADING_ALIGN_DESCRIPTION_",type:"String",default:"right",required:!1},{name:"loading-class",description:"_A_LINK_PROPS_LOADING_CLASS_DESCRIPTION_",type:"String / Object",default:"a_spinner_small",required:!1},{name:"safe-html",description:"_A_LINK_PROPS_SAFE_HTML_DESCRIPTION_",type:"String / Number / Object / Array",default:void 0,required:!1},{name:"safe-html-screen-reader",description:"_A_LINK_PROPS_SAFE_HTML_SCREEN_READER_DESCRIPTION_",type:"String / Number / Object / Array",default:void 0,required:!1},{name:"target",description:"_A_LINK_PROPS_TARGET_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"text",description:"_A_LINK_PROPS_TEXT_DESCRIPTION_",type:"String / Number / Object / Array",default:void 0,required:!1},{name:"text-after",description:"_A_LINK_PROPS_TEXT_AFTER_DESCRIPTION_",type:"String / Number / Object",default:void 0,required:!1},{name:"text-aria-hidden",description:"_A_LINK_PROPS_TEXT_ARIA_HIDDEN_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"text-before",description:"_A_LINK_PROPS_TEXT_BEFORE_DESCRIPTION_",type:"String / Number / Object",default:void 0,required:!1},{name:"text-class",description:"_A_LINK_PROPS_TEXT_CLASS_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"text-screen-reader",description:"_A_LINK_PROPS_TEXT_SCREEN_READER_DESCRIPTION_",type:"String / Number / Object / Array",default:void 0,required:!1},{name:"text-tag",description:"_A_LINK_PROPS_TEXT_TAG_DESCRIPTION_",type:"String",default:"span",required:!1},{name:"title",description:"_A_LINK_PROPS_TITLE_DESCRIPTION_",type:"String / Number / Object / Array",default:void 0,required:!1},{name:"title-attributes",description:"_A_LINK_PROPS_TITLE_ATTRIBUTES_DESCRIPTION_",type:"Object",default:"{}",required:!1},{name:"title-placement",description:"_A_LINK_PROPS_TITLE_PLACEMENT_DESCRIPTION_",type:"String",default:"top",required:!1},{name:"title-z-index",description:"_A_LINK_PROPS_TITLE_Z_INDEX_DESCRIPTION_",type:"String / Number",default:"auto",required:!1},{name:"to",description:"_A_LINK_PROPS_TO_DESCRIPTION_",type:"Object / String",default:void 0,required:!1}]}}function En(){return{dataSlots:[{name:"linkAppend",description:"_A_LINK_SLOT_LINK_APPEND_DESCRIPTION_"},{name:"linkPrepend",description:"_A_LINK_SLOT_LINK_PREPEND_DESCRIPTION_"},{name:"linkTitle",description:"_A_LINK_SLOT_LINK_TITLE_DESCRIPTION_"},{name:"default",description:"_A_LINK_SLOT_DEFAULT_DESCRIPTION_"}]}}const Tn={name:"PageLink",components:{AlohaPage:M,AlohaTableProps:X,ATranslation:F,PageLinkBasic:Q,PageLinkClass:_t,PageLinkComplex:ct,PageLinkDisabled:ht,PageLinkGroup:Lt,PageLinkGroupHorizontalVertical:St,PageLinkGroupSizes:Ct,PageLinkGroupVertical:Xt,PageLinkHtml:Vt,PageLinkIcons:te,PageLinkLoading:se,PageLinkOutline:re,PageLinkSafeHtml:de,PageLinkSizes:Ae,PageLinkSlotAppend:Te,PageLinkSlotDefault:$e,PageLinkSlotPrepend:Ge,PageLinkSlotTitle:Xe,PageLinkTextAfterBefore:Ve,PageLinkTextObject:tn,PageLinkTextTag:sn,PageLinkTitleArray:mn,PageLinkTitleHtml:bn,PageLinkTransparent:Ln},setup(){const{pageTitle:t}=Pn(),{dataProps:_}=xn(),{dataSlots:o}=En(),{dataExposes:i}=In();return{dataExposes:i,dataProps:_,dataSlots:o,pageTitle:t}}};function Nn(t,_,o,i,p,u){const n=a("a-translation"),s=a("page-link-basic"),f=a("page-link-class"),A=a("page-link-outline"),L=a("page-link-transparent"),I=a("page-link-sizes"),P=a("page-link-group"),x=a("page-link-group-vertical"),E=a("page-link-group-horizontal-vertical"),T=a("page-link-group-sizes"),N=a("page-link-icons"),O=a("page-link-disabled"),y=a("page-link-loading"),S=a("page-link-text-after-before"),R=a("page-link-text-tag"),$=a("page-link-safe-html"),H=a("page-link-html"),D=a("page-link-text-object"),K=a("page-link-title-array"),J=a("page-link-title-html"),C=a("page-link-slot-default"),G=a("page-link-slot-prepend"),j=a("page-link-slot-append"),B=a("page-link-slot-title"),v=a("page-link-complex"),g=a("aloha-table-props"),U=a("aloha-page");return m(),r(U,{"page-title":t.pageTitle},{body:l(()=>[e(n,{tag:"p",html:"_A_LINK_COMPONENT_DESCRIPTION_"}),e(s),e(f),e(A),e(L),e(I),e(P),e(x),e(E),e(T),e(N),e(O),e(y),e(S),e(R),e($),e(H),e(D),e(K),e(J),e(C),e(G),e(j),e(B),e(v),e(g,{data:t.dataProps},null,8,["data"]),e(g,{"table-label":"Slots",data:t.dataSlots,columns:["name","description"]},null,8,["data"])]),_:1},8,["page-title"])}const vn=c(Tn,[["render",Nn]]);export{vn as default};
