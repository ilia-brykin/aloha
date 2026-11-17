import{t as e}from"./chunk.AlohaPage.CtPiWSGW.js";import{t}from"./chunk.AlohaTableProps.DfVbg0QG.js";import{$t as n,Dt as r,Et as i,Mt as a,Ot as o,Ut as s,Zt as c,an as l,qt as u}from"./chunk.vendor.BLRpG40B.js";import{t as d}from"./chunk.AlohaExample.Bs_TZ3nZ.js";import{$ as f,I as p,M as m,Ot as h,jt as g}from"./bundle.index.Dik8P8_q.js";import{t as _}from"./chunk._plugin-vue_export-helper.BDNMzG2s.js";function v(){return{codeHtml:`<a-fieldset
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
};`}}var b={name:`PageTemplateFieldset`,components:{AElement:h,AFieldset:m,AlohaExample:d},setup(){let e=[{type:`text`,label:`Text`,id:`aloha.text`},{type:`template`,slotName:`template`}],t=n(void 0),{codeHtml:r}=v(),{codeJs:i}=y();return{children:e,codeHtml:r,codeJs:i,model:t}}};function x(e,t,n,r,i,l){let d=u(`a-element`),f=u(`a-fieldset`),p=u(`aloha-example`);return s(),o(p,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TEMPLATE_GROUP_FIELDSET_HEADER_`,description:`_A_TEMPLATE_GROUP_FIELDSET_DESCRIPTION_`},{default:c(()=>[a(f,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,children:e.children,label:`Fieldset`},{template:c(()=>[a(d,{class:`a_btn a_btn_primary`,text:`Aloha`,type:`button`})]),_:1},8,[`modelValue`,`children`])]),_:1},8,[`code-html`,`code-js`])}var S=_(b,[[`render`,x]]);function C(){return{codeHtml:`<a-template
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
};`}}var T={name:`PageTemplateHtml`,components:{AlohaExample:d,ATemplate:p},setup(){let{codeHtml:e}=C(),{codeJs:t}=w();return{codeHtml:e,codeJs:t,html:`<ul><li>Aloha 1</li><li>Aloha 2</li></ul>`}}};function E(e,t,n,r,i,l){let d=u(`a-template`),f=u(`aloha-example`);return s(),o(f,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TEMPLATE_GROUP_HTML_HEADER_`,description:`_A_TEMPLATE_GROUP_HTML_DESCRIPTION_`,props:[`html`]},{default:c(()=>[a(d,{html:e.html},null,8,[`html`])]),_:1},8,[`code-html`,`code-js`])}var D=_(T,[[`render`,E]]);function O(){return{codeHtml:`<a-template
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
};`}}var A={name:`PageTemplateSlot`,components:{AlohaExample:d,ATemplate:p},setup(){let{codeHtml:e}=O(),{codeJs:t}=k();return{codeHtml:e,codeJs:t}}},j=[`id`];function M(e,t,n,i,d,f){let p=u(`a-template`),m=u(`aloha-example`);return s(),o(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TEMPLATE_GROUP_SLOT_HEADER_`,description:`_A_TEMPLATE_GROUP_SLOT_DESCRIPTION_`,props:[`slot-name`,`options`]},{default:c(()=>[a(p,{options:{id:`template`,text:`Aloha`},"slot-name":`aloha`},{aloha:c(({options:e,props:t})=>[r(`div`,{id:e.id},l(e.text),9,j)]),_:1})]),_:1},8,[`code-html`,`code-js`])}var N=_(A,[[`render`,M]]);function P(){let e=i(()=>g({placeholder:`_A_TEMPLATE_COMPONENT_NAME_`}));return{pageTitle:i(()=>`ATemplate${e.value?` (${e.value})`:``}`)}}function F(){return{dataProps:[{name:`exclude-render-attributes`,description:`_A_UI_PROPS_EXCLUDE_RENDER_ATTRIBUTES_DESCRIPTION_`,type:`Array`,default:`() => []`,required:!1},{name:`html`,description:`_A_TEMPLATE_PROPS_HTML_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`is-hide`,description:`_A_UI_PROPS_IS_HIDE_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`is-render`,description:`_A_UI_PROPS_IS_RENDER_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`options`,description:`_A_TEMPLATE_PROPS_OPTIONS_DESCRIPTION_`,type:`String / Number / Object / Array / Boolean`,default:void 0,required:!1},{name:`slot-name`,description:`_A_TEMPLATE_PROPS_SLOT_NAME_DESCRIPTION_`,type:`String`,default:void 0,required:!1}]}}var I={name:`PageTemplate`,components:{AlohaPage:e,AlohaTableProps:t,ATranslation:f,PageTemplateFieldset:S,PageTemplateHtml:D,PageTemplateSlot:N},setup(){let{pageTitle:e}=P(),{dataProps:t}=F();return{dataProps:t,pageTitle:e}}};function L(e,t,n,r,i,l){let d=u(`a-translation`),f=u(`page-template-html`),p=u(`page-template-slot`),m=u(`page-template-fieldset`),h=u(`aloha-table-props`),g=u(`aloha-page`);return s(),o(g,{"page-title":e.pageTitle},{body:c(()=>[a(d,{tag:`p`,html:`_A_TEMPLATE_COMPONENT_DESCRIPTION_`}),a(f),a(p),a(m),a(h,{data:e.dataProps},null,8,[`data`])]),_:1},8,[`page-title`])}var R=_(I,[[`render`,L]]);export{R as default};