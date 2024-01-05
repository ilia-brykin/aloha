"use strict";(self.webpackChunkaloha_vue_docs=self.webpackChunkaloha_vue_docs||[]).push([[4170],{6660:(e,l,i)=>{i.d(l,{Z:()=>E});var t=i(798);const o={class:"aloha_example"},s={key:1},a=(0,t._)("dt",{class:"a_fs_4"},"Props:",-1),n=(0,t._)("dt",{class:"a_fs_4"},"Emits:",-1),r=(0,t._)("dt",{class:"a_fs_4"},"Slots:",-1),u=(0,t._)("dt",{class:"a_fs_4"},"Exposes:",-1),c={class:"aloha_example__body"},d={class:"aloha_example__actions"},p={class:"a_btn_group"},g={key:3,class:"aloha_example__code"},h=(0,t._)("h3",{class:"aloha_example__h3"},"HTML",-1),m=(0,t._)("h3",{class:"aloha_example__h3 a_mt_3"},"JS",-1);var _=i(903),f=i(5286),F=i(9622),v=i(1042),S=i(7919);i(1519),f.Z.registerLanguage("javascript",F.Z),f.Z.registerLanguage("html",v.Z),f.Z.registerLanguage("markdown",S.Z);const b={name:"AlohaHighlightjs",props:{autodetect:{type:Boolean,required:!1,default:!0},code:{type:String,required:!0},ignoreIllegals:{type:Boolean,required:!1,default:!0},language:{type:String,required:!1,default:""}},setup(e){const l=(0,t.iH)(e.language);(0,t.YP)((()=>e.language),(e=>{l.value=e}));const i=(0,t.Fl)((()=>e.autodetect&&!l.value)),o=(0,t.Fl)((()=>!i.value&&!f.Z.getLanguage(l.value)));return{className:(0,t.Fl)((()=>o.value?"":`hljs ${l.value}`)),highlightedCode:(0,t.Fl)((()=>o.value?(console.warn(`The language "${l.value}" you specified could not be found.`),e.code.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")):i.value?f.Z.highlightAuto(e.code).value:f.Z.highlight(e.code,{language:l.value,ignoreIllegals:e.ignoreIllegals}).value))}},render(){return(0,t.h)("pre",{},[(0,t.h)("code",{class:this.className,innerHTML:this.highlightedCode,tabindex:"0"})])}};var y=i(9731),Z=i(684),z=i(6486);const A={name:"AlohaExample",components:{AButton:_.Z,AlohaHighlightjs:b,ATranslation:y.Z},props:{code:{type:String,required:!1,default:void 0},codeHtml:{type:String,required:!1,default:void 0},codeJs:{type:String,required:!1,default:void 0},description:{type:String,required:!1,default:void 0},emits:{type:[String,Array],required:!1,default:void 0},exposes:{type:[String,Array],required:!1,default:void 0},header:{type:String,required:!1,default:void 0},isCodeVisibleDefault:{type:Boolean,required:!1,default:!1},props:{type:[String,Array],required:!1,default:void 0},slots:{type:[String,Array],required:!1,default:void 0}},setup(e){const{btnToggleCodeTitle:l,isCodeVisible:i,toggleCode:o}=function(e){const l=(0,t.Vh)(e,"isCodeVisibleDefault"),i=(0,t.iH)(l.value);return{btnToggleCodeTitle:(0,t.Fl)((()=>i.value?"_HIDE_SOURCE_":"_VIEW_SOURCE_")),isCodeVisible:i,toggleCode:()=>{i.value=!i.value}}}(e),{copyHtmlToClipboard:s,copyJsToClipboard:a}=function(e){const l=(0,t.Vh)(e,"codeHtml"),i=(0,t.Vh)(e,"codeJs"),{addNotification:o}=(0,Z.ZP)();async function s(e){try{await navigator.clipboard.writeText(e),o({text:"_COPIED_TO_CLIPBOARD_"})}catch(e){o({text:e,type:"danger"})}}return{copyHtmlToClipboard:()=>{s(l.value)},copyJsToClipboard:()=>{s(i.value)}}}(e),{emitsLocal:n,exposesLocal:r,hasAtLeastOneProperty:u,hasEmits:c,hasExposes:d,hasProps:p,hasSlots:g,propsLocal:h,slotsLocal:m}=function(e){const l=(0,t.Vh)(e,"props"),i=(0,t.Vh)(e,"emits"),o=(0,t.Vh)(e,"exposes"),s=(0,t.Vh)(e,"slots"),a=e=>(0,z.isArray)(e)?e:(0,z.isString)(e)?[e]:[],n=(0,t.Fl)((()=>a(i.value))),r=(0,t.Fl)((()=>a(o.value))),u=(0,t.Fl)((()=>a(l.value))),c=(0,t.Fl)((()=>a(s.value))),d=(0,t.Fl)((()=>u.value.length>0)),p=(0,t.Fl)((()=>n.value.length>0)),g=(0,t.Fl)((()=>c.value.length>0)),h=(0,t.Fl)((()=>r.value.length>0)),m=(0,t.Fl)((()=>d.value||p.value||h.value||g.value));return{emitsLocal:n,exposesLocal:r,hasAtLeastOneProperty:m,hasEmits:p,hasExposes:h,hasProps:d,hasSlots:g,propsLocal:u,slotsLocal:c}}(e);return{btnToggleCodeTitle:l,copyHtmlToClipboard:s,copyJsToClipboard:a,emitsLocal:n,exposesLocal:r,hasAtLeastOneProperty:u,hasEmits:c,hasExposes:d,hasProps:p,hasSlots:g,isCodeVisible:i,propsLocal:h,slotsLocal:m,toggleCode:o}}},E=(0,i(3744).Z)(A,[["render",function(e,l){const i=(0,t.up)("a-translation"),_=(0,t.up)("a-button"),f=(0,t.up)("aloha-highlightjs");return(0,t.wg)(),(0,t.iD)("div",o,[e.header?((0,t.wg)(),(0,t.j4)(i,{key:0,class:"aloha_example__h2",tag:"h2",html:e.header},null,8,["html"])):(0,t.kq)("v-if",!0),e.hasAtLeastOneProperty?((0,t.wg)(),(0,t.iD)("dl",s,[e.hasProps?((0,t.wg)(),(0,t.iD)(t.HY,{key:0},[a,((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(e.propsLocal,(e=>((0,t.wg)(),(0,t.iD)("dd",{key:e},[(0,t._)("strong",null,(0,t.zw)(e),1)])))),128))],64)):(0,t.kq)("v-if",!0),e.hasEmits?((0,t.wg)(),(0,t.iD)(t.HY,{key:1},[n,((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(e.emitsLocal,(e=>((0,t.wg)(),(0,t.iD)("dd",{key:e},[(0,t._)("strong",null,(0,t.zw)(e),1)])))),128))],64)):(0,t.kq)("v-if",!0),e.hasSlots?((0,t.wg)(),(0,t.iD)(t.HY,{key:2},[r,((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(e.slotsLocal,(e=>((0,t.wg)(),(0,t.iD)("dd",{key:e},[(0,t._)("strong",null,(0,t.zw)(e),1)])))),128))],64)):(0,t.kq)("v-if",!0),e.hasExposes?((0,t.wg)(),(0,t.iD)(t.HY,{key:3},[u,((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(e.exposesLocal,(e=>((0,t.wg)(),(0,t.iD)("dd",{key:e},[(0,t._)("strong",null,(0,t.zw)(e),1)])))),128))],64)):(0,t.kq)("v-if",!0)])):(0,t.kq)("v-if",!0),e.description?((0,t.wg)(),(0,t.j4)(i,{key:2,tag:"p",html:e.description},null,8,["html"])):(0,t.kq)("v-if",!0),(0,t._)("div",c,[(0,t.WI)(e.$slots,"default")]),(0,t._)("div",d,[(0,t._)("div",p,[e.codeJs?((0,t.wg)(),(0,t.j4)(_,{key:0,class:"a_btn a_btn_secondary","icon-left":"FiletypeJs",title:"_COPY_CODE_JS_",onClick:e.copyJsToClipboard},null,8,["onClick"])):(0,t.kq)("v-if",!0),e.codeHtml?((0,t.wg)(),(0,t.j4)(_,{key:1,class:"a_btn a_btn_secondary","icon-left":"FiletypeHtml",title:"_COPY_CODE_HTML_",onClick:e.copyHtmlToClipboard},null,8,["onClick"])):(0,t.kq)("v-if",!0),(0,t.Wm)(_,{class:"a_btn a_btn_secondary","icon-left":"ChevronExpand",title:e.btnToggleCodeTitle,onClick:e.toggleCode},null,8,["title","onClick"])])]),e.isCodeVisible?((0,t.wg)(),(0,t.iD)("div",g,[e.code?((0,t.wg)(),(0,t.j4)(f,{key:0,code:e.code,language:"markdown"},null,8,["code"])):(0,t.kq)("v-if",!0),e.codeHtml?((0,t.wg)(),(0,t.iD)(t.HY,{key:1},[h,(0,t.Wm)(f,{code:e.codeHtml,language:"html"},null,8,["code"])],64)):(0,t.kq)("v-if",!0),e.codeJs?((0,t.wg)(),(0,t.iD)(t.HY,{key:2},[m,(0,t.Wm)(f,{code:e.codeJs,language:"javascript"},null,8,["code"])],64)):(0,t.kq)("v-if",!0)])):(0,t.kq)("v-if",!0)])}]])},6049:(e,l,i)=>{i.d(l,{Z:()=>a});var t=i(798);const o={id:"aloha_page"},s={name:"AlohaPage",components:{APageTabTitle:i(4221).Z},props:{pageTitle:{type:String,required:!0}}},a=(0,i(3744).Z)(s,[["render",function(e,l){const i=(0,t.up)("a-page-tab-title");return(0,t.wg)(),(0,t.iD)("div",o,[e.pageTitle?((0,t.wg)(),(0,t.j4)(i,{key:0,title:e.pageTitle},null,8,["title"])):(0,t.kq)("v-if",!0),(0,t._)("h1",null,(0,t.zw)(e.pageTitle),1),(0,t.WI)(e.$slots,"body")])}]])},3347:(e,l,i)=>{i.r(l),i.d(l,{default:()=>C});var t=i(798),o=i(6049),s=i(9731),a=i(6660),n=i(9873);const r={name:"PageFilterFileSizeArguments",components:{AlohaExample:a.Z},setup(){const{codeJs:e}=function(){const e=(0,t.Fl)((()=>(0,n.Gd)({placeholder:"_PAGE_FILTER_FILE_SIZE_ARGUMENTS_"})));return{codeJs:(0,t.Fl)((()=>`filterFileSize(value, { [units="kb"], [sourceUnits="b"], [digits=2] });\n\n${e.value}`))}}();return{codeJs:e}}};var u=i(3744);const c=(0,u.Z)(r,[["render",function(e,l){const i=(0,t.up)("aloha-example");return(0,t.wg)(),(0,t.j4)(i,{code:e.codeJs,header:"_PAGE_FUNCTIONS_ARGUMENTS_HEADER_","is-code-visible-default":!0},null,8,["code"])}]]);var d=i(2338);const p={name:"PageFilterFileSizeDigits",components:{AlohaExample:a.Z},setup(){const{codeJs:e}={codeJs:(0,t.Fl)((()=>`filterFileSize(1024, { digits: 0 });\n// ${(0,d.Z)(1024,{digits:0})}\n\nfilterFileSize(10241, { digits: 2 });\n// ${(0,d.Z)(10241,{digits:2})}`))};return{codeJs:e}}},g=(0,u.Z)(p,[["render",function(e,l){const i=(0,t.up)("aloha-example");return(0,t.wg)(),(0,t.j4)(i,{"code-js":e.codeJs,header:"digits","is-code-visible-default":!0},null,8,["code-js"])}]]),h={name:"PageFilterFileSizeExample",components:{AlohaExample:a.Z},setup(){const{codeJs:e}={codeJs:(0,t.Fl)((()=>`filterFileSize(2000);\n// ${(0,d.Z)(2e3)}\n\nfilterFileSize(1024);\n// ${(0,d.Z)(1024)}`))};return{codeJs:e}}},m=(0,u.Z)(h,[["render",function(e,l){const i=(0,t.up)("aloha-example");return(0,t.wg)(),(0,t.j4)(i,{"code-js":e.codeJs,header:"_A_BASIC_USAGE_","is-code-visible-default":!0},null,8,["code-js"])}]]),_={name:"PageFilterFileSizeImportCompositionApi",components:{AlohaExample:a.Z},setup(){const{codeJs:e}={codeJs:'import AFiltersAPI from "aloha-vue/src/compositionAPI/AFiltersAPI";\n\nexport default {\n  setup() {  \n    const {\n      filterFileSize,\n    } = AFiltersAPI();\n  },\n};'};return{codeJs:e}}},f=(0,u.Z)(_,[["render",function(e,l){const i=(0,t.up)("aloha-example");return(0,t.wg)(),(0,t.j4)(i,{"code-js":e.codeJs,header:"_PAGE_FUNCTIONS_IMPORT_COMPOSITION_API_HEADER_","is-code-visible-default":!0},null,8,["code-js"])}]]),F={name:"PageFilterFileSizeImportFunction",components:{AlohaExample:a.Z},setup(){const{codeJs:e}={codeJs:'import filterFileSize from "aloha-vue/src/filters/filterFileSize";'};return{codeJs:e}}},v=(0,u.Z)(F,[["render",function(e,l){const i=(0,t.up)("aloha-example");return(0,t.wg)(),(0,t.j4)(i,{"code-js":e.codeJs,header:"_PAGE_FUNCTIONS_IMPORT_FUNCTION_HEADER_","is-code-visible-default":!0},null,8,["code-js"])}]]),S={name:"PageFilterFileSizeSourceUnits",components:{AlohaExample:a.Z},setup(){const{codeJs:e}={codeJs:(0,t.Fl)((()=>`filterFileSize(1024, { sourceUnits: "b" });\n// ${(0,d.Z)(1024,{sourceUnits:"b"})}\n\nfilterFileSize(2, { sourceUnits: "kb" });\n// ${(0,d.Z)(2,{sourceUnits:"kb"})}\n\nfilterFileSize(1, { sourceUnits: "mb" });\n// ${(0,d.Z)(1,{sourceUnits:"mb"})}\n\nfilterFileSize(0.1, { sourceUnits: "gb" });\n// ${(0,d.Z)(.1,{sourceUnits:"gb"})}\n\nfilterFileSize(0.0001, { sourceUnits: "tb" });\n// ${(0,d.Z)(1e-4,{sourceUnits:"tb"})}`))};return{codeJs:e}}},b=(0,u.Z)(S,[["render",function(e,l){const i=(0,t.up)("aloha-example");return(0,t.wg)(),(0,t.j4)(i,{"code-js":e.codeJs,header:"sourceUnits","is-code-visible-default":!0},null,8,["code-js"])}]]),y={name:"PageFilterFileSizeUnits",components:{AlohaExample:a.Z},setup(){const{codeJs:e}={codeJs:(0,t.Fl)((()=>`filterFileSize(1024, { units: "b" });\n// ${(0,d.Z)(1024,{units:"b"})}\n\nfilterFileSize(1024, { units: "kb" });\n// ${(0,d.Z)(1024,{units:"kb"})}\n\nfilterFileSize(1048576, { units: "mb" });\n// ${(0,d.Z)(1048576,{units:"mb"})}\n\nfilterFileSize(1073741824, { units: "gb" });\n// ${(0,d.Z)(1073741824,{units:"gb"})}\n\nfilterFileSize(1073741824 * 1024, { units: "tb" });\n// ${(0,d.Z)(1099511627776,{units:"tb"})}`))};return{codeJs:e}}},Z=(0,u.Z)(y,[["render",function(e,l){const i=(0,t.up)("aloha-example");return(0,t.wg)(),(0,t.j4)(i,{"code-js":e.codeJs,header:"units","is-code-visible-default":!0},null,8,["code-js"])}]]),z={name:"PageFilterFileSizeUnitsEmpty",components:{AlohaExample:a.Z},setup(){const{codeJs:e}={codeJs:(0,t.Fl)((()=>`filterFileSize(1024, { units: "" });\n// ${(0,d.Z)(1024,{units:""})}\n\nfilterFileSize(1048576, { units: "" });\n// ${(0,d.Z)(1048576,{units:""})}\n\nfilterFileSize(1073741824, { units: "" });\n// ${(0,d.Z)(1073741824,{units:""})}\n\nfilterFileSize(1073741824 * 1024, { units: "" });\n// ${(0,d.Z)(1099511627776,{units:""})}`))};return{codeJs:e}}},A=(0,u.Z)(z,[["render",function(e,l){const i=(0,t.up)("aloha-example");return(0,t.wg)(),(0,t.j4)(i,{"code-js":e.codeJs,header:'units=""',"is-code-visible-default":!0},null,8,["code-js"])}]]),E={name:"PageFilterFileSize",components:{AlohaPage:o.Z,ATranslation:s.Z,PageFilterFileSizeArguments:c,PageFilterFileSizeDigits:g,PageFilterFileSizeExample:m,PageFilterFileSizeImportCompositionApi:f,PageFilterFileSizeImportFunction:v,PageFilterFileSizeSourceUnits:b,PageFilterFileSizeUnits:Z,PageFilterFileSizeUnitsEmpty:A},setup(){const{pageTitle:e}={pageTitle:"filterFileSize"};return{pageTitle:e}}},C=(0,u.Z)(E,[["render",function(e,l){const i=(0,t.up)("a-translation"),o=(0,t.up)("page-filter-file-size-import-function"),s=(0,t.up)("page-filter-file-size-import-composition-api"),a=(0,t.up)("page-filter-file-size-arguments"),n=(0,t.up)("page-filter-file-size-example"),r=(0,t.up)("page-filter-file-size-units"),u=(0,t.up)("page-filter-file-size-units-empty"),c=(0,t.up)("page-filter-file-size-source-units"),d=(0,t.up)("page-filter-file-size-digits"),p=(0,t.up)("aloha-page");return(0,t.wg)(),(0,t.j4)(p,{"page-title":e.pageTitle},{body:(0,t.w5)((()=>[(0,t.Wm)(i,{tag:"p",html:"_PAGE_FILTER_FILE_SIZE_DESCRIPTION_"}),(0,t.Wm)(o),(0,t.Wm)(s),(0,t.Wm)(a),(0,t.Wm)(n),(0,t.Wm)(r),(0,t.Wm)(u),(0,t.Wm)(c),(0,t.Wm)(d)])),_:1},8,["page-title"])}]])}}]);
//# sourceMappingURL=chunk.4170.8856292db0b4a173a37d.js.map