import{t as e}from"./chunk.AlohaPage.C_AWyoed.js";import{t}from"./chunk.AlohaExample.C1ql1MDy.js";import{L as n,Qt as r,Wt as i,Yt as a,i as o,it as s}from"./bundle.index.C6WaRsOC.js";import{Q as c,l}from"./chunk.vendor-lodash.BfU-HRrF.js";import{Bt as u,Ft as d,It as f,Pt as p,Qt as m,Rt as h,Vt as g,mn as _,nn as v,on as y}from"./chunk.vendor.CTxSDDRk.js";import{t as b}from"./chunk._plugin-vue_export-helper.BDNMzG2s.js";function x(){return{codeHtml:`<a-table
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
</a-table>`}}function S(){return{codeJs:`import {
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
};`}}var C={name:`PageTableComplexExample`,components:{AIcon:r,AlohaExample:t,ASwitch:n,ATable:o},setup(){let{codeHtml:e}=x(),{codeJs:t}=S();return{codeHtml:e,codeJs:t}},data(){return{modelView:void 0,modelLoading:!1,modelColumnsVisible:{aloha:!0},modelColumnsOrdering:[`sdf`,`ddsadsa`,`aloha`],columns:[{label:`_A_TABLE_COLUMN_1_`,id:`aloha`,keyLabel:`aloha`,sortId:`aloha`,locked:!0,grow:2,footerSlot:`footerAloha`,class:`a_text_right`,icon:`XLg`,isRender:!0,title:`Aloha`},{label:`_A_TABLE_COLUMN_2_`,id:`slot`,slot:`slot1`,title:`bbbbbbbbbb`},{label:`Alohafreidsfdsfdsfsdfdsfdsfdsfsd`,id:`number`,keyLabel:`number`,sortId:`number`,grow:0,footerKeyLabel:`number`,class:`a_justify_content_end`},{label:`Hola`,id:`hola`,keyLabel:`hola`,sortId:`hola`,footerKeyLabel:`hola`},{label:`Default`,id:`default`,keyLabel:`default`,defaultValue:`-`,footerKeyLabel:`default`,footerDefaultValue:`-`},{label:`Hola2`,id:`hola2`,keyLabel:`hola`,hide:!0,footerKeyLabel:`hola`},{label:`Obj`,id:`obj`,keyLabel:`obj.aloha`,sortId:`obj.aloha`,slot:`get`,filter:`boolean`,footerKeyLabel:`obj.aloha`,width:220},{label:`Test`,id:`test`,keyLabelSafeHtml:`test`,sortId:`test`,width:200},{label:`Obj2`,id:`obj2`,keyLabel:`obj.aloha`,footerKeyLabel:`obj.aloha`},{label:`Obj3`,id:`obj3`,keyLabel:`obj.aloha`,footerKeyLabel:`obj.aloha`},{label:`Obj4`,id:`obj4`,keyLabel:`obj.aloha`,footerKeyLabel:`obj.aloha`},{label:`Geld`,id:`geld`,keyLabel:`geld`,footerKeyLabel:`geld`},{label:`Slot2`,id:`slot2`,slot:`slot1`,hide:!0},{label:`safeHtml`,id:`safeHtml`,keyLabelSafeHtml:`test`,width:200},{label:`html`,id:`html`,keyLabelHtml:`test`,width:200}],rowsFooter:[{index:1},{index:2}],data:[],isLoadingOptions:!1,rowActions:[{type:`divider`},{type:`divider`},{type:`button`,text:`Click me Click me Click me Click me`,isHidden:!1,callback:this.clickMe,disabled:!1,extraCallback:({row:e})=>({aloha:e.aloha}),iconLeft:`Upload`,isHiddenCallback:({rowIndex:e})=>e>5},{type:`divider`},{type:`divider`},{type:`divider`},{type:`divider`},{type:`button`,textCallback:({row:e,rowIndex:t})=>`${t} Click ${e.aloha}`,titleCallback:({row:e,rowIndex:t})=>`${t} Click ${e.aloha} title`,isHiddenCallback:({row:e,rowIndex:t})=>!!(t>2&&e.aloha),disabledCallback:({row:e,rowIndex:t})=>!(t>2&&e.aloha),callback:this.clickMe},{iconLeft:`Upload`,type:`link`,hrefCallback:({row:e})=>`dokumente/${e.number}/download/`,text:`Dokument herunterladen`,target:`_blank`},{type:`divider`},{type:`divider`}],multipleActions:[{type:`divider`},{type:`divider`},{type:`button`,text:`Aloha1`,title:`Aloha1 Title`,isHidden:!1,callback:this.clickMe,disabled:!1,icon:`PlusLg`,isConfirm:!0,isAllRowsSelected:!0},{type:`divider`},{type:`divider`},{type:`divider`},{type:`divider`},{type:`button`,text:`Aloha1 modal`,title:`Aloha1 Title`,callback:this.clickMeModal,disabled:!1,icon:`PlusLg`,isHidden:!1,isHiddenCallback:this.isHiddenMultiple},{type:`divider`},{type:`divider`}],tableActions:[{text:`Aloha1`,title:`Aloha1 Title`,isHidden:!1,callback:this.clickMe,type:`button`,classButton:`a_btn a_btn_primary`,iconLeft:`PlusLg`,id:`aloha_1`},{type:`divider`},{text:`Aloha2`,title:`Aloha2 Title`,callback:this.clickMe,disabled:!1,classButton:`a_btn a_btn_secondary`,id:`aloha_2`,type:`button`},{type:`divider`},{text:`Aloha link to`,title:`Aloha link Title`,disabled:!1,classButton:`a_btn a_btn_secondary`,type:`link`,iconRight:`PlusLg`,to:`/spinner`},{text:`Aloha link href`,title:`Aloha link Title`,disabled:!1,classButton:`a_btn a_btn_secondary`,type:`link`,href:`/spinner`,iconLeft:`PlusLg`},{type:`divider`},{text:`Aloha link Title`,disabled:!1,classButton:`a_btn a_btn_secondary`,type:`link`,href:`/spinner`,iconLeft:`PlusLg`}],modelQuickSearch:``,modelFilters:{group_switch:!0},views:[{id:`aloha1`,type:`table`,label:`Tabelle`,icon:`Table`,usePagination:!0,useAdditionalSorting:!0},{id:`aloha2`,type:`map`,label:`Karte`,icon:`GlobeEuropeAfrica`}],filters:[{type:`text`,id:`suche`,label:`Suche`,main:!0},{type:`text`,id:`au_kbezbeobachter`,label:`Beobachter`},{type:`switch`,id:`au_termin_sichtbar`,label:`Sichtbar`,alwaysVisible:!0},{type:`date`,id:`datum`,label:`Datum`,alwaysVisible:!0},{type:`oneCheckbox`,id:`au_ende`,label:`Bearbeitungsende`,alwaysVisible:!0},{type:`group`,id:`group1`,label:`Group`,alwaysVisible:!0,classColumns:`a_d_flex a_flex_wrap`,children:[{type:`multiselect`,id:`dsdsfs`,classColumn:`a_flex_fill`,label:`Group`,labelClass:`a_sr_only`,data:[{id:`1`,bez:`Aloha 1`},{id:`2`,bez:`Aloha 2`},{id:`3`,bez:`Aloha 3`}],keyLabel:`bez`,keyId:`id`,search:!0,alwaysVisible:!0,slotName:`termin`},{type:`switch`,label:`Group switch`,id:`group_switch`,classColumn:`a_ml_2`,labelClass:`a_sr_only`,hideFilterCenter:!0,trueLabel:`Eins`,falseLabel:`Alle`,title:`Alohadsfdsfdsf sdfsdfdsffds`}]},{type:`multiselect`,id:`terminberechnung`,label:`Termin`,data:[{id:`1`,bez:`Aloha 1`},{id:`2`,bez:`Aloha 2`},{id:`3`,bez:`Aloha 3`}],hasNotClose:!0,keyLabel:`bez`,keyId:`id`,search:!0,alwaysVisible:!0,slotName:`termin`}]}},created(){this.setData(),setTimeout(()=>{this.$refs.aloha.updateRow({row:{id:1,number:1,aloha:`test`,hola:`hola test`,geld:void 0,obj:{aloha:`dffdg`},test:`<div>aloha123</div>`},rowIndex:1})},1e3)},methods:{changeColumnsOrdering({modelColumnsOrdering:e}){this.modelColumnsOrdering=e,this.isLoadingOptions=!0,setTimeout(()=>{this.isLoadingOptions=!1},1e3)},setData(){let e=[];l(100,t=>{e.push({id:t,number:+t,aloha:`aloha1111dfdsfdsfdsfaasasadadsadasdsadsa1111111${t}`,hola:`hola ${t}`,geld:`${t} €`,obj:{aloha:`ertet ${100-t}`},test:`<div>aloha</div><div>aloha</div><div>aloha</div><div>aloha</div><div>aloha</div><div>aloha</div><div>aloha</div>`})}),this.data=e},clickMe(e){console.log(`arg`,e)},clickMeModal({rows:e,close:t}){console.log(`rows`,e),setTimeout(()=>{t()},5e3)},updateModelFiltersLocal({model:e}){return console.log(`modelFiltersLocal`,e),e},togglePreview({row:e,rowIndex:t,typeToggle:n}){console.log(`row: `,e),console.log(`rowIndex: `,t),console.log(`typeToggle: `,n)},isHiddenMultiple({row:e}){return e.number%2==0},updateModelFilters({_modelFilters:e}={}){this.modelFilters=c(e)},updateView({_modelView:e,view:t}){this.modelView=e,console.log(`view`,t)},changeModelColumnsVisible(e){this.modelColumnsVisible=e},initTable({columnsOrdering:e={},columnsVisible:t={}}={}){this.modelColumnsOrdering=e.model,this.modelColumnsVisible=t.model}}},w=[`innerHTML`],T=[`innerHTML`];function E(e,t,n,r,i,a){let o=v(`a-switch`),s=v(`router-link`),c=v(`a-icon`),l=v(`a-table`),p=v(`aloha-example`);return m(),f(p,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TABLE_GROUP_COMPLEX_HEADER_`,description:`_A_TABLE_GROUP_COMPLEX_DESCRIPTION_`},{default:y(()=>[d(`div`,null,[d(`div`,null,[g(o,{modelValue:e.modelLoading,"onUpdate:modelValue":t[0]||=t=>e.modelLoading=t},null,8,[`modelValue`])]),g(l,{ref:`aloha`,columns:e.columns,data:e.data,"is-loading-options":e.isLoadingOptions,label:`Example table`,"row-actions":e.rowActions,"table-actions":e.tableActions,"multiple-actions":e.multipleActions,preview:`right`,"is-quick-search":!0,"is-action-column-visible":!0,"is-columns-dnd":!0,pagination:{use:!0,limitsPerPage:[`10`,`25`,`50`,`100`,`500`]},"rows-footer":e.rowsFooter,"is-loading-table":e.modelLoading,"is-loading-multiple-actions":!1,"is-sorting-multi-column":!0,views:e.views,"model-view":e.modelView,"model-is-table-without-scroll-start":!0,modelQuickSearch:e.modelQuickSearch,"onUpdate:modelQuickSearch":t[1]||=t=>e.modelQuickSearch=t,"model-columns-ordering":e.modelColumnsOrdering,"model-columns-visible":e.modelColumnsVisible,onChangeColumnsOrdering:e.changeColumnsOrdering,onTogglePreview:e.togglePreview,onUpdateView:e.updateView,"onUpdate:modelColumnsVisible":e.changeModelColumnsVisible,onUpdateModelIsTableWithoutScroll:t[2]||=()=>{},onInitTable:e.initTable},{map:y(({rows:e})=>[d(`pre`,null,_(e),1)]),slot1:y(e=>[g(s,{to:{name:`PageTabs`}},{default:y(()=>[...t[3]||=[u(`Tabs`,-1)]]),_:1})]),preview:y(e=>[d(`pre`,null,_(e),1)]),tableActions:y(()=>[...t[4]||=[d(`button`,{class:`a_btn a_btn_primary`},`Click me`,-1)]]),footerAloha:y(({row:e,rows:t})=>[d(`strong`,null,_(t.length),1)]),termin:y(({label:e,labelFiltered:t})=>[g(c,{class:`a_mr_1`,icon:`Cog`}),t?(m(),h(`span`,{key:0,innerHTML:t},null,8,w)):(m(),h(`span`,{key:1,innerHTML:e},null,8,T))]),_:1},8,[`columns`,`data`,`is-loading-options`,`row-actions`,`table-actions`,`multiple-actions`,`rows-footer`,`is-loading-table`,`views`,`model-view`,`modelQuickSearch`,`model-columns-ordering`,`model-columns-visible`,`onChangeColumnsOrdering`,`onTogglePreview`,`onUpdateView`,`onUpdate:modelColumnsVisible`,`onInitTable`]),d(`span`,null,`modelQuickSearch: `+_(e.modelQuickSearch),1),t[5]||=d(`div`,null,`modelFilters:`,-1),d(`pre`,null,_(e.modelFilters),1)])]),_:1},8,[`code-html`,`code-js`])}var D=b(C,[[`render`,E]]);function O(){return{codeHtml:`<a-table
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
</a-table>`}}function k(){return{codeJs:`import {
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
};`}}var A={name:`PageTableComplexSlotRowActions`,components:{AButton:i,AIcon:r,AlohaExample:t,ASwitch:n,ATable:o},setup(){let{codeHtml:e}=O(),{codeJs:t}=k();return{codeHtml:e,codeJs:t}},data(){return{modelView:void 0,modelLoading:!1,modelColumnsVisible:{aloha:!0},modelColumnsOrdering:[`sdf`,`ddsadsa`,`aloha`],columns:[{label:`_A_TABLE_COLUMN_1_`,id:`aloha`,keyLabel:`aloha`,sortId:`aloha`,locked:!0,grow:2,footerSlot:`footerAloha`,class:`a_text_right`,icon:`Close`,isRender:!0,title:`Aloha`},{label:`_A_TABLE_COLUMN_2_`,id:`slot`,slot:`slot1`,title:`bbbbbbbbbb`},{label:`Alohafreidsfdsfdsfsdfdsfdsfdsfsd`,id:`number`,keyLabel:`number`,sortId:`number`,grow:0,footerKeyLabel:`number`,class:`a_justify_content_end`},{label:`Hola`,id:`hola`,keyLabel:`hola`,sortId:`hola`,footerKeyLabel:`hola`},{label:`Default`,id:`default`,keyLabel:`default`,defaultValue:`-`,footerKeyLabel:`default`,footerDefaultValue:`-`},{label:`Hola2`,id:`hola2`,keyLabel:`hola`,sortId:`hola`,hide:!0,footerKeyLabel:`hola`},{label:`Obj`,id:`obj`,keyLabel:`obj.aloha`,sortId:`obj.aloha`,slot:`get`,filter:`boolean`,footerKeyLabel:`obj.aloha`,width:220},{label:`Test`,id:`test`,keyLabelSafeHtml:`test`,sortId:`test`,width:200},{label:`Obj2`,id:`obj2`,keyLabel:`obj.aloha`,sortId:`obj.aloha`,footerKeyLabel:`obj.aloha`},{label:`Obj3`,id:`obj3`,keyLabel:`obj.aloha`,footerKeyLabel:`obj.aloha`},{label:`Obj4`,id:`obj4`,keyLabel:`obj.aloha`,footerKeyLabel:`obj.aloha`},{label:`Geld`,id:`geld`,keyLabel:`geld`,footerKeyLabel:`geld`},{label:`Slot2`,id:`slot2`,slot:`slot1`,hide:!0},{label:`safeHtml`,id:`safeHtml`,keyLabelSafeHtml:`test`,sortId:`test`,width:200},{label:`html`,id:`html`,keyLabelHtml:`test`,sortId:`test`,width:200}],rowsFooter:[{index:1},{index:2}],data:[],isLoadingOptions:!1,rowActions:[{type:`divider`},{type:`divider`},{type:`button`,text:`Click me`,title:`Click me title`,isHidden:!1,callback:this.clickMe,disabled:!1,extraCallback:({row:e})=>({aloha:e.aloha})},{type:`divider`},{type:`divider`},{type:`divider`},{type:`divider`},{type:`button`,textCallback:({row:e,rowIndex:t})=>`${t} Click ${e.aloha}`,titleCallback:({row:e,rowIndex:t})=>`${t} Click ${e.aloha} title`,isHiddenCallback:({row:e,rowIndex:t})=>!!(t>2&&e.aloha),disabledCallback:({row:e,rowIndex:t})=>!(t>2&&e.aloha),callback:this.clickMe},{iconLeft:`Export`,type:`link`,hrefCallback:({row:e})=>`dokumente/${e.number}/download/`,text:`Dokument herunterladen`,target:`_blank`},{type:`divider`},{type:`divider`}],multipleActions:[{type:`divider`},{type:`divider`},{type:`button`,text:`Aloha1`,title:`Aloha1 Title`,isHidden:!1,callback:this.clickMe,disabled:!1,icon:`Plus`,isConfirm:!0,isAllRowsSelected:!0},{type:`divider`},{type:`divider`},{type:`divider`},{type:`divider`},{type:`button`,text:`Aloha1 modal`,title:`Aloha1 Title`,callback:this.clickMeModal,disabled:!1,icon:`Plus`,isHidden:!1,isHiddenCallback:this.isHiddenMultiple},{type:`divider`},{type:`divider`}],tableActions:[{text:`Aloha1`,title:`Aloha1 Title`,isHidden:!1,callback:this.clickMe,type:`button`,classButton:`a_btn a_btn_primary`,iconLeft:`Plus`,id:`aloha_1`},{type:`divider`},{text:`Aloha2`,title:`Aloha2 Title`,callback:this.clickMe,disabled:!1,classButton:`a_btn a_btn_secondary`,id:`aloha_2`,type:`button`},{type:`divider`},{text:`Aloha link to`,title:`Aloha link Title`,disabled:!1,classButton:`a_btn a_btn_secondary`,type:`link`,iconRight:`Plus`,to:`/spinner`},{text:`Aloha link href`,title:`Aloha link Title`,disabled:!1,classButton:`a_btn a_btn_secondary`,type:`link`,href:`/spinner`,iconLeft:`Plus`},{type:`divider`},{text:`Aloha link Title`,disabled:!1,classButton:`a_btn a_btn_secondary`,type:`link`,href:`/spinner`,iconLeft:`Plus`}],modelQuickSearch:``,modelFilters:{group_switch:!0},views:[{id:`aloha1`,type:`table`,label:`Tabelle`,icon:`Table`,usePagination:!0},{id:`aloha2`,type:`map`,label:`Karte`,icon:`GlobeEuropeAfrica`}],filters:[{type:`text`,id:`suche`,label:`Suche`,main:!0},{type:`text`,id:`au_kbezbeobachter`,label:`Beobachter`},{type:`switch`,id:`au_termin_sichtbar`,label:`Sichtbar`,alwaysVisible:!0},{type:`date`,id:`datum`,label:`Datum`,alwaysVisible:!0},{type:`oneCheckbox`,id:`au_ende`,label:`Bearbeitungsende`,alwaysVisible:!0},{type:`group`,id:`group1`,label:`Group`,alwaysVisible:!0,classColumns:`a_d_flex a_flex_wrap`,children:[{type:`multiselect`,id:`dsdsfs`,classColumn:`a_flex_fill`,label:`Group`,labelClass:`a_sr_only`,data:[{id:`1`,bez:`Aloha 1`},{id:`2`,bez:`Aloha 2`},{id:`3`,bez:`Aloha 3`}],keyLabel:`bez`,keyId:`id`,search:!0,alwaysVisible:!0,slotName:`termin`},{type:`switch`,label:`Group switch`,id:`group_switch`,classColumn:`a_ml_2`,labelClass:`a_sr_only`,hideFilterCenter:!0,trueLabel:`Eins`,falseLabel:`Alle`,title:`Alohadsfdsfdsf sdfsdfdsffds`}]},{type:`multiselect`,id:`terminberechnung`,label:`Termin`,data:[{id:`1`,bez:`Aloha 1`},{id:`2`,bez:`Aloha 2`},{id:`3`,bez:`Aloha 3`}],hasNotClose:!0,keyLabel:`bez`,keyId:`id`,search:!0,alwaysVisible:!0,slotName:`termin`}]}},created(){this.setData(),setTimeout(()=>{this.$refs.aloha.updateRow({row:{id:1,number:1,aloha:`test`,hola:`hola test`,geld:void 0,obj:{aloha:`dffdg`},test:`<div>aloha123</div>`},rowIndex:1})},1e3)},methods:{changeColumnsOrdering({modelColumnsOrdering:e}){this.modelColumnsOrdering=e,this.isLoadingOptions=!0,setTimeout(()=>{this.isLoadingOptions=!1},1e3)},setData(){let e=[];l(100,t=>{e.push({id:t,number:+t,aloha:`aloha1111dfdsfdsfdsfaasasadadsadasdsadsa1111111${t}`,hola:`hola ${t}`,geld:`${t} €`,obj:{aloha:`ertet ${100-t}`},test:`<div>aloha</div><div>aloha</div><div>aloha</div><div>aloha</div><div>aloha</div><div>aloha</div><div>aloha</div>`})}),this.data=e},clickMe(e){console.log(`arg`,e)},clickMeModal({rows:e,close:t}){console.log(`rows`,e),setTimeout(()=>{t()},5e3)},updateModelFiltersLocal({model:e}){return console.log(`modelFiltersLocal`,e),e},togglePreview({row:e,rowIndex:t,typeToggle:n}){console.log(`row: `,e),console.log(`rowIndex: `,t),console.log(`typeToggle: `,n)},isHiddenMultiple({row:e}){return e.number%2==0},updateModelFilters({_modelFilters:e}={}){this.modelFilters=c(e)},updateView({_modelView:e,view:t}){this.modelView=e,console.log(`view`,t)},changeModelColumnsVisible(e){this.modelColumnsVisible=e},initTable({columnsOrdering:e={},columnsVisible:t={}}={}){this.modelColumnsOrdering=e.model,this.modelColumnsVisible=t.model}}},j={class:`a_btn_group a_btn_group_small`,role:`group`},M=[`innerHTML`],N=[`innerHTML`];function P(e,t,n,r,i,a){let o=v(`a-switch`),s=v(`a-button`),c=v(`router-link`),l=v(`a-icon`),p=v(`a-table`),b=v(`aloha-example`);return m(),f(b,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TABLE_GROUP_COMPLEX_HEADER_`,description:`_A_TABLE_GROUP_COMPLEX_DESCRIPTION_`,props:[`dropdown`]},{default:y(()=>[d(`div`,null,[d(`div`,null,[g(o,{modelValue:e.modelLoading,"onUpdate:modelValue":t[0]||=t=>e.modelLoading=t},null,8,[`modelValue`])]),g(p,{ref:`aloha`,"column-actions-view":`dropdown`,"column-actions-width":250,"column-actions-width-min":150,columns:e.columns,data:e.data,"is-loading-options":e.isLoadingOptions,label:`Example table`,"row-actions":e.rowActions,"table-actions":e.tableActions,"multiple-actions":e.multipleActions,preview:`right`,"is-quick-search":!0,"is-action-column-visible":!0,"is-columns-dnd":!0,pagination:{use:!0},"is-loading-table":e.modelLoading,"is-loading-multiple-actions":!1,"model-is-table-without-scroll-start":!0,modelQuickSearch:e.modelQuickSearch,"onUpdate:modelQuickSearch":t[1]||=t=>e.modelQuickSearch=t,"model-columns-ordering":e.modelColumnsOrdering,"model-columns-visible":e.modelColumnsVisible,onChangeColumnsOrdering:e.changeColumnsOrdering,onTogglePreview:e.togglePreview,"onUpdate:modelColumnsVisible":e.changeModelColumnsVisible,onUpdateModelIsTableWithoutScroll:t[2]||=()=>{},onInitTable:e.initTable},{rowActions:y(({row:e})=>[d(`div`,j,[g(s,{class:`a_btn a_btn_primary`,"icon-left":`Pencil`}),g(s,{class:`a_btn a_btn_secondary`,"icon-left":`Trash`})])]),slot1:y(e=>[g(c,{to:{name:`PageTabs`}},{default:y(()=>[...t[3]||=[u(`Tabs`,-1)]]),_:1})]),preview:y(e=>[d(`pre`,null,_(e),1)]),tableActions:y(()=>[...t[4]||=[d(`button`,{class:`a_btn a_btn_primary`},`Click me`,-1)]]),termin:y(({label:e,labelFiltered:t})=>[g(l,{class:`a_mr_1`,icon:`Cog`}),t?(m(),h(`span`,{key:0,innerHTML:t},null,8,M)):(m(),h(`span`,{key:1,innerHTML:e},null,8,N))]),_:1},8,[`columns`,`data`,`is-loading-options`,`row-actions`,`table-actions`,`multiple-actions`,`is-loading-table`,`modelQuickSearch`,`model-columns-ordering`,`model-columns-visible`,`onChangeColumnsOrdering`,`onTogglePreview`,`onUpdate:modelColumnsVisible`,`onInitTable`])])]),_:1},8,[`code-html`,`code-js`])}var F=b(A,[[`render`,P]]);function I(){let e=p(()=>a({placeholder:`_A_TABLE_COMPONENT_NAME_`}));return{pageTitle:p(()=>`ATable${e.value?` (${e.value})`:``}`)}}var L={name:`PageTableComplex`,components:{AlohaPage:e,ATranslation:s,PageTableComplexExample:D,PageTableComplexSlotRowActions:F},setup(){let{pageTitle:e}=I();return{pageTitle:e}}};function R(e,t,n,r,i,a){let o=v(`a-translation`),s=v(`page-table-complex-example`),c=v(`page-table-complex-slot-row-actions`),l=v(`aloha-page`);return m(),f(l,{"page-title":e.pageTitle},{body:y(()=>[g(o,{tag:`p`,html:`_A_TABLE_COMPONENT_DESCRIPTION_`}),g(s),g(c)]),_:1},8,[`page-title`])}var z=b(L,[[`render`,R]]);export{z as default};