"use strict";(self.webpackChunkaloha_vue_docs=self.webpackChunkaloha_vue_docs||[]).push([[9674],{1912:(e,a,l)=>{l.d(a,{A:()=>y});var o=l(6365);const t={class:"aloha_example"},n={key:1},s=(0,o.Lk)("dt",{class:"a_fs_4"},"Props:",-1),i=(0,o.Lk)("dt",{class:"a_fs_4"},"Emits:",-1),r=(0,o.Lk)("dt",{class:"a_fs_4"},"Slots:",-1),d=(0,o.Lk)("dt",{class:"a_fs_4"},"Exposes:",-1),u={class:"aloha_example__body"},c={class:"aloha_example__actions"},_={class:"a_btn_group"},p={key:3,class:"aloha_example__code"},g=(0,o.Lk)("h3",{class:"aloha_example__h3"},"HTML",-1),h=(0,o.Lk)("h3",{class:"aloha_example__h3 a_mt_3"},"JS",-1);var v=l(9791),A=l(8514),m=l(7791),E=l(4991),L=l(2543);const b={name:"AlohaExample",components:{AButton:v.A,AlohaHighlightjs:A.A,ATranslation:m.A},props:{code:{type:String,required:!1,default:void 0},codeHtml:{type:String,required:!1,default:void 0},codeJs:{type:String,required:!1,default:void 0},description:{type:String,required:!1,default:void 0},emits:{type:[String,Array],required:!1,default:void 0},exposes:{type:[String,Array],required:!1,default:void 0},header:{type:String,required:!1,default:void 0},isCodeVisibleDefault:{type:Boolean,required:!1,default:!1},props:{type:[String,Array],required:!1,default:void 0},slots:{type:[String,Array],required:!1,default:void 0}},setup(e){const{btnToggleCodeTitle:a,isCodeVisible:l,toggleCode:t}=function(e){const a=(0,o.lW)(e,"isCodeVisibleDefault"),l=(0,o.KR)(a.value);return{btnToggleCodeTitle:(0,o.EW)((()=>l.value?"_HIDE_SOURCE_":"_VIEW_SOURCE_")),isCodeVisible:l,toggleCode:()=>{l.value=!l.value}}}(e),{copyHtmlToClipboard:n,copyJsToClipboard:s}=function(e){const a=(0,o.lW)(e,"codeHtml"),l=(0,o.lW)(e,"codeJs"),{addNotification:t}=(0,E.Ay)();async function n(e){try{await navigator.clipboard.writeText(e),t({text:"_COPIED_TO_CLIPBOARD_"})}catch(e){t({text:e,type:"danger"})}}return{copyHtmlToClipboard:()=>{n(a.value)},copyJsToClipboard:()=>{n(l.value)}}}(e),{emitsLocal:i,exposesLocal:r,hasAtLeastOneProperty:d,hasEmits:u,hasExposes:c,hasProps:_,hasSlots:p,propsLocal:g,slotsLocal:h}=function(e){const a=(0,o.lW)(e,"props"),l=(0,o.lW)(e,"emits"),t=(0,o.lW)(e,"exposes"),n=(0,o.lW)(e,"slots"),s=e=>(0,L.isArray)(e)?e:(0,L.isString)(e)?[e]:[],i=(0,o.EW)((()=>s(l.value))),r=(0,o.EW)((()=>s(t.value))),d=(0,o.EW)((()=>s(a.value))),u=(0,o.EW)((()=>s(n.value))),c=(0,o.EW)((()=>d.value.length>0)),_=(0,o.EW)((()=>i.value.length>0)),p=(0,o.EW)((()=>u.value.length>0)),g=(0,o.EW)((()=>r.value.length>0)),h=(0,o.EW)((()=>c.value||_.value||g.value||p.value));return{emitsLocal:i,exposesLocal:r,hasAtLeastOneProperty:h,hasEmits:_,hasExposes:g,hasProps:c,hasSlots:p,propsLocal:d,slotsLocal:u}}(e);return{btnToggleCodeTitle:a,copyHtmlToClipboard:n,copyJsToClipboard:s,emitsLocal:i,exposesLocal:r,hasAtLeastOneProperty:d,hasEmits:u,hasExposes:c,hasProps:_,hasSlots:p,isCodeVisible:l,propsLocal:g,slotsLocal:h,toggleCode:t}}},y=(0,l(6262).A)(b,[["render",function(e,a){const l=(0,o.g2)("a-translation"),v=(0,o.g2)("a-button"),A=(0,o.g2)("aloha-highlightjs");return(0,o.uX)(),(0,o.CE)("div",t,[e.header?((0,o.uX)(),(0,o.Wv)(l,{key:0,class:"aloha_example__h2",tag:"h2",html:e.header},null,8,["html"])):(0,o.Q3)("v-if",!0),e.hasAtLeastOneProperty?((0,o.uX)(),(0,o.CE)("dl",n,[e.hasProps?((0,o.uX)(),(0,o.CE)(o.FK,{key:0},[s,((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(e.propsLocal,(e=>((0,o.uX)(),(0,o.CE)("dd",{key:e},[(0,o.Lk)("strong",null,(0,o.v_)(e),1)])))),128))],64)):(0,o.Q3)("v-if",!0),e.hasEmits?((0,o.uX)(),(0,o.CE)(o.FK,{key:1},[i,((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(e.emitsLocal,(e=>((0,o.uX)(),(0,o.CE)("dd",{key:e},[(0,o.Lk)("strong",null,(0,o.v_)(e),1)])))),128))],64)):(0,o.Q3)("v-if",!0),e.hasSlots?((0,o.uX)(),(0,o.CE)(o.FK,{key:2},[r,((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(e.slotsLocal,(e=>((0,o.uX)(),(0,o.CE)("dd",{key:e},[(0,o.Lk)("strong",null,(0,o.v_)(e),1)])))),128))],64)):(0,o.Q3)("v-if",!0),e.hasExposes?((0,o.uX)(),(0,o.CE)(o.FK,{key:3},[d,((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(e.exposesLocal,(e=>((0,o.uX)(),(0,o.CE)("dd",{key:e},[(0,o.Lk)("strong",null,(0,o.v_)(e),1)])))),128))],64)):(0,o.Q3)("v-if",!0)])):(0,o.Q3)("v-if",!0),e.description?((0,o.uX)(),(0,o.Wv)(l,{key:2,tag:"p",html:e.description},null,8,["html"])):(0,o.Q3)("v-if",!0),(0,o.Lk)("div",u,[(0,o.RG)(e.$slots,"default")]),(0,o.Lk)("div",c,[(0,o.Lk)("div",_,[e.codeJs?((0,o.uX)(),(0,o.Wv)(v,{key:0,class:"a_btn a_btn_secondary","icon-left":"FiletypeJs",title:"_COPY_CODE_JS_",onClick:e.copyJsToClipboard},null,8,["onClick"])):(0,o.Q3)("v-if",!0),e.codeHtml?((0,o.uX)(),(0,o.Wv)(v,{key:1,class:"a_btn a_btn_secondary","icon-left":"FiletypeHtml",title:"_COPY_CODE_HTML_",onClick:e.copyHtmlToClipboard},null,8,["onClick"])):(0,o.Q3)("v-if",!0),(0,o.bF)(v,{class:"a_btn a_btn_secondary","icon-left":"ChevronExpand",title:e.btnToggleCodeTitle,onClick:e.toggleCode},null,8,["title","onClick"])])]),e.isCodeVisible?((0,o.uX)(),(0,o.CE)("div",p,[e.code?((0,o.uX)(),(0,o.Wv)(A,{key:0,code:e.code,language:"markdown"},null,8,["code"])):(0,o.Q3)("v-if",!0),e.codeHtml?((0,o.uX)(),(0,o.CE)(o.FK,{key:1},[g,(0,o.bF)(A,{code:e.codeHtml,language:"html"},null,8,["code"])],64)):(0,o.Q3)("v-if",!0),e.codeJs?((0,o.uX)(),(0,o.CE)(o.FK,{key:2},[h,(0,o.bF)(A,{code:e.codeJs,language:"javascript"},null,8,["code"])],64)):(0,o.Q3)("v-if",!0)])):(0,o.Q3)("v-if",!0)])}]])},8310:(e,a,l)=>{l.d(a,{A:()=>s});var o=l(6365);const t={id:"aloha_page"},n={name:"AlohaPage",components:{APageTabTitle:l(4943).A},props:{pageTitle:{type:String,required:!0}}},s=(0,l(6262).A)(n,[["render",function(e,a){const l=(0,o.g2)("a-page-tab-title");return(0,o.uX)(),(0,o.CE)("div",t,[e.pageTitle?((0,o.uX)(),(0,o.Wv)(l,{key:0,title:e.pageTitle},null,8,["title"])):(0,o.Q3)("v-if",!0),(0,o.Lk)("h1",null,(0,o.v_)(e.pageTitle),1),(0,o.RG)(e.$slots,"body")])}]])},5364:(e,a,l)=>{l.r(a),l.d(a,{default:()=>p});var o=l(6365),t=l(8310),n=l(1912),s=l(8465),i=l(2543);const r={name:"PageTablePreviewDownRight",components:{AlohaExample:n.A,ATable:s.A},setup(){const{codeHtml:e}={codeHtml:'<a-table\n  :columns="columns"\n  :data="data"\n  label="_A_TABLE_GROUP_SIMPLE_LABEL_"\n  key-id="id"\n>\n</a-table>'},{codeJs:a}={codeJs:'import {\n  ref,\n} from "vue";\n\nimport ATable from "aloha-vue/src/ATable/ATable";\n    \nexport default {\n  name: "PageTablePreviewDownExample",\n  components: {\n    ATable,\n  },\n  setup() {\n     const columns = [\n      {\n        id: "column1",\n        keyLabel: "id",\n        label: "_A_TABLE_COLUMN_1_",\n      },\n      {\n        id: "column2",\n        keyLabel: "aloha",\n        label: "_A_TABLE_COLUMN_2_",\n      },\n      {\n        id: "column3",\n        keyLabel: "aloha",\n        label: "_A_TABLE_COLUMN_3_",\n      },\n      {\n        id: "column4",\n        keyLabel: "aloha",\n        label: "_A_TABLE_COLUMN_4_",\n      },\n      {\n        id: "column5",\n        keyLabel: "aloha",\n        label: "_A_TABLE_COLUMN_5_",\n      },\n    ];\n\n    const data = ref([]);\n\n    const setData = () => {\n      const DATA = [];\n      times(20, item => {\n        DATA.push({\n          id: item,\n          aloha: `aloha ${ item }`,\n        });\n      });\n      data.value = DATA;\n    };\n\n    setData();\n    \n    return {\n      columns,\n      data,\n    };\n  },\n};'},l=(0,o.KR)([]);return(()=>{const e=[];(0,i.times)(20,(a=>{e.push({id:a,aloha:`aloha ${a}`})})),l.value=e})(),{codeHtml:e,codeJs:a,columns:[{id:"column1",keyLabel:"id",label:"_A_TABLE_COLUMN_1_"},{id:"column2",keyLabel:"aloha",label:"_A_TABLE_COLUMN_2_"},{id:"column3",keyLabel:"aloha",label:"_A_TABLE_COLUMN_3_"},{id:"column4",keyLabel:"aloha",label:"_A_TABLE_COLUMN_4_"},{id:"column5",keyLabel:"aloha",label:"_A_TABLE_COLUMN_5_"}],data:l}}};var d=l(6262);const u=(0,d.A)(r,[["render",function(e,a){const l=(0,o.g2)("a-table"),t=(0,o.g2)("aloha-example");return(0,o.uX)(),(0,o.Wv)(t,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TABLE_GROUP_PREVIEW_DOWN_EXAMPLE_HEADER_",description:"_A_TABLE_GROUP_PREVIEW_DOWN_EXAMPLE_DESCRIPTION_"},{default:(0,o.k6)((()=>[(0,o.Lk)("div",null,[(0,o.bF)(l,{columns:e.columns,data:e.data,label:"_A_TABLE_GROUP_SIMPLE_LABEL_","key-id":"id",preview:"down"},{preview:(0,o.k6)((e=>[(0,o.Lk)("pre",null,(0,o.v_)(e),1)])),_:1},8,["columns","data"])])])),_:1},8,["code-html","code-js"])}]]);var c=l(2187);const _={name:"PageTablePreviewDown",components:{AlohaPage:t.A,PageTablePreviewDownExample:u},setup(){const{pageTitle:e}=function(){const e=(0,o.EW)((()=>(0,c.a1)({placeholder:"_A_TABLE_PREVIEW_DOWN_PAGE_TITLE_"})));return{pageTitle:(0,o.EW)((()=>`ATable ${e.value}`))}}();return{pageTitle:e}}},p=(0,d.A)(_,[["render",function(e,a){const l=(0,o.g2)("page-table-preview-down-example"),t=(0,o.g2)("aloha-page");return(0,o.uX)(),(0,o.Wv)(t,{"page-title":e.pageTitle},{body:(0,o.k6)((()=>[(0,o.bF)(l)])),_:1},8,["page-title"])}]])},8514:(e,a,l)=>{l.d(a,{A:()=>d});var o=l(6365),t=l(11),n=l(5603),s=l(9359),i=l(3265),r=l(2068);l(2348),t.A.registerLanguage("javascript",n.A),t.A.registerLanguage("html",s.A),t.A.registerLanguage("markdown",i.A),t.A.registerLanguage("scss",r.A);const d={name:"AlohaHighlightjs",props:{autodetect:{type:Boolean,required:!1,default:!0},code:{type:String,required:!0},ignoreIllegals:{type:Boolean,required:!1,default:!0},language:{type:String,required:!1,default:""}},setup(e){const a=(0,o.KR)(e.language);(0,o.wB)((()=>e.language),(e=>{a.value=e}));const l=(0,o.EW)((()=>e.autodetect&&!a.value)),n=(0,o.EW)((()=>!l.value&&!t.A.getLanguage(a.value)));return{className:(0,o.EW)((()=>n.value?"":`hljs ${a.value}`)),highlightedCode:(0,o.EW)((()=>n.value?(console.warn(`The language "${a.value}" you specified could not be found.`),e.code.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")):l.value?t.A.highlightAuto(e.code).value:t.A.highlight(e.code,{language:a.value,ignoreIllegals:e.ignoreIllegals}).value))}},render(){return(0,o.h)("pre",{},[(0,o.h)("code",{class:this.className,innerHTML:this.highlightedCode,tabindex:"0"})])}}}}]);
//# sourceMappingURL=chunk.9674.3da14fb2d7a0c599fa6a.js.map