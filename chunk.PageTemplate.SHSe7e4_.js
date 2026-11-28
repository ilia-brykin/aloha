import{t as e}from"./chunk.AlohaPage.IS3NRfGI.js";import{t}from"./chunk.AlohaTableProps.-68XY4u1.js";import{Bt as n,Cn as r,Ht as i,Vt as a,an as o,gn as s,ln as c,pn as l,qt as u}from"./chunk.vendor.SEynj6EJ.js";import{t as d}from"./chunk.AlohaExample.CDuUdjpI.js";import{I as f,M as p,hn as m,in as h,mn as g,t as _}from"./bundle.index.DikcaTJ9.js";function v(){return{codeHtml:`<a-fieldset
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
};`}}var b={name:`PageTemplateFieldset`,components:{AElement:h,AFieldset:p,AlohaExample:d},setup(){let e=[{type:`text`,label:`Text`,id:`aloha.text`},{type:`template`,slotName:`template`}],t=s(void 0),{codeHtml:n}=v(),{codeJs:r}=y();return{children:e,codeHtml:n,codeJs:r,model:t}}};function x(e,t,n,r,a,s){let d=c(`a-element`),f=c(`a-fieldset`),p=c(`aloha-example`);return o(),i(p,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TEMPLATE_GROUP_FIELDSET_HEADER_`,description:`_A_TEMPLATE_GROUP_FIELDSET_DESCRIPTION_`},{default:l(()=>[u(f,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,children:e.children,label:`Fieldset`},{template:l(()=>[u(d,{class:`a_btn a_btn_primary`,text:`Aloha`,type:`button`})]),_:1},8,[`modelValue`,`children`])]),_:1},8,[`code-html`,`code-js`])}var S=_(b,[[`render`,x]]);function C(){return{codeHtml:`<a-template
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
};`}}var T={name:`PageTemplateHtml`,components:{AlohaExample:d,ATemplate:f},setup(){let{codeHtml:e}=C(),{codeJs:t}=w();return{codeHtml:e,codeJs:t,html:`<ul><li>Aloha 1</li><li>Aloha 2</li></ul>`}}};function E(e,t,n,r,a,s){let d=c(`a-template`),f=c(`aloha-example`);return o(),i(f,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TEMPLATE_GROUP_HTML_HEADER_`,description:`_A_TEMPLATE_GROUP_HTML_DESCRIPTION_`,props:[`html`]},{default:l(()=>[u(d,{html:e.html},null,8,[`html`])]),_:1},8,[`code-html`,`code-js`])}var D=_(T,[[`render`,E]]);function O(){return{codeHtml:`<a-template
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
};`}}var A={name:`PageTemplateSlot`,components:{AlohaExample:d,ATemplate:f},setup(){let{codeHtml:e}=O(),{codeJs:t}=k();return{codeHtml:e,codeJs:t}}},j=[`id`];function M(e,t,n,s,d,f){let p=c(`a-template`),m=c(`aloha-example`);return o(),i(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TEMPLATE_GROUP_SLOT_HEADER_`,description:`_A_TEMPLATE_GROUP_SLOT_DESCRIPTION_`,props:[`slot-name`,`options`]},{default:l(()=>[u(p,{options:{id:`template`,text:`Aloha`},"slot-name":`aloha`},{aloha:l(({options:e,props:t})=>[a(`div`,{id:e.id},r(e.text),9,j)]),_:1})]),_:1},8,[`code-html`,`code-js`])}var N=_(A,[[`render`,M]]);function P(){let e=n(()=>m({placeholder:`_A_TEMPLATE_COMPONENT_NAME_`}));return{pageTitle:n(()=>`ATemplate${e.value?` (${e.value})`:``}`)}}function F(){return{dataProps:[{name:`exclude-render-attributes`,description:`_A_UI_PROPS_EXCLUDE_RENDER_ATTRIBUTES_DESCRIPTION_`,type:`Array`,default:`() => []`,required:!1},{name:`html`,description:`_A_TEMPLATE_PROPS_HTML_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`is-hide`,description:`_A_UI_PROPS_IS_HIDE_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`is-render`,description:`_A_UI_PROPS_IS_RENDER_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`options`,description:`_A_TEMPLATE_PROPS_OPTIONS_DESCRIPTION_`,type:`String / Number / Object / Array / Boolean`,default:void 0,required:!1},{name:`slot-name`,description:`_A_TEMPLATE_PROPS_SLOT_NAME_DESCRIPTION_`,type:`String`,default:void 0,required:!1}]}}var I={name:`PageTemplate`,components:{AlohaPage:e,AlohaTableProps:t,ATranslation:g,PageTemplateFieldset:S,PageTemplateHtml:D,PageTemplateSlot:N},setup(){let{pageTitle:e}=P(),{dataProps:t}=F();return{dataProps:t,pageTitle:e}}};function L(e,t,n,r,a,s){let d=c(`a-translation`),f=c(`page-template-html`),p=c(`page-template-slot`),m=c(`page-template-fieldset`),h=c(`aloha-table-props`),g=c(`aloha-page`);return o(),i(g,{"page-title":e.pageTitle},{body:l(()=>[u(d,{tag:`p`,html:`_A_TEMPLATE_COMPONENT_DESCRIPTION_`}),u(f),u(p),u(m),u(h,{data:e.dataProps},null,8,[`data`])]),_:1},8,[`page-title`])}var R=_(I,[[`render`,L]]);export{R as default};