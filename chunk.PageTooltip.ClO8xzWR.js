import{A as f,a as $}from"./chunk.AlohaExample.CMUUEVcN.js";import{A as N}from"./chunk.AlohaTableProps.DwOUDlIA.js";import{as as T,_ as d,g as L,A as H}from"./bundle.index.DOWaPX07.js";import{B as u,C as m,L as e,G as s,F as o,m as n,M as b,a as O}from"./chunk.vendor.9_E-x6sT.js";import"./chunk.vendor-lodash.Cqnw6GrA.js";import"./chunk.ATable.BiLWW37G.js";import"./chunk.utilsMath.D900FRx8.js";import"./chunk.AForm.BMBXIC54.js";import"./chunk.ADatepicker.DXR-Bzfp.js";import"./chunk.UiMixinProps.3z5E7Tu9.js";import"./chunk.AInputNumber.CmREK6bZ.js";import"./chunk.ATinymce.BcMFUTFk.js";import"./chunk.vendor-tinymce.5PTU7oiI.js";function y(){return{codeHtml:`<a-tooltip>
  <span>Aloha</span>
  
  <template
    v-slot:title
  >
    <div>Aloha</div>
  </template>
</a-tooltip>`}}function U(){return{codeJs:`import ATooltip from "aloha-vue/src/ATooltip/ATooltip";
    
export default {
  name: "PageTooltipBasic",
  components: {
    ATooltip,
  },
};`}}const q={name:"PageDisclosureBasic",components:{AlohaExample:f,ATooltip:T},setup(){const{codeHtml:t}=y(),{codeJs:a}=U();return{codeHtml:t,codeJs:a}}},w=o("span",null,"Aloha",-1),J=o("div",null,"Aloha",-1);function x(t,a,_,c,r,p){const i=n("a-tooltip"),l=n("aloha-example");return u(),m(l,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_BASIC_USAGE_",slots:["default","title"]},{default:e(()=>[s(i,null,{title:e(()=>[J]),default:e(()=>[w]),_:1})]),_:1},8,["code-html","code-js"])}const M=d(q,[["render",x]]);function B(){return{codeHtml:`<a-tooltip
  class="a_btn a_btn_primary"
  tag="button"
>
  <span>Aloha</span>
  
  <template
    v-slot:title
  >
    <div>{{ title }}</div>
  </template>
</a-tooltip>`}}function G(){return{codeJs:`import ATooltip from "aloha-vue/src/ATooltip/ATooltip";
    
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
};`}}const j={name:"PageTooltipTag",components:{AlohaExample:f,ATooltip:T},setup(){const{codeHtml:t}=B(),{codeJs:a}=G();return{codeHtml:t,codeJs:a,title:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.`}}},k=o("span",null,"Aloha",-1);function F(t,a,_,c,r,p){const i=n("a-tooltip"),l=n("aloha-example");return u(),m(l,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_TOOLTIP_GROUP_TAG_HEADER_",description:"_A_TOOLTIP_GROUP_TAG_DESCRIPTION_",props:"tag"},{default:e(()=>[s(i,{class:"a_btn a_btn_primary",tag:"button"},{title:e(()=>[o("div",null,b(t.title),1)]),default:e(()=>[k]),_:1})]),_:1},8,["code-html","code-js"])}const W=d(j,[["render",F]]);function X(){return{codeHtml:`<a-tooltip
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
</a-tooltip>`}}function Q(){return{codeJs:`import ATooltip from "aloha-vue/src/ATooltip/ATooltip";
    
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
};`}}const K={name:"PageTooltipMaxWidth",components:{AlohaExample:f,ATooltip:T},setup(){const{codeHtml:t}=X(),{codeJs:a}=Q();return{codeHtml:t,codeJs:a,title:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.`}}},V=o("span",null,"Aloha",-1);function z(t,a,_,c,r,p){const i=n("a-tooltip"),l=n("aloha-example");return u(),m(l,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_TOOLTIP_GROUP_MAX_WIDTH_HEADER_",description:"_A_TOOLTIP_GROUP_MAX_WIDTH_DESCRIPTION_",props:"max-width"},{default:e(()=>[s(i,{class:"a_btn a_btn_primary",tag:"button","max-width":300},{title:e(()=>[o("div",null,b(t.title),1)]),default:e(()=>[V]),_:1})]),_:1},8,["code-html","code-js"])}const Y=d(K,[["render",z]]);function Z(){return{codeHtml:`<a-tooltip
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
</a-tooltip>`}}function tt(){return{codeJs:`import ATooltip from "aloha-vue/src/ATooltip/ATooltip";
    
export default {
  name: "PageTooltipWidth",
  components: {
    ATooltip,
  },
};`}}const et={name:"PageTooltipWidth",components:{AlohaExample:f,ATooltip:T},setup(){const{codeHtml:t}=Z(),{codeJs:a}=tt();return{codeHtml:t,codeJs:a}}},ot=o("span",null,"Aloha",-1),at=o("div",null,"Aloha",-1),nt=o("span",null,"a_text_center",-1),st=o("div",{class:"a_text_center"},"Aloha",-1);function it(t,a,_,c,r,p){const i=n("a-tooltip"),l=n("aloha-example");return u(),m(l,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_TOOLTIP_GROUP_WIDTH_HEADER_",description:"_A_TOOLTIP_GROUP_WIDTH_DESCRIPTION_",props:"width"},{default:e(()=>[s(i,{class:"a_btn a_btn_primary",tag:"button",width:200},{title:e(()=>[at]),default:e(()=>[ot]),_:1}),s(i,{class:"a_btn a_btn_primary a_ml_3",tag:"button",width:200},{title:e(()=>[st]),default:e(()=>[nt]),_:1})]),_:1},8,["code-html","code-js"])}const lt=d(et,[["render",it]]);function _t(){return{codeHtml:`<a-tooltip
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
</a-tooltip>`}}function ct(){return{codeJs:`import ATooltip from "aloha-vue/src/ATooltip/ATooltip";
    
export default {
  name: "PageTooltipTimeClose",
  components: {
    ATooltip,
  },
};`}}const rt={name:"PageTooltipTag",components:{AlohaExample:f,ATooltip:T},setup(){const{codeHtml:t}=_t(),{codeJs:a}=ct();return{codeHtml:t,codeJs:a}}},pt=o("span",null,"0",-1),dt=o("div",null,"0",-1),ut=o("span",null,"100",-1),mt=o("div",null,"100",-1),ft=o("span",null,"1000",-1),Tt=o("div",null,"1000",-1);function Pt(t,a,_,c,r,p){const i=n("a-tooltip"),l=n("aloha-example");return u(),m(l,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_TOOLTIP_GROUP_TIME_CLOSE_HEADER_",description:"_A_TOOLTIP_GROUP_TIME_CLOSE_DESCRIPTION_",props:"time-close"},{default:e(()=>[s(i,{class:"a_btn a_btn_primary",tag:"button","time-close":0},{title:e(()=>[dt]),default:e(()=>[pt]),_:1}),s(i,{class:"a_btn a_btn_primary a_ml_3",tag:"button","time-close":100},{title:e(()=>[mt]),default:e(()=>[ut]),_:1}),s(i,{class:"a_btn a_btn_primary a_ml_3",tag:"button","time-close":1e3},{title:e(()=>[Tt]),default:e(()=>[ft]),_:1})]),_:1},8,["code-html","code-js"])}const bt=d(rt,[["render",Pt]]);function Ot(){return{codeHtml:`<a-tooltip
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
</a-tooltip>`}}function St(){return{codeJs:`import ATooltip from "aloha-vue/src/ATooltip/ATooltip";
    
export default {
  name: "PageTooltipHideArrow",
  components: {
    ATooltip,
  },
};`}}const gt={name:"PageTooltipHideArrow",components:{AlohaExample:f,ATooltip:T},setup(){const{codeHtml:t}=Ot(),{codeJs:a}=St();return{codeHtml:t,codeJs:a}}},It=o("span",null,"Aloha",-1),At=o("div",null,"Aloha",-1);function ht(t,a,_,c,r,p){const i=n("a-tooltip"),l=n("aloha-example");return u(),m(l,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_TOOLTIP_GROUP_HIDE_ARROW_HEADER_",description:"_A_TOOLTIP_GROUP_HIDE_ARROW_DESCRIPTION_",props:"show-arrow"},{default:e(()=>[s(i,{class:"a_btn a_btn_primary",tag:"button","show-arrow":!1},{title:e(()=>[At]),default:e(()=>[It]),_:1})]),_:1},8,["code-html","code-js"])}const Et=d(gt,[["render",ht]]);function Rt(){return{codeHtml:`<a-tooltip
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
</a-tooltip>`}}function vt(){return{codeJs:`import ATooltip from "aloha-vue/src/ATooltip/ATooltip";
    
export default {
  name: "PageTooltipOffsetSkidding",
  components: {
    ATooltip,
  },
};`}}const Dt={name:"PageTooltipOffsetSkidding",components:{AlohaExample:f,ATooltip:T},setup(){const{codeHtml:t}=Rt(),{codeJs:a}=vt();return{codeHtml:t,codeJs:a}}},Ct=o("span",null,':offset-skidding="30"',-1),$t=o("div",null,':offset-skidding="30"',-1),Nt=o("span",null,':offset-skidding="-30"',-1),Lt=o("div",null,':offset-skidding="-30"',-1);function Ht(t,a,_,c,r,p){const i=n("a-tooltip"),l=n("aloha-example");return u(),m(l,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_TOOLTIP_GROUP_OFFSET_SKIDDING_HEADER_",description:"_A_TOOLTIP_GROUP_OFFSET_SKIDDING_DESCRIPTION_",props:"offset-skidding"},{default:e(()=>[s(i,{class:"a_btn a_btn_primary",tag:"button","offset-skidding":30},{title:e(()=>[$t]),default:e(()=>[Ct]),_:1}),s(i,{class:"a_btn a_btn_primary a_ml_3",tag:"button","offset-skidding":-30},{title:e(()=>[Lt]),default:e(()=>[Nt]),_:1})]),_:1},8,["code-html","code-js"])}const yt=d(Dt,[["render",Ht]]);function Ut(){return{codeHtml:`<a-tooltip
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
</a-tooltip>`}}function qt(){return{codeJs:`import ATooltip from "aloha-vue/src/ATooltip/ATooltip";
    
export default {
  name: "PageTooltipOffsetDistance",
  components: {
    ATooltip,
  },
};`}}const wt={name:"PageTooltipOffsetDistance",components:{AlohaExample:f,ATooltip:T},setup(){const{codeHtml:t}=Ut(),{codeJs:a}=qt();return{codeHtml:t,codeJs:a}}},Jt=o("span",null,':offset-distance="30"',-1),xt=o("div",null,':offset-distance="30"',-1),Mt=o("span",null,':offset-distance="6"',-1),Bt=o("div",null,':offset-distance="6"',-1),Gt=o("span",null,':offset-distance="0"',-1),jt=o("div",null,':offset-distance="0"',-1),kt=o("span",null,':offset-distance="-10"',-1),Ft=o("div",null,':offset-distance="-10"',-1);function Wt(t,a,_,c,r,p){const i=n("a-tooltip"),l=n("aloha-example");return u(),m(l,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_TOOLTIP_GROUP_OFFSET_DISTANCE_HEADER_",description:"_A_TOOLTIP_GROUP_OFFSET_DISTANCE_DESCRIPTION_",props:"offset-distance"},{default:e(()=>[s(i,{class:"a_btn a_btn_secondary",tag:"button","offset-distance":30},{title:e(()=>[xt]),default:e(()=>[Jt]),_:1}),s(i,{class:"a_btn a_btn_secondary a_ml_3",tag:"button","offset-distance":6},{title:e(()=>[Bt]),default:e(()=>[Mt]),_:1}),s(i,{class:"a_btn a_btn_secondary a_ml_3",tag:"button","offset-distance":0},{title:e(()=>[jt]),default:e(()=>[Gt]),_:1}),s(i,{class:"a_btn a_btn_secondary a_ml_3",tag:"button","offset-distance":-10},{title:e(()=>[Ft]),default:e(()=>[kt]),_:1})]),_:1},8,["code-html","code-js"])}const Xt=d(wt,[["render",Wt]]);function Qt(){return{codeHtml:`<a-tooltip
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
</a-tooltip>`}}function Kt(){return{codeJs:`import ATooltip from "aloha-vue/src/ATooltip/ATooltip";
    
export default {
  name: "PageTooltipArrowPadding",
  components: {
    ATooltip,
  },
};`}}const Vt={name:"PageTooltipArrowPadding",components:{AlohaExample:f,ATooltip:T},setup(){const{codeHtml:t}=Qt(),{codeJs:a}=Kt();return{codeHtml:t,codeJs:a}}},zt=o("span",null,"Aloha",-1),Yt=o("div",null,"Aloha",-1);function Zt(t,a,_,c,r,p){const i=n("a-tooltip"),l=n("aloha-example");return u(),m(l,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_TOOLTIP_GROUP_ARROW_PADDING_HEADER_",description:"_A_TOOLTIP_GROUP_ARROW_PADDING_DESCRIPTION_",props:"arrow-padding"},{default:e(()=>[s(i,{class:"a_btn a_btn_primary",tag:"button","arrow-padding":35},{title:e(()=>[Yt]),default:e(()=>[zt]),_:1})]),_:1},8,["code-html","code-js"])}const te=d(Vt,[["render",Zt]]);function ee(){return{codeHtml:`<a-tooltip
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
</a-tooltip>`}}function oe(){return{codeJs:`import ATooltip from "aloha-vue/src/ATooltip/ATooltip";
    
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
};`}}const ae={name:"PageTooltipArrowPaddingFunction",components:{AlohaExample:f,ATooltip:T},setup(){const{codeHtml:t}=ee(),{codeJs:a}=oe();return{arrowPaddingCallback:({popper:r,reference:p,placement:i})=>(console.log("placement",i),console.log("popper",r),console.log("reference",p),r.width/p.width+400),codeHtml:t,codeJs:a,title:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus.`}}},ne=o("span",null,"Aloha",-1);function se(t,a,_,c,r,p){const i=n("a-tooltip"),l=n("aloha-example");return u(),m(l,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_TOOLTIP_GROUP_ARROW_PADDING_FUNCTION_HEADER_",description:"_A_TOOLTIP_GROUP_ARROW_PADDING_FUNCTION_DESCRIPTION_",props:"arrow-padding"},{default:e(()=>[s(i,{class:"a_btn a_btn_primary",tag:"button","arrow-padding":t.arrowPaddingCallback},{title:e(()=>[o("div",null,b(t.title),1)]),default:e(()=>[ne]),_:1},8,["arrow-padding"])]),_:1},8,["code-html","code-js"])}const ie=d(ae,[["render",se]]);function le(){return{dataExposes:[{name:"buttonRef",description:"_A_DISCLOSURE_EXPOSES_BUTTON_REF_DESCRIPTION_",type:"Object"},{name:"containerRef",description:"_A_DISCLOSURE_EXPOSES_CONTAINER_REF_DESCRIPTION_",type:"Object"},{name:"isOpen",description:"_A_DISCLOSURE_EXPOSES_IS_OPEN_DESCRIPTION_",type:"Boolean"},{name:"toggleButton",description:"_A_DISCLOSURE_EXPOSES_TOGGLE_BUTTON_DESCRIPTION_",type:"Function"}]}}function _e(){const t=O(()=>L({placeholder:"_A_TOOLTIP_COMPONENT_NAME_"}));return{pageTitle:O(()=>`ATooltip${t.value?` (${t.value})`:""}`)}}function ce(){return{dataProps:[{name:"btn-attributes",description:"_A_DISCLOSURE_PROPS_PROPS_BTN_ATTRIBUTES_DESCRIPTION_",type:"Object",default:"{}",required:!1},{name:"btn-class",description:"_A_DISCLOSURE_PROPS_BTN_CLASS_DESCRIPTION_",type:"String / Object",default:"a_btn a_btn_link a_p_0",required:!1},{name:"btn-icon-left-less",description:"_A_DISCLOSURE_PROPS_BTN_ICON_LEFT_LESS_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"btn-icon-left-more",description:"_A_DISCLOSURE_PROPS_BTN_ICON_LEFT_MORE_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"btn-icon-right-less",description:"_A_DISCLOSURE_PROPS_BTN_ICON_RIGHT_LESS_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"btn-icon-right-more",description:"_A_DISCLOSURE_PROPS_BTN_ICON_RIGHT_MORE_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"btn-id",description:"_A_DISCLOSURE_PROPS_BTN_ID_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"btn-parent-class",description:"_A_DISCLOSURE_PROPS_BTN_PARENT_CLASS_DESCRIPTION_",type:"String",default:"a_text_center",required:!1},{name:"btn-text-less",description:"_A_DISCLOSURE_PROPS_BTN_TEXT_LESS_DESCRIPTION_",type:"String",default:"_SHOW_LESS_",required:!1},{name:"btn-text-more",description:"_A_DISCLOSURE_PROPS_BTN_TEXT_MORE_DESCRIPTION_",type:"String",default:"_SHOW_MORE_",required:!1},{name:"btn-title-less",description:"_A_DISCLOSURE_PROPS_BTN_TITLE_LESS_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"btn-title-more",description:"_A_DISCLOSURE_PROPS_BTN_TITLE_MORE_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"btn-title-placement",description:"_A_DISCLOSURE_PROPS_BTN_TITLE_PLACEMENT_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"disabled",description:"_A_DISCLOSURE_PROPS_DISABLED_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"html-less",description:"_A_DISCLOSURE_PROPS_HTML_LESS_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"html-more",description:"_A_DISCLOSURE_PROPS_HTML_MORE_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"id",description:"_A_DISCLOSURE_PROPS_ID_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"is-btn-title-html",description:"_A_DISCLOSURE_PROPS_IS_BTN_TITLE_HTML_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"is-open-default",description:"_A_DISCLOSURE_PROPS_IS_OPEN_DEFAULT_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"safe-html-less",description:"_A_DISCLOSURE_PROPS_SAFE_HTML_LESS_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"safe-html-more",description:"_A_DISCLOSURE_PROPS_SAFE_HTML_MORE_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"show-less",description:"_A_DISCLOSURE_PROPS_SHOW_LESS_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"text-less",description:"_A_DISCLOSURE_PROPS_TEXT_LESS_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"text-more",description:"_A_DISCLOSURE_PROPS_TEXT_MORE_DESCRIPTION_",type:"String",default:void 0,required:!1}]}}function re(){return{dataSlots:[{name:"button",description:"_A_DISCLOSURE_SLOT_BUTTON_DESCRIPTION_"},{name:"less",description:"_A_DISCLOSURE_SLOT_LESS_DESCRIPTION_"},{name:"more",description:"_A_DISCLOSURE_SLOT_MORE_DESCRIPTION_"}]}}const pe={name:"PageTooltip",components:{AlohaPage:$,AlohaTableProps:N,ATranslation:H,PageTooltipBasic:M,PageTooltipTag:W,PageTooltipMaxWidth:Y,PageTooltipWidth:lt,PageTooltipTimeClose:bt,PageTooltipHideArrow:Et,PageTooltipOffsetSkidding:yt,PageTooltipOffsetDistance:Xt,PageTooltipArrowPadding:te,PageTooltipArrowPaddingFunction:ie},setup(){const{pageTitle:t}=_e(),{dataProps:a}=ce(),{dataSlots:_}=re(),{dataExposes:c}=le();return{dataExposes:c,dataProps:a,dataSlots:_,pageTitle:t}}};function de(t,a,_,c,r,p){const i=n("a-translation"),l=n("page-tooltip-basic"),S=n("page-tooltip-tag"),g=n("page-tooltip-max-width"),I=n("page-tooltip-width"),A=n("page-tooltip-time-close"),h=n("page-tooltip-hide-arrow"),E=n("page-tooltip-offset-skidding"),R=n("page-tooltip-offset-distance"),v=n("page-tooltip-arrow-padding"),D=n("page-tooltip-arrow-padding-function"),P=n("aloha-table-props"),C=n("aloha-page");return u(),m(C,{"page-title":t.pageTitle},{body:e(()=>[s(i,{tag:"p",html:"_A_TOOLTIP_COMPONENT_DESCRIPTION_"}),s(l),s(S),s(g),s(I),s(A),s(h),s(E),s(R),s(v),s(D),s(P,{data:t.dataProps},null,8,["data"]),s(P,{"table-label":"Slots",data:t.dataSlots,columns:["name","description"]},null,8,["data"]),s(P,{"table-label":"Exposes",data:t.dataExposes,columns:["name","type","description"]},null,8,["data"])]),_:1},8,["page-title"])}const Re=d(pe,[["render",de]]);export{Re as default};
