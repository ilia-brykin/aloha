import{$t as e,Ct as t,Tt as n,Ut as r,Yt as i,kt as a,qt as o,wt as s,zt as c}from"./chunk.vendor.CZPox1kV.js";import{Et as l,F as u,Z as d,j as f,kt as p,t as m}from"./bundle.index.BmSiyQNH.js";import{n as h,t as g}from"./chunk.AlohaExample.CD4LlhAz.js";import{t as _}from"./chunk.AlohaTableProps.Dksi7fmb.js";function v(){return{codeHtml:`<a-fieldset
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
};`}}var b={name:`PageTemplateFieldset`,components:{AElement:l,AFieldset:f,AlohaExample:g},setup(){let e=[{type:`text`,label:`Text`,id:`aloha.text`},{type:`template`,slotName:`template`}],t=i(void 0),{codeHtml:n}=v(),{codeJs:r}=y();return{children:e,codeHtml:n,codeJs:r,model:t}}};function x(e,t,i,s,l,u){let d=r(`a-element`),f=r(`a-fieldset`),p=r(`aloha-example`);return c(),n(p,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TEMPLATE_GROUP_FIELDSET_HEADER_`,description:`_A_TEMPLATE_GROUP_FIELDSET_DESCRIPTION_`},{default:o(()=>[a(f,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,children:e.children,label:`Fieldset`},{template:o(()=>[a(d,{class:`a_btn a_btn_primary`,text:`Aloha`,type:`button`})]),_:1},8,[`modelValue`,`children`])]),_:1},8,[`code-html`,`code-js`])}var S=m(b,[[`render`,x]]);function C(){return{codeHtml:`<a-template
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
};`}}var T={name:`PageTemplateHtml`,components:{AlohaExample:g,ATemplate:u},setup(){let{codeHtml:e}=C(),{codeJs:t}=w();return{codeHtml:e,codeJs:t,html:`<ul><li>Aloha 1</li><li>Aloha 2</li></ul>`}}};function E(e,t,i,s,l,u){let d=r(`a-template`),f=r(`aloha-example`);return c(),n(f,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TEMPLATE_GROUP_HTML_HEADER_`,description:`_A_TEMPLATE_GROUP_HTML_DESCRIPTION_`,props:[`html`]},{default:o(()=>[a(d,{html:e.html},null,8,[`html`])]),_:1},8,[`code-html`,`code-js`])}var D=m(T,[[`render`,E]]);function O(){return{codeHtml:`<a-template
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
};`}}var A={name:`PageTemplateSlot`,components:{AlohaExample:g,ATemplate:u},setup(){let{codeHtml:e}=O(),{codeJs:t}=k();return{codeHtml:e,codeJs:t}}},j=[`id`];function M(t,i,l,u,d,f){let p=r(`a-template`),m=r(`aloha-example`);return c(),n(m,{"code-html":t.codeHtml,"code-js":t.codeJs,header:`_A_TEMPLATE_GROUP_SLOT_HEADER_`,description:`_A_TEMPLATE_GROUP_SLOT_DESCRIPTION_`,props:[`slot-name`,`options`]},{default:o(()=>[a(p,{options:{id:`template`,text:`Aloha`},"slot-name":`aloha`},{aloha:o(({options:t,props:n})=>[s(`div`,{id:t.id},e(t.text),9,j)]),_:1})]),_:1},8,[`code-html`,`code-js`])}var N=m(A,[[`render`,M]]);function P(){let e=t(()=>p({placeholder:`_A_TEMPLATE_COMPONENT_NAME_`}));return{pageTitle:t(()=>`ATemplate${e.value?` (${e.value})`:``}`)}}function F(){return{dataProps:[{name:`exclude-render-attributes`,description:`_A_UI_PROPS_EXCLUDE_RENDER_ATTRIBUTES_DESCRIPTION_`,type:`Array`,default:`() => []`,required:!1},{name:`html`,description:`_A_TEMPLATE_PROPS_HTML_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`is-hide`,description:`_A_UI_PROPS_IS_HIDE_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`is-render`,description:`_A_UI_PROPS_IS_RENDER_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`options`,description:`_A_TEMPLATE_PROPS_OPTIONS_DESCRIPTION_`,type:`String / Number / Object / Array / Boolean`,default:void 0,required:!1},{name:`slot-name`,description:`_A_TEMPLATE_PROPS_SLOT_NAME_DESCRIPTION_`,type:`String`,default:void 0,required:!1}]}}var I={name:`PageTemplate`,components:{AlohaPage:h,AlohaTableProps:_,ATranslation:d,PageTemplateFieldset:S,PageTemplateHtml:D,PageTemplateSlot:N},setup(){let{pageTitle:e}=P(),{dataProps:t}=F();return{dataProps:t,pageTitle:e}}};function L(e,t,i,s,l,u){let d=r(`a-translation`),f=r(`page-template-html`),p=r(`page-template-slot`),m=r(`page-template-fieldset`),h=r(`aloha-table-props`),g=r(`aloha-page`);return c(),n(g,{"page-title":e.pageTitle},{body:o(()=>[a(d,{tag:`p`,html:`_A_TEMPLATE_COMPONENT_DESCRIPTION_`}),a(f),a(p),a(m),a(h,{data:e.dataProps},null,8,[`data`])]),_:1},8,[`page-title`])}var R=m(I,[[`render`,L]]);export{R as default};