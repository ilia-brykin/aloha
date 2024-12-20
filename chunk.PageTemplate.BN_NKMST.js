import{A,a as I}from"./chunk.AlohaExample.DJmek8S2.js";import{A as g}from"./chunk.AlohaTableProps.Dg3ZyLMk.js";import{l as O,_,g as S,A as R}from"./bundle.index.BNDXU1qV.js";import{g as $,l as h}from"./chunk.AForm.BvR5IxMG.js";import{r as H,k as o,J as c,aJ as p,H as i,O as a,N,aK as D,a as P}from"./chunk.vendor.z3GIbCk9.js";import"./chunk.vendor-lodash.C_VDyCZ-.js";import"./chunk.ATable.Dyg6RlFe.js";import"./chunk.utilsMath.Ch_ZSUE4.js";import"./chunk.ADatepicker.CV7iQEiu.js";import"./chunk.UiMixinProps.C6KoMHL_.js";import"./chunk.AInputNumber.BDT4S_uW.js";function L(){return{codeHtml:`<a-fieldset
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
};`}}const y={name:"PageTemplateFieldset",components:{AElement:O,AFieldset:$,AlohaExample:A},setup(){const e=[{type:"text",label:"Text",id:"aloha.text"},{type:"template",slotName:"template"}],t=H(void 0),{codeHtml:l}=L(),{codeJs:r}=x();return{children:e,codeHtml:l,codeJs:r,model:t}}};function M(e,t,l,r,u,T){const n=o("a-element"),s=o("a-fieldset"),m=o("aloha-example");return i(),c(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TEMPLATE_GROUP_FIELDSET_HEADER_",description:"_A_TEMPLATE_GROUP_FIELDSET_DESCRIPTION_"},{default:p(()=>[a(s,{modelValue:e.model,"onUpdate:modelValue":t[0]||(t[0]=d=>e.model=d),children:e.children,label:"Fieldset"},{template:p(()=>[a(n,{class:"a_btn a_btn_primary",text:"Aloha",type:"button"})]),_:1},8,["modelValue","children"])]),_:1},8,["code-html","code-js"])}const b=_(y,[["render",M]]);function J(){return{codeHtml:`<a-template
  :html="html"
></a-template>`}}function C(){return{codeJs:`import ATemplate from "aloha-vue/src/ui/ATemplate/ATemplate";
    
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
};`}}const v={name:"PageTemplateHtml",components:{AlohaExample:A,ATemplate:h},setup(){const e="<ul><li>Aloha 1</li><li>Aloha 2</li></ul>",{codeHtml:t}=J(),{codeJs:l}=C();return{codeHtml:t,codeJs:l,html:e}}};function F(e,t,l,r,u,T){const n=o("a-template"),s=o("aloha-example");return i(),c(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TEMPLATE_GROUP_HTML_HEADER_",description:"_A_TEMPLATE_GROUP_HTML_DESCRIPTION_",props:["html"]},{default:p(()=>[a(n,{html:e.html},null,8,["html"])]),_:1},8,["code-html","code-js"])}const U=_(v,[["render",F]]);function j(){return{codeHtml:`<a-template
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
</a-template>`}}function B(){return{codeJs:`import ATemplate from "aloha-vue/src/ui/ATemplate/ATemplate";
    
export default {
  name: "PageTemplateSlot",
  components: {
    ATemplate,
  },
};`}}const q={name:"PageTemplateSlot",components:{AlohaExample:A,ATemplate:h},setup(){const{codeHtml:e}=j(),{codeJs:t}=B();return{codeHtml:e,codeJs:t}}},G=["id"];function V(e,t,l,r,u,T){const n=o("a-template"),s=o("aloha-example");return i(),c(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TEMPLATE_GROUP_SLOT_HEADER_",description:"_A_TEMPLATE_GROUP_SLOT_DESCRIPTION_",props:["slot-name","options"]},{default:p(()=>[a(n,{options:{id:"template",text:"Aloha"},"slot-name":"aloha"},{aloha:p(({options:m,props:d})=>[N("div",{id:m.id},D(m.text),9,G)]),_:1})]),_:1},8,["code-html","code-js"])}const k=_(q,[["render",V]]);function w(){const e=P(()=>S({placeholder:"_A_TEMPLATE_COMPONENT_NAME_"}));return{pageTitle:P(()=>`ATemplate${e.value?` (${e.value})`:""}`)}}function K(){return{dataProps:[{name:"exclude-render-attributes",description:"_A_UI_PROPS_EXCLUDE_RENDER_ATTRIBUTES_DESCRIPTION_",type:"Array",default:"() => []",required:!1},{name:"html",description:"_A_TEMPLATE_PROPS_HTML_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"is-hide",description:"_A_UI_PROPS_IS_HIDE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"is-render",description:"_A_UI_PROPS_IS_RENDER_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"options",description:"_A_TEMPLATE_PROPS_OPTIONS_DESCRIPTION_",type:"String / Number / Object / Array / Boolean",default:void 0,required:!1},{name:"slot-name",description:"_A_TEMPLATE_PROPS_SLOT_NAME_DESCRIPTION_",type:"String",default:void 0,required:!1}]}}const X={name:"PageTemplate",components:{AlohaPage:I,AlohaTableProps:g,ATranslation:R,PageTemplateFieldset:b,PageTemplateHtml:U,PageTemplateSlot:k},setup(){const{pageTitle:e}=w(),{dataProps:t}=K();return{dataProps:t,pageTitle:e}}};function z(e,t,l,r,u,T){const n=o("a-translation"),s=o("page-template-html"),m=o("page-template-slot"),d=o("page-template-fieldset"),f=o("aloha-table-props"),E=o("aloha-page");return i(),c(E,{"page-title":e.pageTitle},{body:p(()=>[a(n,{tag:"p",html:"_A_TEMPLATE_COMPONENT_DESCRIPTION_"}),a(s),a(m),a(d),a(f,{data:e.dataProps},null,8,["data"])]),_:1},8,["page-title"])}const me=_(X,[["render",z]]);export{me as default};
