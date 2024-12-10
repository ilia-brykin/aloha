import{A,a as I}from"./chunk.AlohaExample.Ch828iNY.js";import{A as g}from"./chunk.AlohaTableProps.C36Ex24p.js";import{l as O,_,g as S,A as R}from"./bundle.index.C5ESvXvL.js";import{g as $,l as h}from"./chunk.AForm.DSIL6mB0.js";import{r as H,m as o,C as c,L as p,B as i,G as a,F as N,M as L,a as P}from"./chunk.vendor.D-Y3mz6a.js";import"./chunk.vendor-lodash.ClBXVCWL.js";import"./chunk.ATable.C4VIyU-j.js";import"./chunk.utilsMath.7PmiGUbm.js";import"./chunk.vendor-tinymce.2RT9eEW9.js";import"./chunk.ADatepicker.DHZnNTS-.js";import"./chunk.UiMixinProps.BVfs3aDc.js";import"./chunk.AInputNumber.kHSOqT_P.js";import"./chunk.ATinymce.CslL0xeu.js";function D(){return{codeHtml:`<a-fieldset
  v-model="model"
  :children="children"
  label="Fieldset"
>
  <template
    v-slot:template
  >
    <a-element
      class="a_btn a_btn_primary"
      text="Aloha"
      type="button"
    ></a-element>
  </template>
</a-fieldset>`}}function x(){return{codeJs:`import {
  ref,
} from "vue";

import AElement from "aloha-vue/src/AElement/AElement";
import AFieldset from "aloha-vue/src/ui/AFieldset/AFieldset";
    
export default {
  name: "PageTemplateFieldset",
  components: {
    AElement,
    AFieldset,
  },
  setup() {
    const children = [
      {
        type: "text",
        label: "Text",
        id: "aloha.text",
      },
      {
        type: "template",
        slotName: "template",
      },
    ];
    const model = ref(undefined);
    
    return {
      children,
      model,
    };
  },
};`}}const M={name:"PageTemplateFieldset",components:{AElement:O,AFieldset:$,AlohaExample:A},setup(){const e=[{type:"text",label:"Text",id:"aloha.text"},{type:"template",slotName:"template"}],t=H(void 0),{codeHtml:l}=D(),{codeJs:r}=x();return{children:e,codeHtml:l,codeJs:r,model:t}}};function y(e,t,l,r,u,T){const n=o("a-element"),s=o("a-fieldset"),m=o("aloha-example");return i(),c(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TEMPLATE_GROUP_FIELDSET_HEADER_",description:"_A_TEMPLATE_GROUP_FIELDSET_DESCRIPTION_"},{default:p(()=>[a(s,{modelValue:e.model,"onUpdate:modelValue":t[0]||(t[0]=d=>e.model=d),children:e.children,label:"Fieldset"},{template:p(()=>[a(n,{class:"a_btn a_btn_primary",text:"Aloha",type:"button"})]),_:1},8,["modelValue","children"])]),_:1},8,["code-html","code-js"])}const b=_(M,[["render",y]]);function C(){return{codeHtml:`<a-template
  :html="html"
></a-template>`}}function J(){return{codeJs:`import ATemplate from "aloha-vue/src/ui/ATemplate/ATemplate";
    
export default {
  name: "PageTemplateHtml",
  components: {
    ATemplate,
  },
  setup() {
    const html = "<ul><li>Aloha 1</li><li>Aloha 2</li></ul>";
    
    return {
      html,
    };
  },
};`}}const v={name:"PageTemplateHtml",components:{AlohaExample:A,ATemplate:h},setup(){const e="<ul><li>Aloha 1</li><li>Aloha 2</li></ul>",{codeHtml:t}=C(),{codeJs:l}=J();return{codeHtml:t,codeJs:l,html:e}}};function F(e,t,l,r,u,T){const n=o("a-template"),s=o("aloha-example");return i(),c(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TEMPLATE_GROUP_HTML_HEADER_",description:"_A_TEMPLATE_GROUP_HTML_DESCRIPTION_",props:["html"]},{default:p(()=>[a(n,{html:e.html},null,8,["html"])]),_:1},8,["code-html","code-js"])}const U=_(v,[["render",F]]);function B(){return{codeHtml:`<a-template
  :options="{ id: 'template', text: 'Aloha' }"
  slot-name="aloha"
>
  <template
    v-slot:aloha="{ options, props }"
  >
    <div
      :id="options.id"
    >{{ options.text }}</div>
  </template>
</a-template>`}}function j(){return{codeJs:`import ATemplate from "aloha-vue/src/ui/ATemplate/ATemplate";
    
export default {
  name: "PageTemplateSlot",
  components: {
    ATemplate,
  },
};`}}const G={name:"PageTemplateSlot",components:{AlohaExample:A,ATemplate:h},setup(){const{codeHtml:e}=B(),{codeJs:t}=j();return{codeHtml:e,codeJs:t}}},q=["id"];function V(e,t,l,r,u,T){const n=o("a-template"),s=o("aloha-example");return i(),c(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TEMPLATE_GROUP_SLOT_HEADER_",description:"_A_TEMPLATE_GROUP_SLOT_DESCRIPTION_",props:["slot-name","options"]},{default:p(()=>[a(n,{options:{id:"template",text:"Aloha"},"slot-name":"aloha"},{aloha:p(({options:m,props:d})=>[N("div",{id:m.id},L(m.text),9,q)]),_:1})]),_:1},8,["code-html","code-js"])}const k=_(G,[["render",V]]);function w(){const e=P(()=>S({placeholder:"_A_TEMPLATE_COMPONENT_NAME_"}));return{pageTitle:P(()=>`ATemplate${e.value?` (${e.value})`:""}`)}}function X(){return{dataProps:[{name:"exclude-render-attributes",description:"_A_UI_PROPS_EXCLUDE_RENDER_ATTRIBUTES_DESCRIPTION_",type:"Array",default:"() => []",required:!1},{name:"html",description:"_A_TEMPLATE_PROPS_HTML_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"is-hide",description:"_A_UI_PROPS_IS_HIDE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"is-render",description:"_A_UI_PROPS_IS_RENDER_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"options",description:"_A_TEMPLATE_PROPS_OPTIONS_DESCRIPTION_",type:"String / Number / Object / Array / Boolean",default:void 0,required:!1},{name:"slot-name",description:"_A_TEMPLATE_PROPS_SLOT_NAME_DESCRIPTION_",type:"String",default:void 0,required:!1}]}}const z={name:"PageTemplate",components:{AlohaPage:I,AlohaTableProps:g,ATranslation:R,PageTemplateFieldset:b,PageTemplateHtml:U,PageTemplateSlot:k},setup(){const{pageTitle:e}=w(),{dataProps:t}=X();return{dataProps:t,pageTitle:e}}};function K(e,t,l,r,u,T){const n=o("a-translation"),s=o("page-template-html"),m=o("page-template-slot"),d=o("page-template-fieldset"),f=o("aloha-table-props"),E=o("aloha-page");return i(),c(E,{"page-title":e.pageTitle},{body:p(()=>[a(n,{tag:"p",html:"_A_TEMPLATE_COMPONENT_DESCRIPTION_"}),a(s),a(m),a(d),a(f,{data:e.dataProps},null,8,["data"])]),_:1},8,["page-title"])}const re=_(z,[["render",K]]);export{re as default};
