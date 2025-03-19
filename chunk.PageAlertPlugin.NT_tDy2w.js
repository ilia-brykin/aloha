import{A as r,_ as p}from"./bundle.index._-TX2mU8.js";import{R as c,V as e,U as n,b as a,Q as m}from"./chunk.vendor.CjhiT8UL.js";import"./chunk.vendor-lodash.DyQEPI1B.js";import{A as _}from"./chunk.APageTabTitle.CtWCFzQh.js";import{A as d}from"./chunk.AlohaHighlightjs.rF1jvLhM.js";import"./chunk.translations-ar.YNfZ53wA.js";import"./chunk.translations-de.BdlTgl_y.js";import"./chunk.translations-en.Bnu0Ksli.js";import"./chunk.translations-es.M-9LR_r9.js";import"./chunk.translations-fr.8Qh384go.js";import"./chunk.translations-hr.u4Wv8OnD.js";import"./chunk.translations-it.BuPlbyQZ.js";import"./chunk.translations-ru.QRTEonlW.js";function f(){return{connectionCode:`import { createApp } from "vue";
import App from "./App.vue";
import {
  AAlertPlugin,
} from "aloha-vue";
import CheckLg from "aloha-svg/dist/js/bootstrap/CheckLg";

const app = createApp(App);

app.use(AAlertPlugin, {
  propsDefault: {
    closable: true,
    textClose: "Close",
    type: "info",
    alertClass: "custom-alert-class",
  },
  icons: {
    info: CheckLg,
  },
});

app.mount("#app");`,pluginCode:`import CheckCircleFill from "aloha-svg/dist/js/bootstrap/CheckCircleFill";
import ExclamationCircleFill from "aloha-svg/dist/js/bootstrap/ExclamationCircleFill";
import InfoCircleFill from "aloha-svg/dist/js/bootstrap/InfoCircleFill";
import XCircleFill from "aloha-svg/dist/js/bootstrap/XCircleFill";

export const alertPluginOptions = ref({
  propsDefault: {
    alertClass: undefined,
    alertContentClass: undefined,
    btnCloseAttributes: {},
    closable: false,
    extra: undefined,
    html: undefined,
    icon: undefined,
    iconClass: undefined,
    isVisible: false,
    removeAlertOnClose: false,
    safeHtml: undefined,
    showIcon: false,
    text: undefined,
    textClose: "_ALERT_CLOSE_",
    type: "danger",
  },
  icons: {
    success: CheckCircleFill,
    danger: XCircleFill,
    info: InfoCircleFill,
    warning: ExclamationCircleFill,
  },
});`}}const u={name:"PageAlertPlugin",components:{AlohaHighlightjs:d,APageTabTitle:_,ATranslation:r},setup(){const{connectionCode:t,pluginCode:o}=f();return{connectionCode:t,pluginCode:o}}};function C(t,o,g,A,h,E){const s=a("a-page-tab-title"),l=a("a-translation"),i=a("aloha-highlightjs");return m(),c("div",null,[e(s,{title:"_PAGE_PLUGIN_ALERT_PAGE_TITLE_"}),e(l,{class:"a_mb_3",tag:"h1","safe-html":"_PAGE_PLUGIN_ALERT_H1_"}),e(l,{class:"a_mb_3",tag:"div","safe-html":"_PAGE_PLUGIN_ALERT_INTRODUCTION_"}),o[0]||(o[0]=n("hr",{class:"a_my_5"},null,-1)),e(l,{tag:"div","safe-html":"_PAGE_PLUGIN_ALERT_CONNECTION_"}),e(i,{code:t.connectionCode,language:"javascript"},null,8,["code"]),o[1]||(o[1]=n("hr",{class:"a_my_5"},null,-1)),e(l,{class:"a_mt_3",tag:"div","safe-html":"_PAGE_PLUGIN_ALERT_NOTES_"}),e(i,{code:t.pluginCode,language:"javascript"},null,8,["code"]),e(l,{tag:"div","safe-html":"_PAGE_PLUGIN_ALERT_NOTES_AFTER_"})])}const k=p(u,[["render",C]]);export{k as default};
