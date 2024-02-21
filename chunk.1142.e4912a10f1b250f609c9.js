"use strict";(self.webpackChunkaloha_vue_docs=self.webpackChunkaloha_vue_docs||[]).push([[1142],{1912:(e,l,a)=>{a.d(l,{A:()=>C});var o=a(6365);const t={class:"aloha_example"},i={key:1},s=(0,o.Lk)("dt",{class:"a_fs_4"},"Props:",-1),n=(0,o.Lk)("dt",{class:"a_fs_4"},"Emits:",-1),d=(0,o.Lk)("dt",{class:"a_fs_4"},"Slots:",-1),r=(0,o.Lk)("dt",{class:"a_fs_4"},"Exposes:",-1),c={class:"aloha_example__body"},u={class:"aloha_example__actions"},b={class:"a_btn_group"},p={key:3,class:"aloha_example__code"},h=(0,o.Lk)("h3",{class:"aloha_example__h3"},"HTML",-1),g=(0,o.Lk)("h3",{class:"aloha_example__h3 a_mt_3"},"JS",-1);var m=a(9791),v=a(8514),_=a(7791),y=a(4991),f=a(2543);const k={name:"AlohaExample",components:{AButton:m.A,AlohaHighlightjs:v.A,ATranslation:_.A},props:{code:{type:String,required:!1,default:void 0},codeHtml:{type:String,required:!1,default:void 0},codeJs:{type:String,required:!1,default:void 0},description:{type:String,required:!1,default:void 0},emits:{type:[String,Array],required:!1,default:void 0},exposes:{type:[String,Array],required:!1,default:void 0},header:{type:String,required:!1,default:void 0},isCodeVisibleDefault:{type:Boolean,required:!1,default:!1},props:{type:[String,Array],required:!1,default:void 0},slots:{type:[String,Array],required:!1,default:void 0}},setup(e){const{btnToggleCodeTitle:l,isCodeVisible:a,toggleCode:t}=function(e){const l=(0,o.lW)(e,"isCodeVisibleDefault"),a=(0,o.KR)(l.value);return{btnToggleCodeTitle:(0,o.EW)((()=>a.value?"_HIDE_SOURCE_":"_VIEW_SOURCE_")),isCodeVisible:a,toggleCode:()=>{a.value=!a.value}}}(e),{copyHtmlToClipboard:i,copyJsToClipboard:s}=function(e){const l=(0,o.lW)(e,"codeHtml"),a=(0,o.lW)(e,"codeJs"),{addNotification:t}=(0,y.Ay)();async function i(e){try{await navigator.clipboard.writeText(e),t({text:"_COPIED_TO_CLIPBOARD_"})}catch(e){t({text:e,type:"danger"})}}return{copyHtmlToClipboard:()=>{i(l.value)},copyJsToClipboard:()=>{i(a.value)}}}(e),{emitsLocal:n,exposesLocal:d,hasAtLeastOneProperty:r,hasEmits:c,hasExposes:u,hasProps:b,hasSlots:p,propsLocal:h,slotsLocal:g}=function(e){const l=(0,o.lW)(e,"props"),a=(0,o.lW)(e,"emits"),t=(0,o.lW)(e,"exposes"),i=(0,o.lW)(e,"slots"),s=e=>(0,f.isArray)(e)?e:(0,f.isString)(e)?[e]:[],n=(0,o.EW)((()=>s(a.value))),d=(0,o.EW)((()=>s(t.value))),r=(0,o.EW)((()=>s(l.value))),c=(0,o.EW)((()=>s(i.value))),u=(0,o.EW)((()=>r.value.length>0)),b=(0,o.EW)((()=>n.value.length>0)),p=(0,o.EW)((()=>c.value.length>0)),h=(0,o.EW)((()=>d.value.length>0)),g=(0,o.EW)((()=>u.value||b.value||h.value||p.value));return{emitsLocal:n,exposesLocal:d,hasAtLeastOneProperty:g,hasEmits:b,hasExposes:h,hasProps:u,hasSlots:p,propsLocal:r,slotsLocal:c}}(e);return{btnToggleCodeTitle:l,copyHtmlToClipboard:i,copyJsToClipboard:s,emitsLocal:n,exposesLocal:d,hasAtLeastOneProperty:r,hasEmits:c,hasExposes:u,hasProps:b,hasSlots:p,isCodeVisible:a,propsLocal:h,slotsLocal:g,toggleCode:t}}},C=(0,a(6262).A)(k,[["render",function(e,l){const a=(0,o.g2)("a-translation"),m=(0,o.g2)("a-button"),v=(0,o.g2)("aloha-highlightjs");return(0,o.uX)(),(0,o.CE)("div",t,[e.header?((0,o.uX)(),(0,o.Wv)(a,{key:0,class:"aloha_example__h2",tag:"h2",html:e.header},null,8,["html"])):(0,o.Q3)("v-if",!0),e.hasAtLeastOneProperty?((0,o.uX)(),(0,o.CE)("dl",i,[e.hasProps?((0,o.uX)(),(0,o.CE)(o.FK,{key:0},[s,((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(e.propsLocal,(e=>((0,o.uX)(),(0,o.CE)("dd",{key:e},[(0,o.Lk)("strong",null,(0,o.v_)(e),1)])))),128))],64)):(0,o.Q3)("v-if",!0),e.hasEmits?((0,o.uX)(),(0,o.CE)(o.FK,{key:1},[n,((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(e.emitsLocal,(e=>((0,o.uX)(),(0,o.CE)("dd",{key:e},[(0,o.Lk)("strong",null,(0,o.v_)(e),1)])))),128))],64)):(0,o.Q3)("v-if",!0),e.hasSlots?((0,o.uX)(),(0,o.CE)(o.FK,{key:2},[d,((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(e.slotsLocal,(e=>((0,o.uX)(),(0,o.CE)("dd",{key:e},[(0,o.Lk)("strong",null,(0,o.v_)(e),1)])))),128))],64)):(0,o.Q3)("v-if",!0),e.hasExposes?((0,o.uX)(),(0,o.CE)(o.FK,{key:3},[r,((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(e.exposesLocal,(e=>((0,o.uX)(),(0,o.CE)("dd",{key:e},[(0,o.Lk)("strong",null,(0,o.v_)(e),1)])))),128))],64)):(0,o.Q3)("v-if",!0)])):(0,o.Q3)("v-if",!0),e.description?((0,o.uX)(),(0,o.Wv)(a,{key:2,tag:"p",html:e.description},null,8,["html"])):(0,o.Q3)("v-if",!0),(0,o.Lk)("div",c,[(0,o.RG)(e.$slots,"default")]),(0,o.Lk)("div",u,[(0,o.Lk)("div",b,[e.codeJs?((0,o.uX)(),(0,o.Wv)(m,{key:0,class:"a_btn a_btn_secondary","icon-left":"FiletypeJs",title:"_COPY_CODE_JS_",onClick:e.copyJsToClipboard},null,8,["onClick"])):(0,o.Q3)("v-if",!0),e.codeHtml?((0,o.uX)(),(0,o.Wv)(m,{key:1,class:"a_btn a_btn_secondary","icon-left":"FiletypeHtml",title:"_COPY_CODE_HTML_",onClick:e.copyHtmlToClipboard},null,8,["onClick"])):(0,o.Q3)("v-if",!0),(0,o.bF)(m,{class:"a_btn a_btn_secondary","icon-left":"ChevronExpand",title:e.btnToggleCodeTitle,onClick:e.toggleCode},null,8,["title","onClick"])])]),e.isCodeVisible?((0,o.uX)(),(0,o.CE)("div",p,[e.code?((0,o.uX)(),(0,o.Wv)(v,{key:0,code:e.code,language:"markdown"},null,8,["code"])):(0,o.Q3)("v-if",!0),e.codeHtml?((0,o.uX)(),(0,o.CE)(o.FK,{key:1},[h,(0,o.bF)(v,{code:e.codeHtml,language:"html"},null,8,["code"])],64)):(0,o.Q3)("v-if",!0),e.codeJs?((0,o.uX)(),(0,o.CE)(o.FK,{key:2},[g,(0,o.bF)(v,{code:e.codeJs,language:"javascript"},null,8,["code"])],64)):(0,o.Q3)("v-if",!0)])):(0,o.Q3)("v-if",!0)])}]])},8310:(e,l,a)=>{a.d(l,{A:()=>s});var o=a(6365);const t={id:"aloha_page"},i={name:"AlohaPage",components:{APageTabTitle:a(4943).A},props:{pageTitle:{type:String,required:!0}}},s=(0,a(6262).A)(i,[["render",function(e,l){const a=(0,o.g2)("a-page-tab-title");return(0,o.uX)(),(0,o.CE)("div",t,[e.pageTitle?((0,o.uX)(),(0,o.Wv)(a,{key:0,title:e.pageTitle},null,8,["title"])):(0,o.Q3)("v-if",!0),(0,o.Lk)("h1",null,(0,o.v_)(e.pageTitle),1),(0,o.RG)(e.$slots,"body")])}]])},9441:(e,l,a)=>{a.r(l),a.d(l,{default:()=>f});var o=a(6365),t=a(8310),i=a(7791);const s=(0,o.Lk)("button",{class:"a_btn a_btn_primary"},"Click me",-1),n=["innerHTML"],d=["innerHTML"],r=(0,o.Lk)("div",null,"modelFilters:",-1);var c=a(816),u=a(1912),b=a(1887),p=a(8805),h=a(2543);const g={name:"PageTableComplexExample",components:{AIcon:c.A,AlohaExample:u.A,ASwitch:b.A,ATable:p.A},setup(){const{codeHtml:e}={codeHtml:'<a-table\n  ref="aloha"\n  :columns="columns"\n  :data="data"\n  :is-loading-options="isLoadingOptions"\n  label="Example table"\n  :row-actions="rowActions"\n  :table-actions="tableActions"\n  :multiple-actions="multipleActions"\n  preview="right"\n  :is-quick-search="true"\n  :is-action-column-visible="true"\n  :is-columns-dnd="true"\n  :pagination="{ use: true, limitsPerPage: [\'10\', \'25\', \'50\', \'100\', \'500\'] }"\n  :is-pagination="true"\n  :filter="{ filters }"\n  :rows-footer="rowsFooter"\n  :is-loading-table="false"\n  :is-loading-multiple-actions="false"\n  :views="views"\n  :model-view="modelView"\n  v-model:modelQuickSearch="modelQuickSearch"\n  :modelFilters="modelFilters"\n  :model-columns-ordering="modelColumnsOrdering"\n  :model-columns-visible="modelColumnsVisible"\n  @change-columns-ordering="changeColumnsOrdering"\n  :update-model-filters-local="updateModelFiltersLocal"\n  @toggle-preview="togglePreview"\n  @update-model-filters="updateModelFilters"\n  @update-view="updateView"\n  @update:model-columns-visible="changeModelColumnsVisible"\n  @init-table="initTable"\n>\n</a-table>'},{codeJs:l}={codeJs:'import {\n  ref,\n} from "vue";\n\nimport AButton from "aloha-vue/src/AButton/AButton";\n    \nexport default {\n  name: "PageButtonComplex",\n  components: {\n    AButton,\n  },\n  setup() {\n    const loading = ref(true);\n\n    const toggleLoading = () => {\n      loading.value = !loading.value;\n    };\n    \n    return {\n      loading,\n      toggleLoading,\n    };\n  },\n};'};return{codeHtml:e,codeJs:l}},data(){return{modelView:void 0,modelLoading:!1,modelColumnsVisible:{aloha:!0},modelColumnsOrdering:["sdf","ddsadsa","aloha"],columns:[{label:"_A_TABLE_COLUMN_1_",id:"aloha",keyLabel:"aloha",sortId:"aloha",locked:!0,grow:2,footerSlot:"footerAloha",class:"a_text_right",icon:"Close",isRender:!0,title:"Aloha"},{label:"_A_TABLE_COLUMN_2_",id:"slot",slot:"slot1",title:"bbbbbbbbbb"},{label:"Alohafreidsfdsfdsfsdfdsfdsfdsfsd",id:"number",keyLabel:"number",sortId:"number",grow:0,footerKeyLabel:"number",class:"a_justify_content_end"},{label:"Hola",id:"hola",keyLabel:"hola",sortId:"hola",footerKeyLabel:"hola"},{label:"Default",id:"default",keyLabel:"default",defaultValue:"-",footerKeyLabel:"default",footerDefaultValue:"-"},{label:"Hola2",id:"hola2",keyLabel:"hola",sortId:"hola",hide:!0,footerKeyLabel:"hola"},{label:"Obj",id:"obj",keyLabel:"obj.aloha",sortId:"obj.aloha",slot:"get",filter:"boolean",footerKeyLabel:"obj.aloha",width:220},{label:"Test",id:"test",keyLabelSafeHtml:"test",sortId:"test",width:200},{label:"Obj2",id:"obj2",keyLabel:"obj.aloha",sortId:"obj.aloha",footerKeyLabel:"obj.aloha"},{label:"Obj3",id:"obj3",keyLabel:"obj.aloha",footerKeyLabel:"obj.aloha"},{label:"Obj4",id:"obj4",keyLabel:"obj.aloha",footerKeyLabel:"obj.aloha"},{label:"Geld",id:"geld",keyLabel:"geld",footerKeyLabel:"geld"},{label:"Slot2",id:"slot2",slot:"slot1",hide:!0},{label:"safeHtml",id:"safeHtml",keyLabelSafeHtml:"test",sortId:"test",width:200},{label:"html",id:"html",keyLabelHtml:"test",sortId:"test",width:200}],rowsFooter:[{index:1},{index:2}],data:[],isLoadingOptions:!1,rowActions:[{type:"divider"},{type:"divider"},{type:"button",text:"Click me",title:"Click me title",isHidden:!1,callback:this.clickMe,class:"aloha a_dropdown__item",disabled:!1,extraCallback:({row:e})=>({aloha:e.aloha})},{type:"divider"},{type:"divider"},{type:"divider"},{type:"divider"},{type:"button",textCallback:({row:e,rowIndex:l})=>`${l} Click ${e.aloha}`,titleCallback:({row:e,rowIndex:l})=>`${l} Click ${e.aloha} title`,isHiddenCallback:({row:e,rowIndex:l})=>!!(l>2&&e.aloha),disabledCallback:({row:e,rowIndex:l})=>!(l>2&&e.aloha),callback:this.clickMe},{iconLeft:"Export",type:"link",hrefCallback:({row:e})=>`dokumente/${e.number}/download/`,text:"Dokument herunterladen",target:"_blank"},{type:"divider"},{type:"divider"}],multipleActions:[{type:"divider"},{type:"divider"},{type:"button",text:"Aloha1",title:"Aloha1 Title",isHidden:!1,callback:this.clickMe,disabled:!1,icon:"Plus",isConfirm:!0,isAllRowsSelected:!0},{type:"divider"},{type:"divider"},{type:"divider"},{type:"divider"},{type:"button",text:"Aloha1 modal",title:"Aloha1 Title",callback:this.clickMeModal,disabled:!1,icon:"Plus",isHidden:!1,isHiddenCallback:this.isHiddenMultiple},{type:"divider"},{type:"divider"}],tableActions:[{text:"Aloha1",title:"Aloha1 Title",isHidden:!1,callback:this.clickMe,type:"button",class:"a_btn a_btn_primary",iconLeft:"Plus",id:"aloha_1"},{type:"divider"},{text:"Aloha2",title:"Aloha2 Title",callback:this.clickMe,disabled:!1,class:"a_btn a_btn_secondary",id:"aloha_2",type:"button"},{type:"divider"},{text:"Aloha link to",title:"Aloha link Title",disabled:!1,class:"a_btn a_btn_secondary",type:"link",iconRight:"Plus",to:"/spinner"},{text:"Aloha link href",title:"Aloha link Title",disabled:!1,class:"a_btn a_btn_secondary",type:"link",href:"/spinner",iconLeft:"Plus"},{type:"divider"},{text:"Aloha link Title",disabled:!1,class:"a_btn a_btn_secondary",type:"link",href:"/spinner",iconLeft:"Plus"}],modelQuickSearch:"",modelFilters:{group_switch:!0},views:[{id:"aloha1",type:"table",label:"Tabelle",icon:"Table",usePagination:!0},{id:"aloha2",type:"map",label:"Karte",icon:"GlobeEuropeAfrica"}],filters:[{type:"text",id:"suche",label:"Suche",main:!0},{type:"text",id:"au_kbezbeobachter",label:"Beobachter"},{type:"switch",id:"au_termin_sichtbar",label:"Sichtbar",alwaysVisible:!0},{type:"date",id:"datum",label:"Datum",alwaysVisible:!0},{type:"oneCheckbox",id:"au_ende",label:"Bearbeitungsende",alwaysVisible:!0},{type:"group",id:"group1",label:"Group",alwaysVisible:!0,classColumns:"a_d_flex a_flex_wrap",children:[{type:"multiselect",id:"dsdsfs",classColumn:"a_flex_fill",label:"Group",labelClass:"a_sr_only",data:[{id:"1",bez:"Aloha 1"},{id:"2",bez:"Aloha 2"},{id:"3",bez:"Aloha 3"}],keyLabel:"bez",keyId:"id",search:!0,alwaysVisible:!0,slotName:"termin"},{type:"switch",label:"Group switch",id:"group_switch",classColumn:"a_ml_2",labelClass:"a_sr_only",hideFilterCenter:!0,trueLabel:"Eins",falseLabel:"Alle",title:"Alohadsfdsfdsf sdfsdfdsffds"}]},{type:"multiselect",id:"terminberechnung",label:"Termin",data:[{id:"1",bez:"Aloha 1"},{id:"2",bez:"Aloha 2"},{id:"3",bez:"Aloha 3"}],hasNotClose:!0,keyLabel:"bez",keyId:"id",search:!0,alwaysVisible:!0,slotName:"termin"}]}},created(){this.setData(),setTimeout((()=>{this.$refs.aloha.updateRow({row:{id:1,number:1,aloha:"test",hola:"hola test",geld:void 0,obj:{aloha:"dffdg"},test:"<div>aloha123</div>"},rowIndex:1})}),1e3)},methods:{changeColumnsOrdering({modelColumnsOrdering:e}){this.modelColumnsOrdering=e,this.isLoadingOptions=!0,setTimeout((()=>{this.isLoadingOptions=!1}),1e3)},setData(){const e=[];(0,h.times)(100,(l=>{e.push({id:l,number:+l,aloha:`aloha1111dfdsfdsfdsfaasasadadsadasdsadsa1111111${l}`,hola:`hola ${l}`,geld:`${l} €`,obj:{aloha:"ertet "+(100-l)},test:"<div>aloha</div><div>aloha</div><div>aloha</div><div>aloha</div><div>aloha</div><div>aloha</div><div>aloha</div>"})})),this.data=e},clickMe(e){console.log("arg",e)},clickMeModal({rows:e,close:l}){console.log("rows",e),setTimeout((()=>{l()}),5e3)},updateModelFiltersLocal:({model:e})=>(console.log("modelFiltersLocal",e),e),togglePreview({row:e,rowIndex:l,typeToggle:a}){console.log("row: ",e),console.log("rowIndex: ",l),console.log("typeToggle: ",a)},isHiddenMultiple:({row:e})=>e.number%2==0,updateModelFilters({_modelFilters:e}={}){this.modelFilters=(0,h.cloneDeep)(e)},updateView({_modelView:e,view:l}){this.modelView=e,console.log("view",l)},changeModelColumnsVisible(e){this.modelColumnsVisible=e},initTable({columnsOrdering:e={},columnsVisible:l={}}={}){this.modelColumnsOrdering=e.model,this.modelColumnsVisible=l.model}}};var m=a(6262);const v=(0,m.A)(g,[["render",function(e,l){const a=(0,o.g2)("a-switch"),t=(0,o.g2)("router-link"),i=(0,o.g2)("a-icon"),c=(0,o.g2)("a-table"),u=(0,o.g2)("aloha-example");return(0,o.uX)(),(0,o.Wv)(u,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TABLE_GROUP_COMPLEX_HEADER_",description:"_A_TABLE_GROUP_COMPLEX_DESCRIPTION_"},{default:(0,o.k6)((()=>[(0,o.Lk)("div",null,[(0,o.Lk)("div",null,[(0,o.bF)(a,{modelValue:e.modelLoading,"onUpdate:modelValue":l[0]||(l[0]=l=>e.modelLoading=l)},null,8,["modelValue"])]),(0,o.bF)(c,{ref:"aloha",columns:e.columns,data:e.data,"is-loading-options":e.isLoadingOptions,label:"Example table","row-actions":e.rowActions,"table-actions":e.tableActions,"multiple-actions":e.multipleActions,preview:"right","is-quick-search":!0,"is-action-column-visible":!0,"is-columns-dnd":!0,pagination:{use:!0,limitsPerPage:["10","25","50","100","500"]},"rows-footer":e.rowsFooter,"is-loading-table":e.modelLoading,"is-loading-multiple-actions":!1,views:e.views,"model-view":e.modelView,"model-is-table-without-scroll-start":!0,modelQuickSearch:e.modelQuickSearch,"onUpdate:modelQuickSearch":l[1]||(l[1]=l=>e.modelQuickSearch=l),"model-columns-ordering":e.modelColumnsOrdering,"model-columns-visible":e.modelColumnsVisible,onChangeColumnsOrdering:e.changeColumnsOrdering,onTogglePreview:e.togglePreview,onUpdateView:e.updateView,"onUpdate:modelColumnsVisible":e.changeModelColumnsVisible,onInitTable:e.initTable},{map:(0,o.k6)((({rows:e})=>[(0,o.Lk)("pre",null,(0,o.v_)(e),1)])),slot1:(0,o.k6)((e=>[(0,o.bF)(t,{to:{name:"PageTabs"}},{default:(0,o.k6)((()=>[(0,o.eW)("Tabs")])),_:1})])),preview:(0,o.k6)((e=>[(0,o.Lk)("pre",null,(0,o.v_)(e),1)])),tableActions:(0,o.k6)((()=>[s])),footerAloha:(0,o.k6)((({row:e,rows:l})=>[(0,o.Lk)("strong",null,(0,o.v_)(l.length),1)])),termin:(0,o.k6)((({label:e,labelFiltered:l})=>[(0,o.bF)(i,{class:"a_mr_1",icon:"Cog"}),l?((0,o.uX)(),(0,o.CE)("span",{key:0,innerHTML:l},null,8,n)):((0,o.uX)(),(0,o.CE)("span",{key:1,innerHTML:e},null,8,d))])),_:1},8,["columns","data","is-loading-options","row-actions","table-actions","multiple-actions","rows-footer","is-loading-table","views","model-view","modelQuickSearch","model-columns-ordering","model-columns-visible","onChangeColumnsOrdering","onTogglePreview","onUpdateView","onUpdate:modelColumnsVisible","onInitTable"]),(0,o.Lk)("span",null,"modelQuickSearch: "+(0,o.v_)(e.modelQuickSearch),1),r,(0,o.Lk)("pre",null,(0,o.v_)(e.modelFilters),1)])])),_:1},8,["code-html","code-js"])}]]);var _=a(2187);const y={name:"PageTableComplex",components:{AlohaPage:t.A,ATranslation:i.A,PageTableComplexExample:v},setup(){const{pageTitle:e}=function(){const e=(0,o.EW)((()=>(0,_.a1)({placeholder:"_A_TABLE_COMPONENT_NAME_"})));return{pageTitle:(0,o.EW)((()=>"ATable"+(e.value?` (${e.value})`:"")))}}();return{pageTitle:e}}},f=(0,m.A)(y,[["render",function(e,l){const a=(0,o.g2)("a-translation"),t=(0,o.g2)("page-table-complex-example"),i=(0,o.g2)("aloha-page");return(0,o.uX)(),(0,o.Wv)(i,{"page-title":e.pageTitle},{body:(0,o.k6)((()=>[(0,o.bF)(a,{tag:"p",html:"_A_TABLE_COMPONENT_DESCRIPTION_"}),(0,o.bF)(t)])),_:1},8,["page-title"])}]])},8514:(e,l,a)=>{a.d(l,{A:()=>r});var o=a(6365),t=a(11),i=a(5603),s=a(9359),n=a(3265),d=a(2068);a(2348),t.A.registerLanguage("javascript",i.A),t.A.registerLanguage("html",s.A),t.A.registerLanguage("markdown",n.A),t.A.registerLanguage("scss",d.A);const r={name:"AlohaHighlightjs",props:{autodetect:{type:Boolean,required:!1,default:!0},code:{type:String,required:!0},ignoreIllegals:{type:Boolean,required:!1,default:!0},language:{type:String,required:!1,default:""}},setup(e){const l=(0,o.KR)(e.language);(0,o.wB)((()=>e.language),(e=>{l.value=e}));const a=(0,o.EW)((()=>e.autodetect&&!l.value)),i=(0,o.EW)((()=>!a.value&&!t.A.getLanguage(l.value)));return{className:(0,o.EW)((()=>i.value?"":`hljs ${l.value}`)),highlightedCode:(0,o.EW)((()=>i.value?(console.warn(`The language "${l.value}" you specified could not be found.`),e.code.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")):a.value?t.A.highlightAuto(e.code).value:t.A.highlight(e.code,{language:l.value,ignoreIllegals:e.ignoreIllegals}).value))}},render(){return(0,o.h)("pre",{},[(0,o.h)("code",{class:this.className,innerHTML:this.highlightedCode,tabindex:"0"})])}}}}]);
//# sourceMappingURL=chunk.1142.e4912a10f1b250f609c9.js.map