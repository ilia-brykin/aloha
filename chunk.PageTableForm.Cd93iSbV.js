import{A as Y,a as ue}from"./chunk.AlohaExample.xudyL0cv.js";import{d as _e,s as te,A as W,c as U,b as me,f as he,e as fe,h as be,i as we,j as ve,_ as j,k as oe,l as Ae,g as Ee}from"./bundle.index.Bieqwk88.js";import{t as s,d as m,h as _,M as Q,l as Re,aX as pe,L as ye,O as ge,C as Ce,aY as De,g as Te,r as y,j as Me,P as Oe,E as Le,z as Fe,o as xe,Y as G,W as J,aU as V,f as D,$ as T,_ as ke}from"./chunk.vendor.CWr53wb5.js";import{i as Ie,j as S,r as B,l as $,M as Se,T as Be,v as qe,h as Ne,W as Pe,a as ae,d as He,b as Ue,u as $e}from"./chunk.vendor-lodash.CWoM99Se.js";import{A as We}from"./chunk.AFormElement.m2KOc1a8.js";import"./chunk.APageTabTitle.C0BZ4lV4.js";import"./chunk.AlohaHighlightjs.Cyb5M4zM.js";import"./chunk.translations-ar.CE_3yjUF.js";import"./chunk.translations-de.R0YWY91X.js";import"./chunk.translations-en.DQ0Z316F.js";import"./chunk.translations-es.XN0jVhL-.js";import"./chunk.translations-fr.D5Z6d0-l.js";import"./chunk.translations-hr.BRYjTgZh.js";import"./chunk.translations-it.D6SsMt4V.js";import"./chunk.translations-ru.BfK09XlZ.js";function je(e){const t=s(e,"column"),o=s(e,"isEditable"),l=s(e,"isEditMode");return{disabledLocal:m(()=>{var r,a;return!!((a=(r=t.value)==null?void 0:r.formElement)!=null&&a.disabled)||o.value&&!l.value})}}function Ge(e){const t=s(e,"column"),o=s(e,"isEditable"),l=s(e,"isEditMode"),i=s(e,"isFooter");return{readonlyLocal:m(()=>{var a,n,d,c;return i.value?!0:o.value?(n=(a=t.value)==null?void 0:a.formElement)!=null&&n.useRowReadonly?!l.value:!!((c=(d=t.value)==null?void 0:d.formElement)!=null&&c.readonly):!0})}}function Je(e){const t=s(e,"column"),o=s(e,"isFooter"),l=m(()=>o.value?t.value.footerSlot:t.value.slot),i=m(()=>o.value?t.value.footerSlotAfter:t.value.slotAfter),r=m(()=>!!l.value),a=m(()=>!!i.value);return{hasSlot:r,hasSlotAfter:a,slotName:l,slotNameAfter:i}}function ee(e){if(!(e==null||e===""))return typeof e=="number"?`${e}px`:e}function se(e){const t=s(e,"column");return{columnStyles:m(()=>{const l={},i=ee(t.value.width),r=ee(t.value.maxWidth),a=ee(t.value.minWidth);return i&&(l.width=i),r&&(l.maxWidth=r),a&&(l.minWidth=a),Ie(t.value.style)?{...l,...t.value.style}:t.value.style?[l,t.value.style]:l})}}const Ve={name:"ATableFormCell",props:{column:{type:Object,required:!0},columnIndex:{type:Number,required:!0},columnStyle:{type:Object,required:!1,default:void 0},errorIcon:{type:String,required:!1,default:void 0},errors:{type:Object,required:!1,default:()=>({})},id:{type:String,required:!0},isEditMode:{type:Boolean,required:!1,default:!1},isEditable:{type:Boolean,required:!1,default:!1},isFooter:{type:Boolean,required:!1,default:!1},row:{type:Object,required:!0},rowData:{type:Object,required:!1,default:void 0},rowIndex:{type:Number,required:!0},rows:{type:Array,required:!0},tag:{type:String,required:!1,default:"td"}},emits:["updateRowData"],setup(e){const{columnStyles:t}=se({column:e.column}),{readonlyLocal:o}=Ge(e),{disabledLocal:l}=je(e),{hasSlot:i,hasSlotAfter:r,slotName:a,slotNameAfter:n}=Je(e),d=m(()=>e.rowData||e.row);return{columnStyles:t,disabledLocal:l,hasSlot:i,hasSlotAfter:r,readonlyLocal:o,rowDataLocal:d,slotName:a,slotNameAfter:n}},methods:{updateRowData({item:e,model:t}){this.$emit("updateRowData",{column:this.column,columnId:this.column.id,item:e,model:t,value:t})}},render(){const{type:e="text",...t}=this.column.formElement||{},o={column:this.column,columnIndex:this.columnIndex,row:this.row,rowIndex:this.rowIndex,rows:this.rows};return _(this.tag,{class:["a_table_form__cell",`a_table_form__cell_${this.tag}`,this.column.class,this.isFooter?this.column.classFooter:this.column.classRow],style:[this.columnStyles,this.columnStyle]},[this.hasSlot&&this.$slots[this.slotName]?this.$slots[this.slotName](o):_(We,{id:this.column.id,errorIcon:this.errorIcon,idPrefix:this.id,...t,change:this.updateRowData,disabled:this.disabledLocal,errors:S(this.errors,this.column.id),errorsClass:"a_sr_only",modelValue:S(this.rowDataLocal,this.column.id),readonly:this.readonlyLocal,type:e}),this.hasSlotAfter&&this.$slots[this.slotNameAfter]?this.$slots[this.slotNameAfter](o):null])}};function Ke(e,{isActionsDisabled:t=m(()=>!1)}){const o=s(e,"id"),l=s(e,"isDeletable"),i=s(e,"isDeletableConfirm"),r=s(e,"onDeleteRow"),a=s(e,"row"),n=s(e,"rowIndex"),d=s(e,"texts"),{closeConfirm:c,openConfirm:E}=_e(),f=m(()=>`${o.value}_delete`),b=()=>{c(),Q().then(()=>{te({selector:`#${f.value}`})})},v=()=>{E({bodyHtml:d.value.actionDeleteConfirmBody,closeButtonText:d.value.actionDeleteConfirmClose,headerText:d.value.actionDeleteConfirmHeader,save:async()=>{await r.value({row:a.value,rowIndex:n.value}),c()},close:b,saveButtonText:d.value.actionDeleteConfirmSave})};return{idBtnDelete:f,onDeleteClick:()=>{if(!t.value){if(i.value){v();return}l.value&&r.value({row:a.value,rowIndex:n.value})}}}}function Xe(e){const t=s(e,"actionsDisabledCallback"),o=s(e,"hasActiveEditRow"),l=s(e,"isActiveEditMode"),i=s(e,"row"),r=s(e,"rowIndex"),a=m(()=>o.value&&!l.value),n=m(()=>{if(a.value)return!0;const c=S(t.value,"delete");return B(c)?c({row:i.value,rowIndex:r.value}):!1}),d=m(()=>{if(a.value)return!0;const c=S(t.value,"edit");return B(c)?c({row:i.value,rowIndex:r.value}):!1});return{isDeleteDisabled:n,isEditDisabled:d}}function Ye(e){const t=s(e,"actionsHideCallback"),o=s(e,"row"),l=s(e,"rowIndex"),i=m(()=>{const a=S(t.value,"delete");return B(a)?a({row:o.value,rowIndex:l.value}):!1}),r=m(()=>{const a=S(t.value,"edit");return B(a)?a({row:o.value,rowIndex:l.value}):!1});return{isDeleteHidden:i,isEditHidden:r}}function ze(e){const t=s(e,"isDeletable"),o=s(e,"isDeletableConfirm"),l=s(e,"isEditable"),i=s(e,"isActiveEditMode"),r=s(e,"widths");return{columnStyles:m(()=>{const n=t.value||o.value,d=l.value||i.value&&n?r.value.actionsColumnDouble:r.value.actionsColumnSingle;return{maxWidth:`${d}px`,minWidth:`${d}px`,width:`${d}px`}})}}function Ze(e){const t=s(e,"row"),o=s(e,"rowIndex"),l=s(e,"texts"),i=s(e,"actionsTitleCallback"),r=m(()=>{const n=S(i.value,"delete");return B(n)?n({row:t.value,rowIndex:o.value}):l.value.actionDelete}),a=m(()=>{const n=S(i.value,"edit");return B(n)?n({row:t.value,rowIndex:o.value}):l.value.actionEdit});return{deleteTitle:r,editTitle:a}}const Qe={name:"ATableFormCellAction",props:{hasActiveEditRow:{type:Boolean,required:!1,default:!1},actionsClasses:{type:Object,required:!1,default:()=>({})},actionsDisabledCallback:{type:Object,required:!1,default:()=>({})},actionsHideCallback:{type:Object,required:!1,default:()=>({})},actionsTitleCallback:{type:Object,required:!1,default:()=>({})},id:{type:String,required:!0},isActiveEditMode:{type:Boolean,required:!1,default:!1},isActionsSticky:{type:Boolean,required:!1,default:!1},isDeletable:{type:Boolean,required:!1,default:!1},isDeletableConfirm:{type:Boolean,required:!1,default:!1},isEditable:{type:Boolean,required:!1,default:!1},isFooter:{type:Boolean,required:!1,default:!1},isHeader:{type:Boolean,required:!1,default:!1},isSaving:{type:Boolean,required:!1,default:!1},onCancelEditRow:{type:Function,required:!0},onDeleteRow:{type:Function,required:!0},onEditRow:{type:Function,required:!0},onSaveEditRow:{type:Function,required:!0},row:{type:Object,required:!0},rowIndex:{type:Number,required:!0},texts:{type:Object,required:!1,default:()=>({})},widths:{type:Object,required:!1,default:()=>({})}},setup(e){const{isDeleteDisabled:t,isEditDisabled:o}=Xe(e),{isDeleteHidden:l,isEditHidden:i}=Ye(e),{idBtnDelete:r,onDeleteClick:a}=Ke(e,{isActionsDisabled:t}),{columnStyles:n}=ze(e),{deleteTitle:d,editTitle:c}=Ze(e);return{columnStyles:n,deleteTitle:d,editTitle:c,idBtnDelete:r,isDeleteDisabled:t,isDeleteHidden:l,isEditDisabled:o,isEditHidden:i,onDeleteClick:a}},render(){const e=this.isHeader?"th":"td";return _(e,{class:["a_table_form__cell",`a_table_form__cell_${e}`,"a_table_form__cell_actions",{a_table_form__cell_actions_sticky:this.isActionsSticky}],style:this.columnStyles},[this.isHeader?_("span",{class:"a_sr_only"},[_(W,{tag:"span",text:this.texts.actionsColumn})]):this.isFooter?null:_("div",{class:"a_table_form__actions",role:"group"},this.isActiveEditMode?[_(U,{class:["a_table_form__action_button",this.classes.actionEditCancel],disabled:this.isSaving,iconLeft:Re,title:this.texts.actionEditCancel,textScreenReader:this.texts.actionEditCancel,onClick:()=>this.onCancelEditRow({row:this.row,rowIndex:this.rowIndex})}),_(U,{class:["a_table_form__action_button",this.classes.actionEditSave],disabled:this.isSaving,iconLeft:pe,title:this.texts.actionEditSave,textScreenReader:this.texts.actionEditSave,onClick:()=>this.onSaveEditRow({row:this.row,rowIndex:this.rowIndex})})]:[(this.isDeletable||this.isDeletableConfirm)&&!this.isDeleteHidden&&_(U,{id:this.idBtnDelete,class:["a_table_form__action_button",this.classes.actionDelete],disabled:this.isDeleteDisabled,iconLeft:ye,title:this.deleteTitle,textScreenReader:this.deleteTitle,onClick:this.onDeleteClick}),this.isEditable&&!this.isEditHidden&&_(U,{class:["a_table_form__action_button",this.classes.actionEdit],disabled:this.isEditDisabled,iconLeft:ge,title:this.editTitle,textScreenReader:this.editTitle,onClick:()=>this.onEditRow({row:this.row,rowIndex:this.rowIndex})})])])}};function et(e){const t=s(e,"id"),o=m(()=>`${t.value}_up`);return{idBtnDown:m(()=>`${t.value}_down`),idBtnUp:o}}const tt={name:"ATableFormCellDnd",props:{canMoveRowDown:{type:Function,required:!0},canMoveRowUp:{type:Function,required:!0},id:{type:String,required:!0},isCreateMode:{type:Boolean,required:!1,default:!1},isDragAndDrop:{type:Boolean,required:!1,default:!1},isDndDisabled:{type:Boolean,required:!1,default:!1},isFooter:{type:Boolean,required:!1,default:!1},isHeader:{type:Boolean,required:!1,default:!1},moveRowDown:{type:Function,required:!0},moveRowUp:{type:Function,required:!0},onDragend:{type:Function,required:!0},onDragstart:{type:Function,required:!0},rowIndex:{type:Number,required:!0},texts:{type:Object,required:!1,default:()=>({})},widths:{type:Object,required:!1,default:()=>({})}},setup(e){const{idBtnDown:t,idBtnUp:o}=et(e);return{columnStyles:m(()=>({maxWidth:`${e.widths.dndColumn}px`,minWidth:`${e.widths.dndColumn}px`,width:`${e.widths.dndColumn}px`})),idBtnDown:t,idBtnUp:o}},render(){const e=this.isHeader?"th":"td",t=this.isDragAndDrop&&!this.isDndDisabled;return _(e,{class:["a_table_form__cell",`a_table_form__cell_${e}`,"a_table_form__cell_reorder"],style:this.columnStyles},[this.isHeader?_("span",{class:"a_sr_only"},[_(W,{tag:"span",text:this.texts.reorderColumn})]):this.isCreateMode||this.isFooter?null:_("div",{class:"a_table_form__reorder_actions"},[this.canMoveRowUp(this.rowIndex)&&_(U,{id:this.idBtnUp,class:"a_sr_only_focusable a_btn a_btn_transparent_dark a_table_form__reorder_button",disabled:this.isDndDisabled,iconLeft:Ce,tabindex:this.isDndDisabled?-1:void 0,title:this.texts.reorderUp,textScreenReader:this.texts.reorderUp,onClick:()=>this.moveRowUp(this.rowIndex)}),_("span",{ariaHidden:!0,class:"a_table_form__reorder_handle",draggable:t,onDragend:t?this.onDragend:void 0,onDragstart:t?o=>this.onDragstart(o,this.rowIndex):void 0},[_(me,{class:"a_table_form__reorder_icon",icon:De})]),_("span",{class:"a_sr_only"},[_(W,{tag:"span",text:this.texts.reorderHandle})]),this.canMoveRowDown(this.rowIndex)&&_(U,{id:this.idBtnDown,class:"a_sr_only_focusable a_btn a_btn_transparent_dark a_table_form__reorder_button",disabled:this.isDndDisabled,iconLeft:Te,tabindex:this.isDndDisabled?-1:void 0,title:this.texts.reorderDown,textScreenReader:this.texts.reorderDown,onClick:()=>this.moveRowDown(this.rowIndex)})])])}},ot={name:"ATableFormTh",props:{column:{type:Object,required:!0},columnStyle:{type:Object,required:!1,default:void 0},isEditable:{type:Boolean,required:!1,default:!1}},setup(e){const{columnStyles:t}=se({column:e.column});return{columnStyles:t}},render(){var e;return this.column.slotHeader,this.column,this.isEditable,_("th",{class:["a_table_form__cell","a_table_form__cell_th",this.column.class],style:[this.columnStyles,this.columnStyle]},[this.column.slotHeader&&this.$slots[this.column.slotHeader]?this.$slots[this.column.slotHeader]({column:this.column,isEditable:this.isEditable}):this.column.label&&_(W,{html:this.column.label,tag:"span"}),this.isEditable&&((e=this.column.formElement)==null?void 0:e.required)&&_("span",{class:"a_label__required"},"*")])}};function at(e,{hasErrors:t=m(()=>!1)}){const o=s(e,"hasActiveEditRow"),l=s(e,"isActiveEditMode"),i=s(e,"isCreateMode"),r=s(e,"isFooter"),a=s(e,"isHeader"),n=s(e,"row"),d=s(e,"rowClass"),c=s(e,"rowIndex"),E=s(e,"trClass"),f=m(()=>B(d.value)?d.value({row:n.value,rowIndex:c.value,rowindex:c.value,isCreateMode:i.value,isFooter:r.value,isHeader:a.value}):d.value),b=m(()=>[E.value,f.value,{a_table_form__row_active:!a.value&&!r.value&&l.value,a_table_form__row_errors:!a.value&&!r.value&&t.value,a_table_form__row_inactive:!a.value&&!r.value&&o.value&&!l.value}]);return{rowClassLocal:f,trClassLocal:b}}function st(e,{errorsLocal:t=y(void 0)}){const o=s(e,"changeModel"),l=s(e,"onCancelEditRow"),i=s(e,"row"),r=s(e,"rows"),a=s(e,"rowIndex"),n=s(e,"saveRow"),d=y(!1),c=y(void 0),E=({column:v,columnId:p,item:M,model:N})=>{c.value||(c.value=$(i.value)||{});let F;o.value&&(F=o.value({modelAll:c.value,row:i.value,column:v,model:N,item:M})),F!=null&&F.model?c.value=$(F.model):Se(c.value,p,N),Be(t.value,p)},f=()=>{l.value({row:i.value,rowIndex:a.value})};return{cancelEditRow:f,isSaving:d,modelLocal:c,saveEditRow:async()=>{if(!d.value){t.value={},d.value=!0;try{const v=await n.value({model:$(c.value),row:i.value,rowIndex:a.value,rows:r.value});if(v!=null&&v.errors){t.value=$(v.errors);return}f()}catch(v){t.value=v}finally{d.value=!1}}},updateModelLocal:E}}function lt(e){const t=s(e,"columns"),o=y({}),l=m(()=>!qe(o.value)),i=m(()=>{const r=[];return Ne(t.value,a=>{const n=$(a.formElement)||{};n.type=n.type||"text",n.label=n.label||a.label,n.id=n.id||a.id,r.push(n)}),r});return{errorsLocal:o,hasErrors:l,optionsListForErrors:i}}function it({idTr:e=m(()=>"")}){return{focusFirstEditableElement:()=>{const o=document.getElementById(e.value);if(!o)return;const i=Array.from(o.querySelectorAll(".a_table_form__cell:not(.a_table_form__cell_actions)")).map(r=>r.querySelector(he)).find(Boolean);i==null||i.focus()}}}function nt(e){const t=s(e,"id"),o=s(e,"isHeader"),l=s(e,"isFooter"),i=s(e,"rowIndex");return{idTr:m(()=>`${t.value}_${i.value}${o.value?"_header":""}${l.value?"_footer":""}`)}}const Z={name:"ATableFormRow",props:{actionsClasses:{type:Object,required:!1,default:()=>({})},allColumnsLength:{type:Number,required:!0},canMoveRowDown:{type:Function,required:!0},canMoveRowUp:{type:Function,required:!0},cellTag:{type:String,required:!1,default:void 0},changeModel:{type:Function,required:!1,default:void 0},columns:{type:Array,required:!0},columnsStylesGrow:{type:Object,required:!1,default:()=>({})},actionsDisabledCallback:{type:Object,required:!1,default:()=>({})},actionsHideCallback:{type:Object,required:!1,default:()=>({})},actionsTitleCallback:{type:Object,required:!1,default:()=>({})},draggedRowIndex:{type:Number,required:!1,default:void 0},editModel:{type:Object,required:!1,default:void 0},errorIcon:{type:String,required:!1,default:void 0},hasActionsColumn:{type:Boolean,required:!1,default:!1},hasActiveEditRow:{type:Boolean,required:!1,default:!1},id:{type:String,required:!0},isActiveEditMode:{type:Boolean,required:!1,default:!1},isActionsSticky:{type:Boolean,required:!1,default:!1},isCreateMode:{type:Boolean,required:!1,default:!1},isDeletable:{type:Boolean,required:!1,default:!1},isDeletableConfirm:{type:Boolean,required:!1,default:!1},isDndDisabled:{type:Boolean,required:!1,default:!1},isDragAndDrop:{type:Boolean,required:!1,default:!1},isEditable:{type:Boolean,required:!1,default:!1},isFooter:{type:Boolean,required:!1,default:!1},isHeader:{type:Boolean,required:!1,default:!1},moveRowDown:{type:Function,required:!0},moveRowUp:{type:Function,required:!0},onCancelEditRow:{type:Function,required:!0},onDeleteRow:{type:Function,required:!0},onDragend:{type:Function,required:!0},onDragleave:{type:Function,required:!1,default:void 0},onDragover:{type:Function,required:!1,default:void 0},onDragstart:{type:Function,required:!0},onDrop:{type:Function,required:!1,default:void 0},onEditRow:{type:Function,required:!0},row:{type:Object,required:!0},rowClass:{type:[String,Object,Array,Function],required:!1,default:void 0},rowIndex:{type:Number,required:!0},rows:{type:Array,required:!0},saveRow:{type:Function,required:!0},texts:{type:Object,required:!1,default:()=>({})},trClass:{type:[String,Object,Array],required:!1,default:void 0},widths:{type:Object,required:!1,default:()=>({})}},setup(e){const{idTr:t}=nt(e),{focusFirstEditableElement:o}=it({idTr:t}),{errorsLocal:l,hasErrors:i,optionsListForErrors:r}=lt(e),{rowClassLocal:a,trClassLocal:n}=at(e,{hasErrors:i}),{cancelEditRow:d,isSaving:c,modelLocal:E,saveEditRow:f,updateModelLocal:b}=st(e,{errorsLocal:l});return{cancelEditRow:d,errorsLocal:l,focusFirstEditableElement:o,hasErrors:i,rowClassLocal:a,idTr:t,isSaving:c,modelLocal:E,optionsListForErrors:r,saveEditRow:f,trClassLocal:n,updateModelLocal:b}},computed:{currentRowData(){return this.isActiveEditMode&&this.modelLocal?this.modelLocal:this.row}},watch:{isActiveEditMode:{immediate:!0,handler(e){if(e){this.modelLocal=$(this.editModel===void 0?this.row:this.editModel),this.errorsLocal={},Q(()=>{this.focusFirstEditableElement()});return}this.errorsLocal={},this.isSaving=!1}}},render(){const e=[];return this.isActiveEditMode&&this.texts.editInfoText&&e.push(_("tr",{class:"a_table_form__row a_table_form__row_info",key:`info_${this.rowIndex}`},[_("td",{class:"a_table_form__cell a_table_form__cell_info",colspan:this.allColumnsLength},[_(fe,{alertClass:"a_table_form__info",html:this.texts.editInfoText,isVisible:!0,type:"info"})])])),e.push(_("tr",{id:this.idTr,"aria-grabbed":!this.isHeader&&!this.isFooter?this.draggedRowIndex===this.rowIndex:void 0,class:this.trClassLocal,key:`main_${this.rowIndex}`,onDragleave:this.onDragleave&&(t=>this.onDragleave(t,this.rowIndex)),onDragover:this.onDragover&&(t=>this.onDragover(t,this.rowIndex)),onDrop:this.onDrop&&(t=>this.onDrop(t,this.rowIndex))},[this.isDragAndDrop?_(tt,{id:this.idTr,canMoveRowDown:this.canMoveRowDown,canMoveRowUp:this.canMoveRowUp,isCreateMode:this.isCreateMode,isDndDisabled:this.isDndDisabled,isDragAndDrop:this.isDragAndDrop,isFooter:this.isFooter,isHeader:this.isHeader,moveRowDown:this.moveRowDown,moveRowUp:this.moveRowUp,onDragend:this.onDragend,onDragstart:this.onDragstart,rowIndex:this.rowIndex,texts:this.texts,widths:this.widths}):null,...this.columns.map((t,o)=>this.isHeader?_(ot,{column:t,columnStyle:this.columnsStylesGrow[t.id],isEditable:this.isEditable},this.$slots):_(Ve,{id:this.idTr,column:t,columnIndex:o,columnStyle:this.columnsStylesGrow[t.id],errorIcon:this.errorIcon,errors:this.errorsLocal,isEditable:this.isEditable,isEditMode:this.isActiveEditMode,isFooter:this.isFooter,onUpdateRowData:this.updateModelLocal,row:this.row,rowData:this.currentRowData,rowIndex:this.rowIndex,rows:this.rows,tag:this.cellTag},this.$slots)),this.hasActionsColumn?_(Qe,{actionsClasses:this.actionsClasses,actionsDisabledCallback:this.actionsDisabledCallback,actionsHideCallback:this.actionsHideCallback,id:this.idTr,hasActiveEditRow:this.hasActiveEditRow,isActiveEditMode:this.isActiveEditMode,isActionsSticky:this.isActionsSticky,isDeletable:this.isDeletable,isDeletableConfirm:this.isDeletableConfirm,isEditable:this.isEditable,isFooter:this.isFooter,isHeader:this.isHeader,isSaving:this.isSaving,onCancelEditRow:this.cancelEditRow,onDeleteRow:this.onDeleteRow,onEditRow:this.onEditRow,onSaveEditRow:this.saveEditRow,row:this.row,rowIndex:this.rowIndex,texts:this.texts,actionsTitleCallback:this.actionsTitleCallback,widths:this.widths}):null])),this.isActiveEditMode&&this.hasErrors&&e.push(_("tr",{class:"a_table_form__row a_table_form__row_errors",key:`errors_${this.rowIndex}`},[_("td",{class:"a_table_form__cell a_table_form__cell_errors",colspan:this.allColumnsLength},[_(be,{autoFocus:!0,closable:!1,errors:this.errorsLocal,optionsList:this.optionsListForErrors,idPrefix:this.idTr})])])),e}};function rt(e){const t=s(e,"actionsClasses");return{classesLocal:m(()=>({actionDelete:"a_btn a_btn_transparent_danger",actionEdit:"a_btn a_btn_transparent_primary",actionEditCancel:"a_btn a_btn_transparent_primary",actionEditSave:"a_btn a_btn_transparent_primary",actionAddRow:"a_btn a_btn_outline_primary",...t.value}))}}function dt(e){const t=s(e,"columns"),o=s(e,"isDeletable"),l=s(e,"isDeletableConfirm"),i=s(e,"isDragAndDrop"),r=s(e,"isEditable"),a=m(()=>!!(r.value||o.value||l.value));return{allColumnsLength:m(()=>{var c;let d=((c=t.value)==null?void 0:c.length)||0;return i.value&&(d+=1),a.value&&(d+=1),d}),hasActionsColumn:a}}function ct(e,{hasActionsColumn:t=m(()=>!1),widthsLocal:o=m(()=>({}))}){const l=s(e,"columns"),i=s(e,"id"),r=s(e,"isColumnsGrow"),a=s(e,"isDeletable"),n=s(e,"isDeletableConfirm"),d=s(e,"isDragAndDrop"),c=s(e,"isEditable"),{remPx:E,scalePxWithRem:f}=we(),b=y(void 0),v=y({});let p,M;const N=m(()=>t.value?c.value?o.value.actionsColumnDouble:a.value||n.value?o.value.actionsColumnSingle:0:0),F=m(()=>d.value?o.value.dndColumn:0),x=()=>{var h;return(h=document.getElementById(i.value))==null?void 0:h.parentElement},g=h=>{if(ae(h)||h==="")return 0;if(He(h))return+f(h)||0;if(!Ue(h))return 0;const A=h.trim();return A?A.endsWith("rem")?(parseFloat(A)||0)*E.value:(A.endsWith("px"),parseFloat(A)||0):0},K=h=>{const A=`${h}px`;return{maxWidth:A,minWidth:A,width:A}},u=()=>{if(!r.value||!b.value){v.value={};return}const h=l.value||[],A=b.value-N.value-F.value;if(A<=0){v.value={};return}let O=0,C=0;if(h.forEach(k=>{const P=g(k.width);O+=P,C+=Math.max(0,+k.grow||0)}),O>=A||C<=0){v.value={};return}const I=A-O,H={};h.forEach(k=>{const P=g(k.width),L=Math.max(0,+k.grow||0);if(!k.id||!P)return;const q=P+(L>0?I*L/C:0);H[k.id]=K(q)}),v.value=H},w=()=>{if(!r.value||p)return;const h=x();h&&(M=h,p=new ResizeObserver(Pe(A=>{var C,I;const O=(I=(C=A[0])==null?void 0:C.contentRect)==null?void 0:I.width;O&&(b.value=O,u())},100)),b.value=h.getBoundingClientRect().width,u(),p.observe(h))},R=()=>{p&&(M&&p.unobserve(M),p.disconnect(),p=void 0,M=void 0)};return Me([l,t,a,n,d,c,o],()=>{u()},{deep:!0}),{columnsStylesGrow:v,destroyColumnsGrowObserver:R,initColumnsGrowObserver:w}}function ut(e,{emit:t}){return{onDeleteRow:({row:l,rowIndex:i})=>{t("deleteRow",{row:l,rowIndex:i})}}}function _t(e,{emit:t},{isDndDisabled:o=m(()=>!1)}={}){const l=s(e,"id"),i=s(e,"isDragAndDrop"),r=s(e,"rows"),a=y(void 0),n=y(void 0),d=y(void 0),c=y(void 0),E=()=>{var u;(u=c.value)==null||u.remove(),c.value=void 0},f=u=>{var I,H;const w=(H=(I=u.target)==null?void 0:I.closest)==null?void 0:H.call(I,"tr");if(!w)return;const R=w.getBoundingClientRect(),h=document.createElement("table"),A=document.createElement("tbody"),O=w.cloneNode(!0);h.className="a_table_form__table",h.style.borderCollapse="collapse",h.style.borderSpacing="0",h.style.width=`${R.width}px`,h.style.tableLayout="fixed",Array.from(w.children).forEach((k,P)=>{const L=O.children[P];if(L){const q=window.getComputedStyle(k);L.style.width=`${k.getBoundingClientRect().width}px`,L.style.backgroundColor=q.backgroundColor,L.style.borderTop=q.borderTop,L.style.borderRight=q.borderRight,L.style.borderBottom=q.borderBottom,L.style.borderLeft=q.borderLeft,L.style.color=q.color}}),A.appendChild(O),h.appendChild(A);const C=document.createElement("div");return C.className="a_table_form a_table_form__drag_preview",C.style.position="fixed",C.style.top="-10000px",C.style.left="-10000px",C.style.pointerEvents="none",C.style.zIndex="9999",C.appendChild(h),document.body.appendChild(C),c.value=C,{element:C,offsetX:Math.min(u.offsetX||0,R.width/2),offsetY:Math.min(u.offsetY||0,R.height/2)}},b=({fromIndex:u,toIndex:w,trigger:R})=>{if(!i.value||o.value||u===w||u<0||w<0||u>=r.value.length||w>=r.value.length)return;const h=[...r.value],[A]=h.splice(u,1);h.splice(w,0,A),t("updateRows",{rows:h,trigger:R,fromIndex:u,toIndex:w}),t("moveRow",{fromIndex:u,row:A,toIndex:w})},v=({fromIndex:u,rowIndex:w,position:R="before"})=>{if(!i.value||o.value||u<0||w<0||u>=r.value.length||w>=r.value.length)return;let h=R==="after"?w+1:w;u<h&&(h-=1),b({fromIndex:u,toIndex:h,trigger:"dnd"})},p=u=>{b({fromIndex:u,toIndex:u-1,trigger:"moveRowUp"}),Q().then(()=>{const w=Math.max(1,u-1);te({selector:`#${l.value}_${w}_up`})})},M=u=>{b({fromIndex:u,toIndex:u+1,trigger:"moveRowDown"}),Q().then(()=>{const w=Math.min(r.value.length-2,u+1);te({selector:`#${l.value}_${w}_down`})})},N=(u,w)=>{if(!(!i.value||o.value)){if(u!=null&&u.dataTransfer){u.dataTransfer.effectAllowed="move",u.dataTransfer.setData("text/plain",`${w}`),E();const R=f(u);R&&u.dataTransfer.setDragImage(R.element,R.offsetX,R.offsetY)}a.value=w}},F=(u,w)=>{var h,A;if(!i.value||o.value)return;u.preventDefault();const R=(A=(h=u.currentTarget)==null?void 0:h.getBoundingClientRect)==null?void 0:A.call(h);if(R){const O=R.top+R.height/2;d.value=u.clientY<O?"before":"after"}else d.value="after";n.value=w},x=(u,w)=>{var h,A;if(!i.value||o.value)return;const R=u.relatedTarget;(A=(h=u.currentTarget)==null?void 0:h.contains)!=null&&A.call(h,R)||n.value===w&&(n.value=void 0,d.value=void 0)},g=(u,w)=>{!i.value||o.value||(u.preventDefault(),a.value!==void 0&&(v({fromIndex:a.value,position:d.value||"after",rowIndex:w}),E(),a.value=void 0,n.value=void 0,d.value=void 0))},K=()=>{E(),a.value=void 0,n.value=void 0,d.value=void 0};return{canMoveRowDown:m(()=>u=>u<r.value.length-1),canMoveRowUp:m(()=>u=>u>0),dragOverPosition:d,dragOverRowIndex:n,draggedRowIndex:a,onDragleave:x,moveRowDown:M,moveRowUp:p,onDragend:K,onDragover:F,onDragstart:N,onDrop:g}}function mt(e,{getRowKey:t=()=>{}}){const o=s(e,"addRow"),l=s(e,"columns"),i=s(e,"isAddable"),r=s(e,"isEditable"),a=s(e,"prepareEditModel"),n=s(e,"rows"),d=y(void 0),c=y(void 0),E=y(!1),f=m(()=>!!d.value||E.value),b=m(()=>i.value?B(o.value):!1),v=m(()=>r.value?l.value.some(x=>{var g;return!!((g=x.formElement)!=null&&g.required)}):!1),p=x=>{if(!B(a.value))return;const g=a.value(x);if((g==null?void 0:g.model)!==void 0)return $(g.model)};return{activeEditRowKey:d,activeEditModel:c,canAddRow:b,hasActiveEditRow:f,hasRequiredEditableColumns:v,isAddRowActive:E,onAddRow:()=>{f.value||!b.value||(d.value=void 0,c.value=p({rows:n.value}),E.value=!0)},onCancelEditRow:()=>{d.value=void 0,c.value=void 0,E.value=!1},onEditRow:({row:x,rowIndex:g})=>{E.value||(c.value=p({row:x,rowIndex:g,rows:n.value}),d.value=t({row:x,rowIndex:g}))}}}function ht(e){const t=s(e,"icons");return{iconsLocal:m(()=>({actionAddRow:Oe,...t.value}))}}function ft(e){const t=s(e,"keyId"),o=s(e,"rows"),l=s(e,"rowsFooter"),i=m(()=>o.value.length>0),r=m(()=>l.value.length>0);return{getRowKey:({row:n,rowIndex:d,isFooter:c=!1})=>{let E=d;if(t.value){const b=S(n,t.value);ae(b)||(E=b)}return`${c?"footer":"body"}_${E}`},hasRows:i,hasRowsFooter:r}}function bt(e){const t=s(e,"texts");return{textsLocal:m(()=>({actionsColumn:"_A_TABLE_FORM_ACTIONS_",actionAddRow:"_A_TABLE_FORM_ADD_ROW_",actionDelete:"_A_TABLE_FORM_DELETE_",actionDeleteConfirmBody:"_A_TABLE_FORM_DELETE_CONFIRM_BODY_",actionDeleteConfirmClose:"_A_TABLE_FORM_DELETE_CONFIRM_CLOSE_",actionDeleteConfirmHeader:"_A_TABLE_FORM_DELETE_CONFIRM_HEADER_",actionDeleteConfirmSave:"_A_TABLE_FORM_DELETE_CONFIRM_SAVE_",actionEdit:"_A_TABLE_FORM_EDIT_",actionEditCancel:"_A_TABLE_FORM_EDIT_CANCEL_",actionEditSave:"_A_TABLE_FORM_EDIT_SAVE_",editInfoText:void 0,emptyText:"_A_TABLE_FORM_EMPTY_",reorderColumn:"_A_TABLE_FORM_REORDER_COLUMN_",reorderDown:"_A_TABLE_FORM_MOVE_DOWN_",reorderHandle:"_A_TABLE_FORM_REORDER_",reorderUp:"_A_TABLE_FORM_MOVE_UP_",...t.value}))}}function wt(e){const t=s(e,"widths");return{widthsLocal:m(()=>({actionsColumnSingle:56,actionsColumnDouble:112,dndColumn:56,...t.value}))}}const z={name:"ATableForm",props:{actionsClasses:{type:Object,required:!1,default:()=>({})},actionsDisabledCallback:{type:Object,required:!1,default:()=>({})},actionsHideCallback:{type:Object,required:!1,default:()=>({})},actionsTitleCallback:{type:Object,required:!1,default:()=>({})},addRow:{type:Function,required:!1,default:void 0},columns:{type:Array,required:!0},columnsDefaultValue:{type:[String,Number],required:!1,default:""},changeModel:{type:Function,required:!1,default:void 0},errorIcon:{type:String,required:!1,default:Le},extra:{type:Object,required:!1,default:void 0},icons:{type:Object,required:!1,default:()=>({})},id:{type:String,required:!1,default:()=>$e("a_table_form_")},isActionsSticky:{type:Boolean,required:!1,default:!1},isAddable:{type:Boolean,required:!1,default:!1},isColumnsGrow:{type:Boolean,required:!1,default:!1},isDeletable:{type:Boolean,required:!1,default:!1},isDeletableConfirm:{type:Boolean,required:!1,default:!1},isDragAndDrop:{type:Boolean,required:!1,default:!1},isEditable:{type:Boolean,required:!1,default:!1},keyId:{type:String,required:!1,default:void 0},label:{type:[String,Number],required:!1,default:""},labelClass:{type:[String,Object,Array],required:!1,default:void 0},labelTag:{type:String,required:!1,default:"h2"},prepareEditModel:{type:Function,required:!1,default:void 0},rowClass:{type:[String,Object,Array,Function],required:!1,default:void 0},rows:{type:Array,required:!1,default:()=>[]},rowsFooter:{type:Array,required:!1,default:()=>[]},saveRow:{type:Function,required:!1,default:()=>{}},texts:{type:Object,required:!1,default:()=>({})},widths:{type:Object,required:!1,default:()=>({})}},emits:["deleteRow","moveRow","updateRows"],setup(e,t){const o=s(e,"actionsDisabledCallback"),l=s(e,"actionsTitleCallback"),{allColumnsLength:i,hasActionsColumn:r}=dt(e),{getRowKey:a,hasRows:n,hasRowsFooter:d}=ft(e),{textsLocal:c}=bt(e),{widthsLocal:E}=wt(e),{iconsLocal:f}=ht(e),{classesLocal:b}=rt(e),{columnsStylesGrow:v,destroyColumnsGrowObserver:p,initColumnsGrowObserver:M}=ct(e,{hasActionsColumn:r,widthsLocal:E});Fe(()=>{M()}),xe(()=>{p()});const{activeEditRowKey:N,activeEditModel:F,canAddRow:x,hasActiveEditRow:g,hasRequiredEditableColumns:K,isAddRowActive:u,onAddRow:w,onCancelEditRow:R,onEditRow:h}=mt(e,{getRowKey:a}),{canMoveRowDown:A,canMoveRowUp:O,dragOverPosition:C,dragOverRowIndex:I,draggedRowIndex:H,moveRowDown:k,moveRowUp:P,onDragend:L,onDragleave:q,onDragover:le,onDragstart:ie,onDrop:ne}=_t(e,t,{isDndDisabled:g}),{onDeleteRow:re}=ut(e,t),de=m(()=>{if(g.value)return!0;const X=S(o.value,"add");return B(X)?X():!1}),ce=m(()=>{const X=S(l.value,"add");return B(X)?X():c.value.actionAddRow});return{activeEditRowKey:N,activeEditModel:F,allColumnsLength:i,addTitle:ce,canAddRow:x,canMoveRowDown:A,canMoveRowUp:O,classesLocal:b,columnsStylesGrow:v,draggedRowIndex:H,dragOverPosition:C,dragOverRowIndex:I,getRowKey:a,hasActionsColumn:r,hasActiveEditRow:g,hasRequiredEditableColumns:K,hasRows:n,hasRowsFooter:d,iconsLocal:f,isAddDisabled:de,isAddRowActive:u,moveRowDown:k,moveRowUp:P,onAddRow:w,onCancelEditRow:R,onDeleteRow:re,onDragend:L,onDragleave:q,onDragover:le,onDragstart:ie,onDrop:ne,onEditRow:h,textsLocal:c,widthsLocal:E}},render(){return _("div",{class:"a_table_form"},[this.label&&_(W,{class:["a_table_form__label",this.labelClass],html:this.label,tag:this.labelTag}),this.hasRequiredEditableColumns&&_(ve),_("div",{class:"a_table_form__wrapper"},[_("table",{id:this.id,class:["a_table_form__table",{a_table_form_drag_active:this.draggedRowIndex!==void 0}]},[_("thead",{class:"a_table_form__head"},[_(Z,{id:this.id,allColumnsLength:this.allColumnsLength,canMoveRowDown:this.canMoveRowDown,canMoveRowUp:this.canMoveRowUp,cellTag:"th",changeModel:this.changeModel,actionsClasses:this.actionsClasses,columns:this.columns,columnsStylesGrow:this.columnsStylesGrow,draggedRowIndex:this.draggedRowIndex,hasActionsColumn:this.hasActionsColumn,hasActiveEditRow:!1,isActiveEditMode:!1,isActionsSticky:this.isActionsSticky,actionsDisabledCallback:this.actionsDisabledCallback,actionsHideCallback:this.actionsHideCallback,actionsTitleCallback:this.actionsTitleCallback,isDeletable:this.isDeletable,isDeletableConfirm:this.isDeletableConfirm,isDndDisabled:this.hasActiveEditRow,isDragAndDrop:this.isDragAndDrop,isEditable:this.isEditable,isHeader:!0,moveRowDown:this.moveRowDown,moveRowUp:this.moveRowUp,onCancelEditRow:this.onCancelEditRow,onDeleteRow:this.onDeleteRow,onDragend:this.onDragend,onDragstart:this.onDragstart,onEditRow:this.onEditRow,row:{},rowIndex:0,rows:this.rows,saveRow:this.saveRow,texts:this.textsLocal,widths:this.widthsLocal,trClass:"a_table_form__row a_table_form__row_head"},this.$slots)]),_("tbody",{class:"a_table_form__body"},this.hasRows||this.isAddRowActive?[...this.rows.map((e,t)=>{const o=this.getRowKey({row:e,rowIndex:t});return _(Z,{id:this.id,allColumnsLength:this.allColumnsLength,canMoveRowDown:this.canMoveRowDown,canMoveRowUp:this.canMoveRowUp,changeModel:this.changeModel,actionsClasses:this.actionsClasses,columns:this.columns,columnsStylesGrow:this.columnsStylesGrow,draggedRowIndex:this.draggedRowIndex,editModel:this.activeEditRowKey===o?this.activeEditModel:void 0,errorIcon:this.errorIcon,hasActionsColumn:this.hasActionsColumn,hasActiveEditRow:this.hasActiveEditRow,isActiveEditMode:this.activeEditRowKey===o,isActionsSticky:this.isActionsSticky,actionsDisabledCallback:this.actionsDisabledCallback,actionsHideCallback:this.actionsHideCallback,actionsTitleCallback:this.actionsTitleCallback,isCreateMode:!1,isDeletable:this.isDeletable,isDeletableConfirm:this.isDeletableConfirm,isDndDisabled:this.hasActiveEditRow,isDragAndDrop:this.isDragAndDrop,isEditable:this.isEditable,key:o,moveRowDown:this.moveRowDown,moveRowUp:this.moveRowUp,onCancelEditRow:this.onCancelEditRow,onDeleteRow:this.onDeleteRow,onDragend:this.onDragend,onDragleave:this.onDragleave,onDragover:this.onDragover,onDragstart:this.onDragstart,onDrop:this.onDrop,onEditRow:this.onEditRow,row:e,rowClass:this.rowClass,rowIndex:t,rows:this.rows,saveRow:this.saveRow,texts:this.textsLocal,widths:this.widthsLocal,trClass:["a_table_form__row",{a_table_form__row_drag_after:this.dragOverRowIndex===t&&this.dragOverPosition==="after",a_table_form__row_drag_before:this.dragOverRowIndex===t&&this.dragOverPosition==="before",a_table_form__row_drag_over:this.dragOverRowIndex===t,a_table_form__row_dragging:this.draggedRowIndex===t}]},this.$slots)}),this.isAddRowActive&&_(Z,{id:this.id,allColumnsLength:this.allColumnsLength,canMoveRowDown:this.canMoveRowDown,canMoveRowUp:this.canMoveRowUp,changeModel:this.changeModel,actionsClasses:this.actionsClasses,columns:this.columns,columnsStylesGrow:this.columnsStylesGrow,editModel:this.activeEditModel,errorIcon:this.errorIcon,draggedRowIndex:this.draggedRowIndex,hasActionsColumn:this.hasActionsColumn,hasActiveEditRow:this.hasActiveEditRow,isActiveEditMode:!0,isActionsSticky:this.isActionsSticky,actionsDisabledCallback:this.actionsDisabledCallback,actionsHideCallback:this.actionsHideCallback,actionsTitleCallback:this.actionsTitleCallback,isCreateMode:!0,isDeletable:!1,isDeletableConfirm:!1,isDndDisabled:!0,isDragAndDrop:this.isDragAndDrop,isEditable:this.isEditable,key:"body_create",moveRowDown:this.moveRowDown,moveRowUp:this.moveRowUp,onCancelEditRow:this.onCancelEditRow,onDeleteRow:this.onDeleteRow,onDragend:this.onDragend,onDragleave:this.onDragleave,onDragover:this.onDragover,onDragstart:this.onDragstart,onDrop:this.onDrop,onEditRow:this.onEditRow,row:{},rowClass:this.rowClass,rowIndex:this.rows.length,rows:this.rows,saveRow:this.addRow,texts:this.textsLocal,widths:this.widthsLocal,trClass:"a_table_form__row a_table_form__row_create"},this.$slots)]:[_("tr",{class:"a_table_form__row a_table_form__row_empty"},[_("td",{class:"a_table_form__cell a_table_form__empty",colspan:this.allColumnsLength},[_(W,{tag:"span",text:this.textsLocal.emptyText})])])]),this.hasRowsFooter&&_("tfoot",{class:"a_table_form__foot"},this.rowsFooter.map((e,t)=>_(Z,{id:this.id,allColumnsLength:this.allColumnsLength,canMoveRowDown:this.canMoveRowDown,canMoveRowUp:this.canMoveRowUp,changeModel:this.changeModel,actionsClasses:this.actionsClasses,columns:this.columns,columnsStylesGrow:this.columnsStylesGrow,draggedRowIndex:this.draggedRowIndex,hasActionsColumn:this.hasActionsColumn,hasActiveEditRow:this.hasActiveEditRow,isActiveEditMode:!1,isActionsSticky:this.isActionsSticky,actionsDisabledCallback:this.actionsDisabledCallback,actionsHideCallback:this.actionsHideCallback,actionsTitleCallback:this.actionsTitleCallback,isDeletable:this.isDeletable,isDeletableConfirm:this.isDeletableConfirm,isDndDisabled:this.hasActiveEditRow,isDragAndDrop:this.isDragAndDrop,isEditable:this.isEditable,isFooter:!0,key:this.getRowKey({isFooter:!0,row:e,rowIndex:t}),moveRowDown:this.moveRowDown,moveRowUp:this.moveRowUp,onCancelEditRow:this.onCancelEditRow,onDeleteRow:this.onDeleteRow,onDragend:this.onDragend,onDragstart:this.onDragstart,onEditRow:this.onEditRow,row:e,rowClass:this.rowClass,rowIndex:t,rows:this.rowsFooter,saveRow:this.saveRow,texts:this.textsLocal,widths:this.widthsLocal,trClass:"a_table_form__row a_table_form__row_footer"},this.$slots)))])]),this.canAddRow&&_("div",{class:"a_mt_3 a_text_right"},[_(U,{class:this.classesLocal.actionAddRow,disabled:this.isAddDisabled,extra:this.extra,iconLeft:this.iconsLocal.actionAddRow,text:this.textsLocal.actionAddRow,textScreenReader:this.addTitle,title:this.addTitle,onClick:this.onAddRow})])])}};function vt(){return{codeHtml:`<a-simple-table
  :columns="columns"
  :rows-footer="rowsFooter"
  :rows="rows"
  key-id="id"
  label="_A_TABLE_FORM_EXAMPLE_LABEL_"
/>
`}}function At(){return{codeJs:`import {
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
};`}}const Et={name:"PageTableFormBasic",components:{AlohaExample:Y,ATableForm:z},setup(){const{codeHtml:e}=vt(),{codeJs:t}=At(),o=[{id:"position",label:"_A_TABLE_FORM_COLUMN_POSITION_",maxWidth:96,minWidth:96,width:96,formElement:{type:"number"}},{id:"name",label:"_A_TABLE_FORM_COLUMN_NAME_",maxWidth:"18rem",minWidth:"12rem",width:"16rem",formElement:{type:"text"}},{id:"team",formElement:{translateData:!0,data:[{label:"_A_TABLE_FORM_TEAM_NORTH_",value:"north"},{label:"_A_TABLE_FORM_TEAM_WEST_",value:"west"},{label:"_A_TABLE_FORM_TEAM_SOUTH_",value:"south"},{label:"_A_TABLE_FORM_TEAM_EAST_",value:"east"}],keyId:"value",keyLabel:"label",type:"select"},label:"_A_TABLE_FORM_COLUMN_TEAM_",minWidth:"12rem"},{id:"score",footerDefaultValue:"68",footerKeyLabel:"score",formElement:{type:"integer"},label:"_A_TABLE_FORM_COLUMN_SCORE_",maxWidth:120,minWidth:120,width:120}],l=y([{id:1,name:"Марта Иванова",position:1,score:18,team:"north"},{id:2,name:"Олег Сидоров",position:2,score:17,team:"west"},{id:3,name:"Анна Петрова",position:3,score:16,team:"south"},{id:4,name:"Игорь Ковалёв",position:4,score:17,team:"east"}]);return{codeHtml:e,codeJs:t,columns:o,rows:l,rowsFooter:[{name:"_A_TABLE_FORM_FOOTER_TOTAL_",score:68}]}}};function Rt(e,t,o,l,i,r){const a=D("a-table-form"),n=D("aloha-example");return G(),J(n,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TABLE_FORM_EXAMPLE_HEADER_"},{default:V(()=>[T(a,{columns:e.columns,"rows-footer":e.rowsFooter,rows:e.rows,"key-id":"id",label:"_A_TABLE_FORM_EXAMPLE_LABEL_"},null,8,["columns","rows-footer","rows"])]),_:1},8,["code-html","code-js"])}const pt=j(Et,[["render",Rt]]);function yt(){return{codeHtml:`<a-simple-table
  :columns="columns"
  :is-drag-and-drop="true"
  :rows-footer="rowsFooter"
  :rows="rows"
  key-id="id"
  label="_A_TABLE_FORM_EXAMPLE_LABEL_"
  @update-rows="updateRows"
/>
`}}function gt(){return{codeJs:`import {
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
};`}}const Ct={name:"PageTableFormDND",components:{AlohaExample:Y,ATableForm:z},setup(){const{codeHtml:e}=yt(),{codeJs:t}=gt(),o=[{id:"position",label:"_A_TABLE_FORM_COLUMN_POSITION_",maxWidth:96,minWidth:96,width:96,formElement:{type:"text"}},{id:"name",formElement:{type:"text"},label:"_A_TABLE_FORM_COLUMN_NAME_",maxWidth:"18rem",minWidth:"12rem",width:"16rem"},{id:"team",formElement:{translateData:!0,data:[{label:"_A_TABLE_FORM_TEAM_NORTH_",value:"north"},{label:"_A_TABLE_FORM_TEAM_WEST_",value:"west"},{label:"_A_TABLE_FORM_TEAM_SOUTH_",value:"south"},{label:"_A_TABLE_FORM_TEAM_EAST_",value:"east"}],keyId:"value",keyLabel:"label",type:"select"},label:"_A_TABLE_FORM_COLUMN_TEAM_",minWidth:"12rem"},{id:"score",footerDefaultValue:"68",footerKeyLabel:"score",formElement:{type:"integer"},label:"_A_TABLE_FORM_COLUMN_SCORE_",maxWidth:120,minWidth:120,width:120}],l=y([{id:1,name:"Марта Иванова",position:1,score:18,team:"north"},{id:2,name:"Олег Сидоров",position:2,score:17,team:"west"},{id:3,name:"Анна Петрова",position:3,score:16,team:"south"},{id:4,name:"Игорь Ковалёв",position:4,score:17,team:"east"}]);return{codeHtml:e,codeJs:t,columns:o,rows:l,rowsFooter:[{name:"_A_TABLE_FORM_FOOTER_TOTAL_",score:68}],updateRows:({rows:a,trigger:n})=>{l.value=a,console.log("trigger",n)}}}};function Dt(e,t,o,l,i,r){const a=D("a-table-form"),n=D("aloha-example");return G(),J(n,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TABLE_FORM_DND_HEADER_",description:"_A_TABLE_FORM_DND_DESCRIPTION_",props:"is-drag-and-drop"},{default:V(()=>[T(a,{columns:e.columns,"is-drag-and-drop":!0,"rows-footer":e.rowsFooter,rows:e.rows,"key-id":"id",label:"_A_TABLE_FORM_EXAMPLE_LABEL_",onUpdateRows:e.updateRows},null,8,["columns","rows-footer","rows","onUpdateRows"])]),_:1},8,["code-html","code-js"])}const Tt=j(Ct,[["render",Dt]]);function Mt(){return{codeHtml:`<a-checkbox>
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
`}}function Ot(){return{codeJs:`import {
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
};`}}const Lt={name:"PageTableFormEdit",components:{ACheckbox:oe,AlohaExample:Y,ATableForm:z},setup(){const{codeHtml:e}=Mt(),{codeJs:t}=Ot(),o=[{label:"is-deletable-confirm",value:"is-deletable-confirm"},{label:"is-deletable",value:"is-deletable"},{label:"is-editable",value:"is-editable"},{label:"is-addable",value:"is-addable"}],l=y(["is-deletable-confirm","is-deletable","is-editable","is-addable"]),i={actionEditCancel:"abbrechen",actionEditSave:"speichern",editInfoText:"Nur diese Zeile ist gerade im Bearbeitungsmodus."},r=[{id:"position",label:"_A_TABLE_FORM_COLUMN_POSITION_",maxWidth:96,minWidth:96,width:96,formElement:{controlsType:"none",type:"integer"}},{id:"name",formElement:{type:"text",required:!0},keyLabel:"name",label:"_A_TABLE_FORM_COLUMN_NAME_",maxWidth:"18rem",minWidth:"12rem",width:"16rem"},{id:"team",formElement:{data:[{label:"_A_TABLE_FORM_TEAM_NORTH_",value:"north"},{label:"_A_TABLE_FORM_TEAM_WEST_",value:"west"},{label:"_A_TABLE_FORM_TEAM_SOUTH_",value:"south"},{label:"_A_TABLE_FORM_TEAM_EAST_",value:"east"}],keyId:"value",keyLabel:"label",translateData:!0,type:"select"},label:"_A_TABLE_FORM_COLUMN_TEAM_",minWidth:"12rem"},{id:"score",footerDefaultValue:"68",footerKeyLabel:"score",formElement:{controlsType:"none",min:0,type:"integer"},label:"_A_TABLE_FORM_COLUMN_SCORE_",maxWidth:120,minWidth:120,width:120}],a=y([{id:1,name:"Marta Ivanova",position:1,score:18,team:"north"},{id:2,name:"Oleg Sidorov",position:2,score:17,team:"west"},{id:3,name:"Anna Petrova",position:3,score:16,team:"south"},{id:4,name:"Igor Kovalev",position:4,score:17,team:"east"}]);return{addRow:({model:f})=>{var v;console.log("model ",f);const b={};if((v=f.name)!=null&&v.trim()||(b.name=["Name ist erforderlich."]),f.team||(b.team=["Team ist erforderlich."]),f.score<18&&(b.score=["Score must be at least 18."]),Object.keys(b).length)return{errors:b};a.value.push({id:a.value.length+1,...f})},codeHtml:e,codeJs:t,columns:r,dataCheckbox:o,deleteRow:({row:f,rowIndex:b})=>{a.value.splice(b,1),console.log("row",f),console.log("rowIndex",b)},modelCheckbox:l,rows:a,rowsFooter:[{name:"_A_TABLE_FORM_FOOTER_TOTAL_",score:68}],saveRow:async({model:f,rowIndex:b})=>{var p;await new Promise(M=>{setTimeout(M,300)});const v={};if((p=f.name)!=null&&p.trim()||(v.name=["Name ist erforderlich."]),f.team||(v.team=["Team ist erforderlich."]),f.score<18&&(v.score=["Score must be at least 18."]),Object.keys(v).length)return{errors:v};a.value.splice(b,1,f)},texts:i}}};function Ft(e,t,o,l,i,r){const a=D("a-checkbox"),n=D("a-table-form"),d=D("aloha-example");return G(),J(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TABLE_FORM_EDIT_HEADER_",description:"_A_TABLE_FORM_EDIT_DESCRIPTION_",props:["is-addable","is-deletable","is-deletable-confirm","is-editable","save-row","texts"]},{default:V(()=>[T(a,{class:"a_mb_4",modelValue:e.modelCheckbox,"onUpdate:modelValue":t[0]||(t[0]=c=>e.modelCheckbox=c),data:e.dataCheckbox,"translate-data":!0,"key-id":"value","key-label":"label"},null,8,["modelValue","data"]),T(n,{"add-row":e.addRow,columns:e.columns,"is-addable":e.modelCheckbox.includes("is-addable"),"is-deletable-confirm":e.modelCheckbox.includes("is-deletable-confirm"),"is-deletable":e.modelCheckbox.includes("is-deletable"),"is-editable":e.modelCheckbox.includes("is-editable"),"rows-footer":e.rowsFooter,rows:e.rows,"save-row":e.saveRow,texts:e.texts,"key-id":"id",label:"_A_TABLE_FORM_EXAMPLE_LABEL_",onDeleteRow:e.deleteRow},null,8,["add-row","columns","is-addable","is-deletable-confirm","is-deletable","is-editable","rows-footer","rows","save-row","texts","onDeleteRow"])]),_:1},8,["code-html","code-js"])}const xt=j(Lt,[["render",Ft]]);function kt(){return{codeHtml:`<a-checkbox
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
`}}function It(){return{codeJs:`import {
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
};`}}const St={name:"PageTableFormGrow",components:{ACheckbox:oe,AlohaExample:Y,ATableForm:z},setup(){const{codeHtml:e}=kt(),{codeJs:t}=It(),o=[{label:"is-deletable",value:"is-deletable"},{label:"is-editable",value:"is-editable"},{label:"is-drag-and-drop",value:"is-drag-and-drop"}],l=y(["is-deletable","is-editable"]),i=[{id:"position",label:"_A_TABLE_FORM_COLUMN_POSITION_",minWidth:96,width:96,grow:1,formElement:{controlsType:"none",type:"integer"}},{id:"name",formElement:{type:"text"},label:"_A_TABLE_FORM_COLUMN_NAME_",minWidth:"12rem",width:"16rem",grow:2},{id:"team",formElement:{data:[{label:"_A_TABLE_FORM_TEAM_NORTH_",value:"north"},{label:"_A_TABLE_FORM_TEAM_WEST_",value:"west"},{label:"_A_TABLE_FORM_TEAM_SOUTH_",value:"south"},{label:"_A_TABLE_FORM_TEAM_EAST_",value:"east"}],keyId:"value",keyLabel:"label",translateData:!0,type:"select"},label:"_A_TABLE_FORM_COLUMN_TEAM_",minWidth:"12rem",width:"12rem",grow:1},{id:"score",footerDefaultValue:"68",footerKeyLabel:"score",formElement:{controlsType:"none",min:0,type:"integer"},label:"_A_TABLE_FORM_COLUMN_SCORE_",minWidth:120,width:120,grow:1}],r=[{id:"position",label:"_A_TABLE_FORM_COLUMN_POSITION_",minWidth:96,width:96,grow:1,formElement:{controlsType:"none",type:"integer"}},{id:"name",formElement:{type:"text"},label:"_A_TABLE_FORM_COLUMN_NAME_",minWidth:"12rem",width:"16rem",grow:3}],a=y([{id:1,name:"Marta Ivanova",position:1,score:18,team:"north"},{id:2,name:"Oleg Sidorov",position:2,score:17,team:"west"},{id:3,name:"Anna Petrova",position:3,score:16,team:"south"},{id:4,name:"Igor Kovalev",position:4,score:17,team:"east"}]);return{codeHtml:e,codeJs:t,columns1:i,columns2:r,dataCheckbox:o,deleteRow:({rowIndex:f})=>{a.value.splice(f,1)},modelCheckbox:l,rows:a,rowsFooter:[{name:"_A_TABLE_FORM_FOOTER_TOTAL_",score:68}],saveRow:({model:f,rowIndex:b})=>{a.value.splice(b,1,f)},texts:{editInfoText:"Only one row can be edited at a time."}}}},Bt={class:"a_mb_4"};function qt(e,t,o,l,i,r){const a=D("a-checkbox"),n=D("a-table-form"),d=D("aloha-example");return G(),J(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TABLE_FORM_GROW_HEADER_",description:"_A_TABLE_FORM_GROW_DESCRIPTION_",props:["is-columns-grow","is-deletable","is-drag-and-drop","is-editable"]},{default:V(()=>[T(a,{class:"a_mb_4",modelValue:e.modelCheckbox,"onUpdate:modelValue":t[0]||(t[0]=c=>e.modelCheckbox=c),data:e.dataCheckbox,"key-id":"value","key-label":"label"},null,8,["modelValue","data"]),ke("div",Bt,[T(n,{columns:e.columns1,"is-columns-grow":!0,"is-deletable":e.modelCheckbox.includes("is-deletable"),"is-drag-and-drop":e.modelCheckbox.includes("is-drag-and-drop"),"is-editable":e.modelCheckbox.includes("is-editable"),"rows-footer":e.rowsFooter,rows:e.rows,"save-row":e.saveRow,texts:e.texts,"key-id":"id",label:"_A_TABLE_FORM_EXAMPLE_LABEL_",onDeleteRow:e.deleteRow},null,8,["columns","is-deletable","is-drag-and-drop","is-editable","rows-footer","rows","save-row","texts","onDeleteRow"])]),T(n,{columns:e.columns2,"is-columns-grow":!0,"is-deletable":e.modelCheckbox.includes("is-deletable"),"is-drag-and-drop":e.modelCheckbox.includes("is-drag-and-drop"),"is-editable":e.modelCheckbox.includes("is-editable"),"rows-footer":e.rowsFooter,rows:e.rows,"save-row":e.saveRow,texts:e.texts,"key-id":"id",label:"_A_TABLE_FORM_EXAMPLE_LABEL_",onDeleteRow:e.deleteRow},null,8,["columns","is-deletable","is-drag-and-drop","is-editable","rows-footer","rows","save-row","texts","onDeleteRow"])]),_:1},8,["code-html","code-js"])}const Nt=j(St,[["render",qt]]);function Pt(){return{codeHtml:`<a-one-checkbox
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
`}}function Ht(){return{codeJs:`import {
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
};`}}const Ut={name:"PageTableFormSticky",components:{AlohaExample:Y,AOneCheckbox:Ae,ATableForm:z},setup(){const{codeHtml:e}=Pt(),{codeJs:t}=Ht(),o=y(!0),l=Array.from({length:20},(r,a)=>{const n=a+1;return{id:`c${n}`,label:`${n}`,maxWidth:120,minWidth:120,width:120,formElement:{controlsType:"none",type:"integer"}}}),i=y(Array.from({length:6},(r,a)=>{const n={id:a+1};return l.forEach((d,c)=>{n[d.id]=(a+1)*100+c+1}),n}));return{codeHtml:e,codeJs:t,columns:l,isActionsSticky:o,rows:i}}};function $t(e,t,o,l,i,r){const a=D("a-one-checkbox"),n=D("a-table-form"),d=D("aloha-example");return G(),J(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TABLE_FORM_STICKY_HEADER_",description:"_A_TABLE_FORM_STICKY_DESCRIPTION_",props:["is-actions-sticky","is-deletable-confirm","is-editable"]},{default:V(()=>[T(a,{class:"a_mb_4",modelValue:e.isActionsSticky,"onUpdate:modelValue":t[0]||(t[0]=c=>e.isActionsSticky=c),label:"isActionsSticky"},null,8,["modelValue"]),T(n,{columns:e.columns,"is-actions-sticky":e.isActionsSticky,"is-deletable-confirm":!0,"is-editable":!0,rows:e.rows,"key-id":"id",label:"20 columns"},null,8,["columns","is-actions-sticky","rows"])]),_:1},8,["code-html","code-js"])}const Wt=j(Ut,[["render",$t]]);function jt(){return{pageTitle:m(()=>Ee({placeholder:"_A_TABLE_FORM_PAGE_TITLE_"}))}}const Gt={name:"PageTableForm",components:{AlohaPage:ue,PageTableFormBasic:pt,PageTableFormDND:Tt,PageTableFormEdit:xt,PageTableFormGrow:Nt,PageTableFormSticky:Wt},setup(){const{pageTitle:e}=jt();return{pageTitle:e}}};function Jt(e,t,o,l,i,r){const a=D("page-table-form-basic"),n=D("page-table-form-d-n-d"),d=D("page-table-form-edit"),c=D("page-table-form-sticky"),E=D("page-table-form-grow"),f=D("aloha-page");return G(),J(f,{"page-title":e.pageTitle},{body:V(()=>[T(a),T(n),T(d),T(c),T(E)]),_:1},8,["page-title"])}const ro=j(Gt,[["render",Jt]]);export{ro as default};
