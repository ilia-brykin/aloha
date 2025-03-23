import{A as f,a as N}from"./chunk.AlohaExample.CZSyaJVs.js";import{A as L}from"./chunk.AlohaTableProps.9B0n7Hoa.js";import{Z as T,_ as u,g as $,A as H}from"./bundle.index.DDfVVQeP.js";import{R as c,aR as o,e as n,U as m,Y as i,W as a,aS as S,d as b}from"./chunk.vendor.CDkHfsNc.js";import"./chunk.vendor-lodash.ObrxgAej.js";import"./chunk.APageTabTitle.FUuiNddk.js";import"./chunk.AlohaHighlightjs.DI9-5vSP.js";import"./chunk.ATable.BtiabH5B.js";import"./chunk.translations-ar.BW4YNjOf.js";import"./chunk.translations-de.pnZGXXfR.js";import"./chunk.translations-en.CzHrEMzS.js";import"./chunk.translations-es.CVdE8egl.js";import"./chunk.translations-fr.hqb9JGfS.js";import"./chunk.translations-hr.DYwzCGFq.js";import"./chunk.translations-it.C5e5-FF3.js";import"./chunk.translations-ru.eTKud94F.js";function y(){return{codeHtml:`<a-tooltip
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
</a-tooltip>`}}function U(){return{codeJs:`import { 
  ATooltip,
} from "aloha-vue";
    
export default {
  name: "PageTooltipArrowPadding",
  components: {
    ATooltip,
  },
};`}}const q={name:"PageTooltipArrowPadding",components:{AlohaExample:f,ATooltip:T},setup(){const{codeHtml:e}=y(),{codeJs:t}=U();return{codeHtml:e,codeJs:t}}};function w(e,t,r,p,_,d){const s=n("a-tooltip"),l=n("aloha-example");return m(),c(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TOOLTIP_GROUP_ARROW_PADDING_HEADER_",description:"_A_TOOLTIP_GROUP_ARROW_PADDING_DESCRIPTION_",props:"arrow-padding"},{default:o(()=>[i(s,{class:"a_btn a_btn_primary",tag:"button","arrow-padding":35},{title:o(()=>t[0]||(t[0]=[a("div",null,"Aloha",-1)])),default:o(()=>[t[1]||(t[1]=a("span",null,"Aloha",-1))]),_:1})]),_:1},8,["code-html","code-js"])}const J=u(q,[["render",w]]);function x(){return{codeHtml:`<a-tooltip
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
</a-tooltip>`}}function M(){return{codeJs:`import { 
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
};`}}const B={name:"PageTooltipArrowPaddingFunction",components:{AlohaExample:f,ATooltip:T},setup(){const{codeHtml:e}=x(),{codeJs:t}=M();return{arrowPaddingCallback:({popper:_,reference:d,placement:s})=>(console.log("placement",s),console.log("popper",_),console.log("reference",d),_.width/d.width+400),codeHtml:e,codeJs:t,title:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus.`}}};function G(e,t,r,p,_,d){const s=n("a-tooltip"),l=n("aloha-example");return m(),c(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TOOLTIP_GROUP_ARROW_PADDING_FUNCTION_HEADER_",description:"_A_TOOLTIP_GROUP_ARROW_PADDING_FUNCTION_DESCRIPTION_",props:"arrow-padding"},{default:o(()=>[i(s,{class:"a_btn a_btn_primary",tag:"button","arrow-padding":e.arrowPaddingCallback},{title:o(()=>[a("div",null,S(e.title),1)]),default:o(()=>[t[0]||(t[0]=a("span",null,"Aloha",-1))]),_:1},8,["arrow-padding"])]),_:1},8,["code-html","code-js"])}const j=u(B,[["render",G]]);function k(){return{codeHtml:`<a-tooltip>
  <span>Aloha</span>
  
  <template
    v-slot:title
  >
    <div>Aloha</div>
  </template>
</a-tooltip>`}}function F(){return{codeJs:`import { 
  ATooltip,
} from "aloha-vue";
    
export default {
  name: "PageTooltipBasic",
  components: {
    ATooltip,
  },
};`}}const W={name:"PageDisclosureBasic",components:{AlohaExample:f,ATooltip:T},setup(){const{codeHtml:e}=k(),{codeJs:t}=F();return{codeHtml:e,codeJs:t}}};function X(e,t,r,p,_,d){const s=n("a-tooltip"),l=n("aloha-example");return m(),c(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_BASIC_USAGE_",slots:["default","title"]},{default:o(()=>[i(s,null,{title:o(()=>t[0]||(t[0]=[a("div",null,"Aloha",-1)])),default:o(()=>[t[1]||(t[1]=a("span",null,"Aloha",-1))]),_:1})]),_:1},8,["code-html","code-js"])}const Q=u(W,[["render",X]]);function K(){return{codeHtml:`<a-tooltip
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
</a-tooltip>`}}function V(){return{codeJs:`import { 
  ATooltip,
} from "aloha-vue";
    
export default {
  name: "PageTooltipHideArrow",
  components: {
    ATooltip,
  },
};`}}const Y={name:"PageTooltipHideArrow",components:{AlohaExample:f,ATooltip:T},setup(){const{codeHtml:e}=K(),{codeJs:t}=V();return{codeHtml:e,codeJs:t}}};function Z(e,t,r,p,_,d){const s=n("a-tooltip"),l=n("aloha-example");return m(),c(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TOOLTIP_GROUP_HIDE_ARROW_HEADER_",description:"_A_TOOLTIP_GROUP_HIDE_ARROW_DESCRIPTION_",props:"show-arrow"},{default:o(()=>[i(s,{class:"a_btn a_btn_primary",tag:"button","show-arrow":!1},{title:o(()=>t[0]||(t[0]=[a("div",null,"Aloha",-1)])),default:o(()=>[t[1]||(t[1]=a("span",null,"Aloha",-1))]),_:1})]),_:1},8,["code-html","code-js"])}const z=u(Y,[["render",Z]]);function tt(){return{codeHtml:`<a-tooltip
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
</a-tooltip>`}}function et(){return{codeJs:`import { 
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
};`}}const ot={name:"PageTooltipMaxWidth",components:{AlohaExample:f,ATooltip:T},setup(){const{codeHtml:e}=tt(),{codeJs:t}=et();return{codeHtml:e,codeJs:t,title:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.`}}};function at(e,t,r,p,_,d){const s=n("a-tooltip"),l=n("aloha-example");return m(),c(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TOOLTIP_GROUP_MAX_WIDTH_HEADER_",description:"_A_TOOLTIP_GROUP_MAX_WIDTH_DESCRIPTION_",props:"max-width"},{default:o(()=>[i(s,{class:"a_btn a_btn_primary",tag:"button","max-width":300},{title:o(()=>[a("div",null,S(e.title),1)]),default:o(()=>[t[0]||(t[0]=a("span",null,"Aloha",-1))]),_:1})]),_:1},8,["code-html","code-js"])}const nt=u(ot,[["render",at]]);function it(){return{codeHtml:`<a-tooltip
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
</a-tooltip>`}}function st(){return{codeJs:`import { 
  ATooltip,
} from "aloha-vue";
    
export default {
  name: "PageTooltipOffsetDistance",
  components: {
    ATooltip,
  },
};`}}const lt={name:"PageTooltipOffsetDistance",components:{AlohaExample:f,ATooltip:T},setup(){const{codeHtml:e}=it(),{codeJs:t}=st();return{codeHtml:e,codeJs:t}}};function rt(e,t,r,p,_,d){const s=n("a-tooltip"),l=n("aloha-example");return m(),c(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TOOLTIP_GROUP_OFFSET_DISTANCE_HEADER_",description:"_A_TOOLTIP_GROUP_OFFSET_DISTANCE_DESCRIPTION_",props:"offset-distance"},{default:o(()=>[i(s,{class:"a_btn a_btn_secondary",tag:"button","offset-distance":30},{title:o(()=>t[0]||(t[0]=[a("div",null,':offset-distance="30"',-1)])),default:o(()=>[t[1]||(t[1]=a("span",null,':offset-distance="30"',-1))]),_:1}),i(s,{class:"a_btn a_btn_secondary a_ml_3",tag:"button","offset-distance":6},{title:o(()=>t[2]||(t[2]=[a("div",null,':offset-distance="6"',-1)])),default:o(()=>[t[3]||(t[3]=a("span",null,':offset-distance="6"',-1))]),_:1}),i(s,{class:"a_btn a_btn_secondary a_ml_3",tag:"button","offset-distance":0},{title:o(()=>t[4]||(t[4]=[a("div",null,':offset-distance="0"',-1)])),default:o(()=>[t[5]||(t[5]=a("span",null,':offset-distance="0"',-1))]),_:1}),i(s,{class:"a_btn a_btn_secondary a_ml_3",tag:"button","offset-distance":-10},{title:o(()=>t[6]||(t[6]=[a("div",null,':offset-distance="-10"',-1)])),default:o(()=>[t[7]||(t[7]=a("span",null,':offset-distance="-10"',-1))]),_:1})]),_:1},8,["code-html","code-js"])}const pt=u(lt,[["render",rt]]);function _t(){return{codeHtml:`<a-tooltip
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
</a-tooltip>`}}function dt(){return{codeJs:`import { 
  ATooltip,
} from "aloha-vue";
    
export default {
  name: "PageTooltipOffsetSkidding",
  components: {
    ATooltip,
  },
};`}}const ut={name:"PageTooltipOffsetSkidding",components:{AlohaExample:f,ATooltip:T},setup(){const{codeHtml:e}=_t(),{codeJs:t}=dt();return{codeHtml:e,codeJs:t}}};function ct(e,t,r,p,_,d){const s=n("a-tooltip"),l=n("aloha-example");return m(),c(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TOOLTIP_GROUP_OFFSET_SKIDDING_HEADER_",description:"_A_TOOLTIP_GROUP_OFFSET_SKIDDING_DESCRIPTION_",props:"offset-skidding"},{default:o(()=>[i(s,{class:"a_btn a_btn_primary",tag:"button","offset-skidding":30},{title:o(()=>t[0]||(t[0]=[a("div",null,':offset-skidding="30"',-1)])),default:o(()=>[t[1]||(t[1]=a("span",null,':offset-skidding="30"',-1))]),_:1}),i(s,{class:"a_btn a_btn_primary a_ml_3",tag:"button","offset-skidding":-30},{title:o(()=>t[2]||(t[2]=[a("div",null,':offset-skidding="-30"',-1)])),default:o(()=>[t[3]||(t[3]=a("span",null,':offset-skidding="-30"',-1))]),_:1})]),_:1},8,["code-html","code-js"])}const mt=u(ut,[["render",ct]]);function ft(){return{codeHtml:`<a-tooltip
  class="a_btn a_btn_primary"
  tag="button"
>
  <span>Aloha</span>
  
  <template
    v-slot:title
  >
    <div>{{ title }}</div>
  </template>
</a-tooltip>`}}function Tt(){return{codeJs:`import { 
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
};`}}const Pt={name:"PageTooltipTag",components:{AlohaExample:f,ATooltip:T},setup(){const{codeHtml:e}=ft(),{codeJs:t}=Tt();return{codeHtml:e,codeJs:t,title:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.`}}};function St(e,t,r,p,_,d){const s=n("a-tooltip"),l=n("aloha-example");return m(),c(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TOOLTIP_GROUP_TAG_HEADER_",description:"_A_TOOLTIP_GROUP_TAG_DESCRIPTION_",props:"tag"},{default:o(()=>[i(s,{class:"a_btn a_btn_primary",tag:"button"},{title:o(()=>[a("div",null,S(e.title),1)]),default:o(()=>[t[0]||(t[0]=a("span",null,"Aloha",-1))]),_:1})]),_:1},8,["code-html","code-js"])}const bt=u(Pt,[["render",St]]);function Ot(){return{codeHtml:`<a-tooltip
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
</a-tooltip>`}}function gt(){return{codeJs:`import { 
  ATooltip,
} from "aloha-vue";
    
export default {
  name: "PageTooltipTimeClose",
  components: {
    ATooltip,
  },
};`}}const It={name:"PageTooltipTag",components:{AlohaExample:f,ATooltip:T},setup(){const{codeHtml:e}=Ot(),{codeJs:t}=gt();return{codeHtml:e,codeJs:t}}};function At(e,t,r,p,_,d){const s=n("a-tooltip"),l=n("aloha-example");return m(),c(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TOOLTIP_GROUP_TIME_CLOSE_HEADER_",description:"_A_TOOLTIP_GROUP_TIME_CLOSE_DESCRIPTION_",props:"time-close"},{default:o(()=>[i(s,{class:"a_btn a_btn_primary",tag:"button","time-close":0},{title:o(()=>t[0]||(t[0]=[a("div",null,"0",-1)])),default:o(()=>[t[1]||(t[1]=a("span",null,"0",-1))]),_:1}),i(s,{class:"a_btn a_btn_primary a_ml_3",tag:"button","time-close":100},{title:o(()=>t[2]||(t[2]=[a("div",null,"100",-1)])),default:o(()=>[t[3]||(t[3]=a("span",null,"100",-1))]),_:1}),i(s,{class:"a_btn a_btn_primary a_ml_3",tag:"button","time-close":1e3},{title:o(()=>t[4]||(t[4]=[a("div",null,"1000",-1)])),default:o(()=>[t[5]||(t[5]=a("span",null,"1000",-1))]),_:1})]),_:1},8,["code-html","code-js"])}const Et=u(It,[["render",At]]);function Rt(){return{codeHtml:`<a-tooltip
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
</a-tooltip>`}}function vt(){return{codeJs:`import { 
  ATooltip,
} from "aloha-vue";
    
export default {
  name: "PageTooltipWidth",
  components: {
    ATooltip,
  },
};`}}const Dt={name:"PageTooltipWidth",components:{AlohaExample:f,ATooltip:T},setup(){const{codeHtml:e}=Rt(),{codeJs:t}=vt();return{codeHtml:e,codeJs:t}}};function Ct(e,t,r,p,_,d){const s=n("a-tooltip"),l=n("aloha-example");return m(),c(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TOOLTIP_GROUP_WIDTH_HEADER_",description:"_A_TOOLTIP_GROUP_WIDTH_DESCRIPTION_",props:"width"},{default:o(()=>[i(s,{class:"a_btn a_btn_primary",tag:"button",width:200},{title:o(()=>t[0]||(t[0]=[a("div",null,"Aloha",-1)])),default:o(()=>[t[1]||(t[1]=a("span",null,"Aloha",-1))]),_:1}),i(s,{class:"a_btn a_btn_primary a_ml_3",tag:"button",width:200},{title:o(()=>t[2]||(t[2]=[a("div",{class:"a_text_center"},"Aloha",-1)])),default:o(()=>[t[3]||(t[3]=a("span",null,"a_text_center",-1))]),_:1})]),_:1},8,["code-html","code-js"])}const ht=u(Dt,[["render",Ct]]);function Nt(){return{dataExposes:[{name:"buttonRef",description:"_A_DISCLOSURE_EXPOSES_BUTTON_REF_DESCRIPTION_",type:"Object"},{name:"containerRef",description:"_A_DISCLOSURE_EXPOSES_CONTAINER_REF_DESCRIPTION_",type:"Object"},{name:"isOpen",description:"_A_DISCLOSURE_EXPOSES_IS_OPEN_DESCRIPTION_",type:"Boolean"},{name:"toggleButton",description:"_A_DISCLOSURE_EXPOSES_TOGGLE_BUTTON_DESCRIPTION_",type:"Function"}]}}function Lt(){const e=b(()=>$({placeholder:"_A_TOOLTIP_COMPONENT_NAME_"}));return{pageTitle:b(()=>`ATooltip${e.value?` (${e.value})`:""}`)}}function $t(){return{dataProps:[{name:"btn-attributes",description:"_A_DISCLOSURE_PROPS_PROPS_BTN_ATTRIBUTES_DESCRIPTION_",type:"Object",default:"{}",required:!1},{name:"btn-class",description:"_A_DISCLOSURE_PROPS_BTN_CLASS_DESCRIPTION_",type:"String / Object",default:"a_btn a_btn_link a_p_0",required:!1},{name:"btn-icon-left-less",description:"_A_DISCLOSURE_PROPS_BTN_ICON_LEFT_LESS_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"btn-icon-left-more",description:"_A_DISCLOSURE_PROPS_BTN_ICON_LEFT_MORE_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"btn-icon-right-less",description:"_A_DISCLOSURE_PROPS_BTN_ICON_RIGHT_LESS_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"btn-icon-right-more",description:"_A_DISCLOSURE_PROPS_BTN_ICON_RIGHT_MORE_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"btn-id",description:"_A_DISCLOSURE_PROPS_BTN_ID_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"btn-parent-class",description:"_A_DISCLOSURE_PROPS_BTN_PARENT_CLASS_DESCRIPTION_",type:"String",default:"a_text_center",required:!1},{name:"btn-text-less",description:"_A_DISCLOSURE_PROPS_BTN_TEXT_LESS_DESCRIPTION_",type:"String",default:"_SHOW_LESS_",required:!1},{name:"btn-text-more",description:"_A_DISCLOSURE_PROPS_BTN_TEXT_MORE_DESCRIPTION_",type:"String",default:"_SHOW_MORE_",required:!1},{name:"btn-title-less",description:"_A_DISCLOSURE_PROPS_BTN_TITLE_LESS_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"btn-title-more",description:"_A_DISCLOSURE_PROPS_BTN_TITLE_MORE_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"btn-title-placement",description:"_A_DISCLOSURE_PROPS_BTN_TITLE_PLACEMENT_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"disabled",description:"_A_DISCLOSURE_PROPS_DISABLED_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"html-less",description:"_A_DISCLOSURE_PROPS_HTML_LESS_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"html-more",description:"_A_DISCLOSURE_PROPS_HTML_MORE_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"id",description:"_A_DISCLOSURE_PROPS_ID_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"is-btn-title-html",description:"_A_DISCLOSURE_PROPS_IS_BTN_TITLE_HTML_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"is-open-default",description:"_A_DISCLOSURE_PROPS_IS_OPEN_DEFAULT_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"safe-html-less",description:"_A_DISCLOSURE_PROPS_SAFE_HTML_LESS_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"safe-html-more",description:"_A_DISCLOSURE_PROPS_SAFE_HTML_MORE_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"show-less",description:"_A_DISCLOSURE_PROPS_SHOW_LESS_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"text-less",description:"_A_DISCLOSURE_PROPS_TEXT_LESS_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"text-more",description:"_A_DISCLOSURE_PROPS_TEXT_MORE_DESCRIPTION_",type:"String",default:void 0,required:!1}]}}function Ht(){return{dataSlots:[{name:"button",description:"_A_DISCLOSURE_SLOT_BUTTON_DESCRIPTION_"},{name:"less",description:"_A_DISCLOSURE_SLOT_LESS_DESCRIPTION_"},{name:"more",description:"_A_DISCLOSURE_SLOT_MORE_DESCRIPTION_"}]}}const yt={name:"PageTooltip",components:{AlohaPage:N,AlohaTableProps:L,ATranslation:H,PageTooltipBasic:Q,PageTooltipTag:bt,PageTooltipMaxWidth:nt,PageTooltipWidth:ht,PageTooltipTimeClose:Et,PageTooltipHideArrow:z,PageTooltipOffsetSkidding:mt,PageTooltipOffsetDistance:pt,PageTooltipArrowPadding:J,PageTooltipArrowPaddingFunction:j},setup(){const{pageTitle:e}=Lt(),{dataProps:t}=$t(),{dataSlots:r}=Ht(),{dataExposes:p}=Nt();return{dataExposes:p,dataProps:t,dataSlots:r,pageTitle:e}}};function Ut(e,t,r,p,_,d){const s=n("a-translation"),l=n("page-tooltip-basic"),O=n("page-tooltip-tag"),g=n("page-tooltip-max-width"),I=n("page-tooltip-width"),A=n("page-tooltip-time-close"),E=n("page-tooltip-hide-arrow"),R=n("page-tooltip-offset-skidding"),v=n("page-tooltip-offset-distance"),D=n("page-tooltip-arrow-padding"),C=n("page-tooltip-arrow-padding-function"),P=n("aloha-table-props"),h=n("aloha-page");return m(),c(h,{"page-title":e.pageTitle},{body:o(()=>[i(s,{tag:"p",html:"_A_TOOLTIP_COMPONENT_DESCRIPTION_"}),i(l),i(O),i(g),i(I),i(A),i(E),i(R),i(v),i(D),i(C),i(P,{data:e.dataProps},null,8,["data"]),i(P,{"table-label":"Slots",data:e.dataSlots,columns:["name","description"]},null,8,["data"]),i(P,{"table-label":"Exposes",data:e.dataExposes,columns:["name","type","description"]},null,8,["data"])]),_:1},8,["page-title"])}const Zt=u(yt,[["render",Ut]]);export{Zt as default};
