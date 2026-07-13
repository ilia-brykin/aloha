import{A as C,a as N}from"./chunk.AlohaExample.DW5GSCKa.js";import{A as L}from"./chunk.AlohaTableProps.BmIQgosP.js";import{c as d,N as R,d as u,_ as m,g as S,A as b}from"./bundle.index.DDik9xWE.js";import"./chunk.vendor-lodash.CWoM99Se.js";import{Y as A,W as l,aU as p,f as n,_ as O,$ as r,d as f}from"./chunk.vendor.CWr53wb5.js";import"./chunk.APageTabTitle.DSDn-bnZ.js";import"./chunk.AlohaHighlightjs.Cyb5M4zM.js";import"./chunk.ATable.5VYkybBu.js";import"./chunk.translations-ar.CE_3yjUF.js";import"./chunk.translations-de.R0YWY91X.js";import"./chunk.translations-en.DQ0Z316F.js";import"./chunk.translations-es.XN0jVhL-.js";import"./chunk.translations-fr.D5Z6d0-l.js";import"./chunk.translations-hr.BRYjTgZh.js";import"./chunk.translations-it.D6SsMt4V.js";import"./chunk.translations-ru.BfK09XlZ.js";function D(){return{codeHtml:`<div class="a_btn_group">
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
</div>`}}function B(){return{codeJs:`import {
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
};`}}const F={name:"PageConfirmAsync",components:{AButton:d,AlohaExample:C},setup(){const{changeConfirmOptions:o,closeConfirm:e,openConfirm:_}=u(),{codeHtml:t}=D(),{codeJs:a}=B(),i=()=>{o({loading:!0}),setTimeout(()=>{o({loading:!1}),e()},1200)};return{codeHtml:t,codeJs:a,openConfirmLoading:()=>{_({headerText:"_A_CONFIRM_EXAMPLE_ASYNC_MODAL_HEADER_",bodyHtml:"_A_CONFIRM_EXAMPLE_ASYNC_MODAL_BODY_",saveButtonText:"_A_CONFIRM_EXAMPLE_ASYNC_SAVE_TEXT_",save:i,stop:!0})},openConfirmTimeout:()=>{_({headerText:"_A_CONFIRM_EXAMPLE_TIMEOUT_MODAL_HEADER_",bodyHtml:"_A_CONFIRM_EXAMPLE_TIMEOUT_MODAL_BODY_",selectorClose:"#btn_confirm_timeout"}),setTimeout(()=>{R.$emit("closeModalConfirm")},2500)}}}},g={class:"a_btn_group"};function h(o,e,_,t,a,i){const s=n("a-button"),c=n("aloha-example");return A(),l(c,{"code-html":o.codeHtml,"code-js":o.codeJs,header:"_A_CONFIRM_GROUP_ASYNC_HEADER_",description:"_A_CONFIRM_GROUP_ASYNC_DESCRIPTION_",props:["loading","stop","selector-close"]},{default:p(()=>[O("div",g,[r(s,{class:"a_btn a_btn_primary",text:"_A_CONFIRM_EXAMPLE_ASYNC_BTN_",onClick:o.openConfirmLoading},null,8,["onClick"]),r(s,{class:"a_btn a_btn_secondary",id:"btn_confirm_timeout",text:"_A_CONFIRM_EXAMPLE_TIMEOUT_BTN_",onClick:o.openConfirmTimeout},null,8,["onClick"])])]),_:1},8,["code-html","code-js"])}const X=m(F,[["render",h]]);function y(){return{codeHtml:`<a-button
  class="a_btn a_btn_primary"
  text="_A_CONFIRM_EXAMPLE_BASIC_BTN_"
  @click="openConfirmLocal"
></a-button>`}}function H(){return{codeJs:`import {
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
};`}}const x={name:"PageConfirmBasic",components:{AButton:d,AlohaExample:C},setup(){const{codeHtml:o}=y(),{codeJs:e}=H(),{closeConfirm:_,openConfirm:t}=u(),a=()=>{_()};return{codeHtml:o,codeJs:e,openConfirmLocal:()=>{t({headerText:"_A_CONFIRM_EXAMPLE_BASIC_MODAL_HEADER_",bodyHtml:"_A_CONFIRM_EXAMPLE_BASIC_MODAL_BODY_",save:a})}}}};function v(o,e,_,t,a,i){const s=n("a-button"),c=n("aloha-example");return A(),l(c,{"code-html":o.codeHtml,"code-js":o.codeJs,header:"_A_CONFIRM_GROUP_BASIC_HEADER_",description:"_A_CONFIRM_GROUP_BASIC_DESCRIPTION_",props:["header-text","body-html","save"]},{default:p(()=>[r(s,{class:"a_btn a_btn_primary",text:"_A_CONFIRM_EXAMPLE_BASIC_BTN_",onClick:o.openConfirmLocal},null,8,["onClick"])]),_:1},8,["code-html","code-js"])}const U=m(x,[["render",v]]);function $(){return{codeHtml:`<a-button
  class="a_btn a_btn_primary"
  text="_A_CONFIRM_EXAMPLE_BUTTONS_BTN_"
  @click="openConfirmLocal"
></a-button>`}}function Y(){return{codeJs:`import {
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
};`}}const J={name:"PageConfirmButtons",components:{AButton:d,AlohaExample:C},setup(){const{codeHtml:o}=$(),{codeJs:e}=Y(),{closeConfirm:_,openConfirm:t}=u(),a=()=>{_()};return{codeHtml:o,codeJs:e,openConfirmLocal:()=>{t({headerText:"_A_CONFIRM_EXAMPLE_BUTTONS_MODAL_HEADER_",bodyHtml:"_A_CONFIRM_EXAMPLE_BUTTONS_MODAL_BODY_",save:a,size:"large",saveButtonText:"_A_CONFIRM_EXAMPLE_BUTTONS_SAVE_TEXT_",closeButtonText:"_A_CONFIRM_EXAMPLE_BUTTONS_CLOSE_TEXT_"})}}}};function k(o,e,_,t,a,i){const s=n("a-button"),c=n("aloha-example");return A(),l(c,{"code-html":o.codeHtml,"code-js":o.codeJs,header:"_A_CONFIRM_GROUP_BUTTONS_HEADER_",description:"_A_CONFIRM_GROUP_BUTTONS_DESCRIPTION_",props:["save-button-text","close-button-text","size"]},{default:p(()=>[r(s,{class:"a_btn a_btn_primary",text:"_A_CONFIRM_EXAMPLE_BUTTONS_BTN_",onClick:o.openConfirmLocal},null,8,["onClick"])]),_:1},8,["code-html","code-js"])}const q=m(J,[["render",k]]);function V(){return{codeHtml:`<div class="a_btn_group">
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
</div>`}}function j(){return{codeJs:`import {
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
};`}}const G={name:"PageConfirmFocus",components:{AButton:d,AlohaExample:C},setup(){const{codeHtml:o}=V(),{codeJs:e}=j(),{closeConfirm:_,openConfirm:t}=u(),a=()=>{_()};return{codeHtml:o,codeJs:e,openConfirmLocal:()=>{t({headerText:"_A_CONFIRM_EXAMPLE_FOCUS_MODAL_HEADER_",bodyHtml:"_A_CONFIRM_EXAMPLE_FOCUS_MODAL_BODY_",saveButtonText:"_A_CONFIRM_EXAMPLE_FOCUS_SAVE_TEXT_",save:a,selectorCloseIds:["btn_confirm_focus","btn_confirm_focus_secondary"]})}}}},z={class:"a_btn_group"};function w(o,e,_,t,a,i){const s=n("a-button"),c=n("aloha-example");return A(),l(c,{"code-html":o.codeHtml,"code-js":o.codeJs,header:"_A_CONFIRM_GROUP_FOCUS_HEADER_",description:"_A_CONFIRM_GROUP_FOCUS_DESCRIPTION_",props:["selector-close-ids","save-button-text"]},{default:p(()=>[O("div",z,[r(s,{class:"a_btn a_btn_primary",id:"btn_confirm_focus",text:"_A_CONFIRM_EXAMPLE_FOCUS_BTN_",onClick:o.openConfirmLocal},null,8,["onClick"]),r(s,{class:"a_btn a_btn_secondary",id:"btn_confirm_focus_secondary",text:"_A_CONFIRM_EXAMPLE_FOCUS_SECONDARY_BTN_"})])]),_:1},8,["code-html","code-js"])}const W=m(G,[["render",w]]);function Z(){const o=f(()=>S({placeholder:"_A_CONFIRM_COMPONENT_NAME_"}));return{pageTitle:f(()=>`AConfirm${o.value?` (${o.value})`:""}`)}}function K(){return{dataProps:[{name:"header-text",description:"_A_MODAL_PROPS_HEADER_TEXT_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"body-html",description:"_A_MODAL_PROPS_BODY_HTML_DESCRIPTION_",type:"String",default:'""',required:!1},{name:"save",description:"_A_MODAL_PROPS_SAVE_DESCRIPTION_",type:"Function",default:void 0,required:!1},{name:"close",description:"_A_MODAL_PROPS_CLOSE_DESCRIPTION_",type:"Function",default:void 0,required:!1},{name:"extra",description:"_A_MODAL_PROPS_EXTRA_DESCRIPTION_",type:"Object",default:void 0,required:!1},{name:"save-button-text",description:"_A_MODAL_PROPS_SAVE_BUTTON_TEXT_DESCRIPTION_",type:"String",default:"_A_MODAL_BTN_SAVE_",required:!1},{name:"close-button-text",description:"_A_MODAL_PROPS_CLOSE_BUTTON_TEXT_DESCRIPTION_",type:"String",default:"_A_MODAL_BTN_CANCEL_",required:!1},{name:"selector-close",description:"_A_MODAL_PROPS_SELECTOR_CLOSE_DESCRIPTION_",type:"String / Array",default:void 0,required:!1},{name:"selector-close-ids",description:"_A_MODAL_PROPS_SELECTOR_CLOSE_IDS_DESCRIPTION_",type:"String / Array",default:void 0,required:!1},{name:"size",description:"_A_MODAL_PROPS_SIZE_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"loading",description:"_A_MODAL_PROPS_LOADING_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"stop",description:"_A_MODAL_PROPS_STOP_DESCRIPTION_",type:"Boolean",default:void 0,required:!1}]}}const Q={name:"PageConfirm",components:{AlohaPage:N,AlohaTableProps:L,ATranslation:b,PageConfirmAsync:X,PageConfirmBasic:U,PageConfirmButtons:q,PageConfirmFocus:W},setup(){const{pageTitle:o}=Z(),{dataProps:e}=K();return{dataProps:e,pageTitle:o}}};function oo(o,e,_,t,a,i){const s=n("a-translation"),c=n("page-confirm-basic"),E=n("page-confirm-buttons"),T=n("page-confirm-focus"),M=n("page-confirm-async"),P=n("aloha-table-props"),I=n("aloha-page");return A(),l(I,{"page-title":o.pageTitle},{body:p(()=>[r(s,{tag:"p",html:"_A_CONFIRM_COMPONENT_DESCRIPTION_"}),r(c),r(E),r(T),r(M),r(P,{data:o.dataProps},null,8,["data"])]),_:1},8,["page-title"])}const Oo=m(Q,[["render",oo]]);export{Oo as default};
