"use strict";(self.webpackChunkaloha_vue_docs=self.webpackChunkaloha_vue_docs||[]).push([[1861],{3403:(a,e,n)=>{n.d(e,{Z:()=>y});var l=n(2147);const t={class:"aloha_example"},o={key:1},_=(0,l._)("dt",{class:"a_fs_4"},"Props:",-1),i=(0,l._)("dt",{class:"a_fs_4"},"Emits:",-1),s=(0,l._)("dt",{class:"a_fs_4"},"Slots:",-1),d=(0,l._)("dt",{class:"a_fs_4"},"Exposes:",-1),c={class:"aloha_example__body"},u={class:"aloha_example__actions"},A={class:"a_btn_group"},m={key:3,class:"aloha_example__code"},r=(0,l._)("h3",{class:"aloha_example__h3"},"HTML",-1),L=(0,l._)("h3",{class:"aloha_example__h3 a_mt_3"},"JS",-1);var T=n(7079),p=n(1261),b=n(3925),h=n(9273);n(1062),p.Z.registerLanguage("javascript",b.Z),p.Z.registerLanguage("html",h.Z);const g={name:"AlohaHighlightjs",props:{autodetect:{type:Boolean,required:!1,default:!0},code:{type:String,required:!0},ignoreIllegals:{type:Boolean,required:!1,default:!0},language:{type:String,required:!1,default:""}},setup(a){const e=(0,l.iH)(a.language);(0,l.YP)((()=>a.language),(a=>{e.value=a}));const n=(0,l.Fl)((()=>a.autodetect&&!e.value)),t=(0,l.Fl)((()=>!n.value&&!p.Z.getLanguage(e.value)));return{className:(0,l.Fl)((()=>t.value?"":`hljs ${e.value}`)),highlightedCode:(0,l.Fl)((()=>t.value?(console.warn(`The language "${e.value}" you specified could not be found.`),a.code.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")):n.value?p.Z.highlightAuto(a.code).value:p.Z.highlight(a.code,{language:e.value,ignoreIllegals:a.ignoreIllegals}).value))}},render(){return(0,l.h)("pre",{},[(0,l.h)("code",{class:this.className,innerHTML:this.highlightedCode,tabindex:"0"})])}};var E=n(6085),O=n(9309),P=n(3059);const N={name:"AlohaExample",components:{AButton:T.Z,AlohaHighlightjs:g,ATranslation:E.Z},props:{codeHtml:{type:String,required:!0},codeJs:{type:String,required:!0},description:{type:String,required:!1,default:void 0},emits:{type:[String,Array],required:!1,default:void 0},exposes:{type:[String,Array],required:!1,default:void 0},header:{type:String,required:!1,default:void 0},props:{type:[String,Array],required:!1,default:void 0},slots:{type:[String,Array],required:!1,default:void 0}},setup(a){const{btnToggleCodeTitle:e,isCodeVisible:n,toggleCode:t}=function(){const a=(0,l.iH)(!1);return{btnToggleCodeTitle:(0,l.Fl)((()=>a.value?"_HIDE_SOURCE_":"_VIEW_SOURCE_")),isCodeVisible:a,toggleCode:()=>{a.value=!a.value}}}(),{copyHtmlToClipboard:o,copyJsToClipboard:_}=function(a){const e=(0,l.Vh)(a,"codeHtml"),n=(0,l.Vh)(a,"codeJs"),{addNotification:t}=(0,O.ZP)();async function o(a){try{await navigator.clipboard.writeText(a),t({text:"_COPIED_TO_CLIPBOARD_"})}catch(a){t({text:a,type:"danger"})}}return{copyHtmlToClipboard:()=>{o(e.value)},copyJsToClipboard:()=>{o(n.value)}}}(a),{emitsLocal:i,exposesLocal:s,hasAtLeastOneProperty:d,hasEmits:c,hasExposes:u,hasProps:A,hasSlots:m,propsLocal:r,slotsLocal:L}=function(a){const e=(0,l.Vh)(a,"props"),n=(0,l.Vh)(a,"emits"),t=(0,l.Vh)(a,"exposes"),o=(0,l.Vh)(a,"slots"),_=a=>(0,P.isArray)(a)?a:(0,P.isString)(a)?[a]:[],i=(0,l.Fl)((()=>_(n.value))),s=(0,l.Fl)((()=>_(t.value))),d=(0,l.Fl)((()=>_(e.value))),c=(0,l.Fl)((()=>_(o.value))),u=(0,l.Fl)((()=>d.value.length>0)),A=(0,l.Fl)((()=>i.value.length>0)),m=(0,l.Fl)((()=>c.value.length>0)),r=(0,l.Fl)((()=>s.value.length>0)),L=(0,l.Fl)((()=>u.value||A.value||r.value||m.value));return{emitsLocal:i,exposesLocal:s,hasAtLeastOneProperty:L,hasEmits:A,hasExposes:r,hasProps:u,hasSlots:m,propsLocal:d,slotsLocal:c}}(a);return{btnToggleCodeTitle:e,copyHtmlToClipboard:o,copyJsToClipboard:_,emitsLocal:i,exposesLocal:s,hasAtLeastOneProperty:d,hasEmits:c,hasExposes:u,hasProps:A,hasSlots:m,isCodeVisible:n,propsLocal:r,slotsLocal:L,toggleCode:t}}},y=(0,n(1419).Z)(N,[["render",function(a,e){const n=(0,l.up)("a-translation"),T=(0,l.up)("a-button"),p=(0,l.up)("aloha-highlightjs");return(0,l.wg)(),(0,l.iD)("div",t,[a.header?((0,l.wg)(),(0,l.j4)(n,{key:0,class:"aloha_example__h2",tag:"h2",html:a.header},null,8,["html"])):(0,l.kq)("v-if",!0),a.hasAtLeastOneProperty?((0,l.wg)(),(0,l.iD)("dl",o,[a.hasProps?((0,l.wg)(),(0,l.iD)(l.HY,{key:0},[_,((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(a.propsLocal,(a=>((0,l.wg)(),(0,l.iD)("dd",{key:a},[(0,l._)("strong",null,(0,l.zw)(a),1)])))),128))],64)):(0,l.kq)("v-if",!0),a.hasEmits?((0,l.wg)(),(0,l.iD)(l.HY,{key:1},[i,((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(a.emitsLocal,(a=>((0,l.wg)(),(0,l.iD)("dd",{key:a},[(0,l._)("strong",null,(0,l.zw)(a),1)])))),128))],64)):(0,l.kq)("v-if",!0),a.hasSlots?((0,l.wg)(),(0,l.iD)(l.HY,{key:2},[s,((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(a.slotsLocal,(a=>((0,l.wg)(),(0,l.iD)("dd",{key:a},[(0,l._)("strong",null,(0,l.zw)(a),1)])))),128))],64)):(0,l.kq)("v-if",!0),a.hasExposes?((0,l.wg)(),(0,l.iD)(l.HY,{key:3},[d,((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(a.exposesLocal,(a=>((0,l.wg)(),(0,l.iD)("dd",{key:a},[(0,l._)("strong",null,(0,l.zw)(a),1)])))),128))],64)):(0,l.kq)("v-if",!0)])):(0,l.kq)("v-if",!0),a.description?((0,l.wg)(),(0,l.j4)(n,{key:2,tag:"p",html:a.description},null,8,["html"])):(0,l.kq)("v-if",!0),(0,l._)("div",c,[(0,l.WI)(a.$slots,"default")]),(0,l._)("div",u,[(0,l._)("div",A,[(0,l.Wm)(T,{class:"a_btn a_btn_secondary","icon-left":"FiletypeJs",title:"_COPY_CODE_JS_",onClick:a.copyJsToClipboard},null,8,["onClick"]),(0,l.Wm)(T,{class:"a_btn a_btn_secondary","icon-left":"FiletypeHtml",title:"_COPY_CODE_HTML_",onClick:a.copyHtmlToClipboard},null,8,["onClick"]),(0,l.Wm)(T,{class:"a_btn a_btn_secondary","icon-left":"ChevronExpand",title:a.btnToggleCodeTitle,onClick:a.toggleCode},null,8,["title","onClick"])])]),a.isCodeVisible?((0,l.wg)(),(0,l.iD)("div",m,[r,(0,l.Wm)(p,{code:a.codeHtml,language:"html"},null,8,["code"]),L,(0,l.Wm)(p,{code:a.codeJs,language:"javascript"},null,8,["code"])])):(0,l.kq)("v-if",!0)])}]])},3588:(a,e,n)=>{n.d(e,{Z:()=>_});var l=n(2147);const t={id:"aloha_page"},o={name:"AlohaPage",components:{APageTabTitle:n(2597).Z},props:{pageTitle:{type:String,required:!0}}},_=(0,n(1419).Z)(o,[["render",function(a,e){const n=(0,l.up)("a-page-tab-title");return(0,l.wg)(),(0,l.iD)("div",t,[a.pageTitle?((0,l.wg)(),(0,l.j4)(n,{key:0,title:a.pageTitle},null,8,["title"])):(0,l.kq)("v-if",!0),(0,l._)("h1",null,(0,l.zw)(a.pageTitle),1),(0,l.WI)(a.$slots,"body")])}]])},9426:(a,e,n)=>{n.d(e,{Z:()=>d});var l=n(2147);const t={class:"a_p_2"};var o=n(5972),_=n(8405),i=n(3059);const s={name:"AlohaTableTranslate",components:{ATable:o.Z},props:{data:{type:Array,required:!0}},setup(a){const{columns:e}={columns:[{id:"placeholder",label:"_ALOHA_TABLE_COLUMN_TRANSLATE_PLACEHOLDER_",keyLabel:"placeholder",sortId:"placeholder"},{id:"translate",label:"_ALOHA_TABLE_COLUMN_TRANSLATE_",keyLabel:"translate",sortId:"translate"}]},{dataTranslated:n}=function(a){const e=(0,l.Vh)(a,"data");return{dataTranslated:(0,l.Fl)((()=>{const a=[];return(0,i.forEach)(e.value,(e=>{a.push({placeholder:e,translate:(0,_.Gd)({placeholder:e})})})),a}))}}(a);return{columns:e,dataTranslated:n}}},d=(0,n(1419).Z)(s,[["render",function(a,e){const n=(0,l.up)("a-table");return(0,l.wg)(),(0,l.iD)("div",t,[(0,l.Wm)(n,{label:"_ALOHA_TABLE_TRANSLATE_LABEL_",columns:a.columns,data:a.dataTranslated,"is-action-column-visible":!1,"model-sort":"name","is-columns-dnd":!1,"is-sorting-multi-column":!1,"show-first-sorting-sequence-number":!1},null,8,["columns","data"])])}]])},7233:(a,e,n)=>{n.r(e),n.d(e,{default:()=>N});var l=n(2147),t=n(3588),o=n(9426),_=n(3403),i=n(5972),s=n(3059);const d={name:"PageTablePaginationDisabled",components:{AlohaExample:_.Z,ATable:i.Z},setup(){const{codeHtml:a}={codeHtml:'<a-table\n  :columns="columns"\n  :data="data"\n  label="_A_TABLE_GROUP_PAGINATION_DISABLED_LABEL_"\n  key-id="id"\n  :pagination="{ use: true, disabled: true }"\n>\n</a-table>'},{codeJs:e}={codeJs:'import {\n  ref,\n} from "vue";\n\nimport ATable from "aloha-vue/src/ATable/ATable";\n    \nexport default {\n  name: "PageTablePaginationDisabled",\n  components: {\n    ATable,\n  },\n  setup() {\n     const columns = [\n      {\n        id: "column1",\n        keyLabel: "id",\n        label: "_A_TABLE_COLUMN_1_",\n      },\n      {\n        id: "column2",\n        keyLabel: "aloha",\n        label: "_A_TABLE_COLUMN_2_",\n      },\n      {\n        id: "column3",\n        keyLabel: "aloha",\n        label: "_A_TABLE_COLUMN_3_",\n      },\n      {\n        id: "column4",\n        keyLabel: "aloha",\n        label: "_A_TABLE_COLUMN_4_",\n      },\n      {\n        id: "column5",\n        keyLabel: "aloha",\n        label: "_A_TABLE_COLUMN_5_",\n      },\n    ];\n\n    const data = ref([]);\n\n    const setData = () => {\n      const DATA = [];\n      times(1001, item => {\n        DATA.push({\n          id: item,\n          aloha: `aloha ${ item }`,\n        });\n      });\n      data.value = DATA;\n    };\n\n    setData();\n    \n    return {\n      columns,\n      data,\n    };\n  },\n};'},n=(0,l.iH)([]);return(()=>{const a=[];(0,s.times)(1001,(e=>{a.push({id:e,aloha:`aloha ${e}`})})),n.value=a})(),{codeHtml:a,codeJs:e,columns:[{id:"column1",keyLabel:"id",label:"_A_TABLE_COLUMN_1_"},{id:"column2",keyLabel:"aloha",label:"_A_TABLE_COLUMN_2_"},{id:"column3",keyLabel:"aloha",label:"_A_TABLE_COLUMN_3_"},{id:"column4",keyLabel:"aloha",label:"_A_TABLE_COLUMN_4_"},{id:"column5",keyLabel:"aloha",label:"_A_TABLE_COLUMN_5_"}],data:n}}};var c=n(1419);const u=(0,c.Z)(d,[["render",function(a,e){const n=(0,l.up)("a-table"),t=(0,l.up)("aloha-example");return(0,l.wg)(),(0,l.j4)(t,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_TABLE_GROUP_PAGINATION_DISABLED_HEADER_",description:"_A_TABLE_GROUP_PAGINATION_DISABLED_DESCRIPTION_",props:"pagination.disabled"},{default:(0,l.w5)((()=>[(0,l._)("div",null,[(0,l.Wm)(n,{columns:a.columns,data:a.data,label:"_A_TABLE_GROUP_PAGINATION_DISABLED_LABEL_","key-id":"id",pagination:{use:!0,disabled:!0}},null,8,["columns","data"])])])),_:1},8,["code-html","code-js"])}]]),A={name:"PageTablePaginationExample",components:{AlohaExample:_.Z,ATable:i.Z},setup(){const{codeHtml:a}={codeHtml:'<a-table\n  :columns="columns"\n  :data="data"\n  label="_A_TABLE_GROUP_PAGINATION_LABEL_"\n  key-id="id"\n  :pagination="{ use: true }"\n>\n</a-table>'},{codeJs:e}={codeJs:'import {\n  ref,\n} from "vue";\n\nimport ATable from "aloha-vue/src/ATable/ATable";\n    \nexport default {\n  name: "PageTablePaginationExample",\n  components: {\n    ATable,\n  },\n  setup() {\n     const columns = [\n      {\n        id: "column1",\n        keyLabel: "id",\n        label: "_A_TABLE_COLUMN_1_",\n      },\n      {\n        id: "column2",\n        keyLabel: "aloha",\n        label: "_A_TABLE_COLUMN_2_",\n      },\n      {\n        id: "column3",\n        keyLabel: "aloha",\n        label: "_A_TABLE_COLUMN_3_",\n      },\n      {\n        id: "column4",\n        keyLabel: "aloha",\n        label: "_A_TABLE_COLUMN_4_",\n      },\n      {\n        id: "column5",\n        keyLabel: "aloha",\n        label: "_A_TABLE_COLUMN_5_",\n      },\n    ];\n\n    const data = ref([]);\n\n    const setData = () => {\n      const DATA = [];\n      times(1001, item => {\n        DATA.push({\n          id: item,\n          aloha: `aloha ${ item }`,\n        });\n      });\n      data.value = DATA;\n    };\n\n    setData();\n    \n    return {\n      columns,\n      data,\n    };\n  },\n};'},n=(0,l.iH)([]);return(()=>{const a=[];(0,s.times)(1001,(e=>{a.push({id:e,aloha:`aloha ${e}`})})),n.value=a})(),{codeHtml:a,codeJs:e,columns:[{id:"column1",keyLabel:"id",label:"_A_TABLE_COLUMN_1_"},{id:"column2",keyLabel:"aloha",label:"_A_TABLE_COLUMN_2_"},{id:"column3",keyLabel:"aloha",label:"_A_TABLE_COLUMN_3_"},{id:"column4",keyLabel:"aloha",label:"_A_TABLE_COLUMN_4_"},{id:"column5",keyLabel:"aloha",label:"_A_TABLE_COLUMN_5_"}],data:n}}},m=(0,c.Z)(A,[["render",function(a,e){const n=(0,l.up)("a-table"),t=(0,l.up)("aloha-example");return(0,l.wg)(),(0,l.j4)(t,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_TABLE_GROUP_PAGINATION_HEADER_",description:"_A_TABLE_GROUP_PAGINATION_DESCRIPTION_",props:"pagination.use"},{default:(0,l.w5)((()=>[(0,l._)("div",null,[(0,l.Wm)(n,{columns:a.columns,data:a.data,label:"_A_TABLE_GROUP_PAGINATION_LABEL_","key-id":"id",pagination:{use:!0}},null,8,["columns","data"])])])),_:1},8,["code-html","code-js"])}]]),r={name:"PageTablePaginationLimit",components:{AlohaExample:_.Z,ATable:i.Z},setup(){const{codeHtml:a}={codeHtml:"<a-table\n  :columns=\"columns\"\n  :data=\"data\"\n  label=\"_A_TABLE_GROUP_PAGINATION_LIMIT_LABEL_\"\n  key-id=\"id\"\n  :pagination=\"{ use: true, limitsPerPage: ['5', '10', '25', '50', '100', '200'] }\"\n>\n</a-table>"},{codeJs:e}={codeJs:'import {\n  ref,\n} from "vue";\n\nimport ATable from "aloha-vue/src/ATable/ATable";\n    \nexport default {\n  name: "PageTablePaginationLimit",\n  components: {\n    ATable,\n  },\n  setup() {\n     const columns = [\n      {\n        id: "column1",\n        keyLabel: "id",\n        label: "_A_TABLE_COLUMN_1_",\n      },\n      {\n        id: "column2",\n        keyLabel: "aloha",\n        label: "_A_TABLE_COLUMN_2_",\n      },\n      {\n        id: "column3",\n        keyLabel: "aloha",\n        label: "_A_TABLE_COLUMN_3_",\n      },\n      {\n        id: "column4",\n        keyLabel: "aloha",\n        label: "_A_TABLE_COLUMN_4_",\n      },\n      {\n        id: "column5",\n        keyLabel: "aloha",\n        label: "_A_TABLE_COLUMN_5_",\n      },\n    ];\n\n    const data = ref([]);\n\n    const setData = () => {\n      const DATA = [];\n      times(1001, item => {\n        DATA.push({\n          id: item,\n          aloha: `aloha ${ item }`,\n        });\n      });\n      data.value = DATA;\n    };\n\n    setData();\n    \n    return {\n      columns,\n      data,\n    };\n  },\n};'},n=(0,l.iH)([]);return(()=>{const a=[];(0,s.times)(1001,(e=>{a.push({id:e,aloha:`aloha ${e}`})})),n.value=a})(),{codeHtml:a,codeJs:e,columns:[{id:"column1",keyLabel:"id",label:"_A_TABLE_COLUMN_1_"},{id:"column2",keyLabel:"aloha",label:"_A_TABLE_COLUMN_2_"},{id:"column3",keyLabel:"aloha",label:"_A_TABLE_COLUMN_3_"},{id:"column4",keyLabel:"aloha",label:"_A_TABLE_COLUMN_4_"},{id:"column5",keyLabel:"aloha",label:"_A_TABLE_COLUMN_5_"}],data:n}}},L=(0,c.Z)(r,[["render",function(a,e){const n=(0,l.up)("a-table"),t=(0,l.up)("aloha-example");return(0,l.wg)(),(0,l.j4)(t,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_TABLE_GROUP_PAGINATION_LIMIT_HEADER_",description:"_A_TABLE_GROUP_PAGINATION_LIMIT_DESCRIPTION_",props:"pagination.limitsPerPage"},{default:(0,l.w5)((()=>[(0,l._)("div",null,[(0,l.Wm)(n,{columns:a.columns,data:a.data,label:"_A_TABLE_GROUP_PAGINATION_LIMIT_LABEL_","key-id":"id",pagination:{use:!0,limitsPerPage:["5","10","25","50","100","200"]}},null,8,["columns","data"])])])),_:1},8,["code-html","code-js"])}]]),T={name:"PageTablePaginationLimitStart",components:{AlohaExample:_.Z,ATable:i.Z},setup(){const{codeHtml:a}={codeHtml:"<a-table\n  :columns=\"columns\"\n  :data=\"data\"\n  label=\"_A_TABLE_GROUP_PAGINATION_LIMIT_START_LABEL_\"\n  key-id=\"id\"\n  :pagination=\"{ use: true, limitsPerPage: ['5', '10', '25', '50', '100', '200'], limitStart: 5 }\"\n>\n</a-table>"},{codeJs:e}={codeJs:'import {\n  ref,\n} from "vue";\n\nimport ATable from "aloha-vue/src/ATable/ATable";\n    \nexport default {\n  name: "PageTablePaginationLimitStart",\n  components: {\n    ATable,\n  },\n  setup() {\n     const columns = [\n      {\n        id: "column1",\n        keyLabel: "id",\n        label: "_A_TABLE_COLUMN_1_",\n      },\n      {\n        id: "column2",\n        keyLabel: "aloha",\n        label: "_A_TABLE_COLUMN_2_",\n      },\n      {\n        id: "column3",\n        keyLabel: "aloha",\n        label: "_A_TABLE_COLUMN_3_",\n      },\n      {\n        id: "column4",\n        keyLabel: "aloha",\n        label: "_A_TABLE_COLUMN_4_",\n      },\n      {\n        id: "column5",\n        keyLabel: "aloha",\n        label: "_A_TABLE_COLUMN_5_",\n      },\n    ];\n\n    const data = ref([]);\n\n    const setData = () => {\n      const DATA = [];\n      times(1001, item => {\n        DATA.push({\n          id: item,\n          aloha: `aloha ${ item }`,\n        });\n      });\n      data.value = DATA;\n    };\n\n    setData();\n    \n    return {\n      columns,\n      data,\n    };\n  },\n};'},n=(0,l.iH)([]);return(()=>{const a=[];(0,s.times)(1001,(e=>{a.push({id:e,aloha:`aloha ${e}`})})),n.value=a})(),{codeHtml:a,codeJs:e,columns:[{id:"column1",keyLabel:"id",label:"_A_TABLE_COLUMN_1_"},{id:"column2",keyLabel:"aloha",label:"_A_TABLE_COLUMN_2_"},{id:"column3",keyLabel:"aloha",label:"_A_TABLE_COLUMN_3_"},{id:"column4",keyLabel:"aloha",label:"_A_TABLE_COLUMN_4_"},{id:"column5",keyLabel:"aloha",label:"_A_TABLE_COLUMN_5_"}],data:n}}},p=(0,c.Z)(T,[["render",function(a,e){const n=(0,l.up)("a-table"),t=(0,l.up)("aloha-example");return(0,l.wg)(),(0,l.j4)(t,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_TABLE_GROUP_PAGINATION_LIMIT_START_HEADER_",description:"_A_TABLE_GROUP_PAGINATION_LIMIT_START_DESCRIPTION_",props:"pagination.limitStart"},{default:(0,l.w5)((()=>[(0,l._)("div",null,[(0,l.Wm)(n,{columns:a.columns,data:a.data,label:"_A_TABLE_GROUP_PAGINATION_LIMIT_START_LABEL_","key-id":"id",pagination:{use:!0,limitsPerPage:["5","10","25","50","100","200"],limitStart:5}},null,8,["columns","data"])])])),_:1},8,["code-html","code-js"])}]]),b={name:"PageTablePaginationMaxItems",components:{AlohaExample:_.Z,ATable:i.Z},setup(){const{codeHtml:a}={codeHtml:'<a-table\n  :columns="columns"\n  :data="data"\n  label="_A_TABLE_GROUP_PAGINATION_MAX_ITEMS_LABEL_"\n  key-id="id"\n  :pagination="{ use: true, maxPages: 7 }"\n>\n</a-table>'},{codeJs:e}={codeJs:'import {\n  ref,\n} from "vue";\n\nimport ATable from "aloha-vue/src/ATable/ATable";\n    \nexport default {\n  name: "PageTablePaginationMaxItems",\n  components: {\n    ATable,\n  },\n  setup() {\n     const columns = [\n      {\n        id: "column1",\n        keyLabel: "id",\n        label: "_A_TABLE_COLUMN_1_",\n      },\n      {\n        id: "column2",\n        keyLabel: "aloha",\n        label: "_A_TABLE_COLUMN_2_",\n      },\n      {\n        id: "column3",\n        keyLabel: "aloha",\n        label: "_A_TABLE_COLUMN_3_",\n      },\n      {\n        id: "column4",\n        keyLabel: "aloha",\n        label: "_A_TABLE_COLUMN_4_",\n      },\n      {\n        id: "column5",\n        keyLabel: "aloha",\n        label: "_A_TABLE_COLUMN_5_",\n      },\n    ];\n\n    const data = ref([]);\n\n    const setData = () => {\n      const DATA = [];\n      times(1001, item => {\n        DATA.push({\n          id: item,\n          aloha: `aloha ${ item }`,\n        });\n      });\n      data.value = DATA;\n    };\n\n    setData();\n    \n    return {\n      columns,\n      data,\n    };\n  },\n};'},n=(0,l.iH)([]);return(()=>{const a=[];(0,s.times)(1001,(e=>{a.push({id:e,aloha:`aloha ${e}`})})),n.value=a})(),{codeHtml:a,codeJs:e,columns:[{id:"column1",keyLabel:"id",label:"_A_TABLE_COLUMN_1_"},{id:"column2",keyLabel:"aloha",label:"_A_TABLE_COLUMN_2_"},{id:"column3",keyLabel:"aloha",label:"_A_TABLE_COLUMN_3_"},{id:"column4",keyLabel:"aloha",label:"_A_TABLE_COLUMN_4_"},{id:"column5",keyLabel:"aloha",label:"_A_TABLE_COLUMN_5_"}],data:n}}},h=(0,c.Z)(b,[["render",function(a,e){const n=(0,l.up)("a-table"),t=(0,l.up)("aloha-example");return(0,l.wg)(),(0,l.j4)(t,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_TABLE_GROUP_PAGINATION_MAX_ITEMS_HEADER_",description:"_A_TABLE_GROUP_PAGINATION_MAX_ITEMS_DESCRIPTION_",props:"pagination.maxPages"},{default:(0,l.w5)((()=>[(0,l._)("div",null,[(0,l.Wm)(n,{columns:a.columns,data:a.data,label:"_A_TABLE_GROUP_PAGINATION_MAX_ITEMS_LABEL_","key-id":"id",pagination:{use:!0,maxPages:7}},null,8,["columns","data"])])])),_:1},8,["code-html","code-js"])}]]),g={name:"PageTablePaginationOutside",components:{AlohaExample:_.Z,ATable:i.Z},setup(){const{codeHtml:a}={codeHtml:'<a-table\n  :columns="columns"\n  :data="data"\n  label="_A_TABLE_GROUP_PAGINATION_MAX_ITEMS_LABEL_"\n  key-id="id"\n  :pagination="{ use: true, maxPages: 7 }"\n>\n</a-table>'},{codeJs:e}={codeJs:'import {\n  ref,\n} from "vue";\n\nimport ATable from "aloha-vue/src/ATable/ATable";\n    \nexport default {\n  name: "PageTablePaginationMaxItems",\n  components: {\n    ATable,\n  },\n  setup() {\n     const columns = [\n      {\n        id: "column1",\n        keyLabel: "id",\n        label: "_A_TABLE_COLUMN_1_",\n      },\n      {\n        id: "column2",\n        keyLabel: "aloha",\n        label: "_A_TABLE_COLUMN_2_",\n      },\n      {\n        id: "column3",\n        keyLabel: "aloha",\n        label: "_A_TABLE_COLUMN_3_",\n      },\n      {\n        id: "column4",\n        keyLabel: "aloha",\n        label: "_A_TABLE_COLUMN_4_",\n      },\n      {\n        id: "column5",\n        keyLabel: "aloha",\n        label: "_A_TABLE_COLUMN_5_",\n      },\n    ];\n\n    const data = ref([]);\n\n    const setData = () => {\n      const DATA = [];\n      times(1001, item => {\n        DATA.push({\n          id: item,\n          aloha: `aloha ${ item }`,\n        });\n      });\n      data.value = DATA;\n    };\n\n    setData();\n    \n    return {\n      columns,\n      data,\n    };\n  },\n};'},n=(0,l.iH)([]),t=(0,l.iH)(10),o=(0,l.iH)(0),_=(0,l.Fl)((()=>n.value.slice(o.value,t.value+o.value))),i=({limit:a,offset:e})=>{t.value=a,o.value=e};return(()=>{const a=[];(0,s.times)(999,(e=>{a.push({id:e,aloha:`aloha ${e}`})})),n.value=a})(),{changeLimit:({limit:a,offset:e})=>{i({limit:a,offset:e})},changeOffset:({limit:a,offset:e})=>{i({limit:a,offset:e})},codeHtml:a,codeJs:e,columns:[{id:"column1",keyLabel:"id",label:"_A_TABLE_COLUMN_1_"},{id:"column2",keyLabel:"aloha",label:"_A_TABLE_COLUMN_2_"},{id:"column3",keyLabel:"aloha",label:"_A_TABLE_COLUMN_3_"},{id:"column4",keyLabel:"aloha",label:"_A_TABLE_COLUMN_4_"},{id:"column5",keyLabel:"aloha",label:"_A_TABLE_COLUMN_5_"}],data:n,dataPaginated:_}}},E=(0,c.Z)(g,[["render",function(a,e){const n=(0,l.up)("a-table"),t=(0,l.up)("aloha-example");return(0,l.wg)(),(0,l.j4)(t,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_TABLE_GROUP_PAGINATION_OUTSIDE_HEADER_",description:"_A_TABLE_GROUP_PAGINATION_OUTSIDE_DESCRIPTION_",props:["pagination.isOutside","count-all-rows"],emits:["change-limit","change-offset"]},{default:(0,l.w5)((()=>[(0,l._)("div",null,[(0,l.Wm)(n,{columns:a.columns,data:a.dataPaginated,label:"_A_TABLE_GROUP_PAGINATION_OUTSIDE_LABEL_","key-id":"id",pagination:{use:!0,isOutside:!0},"count-all-rows":a.data.length,onChangeLimit:a.changeLimit,onChangeOffset:a.changeOffset},null,8,["columns","data","count-all-rows","onChangeLimit","onChangeOffset"])])])),_:1},8,["code-html","code-js","props"])}]]);var O=n(8405);const P={name:"PageTablePagination",components:{AlohaPage:t.Z,AlohaTableTranslate:o.Z,PageTablePaginationDisabled:u,PageTablePaginationExample:m,PageTablePaginationLimit:L,PageTablePaginationLimitStart:p,PageTablePaginationMaxItems:h,PageTablePaginationOutside:E},setup(){const{pageTitle:a}=function(){const a=(0,l.Fl)((()=>(0,O.Gd)({placeholder:"_A_TABLE_PAGINATION_"})));return{pageTitle:(0,l.Fl)((()=>`ATable ${a.value}`))}}(),{dataTranslate:e}={dataTranslate:["_A_COUNT_PER_PAGE_{{start}}_{{current}}_{{count}}_","_A_COUNT_PER_PAGE_","_A_COUNT_PER_PAGE_ITEM_{{count}}_","_A_PAGINATION_NAVIGATION_","_A_PAGINATION_FIRST_PAGE_","_A_PAGINATION_PREVIOUS_PAGE_","_A_PAGINATION_MOBILE_{{currentPage}}_{{allPages}}_","_A_PAGINATION_TO_PAGE_{{page}}_","_A_PAGINATION_NEXT_PAGE_","_A_PAGINATION_LAST_PAGE_"]};return{dataTranslate:e,pageTitle:a}}},N=(0,c.Z)(P,[["render",function(a,e){const n=(0,l.up)("page-table-pagination-example"),t=(0,l.up)("page-table-pagination-limit"),o=(0,l.up)("page-table-pagination-limit-start"),_=(0,l.up)("page-table-pagination-max-items"),i=(0,l.up)("page-table-pagination-disabled"),s=(0,l.up)("page-table-pagination-outside"),d=(0,l.up)("aloha-table-translate"),c=(0,l.up)("aloha-page");return(0,l.wg)(),(0,l.j4)(c,{"page-title":a.pageTitle},{body:(0,l.w5)((()=>[(0,l.Wm)(n),(0,l.Wm)(t),(0,l.Wm)(o),(0,l.Wm)(_),(0,l.Wm)(i),(0,l.Wm)(s),(0,l.Wm)(d,{data:a.dataTranslate},null,8,["data"])])),_:1},8,["page-title"])}]])}}]);
//# sourceMappingURL=chunk.1861.28bf7467f848836cfa01.js.map