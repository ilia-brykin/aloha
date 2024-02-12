"use strict";(self.webpackChunkaloha_vue_docs=self.webpackChunkaloha_vue_docs||[]).push([[6257],{7800:(e,a,l)=>{l.d(a,{c:()=>T});var o=l(7736);const t={class:"aloha_example"},n={key:1},s=(0,o.QD)("dt",{class:"a_fs_4"},"Props:",-1),i=(0,o.QD)("dt",{class:"a_fs_4"},"Emits:",-1),c=(0,o.QD)("dt",{class:"a_fs_4"},"Slots:",-1),d=(0,o.QD)("dt",{class:"a_fs_4"},"Exposes:",-1),r={class:"aloha_example__body"},u={class:"aloha_example__actions"},p={class:"a_btn_group"},_={key:3,class:"aloha_example__code"},g=(0,o.QD)("h3",{class:"aloha_example__h3"},"HTML",-1),h=(0,o.QD)("h3",{class:"aloha_example__h3 a_mt_3"},"JS",-1);var m=l(2484),A=l(908),v=l(8640),y=l(7824),L=l(3568);const b={name:"AlohaExample",components:{AButton:m.c,AlohaHighlightjs:A.c,ATranslation:v.c},props:{code:{type:String,required:!1,default:void 0},codeHtml:{type:String,required:!1,default:void 0},codeJs:{type:String,required:!1,default:void 0},description:{type:String,required:!1,default:void 0},emits:{type:[String,Array],required:!1,default:void 0},exposes:{type:[String,Array],required:!1,default:void 0},header:{type:String,required:!1,default:void 0},isCodeVisibleDefault:{type:Boolean,required:!1,default:!1},props:{type:[String,Array],required:!1,default:void 0},slots:{type:[String,Array],required:!1,default:void 0}},setup(e){const{btnToggleCodeTitle:a,isCodeVisible:l,toggleCode:t}=function(e){const a=(0,o.C7)(e,"isCodeVisibleDefault"),l=(0,o.qo)(a.value);return{btnToggleCodeTitle:(0,o.S6)((()=>l.value?"_HIDE_SOURCE_":"_VIEW_SOURCE_")),isCodeVisible:l,toggleCode:()=>{l.value=!l.value}}}(e),{copyHtmlToClipboard:n,copyJsToClipboard:s}=function(e){const a=(0,o.C7)(e,"codeHtml"),l=(0,o.C7)(e,"codeJs"),{addNotification:t}=(0,y.cp)();async function n(e){try{await navigator.clipboard.writeText(e),t({text:"_COPIED_TO_CLIPBOARD_"})}catch(e){t({text:e,type:"danger"})}}return{copyHtmlToClipboard:()=>{n(a.value)},copyJsToClipboard:()=>{n(l.value)}}}(e),{emitsLocal:i,exposesLocal:c,hasAtLeastOneProperty:d,hasEmits:r,hasExposes:u,hasProps:p,hasSlots:_,propsLocal:g,slotsLocal:h}=function(e){const a=(0,o.C7)(e,"props"),l=(0,o.C7)(e,"emits"),t=(0,o.C7)(e,"exposes"),n=(0,o.C7)(e,"slots"),s=e=>(0,L.isArray)(e)?e:(0,L.isString)(e)?[e]:[],i=(0,o.S6)((()=>s(l.value))),c=(0,o.S6)((()=>s(t.value))),d=(0,o.S6)((()=>s(a.value))),r=(0,o.S6)((()=>s(n.value))),u=(0,o.S6)((()=>d.value.length>0)),p=(0,o.S6)((()=>i.value.length>0)),_=(0,o.S6)((()=>r.value.length>0)),g=(0,o.S6)((()=>c.value.length>0)),h=(0,o.S6)((()=>u.value||p.value||g.value||_.value));return{emitsLocal:i,exposesLocal:c,hasAtLeastOneProperty:h,hasEmits:p,hasExposes:g,hasProps:u,hasSlots:_,propsLocal:d,slotsLocal:r}}(e);return{btnToggleCodeTitle:a,copyHtmlToClipboard:n,copyJsToClipboard:s,emitsLocal:i,exposesLocal:c,hasAtLeastOneProperty:d,hasEmits:r,hasExposes:u,hasProps:p,hasSlots:_,isCodeVisible:l,propsLocal:g,slotsLocal:h,toggleCode:t}}},T=(0,l(8152).c)(b,[["render",function(e,a){const l=(0,o.E1)("a-translation"),m=(0,o.E1)("a-button"),A=(0,o.E1)("aloha-highlightjs");return(0,o.Wz)(),(0,o.An)("div",t,[e.header?((0,o.Wz)(),(0,o.Az)(l,{key:0,class:"aloha_example__h2",tag:"h2",html:e.header},null,8,["html"])):(0,o.g1)("v-if",!0),e.hasAtLeastOneProperty?((0,o.Wz)(),(0,o.An)("dl",n,[e.hasProps?((0,o.Wz)(),(0,o.An)(o.ae,{key:0},[s,((0,o.Wz)(!0),(0,o.An)(o.ae,null,(0,o.mi)(e.propsLocal,(e=>((0,o.Wz)(),(0,o.An)("dd",{key:e},[(0,o.QD)("strong",null,(0,o.WA)(e),1)])))),128))],64)):(0,o.g1)("v-if",!0),e.hasEmits?((0,o.Wz)(),(0,o.An)(o.ae,{key:1},[i,((0,o.Wz)(!0),(0,o.An)(o.ae,null,(0,o.mi)(e.emitsLocal,(e=>((0,o.Wz)(),(0,o.An)("dd",{key:e},[(0,o.QD)("strong",null,(0,o.WA)(e),1)])))),128))],64)):(0,o.g1)("v-if",!0),e.hasSlots?((0,o.Wz)(),(0,o.An)(o.ae,{key:2},[c,((0,o.Wz)(!0),(0,o.An)(o.ae,null,(0,o.mi)(e.slotsLocal,(e=>((0,o.Wz)(),(0,o.An)("dd",{key:e},[(0,o.QD)("strong",null,(0,o.WA)(e),1)])))),128))],64)):(0,o.g1)("v-if",!0),e.hasExposes?((0,o.Wz)(),(0,o.An)(o.ae,{key:3},[d,((0,o.Wz)(!0),(0,o.An)(o.ae,null,(0,o.mi)(e.exposesLocal,(e=>((0,o.Wz)(),(0,o.An)("dd",{key:e},[(0,o.QD)("strong",null,(0,o.WA)(e),1)])))),128))],64)):(0,o.g1)("v-if",!0)])):(0,o.g1)("v-if",!0),e.description?((0,o.Wz)(),(0,o.Az)(l,{key:2,tag:"p",html:e.description},null,8,["html"])):(0,o.g1)("v-if",!0),(0,o.QD)("div",r,[(0,o.oF)(e.$slots,"default")]),(0,o.QD)("div",u,[(0,o.QD)("div",p,[e.codeJs?((0,o.Wz)(),(0,o.Az)(m,{key:0,class:"a_btn a_btn_secondary","icon-left":"FiletypeJs",title:"_COPY_CODE_JS_",onClick:e.copyJsToClipboard},null,8,["onClick"])):(0,o.g1)("v-if",!0),e.codeHtml?((0,o.Wz)(),(0,o.Az)(m,{key:1,class:"a_btn a_btn_secondary","icon-left":"FiletypeHtml",title:"_COPY_CODE_HTML_",onClick:e.copyHtmlToClipboard},null,8,["onClick"])):(0,o.g1)("v-if",!0),(0,o.K2)(m,{class:"a_btn a_btn_secondary","icon-left":"ChevronExpand",title:e.btnToggleCodeTitle,onClick:e.toggleCode},null,8,["title","onClick"])])]),e.isCodeVisible?((0,o.Wz)(),(0,o.An)("div",_,[e.code?((0,o.Wz)(),(0,o.Az)(A,{key:0,code:e.code,language:"markdown"},null,8,["code"])):(0,o.g1)("v-if",!0),e.codeHtml?((0,o.Wz)(),(0,o.An)(o.ae,{key:1},[g,(0,o.K2)(A,{code:e.codeHtml,language:"html"},null,8,["code"])],64)):(0,o.g1)("v-if",!0),e.codeJs?((0,o.Wz)(),(0,o.An)(o.ae,{key:2},[h,(0,o.K2)(A,{code:e.codeJs,language:"javascript"},null,8,["code"])],64)):(0,o.g1)("v-if",!0)])):(0,o.g1)("v-if",!0)])}]])},184:(e,a,l)=>{l.d(a,{c:()=>s});var o=l(7736);const t={id:"aloha_page"},n={name:"AlohaPage",components:{APageTabTitle:l(1972).c},props:{pageTitle:{type:String,required:!0}}},s=(0,l(8152).c)(n,[["render",function(e,a){const l=(0,o.E1)("a-page-tab-title");return(0,o.Wz)(),(0,o.An)("div",t,[e.pageTitle?((0,o.Wz)(),(0,o.Az)(l,{key:0,title:e.pageTitle},null,8,["title"])):(0,o.g1)("v-if",!0),(0,o.QD)("h1",null,(0,o.WA)(e.pageTitle),1),(0,o.oF)(e.$slots,"body")])}]])},3e3:(e,a,l)=>{l.r(a),l.d(a,{default:()=>_});var o=l(7736),t=l(184),n=l(7800),s=l(5948),i=l(3568);const c={name:"PageTableSimpleExample",components:{AlohaExample:n.c,ATable:s.c},setup(){const{codeHtml:e}={codeHtml:'<a-table\n  :columns="columns"\n  :data="data"\n  label="_A_TABLE_GROUP_SIMPLE_LABEL_"\n  key-id="id"\n>\n</a-table>'},{codeJs:a}={codeJs:'import {\n  ref,\n} from "vue";\n\nimport ATable from "aloha-vue/src/ATable/ATable";\n    \nexport default {\n  name: "PageTableSimpleExample",\n  components: {\n    ATable,\n  },\n  setup() {\n     const columns = [\n      {\n        id: "column1",\n        keyLabel: "id",\n        label: "_A_TABLE_COLUMN_1_",\n      },\n      {\n        id: "column2",\n        keyLabel: "aloha",\n        label: "_A_TABLE_COLUMN_2_",\n      },\n      {\n        id: "column3",\n        keyLabel: "aloha",\n        label: "_A_TABLE_COLUMN_3_",\n      },\n      {\n        id: "column4",\n        keyLabel: "aloha",\n        label: "_A_TABLE_COLUMN_4_",\n      },\n      {\n        id: "column5",\n        keyLabel: "aloha",\n        label: "_A_TABLE_COLUMN_5_",\n      },\n    ];\n\n    const data = ref([]);\n\n    const setData = () => {\n      const DATA = [];\n      times(20, item => {\n        DATA.push({\n          id: item,\n          aloha: `aloha ${ item }`,\n        });\n      });\n      data.value = DATA;\n    };\n\n    setData();\n    \n    return {\n      columns,\n      data,\n    };\n  },\n};'},l=(0,o.qo)([]);return(()=>{const e=[];(0,i.times)(20,(a=>{e.push({id:a,aloha:`aloha ${a}`})})),l.value=e})(),{codeHtml:e,codeJs:a,columns:[{id:"column1",keyLabel:"id",label:"_A_TABLE_COLUMN_1_"},{id:"column2",keyLabel:"aloha",label:"_A_TABLE_COLUMN_2_"},{id:"column3",keyLabel:"aloha",label:"_A_TABLE_COLUMN_3_"},{id:"column4",keyLabel:"aloha",label:"_A_TABLE_COLUMN_4_"},{id:"column5",keyLabel:"aloha",label:"_A_TABLE_COLUMN_5_"}],data:l}}};var d=l(8152);const r=(0,d.c)(c,[["render",function(e,a){const l=(0,o.E1)("a-table"),t=(0,o.E1)("aloha-example");return(0,o.Wz)(),(0,o.Az)(t,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TABLE_GROUP_SIMPLE_HEADER_",description:"_A_TABLE_GROUP_SIMPLE_DESCRIPTION_"},{default:(0,o.Ql)((()=>[(0,o.QD)("div",null,[(0,o.K2)(l,{columns:e.columns,data:e.data,label:"_A_TABLE_GROUP_SIMPLE_LABEL_","key-id":"id"},null,8,["columns","data"])])])),_:1},8,["code-html","code-js"])}]]);var u=l(36);const p={name:"PageTableSimple",components:{AlohaPage:t.c,PageTableSimpleExample:r},setup(){const{pageTitle:e}=function(){const e=(0,o.S6)((()=>(0,u.Eh)({placeholder:"_A_TABLE_SIMPLE_"})));return{pageTitle:(0,o.S6)((()=>`ATable ${e.value}`))}}();return{pageTitle:e}}},_=(0,d.c)(p,[["render",function(e,a){const l=(0,o.E1)("page-table-simple-example"),t=(0,o.E1)("aloha-page");return(0,o.Wz)(),(0,o.Az)(t,{"page-title":e.pageTitle},{body:(0,o.Ql)((()=>[(0,o.K2)(l)])),_:1},8,["page-title"])}]])},908:(e,a,l)=>{l.d(a,{c:()=>d});var o=l(7736),t=l(8104),n=l(1224),s=l(2476),i=l(3488),c=l(1272);l(6411),t.c.registerLanguage("javascript",n.c),t.c.registerLanguage("html",s.c),t.c.registerLanguage("markdown",i.c),t.c.registerLanguage("scss",c.c);const d={name:"AlohaHighlightjs",props:{autodetect:{type:Boolean,required:!1,default:!0},code:{type:String,required:!0},ignoreIllegals:{type:Boolean,required:!1,default:!0},language:{type:String,required:!1,default:""}},setup(e){const a=(0,o.qo)(e.language);(0,o.Kg)((()=>e.language),(e=>{a.value=e}));const l=(0,o.S6)((()=>e.autodetect&&!a.value)),n=(0,o.S6)((()=>!l.value&&!t.c.getLanguage(a.value)));return{className:(0,o.S6)((()=>n.value?"":`hljs ${a.value}`)),highlightedCode:(0,o.S6)((()=>n.value?(console.warn(`The language "${a.value}" you specified could not be found.`),e.code.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")):l.value?t.c.highlightAuto(e.code).value:t.c.highlight(e.code,{language:a.value,ignoreIllegals:e.ignoreIllegals}).value))}},render(){return(0,o.h)("pre",{},[(0,o.h)("code",{class:this.className,innerHTML:this.highlightedCode,tabindex:"0"})])}}}}]);
//# sourceMappingURL=chunk.6257.e5f8dcfd7644e1f304e4.js.map