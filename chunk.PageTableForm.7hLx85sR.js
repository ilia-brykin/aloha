import{A as Z,a as _e}from"./chunk.AlohaExample.C5zbBUyN.js";import{d as me,s as te,A as j,c as $,b as he,f as fe,e as be,h as we,i as ve,j as Ae,_ as G,k as se,l as Ee,g as Re}from"./bundle.index.2fjrVuJ_.js";import{t as s,d as u,h as m,M as ae,l as pe,aX as ye,L as Ce,O as ge,C as De,aY as Te,g as Me,r as y,j as Le,P as Oe,E as Fe,z as xe,o as ke,Y as V,W as J,aU as K,f as g,$ as F,_ as Ie}from"./chunk.vendor.CWr53wb5.js";import{i as Be,j as k,r as I,l as W,M as Se,T as qe,v as Ne,h as Pe,W as He,a as le,d as Ue,b as $e,u as We}from"./chunk.vendor-lodash.CWoM99Se.js";import{A as je}from"./chunk.AFormElement.DH-CPCWN.js";import"./chunk.APageTabTitle.ByCz-RvO.js";import"./chunk.AlohaHighlightjs.Cyb5M4zM.js";import"./chunk.translations-ar.CG00cKrz.js";import"./chunk.translations-de.jRMdBWJu.js";import"./chunk.translations-en.Ccpp2c3W.js";import"./chunk.translations-es.Bh9mDab1.js";import"./chunk.translations-fr.B3yhrsaC.js";import"./chunk.translations-hr.B5_cxohh.js";import"./chunk.translations-it.DDcVOPnN.js";import"./chunk.translations-ru.BxzwpxMH.js";function Ge(e){const t=s(e,"column"),a=s(e,"isEditable"),l=s(e,"isEditMode");return{disabledLocal:u(()=>{var n,o;return!!((o=(n=t.value)==null?void 0:n.formElement)!=null&&o.disabled)||a.value&&!l.value})}}function Ve(e){const t=s(e,"column"),a=s(e,"isEditable"),l=s(e,"isEditMode"),r=s(e,"isFooter");return{readonlyLocal:u(()=>{var o,i,c,d;return r.value?!0:a.value?(i=(o=t.value)==null?void 0:o.formElement)!=null&&i.useRowReadonly?!l.value:!!((d=(c=t.value)==null?void 0:c.formElement)!=null&&d.readonly):!0})}}function Je(e){const t=s(e,"column"),a=s(e,"isFooter"),l=u(()=>a.value?t.value.footerSlot:t.value.slot),r=u(()=>a.value?t.value.footerSlotAfter:t.value.slotAfter),n=u(()=>!!l.value),o=u(()=>!!r.value);return{hasSlot:n,hasSlotAfter:o,slotName:l,slotNameAfter:r}}function oe(e){if(!(e==null||e===""))return typeof e=="number"?`${e}px`:e}function ie(e){const t=s(e,"column");return{columnStyles:u(()=>{const l={},r=oe(t.value.width),n=oe(t.value.maxWidth),o=oe(t.value.minWidth);return r&&(l.width=r),n&&(l.maxWidth=n),o&&(l.minWidth=o),Be(t.value.style)?{...l,...t.value.style}:t.value.style?[l,t.value.style]:l})}}const Ke={name:"ATableFormCell",props:{column:{type:Object,required:!0},columnIndex:{type:Number,required:!0},columnStyle:{type:Object,required:!1,default:void 0},errorIcon:{type:String,required:!1,default:void 0},errors:{type:Object,required:!1,default:()=>({})},id:{type:String,required:!0},isEditMode:{type:Boolean,required:!1,default:!1},isEditable:{type:Boolean,required:!1,default:!1},isFooter:{type:Boolean,required:!1,default:!1},row:{type:Object,required:!0},rowData:{type:Object,required:!1,default:void 0},rowIndex:{type:Number,required:!0},rows:{type:Array,required:!0},tag:{type:String,required:!1,default:"td"}},emits:["updateRowData"],setup(e){const{columnStyles:t}=ie({column:e.column}),{readonlyLocal:a}=Ve(e),{disabledLocal:l}=Ge(e),{hasSlot:r,hasSlotAfter:n,slotName:o,slotNameAfter:i}=Je(e),c=u(()=>e.rowData||e.row);return{columnStyles:t,disabledLocal:l,hasSlot:r,hasSlotAfter:n,readonlyLocal:a,rowDataLocal:c,slotName:o,slotNameAfter:i}},methods:{updateRowData({item:e,model:t}){this.$emit("updateRowData",{column:this.column,columnId:this.column.id,item:e,model:t,value:t})}},render(){const{type:e="text",...t}=this.column.formElement||{},a={column:this.column,columnIndex:this.columnIndex,row:this.row,rowIndex:this.rowIndex,rows:this.rows};return m(this.tag,{class:["a_table_form__cell",`a_table_form__cell_${this.tag}`,this.column.class,this.isFooter?this.column.classFooter:this.column.classRow],style:[this.columnStyles,this.columnStyle]},[this.hasSlot&&this.$slots[this.slotName]?this.$slots[this.slotName](a):m(je,{id:this.column.id,errorIcon:this.errorIcon,idPrefix:this.id,...t,change:this.updateRowData,disabled:this.disabledLocal,errors:k(this.errors,this.column.id),errorsClass:"a_sr_only",modelValue:k(this.rowDataLocal,this.column.id),readonly:this.readonlyLocal,type:e}),this.hasSlotAfter&&this.$slots[this.slotNameAfter]?this.$slots[this.slotNameAfter](a):null])}};function Xe(e,{idBtnDelete:t=u(()=>""),isActionsDisabled:a=u(()=>!1)}){const l=s(e,"id"),r=s(e,"isDeletable"),n=s(e,"isDeletableConfirm"),o=s(e,"onDeleteRow"),i=s(e,"row"),c=s(e,"rowIndex"),d=s(e,"texts"),{closeConfirm:v,openConfirm:b}=me(),w=()=>{v(),ae().then(()=>{te({selector:`#${t.value}`})})},E=()=>{b({bodyHtml:d.value.actionDeleteConfirmBody,closeButtonText:d.value.actionDeleteConfirmClose,headerText:d.value.actionDeleteConfirmHeader,save:async()=>{await o.value({btnDeleteId:t.value,row:i.value,rowIndex:c.value,rowId:l.value}),v()},close:w,saveButtonText:d.value.actionDeleteConfirmSave})};return{onDeleteClick:()=>{if(!a.value){if(n.value){E();return}r.value&&o.value({btnDeleteId:t.value,row:i.value,rowIndex:c.value,rowId:l.value})}}}}function Ye(e){const t=s(e,"actionsDisabledCallback"),a=s(e,"hasActiveEditRow"),l=s(e,"isActiveEditMode"),r=s(e,"row"),n=s(e,"rowIndex"),o=u(()=>a.value&&!l.value),i=u(()=>{if(o.value)return!0;const d=k(t.value,"delete");return I(d)?d({row:r.value,rowIndex:n.value}):!1}),c=u(()=>{if(o.value)return!0;const d=k(t.value,"edit");return I(d)?d({row:r.value,rowIndex:n.value}):!1});return{isDeleteDisabled:i,isEditDisabled:c}}function ze(e){const t=s(e,"actionsHideCallback"),a=s(e,"row"),l=s(e,"rowIndex"),r=u(()=>{const o=k(t.value,"delete");return I(o)?o({row:a.value,rowIndex:l.value}):!1}),n=u(()=>{const o=k(t.value,"edit");return I(o)?o({row:a.value,rowIndex:l.value}):!1});return{isDeleteHidden:r,isEditHidden:n}}function Ze(e){const t=s(e,"id"),a=u(()=>`${t.value}_delete`),l=u(()=>`${t.value}_edit`),r=u(()=>`${t.value}_cancel`),n=u(()=>`${t.value}_save`);return{idBtnCancel:r,idBtnDelete:a,idBtnEdit:l,idBtnSave:n}}function Qe(e){const t=s(e,"isDeletable"),a=s(e,"isDeletableConfirm"),l=s(e,"isEditable"),r=s(e,"isActiveEditMode"),n=s(e,"widths");return{columnStyles:u(()=>{const i=t.value||a.value,c=l.value||r.value&&i?n.value.actionsColumnDouble:n.value.actionsColumnSingle;return{maxWidth:`${c}px`,minWidth:`${c}px`,width:`${c}px`}})}}function et(e){const t=s(e,"row"),a=s(e,"rowIndex"),l=s(e,"texts"),r=s(e,"actionsTitleCallback"),n=u(()=>{const i=k(r.value,"delete");return I(i)?i({row:t.value,rowIndex:a.value}):l.value.actionDelete}),o=u(()=>{const i=k(r.value,"edit");return I(i)?i({row:t.value,rowIndex:a.value}):l.value.actionEdit});return{deleteTitle:n,editTitle:o}}const tt={name:"ATableFormCellAction",props:{actionsClasses:{type:Object,required:!1,default:()=>({})},actionsDisabledCallback:{type:Object,required:!1,default:()=>({})},actionsHideCallback:{type:Object,required:!1,default:()=>({})},actionsTitleCallback:{type:Object,required:!1,default:()=>({})},extra:{type:Object,required:!1,default:void 0},hasActiveEditRow:{type:Boolean,required:!1,default:!1},id:{type:String,required:!0},isActionsSticky:{type:Boolean,required:!1,default:!1},isActiveEditMode:{type:Boolean,required:!1,default:!1},isDeletable:{type:Boolean,required:!1,default:!1},isDeletableConfirm:{type:Boolean,required:!1,default:!1},isEditable:{type:Boolean,required:!1,default:!1},isFooter:{type:Boolean,required:!1,default:!1},isHeader:{type:Boolean,required:!1,default:!1},isSaving:{type:Boolean,required:!1,default:!1},onCancelEditRow:{type:Function,required:!0},onDeleteRow:{type:Function,required:!0},onEditRow:{type:Function,required:!0},onSaveEditRow:{type:Function,required:!0},row:{type:Object,required:!0},rowIndex:{type:Number,required:!0},texts:{type:Object,required:!1,default:()=>({})},widths:{type:Object,required:!1,default:()=>({})}},setup(e){const{isDeleteDisabled:t,isEditDisabled:a}=Ye(e),{isDeleteHidden:l,isEditHidden:r}=ze(e),{idBtnCancel:n,idBtnDelete:o,idBtnEdit:i,idBtnSave:c}=Ze(e),{onDeleteClick:d}=Xe(e,{idBtnDelete:o,isActionsDisabled:t}),{columnStyles:v}=Qe(e),{deleteTitle:b,editTitle:w}=et(e);return{columnStyles:v,deleteTitle:b,editTitle:w,idBtnCancel:n,idBtnDelete:o,idBtnEdit:i,idBtnSave:c,isDeleteDisabled:t,isDeleteHidden:l,isEditDisabled:a,isEditHidden:r,onDeleteClick:d}},render(){const e=this.isHeader?"th":"td";return m(e,{class:["a_table_form__cell",`a_table_form__cell_${e}`,"a_table_form__cell_actions",{a_table_form__cell_actions_sticky:this.isActionsSticky}],style:this.columnStyles},[this.isHeader?m("span",{class:"a_sr_only"},[m(j,{tag:"span",text:this.texts.actionsColumn})]):this.isFooter?null:m("div",{class:"a_table_form__actions",role:"group"},this.isActiveEditMode?[m($,{id:this.idBtnCancel,class:["a_table_form__action_button",this.actionsClasses.editCancel],disabled:this.isSaving,extra:this.extra,iconLeft:pe,title:this.texts.actionEditCancel,textScreenReader:this.texts.actionEditCancel,onClick:()=>this.onCancelEditRow({id:this.id,row:this.row,rowIndex:this.rowIndex,trigger:"cancel"})}),m($,{id:this.idBtnSave,class:["a_table_form__action_button",this.actionsClasses.editSave],disabled:this.isSaving,extra:this.extra,iconLeft:ye,title:this.texts.actionEditSave,textScreenReader:this.texts.actionEditSave,onClick:()=>this.onSaveEditRow({id:this.id,row:this.row,rowIndex:this.rowIndex})})]:[(this.isDeletable||this.isDeletableConfirm)&&!this.isDeleteHidden&&m($,{id:this.idBtnDelete,class:["a_table_form__action_button",this.actionsClasses.delete],disabled:this.isDeleteDisabled,extra:this.extra,iconLeft:Ce,title:this.deleteTitle,textScreenReader:this.deleteTitle,onClick:this.onDeleteClick}),this.isEditable&&!this.isEditHidden&&m($,{id:this.idBtnEdit,class:["a_table_form__action_button",this.actionsClasses.edit],disabled:this.isEditDisabled,extra:this.extra,iconLeft:ge,title:this.editTitle,textScreenReader:this.editTitle,onClick:()=>this.onEditRow({id:this.id,row:this.row,rowIndex:this.rowIndex})})])])}};function ot(e){const t=s(e,"id"),a=u(()=>`${t.value}_up`);return{idBtnDown:u(()=>`${t.value}_down`),idBtnUp:a}}const at={name:"ATableFormCellDnd",props:{canMoveRowDown:{type:Function,required:!0},canMoveRowUp:{type:Function,required:!0},id:{type:String,required:!0},isCreateMode:{type:Boolean,required:!1,default:!1},isDragAndDrop:{type:Boolean,required:!1,default:!1},isDndDisabled:{type:Boolean,required:!1,default:!1},isFooter:{type:Boolean,required:!1,default:!1},isHeader:{type:Boolean,required:!1,default:!1},moveRowDown:{type:Function,required:!0},moveRowUp:{type:Function,required:!0},onDragend:{type:Function,required:!0},onDragstart:{type:Function,required:!0},rowIndex:{type:Number,required:!0},texts:{type:Object,required:!1,default:()=>({})},widths:{type:Object,required:!1,default:()=>({})}},setup(e){const{idBtnDown:t,idBtnUp:a}=ot(e);return{columnStyles:u(()=>({maxWidth:`${e.widths.dndColumn}px`,minWidth:`${e.widths.dndColumn}px`,width:`${e.widths.dndColumn}px`})),idBtnDown:t,idBtnUp:a}},render(){const e=this.isHeader?"th":"td",t=this.isDragAndDrop&&!this.isDndDisabled;return m(e,{class:["a_table_form__cell",`a_table_form__cell_${e}`,"a_table_form__cell_reorder"],style:this.columnStyles},[this.isHeader?m("span",{class:"a_sr_only"},[m(j,{tag:"span",text:this.texts.reorderColumn})]):this.isCreateMode||this.isFooter?null:m("div",{class:"a_table_form__reorder_actions"},[this.canMoveRowUp(this.rowIndex)&&m($,{id:this.idBtnUp,class:"a_sr_only_focusable a_btn a_btn_transparent_dark a_table_form__reorder_button",disabled:this.isDndDisabled,iconLeft:De,preventKeyboardRepeat:!0,tabindex:this.isDndDisabled?-1:void 0,title:this.texts.reorderUp,textScreenReader:this.texts.reorderUp,onClick:()=>this.moveRowUp(this.rowIndex)}),m("span",{ariaHidden:!0,class:"a_table_form__reorder_handle",draggable:t,onDragend:t?this.onDragend:void 0,onDragstart:t?a=>this.onDragstart(a,this.rowIndex):void 0},[m(he,{class:"a_table_form__reorder_icon",icon:Te})]),m("span",{class:"a_sr_only"},[m(j,{tag:"span",text:this.texts.reorderHandle})]),this.canMoveRowDown(this.rowIndex)&&m($,{id:this.idBtnDown,class:"a_sr_only_focusable a_btn a_btn_transparent_dark a_table_form__reorder_button",disabled:this.isDndDisabled,iconLeft:Me,preventKeyboardRepeat:!0,tabindex:this.isDndDisabled?-1:void 0,title:this.texts.reorderDown,textScreenReader:this.texts.reorderDown,onClick:()=>this.moveRowDown(this.rowIndex)})])])}},st={name:"ATableFormTh",props:{column:{type:Object,required:!0},columnStyle:{type:Object,required:!1,default:void 0},isEditable:{type:Boolean,required:!1,default:!1}},setup(e){const{columnStyles:t}=ie({column:e.column});return{columnStyles:t}},render(){var e;return m("th",{class:["a_table_form__cell","a_table_form__cell_th",this.column.class],style:[this.columnStyles,this.columnStyle]},[this.column.slotHeader&&this.$slots[this.column.slotHeader]?this.$slots[this.column.slotHeader]({column:this.column,isEditable:this.isEditable}):this.column.label&&m(j,{html:this.column.label,tag:"span"}),this.isEditable&&((e=this.column.formElement)==null?void 0:e.required)&&m("span",{class:"a_label__required"},"*")])}};function lt(e,{hasErrors:t=u(()=>!1)}){const a=s(e,"hasActiveEditRow"),l=s(e,"isActiveEditMode"),r=s(e,"isCreateMode"),n=s(e,"isFooter"),o=s(e,"isHeader"),i=s(e,"row"),c=s(e,"rowClass"),d=s(e,"rowIndex"),v=s(e,"trClass"),b=u(()=>I(c.value)?c.value({row:i.value,rowIndex:d.value,rowindex:d.value,isCreateMode:r.value,isFooter:n.value,isHeader:o.value}):c.value),w=u(()=>[v.value,b.value,{a_table_form__row_active:!o.value&&!n.value&&l.value,a_table_form__row_errors:!o.value&&!n.value&&t.value,a_table_form__row_inactive:!o.value&&!n.value&&a.value&&!l.value}]);return{rowClassLocal:b,trClassLocal:w}}function it(e,{errorsLocal:t=y(void 0)}){const a=s(e,"changeModel"),l=s(e,"onCancelEditRow"),r=s(e,"row"),n=s(e,"rows"),o=s(e,"rowIndex"),i=s(e,"saveRow"),c=y(!1),d=y(void 0),v=({column:E,columnId:R,item:M,model:S})=>{d.value||(d.value=W(r.value)||{});let x;a.value&&(x=a.value({modelAll:d.value,row:r.value,column:E,model:S,item:M})),x!=null&&x.model?d.value=W(x.model):Se(d.value,R,S),qe(t.value,R)},b=({trigger:E,id:R}={})=>{l.value({row:r.value,rowIndex:o.value,trigger:E,id:R})};return{cancelEditRow:b,isSaving:c,modelLocal:d,saveEditRow:async({id:E}={})=>{if(!c.value){t.value={},c.value=!0;try{const R=await i.value({model:W(d.value),row:r.value,rowIndex:o.value,rows:n.value});if(R!=null&&R.errors){t.value=W(R.errors);return}b({trigger:"save",id:E})}catch(R){t.value=R}finally{c.value=!1}}},updateModelLocal:v}}function nt(e){const t=s(e,"columns"),a=y({}),l=u(()=>!Ne(a.value)),r=u(()=>{const n=[];return Pe(t.value,o=>{const i=W(o.formElement)||{};i.type=i.type||"text",i.label=i.label||o.label,i.id=i.id||o.id,n.push(i)}),n});return{errorsLocal:a,hasErrors:l,optionsListForErrors:r}}function rt({idTr:e=u(()=>"")}){return{focusFirstEditableElement:()=>{const a=document.getElementById(e.value);if(!a)return;const r=Array.from(a.querySelectorAll(".a_table_form__cell:not(.a_table_form__cell_actions)")).map(n=>n.querySelector(fe)).find(Boolean);r==null||r.focus()}}}function dt(e){const t=s(e,"id"),a=s(e,"isHeader"),l=s(e,"isFooter"),r=s(e,"rowIndex");return{idTr:u(()=>`${t.value}_${r.value}${a.value?"_header":""}${l.value?"_footer":""}`)}}const ee={name:"ATableFormRow",props:{actionsClasses:{type:Object,required:!1,default:()=>({})},actionsDisabledCallback:{type:Object,required:!1,default:()=>({})},actionsHideCallback:{type:Object,required:!1,default:()=>({})},actionsTitleCallback:{type:Object,required:!1,default:()=>({})},allColumnsLength:{type:Number,required:!0},canMoveRowDown:{type:Function,required:!0},canMoveRowUp:{type:Function,required:!0},cellTag:{type:String,required:!1,default:void 0},changeModel:{type:Function,required:!1,default:void 0},columns:{type:Array,required:!0},columnsStylesGrow:{type:Object,required:!1,default:()=>({})},draggedRowIndex:{type:Number,required:!1,default:void 0},editModel:{type:Object,required:!1,default:void 0},errorIcon:{type:String,required:!1,default:void 0},extra:{type:Object,required:!1,default:void 0},hasActionsColumn:{type:Boolean,required:!1,default:!1},hasActiveEditRow:{type:Boolean,required:!1,default:!1},id:{type:String,required:!0},isActionsSticky:{type:Boolean,required:!1,default:!1},isActiveEditMode:{type:Boolean,required:!1,default:!1},isCreateMode:{type:Boolean,required:!1,default:!1},isDeletable:{type:Boolean,required:!1,default:!1},isDeletableConfirm:{type:Boolean,required:!1,default:!1},isDndDisabled:{type:Boolean,required:!1,default:!1},isDragAndDrop:{type:Boolean,required:!1,default:!1},isEditable:{type:Boolean,required:!1,default:!1},isFooter:{type:Boolean,required:!1,default:!1},isHeader:{type:Boolean,required:!1,default:!1},moveRowDown:{type:Function,required:!0},moveRowUp:{type:Function,required:!0},onCancelEditRow:{type:Function,required:!0},onDeleteRow:{type:Function,required:!0},onDragend:{type:Function,required:!0},onDragleave:{type:Function,required:!1,default:void 0},onDragover:{type:Function,required:!1,default:void 0},onDragstart:{type:Function,required:!0},onDrop:{type:Function,required:!1,default:void 0},onEditRow:{type:Function,required:!0},row:{type:Object,required:!0},rowClass:{type:[String,Object,Array,Function],required:!1,default:void 0},rowIndex:{type:Number,required:!0},rows:{type:Array,required:!0},saveRow:{type:Function,required:!0},texts:{type:Object,required:!1,default:()=>({})},trClass:{type:[String,Object,Array],required:!1,default:void 0},widths:{type:Object,required:!1,default:()=>({})}},setup(e){const{idTr:t}=dt(e),{focusFirstEditableElement:a}=rt({idTr:t}),{errorsLocal:l,hasErrors:r,optionsListForErrors:n}=nt(e),{rowClassLocal:o,trClassLocal:i}=lt(e,{hasErrors:r}),{cancelEditRow:c,isSaving:d,modelLocal:v,saveEditRow:b,updateModelLocal:w}=it(e,{errorsLocal:l});return{cancelEditRow:c,errorsLocal:l,focusFirstEditableElement:a,hasErrors:r,rowClassLocal:o,idTr:t,isSaving:d,modelLocal:v,optionsListForErrors:n,saveEditRow:b,trClassLocal:i,updateModelLocal:w}},computed:{currentRowData(){return this.isActiveEditMode&&this.modelLocal?this.modelLocal:this.row}},watch:{isActiveEditMode:{immediate:!0,handler(e){if(e){this.modelLocal=W(this.editModel===void 0?this.row:this.editModel),this.errorsLocal={},ae(()=>{this.focusFirstEditableElement()});return}this.errorsLocal={},this.isSaving=!1}}},render(){const e=[];return this.isActiveEditMode&&this.texts.editInfoText&&e.push(m("tr",{class:"a_table_form__row a_table_form__row_info",key:`info_${this.rowIndex}`},[m("td",{class:"a_table_form__cell a_table_form__cell_info",colspan:this.allColumnsLength},[m(be,{alertClass:"a_table_form__info",html:this.texts.editInfoText,isVisible:!0,type:"info"})])])),e.push(m("tr",{id:this.idTr,"aria-grabbed":!this.isHeader&&!this.isFooter?this.draggedRowIndex===this.rowIndex:void 0,class:this.trClassLocal,key:`main_${this.rowIndex}`,onDragleave:this.onDragleave&&(t=>this.onDragleave(t,this.rowIndex)),onDragover:this.onDragover&&(t=>this.onDragover(t,this.rowIndex)),onDrop:this.onDrop&&(t=>this.onDrop(t,this.rowIndex))},[this.isDragAndDrop?m(at,{id:this.idTr,canMoveRowDown:this.canMoveRowDown,canMoveRowUp:this.canMoveRowUp,isCreateMode:this.isCreateMode,isDndDisabled:this.isDndDisabled,isDragAndDrop:this.isDragAndDrop,isFooter:this.isFooter,isHeader:this.isHeader,moveRowDown:this.moveRowDown,moveRowUp:this.moveRowUp,onDragend:this.onDragend,onDragstart:this.onDragstart,rowIndex:this.rowIndex,texts:this.texts,widths:this.widths}):null,...this.columns.map((t,a)=>this.isHeader?m(st,{column:t,columnStyle:this.columnsStylesGrow[t.id],isEditable:this.isEditable},this.$slots):m(Ke,{id:this.idTr,column:t,columnIndex:a,columnStyle:this.columnsStylesGrow[t.id],errorIcon:this.errorIcon,errors:this.errorsLocal,isEditable:this.isEditable,isEditMode:this.isActiveEditMode,isFooter:this.isFooter,onUpdateRowData:this.updateModelLocal,row:this.row,rowData:this.currentRowData,rowIndex:this.rowIndex,rows:this.rows,tag:this.cellTag},this.$slots)),this.hasActionsColumn?m(tt,{id:this.idTr,actionsClasses:this.actionsClasses,actionsDisabledCallback:this.actionsDisabledCallback,actionsHideCallback:this.actionsHideCallback,actionsTitleCallback:this.actionsTitleCallback,extra:this.extra,hasActiveEditRow:this.hasActiveEditRow,isActionsSticky:this.isActionsSticky,isActiveEditMode:this.isActiveEditMode,isDeletable:this.isDeletable,isDeletableConfirm:this.isDeletableConfirm,isEditable:this.isEditable,isFooter:this.isFooter,isHeader:this.isHeader,isSaving:this.isSaving,onCancelEditRow:this.cancelEditRow,onDeleteRow:this.onDeleteRow,onEditRow:this.onEditRow,onSaveEditRow:this.saveEditRow,row:this.row,rowIndex:this.rowIndex,texts:this.texts,widths:this.widths}):null])),this.isActiveEditMode&&this.hasErrors&&e.push(m("tr",{class:"a_table_form__row a_table_form__row_errors",key:`errors_${this.rowIndex}`},[m("td",{class:"a_table_form__cell a_table_form__cell_errors",colspan:this.allColumnsLength},[m(we,{autoFocus:!0,closable:!1,errors:this.errorsLocal,optionsList:this.optionsListForErrors,idPrefix:this.idTr})])])),e}};function ct(e){const t=s(e,"actionsClasses");return{actionsClassesLocal:u(()=>({delete:"a_btn a_btn_transparent_danger",edit:"a_btn a_btn_transparent_primary",editCancel:"a_btn a_btn_transparent_primary",editSave:"a_btn a_btn_transparent_primary",addRow:"a_btn a_btn_outline_primary",...t.value}))}}function ut(e){const t=s(e,"columns"),a=s(e,"isDeletable"),l=s(e,"isDeletableConfirm"),r=s(e,"isDragAndDrop"),n=s(e,"isEditable"),o=u(()=>!!(n.value||a.value||l.value)),i=u(()=>t.value.filter(d=>d.isRender!==!1));return{allColumnsLength:u(()=>{let d=i.value.length;return r.value&&(d+=1),o.value&&(d+=1),d}),columnsVisible:i,hasActionsColumn:o}}const _t=2;function mt(e,{columnsVisible:t=u(()=>[]),hasActionsColumn:a=u(()=>!1),widthsLocal:l=u(()=>({}))}){const r=s(e,"id"),n=s(e,"isColumnsGrow"),o=s(e,"isDeletable"),i=s(e,"isDeletableConfirm"),c=s(e,"isDragAndDrop"),d=s(e,"isEditable"),{remPx:v,scalePxWithRem:b}=ve(),w=y(void 0),E=y({});let R,M;const S=u(()=>a.value?d.value?l.value.actionsColumnDouble:o.value||i.value?l.value.actionsColumnSingle:0:0),x=u(()=>c.value?l.value.dndColumn:0),D=()=>{var _;return(_=document.getElementById(r.value))==null?void 0:_.parentElement},C=_=>{if(le(_)||_==="")return 0;if(Ue(_))return+b(_)||0;if(!$e(_))return 0;const f=_.trim();return f?f.endsWith("rem")?(parseFloat(f)||0)*v.value:(f.endsWith("px"),parseFloat(f)||0):0},P=_=>{const f=`${_}px`;return{maxWidth:f,minWidth:f,width:f}},H=()=>{if(!n.value||!w.value){E.value={};return}const _=t.value||[],f=w.value-S.value-x.value-_t;if(f<=0){E.value={};return}let A=0,p=0;if(_.forEach(O=>{const q=C(O.width);A+=q,p+=Math.max(0,+O.grow||0)}),A>=f||p<=0){E.value={};return}const L=f-A,T={};_.forEach(O=>{const q=C(O.width),U=Math.max(0,+O.grow||0);if(!O.id||!q)return;const Y=q+(U>0?L*U/p:0);T[O.id]=P(Y)}),E.value=T},X=()=>{if(!n.value||R)return;const _=D();_&&(M=_,R=new ResizeObserver(He(f=>{var p,L;const A=(L=(p=f[0])==null?void 0:p.contentRect)==null?void 0:L.width;A&&(w.value=A,H())},100)),w.value=_.getBoundingClientRect().width,H(),R.observe(_))},h=()=>{R&&(M&&R.unobserve(M),R.disconnect(),R=void 0,M=void 0)};return Le([t,a,o,i,c,d,l],()=>{H()},{deep:!0}),{columnsStylesGrow:E,destroyColumnsGrowObserver:h,initColumnsGrowObserver:X}}function ht(e,{emit:t}){return{onDeleteRow:({row:l,rowIndex:r,rowId:n,btnDeleteId:o})=>{t("deleteRow",{row:l,rowIndex:r,rowId:n,btnDeleteId:o})}}}function ft(e,{emit:t},{isDndDisabled:a=u(()=>!1)}={}){const l=s(e,"focusAfterMove"),r=s(e,"id"),n=s(e,"isDragAndDrop"),o=s(e,"rows"),i=y(void 0),c=y(void 0),d=y(void 0),v=y(void 0),b=()=>{var h;(h=v.value)==null||h.remove(),v.value=void 0},w=h=>{var O,q;const _=(q=(O=h.target)==null?void 0:O.closest)==null?void 0:q.call(O,"tr");if(!_)return;const f=_.getBoundingClientRect(),A=document.createElement("table"),p=document.createElement("tbody"),L=_.cloneNode(!0);A.className="a_table_form__table",A.style.borderCollapse="collapse",A.style.borderSpacing="0",A.style.width=`${f.width}px`,A.style.tableLayout="fixed",Array.from(_.children).forEach((U,Y)=>{const B=L.children[Y];if(B){const N=window.getComputedStyle(U);B.style.width=`${U.getBoundingClientRect().width}px`,B.style.backgroundColor=N.backgroundColor,B.style.borderTop=N.borderTop,B.style.borderRight=N.borderRight,B.style.borderBottom=N.borderBottom,B.style.borderLeft=N.borderLeft,B.style.color=N.color}}),p.appendChild(L),A.appendChild(p);const T=document.createElement("div");return T.className="a_table_form a_table_form__drag_preview",T.style.position="fixed",T.style.top="-10000px",T.style.left="-10000px",T.style.pointerEvents="none",T.style.zIndex="9999",T.appendChild(A),document.body.appendChild(T),v.value=T,{element:T,offsetX:Math.min(h.offsetX||0,f.width/2),offsetY:Math.min(h.offsetY||0,f.height/2)}},E=({focusId:h,fromIndex:_,toIndex:f,trigger:A})=>{if(!n.value||a.value||_===f||_<0||f<0||_>=o.value.length||f>=o.value.length)return;const p=[...o.value],[L]=p.splice(_,1);p.splice(f,0,L),t("updateRows",{focusId:h,rows:p,trigger:A,fromIndex:_,toIndex:f}),t("moveRow",{focusId:h,fromIndex:_,row:L,toIndex:f})},R=({fromIndex:h,rowIndex:_,position:f="before"})=>{if(!n.value||a.value||h<0||_<0||h>=o.value.length||_>=o.value.length)return;let A=f==="after"?_+1:_;h<A&&(A-=1),E({fromIndex:h,toIndex:A,trigger:"dnd"})},M=({focusId:h})=>{l.value&&ae().then(()=>{te({selector:`#${h}`})})},S=h=>{const _=Math.max(1,h-1),f=`${r.value}_${_}_up`;E({focusId:f,fromIndex:h,toIndex:h-1,trigger:"moveRowUp"}),M({focusId:f})},x=h=>{const _=Math.min(o.value.length-2,h+1),f=`${r.value}_${_}_down`;E({focusId:f,fromIndex:h,toIndex:h+1,trigger:"moveRowDown"}),M({focusId:f})},D=(h,_)=>{if(!(!n.value||a.value)){if(h!=null&&h.dataTransfer){h.dataTransfer.effectAllowed="move",h.dataTransfer.setData("text/plain",`${_}`),b();const f=w(h);f&&h.dataTransfer.setDragImage(f.element,f.offsetX,f.offsetY)}i.value=_}},C=(h,_)=>{var A,p;if(!n.value||a.value)return;h.preventDefault();const f=(p=(A=h.currentTarget)==null?void 0:A.getBoundingClientRect)==null?void 0:p.call(A);if(f){const L=f.top+f.height/2;d.value=h.clientY<L?"before":"after"}else d.value="after";c.value=_},P=(h,_)=>{var A,p;if(!n.value||a.value)return;const f=h.relatedTarget;(p=(A=h.currentTarget)==null?void 0:A.contains)!=null&&p.call(A,f)||c.value===_&&(c.value=void 0,d.value=void 0)},H=(h,_)=>{!n.value||a.value||(h.preventDefault(),i.value!==void 0&&(R({fromIndex:i.value,position:d.value||"after",rowIndex:_}),b(),i.value=void 0,c.value=void 0,d.value=void 0))},X=()=>{b(),i.value=void 0,c.value=void 0,d.value=void 0};return{canMoveRowDown:u(()=>h=>h<o.value.length-1),canMoveRowUp:u(()=>h=>h>0),dragOverPosition:d,dragOverRowIndex:c,draggedRowIndex:i,onDragleave:P,moveRowDown:x,moveRowUp:S,onDragend:X,onDragover:C,onDragstart:D,onDrop:H}}function bt(e,{columnsVisible:t=u(()=>[]),getRowKey:a=()=>{}}){const l=s(e,"addRow"),r=s(e,"isAddable"),n=s(e,"isEditable"),o=s(e,"prepareEditModel"),i=s(e,"rows"),c=y(void 0),d=y(void 0),v=y(!1),b=u(()=>!!c.value||v.value),w=u(()=>r.value?I(l.value):!1),E=u(()=>n.value?t.value.some(D=>{var C;return!!((C=D.formElement)!=null&&C.required)}):!1),R=D=>{if(!I(o.value))return;const C=o.value(D);if((C==null?void 0:C.model)!==void 0)return W(C.model)};return{activeEditRowKey:c,activeEditModel:d,canAddRow:w,hasActiveEditRow:b,hasRequiredEditableColumns:E,isAddRowActive:v,onAddRow:()=>{b.value||!w.value||(c.value=void 0,d.value=R({rows:i.value}),v.value=!0)},onCancelEditRow:({trigger:D,id:C}={})=>{c.value=void 0,d.value=void 0,v.value=!1,D==="cancel"?setTimeout(()=>{te({selector:`#${C}_edit`})}):D==="save"&&setTimeout(()=>{te({selector:`#${C}`})})},onEditRow:({row:D,rowIndex:C})=>{v.value||(d.value=R({row:D,rowIndex:C,rows:i.value}),c.value=a({row:D,rowIndex:C}))}}}function wt(e){const t=s(e,"icons");return{iconsLocal:u(()=>({actionAddRow:Oe,...t.value}))}}function vt(e){const t=s(e,"keyId"),a=s(e,"rows"),l=s(e,"rowsFooter"),r=u(()=>a.value.length>0),n=u(()=>l.value.length>0);return{getRowKey:({row:i,rowIndex:c,isFooter:d=!1})=>{let v=c;if(t.value){const w=k(i,t.value);le(w)||(v=w)}return`${d?"footer":"body"}_${v}`},hasRows:r,hasRowsFooter:n}}function At(e){const t=s(e,"texts");return{textsLocal:u(()=>({actionsColumn:"_A_TABLE_FORM_ACTIONS_",actionAddRow:"_A_TABLE_FORM_ADD_ROW_",actionDelete:"_A_TABLE_FORM_DELETE_",actionDeleteConfirmBody:"_A_TABLE_FORM_DELETE_CONFIRM_BODY_",actionDeleteConfirmClose:"_A_TABLE_FORM_DELETE_CONFIRM_CLOSE_",actionDeleteConfirmHeader:"_A_TABLE_FORM_DELETE_CONFIRM_HEADER_",actionDeleteConfirmSave:"_A_TABLE_FORM_DELETE_CONFIRM_SAVE_",actionEdit:"_A_TABLE_FORM_EDIT_",actionEditCancel:"_A_TABLE_FORM_EDIT_CANCEL_",actionEditSave:"_A_TABLE_FORM_EDIT_SAVE_",editInfoText:void 0,emptyText:"_A_TABLE_FORM_EMPTY_",reorderColumn:"_A_TABLE_FORM_REORDER_COLUMN_",reorderDown:"_A_TABLE_FORM_MOVE_DOWN_",reorderHandle:"_A_TABLE_FORM_REORDER_",reorderUp:"_A_TABLE_FORM_MOVE_UP_",...t.value}))}}function Et(e){const t=s(e,"widths");return{widthsLocal:u(()=>({actionsColumnSingle:56,actionsColumnDouble:112,dndColumn:56,...t.value}))}}const Q={name:"ATableForm",props:{actionsClasses:{type:Object,required:!1,default:()=>({})},actionsDisabledCallback:{type:Object,required:!1,default:()=>({})},actionsHideCallback:{type:Object,required:!1,default:()=>({})},actionsTitleCallback:{type:Object,required:!1,default:()=>({})},addRow:{type:Function,required:!1,default:void 0},columns:{type:Array,required:!0},columnsDefaultValue:{type:[String,Number],required:!1,default:""},changeModel:{type:Function,required:!1,default:void 0},errorIcon:{type:String,required:!1,default:Fe},extra:{type:Object,required:!1,default:void 0},focusAfterMove:{type:Boolean,required:!1,default:!0},icons:{type:Object,required:!1,default:()=>({})},id:{type:String,required:!1,default:()=>We("a_table_form_")},isActionsSticky:{type:Boolean,required:!1,default:!1},isAddable:{type:Boolean,required:!1,default:!1},isColumnsGrow:{type:Boolean,required:!1,default:!1},isDeletable:{type:Boolean,required:!1,default:!1},isDeletableConfirm:{type:Boolean,required:!1,default:!1},isDragAndDrop:{type:Boolean,required:!1,default:!1},isEditable:{type:Boolean,required:!1,default:!1},keyId:{type:String,required:!1,default:void 0},label:{type:[String,Number],required:!1,default:""},labelClass:{type:[String,Object,Array],required:!1,default:void 0},labelTag:{type:String,required:!1,default:"h2"},prepareEditModel:{type:Function,required:!1,default:void 0},rowClass:{type:[String,Object,Array,Function],required:!1,default:void 0},rows:{type:Array,required:!1,default:()=>[]},rowsFooter:{type:Array,required:!1,default:()=>[]},saveRow:{type:Function,required:!1,default:()=>{}},texts:{type:Object,required:!1,default:()=>({})},widths:{type:Object,required:!1,default:()=>({})}},emits:["deleteRow","moveRow","updateRows"],setup(e,t){const a=s(e,"actionsDisabledCallback"),l=s(e,"actionsTitleCallback"),{allColumnsLength:r,columnsVisible:n,hasActionsColumn:o}=ut(e),{getRowKey:i,hasRows:c,hasRowsFooter:d}=vt(e),{textsLocal:v}=At(e),{widthsLocal:b}=Et(e),{iconsLocal:w}=wt(e),{actionsClassesLocal:E}=ct(e),{columnsStylesGrow:R,destroyColumnsGrowObserver:M,initColumnsGrowObserver:S}=mt(e,{columnsVisible:n,hasActionsColumn:o,widthsLocal:b});xe(()=>{S()}),ke(()=>{M()});const{activeEditRowKey:x,activeEditModel:D,canAddRow:C,hasActiveEditRow:P,hasRequiredEditableColumns:H,isAddRowActive:X,onAddRow:h,onCancelEditRow:_,onEditRow:f}=bt(e,{columnsVisible:n,getRowKey:i}),{canMoveRowDown:A,canMoveRowUp:p,dragOverPosition:L,dragOverRowIndex:T,draggedRowIndex:O,moveRowDown:q,moveRowUp:U,onDragend:Y,onDragleave:B,onDragover:N,onDragstart:ne,onDrop:re}=ft(e,t,{isDndDisabled:P}),{onDeleteRow:de}=ht(e,t),ce=u(()=>{if(P.value)return!0;const z=k(a.value,"add");return I(z)?z():!1}),ue=u(()=>{const z=k(l.value,"add");return I(z)?z():v.value.actionAddRow});return{activeEditRowKey:x,activeEditModel:D,allColumnsLength:r,addTitle:ue,canAddRow:C,canMoveRowDown:A,canMoveRowUp:p,actionsClassesLocal:E,columnsStylesGrow:R,columnsVisible:n,draggedRowIndex:O,dragOverPosition:L,dragOverRowIndex:T,getRowKey:i,hasActionsColumn:o,hasActiveEditRow:P,hasRequiredEditableColumns:H,hasRows:c,hasRowsFooter:d,iconsLocal:w,isAddDisabled:ce,isAddRowActive:X,moveRowDown:q,moveRowUp:U,onAddRow:h,onCancelEditRow:_,onDeleteRow:de,onDragend:Y,onDragleave:B,onDragover:N,onDragstart:ne,onDrop:re,onEditRow:f,textsLocal:v,widthsLocal:b}},render(){return m("div",{class:"a_table_form"},[this.label&&m(j,{class:["a_table_form__label",this.labelClass],html:this.label,tag:this.labelTag}),this.hasRequiredEditableColumns&&m(Ae),m("div",{class:"a_table_form__wrapper"},[m("table",{id:this.id,class:["a_table_form__table",{a_table_form_drag_active:this.draggedRowIndex!==void 0}]},[m("thead",{class:"a_table_form__head"},[m(ee,{id:this.id,actionsClasses:this.actionsClasses,actionsDisabledCallback:this.actionsDisabledCallback,actionsHideCallback:this.actionsHideCallback,actionsTitleCallback:this.actionsTitleCallback,allColumnsLength:this.allColumnsLength,canMoveRowDown:this.canMoveRowDown,canMoveRowUp:this.canMoveRowUp,cellTag:"th",changeModel:this.changeModel,columns:this.columnsVisible,columnsStylesGrow:this.columnsStylesGrow,draggedRowIndex:this.draggedRowIndex,extra:this.extra,hasActionsColumn:this.hasActionsColumn,hasActiveEditRow:!1,isActionsSticky:this.isActionsSticky,isActiveEditMode:!1,isDeletable:this.isDeletable,isDeletableConfirm:this.isDeletableConfirm,isDndDisabled:this.hasActiveEditRow,isDragAndDrop:this.isDragAndDrop,isEditable:this.isEditable,isHeader:!0,moveRowDown:this.moveRowDown,moveRowUp:this.moveRowUp,onCancelEditRow:this.onCancelEditRow,onDeleteRow:this.onDeleteRow,onDragend:this.onDragend,onDragstart:this.onDragstart,onEditRow:this.onEditRow,row:{},rowIndex:0,rows:this.rows,saveRow:this.saveRow,texts:this.textsLocal,trClass:"a_table_form__row a_table_form__row_head",widths:this.widthsLocal},this.$slots)]),m("tbody",{class:"a_table_form__body"},this.hasRows||this.isAddRowActive?[...this.rows.map((e,t)=>{const a=this.getRowKey({row:e,rowIndex:t});return m(ee,{key:a,id:this.id,actionsClasses:this.actionsClassesLocal,actionsDisabledCallback:this.actionsDisabledCallback,actionsHideCallback:this.actionsHideCallback,actionsTitleCallback:this.actionsTitleCallback,allColumnsLength:this.allColumnsLength,canMoveRowDown:this.canMoveRowDown,canMoveRowUp:this.canMoveRowUp,changeModel:this.changeModel,columns:this.columnsVisible,columnsStylesGrow:this.columnsStylesGrow,draggedRowIndex:this.draggedRowIndex,editModel:this.activeEditRowKey===a?this.activeEditModel:void 0,errorIcon:this.errorIcon,extra:this.extra,hasActionsColumn:this.hasActionsColumn,hasActiveEditRow:this.hasActiveEditRow,isActionsSticky:this.isActionsSticky,isActiveEditMode:this.activeEditRowKey===a,isCreateMode:!1,isDeletable:this.isDeletable,isDeletableConfirm:this.isDeletableConfirm,isDndDisabled:this.hasActiveEditRow,isDragAndDrop:this.isDragAndDrop,isEditable:this.isEditable,moveRowDown:this.moveRowDown,moveRowUp:this.moveRowUp,onCancelEditRow:this.onCancelEditRow,onDeleteRow:this.onDeleteRow,onDragend:this.onDragend,onDragleave:this.onDragleave,onDragover:this.onDragover,onDragstart:this.onDragstart,onDrop:this.onDrop,onEditRow:this.onEditRow,row:e,rowClass:this.rowClass,rowIndex:t,rows:this.rows,saveRow:this.saveRow,texts:this.textsLocal,widths:this.widthsLocal,trClass:["a_table_form__row",{a_table_form__row_drag_after:this.dragOverRowIndex===t&&this.dragOverPosition==="after",a_table_form__row_drag_before:this.dragOverRowIndex===t&&this.dragOverPosition==="before",a_table_form__row_drag_over:this.dragOverRowIndex===t,a_table_form__row_dragging:this.draggedRowIndex===t}]},this.$slots)}),this.isAddRowActive&&m(ee,{id:this.id,actionsClasses:this.actionsClassesLocal,actionsDisabledCallback:this.actionsDisabledCallback,actionsHideCallback:this.actionsHideCallback,actionsTitleCallback:this.actionsTitleCallback,allColumnsLength:this.allColumnsLength,canMoveRowDown:this.canMoveRowDown,canMoveRowUp:this.canMoveRowUp,changeModel:this.changeModel,columns:this.columnsVisible,columnsStylesGrow:this.columnsStylesGrow,draggedRowIndex:this.draggedRowIndex,editModel:this.activeEditModel,errorIcon:this.errorIcon,extra:this.extra,hasActionsColumn:this.hasActionsColumn,hasActiveEditRow:this.hasActiveEditRow,isActionsSticky:this.isActionsSticky,isActiveEditMode:!0,isCreateMode:!0,isDeletable:!1,isDeletableConfirm:!1,isDndDisabled:!0,isDragAndDrop:this.isDragAndDrop,isEditable:this.isEditable,key:"body_create",moveRowDown:this.moveRowDown,moveRowUp:this.moveRowUp,onCancelEditRow:this.onCancelEditRow,onDeleteRow:this.onDeleteRow,onDragend:this.onDragend,onDragleave:this.onDragleave,onDragover:this.onDragover,onDragstart:this.onDragstart,onDrop:this.onDrop,onEditRow:this.onEditRow,row:{},rowClass:this.rowClass,rowIndex:this.rows.length,rows:this.rows,saveRow:this.addRow,texts:this.textsLocal,trClass:"a_table_form__row a_table_form__row_create",widths:this.widthsLocal},this.$slots)]:[m("tr",{class:"a_table_form__row a_table_form__row_empty"},[m("td",{class:"a_table_form__cell a_table_form__empty",colspan:this.allColumnsLength},[m(j,{tag:"span",text:this.textsLocal.emptyText})])])]),this.hasRowsFooter&&m("tfoot",{class:"a_table_form__foot"},this.rowsFooter.map((e,t)=>m(ee,{id:this.id,actionsClasses:this.actionsClassesLocal,actionsDisabledCallback:this.actionsDisabledCallback,actionsHideCallback:this.actionsHideCallback,actionsTitleCallback:this.actionsTitleCallback,allColumnsLength:this.allColumnsLength,canMoveRowDown:this.canMoveRowDown,canMoveRowUp:this.canMoveRowUp,changeModel:this.changeModel,columns:this.columnsVisible,columnsStylesGrow:this.columnsStylesGrow,draggedRowIndex:this.draggedRowIndex,extra:this.extra,hasActionsColumn:this.hasActionsColumn,hasActiveEditRow:this.hasActiveEditRow,isActionsSticky:this.isActionsSticky,isActiveEditMode:!1,isDeletable:this.isDeletable,isDeletableConfirm:this.isDeletableConfirm,isDndDisabled:this.hasActiveEditRow,isDragAndDrop:this.isDragAndDrop,isEditable:this.isEditable,isFooter:!0,key:this.getRowKey({isFooter:!0,row:e,rowIndex:t}),moveRowDown:this.moveRowDown,moveRowUp:this.moveRowUp,onCancelEditRow:this.onCancelEditRow,onDeleteRow:this.onDeleteRow,onDragend:this.onDragend,onDragstart:this.onDragstart,onEditRow:this.onEditRow,row:e,rowClass:this.rowClass,rowIndex:t,rows:this.rowsFooter,saveRow:this.saveRow,texts:this.textsLocal,widths:this.widthsLocal,trClass:"a_table_form__row a_table_form__row_footer"},this.$slots)))])]),this.canAddRow&&m("div",{class:"a_mt_3 a_text_right"},[m($,{class:this.actionsClassesLocal.addRow,disabled:this.isAddDisabled,extra:this.extra,iconLeft:this.iconsLocal.actionAddRow,text:this.textsLocal.actionAddRow,textScreenReader:this.addTitle,title:this.addTitle,onClick:this.onAddRow})])])}};function Rt(){return{codeHtml:`<a-simple-table
  :columns="columns"
  :rows-footer="rowsFooter"
  :rows="rows"
  key-id="id"
  label="_A_TABLE_FORM_EXAMPLE_LABEL_"
/>
`}}function pt(){return{codeJs:`import {
  ref,
} from "vue";

import {
  ATableForm,
} from "aloha-vue";

export default {
  name: "PageTableFormBasic",
  components: {
    ATableForm,
  },
  setup() {
    const columns = [
      {
        id: "position",
        keyLabel: "position",
        label: "_A_TABLE_FORM_COLUMN_POSITION_",
        width: 96,
      },
      {
        id: "name",
        formElement: {
          label: "_A_TABLE_FORM_COLUMN_NAME_",
          type: "text",
        },
        keyLabel: "name",
        label: "_A_TABLE_FORM_COLUMN_NAME_",
        width: "16rem",
      },
      {
        id: "team",
        formElement: {
          label: "_A_TABLE_FORM_COLUMN_TEAM_",
          options: {
            data: [
              { label: "_A_TABLE_FORM_TEAM_NORTH_", value: "north" },
              { label: "_A_TABLE_FORM_TEAM_WEST_", value: "west" },
              { label: "_A_TABLE_FORM_TEAM_SOUTH_", value: "south" },
              { label: "_A_TABLE_FORM_TEAM_EAST_", value: "east" },
            ],
            keyId: "value",
            keyLabel: "label",
          },
          type: "select",
        },
        keyLabel: "team",
        label: "_A_TABLE_FORM_COLUMN_TEAM_",
      },
      {
        id: "score",
        formElement: {
          label: "_A_TABLE_FORM_COLUMN_SCORE_",
          options: {
            min: 0,
          },
          type: "integer",
        },
        keyLabel: "score",
        label: "_A_TABLE_FORM_COLUMN_SCORE_",
        width: 120,
      },
    ];

    const rows = ref([
      {
        id: 1,
        name: "ÐœÐ°Ñ€Ñ‚Ð° Ð˜Ð²Ð°Ð½Ð¾Ð²Ð°",
        position: 1,
        score: 18,
        team: "north",
      },
    ]);

    const rowsFooter = [
      {
        name: "_A_TABLE_FORM_FOOTER_TOTAL_",
        score: 68,
      },
    ];

    return {
      columns,
      rows,
      rowsFooter,
    };
  },
};`}}const yt={name:"PageTableFormBasic",components:{AlohaExample:Z,ATableForm:Q},setup(){const{codeHtml:e}=Rt(),{codeJs:t}=pt(),a=[{id:"position",label:"_A_TABLE_FORM_COLUMN_POSITION_",maxWidth:96,minWidth:96,width:96,formElement:{type:"number"}},{id:"name",label:"_A_TABLE_FORM_COLUMN_NAME_",maxWidth:"18rem",minWidth:"12rem",width:"16rem",formElement:{type:"text"}},{id:"team",formElement:{translateData:!0,data:[{label:"_A_TABLE_FORM_TEAM_NORTH_",value:"north"},{label:"_A_TABLE_FORM_TEAM_WEST_",value:"west"},{label:"_A_TABLE_FORM_TEAM_SOUTH_",value:"south"},{label:"_A_TABLE_FORM_TEAM_EAST_",value:"east"}],keyId:"value",keyLabel:"label",type:"select"},label:"_A_TABLE_FORM_COLUMN_TEAM_",minWidth:"12rem"},{id:"score",footerDefaultValue:"68",footerKeyLabel:"score",formElement:{type:"integer"},label:"_A_TABLE_FORM_COLUMN_SCORE_",maxWidth:120,minWidth:120,width:120}],l=y([{id:1,name:"Марта Иванова",position:1,score:18,team:"north"},{id:2,name:"Олег Сидоров",position:2,score:17,team:"west"},{id:3,name:"Анна Петрова",position:3,score:16,team:"south"},{id:4,name:"Игорь Ковалёв",position:4,score:17,team:"east"}]);return{codeHtml:e,codeJs:t,columns:a,rows:l,rowsFooter:[{name:"_A_TABLE_FORM_FOOTER_TOTAL_",score:68}]}}};function Ct(e,t,a,l,r,n){const o=g("a-table-form"),i=g("aloha-example");return V(),J(i,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TABLE_FORM_EXAMPLE_HEADER_"},{default:K(()=>[F(o,{columns:e.columns,"rows-footer":e.rowsFooter,rows:e.rows,"key-id":"id",label:"_A_TABLE_FORM_EXAMPLE_LABEL_"},null,8,["columns","rows-footer","rows"])]),_:1},8,["code-html","code-js"])}const gt=G(yt,[["render",Ct]]);function Dt(){return{codeHtml:`<a-simple-table
  :columns="columns"
  :is-drag-and-drop="true"
  :rows-footer="rowsFooter"
  :rows="rows"
  key-id="id"
  label="_A_TABLE_FORM_EXAMPLE_LABEL_"
  @update-rows="updateRows"
/>
`}}function Tt(){return{codeJs:`import {
  ref,
} from "vue";

import {
  ATableForm,
} from "aloha-vue";

export default {
  name: "PageTableFormDND",
  components: {
    ATableForm,
  },
  setup() {
    const columns = [
      {
        id: "position",
        keyLabel: "position",
        label: "_A_TABLE_FORM_COLUMN_POSITION_",
        width: 96,
      },
      {
        id: "name",
        formElement: {
          label: "_A_TABLE_FORM_COLUMN_NAME_",
          type: "text",
        },
        keyLabel: "name",
        label: "_A_TABLE_FORM_COLUMN_NAME_",
        width: "16rem",
      },
      {
        id: "team",
        formElement: {
          label: "_A_TABLE_FORM_COLUMN_TEAM_",
          options: {
            data: [
              { label: "Ð¡ÐµÐ²ÐµÑ€", value: "Ð¡ÐµÐ²ÐµÑ€" },
              { label: "Ð—Ð°Ð¿Ð°Ð´", value: "Ð—Ð°Ð¿Ð°Ð´" },
              { label: "Ð®Ð³", value: "Ð®Ð³" },
              { label: "Ð’Ð¾ÑÑ‚Ð¾Ðº", value: "Ð’Ð¾ÑÑ‚Ð¾Ðº" },
            ],
            keyId: "value",
            keyLabel: "label",
          },
          type: "select",
        },
        keyLabel: "team",
        label: "_A_TABLE_FORM_COLUMN_TEAM_",
      },
      {
        id: "score",
        formElement: {
          label: "_A_TABLE_FORM_COLUMN_SCORE_",
          options: {
            min: 0,
          },
          type: "integer",
        },
        keyLabel: "score",
        label: "_A_TABLE_FORM_COLUMN_SCORE_",
        width: 120,
      },
    ];

    const rows = ref([
      {
        id: 1,
        name: "Марта Иванова",
        position: 1,
        score: 18,
        team: "Север",
      },
    ]);

    const rowsFooter = [
      {
        name: "_A_TABLE_FORM_FOOTER_TOTAL_",
        score: 68,
      },
    ];

    const updateRows = ({ rows: _rows, trigger }) => {
      rows.value = _rows;
      console.log("trigger", trigger);
    };

    return {
      columns,
      rows,
      rowsFooter,
      updateRows,
    };
  },
};`}}const Mt={name:"PageTableFormDND",components:{AlohaExample:Z,ATableForm:Q},setup(){const{codeHtml:e}=Dt(),{codeJs:t}=Tt(),a=[{id:"position",label:"_A_TABLE_FORM_COLUMN_POSITION_",maxWidth:96,minWidth:96,width:96,formElement:{type:"text"}},{id:"name",formElement:{type:"text"},label:"_A_TABLE_FORM_COLUMN_NAME_",maxWidth:"18rem",minWidth:"12rem",width:"16rem"},{id:"team",formElement:{translateData:!0,data:[{label:"_A_TABLE_FORM_TEAM_NORTH_",value:"north"},{label:"_A_TABLE_FORM_TEAM_WEST_",value:"west"},{label:"_A_TABLE_FORM_TEAM_SOUTH_",value:"south"},{label:"_A_TABLE_FORM_TEAM_EAST_",value:"east"}],keyId:"value",keyLabel:"label",type:"select"},label:"_A_TABLE_FORM_COLUMN_TEAM_",minWidth:"12rem"},{id:"score",footerDefaultValue:"68",footerKeyLabel:"score",formElement:{type:"integer"},label:"_A_TABLE_FORM_COLUMN_SCORE_",maxWidth:120,minWidth:120,width:120}],l=y([{id:1,name:"Марта Иванова",position:1,score:18,team:"north"},{id:2,name:"Олег Сидоров",position:2,score:17,team:"west"},{id:3,name:"Анна Петрова",position:3,score:16,team:"south"},{id:4,name:"Игорь Ковалёв",position:4,score:17,team:"east"}]);return{codeHtml:e,codeJs:t,columns:a,rows:l,rowsFooter:[{name:"_A_TABLE_FORM_FOOTER_TOTAL_",score:68}],updateRows:({rows:o,trigger:i})=>{l.value=o,console.log("trigger",i)}}}};function Lt(e,t,a,l,r,n){const o=g("a-table-form"),i=g("aloha-example");return V(),J(i,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TABLE_FORM_DND_HEADER_",description:"_A_TABLE_FORM_DND_DESCRIPTION_",props:"is-drag-and-drop"},{default:K(()=>[F(o,{columns:e.columns,"is-drag-and-drop":!0,"rows-footer":e.rowsFooter,rows:e.rows,"key-id":"id",label:"_A_TABLE_FORM_EXAMPLE_LABEL_",onUpdateRows:e.updateRows},null,8,["columns","rows-footer","rows","onUpdateRows"])]),_:1},8,["code-html","code-js"])}const Ot=G(Mt,[["render",Lt]]);function Ft(){return{codeHtml:`<a-checkbox>
  v-model="modelCheckbox"
  :data="dataCheckbox"
  :translate-data="true"
  class="a_mb_4"
  key-id="value"
  key-label="label"
</a-checkbox>
<a-simple-table
  :add-row="addRow"
  :columns="columns"
  :is-addable="true"
  :is-deletable-confirm="modelCheckbox.includes('is-deletable-confirm')"
  :is-deletable="modelCheckbox.includes('is-deletable')"
  :is-editable="modelCheckbox.includes('is-editable')"
  :rows-footer="rowsFooter"
  :rows="rows"
  :save-row="saveRow"
  :texts="texts"
  key-id="id"
  label="_A_TABLE_FORM_EXAMPLE_LABEL_"
  @delete-row="deleteRow"
/>
`}}function xt(){return{codeJs:`import {
  ref,
} from "vue";

import {
  ATableForm,
} from "aloha-vue";

export default {
  name: "PageTableFormEdit",
  components: {
    ATableForm,
  },
  setup() {
    const texts = {
      actionEditCancel: "abbrechen",
      actionEditSave: "speichern",
      editInfoText: "Nur diese Zeile ist gerade im Bearbeitungsmodus.",
    };

    const columns = [
      {
        id: "position",
        keyLabel: "position",
        label: "_A_TABLE_FORM_COLUMN_POSITION_",
        width: 96,
        formElement: {
          controlsType: false,
          type: "integer",
        },
      },
      {
        id: "name",
        formElement: {
          type: "text",
        },
        keyLabel: "name",
        label: "_A_TABLE_FORM_COLUMN_NAME_",
        width: "16rem",
      },
      {
        id: "team",
        formElement: {
          data: [
            { label: "_A_TABLE_FORM_TEAM_NORTH_", value: "north" },
            { label: "_A_TABLE_FORM_TEAM_WEST_", value: "west" },
            { label: "_A_TABLE_FORM_TEAM_SOUTH_", value: "south" },
            { label: "_A_TABLE_FORM_TEAM_EAST_", value: "east" },
          ],
          keyId: "value",
          keyLabel: "label",
          translateData: true,
          type: "select",
        },
        keyLabel: "team",
        label: "_A_TABLE_FORM_COLUMN_TEAM_",
      },
      {
        id: "score",
        formElement: {
          controlsType: false,
          min: 0,
          type: "integer",
        },
        keyLabel: "score",
        label: "_A_TABLE_FORM_COLUMN_SCORE_",
        width: 120,
      },
    ];

    const rows = ref([
      {
        id: 1,
        name: "Marta Ivanova",
        position: 1,
        score: 18,
        team: "north",
      },
    ]);

    const rowsFooter = [
      {
        name: "_A_TABLE_FORM_FOOTER_TOTAL_",
        score: 68,
      },
    ];

    const saveRow = async({ model }) => {
      await new Promise(resolve => {
        setTimeout(resolve, 300);
      });

      const errors = {};

      if (!model.name?.trim()) {
        errors.name = ["Name ist erforderlich."];
      }

      if (!model.team) {
        errors.team = ["Team ist erforderlich."];
      }

      if (model.score < 18) {
        errors.score = ["Score must be at least 18."];
      }

      if (Object.keys(errors).length) {
        return {
          errors,
        };
      }

      return {
        model,
      };
    };

    return {
      columns,
      rows,
      rowsFooter,
      saveRow,
      texts,
    };
  },
};`}}const kt={name:"PageTableFormEdit",components:{ACheckbox:se,AlohaExample:Z,ATableForm:Q},setup(){const{codeHtml:e}=Ft(),{codeJs:t}=xt(),a=[{label:"is-deletable-confirm",value:"is-deletable-confirm"},{label:"is-deletable",value:"is-deletable"},{label:"is-editable",value:"is-editable"},{label:"is-addable",value:"is-addable"}],l=y(["is-deletable-confirm","is-deletable","is-editable","is-addable"]),r={actionEditCancel:"abbrechen",actionEditSave:"speichern",editInfoText:"Nur diese Zeile ist gerade im Bearbeitungsmodus."},n=[{id:"position",label:"_A_TABLE_FORM_COLUMN_POSITION_",maxWidth:96,minWidth:96,width:96,formElement:{controlsType:"none",type:"integer"}},{id:"name",formElement:{type:"text",required:!0},keyLabel:"name",label:"_A_TABLE_FORM_COLUMN_NAME_",maxWidth:"18rem",minWidth:"12rem",width:"16rem"},{id:"team",formElement:{data:[{label:"_A_TABLE_FORM_TEAM_NORTH_",value:"north"},{label:"_A_TABLE_FORM_TEAM_WEST_",value:"west"},{label:"_A_TABLE_FORM_TEAM_SOUTH_",value:"south"},{label:"_A_TABLE_FORM_TEAM_EAST_",value:"east"}],keyId:"value",keyLabel:"label",translateData:!0,type:"select"},label:"_A_TABLE_FORM_COLUMN_TEAM_",minWidth:"12rem"},{id:"score",footerDefaultValue:"68",footerKeyLabel:"score",formElement:{controlsType:"none",min:0,type:"integer"},label:"_A_TABLE_FORM_COLUMN_SCORE_",maxWidth:120,minWidth:120,width:120}],o=y([{id:1,name:"Marta Ivanova",position:1,score:18,team:"north"},{id:2,name:"Oleg Sidorov",position:2,score:17,team:"west"},{id:3,name:"Anna Petrova",position:3,score:16,team:"south"},{id:4,name:"Igor Kovalev",position:4,score:17,team:"east"}]);return{addRow:({model:b})=>{var E;console.log("model ",b);const w={};if((E=b.name)!=null&&E.trim()||(w.name=["Name ist erforderlich."]),b.team||(w.team=["Team ist erforderlich."]),b.score<18&&(w.score=["Score must be at least 18."]),Object.keys(w).length)return{errors:w};o.value.push({id:o.value.length+1,...b})},codeHtml:e,codeJs:t,columns:n,dataCheckbox:a,deleteRow:({row:b,rowIndex:w})=>{o.value.splice(w,1),console.log("row",b),console.log("rowIndex",w)},modelCheckbox:l,rows:o,rowsFooter:[{name:"_A_TABLE_FORM_FOOTER_TOTAL_",score:68}],saveRow:async({model:b,rowIndex:w})=>{var R;await new Promise(M=>{setTimeout(M,300)});const E={};if((R=b.name)!=null&&R.trim()||(E.name=["Name ist erforderlich."]),b.team||(E.team=["Team ist erforderlich."]),b.score<18&&(E.score=["Score must be at least 18."]),Object.keys(E).length)return{errors:E};o.value.splice(w,1,b)},texts:r}}};function It(e,t,a,l,r,n){const o=g("a-checkbox"),i=g("a-table-form"),c=g("aloha-example");return V(),J(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TABLE_FORM_EDIT_HEADER_",description:"_A_TABLE_FORM_EDIT_DESCRIPTION_",props:["is-addable","is-deletable","is-deletable-confirm","is-editable","save-row","texts"]},{default:K(()=>[F(o,{class:"a_mb_4",modelValue:e.modelCheckbox,"onUpdate:modelValue":t[0]||(t[0]=d=>e.modelCheckbox=d),data:e.dataCheckbox,"translate-data":!0,"key-id":"value","key-label":"label"},null,8,["modelValue","data"]),F(i,{"add-row":e.addRow,columns:e.columns,"is-addable":e.modelCheckbox.includes("is-addable"),"is-deletable-confirm":e.modelCheckbox.includes("is-deletable-confirm"),"is-deletable":e.modelCheckbox.includes("is-deletable"),"is-editable":e.modelCheckbox.includes("is-editable"),"rows-footer":e.rowsFooter,rows:e.rows,"save-row":e.saveRow,texts:e.texts,"key-id":"id",label:"_A_TABLE_FORM_EXAMPLE_LABEL_",onDeleteRow:e.deleteRow},null,8,["add-row","columns","is-addable","is-deletable-confirm","is-deletable","is-editable","rows-footer","rows","save-row","texts","onDeleteRow"])]),_:1},8,["code-html","code-js"])}const Bt=G(kt,[["render",It]]);function St(){return{codeHtml:`<a-checkbox
  v-model="modelCheckbox"
  :data="dataCheckbox"
  key-id="value"
  key-label="label"
/>

<div style="max-width: 40rem;">
  <a-table-form
    :columns="columns"
    :is-columns-grow="true"
    :is-deletable="modelCheckbox.includes('is-deletable')"
    :is-drag-and-drop="modelCheckbox.includes('is-drag-and-drop')"
    :is-editable="modelCheckbox.includes('is-editable')"
    :rows-footer="rowsFooter"
    :rows="rows"
    :save-row="saveRow"
    key-id="id"
    @delete-row="deleteRow"
  />
</div>

<a-table-form
  :columns="columns"
  :is-columns-grow="true"
  :is-deletable="modelCheckbox.includes('is-deletable')"
  :is-drag-and-drop="modelCheckbox.includes('is-drag-and-drop')"
  :is-editable="modelCheckbox.includes('is-editable')"
  :rows-footer="rowsFooter"
  :rows="rows"
  :save-row="saveRow"
  key-id="id"
  @delete-row="deleteRow"
/>
`}}function qt(){return{codeJs:`import {
  ref,
} from "vue";

import {
  ATableForm,
} from "aloha-vue";

export default {
  name: "PageTableFormGrow",
  components: {
    ATableForm,
  },
  setup() {
    const columns = [
      {
        id: "position",
        label: "_A_TABLE_FORM_COLUMN_POSITION_",
        width: 96,
        grow: 1,
      },
      {
        id: "name",
        label: "_A_TABLE_FORM_COLUMN_NAME_",
        width: "16rem",
        grow: 2,
      },
      {
        id: "team",
        label: "_A_TABLE_FORM_COLUMN_TEAM_",
        width: "12rem",
        grow: 1,
      },
      {
        id: "score",
        label: "_A_TABLE_FORM_COLUMN_SCORE_",
        width: 120,
        grow: 1,
      },
    ];

    const dataCheckbox = [
      { label: "is-deletable", value: "is-deletable" },
      { label: "is-editable", value: "is-editable" },
      { label: "is-drag-and-drop", value: "is-drag-and-drop" },
    ];
    const modelCheckbox = ref(["is-deletable", "is-editable"]);

    const rows = ref([
      {
        id: 1,
        name: "Marta Ivanova",
        position: 1,
        score: 18,
        team: "north",
      },
    ]);

    return {
      columns,
      dataCheckbox,
      modelCheckbox,
      rows,
    };
  },
};`}}const Nt={name:"PageTableFormGrow",components:{ACheckbox:se,AlohaExample:Z,ATableForm:Q},setup(){const{codeHtml:e}=St(),{codeJs:t}=qt(),a=[{label:"is-deletable",value:"is-deletable"},{label:"is-editable",value:"is-editable"},{label:"is-drag-and-drop",value:"is-drag-and-drop"}],l=y(["is-deletable","is-editable"]),r=[{id:"position",label:"_A_TABLE_FORM_COLUMN_POSITION_",minWidth:96,width:96,grow:1,formElement:{controlsType:"none",type:"integer"}},{id:"name",formElement:{type:"text"},label:"_A_TABLE_FORM_COLUMN_NAME_",minWidth:"12rem",width:"16rem",grow:2},{id:"team",formElement:{data:[{label:"_A_TABLE_FORM_TEAM_NORTH_",value:"north"},{label:"_A_TABLE_FORM_TEAM_WEST_",value:"west"},{label:"_A_TABLE_FORM_TEAM_SOUTH_",value:"south"},{label:"_A_TABLE_FORM_TEAM_EAST_",value:"east"}],keyId:"value",keyLabel:"label",translateData:!0,type:"select"},label:"_A_TABLE_FORM_COLUMN_TEAM_",minWidth:"12rem",width:"12rem",grow:1},{id:"score",footerDefaultValue:"68",footerKeyLabel:"score",formElement:{controlsType:"none",min:0,type:"integer"},label:"_A_TABLE_FORM_COLUMN_SCORE_",minWidth:120,width:120,grow:1}],n=[{id:"position",label:"_A_TABLE_FORM_COLUMN_POSITION_",minWidth:96,width:96,grow:1,formElement:{controlsType:"none",type:"integer"}},{id:"name",formElement:{type:"text"},label:"_A_TABLE_FORM_COLUMN_NAME_",minWidth:"12rem",width:"16rem",grow:3}],o=y([{id:1,name:"Marta Ivanova",position:1,score:18,team:"north"},{id:2,name:"Oleg Sidorov",position:2,score:17,team:"west"},{id:3,name:"Anna Petrova",position:3,score:16,team:"south"},{id:4,name:"Igor Kovalev",position:4,score:17,team:"east"}]);return{codeHtml:e,codeJs:t,columns1:r,columns2:n,dataCheckbox:a,deleteRow:({rowIndex:b})=>{o.value.splice(b,1)},modelCheckbox:l,rows:o,rowsFooter:[{name:"_A_TABLE_FORM_FOOTER_TOTAL_",score:68}],saveRow:({model:b,rowIndex:w})=>{o.value.splice(w,1,b)},texts:{editInfoText:"Only one row can be edited at a time."}}}},Pt={class:"a_mb_4"};function Ht(e,t,a,l,r,n){const o=g("a-checkbox"),i=g("a-table-form"),c=g("aloha-example");return V(),J(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TABLE_FORM_GROW_HEADER_",description:"_A_TABLE_FORM_GROW_DESCRIPTION_",props:["is-columns-grow","is-deletable","is-drag-and-drop","is-editable"]},{default:K(()=>[F(o,{class:"a_mb_4",modelValue:e.modelCheckbox,"onUpdate:modelValue":t[0]||(t[0]=d=>e.modelCheckbox=d),data:e.dataCheckbox,"key-id":"value","key-label":"label"},null,8,["modelValue","data"]),Ie("div",Pt,[F(i,{columns:e.columns1,"is-columns-grow":!0,"is-deletable":e.modelCheckbox.includes("is-deletable"),"is-drag-and-drop":e.modelCheckbox.includes("is-drag-and-drop"),"is-editable":e.modelCheckbox.includes("is-editable"),"rows-footer":e.rowsFooter,rows:e.rows,"save-row":e.saveRow,texts:e.texts,"key-id":"id",label:"_A_TABLE_FORM_EXAMPLE_LABEL_",onDeleteRow:e.deleteRow},null,8,["columns","is-deletable","is-drag-and-drop","is-editable","rows-footer","rows","save-row","texts","onDeleteRow"])]),F(i,{columns:e.columns2,"is-columns-grow":!0,"is-deletable":e.modelCheckbox.includes("is-deletable"),"is-drag-and-drop":e.modelCheckbox.includes("is-drag-and-drop"),"is-editable":e.modelCheckbox.includes("is-editable"),"rows-footer":e.rowsFooter,rows:e.rows,"save-row":e.saveRow,texts:e.texts,"key-id":"id",label:"_A_TABLE_FORM_EXAMPLE_LABEL_",onDeleteRow:e.deleteRow},null,8,["columns","is-deletable","is-drag-and-drop","is-editable","rows-footer","rows","save-row","texts","onDeleteRow"])]),_:1},8,["code-html","code-js"])}const Ut=G(Nt,[["render",Ht]]);function $t(){return{codeHtml:`<a-one-checkbox
  v-model="isActionsSticky"
  label="isActionsSticky"
/>
<a-simple-table
  :columns="columns"
  :is-actions-sticky="isActionsSticky"
  :is-deletable-confirm="true"
  :is-editable="true"
  :rows="rows"
  key-id="id"
  label="20 columns"
/>
`}}function Wt(){return{codeJs:`import {
  ref,
} from "vue";

import {
  AOneCheckbox,
  ATableForm,
} from "aloha-vue";

export default {
  name: "PageTableFormSticky",
  components: {
    AOneCheckbox,
    ATableForm,
  },
  setup() {
    const isActionsSticky = ref(true);

    const columns = Array.from({ length: 20 }, (_, index) => ({
      id: \`c\${index + 1}\`,
      label: \`\${index + 1}\`,
      width: 120,
      formElement: {
        controlsType: "none",
        type: "integer",
      },
    }));

    const rows = ref(Array.from({ length: 6 }, (_, rowIndex) => {
      const row = {
        id: rowIndex + 1,
      };

      columns.forEach((column, columnIndex) => {
        row[column.id] = (rowIndex + 1) * 100 + columnIndex + 1;
      });

      return row;
    }));

    return {
      columns,
      isActionsSticky,
      rows,
    };
  },
};`}}const jt={name:"PageTableFormSticky",components:{AlohaExample:Z,AOneCheckbox:Ee,ATableForm:Q},setup(){const{codeHtml:e}=$t(),{codeJs:t}=Wt(),a=y(!0),l=Array.from({length:20},(n,o)=>{const i=o+1;return{id:`c${i}`,label:`${i}`,maxWidth:120,minWidth:120,width:120,formElement:{controlsType:"none",type:"integer"}}}),r=y(Array.from({length:6},(n,o)=>{const i={id:o+1};return l.forEach((c,d)=>{i[c.id]=(o+1)*100+d+1}),i}));return{codeHtml:e,codeJs:t,columns:l,isActionsSticky:a,rows:r}}};function Gt(e,t,a,l,r,n){const o=g("a-one-checkbox"),i=g("a-table-form"),c=g("aloha-example");return V(),J(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TABLE_FORM_STICKY_HEADER_",description:"_A_TABLE_FORM_STICKY_DESCRIPTION_",props:["is-actions-sticky","is-deletable-confirm","is-editable"]},{default:K(()=>[F(o,{class:"a_mb_4",modelValue:e.isActionsSticky,"onUpdate:modelValue":t[0]||(t[0]=d=>e.isActionsSticky=d),label:"isActionsSticky"},null,8,["modelValue"]),F(i,{columns:e.columns,"is-actions-sticky":e.isActionsSticky,"is-deletable-confirm":!0,"is-editable":!0,rows:e.rows,"key-id":"id",label:"20 columns"},null,8,["columns","is-actions-sticky","rows"])]),_:1},8,["code-html","code-js"])}const Vt=G(jt,[["render",Gt]]);function Jt(){return{pageTitle:u(()=>Re({placeholder:"_A_TABLE_FORM_PAGE_TITLE_"}))}}const Kt={name:"PageTableForm",components:{AlohaPage:_e,PageTableFormBasic:gt,PageTableFormDND:Ot,PageTableFormEdit:Bt,PageTableFormGrow:Ut,PageTableFormSticky:Vt},setup(){const{pageTitle:e}=Jt();return{pageTitle:e}}};function Xt(e,t,a,l,r,n){const o=g("page-table-form-basic"),i=g("page-table-form-d-n-d"),c=g("page-table-form-edit"),d=g("page-table-form-sticky"),v=g("page-table-form-grow"),b=g("aloha-page");return V(),J(b,{"page-title":e.pageTitle},{body:K(()=>[F(o),F(i),F(c),F(d),F(v)]),_:1},8,["page-title"])}const _o=G(Kt,[["render",Xt]]);export{_o as default};
