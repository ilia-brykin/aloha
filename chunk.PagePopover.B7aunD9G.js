import{t as e}from"./chunk.AlohaPage.BvUvrvQ4.js";import{t}from"./chunk.AlohaTableCssVars.CaYYtLZ4.js";import{t as n}from"./chunk.AlohaTableProps.BIN1mKDB.js";import{t as r}from"./chunk.AlohaTableTranslate.ZCrkGUQc.js";import{t as i}from"./chunk.AlohaExample.Bx3NX4bX.js";import{V as a,at as o,cn as s,f as c,hn as l,mn as u,sn as d,t as f}from"./bundle.index.LlT2KVEy.js";import{$t as p,Bt as m,Cn as h,Ht as g,Ut as _,Vt as v,Wt as y,an as b,gn as x,ln as S,pn as C,qt as w}from"./chunk.vendor.SEynj6EJ.js";function ee(){return{codeHtml:`<a-popover
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
};`}}var E={name:`PagePopoverBasic`,components:{APopover:c,ATranslation:u,AlohaExample:i},setup(){let{codeHtml:e}=ee(),{codeJs:t}=T();return{codeHtml:e,codeJs:t}}};function D(e,t,n,r,i,a){let o=S(`a-translation`),s=S(`a-popover`),c=S(`aloha-example`);return b(),g(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,description:`_A_POPOVER_GROUP_BASIC_DESCRIPTION_`},{default:C(()=>[w(s,{"button-text":`_A_POPOVER_EXAMPLE_BUTTON_`,header:`_A_POPOVER_EXAMPLE_HEADER_`},{default:C(()=>[w(o,{class:`a_mb_0`,tag:`p`,text:`_A_POPOVER_EXAMPLE_TEXT_`})]),_:1})]),_:1},8,[`code-html`,`code-js`])}var O=f(E,[[`render`,D]]);function k(){return{codeHtml:`<a-popover
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
};`}}var j={name:`PagePopoverForm`,components:{AButton:d,AInput:o,APopover:c,AlohaExample:i},setup(){let{codeHtml:e}=k(),{codeJs:t}=A(),n=x(`Report 2026`),r=x(``);return{codeHtml:e,codeJs:t,name:n,save:e=>{r.value=n.value,e()},saved:r}}},M={key:0,class:`a_mt_3`};function N(e,t,n,r,i,a){let o=S(`a-input`),s=S(`a-button`),c=S(`a-popover`),l=S(`aloha-example`);return b(),g(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_POPOVER_GROUP_FORM_HEADER_`,description:`_A_POPOVER_GROUP_FORM_DESCRIPTION_`},{default:C(()=>[w(c,{"button-text":`_A_POPOVER_EXAMPLE_RENAME_`,header:`_A_POPOVER_EXAMPLE_RENAME_`},{footer:C(({close:t})=>[w(s,{class:`a_btn a_btn_secondary`,text:`_A_POPOVER_EXAMPLE_CANCEL_`,onClick:t},null,8,[`onClick`]),w(s,{class:`a_btn a_btn_primary`,text:`_A_POPOVER_EXAMPLE_SAVE_`,onClick:n=>e.save(t)},null,8,[`onClick`])]),default:C(()=>[w(o,{modelValue:e.name,"onUpdate:modelValue":t[0]||=t=>e.name=t,label:`_A_POPOVER_EXAMPLE_NAME_`},null,8,[`modelValue`])]),_:1}),e.saved?(b(),y(`p`,M,h(e.saved),1)):_(``,!0)]),_:1},8,[`code-html`,`code-js`])}var P=f(j,[[`render`,N]]);function F(){return{codeHtml:`<a-popover
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
};`}}var L={name:`PagePopoverHover`,components:{APopover:c,ATranslation:u,AlohaExample:i},setup(){let{codeHtml:e}=F(),{codeJs:t}=I();return{codeHtml:e,codeJs:t}}};function R(e,t,n,r,i,a){let o=S(`a-translation`),s=S(`a-popover`),c=S(`aloha-example`);return b(),g(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_POPOVER_GROUP_HOVER_HEADER_`,description:`_A_POPOVER_GROUP_HOVER_DESCRIPTION_`},{default:C(()=>[w(s,{"has-close-button":!1,"button-text":`_A_POPOVER_EXAMPLE_HOVER_BUTTON_`,trigger:`hover`},{default:C(()=>[w(o,{class:`a_mb_0`,tag:`p`,text:`_A_POPOVER_EXAMPLE_HOVER_TEXT_`})]),_:1})]),_:1},8,[`code-html`,`code-js`])}var z=f(L,[[`render`,R]]);function B(){return{codeHtml:`<a-popover
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
};`}}var H={name:`PagePopoverIcon`,components:{APopover:c,ATranslation:u,AlohaExample:i},setup(){let{codeHtml:e}=B(),{codeJs:t}=V();return{codeHtml:e,codeJs:t}}};function U(e,t,n,r,i,a){let o=S(`a-translation`),s=S(`a-popover`),c=S(`aloha-example`);return b(),g(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_POPOVER_GROUP_ICON_HEADER_`,description:`_A_POPOVER_GROUP_ICON_DESCRIPTION_`},{default:C(()=>[w(s,{"button-class":`a_btn a_btn_link`,"button-icon-left":`ChatSquareText`,"button-text-screen-reader":`_A_POPOVER_EXAMPLE_HELP_`,"button-title":`_A_POPOVER_EXAMPLE_HELP_`,header:`_A_POPOVER_EXAMPLE_HELP_`,placement:`right`},{default:C(()=>[w(o,{class:`a_mb_0`,tag:`p`,text:`_A_POPOVER_EXAMPLE_HELP_TEXT_`})]),_:1})]),_:1},8,[`code-html`,`code-js`])}var W=f(H,[[`render`,U]]);function G(){return{codeHtml:`<a-button
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
};`}}var q={name:`PagePopoverModel`,components:{AButton:d,APopover:c,ATranslation:u,AlohaExample:i},setup(){let{codeHtml:e}=G(),{codeJs:t}=K();return{codeHtml:e,codeJs:t,isOpen:x(!1),lastEvent:x(void 0)}}},J={class:`a_mt_3`};function te(e,t,n,r,i,a){let o=S(`a-button`),s=S(`a-translation`),c=S(`a-popover`),l=S(`aloha-example`);return b(),g(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_POPOVER_GROUP_MODEL_HEADER_`,description:`_A_POPOVER_GROUP_MODEL_DESCRIPTION_`},{default:C(()=>[w(o,{class:`a_mr_3 a_btn a_btn_outline_primary`,text:`_A_POPOVER_EXAMPLE_TOGGLE_`,onClick:t[0]||=t=>e.isOpen=!e.isOpen}),w(c,{modelValue:e.isOpen,"onUpdate:modelValue":t[1]||=t=>e.isOpen=t,"close-on-click-outside":!1,"button-text":`_A_POPOVER_EXAMPLE_BUTTON_`,onClose:t[2]||=t=>e.lastEvent={close:t},onOpen:t[3]||=t=>e.lastEvent={open:t}},{default:C(()=>[w(s,{class:`a_mb_0`,tag:`p`,text:`_A_POPOVER_EXAMPLE_TEXT_`})]),_:1},8,[`modelValue`]),v(`pre`,J,`v-model: `+h(e.isOpen)+`, `+h(e.lastEvent),1)]),_:1},8,[`code-html`,`code-js`])}var Y=f(q,[[`render`,te]]);function X(){return{codeHtml:`<a-popover
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
};`}}var Q={name:`PagePopoverNested`,components:{APopover:c,ATranslation:u,AlohaExample:i},setup(){let{codeHtml:e}=X(),{codeJs:t}=Z();return{codeHtml:e,codeJs:t}}};function ne(e,t,n,r,i,a){let o=S(`a-translation`),s=S(`a-popover`),c=S(`aloha-example`);return b(),g(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_POPOVER_GROUP_NESTED_HEADER_`,description:`_A_POPOVER_GROUP_NESTED_DESCRIPTION_`},{default:C(()=>[w(s,{"button-text":`_A_POPOVER_EXAMPLE_BUTTON_`,header:`_A_POPOVER_EXAMPLE_HEADER_`},{default:C(()=>[w(o,{tag:`p`,text:`_A_POPOVER_EXAMPLE_TEXT_`}),w(s,{"button-class":`a_btn a_btn_link`,"button-text":`_A_POPOVER_EXAMPLE_HELP_`,placement:`right`},{default:C(()=>[w(o,{class:`a_mb_0`,tag:`p`,text:`_A_POPOVER_EXAMPLE_HELP_TEXT_`})]),_:1})]),_:1})]),_:1},8,[`code-html`,`code-js`])}var re=f(Q,[[`render`,ne]]);function ie(){return{codeHtml:`<a-select
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
};`}}var oe={name:`PagePopoverPlacement`,components:{APopover:c,ASelect:a,ATranslation:u,AlohaExample:i},setup(){let{codeHtml:e}=ie(),{codeJs:t}=ae();return{codeHtml:e,codeJs:t,placement:x(`top`),placements:s.map(e=>({id:e}))}}},se={class:`a_columns a_columns_count_12 a_mb_3`},ce={class:`a_column a_column_6 a_column_12_touch`},le={class:`a_text_center a_py_5`};function ue(e,t,n,r,i,a){let o=S(`a-select`),s=S(`a-translation`),c=S(`a-popover`),l=S(`aloha-example`);return b(),g(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_POPOVER_GROUP_PLACEMENT_HEADER_`,description:`_A_POPOVER_GROUP_PLACEMENT_DESCRIPTION_`},{default:C(()=>[v(`div`,se,[v(`div`,ce,[w(o,{modelValue:e.placement,"onUpdate:modelValue":t[0]||=t=>e.placement=t,data:e.placements,deselectable:!1,"key-id":`id`,"key-label":`id`,label:`placement`,type:`select`},null,8,[`modelValue`,`data`])])]),v(`div`,le,[w(c,{placement:e.placement,"button-text":`_A_POPOVER_EXAMPLE_BUTTON_`},{default:C(()=>[w(s,{class:`a_mb_0`,tag:`p`,text:`_A_POPOVER_EXAMPLE_TEXT_`})]),_:1},8,[`placement`])])]),_:1},8,[`code-html`,`code-js`])}var de=f(oe,[[`render`,ue]]);function fe(){return{codeHtml:`<a-popover
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
};`}}var $={name:`PagePopoverTrigger`,components:{AButton:d,APopover:c,ATranslation:u,AlohaExample:i},setup(){let{codeHtml:e}=fe(),{codeJs:t}=pe();return{codeHtml:e,codeJs:t}}};function me(e,t,n,r,i,a){let o=S(`a-button`),s=S(`a-translation`),c=S(`a-popover`),l=S(`aloha-example`);return b(),g(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_POPOVER_GROUP_TRIGGER_HEADER_`,description:`_A_POPOVER_GROUP_TRIGGER_DESCRIPTION_`},{default:C(()=>[w(c,{header:`_A_POPOVER_EXAMPLE_NOTIFICATIONS_`},{trigger:C(({attributes:e})=>[w(o,p({class:`a_btn a_btn_primary`},e,{"icon-left":`Bell`,text:`_A_POPOVER_EXAMPLE_NOTIFICATIONS_`}),null,16)]),default:C(()=>[w(s,{class:`a_mb_0`,tag:`p`,text:`_A_POPOVER_EXAMPLE_NOTIFICATIONS_TEXT_`})]),_:1})]),_:1},8,[`code-html`,`code-js`])}var he=f($,[[`render`,me]]);function ge(){let e=m(()=>l({placeholder:`_A_POPOVER_COMPONENT_NAME_`}));return{pageTitle:m(()=>`APopover${e.value?` (${e.value})`:``}`)}}function _e(){return{dataEvents:[{name:`close`,type:`Function`,description:`_A_POPOVER_EVENTS_CLOSE_DESCRIPTION_`},{name:`open`,type:`Function`,description:`_A_POPOVER_EVENTS_OPEN_DESCRIPTION_`},{name:`update:modelValue`,type:`Function`,description:`_A_POPOVER_EVENTS_UPDATE_MODEL_VALUE_DESCRIPTION_`}],dataMethods:[{name:`close`,description:`_A_POPOVER_METHODS_CLOSE_DESCRIPTION_`},{name:`open`,description:`_A_POPOVER_METHODS_OPEN_DESCRIPTION_`},{name:`toggle`,description:`_A_POPOVER_METHODS_TOGGLE_DESCRIPTION_`}],dataProps:[{name:`always-translate`,description:`_A_TRANSLATION_PROPS_ALWAYS_TRANSLATE_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`button-attributes`,description:`_A_POPOVER_PROPS_BUTTON_ATTRIBUTES_DESCRIPTION_`,type:`Object`,default:`() => ({})`,required:!1},{name:`button-class`,description:`_A_POPOVER_PROPS_BUTTON_CLASS_DESCRIPTION_`,type:`String / Object / Array`,default:`"a_btn a_btn_secondary"`,required:!1},{name:`button-icon-left`,description:`_A_POPOVER_PROPS_BUTTON_ICON_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`button-icon-right`,description:`_A_POPOVER_PROPS_BUTTON_ICON_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`button-text`,description:`_A_POPOVER_PROPS_BUTTON_TEXT_DESCRIPTION_`,type:`String / Number`,default:void 0,required:!1},{name:`button-text-screen-reader`,description:`_A_POPOVER_PROPS_BUTTON_TEXT_SCREEN_READER_DESCRIPTION_`,type:`String / Number`,default:void 0,required:!1},{name:`button-title`,description:`_A_POPOVER_PROPS_BUTTON_TITLE_DESCRIPTION_`,type:`String / Number`,default:void 0,required:!1},{name:`close-delay`,description:`_A_POPOVER_PROPS_CLOSE_DELAY_DESCRIPTION_`,type:`Number`,default:200,required:!1},{name:`close-on-click-outside`,description:`_A_POPOVER_PROPS_CLOSE_ON_CLICK_OUTSIDE_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`close-on-focus-out`,description:`_A_POPOVER_PROPS_CLOSE_ON_FOCUS_OUT_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`disabled`,description:`_A_POPOVER_PROPS_DISABLED_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`extra`,description:`_A_GLOBAL_PROPS_EXTRA_DESCRIPTION_`,type:`Object`,default:void 0,required:!1},{name:`focus-on-open`,description:`_A_POPOVER_PROPS_FOCUS_ON_OPEN_DESCRIPTION_`,type:`String`,default:`"first"`,required:!1},{name:`has-arrow`,description:`_A_POPOVER_PROPS_HAS_ARROW_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`has-close-button`,description:`_A_POPOVER_PROPS_HAS_CLOSE_BUTTON_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`header`,description:`_A_POPOVER_PROPS_HEADER_DESCRIPTION_`,type:`String / Number`,default:void 0,required:!1},{name:`header-tag`,description:`_A_POPOVER_PROPS_HEADER_TAG_DESCRIPTION_`,type:`String`,default:`"div"`,required:!1},{name:`id`,description:`_A_GLOBAL_PROPS_ID_DESCRIPTION_`,type:`String`,default:`uniqueId("a_popover_")`,required:!1},{name:`in-body`,description:`_A_POPOVER_PROPS_IN_BODY_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`is-bottom-sheet-on-mobile`,description:`_A_POPOVER_PROPS_IS_BOTTOM_SHEET_ON_MOBILE_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`is-close-by-button-invisible-in-viewport`,description:`_A_GLOBAL_PROPS_IS_CLOSE_BY_BUTTON_INVISIBLE_IN_VIEWPORT_DESCRIPTION_`,type:`Boolean`,default:`true`,required:!1},{name:`model-value`,description:`_A_POPOVER_PROPS_MODEL_VALUE_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`offset`,description:`_A_POPOVER_PROPS_OFFSET_DESCRIPTION_`,type:`Number`,default:8,required:!1},{name:`open-delay`,description:`_A_POPOVER_PROPS_OPEN_DELAY_DESCRIPTION_`,type:`Number`,default:100,required:!1},{name:`placement`,description:`_A_POPOVER_PROPS_PLACEMENT_DESCRIPTION_`,type:`String`,default:`"bottom"`,required:!1},{name:`popover-attributes`,description:`_A_POPOVER_PROPS_POPOVER_ATTRIBUTES_DESCRIPTION_`,type:`Object`,default:`() => ({})`,required:!1},{name:`popover-class`,description:`_A_POPOVER_PROPS_POPOVER_CLASS_DESCRIPTION_`,type:`String / Object / Array`,default:void 0,required:!1},{name:`popper-container-id`,description:`_A_POPOVER_PROPS_POPPER_CONTAINER_ID_DESCRIPTION_`,type:`String`,default:`"a_tooltip_container"`,required:!1},{name:`trigger`,description:`_A_POPOVER_PROPS_TRIGGER_DESCRIPTION_`,type:`String`,default:`"click"`,required:!1},{name:`use-escape`,description:`_A_POPOVER_PROPS_USE_ESCAPE_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`z-index`,description:`_A_POPOVER_PROPS_Z_INDEX_DESCRIPTION_`,type:`Number / String`,default:void 0,required:!1}],dataSlots:[{name:`button`,description:`_A_POPOVER_SLOTS_BUTTON_DESCRIPTION_`},{name:`default`,description:`_A_POPOVER_SLOTS_DEFAULT_DESCRIPTION_`},{name:`footer`,description:`_A_POPOVER_SLOTS_FOOTER_DESCRIPTION_`},{name:`header`,description:`_A_POPOVER_SLOTS_HEADER_DESCRIPTION_`},{name:`trigger`,description:`_A_POPOVER_SLOTS_TRIGGER_DESCRIPTION_`}],dataTranslate:[`_A_POPOVER_BUTTON_`,`_A_POPOVER_CLOSE_`]}}var ve={name:`PagePopover`,components:{AlohaPage:e,AlohaTableCssVars:t,AlohaTableProps:n,AlohaTableTranslate:r,ATranslation:u,PagePopoverBasic:O,PagePopoverForm:P,PagePopoverIcon:W,PagePopoverPlacement:de,PagePopoverHover:z,PagePopoverModel:Y,PagePopoverTrigger:he,PagePopoverNested:re},setup(){let{pageTitle:e}=ge(),{dataEvents:t,dataMethods:n,dataProps:r,dataSlots:i,dataTranslate:a}=_e();return{dataEvents:t,dataMethods:n,dataProps:r,dataSlots:i,dataTranslate:a,pageTitle:e}}};function ye(e,t,n,r,i,a){let o=S(`a-translation`),s=S(`page-popover-basic`),c=S(`page-popover-form`),l=S(`page-popover-icon`),u=S(`page-popover-placement`),d=S(`page-popover-hover`),f=S(`page-popover-model`),p=S(`page-popover-trigger`),m=S(`page-popover-nested`),h=S(`aloha-table-props`),_=S(`aloha-table-translate`),v=S(`aloha-table-css-vars`),y=S(`aloha-page`);return b(),g(y,{"page-title":e.pageTitle},{body:C(()=>[w(o,{tag:`p`,html:`_A_POPOVER_COMPONENT_DESCRIPTION_`}),w(o,{tag:`p`,html:`_A_POPOVER_ACCESSIBILITY_`}),w(o,{tag:`p`,html:`_A_POPOVER_ACCESSIBILITY_MOBILE_`}),w(s),w(c),w(l),w(u),w(d),w(f),w(p),w(m),w(h,{data:e.dataProps},null,8,[`data`]),w(h,{"table-label":`Events`,data:e.dataEvents,columns:[`name`,`type`,`description`]},null,8,[`data`]),w(h,{"table-label":`Slots`,data:e.dataSlots,columns:[`name`,`description`]},null,8,[`data`]),w(h,{"table-label":`Methods`,data:e.dataMethods,columns:[`name`,`description`]},null,8,[`data`]),w(_,{data:e.dataTranslate},null,8,[`data`]),w(v,{files:`components/APopover`})]),_:1},8,[`page-title`])}var be=f(ve,[[`render`,ye]]);export{be as default};