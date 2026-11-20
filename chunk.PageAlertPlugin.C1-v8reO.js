import{t as e}from"./chunk.AlohaHighlightjs.CeVpXDdh.js";import{f as t,it as n}from"./bundle.index.C6WaRsOC.js";import{Ft as r,Qt as i,Rt as a,Vt as o,nn as s}from"./chunk.vendor.CTxSDDRk.js";import{t as c}from"./chunk._plugin-vue_export-helper.BDNMzG2s.js";function l(){return{connectionCode:`import { createApp } from "vue";
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
});`}}var u={name:`PageAlertPlugin`,components:{AlohaHighlightjs:e,APageTabTitle:t,ATranslation:n},setup(){let{connectionCode:e,pluginCode:t}=l();return{connectionCode:e,pluginCode:t}}};function d(e,t,n,c,l,u){let d=s(`a-page-tab-title`),f=s(`a-translation`),p=s(`aloha-highlightjs`);return i(),a(`div`,null,[o(d,{title:`_PAGE_PLUGIN_ALERT_PAGE_TITLE_`}),o(f,{class:`a_mb_3`,tag:`h1`,"safe-html":`_PAGE_PLUGIN_ALERT_H1_`}),o(f,{class:`a_mb_3`,tag:`div`,"safe-html":`_PAGE_PLUGIN_ALERT_INTRODUCTION_`}),t[0]||=r(`hr`,{class:`a_my_5`},null,-1),o(f,{tag:`div`,"safe-html":`_PAGE_PLUGIN_ALERT_CONNECTION_`}),o(p,{code:e.connectionCode,language:`javascript`},null,8,[`code`]),t[1]||=r(`hr`,{class:`a_my_5`},null,-1),o(f,{class:`a_mt_3`,tag:`div`,"safe-html":`_PAGE_PLUGIN_ALERT_NOTES_`}),o(p,{code:e.pluginCode,language:`javascript`},null,8,[`code`]),o(f,{tag:`div`,"safe-html":`_PAGE_PLUGIN_ALERT_NOTES_AFTER_`})])}var f=c(u,[[`render`,d]]);export{f as default};