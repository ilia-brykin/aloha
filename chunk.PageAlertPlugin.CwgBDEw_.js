import{t as e}from"./chunk.AlohaHighlightjs.DsvtYqcF.js";import{nt as t,p as n}from"./bundle.index.WAa1Niso.js";import{Bt as r,Ft as i,Rt as a,Zt as o,tn as s}from"./chunk.vendor.H0cZuFAV.js";import{t as c}from"./chunk._plugin-vue_export-helper.BDNMzG2s.js";function l(){return{connectionCode:`import { createApp } from "vue";
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
});`}}var u={name:`PageAlertPlugin`,components:{AlohaHighlightjs:e,APageTabTitle:n,ATranslation:t},setup(){let{connectionCode:e,pluginCode:t}=l();return{connectionCode:e,pluginCode:t}}};function d(e,t,n,c,l,u){let d=s(`a-page-tab-title`),f=s(`a-translation`),p=s(`aloha-highlightjs`);return o(),a(`div`,null,[r(d,{title:`_PAGE_PLUGIN_ALERT_PAGE_TITLE_`}),r(f,{class:`a_mb_3`,tag:`h1`,"safe-html":`_PAGE_PLUGIN_ALERT_H1_`}),r(f,{class:`a_mb_3`,tag:`div`,"safe-html":`_PAGE_PLUGIN_ALERT_INTRODUCTION_`}),t[0]||=i(`hr`,{class:`a_my_5`},null,-1),r(f,{tag:`div`,"safe-html":`_PAGE_PLUGIN_ALERT_CONNECTION_`}),r(p,{code:e.connectionCode,language:`javascript`},null,8,[`code`]),t[1]||=i(`hr`,{class:`a_my_5`},null,-1),r(f,{class:`a_mt_3`,tag:`div`,"safe-html":`_PAGE_PLUGIN_ALERT_NOTES_`}),r(p,{code:e.pluginCode,language:`javascript`},null,8,[`code`]),r(f,{tag:`div`,"safe-html":`_PAGE_PLUGIN_ALERT_NOTES_AFTER_`})])}var f=c(u,[[`render`,d]]);export{f as default};