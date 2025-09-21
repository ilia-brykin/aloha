import{A as h,a as M}from"./chunk.AlohaExample.DAwGRLOD.js";import{A as X}from"./chunk.AlohaTableProps.CofNQYPM.js";import{B as d,_ as c,c as q,g as w,A as F}from"./bundle.index.DOYlq4PO.js";import{V as r,aT as l,e as _,W as m,_ as e,Z as b,r as z,d as k}from"./chunk.vendor.DmOTRqbf.js";import"./chunk.vendor-lodash.DsZvX3G1.js";import"./chunk.APageTabTitle.bBVoQaY3.js";import"./chunk.AlohaHighlightjs.8HRkfNnH.js";import"./chunk.ATable.GmmBiQ5t.js";import"./chunk.translations-ar.BiLIUuBX.js";import"./chunk.translations-de.Cy_u5T72.js";import"./chunk.translations-en.CWj0a7ej.js";import"./chunk.translations-es.D-4cj_p_.js";import"./chunk.translations-fr.LwkSu7L_.js";import"./chunk.translations-hr.G7gNG4Fu.js";import"./chunk.translations-it.BilXvddc.js";import"./chunk.translations-ru.XOcS94ap.js";function V(){return{codeHtml:`<a-Link
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
</a-Link>`}}function W(){return{codeJs:`import { 
  ALink,
} from "aloha-vue";
    
export default {
  name: "PageLinkBasic",
  components: {
    ALink,
  },
};`}}const Z={name:"PageLinkBasic",components:{ALink:d,AlohaExample:h},setup(){const{codeHtml:t}=V(),{codeJs:n}=W();return{codeHtml:t,codeJs:n}}};function Y(t,n,o,i,p,u){const a=_("a-link"),s=_("aloha-example");return m(),r(s,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_BASIC_USAGE_",props:["text","href","to"]},{default:l(()=>[e(a,{text:"https://github.com/",href:"https://github.com/"}),e(a,{class:"a_ml_2",text:"Aloha",to:{name:"PageButton"}}),e(a,{class:"a_ml_2",text:"Aloha",to:"/button"})]),_:1},8,["code-html","code-js"])}const Q=c(Z,[["render",Y]]);function tt(){return{codeHtml:`<a-link
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
};`}}const at={name:"PageLinkClass",components:{ALink:d,AlohaExample:h},setup(){const{codeHtml:t}=tt(),{codeJs:n}=et();return{codeHtml:t,codeJs:n}}};function nt(t,n,o,i,p,u){const a=_("a-link"),s=_("aloha-example");return m(),r(s,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_LINK_GROUP_CLASS_HEADER_",description:"_A_LINK_GROUP_CLASS_DESCRIPTION_",props:"class"},{default:l(()=>[e(a,{class:"a_btn a_btn_link",text:"link",href:"https://github.com/"}),e(a,{class:"a_btn a_btn_primary a_ml_2",text:"primary",href:"https://github.com/"}),e(a,{class:"a_btn a_btn_secondary a_ml_2",text:"secondary",href:"https://github.com/"}),e(a,{class:"a_btn a_btn_tertiary a_ml_2",text:"tertiary",href:"https://github.com/"}),e(a,{class:"a_btn a_btn_success a_ml_2",text:"success",href:"https://github.com/"}),e(a,{class:"a_btn a_btn_info a_ml_2",text:"info",href:"https://github.com/"}),e(a,{class:"a_btn a_btn_warning a_ml_2",text:"warning",href:"https://github.com/"}),e(a,{class:"a_btn a_btn_danger a_ml_2",text:"danger",href:"https://github.com/"}),e(a,{class:"a_btn a_btn_dark a_ml_2",text:"dark",href:"https://github.com/"}),e(a,{class:"a_btn a_btn_light a_ml_2",text:"light",href:"https://github.com/"})]),_:1},8,["code-html","code-js"])}const _t=c(at,[["render",nt]]);function st(){return{codeHtml:`<a-link
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
</a-link>`}}function ot(){return{codeJs:`import { 
  ALink,
} from "aloha-vue";
    
export default {
  name: "PageLinkComplex",
  components: {
    ALink,
  },
};`}}const lt={name:"PageLinkComplex",components:{ALink:d,AlohaExample:h},setup(){const{codeHtml:t}=st(),{codeJs:n}=ot();return{codeHtml:t,codeJs:n}}};function it(t,n,o,i,p,u){const a=_("a-link"),s=_("aloha-example");return m(),r(s,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_LINK_GROUP_COMPLEX_HEADER_",description:"_A_LINK_GROUP_COMPLEX_DESCRIPTION_"},{default:l(()=>[e(a,{class:"a_btn a_btn_primary",text:{desktop:"Aloha"},"text-before":{desktop:"$ "},"icon-left":{desktop:"Gear",mobile:"Code"},"icon-right":{mobile:"Code"},title:{desktop:"Aloha"},"text-aria-hidden":!0,"text-screen-reader":{desktop:"Aloha",mobile:"Aloha-mobile"},href:"https://github.com/"})]),_:1},8,["code-html","code-js"])}const ct=c(lt,[["render",it]]);function rt(){return{codeHtml:`<a-link
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
</a-link>`}}function mt(){return{codeJs:`import { 
  ALink,
} from "aloha-vue";
    
export default {
  name: "PageLinkDisabled",
  components: {
    ALink,
  },
};`}}const pt={name:"PageLinkDisabled",components:{ALink:d,AlohaExample:h},setup(){const{codeHtml:t}=rt(),{codeJs:n}=mt();return{codeHtml:t,codeJs:n}}};function ut(t,n,o,i,p,u){const a=_("a-link"),s=_("aloha-example");return m(),r(s,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_LINK_GROUP_DISABLED_HEADER_",description:"_A_LINK_GROUP_DISABLED_DESCRIPTION_",props:"disabled"},{default:l(()=>[e(a,{class:"a_btn a_btn_link",text:"primary",disabled:!0,href:"https://github.com/"}),e(a,{class:"a_btn a_btn_primary a_ml_2",text:"primary",disabled:!0,to:{name:"PageButton"}}),e(a,{class:"a_btn a_btn_secondary a_ml_2",text:"secondary",disabled:!0,href:"https://github.com/"}),e(a,{class:"a_btn a_btn_tertiary a_ml_2",text:"tertiary",disabled:!0,href:"https://github.com/"}),e(a,{class:"a_btn a_btn_success a_ml_2",text:"success",disabled:!0,href:"https://github.com/"}),e(a,{class:"a_btn a_btn_info a_ml_2",text:"info",disabled:!0,href:"https://github.com/"}),e(a,{class:"a_btn a_btn_warning a_ml_2",text:"warning",disabled:!0,href:"https://github.com/"}),e(a,{class:"a_btn a_btn_danger a_ml_2",text:"danger",disabled:!0,href:"https://github.com/"}),e(a,{class:"a_btn a_btn_dark a_ml_2",text:"dark",disabled:!0,href:"https://github.com/"}),e(a,{class:"a_btn a_btn_light a_ml_2",text:"light",disabled:!0,href:"https://github.com/"}),e(a,{class:"a_btn a_btn_outline_primary a_ml_2",text:"outline-primary",disabled:!0,href:"https://github.com/"}),e(a,{class:"a_btn a_btn_outline_secondary a_ml_2",text:"outline-secondary",disabled:!0,href:"https://github.com/"}),e(a,{class:"a_btn a_btn_outline_tertiary a_ml_2",text:"outline-tertiary",disabled:!0,href:"https://github.com/"}),e(a,{class:"a_btn a_btn_outline_success a_ml_2",text:"outline-success",disabled:!0,href:"https://github.com/"}),e(a,{class:"a_btn a_btn_outline_info a_ml_2",text:"outline-info",disabled:!0,href:"https://github.com/"}),e(a,{class:"a_btn a_btn_outline_warning a_ml_2",text:"outline-warning",disabled:!0,href:"https://github.com/"}),e(a,{class:"a_btn a_btn_outline_danger a_ml_2",text:"outline-danger",disabled:!0,href:"https://github.com/"}),e(a,{class:"a_btn a_btn_outline_dark a_ml_2",text:"outline-dark",disabled:!0,href:"https://github.com/"}),e(a,{class:"a_btn a_btn_outline_light a_ml_2",text:"outline-light",disabled:!0,href:"https://github.com/"}),e(a,{class:"a_btn a_btn_transparent_primary a_ml_2",text:"transparent-primary",disabled:!0,href:"https://github.com/"}),e(a,{class:"a_btn a_btn_transparent_secondary a_ml_2",text:"transparent-secondary",disabled:!0,href:"https://github.com/"}),e(a,{class:"a_btn a_btn_transparent_tertiary a_ml_2",text:"transparent-tertiary",disabled:!0,href:"https://github.com/"}),e(a,{class:"a_btn a_btn_transparent_success a_ml_2",text:"transparent-success",disabled:!0,href:"https://github.com/"}),e(a,{class:"a_btn a_btn_transparent_info a_ml_2",text:"transparent-info",disabled:!0,href:"https://github.com/"}),e(a,{class:"a_btn a_btn_transparent_warning a_ml_2",text:"transparent-warning",disabled:!0,href:"https://github.com/"}),e(a,{class:"a_btn a_btn_transparent_danger a_ml_2",text:"transparent-danger",disabled:!0,href:"https://github.com/"}),e(a,{class:"a_btn a_btn_transparent_dark a_ml_2",text:"transparent-dark",disabled:!0,href:"https://github.com/"}),e(a,{class:"a_btn a_btn_transparent_light a_ml_2",text:"transparent-light",disabled:!0,href:"https://github.com/"})]),_:1},8,["code-html","code-js"])}const ht=c(pt,[["render",ut]]);function dt(){return{codeHtml:`<div
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
</div>`}}function bt(){return{codeJs:`import { 
  ALink,
} from "aloha-vue";
    
export default {
  name: "PageLinkGroup",
  components: {
    ALink,
  },
};`}}const ft={name:"PageLinkGroup",components:{ALink:d,AlohaExample:h},setup(){const{codeHtml:t}=dt(),{codeJs:n}=bt();return{codeHtml:t,codeJs:n}}},gt={class:"a_btn_group"},kt={class:"a_btn_group a_ml_3"};function At(t,n,o,i,p,u){const a=_("a-link"),s=_("aloha-example");return m(),r(s,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_LINK_GROUP_GROUP_HEADER_",description:"_A_LINK_GROUP_GROUP_DESCRIPTION_"},{default:l(()=>[b("div",gt,[e(a,{class:"a_btn a_btn_primary",text:"primary",href:"https://github.com/"}),e(a,{class:"a_btn a_btn_secondary",text:"secondary",href:"https://github.com/"}),e(a,{class:"a_btn a_btn_success",text:"success",href:"https://github.com/"}),e(a,{class:"a_btn a_btn_info",text:"info",href:"https://github.com/"})]),b("div",kt,[e(a,{class:"a_btn a_btn_outline_primary",text:"outline-primary",href:"https://github.com/"}),e(a,{class:"a_btn a_btn_outline_secondary",text:"outline-secondary",href:"https://github.com/"}),e(a,{class:"a_btn a_btn_outline_success",text:"outline-success",href:"https://github.com/"}),e(a,{class:"a_btn a_btn_outline_info",text:"outline-info",href:"https://github.com/"})])]),_:1},8,["code-html","code-js"])}const It=c(ft,[["render",At]]);function Lt(){return{codeHtml:`<div
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
</div>`}}function Pt(){return{codeJs:`import { 
  ALink,
} from "aloha-vue";
    
export default {
  name: "PageLinkGroupHorizontalVertical",
  components: {
    ALink,
  },
};`}}const xt={name:"PageLinkGroupHorizontalVertical",components:{ALink:d,AlohaExample:h},setup(){const{codeHtml:t}=Lt(),{codeJs:n}=Pt();return{codeHtml:t,codeJs:n}}},Et={class:"a_btn_group_vertical"},Tt={class:"a_btn_group"},Nt={class:"a_btn_group"},Ot={class:"a_btn_group"};function yt(t,n,o,i,p,u){const a=_("a-link"),s=_("aloha-example");return m(),r(s,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_LINK_GROUP_GROUP_HORIZONTAL_VERTICAL_HEADER_",description:"_A_LINK_GROUP_GROUP_HORIZONTAL_VERTICAL_DESCRIPTION_"},{default:l(()=>[b("div",Et,[b("div",Tt,[e(a,{class:"a_btn a_btn_outline_primary",text:"outline-primary",href:"https://github.com/"}),e(a,{class:"a_btn a_btn_outline_secondary",text:"outline-secondary",href:"https://github.com/"}),e(a,{class:"a_btn a_btn_outline_success",text:"outline-success",href:"https://github.com/"}),e(a,{class:"a_btn a_btn_outline_info",text:"outline-info",href:"https://github.com/"})]),b("div",Nt,[e(a,{class:"a_btn a_btn_outline_primary",text:"outline-primary",href:"https://github.com/"}),e(a,{class:"a_btn a_btn_outline_secondary",text:"outline-secondary",href:"https://github.com/"}),e(a,{class:"a_btn a_btn_outline_success",text:"outline-success",href:"https://github.com/"}),e(a,{class:"a_btn a_btn_outline_info",text:"outline-info",href:"https://github.com/"})]),b("div",Ot,[e(a,{class:"a_btn a_btn_outline_primary",text:"outline-primary",href:"https://github.com/"}),e(a,{class:"a_btn a_btn_outline_secondary",text:"outline-secondary",href:"https://github.com/"}),e(a,{class:"a_btn a_btn_outline_success",text:"outline-success",href:"https://github.com/"}),e(a,{class:"a_btn a_btn_outline_info",text:"outline-info",href:"https://github.com/"})])])]),_:1},8,["code-html","code-js"])}const St=c(xt,[["render",yt]]);function Rt(){return{codeHtml:`<div
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
</div>`}}function $t(){return{codeJs:`import { 
  ALink,
} from "aloha-vue";
    
export default {
  name: "PageLinkGroupSizes",
  components: {
    ALink,
  },
};`}}const Ht={name:"PageLinkGroupSizes",components:{ALink:d,AlohaExample:h},setup(){const{codeHtml:t}=Rt(),{codeJs:n}=$t();return{codeHtml:t,codeJs:n}}},Dt={class:"a_btn_group a_btn_group_large"},Gt={class:"a_btn_group a_btn_group_small a_ml_3"};function Kt(t,n,o,i,p,u){const a=_("a-link"),s=_("aloha-example");return m(),r(s,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_LINK_GROUP_GROUP_SIZES_HEADER_",description:"_A_LINK_GROUP_GROUP_SIZES_DESCRIPTION_"},{default:l(()=>[b("div",Dt,[e(a,{class:"a_btn a_btn_primary",text:"primary",href:"https://github.com/"}),e(a,{class:"a_btn a_btn_secondary",text:"secondary",href:"https://github.com/"}),e(a,{class:"a_btn a_btn_success",text:"success",href:"https://github.com/"}),e(a,{class:"a_btn a_btn_info",text:"info",href:"https://github.com/"})]),b("div",Gt,[e(a,{class:"a_btn a_btn_outline_primary",text:"outline-primary",href:"https://github.com/"}),e(a,{class:"a_btn a_btn_outline_secondary",text:"outline-secondary",href:"https://github.com/"}),e(a,{class:"a_btn a_btn_outline_success",text:"outline-success",href:"https://github.com/"}),e(a,{class:"a_btn a_btn_outline_info",text:"outline-info",href:"https://github.com/"})])]),_:1},8,["code-html","code-js"])}const Jt=c(Ht,[["render",Kt]]);function Ct(){return{codeHtml:`<div
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
</div>`}}function jt(){return{codeJs:`import { 
  ALink,
} from "aloha-vue";
    
export default {
  name: "PageLinkGroupVertical",
  components: {
    ALink,
  },
};`}}const vt={name:"PageLinkGroupVertical",components:{ALink:d,AlohaExample:h},setup(){const{codeHtml:t}=Ct(),{codeJs:n}=jt();return{codeHtml:t,codeJs:n}}},Bt={class:"a_btn_group_vertical"},Ut={class:"a_btn_group_vertical a_ml_3"};function Mt(t,n,o,i,p,u){const a=_("a-link"),s=_("aloha-example");return m(),r(s,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_LINK_GROUP_GROUP_VERTICAL_HEADER_",description:"_A_LINK_GROUP_GROUP_VERTICAL_DESCRIPTION_"},{default:l(()=>[b("div",Bt,[e(a,{class:"a_btn a_btn_primary",text:"primary",href:"https://github.com/"}),e(a,{class:"a_btn a_btn_secondary",text:"secondary",href:"https://github.com/"}),e(a,{class:"a_btn a_btn_success",text:"success",href:"https://github.com/"}),e(a,{class:"a_btn a_btn_info",text:"info",href:"https://github.com/"})]),b("div",Ut,[e(a,{class:"a_btn a_btn_outline_primary",text:"outline-primary",href:"https://github.com/"}),e(a,{class:"a_btn a_btn_outline_secondary",text:"outline-secondary",href:"https://github.com/"}),e(a,{class:"a_btn a_btn_outline_success",text:"outline-success",href:"https://github.com/"}),e(a,{class:"a_btn a_btn_outline_info",text:"outline-info",href:"https://github.com/"})])]),_:1},8,["code-html","code-js"])}const Xt=c(vt,[["render",Mt]]);function qt(){return{codeHtml:`<a-link
  class="a_btn a_btn_primary"
  html="_A_LINK_EXAMPLE_HTML_"
>
</a-link>
<a-link
  class="a_btn a_btn_primary a_ml_2"
  html="<span onclick='alert(\\"Aloha\\")'>Aloha</button>"
>
</a-link>`}}function wt(){return{codeJs:`import { 
  ALink,
} from "aloha-vue";
    
export default {
  name: "PageLinkHtml",
  components: {
    ALink,
  },
};`}}const Ft={name:"PageLinkHtml",components:{ALink:d,AlohaExample:h},setup(){const{codeHtml:t}=qt(),{codeJs:n}=wt();return{codeHtml:t,codeJs:n}}};function zt(t,n,o,i,p,u){const a=_("a-link"),s=_("aloha-example");return m(),r(s,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_LINK_GROUP_HTML_HEADER_",description:"_A_LINK_GROUP_HTML_DESCRIPTION_",props:"html"},{default:l(()=>[e(a,{class:"a_btn a_btn_primary",html:"_A_LINK_EXAMPLE_HTML_"}),e(a,{class:"a_btn a_btn_primary a_ml_2",html:`<span onclick='alert("Aloha")'>Aloha</button>`})]),_:1},8,["code-html","code-js"])}const Vt=c(Ft,[["render",zt]]);function Wt(){return{codeHtml:`<a-link
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
</a-link>`}}function Zt(){return{codeJs:`import { 
  ALink,
} from "aloha-vue";
    
export default {
  name: "PageLinkIcons",
  components: {
    ALink,
  },
};`}}const Yt={name:"PageLinkIcons",components:{ALink:d,AlohaExample:h},setup(){const{codeHtml:t}=Wt(),{codeJs:n}=Zt();return{codeHtml:t,codeJs:n}}};function Qt(t,n,o,i,p,u){const a=_("a-link"),s=_("aloha-example");return m(),r(s,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_LINK_GROUP_ICONS_HEADER_",description:"_A_LINK_GROUP_ICONS_DESCRIPTION_",props:["icon-left","icon-right"]},{default:l(()=>[e(a,{class:"a_btn a_btn_primary","icon-left":"Gear",href:"https://github.com/"}),e(a,{class:"a_btn a_btn_primary a_ml_2","icon-left":"Gear",text:"Aloha",href:"https://github.com/"}),e(a,{class:"a_btn a_btn_primary a_ml_2","icon-right":"Gear",text:"Aloha",href:"https://github.com/"}),e(a,{class:"a_btn a_btn_primary a_ml_2","icon-left":"Gear","icon-right":"Gear",text:"Aloha",href:"https://github.com/"}),e(a,{class:"a_btn a_btn_primary a_ml_2","icon-left":"Gear","icon-right":"Gear",href:"https://github.com/"})]),_:1},8,["code-html","code-js"])}const te=c(Yt,[["render",Qt]]);function ee(){return{codeHtml:`<a-link
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
</a-button>`}}function ae(){return{codeJs:`import {
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
};`}}const ne={name:"PageLinkLoading",components:{AButton:q,ALink:d,AlohaExample:h},setup(){const{codeHtml:t}=ee(),{codeJs:n}=ae(),o=z(!0);return{codeHtml:t,codeJs:n,loading:o,toggleLoading:()=>{o.value=!o.value}}}};function _e(t,n,o,i,p,u){const a=_("a-link"),s=_("a-button"),f=_("aloha-example");return m(),r(f,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_LINK_GROUP_LOADING_HEADER_",description:"_A_LINK_GROUP_LOADING_DESCRIPTION_",props:["loading","loading-align"]},{default:l(()=>[e(a,{class:"a_btn a_btn_primary",loading:t.loading,"loading-align":"left",text:'loading-align="left"',href:"https://github.com/"},null,8,["loading"]),e(a,{class:"a_btn a_btn_primary a_ml_2",loading:t.loading,"loading-align":"right",text:'loading-align="right"',href:"https://github.com/"},null,8,["loading"]),e(s,{class:"a_btn a_btn_secondary a_ml_5",text:"a-button toggle",onClick:t.toggleLoading},null,8,["onClick"])]),_:1},8,["code-html","code-js"])}const se=c(ne,[["render",_e]]);function oe(){return{codeHtml:`<a-link
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
</a-link>`}}function le(){return{codeJs:`import { 
  ALink,
} from "aloha-vue";
    
export default {
  name: "PageLinkOutline",
  components: {
    ALink,
  },
};`}}const ie={name:"PageLinkOutline",components:{ALink:d,AlohaExample:h},setup(){const{codeHtml:t}=oe(),{codeJs:n}=le();return{codeHtml:t,codeJs:n}}};function ce(t,n,o,i,p,u){const a=_("a-link"),s=_("aloha-example");return m(),r(s,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_LINK_GROUP_OUTLINE_HEADER_",description:"_A_LINK_GROUP_OUTLINE_DESCRIPTION_",props:"class"},{default:l(()=>[e(a,{class:"a_btn a_btn_outline_primary",text:"outline-primary",href:"https://github.com/"}),e(a,{class:"a_btn a_btn_outline_secondary a_ml_2",text:"outline-secondary",href:"https://github.com/"}),e(a,{class:"a_btn a_btn_outline_tertiary a_ml_2",text:"outline-tertiary",href:"https://github.com/"}),e(a,{class:"a_btn a_btn_outline_success a_ml_2",text:"outline-success",href:"https://github.com/"}),e(a,{class:"a_btn a_btn_outline_info a_ml_2",text:"outline-info",href:"https://github.com/"}),e(a,{class:"a_btn a_btn_outline_warning a_ml_2",text:"outline-warning",href:"https://github.com/"}),e(a,{class:"a_btn a_btn_outline_danger a_ml_2",text:"outline-danger",href:"https://github.com/"}),e(a,{class:"a_btn a_btn_outline_dark a_ml_2",text:"outline-dark",href:"https://github.com/"}),e(a,{class:"a_btn a_btn_outline_light a_ml_2",text:"outline-light",href:"https://github.com/"})]),_:1},8,["code-html","code-js"])}const re=c(ie,[["render",ce]]);function me(){return{codeHtml:`<a-link
  class="a_btn a_btn_primary"
  safe-html="_A_LINK_EXAMPLE_HTML_"
>
</a-link>
<a-link
  class="a_btn a_btn_primary a_ml_2"
  safe-html="<span onclick='alert(\\"Aloha\\")'>Aloha</button>"
>
</a-link>`}}function pe(){return{codeJs:`import { 
  ALink,
} from "aloha-vue";
    
export default {
  name: "PageLinkSafeHtml",
  components: {
    ALink,
  },
};`}}const ue={name:"PageLinkSafeHtml",components:{ALink:d,AlohaExample:h},setup(){const{codeHtml:t}=me(),{codeJs:n}=pe();return{codeHtml:t,codeJs:n}}};function he(t,n,o,i,p,u){const a=_("a-link"),s=_("aloha-example");return m(),r(s,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_LINK_GROUP_SAFE_HTML_HEADER_",description:"_A_LINK_GROUP_SAFE_HTML_DESCRIPTION_",props:"safe-html"},{default:l(()=>[e(a,{class:"a_btn a_btn_primary","safe-html":"_A_LINK_EXAMPLE_HTML_"}),e(a,{class:"a_btn a_btn_primary a_ml_2","safe-html":`<span onclick='alert("Aloha")'>Aloha</button>`})]),_:1},8,["code-html","code-js"])}const de=c(ue,[["render",he]]);function be(){return{codeHtml:`<a-link
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
</a-link>`}}function fe(){return{codeJs:`import { 
  ALink,
} from "aloha-vue";
    
export default {
  name: "PageLinkSizes",
  components: {
    ALink,
  },
};`}}const ge={name:"PageLinkSizes",components:{ALink:d,AlohaExample:h},setup(){const{codeHtml:t}=be(),{codeJs:n}=fe();return{codeHtml:t,codeJs:n}}};function ke(t,n,o,i,p,u){const a=_("a-link"),s=_("aloha-example");return m(),r(s,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_LINK_GROUP_SIZES_HEADER_",description:"_A_LINK_GROUP_SIZES_DESCRIPTION_",props:"class"},{default:l(()=>[e(a,{class:"a_btn a_btn_primary a_btn_large",text:"large",href:"https://github.com/"}),e(a,{class:"a_btn a_btn_primary a_btn_small a_ml_2",text:"small",href:"https://github.com/"})]),_:1},8,["code-html","code-js"])}const Ae=c(ge,[["render",ke]]);function Ie(){return{codeHtml:`<a-link
  class="a_btn a_btn_primary"
  text="Aloha"
  href="https://github.com/"
>
  <template
    v-slot:linkAppend
  >
    <span>(***)</span>
  </template>
</a-link>`}}function Le(){return{codeJs:`import { 
  ALink,
} from "aloha-vue";
    
export default {
  name: "PageLinkSlotAppend",
  components: {
    ALink,
  },
};`}}const Pe={name:"PageLinkSlotAppend",components:{ALink:d,AlohaExample:h},setup(){const{codeHtml:t}=Ie(),{codeJs:n}=Le();return{codeHtml:t,codeJs:n}}};function xe(t,n,o,i,p,u){const a=_("a-link"),s=_("aloha-example");return m(),r(s,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_LINK_GROUP_SLOT_APPEND_HEADER_",description:"_A_LINK_GROUP_SLOT_APPEND_DESCRIPTION_",slots:"linkAppend"},{default:l(()=>[e(a,{class:"a_btn a_btn_primary",text:"Aloha",href:"https://github.com/"},{linkAppend:l(()=>n[0]||(n[0]=[b("span",null,"(***)",-1)])),_:1})]),_:1},8,["code-html","code-js"])}const Ee=c(Pe,[["render",xe]]);function Te(){return{codeHtml:`<a-link
  class="a_btn a_btn_primary"
  href="https://github.com/"
>
  <span>(Aloha)</span>
</a-link>`}}function Ne(){return{codeJs:`import { 
  ALink,
} from "aloha-vue";
    
export default {
  name: "PageLinkSlotDefault",
  components: {
    ALink,
  },
};`}}const Oe={name:"PageLinkSlotDefault",components:{ALink:d,AlohaExample:h},setup(){const{codeHtml:t}=Te(),{codeJs:n}=Ne();return{codeHtml:t,codeJs:n}}};function ye(t,n,o,i,p,u){const a=_("a-link"),s=_("aloha-example");return m(),r(s,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_LINK_GROUP_SLOT_DEFAULT_HEADER_",description:"_A_LINK_GROUP_SLOT_DEFAULT_DESCRIPTION_",slots:"default"},{default:l(()=>[e(a,{class:"a_btn a_btn_primary",href:"https://github.com/"},{default:l(()=>n[0]||(n[0]=[b("span",null,"(Aloha)",-1)])),_:1})]),_:1},8,["code-html","code-js"])}const Se=c(Oe,[["render",ye]]);function Re(){return{codeHtml:`<a-link
  class="a_btn a_btn_primary"
  text="Aloha"
  href="https://github.com/"
>
  <template
    v-slot:linkPrepend
  >
    <span>(***)</span>
  </template>
</a-link>`}}function $e(){return{codeJs:`import { 
  ALink,
} from "aloha-vue";
    
export default {
  name: "PageLinkSlotPrepend",
  components: {
    ALink,
  },
};`}}const He={name:"PageLinkSlotPrepend",components:{ALink:d,AlohaExample:h},setup(){const{codeHtml:t}=Re(),{codeJs:n}=$e();return{codeHtml:t,codeJs:n}}};function De(t,n,o,i,p,u){const a=_("a-link"),s=_("aloha-example");return m(),r(s,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_LINK_GROUP_SLOT_PREPEND_HEADER_",description:"_A_LINK_GROUP_SLOT_PREPEND_DESCRIPTION_",slots:"linkPrepend"},{default:l(()=>[e(a,{class:"a_btn a_btn_primary",text:"Aloha",href:"https://github.com/"},{linkPrepend:l(()=>n[0]||(n[0]=[b("span",null,"(***)",-1)])),_:1})]),_:1},8,["code-html","code-js"])}const Ge=c(He,[["render",De]]);function Ke(){return{codeHtml:`<a-link
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
</a-link>`}}function Je(){return{codeJs:`import { 
  ALink,
} from "aloha-vue";
    
export default {
  name: "PageLinkSlotTitle",
  components: {
    ALink,
  },
};`}}const Ce={name:"PageLinkSlotTitle",components:{ALink:d,AlohaExample:h},setup(){const{codeHtml:t}=Ke(),{codeJs:n}=Je();return{codeHtml:t,codeJs:n}}};function je(t,n,o,i,p,u){const a=_("a-link"),s=_("aloha-example");return m(),r(s,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_LINK_GROUP_SLOT_TITLE_HEADER_",description:"_A_LINK_GROUP_SLOT_TITLE_DESCRIPTION_",slots:"linkTitle"},{default:l(()=>[e(a,{class:"a_btn a_btn_primary",text:"Aloha","is-title-html":!0,href:"https://github.com/"},{linkTitle:l(()=>n[0]||(n[0]=[b("strong",null,"(***Aloha***)",-1)])),_:1})]),_:1},8,["code-html","code-js"])}const ve=c(Ce,[["render",je]]);function Be(){return{codeHtml:`<a-link
  class="a_btn a_btn_primary"
  text="_SHOW_MORE_"
  text-after=" €"
  text-before="$ "
  href="https://github.com/"
>
</a-link>`}}function Ue(){return{codeJs:`import { 
  ALink,
} from "aloha-vue";
    
export default {
  name: "PageLinkTextAfterBefore",
  components: {
    ALink,
  },
};`}}const Me={name:"PageLinkTextAfterBefore",components:{ALink:d,AlohaExample:h},setup(){const{codeHtml:t}=Be(),{codeJs:n}=Ue();return{codeHtml:t,codeJs:n}}};function Xe(t,n,o,i,p,u){const a=_("a-link"),s=_("aloha-example");return m(),r(s,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_LINK_GROUP_TEXT_AFTER_BEFORE_HEADER_",description:"_A_LINK_GROUP_TEXT_AFTER_BEFORE_DESCRIPTION_",props:["text-before","text-after"]},{default:l(()=>[e(a,{class:"a_btn a_btn_primary",text:"_SHOW_MORE_","text-after":" €","text-before":"$ ",href:"https://github.com/"})]),_:1},8,["code-html","code-js"])}const qe=c(Me,[["render",Xe]]);function we(){return{codeHtml:`<a-link
  class="a_btn a_btn_primary"
  :text="{ mobile: 'Aloha', desktop: 'Aloha-desktop' }"
  href="https://github.com/"
>
</a-link>`}}function Fe(){return{codeJs:`import { 
  ALink,
} from "aloha-vue";
    
export default {
  name: "PageLinkTextObject",
  components: {
    ALink,
  },
};`}}const ze={name:"PageLinkTextObject",components:{ALink:d,AlohaExample:h},setup(){const{codeHtml:t}=we(),{codeJs:n}=Fe();return{codeHtml:t,codeJs:n}}};function Ve(t,n,o,i,p,u){const a=_("a-link"),s=_("aloha-example");return m(),r(s,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_LINK_GROUP_TEXT_OBJECT_HEADER_",description:"_A_LINK_GROUP_TEXT_OBJECT_DESCRIPTION_",props:"text (as object)"},{default:l(()=>[e(a,{class:"a_btn a_btn_primary",text:{mobile:"Aloha",desktop:"Aloha-desktop"},href:"https://github.com/"})]),_:1},8,["code-html","code-js"])}const We=c(ze,[["render",Ve]]);function Ze(){return{codeHtml:`<a-link
  class="a_btn a_btn_secondary"
  text="Aloha"
  text-tag="strong"
  href="https://github.com/"
></a-link>`}}function Ye(){return{codeJs:`import { 
  ALink,
} from "aloha-vue";
    
export default {
  name: "PageLinkTextTag",
  components: {
    ALink,
  },
};`}}const Qe={name:"PageLinkTextTag",components:{ALink:d,AlohaExample:h},setup(){const{codeHtml:t}=Ze(),{codeJs:n}=Ye();return{codeHtml:t,codeJs:n}}};function ta(t,n,o,i,p,u){const a=_("a-link"),s=_("aloha-example");return m(),r(s,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_LINK_GROUP_TEXT_TAG_HEADER_",description:"_A_LINK_GROUP_TEXT_TAG_DESCRIPTION_",props:"text-tag"},{default:l(()=>[e(a,{class:"a_btn a_btn_secondary",text:"Aloha","text-tag":"strong",href:"https://github.com/"})]),_:1},8,["code-html","code-js"])}const ea=c(Qe,[["render",ta]]);function aa(){return{codeHtml:`<a-link
  class="a_btn a_btn_primary"
  :title="['Aloha', '$(Aloha)']"
  text="Aloha"
  href="https://github.com/"
>
</a-link>`}}function na(){return{codeJs:`import { 
  ALink,
} from "aloha-vue";
    
export default {
  name: "PageLinkTitleArray",
  components: {
    ALink,
  },
};`}}const _a={name:"PageLinkTitleArray",components:{ALink:d,AlohaExample:h},setup(){const{codeHtml:t}=aa(),{codeJs:n}=na();return{codeHtml:t,codeJs:n}}};function sa(t,n,o,i,p,u){const a=_("a-link"),s=_("aloha-example");return m(),r(s,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_LINK_GROUP_TITLE_ARRAY_HEADER_",description:"_A_LINK_GROUP_TITLE_ARRAY_DESCRIPTION_",props:"title (as array)"},{default:l(()=>[e(a,{class:"a_btn a_btn_primary",title:["Aloha","$(Aloha)"],text:"Aloha",href:"https://github.com/"})]),_:1},8,["code-html","code-js"])}const oa=c(_a,[["render",sa]]);function la(){return{codeHtml:`<a-link
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
</a-link>`}}function ia(){return{codeJs:`import { 
  ALink,
} from "aloha-vue";
    
export default {
  name: "PageLinkTitleHtml",
  components: {
    ALink,
  },
};`}}const ca={name:"PageLinkTitleHtml",components:{ALink:d,AlohaExample:h},setup(){const{codeHtml:t}=la(),{codeJs:n}=ia();return{codeHtml:t,codeJs:n}}};function ra(t,n,o,i,p,u){const a=_("a-link"),s=_("aloha-example");return m(),r(s,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_LINK_GROUP_TITLE_HTML_HEADER_",description:"_A_LINK_GROUP_TITLE_HTML_DESCRIPTION_",props:["title","is-title-html","title-placement"]},{default:l(()=>[e(a,{class:"a_btn a_btn_success a_mt_2",title:"_A_LINK_EXAMPLE_BIG_TITLE_",text:"placement: top","is-title-html":!0,"title-placement":"top",href:"https://github.com/"}),e(a,{class:"a_btn a_btn_success a_ml_2 a_mt_2",title:"_A_LINK_EXAMPLE_BIG_TITLE_",text:"placement: auto","is-title-html":!0,"title-placement":"auto",href:"https://github.com/"}),e(a,{class:"a_btn a_btn_success a_ml_2 a_mt_2",title:"_A_LINK_EXAMPLE_BIG_TITLE_",text:"placement: auto-start","is-title-html":!0,"title-placement":"auto-start",href:"https://github.com/"}),e(a,{class:"a_btn a_btn_success a_ml_2 a_mt_2",title:"_A_LINK_EXAMPLE_BIG_TITLE_",text:"placement: auto-end","is-title-html":!0,"title-placement":"auto-end",href:"https://github.com/"}),e(a,{class:"a_btn a_btn_success a_ml_2 a_mt_2",title:"_A_LINK_EXAMPLE_BIG_TITLE_",text:"placement: top-start","is-title-html":!0,"title-placement":"top-start",href:"https://github.com/"}),e(a,{class:"a_btn a_btn_success a_ml_2 a_mt_2",title:"_A_LINK_EXAMPLE_BIG_TITLE_",text:"placement: top-end","is-title-html":!0,"title-placement":"top-end",href:"https://github.com/"}),e(a,{class:"a_btn a_btn_success a_ml_2 a_mt_2",title:"_A_LINK_EXAMPLE_BIG_TITLE_",text:"placement: right","is-title-html":!0,"title-placement":"right",href:"https://github.com/"}),e(a,{class:"a_btn a_btn_success a_ml_2 a_mt_2",title:"_A_LINK_EXAMPLE_BIG_TITLE_",text:"placement: right-start","is-title-html":!0,"title-placement":"right-start",href:"https://github.com/"}),e(a,{class:"a_btn a_btn_success a_ml_2 a_mt_2",title:"_A_LINK_EXAMPLE_BIG_TITLE_",text:"placement: right-end","is-title-html":!0,"title-placement":"right-end",href:"https://github.com/"}),e(a,{class:"a_btn a_btn_success a_ml_2 a_mt_2",title:"_A_LINK_EXAMPLE_BIG_TITLE_",text:"placement: bottom","is-title-html":!0,"title-placement":"bottom",href:"https://github.com/"}),e(a,{class:"a_btn a_btn_success a_ml_2 a_mt_2",title:"_A_LINK_EXAMPLE_BIG_TITLE_",text:"placement: bottom-start","is-title-html":!0,"title-placement":"bottom-start",href:"https://github.com/"}),e(a,{class:"a_btn a_btn_success a_ml_2 a_mt_2",title:"_A_LINK_EXAMPLE_BIG_TITLE_",text:"placement: bottom-end","is-title-html":!0,"title-placement":"bottom-end",href:"https://github.com/"}),e(a,{class:"a_btn a_btn_success a_ml_2 a_mt_2",title:"_A_LINK_EXAMPLE_BIG_TITLE_",text:"placement: left","is-title-html":!0,"title-placement":"left",href:"https://github.com/"}),e(a,{class:"a_btn a_btn_success a_ml_2 a_mt_2",title:"_A_LINK_EXAMPLE_BIG_TITLE_",text:"placement: left-start","is-title-html":!0,"title-placement":"left-start",href:"https://github.com/"}),e(a,{class:"a_btn a_btn_success a_ml_2 a_mt_2",title:"_A_LINK_EXAMPLE_BIG_TITLE_",text:"placement: left-end","is-title-html":!0,"title-placement":"left-end",href:"https://github.com/"}),e(a,{class:"a_btn a_btn_success a_ml_2 a_mt_2",title:"_A_LINK_EXAMPLE_BIG_TITLE_",text:"placement: auto, html-title max-width 150","is-title-html":!0,"title-placement":"auto","title-attributes":{maxWidth:150},href:"https://github.com/"})]),_:1},8,["code-html","code-js"])}const ma=c(ca,[["render",ra]]);function pa(){return{codeHtml:`<a-link
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
</a-link>`}}function ua(){return{codeJs:`import { 
  ALink,
} from "aloha-vue";
    
export default {
  name: "PageLinkTransparent",
  components: {
    ALink,
  },
};`}}const ha={name:"PageLinkTransparent",components:{ALink:d,AlohaExample:h},setup(){const{codeHtml:t}=pa(),{codeJs:n}=ua();return{codeHtml:t,codeJs:n}}};function da(t,n,o,i,p,u){const a=_("a-link"),s=_("aloha-example");return m(),r(s,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_LINK_GROUP_TRANSPARENT_HEADER_",description:"_A_LINK_GROUP_TRANSPARENT_DESCRIPTION_",props:"class"},{default:l(()=>[e(a,{class:"a_btn a_btn_transparent_primary",text:"transparent-primary",href:"https://github.com/"}),e(a,{class:"a_btn a_btn_transparent_secondary a_ml_2",text:"transparent-secondary",href:"https://github.com/"}),e(a,{class:"a_btn a_btn_transparent_tertiary a_ml_2",text:"transparent-tertiary",href:"https://github.com/"}),e(a,{class:"a_btn a_btn_transparent_success a_ml_2",text:"transparent-success",href:"https://github.com/"}),e(a,{class:"a_btn a_btn_transparent_info a_ml_2",text:"transparent-info",href:"https://github.com/"}),e(a,{class:"a_btn a_btn_transparent_warning a_ml_2",text:"transparent-warning",href:"https://github.com/"}),e(a,{class:"a_btn a_btn_transparent_danger a_ml_2",text:"transparent-danger",href:"https://github.com/"}),e(a,{class:"a_btn a_btn_transparent_dark a_ml_2",text:"transparent-dark",href:"https://github.com/"}),e(a,{class:"a_btn a_btn_transparent_light a_ml_2",text:"transparent-light",href:"https://github.com/"})]),_:1},8,["code-html","code-js"])}const ba=c(ha,[["render",da]]);function fa(){return{dataExposes:[{name:"buttonRef",description:"_A_SHOW_MORE_EXPOSES_BUTTON_REF_DESCRIPTION_",type:"Object"},{name:"containerRef",description:"_A_SHOW_MORE_EXPOSES_CONTAINER_REF_DESCRIPTION_",type:"Object"},{name:"isButtonVisible",description:"_A_SHOW_MORE_EXPOSES_IS_BUTTON_VISIBLE_DESCRIPTION_",type:"Boolean"},{name:"isOpen",description:"_A_SHOW_MORE_EXPOSES_IS_OPEN_DESCRIPTION_",type:"Boolean"},{name:"toggleButton",description:"_A_SHOW_MORE_EXPOSES_TOGGLE_BUTTON_DESCRIPTION_",type:"Function"}]}}function ga(){const t=k(()=>w({placeholder:"_A_LINK_COMPONENT_NAME_"}));return{pageTitle:k(()=>`ALink${t.value?` (${t.value})`:""}`)}}function ka(){return{dataProps:[{name:"always-translate",description:"_A_TRANSLATION_PROPS_ALWAYS_TRANSLATE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"attributes",description:"_A_LINK_PROPS_ATTRIBUTES_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"class",description:"_A_LINK_PROPS_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"class-default",description:"_A_LINK_PROPS_CLASS_DEFAULT_DESCRIPTION_",type:"String",default:"aloha_element",required:!1},{name:"class-default-hidden",description:"_A_LINK_PROPS_CLASS_DEFAULT_HIDDEN_DESCRIPTION_",type:"String",default:"aloha_element__hidden",required:!1},{name:"class-disabled",description:"_A_LINK_PROPS_CLASS_DISABLED_DESCRIPTION_",type:"String",default:"disabled",required:!1},{name:"disabled",description:"_A_LINK_PROPS_DISABLED_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"extra",description:"_A_LINK_PROPS_EXTRA_DESCRIPTION_",type:"Object",default:void 0,required:!1},{name:"href",description:"_A_LINK_PROPS_HREF_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"html",description:"_A_LINK_PROPS_HTML_DESCRIPTION_",type:"String / Number / Object / Array",default:void 0,required:!1},{name:"html-screen-reader",description:"_A_LINK_PROPS_HTML_SCREEN_READER_DESCRIPTION_",type:"String / Number / Object / Array",default:void 0,required:!1},{name:"icon-attributes",description:"_A_LINK_PROPS_ICON_ATTRIBUTES_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"icon-class",description:"_A_LINK_PROPS_ICON_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"icon-left",description:"_A_LINK_PROPS_ICON_LEFT_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"icon-right",description:"_A_LINK_PROPS_ICON_RIGHT_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"icon-tag",description:"_A_LINK_PROPS_ICON_TAG_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"id",description:"_A_LINK_PROPS_ID_DESCRIPTION_",type:"String",default:'() => uniqueId("a_link_")',required:!1},{name:"is-title-html",description:"_A_LINK_PROPS_IS_TITLE_HTML_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"loading",description:"_A_LINK_PROPS_LOADING_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"loading-align",description:"_A_LINK_PROPS_LOADING_ALIGN_DESCRIPTION_",type:"String",default:"right",required:!1},{name:"loading-class",description:"_A_LINK_PROPS_LOADING_CLASS_DESCRIPTION_",type:"String / Object",default:"a_spinner_small",required:!1},{name:"safe-html",description:"_A_LINK_PROPS_SAFE_HTML_DESCRIPTION_",type:"String / Number / Object / Array",default:void 0,required:!1},{name:"safe-html-screen-reader",description:"_A_LINK_PROPS_SAFE_HTML_SCREEN_READER_DESCRIPTION_",type:"String / Number / Object / Array",default:void 0,required:!1},{name:"target",description:"_A_LINK_PROPS_TARGET_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"text",description:"_A_LINK_PROPS_TEXT_DESCRIPTION_",type:"String / Number / Object / Array",default:void 0,required:!1},{name:"text-after",description:"_A_LINK_PROPS_TEXT_AFTER_DESCRIPTION_",type:"String / Number / Object",default:void 0,required:!1},{name:"text-aria-hidden",description:"_A_LINK_PROPS_TEXT_ARIA_HIDDEN_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"text-before",description:"_A_LINK_PROPS_TEXT_BEFORE_DESCRIPTION_",type:"String / Number / Object",default:void 0,required:!1},{name:"text-class",description:"_A_LINK_PROPS_TEXT_CLASS_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"text-screen-reader",description:"_A_LINK_PROPS_TEXT_SCREEN_READER_DESCRIPTION_",type:"String / Number / Object / Array",default:void 0,required:!1},{name:"text-tag",description:"_A_LINK_PROPS_TEXT_TAG_DESCRIPTION_",type:"String",default:"span",required:!1},{name:"title",description:"_A_LINK_PROPS_TITLE_DESCRIPTION_",type:"String / Number / Object / Array",default:void 0,required:!1},{name:"title-attributes",description:"_A_LINK_PROPS_TITLE_ATTRIBUTES_DESCRIPTION_",type:"Object",default:"{}",required:!1},{name:"title-placement",description:"_A_LINK_PROPS_TITLE_PLACEMENT_DESCRIPTION_",type:"String",default:"top",required:!1},{name:"title-z-index",description:"_A_LINK_PROPS_TITLE_Z_INDEX_DESCRIPTION_",type:"String / Number",default:"auto",required:!1},{name:"to",description:"_A_LINK_PROPS_TO_DESCRIPTION_",type:"Object / String",default:void 0,required:!1}]}}function Aa(){return{dataSlots:[{name:"linkAppend",description:"_A_LINK_SLOT_LINK_APPEND_DESCRIPTION_"},{name:"linkPrepend",description:"_A_LINK_SLOT_LINK_PREPEND_DESCRIPTION_"},{name:"linkTitle",description:"_A_LINK_SLOT_LINK_TITLE_DESCRIPTION_"},{name:"default",description:"_A_LINK_SLOT_DEFAULT_DESCRIPTION_"}]}}const Ia={name:"PageLink",components:{AlohaPage:M,AlohaTableProps:X,ATranslation:F,PageLinkBasic:Q,PageLinkClass:_t,PageLinkComplex:ct,PageLinkDisabled:ht,PageLinkGroup:It,PageLinkGroupHorizontalVertical:St,PageLinkGroupSizes:Jt,PageLinkGroupVertical:Xt,PageLinkHtml:Vt,PageLinkIcons:te,PageLinkLoading:se,PageLinkOutline:re,PageLinkSafeHtml:de,PageLinkSizes:Ae,PageLinkSlotAppend:Ee,PageLinkSlotDefault:Se,PageLinkSlotPrepend:Ge,PageLinkSlotTitle:ve,PageLinkTextAfterBefore:qe,PageLinkTextObject:We,PageLinkTextTag:ea,PageLinkTitleArray:oa,PageLinkTitleHtml:ma,PageLinkTransparent:ba},setup(){const{pageTitle:t}=ga(),{dataProps:n}=ka(),{dataSlots:o}=Aa(),{dataExposes:i}=fa();return{dataExposes:i,dataProps:n,dataSlots:o,pageTitle:t}}};function La(t,n,o,i,p,u){const a=_("a-translation"),s=_("page-link-basic"),f=_("page-link-class"),A=_("page-link-outline"),I=_("page-link-transparent"),L=_("page-link-sizes"),P=_("page-link-group"),x=_("page-link-group-vertical"),E=_("page-link-group-horizontal-vertical"),T=_("page-link-group-sizes"),N=_("page-link-icons"),O=_("page-link-disabled"),y=_("page-link-loading"),S=_("page-link-text-after-before"),R=_("page-link-text-tag"),$=_("page-link-safe-html"),H=_("page-link-html"),D=_("page-link-text-object"),G=_("page-link-title-array"),K=_("page-link-title-html"),J=_("page-link-slot-default"),C=_("page-link-slot-prepend"),j=_("page-link-slot-append"),v=_("page-link-slot-title"),B=_("page-link-complex"),g=_("aloha-table-props"),U=_("aloha-page");return m(),r(U,{"page-title":t.pageTitle},{body:l(()=>[e(a,{tag:"p",html:"_A_LINK_COMPONENT_DESCRIPTION_"}),e(s),e(f),e(A),e(I),e(L),e(P),e(x),e(E),e(T),e(N),e(O),e(y),e(S),e(R),e($),e(H),e(D),e(G),e(K),e(J),e(C),e(j),e(v),e(B),e(g,{data:t.dataProps},null,8,["data"]),e(g,{"table-label":"Slots",data:t.dataSlots,columns:["name","description"]},null,8,["data"])]),_:1},8,["page-title"])}const ja=c(Ia,[["render",La]]);export{ja as default};
