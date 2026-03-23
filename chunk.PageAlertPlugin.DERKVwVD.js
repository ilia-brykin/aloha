import{A as r}from"./chunk.AlohaHighlightjs.CqftpDCI.js";import{A as p,_ as c}from"./bundle.index.DaWeoMpR.js";import{W as m,Y as _,_ as e,Z as n,e as a}from"./chunk.vendor.7qYoMuVo.js";import"./chunk.vendor-lodash.H1qWA996.js";import{A as d}from"./chunk.APageTabTitle.DJ6kSNp2.js";import"./chunk.translations-ar.BVGXYuic.js";import"./chunk.translations-de.BTTkg7IT.js";import"./chunk.translations-en.B1a-0dJo.js";import"./chunk.translations-es.9uV8L16o.js";import"./chunk.translations-fr.b_PTR2hx.js";import"./chunk.translations-hr.BZQfnGWK.js";import"./chunk.translations-it.CbF6AZKa.js";import"./chunk.translations-ru.DaNQBvrb.js";function f(){return{connectionCode:`import { createApp } from "vue";
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
});`}}const u={name:"PageAlertPlugin",components:{AlohaHighlightjs:r,APageTabTitle:d,ATranslation:p},setup(){const{connectionCode:t,pluginCode:o}=f();return{connectionCode:t,pluginCode:o}}};function C(t,o,g,A,h,E){const s=a("a-page-tab-title"),l=a("a-translation"),i=a("aloha-highlightjs");return m(),_("div",null,[e(s,{title:"_PAGE_PLUGIN_ALERT_PAGE_TITLE_"}),e(l,{class:"a_mb_3",tag:"h1","safe-html":"_PAGE_PLUGIN_ALERT_H1_"}),e(l,{class:"a_mb_3",tag:"div","safe-html":"_PAGE_PLUGIN_ALERT_INTRODUCTION_"}),o[0]||(o[0]=n("hr",{class:"a_my_5"},null,-1)),e(l,{tag:"div","safe-html":"_PAGE_PLUGIN_ALERT_CONNECTION_"}),e(i,{code:t.connectionCode,language:"javascript"},null,8,["code"]),o[1]||(o[1]=n("hr",{class:"a_my_5"},null,-1)),e(l,{class:"a_mt_3",tag:"div","safe-html":"_PAGE_PLUGIN_ALERT_NOTES_"}),e(i,{code:t.pluginCode,language:"javascript"},null,8,["code"]),e(l,{tag:"div","safe-html":"_PAGE_PLUGIN_ALERT_NOTES_AFTER_"})])}const k=c(u,[["render",C]]);export{k as default};
