"use strict";(self.webpackChunkaloha_vue_docs=self.webpackChunkaloha_vue_docs||[]).push([[2472],{5900:(e,a,l)=>{l.d(a,{c:()=>k});var n=l(7736);const o={class:"aloha_example"},t={key:1},s=(0,n.QD)("dt",{class:"a_fs_4"},"Props:",-1),i=(0,n.QD)("dt",{class:"a_fs_4"},"Emits:",-1),c=(0,n.QD)("dt",{class:"a_fs_4"},"Slots:",-1),d=(0,n.QD)("dt",{class:"a_fs_4"},"Exposes:",-1),_={class:"aloha_example__body"},r={class:"aloha_example__actions"},u={class:"a_btn_group"},p={key:3,class:"aloha_example__code"},g=(0,n.QD)("h3",{class:"aloha_example__h3"},"HTML",-1),A=(0,n.QD)("h3",{class:"aloha_example__h3 a_mt_3"},"JS",-1);var h=l(1744),m=l(8104),L=l(1224),b=l(2476),v=l(3488);l(6411),m.c.registerLanguage("javascript",L.c),m.c.registerLanguage("html",b.c),m.c.registerLanguage("markdown",v.c);const T={name:"AlohaHighlightjs",props:{autodetect:{type:Boolean,required:!1,default:!0},code:{type:String,required:!0},ignoreIllegals:{type:Boolean,required:!1,default:!0},language:{type:String,required:!1,default:""}},setup(e){const a=(0,n.qo)(e.language);(0,n.Kg)((()=>e.language),(e=>{a.value=e}));const l=(0,n.S6)((()=>e.autodetect&&!a.value)),o=(0,n.S6)((()=>!l.value&&!m.c.getLanguage(a.value)));return{className:(0,n.S6)((()=>o.value?"":`hljs ${a.value}`)),highlightedCode:(0,n.S6)((()=>o.value?(console.warn(`The language "${a.value}" you specified could not be found.`),e.code.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")):l.value?m.c.highlightAuto(e.code).value:m.c.highlight(e.code,{language:a.value,ignoreIllegals:e.ignoreIllegals}).value))}},render(){return(0,n.h)("pre",{},[(0,n.h)("code",{class:this.className,innerHTML:this.highlightedCode,tabindex:"0"})])}};var y=l(8640),E=l(7824),C=l(3568);const f={name:"AlohaExample",components:{AButton:h.c,AlohaHighlightjs:T,ATranslation:y.c},props:{code:{type:String,required:!1,default:void 0},codeHtml:{type:String,required:!1,default:void 0},codeJs:{type:String,required:!1,default:void 0},description:{type:String,required:!1,default:void 0},emits:{type:[String,Array],required:!1,default:void 0},exposes:{type:[String,Array],required:!1,default:void 0},header:{type:String,required:!1,default:void 0},isCodeVisibleDefault:{type:Boolean,required:!1,default:!1},props:{type:[String,Array],required:!1,default:void 0},slots:{type:[String,Array],required:!1,default:void 0}},setup(e){const{btnToggleCodeTitle:a,isCodeVisible:l,toggleCode:o}=function(e){const a=(0,n.C7)(e,"isCodeVisibleDefault"),l=(0,n.qo)(a.value);return{btnToggleCodeTitle:(0,n.S6)((()=>l.value?"_HIDE_SOURCE_":"_VIEW_SOURCE_")),isCodeVisible:l,toggleCode:()=>{l.value=!l.value}}}(e),{copyHtmlToClipboard:t,copyJsToClipboard:s}=function(e){const a=(0,n.C7)(e,"codeHtml"),l=(0,n.C7)(e,"codeJs"),{addNotification:o}=(0,E.cp)();async function t(e){try{await navigator.clipboard.writeText(e),o({text:"_COPIED_TO_CLIPBOARD_"})}catch(e){o({text:e,type:"danger"})}}return{copyHtmlToClipboard:()=>{t(a.value)},copyJsToClipboard:()=>{t(l.value)}}}(e),{emitsLocal:i,exposesLocal:c,hasAtLeastOneProperty:d,hasEmits:_,hasExposes:r,hasProps:u,hasSlots:p,propsLocal:g,slotsLocal:A}=function(e){const a=(0,n.C7)(e,"props"),l=(0,n.C7)(e,"emits"),o=(0,n.C7)(e,"exposes"),t=(0,n.C7)(e,"slots"),s=e=>(0,C.isArray)(e)?e:(0,C.isString)(e)?[e]:[],i=(0,n.S6)((()=>s(l.value))),c=(0,n.S6)((()=>s(o.value))),d=(0,n.S6)((()=>s(a.value))),_=(0,n.S6)((()=>s(t.value))),r=(0,n.S6)((()=>d.value.length>0)),u=(0,n.S6)((()=>i.value.length>0)),p=(0,n.S6)((()=>_.value.length>0)),g=(0,n.S6)((()=>c.value.length>0)),A=(0,n.S6)((()=>r.value||u.value||g.value||p.value));return{emitsLocal:i,exposesLocal:c,hasAtLeastOneProperty:A,hasEmits:u,hasExposes:g,hasProps:r,hasSlots:p,propsLocal:d,slotsLocal:_}}(e);return{btnToggleCodeTitle:a,copyHtmlToClipboard:t,copyJsToClipboard:s,emitsLocal:i,exposesLocal:c,hasAtLeastOneProperty:d,hasEmits:_,hasExposes:r,hasProps:u,hasSlots:p,isCodeVisible:l,propsLocal:g,slotsLocal:A,toggleCode:o}}},k=(0,l(8152).c)(f,[["render",function(e,a){const l=(0,n.E1)("a-translation"),h=(0,n.E1)("a-button"),m=(0,n.E1)("aloha-highlightjs");return(0,n.Wz)(),(0,n.An)("div",o,[e.header?((0,n.Wz)(),(0,n.Az)(l,{key:0,class:"aloha_example__h2",tag:"h2",html:e.header},null,8,["html"])):(0,n.g1)("v-if",!0),e.hasAtLeastOneProperty?((0,n.Wz)(),(0,n.An)("dl",t,[e.hasProps?((0,n.Wz)(),(0,n.An)(n.ae,{key:0},[s,((0,n.Wz)(!0),(0,n.An)(n.ae,null,(0,n.mi)(e.propsLocal,(e=>((0,n.Wz)(),(0,n.An)("dd",{key:e},[(0,n.QD)("strong",null,(0,n.WA)(e),1)])))),128))],64)):(0,n.g1)("v-if",!0),e.hasEmits?((0,n.Wz)(),(0,n.An)(n.ae,{key:1},[i,((0,n.Wz)(!0),(0,n.An)(n.ae,null,(0,n.mi)(e.emitsLocal,(e=>((0,n.Wz)(),(0,n.An)("dd",{key:e},[(0,n.QD)("strong",null,(0,n.WA)(e),1)])))),128))],64)):(0,n.g1)("v-if",!0),e.hasSlots?((0,n.Wz)(),(0,n.An)(n.ae,{key:2},[c,((0,n.Wz)(!0),(0,n.An)(n.ae,null,(0,n.mi)(e.slotsLocal,(e=>((0,n.Wz)(),(0,n.An)("dd",{key:e},[(0,n.QD)("strong",null,(0,n.WA)(e),1)])))),128))],64)):(0,n.g1)("v-if",!0),e.hasExposes?((0,n.Wz)(),(0,n.An)(n.ae,{key:3},[d,((0,n.Wz)(!0),(0,n.An)(n.ae,null,(0,n.mi)(e.exposesLocal,(e=>((0,n.Wz)(),(0,n.An)("dd",{key:e},[(0,n.QD)("strong",null,(0,n.WA)(e),1)])))),128))],64)):(0,n.g1)("v-if",!0)])):(0,n.g1)("v-if",!0),e.description?((0,n.Wz)(),(0,n.Az)(l,{key:2,tag:"p",html:e.description},null,8,["html"])):(0,n.g1)("v-if",!0),(0,n.QD)("div",_,[(0,n.oF)(e.$slots,"default")]),(0,n.QD)("div",r,[(0,n.QD)("div",u,[e.codeJs?((0,n.Wz)(),(0,n.Az)(h,{key:0,class:"a_btn a_btn_secondary","icon-left":"FiletypeJs",title:"_COPY_CODE_JS_",onClick:e.copyJsToClipboard},null,8,["onClick"])):(0,n.g1)("v-if",!0),e.codeHtml?((0,n.Wz)(),(0,n.Az)(h,{key:1,class:"a_btn a_btn_secondary","icon-left":"FiletypeHtml",title:"_COPY_CODE_HTML_",onClick:e.copyHtmlToClipboard},null,8,["onClick"])):(0,n.g1)("v-if",!0),(0,n.K2)(h,{class:"a_btn a_btn_secondary","icon-left":"ChevronExpand",title:e.btnToggleCodeTitle,onClick:e.toggleCode},null,8,["title","onClick"])])]),e.isCodeVisible?((0,n.Wz)(),(0,n.An)("div",p,[e.code?((0,n.Wz)(),(0,n.Az)(m,{key:0,code:e.code,language:"markdown"},null,8,["code"])):(0,n.g1)("v-if",!0),e.codeHtml?((0,n.Wz)(),(0,n.An)(n.ae,{key:1},[g,(0,n.K2)(m,{code:e.codeHtml,language:"html"},null,8,["code"])],64)):(0,n.g1)("v-if",!0),e.codeJs?((0,n.Wz)(),(0,n.An)(n.ae,{key:2},[A,(0,n.K2)(m,{code:e.codeJs,language:"javascript"},null,8,["code"])],64)):(0,n.g1)("v-if",!0)])):(0,n.g1)("v-if",!0)])}]])},184:(e,a,l)=>{l.d(a,{c:()=>s});var n=l(7736);const o={id:"aloha_page"},t={name:"AlohaPage",components:{APageTabTitle:l(1972).c},props:{pageTitle:{type:String,required:!0}}},s=(0,l(8152).c)(t,[["render",function(e,a){const l=(0,n.E1)("a-page-tab-title");return(0,n.Wz)(),(0,n.An)("div",o,[e.pageTitle?((0,n.Wz)(),(0,n.Az)(l,{key:0,title:e.pageTitle},null,8,["title"])):(0,n.g1)("v-if",!0),(0,n.QD)("h1",null,(0,n.WA)(e.pageTitle),1),(0,n.oF)(e.$slots,"body")])}]])},9038:(e,a,l)=>{l.r(a),l.d(a,{default:()=>A});var n=l(7736),o=l(184),t=l(5900),s=l(5948),i=l(3568);const c={name:"PageTablePreviewRight",components:{AlohaExample:t.c,ATable:s.c},setup(){const{codeHtml:e}={codeHtml:'<a-table\n  :columns="columns"\n  :data="data"\n  label="_A_TABLE_GROUP_SIMPLE_LABEL_"\n  key-id="id"\n>\n</a-table>'},{codeJs:a}={codeJs:'import {\n  ref,\n} from "vue";\n\nimport ATable from "aloha-vue/src/ATable/ATable";\n    \nexport default {\n  name: "PageTablePreviewRight",\n  components: {\n    ATable,\n  },\n  setup() {\n     const columns = [\n      {\n        id: "column1",\n        keyLabel: "id",\n        label: "_A_TABLE_COLUMN_1_",\n      },\n      {\n        id: "column2",\n        keyLabel: "aloha",\n        label: "_A_TABLE_COLUMN_2_",\n      },\n      {\n        id: "column3",\n        keyLabel: "aloha",\n        label: "_A_TABLE_COLUMN_3_",\n      },\n      {\n        id: "column4",\n        keyLabel: "aloha",\n        label: "_A_TABLE_COLUMN_4_",\n      },\n      {\n        id: "column5",\n        keyLabel: "aloha",\n        label: "_A_TABLE_COLUMN_5_",\n      },\n    ];\n\n    const data = ref([]);\n\n    const setData = () => {\n      const DATA = [];\n      times(20, item => {\n        DATA.push({\n          id: item,\n          aloha: `aloha ${ item }`,\n        });\n      });\n      data.value = DATA;\n    };\n\n    setData();\n    \n    return {\n      columns,\n      data,\n    };\n  },\n};'},l=(0,n.qo)([]);return(()=>{const e=[];(0,i.times)(20,(a=>{e.push({id:a,aloha:`aloha ${a}`})})),l.value=e})(),{codeHtml:e,codeJs:a,columns:[{id:"column1",keyLabel:"id",label:"_A_TABLE_COLUMN_1_"},{id:"column2",keyLabel:"aloha",label:"_A_TABLE_COLUMN_2_"},{id:"column3",keyLabel:"aloha",label:"_A_TABLE_COLUMN_3_"},{id:"column4",keyLabel:"aloha",label:"_A_TABLE_COLUMN_4_"},{id:"column5",keyLabel:"aloha",label:"_A_TABLE_COLUMN_5_"}],data:l}}};var d=l(8152);const _=(0,d.c)(c,[["render",function(e,a){const l=(0,n.E1)("a-table"),o=(0,n.E1)("aloha-example");return(0,n.Wz)(),(0,n.Az)(o,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TABLE_GROUP_PREVIEW_RIGHT_HEADER_",description:"_A_TABLE_GROUP_PREVIEW_RIGHT_DESCRIPTION_"},{default:(0,n.Ql)((()=>[(0,n.QD)("div",null,[(0,n.K2)(l,{columns:e.columns,data:e.data,label:"_A_TABLE_GROUP_SIMPLE_LABEL_","key-id":"id",preview:"right"},{previewRight:(0,n.Ql)((e=>[(0,n.QD)("pre",null,(0,n.WA)(e),1)])),_:1},8,["columns","data"])])])),_:1},8,["code-html","code-js"])}]]),r={name:"PageTablePreviewRight",components:{AlohaExample:t.c,ATable:s.c},setup(){const{codeHtml:e}={codeHtml:'<a-table\n  :columns="columns"\n  :data="data"\n  label="_A_TABLE_GROUP_SIMPLE_LABEL_"\n  key-id="id"\n>\n</a-table>'},{codeJs:a}={codeJs:'import {\n  ref,\n} from "vue";\n\nimport ATable from "aloha-vue/src/ATable/ATable";\n    \nexport default {\n  name: "PageTablePreviewRightPagination",\n  components: {\n    ATable,\n  },\n  setup() {\n     const columns = [\n      {\n        id: "column1",\n        keyLabel: "id",\n        label: "_A_TABLE_COLUMN_1_",\n      },\n      {\n        id: "column2",\n        keyLabel: "aloha",\n        label: "_A_TABLE_COLUMN_2_",\n      },\n      {\n        id: "column3",\n        keyLabel: "aloha",\n        label: "_A_TABLE_COLUMN_3_",\n      },\n      {\n        id: "column4",\n        keyLabel: "aloha",\n        label: "_A_TABLE_COLUMN_4_",\n      },\n      {\n        id: "column5",\n        keyLabel: "aloha",\n        label: "_A_TABLE_COLUMN_5_",\n      },\n    ];\n\n    const data = ref([]);\n\n    const setData = () => {\n      const DATA = [];\n      times(20, item => {\n        DATA.push({\n          id: item,\n          aloha: `aloha ${ item }`,\n        });\n      });\n      data.value = DATA;\n    };\n\n    setData();\n    \n    return {\n      columns,\n      data,\n    };\n  },\n};'},l=(0,n.qo)([]);return(()=>{const e=[];(0,i.times)(20,(a=>{e.push({id:a,aloha:`aloha ${a}`})})),l.value=e})(),{codeHtml:e,codeJs:a,columns:[{id:"column1",keyLabel:"id",label:"_A_TABLE_COLUMN_1_"},{id:"column2",keyLabel:"aloha",label:"_A_TABLE_COLUMN_2_"},{id:"column3",keyLabel:"aloha",label:"_A_TABLE_COLUMN_3_"},{id:"column4",keyLabel:"aloha",label:"_A_TABLE_COLUMN_4_"},{id:"column5",keyLabel:"aloha",label:"_A_TABLE_COLUMN_5_"}],data:l}}},u=(0,d.c)(r,[["render",function(e,a){const l=(0,n.E1)("a-table"),o=(0,n.E1)("aloha-example");return(0,n.Wz)(),(0,n.Az)(o,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TABLE_GROUP_PREVIEW_RIGHT_PAGINATION_HEADER_",description:"_A_TABLE_GROUP_PREVIEW_RIGHT_PAGINATION_DESCRIPTION_",props:["preview","pagination.use"]},{default:(0,n.Ql)((()=>[(0,n.QD)("div",null,[(0,n.K2)(l,{columns:e.columns,data:e.data,label:"_A_TABLE_GROUP_SIMPLE_LABEL_","key-id":"id",preview:"right",pagination:{use:!0}},{previewRight:(0,n.Ql)((e=>[(0,n.QD)("pre",null,(0,n.WA)(e),1)])),_:1},8,["columns","data"])])])),_:1},8,["code-html","code-js","props"])}]]);var p=l(36);const g={name:"PageTablePreview",components:{AlohaPage:o.c,PageTablePreviewRight:_,PageTablePreviewRightPagination:u},setup(){const{pageTitle:e}=function(){const e=(0,n.S6)((()=>(0,p.Eh)({placeholder:"_A_TABLE_SIMPLE_"})));return{pageTitle:(0,n.S6)((()=>`ATable ${e.value}`))}}();return{pageTitle:e}}},A=(0,d.c)(g,[["render",function(e,a){const l=(0,n.E1)("page-table-preview-right"),o=(0,n.E1)("page-table-preview-right-pagination"),t=(0,n.E1)("aloha-page");return(0,n.Wz)(),(0,n.Az)(t,{"page-title":e.pageTitle},{body:(0,n.Ql)((()=>[(0,n.K2)(l),(0,n.K2)(o)])),_:1},8,["page-title"])}]])}}]);
//# sourceMappingURL=chunk.2472.b5f7ccd49459bce62f67.js.map