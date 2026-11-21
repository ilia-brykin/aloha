import{t as e}from"./chunk.AlohaPage.DkILLbn5.js";import{t}from"./chunk.AlohaTableProps.BidXnizO.js";import{t as n}from"./chunk.AlohaExample.BXW-VBsT.js";import{$t as ee,qt as r,zt as i}from"./bundle.index.b2KYNVgN.js";import{$t as a,Ft as o,It as s,Pt as c,Vt as l,hn as u,rn as d,sn as f}from"./chunk.vendor.BvryzG0o.js";import{t as p}from"./chunk._plugin-vue_export-helper.BDNMzG2s.js";function m(){return{codeHtml:`<a-tooltip
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
};`}}var g={name:`PageTooltipArrowPadding`,components:{AlohaExample:n,ATooltip:i},setup(){let{codeHtml:e}=m(),{codeJs:t}=h();return{codeHtml:e,codeJs:t}}};function _(e,t,n,ee,r,i){let c=d(`a-tooltip`),u=d(`aloha-example`);return a(),s(u,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TOOLTIP_GROUP_ARROW_PADDING_HEADER_`,description:`_A_TOOLTIP_GROUP_ARROW_PADDING_DESCRIPTION_`,props:`arrow-padding`},{default:f(()=>[l(c,{class:`a_btn a_btn_primary`,tag:`button`,"arrow-padding":35},{title:f(()=>[...t[0]||=[o(`div`,null,`Aloha`,-1)]]),default:f(()=>[t[1]||=o(`span`,null,`Aloha`,-1)]),_:1})]),_:1},8,[`code-html`,`code-js`])}var v=p(g,[[`render`,_]]);function y(){return{codeHtml:`<a-tooltip
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
};`}}var x={name:`PageTooltipArrowPaddingFunction`,components:{AlohaExample:n,ATooltip:i},setup(){let{codeHtml:e}=y(),{codeJs:t}=b();return{arrowPaddingCallback:({popper:e,reference:t,placement:n})=>(console.log(`placement`,n),console.log(`popper`,e),console.log(`reference`,t),e.width/t.width+400),codeHtml:e,codeJs:t,title:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus.`}}};function S(e,t,n,ee,r,i){let c=d(`a-tooltip`),p=d(`aloha-example`);return a(),s(p,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TOOLTIP_GROUP_ARROW_PADDING_FUNCTION_HEADER_`,description:`_A_TOOLTIP_GROUP_ARROW_PADDING_FUNCTION_DESCRIPTION_`,props:`arrow-padding`},{default:f(()=>[l(c,{class:`a_btn a_btn_primary`,tag:`button`,"arrow-padding":e.arrowPaddingCallback},{title:f(()=>[o(`div`,null,u(e.title),1)]),default:f(()=>[t[0]||=o(`span`,null,`Aloha`,-1)]),_:1},8,[`arrow-padding`])]),_:1},8,[`code-html`,`code-js`])}var C=p(x,[[`render`,S]]);function w(){return{codeHtml:`<a-tooltip>
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
};`}}var E={name:`PageDisclosureBasic`,components:{AlohaExample:n,ATooltip:i},setup(){let{codeHtml:e}=w(),{codeJs:t}=T();return{codeHtml:e,codeJs:t}}};function D(e,t,n,ee,r,i){let c=d(`a-tooltip`),u=d(`aloha-example`);return a(),s(u,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,slots:[`default`,`title`]},{default:f(()=>[l(c,null,{title:f(()=>[...t[0]||=[o(`div`,null,`Aloha`,-1)]]),default:f(()=>[t[1]||=o(`span`,null,`Aloha`,-1)]),_:1})]),_:1},8,[`code-html`,`code-js`])}var O=p(E,[[`render`,D]]);function k(){return{codeHtml:`<a-tooltip
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
};`}}var j={name:`PageTooltipHideArrow`,components:{AlohaExample:n,ATooltip:i},setup(){let{codeHtml:e}=k(),{codeJs:t}=A();return{codeHtml:e,codeJs:t}}};function M(e,t,n,ee,r,i){let c=d(`a-tooltip`),u=d(`aloha-example`);return a(),s(u,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TOOLTIP_GROUP_HIDE_ARROW_HEADER_`,description:`_A_TOOLTIP_GROUP_HIDE_ARROW_DESCRIPTION_`,props:`show-arrow`},{default:f(()=>[l(c,{class:`a_btn a_btn_primary`,tag:`button`,"show-arrow":!1},{title:f(()=>[...t[0]||=[o(`div`,null,`Aloha`,-1)]]),default:f(()=>[t[1]||=o(`span`,null,`Aloha`,-1)]),_:1})]),_:1},8,[`code-html`,`code-js`])}var N=p(j,[[`render`,M]]);function P(){return{codeHtml:`<a-tooltip
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
};`}}var I={name:`PageTooltipMaxWidth`,components:{AlohaExample:n,ATooltip:i},setup(){let{codeHtml:e}=P(),{codeJs:t}=F();return{codeHtml:e,codeJs:t,title:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.`}}};function L(e,t,n,ee,r,i){let c=d(`a-tooltip`),p=d(`aloha-example`);return a(),s(p,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TOOLTIP_GROUP_MAX_WIDTH_HEADER_`,description:`_A_TOOLTIP_GROUP_MAX_WIDTH_DESCRIPTION_`,props:`max-width`},{default:f(()=>[l(c,{class:`a_btn a_btn_primary`,tag:`button`,"max-width":300},{title:f(()=>[o(`div`,null,u(e.title),1)]),default:f(()=>[t[0]||=o(`span`,null,`Aloha`,-1)]),_:1})]),_:1},8,[`code-html`,`code-js`])}var R=p(I,[[`render`,L]]);function z(){return{codeHtml:`<a-tooltip
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
};`}}var V={name:`PageTooltipOffsetDistance`,components:{AlohaExample:n,ATooltip:i},setup(){let{codeHtml:e}=z(),{codeJs:t}=B();return{codeHtml:e,codeJs:t}}};function H(e,t,n,ee,r,i){let c=d(`a-tooltip`),u=d(`aloha-example`);return a(),s(u,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TOOLTIP_GROUP_OFFSET_DISTANCE_HEADER_`,description:`_A_TOOLTIP_GROUP_OFFSET_DISTANCE_DESCRIPTION_`,props:`offset-distance`},{default:f(()=>[l(c,{class:`a_btn a_btn_secondary`,tag:`button`,"offset-distance":30},{title:f(()=>[...t[0]||=[o(`div`,null,`:offset-distance="30"`,-1)]]),default:f(()=>[t[1]||=o(`span`,null,`:offset-distance="30"`,-1)]),_:1}),l(c,{class:`a_btn a_btn_secondary a_ml_3`,tag:`button`,"offset-distance":6},{title:f(()=>[...t[2]||=[o(`div`,null,`:offset-distance="6"`,-1)]]),default:f(()=>[t[3]||=o(`span`,null,`:offset-distance="6"`,-1)]),_:1}),l(c,{class:`a_btn a_btn_secondary a_ml_3`,tag:`button`,"offset-distance":0},{title:f(()=>[...t[4]||=[o(`div`,null,`:offset-distance="0"`,-1)]]),default:f(()=>[t[5]||=o(`span`,null,`:offset-distance="0"`,-1)]),_:1}),l(c,{class:`a_btn a_btn_secondary a_ml_3`,tag:`button`,"offset-distance":-10},{title:f(()=>[...t[6]||=[o(`div`,null,`:offset-distance="-10"`,-1)]]),default:f(()=>[t[7]||=o(`span`,null,`:offset-distance="-10"`,-1)]),_:1})]),_:1},8,[`code-html`,`code-js`])}var te=p(V,[[`render`,H]]);function U(){return{codeHtml:`<a-tooltip
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
</a-tooltip>`}}function W(){return{codeJs:`import { 
  ATooltip,
} from "aloha-vue";
    
export default {
  name: "PageTooltipOffsetSkidding",
  components: {
    ATooltip,
  },
};`}}var G={name:`PageTooltipOffsetSkidding`,components:{AlohaExample:n,ATooltip:i},setup(){let{codeHtml:e}=U(),{codeJs:t}=W();return{codeHtml:e,codeJs:t}}};function K(e,t,n,ee,r,i){let c=d(`a-tooltip`),u=d(`aloha-example`);return a(),s(u,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TOOLTIP_GROUP_OFFSET_SKIDDING_HEADER_`,description:`_A_TOOLTIP_GROUP_OFFSET_SKIDDING_DESCRIPTION_`,props:`offset-skidding`},{default:f(()=>[l(c,{class:`a_btn a_btn_primary`,tag:`button`,"offset-skidding":30},{title:f(()=>[...t[0]||=[o(`div`,null,`:offset-skidding="30"`,-1)]]),default:f(()=>[t[1]||=o(`span`,null,`:offset-skidding="30"`,-1)]),_:1}),l(c,{class:`a_btn a_btn_primary a_ml_3`,tag:`button`,"offset-skidding":-30},{title:f(()=>[...t[2]||=[o(`div`,null,`:offset-skidding="-30"`,-1)]]),default:f(()=>[t[3]||=o(`span`,null,`:offset-skidding="-30"`,-1)]),_:1})]),_:1},8,[`code-html`,`code-js`])}var q=p(G,[[`render`,K]]);function J(){return{codeHtml:`<a-tooltip
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
};`}}var X={name:`PageTooltipTag`,components:{AlohaExample:n,ATooltip:i},setup(){let{codeHtml:e}=J(),{codeJs:t}=Y();return{codeHtml:e,codeJs:t,title:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.`}}};function Z(e,t,n,ee,r,i){let c=d(`a-tooltip`),p=d(`aloha-example`);return a(),s(p,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TOOLTIP_GROUP_TAG_HEADER_`,description:`_A_TOOLTIP_GROUP_TAG_DESCRIPTION_`,props:`tag`},{default:f(()=>[l(c,{class:`a_btn a_btn_primary`,tag:`button`},{title:f(()=>[o(`div`,null,u(e.title),1)]),default:f(()=>[t[0]||=o(`span`,null,`Aloha`,-1)]),_:1})]),_:1},8,[`code-html`,`code-js`])}var Q=p(X,[[`render`,Z]]);function ne(){return{codeHtml:`<a-tooltip
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
};`}}var ie={name:`PageTooltipTag`,components:{AlohaExample:n,ATooltip:i},setup(){let{codeHtml:e}=ne(),{codeJs:t}=re();return{codeHtml:e,codeJs:t}}};function ae(e,t,n,ee,r,i){let c=d(`a-tooltip`),u=d(`aloha-example`);return a(),s(u,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TOOLTIP_GROUP_TIME_CLOSE_HEADER_`,description:`_A_TOOLTIP_GROUP_TIME_CLOSE_DESCRIPTION_`,props:`time-close`},{default:f(()=>[l(c,{class:`a_btn a_btn_primary`,tag:`button`,"time-close":0},{title:f(()=>[...t[0]||=[o(`div`,null,`0`,-1)]]),default:f(()=>[t[1]||=o(`span`,null,`0`,-1)]),_:1}),l(c,{class:`a_btn a_btn_primary a_ml_3`,tag:`button`,"time-close":100},{title:f(()=>[...t[2]||=[o(`div`,null,`100`,-1)]]),default:f(()=>[t[3]||=o(`span`,null,`100`,-1)]),_:1}),l(c,{class:`a_btn a_btn_primary a_ml_3`,tag:`button`,"time-close":1e3},{title:f(()=>[...t[4]||=[o(`div`,null,`1000`,-1)]]),default:f(()=>[t[5]||=o(`span`,null,`1000`,-1)]),_:1})]),_:1},8,[`code-html`,`code-js`])}var oe=p(ie,[[`render`,ae]]);function $(){return{codeHtml:`<a-tooltip
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
</a-tooltip>`}}function se(){return{codeJs:`import { 
  ATooltip,
} from "aloha-vue";
    
export default {
  name: "PageTooltipWidth",
  components: {
    ATooltip,
  },
};`}}var ce={name:`PageTooltipWidth`,components:{AlohaExample:n,ATooltip:i},setup(){let{codeHtml:e}=$(),{codeJs:t}=se();return{codeHtml:e,codeJs:t}}};function le(e,t,n,ee,r,i){let c=d(`a-tooltip`),u=d(`aloha-example`);return a(),s(u,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TOOLTIP_GROUP_WIDTH_HEADER_`,description:`_A_TOOLTIP_GROUP_WIDTH_DESCRIPTION_`,props:`width`},{default:f(()=>[l(c,{class:`a_btn a_btn_primary`,tag:`button`,width:200},{title:f(()=>[...t[0]||=[o(`div`,null,`Aloha`,-1)]]),default:f(()=>[t[1]||=o(`span`,null,`Aloha`,-1)]),_:1}),l(c,{class:`a_btn a_btn_primary a_ml_3`,tag:`button`,width:200},{title:f(()=>[...t[2]||=[o(`div`,{class:`a_text_center`},`Aloha`,-1)]]),default:f(()=>[t[3]||=o(`span`,null,`a_text_center`,-1)]),_:1})]),_:1},8,[`code-html`,`code-js`])}var ue=p(ce,[[`render`,le]]);function de(){let e=c(()=>ee({placeholder:`_A_TOOLTIP_COMPONENT_NAME_`}));return{pageTitle:c(()=>`ATooltip${e.value?` (${e.value})`:``}`)}}function fe(){return{dataProps:[{name:`arrow-padding`,description:`_A_TOOLTIP_PROPS_ARROW_PADDING_DESCRIPTION_`,type:`Number / Function`,default:void 0,required:!1},{name:`id`,description:`_A_TOOLTIP_PROPS_ID_DESCRIPTION_`,type:`String`,default:`a_tooltip_{n}`,required:!1},{name:`is-hide`,description:`_A_TOOLTIP_PROPS_IS_HIDE_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`max-width`,description:`_A_TOOLTIP_PROPS_MAX_WIDTH_DESCRIPTION_`,type:`Number`,default:void 0,required:!1},{name:`min-width`,description:`_A_TOOLTIP_PROPS_MIN_WIDTH_DESCRIPTION_`,type:`Number`,default:void 0,required:!1},{name:`offset-distance`,description:`_A_TOOLTIP_PROPS_OFFSET_DISTANCE_DESCRIPTION_`,type:`Number`,default:6,required:!1},{name:`offset-skidding`,description:`_A_TOOLTIP_PROPS_OFFSET_SKIDDING_DESCRIPTION_`,type:`Number`,default:0,required:!1},{name:`placement`,description:`_A_TOOLTIP_PROPS_PLACEMENT_DESCRIPTION_`,type:`String`,default:`top`,required:!1},{name:`popper-container-id`,description:`_A_TOOLTIP_PROPS_POPPER_CONTAINER_ID_DESCRIPTION_`,type:`String`,default:`a_tooltip_container`,required:!1},{name:`show-arrow`,description:`_A_TOOLTIP_PROPS_SHOW_ARROW_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`tag`,description:`_A_TOOLTIP_PROPS_TAG_DESCRIPTION_`,type:`String`,default:`span`,required:!1},{name:`time-close`,description:`_A_TOOLTIP_PROPS_TIME_CLOSE_DESCRIPTION_`,type:`Number`,default:100,required:!1},{name:`width`,description:`_A_TOOLTIP_PROPS_WIDTH_DESCRIPTION_`,type:`Number`,default:void 0,required:!1},{name:`without-aria-describedby`,description:`_A_TOOLTIP_PROPS_WITHOUT_ARIA_DESCRIBEDBY_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1}]}}function pe(){return{dataSlots:[{name:`default`,description:`_A_TOOLTIP_SLOT_DEFAULT_DESCRIPTION_`},{name:`title`,description:`_A_TOOLTIP_SLOT_TITLE_DESCRIPTION_`}]}}var me={name:`PageTooltip`,components:{AlohaPage:e,AlohaTableProps:t,ATranslation:r,PageTooltipBasic:O,PageTooltipTag:Q,PageTooltipMaxWidth:R,PageTooltipWidth:ue,PageTooltipTimeClose:oe,PageTooltipHideArrow:N,PageTooltipOffsetSkidding:q,PageTooltipOffsetDistance:te,PageTooltipArrowPadding:v,PageTooltipArrowPaddingFunction:C},setup(){let{pageTitle:e}=de(),{dataProps:t}=fe(),{dataSlots:n}=pe();return{dataProps:t,dataSlots:n,pageTitle:e}}};function he(e,t,n,ee,r,i){let o=d(`a-translation`),c=d(`page-tooltip-basic`),u=d(`page-tooltip-tag`),p=d(`page-tooltip-max-width`),m=d(`page-tooltip-width`),h=d(`page-tooltip-time-close`),g=d(`page-tooltip-hide-arrow`),_=d(`page-tooltip-offset-skidding`),v=d(`page-tooltip-offset-distance`),y=d(`page-tooltip-arrow-padding`),b=d(`page-tooltip-arrow-padding-function`),x=d(`aloha-table-props`),S=d(`aloha-table-css-vars`),C=d(`aloha-page`);return a(),s(C,{"page-title":e.pageTitle},{body:f(()=>[l(o,{tag:`p`,html:`_A_TOOLTIP_COMPONENT_DESCRIPTION_`}),l(c),l(u),l(p),l(m),l(h),l(g),l(_),l(v),l(y),l(b),l(x,{data:e.dataProps},null,8,[`data`]),l(x,{"table-label":`Slots`,data:e.dataSlots,columns:[`name`,`description`]},null,8,[`data`]),l(S,{files:`utils/tooltip`})]),_:1},8,[`page-title`])}var ge=p(me,[[`render`,he]]);export{ge as default};