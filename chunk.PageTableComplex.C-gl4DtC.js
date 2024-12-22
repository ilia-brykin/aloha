import{A as L,a as H}from"./chunk.AlohaExample.ChxWiDiP.js";import{a as C,b as T,_ as f,c as j,g as S,A as $}from"./bundle.index.C2NUxb1F.js";import{A as P}from"./chunk.ATable.hE8M53xS.js";import{U as M,m as V}from"./chunk.vendor-lodash.DYgvgMhr.js";import{k as a,J as _,H as d,aQ as o,N as i,O as n,aR as b,aS as O,M as h,a as A}from"./chunk.vendor.DTe1dwcY.js";import"./chunk.APageTabTitle.DIecKEHM.js";import"./chunk.AlohaHighlightjs.BnoxTF5z.js";import"./chunk.translations-ar.BN5q-o8a.js";import"./chunk.translations-de.CbcaW5-6.js";import"./chunk.translations-en.D0gUYDYQ.js";import"./chunk.translations-es.CdQwNuNd.js";import"./chunk.translations-fr.DtMvhluH.js";import"./chunk.translations-hr.BYXQ86E6.js";import"./chunk.translations-it.B_ya8rE6.js";import"./chunk.translations-ru.CoPIOQIk.js";function I(){return{codeHtml:`<a-table
  ref="aloha"
  :columns="columns"
  :data="data"
  :is-loading-options="isLoadingOptions"
  label="Example table"
  :row-actions="rowActions"
  :table-actions="tableActions"
  :multiple-actions="multipleActions"
  preview="right"
  :is-quick-search="true"
  :is-action-column-visible="true"
  :is-columns-dnd="true"
  :pagination="{ use: true, limitsPerPage: ['10', '25', '50', '100', '500'] }"
  :is-pagination="true"
  :filter="{ filters }"
  :rows-footer="rowsFooter"
  :is-loading-table="false"
  :is-loading-multiple-actions="false"
  :views="views"
  :model-view="modelView"
  v-model:modelQuickSearch="modelQuickSearch"
  :modelFilters="modelFilters"
  :model-columns-ordering="modelColumnsOrdering"
  :model-columns-visible="modelColumnsVisible"
  @change-columns-ordering="changeColumnsOrdering"
  :update-model-filters-local="updateModelFiltersLocal"
  @toggle-preview="togglePreview"
  @update-model-filters="updateModelFilters"
  @update-view="updateView"
  @update:model-columns-visible="changeModelColumnsVisible"
  @init-table="initTable"
>
</a-table>`}}function B(){return{codeJs:`import {
  ref,
} from "vue";

import AButton from "aloha-vue/src/AButton/AButton";
    
export default {
  name: "PageButtonComplex",
  components: {
    AButton,
  },
  setup() {
    const loading = ref(true);

    const toggleLoading = () => {
      loading.value = !loading.value;
    };
    
    return {
      loading,
      toggleLoading,
    };
  },
};`}}const E={name:"PageTableComplexExample",components:{AIcon:C,AlohaExample:L,ASwitch:T,ATable:P},setup(){const{codeHtml:e}=I(),{codeJs:l}=B();return{codeHtml:e,codeJs:l}},data(){return{modelView:void 0,modelLoading:!1,modelColumnsVisible:{aloha:!0},modelColumnsOrdering:["sdf","ddsadsa","aloha"],columns:[{label:"_A_TABLE_COLUMN_1_",id:"aloha",keyLabel:"aloha",sortId:"aloha",locked:!0,grow:2,footerSlot:"footerAloha",class:"a_text_right",icon:"XLg",isRender:!0,title:"Aloha"},{label:"_A_TABLE_COLUMN_2_",id:"slot",slot:"slot1",title:"bbbbbbbbbb"},{label:"Alohafreidsfdsfdsfsdfdsfdsfdsfsd",id:"number",keyLabel:"number",sortId:"number",grow:0,footerKeyLabel:"number",class:"a_justify_content_end"},{label:"Hola",id:"hola",keyLabel:"hola",sortId:"hola",footerKeyLabel:"hola"},{label:"Default",id:"default",keyLabel:"default",defaultValue:"-",footerKeyLabel:"default",footerDefaultValue:"-"},{label:"Hola2",id:"hola2",keyLabel:"hola",hide:!0,footerKeyLabel:"hola"},{label:"Obj",id:"obj",keyLabel:"obj.aloha",sortId:"obj.aloha",slot:"get",filter:"boolean",footerKeyLabel:"obj.aloha",width:220},{label:"Test",id:"test",keyLabelSafeHtml:"test",sortId:"test",width:200},{label:"Obj2",id:"obj2",keyLabel:"obj.aloha",footerKeyLabel:"obj.aloha"},{label:"Obj3",id:"obj3",keyLabel:"obj.aloha",footerKeyLabel:"obj.aloha"},{label:"Obj4",id:"obj4",keyLabel:"obj.aloha",footerKeyLabel:"obj.aloha"},{label:"Geld",id:"geld",keyLabel:"geld",footerKeyLabel:"geld"},{label:"Slot2",id:"slot2",slot:"slot1",hide:!0},{label:"safeHtml",id:"safeHtml",keyLabelSafeHtml:"test",width:200},{label:"html",id:"html",keyLabelHtml:"test",width:200}],rowsFooter:[{index:1},{index:2}],data:[],isLoadingOptions:!1,rowActions:[{type:"divider"},{type:"divider"},{type:"button",text:"Click me Click me Click me Click me",isHidden:!1,callback:this.clickMe,disabled:!1,extraCallback:({row:e})=>({aloha:e.aloha}),iconLeft:"Upload",isHiddenCallback:({rowIndex:e})=>e>5},{type:"divider"},{type:"divider"},{type:"divider"},{type:"divider"},{type:"button",textCallback:({row:e,rowIndex:l})=>`${l} Click ${e.aloha}`,titleCallback:({row:e,rowIndex:l})=>`${l} Click ${e.aloha} title`,isHiddenCallback:({row:e,rowIndex:l})=>!!(l>2&&e.aloha),disabledCallback:({row:e,rowIndex:l})=>!(l>2&&e.aloha),callback:this.clickMe},{iconLeft:"Upload",type:"link",hrefCallback:({row:e})=>`dokumente/${e.number}/download/`,text:"Dokument herunterladen",target:"_blank"},{type:"divider"},{type:"divider"}],multipleActions:[{type:"divider"},{type:"divider"},{type:"button",text:"Aloha1",title:"Aloha1 Title",isHidden:!1,callback:this.clickMe,disabled:!1,icon:"PlusLg",isConfirm:!0,isAllRowsSelected:!0},{type:"divider"},{type:"divider"},{type:"divider"},{type:"divider"},{type:"button",text:"Aloha1 modal",title:"Aloha1 Title",callback:this.clickMeModal,disabled:!1,icon:"PlusLg",isHidden:!1,isHiddenCallback:this.isHiddenMultiple},{type:"divider"},{type:"divider"}],tableActions:[{text:"Aloha1",title:"Aloha1 Title",isHidden:!1,callback:this.clickMe,type:"button",classButton:"a_btn a_btn_primary",iconLeft:"PlusLg",id:"aloha_1"},{type:"divider"},{text:"Aloha2",title:"Aloha2 Title",callback:this.clickMe,disabled:!1,classButton:"a_btn a_btn_secondary",id:"aloha_2",type:"button"},{type:"divider"},{text:"Aloha link to",title:"Aloha link Title",disabled:!1,classButton:"a_btn a_btn_secondary",type:"link",iconRight:"PlusLg",to:"/spinner"},{text:"Aloha link href",title:"Aloha link Title",disabled:!1,classButton:"a_btn a_btn_secondary",type:"link",href:"/spinner",iconLeft:"PlusLg"},{type:"divider"},{text:"Aloha link Title",disabled:!1,classButton:"a_btn a_btn_secondary",type:"link",href:"/spinner",iconLeft:"PlusLg"}],modelQuickSearch:"",modelFilters:{group_switch:!0},views:[{id:"aloha1",type:"table",label:"Tabelle",icon:"Table",usePagination:!0,useAdditionalSorting:!0},{id:"aloha2",type:"map",label:"Karte",icon:"GlobeEuropeAfrica"}],filters:[{type:"text",id:"suche",label:"Suche",main:!0},{type:"text",id:"au_kbezbeobachter",label:"Beobachter"},{type:"switch",id:"au_termin_sichtbar",label:"Sichtbar",alwaysVisible:!0},{type:"date",id:"datum",label:"Datum",alwaysVisible:!0},{type:"oneCheckbox",id:"au_ende",label:"Bearbeitungsende",alwaysVisible:!0},{type:"group",id:"group1",label:"Group",alwaysVisible:!0,classColumns:"a_d_flex a_flex_wrap",children:[{type:"multiselect",id:"dsdsfs",classColumn:"a_flex_fill",label:"Group",labelClass:"a_sr_only",data:[{id:"1",bez:"Aloha 1"},{id:"2",bez:"Aloha 2"},{id:"3",bez:"Aloha 3"}],keyLabel:"bez",keyId:"id",search:!0,alwaysVisible:!0,slotName:"termin"},{type:"switch",label:"Group switch",id:"group_switch",classColumn:"a_ml_2",labelClass:"a_sr_only",hideFilterCenter:!0,trueLabel:"Eins",falseLabel:"Alle",title:"Alohadsfdsfdsf sdfsdfdsffds"}]},{type:"multiselect",id:"terminberechnung",label:"Termin",data:[{id:"1",bez:"Aloha 1"},{id:"2",bez:"Aloha 2"},{id:"3",bez:"Aloha 3"}],hasNotClose:!0,keyLabel:"bez",keyId:"id",search:!0,alwaysVisible:!0,slotName:"termin"}]}},created(){this.setData(),setTimeout(()=>{this.$refs.aloha.updateRow({row:{id:1,number:1,aloha:"test",hola:"hola test",geld:void 0,obj:{aloha:"dffdg"},test:"<div>aloha123</div>"},rowIndex:1})},1e3)},methods:{changeColumnsOrdering({modelColumnsOrdering:e}){this.modelColumnsOrdering=e,this.isLoadingOptions=!0,setTimeout(()=>{this.isLoadingOptions=!1},1e3)},setData(){const e=[];M(100,l=>{e.push({id:l,number:+l,aloha:`aloha1111dfdsfdsfdsfaasasadadsadasdsadsa1111111${l}`,hola:`hola ${l}`,geld:`${l} €`,obj:{aloha:`ertet ${100-l}`},test:"<div>aloha</div><div>aloha</div><div>aloha</div><div>aloha</div><div>aloha</div><div>aloha</div><div>aloha</div>"})}),this.data=e},clickMe(e){console.log("arg",e)},clickMeModal({rows:e,close:l}){console.log("rows",e),setTimeout(()=>{l()},5e3)},updateModelFiltersLocal({model:e}){return console.log("modelFiltersLocal",e),e},togglePreview({row:e,rowIndex:l,typeToggle:r}){console.log("row: ",e),console.log("rowIndex: ",l),console.log("typeToggle: ",r)},isHiddenMultiple({row:e}){return e.number%2===0},updateModelFilters({_modelFilters:e}={}){this.modelFilters=V(e)},updateView({_modelView:e,view:l}){this.modelView=e,console.log("view",l)},changeModelColumnsVisible(e){this.modelColumnsVisible=e},initTable({columnsOrdering:e={},columnsVisible:l={}}={}){this.modelColumnsOrdering=e.model,this.modelColumnsVisible=l.model}}},x=["innerHTML"],F=["innerHTML"];function N(e,l,r,y,k,w){const c=a("a-switch"),u=a("router-link"),m=a("a-icon"),p=a("a-table"),g=a("aloha-example");return d(),_(g,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TABLE_GROUP_COMPLEX_HEADER_",description:"_A_TABLE_GROUP_COMPLEX_DESCRIPTION_"},{default:o(()=>[i("div",null,[i("div",null,[n(c,{modelValue:e.modelLoading,"onUpdate:modelValue":l[0]||(l[0]=s=>e.modelLoading=s)},null,8,["modelValue"])]),n(p,{ref:"aloha",columns:e.columns,data:e.data,"is-loading-options":e.isLoadingOptions,label:"Example table","row-actions":e.rowActions,"table-actions":e.tableActions,"multiple-actions":e.multipleActions,preview:"right","is-quick-search":!0,"is-action-column-visible":!0,"is-columns-dnd":!0,pagination:{use:!0,limitsPerPage:["10","25","50","100","500"]},"rows-footer":e.rowsFooter,"is-loading-table":e.modelLoading,"is-loading-multiple-actions":!1,"is-sorting-multi-column":!0,views:e.views,"model-view":e.modelView,"model-is-table-without-scroll-start":!0,modelQuickSearch:e.modelQuickSearch,"onUpdate:modelQuickSearch":l[1]||(l[1]=s=>e.modelQuickSearch=s),"model-columns-ordering":e.modelColumnsOrdering,"model-columns-visible":e.modelColumnsVisible,onChangeColumnsOrdering:e.changeColumnsOrdering,onTogglePreview:e.togglePreview,onUpdateView:e.updateView,"onUpdate:modelColumnsVisible":e.changeModelColumnsVisible,onUpdateModelIsTableWithoutScroll:l[2]||(l[2]=()=>{}),onInitTable:e.initTable},{map:o(({rows:s})=>[i("pre",null,b(s),1)]),slot1:o(s=>[n(u,{to:{name:"PageTabs"}},{default:o(()=>l[3]||(l[3]=[O("Tabs")])),_:1})]),preview:o(s=>[i("pre",null,b(s),1)]),tableActions:o(()=>l[4]||(l[4]=[i("button",{class:"a_btn a_btn_primary"},"Click me",-1)])),footerAloha:o(({row:s,rows:t})=>[i("strong",null,b(t.length),1)]),termin:o(({label:s,labelFiltered:t})=>[n(m,{class:"a_mr_1",icon:"Cog"}),t?(d(),h("span",{key:0,innerHTML:t},null,8,x)):(d(),h("span",{key:1,innerHTML:s},null,8,F))]),_:1},8,["columns","data","is-loading-options","row-actions","table-actions","multiple-actions","rows-footer","is-loading-table","views","model-view","modelQuickSearch","model-columns-ordering","model-columns-visible","onChangeColumnsOrdering","onTogglePreview","onUpdateView","onUpdate:modelColumnsVisible","onInitTable"]),i("span",null,"modelQuickSearch: "+b(e.modelQuickSearch),1),l[5]||(l[5]=i("div",null,"modelFilters:",-1)),i("pre",null,b(e.modelFilters),1)])]),_:1},8,["code-html","code-js"])}const U=f(E,[["render",N]]);function D(){return{codeHtml:`<a-table
  ref="aloha"
  :columns="columns"
  :data="data"
  :is-loading-options="isLoadingOptions"
  label="Example table"
  :row-actions="rowActions"
  :table-actions="tableActions"
  :multiple-actions="multipleActions"
  preview="right"
  :is-quick-search="true"
  :is-action-column-visible="true"
  :is-columns-dnd="true"
  :pagination="{ use: true, limitsPerPage: ['10', '25', '50', '100', '500'] }"
  :is-pagination="true"
  :filter="{ filters }"
  :rows-footer="rowsFooter"
  :is-loading-table="false"
  :is-loading-multiple-actions="false"
  :views="views"
  :model-view="modelView"
  v-model:modelQuickSearch="modelQuickSearch"
  :modelFilters="modelFilters"
  :model-columns-ordering="modelColumnsOrdering"
  :model-columns-visible="modelColumnsVisible"
  @change-columns-ordering="changeColumnsOrdering"
  :update-model-filters-local="updateModelFiltersLocal"
  @toggle-preview="togglePreview"
  @update-model-filters="updateModelFilters"
  @update-view="updateView"
  @update:model-columns-visible="changeModelColumnsVisible"
  @init-table="initTable"
>
</a-table>`}}function K(){return{codeJs:`import {
  ref,
} from "vue";

import AButton from "aloha-vue/src/AButton/AButton";
    
export default {
  name: "PageButtonComplex",
  components: {
    AButton,
  },
  setup() {
    const loading = ref(true);

    const toggleLoading = () => {
      loading.value = !loading.value;
    };
    
    return {
      loading,
      toggleLoading,
    };
  },
};`}}const R={name:"PageTableComplexSlotRowActions",components:{AButton:j,AIcon:C,AlohaExample:L,ASwitch:T,ATable:P},setup(){const{codeHtml:e}=D(),{codeJs:l}=K();return{codeHtml:e,codeJs:l}},data(){return{modelView:void 0,modelLoading:!1,modelColumnsVisible:{aloha:!0},modelColumnsOrdering:["sdf","ddsadsa","aloha"],columns:[{label:"_A_TABLE_COLUMN_1_",id:"aloha",keyLabel:"aloha",sortId:"aloha",locked:!0,grow:2,footerSlot:"footerAloha",class:"a_text_right",icon:"Close",isRender:!0,title:"Aloha"},{label:"_A_TABLE_COLUMN_2_",id:"slot",slot:"slot1",title:"bbbbbbbbbb"},{label:"Alohafreidsfdsfdsfsdfdsfdsfdsfsd",id:"number",keyLabel:"number",sortId:"number",grow:0,footerKeyLabel:"number",class:"a_justify_content_end"},{label:"Hola",id:"hola",keyLabel:"hola",sortId:"hola",footerKeyLabel:"hola"},{label:"Default",id:"default",keyLabel:"default",defaultValue:"-",footerKeyLabel:"default",footerDefaultValue:"-"},{label:"Hola2",id:"hola2",keyLabel:"hola",sortId:"hola",hide:!0,footerKeyLabel:"hola"},{label:"Obj",id:"obj",keyLabel:"obj.aloha",sortId:"obj.aloha",slot:"get",filter:"boolean",footerKeyLabel:"obj.aloha",width:220},{label:"Test",id:"test",keyLabelSafeHtml:"test",sortId:"test",width:200},{label:"Obj2",id:"obj2",keyLabel:"obj.aloha",sortId:"obj.aloha",footerKeyLabel:"obj.aloha"},{label:"Obj3",id:"obj3",keyLabel:"obj.aloha",footerKeyLabel:"obj.aloha"},{label:"Obj4",id:"obj4",keyLabel:"obj.aloha",footerKeyLabel:"obj.aloha"},{label:"Geld",id:"geld",keyLabel:"geld",footerKeyLabel:"geld"},{label:"Slot2",id:"slot2",slot:"slot1",hide:!0},{label:"safeHtml",id:"safeHtml",keyLabelSafeHtml:"test",sortId:"test",width:200},{label:"html",id:"html",keyLabelHtml:"test",sortId:"test",width:200}],rowsFooter:[{index:1},{index:2}],data:[],isLoadingOptions:!1,rowActions:[{type:"divider"},{type:"divider"},{type:"button",text:"Click me",title:"Click me title",isHidden:!1,callback:this.clickMe,disabled:!1,extraCallback:({row:e})=>({aloha:e.aloha})},{type:"divider"},{type:"divider"},{type:"divider"},{type:"divider"},{type:"button",textCallback:({row:e,rowIndex:l})=>`${l} Click ${e.aloha}`,titleCallback:({row:e,rowIndex:l})=>`${l} Click ${e.aloha} title`,isHiddenCallback:({row:e,rowIndex:l})=>!!(l>2&&e.aloha),disabledCallback:({row:e,rowIndex:l})=>!(l>2&&e.aloha),callback:this.clickMe},{iconLeft:"Export",type:"link",hrefCallback:({row:e})=>`dokumente/${e.number}/download/`,text:"Dokument herunterladen",target:"_blank"},{type:"divider"},{type:"divider"}],multipleActions:[{type:"divider"},{type:"divider"},{type:"button",text:"Aloha1",title:"Aloha1 Title",isHidden:!1,callback:this.clickMe,disabled:!1,icon:"Plus",isConfirm:!0,isAllRowsSelected:!0},{type:"divider"},{type:"divider"},{type:"divider"},{type:"divider"},{type:"button",text:"Aloha1 modal",title:"Aloha1 Title",callback:this.clickMeModal,disabled:!1,icon:"Plus",isHidden:!1,isHiddenCallback:this.isHiddenMultiple},{type:"divider"},{type:"divider"}],tableActions:[{text:"Aloha1",title:"Aloha1 Title",isHidden:!1,callback:this.clickMe,type:"button",classButton:"a_btn a_btn_primary",iconLeft:"Plus",id:"aloha_1"},{type:"divider"},{text:"Aloha2",title:"Aloha2 Title",callback:this.clickMe,disabled:!1,classButton:"a_btn a_btn_secondary",id:"aloha_2",type:"button"},{type:"divider"},{text:"Aloha link to",title:"Aloha link Title",disabled:!1,classButton:"a_btn a_btn_secondary",type:"link",iconRight:"Plus",to:"/spinner"},{text:"Aloha link href",title:"Aloha link Title",disabled:!1,classButton:"a_btn a_btn_secondary",type:"link",href:"/spinner",iconLeft:"Plus"},{type:"divider"},{text:"Aloha link Title",disabled:!1,classButton:"a_btn a_btn_secondary",type:"link",href:"/spinner",iconLeft:"Plus"}],modelQuickSearch:"",modelFilters:{group_switch:!0},views:[{id:"aloha1",type:"table",label:"Tabelle",icon:"Table",usePagination:!0},{id:"aloha2",type:"map",label:"Karte",icon:"GlobeEuropeAfrica"}],filters:[{type:"text",id:"suche",label:"Suche",main:!0},{type:"text",id:"au_kbezbeobachter",label:"Beobachter"},{type:"switch",id:"au_termin_sichtbar",label:"Sichtbar",alwaysVisible:!0},{type:"date",id:"datum",label:"Datum",alwaysVisible:!0},{type:"oneCheckbox",id:"au_ende",label:"Bearbeitungsende",alwaysVisible:!0},{type:"group",id:"group1",label:"Group",alwaysVisible:!0,classColumns:"a_d_flex a_flex_wrap",children:[{type:"multiselect",id:"dsdsfs",classColumn:"a_flex_fill",label:"Group",labelClass:"a_sr_only",data:[{id:"1",bez:"Aloha 1"},{id:"2",bez:"Aloha 2"},{id:"3",bez:"Aloha 3"}],keyLabel:"bez",keyId:"id",search:!0,alwaysVisible:!0,slotName:"termin"},{type:"switch",label:"Group switch",id:"group_switch",classColumn:"a_ml_2",labelClass:"a_sr_only",hideFilterCenter:!0,trueLabel:"Eins",falseLabel:"Alle",title:"Alohadsfdsfdsf sdfsdfdsffds"}]},{type:"multiselect",id:"terminberechnung",label:"Termin",data:[{id:"1",bez:"Aloha 1"},{id:"2",bez:"Aloha 2"},{id:"3",bez:"Aloha 3"}],hasNotClose:!0,keyLabel:"bez",keyId:"id",search:!0,alwaysVisible:!0,slotName:"termin"}]}},created(){this.setData(),setTimeout(()=>{this.$refs.aloha.updateRow({row:{id:1,number:1,aloha:"test",hola:"hola test",geld:void 0,obj:{aloha:"dffdg"},test:"<div>aloha123</div>"},rowIndex:1})},1e3)},methods:{changeColumnsOrdering({modelColumnsOrdering:e}){this.modelColumnsOrdering=e,this.isLoadingOptions=!0,setTimeout(()=>{this.isLoadingOptions=!1},1e3)},setData(){const e=[];M(100,l=>{e.push({id:l,number:+l,aloha:`aloha1111dfdsfdsfdsfaasasadadsadasdsadsa1111111${l}`,hola:`hola ${l}`,geld:`${l} €`,obj:{aloha:`ertet ${100-l}`},test:"<div>aloha</div><div>aloha</div><div>aloha</div><div>aloha</div><div>aloha</div><div>aloha</div><div>aloha</div>"})}),this.data=e},clickMe(e){console.log("arg",e)},clickMeModal({rows:e,close:l}){console.log("rows",e),setTimeout(()=>{l()},5e3)},updateModelFiltersLocal({model:e}){return console.log("modelFiltersLocal",e),e},togglePreview({row:e,rowIndex:l,typeToggle:r}){console.log("row: ",e),console.log("rowIndex: ",l),console.log("typeToggle: ",r)},isHiddenMultiple({row:e}){return e.number%2===0},updateModelFilters({_modelFilters:e}={}){this.modelFilters=V(e)},updateView({_modelView:e,view:l}){this.modelView=e,console.log("view",l)},changeModelColumnsVisible(e){this.modelColumnsVisible=e},initTable({columnsOrdering:e={},columnsVisible:l={}}={}){this.modelColumnsOrdering=e.model,this.modelColumnsVisible=l.model}}},Q={class:"a_btn_group a_btn_group_small",role:"group"},z=["innerHTML"],G=["innerHTML"];function J(e,l,r,y,k,w){const c=a("a-switch"),u=a("a-button"),m=a("router-link"),p=a("a-icon"),g=a("a-table"),s=a("aloha-example");return d(),_(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TABLE_GROUP_COMPLEX_HEADER_",description:"_A_TABLE_GROUP_COMPLEX_DESCRIPTION_",props:["dropdown"]},{default:o(()=>[i("div",null,[i("div",null,[n(c,{modelValue:e.modelLoading,"onUpdate:modelValue":l[0]||(l[0]=t=>e.modelLoading=t)},null,8,["modelValue"])]),n(g,{ref:"aloha","column-actions-view":"dropdown","column-actions-width":250,"column-actions-width-min":150,columns:e.columns,data:e.data,"is-loading-options":e.isLoadingOptions,label:"Example table","row-actions":e.rowActions,"table-actions":e.tableActions,"multiple-actions":e.multipleActions,preview:"right","is-quick-search":!0,"is-action-column-visible":!0,"is-columns-dnd":!0,pagination:{use:!0},"is-loading-table":e.modelLoading,"is-loading-multiple-actions":!1,"model-is-table-without-scroll-start":!0,modelQuickSearch:e.modelQuickSearch,"onUpdate:modelQuickSearch":l[1]||(l[1]=t=>e.modelQuickSearch=t),"model-columns-ordering":e.modelColumnsOrdering,"model-columns-visible":e.modelColumnsVisible,onChangeColumnsOrdering:e.changeColumnsOrdering,onTogglePreview:e.togglePreview,"onUpdate:modelColumnsVisible":e.changeModelColumnsVisible,onUpdateModelIsTableWithoutScroll:l[2]||(l[2]=()=>{}),onInitTable:e.initTable},{rowActions:o(({row:t})=>[i("div",Q,[n(u,{class:"a_btn a_btn_primary","icon-left":"Pencil"}),n(u,{class:"a_btn a_btn_secondary","icon-left":"Trash"})])]),slot1:o(t=>[n(m,{to:{name:"PageTabs"}},{default:o(()=>l[3]||(l[3]=[O("Tabs")])),_:1})]),preview:o(t=>[i("pre",null,b(t),1)]),tableActions:o(()=>l[4]||(l[4]=[i("button",{class:"a_btn a_btn_primary"},"Click me",-1)])),termin:o(({label:t,labelFiltered:v})=>[n(p,{class:"a_mr_1",icon:"Cog"}),v?(d(),h("span",{key:0,innerHTML:v},null,8,z)):(d(),h("span",{key:1,innerHTML:t},null,8,G))]),_:1},8,["columns","data","is-loading-options","row-actions","table-actions","multiple-actions","is-loading-table","modelQuickSearch","model-columns-ordering","model-columns-visible","onChangeColumnsOrdering","onTogglePreview","onUpdate:modelColumnsVisible","onInitTable"])])]),_:1},8,["code-html","code-js"])}const X=f(R,[["render",J]]);function q(){const e=A(()=>S({placeholder:"_A_TABLE_COMPONENT_NAME_"}));return{pageTitle:A(()=>`ATable${e.value?` (${e.value})`:""}`)}}const W={name:"PageTableComplex",components:{AlohaPage:H,ATranslation:$,PageTableComplexExample:U,PageTableComplexSlotRowActions:X},setup(){const{pageTitle:e}=q();return{pageTitle:e}}};function Y(e,l,r,y,k,w){const c=a("a-translation"),u=a("page-table-complex-example"),m=a("page-table-complex-slot-row-actions"),p=a("aloha-page");return d(),_(p,{"page-title":e.pageTitle},{body:o(()=>[n(c,{tag:"p",html:"_A_TABLE_COMPONENT_DESCRIPTION_"}),n(u),n(m)]),_:1},8,["page-title"])}const pe=f(W,[["render",Y]]);export{pe as default};