"use strict";(self.webpackChunkaloha_vue_docs=self.webpackChunkaloha_vue_docs||[]).push([[451],{1912:(e,o,n)=>{n.d(o,{A:()=>b});var t=n(6365);const l={class:"aloha_example"},a={key:1},s=(0,t.Lk)("dt",{class:"a_fs_4"},"Props:",-1),i=(0,t.Lk)("dt",{class:"a_fs_4"},"Emits:",-1),r=(0,t.Lk)("dt",{class:"a_fs_4"},"Slots:",-1),u=(0,t.Lk)("dt",{class:"a_fs_4"},"Exposes:",-1),d={class:"aloha_example__body"},c={class:"aloha_example__actions"},g={class:"a_btn_group"},p={key:3,class:"aloha_example__code"},h=(0,t.Lk)("h3",{class:"aloha_example__h3"},"HTML",-1),m=(0,t.Lk)("h3",{class:"aloha_example__h3 a_mt_3"},"JS",-1);var v=n(9791),_=n(8514),f=n(7791),C=n(4991),E=n(2543);const y={name:"AlohaExample",components:{AButton:v.A,AlohaHighlightjs:_.A,ATranslation:f.A},props:{code:{type:String,required:!1,default:void 0},codeHtml:{type:String,required:!1,default:void 0},codeJs:{type:String,required:!1,default:void 0},description:{type:String,required:!1,default:void 0},emits:{type:[String,Array],required:!1,default:void 0},exposes:{type:[String,Array],required:!1,default:void 0},header:{type:String,required:!1,default:void 0},isCodeVisibleDefault:{type:Boolean,required:!1,default:!1},props:{type:[String,Array],required:!1,default:void 0},slots:{type:[String,Array],required:!1,default:void 0}},setup(e){const{btnToggleCodeTitle:o,isCodeVisible:n,toggleCode:l}=function(e){const o=(0,t.lW)(e,"isCodeVisibleDefault"),n=(0,t.KR)(o.value);return{btnToggleCodeTitle:(0,t.EW)((()=>n.value?"_HIDE_SOURCE_":"_VIEW_SOURCE_")),isCodeVisible:n,toggleCode:()=>{n.value=!n.value}}}(e),{copyHtmlToClipboard:a,copyJsToClipboard:s}=function(e){const o=(0,t.lW)(e,"codeHtml"),n=(0,t.lW)(e,"codeJs"),{addNotification:l}=(0,C.Ay)();async function a(e){try{await navigator.clipboard.writeText(e),l({text:"_COPIED_TO_CLIPBOARD_"})}catch(e){l({text:e,type:"danger"})}}return{copyHtmlToClipboard:()=>{a(o.value)},copyJsToClipboard:()=>{a(n.value)}}}(e),{emitsLocal:i,exposesLocal:r,hasAtLeastOneProperty:u,hasEmits:d,hasExposes:c,hasProps:g,hasSlots:p,propsLocal:h,slotsLocal:m}=function(e){const o=(0,t.lW)(e,"props"),n=(0,t.lW)(e,"emits"),l=(0,t.lW)(e,"exposes"),a=(0,t.lW)(e,"slots"),s=e=>(0,E.isArray)(e)?e:(0,E.isString)(e)?[e]:[],i=(0,t.EW)((()=>s(n.value))),r=(0,t.EW)((()=>s(l.value))),u=(0,t.EW)((()=>s(o.value))),d=(0,t.EW)((()=>s(a.value))),c=(0,t.EW)((()=>u.value.length>0)),g=(0,t.EW)((()=>i.value.length>0)),p=(0,t.EW)((()=>d.value.length>0)),h=(0,t.EW)((()=>r.value.length>0)),m=(0,t.EW)((()=>c.value||g.value||h.value||p.value));return{emitsLocal:i,exposesLocal:r,hasAtLeastOneProperty:m,hasEmits:g,hasExposes:h,hasProps:c,hasSlots:p,propsLocal:u,slotsLocal:d}}(e);return{btnToggleCodeTitle:o,copyHtmlToClipboard:a,copyJsToClipboard:s,emitsLocal:i,exposesLocal:r,hasAtLeastOneProperty:u,hasEmits:d,hasExposes:c,hasProps:g,hasSlots:p,isCodeVisible:n,propsLocal:h,slotsLocal:m,toggleCode:l}}},b=(0,n(6262).A)(y,[["render",function(e,o){const n=(0,t.g2)("a-translation"),v=(0,t.g2)("a-button"),_=(0,t.g2)("aloha-highlightjs");return(0,t.uX)(),(0,t.CE)("div",l,[e.header?((0,t.uX)(),(0,t.Wv)(n,{key:0,class:"aloha_example__h2",tag:"h2",html:e.header},null,8,["html"])):(0,t.Q3)("v-if",!0),e.hasAtLeastOneProperty?((0,t.uX)(),(0,t.CE)("dl",a,[e.hasProps?((0,t.uX)(),(0,t.CE)(t.FK,{key:0},[s,((0,t.uX)(!0),(0,t.CE)(t.FK,null,(0,t.pI)(e.propsLocal,(e=>((0,t.uX)(),(0,t.CE)("dd",{key:e},[(0,t.Lk)("strong",null,(0,t.v_)(e),1)])))),128))],64)):(0,t.Q3)("v-if",!0),e.hasEmits?((0,t.uX)(),(0,t.CE)(t.FK,{key:1},[i,((0,t.uX)(!0),(0,t.CE)(t.FK,null,(0,t.pI)(e.emitsLocal,(e=>((0,t.uX)(),(0,t.CE)("dd",{key:e},[(0,t.Lk)("strong",null,(0,t.v_)(e),1)])))),128))],64)):(0,t.Q3)("v-if",!0),e.hasSlots?((0,t.uX)(),(0,t.CE)(t.FK,{key:2},[r,((0,t.uX)(!0),(0,t.CE)(t.FK,null,(0,t.pI)(e.slotsLocal,(e=>((0,t.uX)(),(0,t.CE)("dd",{key:e},[(0,t.Lk)("strong",null,(0,t.v_)(e),1)])))),128))],64)):(0,t.Q3)("v-if",!0),e.hasExposes?((0,t.uX)(),(0,t.CE)(t.FK,{key:3},[u,((0,t.uX)(!0),(0,t.CE)(t.FK,null,(0,t.pI)(e.exposesLocal,(e=>((0,t.uX)(),(0,t.CE)("dd",{key:e},[(0,t.Lk)("strong",null,(0,t.v_)(e),1)])))),128))],64)):(0,t.Q3)("v-if",!0)])):(0,t.Q3)("v-if",!0),e.description?((0,t.uX)(),(0,t.Wv)(n,{key:2,tag:"p",html:e.description},null,8,["html"])):(0,t.Q3)("v-if",!0),(0,t.Lk)("div",d,[(0,t.RG)(e.$slots,"default")]),(0,t.Lk)("div",c,[(0,t.Lk)("div",g,[e.codeJs?((0,t.uX)(),(0,t.Wv)(v,{key:0,class:"a_btn a_btn_secondary","icon-left":"FiletypeJs",title:"_COPY_CODE_JS_",onClick:e.copyJsToClipboard},null,8,["onClick"])):(0,t.Q3)("v-if",!0),e.codeHtml?((0,t.uX)(),(0,t.Wv)(v,{key:1,class:"a_btn a_btn_secondary","icon-left":"FiletypeHtml",title:"_COPY_CODE_HTML_",onClick:e.copyHtmlToClipboard},null,8,["onClick"])):(0,t.Q3)("v-if",!0),(0,t.bF)(v,{class:"a_btn a_btn_secondary","icon-left":"ChevronExpand",title:e.btnToggleCodeTitle,onClick:e.toggleCode},null,8,["title","onClick"])])]),e.isCodeVisible?((0,t.uX)(),(0,t.CE)("div",p,[e.code?((0,t.uX)(),(0,t.Wv)(_,{key:0,code:e.code,language:"markdown"},null,8,["code"])):(0,t.Q3)("v-if",!0),e.codeHtml?((0,t.uX)(),(0,t.CE)(t.FK,{key:1},[h,(0,t.bF)(_,{code:e.codeHtml,language:"html"},null,8,["code"])],64)):(0,t.Q3)("v-if",!0),e.codeJs?((0,t.uX)(),(0,t.CE)(t.FK,{key:2},[m,(0,t.bF)(_,{code:e.codeJs,language:"javascript"},null,8,["code"])],64)):(0,t.Q3)("v-if",!0)])):(0,t.Q3)("v-if",!0)])}]])},8310:(e,o,n)=>{n.d(o,{A:()=>i});var t=n(6365);const l={id:"aloha_page"},a=["innerHTML"],s={name:"AlohaPage",components:{APageTabTitle:n(4943).A},props:{pageTitle:{type:String,required:!0}}},i=(0,n(6262).A)(s,[["render",function(e,o){const n=(0,t.g2)("a-page-tab-title");return(0,t.uX)(),(0,t.CE)("div",l,[e.pageTitle?((0,t.uX)(),(0,t.Wv)(n,{key:0,title:e.pageTitle},null,8,["title"])):(0,t.Q3)("v-if",!0),(0,t.Lk)("h1",{innerHTML:e.pageTitle},null,8,a),(0,t.RG)(e.$slots,"body")])}]])},9516:(e,o,n)=>{n.r(o),n.d(o,{default:()=>p});var t=n(6365),l=n(8310),a=n(7791),s=n(1912),i=n(6029);const r={name:"PageOnHooksExample",components:{AlohaExample:s.A},directives:{AOnHooks:i.A},setup(){const{codeHtml:e}={codeHtml:'<div\n  v-a-on-hooks="{ created: onCreated, beforeMount: onBeforeMount, mounted: onMounted, beforeUnmount: onBeforeUnmount, unmounted: onUnmounted }"\n>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>'},{codeJs:o}={codeJs:'import AOnHooks from "aloha-vue/src/directives/AOnHooks";\n    \nexport default {\n  name: "PageOnHooksExample",\n  directives: {\n    AOnHooks,\n  },\n  setup() {\n    const onCreated = (el, binding) => {\n      console.log("created", el, binding);\n    };\n    \n    const onBeforeMount = (el, binding) => {\n      console.log("beforeMount", el, binding);\n    };\n    \n    const onMounted = (el, binding) => {\n      console.log("mounted", el, binding);\n    };\n    \n    const onBeforeUnmount = (el, binding) => {\n      console.log("beforeUnmount", el, binding);\n    }; \n    \n    const onUnmounted = (el, binding) => {\n      console.log("unmounted", el, binding);\n    };\n\n    return {\n      onBeforeMount,\n      onBeforeUnmount,\n      onCreated,\n      onMounted,\n      onUnmounted,\n    };\n  },\n};'};return{codeHtml:e,codeJs:o,onBeforeMount:(e,o)=>{console.log("beforeMount",e,o)},onBeforeUnmount:(e,o)=>{console.log("beforeUnmount",e,o)},onCreated:(e,o)=>{console.log("created",e,o)},onMounted:(e,o)=>{console.log("mounted",e,o)},onUnmounted:(e,o)=>{console.log("unmounted",e,o)}}}};var u=n(6262);const d=(0,u.A)(r,[["render",function(e,o){const n=(0,t.g2)("aloha-example"),l=(0,t.gN)("a-on-hooks");return(0,t.uX)(),(0,t.Wv)(n,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_BASIC_USAGE_"},{default:(0,t.k6)((()=>[(0,t.bo)(((0,t.uX)(),(0,t.CE)("div",null,[(0,t.eW)("Lorem ipsum dolor sit amet, consectetur adipiscing elit.")])),[[l,{created:e.onCreated,beforeMount:e.onBeforeMount,mounted:e.onMounted,beforeUnmount:e.onBeforeUnmount,unmounted:e.onUnmounted}]])])),_:1},8,["code-html","code-js"])}]]);var c=n(2187);const g={name:"PageOnHooks",components:{AlohaPage:l.A,ATranslation:a.A,PageOnHooksExample:d},setup(){const{pageTitle:e}=function(){const e=(0,t.EW)((()=>(0,c.a1)({placeholder:"_A_ON_HOOKS_DIRECTIVE_NAME_"})));return{pageTitle:(0,t.EW)((()=>"AOnHooks"+(e.value?` (${e.value})`:"")))}}();return{pageTitle:e}}},p=(0,u.A)(g,[["render",function(e,o){const n=(0,t.g2)("a-translation"),l=(0,t.g2)("page-on-hooks-example"),a=(0,t.g2)("aloha-page");return(0,t.uX)(),(0,t.Wv)(a,{"page-title":e.pageTitle},{body:(0,t.k6)((()=>[(0,t.bF)(n,{tag:"p",html:"_A_ON_HOOKS_DIRECTIVE_DESCRIPTION_"}),(0,t.bF)(n,{class:"a_mt_3",html:"_A_ON_HOOKS_DIRECTIVE_DESCRIPTION_LIST_"}),(0,t.bF)(l)])),_:1},8,["page-title"])}]])},8514:(e,o,n)=>{n.d(o,{A:()=>u});var t=n(6365),l=n(11),a=n(5603),s=n(9359),i=n(3265),r=n(2068);n(2348),l.A.registerLanguage("javascript",a.A),l.A.registerLanguage("html",s.A),l.A.registerLanguage("markdown",i.A),l.A.registerLanguage("scss",r.A);const u={name:"AlohaHighlightjs",props:{autodetect:{type:Boolean,required:!1,default:!0},code:{type:String,required:!0},ignoreIllegals:{type:Boolean,required:!1,default:!0},language:{type:String,required:!1,default:""}},setup(e){const o=(0,t.KR)(e.language);(0,t.wB)((()=>e.language),(e=>{o.value=e}));const n=(0,t.EW)((()=>e.autodetect&&!o.value)),a=(0,t.EW)((()=>!n.value&&!l.A.getLanguage(o.value)));return{className:(0,t.EW)((()=>a.value?"":`hljs ${o.value}`)),highlightedCode:(0,t.EW)((()=>a.value?(console.warn(`The language "${o.value}" you specified could not be found.`),e.code.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")):n.value?l.A.highlightAuto(e.code).value:l.A.highlight(e.code,{language:o.value,ignoreIllegals:e.ignoreIllegals}).value))}},render(){return(0,t.h)("pre",{},[(0,t.h)("code",{class:this.className,innerHTML:this.highlightedCode,tabindex:"0"})])}}}}]);
//# sourceMappingURL=chunk.451.ebc04db5619531fa1cb2.js.map