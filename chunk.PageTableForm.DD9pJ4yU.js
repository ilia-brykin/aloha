import{A as Y,a as ce}from"./chunk.AlohaExample.o4KwhrWv.js";import{d as ue,s as te,A as W,c as U,b as _e,f as me,e as he,h as fe,i as be,j as we,_ as j,k as oe,l as ve,g as Ae}from"./bundle.index.BKc4tVNY.js";import{t as s,d as m,h as _,M as Q,l as Ee,aX as Re,L as pe,O as ye,C as ge,aY as De,g as Ce,r as y,j as Te,P as Me,E as Oe,z as Le,o as Fe,Y as G,W as J,aU as V,f as D,$ as M,_ as xe}from"./chunk.vendor.BAXy2grE.js";import{i as ke,j as B,r as S,l as $,M as Ie,T as Be,v as Se,h as qe,W as Ne,a as ae,d as Pe,b as He,u as Ue}from"./chunk.vendor-lodash.CCzoES9g.js";import{A as $e}from"./chunk.AFormElement.C_u1Cy1Q.js";import"./chunk.APageTabTitle.CjI9Ghzt.js";import"./chunk.AlohaHighlightjs.BK8yZFUI.js";import"./chunk.translations-ar.CE_3yjUF.js";import"./chunk.translations-de.R0YWY91X.js";import"./chunk.translations-en.DQ0Z316F.js";import"./chunk.translations-es.XN0jVhL-.js";import"./chunk.translations-fr.D5Z6d0-l.js";import"./chunk.translations-hr.BRYjTgZh.js";import"./chunk.translations-it.D6SsMt4V.js";import"./chunk.translations-ru.BfK09XlZ.js";function We(e){const t=s(e,"column"),o=s(e,"isEditable"),l=s(e,"isEditMode");return{disabledLocal:m(()=>{var r,a;return!!((a=(r=t.value)==null?void 0:r.formElement)!=null&&a.disabled)||o.value&&!l.value})}}function je(e){const t=s(e,"column"),o=s(e,"isEditable"),l=s(e,"isEditMode"),i=s(e,"isFooter");return{readonlyLocal:m(()=>{var a,n,d,c;return i.value?!0:o.value?(n=(a=t.value)==null?void 0:a.formElement)!=null&&n.useRowReadonly?!l.value:!!((c=(d=t.value)==null?void 0:d.formElement)!=null&&c.readonly):!0})}}function Ge(e){const t=s(e,"column"),o=s(e,"isFooter"),l=m(()=>o.value?t.value.footerSlot:t.value.slot),i=m(()=>o.value?t.value.footerSlotAfter:t.value.slotAfter),r=m(()=>!!l.value),a=m(()=>!!i.value);return{hasSlot:r,hasSlotAfter:a,slotName:l,slotNameAfter:i}}function ee(e){if(!(e==null||e===""))return typeof e=="number"?`${e}px`:e}function se(e){const t=s(e,"column");return{columnStyles:m(()=>{const l={},i=ee(t.value.width),r=ee(t.value.maxWidth),a=ee(t.value.minWidth);return i&&(l.width=i),r&&(l.maxWidth=r),a&&(l.minWidth=a),ke(t.value.style)?{...l,...t.value.style}:t.value.style?[l,t.value.style]:l})}}const Je={name:"ATableFormCell",props:{column:{type:Object,required:!0},columnIndex:{type:Number,required:!0},columnStyle:{type:Object,required:!1,default:void 0},errorIcon:{type:String,required:!1,default:void 0},errors:{type:Object,required:!1,default:()=>({})},id:{type:String,required:!0},isEditMode:{type:Boolean,required:!1,default:!1},isEditable:{type:Boolean,required:!1,default:!1},isFooter:{type:Boolean,required:!1,default:!1},row:{type:Object,required:!0},rowData:{type:Object,required:!1,default:void 0},rowIndex:{type:Number,required:!0},rows:{type:Array,required:!0},tag:{type:String,required:!1,default:"td"}},emits:["updateRowData"],setup(e){const{columnStyles:t}=se({column:e.column}),{readonlyLocal:o}=je(e),{disabledLocal:l}=We(e),{hasSlot:i,hasSlotAfter:r,slotName:a,slotNameAfter:n}=Ge(e),d=m(()=>e.rowData||e.row);return{columnStyles:t,disabledLocal:l,hasSlot:i,hasSlotAfter:r,readonlyLocal:o,rowDataLocal:d,slotName:a,slotNameAfter:n}},methods:{updateRowData({item:e,model:t}){this.$emit("updateRowData",{column:this.column,columnId:this.column.id,item:e,model:t,value:t})}},render(){const{type:e="text",...t}=this.column.formElement||{},o={column:this.column,columnIndex:this.columnIndex,row:this.row,rowIndex:this.rowIndex,rows:this.rows};return _(this.tag,{class:["a_table_form__cell",`a_table_form__cell_${this.tag}`,this.column.class,this.isFooter?this.column.classFooter:this.column.classRow],style:[this.columnStyles,this.columnStyle]},[this.hasSlot&&this.$slots[this.slotName]?this.$slots[this.slotName](o):_($e,{id:this.column.id,errorIcon:this.errorIcon,idPrefix:this.id,...t,change:this.updateRowData,disabled:this.disabledLocal,errors:B(this.errors,this.column.id),errorsClass:"a_sr_only",modelValue:B(this.rowDataLocal,this.column.id),readonly:this.readonlyLocal,type:e}),this.hasSlotAfter&&this.$slots[this.slotNameAfter]?this.$slots[this.slotNameAfter](o):null])}};function Ve(e,{isActionsDisabled:t=m(()=>!1)}){const o=s(e,"id"),l=s(e,"isDeletable"),i=s(e,"isDeletableConfirm"),r=s(e,"onDeleteRow"),a=s(e,"row"),n=s(e,"rowIndex"),d=s(e,"texts"),{closeConfirm:c,openConfirm:E}=ue(),f=m(()=>`${o.value}_delete`),b=()=>{c(),Q().then(()=>{te({selector:`#${f.value}`})})},v=()=>{E({bodyHtml:d.value.actionDeleteConfirmBody,closeButtonText:d.value.actionDeleteConfirmClose,headerText:d.value.actionDeleteConfirmHeader,save:async()=>{await r.value({row:a.value,rowIndex:n.value}),c()},close:b,saveButtonText:d.value.actionDeleteConfirmSave})};return{idBtnDelete:f,onDeleteClick:()=>{if(!t.value){if(i.value){v();return}l.value&&r.value({row:a.value,rowIndex:n.value})}}}}function Ke(e){const t=s(e,"actionsDisabledCallback"),o=s(e,"hasActiveEditRow"),l=s(e,"isActiveEditMode"),i=s(e,"row"),r=s(e,"rowIndex"),a=m(()=>o.value&&!l.value),n=m(()=>{if(a.value)return!0;const c=B(t.value,"delete");return S(c)?c({row:i.value,rowIndex:r.value}):!1}),d=m(()=>{if(a.value)return!0;const c=B(t.value,"edit");return S(c)?c({row:i.value,rowIndex:r.value}):!1});return{isDeleteDisabled:n,isEditDisabled:d}}function Xe(e){const t=s(e,"actionsHideCallback"),o=s(e,"row"),l=s(e,"rowIndex"),i=m(()=>{const a=B(t.value,"delete");return S(a)?a({row:o.value,rowIndex:l.value}):!1}),r=m(()=>{const a=B(t.value,"edit");return S(a)?a({row:o.value,rowIndex:l.value}):!1});return{isDeleteHidden:i,isEditHidden:r}}function Ye(e){const t=s(e,"isDeletable"),o=s(e,"isDeletableConfirm"),l=s(e,"isEditable"),i=s(e,"isActiveEditMode"),r=s(e,"widths");return{columnStyles:m(()=>{const n=t.value||o.value,d=l.value||i.value&&n?r.value.actionsColumnDouble:r.value.actionsColumnSingle;return{maxWidth:`${d}px`,minWidth:`${d}px`,width:`${d}px`}})}}function ze(e){const t=s(e,"row"),o=s(e,"rowIndex"),l=s(e,"texts"),i=s(e,"actionsTitleCallback"),r=m(()=>{const n=B(i.value,"delete");return S(n)?n({row:t.value,rowIndex:o.value}):l.value.actionDelete}),a=m(()=>{const n=B(i.value,"edit");return S(n)?n({row:t.value,rowIndex:o.value}):l.value.actionEdit});return{deleteTitle:r,editTitle:a}}const Ze={name:"ATableFormCellAction",props:{hasActiveEditRow:{type:Boolean,required:!1,default:!1},actionsDisabledCallback:{type:Object,required:!1,default:()=>({})},actionsHideCallback:{type:Object,required:!1,default:()=>({})},actionsTitleCallback:{type:Object,required:!1,default:()=>({})},id:{type:String,required:!0},isActiveEditMode:{type:Boolean,required:!1,default:!1},isActionsSticky:{type:Boolean,required:!1,default:!1},isDeletable:{type:Boolean,required:!1,default:!1},isDeletableConfirm:{type:Boolean,required:!1,default:!1},isEditable:{type:Boolean,required:!1,default:!1},isFooter:{type:Boolean,required:!1,default:!1},isHeader:{type:Boolean,required:!1,default:!1},isSaving:{type:Boolean,required:!1,default:!1},onCancelEditRow:{type:Function,required:!0},onDeleteRow:{type:Function,required:!0},onEditRow:{type:Function,required:!0},onSaveEditRow:{type:Function,required:!0},row:{type:Object,required:!0},rowIndex:{type:Number,required:!0},texts:{type:Object,required:!1,default:()=>({})},widths:{type:Object,required:!1,default:()=>({})}},setup(e){const{isDeleteDisabled:t,isEditDisabled:o}=Ke(e),{isDeleteHidden:l,isEditHidden:i}=Xe(e),{idBtnDelete:r,onDeleteClick:a}=Ve(e,{isActionsDisabled:t}),{columnStyles:n}=Ye(e),{deleteTitle:d,editTitle:c}=ze(e);return{columnStyles:n,deleteTitle:d,editTitle:c,idBtnDelete:r,isDeleteDisabled:t,isDeleteHidden:l,isEditDisabled:o,isEditHidden:i,onDeleteClick:a}},render(){const e=this.isHeader?"th":"td";return _(e,{class:["a_table_form__cell",`a_table_form__cell_${e}`,"a_table_form__cell_actions",{a_table_form__cell_actions_sticky:this.isActionsSticky}],style:this.columnStyles},[this.isHeader?_("span",{class:"a_sr_only"},[_(W,{tag:"span",text:this.texts.actionsColumn})]):this.isFooter?null:_("div",{class:"a_table_form__actions",role:"group"},this.isActiveEditMode?[_(U,{class:"a_btn a_btn_transparent_primary a_table_form__action_button",disabled:this.isSaving,iconLeft:Ee,title:this.texts.actionEditCancel,textScreenReader:this.texts.actionEditCancel,onClick:()=>this.onCancelEditRow({row:this.row,rowIndex:this.rowIndex})}),_(U,{class:"a_btn a_btn_transparent_primary a_table_form__action_button",disabled:this.isSaving,iconLeft:Re,title:this.texts.actionEditSave,textScreenReader:this.texts.actionEditSave,onClick:()=>this.onSaveEditRow({row:this.row,rowIndex:this.rowIndex})})]:[(this.isDeletable||this.isDeletableConfirm)&&!this.isDeleteHidden&&_(U,{id:this.idBtnDelete,class:"a_btn a_btn_transparent_danger a_table_form__action_button",disabled:this.isDeleteDisabled,iconLeft:pe,title:this.deleteTitle,textScreenReader:this.deleteTitle,onClick:this.onDeleteClick}),this.isEditable&&!this.isEditHidden&&_(U,{class:"a_btn a_btn_transparent_primary a_table_form__action_button",disabled:this.isEditDisabled,iconLeft:ye,title:this.editTitle,textScreenReader:this.editTitle,onClick:()=>this.onEditRow({row:this.row,rowIndex:this.rowIndex})})])])}};function Qe(e){const t=s(e,"id"),o=m(()=>`${t.value}_up`);return{idBtnDown:m(()=>`${t.value}_down`),idBtnUp:o}}const et={name:"ATableFormCellDnd",props:{canMoveRowDown:{type:Function,required:!0},canMoveRowUp:{type:Function,required:!0},id:{type:String,required:!0},isCreateMode:{type:Boolean,required:!1,default:!1},isDragAndDrop:{type:Boolean,required:!1,default:!1},isDndDisabled:{type:Boolean,required:!1,default:!1},isFooter:{type:Boolean,required:!1,default:!1},isHeader:{type:Boolean,required:!1,default:!1},moveRowDown:{type:Function,required:!0},moveRowUp:{type:Function,required:!0},onDragend:{type:Function,required:!0},onDragstart:{type:Function,required:!0},rowIndex:{type:Number,required:!0},texts:{type:Object,required:!1,default:()=>({})},widths:{type:Object,required:!1,default:()=>({})}},setup(e){const{idBtnDown:t,idBtnUp:o}=Qe(e);return{columnStyles:m(()=>({maxWidth:`${e.widths.dndColumn}px`,minWidth:`${e.widths.dndColumn}px`,width:`${e.widths.dndColumn}px`})),idBtnDown:t,idBtnUp:o}},render(){const e=this.isHeader?"th":"td",t=this.isDragAndDrop&&!this.isDndDisabled;return _(e,{class:["a_table_form__cell",`a_table_form__cell_${e}`,"a_table_form__cell_reorder"],style:this.columnStyles},[this.isHeader?_("span",{class:"a_sr_only"},[_(W,{tag:"span",text:this.texts.reorderColumn})]):this.isCreateMode||this.isFooter?null:_("div",{class:"a_table_form__reorder_actions"},[this.canMoveRowUp(this.rowIndex)&&_(U,{id:this.idBtnUp,class:"a_sr_only_focusable a_btn a_btn_transparent_dark a_table_form__reorder_button",disabled:this.isDndDisabled,iconLeft:ge,tabindex:this.isDndDisabled?-1:void 0,title:this.texts.reorderUp,textScreenReader:this.texts.reorderUp,onClick:()=>this.moveRowUp(this.rowIndex)}),_("span",{ariaHidden:!0,class:"a_table_form__reorder_handle",draggable:t,onDragend:t?this.onDragend:void 0,onDragstart:t?o=>this.onDragstart(o,this.rowIndex):void 0},[_(_e,{class:"a_table_form__reorder_icon",icon:De})]),_("span",{class:"a_sr_only"},[_(W,{tag:"span",text:this.texts.reorderHandle})]),this.canMoveRowDown(this.rowIndex)&&_(U,{id:this.idBtnDown,class:"a_sr_only_focusable a_btn a_btn_transparent_dark a_table_form__reorder_button",disabled:this.isDndDisabled,iconLeft:Ce,tabindex:this.isDndDisabled?-1:void 0,title:this.texts.reorderDown,textScreenReader:this.texts.reorderDown,onClick:()=>this.moveRowDown(this.rowIndex)})])])}},tt={name:"ATableFormTh",props:{column:{type:Object,required:!0},columnStyle:{type:Object,required:!1,default:void 0},isEditable:{type:Boolean,required:!1,default:!1}},setup(e){const{columnStyles:t}=se({column:e.column});return{columnStyles:t}},render(){var e;return this.column.slotHeader,this.column,this.isEditable,_("th",{class:["a_table_form__cell","a_table_form__cell_th",this.column.class],style:[this.columnStyles,this.columnStyle]},[this.column.slotHeader&&this.$slots[this.column.slotHeader]?this.$slots[this.column.slotHeader]({column:this.column,isEditable:this.isEditable}):this.column.label&&_(W,{html:this.column.label,tag:"span"}),this.isEditable&&((e=this.column.formElement)==null?void 0:e.required)&&_("span",{class:"a_label__required"},"*")])}};function ot(e,{hasErrors:t=m(()=>!1)}){const o=s(e,"hasActiveEditRow"),l=s(e,"isActiveEditMode"),i=s(e,"isCreateMode"),r=s(e,"isFooter"),a=s(e,"isHeader"),n=s(e,"row"),d=s(e,"rowClass"),c=s(e,"rowIndex"),E=s(e,"trClass"),f=m(()=>S(d.value)?d.value({row:n.value,rowIndex:c.value,rowindex:c.value,isCreateMode:i.value,isFooter:r.value,isHeader:a.value}):d.value),b=m(()=>[E.value,f.value,{a_table_form__row_active:!a.value&&!r.value&&l.value,a_table_form__row_errors:!a.value&&!r.value&&t.value,a_table_form__row_inactive:!a.value&&!r.value&&o.value&&!l.value}]);return{rowClassLocal:f,trClassLocal:b}}function at(e,{errorsLocal:t=y(void 0)}){const o=s(e,"changeModel"),l=s(e,"onCancelEditRow"),i=s(e,"row"),r=s(e,"rows"),a=s(e,"rowIndex"),n=s(e,"saveRow"),d=y(!1),c=y(void 0),E=({column:v,columnId:p,item:O,model:N})=>{c.value||(c.value=$(i.value)||{});let x;o.value&&(x=o.value({modelAll:c.value,row:i.value,column:v,model:N,item:O})),x!=null&&x.model?c.value=$(x.model):Ie(c.value,p,N),Be(t.value,p)},f=()=>{l.value({row:i.value,rowIndex:a.value})};return{cancelEditRow:f,isSaving:d,modelLocal:c,saveEditRow:async()=>{if(!d.value){t.value={},d.value=!0;try{const v=await n.value({model:$(c.value),row:i.value,rowIndex:a.value,rows:r.value});if(v!=null&&v.errors){t.value=$(v.errors);return}f()}catch(v){t.value=v}finally{d.value=!1}}},updateModelLocal:E}}function st(e){const t=s(e,"columns"),o=y({}),l=m(()=>!Se(o.value)),i=m(()=>{const r=[];return qe(t.value,a=>{const n=$(a.formElement)||{};n.type=n.type||"text",n.label=n.label||a.label,n.id=n.id||a.id,r.push(n)}),r});return{errorsLocal:o,hasErrors:l,optionsListForErrors:i}}function lt({idTr:e=m(()=>"")}){return{focusFirstEditableElement:()=>{const o=document.getElementById(e.value);if(!o)return;const i=Array.from(o.querySelectorAll(".a_table_form__cell:not(.a_table_form__cell_actions)")).map(r=>r.querySelector(me)).find(Boolean);i==null||i.focus()}}}function it(e){const t=s(e,"id"),o=s(e,"isHeader"),l=s(e,"isFooter"),i=s(e,"rowIndex");return{idTr:m(()=>`${t.value}_${i.value}${o.value?"_header":""}${l.value?"_footer":""}`)}}const Z={name:"ATableFormRow",props:{allColumnsLength:{type:Number,required:!0},canMoveRowDown:{type:Function,required:!0},canMoveRowUp:{type:Function,required:!0},cellTag:{type:String,required:!1,default:void 0},changeModel:{type:Function,required:!1,default:void 0},columns:{type:Array,required:!0},columnsStylesGrow:{type:Object,required:!1,default:()=>({})},actionsDisabledCallback:{type:Object,required:!1,default:()=>({})},actionsHideCallback:{type:Object,required:!1,default:()=>({})},actionsTitleCallback:{type:Object,required:!1,default:()=>({})},draggedRowIndex:{type:Number,required:!1,default:void 0},editModel:{type:Object,required:!1,default:void 0},errorIcon:{type:String,required:!1,default:void 0},hasActionsColumn:{type:Boolean,required:!1,default:!1},hasActiveEditRow:{type:Boolean,required:!1,default:!1},id:{type:String,required:!0},isActiveEditMode:{type:Boolean,required:!1,default:!1},isActionsSticky:{type:Boolean,required:!1,default:!1},isCreateMode:{type:Boolean,required:!1,default:!1},isDeletable:{type:Boolean,required:!1,default:!1},isDeletableConfirm:{type:Boolean,required:!1,default:!1},isDndDisabled:{type:Boolean,required:!1,default:!1},isDragAndDrop:{type:Boolean,required:!1,default:!1},isEditable:{type:Boolean,required:!1,default:!1},isFooter:{type:Boolean,required:!1,default:!1},isHeader:{type:Boolean,required:!1,default:!1},moveRowDown:{type:Function,required:!0},moveRowUp:{type:Function,required:!0},onCancelEditRow:{type:Function,required:!0},onDeleteRow:{type:Function,required:!0},onDragend:{type:Function,required:!0},onDragleave:{type:Function,required:!1,default:void 0},onDragover:{type:Function,required:!1,default:void 0},onDragstart:{type:Function,required:!0},onDrop:{type:Function,required:!1,default:void 0},onEditRow:{type:Function,required:!0},row:{type:Object,required:!0},rowClass:{type:[String,Object,Array,Function],required:!1,default:void 0},rowIndex:{type:Number,required:!0},rows:{type:Array,required:!0},saveRow:{type:Function,required:!0},texts:{type:Object,required:!1,default:()=>({})},trClass:{type:[String,Object,Array],required:!1,default:void 0},widths:{type:Object,required:!1,default:()=>({})}},setup(e){const{idTr:t}=it(e),{focusFirstEditableElement:o}=lt({idTr:t}),{errorsLocal:l,hasErrors:i,optionsListForErrors:r}=st(e),{rowClassLocal:a,trClassLocal:n}=ot(e,{hasErrors:i}),{cancelEditRow:d,isSaving:c,modelLocal:E,saveEditRow:f,updateModelLocal:b}=at(e,{errorsLocal:l});return{cancelEditRow:d,errorsLocal:l,focusFirstEditableElement:o,hasErrors:i,rowClassLocal:a,idTr:t,isSaving:c,modelLocal:E,optionsListForErrors:r,saveEditRow:f,trClassLocal:n,updateModelLocal:b}},computed:{currentRowData(){return this.isActiveEditMode&&this.modelLocal?this.modelLocal:this.row}},watch:{isActiveEditMode:{immediate:!0,handler(e){if(e){this.modelLocal=$(this.editModel===void 0?this.row:this.editModel),this.errorsLocal={},Q(()=>{this.focusFirstEditableElement()});return}this.errorsLocal={},this.isSaving=!1}}},render(){const e=[];return this.isActiveEditMode&&this.texts.editInfoText&&e.push(_("tr",{class:"a_table_form__row a_table_form__row_info",key:`info_${this.rowIndex}`},[_("td",{class:"a_table_form__cell a_table_form__cell_info",colspan:this.allColumnsLength},[_(he,{alertClass:"a_table_form__info",html:this.texts.editInfoText,isVisible:!0,type:"info"})])])),e.push(_("tr",{id:this.idTr,"aria-grabbed":!this.isHeader&&!this.isFooter?this.draggedRowIndex===this.rowIndex:void 0,class:this.trClassLocal,key:`main_${this.rowIndex}`,onDragleave:this.onDragleave&&(t=>this.onDragleave(t,this.rowIndex)),onDragover:this.onDragover&&(t=>this.onDragover(t,this.rowIndex)),onDrop:this.onDrop&&(t=>this.onDrop(t,this.rowIndex))},[this.isDragAndDrop?_(et,{id:this.idTr,canMoveRowDown:this.canMoveRowDown,canMoveRowUp:this.canMoveRowUp,isCreateMode:this.isCreateMode,isDndDisabled:this.isDndDisabled,isDragAndDrop:this.isDragAndDrop,isFooter:this.isFooter,isHeader:this.isHeader,moveRowDown:this.moveRowDown,moveRowUp:this.moveRowUp,onDragend:this.onDragend,onDragstart:this.onDragstart,rowIndex:this.rowIndex,texts:this.texts,widths:this.widths}):null,...this.columns.map((t,o)=>this.isHeader?_(tt,{column:t,columnStyle:this.columnsStylesGrow[t.id],isEditable:this.isEditable},this.$slots):_(Je,{id:this.idTr,column:t,columnIndex:o,columnStyle:this.columnsStylesGrow[t.id],errorIcon:this.errorIcon,errors:this.errorsLocal,isEditable:this.isEditable,isEditMode:this.isActiveEditMode,isFooter:this.isFooter,onUpdateRowData:this.updateModelLocal,row:this.row,rowData:this.currentRowData,rowIndex:this.rowIndex,rows:this.rows,tag:this.cellTag},this.$slots)),this.hasActionsColumn?_(Ze,{actionsDisabledCallback:this.actionsDisabledCallback,actionsHideCallback:this.actionsHideCallback,id:this.idTr,hasActiveEditRow:this.hasActiveEditRow,isActiveEditMode:this.isActiveEditMode,isActionsSticky:this.isActionsSticky,isDeletable:this.isDeletable,isDeletableConfirm:this.isDeletableConfirm,isEditable:this.isEditable,isFooter:this.isFooter,isHeader:this.isHeader,isSaving:this.isSaving,onCancelEditRow:this.cancelEditRow,onDeleteRow:this.onDeleteRow,onEditRow:this.onEditRow,onSaveEditRow:this.saveEditRow,row:this.row,rowIndex:this.rowIndex,texts:this.texts,actionsTitleCallback:this.actionsTitleCallback,widths:this.widths}):null])),this.isActiveEditMode&&this.hasErrors&&e.push(_("tr",{class:"a_table_form__row a_table_form__row_errors",key:`errors_${this.rowIndex}`},[_("td",{class:"a_table_form__cell a_table_form__cell_errors",colspan:this.allColumnsLength},[_(fe,{autoFocus:!0,closable:!1,errors:this.errorsLocal,optionsList:this.optionsListForErrors,idPrefix:this.idTr})])])),e}};function nt(e){const t=s(e,"columns"),o=s(e,"isDeletable"),l=s(e,"isDeletableConfirm"),i=s(e,"isDragAndDrop"),r=s(e,"isEditable"),a=m(()=>!!(r.value||o.value||l.value));return{allColumnsLength:m(()=>{var c;let d=((c=t.value)==null?void 0:c.length)||0;return i.value&&(d+=1),a.value&&(d+=1),d}),hasActionsColumn:a}}function rt(e,{hasActionsColumn:t=m(()=>!1),widthsLocal:o=m(()=>({}))}){const l=s(e,"columns"),i=s(e,"id"),r=s(e,"isColumnsGrow"),a=s(e,"isDeletable"),n=s(e,"isDeletableConfirm"),d=s(e,"isDragAndDrop"),c=s(e,"isEditable"),{remPx:E,scalePxWithRem:f}=be(),b=y(void 0),v=y({});let p,O;const N=m(()=>t.value?c.value?o.value.actionsColumnDouble:a.value||n.value?o.value.actionsColumnSingle:0:0),x=m(()=>d.value?o.value.dndColumn:0),T=()=>{var h;return(h=document.getElementById(i.value))==null?void 0:h.parentElement},C=h=>{if(ae(h)||h==="")return 0;if(Pe(h))return+f(h)||0;if(!He(h))return 0;const A=h.trim();return A?A.endsWith("rem")?(parseFloat(A)||0)*E.value:(A.endsWith("px"),parseFloat(A)||0):0},K=h=>{const A=`${h}px`;return{maxWidth:A,minWidth:A,width:A}},u=()=>{if(!r.value||!b.value){v.value={};return}const h=l.value||[],A=b.value-N.value-x.value;if(A<=0){v.value={};return}let L=0,g=0;if(h.forEach(k=>{const P=C(k.width);L+=P,g+=Math.max(0,+k.grow||0)}),L>=A||g<=0){v.value={};return}const I=A-L,H={};h.forEach(k=>{const P=C(k.width),F=Math.max(0,+k.grow||0);if(!k.id||!P)return;const q=P+(F>0?I*F/g:0);H[k.id]=K(q)}),v.value=H},w=()=>{if(!r.value||p)return;const h=T();h&&(O=h,p=new ResizeObserver(Ne(A=>{var g,I;const L=(I=(g=A[0])==null?void 0:g.contentRect)==null?void 0:I.width;L&&(b.value=L,u())},100)),b.value=h.getBoundingClientRect().width,u(),p.observe(h))},R=()=>{p&&(O&&p.unobserve(O),p.disconnect(),p=void 0,O=void 0)};return Te([l,t,a,n,d,c,o],()=>{u()},{deep:!0}),{columnsStylesGrow:v,destroyColumnsGrowObserver:R,initColumnsGrowObserver:w}}function dt(e,{emit:t}){return{onDeleteRow:({row:l,rowIndex:i})=>{t("deleteRow",{row:l,rowIndex:i})}}}function ct(e,{emit:t},{isDndDisabled:o=m(()=>!1)}={}){const l=s(e,"id"),i=s(e,"isDragAndDrop"),r=s(e,"rows"),a=y(void 0),n=y(void 0),d=y(void 0),c=y(void 0),E=()=>{var u;(u=c.value)==null||u.remove(),c.value=void 0},f=u=>{var I,H;const w=(H=(I=u.target)==null?void 0:I.closest)==null?void 0:H.call(I,"tr");if(!w)return;const R=w.getBoundingClientRect(),h=document.createElement("table"),A=document.createElement("tbody"),L=w.cloneNode(!0);h.className="a_table_form__table",h.style.borderCollapse="collapse",h.style.borderSpacing="0",h.style.width=`${R.width}px`,h.style.tableLayout="fixed",Array.from(w.children).forEach((k,P)=>{const F=L.children[P];if(F){const q=window.getComputedStyle(k);F.style.width=`${k.getBoundingClientRect().width}px`,F.style.backgroundColor=q.backgroundColor,F.style.borderTop=q.borderTop,F.style.borderRight=q.borderRight,F.style.borderBottom=q.borderBottom,F.style.borderLeft=q.borderLeft,F.style.color=q.color}}),A.appendChild(L),h.appendChild(A);const g=document.createElement("div");return g.className="a_table_form a_table_form__drag_preview",g.style.position="fixed",g.style.top="-10000px",g.style.left="-10000px",g.style.pointerEvents="none",g.style.zIndex="9999",g.appendChild(h),document.body.appendChild(g),c.value=g,{element:g,offsetX:Math.min(u.offsetX||0,R.width/2),offsetY:Math.min(u.offsetY||0,R.height/2)}},b=({fromIndex:u,toIndex:w,trigger:R})=>{if(!i.value||o.value||u===w||u<0||w<0||u>=r.value.length||w>=r.value.length)return;const h=[...r.value],[A]=h.splice(u,1);h.splice(w,0,A),t("updateRows",{rows:h,trigger:R,fromIndex:u,toIndex:w}),t("moveRow",{fromIndex:u,row:A,toIndex:w})},v=({fromIndex:u,rowIndex:w,position:R="before"})=>{if(!i.value||o.value||u<0||w<0||u>=r.value.length||w>=r.value.length)return;let h=R==="after"?w+1:w;u<h&&(h-=1),b({fromIndex:u,toIndex:h,trigger:"dnd"})},p=u=>{b({fromIndex:u,toIndex:u-1,trigger:"moveRowUp"}),Q().then(()=>{const w=Math.max(1,u-1);te({selector:`#${l.value}_${w}_up`})})},O=u=>{b({fromIndex:u,toIndex:u+1,trigger:"moveRowDown"}),Q().then(()=>{const w=Math.min(r.value.length-2,u+1);te({selector:`#${l.value}_${w}_down`})})},N=(u,w)=>{if(!(!i.value||o.value)){if(u!=null&&u.dataTransfer){u.dataTransfer.effectAllowed="move",u.dataTransfer.setData("text/plain",`${w}`),E();const R=f(u);R&&u.dataTransfer.setDragImage(R.element,R.offsetX,R.offsetY)}a.value=w}},x=(u,w)=>{var h,A;if(!i.value||o.value)return;u.preventDefault();const R=(A=(h=u.currentTarget)==null?void 0:h.getBoundingClientRect)==null?void 0:A.call(h);if(R){const L=R.top+R.height/2;d.value=u.clientY<L?"before":"after"}else d.value="after";n.value=w},T=(u,w)=>{var h,A;if(!i.value||o.value)return;const R=u.relatedTarget;(A=(h=u.currentTarget)==null?void 0:h.contains)!=null&&A.call(h,R)||n.value===w&&(n.value=void 0,d.value=void 0)},C=(u,w)=>{!i.value||o.value||(u.preventDefault(),a.value!==void 0&&(v({fromIndex:a.value,position:d.value||"after",rowIndex:w}),E(),a.value=void 0,n.value=void 0,d.value=void 0))},K=()=>{E(),a.value=void 0,n.value=void 0,d.value=void 0};return{canMoveRowDown:m(()=>u=>u<r.value.length-1),canMoveRowUp:m(()=>u=>u>0),dragOverPosition:d,dragOverRowIndex:n,draggedRowIndex:a,onDragleave:T,moveRowDown:O,moveRowUp:p,onDragend:K,onDragover:x,onDragstart:N,onDrop:C}}function ut(e,{getRowKey:t=()=>{}}){const o=s(e,"addRow"),l=s(e,"columns"),i=s(e,"isAddable"),r=s(e,"isEditable"),a=s(e,"prepareEditModel"),n=s(e,"rows"),d=y(void 0),c=y(void 0),E=y(!1),f=m(()=>!!d.value||E.value),b=m(()=>i.value?S(o.value):!1),v=m(()=>r.value?l.value.some(T=>{var C;return!!((C=T.formElement)!=null&&C.required)}):!1),p=T=>{if(!S(a.value))return;const C=a.value(T);if((C==null?void 0:C.model)!==void 0)return $(C.model)};return{activeEditRowKey:d,activeEditModel:c,canAddRow:b,hasActiveEditRow:f,hasRequiredEditableColumns:v,isAddRowActive:E,onAddRow:()=>{f.value||!b.value||(d.value=void 0,c.value=p({rows:n.value}),E.value=!0)},onCancelEditRow:()=>{d.value=void 0,c.value=void 0,E.value=!1},onEditRow:({row:T,rowIndex:C})=>{E.value||(c.value=p({row:T,rowIndex:C,rows:n.value}),d.value=t({row:T,rowIndex:C}))}}}function _t(e){const t=s(e,"icons");return{iconsLocal:m(()=>({actionAddRow:Me,...t.value}))}}function mt(e){const t=s(e,"keyId"),o=s(e,"rows"),l=s(e,"rowsFooter"),i=m(()=>o.value.length>0),r=m(()=>l.value.length>0);return{getRowKey:({row:n,rowIndex:d,isFooter:c=!1})=>{let E=d;if(t.value){const b=B(n,t.value);ae(b)||(E=b)}return`${c?"footer":"body"}_${E}`},hasRows:i,hasRowsFooter:r}}function ht(e){const t=s(e,"texts");return{textsLocal:m(()=>({actionsColumn:"_A_TABLE_FORM_ACTIONS_",actionAddRow:"_A_TABLE_FORM_ADD_ROW_",actionDelete:"_A_TABLE_FORM_DELETE_",actionDeleteConfirmBody:"_A_TABLE_FORM_DELETE_CONFIRM_BODY_",actionDeleteConfirmClose:"_A_TABLE_FORM_DELETE_CONFIRM_CLOSE_",actionDeleteConfirmHeader:"_A_TABLE_FORM_DELETE_CONFIRM_HEADER_",actionDeleteConfirmSave:"_A_TABLE_FORM_DELETE_CONFIRM_SAVE_",actionEdit:"_A_TABLE_FORM_EDIT_",actionEditCancel:"_A_TABLE_FORM_EDIT_CANCEL_",actionEditSave:"_A_TABLE_FORM_EDIT_SAVE_",editInfoText:void 0,emptyText:"_A_TABLE_FORM_EMPTY_",reorderColumn:"_A_TABLE_FORM_REORDER_COLUMN_",reorderDown:"_A_TABLE_FORM_MOVE_DOWN_",reorderHandle:"_A_TABLE_FORM_REORDER_",reorderUp:"_A_TABLE_FORM_MOVE_UP_",...t.value}))}}function ft(e){const t=s(e,"widths");return{widthsLocal:m(()=>({actionsColumnSingle:56,actionsColumnDouble:112,dndColumn:56,...t.value}))}}const z={name:"ATableForm",props:{actionsDisabledCallback:{type:Object,required:!1,default:()=>({})},actionsHideCallback:{type:Object,required:!1,default:()=>({})},actionsTitleCallback:{type:Object,required:!1,default:()=>({})},addRow:{type:Function,required:!1,default:void 0},columns:{type:Array,required:!0},columnsDefaultValue:{type:[String,Number],required:!1,default:""},changeModel:{type:Function,required:!1,default:void 0},errorIcon:{type:String,required:!1,default:Oe},extra:{type:Object,required:!1,default:void 0},icons:{type:Object,required:!1,default:()=>({})},id:{type:String,required:!1,default:()=>Ue("a_table_form_")},isActionsSticky:{type:Boolean,required:!1,default:!1},isAddable:{type:Boolean,required:!1,default:!1},isColumnsGrow:{type:Boolean,required:!1,default:!1},isDeletable:{type:Boolean,required:!1,default:!1},isDeletableConfirm:{type:Boolean,required:!1,default:!1},isDragAndDrop:{type:Boolean,required:!1,default:!1},isEditable:{type:Boolean,required:!1,default:!1},keyId:{type:String,required:!1,default:void 0},label:{type:[String,Number],required:!1,default:""},labelClass:{type:[String,Object,Array],required:!1,default:void 0},labelTag:{type:String,required:!1,default:"h2"},prepareEditModel:{type:Function,required:!1,default:void 0},rowClass:{type:[String,Object,Array,Function],required:!1,default:void 0},rows:{type:Array,required:!1,default:()=>[]},rowsFooter:{type:Array,required:!1,default:()=>[]},saveRow:{type:Function,required:!1,default:()=>{}},texts:{type:Object,required:!1,default:()=>({})},widths:{type:Object,required:!1,default:()=>({})}},emits:["deleteRow","moveRow","updateRows"],setup(e,t){const o=s(e,"actionsDisabledCallback"),l=s(e,"actionsTitleCallback"),{allColumnsLength:i,hasActionsColumn:r}=nt(e),{getRowKey:a,hasRows:n,hasRowsFooter:d}=mt(e),{textsLocal:c}=ht(e),{widthsLocal:E}=ft(e),{iconsLocal:f}=_t(e),{columnsStylesGrow:b,destroyColumnsGrowObserver:v,initColumnsGrowObserver:p}=rt(e,{hasActionsColumn:r,widthsLocal:E});Le(()=>{p()}),Fe(()=>{v()});const{activeEditRowKey:O,activeEditModel:N,canAddRow:x,hasActiveEditRow:T,hasRequiredEditableColumns:C,isAddRowActive:K,onAddRow:u,onCancelEditRow:w,onEditRow:R}=ut(e,{getRowKey:a}),{canMoveRowDown:h,canMoveRowUp:A,dragOverPosition:L,dragOverRowIndex:g,draggedRowIndex:I,moveRowDown:H,moveRowUp:k,onDragend:P,onDragleave:F,onDragover:q,onDragstart:le,onDrop:ie}=ct(e,t,{isDndDisabled:T}),{onDeleteRow:ne}=dt(e,t),re=m(()=>{if(T.value)return!0;const X=B(o.value,"add");return S(X)?X():!1}),de=m(()=>{const X=B(l.value,"add");return S(X)?X():c.value.actionAddRow});return{activeEditRowKey:O,activeEditModel:N,allColumnsLength:i,addTitle:de,canAddRow:x,canMoveRowDown:h,canMoveRowUp:A,columnsStylesGrow:b,draggedRowIndex:I,dragOverPosition:L,dragOverRowIndex:g,getRowKey:a,hasActionsColumn:r,hasActiveEditRow:T,hasRequiredEditableColumns:C,hasRows:n,hasRowsFooter:d,iconsLocal:f,isAddDisabled:re,isAddRowActive:K,moveRowDown:H,moveRowUp:k,onAddRow:u,onCancelEditRow:w,onDeleteRow:ne,onDragend:P,onDragleave:F,onDragover:q,onDragstart:le,onDrop:ie,onEditRow:R,textsLocal:c,widthsLocal:E}},render(){return _("div",{class:"a_table_form"},[this.label&&_(W,{class:["a_table_form__label",this.labelClass],html:this.label,tag:this.labelTag}),this.hasRequiredEditableColumns&&_(we),_("div",{class:"a_table_form__wrapper"},[_("table",{id:this.id,class:["a_table_form__table",{a_table_form_drag_active:this.draggedRowIndex!==void 0}]},[_("thead",{class:"a_table_form__head"},[_(Z,{id:this.id,allColumnsLength:this.allColumnsLength,canMoveRowDown:this.canMoveRowDown,canMoveRowUp:this.canMoveRowUp,cellTag:"th",changeModel:this.changeModel,columns:this.columns,columnsStylesGrow:this.columnsStylesGrow,draggedRowIndex:this.draggedRowIndex,hasActionsColumn:this.hasActionsColumn,hasActiveEditRow:!1,isActiveEditMode:!1,isActionsSticky:this.isActionsSticky,actionsDisabledCallback:this.actionsDisabledCallback,actionsHideCallback:this.actionsHideCallback,actionsTitleCallback:this.actionsTitleCallback,isDeletable:this.isDeletable,isDeletableConfirm:this.isDeletableConfirm,isDndDisabled:this.hasActiveEditRow,isDragAndDrop:this.isDragAndDrop,isEditable:this.isEditable,isHeader:!0,moveRowDown:this.moveRowDown,moveRowUp:this.moveRowUp,onCancelEditRow:this.onCancelEditRow,onDeleteRow:this.onDeleteRow,onDragend:this.onDragend,onDragstart:this.onDragstart,onEditRow:this.onEditRow,row:{},rowIndex:0,rows:this.rows,saveRow:this.saveRow,texts:this.textsLocal,widths:this.widthsLocal,trClass:"a_table_form__row a_table_form__row_head"},this.$slots)]),_("tbody",{class:"a_table_form__body"},this.hasRows||this.isAddRowActive?[...this.rows.map((e,t)=>{const o=this.getRowKey({row:e,rowIndex:t});return _(Z,{id:this.id,allColumnsLength:this.allColumnsLength,canMoveRowDown:this.canMoveRowDown,canMoveRowUp:this.canMoveRowUp,changeModel:this.changeModel,columns:this.columns,columnsStylesGrow:this.columnsStylesGrow,draggedRowIndex:this.draggedRowIndex,editModel:this.activeEditRowKey===o?this.activeEditModel:void 0,errorIcon:this.errorIcon,hasActionsColumn:this.hasActionsColumn,hasActiveEditRow:this.hasActiveEditRow,isActiveEditMode:this.activeEditRowKey===o,isActionsSticky:this.isActionsSticky,actionsDisabledCallback:this.actionsDisabledCallback,actionsHideCallback:this.actionsHideCallback,actionsTitleCallback:this.actionsTitleCallback,isCreateMode:!1,isDeletable:this.isDeletable,isDeletableConfirm:this.isDeletableConfirm,isDndDisabled:this.hasActiveEditRow,isDragAndDrop:this.isDragAndDrop,isEditable:this.isEditable,key:o,moveRowDown:this.moveRowDown,moveRowUp:this.moveRowUp,onCancelEditRow:this.onCancelEditRow,onDeleteRow:this.onDeleteRow,onDragend:this.onDragend,onDragleave:this.onDragleave,onDragover:this.onDragover,onDragstart:this.onDragstart,onDrop:this.onDrop,onEditRow:this.onEditRow,row:e,rowClass:this.rowClass,rowIndex:t,rows:this.rows,saveRow:this.saveRow,texts:this.textsLocal,widths:this.widthsLocal,trClass:["a_table_form__row",{a_table_form__row_drag_after:this.dragOverRowIndex===t&&this.dragOverPosition==="after",a_table_form__row_drag_before:this.dragOverRowIndex===t&&this.dragOverPosition==="before",a_table_form__row_drag_over:this.dragOverRowIndex===t,a_table_form__row_dragging:this.draggedRowIndex===t}]},this.$slots)}),this.isAddRowActive&&_(Z,{id:this.id,allColumnsLength:this.allColumnsLength,canMoveRowDown:this.canMoveRowDown,canMoveRowUp:this.canMoveRowUp,changeModel:this.changeModel,columns:this.columns,columnsStylesGrow:this.columnsStylesGrow,editModel:this.activeEditModel,errorIcon:this.errorIcon,draggedRowIndex:this.draggedRowIndex,hasActionsColumn:this.hasActionsColumn,hasActiveEditRow:this.hasActiveEditRow,isActiveEditMode:!0,isActionsSticky:this.isActionsSticky,actionsDisabledCallback:this.actionsDisabledCallback,actionsHideCallback:this.actionsHideCallback,actionsTitleCallback:this.actionsTitleCallback,isCreateMode:!0,isDeletable:!1,isDeletableConfirm:!1,isDndDisabled:!0,isDragAndDrop:this.isDragAndDrop,isEditable:this.isEditable,key:"body_create",moveRowDown:this.moveRowDown,moveRowUp:this.moveRowUp,onCancelEditRow:this.onCancelEditRow,onDeleteRow:this.onDeleteRow,onDragend:this.onDragend,onDragleave:this.onDragleave,onDragover:this.onDragover,onDragstart:this.onDragstart,onDrop:this.onDrop,onEditRow:this.onEditRow,row:{},rowClass:this.rowClass,rowIndex:this.rows.length,rows:this.rows,saveRow:this.addRow,texts:this.textsLocal,widths:this.widthsLocal,trClass:"a_table_form__row a_table_form__row_create"},this.$slots)]:[_("tr",{class:"a_table_form__row a_table_form__row_empty"},[_("td",{class:"a_table_form__cell a_table_form__empty",colspan:this.allColumnsLength},[_(W,{tag:"span",text:this.textsLocal.emptyText})])])]),this.hasRowsFooter&&_("tfoot",{class:"a_table_form__foot"},this.rowsFooter.map((e,t)=>_(Z,{id:this.id,allColumnsLength:this.allColumnsLength,canMoveRowDown:this.canMoveRowDown,canMoveRowUp:this.canMoveRowUp,changeModel:this.changeModel,columns:this.columns,columnsStylesGrow:this.columnsStylesGrow,draggedRowIndex:this.draggedRowIndex,hasActionsColumn:this.hasActionsColumn,hasActiveEditRow:this.hasActiveEditRow,isActiveEditMode:!1,isActionsSticky:this.isActionsSticky,actionsDisabledCallback:this.actionsDisabledCallback,actionsHideCallback:this.actionsHideCallback,actionsTitleCallback:this.actionsTitleCallback,isDeletable:this.isDeletable,isDeletableConfirm:this.isDeletableConfirm,isDndDisabled:this.hasActiveEditRow,isDragAndDrop:this.isDragAndDrop,isEditable:this.isEditable,isFooter:!0,key:this.getRowKey({isFooter:!0,row:e,rowIndex:t}),moveRowDown:this.moveRowDown,moveRowUp:this.moveRowUp,onCancelEditRow:this.onCancelEditRow,onDeleteRow:this.onDeleteRow,onDragend:this.onDragend,onDragstart:this.onDragstart,onEditRow:this.onEditRow,row:e,rowClass:this.rowClass,rowIndex:t,rows:this.rowsFooter,saveRow:this.saveRow,texts:this.textsLocal,widths:this.widthsLocal,trClass:"a_table_form__row a_table_form__row_footer"},this.$slots)))])]),this.canAddRow&&_("div",{class:"a_mt_3 a_text_right"},[_(U,{class:"a_btn a_btn_outline_primary",disabled:this.isAddDisabled,extra:this.extra,iconLeft:this.iconsLocal.actionAddRow,text:this.textsLocal.actionAddRow,textScreenReader:this.addTitle,title:this.addTitle,onClick:this.onAddRow})])])}};function bt(){return{codeHtml:`<a-simple-table
  :columns="columns"
  :rows-footer="rowsFooter"
  :rows="rows"
  key-id="id"
  label="_A_TABLE_FORM_EXAMPLE_LABEL_"
/>
`}}function wt(){return{codeJs:`import {
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
};`}}const vt={name:"PageTableFormBasic",components:{AlohaExample:Y,ATableForm:z},setup(){const{codeHtml:e}=bt(),{codeJs:t}=wt(),o=[{id:"position",label:"_A_TABLE_FORM_COLUMN_POSITION_",maxWidth:96,minWidth:96,width:96,formElement:{type:"number"}},{id:"name",label:"_A_TABLE_FORM_COLUMN_NAME_",maxWidth:"18rem",minWidth:"12rem",width:"16rem",formElement:{type:"text"}},{id:"team",formElement:{translateData:!0,data:[{label:"_A_TABLE_FORM_TEAM_NORTH_",value:"north"},{label:"_A_TABLE_FORM_TEAM_WEST_",value:"west"},{label:"_A_TABLE_FORM_TEAM_SOUTH_",value:"south"},{label:"_A_TABLE_FORM_TEAM_EAST_",value:"east"}],keyId:"value",keyLabel:"label",type:"select"},label:"_A_TABLE_FORM_COLUMN_TEAM_",minWidth:"12rem"},{id:"score",footerDefaultValue:"68",footerKeyLabel:"score",formElement:{type:"integer"},label:"_A_TABLE_FORM_COLUMN_SCORE_",maxWidth:120,minWidth:120,width:120}],l=y([{id:1,name:"Марта Иванова",position:1,score:18,team:"north"},{id:2,name:"Олег Сидоров",position:2,score:17,team:"west"},{id:3,name:"Анна Петрова",position:3,score:16,team:"south"},{id:4,name:"Игорь Ковалёв",position:4,score:17,team:"east"}]);return{codeHtml:e,codeJs:t,columns:o,rows:l,rowsFooter:[{name:"_A_TABLE_FORM_FOOTER_TOTAL_",score:68}]}}};function At(e,t,o,l,i,r){const a=D("a-table-form"),n=D("aloha-example");return G(),J(n,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TABLE_FORM_EXAMPLE_HEADER_"},{default:V(()=>[M(a,{columns:e.columns,"rows-footer":e.rowsFooter,rows:e.rows,"key-id":"id",label:"_A_TABLE_FORM_EXAMPLE_LABEL_"},null,8,["columns","rows-footer","rows"])]),_:1},8,["code-html","code-js"])}const Et=j(vt,[["render",At]]);function Rt(){return{codeHtml:`<a-simple-table
  :columns="columns"
  :is-drag-and-drop="true"
  :rows-footer="rowsFooter"
  :rows="rows"
  key-id="id"
  label="_A_TABLE_FORM_EXAMPLE_LABEL_"
  @update-rows="updateRows"
/>
`}}function pt(){return{codeJs:`import {
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
};`}}const yt={name:"PageTableFormDND",components:{AlohaExample:Y,ATableForm:z},setup(){const{codeHtml:e}=Rt(),{codeJs:t}=pt(),o=[{id:"position",label:"_A_TABLE_FORM_COLUMN_POSITION_",maxWidth:96,minWidth:96,width:96,formElement:{type:"text"}},{id:"name",formElement:{type:"text"},label:"_A_TABLE_FORM_COLUMN_NAME_",maxWidth:"18rem",minWidth:"12rem",width:"16rem"},{id:"team",formElement:{translateData:!0,data:[{label:"_A_TABLE_FORM_TEAM_NORTH_",value:"north"},{label:"_A_TABLE_FORM_TEAM_WEST_",value:"west"},{label:"_A_TABLE_FORM_TEAM_SOUTH_",value:"south"},{label:"_A_TABLE_FORM_TEAM_EAST_",value:"east"}],keyId:"value",keyLabel:"label",type:"select"},label:"_A_TABLE_FORM_COLUMN_TEAM_",minWidth:"12rem"},{id:"score",footerDefaultValue:"68",footerKeyLabel:"score",formElement:{type:"integer"},label:"_A_TABLE_FORM_COLUMN_SCORE_",maxWidth:120,minWidth:120,width:120}],l=y([{id:1,name:"Марта Иванова",position:1,score:18,team:"north"},{id:2,name:"Олег Сидоров",position:2,score:17,team:"west"},{id:3,name:"Анна Петрова",position:3,score:16,team:"south"},{id:4,name:"Игорь Ковалёв",position:4,score:17,team:"east"}]);return{codeHtml:e,codeJs:t,columns:o,rows:l,rowsFooter:[{name:"_A_TABLE_FORM_FOOTER_TOTAL_",score:68}],updateRows:({rows:a,trigger:n})=>{l.value=a,console.log("trigger",n)}}}};function gt(e,t,o,l,i,r){const a=D("a-table-form"),n=D("aloha-example");return G(),J(n,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TABLE_FORM_DND_HEADER_",description:"_A_TABLE_FORM_DND_DESCRIPTION_",props:"is-drag-and-drop"},{default:V(()=>[M(a,{columns:e.columns,"is-drag-and-drop":!0,"rows-footer":e.rowsFooter,rows:e.rows,"key-id":"id",label:"_A_TABLE_FORM_EXAMPLE_LABEL_",onUpdateRows:e.updateRows},null,8,["columns","rows-footer","rows","onUpdateRows"])]),_:1},8,["code-html","code-js"])}const Dt=j(yt,[["render",gt]]);function Ct(){return{codeHtml:`<a-checkbox>
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
`}}function Tt(){return{codeJs:`import {
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
};`}}const Mt={name:"PageTableFormEdit",components:{ACheckbox:oe,AlohaExample:Y,ATableForm:z},setup(){const{codeHtml:e}=Ct(),{codeJs:t}=Tt(),o=[{label:"is-deletable-confirm",value:"is-deletable-confirm"},{label:"is-deletable",value:"is-deletable"},{label:"is-editable",value:"is-editable"},{label:"is-addable",value:"is-addable"}],l=y(["is-deletable-confirm","is-deletable","is-editable","is-addable"]),i={actionEditCancel:"abbrechen",actionEditSave:"speichern",editInfoText:"Nur diese Zeile ist gerade im Bearbeitungsmodus."},r=[{id:"position",label:"_A_TABLE_FORM_COLUMN_POSITION_",maxWidth:96,minWidth:96,width:96,formElement:{controlsType:"none",type:"integer"}},{id:"name",formElement:{type:"text",required:!0},keyLabel:"name",label:"_A_TABLE_FORM_COLUMN_NAME_",maxWidth:"18rem",minWidth:"12rem",width:"16rem"},{id:"team",formElement:{data:[{label:"_A_TABLE_FORM_TEAM_NORTH_",value:"north"},{label:"_A_TABLE_FORM_TEAM_WEST_",value:"west"},{label:"_A_TABLE_FORM_TEAM_SOUTH_",value:"south"},{label:"_A_TABLE_FORM_TEAM_EAST_",value:"east"}],keyId:"value",keyLabel:"label",translateData:!0,type:"select"},label:"_A_TABLE_FORM_COLUMN_TEAM_",minWidth:"12rem"},{id:"score",footerDefaultValue:"68",footerKeyLabel:"score",formElement:{controlsType:"none",min:0,type:"integer"},label:"_A_TABLE_FORM_COLUMN_SCORE_",maxWidth:120,minWidth:120,width:120}],a=y([{id:1,name:"Marta Ivanova",position:1,score:18,team:"north"},{id:2,name:"Oleg Sidorov",position:2,score:17,team:"west"},{id:3,name:"Anna Petrova",position:3,score:16,team:"south"},{id:4,name:"Igor Kovalev",position:4,score:17,team:"east"}]);return{addRow:({model:f})=>{var v;console.log("model ",f);const b={};if((v=f.name)!=null&&v.trim()||(b.name=["Name ist erforderlich."]),f.team||(b.team=["Team ist erforderlich."]),f.score<18&&(b.score=["Score must be at least 18."]),Object.keys(b).length)return{errors:b};a.value.push({id:a.value.length+1,...f})},codeHtml:e,codeJs:t,columns:r,dataCheckbox:o,deleteRow:({row:f,rowIndex:b})=>{a.value.splice(b,1),console.log("row",f),console.log("rowIndex",b)},modelCheckbox:l,rows:a,rowsFooter:[{name:"_A_TABLE_FORM_FOOTER_TOTAL_",score:68}],saveRow:async({model:f,rowIndex:b})=>{var p;await new Promise(O=>{setTimeout(O,300)});const v={};if((p=f.name)!=null&&p.trim()||(v.name=["Name ist erforderlich."]),f.team||(v.team=["Team ist erforderlich."]),f.score<18&&(v.score=["Score must be at least 18."]),Object.keys(v).length)return{errors:v};a.value.splice(b,1,f)},texts:i}}};function Ot(e,t,o,l,i,r){const a=D("a-checkbox"),n=D("a-table-form"),d=D("aloha-example");return G(),J(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TABLE_FORM_EDIT_HEADER_",description:"_A_TABLE_FORM_EDIT_DESCRIPTION_",props:["is-addable","is-deletable","is-deletable-confirm","is-editable","save-row","texts"]},{default:V(()=>[M(a,{class:"a_mb_4",modelValue:e.modelCheckbox,"onUpdate:modelValue":t[0]||(t[0]=c=>e.modelCheckbox=c),data:e.dataCheckbox,"translate-data":!0,"key-id":"value","key-label":"label"},null,8,["modelValue","data"]),M(n,{"add-row":e.addRow,columns:e.columns,"is-addable":e.modelCheckbox.includes("is-addable"),"is-deletable-confirm":e.modelCheckbox.includes("is-deletable-confirm"),"is-deletable":e.modelCheckbox.includes("is-deletable"),"is-editable":e.modelCheckbox.includes("is-editable"),"rows-footer":e.rowsFooter,rows:e.rows,"save-row":e.saveRow,texts:e.texts,"key-id":"id",label:"_A_TABLE_FORM_EXAMPLE_LABEL_",onDeleteRow:e.deleteRow},null,8,["add-row","columns","is-addable","is-deletable-confirm","is-deletable","is-editable","rows-footer","rows","save-row","texts","onDeleteRow"])]),_:1},8,["code-html","code-js"])}const Lt=j(Mt,[["render",Ot]]);function Ft(){return{codeHtml:`<a-checkbox
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
`}}function xt(){return{codeJs:`import {
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
};`}}const kt={name:"PageTableFormGrow",components:{ACheckbox:oe,AlohaExample:Y,ATableForm:z},setup(){const{codeHtml:e}=Ft(),{codeJs:t}=xt(),o=[{label:"is-deletable",value:"is-deletable"},{label:"is-editable",value:"is-editable"},{label:"is-drag-and-drop",value:"is-drag-and-drop"}],l=y(["is-deletable","is-editable"]),i=[{id:"position",label:"_A_TABLE_FORM_COLUMN_POSITION_",minWidth:96,width:96,grow:1,formElement:{controlsType:"none",type:"integer"}},{id:"name",formElement:{type:"text"},label:"_A_TABLE_FORM_COLUMN_NAME_",minWidth:"12rem",width:"16rem",grow:2},{id:"team",formElement:{data:[{label:"_A_TABLE_FORM_TEAM_NORTH_",value:"north"},{label:"_A_TABLE_FORM_TEAM_WEST_",value:"west"},{label:"_A_TABLE_FORM_TEAM_SOUTH_",value:"south"},{label:"_A_TABLE_FORM_TEAM_EAST_",value:"east"}],keyId:"value",keyLabel:"label",translateData:!0,type:"select"},label:"_A_TABLE_FORM_COLUMN_TEAM_",minWidth:"12rem",width:"12rem",grow:1},{id:"score",footerDefaultValue:"68",footerKeyLabel:"score",formElement:{controlsType:"none",min:0,type:"integer"},label:"_A_TABLE_FORM_COLUMN_SCORE_",minWidth:120,width:120,grow:1}],r=[{id:"position",label:"_A_TABLE_FORM_COLUMN_POSITION_",minWidth:96,width:96,grow:1,formElement:{controlsType:"none",type:"integer"}},{id:"name",formElement:{type:"text"},label:"_A_TABLE_FORM_COLUMN_NAME_",minWidth:"12rem",width:"16rem",grow:3}],a=y([{id:1,name:"Marta Ivanova",position:1,score:18,team:"north"},{id:2,name:"Oleg Sidorov",position:2,score:17,team:"west"},{id:3,name:"Anna Petrova",position:3,score:16,team:"south"},{id:4,name:"Igor Kovalev",position:4,score:17,team:"east"}]);return{codeHtml:e,codeJs:t,columns1:i,columns2:r,dataCheckbox:o,deleteRow:({rowIndex:f})=>{a.value.splice(f,1)},modelCheckbox:l,rows:a,rowsFooter:[{name:"_A_TABLE_FORM_FOOTER_TOTAL_",score:68}],saveRow:({model:f,rowIndex:b})=>{a.value.splice(b,1,f)},texts:{editInfoText:"Only one row can be edited at a time."}}}},It={class:"a_mb_4"};function Bt(e,t,o,l,i,r){const a=D("a-checkbox"),n=D("a-table-form"),d=D("aloha-example");return G(),J(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TABLE_FORM_GROW_HEADER_",description:"_A_TABLE_FORM_GROW_DESCRIPTION_",props:["is-columns-grow","is-deletable","is-drag-and-drop","is-editable"]},{default:V(()=>[M(a,{class:"a_mb_4",modelValue:e.modelCheckbox,"onUpdate:modelValue":t[0]||(t[0]=c=>e.modelCheckbox=c),data:e.dataCheckbox,"key-id":"value","key-label":"label"},null,8,["modelValue","data"]),xe("div",It,[M(n,{columns:e.columns1,"is-columns-grow":!0,"is-deletable":e.modelCheckbox.includes("is-deletable"),"is-drag-and-drop":e.modelCheckbox.includes("is-drag-and-drop"),"is-editable":e.modelCheckbox.includes("is-editable"),"rows-footer":e.rowsFooter,rows:e.rows,"save-row":e.saveRow,texts:e.texts,"key-id":"id",label:"_A_TABLE_FORM_EXAMPLE_LABEL_",onDeleteRow:e.deleteRow},null,8,["columns","is-deletable","is-drag-and-drop","is-editable","rows-footer","rows","save-row","texts","onDeleteRow"])]),M(n,{columns:e.columns2,"is-columns-grow":!0,"is-deletable":e.modelCheckbox.includes("is-deletable"),"is-drag-and-drop":e.modelCheckbox.includes("is-drag-and-drop"),"is-editable":e.modelCheckbox.includes("is-editable"),"rows-footer":e.rowsFooter,rows:e.rows,"save-row":e.saveRow,texts:e.texts,"key-id":"id",label:"_A_TABLE_FORM_EXAMPLE_LABEL_",onDeleteRow:e.deleteRow},null,8,["columns","is-deletable","is-drag-and-drop","is-editable","rows-footer","rows","save-row","texts","onDeleteRow"])]),_:1},8,["code-html","code-js"])}const St=j(kt,[["render",Bt]]);function qt(){return{codeHtml:`<a-one-checkbox
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
`}}function Nt(){return{codeJs:`import {
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
};`}}const Pt={name:"PageTableFormSticky",components:{AlohaExample:Y,AOneCheckbox:ve,ATableForm:z},setup(){const{codeHtml:e}=qt(),{codeJs:t}=Nt(),o=y(!0),l=Array.from({length:20},(r,a)=>{const n=a+1;return{id:`c${n}`,label:`${n}`,maxWidth:120,minWidth:120,width:120,formElement:{controlsType:"none",type:"integer"}}}),i=y(Array.from({length:6},(r,a)=>{const n={id:a+1};return l.forEach((d,c)=>{n[d.id]=(a+1)*100+c+1}),n}));return{codeHtml:e,codeJs:t,columns:l,isActionsSticky:o,rows:i}}};function Ht(e,t,o,l,i,r){const a=D("a-one-checkbox"),n=D("a-table-form"),d=D("aloha-example");return G(),J(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TABLE_FORM_STICKY_HEADER_",description:"_A_TABLE_FORM_STICKY_DESCRIPTION_",props:["is-actions-sticky","is-deletable-confirm","is-editable"]},{default:V(()=>[M(a,{class:"a_mb_4",modelValue:e.isActionsSticky,"onUpdate:modelValue":t[0]||(t[0]=c=>e.isActionsSticky=c),label:"isActionsSticky"},null,8,["modelValue"]),M(n,{columns:e.columns,"is-actions-sticky":e.isActionsSticky,"is-deletable-confirm":!0,"is-editable":!0,rows:e.rows,"key-id":"id",label:"20 columns"},null,8,["columns","is-actions-sticky","rows"])]),_:1},8,["code-html","code-js"])}const Ut=j(Pt,[["render",Ht]]);function $t(){return{pageTitle:m(()=>Ae({placeholder:"_A_TABLE_FORM_PAGE_TITLE_"}))}}const Wt={name:"PageTableForm",components:{AlohaPage:ce,PageTableFormBasic:Et,PageTableFormDND:Dt,PageTableFormEdit:Lt,PageTableFormGrow:St,PageTableFormSticky:Ut},setup(){const{pageTitle:e}=$t();return{pageTitle:e}}};function jt(e,t,o,l,i,r){const a=D("page-table-form-basic"),n=D("page-table-form-d-n-d"),d=D("page-table-form-edit"),c=D("page-table-form-sticky"),E=D("page-table-form-grow"),f=D("aloha-page");return G(),J(f,{"page-title":e.pageTitle},{body:V(()=>[M(a),M(n),M(d),M(c),M(E)]),_:1},8,["page-title"])}const io=j(Wt,[["render",jt]]);export{io as default};
