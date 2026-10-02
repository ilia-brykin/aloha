import{$t as e,Ct as t,Tt as n,Ut as r,kt as i,qt as a,wt as o,zt as s}from"./chunk.vendor.CZPox1kV.js";import{Dt as c,Z as l,kt as ee,t as u}from"./bundle.index.CLtYDDlb.js";import{n as d,t as f}from"./chunk.AlohaExample.BFgfeYtr.js";import{t as p}from"./chunk.AlohaTableProps.CiFmD1UR.js";function m(){return{codeHtml:`<a-tooltip
  class="a_btn a_btn_primary"
  tag="button"
  :arrow-padding="35"
>
  <span>Aloha</span>
  
  <template
    v-slot:title
  >
    <div>Aloha</div>
  </template>
</a-tooltip>`}}function h(){return{codeJs:`import { 
  ATooltip,
} from "aloha-vue";
    
export default {
  name: "PageTooltipArrowPadding",
  components: {
    ATooltip,
  },
};`}}var g={name:`PageTooltipArrowPadding`,components:{AlohaExample:f,ATooltip:c},setup(){let{codeHtml:e}=m(),{codeJs:t}=h();return{codeHtml:e,codeJs:t}}};function _(e,t,c,l,ee,u){let d=r(`a-tooltip`),f=r(`aloha-example`);return s(),n(f,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TOOLTIP_GROUP_ARROW_PADDING_HEADER_`,description:`_A_TOOLTIP_GROUP_ARROW_PADDING_DESCRIPTION_`,props:`arrow-padding`},{default:a(()=>[i(d,{class:`a_btn a_btn_primary`,tag:`button`,"arrow-padding":35},{title:a(()=>[...t[0]||=[o(`div`,null,`Aloha`,-1)]]),default:a(()=>[t[1]||=o(`span`,null,`Aloha`,-1)]),_:1})]),_:1},8,[`code-html`,`code-js`])}var v=u(g,[[`render`,_]]);function y(){return{codeHtml:`<a-tooltip
  class="a_btn a_btn_primary"
  tag="button"
  :arrow-padding="arrowPaddingCallback"
>
  <span>Aloha</span>
  
  <template
    v-slot:title
  >
    <div>{{ title }}</div>
  </template>
</a-tooltip>`}}function b(){return{codeJs:`import { 
  ATooltip,
} from "aloha-vue";
    
export default {
  name: "PageTooltipArrowPaddingFunction",
  components: {
    ATooltip,
  },
  setup() {
    const arrowPaddingCallback = ({ popper, reference, placement }) => {
      console.log("placement", placement);
      console.log("popper", popper);
      console.log("reference", reference);
      return popper.width / reference.width + 400;
    };

    const title = \`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus.\`;

    return {
      arrowPaddingCallback,
      title,
    };
  },
};`}}var x={name:`PageTooltipArrowPaddingFunction`,components:{AlohaExample:f,ATooltip:c},setup(){let{codeHtml:e}=y(),{codeJs:t}=b();return{arrowPaddingCallback:({popper:e,reference:t,placement:n})=>(console.log(`placement`,n),console.log(`popper`,e),console.log(`reference`,t),e.width/t.width+400),codeHtml:e,codeJs:t,title:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus.`}}};function S(t,c,l,ee,u,d){let f=r(`a-tooltip`),p=r(`aloha-example`);return s(),n(p,{"code-html":t.codeHtml,"code-js":t.codeJs,header:`_A_TOOLTIP_GROUP_ARROW_PADDING_FUNCTION_HEADER_`,description:`_A_TOOLTIP_GROUP_ARROW_PADDING_FUNCTION_DESCRIPTION_`,props:`arrow-padding`},{default:a(()=>[i(f,{class:`a_btn a_btn_primary`,tag:`button`,"arrow-padding":t.arrowPaddingCallback},{title:a(()=>[o(`div`,null,e(t.title),1)]),default:a(()=>[c[0]||=o(`span`,null,`Aloha`,-1)]),_:1},8,[`arrow-padding`])]),_:1},8,[`code-html`,`code-js`])}var C=u(x,[[`render`,S]]);function w(){return{codeHtml:`<a-tooltip>
  <span>Aloha</span>
  
  <template
    v-slot:title
  >
    <div>Aloha</div>
  </template>
</a-tooltip>`}}function T(){return{codeJs:`import { 
  ATooltip,
} from "aloha-vue";
    
export default {
  name: "PageTooltipBasic",
  components: {
    ATooltip,
  },
};`}}var E={name:`PageDisclosureBasic`,components:{AlohaExample:f,ATooltip:c},setup(){let{codeHtml:e}=w(),{codeJs:t}=T();return{codeHtml:e,codeJs:t}}};function D(e,t,c,l,ee,u){let d=r(`a-tooltip`),f=r(`aloha-example`);return s(),n(f,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,slots:[`default`,`title`]},{default:a(()=>[i(d,null,{title:a(()=>[...t[0]||=[o(`div`,null,`Aloha`,-1)]]),default:a(()=>[t[1]||=o(`span`,null,`Aloha`,-1)]),_:1})]),_:1},8,[`code-html`,`code-js`])}var O=u(E,[[`render`,D]]);function k(){return{codeHtml:`<a-tooltip
  class="a_btn a_btn_primary"
  tag="button"
  :show-arrow="false"
>
  <span>Aloha</span>
  
  <template
    v-slot:title
  >
    <div>Aloha</div>
  </template>
</a-tooltip>`}}function A(){return{codeJs:`import { 
  ATooltip,
} from "aloha-vue";
    
export default {
  name: "PageTooltipHideArrow",
  components: {
    ATooltip,
  },
};`}}var j={name:`PageTooltipHideArrow`,components:{AlohaExample:f,ATooltip:c},setup(){let{codeHtml:e}=k(),{codeJs:t}=A();return{codeHtml:e,codeJs:t}}};function M(e,t,c,l,ee,u){let d=r(`a-tooltip`),f=r(`aloha-example`);return s(),n(f,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TOOLTIP_GROUP_HIDE_ARROW_HEADER_`,description:`_A_TOOLTIP_GROUP_HIDE_ARROW_DESCRIPTION_`,props:`show-arrow`},{default:a(()=>[i(d,{class:`a_btn a_btn_primary`,tag:`button`,"show-arrow":!1},{title:a(()=>[...t[0]||=[o(`div`,null,`Aloha`,-1)]]),default:a(()=>[t[1]||=o(`span`,null,`Aloha`,-1)]),_:1})]),_:1},8,[`code-html`,`code-js`])}var N=u(j,[[`render`,M]]);function P(){return{codeHtml:`<a-tooltip
  class="a_btn a_btn_primary"
  tag="button"
  :max-width="300"
>
  <span>Aloha</span>
  
  <template
    v-slot:title
  >
    <div>{{ title }}</div>
  </template>
</a-tooltip>`}}function F(){return{codeJs:`import { 
  ATooltip,
} from "aloha-vue";
    
export default {
  name: "PageTooltipMaxWidth",
  components: {
    ATooltip,
  },
  setup() {
    const title = \`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.\`;

    return {
      title,
    };
  },
};`}}var I={name:`PageTooltipMaxWidth`,components:{AlohaExample:f,ATooltip:c},setup(){let{codeHtml:e}=P(),{codeJs:t}=F();return{codeHtml:e,codeJs:t,title:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.`}}};function L(t,c,l,ee,u,d){let f=r(`a-tooltip`),p=r(`aloha-example`);return s(),n(p,{"code-html":t.codeHtml,"code-js":t.codeJs,header:`_A_TOOLTIP_GROUP_MAX_WIDTH_HEADER_`,description:`_A_TOOLTIP_GROUP_MAX_WIDTH_DESCRIPTION_`,props:`max-width`},{default:a(()=>[i(f,{class:`a_btn a_btn_primary`,tag:`button`,"max-width":300},{title:a(()=>[o(`div`,null,e(t.title),1)]),default:a(()=>[c[0]||=o(`span`,null,`Aloha`,-1)]),_:1})]),_:1},8,[`code-html`,`code-js`])}var R=u(I,[[`render`,L]]);function z(){return{codeHtml:`<a-tooltip
  class="a_btn a_btn_secondary"
  tag="button"
  :offset-distance="30"
>
  <span>:offset-distance="30"</span>
  
  <template
    v-slot:title
  >
    <div>:offset-distance="30"</div>
  </template>
</a-tooltip>

<a-tooltip
  class="a_btn a_btn_secondary a_ml_3"
  tag="button"
  :offset-distance="6"
>
  <span>:offset-distance="6"</span>
  
  <template
    v-slot:title
  >
    <div>:offset-distance="6"</div>
  </template>
</a-tooltip>

<a-tooltip
  class="a_btn a_btn_secondary a_ml_3"
  tag="button"
  :offset-distance="0"
>
  <span>:offset-distance="0"</span>
  
  <template
    v-slot:title
  >
    <div>:offset-distance="0"</div>
  </template>
</a-tooltip>

<a-tooltip
  class="a_btn a_btn_secondary a_ml_3"
  tag="button"
  :offset-distance="-10"
>
  <span>:offset-distance="-10"</span>
  
  <template
    v-slot:title
  >
    <div>:offset-distance="-10"</div>
  </template>
</a-tooltip>`}}function B(){return{codeJs:`import { 
  ATooltip,
} from "aloha-vue";
    
export default {
  name: "PageTooltipOffsetDistance",
  components: {
    ATooltip,
  },
};`}}var V={name:`PageTooltipOffsetDistance`,components:{AlohaExample:f,ATooltip:c},setup(){let{codeHtml:e}=z(),{codeJs:t}=B();return{codeHtml:e,codeJs:t}}};function H(e,t,c,l,ee,u){let d=r(`a-tooltip`),f=r(`aloha-example`);return s(),n(f,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TOOLTIP_GROUP_OFFSET_DISTANCE_HEADER_`,description:`_A_TOOLTIP_GROUP_OFFSET_DISTANCE_DESCRIPTION_`,props:`offset-distance`},{default:a(()=>[i(d,{class:`a_btn a_btn_secondary`,tag:`button`,"offset-distance":30},{title:a(()=>[...t[0]||=[o(`div`,null,`:offset-distance="30"`,-1)]]),default:a(()=>[t[1]||=o(`span`,null,`:offset-distance="30"`,-1)]),_:1}),i(d,{class:`a_btn a_btn_secondary a_ml_3`,tag:`button`,"offset-distance":6},{title:a(()=>[...t[2]||=[o(`div`,null,`:offset-distance="6"`,-1)]]),default:a(()=>[t[3]||=o(`span`,null,`:offset-distance="6"`,-1)]),_:1}),i(d,{class:`a_btn a_btn_secondary a_ml_3`,tag:`button`,"offset-distance":0},{title:a(()=>[...t[4]||=[o(`div`,null,`:offset-distance="0"`,-1)]]),default:a(()=>[t[5]||=o(`span`,null,`:offset-distance="0"`,-1)]),_:1}),i(d,{class:`a_btn a_btn_secondary a_ml_3`,tag:`button`,"offset-distance":-10},{title:a(()=>[...t[6]||=[o(`div`,null,`:offset-distance="-10"`,-1)]]),default:a(()=>[t[7]||=o(`span`,null,`:offset-distance="-10"`,-1)]),_:1})]),_:1},8,[`code-html`,`code-js`])}var U=u(V,[[`render`,H]]);function W(){return{codeHtml:`<a-tooltip
  class="a_btn a_btn_primary"
  tag="button"
  :offset-skidding="30"
>
  <span>:offset-skidding="30"</span>
  
  <template
    v-slot:title
  >
    <div>:offset-skidding="30"</div>
  </template>
</a-tooltip>

<a-tooltip
  class="a_btn a_btn_primary a_ml_3"
  tag="button"
  :offset-skidding="-30"
>
  <span>:offset-skidding="-30"</span>
  
  <template
    v-slot:title
  >
    <div>:offset-skidding="-30"</div>
  </template>
</a-tooltip>`}}function G(){return{codeJs:`import { 
  ATooltip,
} from "aloha-vue";
    
export default {
  name: "PageTooltipOffsetSkidding",
  components: {
    ATooltip,
  },
};`}}var te={name:`PageTooltipOffsetSkidding`,components:{AlohaExample:f,ATooltip:c},setup(){let{codeHtml:e}=W(),{codeJs:t}=G();return{codeHtml:e,codeJs:t}}};function K(e,t,c,l,ee,u){let d=r(`a-tooltip`),f=r(`aloha-example`);return s(),n(f,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TOOLTIP_GROUP_OFFSET_SKIDDING_HEADER_`,description:`_A_TOOLTIP_GROUP_OFFSET_SKIDDING_DESCRIPTION_`,props:`offset-skidding`},{default:a(()=>[i(d,{class:`a_btn a_btn_primary`,tag:`button`,"offset-skidding":30},{title:a(()=>[...t[0]||=[o(`div`,null,`:offset-skidding="30"`,-1)]]),default:a(()=>[t[1]||=o(`span`,null,`:offset-skidding="30"`,-1)]),_:1}),i(d,{class:`a_btn a_btn_primary a_ml_3`,tag:`button`,"offset-skidding":-30},{title:a(()=>[...t[2]||=[o(`div`,null,`:offset-skidding="-30"`,-1)]]),default:a(()=>[t[3]||=o(`span`,null,`:offset-skidding="-30"`,-1)]),_:1})]),_:1},8,[`code-html`,`code-js`])}var q=u(te,[[`render`,K]]);function J(){return{codeHtml:`<a-tooltip
  class="a_btn a_btn_primary"
  tag="button"
>
  <span>Aloha</span>
  
  <template
    v-slot:title
  >
    <div>{{ title }}</div>
  </template>
</a-tooltip>`}}function Y(){return{codeJs:`import { 
  ATooltip,
} from "aloha-vue";
    
export default {
  name: "PageTooltipTag",
  components: {
    ATooltip,
  },
  setup() {
    const title = \`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.\`;

    return {
      title,
    };
  },
};`}}var X={name:`PageTooltipTag`,components:{AlohaExample:f,ATooltip:c},setup(){let{codeHtml:e}=J(),{codeJs:t}=Y();return{codeHtml:e,codeJs:t,title:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.`}}};function Z(t,c,l,ee,u,d){let f=r(`a-tooltip`),p=r(`aloha-example`);return s(),n(p,{"code-html":t.codeHtml,"code-js":t.codeJs,header:`_A_TOOLTIP_GROUP_TAG_HEADER_`,description:`_A_TOOLTIP_GROUP_TAG_DESCRIPTION_`,props:`tag`},{default:a(()=>[i(f,{class:`a_btn a_btn_primary`,tag:`button`},{title:a(()=>[o(`div`,null,e(t.title),1)]),default:a(()=>[c[0]||=o(`span`,null,`Aloha`,-1)]),_:1})]),_:1},8,[`code-html`,`code-js`])}var Q=u(X,[[`render`,Z]]);function ne(){return{codeHtml:`<a-tooltip
  class="a_btn a_btn_primary"
  tag="button"
  :time-close="0"
>
  <span>0</span>
  
  <template
    v-slot:title
  >
    <div>0</div>
  </template>
</a-tooltip>

<a-tooltip
  class="a_btn a_btn_primary a_ml_3"
  tag="button"
  :time-close="100"
>
  <span>100</span>
  
  <template
    v-slot:title
  >
    <div>100</div>
  </template>
</a-tooltip>
<a-tooltip
  class="a_btn a_btn_primary a_ml_3"
  tag="button"
  :time-close="1000"
>
  <span>1000</span>
  
  <template
    v-slot:title
  >
    <div>1000</div>
  </template>
</a-tooltip>`}}function re(){return{codeJs:`import { 
  ATooltip,
} from "aloha-vue";
    
export default {
  name: "PageTooltipTimeClose",
  components: {
    ATooltip,
  },
};`}}var ie={name:`PageTooltipTag`,components:{AlohaExample:f,ATooltip:c},setup(){let{codeHtml:e}=ne(),{codeJs:t}=re();return{codeHtml:e,codeJs:t}}};function ae(e,t,c,l,ee,u){let d=r(`a-tooltip`),f=r(`aloha-example`);return s(),n(f,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TOOLTIP_GROUP_TIME_CLOSE_HEADER_`,description:`_A_TOOLTIP_GROUP_TIME_CLOSE_DESCRIPTION_`,props:`time-close`},{default:a(()=>[i(d,{class:`a_btn a_btn_primary`,tag:`button`,"time-close":0},{title:a(()=>[...t[0]||=[o(`div`,null,`0`,-1)]]),default:a(()=>[t[1]||=o(`span`,null,`0`,-1)]),_:1}),i(d,{class:`a_btn a_btn_primary a_ml_3`,tag:`button`,"time-close":100},{title:a(()=>[...t[2]||=[o(`div`,null,`100`,-1)]]),default:a(()=>[t[3]||=o(`span`,null,`100`,-1)]),_:1}),i(d,{class:`a_btn a_btn_primary a_ml_3`,tag:`button`,"time-close":1e3},{title:a(()=>[...t[4]||=[o(`div`,null,`1000`,-1)]]),default:a(()=>[t[5]||=o(`span`,null,`1000`,-1)]),_:1})]),_:1},8,[`code-html`,`code-js`])}var oe=u(ie,[[`render`,ae]]);function se(){return{codeHtml:`<a-tooltip
  class="a_btn a_btn_primary"
  tag="button"
  :width="200"
>
  <span>Aloha</span>
  
  <template
    v-slot:title
  >
    <div>Aloha</div>
  </template>
</a-tooltip>

<a-tooltip
  class="a_btn a_btn_primary a_ml_3"
  tag="button"
  :width="200"
>
  <span>a_text_center</span>
  
  <template
    v-slot:title
  >
    <div
      class="a_text_center"
    >Aloha</div>
  </template>
</a-tooltip>`}}function ce(){return{codeJs:`import { 
  ATooltip,
} from "aloha-vue";
    
export default {
  name: "PageTooltipWidth",
  components: {
    ATooltip,
  },
};`}}var le={name:`PageTooltipWidth`,components:{AlohaExample:f,ATooltip:c},setup(){let{codeHtml:e}=se(),{codeJs:t}=ce();return{codeHtml:e,codeJs:t}}};function ue(e,t,c,l,ee,u){let d=r(`a-tooltip`),f=r(`aloha-example`);return s(),n(f,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TOOLTIP_GROUP_WIDTH_HEADER_`,description:`_A_TOOLTIP_GROUP_WIDTH_DESCRIPTION_`,props:`width`},{default:a(()=>[i(d,{class:`a_btn a_btn_primary`,tag:`button`,width:200},{title:a(()=>[...t[0]||=[o(`div`,null,`Aloha`,-1)]]),default:a(()=>[t[1]||=o(`span`,null,`Aloha`,-1)]),_:1}),i(d,{class:`a_btn a_btn_primary a_ml_3`,tag:`button`,width:200},{title:a(()=>[...t[2]||=[o(`div`,{class:`a_text_center`},`Aloha`,-1)]]),default:a(()=>[t[3]||=o(`span`,null,`a_text_center`,-1)]),_:1})]),_:1},8,[`code-html`,`code-js`])}var de=u(le,[[`render`,ue]]);function fe(){return{dataExposes:[{name:`buttonRef`,description:`_A_DISCLOSURE_EXPOSES_BUTTON_REF_DESCRIPTION_`,type:`Object`},{name:`containerRef`,description:`_A_DISCLOSURE_EXPOSES_CONTAINER_REF_DESCRIPTION_`,type:`Object`},{name:`isOpen`,description:`_A_DISCLOSURE_EXPOSES_IS_OPEN_DESCRIPTION_`,type:`Boolean`},{name:`toggleButton`,description:`_A_DISCLOSURE_EXPOSES_TOGGLE_BUTTON_DESCRIPTION_`,type:`Function`}]}}function pe(){let e=t(()=>ee({placeholder:`_A_TOOLTIP_COMPONENT_NAME_`}));return{pageTitle:t(()=>`ATooltip${e.value?` (${e.value})`:``}`)}}function $(){return{dataProps:[{name:`btn-attributes`,description:`_A_DISCLOSURE_PROPS_PROPS_BTN_ATTRIBUTES_DESCRIPTION_`,type:`Object`,default:`{}`,required:!1},{name:`btn-class`,description:`_A_DISCLOSURE_PROPS_BTN_CLASS_DESCRIPTION_`,type:`String / Object`,default:`a_btn a_btn_link a_p_0`,required:!1},{name:`btn-icon-left-less`,description:`_A_DISCLOSURE_PROPS_BTN_ICON_LEFT_LESS_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`btn-icon-left-more`,description:`_A_DISCLOSURE_PROPS_BTN_ICON_LEFT_MORE_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`btn-icon-right-less`,description:`_A_DISCLOSURE_PROPS_BTN_ICON_RIGHT_LESS_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`btn-icon-right-more`,description:`_A_DISCLOSURE_PROPS_BTN_ICON_RIGHT_MORE_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`btn-id`,description:`_A_DISCLOSURE_PROPS_BTN_ID_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`btn-parent-class`,description:`_A_DISCLOSURE_PROPS_BTN_PARENT_CLASS_DESCRIPTION_`,type:`String`,default:`a_text_center`,required:!1},{name:`btn-text-less`,description:`_A_DISCLOSURE_PROPS_BTN_TEXT_LESS_DESCRIPTION_`,type:`String`,default:`_SHOW_LESS_`,required:!1},{name:`btn-text-more`,description:`_A_DISCLOSURE_PROPS_BTN_TEXT_MORE_DESCRIPTION_`,type:`String`,default:`_SHOW_MORE_`,required:!1},{name:`btn-title-less`,description:`_A_DISCLOSURE_PROPS_BTN_TITLE_LESS_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`btn-title-more`,description:`_A_DISCLOSURE_PROPS_BTN_TITLE_MORE_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`btn-title-placement`,description:`_A_DISCLOSURE_PROPS_BTN_TITLE_PLACEMENT_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`disabled`,description:`_A_DISCLOSURE_PROPS_DISABLED_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`html-less`,description:`_A_DISCLOSURE_PROPS_HTML_LESS_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`html-more`,description:`_A_DISCLOSURE_PROPS_HTML_MORE_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`id`,description:`_A_DISCLOSURE_PROPS_ID_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`is-btn-title-html`,description:`_A_DISCLOSURE_PROPS_IS_BTN_TITLE_HTML_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`is-open-default`,description:`_A_DISCLOSURE_PROPS_IS_OPEN_DEFAULT_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`safe-html-less`,description:`_A_DISCLOSURE_PROPS_SAFE_HTML_LESS_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`safe-html-more`,description:`_A_DISCLOSURE_PROPS_SAFE_HTML_MORE_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`show-less`,description:`_A_DISCLOSURE_PROPS_SHOW_LESS_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`text-less`,description:`_A_DISCLOSURE_PROPS_TEXT_LESS_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`text-more`,description:`_A_DISCLOSURE_PROPS_TEXT_MORE_DESCRIPTION_`,type:`String`,default:void 0,required:!1}]}}function me(){return{dataSlots:[{name:`button`,description:`_A_DISCLOSURE_SLOT_BUTTON_DESCRIPTION_`},{name:`less`,description:`_A_DISCLOSURE_SLOT_LESS_DESCRIPTION_`},{name:`more`,description:`_A_DISCLOSURE_SLOT_MORE_DESCRIPTION_`}]}}var he={name:`PageTooltip`,components:{AlohaPage:d,AlohaTableProps:p,ATranslation:l,PageTooltipBasic:O,PageTooltipTag:Q,PageTooltipMaxWidth:R,PageTooltipWidth:de,PageTooltipTimeClose:oe,PageTooltipHideArrow:N,PageTooltipOffsetSkidding:q,PageTooltipOffsetDistance:U,PageTooltipArrowPadding:v,PageTooltipArrowPaddingFunction:C},setup(){let{pageTitle:e}=pe(),{dataProps:t}=$(),{dataSlots:n}=me(),{dataExposes:r}=fe();return{dataExposes:r,dataProps:t,dataSlots:n,pageTitle:e}}};function ge(e,t,o,c,l,ee){let u=r(`a-translation`),d=r(`page-tooltip-basic`),f=r(`page-tooltip-tag`),p=r(`page-tooltip-max-width`),m=r(`page-tooltip-width`),h=r(`page-tooltip-time-close`),g=r(`page-tooltip-hide-arrow`),_=r(`page-tooltip-offset-skidding`),v=r(`page-tooltip-offset-distance`),y=r(`page-tooltip-arrow-padding`),b=r(`page-tooltip-arrow-padding-function`),x=r(`aloha-table-props`),S=r(`aloha-page`);return s(),n(S,{"page-title":e.pageTitle},{body:a(()=>[i(u,{tag:`p`,html:`_A_TOOLTIP_COMPONENT_DESCRIPTION_`}),i(d),i(f),i(p),i(m),i(h),i(g),i(_),i(v),i(y),i(b),i(x,{data:e.dataProps},null,8,[`data`]),i(x,{"table-label":`Slots`,data:e.dataSlots,columns:[`name`,`description`]},null,8,[`data`]),i(x,{"table-label":`Exposes`,data:e.dataExposes,columns:[`name`,`type`,`description`]},null,8,[`data`])]),_:1},8,[`page-title`])}var _e=u(he,[[`render`,ge]]);export{_e as default};