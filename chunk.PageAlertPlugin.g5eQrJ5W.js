import{t as e}from"./chunk.AlohaHighlightjs.CA2juRnR.js";import{f as t,qt as n}from"./bundle.index.BaX-GPsX.js";import{$t as r,Ft as i,Rt as a,Vt as o,rn as s}from"./chunk.vendor.BvryzG0o.js";import{t as c}from"./chunk._plugin-vue_export-helper.BDNMzG2s.js";function l(){return{connectionCode:`import { createApp } from "vue";
import App from "./App.vue";
import {
  AAlertPlugin,
} from "aloha-vue";
import CheckLg from "aloha-svg/dist/js/bootstrap/CheckLg";

const app = createApp(App);

app.use(AAlertPlugin, {
  icons: {
    info: CheckLg,
  },
});

app.mount("#app");`,pluginCode:`import CheckCircleFill from "aloha-svg/dist/js/bootstrap/CheckCircleFill";
import ExclamationCircleFill from "aloha-svg/dist/js/bootstrap/ExclamationCircleFill";
import InfoCircleFill from "aloha-svg/dist/js/bootstrap/InfoCircleFill";
import XCircleFill from "aloha-svg/dist/js/bootstrap/XCircleFill";

export const alertPluginOptions = ref({
  icons: {
    success: CheckCircleFill,
    danger: XCircleFill,
    info: InfoCircleFill,
    warning: ExclamationCircleFill,
  },
});`}}var u={name:`PageAlertPlugin`,components:{AlohaHighlightjs:e,APageTabTitle:t,ATranslation:n},setup(){let{connectionCode:e,pluginCode:t}=l();return{connectionCode:e,pluginCode:t}}};function d(e,t,n,c,l,u){let d=s(`a-page-tab-title`),f=s(`a-translation`),p=s(`aloha-highlightjs`);return r(),a(`div`,null,[o(d,{title:`_PAGE_PLUGIN_ALERT_PAGE_TITLE_`}),o(f,{class:`a_mb_3`,tag:`h1`,"safe-html":`_PAGE_PLUGIN_ALERT_H1_`}),o(f,{class:`a_mb_3`,tag:`div`,"safe-html":`_PAGE_PLUGIN_ALERT_INTRODUCTION_`}),t[0]||=i(`hr`,{class:`a_my_5`},null,-1),o(f,{tag:`div`,"safe-html":`_PAGE_PLUGIN_ALERT_CONNECTION_`}),o(p,{code:e.connectionCode,language:`javascript`},null,8,[`code`]),t[1]||=i(`hr`,{class:`a_my_5`},null,-1),o(f,{class:`a_mt_3`,tag:`div`,"safe-html":`_PAGE_PLUGIN_ALERT_NOTES_`}),o(p,{code:e.pluginCode,language:`javascript`},null,8,[`code`]),o(f,{tag:`div`,"safe-html":`_PAGE_PLUGIN_ALERT_NOTES_AFTER_`})])}var f=c(u,[[`render`,d]]);export{f as default};