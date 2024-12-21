import{A,a as I}from"./chunk.AlohaExample.COwLWL3e.js";import{A as g}from"./chunk.AlohaTableProps.BwzBMLpS.js";import{l as O,_ as i,g as S,A as R}from"./bundle.index.TDRGJtdO.js";import{g as $,l as h}from"./chunk.AForm.DP_AeeTu.js";import{r as H,k as o,J as _,aJ as s,H as c,O as a,N,aK as D,a as P}from"./chunk.vendor.Ca3-nzbX.js";import"./chunk.vendor-lodash.-viuv_rg.js";import"./chunk.ATable.BV3GJRlA.js";import"./chunk.utilsMath.DoITS5e9.js";import"./chunk.translations-ar.CGH9gktb.js";import"./chunk.translations-de.S4PF1KYg.js";import"./chunk.translations-en.Ck05aPwN.js";import"./chunk.translations-es.CN4IYWAw.js";import"./chunk.translations-fr.CCwWtZH3.js";import"./chunk.translations-hr.C7fo1LlO.js";import"./chunk.translations-it.BFH_rAJL.js";import"./chunk.translations-ru.C3zXigta.js";import"./chunk.ADatepicker.BtlALN0M.js";import"./chunk.UiMixinProps.SXpQQH-L.js";import"./chunk.AInputNumber.CppxR36z.js";function L(){return{codeHtml:`<a-fieldset
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
};`}}const y={name:"PageTemplateFieldset",components:{AElement:O,AFieldset:$,AlohaExample:A},setup(){const e=[{type:"text",label:"Text",id:"aloha.text"},{type:"template",slotName:"template"}],t=H(void 0),{codeHtml:l}=L(),{codeJs:r}=x();return{children:e,codeHtml:l,codeJs:r,model:t}}};function M(e,t,l,r,u,T){const n=o("a-element"),m=o("a-fieldset"),p=o("aloha-example");return c(),_(p,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TEMPLATE_GROUP_FIELDSET_HEADER_",description:"_A_TEMPLATE_GROUP_FIELDSET_DESCRIPTION_"},{default:s(()=>[a(m,{modelValue:e.model,"onUpdate:modelValue":t[0]||(t[0]=d=>e.model=d),children:e.children,label:"Fieldset"},{template:s(()=>[a(n,{class:"a_btn a_btn_primary",text:"Aloha",type:"button"})]),_:1},8,["modelValue","children"])]),_:1},8,["code-html","code-js"])}const b=i(y,[["render",M]]);function J(){return{codeHtml:`<a-template
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
};`}}const v={name:"PageTemplateHtml",components:{AlohaExample:A,ATemplate:h},setup(){const e="<ul><li>Aloha 1</li><li>Aloha 2</li></ul>",{codeHtml:t}=J(),{codeJs:l}=C();return{codeHtml:t,codeJs:l,html:e}}};function F(e,t,l,r,u,T){const n=o("a-template"),m=o("aloha-example");return c(),_(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TEMPLATE_GROUP_HTML_HEADER_",description:"_A_TEMPLATE_GROUP_HTML_DESCRIPTION_",props:["html"]},{default:s(()=>[a(n,{html:e.html},null,8,["html"])]),_:1},8,["code-html","code-js"])}const U=i(v,[["render",F]]);function j(){return{codeHtml:`<a-template
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
};`}}const q={name:"PageTemplateSlot",components:{AlohaExample:A,ATemplate:h},setup(){const{codeHtml:e}=j(),{codeJs:t}=B();return{codeHtml:e,codeJs:t}}},G=["id"];function V(e,t,l,r,u,T){const n=o("a-template"),m=o("aloha-example");return c(),_(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TEMPLATE_GROUP_SLOT_HEADER_",description:"_A_TEMPLATE_GROUP_SLOT_DESCRIPTION_",props:["slot-name","options"]},{default:s(()=>[a(n,{options:{id:"template",text:"Aloha"},"slot-name":"aloha"},{aloha:s(({options:p,props:d})=>[N("div",{id:p.id},D(p.text),9,G)]),_:1})]),_:1},8,["code-html","code-js"])}const k=i(q,[["render",V]]);function w(){const e=P(()=>S({placeholder:"_A_TEMPLATE_COMPONENT_NAME_"}));return{pageTitle:P(()=>`ATemplate${e.value?` (${e.value})`:""}`)}}function K(){return{dataProps:[{name:"exclude-render-attributes",description:"_A_UI_PROPS_EXCLUDE_RENDER_ATTRIBUTES_DESCRIPTION_",type:"Array",default:"() => []",required:!1},{name:"html",description:"_A_TEMPLATE_PROPS_HTML_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"is-hide",description:"_A_UI_PROPS_IS_HIDE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"is-render",description:"_A_UI_PROPS_IS_RENDER_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"options",description:"_A_TEMPLATE_PROPS_OPTIONS_DESCRIPTION_",type:"String / Number / Object / Array / Boolean",default:void 0,required:!1},{name:"slot-name",description:"_A_TEMPLATE_PROPS_SLOT_NAME_DESCRIPTION_",type:"String",default:void 0,required:!1}]}}const X={name:"PageTemplate",components:{AlohaPage:I,AlohaTableProps:g,ATranslation:R,PageTemplateFieldset:b,PageTemplateHtml:U,PageTemplateSlot:k},setup(){const{pageTitle:e}=w(),{dataProps:t}=K();return{dataProps:t,pageTitle:e}}};function z(e,t,l,r,u,T){const n=o("a-translation"),m=o("page-template-html"),p=o("page-template-slot"),d=o("page-template-fieldset"),f=o("aloha-table-props"),E=o("aloha-page");return c(),_(E,{"page-title":e.pageTitle},{body:s(()=>[a(n,{tag:"p",html:"_A_TEMPLATE_COMPONENT_DESCRIPTION_"}),a(m),a(p),a(d),a(f,{data:e.dataProps},null,8,["data"])]),_:1},8,["page-title"])}const Te=i(X,[["render",z]]);export{Te as default};
