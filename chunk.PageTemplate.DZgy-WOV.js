import{A as P,a as I}from"./chunk.AlohaExample.DLZpj-wq.js";import{A as g}from"./chunk.AlohaTableProps.DIrGJu15.js";import{Y as O,f as S,_,al as h,g as R,A as $}from"./bundle.index.ukCrN6vy.js";import"./chunk.vendor-lodash.BbaK34MN.js";import{r as H,V as c,aT as m,e as o,W as i,_ as a,Z as N,aU as D,d as A}from"./chunk.vendor.D7UxhUfn.js";import"./chunk.APageTabTitle.kgOgRugN.js";import"./chunk.AlohaHighlightjs.dFk8X2lo.js";import"./chunk.ATable.Bn-OJgjd.js";import"./chunk.translations-ar.BXWv90e-.js";import"./chunk.translations-de.JSU2GZ-A.js";import"./chunk.translations-en.CviwQZZj.js";import"./chunk.translations-es.D2AGpadl.js";import"./chunk.translations-fr.DQLlT60U.js";import"./chunk.translations-hr.EjwgafbT.js";import"./chunk.translations-it.fnRPaBQW.js";import"./chunk.translations-ru.DfHWC88K.js";function L(){return{codeHtml:`<a-fieldset
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
};`}}const y={name:"PageTemplateFieldset",components:{AElement:S,AFieldset:O,AlohaExample:P},setup(){const e=[{type:"text",label:"Text",id:"aloha.text"},{type:"template",slotName:"template"}],t=H(void 0),{codeHtml:l}=L(),{codeJs:r}=x();return{children:e,codeHtml:l,codeJs:r,model:t}}};function M(e,t,l,r,u,T){const n=o("a-element"),s=o("a-fieldset"),p=o("aloha-example");return i(),c(p,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TEMPLATE_GROUP_FIELDSET_HEADER_",description:"_A_TEMPLATE_GROUP_FIELDSET_DESCRIPTION_"},{default:m(()=>[a(s,{modelValue:e.model,"onUpdate:modelValue":t[0]||(t[0]=d=>e.model=d),children:e.children,label:"Fieldset"},{template:m(()=>[a(n,{class:"a_btn a_btn_primary",text:"Aloha",type:"button"})]),_:1},8,["modelValue","children"])]),_:1},8,["code-html","code-js"])}const b=_(y,[["render",M]]);function C(){return{codeHtml:`<a-template
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
};`}}const v={name:"PageTemplateHtml",components:{AlohaExample:P,ATemplate:h},setup(){const e="<ul><li>Aloha 1</li><li>Aloha 2</li></ul>",{codeHtml:t}=C(),{codeJs:l}=J();return{codeHtml:t,codeJs:l,html:e}}};function U(e,t,l,r,u,T){const n=o("a-template"),s=o("aloha-example");return i(),c(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TEMPLATE_GROUP_HTML_HEADER_",description:"_A_TEMPLATE_GROUP_HTML_DESCRIPTION_",props:["html"]},{default:m(()=>[a(n,{html:e.html},null,8,["html"])]),_:1},8,["code-html","code-js"])}const F=_(v,[["render",U]]);function j(){return{codeHtml:`<a-template
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
</a-template>`}}function B(){return{codeJs:`import {
  ATemplate,
} from "aloha-vue";
    
export default {
  name: "PageTemplateSlot",
  components: {
    ATemplate,
  },
};`}}const q={name:"PageTemplateSlot",components:{AlohaExample:P,ATemplate:h},setup(){const{codeHtml:e}=j(),{codeJs:t}=B();return{codeHtml:e,codeJs:t}}},G=["id"];function V(e,t,l,r,u,T){const n=o("a-template"),s=o("aloha-example");return i(),c(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TEMPLATE_GROUP_SLOT_HEADER_",description:"_A_TEMPLATE_GROUP_SLOT_DESCRIPTION_",props:["slot-name","options"]},{default:m(()=>[a(n,{options:{id:"template",text:"Aloha"},"slot-name":"aloha"},{aloha:m(({options:p,props:d})=>[N("div",{id:p.id},D(p.text),9,G)]),_:1})]),_:1},8,["code-html","code-js"])}const k=_(q,[["render",V]]);function w(){const e=A(()=>R({placeholder:"_A_TEMPLATE_COMPONENT_NAME_"}));return{pageTitle:A(()=>`ATemplate${e.value?` (${e.value})`:""}`)}}function W(){return{dataProps:[{name:"exclude-render-attributes",description:"_A_UI_PROPS_EXCLUDE_RENDER_ATTRIBUTES_DESCRIPTION_",type:"Array",default:"() => []",required:!1},{name:"html",description:"_A_TEMPLATE_PROPS_HTML_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"is-hide",description:"_A_UI_PROPS_IS_HIDE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"is-render",description:"_A_UI_PROPS_IS_RENDER_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"options",description:"_A_TEMPLATE_PROPS_OPTIONS_DESCRIPTION_",type:"String / Number / Object / Array / Boolean",default:void 0,required:!1},{name:"slot-name",description:"_A_TEMPLATE_PROPS_SLOT_NAME_DESCRIPTION_",type:"String",default:void 0,required:!1}]}}const X={name:"PageTemplate",components:{AlohaPage:I,AlohaTableProps:g,ATranslation:$,PageTemplateFieldset:b,PageTemplateHtml:F,PageTemplateSlot:k},setup(){const{pageTitle:e}=w(),{dataProps:t}=W();return{dataProps:t,pageTitle:e}}};function Y(e,t,l,r,u,T){const n=o("a-translation"),s=o("page-template-html"),p=o("page-template-slot"),d=o("page-template-fieldset"),f=o("aloha-table-props"),E=o("aloha-page");return i(),c(E,{"page-title":e.pageTitle},{body:m(()=>[a(n,{tag:"p",html:"_A_TEMPLATE_COMPONENT_DESCRIPTION_"}),a(s),a(p),a(d),a(f,{data:e.dataProps},null,8,["data"])]),_:1},8,["page-title"])}const ce=_(X,[["render",Y]]);export{ce as default};
