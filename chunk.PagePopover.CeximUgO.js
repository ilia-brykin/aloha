import{t as e}from"./chunk.AlohaPage.BSfHVC43.js";import{t}from"./chunk.AlohaTableCssVars.C8BUEJvV.js";import{t as n}from"./chunk.AlohaTableProps.BlCiBCEj.js";import{t as r}from"./chunk.AlohaTableTranslate.CZ7cJb8v.js";import{t as i}from"./chunk.AlohaExample.VTWuqY0j.js";import{V as a,at as o,cn as s,f as c,hn as l,mn as u,sn as d,t as f}from"./bundle.index.D-5bYXwk.js";import{Gt as p,Ht as m,Jt as h,Ut as g,Vt as _,Wt as v,_n as y,en as b,mn as x,on as S,un as C,wn as w}from"./chunk.vendor.DL09mhUf.js";function ee(){return{codeHtml:`<a-popover
  button-text="_A_POPOVER_EXAMPLE_BUTTON_"
  header="_A_POPOVER_EXAMPLE_HEADER_"
>
  <a-translation
    class="a_mb_0"
    tag="p"
    text="_A_POPOVER_EXAMPLE_TEXT_"
  />
</a-popover>`}}function T(){return{codeJs:`import {
  APopover,
  ATranslation,
} from "aloha-vue";

export default {
  components: {
    APopover,
    ATranslation,
  },
};`}}var E={name:`PagePopoverBasic`,components:{APopover:c,ATranslation:u,AlohaExample:i},setup(){let{codeHtml:e}=ee(),{codeJs:t}=T();return{codeHtml:e,codeJs:t}}};function D(e,t,n,r,i,a){let o=C(`a-translation`),s=C(`a-popover`),c=C(`aloha-example`);return S(),g(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,description:`_A_POPOVER_GROUP_BASIC_DESCRIPTION_`},{default:x(()=>[h(s,{"button-text":`_A_POPOVER_EXAMPLE_BUTTON_`,header:`_A_POPOVER_EXAMPLE_HEADER_`},{default:x(()=>[h(o,{class:`a_mb_0`,tag:`p`,text:`_A_POPOVER_EXAMPLE_TEXT_`})]),_:1})]),_:1},8,[`code-html`,`code-js`])}var O=f(E,[[`render`,D]]);function k(){return{codeHtml:`<a-popover
  button-text="_A_POPOVER_EXAMPLE_RENAME_"
  header="_A_POPOVER_EXAMPLE_RENAME_"
>
  <a-input
    v-model="name"
    label="_A_POPOVER_EXAMPLE_NAME_"
  />
  <template #footer="{ close }">
    <a-button
      class="a_btn a_btn_secondary"
      text="_A_POPOVER_EXAMPLE_CANCEL_"
      @click="close"
    />
    <a-button
      class="a_btn a_btn_primary"
      text="_A_POPOVER_EXAMPLE_SAVE_"
      @click="save(close)"
    />
  </template>
</a-popover>
<p v-if="saved">{{ saved }}</p>`}}function A(){return{codeJs:`import {
  ref,
} from "vue";

import {
  AButton,
  AInput,
  APopover,
} from "aloha-vue";

export default {
  components: {
    AButton,
    AInput,
    APopover,
  },
  setup() {
    const name = ref("Report 2026");
    const saved = ref("");
    // close() of the slot: the popover closes and the focus goes back to the button
    const save = close => {
      saved.value = name.value;
      close();
    };

    return {
      name,
      save,
      saved,
    };
  },
};`}}var j={name:`PagePopoverForm`,components:{AButton:d,AInput:o,APopover:c,AlohaExample:i},setup(){let{codeHtml:e}=k(),{codeJs:t}=A(),n=y(`Report 2026`),r=y(``);return{codeHtml:e,codeJs:t,name:n,save:e=>{r.value=n.value,e()},saved:r}}},M={key:0,class:`a_mt_3`};function N(e,t,n,r,i,a){let o=C(`a-input`),s=C(`a-button`),c=C(`a-popover`),l=C(`aloha-example`);return S(),g(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_POPOVER_GROUP_FORM_HEADER_`,description:`_A_POPOVER_GROUP_FORM_DESCRIPTION_`},{default:x(()=>[h(c,{"button-text":`_A_POPOVER_EXAMPLE_RENAME_`,header:`_A_POPOVER_EXAMPLE_RENAME_`},{footer:x(({close:t})=>[h(s,{class:`a_btn a_btn_secondary`,text:`_A_POPOVER_EXAMPLE_CANCEL_`,onClick:t},null,8,[`onClick`]),h(s,{class:`a_btn a_btn_primary`,text:`_A_POPOVER_EXAMPLE_SAVE_`,onClick:n=>e.save(t)},null,8,[`onClick`])]),default:x(()=>[h(o,{modelValue:e.name,"onUpdate:modelValue":t[0]||=t=>e.name=t,label:`_A_POPOVER_EXAMPLE_NAME_`},null,8,[`modelValue`])]),_:1}),e.saved?(S(),p(`p`,M,w(e.saved),1)):v(``,!0)]),_:1},8,[`code-html`,`code-js`])}var P=f(j,[[`render`,N]]);function F(){return{codeHtml:`<a-popover
  :has-close-button="false"
  button-text="_A_POPOVER_EXAMPLE_HOVER_BUTTON_"
  trigger="hover"
>
  <a-translation
    class="a_mb_0"
    tag="p"
    text="_A_POPOVER_EXAMPLE_HOVER_TEXT_"
  />
</a-popover>`}}function I(){return{codeJs:`import {
  APopover,
  ATranslation,
} from "aloha-vue";

export default {
  components: {
    APopover,
    ATranslation,
  },
};`}}var L={name:`PagePopoverHover`,components:{APopover:c,ATranslation:u,AlohaExample:i},setup(){let{codeHtml:e}=F(),{codeJs:t}=I();return{codeHtml:e,codeJs:t}}};function R(e,t,n,r,i,a){let o=C(`a-translation`),s=C(`a-popover`),c=C(`aloha-example`);return S(),g(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_POPOVER_GROUP_HOVER_HEADER_`,description:`_A_POPOVER_GROUP_HOVER_DESCRIPTION_`},{default:x(()=>[h(s,{"has-close-button":!1,"button-text":`_A_POPOVER_EXAMPLE_HOVER_BUTTON_`,trigger:`hover`},{default:x(()=>[h(o,{class:`a_mb_0`,tag:`p`,text:`_A_POPOVER_EXAMPLE_HOVER_TEXT_`})]),_:1})]),_:1},8,[`code-html`,`code-js`])}var z=f(L,[[`render`,R]]);function B(){return{codeHtml:`<a-popover
  button-class="a_btn a_btn_link"
  button-icon-left="ChatSquareText"
  button-text-screen-reader="_A_POPOVER_EXAMPLE_HELP_"
  button-title="_A_POPOVER_EXAMPLE_HELP_"
  header="_A_POPOVER_EXAMPLE_HELP_"
  placement="right"
>
  <a-translation
    class="a_mb_0"
    tag="p"
    text="_A_POPOVER_EXAMPLE_HELP_TEXT_"
  />
</a-popover>`}}function V(){return{codeJs:`import {
  APopover,
  ATranslation,
} from "aloha-vue";

export default {
  components: {
    APopover,
    ATranslation,
  },
};`}}var H={name:`PagePopoverIcon`,components:{APopover:c,ATranslation:u,AlohaExample:i},setup(){let{codeHtml:e}=B(),{codeJs:t}=V();return{codeHtml:e,codeJs:t}}};function U(e,t,n,r,i,a){let o=C(`a-translation`),s=C(`a-popover`),c=C(`aloha-example`);return S(),g(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_POPOVER_GROUP_ICON_HEADER_`,description:`_A_POPOVER_GROUP_ICON_DESCRIPTION_`},{default:x(()=>[h(s,{"button-class":`a_btn a_btn_link`,"button-icon-left":`ChatSquareText`,"button-text-screen-reader":`_A_POPOVER_EXAMPLE_HELP_`,"button-title":`_A_POPOVER_EXAMPLE_HELP_`,header:`_A_POPOVER_EXAMPLE_HELP_`,placement:`right`},{default:x(()=>[h(o,{class:`a_mb_0`,tag:`p`,text:`_A_POPOVER_EXAMPLE_HELP_TEXT_`})]),_:1})]),_:1},8,[`code-html`,`code-js`])}var W=f(H,[[`render`,U]]);function G(){return{codeHtml:`<a-button
  class="a_btn a_btn_outline_primary"
  text="_A_POPOVER_EXAMPLE_TOGGLE_"
  @click="isOpen = !isOpen"
/>
<a-popover
  v-model="isOpen"
  :close-on-click-outside="false"
  button-text="_A_POPOVER_EXAMPLE_BUTTON_"
  @close="lastEvent = { close: $event }"
  @open="lastEvent = { open: $event }"
>
  <a-translation
    class="a_mb_0"
    tag="p"
    text="_A_POPOVER_EXAMPLE_TEXT_"
  />
</a-popover>
<pre>v-model: {{ isOpen }}, {{ lastEvent }}</pre>`}}function K(){return{codeJs:`import {
  ref,
} from "vue";

import {
  AButton,
  APopover,
  ATranslation,
} from "aloha-vue";

export default {
  components: {
    AButton,
    APopover,
    ATranslation,
  },
  setup() {
    const isOpen = ref(false);
    // open / close get { trigger }: click, hover, close, escape, outside, focusout, api or model
    const lastEvent = ref(undefined);

    return {
      isOpen,
      lastEvent,
    };
  },
};`}}var q={name:`PagePopoverModel`,components:{AButton:d,APopover:c,ATranslation:u,AlohaExample:i},setup(){let{codeHtml:e}=G(),{codeJs:t}=K();return{codeHtml:e,codeJs:t,isOpen:y(!1),lastEvent:y(void 0)}}},J={class:`a_mt_3`};function te(e,t,n,r,i,a){let o=C(`a-button`),s=C(`a-translation`),c=C(`a-popover`),l=C(`aloha-example`);return S(),g(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_POPOVER_GROUP_MODEL_HEADER_`,description:`_A_POPOVER_GROUP_MODEL_DESCRIPTION_`},{default:x(()=>[h(o,{class:`a_mr_3 a_btn a_btn_outline_primary`,text:`_A_POPOVER_EXAMPLE_TOGGLE_`,onClick:t[0]||=t=>e.isOpen=!e.isOpen}),h(c,{modelValue:e.isOpen,"onUpdate:modelValue":t[1]||=t=>e.isOpen=t,"close-on-click-outside":!1,"button-text":`_A_POPOVER_EXAMPLE_BUTTON_`,onClose:t[2]||=t=>e.lastEvent={close:t},onOpen:t[3]||=t=>e.lastEvent={open:t}},{default:x(()=>[h(s,{class:`a_mb_0`,tag:`p`,text:`_A_POPOVER_EXAMPLE_TEXT_`})]),_:1},8,[`modelValue`]),m(`pre`,J,`v-model: `+w(e.isOpen)+`, `+w(e.lastEvent),1)]),_:1},8,[`code-html`,`code-js`])}var Y=f(q,[[`render`,te]]);function X(){return{codeHtml:`<a-popover
  button-text="_A_POPOVER_EXAMPLE_BUTTON_"
  header="_A_POPOVER_EXAMPLE_HEADER_"
>
  <a-translation
    tag="p"
    text="_A_POPOVER_EXAMPLE_TEXT_"
  />
  <a-popover
    button-class="a_btn a_btn_link"
    button-text="_A_POPOVER_EXAMPLE_HELP_"
    placement="right"
  >
    <a-translation
      class="a_mb_0"
      tag="p"
      text="_A_POPOVER_EXAMPLE_HELP_TEXT_"
    />
  </a-popover>
</a-popover>`}}function Z(){return{codeJs:`import {
  APopover,
  ATranslation,
} from "aloha-vue";

export default {
  components: {
    APopover,
    ATranslation,
  },
};`}}var Q={name:`PagePopoverNested`,components:{APopover:c,ATranslation:u,AlohaExample:i},setup(){let{codeHtml:e}=X(),{codeJs:t}=Z();return{codeHtml:e,codeJs:t}}};function ne(e,t,n,r,i,a){let o=C(`a-translation`),s=C(`a-popover`),c=C(`aloha-example`);return S(),g(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_POPOVER_GROUP_NESTED_HEADER_`,description:`_A_POPOVER_GROUP_NESTED_DESCRIPTION_`},{default:x(()=>[h(s,{"button-text":`_A_POPOVER_EXAMPLE_BUTTON_`,header:`_A_POPOVER_EXAMPLE_HEADER_`},{default:x(()=>[h(o,{tag:`p`,text:`_A_POPOVER_EXAMPLE_TEXT_`}),h(s,{"button-class":`a_btn a_btn_link`,"button-text":`_A_POPOVER_EXAMPLE_HELP_`,placement:`right`},{default:x(()=>[h(o,{class:`a_mb_0`,tag:`p`,text:`_A_POPOVER_EXAMPLE_HELP_TEXT_`})]),_:1})]),_:1})]),_:1},8,[`code-html`,`code-js`])}var re=f(Q,[[`render`,ne]]);function ie(){return{codeHtml:`<a-select
  v-model="placement"
  :data="placements"
  :deselectable="false"
  key-id="id"
  key-label="id"
  label="placement"
  type="select"
/>
<a-popover
  :placement="placement"
  button-text="_A_POPOVER_EXAMPLE_BUTTON_"
>
  <a-translation
    class="a_mb_0"
    tag="p"
    text="_A_POPOVER_EXAMPLE_TEXT_"
  />
</a-popover>`}}function ae(){return{codeJs:`import {
  ref,
} from "vue";

import {
  APlacements,
  APopover,
  ASelect,
  ATranslation,
} from "aloha-vue";

export default {
  components: {
    APopover,
    ASelect,
    ATranslation,
  },
  setup() {
    const placement = ref("top");
    // "auto…": the side with the most space
    const placements = APlacements.map(id => ({ id }));

    return {
      placement,
      placements,
    };
  },
};`}}var oe={name:`PagePopoverPlacement`,components:{APopover:c,ASelect:a,ATranslation:u,AlohaExample:i},setup(){let{codeHtml:e}=ie(),{codeJs:t}=ae();return{codeHtml:e,codeJs:t,placement:y(`top`),placements:s.map(e=>({id:e}))}}},se={class:`a_columns a_columns_count_12 a_mb_3`},ce={class:`a_column a_column_6 a_column_12_touch`},le={class:`a_text_center a_py_5`};function ue(e,t,n,r,i,a){let o=C(`a-select`),s=C(`a-translation`),c=C(`a-popover`),l=C(`aloha-example`);return S(),g(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_POPOVER_GROUP_PLACEMENT_HEADER_`,description:`_A_POPOVER_GROUP_PLACEMENT_DESCRIPTION_`},{default:x(()=>[m(`div`,se,[m(`div`,ce,[h(o,{modelValue:e.placement,"onUpdate:modelValue":t[0]||=t=>e.placement=t,data:e.placements,deselectable:!1,"key-id":`id`,"key-label":`id`,label:`placement`,type:`select`},null,8,[`modelValue`,`data`])])]),m(`div`,le,[h(c,{placement:e.placement,"button-text":`_A_POPOVER_EXAMPLE_BUTTON_`},{default:x(()=>[h(s,{class:`a_mb_0`,tag:`p`,text:`_A_POPOVER_EXAMPLE_TEXT_`})]),_:1},8,[`placement`])])]),_:1},8,[`code-html`,`code-js`])}var de=f(oe,[[`render`,ue]]);function fe(){return{codeHtml:`<a-popover
  header="_A_POPOVER_EXAMPLE_NOTIFICATIONS_"
>
  <template #trigger="{ attributes }">
    <a-button
      v-bind="attributes"
      class="a_btn a_btn_primary"
      icon-left="Bell"
      text="_A_POPOVER_EXAMPLE_NOTIFICATIONS_"
    />
  </template>
  <a-translation
    class="a_mb_0"
    tag="p"
    text="_A_POPOVER_EXAMPLE_NOTIFICATIONS_TEXT_"
  />
</a-popover>`}}function pe(){return{codeJs:`import {
  AButton,
  APopover,
  ATranslation,
} from "aloha-vue";

export default {
  components: {
    AButton,
    APopover,
    ATranslation,
  },
};`}}var $={name:`PagePopoverTrigger`,components:{AButton:d,APopover:c,ATranslation:u,AlohaExample:i},setup(){let{codeHtml:e}=fe(),{codeJs:t}=pe();return{codeHtml:e,codeJs:t}}};function me(e,t,n,r,i,a){let o=C(`a-button`),s=C(`a-translation`),c=C(`a-popover`),l=C(`aloha-example`);return S(),g(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_POPOVER_GROUP_TRIGGER_HEADER_`,description:`_A_POPOVER_GROUP_TRIGGER_DESCRIPTION_`},{default:x(()=>[h(c,{header:`_A_POPOVER_EXAMPLE_NOTIFICATIONS_`},{trigger:x(({attributes:e})=>[h(o,b({class:`a_btn a_btn_primary`},e,{"icon-left":`Bell`,text:`_A_POPOVER_EXAMPLE_NOTIFICATIONS_`}),null,16)]),default:x(()=>[h(s,{class:`a_mb_0`,tag:`p`,text:`_A_POPOVER_EXAMPLE_NOTIFICATIONS_TEXT_`})]),_:1})]),_:1},8,[`code-html`,`code-js`])}var he=f($,[[`render`,me]]);function ge(){let e=_(()=>l({placeholder:`_A_POPOVER_COMPONENT_NAME_`}));return{pageTitle:_(()=>`APopover${e.value?` (${e.value})`:``}`)}}function _e(){return{dataEvents:[{name:`close`,type:`Function`,description:`_A_POPOVER_EVENTS_CLOSE_DESCRIPTION_`},{name:`open`,type:`Function`,description:`_A_POPOVER_EVENTS_OPEN_DESCRIPTION_`},{name:`update:modelValue`,type:`Function`,description:`_A_POPOVER_EVENTS_UPDATE_MODEL_VALUE_DESCRIPTION_`}],dataMethods:[{name:`close`,description:`_A_POPOVER_METHODS_CLOSE_DESCRIPTION_`},{name:`open`,description:`_A_POPOVER_METHODS_OPEN_DESCRIPTION_`},{name:`toggle`,description:`_A_POPOVER_METHODS_TOGGLE_DESCRIPTION_`}],dataProps:[{name:`always-translate`,description:`_A_TRANSLATION_PROPS_ALWAYS_TRANSLATE_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`button-attributes`,description:`_A_POPOVER_PROPS_BUTTON_ATTRIBUTES_DESCRIPTION_`,type:`Object`,default:`() => ({})`,required:!1},{name:`button-class`,description:`_A_POPOVER_PROPS_BUTTON_CLASS_DESCRIPTION_`,type:`String / Object / Array`,default:`"a_btn a_btn_secondary"`,required:!1},{name:`button-icon-left`,description:`_A_POPOVER_PROPS_BUTTON_ICON_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`button-icon-right`,description:`_A_POPOVER_PROPS_BUTTON_ICON_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`button-text`,description:`_A_POPOVER_PROPS_BUTTON_TEXT_DESCRIPTION_`,type:`String / Number`,default:void 0,required:!1},{name:`button-text-screen-reader`,description:`_A_POPOVER_PROPS_BUTTON_TEXT_SCREEN_READER_DESCRIPTION_`,type:`String / Number`,default:void 0,required:!1},{name:`button-title`,description:`_A_POPOVER_PROPS_BUTTON_TITLE_DESCRIPTION_`,type:`String / Number`,default:void 0,required:!1},{name:`close-delay`,description:`_A_POPOVER_PROPS_CLOSE_DELAY_DESCRIPTION_`,type:`Number`,default:200,required:!1},{name:`close-on-click-outside`,description:`_A_POPOVER_PROPS_CLOSE_ON_CLICK_OUTSIDE_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`close-on-focus-out`,description:`_A_POPOVER_PROPS_CLOSE_ON_FOCUS_OUT_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`disabled`,description:`_A_POPOVER_PROPS_DISABLED_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`extra`,description:`_A_GLOBAL_PROPS_EXTRA_DESCRIPTION_`,type:`Object`,default:void 0,required:!1},{name:`focus-on-open`,description:`_A_POPOVER_PROPS_FOCUS_ON_OPEN_DESCRIPTION_`,type:`String`,default:`"first"`,required:!1},{name:`has-arrow`,description:`_A_POPOVER_PROPS_HAS_ARROW_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`has-close-button`,description:`_A_POPOVER_PROPS_HAS_CLOSE_BUTTON_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`header`,description:`_A_POPOVER_PROPS_HEADER_DESCRIPTION_`,type:`String / Number`,default:void 0,required:!1},{name:`header-tag`,description:`_A_POPOVER_PROPS_HEADER_TAG_DESCRIPTION_`,type:`String`,default:`"div"`,required:!1},{name:`id`,description:`_A_GLOBAL_PROPS_ID_DESCRIPTION_`,type:`String`,default:`uniqueId("a_popover_")`,required:!1},{name:`in-body`,description:`_A_POPOVER_PROPS_IN_BODY_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`is-bottom-sheet-on-mobile`,description:`_A_POPOVER_PROPS_IS_BOTTOM_SHEET_ON_MOBILE_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`model-value`,description:`_A_POPOVER_PROPS_MODEL_VALUE_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`offset`,description:`_A_POPOVER_PROPS_OFFSET_DESCRIPTION_`,type:`Number`,default:8,required:!1},{name:`open-delay`,description:`_A_POPOVER_PROPS_OPEN_DELAY_DESCRIPTION_`,type:`Number`,default:100,required:!1},{name:`placement`,description:`_A_POPOVER_PROPS_PLACEMENT_DESCRIPTION_`,type:`String`,default:`"bottom"`,required:!1},{name:`popover-attributes`,description:`_A_POPOVER_PROPS_POPOVER_ATTRIBUTES_DESCRIPTION_`,type:`Object`,default:`() => ({})`,required:!1},{name:`popover-class`,description:`_A_POPOVER_PROPS_POPOVER_CLASS_DESCRIPTION_`,type:`String / Object / Array`,default:void 0,required:!1},{name:`popper-container-id`,description:`_A_POPOVER_PROPS_POPPER_CONTAINER_ID_DESCRIPTION_`,type:`String`,default:`"a_tooltip_container"`,required:!1},{name:`trigger`,description:`_A_POPOVER_PROPS_TRIGGER_DESCRIPTION_`,type:`String`,default:`"click"`,required:!1},{name:`use-escape`,description:`_A_POPOVER_PROPS_USE_ESCAPE_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`z-index`,description:`_A_POPOVER_PROPS_Z_INDEX_DESCRIPTION_`,type:`Number / String`,default:void 0,required:!1}],dataSlots:[{name:`button`,description:`_A_POPOVER_SLOTS_BUTTON_DESCRIPTION_`},{name:`default`,description:`_A_POPOVER_SLOTS_DEFAULT_DESCRIPTION_`},{name:`footer`,description:`_A_POPOVER_SLOTS_FOOTER_DESCRIPTION_`},{name:`header`,description:`_A_POPOVER_SLOTS_HEADER_DESCRIPTION_`},{name:`trigger`,description:`_A_POPOVER_SLOTS_TRIGGER_DESCRIPTION_`}],dataTranslate:[`_A_POPOVER_BUTTON_`,`_A_POPOVER_CLOSE_`]}}var ve={name:`PagePopover`,components:{AlohaPage:e,AlohaTableCssVars:t,AlohaTableProps:n,AlohaTableTranslate:r,ATranslation:u,PagePopoverBasic:O,PagePopoverForm:P,PagePopoverIcon:W,PagePopoverPlacement:de,PagePopoverHover:z,PagePopoverModel:Y,PagePopoverTrigger:he,PagePopoverNested:re},setup(){let{pageTitle:e}=ge(),{dataEvents:t,dataMethods:n,dataProps:r,dataSlots:i,dataTranslate:a}=_e();return{dataEvents:t,dataMethods:n,dataProps:r,dataSlots:i,dataTranslate:a,pageTitle:e}}};function ye(e,t,n,r,i,a){let o=C(`a-translation`),s=C(`page-popover-basic`),c=C(`page-popover-form`),l=C(`page-popover-icon`),u=C(`page-popover-placement`),d=C(`page-popover-hover`),f=C(`page-popover-model`),p=C(`page-popover-trigger`),m=C(`page-popover-nested`),_=C(`aloha-table-props`),v=C(`aloha-table-translate`),y=C(`aloha-table-css-vars`),b=C(`aloha-page`);return S(),g(b,{"page-title":e.pageTitle},{body:x(()=>[h(o,{tag:`p`,html:`_A_POPOVER_COMPONENT_DESCRIPTION_`}),h(o,{tag:`p`,html:`_A_POPOVER_ACCESSIBILITY_`}),h(o,{tag:`p`,html:`_A_POPOVER_ACCESSIBILITY_MOBILE_`}),h(s),h(c),h(l),h(u),h(d),h(f),h(p),h(m),h(_,{data:e.dataProps},null,8,[`data`]),h(_,{"table-label":`Events`,data:e.dataEvents,columns:[`name`,`type`,`description`]},null,8,[`data`]),h(_,{"table-label":`Slots`,data:e.dataSlots,columns:[`name`,`description`]},null,8,[`data`]),h(_,{"table-label":`Methods`,data:e.dataMethods,columns:[`name`,`description`]},null,8,[`data`]),h(v,{data:e.dataTranslate},null,8,[`data`]),h(y,{files:`components/APopover`})]),_:1},8,[`page-title`])}var be=f(ve,[[`render`,ye]]);export{be as default};