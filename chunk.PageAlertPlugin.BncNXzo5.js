import{A as r}from"./chunk.AlohaHighlightjs.CW1W2LCP.js";import{A as p,_ as c}from"./bundle.index.Cf1gi8qq.js";import{W as m,Z as e,Y as n,e as a,V as _}from"./chunk.vendor.COYgx38y.js";import"./chunk.vendor-lodash.xyEKcfD7.js";import{A as d}from"./chunk.APageTabTitle.BRByekCu.js";import"./chunk.translations-ar.DBR-MOaP.js";import"./chunk.translations-de.Z8XtiJBs.js";import"./chunk.translations-en.DCLpFx4p.js";import"./chunk.translations-es.DLTS730v.js";import"./chunk.translations-fr.BdHBrxGj.js";import"./chunk.translations-hr.D9v73NDu.js";import"./chunk.translations-it.DEMK8Fv_.js";import"./chunk.translations-ru.B-VfWb8S.js";function f(){return{connectionCode:`import { createApp } from "vue";
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
});`}}const u={name:"PageAlertPlugin",components:{AlohaHighlightjs:r,APageTabTitle:d,ATranslation:p},setup(){const{connectionCode:t,pluginCode:o}=f();return{connectionCode:t,pluginCode:o}}};function C(t,o,g,A,h,E){const s=a("a-page-tab-title"),l=a("a-translation"),i=a("aloha-highlightjs");return _(),m("div",null,[e(s,{title:"_PAGE_PLUGIN_ALERT_PAGE_TITLE_"}),e(l,{class:"a_mb_3",tag:"h1","safe-html":"_PAGE_PLUGIN_ALERT_H1_"}),e(l,{class:"a_mb_3",tag:"div","safe-html":"_PAGE_PLUGIN_ALERT_INTRODUCTION_"}),o[0]||(o[0]=n("hr",{class:"a_my_5"},null,-1)),e(l,{tag:"div","safe-html":"_PAGE_PLUGIN_ALERT_CONNECTION_"}),e(i,{code:t.connectionCode,language:"javascript"},null,8,["code"]),o[1]||(o[1]=n("hr",{class:"a_my_5"},null,-1)),e(l,{class:"a_mt_3",tag:"div","safe-html":"_PAGE_PLUGIN_ALERT_NOTES_"}),e(i,{code:t.pluginCode,language:"javascript"},null,8,["code"]),e(l,{tag:"div","safe-html":"_PAGE_PLUGIN_ALERT_NOTES_AFTER_"})])}const k=c(u,[["render",C]]);export{k as default};
