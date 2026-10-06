import{Ct as e,Tt as t,Ut as n,kt as r,qt as i,wt as a,zt as o}from"./chunk.vendor.CZPox1kV.js";import{At as s,D as c,Vt as l,Z as u,kt as d,t as f}from"./bundle.index.BmSiyQNH.js";import{n as p,t as m}from"./chunk.AlohaExample.CD4LlhAz.js";import{t as h}from"./chunk.AlohaTableProps.Dksi7fmb.js";function g(){return{codeHtml:`<div class="a_btn_group">
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
};`}}var v={name:`PageConfirmAsync`,components:{AButton:s,AlohaExample:m},setup(){let{changeConfirmOptions:e,closeConfirm:t,openConfirm:n}=c(),{codeHtml:r}=g(),{codeJs:i}=_(),a=()=>{e({loading:!0}),setTimeout(()=>{e({loading:!1}),t()},1200)};return{codeHtml:r,codeJs:i,openConfirmLoading:()=>{n({headerText:`_A_CONFIRM_EXAMPLE_ASYNC_MODAL_HEADER_`,bodyHtml:`_A_CONFIRM_EXAMPLE_ASYNC_MODAL_BODY_`,saveButtonText:`_A_CONFIRM_EXAMPLE_ASYNC_SAVE_TEXT_`,save:a,stop:!0})},openConfirmTimeout:()=>{n({headerText:`_A_CONFIRM_EXAMPLE_TIMEOUT_MODAL_HEADER_`,bodyHtml:`_A_CONFIRM_EXAMPLE_TIMEOUT_MODAL_BODY_`,selectorClose:`#btn_confirm_timeout`}),setTimeout(()=>{l.$emit(`closeModalConfirm`)},2500)}}}},y={class:`a_btn_group`};function b(e,s,c,l,u,d){let f=n(`a-button`),p=n(`aloha-example`);return o(),t(p,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_CONFIRM_GROUP_ASYNC_HEADER_`,description:`_A_CONFIRM_GROUP_ASYNC_DESCRIPTION_`,props:[`loading`,`stop`,`selector-close`]},{default:i(()=>[a(`div`,y,[r(f,{class:`a_btn a_btn_primary`,text:`_A_CONFIRM_EXAMPLE_ASYNC_BTN_`,onClick:e.openConfirmLoading},null,8,[`onClick`]),r(f,{class:`a_btn a_btn_secondary`,id:`btn_confirm_timeout`,text:`_A_CONFIRM_EXAMPLE_TIMEOUT_BTN_`,onClick:e.openConfirmTimeout},null,8,[`onClick`])])]),_:1},8,[`code-html`,`code-js`])}var x=f(v,[[`render`,b]]);function S(){return{codeHtml:`<a-button
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
};`}}var w={name:`PageConfirmBasic`,components:{AButton:s,AlohaExample:m},setup(){let{codeHtml:e}=S(),{codeJs:t}=C(),{closeConfirm:n,openConfirm:r}=c(),i=()=>{n()};return{codeHtml:e,codeJs:t,openConfirmLocal:()=>{r({headerText:`_A_CONFIRM_EXAMPLE_BASIC_MODAL_HEADER_`,bodyHtml:`_A_CONFIRM_EXAMPLE_BASIC_MODAL_BODY_`,save:i})}}}};function T(e,a,s,c,l,u){let d=n(`a-button`),f=n(`aloha-example`);return o(),t(f,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_CONFIRM_GROUP_BASIC_HEADER_`,description:`_A_CONFIRM_GROUP_BASIC_DESCRIPTION_`,props:[`header-text`,`body-html`,`save`]},{default:i(()=>[r(d,{class:`a_btn a_btn_primary`,text:`_A_CONFIRM_EXAMPLE_BASIC_BTN_`,onClick:e.openConfirmLocal},null,8,[`onClick`])]),_:1},8,[`code-html`,`code-js`])}var E=f(w,[[`render`,T]]);function D(){return{codeHtml:`<a-button
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
};`}}var k={name:`PageConfirmButtons`,components:{AButton:s,AlohaExample:m},setup(){let{codeHtml:e}=D(),{codeJs:t}=O(),{closeConfirm:n,openConfirm:r}=c(),i=()=>{n()};return{codeHtml:e,codeJs:t,openConfirmLocal:()=>{r({headerText:`_A_CONFIRM_EXAMPLE_BUTTONS_MODAL_HEADER_`,bodyHtml:`_A_CONFIRM_EXAMPLE_BUTTONS_MODAL_BODY_`,save:i,size:`large`,saveButtonText:`_A_CONFIRM_EXAMPLE_BUTTONS_SAVE_TEXT_`,closeButtonText:`_A_CONFIRM_EXAMPLE_BUTTONS_CLOSE_TEXT_`})}}}};function A(e,a,s,c,l,u){let d=n(`a-button`),f=n(`aloha-example`);return o(),t(f,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_CONFIRM_GROUP_BUTTONS_HEADER_`,description:`_A_CONFIRM_GROUP_BUTTONS_DESCRIPTION_`,props:[`save-button-text`,`close-button-text`,`size`]},{default:i(()=>[r(d,{class:`a_btn a_btn_primary`,text:`_A_CONFIRM_EXAMPLE_BUTTONS_BTN_`,onClick:e.openConfirmLocal},null,8,[`onClick`])]),_:1},8,[`code-html`,`code-js`])}var j=f(k,[[`render`,A]]);function M(){return{codeHtml:`<div class="a_btn_group">
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
};`}}var P={name:`PageConfirmFocus`,components:{AButton:s,AlohaExample:m},setup(){let{codeHtml:e}=M(),{codeJs:t}=N(),{closeConfirm:n,openConfirm:r}=c(),i=()=>{n()};return{codeHtml:e,codeJs:t,openConfirmLocal:()=>{r({headerText:`_A_CONFIRM_EXAMPLE_FOCUS_MODAL_HEADER_`,bodyHtml:`_A_CONFIRM_EXAMPLE_FOCUS_MODAL_BODY_`,saveButtonText:`_A_CONFIRM_EXAMPLE_FOCUS_SAVE_TEXT_`,save:i,selectorCloseIds:[`btn_confirm_focus`,`btn_confirm_focus_secondary`]})}}}},F={class:`a_btn_group`};function I(e,s,c,l,u,d){let f=n(`a-button`),p=n(`aloha-example`);return o(),t(p,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_CONFIRM_GROUP_FOCUS_HEADER_`,description:`_A_CONFIRM_GROUP_FOCUS_DESCRIPTION_`,props:[`selector-close-ids`,`save-button-text`]},{default:i(()=>[a(`div`,F,[r(f,{class:`a_btn a_btn_primary`,id:`btn_confirm_focus`,text:`_A_CONFIRM_EXAMPLE_FOCUS_BTN_`,onClick:e.openConfirmLocal},null,8,[`onClick`]),r(f,{class:`a_btn a_btn_secondary`,id:`btn_confirm_focus_secondary`,text:`_A_CONFIRM_EXAMPLE_FOCUS_SECONDARY_BTN_`})])]),_:1},8,[`code-html`,`code-js`])}var L=f(P,[[`render`,I]]);function R(){let t=e(()=>d({placeholder:`_A_CONFIRM_COMPONENT_NAME_`}));return{pageTitle:e(()=>`AConfirm${t.value?` (${t.value})`:``}`)}}function z(){return{dataProps:[{name:`header-text`,description:`_A_MODAL_PROPS_HEADER_TEXT_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`body-html`,description:`_A_MODAL_PROPS_BODY_HTML_DESCRIPTION_`,type:`String`,default:`""`,required:!1},{name:`save`,description:`_A_MODAL_PROPS_SAVE_DESCRIPTION_`,type:`Function`,default:void 0,required:!1},{name:`close`,description:`_A_MODAL_PROPS_CLOSE_DESCRIPTION_`,type:`Function`,default:void 0,required:!1},{name:`extra`,description:`_A_MODAL_PROPS_EXTRA_DESCRIPTION_`,type:`Object`,default:void 0,required:!1},{name:`save-button-text`,description:`_A_MODAL_PROPS_SAVE_BUTTON_TEXT_DESCRIPTION_`,type:`String`,default:`_A_MODAL_BTN_SAVE_`,required:!1},{name:`close-button-text`,description:`_A_MODAL_PROPS_CLOSE_BUTTON_TEXT_DESCRIPTION_`,type:`String`,default:`_A_MODAL_BTN_CANCEL_`,required:!1},{name:`selector-close`,description:`_A_MODAL_PROPS_SELECTOR_CLOSE_DESCRIPTION_`,type:`String / Array`,default:void 0,required:!1},{name:`selector-close-ids`,description:`_A_MODAL_PROPS_SELECTOR_CLOSE_IDS_DESCRIPTION_`,type:`String / Array`,default:void 0,required:!1},{name:`size`,description:`_A_MODAL_PROPS_SIZE_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`loading`,description:`_A_MODAL_PROPS_LOADING_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`stop`,description:`_A_MODAL_PROPS_STOP_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1}]}}var B={name:`PageConfirm`,components:{AlohaPage:p,AlohaTableProps:h,ATranslation:u,PageConfirmAsync:x,PageConfirmBasic:E,PageConfirmButtons:j,PageConfirmFocus:L},setup(){let{pageTitle:e}=R(),{dataProps:t}=z();return{dataProps:t,pageTitle:e}}};function V(e,a,s,c,l,u){let d=n(`a-translation`),f=n(`page-confirm-basic`),p=n(`page-confirm-buttons`),m=n(`page-confirm-focus`),h=n(`page-confirm-async`),g=n(`aloha-table-props`),_=n(`aloha-page`);return o(),t(_,{"page-title":e.pageTitle},{body:i(()=>[r(d,{tag:`p`,html:`_A_CONFIRM_COMPONENT_DESCRIPTION_`}),r(f),r(p),r(m),r(h),r(g,{data:e.dataProps},null,8,[`data`])]),_:1},8,[`page-title`])}var H=f(B,[[`render`,V]]);export{H as default};