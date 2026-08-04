import{A as Y,a as Ee}from"./chunk.AlohaExample.DngBTWdc.js";import{d as Ae,s as se,A as K,c as W,b as Re,e as pe,f as oe,h as ye,i as Te,j as Ce,k as ge,_ as j,l as ce,m as De,g as Le}from"./bundle.index.DcFcwWBR.js";import{t as n,d as _,h as f,M as ne,l as Me,aX as Oe,L as Fe,O as Ie,C as xe,aY as ke,aZ as Se,g as Be,r as T,j as qe,P as Ne,E as Pe,z as Ue,o as He,Y as V,W as G,aU as J,f as C,$ as M,_ as $e}from"./chunk.vendor.BEEJbev-.js";import{i as We,j as x,r as k,a as de,l as U,M as je,T as Ve,v as Ge,h as Je,W as Ke,d as Ye,b as Xe,u as ze}from"./chunk.vendor-lodash.CwOx-Q_g.js";import{A as Qe}from"./chunk.AFormElement.BTO3H6Tq.js";import"./chunk.APageTabTitle.DoB5zzrd.js";import"./chunk.AlohaHighlightjs.De6fh8wy.js";import"./chunk.translations-ar.C-5fhGmj.js";import"./chunk.translations-de.DCUTmhwe.js";import"./chunk.translations-en.BwLyv-AK.js";import"./chunk.translations-es.CHkqKKCX.js";import"./chunk.translations-fr.CiNnfS8h.js";import"./chunk.translations-hr.BtDa3-Lh.js";import"./chunk.translations-it.BSfWCMA4.js";import"./chunk.translations-ru.CAQSfiHN.js";function Ze(e){const t=n(e,"column"),o=n(e,"isEditable"),s=n(e,"isEditMode");return{disabledLocal:_(()=>{var r,a;return!!((a=(r=t.value)==null?void 0:r.formElement)!=null&&a.disabled)||o.value&&!s.value})}}function et(e){const t=n(e,"column"),o=n(e,"isEditable"),s=n(e,"isEditMode"),i=n(e,"isFooter");return{readonlyLocal:_(()=>{var a,l,c,d;return i.value?!0:o.value?(l=(a=t.value)==null?void 0:a.formElement)!=null&&l.useRowReadonly?!s.value:!!((d=(c=t.value)==null?void 0:c.formElement)!=null&&d.readonly):!0})}}function tt(e){const t=n(e,"column"),o=n(e,"isFooter"),s=_(()=>o.value?t.value.footerSlot:t.value.slot),i=_(()=>o.value?t.value.footerSlotAfter:t.value.slotAfter),r=_(()=>!!s.value),a=_(()=>!!i.value);return{hasSlot:r,hasSlotAfter:a,slotName:s,slotNameAfter:i}}function ie(e){if(!(e==null||e===""))return typeof e=="number"?`${e}px`:e}function ue(e){const t=n(e,"column");return{columnStyles:_(()=>{const s={},i=ie(t.value.width),r=ie(t.value.maxWidth),a=ie(t.value.minWidth);return i&&(s.width=i),r&&(s.maxWidth=r),a&&(s.minWidth=a),We(t.value.style)?{...s,...t.value.style}:t.value.style?[s,t.value.style]:s})}}const ot={name:"ATableFormCell",props:{column:{type:Object,required:!0},columnIndex:{type:Number,required:!0},columnStyle:{type:Object,required:!1,default:void 0},errorIcon:{type:String,required:!1,default:void 0},errors:{type:Object,required:!1,default:()=>({})},id:{type:String,required:!0},isEditMode:{type:Boolean,required:!1,default:!1},isEditable:{type:Boolean,required:!1,default:!1},isFooter:{type:Boolean,required:!1,default:!1},row:{type:Object,required:!0},rowData:{type:Object,required:!1,default:void 0},rowIndex:{type:Number,required:!0},rows:{type:Array,required:!0},tag:{type:String,required:!1,default:"td"}},emits:["updateRowData"],setup(e){const{columnStyles:t}=ue({column:e.column}),{readonlyLocal:o}=et(e),{disabledLocal:s}=Ze(e),{hasSlot:i,hasSlotAfter:r,slotName:a,slotNameAfter:l}=tt(e),c=_(()=>e.rowData||e.row);return{columnStyles:t,disabledLocal:s,hasSlot:i,hasSlotAfter:r,readonlyLocal:o,rowDataLocal:c,slotName:a,slotNameAfter:l}},methods:{updateRowData({item:e,model:t}){this.$emit("updateRowData",{column:this.column,columnId:this.column.id,item:e,model:t,value:t})}},render(){const{type:e="text",...t}=this.column.formElement||{},o={column:this.column,columnIndex:this.columnIndex,row:this.row,rowIndex:this.rowIndex,rows:this.rows};return f(this.tag,{class:["a_table_form__cell",`a_table_form__cell_${this.tag}`,this.column.class,this.isFooter?this.column.classFooter:this.column.classRow],"data-column-id":this.column.id,style:[this.columnStyles,this.columnStyle]},[this.hasSlot&&this.$slots[this.slotName]?this.$slots[this.slotName](o):f(Qe,{id:this.column.id,errorIcon:this.errorIcon,idPrefix:this.id,...t,change:this.updateRowData,disabled:this.disabledLocal,errors:x(this.errors,this.column.id),errorsClass:"a_sr_only",modelValue:x(this.rowDataLocal,this.column.id),readonly:this.readonlyLocal,type:e}),this.hasSlotAfter&&this.$slots[this.slotNameAfter]?this.$slots[this.slotNameAfter](o):null])}};function at(e,{idBtnDelete:t=_(()=>""),isActionsDisabled:o=_(()=>!1)}){const s=n(e,"id"),i=n(e,"isDeletable"),r=n(e,"isDeletableConfirm"),a=n(e,"onDeleteRow"),l=n(e,"row"),c=n(e,"rowIndex"),d=n(e,"texts"),{closeConfirm:h,openConfirm:m}=Ae(),w=()=>{h(),ne().then(()=>{se({selector:`#${t.value}`})})},E=()=>{m({bodyHtml:d.value.actionDeleteConfirmBody,closeButtonText:d.value.actionDeleteConfirmClose,headerText:d.value.actionDeleteConfirmHeader,save:async()=>{await a.value({btnDeleteId:t.value,row:l.value,rowIndex:c.value,rowId:s.value}),h()},close:w,saveButtonText:d.value.actionDeleteConfirmSave})};return{onDeleteClick:()=>{if(!o.value){if(r.value){E();return}i.value&&a.value({btnDeleteId:t.value,row:l.value,rowIndex:c.value,rowId:s.value})}}}}function st(e){const t=n(e,"actionsDisabledCallback"),o=n(e,"hasActiveEditRow"),s=n(e,"isActiveEditMode"),i=n(e,"row"),r=n(e,"rowIndex"),a=_(()=>o.value&&!s.value),l=_(()=>{if(a.value)return!0;const d=x(t.value,"delete");return k(d)?d({row:i.value,rowIndex:r.value}):!1}),c=_(()=>{if(a.value)return!0;const d=x(t.value,"edit");return k(d)?d({row:i.value,rowIndex:r.value}):!1});return{isDeleteDisabled:l,isEditDisabled:c}}function lt(e){const t=n(e,"actionsHideCallback"),o=n(e,"row"),s=n(e,"rowIndex"),i=_(()=>{const a=x(t.value,"delete");return k(a)?a({row:o.value,rowIndex:s.value}):!1}),r=_(()=>{const a=x(t.value,"edit");return k(a)?a({row:o.value,rowIndex:s.value}):!1});return{isDeleteHidden:i,isEditHidden:r}}function it(e){const t=n(e,"id"),o=_(()=>`${t.value}_delete`),s=_(()=>`${t.value}_edit`),i=_(()=>`${t.value}_cancel`),r=_(()=>`${t.value}_save`);return{idBtnCancel:i,idBtnDelete:o,idBtnEdit:s,idBtnSave:r}}function rt(e){const t=n(e,"isDeletable"),o=n(e,"isDeletableConfirm"),s=n(e,"isEditable"),i=n(e,"isActiveEditMode"),r=n(e,"widths");return{columnStyles:_(()=>{const l=t.value||o.value,c=s.value||i.value&&l?r.value.actionsColumnDouble:r.value.actionsColumnSingle;return{maxWidth:`${c}px`,minWidth:`${c}px`,width:`${c}px`}})}}function nt(e){const t=n(e,"row"),o=n(e,"rowIndex"),s=n(e,"texts"),i=n(e,"actionsTitleCallback"),r=_(()=>{const l=x(i.value,"delete");return k(l)?l({row:t.value,rowIndex:o.value}):s.value.actionDelete}),a=_(()=>{const l=x(i.value,"edit");return k(l)?l({row:t.value,rowIndex:o.value}):s.value.actionEdit});return{deleteTitle:r,editTitle:a}}const dt={name:"ATableFormCellAction",props:{actionsClasses:{type:Object,required:!1,default:()=>({})},actionsDisabledCallback:{type:Object,required:!1,default:()=>({})},actionsHideCallback:{type:Object,required:!1,default:()=>({})},actionsTitleCallback:{type:Object,required:!1,default:()=>({})},extra:{type:Object,required:!1,default:void 0},hasActiveEditRow:{type:Boolean,required:!1,default:!1},id:{type:String,required:!0},isActionsSticky:{type:Boolean,required:!1,default:!1},isActiveEditMode:{type:Boolean,required:!1,default:!1},isDeletable:{type:Boolean,required:!1,default:!1},isDeletableConfirm:{type:Boolean,required:!1,default:!1},isEditable:{type:Boolean,required:!1,default:!1},isFooter:{type:Boolean,required:!1,default:!1},isHeader:{type:Boolean,required:!1,default:!1},isSaving:{type:Boolean,required:!1,default:!1},onCancelEditRow:{type:Function,required:!0},onDeleteRow:{type:Function,required:!0},onEditRow:{type:Function,required:!0},onSaveEditRow:{type:Function,required:!0},row:{type:Object,required:!0},rowIndex:{type:Number,required:!0},texts:{type:Object,required:!1,default:()=>({})},widths:{type:Object,required:!1,default:()=>({})}},setup(e){const{isDeleteDisabled:t,isEditDisabled:o}=st(e),{isDeleteHidden:s,isEditHidden:i}=lt(e),{idBtnCancel:r,idBtnDelete:a,idBtnEdit:l,idBtnSave:c}=it(e),{onDeleteClick:d}=at(e,{idBtnDelete:a,isActionsDisabled:t}),{columnStyles:h}=rt(e),{deleteTitle:m,editTitle:w}=nt(e);return{columnStyles:h,deleteTitle:m,editTitle:w,idBtnCancel:r,idBtnDelete:a,idBtnEdit:l,idBtnSave:c,isDeleteDisabled:t,isDeleteHidden:s,isEditDisabled:o,isEditHidden:i,onDeleteClick:d}},render(){const e=this.isHeader?"th":"td";return f(e,{class:["a_table_form__cell",`a_table_form__cell_${e}`,"a_table_form__cell_actions",{a_table_form__cell_actions_sticky:this.isActionsSticky}],style:this.columnStyles},[this.isHeader?f("span",{class:"a_sr_only"},[f(K,{tag:"span",text:this.texts.actionsColumn})]):this.isFooter?null:f("div",{class:"a_table_form__actions",role:"group"},this.isActiveEditMode?[f(W,{id:this.idBtnCancel,class:["a_table_form__action_button",this.actionsClasses.editCancel],disabled:this.isSaving,extra:this.extra,iconLeft:Me,title:this.texts.actionEditCancel,textScreenReader:this.texts.actionEditCancel,onClick:()=>this.onCancelEditRow({id:this.id,row:this.row,rowIndex:this.rowIndex,trigger:"cancel"})}),f(W,{id:this.idBtnSave,class:["a_table_form__action_button",this.actionsClasses.editSave],disabled:this.isSaving,extra:this.extra,iconLeft:Oe,title:this.texts.actionEditSave,textScreenReader:this.texts.actionEditSave,onClick:()=>this.onSaveEditRow({id:this.id,row:this.row,rowIndex:this.rowIndex})})]:[(this.isDeletable||this.isDeletableConfirm)&&!this.isDeleteHidden&&f(W,{id:this.idBtnDelete,class:["a_table_form__action_button",this.actionsClasses.delete],disabled:this.isDeleteDisabled,extra:this.extra,iconLeft:Fe,title:this.deleteTitle,textScreenReader:this.deleteTitle,onClick:this.onDeleteClick}),this.isEditable&&!this.isEditHidden&&f(W,{id:this.idBtnEdit,class:["a_table_form__action_button",this.actionsClasses.edit],disabled:this.isEditDisabled,extra:this.extra,iconLeft:Ie,title:this.editTitle,textScreenReader:this.editTitle,onClick:()=>this.onEditRow({id:this.id,row:this.row,rowIndex:this.rowIndex})})])])}};function ct(e){const t=n(e,"id"),o=_(()=>`${t.value}_up`);return{idBtnDown:_(()=>`${t.value}_down`),idBtnUp:o}}const ut={name:"ATableFormCellDnd",props:{canMoveRowDown:{type:Function,required:!0},canMoveRowUp:{type:Function,required:!0},id:{type:String,required:!0},isCreateMode:{type:Boolean,required:!1,default:!1},isDragAndDrop:{type:Boolean,required:!1,default:!1},isDndDisabled:{type:Boolean,required:!1,default:!1},isFooter:{type:Boolean,required:!1,default:!1},isHeader:{type:Boolean,required:!1,default:!1},moveRowDown:{type:Function,required:!0},moveRowUp:{type:Function,required:!0},onDragend:{type:Function,required:!0},onDragstart:{type:Function,required:!0},rowIndex:{type:Number,required:!0},texts:{type:Object,required:!1,default:()=>({})},widths:{type:Object,required:!1,default:()=>({})}},setup(e){const{idBtnDown:t,idBtnUp:o}=ct(e);return{columnStyles:_(()=>({maxWidth:`${e.widths.dndColumn}px`,minWidth:`${e.widths.dndColumn}px`,width:`${e.widths.dndColumn}px`})),idBtnDown:t,idBtnUp:o}},render(){const e=this.isHeader?"th":"td",t=this.isDragAndDrop&&!this.isDndDisabled;return f(e,{class:["a_table_form__cell",`a_table_form__cell_${e}`,"a_table_form__cell_reorder"],style:this.columnStyles},[this.isHeader?f("span",{class:"a_sr_only"},[f(K,{tag:"span",text:this.texts.reorderColumn})]):this.isCreateMode||this.isFooter?null:f("div",{class:"a_table_form__reorder_actions"},[this.canMoveRowUp(this.rowIndex)&&f(W,{id:this.idBtnUp,class:"a_sr_only_focusable a_btn a_btn_transparent_dark a_table_form__reorder_button",disabled:this.isDndDisabled,iconLeft:xe,preventKeyboardRepeat:!0,tabindex:this.isDndDisabled?-1:void 0,title:this.texts.reorderUp,textScreenReader:this.texts.reorderUp,onClick:()=>this.moveRowUp(this.rowIndex)}),f("span",{ariaHidden:!0,class:["a_table_form__reorder_handle",{a_table_form__reorder_handle_disabled:this.isDndDisabled}],draggable:t,onDragend:t?this.onDragend:void 0,onDragstart:t?o=>this.onDragstart(o,this.rowIndex):void 0},[f(Re,{class:"a_table_form__reorder_icon",icon:this.isDndDisabled?ke:Se})]),f("span",{class:"a_sr_only"},[f(K,{tag:"span",text:this.isDndDisabled?this.texts.reorderDisabled:this.texts.reorderHandle})]),this.canMoveRowDown(this.rowIndex)&&f(W,{id:this.idBtnDown,class:"a_sr_only_focusable a_btn a_btn_transparent_dark a_table_form__reorder_button",disabled:this.isDndDisabled,iconLeft:Be,preventKeyboardRepeat:!0,tabindex:this.isDndDisabled?-1:void 0,title:this.texts.reorderDown,textScreenReader:this.texts.reorderDown,onClick:()=>this.moveRowDown(this.rowIndex)})])])}};function _e(e,{isEditMode:t,isRowDisabled:o}={}){var i;const s=U(e||{});return s.useRowReadonly&&(s.readonly=!t),(i=s.children)!=null&&i.length&&(s.children=s.children.map(r=>_e(r,{isEditMode:t}))),o&&(s.disabled=!0),s}function _t(e){const t=n(e,"columns"),o=n(e,"isEditable"),s=n(e,"isEditMode");return{dataForm:_(()=>{const r=o.value&&!s.value;return t.value.map(a=>{const l=_e(a.formElement,{isEditMode:s.value,isRowDisabled:r});return l.id=a.id,de(l.label)&&(l.label=a.label),l["data-column-id"]=a.id,l})})}}function me(e,t){return(e==null?void 0:e.some(o=>(o==null?void 0:o.id)===t||me(o==null?void 0:o.children,t)))||!1}const mt={name:"ATableFormCellList",props:{columns:{type:Array,required:!0},errors:{type:Object,required:!1,default:()=>({})},id:{type:String,required:!0},isEditable:{type:Boolean,required:!1,default:!1},isEditMode:{type:Boolean,required:!1,default:!1},isFooter:{type:Boolean,required:!1,default:!1},row:{type:Object,required:!0},rowData:{type:Object,required:!1,default:void 0},rowIndex:{type:Number,required:!0},rows:{type:Array,required:!0}},emits:["updateRowData"],setup(e){const{dataForm:t}=_t(e);return{dataForm:t,rowDataLocal:_(()=>e.rowData||e.row)}},methods:{updateRowData({fullModel:e,id:t,item:o,model:s}){const i=this.columns.find(r=>{var a;return r.id===t||me((a=r.formElement)==null?void 0:a.children,t)});this.$emit("updateRowData",{column:i,columnId:t,fullModel:e,item:o,model:s})}},render(){return f("td",{class:["a_table_form__cell","a_table_form__cell_td","a_table_form__cell_list"]},[f(pe,{data:this.dataForm,errors:this.errors,idPrefix:this.id,modelValue:this.rowDataLocal,readonly:this.isFooter||!this.isEditable,showErrors:!0,showRequiredText:!1,tag:"div",useFlatErrors:!0,useFlatModel:!0,onChange:this.updateRowData},this.$slots)])}},ft={name:"ATableFormTh",props:{column:{type:Object,required:!0},columnStyle:{type:Object,required:!1,default:void 0},isEditable:{type:Boolean,required:!1,default:!1}},setup(e){const{columnStyles:t}=ue({column:e.column});return{columnStyles:t}},render(){var e;return f("th",{class:["a_table_form__cell","a_table_form__cell_th",this.column.class],style:[this.columnStyles,this.columnStyle]},[this.column.slotHeader&&this.$slots[this.column.slotHeader]?this.$slots[this.column.slotHeader]({column:this.column,isEditable:this.isEditable}):this.column.label&&f(K,{html:this.column.label,tag:"span"}),this.isEditable&&((e=this.column.formElement)==null?void 0:e.required)&&f("span",{class:"a_label__required"},"*")])}};function ht(e,{hasErrors:t=_(()=>!1)}){const o=n(e,"hasActiveEditRow"),s=n(e,"isActiveEditMode"),i=n(e,"isCreateMode"),r=n(e,"isFooter"),a=n(e,"isHeader"),l=n(e,"row"),c=n(e,"rowClass"),d=n(e,"rowIndex"),h=n(e,"trClass"),m=_(()=>k(c.value)?c.value({row:l.value,rowIndex:d.value,rowindex:d.value,isCreateMode:i.value,isFooter:r.value,isHeader:a.value}):c.value),w=_(()=>[h.value,m.value,{a_table_form__row_active:!a.value&&!r.value&&s.value,a_table_form__row_errors:!a.value&&!r.value&&t.value,a_table_form__row_inactive:!a.value&&!r.value&&o.value&&!s.value}]);return{rowClassLocal:m,trClassLocal:w}}function bt(e,{errorsLocal:t=T(void 0)}){const o=n(e,"changeModel"),s=n(e,"onCancelEditRow"),i=n(e,"row"),r=n(e,"rows"),a=n(e,"rowIndex"),l=n(e,"saveRow"),c=T(!1),d=T(void 0),h=({column:E,columnId:A,fullModel:D,item:q,model:P})=>{d.value||(d.value=U(i.value)||{});let S;o.value&&(S=o.value({modelAll:d.value,row:i.value,column:E,fullModel:D,model:P,item:q})),S!=null&&S.model?d.value=U(S.model):D!==void 0?d.value=U(D):je(d.value,A,P),Ve(t.value,A)},m=({trigger:E,id:A}={})=>{s.value({row:i.value,rowIndex:a.value,trigger:E,id:A})};return{cancelEditRow:m,isSaving:c,modelLocal:d,saveEditRow:async({id:E}={})=>{if(!c.value){t.value={},c.value=!0;try{const A=await l.value({model:U(d.value),row:i.value,rowIndex:a.value,rows:r.value});if(A!=null&&A.errors){t.value=U(A.errors);return}m({trigger:"save",id:E})}catch(A){t.value=A}finally{c.value=!1}}},updateModelLocal:h}}function wt(e){const t=n(e,"columns"),o=T({}),s=_(()=>!Ge(o.value)),i=_(()=>{const r=[];return Je(t.value,a=>{const l=U(a.formElement)||{};l.type=l.type||"text",l.label=l.label||a.label,l.id=l.id||a.id,r.push(l)}),r});return{errorsLocal:o,hasErrors:s,optionsListForErrors:i}}function vt({idTr:e=_(()=>"")}){return{focusEditableElementByColumnId:s=>{if(!s)return!1;const i=document.getElementById(e.value),r=Array.from((i==null?void 0:i.querySelectorAll("[data-column-id]"))||[]).find(c=>c.dataset.columnId===`${s}`),a=document.getElementById(`${e.value}${s}`),l=(r==null?void 0:r.querySelector(oe))||(a!=null&&a.matches(oe)?a:a==null?void 0:a.querySelector(oe));return l?(l.focus(),!0):!1},focusFirstEditableElement:()=>{const s=document.getElementById(e.value);if(!s)return;const r=Array.from(s.querySelectorAll(".a_table_form__cell:not(.a_table_form__cell_actions)")).map(a=>a.querySelector(oe)).find(Boolean);r==null||r.focus()}}}function Et(e){const t=n(e,"id"),o=n(e,"isHeader"),s=n(e,"isFooter"),i=n(e,"rowIndex");return{idTr:_(()=>`${t.value}_${i.value}${o.value?"_header":""}${s.value?"_footer":""}`)}}const At=["a","button","[contenteditable]","[role='button']","[role='checkbox']","[role='combobox']","[role='link']","[role='menuitem']","[role='option']","[role='radio']","[role='switch']","[role='textbox']"].join(","),Rt=e=>!!e&&(e.disabled||e.hasAttribute("readonly")||e.getAttribute("aria-disabled")==="true"||e.getAttribute("aria-readonly")==="true"),pt=(e,t)=>{var r,a,l,c;const o=(a=(r=e.target)==null?void 0:r.closest)==null?void 0:a.call(r,"[data-column-id]");if(o!=null&&o.dataset.columnId)return o.dataset.columnId;const s=(c=(l=e.target)==null?void 0:l.closest)==null?void 0:c.call(l,"[id]"),i=s==null?void 0:s.id;if(i!=null&&i.startsWith(t))return i.slice(t.length)},ae={name:"ATableFormRow",props:{actionsClasses:{type:Object,required:!1,default:()=>({})},actionsDisabledCallback:{type:Object,required:!1,default:()=>({})},actionsHideCallback:{type:Object,required:!1,default:()=>({})},actionsTitleCallback:{type:Object,required:!1,default:()=>({})},allColumnsLength:{type:Number,required:!0},canMoveRowDown:{type:Function,required:!0},canMoveRowUp:{type:Function,required:!0},cellTag:{type:String,required:!1,default:void 0},changeModel:{type:Function,required:!1,default:void 0},columns:{type:Array,required:!0},columnsStylesGrow:{type:Object,required:!1,default:()=>({})},draggedRowIndex:{type:Number,required:!1,default:void 0},editModel:{type:Object,required:!1,default:void 0},editFocusColumnId:{type:[String,Number],required:!1,default:void 0},errorIcon:{type:String,required:!1,default:void 0},extra:{type:Object,required:!1,default:void 0},hasActionsColumn:{type:Boolean,required:!1,default:!1},hasActiveEditRow:{type:Boolean,required:!1,default:!1},id:{type:String,required:!0},isActionsSticky:{type:Boolean,required:!1,default:!1},isActiveEditMode:{type:Boolean,required:!1,default:!1},isCreateMode:{type:Boolean,required:!1,default:!1},isDeletable:{type:Boolean,required:!1,default:!1},isDeletableConfirm:{type:Boolean,required:!1,default:!1},isDndDisabled:{type:Boolean,required:!1,default:!1},isDragAndDrop:{type:Boolean,required:!1,default:!1},isEditable:{type:Boolean,required:!1,default:!1},isEditOnRowClick:{type:Boolean,required:!1,default:!1},isFooter:{type:Boolean,required:!1,default:!1},isHeader:{type:Boolean,required:!1,default:!1},moveRowDown:{type:Function,required:!0},moveRowUp:{type:Function,required:!0},onCancelEditRow:{type:Function,required:!0},onDeleteRow:{type:Function,required:!0},onDragend:{type:Function,required:!0},onDragleave:{type:Function,required:!1,default:void 0},onDragover:{type:Function,required:!1,default:void 0},onDragstart:{type:Function,required:!0},onDrop:{type:Function,required:!1,default:void 0},onEditRow:{type:Function,required:!0},row:{type:Object,required:!0},rowClass:{type:[String,Object,Array,Function],required:!1,default:void 0},rowIndex:{type:Number,required:!0},rows:{type:Array,required:!0},rowView:{type:String,required:!1,default:"table",validator:e=>["list","table"].includes(e)},saveRow:{type:Function,required:!0},texts:{type:Object,required:!1,default:()=>({})},trClass:{type:[String,Object,Array],required:!1,default:void 0},widths:{type:Object,required:!1,default:()=>({})}},setup(e){const{idTr:t}=Et(e),{focusEditableElementByColumnId:o,focusFirstEditableElement:s}=vt({idTr:t}),{errorsLocal:i,hasErrors:r,optionsListForErrors:a}=wt(e),{rowClassLocal:l,trClassLocal:c}=ht(e,{hasErrors:r}),{cancelEditRow:d,isSaving:h,modelLocal:m,saveEditRow:w,updateModelLocal:E}=bt(e,{errorsLocal:i});return{cancelEditRow:d,errorsLocal:i,focusFirstEditableElement:s,focusEditableElementByColumnId:o,hasErrors:r,rowClassLocal:l,idTr:t,isSaving:h,modelLocal:m,optionsListForErrors:a,saveEditRow:w,trClassLocal:c,updateModelLocal:E}},computed:{canEditOnRowClick(){if(!this.isEditOnRowClick||!this.isEditable||this.isActiveEditMode||this.isCreateMode||this.isFooter||this.isHeader||this.hasActiveEditRow)return!1;const e=x(this.actionsHideCallback,"edit");if(k(e)&&e({row:this.row,rowIndex:this.rowIndex}))return!1;const t=x(this.actionsDisabledCallback,"edit");return!(k(t)&&t({row:this.row,rowIndex:this.rowIndex}))},currentRowData(){return this.isActiveEditMode&&this.modelLocal?this.modelLocal:this.row}},methods:{onRowClick(e){var o,s,i,r;if(!this.canEditOnRowClick||(s=(o=e.target)==null?void 0:o.closest)!=null&&s.call(o,".a_table_form__cell_actions, .a_table_form__cell_reorder"))return;const t=(r=(i=e.target)==null?void 0:i.closest)==null?void 0:r.call(i,At);t&&!Rt(t)||this.onEditRow({focusColumnId:pt(e,this.idTr),id:this.idTr,row:this.row,rowIndex:this.rowIndex})}},watch:{isActiveEditMode:{immediate:!0,handler(e){if(e){this.modelLocal=U(this.editModel===void 0?this.row:this.editModel),this.errorsLocal={},ne(()=>{this.focusEditableElementByColumnId(this.editFocusColumnId)||this.focusFirstEditableElement()});return}this.errorsLocal={},this.isSaving=!1}}},render(){const e=[];return this.isActiveEditMode&&this.texts.editInfoText&&e.push(f("tr",{class:"a_table_form__row a_table_form__row_info",key:`info_${this.rowIndex}`},[f("td",{class:"a_table_form__cell a_table_form__cell_info",colspan:this.allColumnsLength},[f(ye,{alertClass:"a_table_form__info",html:this.texts.editInfoText,isVisible:!0,type:"info"})])])),e.push(f("tr",{id:this.idTr,"aria-grabbed":!this.isHeader&&!this.isFooter?this.draggedRowIndex===this.rowIndex:void 0,class:[this.trClassLocal,{a_table_form__row_edit_on_click:this.canEditOnRowClick}],key:`main_${this.rowIndex}`,onClick:this.onRowClick,onDragleave:this.onDragleave&&(t=>this.onDragleave(t,this.rowIndex)),onDragover:this.onDragover&&(t=>this.onDragover(t,this.rowIndex)),onDrop:this.onDrop&&(t=>this.onDrop(t,this.rowIndex))},[this.isDragAndDrop?f(ut,{id:this.idTr,canMoveRowDown:this.canMoveRowDown,canMoveRowUp:this.canMoveRowUp,isCreateMode:this.isCreateMode,isDndDisabled:this.isDndDisabled,isDragAndDrop:this.isDragAndDrop,isFooter:this.isFooter,isHeader:this.isHeader,moveRowDown:this.moveRowDown,moveRowUp:this.moveRowUp,onDragend:this.onDragend,onDragstart:this.onDragstart,rowIndex:this.rowIndex,texts:this.texts,widths:this.widths}):null,...this.rowView==="list"&&!this.isHeader?[f(mt,{id:this.idTr,columns:this.columns,errors:this.errorsLocal,isEditable:this.isEditable,isEditMode:this.isActiveEditMode,isFooter:this.isFooter,onUpdateRowData:this.updateModelLocal,row:this.row,rowData:this.currentRowData,rowIndex:this.rowIndex,rows:this.rows},this.$slots)]:this.columns.map((t,o)=>this.isHeader?f(ft,{column:t,columnStyle:this.columnsStylesGrow[t.id],isEditable:this.isEditable},this.$slots):f(ot,{id:this.idTr,column:t,columnIndex:o,columnStyle:this.columnsStylesGrow[t.id],errorIcon:this.errorIcon,errors:this.errorsLocal,isEditable:this.isEditable,isEditMode:this.isActiveEditMode,isFooter:this.isFooter,onUpdateRowData:this.updateModelLocal,row:this.row,rowData:this.currentRowData,rowIndex:this.rowIndex,rows:this.rows,tag:this.cellTag},this.$slots)),this.hasActionsColumn?f(dt,{id:this.idTr,actionsClasses:this.actionsClasses,actionsDisabledCallback:this.actionsDisabledCallback,actionsHideCallback:this.actionsHideCallback,actionsTitleCallback:this.actionsTitleCallback,extra:this.extra,hasActiveEditRow:this.hasActiveEditRow,isActionsSticky:this.isActionsSticky,isActiveEditMode:this.isActiveEditMode,isDeletable:this.isDeletable,isDeletableConfirm:this.isDeletableConfirm,isEditable:this.isEditable,isFooter:this.isFooter,isHeader:this.isHeader,isSaving:this.isSaving,onCancelEditRow:this.cancelEditRow,onDeleteRow:this.onDeleteRow,onEditRow:this.onEditRow,onSaveEditRow:this.saveEditRow,row:this.row,rowIndex:this.rowIndex,texts:this.texts,widths:this.widths}):null])),this.rowView==="table"&&this.isActiveEditMode&&this.hasErrors&&e.push(f("tr",{class:"a_table_form__row a_table_form__row_errors",key:`errors_${this.rowIndex}`},[f("td",{class:"a_table_form__cell a_table_form__cell_errors",colspan:this.allColumnsLength},[f(Te,{autoFocus:!0,closable:!1,errors:this.errorsLocal,optionsList:this.optionsListForErrors,idPrefix:this.idTr})])])),e}};function yt(e){const t=n(e,"actionsClasses");return{actionsClassesLocal:_(()=>({delete:"a_btn a_btn_transparent_danger",edit:"a_btn a_btn_transparent_primary",editCancel:"a_btn a_btn_transparent_primary",editSave:"a_btn a_btn_transparent_primary",addRow:"a_btn a_btn_outline_primary",...t.value}))}}function Tt(e){const t=n(e,"columns"),o=n(e,"isDeletable"),s=n(e,"isDeletableConfirm"),i=n(e,"isDragAndDrop"),r=n(e,"isEditable"),a=n(e,"rowView"),l=_(()=>!!(r.value||o.value||s.value)),c=_(()=>t.value.filter(h=>h.isRender!==!1));return{allColumnsLength:_(()=>{let h=a.value==="list"?1:c.value.length;return i.value&&(h+=1),l.value&&(h+=1),h}),columnsVisible:c,hasActionsColumn:l}}const Ct=2;function gt(e,{columnsVisible:t=_(()=>[]),hasActionsColumn:o=_(()=>!1),widthsLocal:s=_(()=>({}))}){const i=n(e,"id"),r=n(e,"isColumnsGrow"),a=n(e,"isDeletable"),l=n(e,"isDeletableConfirm"),c=n(e,"isDragAndDrop"),d=n(e,"isEditable"),{remPx:h,scalePxWithRem:m}=Ce(),w=T(void 0),E=T({});let A,D;const q=_(()=>o.value?d.value?s.value.actionsColumnDouble:a.value||l.value?s.value.actionsColumnSingle:0:0),P=_(()=>c.value?s.value.dndColumn:0),S=()=>{var y;return(y=document.getElementById(i.value))==null?void 0:y.parentElement},O=y=>{if(de(y)||y==="")return 0;if(Ye(y))return+m(y)||0;if(!Xe(y))return 0;const g=y.trim();return g?g.endsWith("rem")?(parseFloat(g)||0)*h.value:(g.endsWith("px"),parseFloat(g)||0):0},L=y=>{const g=`${y}px`;return{maxWidth:g,minWidth:g,width:g}},B=()=>{if(!r.value||!w.value){E.value={};return}const y=t.value||[],g=w.value-q.value-P.value-Ct;if(g<=0){E.value={};return}let u=0,b=0;if(y.forEach(p=>{const I=O(p.width);u+=I,b+=Math.max(0,+p.grow||0)}),u>=g||b<=0){E.value={};return}const v=g-u,R={};y.forEach(p=>{const I=O(p.width),F=Math.max(0,+p.grow||0);if(!p.id||!I)return;const H=I+(F>0?v*F/b:0);R[p.id]=L(H)}),E.value=R},z=()=>{if(!r.value||A)return;const y=S();y&&(D=y,A=new ResizeObserver(Ke(g=>{var b,v;const u=(v=(b=g[0])==null?void 0:b.contentRect)==null?void 0:v.width;u&&(w.value=u,B())},100)),w.value=y.getBoundingClientRect().width,B(),A.observe(y))},Q=()=>{A&&(D&&A.unobserve(D),A.disconnect(),A=void 0,D=void 0)};return qe([t,o,a,l,c,d,s],()=>{B()},{deep:!0}),{columnsStylesGrow:E,destroyColumnsGrowObserver:Q,initColumnsGrowObserver:z}}function Dt(e,{emit:t}){return{onDeleteRow:({row:s,rowIndex:i,rowId:r,btnDeleteId:a})=>{t("deleteRow",{row:s,rowIndex:i,rowId:r,btnDeleteId:a})}}}function Lt(e,{emit:t},{isDndDisabled:o=_(()=>!1)}={}){const s=n(e,"actionsDisabledCallback"),i=n(e,"focusAfterMove"),r=n(e,"id"),a=n(e,"isDragAndDrop"),l=n(e,"rows"),c=T(void 0),d=T(void 0),h=T(void 0),m=T(void 0),w=u=>{if(o.value)return!0;const b=x(s.value,"dnd");return k(b)?!!b({row:l.value[u],rowIndex:u}):!1},E=(u,b)=>{const v=Math.min(u,b),R=Math.max(u,b);for(let p=v;p<=R;p++)if(w(p))return!0;return!1},A=()=>{var u;(u=m.value)==null||u.remove(),m.value=void 0},D=u=>{var H,ee;const b=(ee=(H=u.target)==null?void 0:H.closest)==null?void 0:ee.call(H,"tr");if(!b)return;const v=b.getBoundingClientRect(),R=document.createElement("table"),p=document.createElement("tbody"),I=b.cloneNode(!0);R.className="a_table_form__table",R.style.borderCollapse="collapse",R.style.borderSpacing="0",R.style.width=`${v.width}px`,R.style.tableLayout="fixed",Array.from(b.children).forEach((te,le)=>{const N=I.children[le];if(N){const $=window.getComputedStyle(te);N.style.width=`${te.getBoundingClientRect().width}px`,N.style.backgroundColor=$.backgroundColor,N.style.borderTop=$.borderTop,N.style.borderRight=$.borderRight,N.style.borderBottom=$.borderBottom,N.style.borderLeft=$.borderLeft,N.style.color=$.color}}),p.appendChild(I),R.appendChild(p);const F=document.createElement("div");return F.className="a_table_form a_table_form__drag_preview",F.style.position="fixed",F.style.top="-10000px",F.style.left="-10000px",F.style.pointerEvents="none",F.style.zIndex="9999",F.appendChild(R),document.body.appendChild(F),m.value=F,{element:F,offsetX:Math.min(u.offsetX||0,v.width/2),offsetY:Math.min(u.offsetY||0,v.height/2)}},q=({focusId:u,fromIndex:b,toIndex:v,trigger:R})=>{if(!a.value||o.value||b===v||b<0||v<0||b>=l.value.length||v>=l.value.length||E(b,v))return;const p=[...l.value],[I]=p.splice(b,1);p.splice(v,0,I),t("updateRows",{focusId:u,rows:p,trigger:R,fromIndex:b,toIndex:v}),t("moveRow",{focusId:u,fromIndex:b,row:I,toIndex:v})},P=({fromIndex:u,rowIndex:b,position:v="before"})=>{if(!a.value||o.value||u<0||b<0||u>=l.value.length||b>=l.value.length)return;let R=v==="after"?b+1:b;u<R&&(R-=1),q({fromIndex:u,toIndex:R,trigger:"dnd"})},S=({focusId:u})=>{i.value&&ne().then(()=>{se({selector:`#${u}`})})},O=u=>{const b=Math.max(1,u-1),v=`${r.value}_${b}_up`;q({focusId:v,fromIndex:u,toIndex:u-1,trigger:"moveRowUp"}),S({focusId:v})},L=u=>{const b=Math.min(l.value.length-2,u+1),v=`${r.value}_${b}_down`;q({focusId:v,fromIndex:u,toIndex:u+1,trigger:"moveRowDown"}),S({focusId:v})},B=(u,b)=>{if(!(!a.value||w(b))){if(u!=null&&u.dataTransfer){u.dataTransfer.effectAllowed="move",u.dataTransfer.setData("text/plain",`${b}`),A();const v=D(u);v&&u.dataTransfer.setDragImage(v.element,v.offsetX,v.offsetY)}c.value=b}},z=(u,b)=>{var R,p;if(!a.value||w(b))return;u.preventDefault();const v=(p=(R=u.currentTarget)==null?void 0:R.getBoundingClientRect)==null?void 0:p.call(R);if(v){const I=v.top+v.height/2;h.value=u.clientY<I?"before":"after"}else h.value="after";d.value=b},Q=(u,b)=>{var R,p;if(!a.value||w(b))return;const v=u.relatedTarget;(p=(R=u.currentTarget)==null?void 0:R.contains)!=null&&p.call(R,v)||d.value===b&&(d.value=void 0,h.value=void 0)},y=(u,b)=>{!a.value||w(b)||(u.preventDefault(),c.value!==void 0&&(P({fromIndex:c.value,position:h.value||"after",rowIndex:b}),A(),c.value=void 0,d.value=void 0,h.value=void 0))},g=()=>{A(),c.value=void 0,d.value=void 0,h.value=void 0};return{canMoveRowDown:_(()=>u=>u<l.value.length-1),canMoveRowUp:_(()=>u=>u>0),dragOverPosition:h,dragOverRowIndex:d,draggedRowIndex:c,isDndDisabledForRow:w,onDragleave:Q,moveRowDown:L,moveRowUp:O,onDragend:g,onDragover:z,onDragstart:B,onDrop:y}}const fe=e=>{var t;return e!=null&&e.required?!0:((t=e==null?void 0:e.children)==null?void 0:t.some(fe))||!1};function Mt(e,{columnsVisible:t=_(()=>[]),getRowKey:o=()=>{}}){const s=n(e,"addRow"),i=n(e,"isAddable"),r=n(e,"isEditable"),a=n(e,"prepareEditModel"),l=n(e,"rows"),c=T(void 0),d=T(void 0),h=T(void 0),m=T(!1),w=_(()=>!!c.value||m.value),E=_(()=>i.value?k(s.value):!1),A=_(()=>r.value?t.value.some(O=>fe(O.formElement)):!1),D=O=>{if(!k(a.value))return;const L=a.value(O);if((L==null?void 0:L.model)!==void 0)return U(L.model)};return{activeEditFocusColumnId:h,activeEditRowKey:c,activeEditModel:d,canAddRow:E,hasActiveEditRow:w,hasRequiredEditableColumns:A,isAddRowActive:m,onAddRow:()=>{w.value||!E.value||(c.value=void 0,d.value=D({rows:l.value}),h.value=void 0,m.value=!0)},onCancelEditRow:({trigger:O,id:L}={})=>{c.value=void 0,d.value=void 0,h.value=void 0,m.value=!1,O==="cancel"?setTimeout(()=>{se({selector:`#${L}_edit`})}):O==="save"&&setTimeout(()=>{se({selector:`#${L}`})})},onEditRow:({focusColumnId:O,row:L,rowIndex:B})=>{m.value||(d.value=D({row:L,rowIndex:B,rows:l.value}),h.value=O,c.value=o({row:L,rowIndex:B}))}}}function Ot(e){const t=n(e,"icons");return{iconsLocal:_(()=>({actionAddRow:Ne,...t.value}))}}function Ft(e){const t=n(e,"keyId"),o=n(e,"rows"),s=n(e,"rowsFooter"),i=_(()=>o.value.length>0),r=_(()=>s.value.length>0);return{getRowKey:({row:l,rowIndex:c,isFooter:d=!1})=>{let h=c;if(t.value){const w=x(l,t.value);de(w)||(h=w)}return`${d?"footer":"body"}_${h}`},hasRows:i,hasRowsFooter:r}}function It(e){const t=n(e,"texts");return{textsLocal:_(()=>({actionsColumn:"_A_TABLE_FORM_ACTIONS_",actionAddRow:"_A_TABLE_FORM_ADD_ROW_",actionDelete:"_A_TABLE_FORM_DELETE_",actionDeleteConfirmBody:"_A_TABLE_FORM_DELETE_CONFIRM_BODY_",actionDeleteConfirmClose:"_A_TABLE_FORM_DELETE_CONFIRM_CLOSE_",actionDeleteConfirmHeader:"_A_TABLE_FORM_DELETE_CONFIRM_HEADER_",actionDeleteConfirmSave:"_A_TABLE_FORM_DELETE_CONFIRM_SAVE_",actionEdit:"_A_TABLE_FORM_EDIT_",actionEditCancel:"_A_TABLE_FORM_EDIT_CANCEL_",actionEditSave:"_A_TABLE_FORM_EDIT_SAVE_",editInfoText:void 0,emptyText:"_A_TABLE_FORM_EMPTY_",reorderColumn:"_A_TABLE_FORM_REORDER_COLUMN_",reorderDisabled:"_A_TABLE_FORM_REORDER_DISABLED_",reorderDown:"_A_TABLE_FORM_MOVE_DOWN_",reorderHandle:"_A_TABLE_FORM_REORDER_",reorderUp:"_A_TABLE_FORM_MOVE_UP_",...t.value}))}}function xt(e){const t=n(e,"widths");return{widthsLocal:_(()=>({actionsColumnSingle:56,actionsColumnDouble:112,dndColumn:56,...t.value}))}}const X={name:"ATableForm",props:{actionsClasses:{type:Object,required:!1,default:()=>({})},actionsDisabledCallback:{type:Object,required:!1,default:()=>({})},actionsHideCallback:{type:Object,required:!1,default:()=>({})},actionsTitleCallback:{type:Object,required:!1,default:()=>({})},addRow:{type:Function,required:!1,default:void 0},columns:{type:Array,required:!0},columnsDefaultValue:{type:[String,Number],required:!1,default:""},changeModel:{type:Function,required:!1,default:void 0},errorIcon:{type:String,required:!1,default:Pe},extra:{type:Object,required:!1,default:void 0},focusAfterMove:{type:Boolean,required:!1,default:!0},icons:{type:Object,required:!1,default:()=>({})},id:{type:String,required:!1,default:()=>ze("a_table_form_")},isActionsSticky:{type:Boolean,required:!1,default:!1},isAddable:{type:Boolean,required:!1,default:!1},isColumnsGrow:{type:Boolean,required:!1,default:!1},isDeletable:{type:Boolean,required:!1,default:!1},isDeletableConfirm:{type:Boolean,required:!1,default:!1},isDragAndDrop:{type:Boolean,required:!1,default:!1},isEditable:{type:Boolean,required:!1,default:!1},isEditOnRowClick:{type:Boolean,required:!1,default:!1},keyId:{type:String,required:!1,default:void 0},label:{type:[String,Number],required:!1,default:""},labelClass:{type:[String,Object,Array],required:!1,default:void 0},labelTag:{type:String,required:!1,default:"h2"},prepareEditModel:{type:Function,required:!1,default:void 0},rowClass:{type:[String,Object,Array,Function],required:!1,default:void 0},rowView:{type:String,required:!1,default:"table",validator:e=>["list","table"].includes(e)},rows:{type:Array,required:!1,default:()=>[]},rowsFooter:{type:Array,required:!1,default:()=>[]},saveRow:{type:Function,required:!1,default:()=>{}},texts:{type:Object,required:!1,default:()=>({})},widths:{type:Object,required:!1,default:()=>({})}},emits:["deleteRow","moveRow","updateRows"],setup(e,t){const o=n(e,"actionsDisabledCallback"),s=n(e,"actionsTitleCallback"),{allColumnsLength:i,columnsVisible:r,hasActionsColumn:a}=Tt(e),{getRowKey:l,hasRows:c,hasRowsFooter:d}=Ft(e),{textsLocal:h}=It(e),{widthsLocal:m}=xt(e),{iconsLocal:w}=Ot(e),{actionsClassesLocal:E}=yt(e),{columnsStylesGrow:A,destroyColumnsGrowObserver:D,initColumnsGrowObserver:q}=gt(e,{columnsVisible:r,hasActionsColumn:a,widthsLocal:m});Ue(()=>{q()}),He(()=>{D()});const{activeEditRowKey:P,activeEditModel:S,activeEditFocusColumnId:O,canAddRow:L,hasActiveEditRow:B,hasRequiredEditableColumns:z,isAddRowActive:Q,onAddRow:y,onCancelEditRow:g,onEditRow:u}=Mt(e,{columnsVisible:r,getRowKey:l}),{canMoveRowDown:b,canMoveRowUp:v,dragOverPosition:R,dragOverRowIndex:p,draggedRowIndex:I,isDndDisabledForRow:F,moveRowDown:H,moveRowUp:ee,onDragend:te,onDragleave:le,onDragover:N,onDragstart:$,onDrop:he}=Lt(e,t,{isDndDisabled:B}),{onDeleteRow:be}=Dt(e,t),we=_(()=>{if(B.value)return!0;const Z=x(o.value,"add");return k(Z)?Z():!1}),ve=_(()=>{const Z=x(s.value,"add");return k(Z)?Z():h.value.actionAddRow});return{activeEditFocusColumnId:O,activeEditRowKey:P,activeEditModel:S,allColumnsLength:i,addTitle:ve,canAddRow:L,canMoveRowDown:b,canMoveRowUp:v,actionsClassesLocal:E,columnsStylesGrow:A,columnsVisible:r,draggedRowIndex:I,dragOverPosition:R,dragOverRowIndex:p,isDndDisabledForRow:F,getRowKey:l,hasActionsColumn:a,hasActiveEditRow:B,hasRequiredEditableColumns:z,hasRows:c,hasRowsFooter:d,iconsLocal:w,isAddDisabled:we,isAddRowActive:Q,moveRowDown:H,moveRowUp:ee,onAddRow:y,onCancelEditRow:g,onDeleteRow:be,onDragend:te,onDragleave:le,onDragover:N,onDragstart:$,onDrop:he,onEditRow:u,textsLocal:h,widthsLocal:m}},render(){return f("div",{class:"a_table_form"},[this.label&&f(K,{class:["a_table_form__label",this.labelClass],html:this.label,tag:this.labelTag}),this.hasRequiredEditableColumns&&f(ge),f("div",{class:"a_table_form__wrapper"},[f("table",{id:this.id,class:["a_table_form__table",{a_table_form_drag_active:this.draggedRowIndex!==void 0,a_table_form__table_list:this.rowView==="list"}]},[this.rowView==="table"&&f("thead",{class:"a_table_form__head"},[f(ae,{id:this.id,actionsClasses:this.actionsClasses,actionsDisabledCallback:this.actionsDisabledCallback,actionsHideCallback:this.actionsHideCallback,actionsTitleCallback:this.actionsTitleCallback,allColumnsLength:this.allColumnsLength,canMoveRowDown:this.canMoveRowDown,canMoveRowUp:this.canMoveRowUp,cellTag:"th",changeModel:this.changeModel,columns:this.columnsVisible,columnsStylesGrow:this.columnsStylesGrow,draggedRowIndex:this.draggedRowIndex,extra:this.extra,hasActionsColumn:this.hasActionsColumn,hasActiveEditRow:!1,isActionsSticky:this.isActionsSticky,isActiveEditMode:!1,isDeletable:this.isDeletable,isDeletableConfirm:this.isDeletableConfirm,isDndDisabled:this.hasActiveEditRow,isDragAndDrop:this.isDragAndDrop,isEditable:this.isEditable,isEditOnRowClick:!1,isHeader:!0,moveRowDown:this.moveRowDown,moveRowUp:this.moveRowUp,onCancelEditRow:this.onCancelEditRow,onDeleteRow:this.onDeleteRow,onDragend:this.onDragend,onDragstart:this.onDragstart,onEditRow:this.onEditRow,row:{},rowIndex:0,rowView:this.rowView,rows:this.rows,saveRow:this.saveRow,texts:this.textsLocal,trClass:"a_table_form__row a_table_form__row_head",widths:this.widthsLocal},this.$slots)]),f("tbody",{class:"a_table_form__body"},this.hasRows||this.isAddRowActive?[...this.rows.map((e,t)=>{const o=this.getRowKey({row:e,rowIndex:t});return f(ae,{key:o,id:this.id,actionsClasses:this.actionsClassesLocal,actionsDisabledCallback:this.actionsDisabledCallback,actionsHideCallback:this.actionsHideCallback,actionsTitleCallback:this.actionsTitleCallback,allColumnsLength:this.allColumnsLength,canMoveRowDown:this.canMoveRowDown,canMoveRowUp:this.canMoveRowUp,changeModel:this.changeModel,columns:this.columnsVisible,columnsStylesGrow:this.columnsStylesGrow,draggedRowIndex:this.draggedRowIndex,editModel:this.activeEditRowKey===o?this.activeEditModel:void 0,editFocusColumnId:this.activeEditRowKey===o?this.activeEditFocusColumnId:void 0,errorIcon:this.errorIcon,extra:this.extra,hasActionsColumn:this.hasActionsColumn,hasActiveEditRow:this.hasActiveEditRow,isActionsSticky:this.isActionsSticky,isActiveEditMode:this.activeEditRowKey===o,isCreateMode:!1,isDeletable:this.isDeletable,isDeletableConfirm:this.isDeletableConfirm,isDndDisabled:this.isDndDisabledForRow(t),isDragAndDrop:this.isDragAndDrop,isEditable:this.isEditable,isEditOnRowClick:this.isEditOnRowClick,moveRowDown:this.moveRowDown,moveRowUp:this.moveRowUp,onCancelEditRow:this.onCancelEditRow,onDeleteRow:this.onDeleteRow,onDragend:this.onDragend,onDragleave:this.onDragleave,onDragover:this.onDragover,onDragstart:this.onDragstart,onDrop:this.onDrop,onEditRow:this.onEditRow,row:e,rowClass:this.rowClass,rowIndex:t,rowView:this.rowView,rows:this.rows,saveRow:this.saveRow,texts:this.textsLocal,widths:this.widthsLocal,trClass:["a_table_form__row",{a_table_form__row_drag_after:this.dragOverRowIndex===t&&this.dragOverPosition==="after",a_table_form__row_drag_before:this.dragOverRowIndex===t&&this.dragOverPosition==="before",a_table_form__row_drag_over:this.dragOverRowIndex===t,a_table_form__row_dragging:this.draggedRowIndex===t}]},this.$slots)}),this.isAddRowActive&&f(ae,{id:this.id,actionsClasses:this.actionsClassesLocal,actionsDisabledCallback:this.actionsDisabledCallback,actionsHideCallback:this.actionsHideCallback,actionsTitleCallback:this.actionsTitleCallback,allColumnsLength:this.allColumnsLength,canMoveRowDown:this.canMoveRowDown,canMoveRowUp:this.canMoveRowUp,changeModel:this.changeModel,columns:this.columnsVisible,columnsStylesGrow:this.columnsStylesGrow,draggedRowIndex:this.draggedRowIndex,editModel:this.activeEditModel,errorIcon:this.errorIcon,extra:this.extra,hasActionsColumn:this.hasActionsColumn,hasActiveEditRow:this.hasActiveEditRow,isActionsSticky:this.isActionsSticky,isActiveEditMode:!0,isCreateMode:!0,isDeletable:!1,isDeletableConfirm:!1,isDndDisabled:!0,isDragAndDrop:this.isDragAndDrop,isEditable:this.isEditable,isEditOnRowClick:!1,key:"body_create",moveRowDown:this.moveRowDown,moveRowUp:this.moveRowUp,onCancelEditRow:this.onCancelEditRow,onDeleteRow:this.onDeleteRow,onDragend:this.onDragend,onDragleave:this.onDragleave,onDragover:this.onDragover,onDragstart:this.onDragstart,onDrop:this.onDrop,onEditRow:this.onEditRow,row:{},rowClass:this.rowClass,rowIndex:this.rows.length,rowView:this.rowView,rows:this.rows,saveRow:this.addRow,texts:this.textsLocal,trClass:"a_table_form__row a_table_form__row_create",widths:this.widthsLocal},this.$slots)]:[f("tr",{class:"a_table_form__row a_table_form__row_empty"},[f("td",{class:"a_table_form__cell a_table_form__empty",colspan:this.allColumnsLength},[f(K,{tag:"span",text:this.textsLocal.emptyText})])])]),this.hasRowsFooter&&f("tfoot",{class:"a_table_form__foot"},this.rowsFooter.map((e,t)=>f(ae,{id:this.id,actionsClasses:this.actionsClassesLocal,actionsDisabledCallback:this.actionsDisabledCallback,actionsHideCallback:this.actionsHideCallback,actionsTitleCallback:this.actionsTitleCallback,allColumnsLength:this.allColumnsLength,canMoveRowDown:this.canMoveRowDown,canMoveRowUp:this.canMoveRowUp,changeModel:this.changeModel,columns:this.columnsVisible,columnsStylesGrow:this.columnsStylesGrow,draggedRowIndex:this.draggedRowIndex,extra:this.extra,hasActionsColumn:this.hasActionsColumn,hasActiveEditRow:this.hasActiveEditRow,isActionsSticky:this.isActionsSticky,isActiveEditMode:!1,isDeletable:this.isDeletable,isDeletableConfirm:this.isDeletableConfirm,isDndDisabled:this.hasActiveEditRow,isDragAndDrop:this.isDragAndDrop,isEditable:this.isEditable,isEditOnRowClick:!1,isFooter:!0,key:this.getRowKey({isFooter:!0,row:e,rowIndex:t}),moveRowDown:this.moveRowDown,moveRowUp:this.moveRowUp,onCancelEditRow:this.onCancelEditRow,onDeleteRow:this.onDeleteRow,onDragend:this.onDragend,onDragstart:this.onDragstart,onEditRow:this.onEditRow,row:e,rowClass:this.rowClass,rowIndex:t,rowView:this.rowView,rows:this.rowsFooter,saveRow:this.saveRow,texts:this.textsLocal,widths:this.widthsLocal,trClass:"a_table_form__row a_table_form__row_footer"},this.$slots)))])]),this.canAddRow&&f("div",{class:"a_mt_3 a_text_right"},[f(W,{class:this.actionsClassesLocal.addRow,disabled:this.isAddDisabled,extra:this.extra,iconLeft:this.iconsLocal.actionAddRow,text:this.textsLocal.actionAddRow,textScreenReader:this.addTitle,title:this.addTitle,onClick:this.onAddRow})])])}};function kt(){return{codeHtml:`<a-simple-table
  :columns="columns"
  :rows-footer="rowsFooter"
  :rows="rows"
  key-id="id"
  label="_A_TABLE_FORM_EXAMPLE_LABEL_"
/>
`}}function St(){return{codeJs:`import {
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
};`}}const Bt={name:"PageTableFormBasic",components:{AlohaExample:Y,ATableForm:X},setup(){const{codeHtml:e}=kt(),{codeJs:t}=St(),o=[{id:"position",label:"_A_TABLE_FORM_COLUMN_POSITION_",maxWidth:96,minWidth:96,width:96,formElement:{type:"number"}},{id:"name",label:"_A_TABLE_FORM_COLUMN_NAME_",maxWidth:"18rem",minWidth:"12rem",width:"16rem",formElement:{type:"text"}},{id:"team",formElement:{translateData:!0,data:[{label:"_A_TABLE_FORM_TEAM_NORTH_",value:"north"},{label:"_A_TABLE_FORM_TEAM_WEST_",value:"west"},{label:"_A_TABLE_FORM_TEAM_SOUTH_",value:"south"},{label:"_A_TABLE_FORM_TEAM_EAST_",value:"east"}],keyId:"value",keyLabel:"label",type:"select"},label:"_A_TABLE_FORM_COLUMN_TEAM_",minWidth:"12rem"},{id:"score",footerDefaultValue:"68",footerKeyLabel:"score",formElement:{type:"integer"},label:"_A_TABLE_FORM_COLUMN_SCORE_",maxWidth:120,minWidth:120,width:120}],s=T([{id:1,name:"Марта Иванова",position:1,score:18,team:"north"},{id:2,name:"Олег Сидоров",position:2,score:17,team:"west"},{id:3,name:"Анна Петрова",position:3,score:16,team:"south"},{id:4,name:"Игорь Ковалёв",position:4,score:17,team:"east"}]);return{codeHtml:e,codeJs:t,columns:o,rows:s,rowsFooter:[{name:"_A_TABLE_FORM_FOOTER_TOTAL_",score:68}]}}};function qt(e,t,o,s,i,r){const a=C("a-table-form"),l=C("aloha-example");return V(),G(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TABLE_FORM_EXAMPLE_HEADER_"},{default:J(()=>[M(a,{columns:e.columns,"rows-footer":e.rowsFooter,rows:e.rows,"key-id":"id",label:"_A_TABLE_FORM_EXAMPLE_LABEL_"},null,8,["columns","rows-footer","rows"])]),_:1},8,["code-html","code-js"])}const Nt=j(Bt,[["render",qt]]);function Pt(){return{codeHtml:`<a-table-form
  :actions-disabled-callback="actionsDisabledCallback"
  :columns="columns"
  :is-drag-and-drop="true"
  :rows-footer="rowsFooter"
  :rows="rows"
  key-id="id"
  label="_A_TABLE_FORM_EXAMPLE_LABEL_"
  @update-rows="updateRows"
/>
`}}function Ut(){return{codeJs:`import {
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
        dndDisabled: true,
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

    const actionsDisabledCallback = {
      dnd: ({ row }) => row.dndDisabled,
    };

    const updateRows = ({ rows: _rows, trigger }) => {
      rows.value = _rows;
      console.log("trigger", trigger);
    };

    return {
      actionsDisabledCallback,
      columns,
      rows,
      rowsFooter,
      updateRows,
    };
  },
};`}}const Ht={name:"PageTableFormDND",components:{AlohaExample:Y,ATableForm:X},setup(){const{codeHtml:e}=Pt(),{codeJs:t}=Ut(),o=[{id:"position",label:"_A_TABLE_FORM_COLUMN_POSITION_",maxWidth:96,minWidth:96,width:96,formElement:{type:"text"}},{id:"name",formElement:{type:"text"},label:"_A_TABLE_FORM_COLUMN_NAME_",maxWidth:"18rem",minWidth:"12rem",width:"16rem"},{id:"team",formElement:{translateData:!0,data:[{label:"_A_TABLE_FORM_TEAM_NORTH_",value:"north"},{label:"_A_TABLE_FORM_TEAM_WEST_",value:"west"},{label:"_A_TABLE_FORM_TEAM_SOUTH_",value:"south"},{label:"_A_TABLE_FORM_TEAM_EAST_",value:"east"}],keyId:"value",keyLabel:"label",type:"select"},label:"_A_TABLE_FORM_COLUMN_TEAM_",minWidth:"12rem"},{id:"score",footerDefaultValue:"68",footerKeyLabel:"score",formElement:{type:"integer"},label:"_A_TABLE_FORM_COLUMN_SCORE_",maxWidth:120,minWidth:120,width:120}],s=T([{id:1,name:"Марта Иванова",position:1,score:18,team:"north"},{dndDisabled:!0,id:2,name:"Олег Сидоров",position:2,score:17,team:"west"},{id:3,name:"Анна Петрова",position:3,score:16,team:"south"},{id:4,name:"Игорь Ковалёв",position:4,score:17,team:"east"}]);return{codeHtml:e,codeJs:t,columns:o,actionsDisabledCallback:{dnd:({row:l})=>l.dndDisabled},rows:s,rowsFooter:[{name:"_A_TABLE_FORM_FOOTER_TOTAL_",score:68}],updateRows:({rows:l,trigger:c})=>{s.value=l,console.log("trigger",c)}}}};function $t(e,t,o,s,i,r){const a=C("a-table-form"),l=C("aloha-example");return V(),G(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TABLE_FORM_DND_HEADER_",description:"_A_TABLE_FORM_DND_DESCRIPTION_",props:["actions-disabled-callback","is-drag-and-drop"]},{default:J(()=>[M(a,{"actions-disabled-callback":e.actionsDisabledCallback,columns:e.columns,"is-drag-and-drop":!0,"rows-footer":e.rowsFooter,rows:e.rows,"key-id":"id",label:"_A_TABLE_FORM_EXAMPLE_LABEL_",onUpdateRows:e.updateRows},null,8,["actions-disabled-callback","columns","rows-footer","rows","onUpdateRows"])]),_:1},8,["code-html","code-js"])}const Wt=j(Ht,[["render",$t]]);function jt(){return{codeHtml:`<a-checkbox>
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
  :is-addable="modelCheckbox.includes('is-addable')"
  :is-deletable-confirm="modelCheckbox.includes('is-deletable-confirm')"
  :is-deletable="modelCheckbox.includes('is-deletable')"
  :is-edit-on-row-click="modelCheckbox.includes('is-edit-on-row-click')"
  :is-editable="modelCheckbox.includes('is-editable')"
  :rows-footer="rowsFooter"
  :rows="rows"
  :save-row="saveRow"
  :texts="texts"
  key-id="id"
  label="_A_TABLE_FORM_EXAMPLE_LABEL_"
  @delete-row="deleteRow"
/>
`}}function Vt(){return{codeJs:`import {
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
    const dataCheckbox = [
      {
        label: "is-deletable-confirm",
        value: "is-deletable-confirm",
      },
      {
        label: "is-deletable",
        value: "is-deletable",
      },
      {
        label: "is-editable",
        value: "is-editable",
      },
      {
        label: "is-edit-on-row-click",
        value: "is-edit-on-row-click",
      },
      {
        label: "is-addable",
        value: "is-addable",
      },
    ];
    const modelCheckbox = ref(["is-deletable-confirm", "is-deletable", "is-editable", "is-edit-on-row-click", "is-addable"]);

    const texts = {
      actionEditCancel: "abbrechen",
      actionEditSave: "speichern",
      editInfoText: "Nur diese Zeile ist gerade im Bearbeitungsmodus.",
    };

    const columns = [
      {
        id: "position",
        label: "_A_TABLE_FORM_COLUMN_POSITION_",
        maxWidth: 96,
        minWidth: 96,
        width: 96,
        formElement: {
          controlsType: "none",
          type: "integer",
        },
      },
      {
        id: "name",
        formElement: {
          type: "text",
          required: true,
        },
        keyLabel: "name",
        label: "_A_TABLE_FORM_COLUMN_NAME_",
        maxWidth: "18rem",
        minWidth: "12rem",
        width: "16rem",
      },
      {
        id: "team",
        formElement: {
          data: [
            {
              label: "_A_TABLE_FORM_TEAM_NORTH_",
              value: "north",
            },
            {
              label: "_A_TABLE_FORM_TEAM_WEST_",
              value: "west",
            },
            {
              label: "_A_TABLE_FORM_TEAM_SOUTH_",
              value: "south",
            },
            {
              label: "_A_TABLE_FORM_TEAM_EAST_",
              value: "east",
            },
          ],
          keyId: "value",
          keyLabel: "label",
          translateData: true,
          type: "select",
        },
        label: "_A_TABLE_FORM_COLUMN_TEAM_",
        minWidth: "12rem",
      },
      {
        id: "score",
        footerDefaultValue: "68",
        footerKeyLabel: "score",
        formElement: {
          controlsType: "none",
          min: 0,
          type: "integer",
        },
        label: "_A_TABLE_FORM_COLUMN_SCORE_",
        maxWidth: 120,
        minWidth: 120,
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
      {
        id: 2,
        name: "Oleg Sidorov",
        position: 2,
        score: 17,
        team: "west",
      },
      {
        id: 3,
        name: "Anna Petrova",
        position: 3,
        score: 16,
        team: "south",
      },
      {
        id: 4,
        name: "Igor Kovalev",
        position: 4,
        score: 17,
        team: "east",
      },
    ]);

    const rowsFooter = [
      {
        name: "_A_TABLE_FORM_FOOTER_TOTAL_",
        score: 68,
      },
    ];

    const saveRow = async({ model, rowIndex }) => {
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

      rows.value.splice(rowIndex, 1, model);
    };

    const deleteRow = ({ row, rowIndex }) => {
      rows.value.splice(rowIndex, 1);
      console.log("row", row);
      console.log("rowIndex", rowIndex);
    };

    const addRow = ({ model }) => {
      console.log("model ", model);
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
      rows.value.push({
        id: rows.value.length + 1,
        ...model,
      });
    };

    return {
      addRow,
      columns,
      dataCheckbox,
      deleteRow,
      modelCheckbox,
      rows,
      rowsFooter,
      saveRow,
      texts,
    };
  },
};`}}const Gt={name:"PageTableFormEdit",components:{ACheckbox:ce,AlohaExample:Y,ATableForm:X},setup(){const{codeHtml:e}=jt(),{codeJs:t}=Vt(),o=[{label:"is-deletable-confirm",value:"is-deletable-confirm"},{label:"is-deletable",value:"is-deletable"},{label:"is-editable",value:"is-editable"},{label:"is-edit-on-row-click",value:"is-edit-on-row-click"},{label:"is-addable",value:"is-addable"}],s=T(["is-deletable-confirm","is-deletable","is-editable","is-edit-on-row-click","is-addable"]),i={actionEditCancel:"abbrechen",actionEditSave:"speichern",editInfoText:"Nur diese Zeile ist gerade im Bearbeitungsmodus."},r=[{id:"position",label:"_A_TABLE_FORM_COLUMN_POSITION_",maxWidth:96,minWidth:96,width:96,formElement:{controlsType:"none",type:"integer"}},{id:"name",formElement:{type:"text",required:!0},keyLabel:"name",label:"_A_TABLE_FORM_COLUMN_NAME_",maxWidth:"18rem",minWidth:"12rem",width:"16rem"},{id:"team",formElement:{data:[{label:"_A_TABLE_FORM_TEAM_NORTH_",value:"north"},{label:"_A_TABLE_FORM_TEAM_WEST_",value:"west"},{label:"_A_TABLE_FORM_TEAM_SOUTH_",value:"south"},{label:"_A_TABLE_FORM_TEAM_EAST_",value:"east"}],keyId:"value",keyLabel:"label",translateData:!0,type:"select"},label:"_A_TABLE_FORM_COLUMN_TEAM_",minWidth:"12rem"},{id:"score",footerDefaultValue:"68",footerKeyLabel:"score",formElement:{controlsType:"none",min:0,type:"integer"},label:"_A_TABLE_FORM_COLUMN_SCORE_",maxWidth:120,minWidth:120,width:120}],a=T([{id:1,name:"Marta Ivanova",position:1,score:18,team:"north"},{id:2,name:"Oleg Sidorov",position:2,score:17,team:"west"},{id:3,name:"Anna Petrova",position:3,score:16,team:"south"},{id:4,name:"Igor Kovalev",position:4,score:17,team:"east"}]);return{addRow:({model:m})=>{var E;console.log("model ",m);const w={};if((E=m.name)!=null&&E.trim()||(w.name=["Name ist erforderlich."]),m.team||(w.team=["Team ist erforderlich."]),m.score<18&&(w.score=["Score must be at least 18."]),Object.keys(w).length)return{errors:w};a.value.push({id:a.value.length+1,...m})},codeHtml:e,codeJs:t,columns:r,dataCheckbox:o,deleteRow:({row:m,rowIndex:w})=>{a.value.splice(w,1),console.log("row",m),console.log("rowIndex",w)},modelCheckbox:s,rows:a,rowsFooter:[{name:"_A_TABLE_FORM_FOOTER_TOTAL_",score:68}],saveRow:async({model:m,rowIndex:w})=>{var A;await new Promise(D=>{setTimeout(D,300)});const E={};if((A=m.name)!=null&&A.trim()||(E.name=["Name ist erforderlich."]),m.team||(E.team=["Team ist erforderlich."]),m.score<18&&(E.score=["Score must be at least 18."]),Object.keys(E).length)return{errors:E};a.value.splice(w,1,m)},texts:i}}};function Jt(e,t,o,s,i,r){const a=C("a-checkbox"),l=C("a-table-form"),c=C("aloha-example");return V(),G(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TABLE_FORM_EDIT_HEADER_",description:"_A_TABLE_FORM_EDIT_DESCRIPTION_",props:["is-addable","is-deletable","is-deletable-confirm","is-editable","save-row","texts"]},{default:J(()=>[M(a,{class:"a_mb_4",modelValue:e.modelCheckbox,"onUpdate:modelValue":t[0]||(t[0]=d=>e.modelCheckbox=d),data:e.dataCheckbox,"translate-data":!0,"key-id":"value","key-label":"label"},null,8,["modelValue","data"]),M(l,{"add-row":e.addRow,columns:e.columns,"is-addable":e.modelCheckbox.includes("is-addable"),"is-deletable-confirm":e.modelCheckbox.includes("is-deletable-confirm"),"is-deletable":e.modelCheckbox.includes("is-deletable"),"is-edit-on-row-click":e.modelCheckbox.includes("is-edit-on-row-click"),"is-editable":e.modelCheckbox.includes("is-editable"),"rows-footer":e.rowsFooter,rows:e.rows,"save-row":e.saveRow,texts:e.texts,"key-id":"id",label:"_A_TABLE_FORM_EXAMPLE_LABEL_",onDeleteRow:e.deleteRow},null,8,["add-row","columns","is-addable","is-deletable-confirm","is-deletable","is-edit-on-row-click","is-editable","rows-footer","rows","save-row","texts","onDeleteRow"])]),_:1},8,["code-html","code-js"])}const Kt=j(Gt,[["render",Jt]]);function Yt(){return{codeHtml:`<a-checkbox
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
`}}function Xt(){return{codeJs:`import {
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
};`}}const zt={name:"PageTableFormGrow",components:{ACheckbox:ce,AlohaExample:Y,ATableForm:X},setup(){const{codeHtml:e}=Yt(),{codeJs:t}=Xt(),o=[{label:"is-deletable",value:"is-deletable"},{label:"is-editable",value:"is-editable"},{label:"is-drag-and-drop",value:"is-drag-and-drop"}],s=T(["is-deletable","is-editable"]),i=[{id:"position",label:"_A_TABLE_FORM_COLUMN_POSITION_",minWidth:96,width:96,grow:1,formElement:{controlsType:"none",type:"integer"}},{id:"name",formElement:{type:"text"},label:"_A_TABLE_FORM_COLUMN_NAME_",minWidth:"12rem",width:"16rem",grow:2},{id:"team",formElement:{data:[{label:"_A_TABLE_FORM_TEAM_NORTH_",value:"north"},{label:"_A_TABLE_FORM_TEAM_WEST_",value:"west"},{label:"_A_TABLE_FORM_TEAM_SOUTH_",value:"south"},{label:"_A_TABLE_FORM_TEAM_EAST_",value:"east"}],keyId:"value",keyLabel:"label",translateData:!0,type:"select"},label:"_A_TABLE_FORM_COLUMN_TEAM_",minWidth:"12rem",width:"12rem",grow:1},{id:"score",footerDefaultValue:"68",footerKeyLabel:"score",formElement:{controlsType:"none",min:0,type:"integer"},label:"_A_TABLE_FORM_COLUMN_SCORE_",minWidth:120,width:120,grow:1}],r=[{id:"position",label:"_A_TABLE_FORM_COLUMN_POSITION_",minWidth:96,width:96,grow:1,formElement:{controlsType:"none",type:"integer"}},{id:"name",formElement:{type:"text"},label:"_A_TABLE_FORM_COLUMN_NAME_",minWidth:"12rem",width:"16rem",grow:3}],a=T([{id:1,name:"Marta Ivanova",position:1,score:18,team:"north"},{id:2,name:"Oleg Sidorov",position:2,score:17,team:"west"},{id:3,name:"Anna Petrova",position:3,score:16,team:"south"},{id:4,name:"Igor Kovalev",position:4,score:17,team:"east"}]);return{codeHtml:e,codeJs:t,columns1:i,columns2:r,dataCheckbox:o,deleteRow:({rowIndex:m})=>{a.value.splice(m,1)},modelCheckbox:s,rows:a,rowsFooter:[{name:"_A_TABLE_FORM_FOOTER_TOTAL_",score:68}],saveRow:({model:m,rowIndex:w})=>{a.value.splice(w,1,m)},texts:{editInfoText:"Only one row can be edited at a time."}}}},Qt={class:"a_mb_4"};function Zt(e,t,o,s,i,r){const a=C("a-checkbox"),l=C("a-table-form"),c=C("aloha-example");return V(),G(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TABLE_FORM_GROW_HEADER_",description:"_A_TABLE_FORM_GROW_DESCRIPTION_",props:["is-columns-grow","is-deletable","is-drag-and-drop","is-editable"]},{default:J(()=>[M(a,{class:"a_mb_4",modelValue:e.modelCheckbox,"onUpdate:modelValue":t[0]||(t[0]=d=>e.modelCheckbox=d),data:e.dataCheckbox,"key-id":"value","key-label":"label"},null,8,["modelValue","data"]),$e("div",Qt,[M(l,{columns:e.columns1,"is-columns-grow":!0,"is-deletable":e.modelCheckbox.includes("is-deletable"),"is-drag-and-drop":e.modelCheckbox.includes("is-drag-and-drop"),"is-editable":e.modelCheckbox.includes("is-editable"),"rows-footer":e.rowsFooter,rows:e.rows,"save-row":e.saveRow,texts:e.texts,"key-id":"id",label:"_A_TABLE_FORM_EXAMPLE_LABEL_",onDeleteRow:e.deleteRow},null,8,["columns","is-deletable","is-drag-and-drop","is-editable","rows-footer","rows","save-row","texts","onDeleteRow"])]),M(l,{columns:e.columns2,"is-columns-grow":!0,"is-deletable":e.modelCheckbox.includes("is-deletable"),"is-drag-and-drop":e.modelCheckbox.includes("is-drag-and-drop"),"is-editable":e.modelCheckbox.includes("is-editable"),"rows-footer":e.rowsFooter,rows:e.rows,"save-row":e.saveRow,texts:e.texts,"key-id":"id",label:"_A_TABLE_FORM_EXAMPLE_LABEL_",onDeleteRow:e.deleteRow},null,8,["columns","is-deletable","is-drag-and-drop","is-editable","rows-footer","rows","save-row","texts","onDeleteRow"])]),_:1},8,["code-html","code-js"])}const eo=j(zt,[["render",Zt]]);function to(){return{codeHtml:`<a-table-form
  :add-row="addRow"
  :columns="columns"
  :is-addable="true"
  :is-deletable-confirm="true"
  :is-drag-and-drop="true"
  :is-editable="true"
  :rows="rows"
  :save-row="saveRow"
  key-id="id"
  label="_A_TABLE_FORM_LIST_LABEL_"
  row-view="list"
  @delete-row="deleteRow"
  @update-rows="updateRows"
