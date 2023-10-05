"use strict";(self.webpackChunkaloha_vue_docs=self.webpackChunkaloha_vue_docs||[]).push([[6266],{2339:(e,t,l)=>{l.r(t),l.d(t,{default:()=>$});var i=l(798),a=l(6049),r=l(8975),s=l(9731),o=l(6660),d=l(9556),n=l(6486),u=l(3023),p=l(1759);const _={multiselect:!0,checkbox:!0};var c=l(9385),h=l(3934),v=l(1858);const f={name:"AFilterCenterItem",props:{closeFilterValue:{type:Function,required:!0},dataKeyByKeyIdPerFilter:{type:Object,required:!0},disabled:{type:Boolean,required:!1},filter:{type:Object,required:!1,default:void 0},id:{type:String,required:!0},model:{type:[String,Number,Object,Array,Boolean],required:!1,default:void 0}},setup(e){const{hasCurrentFilter:t}=function(e){const t=(0,i.Vh)(e,"filter"),l=(0,i.Vh)(e,"model");return{hasCurrentFilter:(0,i.Fl)((()=>!(!t.value||t.value.hideFilterCenter||(0,n.isNil)(l.value)||""===l.value||(0,n.isArray)(l.value)&&!l.value.length)))}}(e),{filterLabel:l}=function(e,{hasCurrentFilter:t=(0,i.Fl)((()=>!1))}){const l=(0,i.Vh)(e,"filter");return{filterLabel:(0,i.Fl)((()=>t.value?l.value.label:""))}}(e,{hasCurrentFilter:t}),{modelValuesForCurrentFilter:a}=function(e,{hasCurrentFilter:t=(0,i.Fl)((()=>!1))}){const l=(0,i.Vh)(e,"dataKeyByKeyIdPerFilter"),a=(0,i.Vh)(e,"filter"),r=(0,i.Vh)(e,"model"),s=(0,i.Fl)((()=>{if(a.value)return l.value[a.value.id]})),{filterBoolean:o,filterDate:d}=(0,u.Z)();return{modelValuesForCurrentFilter:(0,i.Fl)((()=>{if(!t.value)return[];if("switch"===a.value.type||"oneCheckbox"===a.value.type)return[{label:o(r.value)}];if("date"===a.value.type)return[{label:d(r.value)}];if("select"===a.value.type||"radio"===a.value.type){const e=(0,n.get)(s.value,`${r.value}.${p.Z}`);return e?[{label:e}]:[]}if(_[a.value.type]){const e=[];return(0,n.forEach)(r.value,(t=>{s.value&&s.value[t]&&e.push({label:s.value[t][p.Z],value:t,item:s.value[t]})})),e}return[{label:r.value}]}))}}(e,{hasCurrentFilter:t}),{goToFilter:r}=function(e){const t=(0,i.Vh)(e,"filter"),l=(0,i.Vh)(e,"id"),a=(0,i.Fl)((()=>`eventATableFilterTopOnOpen_${l.value}`));return{goToFilter:()=>{t.value.main||c.Z.$emit(a.value);const e=(0,h.l)({id:t.value.id,idPrefix:`${l.value}_`,htmlId:t.value.htmlId});setTimeout((()=>{(0,v.dv)({selector:`#${e}`})}))}}}(e),{closeCurrentFilterValue:s}=function(e){const t=(0,i.Vh)(e,"closeFilterValue"),l=(0,i.Vh)(e,"disabled"),a=(0,i.Vh)(e,"filter");return{closeCurrentFilterValue:({currentModel:e})=>{l.value||t.value({filter:a.value,currentModel:e})}}}(e);return{closeCurrentFilterValue:s,filterLabel:l,goToFilter:r,hasCurrentFilter:t,modelValuesForCurrentFilter:a}},render(){return this.hasCurrentFilter&&[this.modelValuesForCurrentFilter.map((e=>(0,i.h)("div",{role:"group",class:"a_table__filters_center__item a_btn_group a_btn_group_small"},[this.filter.hasNotClose&&(0,i.h)(d.Z,{class:"a_btn a_btn_secondary",ariaHidden:!0,tabindex:-1,iconLeft:"PinFill"}),(0,i.h)(d.Z,{class:"a_btn a_btn_secondary",onClick:this.goToFilter},(()=>[this.filterLabel&&(0,i.h)(s.Z,{tag:"strong",class:"a_table__filters_center__item__label",html:this.filterLabel,textAfter:":"}),this.filter.slotName&&this.$slots[this.filter.slotName]?this.$slots[this.filter.slotName]({item:e.item,label:e.label}):(0,i.h)("span",{class:"a_table__filters_center__item__value"},e.label)])),!this.filter.hasNotClose&&(0,i.h)(d.Z,{class:"a_btn a_btn_secondary",disabled:this.disabled,iconLeft:"Close",onClick:()=>this.closeCurrentFilterValue({currentModel:e.value})})])))]}},F={name:"AFilterCenter",props:{appliedModel:{type:Object,required:!0},closeFilterValue:{type:Function,required:!0},dataKeyByKeyIdPerFilter:{type:Object,required:!0},disabled:{type:Boolean,required:!1},filtersKeyById:{type:Object,required:!0},filtersVisibleAll:{type:Array,required:!0},id:{type:String,required:!0}},setup(e){const{styleHide:t}=function(e){const t=(0,i.Vh)(e,"appliedModel"),l=(0,i.Vh)(e,"filtersKeyById"),a=(0,i.Fl)((()=>{let e=!1;return(0,n.forEach)(t.value,((t,i)=>{const a=l.value[i];if(!a||a.hideFilterCenter)return;const r=a.type;if("multiselect"===r&&"checkbox"===r){if(t&&t.length)return e=!0,!1}else if(!(0,n.isNil)(t)&&""!==t)return e=!0,!1})),e}));return{styleHide:(0,i.Fl)((()=>a.value?void 0:"display: none;"))}}(e);return{styleHide:t}},render(){return(0,i.h)("div",{class:"a_table__filters_center",style:this.styleHide},[(0,i.h)("span",{class:"a_table__filters_center__headline a_table__filters_center__item"},"Ihre Auswahl:"),this.filtersVisibleAll.map((e=>(0,i.h)(f,{key:e.id,id:this.id,disabled:this.disabled,filter:e,closeFilterValue:this.closeFilterValue,dataKeyByKeyIdPerFilter:this.dataKeyByKeyIdPerFilter,model:this.appliedModel[e.id]},this.$slots)))])}};var m=l(1440),y=l(9711),b=l(7851),S=l(5737);const E={name:"AModalForm",inheritAttrs:!1,props:{bodyHtml:{type:String,required:!1,default:""},close:{type:Function,required:!0},closeButtonClass:{type:[String,Array,Object],required:!1,default:()=>S.s.value.propsDefault.closeButtonClass},closeButtonId:{type:String,required:!1,default:void 0},closeButtonText:{type:String,required:!1,default:()=>S.s.value.propsDefault.closeButtonText},dataForm:{type:Array,required:!1,default:()=>[]},disabled:{type:Boolean,required:!1,default:!1},disabledSave:{type:Boolean,required:!1,default:!1},errors:{type:Object,required:!1,default:()=>({})},extra:{type:Object,required:!1,default:void 0},headerTag:{type:String,required:!1,default:()=>S.s.value.propsDefault.headerTag},headerText:{type:String,required:!1,default:void 0},id:{type:String,required:!1,default:()=>(0,n.uniqueId)("a_modal_form_")},idPrefix:{type:String,required:!1,default:()=>S.s.value.propsDefault.idPrefix},isCloseButtonHide:{type:Boolean,required:!1,default:()=>S.s.value.propsDefault.isCloseButtonHide},isConfirm:{type:Boolean,required:!1},isDataFormHide:{type:Boolean,required:!1,default:S.s.value.propsDefault.isDataFormHide},isDataFormRender:{type:Boolean,required:!1,default:()=>S.s.value.propsDefault.isDataFormRender},isModalHidden:{type:Boolean,required:!1,default:!1},isRequired:{type:Boolean,required:!1,default:S.s.value.propsDefault.isRequired},isSaveButtonHide:{type:Boolean,required:!1,default:()=>S.s.value.propsDefault.isSaveButtonHide},loading:{type:Boolean,required:!1},modalClass:{type:[String,Object],required:!1,default:()=>S.s.value.propsDefault.modalClass},modelValue:{type:Object,required:!1,default:void 0},save:{type:Function,required:!1,default:void 0},saveButtonClass:{type:[String,Array,Object],required:!1,default:()=>S.s.value.propsDefault.saveButtonClass},saveButtonId:{type:String,required:!1,default:void 0},saveButtonText:{type:String,required:!1,default:()=>S.s.value.propsDefault.saveButtonText},selectorClose:{type:[String,Array],required:!1,default:()=>S.s.value.propsDefault.selectorClose},selectorCloseIds:{type:[String,Array],required:!1,default:()=>S.s.value.propsDefault.selectorCloseIds},size:{type:String,validator:e=>-1!==["small","large","xl","xxl","fullscreen"].indexOf(e),default:()=>S.s.value.propsDefault.size},textErrorHeader:{type:String,required:!1,default:void 0},textRequired:{type:String,required:!1,default:()=>S.s.value.propsDefault.textRequired},useEscape:{type:Boolean,required:!1,default:()=>S.s.value.propsDefault.useEscape}},emits:["update:modelValue"],setup(e,t){const{hasDataForm:l}=function(e){const t=(0,i.Vh)(e,"dataForm");return{hasDataForm:(0,i.Fl)((()=>t.value.length>0))}}(e),{updateModelLocal:a}=function({emit:e}){return{updateModelLocal:t=>{e("update:modelValue",t)}}}(t);return{hasDataForm:l,updateModelLocal:a}},render(){return(0,i.h)(b.Z,{close:this.close,closeButtonClass:this.closeButtonClass,closeButtonId:this.closeButtonId,closeButtonText:this.closeButtonText,disabled:this.disabled,disabledSave:this.disabledSave,extra:this.extra,headerTag:this.headerTag,headerText:this.headerText,id:this.id,isCloseButtonHide:this.isCloseButtonHide,isConfirm:this.isConfirm,isModalHidden:this.isModalHidden,isSaveButtonHide:this.isSaveButtonHide,loading:this.loading,modalClass:this.modalClass,save:this.save,saveButtonClass:this.saveButtonClass,saveButtonId:this.saveButtonId,saveButtonText:this.saveButtonText,selectorClose:this.selectorClose,selectorCloseIds:this.selectorCloseIds,size:this.size,useEscape:this.useEscape},{...this.$slots||{},modalBody:()=>[this.$slots.modalBodyPrepend&&this.$slots.modalBodyPrepend(),this.hasDataForm&&(0,i.h)(y.Z,{modelValue:this.modelValue,data:this.dataForm,errors:this.errors,idPrefix:this.idPrefix,isRequired:this.isRequired,textRequired:this.textRequired,textErrorHeader:this.textErrorHeader,isHide:this.isDataFormHide,isRender:this.isDataFormRender,"onUpdate:modelValue":this.updateModelLocal},this.$slots),this.bodyHtml&&(0,i.h)(s.Z,{html:this.bodyHtml,extra:this.extra}),this.$slots.modalBodyAppend&&this.$slots.modalBodyAppend()]})}};var T=l(684);const A={name:"AFiltersSaveModal",props:{changeModelFiltersSaved:{type:Function,required:!0},filtersSaved:{type:Array,required:!0},modelFiltersSaved:{type:String,required:!1,default:void 0},selectorCloseIds:{type:String,required:!0},updateFiltersSaved:{type:Function,required:!0}},emits:["close"],setup(e,t){const{initModel:l,model:a,updateModel:r}=function(e){const t=(0,i.Vh)(e,"modelFiltersSaved"),l=(0,i.iH)({});return{initModel:()=>{t.value&&(l.value={name:t.value})},model:l,updateModel:e=>{l.value=e}}}(e),{dataForm:s,isUpdate:o}=function(e,{model:t=(0,i.iH)({})}){const l=(0,i.Vh)(e,"filtersSaved"),a=(0,i.Fl)((()=>{const e={};return(0,n.forEach)(l.value,(t=>{e[t.label]=!0})),e})),r=(0,i.Fl)((()=>a.value[t.value.name])),s=(0,i.Fl)((()=>{if(r.value)return"_A_FILTERS_SAVE_MODAL_NAME_HELP_TEXT_{{name}}_"}));return{dataForm:(0,i.Fl)((()=>[{id:"name",label:"_A_FILTERS_SAVE_LABEL_NAME_",type:"text",required:!0,extra:{name:t.value.name||""},helpText:s.value}])),isUpdate:r}}(e,{model:a}),{close:d,disabledBtnSave:u,loading:p,save:_}=function(e,{emit:t},{isUpdate:l=(0,i.Fl)((()=>!1)),model:a=(0,i.iH)({})}){const r=(0,i.Vh)(e,"changeModelFiltersSaved"),s=(0,i.Vh)(e,"updateFiltersSaved"),o=(0,i.iH)(void 0),{addNotification:d}=(0,T.ZP)(),n=(0,i.Fl)((()=>!a.value.name)),u=()=>{t("close")};return{close:u,disabledBtnSave:n,loading:o,save:async()=>{o.value=!0;const e=l.value;try{await s.value({action:e?"update":"create",label:a.value.name})}catch(e){return d({text:"_A_FILTERS_SAVE_MSG_ERROR_",type:"danger"}),void(o.value=!1)}d({text:e?"_A_FILTERS_SAVE_MSG_SUCCESS_UPDATE_{{name}}_":"_A_FILTERS_SAVE_MSG_SUCCESS_CREATE_{{name}}_",extra:{name:a.value.name}}),r.value({model:a.value.name}),u(),o.value=!1}}}(e,t,{isUpdate:o,model:a});return l(),{close:d,dataForm:s,disabledBtnSave:u,initModel:l,loading:p,model:a,save:_,updateModel:r}},render(){return(0,i.h)(E,{close:this.close,dataForm:this.dataForm,disabledSave:this.disabledBtnSave,headerText:"_A_FILTERS_SAVE_MODAL_HEADER_",modelValue:this.model,idPrefix:"modal_filter_top_",loading:this.loading,selectorCloseIds:this.selectorCloseIds,size:"large",save:this.save,"onUpdate:modelValue":this.updateModel},{modalBodyPrepend:()=>[(0,i.h)(m.Z,{type:"info",isVisible:!0,safeHtml:"_A_FILTERS_SAVE_MODAL_BODY_PREPEND_"})]})}};var I=l(9352),C=l(2084),g=l(1227),V=l(2189),L=l(2761);const R={name:"AFiltersHorizontalFilterUi",props:{filter:{type:Object,required:!1,default:void 0},id:{type:String,required:!0},isLabelVisible:{type:Boolean,required:!0},onUpdateModelFilters:{type:Function,required:!0},unappliedModel:{type:Object,required:!0},updateDataKeyByIdFromFilter:{type:Function,required:!0}},setup(e){const{isContainer:t}=function(e){const t=(0,i.Vh)(e,"filter");return{isContainer:(0,i.Fl)((()=>!!V.Z[t.value.type]))}}(e),{onUpdateModelFiltersLocal:l}=function(e,{isContainer:t=(0,i.Fl)((()=>!1))}){const l=(0,i.Vh)(e,"filter"),a=(0,i.Vh)(e,"onUpdateModelFilters"),r=(0,i.Vh)(e,"unappliedModel");return{onUpdateModelFiltersLocal:e=>{if(t.value)a.value({model:e});else{const t=(0,n.cloneDeep)(r.value);t[l.value.id]=(0,n.cloneDeep)(e),a.value({model:t})}}}}(e,{isContainer:t}),{emitForComponentsWithData:a}=function(e){const t=(0,i.Vh)(e,"filter"),l=(0,i.Vh)(e,"updateDataKeyByIdFromFilter"),a=["select","multiselect","radio","checkbox","group","fieldset"],r=({dataKeyByKeyId:e,item:i})=>{let a=t.value.id;i&&(a=i.id),l.value({filterId:a,dataKeyByKeyId:e})};return{emitForComponentsWithData:(0,i.Fl)((()=>{const e={};return-1!==a.indexOf(t.value.type)&&(e.onUpdateData=r),e}))}}(e),{idPrefix:r}=function(e){const t=(0,i.Vh)(e,"id");return{idPrefix:(0,i.Fl)((()=>`${t.value}_`))}}(e),{componentTypesMapping:s}={componentTypesMapping:{...C.Z,...g.Z}},{filterSpecificAttributes:o}=function(e){const t=(0,i.Vh)(e,"filter");return{filterSpecificAttributes:(0,i.Fl)((()=>{const e={};return L.x[t.value.type]&&(0,n.isUndefined)(t.value.inputWidth)&&(e.inputWidth="auto"),e}))}}(e);return{componentTypesMapping:s,emitForComponentsWithData:a,filterSpecificAttributes:o,idPrefix:r,isContainer:t,onUpdateModelFiltersLocal:l}},render(){return(0,i.h)(this.componentTypesMapping[this.filter.type],{idPrefix:this.idPrefix,modelValue:this.isContainer?this.unappliedModel:this.unappliedModel[this.filter.id],"onUpdate:modelValue":this.onUpdateModelFiltersLocal,...this.filter,...this.filterSpecificAttributes,label:this.isLabelVisible?this.filter.label:void 0,...this.emitForComponentsWithData},this.$slots)}},M={name:"AFiltersHorizontalFilter",props:{closable:{type:Boolean,required:!1},filter:{type:Object,required:!1,default:void 0},id:{type:String,required:!0},onUpdateModelFilters:{type:Function,required:!0},unappliedModel:{type:Object,required:!0},updateDataKeyByIdFromFilter:{type:Function,required:!0}},emits:["deleteFiltersVisible"],setup(e){const{isFilter:t}=function(e){const t=(0,i.Vh)(e,"filter");return{isFilter:(0,i.Fl)((()=>!(!t.value||!1===t.value.isRender)))}}(e),{isLabelInComponentVisible:l,labelClass:a}=function(e){const t=(0,i.Vh)(e,"filter");return{isLabelInComponentVisible:(0,i.Fl)((()=>!(t.value.label&&"oneCheckbox"!==t.value.type))),labelClass:"a_table__filters_top__filter_ui_label"}}(e),{htmlIdLocal:r}=function(e){const t=(0,i.Vh)(e,"filter"),l=(0,i.Vh)(e,"id"),a=(0,i.Fl)((()=>`${l.value}_`));return{htmlIdLocal:(0,i.Fl)((()=>(0,h.l)({id:t.value.id,idPrefix:a.value,htmlId:t.value.htmlId})))}}(e);return{htmlIdLocal:r,isLabelInComponentVisible:l,isFilter:t,labelClass:a}},render(){return this.isFilter&&(0,i.h)("div",{class:"a_table__filters_top__filter_ui_group"},[this.isLabelInComponentVisible?(0,i.h)("span",{class:this.labelClass,ariaHidden:!0}):(0,i.h)(I.Z,{id:this.htmlIdLocal,label:this.filter.label,class:this.labelClass,type:this.filter.type,isLabelFloat:!1}),(0,i.h)("div",{class:"a_table__filters_top__filter_ui_subgroup"},[(0,i.h)(R,{class:"a_table__filters_top__filter_ui",filter:this.filter,isLabelVisible:this.isLabelInComponentVisible,unappliedModel:this.unappliedModel,updateDataKeyByIdFromFilter:this.updateDataKeyByIdFromFilter,onUpdateModelFilters:this.onUpdateModelFilters,id:this.id},this.$slots),this.closable&&(0,i.h)(d.Z,{class:"a_btn a_btn_transparent_secondary a_table__filters_top__filter_ui_delete",title:"_A_FILTERS_TOP_CLOSE_",iconLeft:"Close",onClick:()=>this.$emit("deleteFiltersVisible",{filter:this.filter})})])])}};var B=l(8413),D=l(6509),q=l(803);const P={name:"AFiltersHorizontal",props:{canSave:{type:Boolean,required:!1},disabled:{type:Boolean,required:!1},filtersGroup:{type:Object,required:!0,default:()=>({main:void 0,alwaysVisible:[],filters:[]})},filtersKeyById:{type:Object,required:!0},filtersSaved:{type:Array,required:!0},filtersVisible:{type:Array,required:!0},unappliedModel:{type:Object,required:!0},onUpdateModelFilters:{type:Function,required:!0},id:{type:String,required:!0},updateFiltersSaved:{type:Function,required:!0},updateDataKeyByIdFromFilter:{type:Function,required:!0}},emits:["startSearch","toggleFiltersVisible"],setup(e,t){const{idFilterTop:l}=function(e){const t=(0,i.Vh)(e,"id");return{idFilterTop:(0,i.Fl)((()=>`${t.value}_filter_top`))}}(e),{buttonToggleComponent:a,isOpen:r,onClose:s,onOpen:o,styleToggle:u}=function(e){const t=(0,i.Vh)(e,"filtersGroup"),l=(0,i.iH)(!1),a=()=>{l.value=!0},r=()=>{l.value=!1},s=()=>{l.value?r():a()},o=(0,i.Fl)((()=>l.value?"ChevronUp":"ChevronDown")),n=(0,i.Fl)((()=>l.value?"_A_FILTERS_CLOSE_ADVANCED_SEARCH_":"_A_FILTERS_OPEN_ADVANCED_SEARCH_")),u=(0,i.Fl)((()=>l.value?"":"display: none;")),p=(0,i.Fl)((()=>!(!t.value.alwaysVisible.length&&!t.value.filters.length)));return{buttonToggleComponent:(0,i.Fl)((()=>p.value&&(0,i.h)(d.Z,{class:"a_btn a_btn_link a_text_nowrap a_table__filters_top__toggle_filter",type:"button",text:n,iconRight:o,onClick:s,...D.zP.value.buttonToggle}))),isOpen:l,onClose:r,onOpen:a,styleToggle:u}}(e),{filterMainComponent:p}=function(e){const t=(0,i.Vh)(e,"filtersGroup"),l=(0,i.Vh)(e,"id"),a=(0,i.Vh)(e,"onUpdateModelFilters"),r=(0,i.Vh)(e,"unappliedModel"),s=(0,i.Vh)(e,"updateDataKeyByIdFromFilter");return{filterMainComponent:(0,i.Fl)((()=>t.value.main&&(0,i.h)(R,{id:l.value,class:"a_table__filters_top__filter_main",filter:t.value.main,isLabelVisible:!0,unappliedModel:r.value,onUpdateModelFilters:a.value,updateDataKeyByIdFromFilter:s.value})))}}(e),{buttonSearchComponent:_,onSearch:h}=function(e,{emit:t},{onClose:l=(()=>{})}){const a=(0,i.Vh)(e,"disabled"),r=()=>{a.value||(l(),t("startSearch"))};return{buttonSearchComponent:(0,i.Fl)((()=>(0,i.h)(d.Z,{class:"a_btn a_btn_primary a_text_nowrap a_table__filters_top__search",iconLeft:"Search",type:"submit",text:{desktop:"_A_FILTERS_START_SEARCH_"},textScreenReader:{mobile:"_A_FILTERS_START_SEARCH_"},prevent:!0,stop:!0,disabled:a.value,onClick:r,...D.zP.value.buttonSearch}))),onSearch:r}}(e,t,{onClose:s}),{destroyEventBus:v,initEventBus:f}=function(e,{onOpen:t=(()=>{})}){const l=`eventATableFilterTopOnOpen_${(0,i.Vh)(e,"id").value}`;return{destroyEventBus:()=>{c.Z.$off(l,t)},initEventBus:()=>{c.Z.$on(l,t)}}}(e,{onOpen:o}),{addFilterSelectComponent:F,addFiltersVisible:m,deleteFiltersVisible:y,filtersHidden:b,hasFiltersHiddenDefault:S}=function(e,{emit:t}){const l=(0,i.Vh)(e,"filtersGroup"),a=(0,i.Vh)(e,"filtersVisible"),r=({isAdd:e,filterId:l})=>{t("toggleFiltersVisible",{isAdd:e,filterId:l})},s=({model:e})=>{r({isAdd:!0,filterId:e})},o=(0,i.Fl)((()=>!(!l.value.filters||!l.value.filters.length))),d=(0,i.Fl)((()=>{const e={};return(0,n.forEach)(a.value,(t=>{e[t.id]=!0})),e})),u=(0,i.Fl)((()=>o.value?(0,n.filter)(l.value.filters,(e=>!d.value[e.id])):[]));return{addFilterSelectComponent:(0,i.Fl)((()=>o.value&&(0,i.h)(B.Z,{class:"a_table__filters_top__footer__select",type:"select",data:u.value,keyLabel:"label",keyId:"id",label:"_A_FILTERS_ADD_FILTER_",translateData:!0,disabled:!u.value.length,search:!0,change:s}))),addFiltersVisible:s,deleteFiltersVisible:({filter:e})=>{r({isAdd:!1,filterId:e.id})},filtersHidden:u,hasFiltersHiddenDefault:o}}(e,t),{buttonSaveComponentBottom:E,buttonSaveTopComponent:A,changeModelFiltersSaved:I,closeModalSave:C,isModalSaveVisible:g,modelFiltersSaved:V,selectFiltersSavedComponent:L,selectorCloseIds:M}=function(e,{onOpen:t=(()=>({}))}){const l=(0,i.Vh)(e,"canSave"),a=(0,i.Vh)(e,"filtersSaved"),r=(0,i.Vh)(e,"onUpdateModelFilters"),s=(0,i.Vh)(e,"id"),o=(0,i.iH)(void 0),n=(0,i.iH)(void 0),u=(0,i.iH)(void 0),p=(0,i.Fl)((()=>`${s.value}btn_save_top`)),_=(0,i.Fl)((()=>`${s.value}btn_save_bottom`)),c=()=>{u.value=p.value,o.value=!0},h=()=>{u.value=_.value,o.value=!0},v=(0,i.Fl)((()=>({class:"a_btn a_btn_secondary a_text_nowrap a_table__filters_top__delete_filter_saved",text:{desktop:"_A_FILTERS_SAVE_BTN_"},iconLeft:{mobile:"FloppyDisk"},textScreenReader:{mobile:"_A_FILTERS_SAVE_BTN_"}}))),f=(0,i.Fl)((()=>l.value&&(0,i.h)(d.Z,{id:p.value,onClick:c,...v.value,...D.zP.value.buttonSaveTop}))),F=(0,i.Fl)((()=>l.value&&(0,i.h)(d.Z,{...v.value,id:_.value,onClick:h}))),m=({model:e,item:l})=>{n.value=e,e?l&&(r.value({model:l.data||{},isUpdateFiltersVisible:!0}),t()):l&&l&&(r.value({model:{},isUpdateFiltersVisible:!0}),t())},y=(0,i.Fl)((()=>l.value&&(0,i.h)(B.Z,{modelValue:n.value,class:"a_table__filters_top__save_select",type:"select",data:a.value,keyLabel:"label",keyId:"label",label:"_A_FILTERS_SAVE_SELECT_",translateData:!0,disabled:!a.value.length,search:!0,deselect:!0,change:m,...D.zP.value.selectFiltersSaved})));return{buttonSaveComponentBottom:F,buttonSaveTopComponent:f,changeModelFiltersSaved:m,closeModalSave:()=>{o.value=!1},isModalSaveVisible:o,modelFiltersSaved:n,selectFiltersSavedComponent:y,selectorCloseIds:u}}(e,{onOpen:o}),{buttonDeleteFiltersSavedComponent:P}=function(e,{changeModelFiltersSaved:t=(()=>{}),idFilterTop:l=(0,i.Fl)((()=>"")),modelFiltersSaved:a=(0,i.iH)(void 0)}){const r=(0,i.Vh)(e,"canSave"),s=(0,i.Vh)(e,"id"),o=(0,i.Vh)(e,"updateFiltersSaved"),{closeConfirm:n,openConfirm:u,changeConfirmOptions:p}=(0,q.Z)(),{addNotification:_}=(0,T.ZP)(),c=(0,i.Fl)((()=>`${s.value}btn_save_top`)),h=(0,i.Fl)((()=>!a.value)),v=(0,i.Fl)((()=>h.value?"_A_FILTERS_DELETE_FILTER_SAVED_BTN_DISABLED_":"_A_FILTERS_DELETE_FILTER_SAVED_BTN_{{name}}_")),f=async()=>{p({loading:!0});try{await o.value({action:"delete",label:a.value})}catch(e){return _({text:"_A_FILTERS_DELETE_FILTER_MSG_ERROR_{{name}}_",type:"danger",extra:{name:a.value}}),void p({loading:!1})}_({text:"_A_FILTERS_DELETE_FILTER_MSG_SUCCESS_{{name}}_",extra:{name:a.value}}),p({loading:!1}),n(),t({model:void 0})},F=()=>{u({headerText:"_A_FILTERS_DELETE_FILTER_HEADER_{{name}}_",bodyHtml:"_A_FILTERS_DELETE_FILTER_BODY_{{name}}_",extra:{name:a.value},save:f,selectorCloseIds:[c.value,l.value],saveButtonText:"_A_FILTERS_DELETE_FILTER_BTN_DELETE_"})};return{buttonDeleteFiltersSavedComponent:(0,i.Fl)((()=>r.value&&(0,i.h)(d.Z,{id:c.value,class:"a_btn a_btn_secondary a_table__filters_top__delete_filter_saved",iconLeft:"Trash",textScreenReader:v.value,title:v.value,extra:{name:a.value},ariaDisabled:h.value,onClick:F,...D.zP.value.buttonDeleteFiltersSaved})))}}(e,{changeModelFiltersSaved:I,idFilterTop:l,modelFiltersSaved:V}),{filtersTopFooter:O,filtersTopHeader:x}=function({filterMainComponent:e,buttonSearchComponent:t,buttonToggleComponent:l,selectFiltersSavedComponent:a,buttonDeleteFiltersSavedComponent:r,buttonSaveTopComponent:s,addFilterSelectComponent:o}){const d={filterMainComponent:e,buttonSearchComponent:t,buttonToggleComponent:l,selectFiltersSavedComponent:a,buttonDeleteFiltersSavedComponent:r,buttonSaveTopComponent:s,addFilterSelectComponent:o},u=(0,i.Fl)((()=>(0,i.h)("div",{class:"a_table__filters_top__header"},(0,n.map)(D.RN.value.config.headerTopGroups,(e=>(0,i.h)("div",{class:"a_table__filters_top__header__group",...e.props},(0,n.map)(e.children,(e=>d[`${e.component}Component`]?.value))))))));return{filtersTopFooter:(0,i.Fl)((()=>(0,i.h)("div",{class:"a_table__filters_top__footer"},(0,n.map)(D.RN.value.config.headerBottomGroups,(e=>(0,i.h)("div",{class:"a_table__filters_top__footer__group",...e.props},(0,n.map)(e.children,(e=>d[`${e.component}Component`]?.value)))))))),filtersTopHeader:u}}({filterMainComponent:p,buttonSearchComponent:_,buttonToggleComponent:a,selectFiltersSavedComponent:L,buttonDeleteFiltersSavedComponent:P,buttonSaveTopComponent:A,addFilterSelectComponent:F});return f(),(0,i.Jd)((()=>{v()})),{addFiltersVisible:m,buttonSaveComponentBottom:E,buttonSearchComponent:_,changeModelFiltersSaved:I,closeModalSave:C,deleteFiltersVisible:y,filtersHidden:b,filtersTopFooter:O,filtersTopHeader:x,hasFiltersHiddenDefault:S,idFilterTop:l,isModalSaveVisible:g,isOpen:r,modelFiltersSaved:V,onSearch:h,selectorCloseIds:M,styleToggle:u}},render(){return(0,i.h)("div",{id:this.idFilterTop,class:"a_table__filters_top"},[(0,i.h)("form",{},[this.filtersTopHeader,(0,i.h)("div",{class:"a_table__filters_top__always_visible",style:this.styleToggle},[this.filtersGroup.alwaysVisible.map((e=>(0,i.h)(M,{key:e.id,closable:!1,filter:e,unappliedModel:this.unappliedModel,onUpdateModelFilters:this.onUpdateModelFilters,updateDataKeyByIdFromFilter:this.updateDataKeyByIdFromFilter,id:this.id},this.$slots))),this.filtersVisible.map((e=>(0,i.h)(M,{key:e.id,closable:!0,filter:e,unappliedModel:this.unappliedModel,onUpdateModelFilters:this.onUpdateModelFilters,id:this.id,onDeleteFiltersVisible:this.deleteFiltersVisible,updateDataKeyByIdFromFilter:this.updateDataKeyByIdFromFilter},this.$slots))),this.filtersTopFooter])]),this.isModalSaveVisible&&(0,i.h)(A,{changeModelFiltersSaved:this.changeModelFiltersSaved,filtersSaved:this.filtersSaved,modelFiltersSaved:this.modelFiltersSaved,selectorCloseIds:this.selectorCloseIds,updateFiltersSaved:this.updateFiltersSaved,onClose:this.closeModalSave})])}},O={name:"AFilters",props:{appliedModel:{type:Object,required:!1,default:()=>({})},canSave:{type:Boolean,required:!1},disabled:{type:Boolean,required:!1},filters:{type:Array,required:!1,default:()=>[]},filtersSaved:{type:Array,required:!1,default:()=>[]},id:{type:String,required:!1,default:()=>(0,n.uniqueId)("a_filters_")},unappliedModel:{type:Object,required:!1,default:()=>({})},updateFiltersSaved:{type:Function,required:!1,default:void 0}},emits:["startSearch","update:appliedModel","update:unappliedModel"],setup(e,t){const{filtersDataKeyById:l,filtersGroup:a,filtersKeyById:r,filtersVisible:s,filtersVisibleAll:o,filtersVisibleIds:d,hasFilters:u,onUpdateModelFilters:p,setFiltersVisibleIds:c}=function(e,{emit:t}){const l=(0,i.Vh)(e,"filters"),a=(0,i.Vh)(e,"unappliedModel"),r=(0,i.iH)({}),s=(0,i.iH)([]),o=(0,i.Fl)((()=>l.value.length>0)),d=(0,i.Fl)((()=>{const e={};return(0,n.forEach)((0,n.cloneDeep)(l.value),(t=>{e[t.id]=t,V.Z[t.type]&&t.children&&t.children.length&&(0,n.forEach)(t.children,(t=>{e[t.id]=t}))})),e})),u=(0,i.Fl)((()=>{const e={main:void 0,alwaysVisible:[],filters:[]};return(0,n.forEach)((0,n.cloneDeep)(l.value),(t=>{t.main?e.main?e.alwaysVisible.push(t):e.main=t:t.alwaysVisible?e.alwaysVisible.push(t):e.filters.push(t)})),e})),p=(0,i.Fl)((()=>{const e=[];return(0,n.forEach)(s.value,(t=>{d.value[t]&&e.push(d.value[t])})),e})),_=(0,i.Fl)((()=>{const e=[];e.push(...l.value);const t=[];return(0,n.forEach)(e,(e=>{t.push(e),V.Z[e.type]&&e.children&&e.children.length&&(0,n.forEach)(e.children,(e=>{t.push(e)}))})),t})),c=()=>{const e=[];(0,n.forEach)(u.value.filters,(t=>{a.value[t.id]&&e.push(t.id)})),s.value=e};return{filtersDataKeyById:r,filtersGroup:u,filtersKeyById:d,filtersVisible:p,filtersVisibleAll:_,filtersVisibleIds:s,hasFilters:o,onUpdateModelFilters:({model:e,isUpdateFiltersVisible:l})=>{t("update:unappliedModel",e),l&&c()},setFiltersVisibleIds:c}}(e,t),{closeFilterValue:h}=function(e,{emit:t},{onUpdateModelFilters:l=(()=>{})}){const a=(0,i.Vh)(e,"appliedModel"),r=(0,i.Vh)(e,"unappliedModel");return{closeFilterValue:({filter:e,currentModel:i})=>{const s=(0,n.cloneDeep)(a.value);if(_[e.type]){if(s[e.id]&&s[e.id].length){const t=s[e.id].indexOf(i);-1!==t&&s[e.id].splice(t,1)}if(r.value[e.id]&&r.value[e.id].length){const l=r.value[e.id].indexOf(i);if(-1!==l){const i=(0,n.cloneDeep)(r.value);i[e.id].splice(l,1),t("update:unappliedModel",i)}}}else{const l=(0,n.cloneDeep)(r.value);l[e.id]=void 0,t("update:unappliedModel",l),s[e.id]=void 0}t("update:appliedModel",s),setTimeout((()=>{l({model:a.value})}))}}}(e,t,{onUpdateModelFilters:p}),{dataKeyByKeyIdPerFilter:v,updateDataKeyByIdFromFilter:f}=function(){const e=(0,i.iH)({});return{dataKeyByKeyIdPerFilter:e,updateDataKeyByIdFromFilter:({dataKeyByKeyId:t,filterId:l})=>{e.value[l]=(0,n.cloneDeep)(t)}}}(),{toggleFiltersVisible:F}=function(e,{filtersVisibleIds:t=(0,i.iH)([]),onUpdateModelFilters:l=(()=>{})}){const a=(0,i.Vh)(e,"unappliedModel");return{toggleFiltersVisible:({isAdd:e=!0,filterId:i})=>{if(e)t.value.push(i);else{const e=t.value.indexOf(i);-1!==e&&t.value.splice(e,1);const r=(0,n.cloneDeep)(a.value);r[i]=void 0,l({model:r})}}}}(e,{filtersVisibleIds:d,onUpdateModelFilters:p}),{startSearch:m}=function(e,{emit:t},{onUpdateModelFilters:l=(()=>{})}){const a=(0,i.Vh)(e,"appliedModel"),r=(0,i.Vh)(e,"unappliedModel");return{startSearch:()=>{t("update:appliedModel",r.value),setTimeout((()=>{l({model:a.value})}))}}}(e,t,{onUpdateModelFilters:p}),{filtersSavedLocal:y,initFiltersSaved:b,updateFiltersSavedLocal:S}=function(e){const t=(0,i.Vh)(e,"filtersSaved"),l=(0,i.Vh)(e,"unappliedModel"),a=(0,i.Vh)(e,"updateFiltersSaved"),r=(0,i.iH)([]);return{filtersSavedLocal:r,initFiltersSaved:()=>{r.value=t.value||[]},updateFiltersSavedLocal:({action:e="",label:t=""})=>{if("create"===e)r.value.push({label:t,data:(0,n.cloneDeep)(l.value)});else{const i=(0,n.findIndex)(r.value,["label",t]);-1!==i&&("delete"===e?r.value.splice(i,1):"update"===e&&r.value.splice(i,1,(0,n.cloneDeep)(l.value)))}(0,n.isFunction)(a.value)&&a.value({action:e,label:t,model:l.value,filtersSaved:r.value})}}}(e);return c(),b(),{closeFilterValue:h,dataKeyByKeyIdPerFilter:v,filtersDataKeyById:l,filtersGroup:a,filtersKeyById:r,filtersSavedLocal:y,filtersVisible:s,filtersVisibleAll:o,filtersVisibleIds:d,hasFilters:u,onUpdateModelFilters:p,setFiltersVisibleIds:c,startSearch:m,toggleFiltersVisible:F,updateDataKeyByIdFromFilter:f,updateFiltersSavedLocal:S}},render(){if(this.hasFilters)return(0,i.h)("div",[(0,i.h)(P,{id:this.id,canSave:this.canSave,disabled:this.disabled,filtersGroup:this.filtersGroup,filtersKeyById:this.filtersKeyById,filtersSaved:this.filtersSavedLocal,filtersVisible:this.filtersVisible,unappliedModel:this.unappliedModel,updateFiltersSaved:this.updateFiltersSavedLocal,onUpdateModelFilters:this.onUpdateModelFilters,updateDataKeyByIdFromFilter:this.updateDataKeyByIdFromFilter,onStartSearch:this.startSearch,onToggleFiltersVisible:this.toggleFiltersVisible},this.$slots),(0,i.h)(F,{id:this.id,appliedModel:this.appliedModel,closeFilterValue:this.closeFilterValue,dataKeyByKeyIdPerFilter:this.dataKeyByKeyIdPerFilter,disabled:this.disabled,filtersKeyById:this.filtersKeyById,filtersVisibleAll:this.filtersVisibleAll},this.$slots)])}},x={name:"PageFiltersExample",components:{AlohaExample:o.Z,AFilters:O},setup(){const{codeHtml:e}={codeHtml:'<a-filters\n  :filters="filters"\n  v-model:applied-model="appliedModel"\n  v-model:unapplied-model="unappliedModel"\n>\n</a-filters>'},{codeJs:t}={codeJs:'import {\n  ref,\n} from "vue";\n\nimport AFilters from "aloha-vue/src/AFilters/AFilters";\n    \nexport default {\n  name: "PageFiltersExample",\n  components: {\n    AFilters,\n  },\n  setup() {\n    const filters = [\n      {\n        type: "text",\n        id: "search",\n        label: "_A_PAGE_FILTER_SEARCH_",\n        main: true,\n      },\n      {\n        type: "text",\n        id: "aloha",\n        label: "_A_PAGE_FILTER_TEXT_",\n        alwaysVisible: true,\n      },\n      {\n        type: "date",\n        id: "date",\n        label: "_A_PAGE_FILTER_DATE_",\n        alwaysVisible: true,\n      },\n    ];\n\n    const appliedModel = ref({});\n    const unappliedModel = ref({});\n    \n    return {\n      appliedModel,\n      filters,\n      unappliedModel,\n    };\n  },\n};'};return{appliedModel:(0,i.iH)({}),codeHtml:e,codeJs:t,filters:[{type:"text",id:"search",label:"_A_PAGE_FILTER_SEARCH_",main:!0},{type:"text",id:"aloha",label:"_A_PAGE_FILTER_TEXT_",alwaysVisible:!0},{type:"date",id:"date",label:"_A_PAGE_FILTER_DATE_",alwaysVisible:!0}],unappliedModel:(0,i.iH)({})}}};var H=l(3744);const N=(0,H.Z)(x,[["render",function(e,t){const l=(0,i.up)("a-filters"),a=(0,i.up)("aloha-example");return(0,i.wg)(),(0,i.j4)(a,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_PAGE_FILTERS_HEADER_",description:"_A_PAGE_FILTERS_DESCRIPTION_",props:["filters","v-model:applied-model","v-model:unapplied-model"]},{default:(0,i.w5)((()=>[(0,i._)("div",null,[(0,i.Wm)(l,{filters:e.filters,"applied-model":e.appliedModel,"onUpdate:appliedModel":t[0]||(t[0]=t=>e.appliedModel=t),"unapplied-model":e.unappliedModel,"onUpdate:unappliedModel":t[1]||(t[1]=t=>e.unappliedModel=t)},null,8,["filters","applied-model","unapplied-model"])])])),_:1},8,["code-html","code-js"])}]]),U={name:"PageFiltersDefaultHide",components:{AlohaExample:o.Z,AFilters:O},setup(){const{codeHtml:e}={codeHtml:'<a-filters\n  :filters="filters"\n  v-model:applied-model="appliedModel"\n  v-model:unapplied-model="unappliedModel"\n>\n</a-filters>'},{codeJs:t}={codeJs:'import {\n  ref,\n} from "vue";\n\nimport AFilters from "aloha-vue/src/AFilters/AFilters";\n    \nexport default {\n  name: "PageFiltersDefaultHide",\n  components: {\n    AFilters,\n  },\n  setup() {\n     const filters = [\n      {\n        type: "text",\n        id: "search",\n        label: "_A_TABLE_FILTER_SEARCH_",\n        main: true,\n      },\n      {\n        type: "text",\n        id: "aloha",\n        label: "_A_TABLE_FILTER_TEXT_",\n      },\n      {\n        type: "numberRange",\n        id: "numberRange",\n        label: "_A_TABLE_FILTER_INPUT_NUMBER_RANGE_",\n      },\n      {\n        type: "date",\n        id: "date",\n        label: "_A_TABLE_FILTER_DATE_",\n      },\n      {\n        type: "text",\n        id: "aloha1",\n        label: "_A_TABLE_FILTER_EXTRA_",\n      },\n      {\n        type: "integerRange",\n        id: "integerNumber",\n        label: "Integer range",\n      },\n    ];\n\n    const appliedModel = ref({});\n    const unappliedModel = ref({});\n    \n    return {\n      appliedModel,\n      filters,\n      unappliedModel,\n    };\n  },\n};'};return{appliedModel:(0,i.iH)({}),codeHtml:e,codeJs:t,filters:[{type:"text",id:"search",label:"_A_TABLE_FILTER_SEARCH_",main:!0},{type:"text",id:"aloha",label:"_A_TABLE_FILTER_TEXT_"},{type:"numberRange",id:"numberRange",label:"_A_TABLE_FILTER_INPUT_NUMBER_RANGE_"},{type:"date",id:"date",label:"_A_TABLE_FILTER_DATE_"},{type:"text",id:"aloha1",label:"_A_TABLE_FILTER_EXTRA_"},{type:"integerRange",id:"integerNumber",label:"Integer range"}],unappliedModel:(0,i.iH)({})}}},K=(0,H.Z)(U,[["render",function(e,t){const l=(0,i.up)("a-filters"),a=(0,i.up)("aloha-example");return(0,i.wg)(),(0,i.j4)(a,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_FILTERS_PAGE_DEFAULT_HIDE_HEADER_",description:"_A_FILTERS_PAGE_FILTERS_DEFAULT_HIDE_DESCRIPTION_",props:["filters"]},{default:(0,i.w5)((()=>[(0,i._)("div",null,[(0,i.Wm)(l,{filters:e.filters,"applied-model":e.appliedModel,"onUpdate:appliedModel":t[0]||(t[0]=t=>e.appliedModel=t),"unapplied-model":e.unappliedModel,"onUpdate:unappliedModel":t[1]||(t[1]=t=>e.unappliedModel=t)},null,8,["filters","applied-model","unapplied-model"])])])),_:1},8,["code-html","code-js"])}]]);var k=l(9873);const Z={name:"PageFilters",components:{AlohaPage:a.Z,AlohaTableProps:r.Z,ATranslation:s.Z,PageFiltersExample:N,PageFiltersDefaultHide:K},setup(){const{pageTitle:e}=function(){const e=(0,i.Fl)((()=>(0,k.Gd)({placeholder:"_A_FILTERS_COMPONENT_NAME_"})));return{pageTitle:(0,i.Fl)((()=>"AFilters"+(e.value?` (${e.value})`:"")))}}(),{dataProps:t}={dataProps:[{name:"alert-class",description:"_A_ALERT_PROPS_ALERT_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"alert-content-class",description:"_A_ALERT_PROPS_ALERT_CONTENT_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"btn-close-attributes",description:"_A_ALERT_PROPS_BTN_CLOSE_ATTRIBUTES_DESCRIPTION_",type:"Object",default:"{}",required:!1},{name:"closable",description:"_A_ALERT_PROPS_CLOSABLE_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"show-icon",description:"_A_ALERT_PROPS_HAS_ICON_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"html",description:"_A_ALERT_PROPS_HTML_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"icon",description:"_A_ALERT_PROPS_ICON_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"icon-class",description:"_A_ALERT_PROPS_ICON_CLASS_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"is-visible",description:"_A_ALERT_PROPS_IS_VISIBLE_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"removeAlertOnClose",description:"_A_ALERT_PROPS_REMOVE_ALERT_ON_CLOSE_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"safe-html",description:"_A_ALERT_PROPS_SAFE_HTML_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"text",description:"_A_ALERT_PROPS_TEXT_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"text-close",description:"_A_ALERT_PROPS_TEXT_CLOSE_DESCRIPTION_",type:"String",default:"_ALERT_CLOSE_",required:!1},{name:"type",description:"_A_ALERT_PROPS_TYPE_DESCRIPTION_",type:"String",default:"danger",required:!1}]},{dataSlots:l}={dataSlots:[{name:"default",description:"_A_ALERT_SLOTS_DEFAULT_DESCRIPTION_"}]},{dataEvents:a}={dataEvents:[{name:"close",description:"_A_ALERT_EVENTS_CLOSE_DESCRIPTION_",type:"Function"}]};return{dataEvents:a,dataProps:t,dataSlots:l,pageTitle:e}}},$=(0,H.Z)(Z,[["render",function(e,t){const l=(0,i.up)("a-translation"),a=(0,i.up)("page-filters-example"),r=(0,i.up)("page-filters-default-hide"),s=(0,i.up)("aloha-page");return(0,i.wg)(),(0,i.j4)(s,{"page-title":e.pageTitle},{body:(0,i.w5)((()=>[(0,i.Wm)(l,{tag:"p",html:"_A_FILTERS_COMPONENT_DESCRIPTION_"}),(0,i.Wm)(a),(0,i.Wm)(r),(0,i.kq)("aloha-table-props("),(0,i.kq)('  :data="dataProps"'),(0,i.kq)(")"),(0,i.kq)(""),(0,i.kq)("aloha-table-props("),(0,i.kq)('  table-label="Slots"'),(0,i.kq)('  :data="dataSlots"'),(0,i.kq)("  :columns=\"['name', 'description']\""),(0,i.kq)(")"),(0,i.kq)(""),(0,i.kq)("aloha-table-props("),(0,i.kq)('  table-label="Events"'),(0,i.kq)('  :data="dataEvents"'),(0,i.kq)("  :columns=\"['name', 'type', 'description']\""),(0,i.kq)(")")])),_:1},8,["page-title"])}]])}}]);
//# sourceMappingURL=chunk.6266.d41e2b9e9062c2212f2f.js.map