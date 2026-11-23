import{t as e}from"./chunk.AlohaPage.CqjE0MZc.js";import{t}from"./chunk.AlohaTableProps.CDbIRnOn.js";import{$t as n,Ft as r,It as i,Pt as a,Vt as o,hn as s,ln as c,rn as l,sn as u}from"./chunk.vendor.BvryzG0o.js";import{t as d}from"./chunk.AlohaExample.BkAbsrja.js";import{$t as f,A as p,P as m,Rt as h,qt as g}from"./bundle.index.DrnKDfVL.js";import{t as _}from"./chunk._plugin-vue_export-helper.BDNMzG2s.js";function v(){return{codeHtml:`<a-fieldset
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
</a-fieldset>`}}function y(){return{codeJs:`import {
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
};`}}var b={name:`PageTemplateFieldset`,components:{AElement:h,AFieldset:p,AlohaExample:d},setup(){let e=[{type:`text`,label:`Text`,id:`aloha.text`},{type:`template`,slotName:`template`}],t=c(void 0),{codeHtml:n}=v(),{codeJs:r}=y();return{children:e,codeHtml:n,codeJs:r,model:t}}};function x(e,t,r,a,s,c){let d=l(`a-element`),f=l(`a-fieldset`),p=l(`aloha-example`);return n(),i(p,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TEMPLATE_GROUP_FIELDSET_HEADER_`,description:`_A_TEMPLATE_GROUP_FIELDSET_DESCRIPTION_`},{default:u(()=>[o(f,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,children:e.children,label:`Fieldset`},{template:u(()=>[o(d,{class:`a_btn a_btn_primary`,text:`Aloha`,type:`button`})]),_:1},8,[`modelValue`,`children`])]),_:1},8,[`code-html`,`code-js`])}var S=_(b,[[`render`,x]]);function C(){return{codeHtml:`<a-template
  :html="html"
></a-template>`}}function w(){return{codeJs:`import {
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
};`}}var T={name:`PageTemplateHtml`,components:{AlohaExample:d,ATemplate:m},setup(){let{codeHtml:e}=C(),{codeJs:t}=w();return{codeHtml:e,codeJs:t,html:`<ul><li>Aloha 1</li><li>Aloha 2</li></ul>`}}};function E(e,t,r,a,s,c){let d=l(`a-template`),f=l(`aloha-example`);return n(),i(f,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TEMPLATE_GROUP_HTML_HEADER_`,description:`_A_TEMPLATE_GROUP_HTML_DESCRIPTION_`,props:[`html`]},{default:u(()=>[o(d,{html:e.html},null,8,[`html`])]),_:1},8,[`code-html`,`code-js`])}var D=_(T,[[`render`,E]]);function O(){return{codeHtml:`<a-template
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
</a-template>`}}function k(){return{codeJs:`import {
  ATemplate,
} from "aloha-vue";
    
export default {
  name: "PageTemplateSlot",
  components: {
    ATemplate,
  },
};`}}var A={name:`PageTemplateSlot`,components:{AlohaExample:d,ATemplate:m},setup(){let{codeHtml:e}=O(),{codeJs:t}=k();return{codeHtml:e,codeJs:t}}},j=[`id`];function M(e,t,a,c,d,f){let p=l(`a-template`),m=l(`aloha-example`);return n(),i(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TEMPLATE_GROUP_SLOT_HEADER_`,description:`_A_TEMPLATE_GROUP_SLOT_DESCRIPTION_`,props:[`slot-name`,`options`]},{default:u(()=>[o(p,{options:{id:`template`,text:`Aloha`},"slot-name":`aloha`},{aloha:u(({options:e,props:t})=>[r(`div`,{id:e.id},s(e.text),9,j)]),_:1})]),_:1},8,[`code-html`,`code-js`])}var N=_(A,[[`render`,M]]);function P(){let e=a(()=>f({placeholder:`_A_TEMPLATE_COMPONENT_NAME_`}));return{pageTitle:a(()=>`ATemplate${e.value?` (${e.value})`:``}`)}}function F(){return{dataProps:[{name:`exclude-render-attributes`,description:`_A_UI_PROPS_EXCLUDE_RENDER_ATTRIBUTES_DESCRIPTION_`,type:`Array`,default:`() => []`,required:!1},{name:`html`,description:`_A_TEMPLATE_PROPS_HTML_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`is-hide`,description:`_A_UI_PROPS_IS_HIDE_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`is-render`,description:`_A_UI_PROPS_IS_RENDER_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`options`,description:`_A_TEMPLATE_PROPS_OPTIONS_DESCRIPTION_`,type:`String / Number / Object / Array / Boolean`,default:void 0,required:!1},{name:`slot-name`,description:`_A_TEMPLATE_PROPS_SLOT_NAME_DESCRIPTION_`,type:`String`,default:void 0,required:!1}]}}var I={name:`PageTemplate`,components:{AlohaPage:e,AlohaTableProps:t,ATranslation:g,PageTemplateFieldset:S,PageTemplateHtml:D,PageTemplateSlot:N},setup(){let{pageTitle:e}=P(),{dataProps:t}=F();return{dataProps:t,pageTitle:e}}};function L(e,t,r,a,s,c){let d=l(`a-translation`),f=l(`page-template-html`),p=l(`page-template-slot`),m=l(`page-template-fieldset`),h=l(`aloha-table-props`),g=l(`aloha-page`);return n(),i(g,{"page-title":e.pageTitle},{body:u(()=>[o(d,{tag:`p`,html:`_A_TEMPLATE_COMPONENT_DESCRIPTION_`}),o(f),o(p),o(m),o(h,{data:e.dataProps},null,8,[`data`])]),_:1},8,[`page-title`])}var R=_(I,[[`render`,L]]);export{R as default};