/>
`}}function oo(){return{codeJs:`import {
  ref,
} from "vue";

import {
  ATableForm,
} from "aloha-vue";

export default {
  components: {
    ATableForm,
  },
  setup() {
    const columns = [
      {
        id: "fundingTypes",
        label: "_A_TABLE_FORM_LIST_FUNDING_TYPES_",
        formElement: {
          classColumn: "a_column a_column_12",
          data: [
            { label: "_A_TABLE_FORM_LIST_FUNDING_TYPE_FEES_", value: "fees" },
            { label: "_A_TABLE_FORM_LIST_FUNDING_TYPE_TRAVEL_", value: "travel" },
            { label: "_A_TABLE_FORM_LIST_FUNDING_TYPE_INVESTMENT_", value: "investment" },
          ],
          keyId: "value",
          keyLabel: "label",
          required: true,
          translateData: true,
          type: "multiselect",
        },
      },
      {
        id: "percentDeviation",
        label: "_A_TABLE_FORM_LIST_PERCENT_DEVIATION_",
        formElement: {
          classColumn: "a_column a_column_4",
          classColumns: "a_columns a_columns_count_12 a_columns_gap_2",
          type: "fieldset",
          children: [
            {
              classColumn: "a_column a_column_6",
              controlsType: "none",
              id: "percentNegative",
              label: "_A_TABLE_FORM_LIST_NEGATIVE_",
              type: "integer",
            },
            {
              classColumn: "a_column a_column_6",
              controlsType: "none",
              id: "percentPositive",
              label: "_A_TABLE_FORM_LIST_POSITIVE_",
              type: "integer",
            },
          ],
        },
      },
      {
        id: "validationMessage",
        label: "_A_TABLE_FORM_LIST_VALIDATION_MESSAGE_",
        formElement: {
          classColumn: "a_column a_column_12",
          required: true,
          type: "textarea",
        },
      },
    ];

    const rows = ref([
      {
        fundingTypes: ["fees", "travel"],
        id: 1,
        percentNegative: 20,
        percentPositive: 20,
        validationMessage: "The configured deviation threshold was exceeded.",
      },
    ]);

    const validate = model => {
      const errors = {};
      if (!model.fundingTypes?.length) {
        errors.fundingTypes = ["_A_TABLE_FORM_LIST_ERROR_REQUIRED_"];
      }
      if (!model.validationMessage?.trim()) {
        errors.validationMessage = ["_A_TABLE_FORM_LIST_ERROR_REQUIRED_"];
      }
      return errors;
    };

    const saveRow = ({ model, rowIndex }) => {
      const errors = validate(model);
      if (Object.keys(errors).length) {
        return { errors };
      }
      rows.value.splice(rowIndex, 1, model);
    };

    const addRow = ({ model }) => {
      const errors = validate(model);
      if (Object.keys(errors).length) {
        return { errors };
      }
      rows.value.push({
        ...model,
        id: Math.max(0, ...rows.value.map(row => row.id)) + 1,
      });
    };

    const deleteRow = ({ rowIndex }) => {
      rows.value.splice(rowIndex, 1);
    };

    const updateRows = ({ rows: rowsUpdated }) => {
      rows.value = rowsUpdated;
    };

    return {
      addRow,
      columns,
      deleteRow,
      rows,
      saveRow,
      updateRows,
    };
  },
};`}}const re=({id:e,label:t,negativeId:o,positiveId:s,type:i="integer"})=>({id:e,label:t,formElement:{children:[{classColumn:"a_column a_column_6",controlsType:"none",id:o,label:"_A_TABLE_FORM_LIST_NEGATIVE_",type:i},{classColumn:"a_column a_column_6",controlsType:"none",id:s,label:"_A_TABLE_FORM_LIST_POSITIVE_",type:i}],classColumn:"a_column a_column_4",classColumns:"a_columns a_columns_count_12 a_columns_gap_2",type:"fieldset"}}),ao={name:"PageTableFormList",components:{AlohaExample:Y,ATableForm:X},setup(){const{codeHtml:e}=to(),{codeJs:t}=oo(),o=[{id:"fundingTypes",label:"_A_TABLE_FORM_LIST_FUNDING_TYPES_",formElement:{classColumn:"a_column a_column_12",data:[{label:"_A_TABLE_FORM_LIST_FUNDING_TYPE_FEES_",value:"fees"},{label:"_A_TABLE_FORM_LIST_FUNDING_TYPE_TRAVEL_",value:"travel"},{label:"_A_TABLE_FORM_LIST_FUNDING_TYPE_INVESTMENT_",value:"investment"}],keyId:"value",keyLabel:"label",required:!0,translateData:!0,type:"multiselect"}},re({id:"percentDeviation",label:"_A_TABLE_FORM_LIST_PERCENT_DEVIATION_",negativeId:"percentNegative",positiveId:"percentPositive"}),re({id:"amountDeviation",label:"_A_TABLE_FORM_LIST_AMOUNT_DEVIATION_",negativeId:"amountNegative",positiveId:"amountPositive",type:"currency"}),re({id:"shareDeviation",label:"_A_TABLE_FORM_LIST_SHARE_DEVIATION_",negativeId:"shareNegative",positiveId:"sharePositive"}),{id:"exceedAsError",label:"_A_TABLE_FORM_LIST_EXCEED_AS_ERROR_",formElement:{classColumn:"a_column a_column_12",type:"oneCheckbox"}},{id:"validationMessage",label:"_A_TABLE_FORM_LIST_VALIDATION_MESSAGE_",formElement:{classColumn:"a_column a_column_12",required:!0,rows:2,type:"textarea"}}],s=T([{amountNegative:5300,amountPositive:5300,exceedAsError:!0,fundingTypes:["fees","travel","investment"],id:1,percentNegative:20,percentPositive:20,shareNegative:10,sharePositive:5,validationMessage:"The configured deviation threshold was exceeded."},{amountNegative:2500,amountPositive:3e3,exceedAsError:!1,fundingTypes:["travel"],id:2,percentNegative:10,percentPositive:15,shareNegative:4,sharePositive:6,validationMessage:"Please verify the entered values."}]),i=d=>{var m,w;const h={};return(m=d.fundingTypes)!=null&&m.length||(h.fundingTypes=["_A_TABLE_FORM_LIST_ERROR_REQUIRED_"]),(w=d.validationMessage)!=null&&w.trim()||(h.validationMessage=["_A_TABLE_FORM_LIST_ERROR_REQUIRED_"]),h};return{addRow:({model:d})=>{const h=i(d);if(Object.keys(h).length)return{errors:h};s.value.push({...d,id:Math.max(0,...s.value.map(m=>m.id))+1})},codeHtml:e,codeJs:t,columns:o,deleteRow:({rowIndex:d})=>{s.value.splice(d,1)},rows:s,saveRow:({model:d,rowIndex:h})=>{const m=i(d);if(Object.keys(m).length)return{errors:m};s.value.splice(h,1,d)},updateRows:({rows:d})=>{s.value=d}}}};function so(e,t,o,s,i,r){const a=C("a-table-form"),l=C("aloha-example");return V(),G(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TABLE_FORM_LIST_HEADER_",description:"_A_TABLE_FORM_LIST_DESCRIPTION_",props:["row-view"]},{default:J(()=>[M(a,{"add-row":e.addRow,columns:e.columns,"is-addable":!0,"is-deletable-confirm":!0,"is-drag-and-drop":!0,"is-editable":!0,rows:e.rows,"save-row":e.saveRow,"key-id":"id",label:"_A_TABLE_FORM_LIST_LABEL_","row-view":"list",onDeleteRow:e.deleteRow,onUpdateRows:e.updateRows},null,8,["add-row","columns","rows","save-row","onDeleteRow","onUpdateRows"])]),_:1},8,["code-html","code-js"])}const lo=j(ao,[["render",so]]);function io(){return{codeHtml:`<a-one-checkbox
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
`}}function ro(){return{codeJs:`import {
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
};`}}const no={name:"PageTableFormSticky",components:{AlohaExample:Y,AOneCheckbox:De,ATableForm:X},setup(){const{codeHtml:e}=io(),{codeJs:t}=ro(),o=T(!0),s=Array.from({length:20},(r,a)=>{const l=a+1;return{id:`c${l}`,label:`${l}`,maxWidth:120,minWidth:120,width:120,formElement:{controlsType:"none",type:"integer"}}}),i=T(Array.from({length:6},(r,a)=>{const l={id:a+1};return s.forEach((c,d)=>{l[c.id]=(a+1)*100+d+1}),l}));return{codeHtml:e,codeJs:t,columns:s,isActionsSticky:o,rows:i}}};function co(e,t,o,s,i,r){const a=C("a-one-checkbox"),l=C("a-table-form"),c=C("aloha-example");return V(),G(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TABLE_FORM_STICKY_HEADER_",description:"_A_TABLE_FORM_STICKY_DESCRIPTION_",props:["is-actions-sticky","is-deletable-confirm","is-editable"]},{default:J(()=>[M(a,{class:"a_mb_4",modelValue:e.isActionsSticky,"onUpdate:modelValue":t[0]||(t[0]=d=>e.isActionsSticky=d),label:"isActionsSticky"},null,8,["modelValue"]),M(l,{columns:e.columns,"is-actions-sticky":e.isActionsSticky,"is-deletable-confirm":!0,"is-editable":!0,rows:e.rows,"key-id":"id",label:"20 columns"},null,8,["columns","is-actions-sticky","rows"])]),_:1},8,["code-html","code-js"])}const uo=j(no,[["render",co]]);function _o(){return{pageTitle:_(()=>Le({placeholder:"_A_TABLE_FORM_PAGE_TITLE_"}))}}const mo={name:"PageTableForm",components:{AlohaPage:Ee,PageTableFormBasic:Nt,PageTableFormDND:Wt,PageTableFormEdit:Kt,PageTableFormGrow:eo,PageTableFormList:lo,PageTableFormSticky:uo},setup(){const{pageTitle:e}=_o();return{pageTitle:e}}};function fo(e,t,o,s,i,r){const a=C("page-table-form-basic"),l=C("page-table-form-d-n-d"),c=C("page-table-form-edit"),d=C("page-table-form-list"),h=C("page-table-form-sticky"),m=C("page-table-form-grow"),w=C("aloha-page");return V(),G(w,{"page-title":e.pageTitle},{body:J(()=>[M(a),M(l),M(c),M(d),M(h),M(m)]),_:1},8,["page-title"])}const Oo=j(mo,[["render",fo]]);export{Oo as default};
