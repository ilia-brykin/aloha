import{A as z,a as ue}from"./chunk.AlohaExample.C3VeuK1Z.js";import{d as _e,s as Y,A as W,c as U,b as me,f as he,e as fe,h as be,i as we,j as ve,_ as j,k as oe,l as Ae,g as Ee}from"./bundle.index.5dnSgEX1.js";import{t as s,d as _,h as m,M as ee,l as Re,aX as pe,L as ye,O as Ce,C as ge,aY as De,g as Te,r as C,j as Me,P as Oe,E as Le,z as Fe,o as xe,Y as G,W as J,aU as V,f as D,$ as M,_ as ke}from"./chunk.vendor.CWr53wb5.js";import{i as Be,j as I,r as S,l as $,M as Ie,T as Se,v as qe,h as Ne,W as Pe,a as ae,d as He,b as Ue,u as $e}from"./chunk.vendor-lodash.CWoM99Se.js";import{A as We}from"./chunk.AFormElement.C33x5l3z.js";import"./chunk.APageTabTitle.CjJIu-bA.js";import"./chunk.AlohaHighlightjs.Cyb5M4zM.js";import"./chunk.translations-ar.CE_3yjUF.js";import"./chunk.translations-de.R0YWY91X.js";import"./chunk.translations-en.DQ0Z316F.js";import"./chunk.translations-es.XN0jVhL-.js";import"./chunk.translations-fr.D5Z6d0-l.js";import"./chunk.translations-hr.BRYjTgZh.js";import"./chunk.translations-it.D6SsMt4V.js";import"./chunk.translations-ru.BfK09XlZ.js";function je(e){const t=s(e,"column"),o=s(e,"isEditable"),l=s(e,"isEditMode");return{disabledLocal:_(()=>{var n,a;return!!((a=(n=t.value)==null?void 0:n.formElement)!=null&&a.disabled)||o.value&&!l.value})}}function Ge(e){const t=s(e,"column"),o=s(e,"isEditable"),l=s(e,"isEditMode"),i=s(e,"isFooter");return{readonlyLocal:_(()=>{var a,r,d,c;return i.value?!0:o.value?(r=(a=t.value)==null?void 0:a.formElement)!=null&&r.useRowReadonly?!l.value:!!((c=(d=t.value)==null?void 0:d.formElement)!=null&&c.readonly):!0})}}function Je(e){const t=s(e,"column"),o=s(e,"isFooter"),l=_(()=>o.value?t.value.footerSlot:t.value.slot),i=_(()=>o.value?t.value.footerSlotAfter:t.value.slotAfter),n=_(()=>!!l.value),a=_(()=>!!i.value);return{hasSlot:n,hasSlotAfter:a,slotName:l,slotNameAfter:i}}function te(e){if(!(e==null||e===""))return typeof e=="number"?`${e}px`:e}function se(e){const t=s(e,"column");return{columnStyles:_(()=>{const l={},i=te(t.value.width),n=te(t.value.maxWidth),a=te(t.value.minWidth);return i&&(l.width=i),n&&(l.maxWidth=n),a&&(l.minWidth=a),Be(t.value.style)?{...l,...t.value.style}:t.value.style?[l,t.value.style]:l})}}const Ve={name:"ATableFormCell",props:{column:{type:Object,required:!0},columnIndex:{type:Number,required:!0},columnStyle:{type:Object,required:!1,default:void 0},errorIcon:{type:String,required:!1,default:void 0},errors:{type:Object,required:!1,default:()=>({})},id:{type:String,required:!0},isEditMode:{type:Boolean,required:!1,default:!1},isEditable:{type:Boolean,required:!1,default:!1},isFooter:{type:Boolean,required:!1,default:!1},row:{type:Object,required:!0},rowData:{type:Object,required:!1,default:void 0},rowIndex:{type:Number,required:!0},rows:{type:Array,required:!0},tag:{type:String,required:!1,default:"td"}},emits:["updateRowData"],setup(e){const{columnStyles:t}=se({column:e.column}),{readonlyLocal:o}=Ge(e),{disabledLocal:l}=je(e),{hasSlot:i,hasSlotAfter:n,slotName:a,slotNameAfter:r}=Je(e),d=_(()=>e.rowData||e.row);return{columnStyles:t,disabledLocal:l,hasSlot:i,hasSlotAfter:n,readonlyLocal:o,rowDataLocal:d,slotName:a,slotNameAfter:r}},methods:{updateRowData({item:e,model:t}){this.$emit("updateRowData",{column:this.column,columnId:this.column.id,item:e,model:t,value:t})}},render(){const{type:e="text",...t}=this.column.formElement||{},o={column:this.column,columnIndex:this.columnIndex,row:this.row,rowIndex:this.rowIndex,rows:this.rows};return m(this.tag,{class:["a_table_form__cell",`a_table_form__cell_${this.tag}`,this.column.class,this.isFooter?this.column.classFooter:this.column.classRow],style:[this.columnStyles,this.columnStyle]},[this.hasSlot&&this.$slots[this.slotName]?this.$slots[this.slotName](o):m(We,{id:this.column.id,errorIcon:this.errorIcon,idPrefix:this.id,...t,change:this.updateRowData,disabled:this.disabledLocal,errors:I(this.errors,this.column.id),errorsClass:"a_sr_only",modelValue:I(this.rowDataLocal,this.column.id),readonly:this.readonlyLocal,type:e}),this.hasSlotAfter&&this.$slots[this.slotNameAfter]?this.$slots[this.slotNameAfter](o):null])}};function Ke(e,{idBtnDelete:t=_(()=>""),isActionsDisabled:o=_(()=>!1)}){const l=s(e,"isDeletable"),i=s(e,"isDeletableConfirm"),n=s(e,"onDeleteRow"),a=s(e,"row"),r=s(e,"rowIndex"),d=s(e,"texts"),{closeConfirm:c,openConfirm:v}=_e(),f=()=>{c(),ee().then(()=>{Y({selector:`#${t.value}`})})},b=()=>{v({bodyHtml:d.value.actionDeleteConfirmBody,closeButtonText:d.value.actionDeleteConfirmClose,headerText:d.value.actionDeleteConfirmHeader,save:async()=>{await n.value({row:a.value,rowIndex:r.value}),c()},close:f,saveButtonText:d.value.actionDeleteConfirmSave})};return{onDeleteClick:()=>{if(!o.value){if(i.value){b();return}l.value&&n.value({row:a.value,rowIndex:r.value})}}}}function Xe(e){const t=s(e,"actionsDisabledCallback"),o=s(e,"hasActiveEditRow"),l=s(e,"isActiveEditMode"),i=s(e,"row"),n=s(e,"rowIndex"),a=_(()=>o.value&&!l.value),r=_(()=>{if(a.value)return!0;const c=I(t.value,"delete");return S(c)?c({row:i.value,rowIndex:n.value}):!1}),d=_(()=>{if(a.value)return!0;const c=I(t.value,"edit");return S(c)?c({row:i.value,rowIndex:n.value}):!1});return{isDeleteDisabled:r,isEditDisabled:d}}function Ye(e){const t=s(e,"actionsHideCallback"),o=s(e,"row"),l=s(e,"rowIndex"),i=_(()=>{const a=I(t.value,"delete");return S(a)?a({row:o.value,rowIndex:l.value}):!1}),n=_(()=>{const a=I(t.value,"edit");return S(a)?a({row:o.value,rowIndex:l.value}):!1});return{isDeleteHidden:i,isEditHidden:n}}function ze(e){const t=s(e,"id"),o=_(()=>`${t.value}_delete`),l=_(()=>`${t.value}_edit`),i=_(()=>`${t.value}_cancel`),n=_(()=>`${t.value}_save`);return{idBtnCancel:i,idBtnDelete:o,idBtnEdit:l,idBtnSave:n}}function Ze(e){const t=s(e,"isDeletable"),o=s(e,"isDeletableConfirm"),l=s(e,"isEditable"),i=s(e,"isActiveEditMode"),n=s(e,"widths");return{columnStyles:_(()=>{const r=t.value||o.value,d=l.value||i.value&&r?n.value.actionsColumnDouble:n.value.actionsColumnSingle;return{maxWidth:`${d}px`,minWidth:`${d}px`,width:`${d}px`}})}}function Qe(e){const t=s(e,"row"),o=s(e,"rowIndex"),l=s(e,"texts"),i=s(e,"actionsTitleCallback"),n=_(()=>{const r=I(i.value,"delete");return S(r)?r({row:t.value,rowIndex:o.value}):l.value.actionDelete}),a=_(()=>{const r=I(i.value,"edit");return S(r)?r({row:t.value,rowIndex:o.value}):l.value.actionEdit});return{deleteTitle:n,editTitle:a}}const et={name:"ATableFormCellAction",props:{actionsClasses:{type:Object,required:!1,default:()=>({})},actionsDisabledCallback:{type:Object,required:!1,default:()=>({})},actionsHideCallback:{type:Object,required:!1,default:()=>({})},actionsTitleCallback:{type:Object,required:!1,default:()=>({})},extra:{type:Object,required:!1,default:void 0},hasActiveEditRow:{type:Boolean,required:!1,default:!1},id:{type:String,required:!0},isActionsSticky:{type:Boolean,required:!1,default:!1},isActiveEditMode:{type:Boolean,required:!1,default:!1},isDeletable:{type:Boolean,required:!1,default:!1},isDeletableConfirm:{type:Boolean,required:!1,default:!1},isEditable:{type:Boolean,required:!1,default:!1},isFooter:{type:Boolean,required:!1,default:!1},isHeader:{type:Boolean,required:!1,default:!1},isSaving:{type:Boolean,required:!1,default:!1},onCancelEditRow:{type:Function,required:!0},onDeleteRow:{type:Function,required:!0},onEditRow:{type:Function,required:!0},onSaveEditRow:{type:Function,required:!0},row:{type:Object,required:!0},rowIndex:{type:Number,required:!0},texts:{type:Object,required:!1,default:()=>({})},widths:{type:Object,required:!1,default:()=>({})}},setup(e){const{isDeleteDisabled:t,isEditDisabled:o}=Xe(e),{isDeleteHidden:l,isEditHidden:i}=Ye(e),{idBtnCancel:n,idBtnDelete:a,idBtnEdit:r,idBtnSave:d}=ze(e),{onDeleteClick:c}=Ke(e,{idBtnDelete:a,isActionsDisabled:t}),{columnStyles:v}=Ze(e),{deleteTitle:f,editTitle:b}=Qe(e);return{columnStyles:v,deleteTitle:f,editTitle:b,idBtnCancel:n,idBtnDelete:a,idBtnEdit:r,idBtnSave:d,isDeleteDisabled:t,isDeleteHidden:l,isEditDisabled:o,isEditHidden:i,onDeleteClick:c}},render(){const e=this.isHeader?"th":"td";return m(e,{class:["a_table_form__cell",`a_table_form__cell_${e}`,"a_table_form__cell_actions",{a_table_form__cell_actions_sticky:this.isActionsSticky}],style:this.columnStyles},[this.isHeader?m("span",{class:"a_sr_only"},[m(W,{tag:"span",text:this.texts.actionsColumn})]):this.isFooter?null:m("div",{class:"a_table_form__actions",role:"group"},this.isActiveEditMode?[m(U,{id:this.idBtnCancel,class:["a_table_form__action_button",this.actionsClasses.editCancel],disabled:this.isSaving,extra:this.extra,iconLeft:Re,title:this.texts.actionEditCancel,textScreenReader:this.texts.actionEditCancel,onClick:()=>this.onCancelEditRow({id:this.id,row:this.row,rowIndex:this.rowIndex,trigger:"cancel"})}),m(U,{id:this.idBtnSave,class:["a_table_form__action_button",this.actionsClasses.editSave],disabled:this.isSaving,extra:this.extra,iconLeft:pe,title:this.texts.actionEditSave,textScreenReader:this.texts.actionEditSave,onClick:()=>this.onSaveEditRow({id:this.id,row:this.row,rowIndex:this.rowIndex})})]:[(this.isDeletable||this.isDeletableConfirm)&&!this.isDeleteHidden&&m(U,{id:this.idBtnDelete,class:["a_table_form__action_button",this.actionsClasses.delete],disabled:this.isDeleteDisabled,extra:this.extra,iconLeft:ye,title:this.deleteTitle,textScreenReader:this.deleteTitle,onClick:this.onDeleteClick}),this.isEditable&&!this.isEditHidden&&m(U,{id:this.idBtnEdit,class:["a_table_form__action_button",this.actionsClasses.edit],disabled:this.isEditDisabled,extra:this.extra,iconLeft:Ce,title:this.editTitle,textScreenReader:this.editTitle,onClick:()=>this.onEditRow({id:this.id,row:this.row,rowIndex:this.rowIndex})})])])}};function tt(e){const t=s(e,"id"),o=_(()=>`${t.value}_up`);return{idBtnDown:_(()=>`${t.value}_down`),idBtnUp:o}}const ot={name:"ATableFormCellDnd",props:{canMoveRowDown:{type:Function,required:!0},canMoveRowUp:{type:Function,required:!0},id:{type:String,required:!0},isCreateMode:{type:Boolean,required:!1,default:!1},isDragAndDrop:{type:Boolean,required:!1,default:!1},isDndDisabled:{type:Boolean,required:!1,default:!1},isFooter:{type:Boolean,required:!1,default:!1},isHeader:{type:Boolean,required:!1,default:!1},moveRowDown:{type:Function,required:!0},moveRowUp:{type:Function,required:!0},onDragend:{type:Function,required:!0},onDragstart:{type:Function,required:!0},rowIndex:{type:Number,required:!0},texts:{type:Object,required:!1,default:()=>({})},widths:{type:Object,required:!1,default:()=>({})}},setup(e){const{idBtnDown:t,idBtnUp:o}=tt(e);return{columnStyles:_(()=>({maxWidth:`${e.widths.dndColumn}px`,minWidth:`${e.widths.dndColumn}px`,width:`${e.widths.dndColumn}px`})),idBtnDown:t,idBtnUp:o}},render(){const e=this.isHeader?"th":"td",t=this.isDragAndDrop&&!this.isDndDisabled;return m(e,{class:["a_table_form__cell",`a_table_form__cell_${e}`,"a_table_form__cell_reorder"],style:this.columnStyles},[this.isHeader?m("span",{class:"a_sr_only"},[m(W,{tag:"span",text:this.texts.reorderColumn})]):this.isCreateMode||this.isFooter?null:m("div",{class:"a_table_form__reorder_actions"},[this.canMoveRowUp(this.rowIndex)&&m(U,{id:this.idBtnUp,class:"a_sr_only_focusable a_btn a_btn_transparent_dark a_table_form__reorder_button",disabled:this.isDndDisabled,iconLeft:ge,tabindex:this.isDndDisabled?-1:void 0,title:this.texts.reorderUp,textScreenReader:this.texts.reorderUp,onClick:()=>this.moveRowUp(this.rowIndex)}),m("span",{ariaHidden:!0,class:"a_table_form__reorder_handle",draggable:t,onDragend:t?this.onDragend:void 0,onDragstart:t?o=>this.onDragstart(o,this.rowIndex):void 0},[m(me,{class:"a_table_form__reorder_icon",icon:De})]),m("span",{class:"a_sr_only"},[m(W,{tag:"span",text:this.texts.reorderHandle})]),this.canMoveRowDown(this.rowIndex)&&m(U,{id:this.idBtnDown,class:"a_sr_only_focusable a_btn a_btn_transparent_dark a_table_form__reorder_button",disabled:this.isDndDisabled,iconLeft:Te,tabindex:this.isDndDisabled?-1:void 0,title:this.texts.reorderDown,textScreenReader:this.texts.reorderDown,onClick:()=>this.moveRowDown(this.rowIndex)})])])}},at={name:"ATableFormTh",props:{column:{type:Object,required:!0},columnStyle:{type:Object,required:!1,default:void 0},isEditable:{type:Boolean,required:!1,default:!1}},setup(e){const{columnStyles:t}=se({column:e.column});return{columnStyles:t}},render(){var e;return this.column.slotHeader,this.column,this.isEditable,m("th",{class:["a_table_form__cell","a_table_form__cell_th",this.column.class],style:[this.columnStyles,this.columnStyle]},[this.column.slotHeader&&this.$slots[this.column.slotHeader]?this.$slots[this.column.slotHeader]({column:this.column,isEditable:this.isEditable}):this.column.label&&m(W,{html:this.column.label,tag:"span"}),this.isEditable&&((e=this.column.formElement)==null?void 0:e.required)&&m("span",{class:"a_label__required"},"*")])}};function st(e,{hasErrors:t=_(()=>!1)}){const o=s(e,"hasActiveEditRow"),l=s(e,"isActiveEditMode"),i=s(e,"isCreateMode"),n=s(e,"isFooter"),a=s(e,"isHeader"),r=s(e,"row"),d=s(e,"rowClass"),c=s(e,"rowIndex"),v=s(e,"trClass"),f=_(()=>S(d.value)?d.value({row:r.value,rowIndex:c.value,rowindex:c.value,isCreateMode:i.value,isFooter:n.value,isHeader:a.value}):d.value),b=_(()=>[v.value,f.value,{a_table_form__row_active:!a.value&&!n.value&&l.value,a_table_form__row_errors:!a.value&&!n.value&&t.value,a_table_form__row_inactive:!a.value&&!n.value&&o.value&&!l.value}]);return{rowClassLocal:f,trClassLocal:b}}function lt(e,{errorsLocal:t=C(void 0)}){const o=s(e,"changeModel"),l=s(e,"onCancelEditRow"),i=s(e,"row"),n=s(e,"rows"),a=s(e,"rowIndex"),r=s(e,"saveRow"),d=C(!1),c=C(void 0),v=({column:R,columnId:E,item:O,model:N})=>{c.value||(c.value=$(i.value)||{});let x;o.value&&(x=o.value({modelAll:c.value,row:i.value,column:R,model:N,item:O})),x!=null&&x.model?c.value=$(x.model):Ie(c.value,E,N),Se(t.value,E)},f=({trigger:R,id:E}={})=>{l.value({row:i.value,rowIndex:a.value,trigger:R,id:E})};return{cancelEditRow:f,isSaving:d,modelLocal:c,saveEditRow:async({id:R}={})=>{if(!d.value){t.value={},d.value=!0;try{const E=await r.value({model:$(c.value),row:i.value,rowIndex:a.value,rows:n.value});if(E!=null&&E.errors){t.value=$(E.errors);return}f({trigger:"save",id:R})}catch(E){t.value=E}finally{d.value=!1}}},updateModelLocal:v}}function it(e){const t=s(e,"columns"),o=C({}),l=_(()=>!qe(o.value)),i=_(()=>{const n=[];return Ne(t.value,a=>{const r=$(a.formElement)||{};r.type=r.type||"text",r.label=r.label||a.label,r.id=r.id||a.id,n.push(r)}),n});return{errorsLocal:o,hasErrors:l,optionsListForErrors:i}}function nt({idTr:e=_(()=>"")}){return{focusFirstEditableElement:()=>{const o=document.getElementById(e.value);if(!o)return;const i=Array.from(o.querySelectorAll(".a_table_form__cell:not(.a_table_form__cell_actions)")).map(n=>n.querySelector(he)).find(Boolean);i==null||i.focus()}}}function rt(e){const t=s(e,"id"),o=s(e,"isHeader"),l=s(e,"isFooter"),i=s(e,"rowIndex");return{idTr:_(()=>`${t.value}_${i.value}${o.value?"_header":""}${l.value?"_footer":""}`)}}const Q={name:"ATableFormRow",props:{actionsClasses:{type:Object,required:!1,default:()=>({})},actionsDisabledCallback:{type:Object,required:!1,default:()=>({})},actionsHideCallback:{type:Object,required:!1,default:()=>({})},actionsTitleCallback:{type:Object,required:!1,default:()=>({})},allColumnsLength:{type:Number,required:!0},canMoveRowDown:{type:Function,required:!0},canMoveRowUp:{type:Function,required:!0},cellTag:{type:String,required:!1,default:void 0},changeModel:{type:Function,required:!1,default:void 0},columns:{type:Array,required:!0},columnsStylesGrow:{type:Object,required:!1,default:()=>({})},draggedRowIndex:{type:Number,required:!1,default:void 0},editModel:{type:Object,required:!1,default:void 0},errorIcon:{type:String,required:!1,default:void 0},extra:{type:Object,required:!1,default:void 0},hasActionsColumn:{type:Boolean,required:!1,default:!1},hasActiveEditRow:{type:Boolean,required:!1,default:!1},id:{type:String,required:!0},isActionsSticky:{type:Boolean,required:!1,default:!1},isActiveEditMode:{type:Boolean,required:!1,default:!1},isCreateMode:{type:Boolean,required:!1,default:!1},isDeletable:{type:Boolean,required:!1,default:!1},isDeletableConfirm:{type:Boolean,required:!1,default:!1},isDndDisabled:{type:Boolean,required:!1,default:!1},isDragAndDrop:{type:Boolean,required:!1,default:!1},isEditable:{type:Boolean,required:!1,default:!1},isFooter:{type:Boolean,required:!1,default:!1},isHeader:{type:Boolean,required:!1,default:!1},moveRowDown:{type:Function,required:!0},moveRowUp:{type:Function,required:!0},onCancelEditRow:{type:Function,required:!0},onDeleteRow:{type:Function,required:!0},onDragend:{type:Function,required:!0},onDragleave:{type:Function,required:!1,default:void 0},onDragover:{type:Function,required:!1,default:void 0},onDragstart:{type:Function,required:!0},onDrop:{type:Function,required:!1,default:void 0},onEditRow:{type:Function,required:!0},row:{type:Object,required:!0},rowClass:{type:[String,Object,Array,Function],required:!1,default:void 0},rowIndex:{type:Number,required:!0},rows:{type:Array,required:!0},saveRow:{type:Function,required:!0},texts:{type:Object,required:!1,default:()=>({})},trClass:{type:[String,Object,Array],required:!1,default:void 0},widths:{type:Object,required:!1,default:()=>({})}},setup(e){const{idTr:t}=rt(e),{focusFirstEditableElement:o}=nt({idTr:t}),{errorsLocal:l,hasErrors:i,optionsListForErrors:n}=it(e),{rowClassLocal:a,trClassLocal:r}=st(e,{hasErrors:i}),{cancelEditRow:d,isSaving:c,modelLocal:v,saveEditRow:f,updateModelLocal:b}=lt(e,{errorsLocal:l});return{cancelEditRow:d,errorsLocal:l,focusFirstEditableElement:o,hasErrors:i,rowClassLocal:a,idTr:t,isSaving:c,modelLocal:v,optionsListForErrors:n,saveEditRow:f,trClassLocal:r,updateModelLocal:b}},computed:{currentRowData(){return this.isActiveEditMode&&this.modelLocal?this.modelLocal:this.row}},watch:{isActiveEditMode:{immediate:!0,handler(e){if(e){this.modelLocal=$(this.editModel===void 0?this.row:this.editModel),this.errorsLocal={},ee(()=>{this.focusFirstEditableElement()});return}this.errorsLocal={},this.isSaving=!1}}},render(){const e=[];return this.isActiveEditMode&&this.texts.editInfoText&&e.push(m("tr",{class:"a_table_form__row a_table_form__row_info",key:`info_${this.rowIndex}`},[m("td",{class:"a_table_form__cell a_table_form__cell_info",colspan:this.allColumnsLength},[m(fe,{alertClass:"a_table_form__info",html:this.texts.editInfoText,isVisible:!0,type:"info"})])])),e.push(m("tr",{id:this.idTr,"aria-grabbed":!this.isHeader&&!this.isFooter?this.draggedRowIndex===this.rowIndex:void 0,class:this.trClassLocal,key:`main_${this.rowIndex}`,onDragleave:this.onDragleave&&(t=>this.onDragleave(t,this.rowIndex)),onDragover:this.onDragover&&(t=>this.onDragover(t,this.rowIndex)),onDrop:this.onDrop&&(t=>this.onDrop(t,this.rowIndex))},[this.isDragAndDrop?m(ot,{id:this.idTr,canMoveRowDown:this.canMoveRowDown,canMoveRowUp:this.canMoveRowUp,isCreateMode:this.isCreateMode,isDndDisabled:this.isDndDisabled,isDragAndDrop:this.isDragAndDrop,isFooter:this.isFooter,isHeader:this.isHeader,moveRowDown:this.moveRowDown,moveRowUp:this.moveRowUp,onDragend:this.onDragend,onDragstart:this.onDragstart,rowIndex:this.rowIndex,texts:this.texts,widths:this.widths}):null,...this.columns.map((t,o)=>this.isHeader?m(at,{column:t,columnStyle:this.columnsStylesGrow[t.id],isEditable:this.isEditable},this.$slots):m(Ve,{id:this.idTr,column:t,columnIndex:o,columnStyle:this.columnsStylesGrow[t.id],errorIcon:this.errorIcon,errors:this.errorsLocal,isEditable:this.isEditable,isEditMode:this.isActiveEditMode,isFooter:this.isFooter,onUpdateRowData:this.updateModelLocal,row:this.row,rowData:this.currentRowData,rowIndex:this.rowIndex,rows:this.rows,tag:this.cellTag},this.$slots)),this.hasActionsColumn?m(et,{id:this.idTr,actionsClasses:this.actionsClasses,actionsDisabledCallback:this.actionsDisabledCallback,actionsHideCallback:this.actionsHideCallback,actionsTitleCallback:this.actionsTitleCallback,extra:this.extra,hasActiveEditRow:this.hasActiveEditRow,isActionsSticky:this.isActionsSticky,isActiveEditMode:this.isActiveEditMode,isDeletable:this.isDeletable,isDeletableConfirm:this.isDeletableConfirm,isEditable:this.isEditable,isFooter:this.isFooter,isHeader:this.isHeader,isSaving:this.isSaving,onCancelEditRow:this.cancelEditRow,onDeleteRow:this.onDeleteRow,onEditRow:this.onEditRow,onSaveEditRow:this.saveEditRow,row:this.row,rowIndex:this.rowIndex,texts:this.texts,widths:this.widths}):null])),this.isActiveEditMode&&this.hasErrors&&e.push(m("tr",{class:"a_table_form__row a_table_form__row_errors",key:`errors_${this.rowIndex}`},[m("td",{class:"a_table_form__cell a_table_form__cell_errors",colspan:this.allColumnsLength},[m(be,{autoFocus:!0,closable:!1,errors:this.errorsLocal,optionsList:this.optionsListForErrors,idPrefix:this.idTr})])])),e}};function dt(e){const t=s(e,"actionsClasses");return{actionsClassesLocal:_(()=>({delete:"a_btn a_btn_transparent_danger",edit:"a_btn a_btn_transparent_primary",editCancel:"a_btn a_btn_transparent_primary",editSave:"a_btn a_btn_transparent_primary",addRow:"a_btn a_btn_outline_primary",...t.value}))}}function ct(e){const t=s(e,"columns"),o=s(e,"isDeletable"),l=s(e,"isDeletableConfirm"),i=s(e,"isDragAndDrop"),n=s(e,"isEditable"),a=_(()=>!!(n.value||o.value||l.value));return{allColumnsLength:_(()=>{var c;let d=((c=t.value)==null?void 0:c.length)||0;return i.value&&(d+=1),a.value&&(d+=1),d}),hasActionsColumn:a}}function ut(e,{hasActionsColumn:t=_(()=>!1),widthsLocal:o=_(()=>({}))}){const l=s(e,"columns"),i=s(e,"id"),n=s(e,"isColumnsGrow"),a=s(e,"isDeletable"),r=s(e,"isDeletableConfirm"),d=s(e,"isDragAndDrop"),c=s(e,"isEditable"),{remPx:v,scalePxWithRem:f}=we(),b=C(void 0),R=C({});let E,O;const N=_(()=>t.value?c.value?o.value.actionsColumnDouble:a.value||r.value?o.value.actionsColumnSingle:0:0),x=_(()=>d.value?o.value.dndColumn:0),T=()=>{var h;return(h=document.getElementById(i.value))==null?void 0:h.parentElement},p=h=>{if(ae(h)||h==="")return 0;if(He(h))return+f(h)||0;if(!Ue(h))return 0;const A=h.trim();return A?A.endsWith("rem")?(parseFloat(A)||0)*v.value:(A.endsWith("px"),parseFloat(A)||0):0},K=h=>{const A=`${h}px`;return{maxWidth:A,minWidth:A,width:A}},u=()=>{if(!n.value||!b.value){R.value={};return}const h=l.value||[],A=b.value-N.value-x.value;if(A<=0){R.value={};return}let L=0,g=0;if(h.forEach(k=>{const P=p(k.width);L+=P,g+=Math.max(0,+k.grow||0)}),L>=A||g<=0){R.value={};return}const B=A-L,H={};h.forEach(k=>{const P=p(k.width),F=Math.max(0,+k.grow||0);if(!k.id||!P)return;const q=P+(F>0?B*F/g:0);H[k.id]=K(q)}),R.value=H},w=()=>{if(!n.value||E)return;const h=T();h&&(O=h,E=new ResizeObserver(Pe(A=>{var g,B;const L=(B=(g=A[0])==null?void 0:g.contentRect)==null?void 0:B.width;L&&(b.value=L,u())},100)),b.value=h.getBoundingClientRect().width,u(),E.observe(h))},y=()=>{E&&(O&&E.unobserve(O),E.disconnect(),E=void 0,O=void 0)};return Me([l,t,a,r,d,c,o],()=>{u()},{deep:!0}),{columnsStylesGrow:R,destroyColumnsGrowObserver:y,initColumnsGrowObserver:w}}function _t(e,{emit:t}){return{onDeleteRow:({row:l,rowIndex:i})=>{t("deleteRow",{row:l,rowIndex:i})}}}function mt(e,{emit:t},{isDndDisabled:o=_(()=>!1)}={}){const l=s(e,"id"),i=s(e,"isDragAndDrop"),n=s(e,"rows"),a=C(void 0),r=C(void 0),d=C(void 0),c=C(void 0),v=()=>{var u;(u=c.value)==null||u.remove(),c.value=void 0},f=u=>{var B,H;const w=(H=(B=u.target)==null?void 0:B.closest)==null?void 0:H.call(B,"tr");if(!w)return;const y=w.getBoundingClientRect(),h=document.createElement("table"),A=document.createElement("tbody"),L=w.cloneNode(!0);h.className="a_table_form__table",h.style.borderCollapse="collapse",h.style.borderSpacing="0",h.style.width=`${y.width}px`,h.style.tableLayout="fixed",Array.from(w.children).forEach((k,P)=>{const F=L.children[P];if(F){const q=window.getComputedStyle(k);F.style.width=`${k.getBoundingClientRect().width}px`,F.style.backgroundColor=q.backgroundColor,F.style.borderTop=q.borderTop,F.style.borderRight=q.borderRight,F.style.borderBottom=q.borderBottom,F.style.borderLeft=q.borderLeft,F.style.color=q.color}}),A.appendChild(L),h.appendChild(A);const g=document.createElement("div");return g.className="a_table_form a_table_form__drag_preview",g.style.position="fixed",g.style.top="-10000px",g.style.left="-10000px",g.style.pointerEvents="none",g.style.zIndex="9999",g.appendChild(h),document.body.appendChild(g),c.value=g,{element:g,offsetX:Math.min(u.offsetX||0,y.width/2),offsetY:Math.min(u.offsetY||0,y.height/2)}},b=({fromIndex:u,toIndex:w,trigger:y})=>{if(!i.value||o.value||u===w||u<0||w<0||u>=n.value.length||w>=n.value.length)return;const h=[...n.value],[A]=h.splice(u,1);h.splice(w,0,A),t("updateRows",{rows:h,trigger:y,fromIndex:u,toIndex:w}),t("moveRow",{fromIndex:u,row:A,toIndex:w})},R=({fromIndex:u,rowIndex:w,position:y="before"})=>{if(!i.value||o.value||u<0||w<0||u>=n.value.length||w>=n.value.length)return;let h=y==="after"?w+1:w;u<h&&(h-=1),b({fromIndex:u,toIndex:h,trigger:"dnd"})},E=u=>{b({fromIndex:u,toIndex:u-1,trigger:"moveRowUp"}),ee().then(()=>{const w=Math.max(1,u-1);Y({selector:`#${l.value}_${w}_up`})})},O=u=>{b({fromIndex:u,toIndex:u+1,trigger:"moveRowDown"}),ee().then(()=>{const w=Math.min(n.value.length-2,u+1);Y({selector:`#${l.value}_${w}_down`})})},N=(u,w)=>{if(!(!i.value||o.value)){if(u!=null&&u.dataTransfer){u.dataTransfer.effectAllowed="move",u.dataTransfer.setData("text/plain",`${w}`),v();const y=f(u);y&&u.dataTransfer.setDragImage(y.element,y.offsetX,y.offsetY)}a.value=w}},x=(u,w)=>{var h,A;if(!i.value||o.value)return;u.preventDefault();const y=(A=(h=u.currentTarget)==null?void 0:h.getBoundingClientRect)==null?void 0:A.call(h);if(y){const L=y.top+y.height/2;d.value=u.clientY<L?"before":"after"}else d.value="after";r.value=w},T=(u,w)=>{var h,A;if(!i.value||o.value)return;const y=u.relatedTarget;(A=(h=u.currentTarget)==null?void 0:h.contains)!=null&&A.call(h,y)||r.value===w&&(r.value=void 0,d.value=void 0)},p=(u,w)=>{!i.value||o.value||(u.preventDefault(),a.value!==void 0&&(R({fromIndex:a.value,position:d.value||"after",rowIndex:w}),v(),a.value=void 0,r.value=void 0,d.value=void 0))},K=()=>{v(),a.value=void 0,r.value=void 0,d.value=void 0};return{canMoveRowDown:_(()=>u=>u<n.value.length-1),canMoveRowUp:_(()=>u=>u>0),dragOverPosition:d,dragOverRowIndex:r,draggedRowIndex:a,onDragleave:T,moveRowDown:O,moveRowUp:E,onDragend:K,onDragover:x,onDragstart:N,onDrop:p}}function ht(e,{getRowKey:t=()=>{}}){const o=s(e,"addRow"),l=s(e,"columns"),i=s(e,"isAddable"),n=s(e,"isEditable"),a=s(e,"prepareEditModel"),r=s(e,"rows"),d=C(void 0),c=C(void 0),v=C(!1),f=_(()=>!!d.value||v.value),b=_(()=>i.value?S(o.value):!1),R=_(()=>n.value?l.value.some(T=>{var p;return!!((p=T.formElement)!=null&&p.required)}):!1),E=T=>{if(!S(a.value))return;const p=a.value(T);if((p==null?void 0:p.model)!==void 0)return $(p.model)};return{activeEditRowKey:d,activeEditModel:c,canAddRow:b,hasActiveEditRow:f,hasRequiredEditableColumns:R,isAddRowActive:v,onAddRow:()=>{f.value||!b.value||(d.value=void 0,c.value=E({rows:r.value}),v.value=!0)},onCancelEditRow:({trigger:T,id:p}={})=>{d.value=void 0,c.value=void 0,v.value=!1,T==="cancel"?setTimeout(()=>{Y({selector:`#${p}_edit`})}):T==="save"&&setTimeout(()=>{Y({selector:`#${p}`})})},onEditRow:({row:T,rowIndex:p})=>{v.value||(c.value=E({row:T,rowIndex:p,rows:r.value}),d.value=t({row:T,rowIndex:p}))}}}function ft(e){const t=s(e,"icons");return{iconsLocal:_(()=>({actionAddRow:Oe,...t.value}))}}function bt(e){const t=s(e,"keyId"),o=s(e,"rows"),l=s(e,"rowsFooter"),i=_(()=>o.value.length>0),n=_(()=>l.value.length>0);return{getRowKey:({row:r,rowIndex:d,isFooter:c=!1})=>{let v=d;if(t.value){const b=I(r,t.value);ae(b)||(v=b)}return`${c?"footer":"body"}_${v}`},hasRows:i,hasRowsFooter:n}}function wt(e){const t=s(e,"texts");return{textsLocal:_(()=>({actionsColumn:"_A_TABLE_FORM_ACTIONS_",actionAddRow:"_A_TABLE_FORM_ADD_ROW_",actionDelete:"_A_TABLE_FORM_DELETE_",actionDeleteConfirmBody:"_A_TABLE_FORM_DELETE_CONFIRM_BODY_",actionDeleteConfirmClose:"_A_TABLE_FORM_DELETE_CONFIRM_CLOSE_",actionDeleteConfirmHeader:"_A_TABLE_FORM_DELETE_CONFIRM_HEADER_",actionDeleteConfirmSave:"_A_TABLE_FORM_DELETE_CONFIRM_SAVE_",actionEdit:"_A_TABLE_FORM_EDIT_",actionEditCancel:"_A_TABLE_FORM_EDIT_CANCEL_",actionEditSave:"_A_TABLE_FORM_EDIT_SAVE_",editInfoText:void 0,emptyText:"_A_TABLE_FORM_EMPTY_",reorderColumn:"_A_TABLE_FORM_REORDER_COLUMN_",reorderDown:"_A_TABLE_FORM_MOVE_DOWN_",reorderHandle:"_A_TABLE_FORM_REORDER_",reorderUp:"_A_TABLE_FORM_MOVE_UP_",...t.value}))}}function vt(e){const t=s(e,"widths");return{widthsLocal:_(()=>({actionsColumnSingle:56,actionsColumnDouble:112,dndColumn:56,...t.value}))}}const Z={name:"ATableForm",props:{actionsClasses:{type:Object,required:!1,default:()=>({})},actionsDisabledCallback:{type:Object,required:!1,default:()=>({})},actionsHideCallback:{type:Object,required:!1,default:()=>({})},actionsTitleCallback:{type:Object,required:!1,default:()=>({})},addRow:{type:Function,required:!1,default:void 0},columns:{type:Array,required:!0},columnsDefaultValue:{type:[String,Number],required:!1,default:""},changeModel:{type:Function,required:!1,default:void 0},errorIcon:{type:String,required:!1,default:Le},extra:{type:Object,required:!1,default:void 0},icons:{type:Object,required:!1,default:()=>({})},id:{type:String,required:!1,default:()=>$e("a_table_form_")},isActionsSticky:{type:Boolean,required:!1,default:!1},isAddable:{type:Boolean,required:!1,default:!1},isColumnsGrow:{type:Boolean,required:!1,default:!1},isDeletable:{type:Boolean,required:!1,default:!1},isDeletableConfirm:{type:Boolean,required:!1,default:!1},isDragAndDrop:{type:Boolean,required:!1,default:!1},isEditable:{type:Boolean,required:!1,default:!1},keyId:{type:String,required:!1,default:void 0},label:{type:[String,Number],required:!1,default:""},labelClass:{type:[String,Object,Array],required:!1,default:void 0},labelTag:{type:String,required:!1,default:"h2"},prepareEditModel:{type:Function,required:!1,default:void 0},rowClass:{type:[String,Object,Array,Function],required:!1,default:void 0},rows:{type:Array,required:!1,default:()=>[]},rowsFooter:{type:Array,required:!1,default:()=>[]},saveRow:{type:Function,required:!1,default:()=>{}},texts:{type:Object,required:!1,default:()=>({})},widths:{type:Object,required:!1,default:()=>({})}},emits:["deleteRow","moveRow","updateRows"],setup(e,t){const o=s(e,"actionsDisabledCallback"),l=s(e,"actionsTitleCallback"),{allColumnsLength:i,hasActionsColumn:n}=ct(e),{getRowKey:a,hasRows:r,hasRowsFooter:d}=bt(e),{textsLocal:c}=wt(e),{widthsLocal:v}=vt(e),{iconsLocal:f}=ft(e),{actionsClassesLocal:b}=dt(e),{columnsStylesGrow:R,destroyColumnsGrowObserver:E,initColumnsGrowObserver:O}=ut(e,{hasActionsColumn:n,widthsLocal:v});Fe(()=>{O()}),xe(()=>{E()});const{activeEditRowKey:N,activeEditModel:x,canAddRow:T,hasActiveEditRow:p,hasRequiredEditableColumns:K,isAddRowActive:u,onAddRow:w,onCancelEditRow:y,onEditRow:h}=ht(e,{getRowKey:a}),{canMoveRowDown:A,canMoveRowUp:L,dragOverPosition:g,dragOverRowIndex:B,draggedRowIndex:H,moveRowDown:k,moveRowUp:P,onDragend:F,onDragleave:q,onDragover:le,onDragstart:ie,onDrop:ne}=mt(e,t,{isDndDisabled:p}),{onDeleteRow:re}=_t(e,t),de=_(()=>{if(p.value)return!0;const X=I(o.value,"add");return S(X)?X():!1}),ce=_(()=>{const X=I(l.value,"add");return S(X)?X():c.value.actionAddRow});return{activeEditRowKey:N,activeEditModel:x,allColumnsLength:i,addTitle:ce,canAddRow:T,canMoveRowDown:A,canMoveRowUp:L,actionsClassesLocal:b,columnsStylesGrow:R,draggedRowIndex:H,dragOverPosition:g,dragOverRowIndex:B,getRowKey:a,hasActionsColumn:n,hasActiveEditRow:p,hasRequiredEditableColumns:K,hasRows:r,hasRowsFooter:d,iconsLocal:f,isAddDisabled:de,isAddRowActive:u,moveRowDown:k,moveRowUp:P,onAddRow:w,onCancelEditRow:y,onDeleteRow:re,onDragend:F,onDragleave:q,onDragover:le,onDragstart:ie,onDrop:ne,onEditRow:h,textsLocal:c,widthsLocal:v}},render(){return m("div",{class:"a_table_form"},[this.label&&m(W,{class:["a_table_form__label",this.labelClass],html:this.label,tag:this.labelTag}),this.hasRequiredEditableColumns&&m(ve),m("div",{class:"a_table_form__wrapper"},[m("table",{id:this.id,class:["a_table_form__table",{a_table_form_drag_active:this.draggedRowIndex!==void 0}]},[m("thead",{class:"a_table_form__head"},[m(Q,{id:this.id,actionsClasses:this.actionsClasses,actionsDisabledCallback:this.actionsDisabledCallback,actionsHideCallback:this.actionsHideCallback,actionsTitleCallback:this.actionsTitleCallback,allColumnsLength:this.allColumnsLength,canMoveRowDown:this.canMoveRowDown,canMoveRowUp:this.canMoveRowUp,cellTag:"th",changeModel:this.changeModel,columns:this.columns,columnsStylesGrow:this.columnsStylesGrow,draggedRowIndex:this.draggedRowIndex,extra:this.extra,hasActionsColumn:this.hasActionsColumn,hasActiveEditRow:!1,isActionsSticky:this.isActionsSticky,isActiveEditMode:!1,isDeletable:this.isDeletable,isDeletableConfirm:this.isDeletableConfirm,isDndDisabled:this.hasActiveEditRow,isDragAndDrop:this.isDragAndDrop,isEditable:this.isEditable,isHeader:!0,moveRowDown:this.moveRowDown,moveRowUp:this.moveRowUp,onCancelEditRow:this.onCancelEditRow,onDeleteRow:this.onDeleteRow,onDragend:this.onDragend,onDragstart:this.onDragstart,onEditRow:this.onEditRow,row:{},rowIndex:0,rows:this.rows,saveRow:this.saveRow,texts:this.textsLocal,trClass:"a_table_form__row a_table_form__row_head",widths:this.widthsLocal},this.$slots)]),m("tbody",{class:"a_table_form__body"},this.hasRows||this.isAddRowActive?[...this.rows.map((e,t)=>{const o=this.getRowKey({row:e,rowIndex:t});return m(Q,{key:o,id:this.id,actionsClasses:this.actionsClassesLocal,actionsDisabledCallback:this.actionsDisabledCallback,actionsHideCallback:this.actionsHideCallback,actionsTitleCallback:this.actionsTitleCallback,allColumnsLength:this.allColumnsLength,canMoveRowDown:this.canMoveRowDown,canMoveRowUp:this.canMoveRowUp,changeModel:this.changeModel,columns:this.columns,columnsStylesGrow:this.columnsStylesGrow,draggedRowIndex:this.draggedRowIndex,editModel:this.activeEditRowKey===o?this.activeEditModel:void 0,errorIcon:this.errorIcon,extra:this.extra,hasActionsColumn:this.hasActionsColumn,hasActiveEditRow:this.hasActiveEditRow,isActionsSticky:this.isActionsSticky,isActiveEditMode:this.activeEditRowKey===o,isCreateMode:!1,isDeletable:this.isDeletable,isDeletableConfirm:this.isDeletableConfirm,isDndDisabled:this.hasActiveEditRow,isDragAndDrop:this.isDragAndDrop,isEditable:this.isEditable,moveRowDown:this.moveRowDown,moveRowUp:this.moveRowUp,onCancelEditRow:this.onCancelEditRow,onDeleteRow:this.onDeleteRow,onDragend:this.onDragend,onDragleave:this.onDragleave,onDragover:this.onDragover,onDragstart:this.onDragstart,onDrop:this.onDrop,onEditRow:this.onEditRow,row:e,rowClass:this.rowClass,rowIndex:t,rows:this.rows,saveRow:this.saveRow,texts:this.textsLocal,widths:this.widthsLocal,trClass:["a_table_form__row",{a_table_form__row_drag_after:this.dragOverRowIndex===t&&this.dragOverPosition==="after",a_table_form__row_drag_before:this.dragOverRowIndex===t&&this.dragOverPosition==="before",a_table_form__row_drag_over:this.dragOverRowIndex===t,a_table_form__row_dragging:this.draggedRowIndex===t}]},this.$slots)}),this.isAddRowActive&&m(Q,{id:this.id,actionsClasses:this.actionsClassesLocal,actionsDisabledCallback:this.actionsDisabledCallback,actionsHideCallback:this.actionsHideCallback,actionsTitleCallback:this.actionsTitleCallback,allColumnsLength:this.allColumnsLength,canMoveRowDown:this.canMoveRowDown,canMoveRowUp:this.canMoveRowUp,changeModel:this.changeModel,columns:this.columns,columnsStylesGrow:this.columnsStylesGrow,draggedRowIndex:this.draggedRowIndex,editModel:this.activeEditModel,errorIcon:this.errorIcon,extra:this.extra,hasActionsColumn:this.hasActionsColumn,hasActiveEditRow:this.hasActiveEditRow,isActionsSticky:this.isActionsSticky,isActiveEditMode:!0,isCreateMode:!0,isDeletable:!1,isDeletableConfirm:!1,isDndDisabled:!0,isDragAndDrop:this.isDragAndDrop,isEditable:this.isEditable,key:"body_create",moveRowDown:this.moveRowDown,moveRowUp:this.moveRowUp,onCancelEditRow:this.onCancelEditRow,onDeleteRow:this.onDeleteRow,onDragend:this.onDragend,onDragleave:this.onDragleave,onDragover:this.onDragover,onDragstart:this.onDragstart,onDrop:this.onDrop,onEditRow:this.onEditRow,row:{},rowClass:this.rowClass,rowIndex:this.rows.length,rows:this.rows,saveRow:this.addRow,texts:this.textsLocal,trClass:"a_table_form__row a_table_form__row_create",widths:this.widthsLocal},this.$slots)]:[m("tr",{class:"a_table_form__row a_table_form__row_empty"},[m("td",{class:"a_table_form__cell a_table_form__empty",colspan:this.allColumnsLength},[m(W,{tag:"span",text:this.textsLocal.emptyText})])])]),this.hasRowsFooter&&m("tfoot",{class:"a_table_form__foot"},this.rowsFooter.map((e,t)=>m(Q,{id:this.id,actionsClasses:this.actionsClassesLocal,actionsDisabledCallback:this.actionsDisabledCallback,actionsHideCallback:this.actionsHideCallback,actionsTitleCallback:this.actionsTitleCallback,allColumnsLength:this.allColumnsLength,canMoveRowDown:this.canMoveRowDown,canMoveRowUp:this.canMoveRowUp,changeModel:this.changeModel,columns:this.columns,columnsStylesGrow:this.columnsStylesGrow,draggedRowIndex:this.draggedRowIndex,extra:this.extra,hasActionsColumn:this.hasActionsColumn,hasActiveEditRow:this.hasActiveEditRow,isActionsSticky:this.isActionsSticky,isActiveEditMode:!1,isDeletable:this.isDeletable,isDeletableConfirm:this.isDeletableConfirm,isDndDisabled:this.hasActiveEditRow,isDragAndDrop:this.isDragAndDrop,isEditable:this.isEditable,isFooter:!0,key:this.getRowKey({isFooter:!0,row:e,rowIndex:t}),moveRowDown:this.moveRowDown,moveRowUp:this.moveRowUp,onCancelEditRow:this.onCancelEditRow,onDeleteRow:this.onDeleteRow,onDragend:this.onDragend,onDragstart:this.onDragstart,onEditRow:this.onEditRow,row:e,rowClass:this.rowClass,rowIndex:t,rows:this.rowsFooter,saveRow:this.saveRow,texts:this.textsLocal,widths:this.widthsLocal,trClass:"a_table_form__row a_table_form__row_footer"},this.$slots)))])]),this.canAddRow&&m("div",{class:"a_mt_3 a_text_right"},[m(U,{class:this.actionsClassesLocal.addRow,disabled:this.isAddDisabled,extra:this.extra,iconLeft:this.iconsLocal.actionAddRow,text:this.textsLocal.actionAddRow,textScreenReader:this.addTitle,title:this.addTitle,onClick:this.onAddRow})])])}};function At(){return{codeHtml:`<a-simple-table
  :columns="columns"
  :rows-footer="rowsFooter"
  :rows="rows"
  key-id="id"
  label="_A_TABLE_FORM_EXAMPLE_LABEL_"
/>
`}}function Et(){return{codeJs:`import {
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
};`}}const Rt={name:"PageTableFormBasic",components:{AlohaExample:z,ATableForm:Z},setup(){const{codeHtml:e}=At(),{codeJs:t}=Et(),o=[{id:"position",label:"_A_TABLE_FORM_COLUMN_POSITION_",maxWidth:96,minWidth:96,width:96,formElement:{type:"number"}},{id:"name",label:"_A_TABLE_FORM_COLUMN_NAME_",maxWidth:"18rem",minWidth:"12rem",width:"16rem",formElement:{type:"text"}},{id:"team",formElement:{translateData:!0,data:[{label:"_A_TABLE_FORM_TEAM_NORTH_",value:"north"},{label:"_A_TABLE_FORM_TEAM_WEST_",value:"west"},{label:"_A_TABLE_FORM_TEAM_SOUTH_",value:"south"},{label:"_A_TABLE_FORM_TEAM_EAST_",value:"east"}],keyId:"value",keyLabel:"label",type:"select"},label:"_A_TABLE_FORM_COLUMN_TEAM_",minWidth:"12rem"},{id:"score",footerDefaultValue:"68",footerKeyLabel:"score",formElement:{type:"integer"},label:"_A_TABLE_FORM_COLUMN_SCORE_",maxWidth:120,minWidth:120,width:120}],l=C([{id:1,name:"Марта Иванова",position:1,score:18,team:"north"},{id:2,name:"Олег Сидоров",position:2,score:17,team:"west"},{id:3,name:"Анна Петрова",position:3,score:16,team:"south"},{id:4,name:"Игорь Ковалёв",position:4,score:17,team:"east"}]);return{codeHtml:e,codeJs:t,columns:o,rows:l,rowsFooter:[{name:"_A_TABLE_FORM_FOOTER_TOTAL_",score:68}]}}};function pt(e,t,o,l,i,n){const a=D("a-table-form"),r=D("aloha-example");return G(),J(r,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TABLE_FORM_EXAMPLE_HEADER_"},{default:V(()=>[M(a,{columns:e.columns,"rows-footer":e.rowsFooter,rows:e.rows,"key-id":"id",label:"_A_TABLE_FORM_EXAMPLE_LABEL_"},null,8,["columns","rows-footer","rows"])]),_:1},8,["code-html","code-js"])}const yt=j(Rt,[["render",pt]]);function Ct(){return{codeHtml:`<a-simple-table
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
};`}}const Dt={name:"PageTableFormDND",components:{AlohaExample:z,ATableForm:Z},setup(){const{codeHtml:e}=Ct(),{codeJs:t}=gt(),o=[{id:"position",label:"_A_TABLE_FORM_COLUMN_POSITION_",maxWidth:96,minWidth:96,width:96,formElement:{type:"text"}},{id:"name",formElement:{type:"text"},label:"_A_TABLE_FORM_COLUMN_NAME_",maxWidth:"18rem",minWidth:"12rem",width:"16rem"},{id:"team",formElement:{translateData:!0,data:[{label:"_A_TABLE_FORM_TEAM_NORTH_",value:"north"},{label:"_A_TABLE_FORM_TEAM_WEST_",value:"west"},{label:"_A_TABLE_FORM_TEAM_SOUTH_",value:"south"},{label:"_A_TABLE_FORM_TEAM_EAST_",value:"east"}],keyId:"value",keyLabel:"label",type:"select"},label:"_A_TABLE_FORM_COLUMN_TEAM_",minWidth:"12rem"},{id:"score",footerDefaultValue:"68",footerKeyLabel:"score",formElement:{type:"integer"},label:"_A_TABLE_FORM_COLUMN_SCORE_",maxWidth:120,minWidth:120,width:120}],l=C([{id:1,name:"Марта Иванова",position:1,score:18,team:"north"},{id:2,name:"Олег Сидоров",position:2,score:17,team:"west"},{id:3,name:"Анна Петрова",position:3,score:16,team:"south"},{id:4,name:"Игорь Ковалёв",position:4,score:17,team:"east"}]);return{codeHtml:e,codeJs:t,columns:o,rows:l,rowsFooter:[{name:"_A_TABLE_FORM_FOOTER_TOTAL_",score:68}],updateRows:({rows:a,trigger:r})=>{l.value=a,console.log("trigger",r)}}}};function Tt(e,t,o,l,i,n){const a=D("a-table-form"),r=D("aloha-example");return G(),J(r,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TABLE_FORM_DND_HEADER_",description:"_A_TABLE_FORM_DND_DESCRIPTION_",props:"is-drag-and-drop"},{default:V(()=>[M(a,{columns:e.columns,"is-drag-and-drop":!0,"rows-footer":e.rowsFooter,rows:e.rows,"key-id":"id",label:"_A_TABLE_FORM_EXAMPLE_LABEL_",onUpdateRows:e.updateRows},null,8,["columns","rows-footer","rows","onUpdateRows"])]),_:1},8,["code-html","code-js"])}const Mt=j(Dt,[["render",Tt]]);function Ot(){return{codeHtml:`<a-checkbox>
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
`}}function Lt(){return{codeJs:`import {
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
};`}}const Ft={name:"PageTableFormEdit",components:{ACheckbox:oe,AlohaExample:z,ATableForm:Z},setup(){const{codeHtml:e}=Ot(),{codeJs:t}=Lt(),o=[{label:"is-deletable-confirm",value:"is-deletable-confirm"},{label:"is-deletable",value:"is-deletable"},{label:"is-editable",value:"is-editable"},{label:"is-addable",value:"is-addable"}],l=C(["is-deletable-confirm","is-deletable","is-editable","is-addable"]),i={actionEditCancel:"abbrechen",actionEditSave:"speichern",editInfoText:"Nur diese Zeile ist gerade im Bearbeitungsmodus."},n=[{id:"position",label:"_A_TABLE_FORM_COLUMN_POSITION_",maxWidth:96,minWidth:96,width:96,formElement:{controlsType:"none",type:"integer"}},{id:"name",formElement:{type:"text",required:!0},keyLabel:"name",label:"_A_TABLE_FORM_COLUMN_NAME_",maxWidth:"18rem",minWidth:"12rem",width:"16rem"},{id:"team",formElement:{data:[{label:"_A_TABLE_FORM_TEAM_NORTH_",value:"north"},{label:"_A_TABLE_FORM_TEAM_WEST_",value:"west"},{label:"_A_TABLE_FORM_TEAM_SOUTH_",value:"south"},{label:"_A_TABLE_FORM_TEAM_EAST_",value:"east"}],keyId:"value",keyLabel:"label",translateData:!0,type:"select"},label:"_A_TABLE_FORM_COLUMN_TEAM_",minWidth:"12rem"},{id:"score",footerDefaultValue:"68",footerKeyLabel:"score",formElement:{controlsType:"none",min:0,type:"integer"},label:"_A_TABLE_FORM_COLUMN_SCORE_",maxWidth:120,minWidth:120,width:120}],a=C([{id:1,name:"Marta Ivanova",position:1,score:18,team:"north"},{id:2,name:"Oleg Sidorov",position:2,score:17,team:"west"},{id:3,name:"Anna Petrova",position:3,score:16,team:"south"},{id:4,name:"Igor Kovalev",position:4,score:17,team:"east"}]);return{addRow:({model:f})=>{var R;console.log("model ",f);const b={};if((R=f.name)!=null&&R.trim()||(b.name=["Name ist erforderlich."]),f.team||(b.team=["Team ist erforderlich."]),f.score<18&&(b.score=["Score must be at least 18."]),Object.keys(b).length)return{errors:b};a.value.push({id:a.value.length+1,...f})},codeHtml:e,codeJs:t,columns:n,dataCheckbox:o,deleteRow:({row:f,rowIndex:b})=>{a.value.splice(b,1),console.log("row",f),console.log("rowIndex",b)},modelCheckbox:l,rows:a,rowsFooter:[{name:"_A_TABLE_FORM_FOOTER_TOTAL_",score:68}],saveRow:async({model:f,rowIndex:b})=>{var E;await new Promise(O=>{setTimeout(O,300)});const R={};if((E=f.name)!=null&&E.trim()||(R.name=["Name ist erforderlich."]),f.team||(R.team=["Team ist erforderlich."]),f.score<18&&(R.score=["Score must be at least 18."]),Object.keys(R).length)return{errors:R};a.value.splice(b,1,f)},texts:i}}};function xt(e,t,o,l,i,n){const a=D("a-checkbox"),r=D("a-table-form"),d=D("aloha-example");return G(),J(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TABLE_FORM_EDIT_HEADER_",description:"_A_TABLE_FORM_EDIT_DESCRIPTION_",props:["is-addable","is-deletable","is-deletable-confirm","is-editable","save-row","texts"]},{default:V(()=>[M(a,{class:"a_mb_4",modelValue:e.modelCheckbox,"onUpdate:modelValue":t[0]||(t[0]=c=>e.modelCheckbox=c),data:e.dataCheckbox,"translate-data":!0,"key-id":"value","key-label":"label"},null,8,["modelValue","data"]),M(r,{"add-row":e.addRow,columns:e.columns,"is-addable":e.modelCheckbox.includes("is-addable"),"is-deletable-confirm":e.modelCheckbox.includes("is-deletable-confirm"),"is-deletable":e.modelCheckbox.includes("is-deletable"),"is-editable":e.modelCheckbox.includes("is-editable"),"rows-footer":e.rowsFooter,rows:e.rows,"save-row":e.saveRow,texts:e.texts,"key-id":"id",label:"_A_TABLE_FORM_EXAMPLE_LABEL_",onDeleteRow:e.deleteRow},null,8,["add-row","columns","is-addable","is-deletable-confirm","is-deletable","is-editable","rows-footer","rows","save-row","texts","onDeleteRow"])]),_:1},8,["code-html","code-js"])}const kt=j(Ft,[["render",xt]]);function Bt(){return{codeHtml:`<a-checkbox
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
};`}}const St={name:"PageTableFormGrow",components:{ACheckbox:oe,AlohaExample:z,ATableForm:Z},setup(){const{codeHtml:e}=Bt(),{codeJs:t}=It(),o=[{label:"is-deletable",value:"is-deletable"},{label:"is-editable",value:"is-editable"},{label:"is-drag-and-drop",value:"is-drag-and-drop"}],l=C(["is-deletable","is-editable"]),i=[{id:"position",label:"_A_TABLE_FORM_COLUMN_POSITION_",minWidth:96,width:96,grow:1,formElement:{controlsType:"none",type:"integer"}},{id:"name",formElement:{type:"text"},label:"_A_TABLE_FORM_COLUMN_NAME_",minWidth:"12rem",width:"16rem",grow:2},{id:"team",formElement:{data:[{label:"_A_TABLE_FORM_TEAM_NORTH_",value:"north"},{label:"_A_TABLE_FORM_TEAM_WEST_",value:"west"},{label:"_A_TABLE_FORM_TEAM_SOUTH_",value:"south"},{label:"_A_TABLE_FORM_TEAM_EAST_",value:"east"}],keyId:"value",keyLabel:"label",translateData:!0,type:"select"},label:"_A_TABLE_FORM_COLUMN_TEAM_",minWidth:"12rem",width:"12rem",grow:1},{id:"score",footerDefaultValue:"68",footerKeyLabel:"score",formElement:{controlsType:"none",min:0,type:"integer"},label:"_A_TABLE_FORM_COLUMN_SCORE_",minWidth:120,width:120,grow:1}],n=[{id:"position",label:"_A_TABLE_FORM_COLUMN_POSITION_",minWidth:96,width:96,grow:1,formElement:{controlsType:"none",type:"integer"}},{id:"name",formElement:{type:"text"},label:"_A_TABLE_FORM_COLUMN_NAME_",minWidth:"12rem",width:"16rem",grow:3}],a=C([{id:1,name:"Marta Ivanova",position:1,score:18,team:"north"},{id:2,name:"Oleg Sidorov",position:2,score:17,team:"west"},{id:3,name:"Anna Petrova",position:3,score:16,team:"south"},{id:4,name:"Igor Kovalev",position:4,score:17,team:"east"}]);return{codeHtml:e,codeJs:t,columns1:i,columns2:n,dataCheckbox:o,deleteRow:({rowIndex:f})=>{a.value.splice(f,1)},modelCheckbox:l,rows:a,rowsFooter:[{name:"_A_TABLE_FORM_FOOTER_TOTAL_",score:68}],saveRow:({model:f,rowIndex:b})=>{a.value.splice(b,1,f)},texts:{editInfoText:"Only one row can be edited at a time."}}}},qt={class:"a_mb_4"};function Nt(e,t,o,l,i,n){const a=D("a-checkbox"),r=D("a-table-form"),d=D("aloha-example");return G(),J(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TABLE_FORM_GROW_HEADER_",description:"_A_TABLE_FORM_GROW_DESCRIPTION_",props:["is-columns-grow","is-deletable","is-drag-and-drop","is-editable"]},{default:V(()=>[M(a,{class:"a_mb_4",modelValue:e.modelCheckbox,"onUpdate:modelValue":t[0]||(t[0]=c=>e.modelCheckbox=c),data:e.dataCheckbox,"key-id":"value","key-label":"label"},null,8,["modelValue","data"]),ke("div",qt,[M(r,{columns:e.columns1,"is-columns-grow":!0,"is-deletable":e.modelCheckbox.includes("is-deletable"),"is-drag-and-drop":e.modelCheckbox.includes("is-drag-and-drop"),"is-editable":e.modelCheckbox.includes("is-editable"),"rows-footer":e.rowsFooter,rows:e.rows,"save-row":e.saveRow,texts:e.texts,"key-id":"id",label:"_A_TABLE_FORM_EXAMPLE_LABEL_",onDeleteRow:e.deleteRow},null,8,["columns","is-deletable","is-drag-and-drop","is-editable","rows-footer","rows","save-row","texts","onDeleteRow"])]),M(r,{columns:e.columns2,"is-columns-grow":!0,"is-deletable":e.modelCheckbox.includes("is-deletable"),"is-drag-and-drop":e.modelCheckbox.includes("is-drag-and-drop"),"is-editable":e.modelCheckbox.includes("is-editable"),"rows-footer":e.rowsFooter,rows:e.rows,"save-row":e.saveRow,texts:e.texts,"key-id":"id",label:"_A_TABLE_FORM_EXAMPLE_LABEL_",onDeleteRow:e.deleteRow},null,8,["columns","is-deletable","is-drag-and-drop","is-editable","rows-footer","rows","save-row","texts","onDeleteRow"])]),_:1},8,["code-html","code-js"])}const Pt=j(St,[["render",Nt]]);function Ht(){return{codeHtml:`<a-one-checkbox
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
`}}function Ut(){return{codeJs:`import {
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
};`}}const $t={name:"PageTableFormSticky",components:{AlohaExample:z,AOneCheckbox:Ae,ATableForm:Z},setup(){const{codeHtml:e}=Ht(),{codeJs:t}=Ut(),o=C(!0),l=Array.from({length:20},(n,a)=>{const r=a+1;return{id:`c${r}`,label:`${r}`,maxWidth:120,minWidth:120,width:120,formElement:{controlsType:"none",type:"integer"}}}),i=C(Array.from({length:6},(n,a)=>{const r={id:a+1};return l.forEach((d,c)=>{r[d.id]=(a+1)*100+c+1}),r}));return{codeHtml:e,codeJs:t,columns:l,isActionsSticky:o,rows:i}}};function Wt(e,t,o,l,i,n){const a=D("a-one-checkbox"),r=D("a-table-form"),d=D("aloha-example");return G(),J(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TABLE_FORM_STICKY_HEADER_",description:"_A_TABLE_FORM_STICKY_DESCRIPTION_",props:["is-actions-sticky","is-deletable-confirm","is-editable"]},{default:V(()=>[M(a,{class:"a_mb_4",modelValue:e.isActionsSticky,"onUpdate:modelValue":t[0]||(t[0]=c=>e.isActionsSticky=c),label:"isActionsSticky"},null,8,["modelValue"]),M(r,{columns:e.columns,"is-actions-sticky":e.isActionsSticky,"is-deletable-confirm":!0,"is-editable":!0,rows:e.rows,"key-id":"id",label:"20 columns"},null,8,["columns","is-actions-sticky","rows"])]),_:1},8,["code-html","code-js"])}const jt=j($t,[["render",Wt]]);function Gt(){return{pageTitle:_(()=>Ee({placeholder:"_A_TABLE_FORM_PAGE_TITLE_"}))}}const Jt={name:"PageTableForm",components:{AlohaPage:ue,PageTableFormBasic:yt,PageTableFormDND:Mt,PageTableFormEdit:kt,PageTableFormGrow:Pt,PageTableFormSticky:jt},setup(){const{pageTitle:e}=Gt();return{pageTitle:e}}};function Vt(e,t,o,l,i,n){const a=D("page-table-form-basic"),r=D("page-table-form-d-n-d"),d=D("page-table-form-edit"),c=D("page-table-form-sticky"),v=D("page-table-form-grow"),f=D("aloha-page");return G(),J(f,{"page-title":e.pageTitle},{body:V(()=>[M(a),M(r),M(d),M(c),M(v)]),_:1},8,["page-title"])}const co=j(Jt,[["render",Vt]]);export{co as default};
