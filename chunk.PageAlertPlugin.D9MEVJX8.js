import{Dt as e,Ut as t,kt as n,wt as r,zt as i}from"./chunk.vendor.CZPox1kV.js";import{Z as a,p as o,t as s}from"./bundle.index.BmSiyQNH.js";import{t as c}from"./chunk.AlohaHighlightjs.JeygR1Fm.js";function l(){return{connectionCode:`import { createApp } from "vue";
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
});`}}var u={name:`PageAlertPlugin`,components:{AlohaHighlightjs:c,APageTabTitle:o,ATranslation:a},setup(){let{connectionCode:e,pluginCode:t}=l();return{connectionCode:e,pluginCode:t}}};function d(a,o,s,c,l,u){let d=t(`a-page-tab-title`),f=t(`a-translation`),p=t(`aloha-highlightjs`);return i(),e(`div`,null,[n(d,{title:`_PAGE_PLUGIN_ALERT_PAGE_TITLE_`}),n(f,{class:`a_mb_3`,tag:`h1`,"safe-html":`_PAGE_PLUGIN_ALERT_H1_`}),n(f,{class:`a_mb_3`,tag:`div`,"safe-html":`_PAGE_PLUGIN_ALERT_INTRODUCTION_`}),o[0]||=r(`hr`,{class:`a_my_5`},null,-1),n(f,{tag:`div`,"safe-html":`_PAGE_PLUGIN_ALERT_CONNECTION_`}),n(p,{code:a.connectionCode,language:`javascript`},null,8,[`code`]),o[1]||=r(`hr`,{class:`a_my_5`},null,-1),n(f,{class:`a_mt_3`,tag:`div`,"safe-html":`_PAGE_PLUGIN_ALERT_NOTES_`}),n(p,{code:a.pluginCode,language:`javascript`},null,8,[`code`]),n(f,{tag:`div`,"safe-html":`_PAGE_PLUGIN_ALERT_NOTES_AFTER_`})])}var f=s(u,[[`render`,d]]);export{f as default};