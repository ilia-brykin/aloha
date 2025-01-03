import{A as P,a as I}from"./chunk.AlohaExample.BorK_Tbl.js";import{A as g}from"./chunk.AlohaTableProps.BdyNXDuc.js";import{B as O,R,_,a1 as h,g as S,A as $}from"./bundle.index.By4-CZSJ.js";import{r as H,k as o,Q as c,aQ as m,O as i,V as a,U as N,aR as D,a as A}from"./chunk.vendor.C_nZR3i9.js";import"./chunk.APageTabTitle.CJaSEw9R.js";import"./chunk.AlohaHighlightjs.zzXDUp_j.js";import"./chunk.vendor-lodash.BzDRedSD.js";import"./chunk.ATable.CL2UKDAd.js";import"./chunk.translations-ar.CGL8aVo9.js";import"./chunk.translations-de.RdwLQ5AB.js";import"./chunk.translations-en.DDBINhYl.js";import"./chunk.translations-es.Db8DPcgi.js";import"./chunk.translations-fr.Bj0H1VLd.js";import"./chunk.translations-hr.D6Hyl4N8.js";import"./chunk.translations-it.BR5rbHtH.js";import"./chunk.translations-ru.BkDZ_0rg.js";function L(){return{codeHtml:`<a-fieldset
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

import {
  AElement,
  AFieldset,
} from "aloha-vue";
    
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
};`}}const y={name:"PageTemplateFieldset",components:{AElement:O,AFieldset:R,AlohaExample:P},setup(){const e=[{type:"text",label:"Text",id:"aloha.text"},{type:"template",slotName:"template"}],t=H(void 0),{codeHtml:l}=L(),{codeJs:r}=x();return{children:e,codeHtml:l,codeJs:r,model:t}}};function M(e,t,l,r,u,T){const n=o("a-element"),s=o("a-fieldset"),p=o("aloha-example");return i(),c(p,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TEMPLATE_GROUP_FIELDSET_HEADER_",description:"_A_TEMPLATE_GROUP_FIELDSET_DESCRIPTION_"},{default:m(()=>[a(s,{modelValue:e.model,"onUpdate:modelValue":t[0]||(t[0]=d=>e.model=d),children:e.children,label:"Fieldset"},{template:m(()=>[a(n,{class:"a_btn a_btn_primary",text:"Aloha",type:"button"})]),_:1},8,["modelValue","children"])]),_:1},8,["code-html","code-js"])}const b=_(y,[["render",M]]);function C(){return{codeHtml:`<a-template
  :html="html"
></a-template>`}}function J(){return{codeJs:`import {
  ATemplate,
} from "aloha-vue";
    
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
};`}}const v={name:"PageTemplateHtml",components:{AlohaExample:P,ATemplate:h},setup(){const e="<ul><li>Aloha 1</li><li>Aloha 2</li></ul>",{codeHtml:t}=C(),{codeJs:l}=J();return{codeHtml:t,codeJs:l,html:e}}};function U(e,t,l,r,u,T){const n=o("a-template"),s=o("aloha-example");return i(),c(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TEMPLATE_GROUP_HTML_HEADER_",description:"_A_TEMPLATE_GROUP_HTML_DESCRIPTION_",props:["html"]},{default:m(()=>[a(n,{html:e.html},null,8,["html"])]),_:1},8,["code-html","code-js"])}const F=_(v,[["render",U]]);function B(){return{codeHtml:`<a-template
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
</a-template>`}}function j(){return{codeJs:`import {
  ATemplate,
} from "aloha-vue";
    
export default {
  name: "PageTemplateSlot",
  components: {
    ATemplate,
  },
};`}}const q={name:"PageTemplateSlot",components:{AlohaExample:P,ATemplate:h},setup(){const{codeHtml:e}=B(),{codeJs:t}=j();return{codeHtml:e,codeJs:t}}},G=["id"];function V(e,t,l,r,u,T){const n=o("a-template"),s=o("aloha-example");return i(),c(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TEMPLATE_GROUP_SLOT_HEADER_",description:"_A_TEMPLATE_GROUP_SLOT_DESCRIPTION_",props:["slot-name","options"]},{default:m(()=>[a(n,{options:{id:"template",text:"Aloha"},"slot-name":"aloha"},{aloha:m(({options:p,props:d})=>[N("div",{id:p.id},D(p.text),9,G)]),_:1})]),_:1},8,["code-html","code-js"])}const k=_(q,[["render",V]]);function Q(){const e=A(()=>S({placeholder:"_A_TEMPLATE_COMPONENT_NAME_"}));return{pageTitle:A(()=>`ATemplate${e.value?` (${e.value})`:""}`)}}function w(){return{dataProps:[{name:"exclude-render-attributes",description:"_A_UI_PROPS_EXCLUDE_RENDER_ATTRIBUTES_DESCRIPTION_",type:"Array",default:"() => []",required:!1},{name:"html",description:"_A_TEMPLATE_PROPS_HTML_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"is-hide",description:"_A_UI_PROPS_IS_HIDE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"is-render",description:"_A_UI_PROPS_IS_RENDER_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"options",description:"_A_TEMPLATE_PROPS_OPTIONS_DESCRIPTION_",type:"String / Number / Object / Array / Boolean",default:void 0,required:!1},{name:"slot-name",description:"_A_TEMPLATE_PROPS_SLOT_NAME_DESCRIPTION_",type:"String",default:void 0,required:!1}]}}const X={name:"PageTemplate",components:{AlohaPage:I,AlohaTableProps:g,ATranslation:$,PageTemplateFieldset:b,PageTemplateHtml:F,PageTemplateSlot:k},setup(){const{pageTitle:e}=Q(),{dataProps:t}=w();return{dataProps:t,pageTitle:e}}};function z(e,t,l,r,u,T){const n=o("a-translation"),s=o("page-template-html"),p=o("page-template-slot"),d=o("page-template-fieldset"),f=o("aloha-table-props"),E=o("aloha-page");return i(),c(E,{"page-title":e.pageTitle},{body:m(()=>[a(n,{tag:"p",html:"_A_TEMPLATE_COMPONENT_DESCRIPTION_"}),a(s),a(p),a(d),a(f,{data:e.dataProps},null,8,["data"])]),_:1},8,["page-title"])}const ce=_(X,[["render",z]]);export{ce as default};
