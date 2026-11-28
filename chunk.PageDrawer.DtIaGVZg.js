import{t as e}from"./chunk.AlohaPage.BSfHVC43.js";import{t}from"./chunk.AlohaTableProps.BlCiBCEj.js";import{t as n}from"./chunk.AlohaTableTranslate.CZ7cJb8v.js";import{Gt as r,Ht as i,Jt as a,Ut as o,Vt as s,Wt as c,_n as l,cn as u,mn as d,on as f,un as p,wn as m,zt as h}from"./chunk.vendor.DL09mhUf.js";import{t as g}from"./chunk.AlohaExample.VTWuqY0j.js";import{D as _,dt as v,hn as y,mn as b,sn as x,t as S}from"./bundle.index.D-5bYXwk.js";import{n as C,t as w}from"./chunk.SlotsAPI.sQJI1B9c.js";import{t as T}from"./chunk.TranslateAPI.mLehtU2h.js";function E(){return{codeHtml:`<a-button
  id="btn_drawer_right"
  class="a_btn a_btn_primary"
  text="_A_DRAWER_BTN_OPEN_RIGHT_"
  @click="openDrawer('right')"
/>
<a-button
  id="btn_drawer_left"
  class="a_btn a_btn_secondary"
  text="_A_DRAWER_BTN_OPEN_LEFT_"
  @click="openDrawer('left')"
/>

<a-drawer
  v-if="placement"
  :placement="placement"
  :selector-close-ids="\`btn_drawer_\${ placement }\`"
  :close="closeDrawer"
  header-text="_A_DRAWER_COMPONENT_NAME_"
>
  <template v-slot:modalBody>
    <a-translation
      tag="p"
      text="_A_DRAWER_EXAMPLE_BODY_"
    />
  </template>
</a-drawer>`}}function D(){return{codeJs:`import {
  ref,
} from "vue";

import {
  AButton,
  ADrawer,
  ATranslation,
} from "aloha-vue";

export default {
  components: {
    AButton,
    ADrawer,
    ATranslation,
  },
  setup() {
    // undefined: closed, "right" or "left": open at this edge
    const placement = ref(undefined);

    const openDrawer = value => {
      placement.value = value;
    };

    const closeDrawer = () => {
      placement.value = undefined;
    };

    return {
      closeDrawer,
      openDrawer,
      placement,
    };
  },
};`}}var O={name:`PageDrawerBasic`,components:{AButton:x,ADrawer:v,AlohaExample:g,ATranslation:b},setup(){let{codeHtml:e}=E(),{codeJs:t}=D(),n=l(void 0);return{closeDrawer:()=>{n.value=void 0},codeHtml:e,codeJs:t,openDrawer:e=>{n.value=e},placement:n}}},k={class:`a_d_flex a_gap_2 a_flex_wrap`};function A(e,t,n,r,s,l){let u=p(`a-button`),m=p(`a-translation`),h=p(`a-drawer`),g=p(`aloha-example`);return f(),o(g,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,description:`_A_DRAWER_BASIC_DESCRIPTION_`,props:[`placement`,`selector-close-ids`]},{default:d(()=>[i(`div`,k,[a(u,{class:`a_btn a_btn_primary`,id:`btn_drawer_right`,text:`_A_DRAWER_BTN_OPEN_RIGHT_`,onClick:t[0]||=t=>e.openDrawer(`right`)}),a(u,{class:`a_btn a_btn_secondary`,id:`btn_drawer_left`,text:`_A_DRAWER_BTN_OPEN_LEFT_`,onClick:t[1]||=t=>e.openDrawer(`left`)})]),e.placement?(f(),o(h,{key:0,placement:e.placement,"selector-close-ids":`btn_drawer_${e.placement}`,close:e.closeDrawer,"header-text":`_A_DRAWER_COMPONENT_NAME_`},{modalBody:d(()=>[a(m,{tag:`p`,text:`_A_DRAWER_EXAMPLE_BODY_`})]),_:1},8,[`placement`,`selector-close-ids`,`close`])):c(``,!0)]),_:1},8,[`code-html`,`code-js`])}var j=S(O,[[`render`,A]]);function M(){return{codeHtml:`<a-button
  id="btn_drawer_form"
  class="a_btn a_btn_primary"
  text="_A_DRAWER_BTN_EDIT_"
  @click="openDrawer"
/>

<a-drawer
  v-if="isDrawerVisible"
  selector-close-ids="btn_drawer_form"
  :close="closeDrawer"
  :save="save"
  :is-footer-sticky="true"
  header-text="_A_DRAWER_FORM_HEADER_"
>
  <template v-slot:modalBody>
    <a-form
      v-model="modelLocal"
      :data="dataForm"
    />
  </template>
</a-drawer>

<pre>{{ model }}</pre>`}}function N(){return{codeJs:`import {
  ref,
} from "vue";

import {
  AButton,
  ADrawer,
  AForm,
} from "aloha-vue";

export default {
  components: {
    AButton,
    ADrawer,
    AForm,
  },
  setup() {
    const dataForm = [
      { type: "text", id: "name", label: "_A_FORM_EXAMPLE_NAME_", required: true },
      { type: "email", id: "email", label: "_A_FORM_EXAMPLE_EMAIL_" },
      {
        type: "select",
        id: "country",
        label: "_A_FORM_EXAMPLE_COUNTRY_",
        data: [
          { label: "Deutschland", value: "de" },
          { label: "France", value: "fr" },
          { label: "Italia", value: "it" },
        ],
      },
      { type: "switch", id: "notifications", label: "_A_FORM_EXAMPLE_NOTIFICATIONS_" },
      { type: "textarea", id: "notes", label: "_A_FORM_EXAMPLE_NOTES_" },
    ];
    const model = ref({
      name: "Aloha",
      email: "aloha@example.com",
      country: "de",
      notifications: true,
      notes: "",
    });
    // the form edits a copy, so "Cancel" does not change the model
    const modelLocal = ref({});
    const isDrawerVisible = ref(false);

    const openDrawer = () => {
      modelLocal.value = { ...model.value };
      isDrawerVisible.value = true;
    };

    const closeDrawer = () => {
      isDrawerVisible.value = false;
    };

    const save = () => {
      model.value = { ...modelLocal.value };
      closeDrawer();
    };

    return {
      closeDrawer,
      dataForm,
      isDrawerVisible,
      model,
      modelLocal,
      openDrawer,
      save,
    };
  },
};`}}var P={name:`PageDrawerForm`,components:{AButton:x,ADrawer:v,AForm:_,AlohaExample:g},setup(){let{codeHtml:e}=M(),{codeJs:t}=N(),n=[{type:`text`,id:`name`,label:`_A_FORM_EXAMPLE_NAME_`,required:!0},{type:`email`,id:`email`,label:`_A_FORM_EXAMPLE_EMAIL_`},{type:`select`,id:`country`,label:`_A_FORM_EXAMPLE_COUNTRY_`,data:[{label:`Deutschland`,value:`de`},{label:`France`,value:`fr`},{label:`Italia`,value:`it`}]},{type:`switch`,id:`notifications`,label:`_A_FORM_EXAMPLE_NOTIFICATIONS_`},{type:`textarea`,id:`notes`,label:`_A_FORM_EXAMPLE_NOTES_`}],r=l({name:`Aloha`,email:`aloha@example.com`,country:`de`,notifications:!0,notes:``}),i=l({}),a=l(!1),o=()=>{i.value={...r.value},a.value=!0},s=()=>{a.value=!1};return{closeDrawer:s,codeHtml:e,codeJs:t,dataForm:n,isDrawerVisible:a,model:r,modelLocal:i,openDrawer:o,save:()=>{r.value={...i.value},s()}}}},F={class:`a_mt_3`};function I(e,t,n,r,s,l){let u=p(`a-button`),h=p(`a-form`),g=p(`a-drawer`),_=p(`aloha-example`);return f(),o(_,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_DRAWER_FORM_HEADER_`,description:`_A_DRAWER_FORM_DESCRIPTION_`,props:[`save`,`is-footer-sticky`]},{default:d(()=>[a(u,{class:`a_btn a_btn_primary`,id:`btn_drawer_form`,text:`_A_DRAWER_BTN_EDIT_`,onClick:e.openDrawer},null,8,[`onClick`]),e.isDrawerVisible?(f(),o(g,{key:0,"selector-close-ids":`btn_drawer_form`,close:e.closeDrawer,save:e.save,"is-footer-sticky":!0,"header-text":`_A_DRAWER_FORM_HEADER_`},{modalBody:d(()=>[a(h,{modelValue:e.modelLocal,"onUpdate:modelValue":t[0]||=t=>e.modelLocal=t,data:e.dataForm},null,8,[`modelValue`,`data`])]),_:1},8,[`close`,`save`])):c(``,!0),i(`pre`,F,m(e.model),1)]),_:1},8,[`code-html`,`code-js`])}var L=S(P,[[`render`,I]]);function R(){return{codeHtml:`<!-- width: small 300px, default 400px, large 600px, xl 900px; the whole width on a narrow window -->
<a-drawer
  v-if="isDrawerVisible"
  size="large"
  :close="closeDrawer"
  header-text="Aloha"
>
  <template v-slot:modalBody>...</template>
</a-drawer>`}}function z(){return{codeJs:`import {
  ref,
} from "vue";

import {
  ADrawer,
} from "aloha-vue";

export default {
  components: {
    ADrawer,
  },
  setup() {
    const isDrawerVisible = ref(false);

    const closeDrawer = () => {
      isDrawerVisible.value = false;
    };

    return {
      closeDrawer,
      isDrawerVisible,
    };
  },
};`}}var B={name:`PageDrawerSizes`,components:{AButton:x,ADrawer:v,AlohaExample:g,ATranslation:b},setup(){let{codeHtml:e}=R(),{codeJs:t}=z(),n=[`small`,`default`,`large`,`xl`],r=l(void 0);return{closeDrawer:()=>{r.value=void 0},codeHtml:e,codeJs:t,openDrawer:e=>{r.value=e},size:r,sizes:n}}},V={class:`a_btn_group`,role:`group`};function H(e,t,n,s,l,m){let g=p(`a-button`),_=p(`a-translation`),v=p(`a-drawer`),y=p(`aloha-example`);return f(),o(y,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_DRAWER_SIZES_HEADER_`,description:`_A_DRAWER_SIZES_DESCRIPTION_`,props:[`size`]},{default:d(()=>[i(`div`,V,[(f(!0),r(h,null,u(e.sizes,t=>(f(),o(g,{class:`a_btn a_btn_outline_secondary`,id:`btn_drawer_size_${t}`,key:t,text:t,onClick:n=>e.openDrawer(t)},null,8,[`id`,`text`,`onClick`]))),128))]),e.size?(f(),o(v,{key:0,size:e.size==="default"?void 0:e.size,"selector-close-ids":`btn_drawer_size_${e.size}`,close:e.closeDrawer,"header-text":`size: ${e.size}`},{modalBody:d(()=>[a(_,{tag:`p`,text:`_A_DRAWER_EXAMPLE_BODY_`})]),_:1},8,[`size`,`selector-close-ids`,`close`,`header-text`])):c(``,!0)]),_:1},8,[`code-html`,`code-js`])}var U=S(B,[[`render`,H]]);function W(){let e=s(()=>y({placeholder:`_A_DRAWER_COMPONENT_NAME_`}));return{pageTitle:s(()=>`ADrawer${e.value?` (${e.value})`:``}`)}}function G(){let{dataProps:e}=C();return{dataProps:[...e,{name:`placement`,description:`_A_DRAWER_PROPS_PLACEMENT_DESCRIPTION_`,type:`String`,default:`"right"`,required:!1}].sort((e,t)=>e.name.localeCompare(t.name))}}var K={name:`PageDrawer`,components:{AlohaPage:e,AlohaTableProps:t,AlohaTableTranslate:n,ATranslation:b,PageDrawerBasic:j,PageDrawerForm:L,PageDrawerSizes:U},setup(){let{pageTitle:e}=W(),{dataProps:t}=G(),{dataSlots:n}=w(),{dataTranslate:r}=T();return{dataProps:t,dataSlots:n,dataTranslate:r,pageTitle:e}}};function q(e,t,n,r,i,s){let c=p(`a-translation`),l=p(`page-drawer-basic`),u=p(`page-drawer-sizes`),m=p(`page-drawer-form`),h=p(`aloha-table-props`),g=p(`aloha-table-translate`),_=p(`aloha-table-css-vars`),v=p(`aloha-page`);return f(),o(v,{"page-title":e.pageTitle},{body:d(()=>[a(c,{tag:`p`,html:`_A_DRAWER_COMPONENT_DESCRIPTION_`}),a(l),a(u),a(m),a(h,{data:e.dataProps},null,8,[`data`]),a(h,{"table-label":`Slots`,data:e.dataSlots,columns:[`name`,`description`]},null,8,[`data`]),a(g,{data:e.dataTranslate},null,8,[`data`]),a(_,{files:`components/ADrawer`})]),_:1},8,[`page-title`])}var J=S(K,[[`render`,q]]);export{J as default};