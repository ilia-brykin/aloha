import{t as e}from"./chunk.AlohaPage.CYlv3kxV.js";import{t}from"./chunk.AlohaTableProps.C8KqO-_J.js";import{t as n}from"./chunk.AlohaExample.BB5AqaXZ.js";import{$t as r,E as i,Jt as a,ln as o,qt as s}from"./bundle.index.as44OnM9.js";import{$t as c,Ft as l,It as u,Pt as d,Vt as f,rn as p,sn as m}from"./chunk.vendor.BvryzG0o.js";import{t as h}from"./chunk._plugin-vue_export-helper.BDNMzG2s.js";function g(){return{codeHtml:`<div class="a_btn_group">
  <a-button
    class="a_btn a_btn_primary"
    text="_A_CONFIRM_EXAMPLE_ASYNC_BTN_"
    @click="openConfirmLoading"
  ></a-button>

  <a-button
    id="btn_confirm_timeout"
    class="a_btn a_btn_secondary"
    text="_A_CONFIRM_EXAMPLE_TIMEOUT_BTN_"
    @click="openConfirmTimeout"
  ></a-button>
</div>`}}function _(){return{codeJs:`import {
  AButton,
  AConfirmAPI,
  EventBus,
} from "aloha-vue";

export default {
  name: "PageConfirmAsync",
  components: {
    AButton,
  },
  setup() {
    const {
      changeConfirmOptions,
      closeConfirm,
      openConfirm,
    } = AConfirmAPI();

    const onSave = () => {
      changeConfirmOptions({
        loading: true,
      });

      setTimeout(() => {
        changeConfirmOptions({
          loading: false,
        });
        closeConfirm();
      }, 1200);
    };

    const openConfirmLoading = () => {
      openConfirm({
        headerText: "_A_CONFIRM_EXAMPLE_ASYNC_MODAL_HEADER_",
        bodyHtml: "_A_CONFIRM_EXAMPLE_ASYNC_MODAL_BODY_",
        saveButtonText: "_A_CONFIRM_EXAMPLE_ASYNC_SAVE_TEXT_",
        save: onSave,
        stop: true,
      });
    };

    const openConfirmTimeout = () => {
      openConfirm({
        headerText: "_A_CONFIRM_EXAMPLE_TIMEOUT_MODAL_HEADER_",
        bodyHtml: "_A_CONFIRM_EXAMPLE_TIMEOUT_MODAL_BODY_",
        selectorClose: "#btn_confirm_timeout",
      });

      setTimeout(() => {
        EventBus.$emit("closeModalConfirm");
      }, 2500);
    };

    return {
      openConfirmLoading,
      openConfirmTimeout,
    };
  },
};`}}var v={name:`PageConfirmAsync`,components:{AButton:a,AlohaExample:n},setup(){let{changeConfirmOptions:e,closeConfirm:t,openConfirm:n}=i(),{codeHtml:r}=g(),{codeJs:a}=_(),s=()=>{e({loading:!0}),setTimeout(()=>{e({loading:!1}),t()},1200)};return{codeHtml:r,codeJs:a,openConfirmLoading:()=>{n({headerText:`_A_CONFIRM_EXAMPLE_ASYNC_MODAL_HEADER_`,bodyHtml:`_A_CONFIRM_EXAMPLE_ASYNC_MODAL_BODY_`,saveButtonText:`_A_CONFIRM_EXAMPLE_ASYNC_SAVE_TEXT_`,save:s,stop:!0})},openConfirmTimeout:()=>{n({headerText:`_A_CONFIRM_EXAMPLE_TIMEOUT_MODAL_HEADER_`,bodyHtml:`_A_CONFIRM_EXAMPLE_TIMEOUT_MODAL_BODY_`,selectorClose:`#btn_confirm_timeout`}),setTimeout(()=>{o.$emit(`closeModalConfirm`)},2500)}}}},y={class:`a_btn_group`};function b(e,t,n,r,i,a){let o=p(`a-button`),s=p(`aloha-example`);return c(),u(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_CONFIRM_GROUP_ASYNC_HEADER_`,description:`_A_CONFIRM_GROUP_ASYNC_DESCRIPTION_`,props:[`loading`,`stop`,`selector-close`]},{default:m(()=>[l(`div`,y,[f(o,{class:`a_btn a_btn_primary`,text:`_A_CONFIRM_EXAMPLE_ASYNC_BTN_`,onClick:e.openConfirmLoading},null,8,[`onClick`]),f(o,{class:`a_btn a_btn_secondary`,id:`btn_confirm_timeout`,text:`_A_CONFIRM_EXAMPLE_TIMEOUT_BTN_`,onClick:e.openConfirmTimeout},null,8,[`onClick`])])]),_:1},8,[`code-html`,`code-js`])}var x=h(v,[[`render`,b]]);function S(){return{codeHtml:`<a-button
  class="a_btn a_btn_primary"
  text="_A_CONFIRM_EXAMPLE_BASIC_BTN_"
  @click="openConfirmLocal"
></a-button>`}}function C(){return{codeJs:`import {
  AButton,
  AConfirmAPI,
} from "aloha-vue";

export default {
  name: "PageConfirmBasic",
  components: {
    AButton,
  },
  setup() {
    const {
      closeConfirm,
      openConfirm,
    } = AConfirmAPI();

    const onSave = () => {
      closeConfirm();
    };

    const openConfirmLocal = () => {
      openConfirm({
        headerText: "_A_CONFIRM_EXAMPLE_BASIC_MODAL_HEADER_",
        bodyHtml: "_A_CONFIRM_EXAMPLE_BASIC_MODAL_BODY_",
        save: onSave,
      });
    };

    return {
      openConfirmLocal,
    };
  },
};`}}var w={name:`PageConfirmBasic`,components:{AButton:a,AlohaExample:n},setup(){let{codeHtml:e}=S(),{codeJs:t}=C(),{closeConfirm:n,openConfirm:r}=i(),a=()=>{n()};return{codeHtml:e,codeJs:t,openConfirmLocal:()=>{r({headerText:`_A_CONFIRM_EXAMPLE_BASIC_MODAL_HEADER_`,bodyHtml:`_A_CONFIRM_EXAMPLE_BASIC_MODAL_BODY_`,save:a})}}}};function T(e,t,n,r,i,a){let o=p(`a-button`),s=p(`aloha-example`);return c(),u(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_CONFIRM_GROUP_BASIC_HEADER_`,description:`_A_CONFIRM_GROUP_BASIC_DESCRIPTION_`,props:[`header-text`,`body-html`,`save`]},{default:m(()=>[f(o,{class:`a_btn a_btn_primary`,text:`_A_CONFIRM_EXAMPLE_BASIC_BTN_`,onClick:e.openConfirmLocal},null,8,[`onClick`])]),_:1},8,[`code-html`,`code-js`])}var E=h(w,[[`render`,T]]);function D(){return{codeHtml:`<a-button
  class="a_btn a_btn_primary"
  text="_A_CONFIRM_EXAMPLE_BUTTONS_BTN_"
  @click="openConfirmLocal"
></a-button>`}}function O(){return{codeJs:`import {
  AButton,
  AConfirmAPI,
} from "aloha-vue";

export default {
  name: "PageConfirmButtons",
  components: {
    AButton,
  },
  setup() {
    const {
      closeConfirm,
      openConfirm,
    } = AConfirmAPI();

    const onArchive = () => {
      closeConfirm();
    };

    const openConfirmLocal = () => {
      openConfirm({
        headerText: "_A_CONFIRM_EXAMPLE_BUTTONS_MODAL_HEADER_",
        bodyHtml: "_A_CONFIRM_EXAMPLE_BUTTONS_MODAL_BODY_",
        save: onArchive,
        size: "large",
        saveButtonText: "_A_CONFIRM_EXAMPLE_BUTTONS_SAVE_TEXT_",
        closeButtonText: "_A_CONFIRM_EXAMPLE_BUTTONS_CLOSE_TEXT_",
      });
    };

    return {
      openConfirmLocal,
    };
  },
};`}}var k={name:`PageConfirmButtons`,components:{AButton:a,AlohaExample:n},setup(){let{codeHtml:e}=D(),{codeJs:t}=O(),{closeConfirm:n,openConfirm:r}=i(),a=()=>{n()};return{codeHtml:e,codeJs:t,openConfirmLocal:()=>{r({headerText:`_A_CONFIRM_EXAMPLE_BUTTONS_MODAL_HEADER_`,bodyHtml:`_A_CONFIRM_EXAMPLE_BUTTONS_MODAL_BODY_`,save:a,size:`large`,saveButtonText:`_A_CONFIRM_EXAMPLE_BUTTONS_SAVE_TEXT_`,closeButtonText:`_A_CONFIRM_EXAMPLE_BUTTONS_CLOSE_TEXT_`})}}}};function A(e,t,n,r,i,a){let o=p(`a-button`),s=p(`aloha-example`);return c(),u(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_CONFIRM_GROUP_BUTTONS_HEADER_`,description:`_A_CONFIRM_GROUP_BUTTONS_DESCRIPTION_`,props:[`save-button-text`,`close-button-text`,`size`]},{default:m(()=>[f(o,{class:`a_btn a_btn_primary`,text:`_A_CONFIRM_EXAMPLE_BUTTONS_BTN_`,onClick:e.openConfirmLocal},null,8,[`onClick`])]),_:1},8,[`code-html`,`code-js`])}var j=h(k,[[`render`,A]]);function M(){return{codeHtml:`<div class="a_btn_group">
  <a-button
    id="btn_confirm_focus"
    class="a_btn a_btn_primary"
    text="_A_CONFIRM_EXAMPLE_FOCUS_BTN_"
    @click="openConfirmLocal"
  ></a-button>

  <a-button
    id="btn_confirm_focus_secondary"
    class="a_btn a_btn_secondary"
    text="_A_CONFIRM_EXAMPLE_FOCUS_SECONDARY_BTN_"
  ></a-button>
</div>`}}function N(){return{codeJs:`import {
  AButton,
  AConfirmAPI,
} from "aloha-vue";

export default {
  name: "PageConfirmFocus",
  components: {
    AButton,
  },
  setup() {
    const {
      closeConfirm,
      openConfirm,
    } = AConfirmAPI();

    const onDelete = () => {
      closeConfirm();
    };

    const openConfirmLocal = () => {
      openConfirm({
        headerText: "_A_CONFIRM_EXAMPLE_FOCUS_MODAL_HEADER_",
        bodyHtml: "_A_CONFIRM_EXAMPLE_FOCUS_MODAL_BODY_",
        saveButtonText: "_A_CONFIRM_EXAMPLE_FOCUS_SAVE_TEXT_",
        save: onDelete,
        selectorCloseIds: [
          "btn_confirm_focus",
          "btn_confirm_focus_secondary",
        ],
      });
    };

    return {
      openConfirmLocal,
    };
  },
};`}}var P={name:`PageConfirmFocus`,components:{AButton:a,AlohaExample:n},setup(){let{codeHtml:e}=M(),{codeJs:t}=N(),{closeConfirm:n,openConfirm:r}=i(),a=()=>{n()};return{codeHtml:e,codeJs:t,openConfirmLocal:()=>{r({headerText:`_A_CONFIRM_EXAMPLE_FOCUS_MODAL_HEADER_`,bodyHtml:`_A_CONFIRM_EXAMPLE_FOCUS_MODAL_BODY_`,saveButtonText:`_A_CONFIRM_EXAMPLE_FOCUS_SAVE_TEXT_`,save:a,selectorCloseIds:[`btn_confirm_focus`,`btn_confirm_focus_secondary`]})}}}},F={class:`a_btn_group`};function I(e,t,n,r,i,a){let o=p(`a-button`),s=p(`aloha-example`);return c(),u(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_CONFIRM_GROUP_FOCUS_HEADER_`,description:`_A_CONFIRM_GROUP_FOCUS_DESCRIPTION_`,props:[`selector-close-ids`,`save-button-text`]},{default:m(()=>[l(`div`,F,[f(o,{class:`a_btn a_btn_primary`,id:`btn_confirm_focus`,text:`_A_CONFIRM_EXAMPLE_FOCUS_BTN_`,onClick:e.openConfirmLocal},null,8,[`onClick`]),f(o,{class:`a_btn a_btn_secondary`,id:`btn_confirm_focus_secondary`,text:`_A_CONFIRM_EXAMPLE_FOCUS_SECONDARY_BTN_`})])]),_:1},8,[`code-html`,`code-js`])}var L=h(P,[[`render`,I]]);function R(){let e=d(()=>r({placeholder:`_A_CONFIRM_COMPONENT_NAME_`}));return{pageTitle:d(()=>`AConfirm${e.value?` (${e.value})`:``}`)}}function z(){return{dataProps:[{name:`header-text`,description:`_A_MODAL_PROPS_HEADER_TEXT_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`body-html`,description:`_A_MODAL_PROPS_BODY_HTML_DESCRIPTION_`,type:`String`,default:`""`,required:!1},{name:`save`,description:`_A_MODAL_PROPS_SAVE_DESCRIPTION_`,type:`Function`,default:void 0,required:!1},{name:`close`,description:`_A_MODAL_PROPS_CLOSE_DESCRIPTION_`,type:`Function`,default:void 0,required:!1},{name:`extra`,description:`_A_MODAL_PROPS_EXTRA_DESCRIPTION_`,type:`Object`,default:void 0,required:!1},{name:`save-button-text`,description:`_A_MODAL_PROPS_SAVE_BUTTON_TEXT_DESCRIPTION_`,type:`String`,default:`_A_MODAL_BTN_SAVE_`,required:!1},{name:`close-button-text`,description:`_A_MODAL_PROPS_CLOSE_BUTTON_TEXT_DESCRIPTION_`,type:`String`,default:`_A_MODAL_BTN_CANCEL_`,required:!1},{name:`selector-close`,description:`_A_MODAL_PROPS_SELECTOR_CLOSE_DESCRIPTION_`,type:`String / Array`,default:void 0,required:!1},{name:`selector-close-ids`,description:`_A_MODAL_PROPS_SELECTOR_CLOSE_IDS_DESCRIPTION_`,type:`String / Array`,default:void 0,required:!1},{name:`size`,description:`_A_MODAL_PROPS_SIZE_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`loading`,description:`_A_MODAL_PROPS_LOADING_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`stop`,description:`_A_MODAL_PROPS_STOP_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1}]}}var B={name:`PageConfirm`,components:{AlohaPage:e,AlohaTableProps:t,ATranslation:s,PageConfirmAsync:x,PageConfirmBasic:E,PageConfirmButtons:j,PageConfirmFocus:L},setup(){let{pageTitle:e}=R(),{dataProps:t}=z();return{dataProps:t,pageTitle:e}}};function V(e,t,n,r,i,a){let o=p(`a-translation`),s=p(`page-confirm-basic`),l=p(`page-confirm-buttons`),d=p(`page-confirm-focus`),h=p(`page-confirm-async`),g=p(`aloha-table-props`),_=p(`aloha-page`);return c(),u(_,{"page-title":e.pageTitle},{body:m(()=>[f(o,{tag:`p`,html:`_A_CONFIRM_COMPONENT_DESCRIPTION_`}),f(s),f(l),f(d),f(h),f(g,{data:e.dataProps},null,8,[`data`])]),_:1},8,[`page-title`])}var H=h(B,[[`render`,V]]);export{H as default};