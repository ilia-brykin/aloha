import{A as Z,a as ue}from"./chunk.AlohaExample.eizG7Rx4.js";import{d as _e,s as te,A as W,c as U,b as me,f as he,e as fe,h as be,i as we,j as ve,_ as j,k as se,l as Ae,g as Ee}from"./bundle.index.DJgEYHj0.js";import{t as s,d as u,h as m,M as ae,l as Re,aX as pe,L as ye,O as Ce,C as ge,aY as De,g as Te,r as C,j as Me,P as Le,E as Oe,z as Fe,o as xe,Y as G,W as J,aU as V,f as g,$ as F,_ as ke}from"./chunk.vendor.CWr53wb5.js";import{i as Be,j as k,r as B,l as $,M as Ie,T as Se,v as qe,h as Ne,W as Pe,a as le,d as He,b as Ue,u as $e}from"./chunk.vendor-lodash.CWoM99Se.js";import{A as We}from"./chunk.AFormElement.IMbp6NQU.js";import"./chunk.APageTabTitle.CAM_0e_i.js";import"./chunk.AlohaHighlightjs.Cyb5M4zM.js";import"./chunk.translations-ar.DRto1jDw.js";import"./chunk.translations-de.CEjcANRo.js";import"./chunk.translations-en.BjlQK_tj.js";import"./chunk.translations-es.BcLAUo0L.js";import"./chunk.translations-fr.DINmPQrz.js";import"./chunk.translations-hr.BU9Fw-5f.js";import"./chunk.translations-it.Cu9SxZzh.js";import"./chunk.translations-ru.Cs_zBe4-.js";function je(e){const t=s(e,"column"),o=s(e,"isEditable"),l=s(e,"isEditMode");return{disabledLocal:u(()=>{var i,a;return!!((a=(i=t.value)==null?void 0:i.formElement)!=null&&a.disabled)||o.value&&!l.value})}}function Ge(e){const t=s(e,"column"),o=s(e,"isEditable"),l=s(e,"isEditMode"),r=s(e,"isFooter");return{readonlyLocal:u(()=>{var a,n,d,c;return r.value?!0:o.value?(n=(a=t.value)==null?void 0:a.formElement)!=null&&n.useRowReadonly?!l.value:!!((c=(d=t.value)==null?void 0:d.formElement)!=null&&c.readonly):!0})}}function Je(e){const t=s(e,"column"),o=s(e,"isFooter"),l=u(()=>o.value?t.value.footerSlot:t.value.slot),r=u(()=>o.value?t.value.footerSlotAfter:t.value.slotAfter),i=u(()=>!!l.value),a=u(()=>!!r.value);return{hasSlot:i,hasSlotAfter:a,slotName:l,slotNameAfter:r}}function oe(e){if(!(e==null||e===""))return typeof e=="number"?`${e}px`:e}function ie(e){const t=s(e,"column");return{columnStyles:u(()=>{const l={},r=oe(t.value.width),i=oe(t.value.maxWidth),a=oe(t.value.minWidth);return r&&(l.width=r),i&&(l.maxWidth=i),a&&(l.minWidth=a),Be(t.value.style)?{...l,...t.value.style}:t.value.style?[l,t.value.style]:l})}}const Ve={name:"ATableFormCell",props:{column:{type:Object,required:!0},columnIndex:{type:Number,required:!0},columnStyle:{type:Object,required:!1,default:void 0},errorIcon:{type:String,required:!1,default:void 0},errors:{type:Object,required:!1,default:()=>({})},id:{type:String,required:!0},isEditMode:{type:Boolean,required:!1,default:!1},isEditable:{type:Boolean,required:!1,default:!1},isFooter:{type:Boolean,required:!1,default:!1},row:{type:Object,required:!0},rowData:{type:Object,required:!1,default:void 0},rowIndex:{type:Number,required:!0},rows:{type:Array,required:!0},tag:{type:String,required:!1,default:"td"}},emits:["updateRowData"],setup(e){const{columnStyles:t}=ie({column:e.column}),{readonlyLocal:o}=Ge(e),{disabledLocal:l}=je(e),{hasSlot:r,hasSlotAfter:i,slotName:a,slotNameAfter:n}=Je(e),d=u(()=>e.rowData||e.row);return{columnStyles:t,disabledLocal:l,hasSlot:r,hasSlotAfter:i,readonlyLocal:o,rowDataLocal:d,slotName:a,slotNameAfter:n}},methods:{updateRowData({item:e,model:t}){this.$emit("updateRowData",{column:this.column,columnId:this.column.id,item:e,model:t,value:t})}},render(){const{type:e="text",...t}=this.column.formElement||{},o={column:this.column,columnIndex:this.columnIndex,row:this.row,rowIndex:this.rowIndex,rows:this.rows};return m(this.tag,{class:["a_table_form__cell",`a_table_form__cell_${this.tag}`,this.column.class,this.isFooter?this.column.classFooter:this.column.classRow],style:[this.columnStyles,this.columnStyle]},[this.hasSlot&&this.$slots[this.slotName]?this.$slots[this.slotName](o):m(We,{id:this.column.id,errorIcon:this.errorIcon,idPrefix:this.id,...t,change:this.updateRowData,disabled:this.disabledLocal,errors:k(this.errors,this.column.id),errorsClass:"a_sr_only",modelValue:k(this.rowDataLocal,this.column.id),readonly:this.readonlyLocal,type:e}),this.hasSlotAfter&&this.$slots[this.slotNameAfter]?this.$slots[this.slotNameAfter](o):null])}};function Ke(e,{idBtnDelete:t=u(()=>""),isActionsDisabled:o=u(()=>!1)}){const l=s(e,"isDeletable"),r=s(e,"isDeletableConfirm"),i=s(e,"onDeleteRow"),a=s(e,"row"),n=s(e,"rowIndex"),d=s(e,"texts"),{closeConfirm:c,openConfirm:A}=_e(),b=()=>{c(),ae().then(()=>{te({selector:`#${t.value}`})})},w=()=>{A({bodyHtml:d.value.actionDeleteConfirmBody,closeButtonText:d.value.actionDeleteConfirmClose,headerText:d.value.actionDeleteConfirmHeader,save:async()=>{await i.value({row:a.value,rowIndex:n.value}),c()},close:b,saveButtonText:d.value.actionDeleteConfirmSave})};return{onDeleteClick:()=>{if(!o.value){if(r.value){w();return}l.value&&i.value({row:a.value,rowIndex:n.value})}}}}function Xe(e){const t=s(e,"actionsDisabledCallback"),o=s(e,"hasActiveEditRow"),l=s(e,"isActiveEditMode"),r=s(e,"row"),i=s(e,"rowIndex"),a=u(()=>o.value&&!l.value),n=u(()=>{if(a.value)return!0;const c=k(t.value,"delete");return B(c)?c({row:r.value,rowIndex:i.value}):!1}),d=u(()=>{if(a.value)return!0;const c=k(t.value,"edit");return B(c)?c({row:r.value,rowIndex:i.value}):!1});return{isDeleteDisabled:n,isEditDisabled:d}}function Ye(e){const t=s(e,"actionsHideCallback"),o=s(e,"row"),l=s(e,"rowIndex"),r=u(()=>{const a=k(t.value,"delete");return B(a)?a({row:o.value,rowIndex:l.value}):!1}),i=u(()=>{const a=k(t.value,"edit");return B(a)?a({row:o.value,rowIndex:l.value}):!1});return{isDeleteHidden:r,isEditHidden:i}}function ze(e){const t=s(e,"id"),o=u(()=>`${t.value}_delete`),l=u(()=>`${t.value}_edit`),r=u(()=>`${t.value}_cancel`),i=u(()=>`${t.value}_save`);return{idBtnCancel:r,idBtnDelete:o,idBtnEdit:l,idBtnSave:i}}function Ze(e){const t=s(e,"isDeletable"),o=s(e,"isDeletableConfirm"),l=s(e,"isEditable"),r=s(e,"isActiveEditMode"),i=s(e,"widths");return{columnStyles:u(()=>{const n=t.value||o.value,d=l.value||r.value&&n?i.value.actionsColumnDouble:i.value.actionsColumnSingle;return{maxWidth:`${d}px`,minWidth:`${d}px`,width:`${d}px`}})}}function Qe(e){const t=s(e,"row"),o=s(e,"rowIndex"),l=s(e,"texts"),r=s(e,"actionsTitleCallback"),i=u(()=>{const n=k(r.value,"delete");return B(n)?n({row:t.value,rowIndex:o.value}):l.value.actionDelete}),a=u(()=>{const n=k(r.value,"edit");return B(n)?n({row:t.value,rowIndex:o.value}):l.value.actionEdit});return{deleteTitle:i,editTitle:a}}const et={name:"ATableFormCellAction",props:{actionsClasses:{type:Object,required:!1,default:()=>({})},actionsDisabledCallback:{type:Object,required:!1,default:()=>({})},actionsHideCallback:{type:Object,required:!1,default:()=>({})},actionsTitleCallback:{type:Object,required:!1,default:()=>({})},extra:{type:Object,required:!1,default:void 0},hasActiveEditRow:{type:Boolean,required:!1,default:!1},id:{type:String,required:!0},isActionsSticky:{type:Boolean,required:!1,default:!1},isActiveEditMode:{type:Boolean,required:!1,default:!1},isDeletable:{type:Boolean,required:!1,default:!1},isDeletableConfirm:{type:Boolean,required:!1,default:!1},isEditable:{type:Boolean,required:!1,default:!1},isFooter:{type:Boolean,required:!1,default:!1},isHeader:{type:Boolean,required:!1,default:!1},isSaving:{type:Boolean,required:!1,default:!1},onCancelEditRow:{type:Function,required:!0},onDeleteRow:{type:Function,required:!0},onEditRow:{type:Function,required:!0},onSaveEditRow:{type:Function,required:!0},row:{type:Object,required:!0},rowIndex:{type:Number,required:!0},texts:{type:Object,required:!1,default:()=>({})},widths:{type:Object,required:!1,default:()=>({})}},setup(e){const{isDeleteDisabled:t,isEditDisabled:o}=Xe(e),{isDeleteHidden:l,isEditHidden:r}=Ye(e),{idBtnCancel:i,idBtnDelete:a,idBtnEdit:n,idBtnSave:d}=ze(e),{onDeleteClick:c}=Ke(e,{idBtnDelete:a,isActionsDisabled:t}),{columnStyles:A}=Ze(e),{deleteTitle:b,editTitle:w}=Qe(e);return{columnStyles:A,deleteTitle:b,editTitle:w,idBtnCancel:i,idBtnDelete:a,idBtnEdit:n,idBtnSave:d,isDeleteDisabled:t,isDeleteHidden:l,isEditDisabled:o,isEditHidden:r,onDeleteClick:c}},render(){const e=this.isHeader?"th":"td";return m(e,{class:["a_table_form__cell",`a_table_form__cell_${e}`,"a_table_form__cell_actions",{a_table_form__cell_actions_sticky:this.isActionsSticky}],style:this.columnStyles},[this.isHeader?m("span",{class:"a_sr_only"},[m(W,{tag:"span",text:this.texts.actionsColumn})]):this.isFooter?null:m("div",{class:"a_table_form__actions",role:"group"},this.isActiveEditMode?[m(U,{id:this.idBtnCancel,class:["a_table_form__action_button",this.actionsClasses.editCancel],disabled:this.isSaving,extra:this.extra,iconLeft:Re,title:this.texts.actionEditCancel,textScreenReader:this.texts.actionEditCancel,onClick:()=>this.onCancelEditRow({id:this.id,row:this.row,rowIndex:this.rowIndex,trigger:"cancel"})}),m(U,{id:this.idBtnSave,class:["a_table_form__action_button",this.actionsClasses.editSave],disabled:this.isSaving,extra:this.extra,iconLeft:pe,title:this.texts.actionEditSave,textScreenReader:this.texts.actionEditSave,onClick:()=>this.onSaveEditRow({id:this.id,row:this.row,rowIndex:this.rowIndex})})]:[(this.isDeletable||this.isDeletableConfirm)&&!this.isDeleteHidden&&m(U,{id:this.idBtnDelete,class:["a_table_form__action_button",this.actionsClasses.delete],disabled:this.isDeleteDisabled,extra:this.extra,iconLeft:ye,title:this.deleteTitle,textScreenReader:this.deleteTitle,onClick:this.onDeleteClick}),this.isEditable&&!this.isEditHidden&&m(U,{id:this.idBtnEdit,class:["a_table_form__action_button",this.actionsClasses.edit],disabled:this.isEditDisabled,extra:this.extra,iconLeft:Ce,title:this.editTitle,textScreenReader:this.editTitle,onClick:()=>this.onEditRow({id:this.id,row:this.row,rowIndex:this.rowIndex})})])])}};function tt(e){const t=s(e,"id"),o=u(()=>`${t.value}_up`);return{idBtnDown:u(()=>`${t.value}_down`),idBtnUp:o}}const ot={name:"ATableFormCellDnd",props:{canMoveRowDown:{type:Function,required:!0},canMoveRowUp:{type:Function,required:!0},id:{type:String,required:!0},isCreateMode:{type:Boolean,required:!1,default:!1},isDragAndDrop:{type:Boolean,required:!1,default:!1},isDndDisabled:{type:Boolean,required:!1,default:!1},isFooter:{type:Boolean,required:!1,default:!1},isHeader:{type:Boolean,required:!1,default:!1},moveRowDown:{type:Function,required:!0},moveRowUp:{type:Function,required:!0},onDragend:{type:Function,required:!0},onDragstart:{type:Function,required:!0},rowIndex:{type:Number,required:!0},texts:{type:Object,required:!1,default:()=>({})},widths:{type:Object,required:!1,default:()=>({})}},setup(e){const{idBtnDown:t,idBtnUp:o}=tt(e);return{columnStyles:u(()=>({maxWidth:`${e.widths.dndColumn}px`,minWidth:`${e.widths.dndColumn}px`,width:`${e.widths.dndColumn}px`})),idBtnDown:t,idBtnUp:o}},render(){const e=this.isHeader?"th":"td",t=this.isDragAndDrop&&!this.isDndDisabled;return m(e,{class:["a_table_form__cell",`a_table_form__cell_${e}`,"a_table_form__cell_reorder"],style:this.columnStyles},[this.isHeader?m("span",{class:"a_sr_only"},[m(W,{tag:"span",text:this.texts.reorderColumn})]):this.isCreateMode||this.isFooter?null:m("div",{class:"a_table_form__reorder_actions"},[this.canMoveRowUp(this.rowIndex)&&m(U,{id:this.idBtnUp,class:"a_sr_only_focusable a_btn a_btn_transparent_dark a_table_form__reorder_button",disabled:this.isDndDisabled,iconLeft:ge,preventKeyboardRepeat:!0,tabindex:this.isDndDisabled?-1:void 0,title:this.texts.reorderUp,textScreenReader:this.texts.reorderUp,onClick:()=>this.moveRowUp(this.rowIndex)}),m("span",{ariaHidden:!0,class:"a_table_form__reorder_handle",draggable:t,onDragend:t?this.onDragend:void 0,onDragstart:t?o=>this.onDragstart(o,this.rowIndex):void 0},[m(me,{class:"a_table_form__reorder_icon",icon:De})]),m("span",{class:"a_sr_only"},[m(W,{tag:"span",text:this.texts.reorderHandle})]),this.canMoveRowDown(this.rowIndex)&&m(U,{id:this.idBtnDown,class:"a_sr_only_focusable a_btn a_btn_transparent_dark a_table_form__reorder_button",disabled:this.isDndDisabled,iconLeft:Te,preventKeyboardRepeat:!0,tabindex:this.isDndDisabled?-1:void 0,title:this.texts.reorderDown,textScreenReader:this.texts.reorderDown,onClick:()=>this.moveRowDown(this.rowIndex)})])])}},at={name:"ATableFormTh",props:{column:{type:Object,required:!0},columnStyle:{type:Object,required:!1,default:void 0},isEditable:{type:Boolean,required:!1,default:!1}},setup(e){const{columnStyles:t}=ie({column:e.column});return{columnStyles:t}},render(){var e;return m("th",{class:["a_table_form__cell","a_table_form__cell_th",this.column.class],style:[this.columnStyles,this.columnStyle]},[this.column.slotHeader&&this.$slots[this.column.slotHeader]?this.$slots[this.column.slotHeader]({column:this.column,isEditable:this.isEditable}):this.column.label&&m(W,{html:this.column.label,tag:"span"}),this.isEditable&&((e=this.column.formElement)==null?void 0:e.required)&&m("span",{class:"a_label__required"},"*")])}};function st(e,{hasErrors:t=u(()=>!1)}){const o=s(e,"hasActiveEditRow"),l=s(e,"isActiveEditMode"),r=s(e,"isCreateMode"),i=s(e,"isFooter"),a=s(e,"isHeader"),n=s(e,"row"),d=s(e,"rowClass"),c=s(e,"rowIndex"),A=s(e,"trClass"),b=u(()=>B(d.value)?d.value({row:n.value,rowIndex:c.value,rowindex:c.value,isCreateMode:r.value,isFooter:i.value,isHeader:a.value}):d.value),w=u(()=>[A.value,b.value,{a_table_form__row_active:!a.value&&!i.value&&l.value,a_table_form__row_errors:!a.value&&!i.value&&t.value,a_table_form__row_inactive:!a.value&&!i.value&&o.value&&!l.value}]);return{rowClassLocal:b,trClassLocal:w}}function lt(e,{errorsLocal:t=C(void 0)}){const o=s(e,"changeModel"),l=s(e,"onCancelEditRow"),r=s(e,"row"),i=s(e,"rows"),a=s(e,"rowIndex"),n=s(e,"saveRow"),d=C(!1),c=C(void 0),A=({column:E,columnId:R,item:M,model:S})=>{c.value||(c.value=$(r.value)||{});let x;o.value&&(x=o.value({modelAll:c.value,row:r.value,column:E,model:S,item:M})),x!=null&&x.model?c.value=$(x.model):Ie(c.value,R,S),Se(t.value,R)},b=({trigger:E,id:R}={})=>{l.value({row:r.value,rowIndex:a.value,trigger:E,id:R})};return{cancelEditRow:b,isSaving:d,modelLocal:c,saveEditRow:async({id:E}={})=>{if(!d.value){t.value={},d.value=!0;try{const R=await n.value({model:$(c.value),row:r.value,rowIndex:a.value,rows:i.value});if(R!=null&&R.errors){t.value=$(R.errors);return}b({trigger:"save",id:E})}catch(R){t.value=R}finally{d.value=!1}}},updateModelLocal:A}}function it(e){const t=s(e,"columns"),o=C({}),l=u(()=>!qe(o.value)),r=u(()=>{const i=[];return Ne(t.value,a=>{const n=$(a.formElement)||{};n.type=n.type||"text",n.label=n.label||a.label,n.id=n.id||a.id,i.push(n)}),i});return{errorsLocal:o,hasErrors:l,optionsListForErrors:r}}function nt({idTr:e=u(()=>"")}){return{focusFirstEditableElement:()=>{const o=document.getElementById(e.value);if(!o)return;const r=Array.from(o.querySelectorAll(".a_table_form__cell:not(.a_table_form__cell_actions)")).map(i=>i.querySelector(he)).find(Boolean);r==null||r.focus()}}}function rt(e){const t=s(e,"id"),o=s(e,"isHeader"),l=s(e,"isFooter"),r=s(e,"rowIndex");return{idTr:u(()=>`${t.value}_${r.value}${o.value?"_header":""}${l.value?"_footer":""}`)}}const ee={name:"ATableFormRow",props:{actionsClasses:{type:Object,required:!1,default:()=>({})},actionsDisabledCallback:{type:Object,required:!1,default:()=>({})},actionsHideCallback:{type:Object,required:!1,default:()=>({})},actionsTitleCallback:{type:Object,required:!1,default:()=>({})},allColumnsLength:{type:Number,required:!0},canMoveRowDown:{type:Function,required:!0},canMoveRowUp:{type:Function,required:!0},cellTag:{type:String,required:!1,default:void 0},changeModel:{type:Function,required:!1,default:void 0},columns:{type:Array,required:!0},columnsStylesGrow:{type:Object,required:!1,default:()=>({})},draggedRowIndex:{type:Number,required:!1,default:void 0},editModel:{type:Object,required:!1,default:void 0},errorIcon:{type:String,required:!1,default:void 0},extra:{type:Object,required:!1,default:void 0},hasActionsColumn:{type:Boolean,required:!1,default:!1},hasActiveEditRow:{type:Boolean,required:!1,default:!1},id:{type:String,required:!0},isActionsSticky:{type:Boolean,required:!1,default:!1},isActiveEditMode:{type:Boolean,required:!1,default:!1},isCreateMode:{type:Boolean,required:!1,default:!1},isDeletable:{type:Boolean,required:!1,default:!1},isDeletableConfirm:{type:Boolean,required:!1,default:!1},isDndDisabled:{type:Boolean,required:!1,default:!1},isDragAndDrop:{type:Boolean,required:!1,default:!1},isEditable:{type:Boolean,required:!1,default:!1},isFooter:{type:Boolean,required:!1,default:!1},isHeader:{type:Boolean,required:!1,default:!1},moveRowDown:{type:Function,required:!0},moveRowUp:{type:Function,required:!0},onCancelEditRow:{type:Function,required:!0},onDeleteRow:{type:Function,required:!0},onDragend:{type:Function,required:!0},onDragleave:{type:Function,required:!1,default:void 0},onDragover:{type:Function,required:!1,default:void 0},onDragstart:{type:Function,required:!0},onDrop:{type:Function,required:!1,default:void 0},onEditRow:{type:Function,required:!0},row:{type:Object,required:!0},rowClass:{type:[String,Object,Array,Function],required:!1,default:void 0},rowIndex:{type:Number,required:!0},rows:{type:Array,required:!0},saveRow:{type:Function,required:!0},texts:{type:Object,required:!1,default:()=>({})},trClass:{type:[String,Object,Array],required:!1,default:void 0},widths:{type:Object,required:!1,default:()=>({})}},setup(e){const{idTr:t}=rt(e),{focusFirstEditableElement:o}=nt({idTr:t}),{errorsLocal:l,hasErrors:r,optionsListForErrors:i}=it(e),{rowClassLocal:a,trClassLocal:n}=st(e,{hasErrors:r}),{cancelEditRow:d,isSaving:c,modelLocal:A,saveEditRow:b,updateModelLocal:w}=lt(e,{errorsLocal:l});return{cancelEditRow:d,errorsLocal:l,focusFirstEditableElement:o,hasErrors:r,rowClassLocal:a,idTr:t,isSaving:c,modelLocal:A,optionsListForErrors:i,saveEditRow:b,trClassLocal:n,updateModelLocal:w}},computed:{currentRowData(){return this.isActiveEditMode&&this.modelLocal?this.modelLocal:this.row}},watch:{isActiveEditMode:{immediate:!0,handler(e){if(e){this.modelLocal=$(this.editModel===void 0?this.row:this.editModel),this.errorsLocal={},ae(()=>{this.focusFirstEditableElement()});return}this.errorsLocal={},this.isSaving=!1}}},render(){const e=[];return this.isActiveEditMode&&this.texts.editInfoText&&e.push(m("tr",{class:"a_table_form__row a_table_form__row_info",key:`info_${this.rowIndex}`},[m("td",{class:"a_table_form__cell a_table_form__cell_info",colspan:this.allColumnsLength},[m(fe,{alertClass:"a_table_form__info",html:this.texts.editInfoText,isVisible:!0,type:"info"})])])),e.push(m("tr",{id:this.idTr,"aria-grabbed":!this.isHeader&&!this.isFooter?this.draggedRowIndex===this.rowIndex:void 0,class:this.trClassLocal,key:`main_${this.rowIndex}`,onDragleave:this.onDragleave&&(t=>this.onDragleave(t,this.rowIndex)),onDragover:this.onDragover&&(t=>this.onDragover(t,this.rowIndex)),onDrop:this.onDrop&&(t=>this.onDrop(t,this.rowIndex))},[this.isDragAndDrop?m(ot,{id:this.idTr,canMoveRowDown:this.canMoveRowDown,canMoveRowUp:this.canMoveRowUp,isCreateMode:this.isCreateMode,isDndDisabled:this.isDndDisabled,isDragAndDrop:this.isDragAndDrop,isFooter:this.isFooter,isHeader:this.isHeader,moveRowDown:this.moveRowDown,moveRowUp:this.moveRowUp,onDragend:this.onDragend,onDragstart:this.onDragstart,rowIndex:this.rowIndex,texts:this.texts,widths:this.widths}):null,...this.columns.map((t,o)=>this.isHeader?m(at,{column:t,columnStyle:this.columnsStylesGrow[t.id],isEditable:this.isEditable},this.$slots):m(Ve,{id:this.idTr,column:t,columnIndex:o,columnStyle:this.columnsStylesGrow[t.id],errorIcon:this.errorIcon,errors:this.errorsLocal,isEditable:this.isEditable,isEditMode:this.isActiveEditMode,isFooter:this.isFooter,onUpdateRowData:this.updateModelLocal,row:this.row,rowData:this.currentRowData,rowIndex:this.rowIndex,rows:this.rows,tag:this.cellTag},this.$slots)),this.hasActionsColumn?m(et,{id:this.idTr,actionsClasses:this.actionsClasses,actionsDisabledCallback:this.actionsDisabledCallback,actionsHideCallback:this.actionsHideCallback,actionsTitleCallback:this.actionsTitleCallback,extra:this.extra,hasActiveEditRow:this.hasActiveEditRow,isActionsSticky:this.isActionsSticky,isActiveEditMode:this.isActiveEditMode,isDeletable:this.isDeletable,isDeletableConfirm:this.isDeletableConfirm,isEditable:this.isEditable,isFooter:this.isFooter,isHeader:this.isHeader,isSaving:this.isSaving,onCancelEditRow:this.cancelEditRow,onDeleteRow:this.onDeleteRow,onEditRow:this.onEditRow,onSaveEditRow:this.saveEditRow,row:this.row,rowIndex:this.rowIndex,texts:this.texts,widths:this.widths}):null])),this.isActiveEditMode&&this.hasErrors&&e.push(m("tr",{class:"a_table_form__row a_table_form__row_errors",key:`errors_${this.rowIndex}`},[m("td",{class:"a_table_form__cell a_table_form__cell_errors",colspan:this.allColumnsLength},[m(be,{autoFocus:!0,closable:!1,errors:this.errorsLocal,optionsList:this.optionsListForErrors,idPrefix:this.idTr})])])),e}};function dt(e){const t=s(e,"actionsClasses");return{actionsClassesLocal:u(()=>({delete:"a_btn a_btn_transparent_danger",edit:"a_btn a_btn_transparent_primary",editCancel:"a_btn a_btn_transparent_primary",editSave:"a_btn a_btn_transparent_primary",addRow:"a_btn a_btn_outline_primary",...t.value}))}}function ct(e){const t=s(e,"columns"),o=s(e,"isDeletable"),l=s(e,"isDeletableConfirm"),r=s(e,"isDragAndDrop"),i=s(e,"isEditable"),a=u(()=>!!(i.value||o.value||l.value));return{allColumnsLength:u(()=>{var c;let d=((c=t.value)==null?void 0:c.length)||0;return r.value&&(d+=1),a.value&&(d+=1),d}),hasActionsColumn:a}}const ut=2;function _t(e,{hasActionsColumn:t=u(()=>!1),widthsLocal:o=u(()=>({}))}){const l=s(e,"columns"),r=s(e,"id"),i=s(e,"isColumnsGrow"),a=s(e,"isDeletable"),n=s(e,"isDeletableConfirm"),d=s(e,"isDragAndDrop"),c=s(e,"isEditable"),{remPx:A,scalePxWithRem:b}=we(),w=C(void 0),E=C({});let R,M;const S=u(()=>t.value?c.value?o.value.actionsColumnDouble:a.value||n.value?o.value.actionsColumnSingle:0:0),x=u(()=>d.value?o.value.dndColumn:0),D=()=>{var _;return(_=document.getElementById(r.value))==null?void 0:_.parentElement},p=_=>{if(le(_)||_==="")return 0;if(He(_))return+b(_)||0;if(!Ue(_))return 0;const f=_.trim();return f?f.endsWith("rem")?(parseFloat(f)||0)*A.value:(f.endsWith("px"),parseFloat(f)||0):0},K=_=>{const f=`${_}px`;return{maxWidth:f,minWidth:f,width:f}},P=()=>{if(!i.value||!w.value){E.value={};return}const _=l.value||[],f=w.value-S.value-x.value-ut;if(f<=0){E.value={};return}let v=0,y=0;if(_.forEach(O=>{const q=p(O.width);v+=q,y+=Math.max(0,+O.grow||0)}),v>=f||y<=0){E.value={};return}const L=f-v,T={};_.forEach(O=>{const q=p(O.width),H=Math.max(0,+O.grow||0);if(!O.id||!q)return;const Y=q+(H>0?L*H/y:0);T[O.id]=K(Y)}),E.value=T},X=()=>{if(!i.value||R)return;const _=D();_&&(M=_,R=new ResizeObserver(Pe(f=>{var y,L;const v=(L=(y=f[0])==null?void 0:y.contentRect)==null?void 0:L.width;v&&(w.value=v,P())},100)),w.value=_.getBoundingClientRect().width,P(),R.observe(_))},h=()=>{R&&(M&&R.unobserve(M),R.disconnect(),R=void 0,M=void 0)};return Me([l,t,a,n,d,c,o],()=>{P()},{deep:!0}),{columnsStylesGrow:E,destroyColumnsGrowObserver:h,initColumnsGrowObserver:X}}function mt(e,{emit:t}){return{onDeleteRow:({row:l,rowIndex:r})=>{t("deleteRow",{row:l,rowIndex:r})}}}function ht(e,{emit:t},{isDndDisabled:o=u(()=>!1)}={}){const l=s(e,"focusAfterMove"),r=s(e,"id"),i=s(e,"isDragAndDrop"),a=s(e,"rows"),n=C(void 0),d=C(void 0),c=C(void 0),A=C(void 0),b=()=>{var h;(h=A.value)==null||h.remove(),A.value=void 0},w=h=>{var O,q;const _=(q=(O=h.target)==null?void 0:O.closest)==null?void 0:q.call(O,"tr");if(!_)return;const f=_.getBoundingClientRect(),v=document.createElement("table"),y=document.createElement("tbody"),L=_.cloneNode(!0);v.className="a_table_form__table",v.style.borderCollapse="collapse",v.style.borderSpacing="0",v.style.width=`${f.width}px`,v.style.tableLayout="fixed",Array.from(_.children).forEach((H,Y)=>{const I=L.children[Y];if(I){const N=window.getComputedStyle(H);I.style.width=`${H.getBoundingClientRect().width}px`,I.style.backgroundColor=N.backgroundColor,I.style.borderTop=N.borderTop,I.style.borderRight=N.borderRight,I.style.borderBottom=N.borderBottom,I.style.borderLeft=N.borderLeft,I.style.color=N.color}}),y.appendChild(L),v.appendChild(y);const T=document.createElement("div");return T.className="a_table_form a_table_form__drag_preview",T.style.position="fixed",T.style.top="-10000px",T.style.left="-10000px",T.style.pointerEvents="none",T.style.zIndex="9999",T.appendChild(v),document.body.appendChild(T),A.value=T,{element:T,offsetX:Math.min(h.offsetX||0,f.width/2),offsetY:Math.min(h.offsetY||0,f.height/2)}},E=({focusId:h,fromIndex:_,toIndex:f,trigger:v})=>{if(!i.value||o.value||_===f||_<0||f<0||_>=a.value.length||f>=a.value.length)return;const y=[...a.value],[L]=y.splice(_,1);y.splice(f,0,L),t("updateRows",{focusId:h,rows:y,trigger:v,fromIndex:_,toIndex:f}),t("moveRow",{focusId:h,fromIndex:_,row:L,toIndex:f})},R=({fromIndex:h,rowIndex:_,position:f="before"})=>{if(!i.value||o.value||h<0||_<0||h>=a.value.length||_>=a.value.length)return;let v=f==="after"?_+1:_;h<v&&(v-=1),E({fromIndex:h,toIndex:v,trigger:"dnd"})},M=({focusId:h})=>{l.value&&ae().then(()=>{te({selector:`#${h}`})})},S=h=>{const _=Math.max(1,h-1),f=`${r.value}_${_}_up`;E({focusId:f,fromIndex:h,toIndex:h-1,trigger:"moveRowUp"}),M({focusId:f})},x=h=>{const _=Math.min(a.value.length-2,h+1),f=`${r.value}_${_}_down`;E({focusId:f,fromIndex:h,toIndex:h+1,trigger:"moveRowDown"}),M({focusId:f})},D=(h,_)=>{if(!(!i.value||o.value)){if(h!=null&&h.dataTransfer){h.dataTransfer.effectAllowed="move",h.dataTransfer.setData("text/plain",`${_}`),b();const f=w(h);f&&h.dataTransfer.setDragImage(f.element,f.offsetX,f.offsetY)}n.value=_}},p=(h,_)=>{var v,y;if(!i.value||o.value)return;h.preventDefault();const f=(y=(v=h.currentTarget)==null?void 0:v.getBoundingClientRect)==null?void 0:y.call(v);if(f){const L=f.top+f.height/2;c.value=h.clientY<L?"before":"after"}else c.value="after";d.value=_},K=(h,_)=>{var v,y;if(!i.value||o.value)return;const f=h.relatedTarget;(y=(v=h.currentTarget)==null?void 0:v.contains)!=null&&y.call(v,f)||d.value===_&&(d.value=void 0,c.value=void 0)},P=(h,_)=>{!i.value||o.value||(h.preventDefault(),n.value!==void 0&&(R({fromIndex:n.value,position:c.value||"after",rowIndex:_}),b(),n.value=void 0,d.value=void 0,c.value=void 0))},X=()=>{b(),n.value=void 0,d.value=void 0,c.value=void 0};return{canMoveRowDown:u(()=>h=>h<a.value.length-1),canMoveRowUp:u(()=>h=>h>0),dragOverPosition:c,dragOverRowIndex:d,draggedRowIndex:n,onDragleave:K,moveRowDown:x,moveRowUp:S,onDragend:X,onDragover:p,onDragstart:D,onDrop:P}}function ft(e,{getRowKey:t=()=>{}}){const o=s(e,"addRow"),l=s(e,"columns"),r=s(e,"isAddable"),i=s(e,"isEditable"),a=s(e,"prepareEditModel"),n=s(e,"rows"),d=C(void 0),c=C(void 0),A=C(!1),b=u(()=>!!d.value||A.value),w=u(()=>r.value?B(o.value):!1),E=u(()=>i.value?l.value.some(D=>{var p;return!!((p=D.formElement)!=null&&p.required)}):!1),R=D=>{if(!B(a.value))return;const p=a.value(D);if((p==null?void 0:p.model)!==void 0)return $(p.model)};return{activeEditRowKey:d,activeEditModel:c,canAddRow:w,hasActiveEditRow:b,hasRequiredEditableColumns:E,isAddRowActive:A,onAddRow:()=>{b.value||!w.value||(d.value=void 0,c.value=R({rows:n.value}),A.value=!0)},onCancelEditRow:({trigger:D,id:p}={})=>{d.value=void 0,c.value=void 0,A.value=!1,D==="cancel"?setTimeout(()=>{te({selector:`#${p}_edit`})}):D==="save"&&setTimeout(()=>{te({selector:`#${p}`})})},onEditRow:({row:D,rowIndex:p})=>{A.value||(c.value=R({row:D,rowIndex:p,rows:n.value}),d.value=t({row:D,rowIndex:p}))}}}function bt(e){const t=s(e,"icons");return{iconsLocal:u(()=>({actionAddRow:Le,...t.value}))}}function wt(e){const t=s(e,"keyId"),o=s(e,"rows"),l=s(e,"rowsFooter"),r=u(()=>o.value.length>0),i=u(()=>l.value.length>0);return{getRowKey:({row:n,rowIndex:d,isFooter:c=!1})=>{let A=d;if(t.value){const w=k(n,t.value);le(w)||(A=w)}return`${c?"footer":"body"}_${A}`},hasRows:r,hasRowsFooter:i}}function vt(e){const t=s(e,"texts");return{textsLocal:u(()=>({actionsColumn:"_A_TABLE_FORM_ACTIONS_",actionAddRow:"_A_TABLE_FORM_ADD_ROW_",actionDelete:"_A_TABLE_FORM_DELETE_",actionDeleteConfirmBody:"_A_TABLE_FORM_DELETE_CONFIRM_BODY_",actionDeleteConfirmClose:"_A_TABLE_FORM_DELETE_CONFIRM_CLOSE_",actionDeleteConfirmHeader:"_A_TABLE_FORM_DELETE_CONFIRM_HEADER_",actionDeleteConfirmSave:"_A_TABLE_FORM_DELETE_CONFIRM_SAVE_",actionEdit:"_A_TABLE_FORM_EDIT_",actionEditCancel:"_A_TABLE_FORM_EDIT_CANCEL_",actionEditSave:"_A_TABLE_FORM_EDIT_SAVE_",editInfoText:void 0,emptyText:"_A_TABLE_FORM_EMPTY_",reorderColumn:"_A_TABLE_FORM_REORDER_COLUMN_",reorderDown:"_A_TABLE_FORM_MOVE_DOWN_",reorderHandle:"_A_TABLE_FORM_REORDER_",reorderUp:"_A_TABLE_FORM_MOVE_UP_",...t.value}))}}function At(e){const t=s(e,"widths");return{widthsLocal:u(()=>({actionsColumnSingle:56,actionsColumnDouble:112,dndColumn:56,...t.value}))}}const Q={name:"ATableForm",props:{actionsClasses:{type:Object,required:!1,default:()=>({})},actionsDisabledCallback:{type:Object,required:!1,default:()=>({})},actionsHideCallback:{type:Object,required:!1,default:()=>({})},actionsTitleCallback:{type:Object,required:!1,default:()=>({})},addRow:{type:Function,required:!1,default:void 0},columns:{type:Array,required:!0},columnsDefaultValue:{type:[String,Number],required:!1,default:""},changeModel:{type:Function,required:!1,default:void 0},errorIcon:{type:String,required:!1,default:Oe},extra:{type:Object,required:!1,default:void 0},focusAfterMove:{type:Boolean,required:!1,default:!0},icons:{type:Object,required:!1,default:()=>({})},id:{type:String,required:!1,default:()=>$e("a_table_form_")},isActionsSticky:{type:Boolean,required:!1,default:!1},isAddable:{type:Boolean,required:!1,default:!1},isColumnsGrow:{type:Boolean,required:!1,default:!1},isDeletable:{type:Boolean,required:!1,default:!1},isDeletableConfirm:{type:Boolean,required:!1,default:!1},isDragAndDrop:{type:Boolean,required:!1,default:!1},isEditable:{type:Boolean,required:!1,default:!1},keyId:{type:String,required:!1,default:void 0},label:{type:[String,Number],required:!1,default:""},labelClass:{type:[String,Object,Array],required:!1,default:void 0},labelTag:{type:String,required:!1,default:"h2"},prepareEditModel:{type:Function,required:!1,default:void 0},rowClass:{type:[String,Object,Array,Function],required:!1,default:void 0},rows:{type:Array,required:!1,default:()=>[]},rowsFooter:{type:Array,required:!1,default:()=>[]},saveRow:{type:Function,required:!1,default:()=>{}},texts:{type:Object,required:!1,default:()=>({})},widths:{type:Object,required:!1,default:()=>({})}},emits:["deleteRow","moveRow","updateRows"],setup(e,t){const o=s(e,"actionsDisabledCallback"),l=s(e,"actionsTitleCallback"),{allColumnsLength:r,hasActionsColumn:i}=ct(e),{getRowKey:a,hasRows:n,hasRowsFooter:d}=wt(e),{textsLocal:c}=vt(e),{widthsLocal:A}=At(e),{iconsLocal:b}=bt(e),{actionsClassesLocal:w}=dt(e),{columnsStylesGrow:E,destroyColumnsGrowObserver:R,initColumnsGrowObserver:M}=_t(e,{hasActionsColumn:i,widthsLocal:A});Fe(()=>{M()}),xe(()=>{R()});const{activeEditRowKey:S,activeEditModel:x,canAddRow:D,hasActiveEditRow:p,hasRequiredEditableColumns:K,isAddRowActive:P,onAddRow:X,onCancelEditRow:h,onEditRow:_}=ft(e,{getRowKey:a}),{canMoveRowDown:f,canMoveRowUp:v,dragOverPosition:y,dragOverRowIndex:L,draggedRowIndex:T,moveRowDown:O,moveRowUp:q,onDragend:H,onDragleave:Y,onDragover:I,onDragstart:N,onDrop:ne}=ht(e,t,{isDndDisabled:p}),{onDeleteRow:re}=mt(e,t),de=u(()=>{if(p.value)return!0;const z=k(o.value,"add");return B(z)?z():!1}),ce=u(()=>{const z=k(l.value,"add");return B(z)?z():c.value.actionAddRow});return{activeEditRowKey:S,activeEditModel:x,allColumnsLength:r,addTitle:ce,canAddRow:D,canMoveRowDown:f,canMoveRowUp:v,actionsClassesLocal:w,columnsStylesGrow:E,draggedRowIndex:T,dragOverPosition:y,dragOverRowIndex:L,getRowKey:a,hasActionsColumn:i,hasActiveEditRow:p,hasRequiredEditableColumns:K,hasRows:n,hasRowsFooter:d,iconsLocal:b,isAddDisabled:de,isAddRowActive:P,moveRowDown:O,moveRowUp:q,onAddRow:X,onCancelEditRow:h,onDeleteRow:re,onDragend:H,onDragleave:Y,onDragover:I,onDragstart:N,onDrop:ne,onEditRow:_,textsLocal:c,widthsLocal:A}},render(){return m("div",{class:"a_table_form"},[this.label&&m(W,{class:["a_table_form__label",this.labelClass],html:this.label,tag:this.labelTag}),this.hasRequiredEditableColumns&&m(ve),m("div",{class:"a_table_form__wrapper"},[m("table",{id:this.id,class:["a_table_form__table",{a_table_form_drag_active:this.draggedRowIndex!==void 0}]},[m("thead",{class:"a_table_form__head"},[m(ee,{id:this.id,actionsClasses:this.actionsClasses,actionsDisabledCallback:this.actionsDisabledCallback,actionsHideCallback:this.actionsHideCallback,actionsTitleCallback:this.actionsTitleCallback,allColumnsLength:this.allColumnsLength,canMoveRowDown:this.canMoveRowDown,canMoveRowUp:this.canMoveRowUp,cellTag:"th",changeModel:this.changeModel,columns:this.columns,columnsStylesGrow:this.columnsStylesGrow,draggedRowIndex:this.draggedRowIndex,extra:this.extra,hasActionsColumn:this.hasActionsColumn,hasActiveEditRow:!1,isActionsSticky:this.isActionsSticky,isActiveEditMode:!1,isDeletable:this.isDeletable,isDeletableConfirm:this.isDeletableConfirm,isDndDisabled:this.hasActiveEditRow,isDragAndDrop:this.isDragAndDrop,isEditable:this.isEditable,isHeader:!0,moveRowDown:this.moveRowDown,moveRowUp:this.moveRowUp,onCancelEditRow:this.onCancelEditRow,onDeleteRow:this.onDeleteRow,onDragend:this.onDragend,onDragstart:this.onDragstart,onEditRow:this.onEditRow,row:{},rowIndex:0,rows:this.rows,saveRow:this.saveRow,texts:this.textsLocal,trClass:"a_table_form__row a_table_form__row_head",widths:this.widthsLocal},this.$slots)]),m("tbody",{class:"a_table_form__body"},this.hasRows||this.isAddRowActive?[...this.rows.map((e,t)=>{const o=this.getRowKey({row:e,rowIndex:t});return m(ee,{key:o,id:this.id,actionsClasses:this.actionsClassesLocal,actionsDisabledCallback:this.actionsDisabledCallback,actionsHideCallback:this.actionsHideCallback,actionsTitleCallback:this.actionsTitleCallback,allColumnsLength:this.allColumnsLength,canMoveRowDown:this.canMoveRowDown,canMoveRowUp:this.canMoveRowUp,changeModel:this.changeModel,columns:this.columns,columnsStylesGrow:this.columnsStylesGrow,draggedRowIndex:this.draggedRowIndex,editModel:this.activeEditRowKey===o?this.activeEditModel:void 0,errorIcon:this.errorIcon,extra:this.extra,hasActionsColumn:this.hasActionsColumn,hasActiveEditRow:this.hasActiveEditRow,isActionsSticky:this.isActionsSticky,isActiveEditMode:this.activeEditRowKey===o,isCreateMode:!1,isDeletable:this.isDeletable,isDeletableConfirm:this.isDeletableConfirm,isDndDisabled:this.hasActiveEditRow,isDragAndDrop:this.isDragAndDrop,isEditable:this.isEditable,moveRowDown:this.moveRowDown,moveRowUp:this.moveRowUp,onCancelEditRow:this.onCancelEditRow,onDeleteRow:this.onDeleteRow,onDragend:this.onDragend,onDragleave:this.onDragleave,onDragover:this.onDragover,onDragstart:this.onDragstart,onDrop:this.onDrop,onEditRow:this.onEditRow,row:e,rowClass:this.rowClass,rowIndex:t,rows:this.rows,saveRow:this.saveRow,texts:this.textsLocal,widths:this.widthsLocal,trClass:["a_table_form__row",{a_table_form__row_drag_after:this.dragOverRowIndex===t&&this.dragOverPosition==="after",a_table_form__row_drag_before:this.dragOverRowIndex===t&&this.dragOverPosition==="before",a_table_form__row_drag_over:this.dragOverRowIndex===t,a_table_form__row_dragging:this.draggedRowIndex===t}]},this.$slots)}),this.isAddRowActive&&m(ee,{id:this.id,actionsClasses:this.actionsClassesLocal,actionsDisabledCallback:this.actionsDisabledCallback,actionsHideCallback:this.actionsHideCallback,actionsTitleCallback:this.actionsTitleCallback,allColumnsLength:this.allColumnsLength,canMoveRowDown:this.canMoveRowDown,canMoveRowUp:this.canMoveRowUp,changeModel:this.changeModel,columns:this.columns,columnsStylesGrow:this.columnsStylesGrow,draggedRowIndex:this.draggedRowIndex,editModel:this.activeEditModel,errorIcon:this.errorIcon,extra:this.extra,hasActionsColumn:this.hasActionsColumn,hasActiveEditRow:this.hasActiveEditRow,isActionsSticky:this.isActionsSticky,isActiveEditMode:!0,isCreateMode:!0,isDeletable:!1,isDeletableConfirm:!1,isDndDisabled:!0,isDragAndDrop:this.isDragAndDrop,isEditable:this.isEditable,key:"body_create",moveRowDown:this.moveRowDown,moveRowUp:this.moveRowUp,onCancelEditRow:this.onCancelEditRow,onDeleteRow:this.onDeleteRow,onDragend:this.onDragend,onDragleave:this.onDragleave,onDragover:this.onDragover,onDragstart:this.onDragstart,onDrop:this.onDrop,onEditRow:this.onEditRow,row:{},rowClass:this.rowClass,rowIndex:this.rows.length,rows:this.rows,saveRow:this.addRow,texts:this.textsLocal,trClass:"a_table_form__row a_table_form__row_create",widths:this.widthsLocal},this.$slots)]:[m("tr",{class:"a_table_form__row a_table_form__row_empty"},[m("td",{class:"a_table_form__cell a_table_form__empty",colspan:this.allColumnsLength},[m(W,{tag:"span",text:this.textsLocal.emptyText})])])]),this.hasRowsFooter&&m("tfoot",{class:"a_table_form__foot"},this.rowsFooter.map((e,t)=>m(ee,{id:this.id,actionsClasses:this.actionsClassesLocal,actionsDisabledCallback:this.actionsDisabledCallback,actionsHideCallback:this.actionsHideCallback,actionsTitleCallback:this.actionsTitleCallback,allColumnsLength:this.allColumnsLength,canMoveRowDown:this.canMoveRowDown,canMoveRowUp:this.canMoveRowUp,changeModel:this.changeModel,columns:this.columns,columnsStylesGrow:this.columnsStylesGrow,draggedRowIndex:this.draggedRowIndex,extra:this.extra,hasActionsColumn:this.hasActionsColumn,hasActiveEditRow:this.hasActiveEditRow,isActionsSticky:this.isActionsSticky,isActiveEditMode:!1,isDeletable:this.isDeletable,isDeletableConfirm:this.isDeletableConfirm,isDndDisabled:this.hasActiveEditRow,isDragAndDrop:this.isDragAndDrop,isEditable:this.isEditable,isFooter:!0,key:this.getRowKey({isFooter:!0,row:e,rowIndex:t}),moveRowDown:this.moveRowDown,moveRowUp:this.moveRowUp,onCancelEditRow:this.onCancelEditRow,onDeleteRow:this.onDeleteRow,onDragend:this.onDragend,onDragstart:this.onDragstart,onEditRow:this.onEditRow,row:e,rowClass:this.rowClass,rowIndex:t,rows:this.rowsFooter,saveRow:this.saveRow,texts:this.textsLocal,widths:this.widthsLocal,trClass:"a_table_form__row a_table_form__row_footer"},this.$slots)))])]),this.canAddRow&&m("div",{class:"a_mt_3 a_text_right"},[m(U,{class:this.actionsClassesLocal.addRow,disabled:this.isAddDisabled,extra:this.extra,iconLeft:this.iconsLocal.actionAddRow,text:this.textsLocal.actionAddRow,textScreenReader:this.addTitle,title:this.addTitle,onClick:this.onAddRow})])])}};function Et(){return{codeHtml:`<a-simple-table
  :columns="columns"
  :rows-footer="rowsFooter"
  :rows="rows"
  key-id="id"
  label="_A_TABLE_FORM_EXAMPLE_LABEL_"
/>
`}}function Rt(){return{codeJs:`import {
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
};`}}const pt={name:"PageTableFormBasic",components:{AlohaExample:Z,ATableForm:Q},setup(){const{codeHtml:e}=Et(),{codeJs:t}=Rt(),o=[{id:"position",label:"_A_TABLE_FORM_COLUMN_POSITION_",maxWidth:96,minWidth:96,width:96,formElement:{type:"number"}},{id:"name",label:"_A_TABLE_FORM_COLUMN_NAME_",maxWidth:"18rem",minWidth:"12rem",width:"16rem",formElement:{type:"text"}},{id:"team",formElement:{translateData:!0,data:[{label:"_A_TABLE_FORM_TEAM_NORTH_",value:"north"},{label:"_A_TABLE_FORM_TEAM_WEST_",value:"west"},{label:"_A_TABLE_FORM_TEAM_SOUTH_",value:"south"},{label:"_A_TABLE_FORM_TEAM_EAST_",value:"east"}],keyId:"value",keyLabel:"label",type:"select"},label:"_A_TABLE_FORM_COLUMN_TEAM_",minWidth:"12rem"},{id:"score",footerDefaultValue:"68",footerKeyLabel:"score",formElement:{type:"integer"},label:"_A_TABLE_FORM_COLUMN_SCORE_",maxWidth:120,minWidth:120,width:120}],l=C([{id:1,name:"Марта Иванова",position:1,score:18,team:"north"},{id:2,name:"Олег Сидоров",position:2,score:17,team:"west"},{id:3,name:"Анна Петрова",position:3,score:16,team:"south"},{id:4,name:"Игорь Ковалёв",position:4,score:17,team:"east"}]);return{codeHtml:e,codeJs:t,columns:o,rows:l,rowsFooter:[{name:"_A_TABLE_FORM_FOOTER_TOTAL_",score:68}]}}};function yt(e,t,o,l,r,i){const a=g("a-table-form"),n=g("aloha-example");return G(),J(n,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TABLE_FORM_EXAMPLE_HEADER_"},{default:V(()=>[F(a,{columns:e.columns,"rows-footer":e.rowsFooter,rows:e.rows,"key-id":"id",label:"_A_TABLE_FORM_EXAMPLE_LABEL_"},null,8,["columns","rows-footer","rows"])]),_:1},8,["code-html","code-js"])}const Ct=j(pt,[["render",yt]]);function gt(){return{codeHtml:`<a-simple-table
  :columns="columns"
  :is-drag-and-drop="true"
  :rows-footer="rowsFooter"
  :rows="rows"
  key-id="id"
  label="_A_TABLE_FORM_EXAMPLE_LABEL_"
  @update-rows="updateRows"
/>
`}}function Dt(){return{codeJs:`import {
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
};`}}const Tt={name:"PageTableFormDND",components:{AlohaExample:Z,ATableForm:Q},setup(){const{codeHtml:e}=gt(),{codeJs:t}=Dt(),o=[{id:"position",label:"_A_TABLE_FORM_COLUMN_POSITION_",maxWidth:96,minWidth:96,width:96,formElement:{type:"text"}},{id:"name",formElement:{type:"text"},label:"_A_TABLE_FORM_COLUMN_NAME_",maxWidth:"18rem",minWidth:"12rem",width:"16rem"},{id:"team",formElement:{translateData:!0,data:[{label:"_A_TABLE_FORM_TEAM_NORTH_",value:"north"},{label:"_A_TABLE_FORM_TEAM_WEST_",value:"west"},{label:"_A_TABLE_FORM_TEAM_SOUTH_",value:"south"},{label:"_A_TABLE_FORM_TEAM_EAST_",value:"east"}],keyId:"value",keyLabel:"label",type:"select"},label:"_A_TABLE_FORM_COLUMN_TEAM_",minWidth:"12rem"},{id:"score",footerDefaultValue:"68",footerKeyLabel:"score",formElement:{type:"integer"},label:"_A_TABLE_FORM_COLUMN_SCORE_",maxWidth:120,minWidth:120,width:120}],l=C([{id:1,name:"Марта Иванова",position:1,score:18,team:"north"},{id:2,name:"Олег Сидоров",position:2,score:17,team:"west"},{id:3,name:"Анна Петрова",position:3,score:16,team:"south"},{id:4,name:"Игорь Ковалёв",position:4,score:17,team:"east"}]);return{codeHtml:e,codeJs:t,columns:o,rows:l,rowsFooter:[{name:"_A_TABLE_FORM_FOOTER_TOTAL_",score:68}],updateRows:({rows:a,trigger:n})=>{l.value=a,console.log("trigger",n)}}}};function Mt(e,t,o,l,r,i){const a=g("a-table-form"),n=g("aloha-example");return G(),J(n,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TABLE_FORM_DND_HEADER_",description:"_A_TABLE_FORM_DND_DESCRIPTION_",props:"is-drag-and-drop"},{default:V(()=>[F(a,{columns:e.columns,"is-drag-and-drop":!0,"rows-footer":e.rowsFooter,rows:e.rows,"key-id":"id",label:"_A_TABLE_FORM_EXAMPLE_LABEL_",onUpdateRows:e.updateRows},null,8,["columns","rows-footer","rows","onUpdateRows"])]),_:1},8,["code-html","code-js"])}const Lt=j(Tt,[["render",Mt]]);function Ot(){return{codeHtml:`<a-checkbox>
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
`}}function Ft(){return{codeJs:`import {
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
};`}}const xt={name:"PageTableFormEdit",components:{ACheckbox:se,AlohaExample:Z,ATableForm:Q},setup(){const{codeHtml:e}=Ot(),{codeJs:t}=Ft(),o=[{label:"is-deletable-confirm",value:"is-deletable-confirm"},{label:"is-deletable",value:"is-deletable"},{label:"is-editable",value:"is-editable"},{label:"is-addable",value:"is-addable"}],l=C(["is-deletable-confirm","is-deletable","is-editable","is-addable"]),r={actionEditCancel:"abbrechen",actionEditSave:"speichern",editInfoText:"Nur diese Zeile ist gerade im Bearbeitungsmodus."},i=[{id:"position",label:"_A_TABLE_FORM_COLUMN_POSITION_",maxWidth:96,minWidth:96,width:96,formElement:{controlsType:"none",type:"integer"}},{id:"name",formElement:{type:"text",required:!0},keyLabel:"name",label:"_A_TABLE_FORM_COLUMN_NAME_",maxWidth:"18rem",minWidth:"12rem",width:"16rem"},{id:"team",formElement:{data:[{label:"_A_TABLE_FORM_TEAM_NORTH_",value:"north"},{label:"_A_TABLE_FORM_TEAM_WEST_",value:"west"},{label:"_A_TABLE_FORM_TEAM_SOUTH_",value:"south"},{label:"_A_TABLE_FORM_TEAM_EAST_",value:"east"}],keyId:"value",keyLabel:"label",translateData:!0,type:"select"},label:"_A_TABLE_FORM_COLUMN_TEAM_",minWidth:"12rem"},{id:"score",footerDefaultValue:"68",footerKeyLabel:"score",formElement:{controlsType:"none",min:0,type:"integer"},label:"_A_TABLE_FORM_COLUMN_SCORE_",maxWidth:120,minWidth:120,width:120}],a=C([{id:1,name:"Marta Ivanova",position:1,score:18,team:"north"},{id:2,name:"Oleg Sidorov",position:2,score:17,team:"west"},{id:3,name:"Anna Petrova",position:3,score:16,team:"south"},{id:4,name:"Igor Kovalev",position:4,score:17,team:"east"}]);return{addRow:({model:b})=>{var E;console.log("model ",b);const w={};if((E=b.name)!=null&&E.trim()||(w.name=["Name ist erforderlich."]),b.team||(w.team=["Team ist erforderlich."]),b.score<18&&(w.score=["Score must be at least 18."]),Object.keys(w).length)return{errors:w};a.value.push({id:a.value.length+1,...b})},codeHtml:e,codeJs:t,columns:i,dataCheckbox:o,deleteRow:({row:b,rowIndex:w})=>{a.value.splice(w,1),console.log("row",b),console.log("rowIndex",w)},modelCheckbox:l,rows:a,rowsFooter:[{name:"_A_TABLE_FORM_FOOTER_TOTAL_",score:68}],saveRow:async({model:b,rowIndex:w})=>{var R;await new Promise(M=>{setTimeout(M,300)});const E={};if((R=b.name)!=null&&R.trim()||(E.name=["Name ist erforderlich."]),b.team||(E.team=["Team ist erforderlich."]),b.score<18&&(E.score=["Score must be at least 18."]),Object.keys(E).length)return{errors:E};a.value.splice(w,1,b)},texts:r}}};function kt(e,t,o,l,r,i){const a=g("a-checkbox"),n=g("a-table-form"),d=g("aloha-example");return G(),J(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TABLE_FORM_EDIT_HEADER_",description:"_A_TABLE_FORM_EDIT_DESCRIPTION_",props:["is-addable","is-deletable","is-deletable-confirm","is-editable","save-row","texts"]},{default:V(()=>[F(a,{class:"a_mb_4",modelValue:e.modelCheckbox,"onUpdate:modelValue":t[0]||(t[0]=c=>e.modelCheckbox=c),data:e.dataCheckbox,"translate-data":!0,"key-id":"value","key-label":"label"},null,8,["modelValue","data"]),F(n,{"add-row":e.addRow,columns:e.columns,"is-addable":e.modelCheckbox.includes("is-addable"),"is-deletable-confirm":e.modelCheckbox.includes("is-deletable-confirm"),"is-deletable":e.modelCheckbox.includes("is-deletable"),"is-editable":e.modelCheckbox.includes("is-editable"),"rows-footer":e.rowsFooter,rows:e.rows,"save-row":e.saveRow,texts:e.texts,"key-id":"id",label:"_A_TABLE_FORM_EXAMPLE_LABEL_",onDeleteRow:e.deleteRow},null,8,["add-row","columns","is-addable","is-deletable-confirm","is-deletable","is-editable","rows-footer","rows","save-row","texts","onDeleteRow"])]),_:1},8,["code-html","code-js"])}const Bt=j(xt,[["render",kt]]);function It(){return{codeHtml:`<a-checkbox
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
`}}function St(){return{codeJs:`import {
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
};`}}const qt={name:"PageTableFormGrow",components:{ACheckbox:se,AlohaExample:Z,ATableForm:Q},setup(){const{codeHtml:e}=It(),{codeJs:t}=St(),o=[{label:"is-deletable",value:"is-deletable"},{label:"is-editable",value:"is-editable"},{label:"is-drag-and-drop",value:"is-drag-and-drop"}],l=C(["is-deletable","is-editable"]),r=[{id:"position",label:"_A_TABLE_FORM_COLUMN_POSITION_",minWidth:96,width:96,grow:1,formElement:{controlsType:"none",type:"integer"}},{id:"name",formElement:{type:"text"},label:"_A_TABLE_FORM_COLUMN_NAME_",minWidth:"12rem",width:"16rem",grow:2},{id:"team",formElement:{data:[{label:"_A_TABLE_FORM_TEAM_NORTH_",value:"north"},{label:"_A_TABLE_FORM_TEAM_WEST_",value:"west"},{label:"_A_TABLE_FORM_TEAM_SOUTH_",value:"south"},{label:"_A_TABLE_FORM_TEAM_EAST_",value:"east"}],keyId:"value",keyLabel:"label",translateData:!0,type:"select"},label:"_A_TABLE_FORM_COLUMN_TEAM_",minWidth:"12rem",width:"12rem",grow:1},{id:"score",footerDefaultValue:"68",footerKeyLabel:"score",formElement:{controlsType:"none",min:0,type:"integer"},label:"_A_TABLE_FORM_COLUMN_SCORE_",minWidth:120,width:120,grow:1}],i=[{id:"position",label:"_A_TABLE_FORM_COLUMN_POSITION_",minWidth:96,width:96,grow:1,formElement:{controlsType:"none",type:"integer"}},{id:"name",formElement:{type:"text"},label:"_A_TABLE_FORM_COLUMN_NAME_",minWidth:"12rem",width:"16rem",grow:3}],a=C([{id:1,name:"Marta Ivanova",position:1,score:18,team:"north"},{id:2,name:"Oleg Sidorov",position:2,score:17,team:"west"},{id:3,name:"Anna Petrova",position:3,score:16,team:"south"},{id:4,name:"Igor Kovalev",position:4,score:17,team:"east"}]);return{codeHtml:e,codeJs:t,columns1:r,columns2:i,dataCheckbox:o,deleteRow:({rowIndex:b})=>{a.value.splice(b,1)},modelCheckbox:l,rows:a,rowsFooter:[{name:"_A_TABLE_FORM_FOOTER_TOTAL_",score:68}],saveRow:({model:b,rowIndex:w})=>{a.value.splice(w,1,b)},texts:{editInfoText:"Only one row can be edited at a time."}}}},Nt={class:"a_mb_4"};function Pt(e,t,o,l,r,i){const a=g("a-checkbox"),n=g("a-table-form"),d=g("aloha-example");return G(),J(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TABLE_FORM_GROW_HEADER_",description:"_A_TABLE_FORM_GROW_DESCRIPTION_",props:["is-columns-grow","is-deletable","is-drag-and-drop","is-editable"]},{default:V(()=>[F(a,{class:"a_mb_4",modelValue:e.modelCheckbox,"onUpdate:modelValue":t[0]||(t[0]=c=>e.modelCheckbox=c),data:e.dataCheckbox,"key-id":"value","key-label":"label"},null,8,["modelValue","data"]),ke("div",Nt,[F(n,{columns:e.columns1,"is-columns-grow":!0,"is-deletable":e.modelCheckbox.includes("is-deletable"),"is-drag-and-drop":e.modelCheckbox.includes("is-drag-and-drop"),"is-editable":e.modelCheckbox.includes("is-editable"),"rows-footer":e.rowsFooter,rows:e.rows,"save-row":e.saveRow,texts:e.texts,"key-id":"id",label:"_A_TABLE_FORM_EXAMPLE_LABEL_",onDeleteRow:e.deleteRow},null,8,["columns","is-deletable","is-drag-and-drop","is-editable","rows-footer","rows","save-row","texts","onDeleteRow"])]),F(n,{columns:e.columns2,"is-columns-grow":!0,"is-deletable":e.modelCheckbox.includes("is-deletable"),"is-drag-and-drop":e.modelCheckbox.includes("is-drag-and-drop"),"is-editable":e.modelCheckbox.includes("is-editable"),"rows-footer":e.rowsFooter,rows:e.rows,"save-row":e.saveRow,texts:e.texts,"key-id":"id",label:"_A_TABLE_FORM_EXAMPLE_LABEL_",onDeleteRow:e.deleteRow},null,8,["columns","is-deletable","is-drag-and-drop","is-editable","rows-footer","rows","save-row","texts","onDeleteRow"])]),_:1},8,["code-html","code-js"])}const Ht=j(qt,[["render",Pt]]);function Ut(){return{codeHtml:`<a-one-checkbox
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
`}}function $t(){return{codeJs:`import {
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
};`}}const Wt={name:"PageTableFormSticky",components:{AlohaExample:Z,AOneCheckbox:Ae,ATableForm:Q},setup(){const{codeHtml:e}=Ut(),{codeJs:t}=$t(),o=C(!0),l=Array.from({length:20},(i,a)=>{const n=a+1;return{id:`c${n}`,label:`${n}`,maxWidth:120,minWidth:120,width:120,formElement:{controlsType:"none",type:"integer"}}}),r=C(Array.from({length:6},(i,a)=>{const n={id:a+1};return l.forEach((d,c)=>{n[d.id]=(a+1)*100+c+1}),n}));return{codeHtml:e,codeJs:t,columns:l,isActionsSticky:o,rows:r}}};function jt(e,t,o,l,r,i){const a=g("a-one-checkbox"),n=g("a-table-form"),d=g("aloha-example");return G(),J(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TABLE_FORM_STICKY_HEADER_",description:"_A_TABLE_FORM_STICKY_DESCRIPTION_",props:["is-actions-sticky","is-deletable-confirm","is-editable"]},{default:V(()=>[F(a,{class:"a_mb_4",modelValue:e.isActionsSticky,"onUpdate:modelValue":t[0]||(t[0]=c=>e.isActionsSticky=c),label:"isActionsSticky"},null,8,["modelValue"]),F(n,{columns:e.columns,"is-actions-sticky":e.isActionsSticky,"is-deletable-confirm":!0,"is-editable":!0,rows:e.rows,"key-id":"id",label:"20 columns"},null,8,["columns","is-actions-sticky","rows"])]),_:1},8,["code-html","code-js"])}const Gt=j(Wt,[["render",jt]]);function Jt(){return{pageTitle:u(()=>Ee({placeholder:"_A_TABLE_FORM_PAGE_TITLE_"}))}}const Vt={name:"PageTableForm",components:{AlohaPage:ue,PageTableFormBasic:Ct,PageTableFormDND:Lt,PageTableFormEdit:Bt,PageTableFormGrow:Ht,PageTableFormSticky:Gt},setup(){const{pageTitle:e}=Jt();return{pageTitle:e}}};function Kt(e,t,o,l,r,i){const a=g("page-table-form-basic"),n=g("page-table-form-d-n-d"),d=g("page-table-form-edit"),c=g("page-table-form-sticky"),A=g("page-table-form-grow"),b=g("aloha-page");return G(),J(b,{"page-title":e.pageTitle},{body:V(()=>[F(a),F(n),F(d),F(c),F(A)]),_:1},8,["page-title"])}const uo=j(Vt,[["render",Kt]]);export{uo as default};
