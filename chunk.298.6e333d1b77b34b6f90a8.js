"use strict";(self.webpackChunkaloha_vue_docs=self.webpackChunkaloha_vue_docs||[]).push([[298],{3403:(e,o,t)=>{t.d(o,{Z:()=>x});var l=t(2147);const n={class:"aloha_example"},a={key:1},s=(0,l._)("dt",{class:"a_fs_4"},"Props:",-1),i=(0,l._)("dt",{class:"a_fs_4"},"Emits:",-1),r=(0,l._)("dt",{class:"a_fs_4"},"Slots:",-1),u=(0,l._)("dt",{class:"a_fs_4"},"Exposes:",-1),d={class:"aloha_example__body"},c={class:"aloha_example__actions"},g={class:"a_btn_group"},p={key:3,class:"aloha_example__code"},h=(0,l._)("h3",{class:"aloha_example__h3"},"HTML",-1),m=(0,l._)("h3",{class:"aloha_example__h3 a_mt_3"},"JS",-1);var _=t(7079),v=t(1261),f=t(3925),y=t(9273);t(1062),v.Z.registerLanguage("javascript",f.Z),v.Z.registerLanguage("html",y.Z);const b={name:"AlohaHighlightjs",props:{autodetect:{type:Boolean,required:!1,default:!0},code:{type:String,required:!0},ignoreIllegals:{type:Boolean,required:!1,default:!0},language:{type:String,required:!1,default:""}},setup(e){const o=(0,l.iH)(e.language);(0,l.YP)((()=>e.language),(e=>{o.value=e}));const t=(0,l.Fl)((()=>e.autodetect&&!o.value)),n=(0,l.Fl)((()=>!t.value&&!v.Z.getLanguage(o.value)));return{className:(0,l.Fl)((()=>n.value?"":`hljs ${o.value}`)),highlightedCode:(0,l.Fl)((()=>n.value?(console.warn(`The language "${o.value}" you specified could not be found.`),e.code.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")):t.value?v.Z.highlightAuto(e.code).value:v.Z.highlight(e.code,{language:o.value,ignoreIllegals:e.ignoreIllegals}).value))}},render(){return(0,l.h)("pre",{},[(0,l.h)("code",{class:this.className,innerHTML:this.highlightedCode,tabindex:"0"})])}};var C=t(8180),k=t(9309),T=t(3059);const H={name:"AlohaExample",components:{AButton:_.Z,AlohaHighlightjs:b,ATranslation:C.Z},props:{codeHtml:{type:String,required:!0},codeJs:{type:String,required:!0},description:{type:String,required:!1,default:void 0},emits:{type:[String,Array],required:!1,default:void 0},exposes:{type:[String,Array],required:!1,default:void 0},header:{type:String,required:!1,default:void 0},props:{type:[String,Array],required:!1,default:void 0},slots:{type:[String,Array],required:!1,default:void 0}},setup(e){const{btnToggleCodeTitle:o,isCodeVisible:t,toggleCode:n}=function(){const e=(0,l.iH)(!1);return{btnToggleCodeTitle:(0,l.Fl)((()=>e.value?"_HIDE_SOURCE_":"_VIEW_SOURCE_")),isCodeVisible:e,toggleCode:()=>{e.value=!e.value}}}(),{copyHtmlToClipboard:a,copyJsToClipboard:s}=function(e){const o=(0,l.Vh)(e,"codeHtml"),t=(0,l.Vh)(e,"codeJs"),{addNotification:n}=(0,k.ZP)();async function a(e){try{await navigator.clipboard.writeText(e),n({text:"_COPIED_TO_CLIPBOARD_"})}catch(e){n({text:e,type:"danger"})}}return{copyHtmlToClipboard:()=>{a(o.value)},copyJsToClipboard:()=>{a(t.value)}}}(e),{emitsLocal:i,exposesLocal:r,hasAtLeastOneProperty:u,hasEmits:d,hasExposes:c,hasProps:g,hasSlots:p,propsLocal:h,slotsLocal:m}=function(e){const o=(0,l.Vh)(e,"props"),t=(0,l.Vh)(e,"emits"),n=(0,l.Vh)(e,"exposes"),a=(0,l.Vh)(e,"slots"),s=e=>(0,T.isArray)(e)?e:(0,T.isString)(e)?[e]:[],i=(0,l.Fl)((()=>s(t.value))),r=(0,l.Fl)((()=>s(n.value))),u=(0,l.Fl)((()=>s(o.value))),d=(0,l.Fl)((()=>s(a.value))),c=(0,l.Fl)((()=>u.value.length>0)),g=(0,l.Fl)((()=>i.value.length>0)),p=(0,l.Fl)((()=>d.value.length>0)),h=(0,l.Fl)((()=>r.value.length>0)),m=(0,l.Fl)((()=>c.value||g.value||h.value||p.value));return{emitsLocal:i,exposesLocal:r,hasAtLeastOneProperty:m,hasEmits:g,hasExposes:h,hasProps:c,hasSlots:p,propsLocal:u,slotsLocal:d}}(e);return{btnToggleCodeTitle:o,copyHtmlToClipboard:a,copyJsToClipboard:s,emitsLocal:i,exposesLocal:r,hasAtLeastOneProperty:u,hasEmits:d,hasExposes:c,hasProps:g,hasSlots:p,isCodeVisible:t,propsLocal:h,slotsLocal:m,toggleCode:n}}},x=(0,t(1419).Z)(H,[["render",function(e,o){const t=(0,l.up)("a-translation"),_=(0,l.up)("a-button"),v=(0,l.up)("aloha-highlightjs");return(0,l.wg)(),(0,l.iD)("div",n,[e.header?((0,l.wg)(),(0,l.j4)(t,{key:0,class:"aloha_example__h2",tag:"h2",html:e.header},null,8,["html"])):(0,l.kq)("v-if",!0),e.hasAtLeastOneProperty?((0,l.wg)(),(0,l.iD)("dl",a,[e.hasProps?((0,l.wg)(),(0,l.iD)(l.HY,{key:0},[s,((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.propsLocal,(e=>((0,l.wg)(),(0,l.iD)("dd",{key:e},[(0,l._)("strong",null,(0,l.zw)(e),1)])))),128))],64)):(0,l.kq)("v-if",!0),e.hasEmits?((0,l.wg)(),(0,l.iD)(l.HY,{key:1},[i,((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.emitsLocal,(e=>((0,l.wg)(),(0,l.iD)("dd",{key:e},[(0,l._)("strong",null,(0,l.zw)(e),1)])))),128))],64)):(0,l.kq)("v-if",!0),e.hasSlots?((0,l.wg)(),(0,l.iD)(l.HY,{key:2},[r,((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.slotsLocal,(e=>((0,l.wg)(),(0,l.iD)("dd",{key:e},[(0,l._)("strong",null,(0,l.zw)(e),1)])))),128))],64)):(0,l.kq)("v-if",!0),e.hasExposes?((0,l.wg)(),(0,l.iD)(l.HY,{key:3},[u,((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.exposesLocal,(e=>((0,l.wg)(),(0,l.iD)("dd",{key:e},[(0,l._)("strong",null,(0,l.zw)(e),1)])))),128))],64)):(0,l.kq)("v-if",!0)])):(0,l.kq)("v-if",!0),e.description?((0,l.wg)(),(0,l.j4)(t,{key:2,tag:"p",html:e.description},null,8,["html"])):(0,l.kq)("v-if",!0),(0,l._)("div",d,[(0,l.WI)(e.$slots,"default")]),(0,l._)("div",c,[(0,l._)("div",g,[(0,l.Wm)(_,{class:"a_btn a_btn_secondary","icon-left":"FiletypeJs",title:"_COPY_CODE_JS_",onClick:e.copyJsToClipboard},null,8,["onClick"]),(0,l.Wm)(_,{class:"a_btn a_btn_secondary","icon-left":"FiletypeHtml",title:"_COPY_CODE_HTML_",onClick:e.copyHtmlToClipboard},null,8,["onClick"]),(0,l.Wm)(_,{class:"a_btn a_btn_secondary","icon-left":"ChevronExpand",title:e.btnToggleCodeTitle,onClick:e.toggleCode},null,8,["title","onClick"])])]),e.isCodeVisible?((0,l.wg)(),(0,l.iD)("div",p,[h,(0,l.Wm)(v,{code:e.codeHtml,language:"html"},null,8,["code"]),m,(0,l.Wm)(v,{code:e.codeJs,language:"javascript"},null,8,["code"])])):(0,l.kq)("v-if",!0)])}]])},8455:(e,o,t)=>{t.d(o,{Z:()=>u});var l=t(2147);const n={id:"aloha_page"};var a=t(8613),s=t(8405);const i=(0,l.iH)(""),r={name:"AlohaPage",components:{APageTabTitle:{name:"APageTabTitle",props:{title:{type:String,required:!0},extra:{type:Object,required:!1,default:void 0}},setup(e){!function(e){const o=(0,l.Vh)(e,"title"),t=(0,l.Vh)(e,"extra"),{translationChanges:n}=(0,a.ZP)(),{isPlaceholderTranslate:r,getTranslatedText:u}=(0,s.ZP)(),d=(0,l.Fl)((()=>{if(n.value)return r(i.value)?u({placeholder:i.value,translationObj:a.xk}):i.value})),c=(0,l.Fl)((()=>{if(n.value)return r(o.value)?u({placeholder:o.value,translationObj:a.xk,extra:t.value}):o.value})),g=()=>{let e="";c.value?(e=c.value,d.value&&(e+=` - ${d.value}`)):d.value&&(e=d.value),document.title=e};g(),(0,l.YP)(o,(()=>{g()}))}(e)},render:()=>""}},props:{pageTitle:{type:String,required:!0}}},u=(0,t(1419).Z)(r,[["render",function(e,o){const t=(0,l.up)("a-page-tab-title");return(0,l.wg)(),(0,l.iD)("div",n,[e.pageTitle?((0,l.wg)(),(0,l.j4)(t,{key:0,title:e.pageTitle},null,8,["title"])):(0,l.kq)("v-if",!0),(0,l._)("h1",null,(0,l.zw)(e.pageTitle),1),(0,l.WI)(e.$slots,"body")])}]])},7487:(e,o,t)=>{t.r(o),t.d(o,{default:()=>p});var l=t(2147),n=t(8455),a=t(8180),s=t(3403),i=t(3022);const r={name:"PageOnHooksExample",components:{AlohaExample:s.Z},directives:{AOnHooks:i.Z},setup(){const{codeHtml:e}={codeHtml:'<div\n  v-a-on-hooks="{ created: onCreated, beforeMount: onBeforeMount, mounted: onMounted, beforeUnmount: onBeforeUnmount, unmounted: onUnmounted }"\n>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>'},{codeJs:o}={codeJs:'import AOnHooks from "aloha-vue/src/directives/AOnHooks";\n    \nexport default {\n  name: "PageOnHooksExample",\n  directives: {\n    AOnHooks,\n  },\n  setup() {\n    const onCreated = (el, binding) => {\n      console.log("created", el, binding);\n    };\n    \n    const onBeforeMount = (el, binding) => {\n      console.log("beforeMount", el, binding);\n    };\n    \n    const onMounted = (el, binding) => {\n      console.log("mounted", el, binding);\n    };\n    \n    const onBeforeUnmount = (el, binding) => {\n      console.log("beforeUnmount", el, binding);\n    }; \n    \n    const onUnmounted = (el, binding) => {\n      console.log("unmounted", el, binding);\n    };\n\n    return {\n      onBeforeMount,\n      onBeforeUnmount,\n      onCreated,\n      onMounted,\n      onUnmounted,\n    };\n  },\n};'};return{codeHtml:e,codeJs:o,onBeforeMount:(e,o)=>{console.log("beforeMount",e,o)},onBeforeUnmount:(e,o)=>{console.log("beforeUnmount",e,o)},onCreated:(e,o)=>{console.log("created",e,o)},onMounted:(e,o)=>{console.log("mounted",e,o)},onUnmounted:(e,o)=>{console.log("unmounted",e,o)}}}};var u=t(1419);const d=(0,u.Z)(r,[["render",function(e,o){const t=(0,l.up)("aloha-example"),n=(0,l.Q2)("a-on-hooks");return(0,l.wg)(),(0,l.j4)(t,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_BASIC_USAGE_"},{default:(0,l.w5)((()=>[(0,l.wy)(((0,l.wg)(),(0,l.iD)("div",null,[(0,l.Uk)("Lorem ipsum dolor sit amet, consectetur adipiscing elit.")])),[[n,{created:e.onCreated,beforeMount:e.onBeforeMount,mounted:e.onMounted,beforeUnmount:e.onBeforeUnmount,unmounted:e.onUnmounted}]])])),_:1},8,["code-html","code-js"])}]]);var c=t(8405);const g={name:"PageOnHooks",components:{AlohaPage:n.Z,ATranslation:a.Z,PageOnHooksExample:d},setup(){const{pageTitle:e}=function(){const e=(0,l.Fl)((()=>(0,c.Gd)({placeholder:"_A_ON_HOOKS_DIRECTIVE_NAME_"})));return{pageTitle:(0,l.Fl)((()=>"AOnHooks"+(e.value?` (${e.value})`:"")))}}();return{pageTitle:e}}},p=(0,u.Z)(g,[["render",function(e,o){const t=(0,l.up)("a-translation"),n=(0,l.up)("page-on-hooks-example"),a=(0,l.up)("aloha-page");return(0,l.wg)(),(0,l.j4)(a,{"page-title":e.pageTitle},{body:(0,l.w5)((()=>[(0,l.Wm)(t,{tag:"p",html:"_A_ON_HOOKS_DIRECTIVE_DESCRIPTION_"}),(0,l.Wm)(n)])),_:1},8,["page-title"])}]])}}]);
//# sourceMappingURL=chunk.298.6e333d1b77b34b6f90a8.js.map