import{t as e}from"./chunk.AlohaPage.IS3NRfGI.js";import{t}from"./chunk.AlohaTableProps.-68XY4u1.js";import{t as n}from"./chunk.AlohaTableTranslate.Bs0gql66.js";import{Bt as r,Cn as i,Ht as a,Rt as o,Ut as s,Vt as c,Wt as l,an as u,gn as d,ln as f,pn as p,qt as m,sn as h}from"./chunk.vendor.SEynj6EJ.js";import{t as g}from"./chunk.AlohaExample.CDuUdjpI.js";import{D as _,dt as v,hn as y,mn as b,sn as x,t as S}from"./bundle.index.DikcaTJ9.js";import{n as C,t as w}from"./chunk.SlotsAPI.sQJI1B9c.js";import{t as T}from"./chunk.TranslateAPI.mLehtU2h.js";function E(){return{codeHtml:`<a-button
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
};`}}var O={name:`PageDrawerBasic`,components:{AButton:x,ADrawer:v,AlohaExample:g,ATranslation:b},setup(){let{codeHtml:e}=E(),{codeJs:t}=D(),n=d(void 0);return{closeDrawer:()=>{n.value=void 0},codeHtml:e,codeJs:t,openDrawer:e=>{n.value=e},placement:n}}},k={class:`a_d_flex a_gap_2 a_flex_wrap`};function A(e,t,n,r,i,o){let l=f(`a-button`),d=f(`a-translation`),h=f(`a-drawer`),g=f(`aloha-example`);return u(),a(g,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,description:`_A_DRAWER_BASIC_DESCRIPTION_`,props:[`placement`,`selector-close-ids`]},{default:p(()=>[c(`div`,k,[m(l,{class:`a_btn a_btn_primary`,id:`btn_drawer_right`,text:`_A_DRAWER_BTN_OPEN_RIGHT_`,onClick:t[0]||=t=>e.openDrawer(`right`)}),m(l,{class:`a_btn a_btn_secondary`,id:`btn_drawer_left`,text:`_A_DRAWER_BTN_OPEN_LEFT_`,onClick:t[1]||=t=>e.openDrawer(`left`)})]),e.placement?(u(),a(h,{key:0,placement:e.placement,"selector-close-ids":`btn_drawer_${e.placement}`,close:e.closeDrawer,"header-text":`_A_DRAWER_COMPONENT_NAME_`},{modalBody:p(()=>[m(d,{tag:`p`,text:`_A_DRAWER_EXAMPLE_BODY_`})]),_:1},8,[`placement`,`selector-close-ids`,`close`])):s(``,!0)]),_:1},8,[`code-html`,`code-js`])}var j=S(O,[[`render`,A]]);function M(){return{codeHtml:`<a-button
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
};`}}var P={name:`PageDrawerForm`,components:{AButton:x,ADrawer:v,AForm:_,AlohaExample:g},setup(){let{codeHtml:e}=M(),{codeJs:t}=N(),n=[{type:`text`,id:`name`,label:`_A_FORM_EXAMPLE_NAME_`,required:!0},{type:`email`,id:`email`,label:`_A_FORM_EXAMPLE_EMAIL_`},{type:`select`,id:`country`,label:`_A_FORM_EXAMPLE_COUNTRY_`,data:[{label:`Deutschland`,value:`de`},{label:`France`,value:`fr`},{label:`Italia`,value:`it`}]},{type:`switch`,id:`notifications`,label:`_A_FORM_EXAMPLE_NOTIFICATIONS_`},{type:`textarea`,id:`notes`,label:`_A_FORM_EXAMPLE_NOTES_`}],r=d({name:`Aloha`,email:`aloha@example.com`,country:`de`,notifications:!0,notes:``}),i=d({}),a=d(!1),o=()=>{i.value={...r.value},a.value=!0},s=()=>{a.value=!1};return{closeDrawer:s,codeHtml:e,codeJs:t,dataForm:n,isDrawerVisible:a,model:r,modelLocal:i,openDrawer:o,save:()=>{r.value={...i.value},s()}}}},F={class:`a_mt_3`};function I(e,t,n,r,o,l){let d=f(`a-button`),h=f(`a-form`),g=f(`a-drawer`),_=f(`aloha-example`);return u(),a(_,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_DRAWER_FORM_HEADER_`,description:`_A_DRAWER_FORM_DESCRIPTION_`,props:[`save`,`is-footer-sticky`]},{default:p(()=>[m(d,{class:`a_btn a_btn_primary`,id:`btn_drawer_form`,text:`_A_DRAWER_BTN_EDIT_`,onClick:e.openDrawer},null,8,[`onClick`]),e.isDrawerVisible?(u(),a(g,{key:0,"selector-close-ids":`btn_drawer_form`,close:e.closeDrawer,save:e.save,"is-footer-sticky":!0,"header-text":`_A_DRAWER_FORM_HEADER_`},{modalBody:p(()=>[m(h,{modelValue:e.modelLocal,"onUpdate:modelValue":t[0]||=t=>e.modelLocal=t,data:e.dataForm},null,8,[`modelValue`,`data`])]),_:1},8,[`close`,`save`])):s(``,!0),c(`pre`,F,i(e.model),1)]),_:1},8,[`code-html`,`code-js`])}var L=S(P,[[`render`,I]]);function R(){return{codeHtml:`<!-- width: small 300px, default 400px, large 600px, xl 900px; the whole width on a narrow window -->
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
};`}}var B={name:`PageDrawerSizes`,components:{AButton:x,ADrawer:v,AlohaExample:g,ATranslation:b},setup(){let{codeHtml:e}=R(),{codeJs:t}=z(),n=[`small`,`default`,`large`,`xl`],r=d(void 0);return{closeDrawer:()=>{r.value=void 0},codeHtml:e,codeJs:t,openDrawer:e=>{r.value=e},size:r,sizes:n}}},V={class:`a_btn_group`,role:`group`};function H(e,t,n,r,i,d){let g=f(`a-button`),_=f(`a-translation`),v=f(`a-drawer`),y=f(`aloha-example`);return u(),a(y,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_DRAWER_SIZES_HEADER_`,description:`_A_DRAWER_SIZES_DESCRIPTION_`,props:[`size`]},{default:p(()=>[c(`div`,V,[(u(!0),l(o,null,h(e.sizes,t=>(u(),a(g,{class:`a_btn a_btn_outline_secondary`,id:`btn_drawer_size_${t}`,key:t,text:t,onClick:n=>e.openDrawer(t)},null,8,[`id`,`text`,`onClick`]))),128))]),e.size?(u(),a(v,{key:0,size:e.size==="default"?void 0:e.size,"selector-close-ids":`btn_drawer_size_${e.size}`,close:e.closeDrawer,"header-text":`size: ${e.size}`},{modalBody:p(()=>[m(_,{tag:`p`,text:`_A_DRAWER_EXAMPLE_BODY_`})]),_:1},8,[`size`,`selector-close-ids`,`close`,`header-text`])):s(``,!0)]),_:1},8,[`code-html`,`code-js`])}var U=S(B,[[`render`,H]]);function W(){let e=r(()=>y({placeholder:`_A_DRAWER_COMPONENT_NAME_`}));return{pageTitle:r(()=>`ADrawer${e.value?` (${e.value})`:``}`)}}function G(){let{dataProps:e}=C();return{dataProps:[...e,{name:`placement`,description:`_A_DRAWER_PROPS_PLACEMENT_DESCRIPTION_`,type:`String`,default:`"right"`,required:!1}].sort((e,t)=>e.name.localeCompare(t.name))}}var K={name:`PageDrawer`,components:{AlohaPage:e,AlohaTableProps:t,AlohaTableTranslate:n,ATranslation:b,PageDrawerBasic:j,PageDrawerForm:L,PageDrawerSizes:U},setup(){let{pageTitle:e}=W(),{dataProps:t}=G(),{dataSlots:n}=w(),{dataTranslate:r}=T();return{dataProps:t,dataSlots:n,dataTranslate:r,pageTitle:e}}};function q(e,t,n,r,i,o){let s=f(`a-translation`),c=f(`page-drawer-basic`),l=f(`page-drawer-sizes`),d=f(`page-drawer-form`),h=f(`aloha-table-props`),g=f(`aloha-table-translate`),_=f(`aloha-table-css-vars`),v=f(`aloha-page`);return u(),a(v,{"page-title":e.pageTitle},{body:p(()=>[m(s,{tag:`p`,html:`_A_DRAWER_COMPONENT_DESCRIPTION_`}),m(c),m(l),m(d),m(h,{data:e.dataProps},null,8,[`data`]),m(h,{"table-label":`Slots`,data:e.dataSlots,columns:[`name`,`description`]},null,8,[`data`]),m(g,{data:e.dataTranslate},null,8,[`data`]),m(_,{files:`components/ADrawer`})]),_:1},8,[`page-title`])}var J=S(K,[[`render`,q]]);export{J as default};