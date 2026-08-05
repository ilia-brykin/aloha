import{A as Q,a as Ae}from"./chunk.AlohaExample.BVqKVAdl.js";import{d as Re,s as le,A as z,c as V,b as pe,e as ye,f as ae,h as Te,i as ge,j as Ce,k as De,_ as G,l as ue,m as Le,g as Me}from"./bundle.index.B4X5EHiH.js";import{t as n,d as _,h as f,M as de,aX as Oe,l as Fe,L as Ie,O as ke,C as xe,aY as Se,aZ as Be,g as qe,r as y,j as Ne,P as Pe,E as Ue,z as He,o as $e,Y as J,W as K,aU as Y,f as g,$ as F,_ as We}from"./chunk.vendor.BEEJbev-.js";import{i as je,j as I,r as k,a as ce,l as U,M as Ve,T as Ge,v as Je,h as Ke,W as Ye,d as Xe,b as ze,u as Qe}from"./chunk.vendor-lodash.CwOx-Q_g.js";import{A as Ze}from"./chunk.AFormElement.S3qwIC8i.js";import"./chunk.APageTabTitle.CZRsbeMb.js";import"./chunk.AlohaHighlightjs.De6fh8wy.js";import"./chunk.translations-ar.C-5fhGmj.js";import"./chunk.translations-de.DCUTmhwe.js";import"./chunk.translations-en.BwLyv-AK.js";import"./chunk.translations-es.CHkqKKCX.js";import"./chunk.translations-fr.CiNnfS8h.js";import"./chunk.translations-hr.BtDa3-Lh.js";import"./chunk.translations-it.BSfWCMA4.js";import"./chunk.translations-ru.CAQSfiHN.js";function et(e){const t=n(e,"column"),a=n(e,"isEditable"),s=n(e,"isEditMode");return{disabledLocal:_(()=>{var r,o;return!!((o=(r=t.value)==null?void 0:r.formElement)!=null&&o.disabled)||a.value&&!s.value})}}function tt(e){const t=n(e,"column"),a=n(e,"isEditable"),s=n(e,"isEditMode"),l=n(e,"isFooter");return{readonlyLocal:_(()=>{var o,i,c,d;return l.value?!0:a.value?(i=(o=t.value)==null?void 0:o.formElement)!=null&&i.useRowReadonly?!s.value:!!((d=(c=t.value)==null?void 0:c.formElement)!=null&&d.readonly):!0})}}function ot(e){const t=n(e,"column"),a=n(e,"isFooter"),s=_(()=>a.value?t.value.footerSlot:t.value.slot),l=_(()=>a.value?t.value.footerSlotAfter:t.value.slotAfter),r=_(()=>!!s.value),o=_(()=>!!l.value);return{hasSlot:r,hasSlotAfter:o,slotName:s,slotNameAfter:l}}function re(e){if(!(e==null||e===""))return typeof e=="number"?`${e}px`:e}function _e(e){const t=n(e,"column");return{columnStyles:_(()=>{const s={},l=re(t.value.width),r=re(t.value.maxWidth),o=re(t.value.minWidth);return l&&(s.width=l),r&&(s.maxWidth=r),o&&(s.minWidth=o),je(t.value.style)?{...s,...t.value.style}:t.value.style?[s,t.value.style]:s})}}const at={name:"ATableFormCell",props:{column:{type:Object,required:!0},columnIndex:{type:Number,required:!0},columnStyle:{type:Object,required:!1,default:void 0},errorIcon:{type:String,required:!1,default:void 0},errors:{type:Object,required:!1,default:()=>({})},id:{type:String,required:!0},isEditMode:{type:Boolean,required:!1,default:!1},isEditable:{type:Boolean,required:!1,default:!1},isFooter:{type:Boolean,required:!1,default:!1},row:{type:Object,required:!0},rowData:{type:Object,required:!1,default:void 0},rowIndex:{type:Number,required:!0},rows:{type:Array,required:!0},tag:{type:String,required:!1,default:"td"}},emits:["updateRowData"],setup(e){const{columnStyles:t}=_e({column:e.column}),{readonlyLocal:a}=tt(e),{disabledLocal:s}=et(e),{hasSlot:l,hasSlotAfter:r,slotName:o,slotNameAfter:i}=ot(e),c=_(()=>e.rowData||e.row);return{columnStyles:t,disabledLocal:s,hasSlot:l,hasSlotAfter:r,readonlyLocal:a,rowDataLocal:c,slotName:o,slotNameAfter:i}},methods:{updateRowData({item:e,model:t}){this.$emit("updateRowData",{column:this.column,columnId:this.column.id,item:e,model:t,value:t})}},render(){const{type:e="text",...t}=this.column.formElement||{},a={column:this.column,columnIndex:this.columnIndex,row:this.row,rowIndex:this.rowIndex,rows:this.rows};return f(this.tag,{class:["a_table_form__cell",`a_table_form__cell_${this.tag}`,this.column.class,this.isFooter?this.column.classFooter:this.column.classRow],"data-column-id":this.column.id,style:[this.columnStyles,this.columnStyle]},[this.hasSlot&&this.$slots[this.slotName]?this.$slots[this.slotName](a):f(Ze,{id:this.column.id,errorIcon:this.errorIcon,idPrefix:this.id,...t,change:this.updateRowData,disabled:this.disabledLocal,errors:I(this.errors,this.column.id),errorsClass:"a_sr_only",modelValue:I(this.rowDataLocal,this.column.id),readonly:this.readonlyLocal,type:e}),this.hasSlotAfter&&this.$slots[this.slotNameAfter]?this.$slots[this.slotNameAfter](a):null])}};function st(e,{idBtnDelete:t=_(()=>""),isActionsDisabled:a=_(()=>!1)}){const s=n(e,"id"),l=n(e,"isDeletable"),r=n(e,"isDeletableConfirm"),o=n(e,"onDeleteRow"),i=n(e,"row"),c=n(e,"rowIndex"),d=n(e,"texts"),{closeConfirm:b,openConfirm:m}=Re(),w=()=>{b(),de().then(()=>{le({selector:`#${t.value}`})})},E=()=>{m({bodyHtml:d.value.actionDeleteConfirmBody,closeButtonText:d.value.actionDeleteConfirmClose,headerText:d.value.actionDeleteConfirmHeader,save:async()=>{await o.value({btnDeleteId:t.value,row:i.value,rowIndex:c.value,rowId:s.value}),b()},close:w,saveButtonText:d.value.actionDeleteConfirmSave})};return{onDeleteClick:()=>{if(!a.value){if(r.value){E();return}l.value&&o.value({btnDeleteId:t.value,row:i.value,rowIndex:c.value,rowId:s.value})}}}}function lt(e){const t=n(e,"actionsDisabledCallback"),a=n(e,"hasActiveEditRow"),s=n(e,"isActiveEditMode"),l=n(e,"row"),r=n(e,"rowIndex"),o=_(()=>a.value&&!s.value),i=_(()=>{if(o.value)return!0;const d=I(t.value,"delete");return k(d)?d({row:l.value,rowIndex:r.value}):!1}),c=_(()=>{if(o.value)return!0;const d=I(t.value,"edit");return k(d)?d({row:l.value,rowIndex:r.value}):!1});return{isDeleteDisabled:i,isEditDisabled:c}}function it(e){const t=n(e,"actionsHideCallback"),a=n(e,"row"),s=n(e,"rowIndex"),l=_(()=>{const o=I(t.value,"delete");return k(o)?o({row:a.value,rowIndex:s.value}):!1}),r=_(()=>{const o=I(t.value,"edit");return k(o)?o({row:a.value,rowIndex:s.value}):!1});return{isDeleteHidden:l,isEditHidden:r}}function rt(e){const t=n(e,"id"),a=_(()=>`${t.value}_delete`),s=_(()=>`${t.value}_edit`),l=_(()=>`${t.value}_cancel`),r=_(()=>`${t.value}_save`);return{idBtnCancel:l,idBtnDelete:a,idBtnEdit:s,idBtnSave:r}}function nt(e){const t=n(e,"hasActiveEditRow"),a=n(e,"isDeletable"),s=n(e,"isDeletableConfirm"),l=n(e,"isEditable"),r=n(e,"isActiveEditMode"),o=n(e,"widths");return{columnStyles:_(()=>{const c=a.value||s.value,d=t.value||r.value||l.value&&c?o.value.actionsColumnDouble:o.value.actionsColumnSingle;return{maxWidth:`${d}px`,minWidth:`${d}px`,width:`${d}px`}})}}function dt(e){const t=n(e,"row"),a=n(e,"rowIndex"),s=n(e,"texts"),l=n(e,"actionsTitleCallback"),r=_(()=>{const i=I(l.value,"delete");return k(i)?i({row:t.value,rowIndex:a.value}):s.value.actionDelete}),o=_(()=>{const i=I(l.value,"edit");return k(i)?i({row:t.value,rowIndex:a.value}):s.value.actionEdit});return{deleteTitle:r,editTitle:o}}const ct={name:"ATableFormCellAction",props:{actionsClasses:{type:Object,required:!1,default:()=>({})},actionsDisabledCallback:{type:Object,required:!1,default:()=>({})},actionsHideCallback:{type:Object,required:!1,default:()=>({})},actionsTitleCallback:{type:Object,required:!1,default:()=>({})},extra:{type:Object,required:!1,default:void 0},hasActiveEditRow:{type:Boolean,required:!1,default:!1},id:{type:String,required:!0},isActionsSticky:{type:Boolean,required:!1,default:!1},isActiveEditMode:{type:Boolean,required:!1,default:!1},isDeletable:{type:Boolean,required:!1,default:!1},isDeletableConfirm:{type:Boolean,required:!1,default:!1},isEditable:{type:Boolean,required:!1,default:!1},isFooter:{type:Boolean,required:!1,default:!1},isHeader:{type:Boolean,required:!1,default:!1},isSaving:{type:Boolean,required:!1,default:!1},onCancelEditRow:{type:Function,required:!0},onDeleteRow:{type:Function,required:!0},onEditRow:{type:Function,required:!0},onSaveEditRow:{type:Function,required:!0},row:{type:Object,required:!0},rowIndex:{type:Number,required:!0},texts:{type:Object,required:!1,default:()=>({})},widths:{type:Object,required:!1,default:()=>({})}},setup(e){const{isDeleteDisabled:t,isEditDisabled:a}=lt(e),{isDeleteHidden:s,isEditHidden:l}=it(e),{idBtnCancel:r,idBtnDelete:o,idBtnEdit:i,idBtnSave:c}=rt(e),{onDeleteClick:d}=st(e,{idBtnDelete:o,isActionsDisabled:t}),{columnStyles:b}=nt(e),{deleteTitle:m,editTitle:w}=dt(e);return{columnStyles:b,deleteTitle:m,editTitle:w,idBtnCancel:r,idBtnDelete:o,idBtnEdit:i,idBtnSave:c,isDeleteDisabled:t,isDeleteHidden:s,isEditDisabled:a,isEditHidden:l,onDeleteClick:d}},render(){const e=this.isHeader?"th":"td";return f(e,{class:["a_table_form__cell",`a_table_form__cell_${e}`,"a_table_form__cell_actions",{a_table_form__cell_actions_sticky:this.isActionsSticky}],style:this.columnStyles},[this.isHeader?f("span",{class:"a_sr_only"},[f(z,{tag:"span",text:this.texts.actionsColumn})]):this.isFooter?null:f("div",{class:"a_table_form__actions",role:"group"},this.isActiveEditMode?[f(V,{id:this.idBtnSave,class:["a_table_form__action_button",this.actionsClasses.editSave],disabled:this.isSaving,extra:this.extra,iconLeft:Oe,title:this.texts.actionEditSave,textScreenReader:this.texts.actionEditSave,onClick:()=>this.onSaveEditRow({id:this.id,row:this.row,rowIndex:this.rowIndex})}),f(V,{id:this.idBtnCancel,class:["a_table_form__action_button",this.actionsClasses.editCancel],disabled:this.isSaving,extra:this.extra,iconLeft:Fe,title:this.texts.actionEditCancel,textScreenReader:this.texts.actionEditCancel,onClick:()=>this.onCancelEditRow({id:this.id,row:this.row,rowIndex:this.rowIndex,trigger:"cancel"})})]:[(this.isDeletable||this.isDeletableConfirm)&&!this.isDeleteHidden&&f(V,{id:this.idBtnDelete,class:["a_table_form__action_button",this.actionsClasses.delete],disabled:this.isDeleteDisabled,extra:this.extra,iconLeft:Ie,title:this.deleteTitle,textScreenReader:this.deleteTitle,onClick:this.onDeleteClick}),this.isEditable&&!this.isEditHidden&&f(V,{id:this.idBtnEdit,class:["a_table_form__action_button",this.actionsClasses.edit],disabled:this.isEditDisabled,extra:this.extra,iconLeft:ke,title:this.editTitle,textScreenReader:this.editTitle,onClick:()=>this.onEditRow({id:this.id,row:this.row,rowIndex:this.rowIndex})})])])}};function ut(e){const t=n(e,"id"),a=_(()=>`${t.value}_up`);return{idBtnDown:_(()=>`${t.value}_down`),idBtnUp:a}}const _t={name:"ATableFormCellDnd",props:{canMoveRowDown:{type:Function,required:!0},canMoveRowUp:{type:Function,required:!0},id:{type:String,required:!0},isCreateMode:{type:Boolean,required:!1,default:!1},isDragAndDrop:{type:Boolean,required:!1,default:!1},isDndDisabled:{type:Boolean,required:!1,default:!1},isDndLocked:{type:Boolean,required:!1,default:!1},isFooter:{type:Boolean,required:!1,default:!1},isHeader:{type:Boolean,required:!1,default:!1},moveRowDown:{type:Function,required:!0},moveRowUp:{type:Function,required:!0},onDragend:{type:Function,required:!0},onDragstart:{type:Function,required:!0},rowIndex:{type:Number,required:!0},texts:{type:Object,required:!1,default:()=>({})},widths:{type:Object,required:!1,default:()=>({})}},setup(e){const{idBtnDown:t,idBtnUp:a}=ut(e);return{columnStyles:_(()=>({maxWidth:`${e.widths.dndColumn}px`,minWidth:`${e.widths.dndColumn}px`,width:`${e.widths.dndColumn}px`})),idBtnDown:t,idBtnUp:a}},render(){const e=this.isHeader?"th":"td",t=this.isDragAndDrop&&!this.isDndDisabled;return f(e,{class:["a_table_form__cell",`a_table_form__cell_${e}`,"a_table_form__cell_reorder"],style:this.columnStyles},[this.isHeader?f("span",{class:"a_sr_only"},[f(z,{tag:"span",text:this.texts.reorderColumn})]):this.isCreateMode||this.isFooter?null:f("div",{class:"a_table_form__reorder_actions"},[this.canMoveRowUp(this.rowIndex)&&f(V,{id:this.idBtnUp,class:"a_sr_only_focusable a_btn a_btn_transparent_dark a_table_form__reorder_button",disabled:this.isDndDisabled,iconLeft:xe,preventKeyboardRepeat:!0,tabindex:this.isDndDisabled?-1:void 0,title:this.texts.reorderUp,textScreenReader:this.texts.reorderUp,onClick:()=>this.moveRowUp(this.rowIndex)}),f("span",{ariaHidden:!0,class:["a_table_form__reorder_handle",{a_table_form__reorder_handle_disabled:this.isDndDisabled}],draggable:t,onDragend:t?this.onDragend:void 0,onDragstart:t?a=>this.onDragstart(a,this.rowIndex):void 0},[f(pe,{class:"a_table_form__reorder_icon",icon:this.isDndLocked?Se:Be})]),f("span",{class:"a_sr_only"},[f(z,{tag:"span",text:this.isDndDisabled?this.texts.reorderDisabled:this.texts.reorderHandle})]),this.canMoveRowDown(this.rowIndex)&&f(V,{id:this.idBtnDown,class:"a_sr_only_focusable a_btn a_btn_transparent_dark a_table_form__reorder_button",disabled:this.isDndDisabled,iconLeft:qe,preventKeyboardRepeat:!0,tabindex:this.isDndDisabled?-1:void 0,title:this.texts.reorderDown,textScreenReader:this.texts.reorderDown,onClick:()=>this.moveRowDown(this.rowIndex)})])])}};function me(e,{isEditMode:t,isRowDisabled:a}={}){var l;const s=U(e||{});return s.useRowReadonly&&(s.readonly=!t),(l=s.children)!=null&&l.length&&(s.children=s.children.map(r=>me(r,{isEditMode:t}))),a&&(s.disabled=!0),s}function mt(e){const t=n(e,"columns"),a=n(e,"isEditable"),s=n(e,"isEditMode");return{dataForm:_(()=>{const r=a.value&&!s.value;return t.value.map(o=>{const i=me(o.formElement,{isEditMode:s.value,isRowDisabled:r});return i.id=o.id,ce(i.label)&&(i.label=o.label),i["data-column-id"]=o.id,i})})}}function fe(e,t){return(e==null?void 0:e.some(a=>(a==null?void 0:a.id)===t||fe(a==null?void 0:a.children,t)))||!1}const ft={name:"ATableFormCellList",props:{columns:{type:Array,required:!0},errors:{type:Object,required:!1,default:()=>({})},id:{type:String,required:!0},isEditable:{type:Boolean,required:!1,default:!1},isEditMode:{type:Boolean,required:!1,default:!1},isFooter:{type:Boolean,required:!1,default:!1},row:{type:Object,required:!0},rowData:{type:Object,required:!1,default:void 0},rowIndex:{type:Number,required:!0},rows:{type:Array,required:!0}},emits:["updateRowData"],setup(e){const{dataForm:t}=mt(e);return{dataForm:t,rowDataLocal:_(()=>e.rowData||e.row)}},methods:{updateRowData({fullModel:e,id:t,item:a,model:s}){const l=this.columns.find(r=>{var o;return r.id===t||fe((o=r.formElement)==null?void 0:o.children,t)});this.$emit("updateRowData",{column:l,columnId:t,fullModel:e,item:a,model:s})}},render(){return f("td",{class:["a_table_form__cell","a_table_form__cell_td","a_table_form__cell_list"]},[f(ye,{data:this.dataForm,errors:this.errors,idPrefix:this.id,modelValue:this.rowDataLocal,readonly:this.isFooter||!this.isEditable,showErrors:!0,showRequiredText:!1,tag:"div",useFlatErrors:!0,useFlatModel:!0,onChange:this.updateRowData},this.$slots)])}},ht={name:"ATableFormTh",props:{column:{type:Object,required:!0},columnStyle:{type:Object,required:!1,default:void 0},isEditable:{type:Boolean,required:!1,default:!1}},setup(e){const{columnStyles:t}=_e({column:e.column});return{columnStyles:t}},render(){var e;return f("th",{class:["a_table_form__cell","a_table_form__cell_th",this.column.class],style:[this.columnStyles,this.columnStyle]},[this.column.slotHeader&&this.$slots[this.column.slotHeader]?this.$slots[this.column.slotHeader]({column:this.column,isEditable:this.isEditable}):this.column.label&&f(z,{html:this.column.label,tag:"span"}),this.isEditable&&((e=this.column.formElement)==null?void 0:e.required)&&f("span",{class:"a_label__required"},"*")])}};function bt(e,{hasErrors:t=_(()=>!1)}){const a=n(e,"hasActiveEditRow"),s=n(e,"isActiveEditMode"),l=n(e,"isCreateMode"),r=n(e,"isFooter"),o=n(e,"isHeader"),i=n(e,"row"),c=n(e,"rowClass"),d=n(e,"rowIndex"),b=n(e,"trClass"),m=_(()=>k(c.value)?c.value({row:i.value,rowIndex:d.value,rowindex:d.value,isCreateMode:l.value,isFooter:r.value,isHeader:o.value}):c.value),w=_(()=>[b.value,m.value,{a_table_form__row_active:!o.value&&!r.value&&s.value,a_table_form__row_errors:!o.value&&!r.value&&t.value,a_table_form__row_inactive:!o.value&&!r.value&&a.value&&!s.value}]);return{rowClassLocal:m,trClassLocal:w}}function wt(e,{errorsLocal:t=y(void 0)}){const a=n(e,"changeModel"),s=n(e,"onCancelEditRow"),l=n(e,"row"),r=n(e,"rows"),o=n(e,"rowIndex"),i=n(e,"saveRow"),c=y(!1),d=y(void 0),b=({column:E,columnId:R,fullModel:T,item:B,model:q})=>{d.value||(d.value=U(l.value)||{});let x;a.value&&(x=a.value({modelAll:d.value,row:l.value,column:E,fullModel:T,model:q,item:B})),x!=null&&x.model?d.value=U(x.model):T!==void 0?d.value=U(T):Ve(d.value,R,q),Ge(t.value,R)},m=({trigger:E,id:R}={})=>{s.value({row:l.value,rowIndex:o.value,trigger:E,id:R})};return{cancelEditRow:m,isSaving:c,modelLocal:d,saveEditRow:async({id:E}={})=>{if(!c.value){t.value={},c.value=!0;try{const R=await i.value({model:U(d.value),row:l.value,rowIndex:o.value,rows:r.value});if(R!=null&&R.errors){t.value=U(R.errors);return}m({trigger:"save",id:E})}catch(R){t.value=R}finally{c.value=!1}}},updateModelLocal:b}}function vt(e){const t=n(e,"columns"),a=y({}),s=_(()=>!Je(a.value)),l=_(()=>{const r=[];return Ke(t.value,o=>{const i=U(o.formElement)||{};i.type=i.type||"text",i.label=i.label||o.label,i.id=i.id||o.id,r.push(i)}),r});return{errorsLocal:a,hasErrors:s,optionsListForErrors:l}}function Et({idTr:e=_(()=>"")}){return{focusEditableElementByColumnId:s=>{if(!s)return!1;const l=document.getElementById(e.value),r=Array.from((l==null?void 0:l.querySelectorAll("[data-column-id]"))||[]).find(c=>c.dataset.columnId===`${s}`),o=document.getElementById(`${e.value}${s}`),i=(r==null?void 0:r.querySelector(ae))||(o!=null&&o.matches(ae)?o:o==null?void 0:o.querySelector(ae));return i?(i.focus(),!0):!1},focusFirstEditableElement:()=>{const s=document.getElementById(e.value);if(!s)return;const r=Array.from(s.querySelectorAll(".a_table_form__cell:not(.a_table_form__cell_actions)")).map(o=>o.querySelector(ae)).find(Boolean);r==null||r.focus()}}}function At(e){const t=n(e,"id"),a=n(e,"isHeader"),s=n(e,"isFooter"),l=n(e,"rowIndex");return{idTr:_(()=>`${t.value}_${l.value}${a.value?"_header":""}${s.value?"_footer":""}`)}}const Rt=["a","button","[contenteditable]","[role='button']","[role='checkbox']","[role='combobox']","[role='link']","[role='menuitem']","[role='option']","[role='radio']","[role='switch']","[role='textbox']"].join(","),pt=e=>!!e&&(e.disabled||e.hasAttribute("readonly")||e.getAttribute("aria-disabled")==="true"||e.getAttribute("aria-readonly")==="true"),yt=(e,t)=>{var r,o,i,c;const a=(o=(r=e.target)==null?void 0:r.closest)==null?void 0:o.call(r,"[data-column-id]");if(a!=null&&a.dataset.columnId)return a.dataset.columnId;const s=(c=(i=e.target)==null?void 0:i.closest)==null?void 0:c.call(i,"[id]"),l=s==null?void 0:s.id;if(l!=null&&l.startsWith(t))return l.slice(t.length)},se={name:"ATableFormRow",props:{actionsClasses:{type:Object,required:!1,default:()=>({})},actionsDisabledCallback:{type:Object,required:!1,default:()=>({})},actionsHideCallback:{type:Object,required:!1,default:()=>({})},actionsTitleCallback:{type:Object,required:!1,default:()=>({})},allColumnsLength:{type:Number,required:!0},canMoveRowDown:{type:Function,required:!0},canMoveRowUp:{type:Function,required:!0},cellTag:{type:String,required:!1,default:void 0},changeModel:{type:Function,required:!1,default:void 0},columns:{type:Array,required:!0},columnsStylesGrow:{type:Object,required:!1,default:()=>({})},draggedRowIndex:{type:Number,required:!1,default:void 0},editModel:{type:Object,required:!1,default:void 0},editFocusColumnId:{type:[String,Number],required:!1,default:void 0},errorIcon:{type:String,required:!1,default:void 0},extra:{type:Object,required:!1,default:void 0},hasActionsColumn:{type:Boolean,required:!1,default:!1},hasActiveEditRow:{type:Boolean,required:!1,default:!1},id:{type:String,required:!0},isActionsSticky:{type:Boolean,required:!1,default:!1},isActiveEditMode:{type:Boolean,required:!1,default:!1},isCreateMode:{type:Boolean,required:!1,default:!1},isDeletable:{type:Boolean,required:!1,default:!1},isDeletableConfirm:{type:Boolean,required:!1,default:!1},isDndDisabled:{type:Boolean,required:!1,default:!1},isDndLocked:{type:Boolean,required:!1,default:!1},isDragAndDrop:{type:Boolean,required:!1,default:!1},isEditable:{type:Boolean,required:!1,default:!1},isEditOnRowClick:{type:Boolean,required:!1,default:!1},isFooter:{type:Boolean,required:!1,default:!1},isHeader:{type:Boolean,required:!1,default:!1},moveRowDown:{type:Function,required:!0},moveRowUp:{type:Function,required:!0},onCancelEditRow:{type:Function,required:!0},onDeleteRow:{type:Function,required:!0},onDragend:{type:Function,required:!0},onDragleave:{type:Function,required:!1,default:void 0},onDragover:{type:Function,required:!1,default:void 0},onDragstart:{type:Function,required:!0},onDrop:{type:Function,required:!1,default:void 0},onEditRow:{type:Function,required:!0},row:{type:Object,required:!0},rowClass:{type:[String,Object,Array,Function],required:!1,default:void 0},rowIndex:{type:Number,required:!0},rows:{type:Array,required:!0},rowView:{type:String,required:!1,default:"table",validator:e=>["list","table"].includes(e)},saveRow:{type:Function,required:!0},texts:{type:Object,required:!1,default:()=>({})},trClass:{type:[String,Object,Array],required:!1,default:void 0},widths:{type:Object,required:!1,default:()=>({})}},setup(e){const{idTr:t}=At(e),{focusEditableElementByColumnId:a,focusFirstEditableElement:s}=Et({idTr:t}),{errorsLocal:l,hasErrors:r,optionsListForErrors:o}=vt(e),{rowClassLocal:i,trClassLocal:c}=bt(e,{hasErrors:r}),{cancelEditRow:d,isSaving:b,modelLocal:m,saveEditRow:w,updateModelLocal:E}=wt(e,{errorsLocal:l});return{cancelEditRow:d,errorsLocal:l,focusFirstEditableElement:s,focusEditableElementByColumnId:a,hasErrors:r,rowClassLocal:i,idTr:t,isSaving:b,modelLocal:m,optionsListForErrors:o,saveEditRow:w,trClassLocal:c,updateModelLocal:E}},computed:{canEditOnRowClick(){if(!this.isEditOnRowClick||!this.isEditable||this.isActiveEditMode||this.isCreateMode||this.isFooter||this.isHeader||this.hasActiveEditRow)return!1;const e=I(this.actionsHideCallback,"edit");if(k(e)&&e({row:this.row,rowIndex:this.rowIndex}))return!1;const t=I(this.actionsDisabledCallback,"edit");return!(k(t)&&t({row:this.row,rowIndex:this.rowIndex}))},currentRowData(){return this.isActiveEditMode&&this.modelLocal?this.modelLocal:this.row}},methods:{onRowClick(e){var a,s,l,r;if(!this.canEditOnRowClick||(s=(a=e.target)==null?void 0:a.closest)!=null&&s.call(a,".a_table_form__cell_actions, .a_table_form__cell_reorder"))return;const t=(r=(l=e.target)==null?void 0:l.closest)==null?void 0:r.call(l,Rt);t&&!pt(t)||this.onEditRow({focusColumnId:yt(e,this.idTr),id:this.idTr,row:this.row,rowIndex:this.rowIndex})}},watch:{isActiveEditMode:{immediate:!0,handler(e){if(e){this.modelLocal=U(this.editModel===void 0?this.row:this.editModel),this.errorsLocal={},de(()=>{this.focusEditableElementByColumnId(this.editFocusColumnId)||this.focusFirstEditableElement()});return}this.errorsLocal={},this.isSaving=!1}}},render(){const e=[];return this.isActiveEditMode&&this.texts.editInfoText&&e.push(f("tr",{class:"a_table_form__row a_table_form__row_info",key:`info_${this.rowIndex}`},[f("td",{class:"a_table_form__cell a_table_form__cell_info",colspan:this.allColumnsLength},[f(Te,{alertClass:"a_table_form__info",html:this.texts.editInfoText,isVisible:!0,type:"info"})])])),e.push(f("tr",{id:this.idTr,"aria-grabbed":!this.isHeader&&!this.isFooter?this.draggedRowIndex===this.rowIndex:void 0,class:[this.trClassLocal,{a_table_form__row_edit_on_click:this.canEditOnRowClick}],key:`main_${this.rowIndex}`,onClick:this.onRowClick,onDragleave:this.onDragleave&&(t=>this.onDragleave(t,this.rowIndex)),onDragover:this.onDragover&&(t=>this.onDragover(t,this.rowIndex)),onDrop:this.onDrop&&(t=>this.onDrop(t,this.rowIndex))},[this.isDragAndDrop?f(_t,{id:this.idTr,canMoveRowDown:this.canMoveRowDown,canMoveRowUp:this.canMoveRowUp,isCreateMode:this.isCreateMode,isDndDisabled:this.isDndDisabled,isDndLocked:this.isDndLocked,isDragAndDrop:this.isDragAndDrop,isFooter:this.isFooter,isHeader:this.isHeader,moveRowDown:this.moveRowDown,moveRowUp:this.moveRowUp,onDragend:this.onDragend,onDragstart:this.onDragstart,rowIndex:this.rowIndex,texts:this.texts,widths:this.widths}):null,...this.rowView==="list"&&!this.isHeader?[f(ft,{id:this.idTr,columns:this.columns,errors:this.errorsLocal,isEditable:this.isEditable,isEditMode:this.isActiveEditMode,isFooter:this.isFooter,onUpdateRowData:this.updateModelLocal,row:this.row,rowData:this.currentRowData,rowIndex:this.rowIndex,rows:this.rows},this.$slots)]:this.columns.map((t,a)=>this.isHeader?f(ht,{column:t,columnStyle:this.columnsStylesGrow[t.id],isEditable:this.isEditable},this.$slots):f(at,{id:this.idTr,column:t,columnIndex:a,columnStyle:this.columnsStylesGrow[t.id],errorIcon:this.errorIcon,errors:this.errorsLocal,isEditable:this.isEditable,isEditMode:this.isActiveEditMode,isFooter:this.isFooter,onUpdateRowData:this.updateModelLocal,row:this.row,rowData:this.currentRowData,rowIndex:this.rowIndex,rows:this.rows,tag:this.cellTag},this.$slots)),this.hasActionsColumn?f(ct,{id:this.idTr,actionsClasses:this.actionsClasses,actionsDisabledCallback:this.actionsDisabledCallback,actionsHideCallback:this.actionsHideCallback,actionsTitleCallback:this.actionsTitleCallback,extra:this.extra,hasActiveEditRow:this.hasActiveEditRow,isActionsSticky:this.isActionsSticky,isActiveEditMode:this.isActiveEditMode,isDeletable:this.isDeletable,isDeletableConfirm:this.isDeletableConfirm,isEditable:this.isEditable,isFooter:this.isFooter,isHeader:this.isHeader,isSaving:this.isSaving,onCancelEditRow:this.cancelEditRow,onDeleteRow:this.onDeleteRow,onEditRow:this.onEditRow,onSaveEditRow:this.saveEditRow,row:this.row,rowIndex:this.rowIndex,texts:this.texts,widths:this.widths}):null])),this.rowView==="table"&&this.isActiveEditMode&&this.hasErrors&&e.push(f("tr",{class:"a_table_form__row a_table_form__row_errors",key:`errors_${this.rowIndex}`},[f("td",{class:"a_table_form__cell a_table_form__cell_errors",colspan:this.allColumnsLength},[f(ge,{autoFocus:!0,closable:!1,errors:this.errorsLocal,optionsList:this.optionsListForErrors,idPrefix:this.idTr})])])),e}};function Tt(e){const t=n(e,"actionsClasses");return{actionsClassesLocal:_(()=>({delete:"a_btn a_btn_transparent_danger",edit:"a_btn a_btn_transparent_primary",editCancel:"a_btn a_btn_transparent_primary",editSave:"a_btn a_btn_transparent_primary",addRow:"a_btn a_btn_outline_primary",...t.value}))}}function gt(e,{isAddRowActive:t=_(()=>!1)}={}){const a=n(e,"columns"),s=n(e,"isDeletable"),l=n(e,"isDeletableConfirm"),r=n(e,"isDragAndDrop"),o=n(e,"isEditable"),i=n(e,"rowView"),c=_(()=>!!(o.value||s.value||l.value||t.value)),d=_(()=>a.value.filter(m=>m.isRender!==!1));return{allColumnsLength:_(()=>{let m=i.value==="list"?1:d.value.length;return r.value&&(m+=1),c.value&&(m+=1),m}),columnsVisible:d,hasActionsColumn:c}}const Ct=2;function Dt(e,{columnsVisible:t=_(()=>[]),hasActionsColumn:a=_(()=>!1),hasActiveEditRow:s=_(()=>!1),widthsLocal:l=_(()=>({}))}){const r=n(e,"id"),o=n(e,"isColumnsGrow"),i=n(e,"isDeletable"),c=n(e,"isDeletableConfirm"),d=n(e,"isDragAndDrop"),b=n(e,"isEditable"),{remPx:m,scalePxWithRem:w}=Ce(),E=y(void 0),R=y({});let T,B;const q=_(()=>a.value?s.value||b.value&&(i.value||c.value)?l.value.actionsColumnDouble:l.value.actionsColumnSingle:0),x=_(()=>d.value?l.value.dndColumn:0),M=()=>{var p;return(p=document.getElementById(r.value))==null?void 0:p.parentElement},O=p=>{if(ce(p)||p==="")return 0;if(Xe(p))return+w(p)||0;if(!ze(p))return 0;const C=p.trim();return C?C.endsWith("rem")?(parseFloat(C)||0)*m.value:(C.endsWith("px"),parseFloat(C)||0):0},H=p=>{const C=`${p}px`;return{maxWidth:C,minWidth:C,width:C}},W=()=>{if(!o.value||!E.value){R.value={};return}const p=t.value||[],C=E.value-q.value-x.value-Ct;if(C<=0){R.value={};return}let u=0,h=0;if(p.forEach(L=>{const N=O(L.width);u+=N,h+=Math.max(0,+L.grow||0)}),u>=C||!p.length){R.value={};return}const v=C-u,A=h>0,D=A?h:p.length,S={};p.forEach(L=>{const N=O(L.width),j=A?Math.max(0,+L.grow||0):1;if(!L.id||A&&!N)return;const X=N+(j>0?v*j/D:0);S[L.id]=H(X)}),R.value=S},ee=()=>{if(!o.value||T)return;const p=M();p&&(B=p,T=new ResizeObserver(Ye(C=>{var h,v;const u=(v=(h=C[0])==null?void 0:h.contentRect)==null?void 0:v.width;u&&(E.value=u,W())},100)),E.value=p.getBoundingClientRect().width,W(),T.observe(p))},te=()=>{T&&(B&&T.unobserve(B),T.disconnect(),T=void 0,B=void 0)};return Ne([t,a,s,i,c,d,b,l],()=>{W()},{deep:!0}),{columnsStylesGrow:R,destroyColumnsGrowObserver:te,initColumnsGrowObserver:ee}}function Lt(e,{emit:t}){return{onDeleteRow:({row:s,rowIndex:l,rowId:r,btnDeleteId:o})=>{t("deleteRow",{row:s,rowIndex:l,rowId:r,btnDeleteId:o})}}}function Mt(e,{emit:t},{isDndDisabled:a=_(()=>!1)}={}){const s=n(e,"actionsDisabledCallback"),l=n(e,"focusAfterMove"),r=n(e,"id"),o=n(e,"isDragAndDrop"),i=n(e,"rows"),c=y(void 0),d=y(void 0),b=y(void 0),m=y(void 0),w=u=>{const h=I(s.value,"dnd");return k(h)?!!h({row:i.value[u],rowIndex:u}):!1},E=u=>a.value||w(u),R=(u,h)=>{const v=Math.min(u,h),A=Math.max(u,h);for(let D=v;D<=A;D++)if(E(D))return!0;return!1},T=()=>{var u;(u=m.value)==null||u.remove(),m.value=void 0},B=u=>{var N,j;const h=(j=(N=u.target)==null?void 0:N.closest)==null?void 0:j.call(N,"tr");if(!h)return;const v=h.getBoundingClientRect(),A=document.createElement("table"),D=document.createElement("tbody"),S=h.cloneNode(!0);A.className="a_table_form__table",A.style.borderCollapse="collapse",A.style.borderSpacing="0",A.style.width=`${v.width}px`,A.style.tableLayout="fixed",Array.from(h.children).forEach((X,ie)=>{const P=S.children[ie];if(P){const $=window.getComputedStyle(X);P.style.width=`${X.getBoundingClientRect().width}px`,P.style.backgroundColor=$.backgroundColor,P.style.borderTop=$.borderTop,P.style.borderRight=$.borderRight,P.style.borderBottom=$.borderBottom,P.style.borderLeft=$.borderLeft,P.style.color=$.color}}),D.appendChild(S),A.appendChild(D);const L=document.createElement("div");return L.className="a_table_form a_table_form__drag_preview",L.style.position="fixed",L.style.top="-10000px",L.style.left="-10000px",L.style.pointerEvents="none",L.style.zIndex="9999",L.appendChild(A),document.body.appendChild(L),m.value=L,{element:L,offsetX:Math.min(u.offsetX||0,v.width/2),offsetY:Math.min(u.offsetY||0,v.height/2)}},q=({focusId:u,fromIndex:h,toIndex:v,trigger:A})=>{if(!o.value||a.value||h===v||h<0||v<0||h>=i.value.length||v>=i.value.length||R(h,v))return;const D=[...i.value],[S]=D.splice(h,1);D.splice(v,0,S),t("updateRows",{focusId:u,rows:D,trigger:A,fromIndex:h,toIndex:v}),t("moveRow",{focusId:u,fromIndex:h,row:S,toIndex:v})},x=({fromIndex:u,rowIndex:h,position:v="before"})=>{if(!o.value||a.value||u<0||h<0||u>=i.value.length||h>=i.value.length)return;let A=v==="after"?h+1:h;u<A&&(A-=1),q({fromIndex:u,toIndex:A,trigger:"dnd"})},M=({focusId:u})=>{l.value&&de().then(()=>{le({selector:`#${u}`})})},O=u=>{const h=Math.max(1,u-1),v=`${r.value}_${h}_up`;q({focusId:v,fromIndex:u,toIndex:u-1,trigger:"moveRowUp"}),M({focusId:v})},H=u=>{const h=Math.min(i.value.length-2,u+1),v=`${r.value}_${h}_down`;q({focusId:v,fromIndex:u,toIndex:u+1,trigger:"moveRowDown"}),M({focusId:v})},W=(u,h)=>{if(!(!o.value||E(h))){if(u!=null&&u.dataTransfer){u.dataTransfer.effectAllowed="move",u.dataTransfer.setData("text/plain",`${h}`),T();const v=B(u);v&&u.dataTransfer.setDragImage(v.element,v.offsetX,v.offsetY)}c.value=h}},ee=(u,h)=>{var A,D;if(!o.value||E(h))return;u.preventDefault();const v=(D=(A=u.currentTarget)==null?void 0:A.getBoundingClientRect)==null?void 0:D.call(A);if(v){const S=v.top+v.height/2;b.value=u.clientY<S?"before":"after"}else b.value="after";d.value=h},te=(u,h)=>{var A,D;if(!o.value||E(h))return;const v=u.relatedTarget;(D=(A=u.currentTarget)==null?void 0:A.contains)!=null&&D.call(A,v)||d.value===h&&(d.value=void 0,b.value=void 0)},p=(u,h)=>{!o.value||E(h)||(u.preventDefault(),c.value!==void 0&&(x({fromIndex:c.value,position:b.value||"after",rowIndex:h}),T(),c.value=void 0,d.value=void 0,b.value=void 0))},C=()=>{T(),c.value=void 0,d.value=void 0,b.value=void 0};return{canMoveRowDown:_(()=>u=>u<i.value.length-1),canMoveRowUp:_(()=>u=>u>0),dragOverPosition:b,dragOverRowIndex:d,draggedRowIndex:c,isDndDisabledForRow:E,isDndLockedForRow:w,onDragleave:te,moveRowDown:H,moveRowUp:O,onDragend:C,onDragover:ee,onDragstart:W,onDrop:p}}const he=e=>{var t;return e!=null&&e.required?!0:((t=e==null?void 0:e.children)==null?void 0:t.some(he))||!1};function Ot(e,{columnsVisible:t=_(()=>[]),getRowKey:a=()=>{},isAddRowActive:s=y(!1)}){const l=n(e,"addRow"),r=n(e,"isAddable"),o=n(e,"isEditable"),i=n(e,"prepareEditModel"),c=n(e,"rows"),d=y(void 0),b=y(void 0),m=y(void 0),w=_(()=>!!d.value||s.value),E=_(()=>r.value?k(l.value):!1),R=_(()=>!o.value&&!r.value?!1:t.value.some(M=>he(M.formElement))),T=M=>{if(!k(i.value))return;const O=i.value(M);if((O==null?void 0:O.model)!==void 0)return U(O.model)};return{activeEditFocusColumnId:m,activeEditRowKey:d,activeEditModel:b,canAddRow:E,hasActiveEditRow:w,hasRequiredEditableColumns:R,isAddRowActive:s,onAddRow:()=>{w.value||!E.value||(d.value=void 0,b.value=T({rows:c.value}),m.value=void 0,s.value=!0)},onCancelEditRow:({trigger:M,id:O}={})=>{d.value=void 0,b.value=void 0,m.value=void 0,s.value=!1,M==="cancel"?setTimeout(()=>{le({selector:`#${O}_edit`})}):M==="save"&&setTimeout(()=>{le({selector:`#${O}`})})},onEditRow:({focusColumnId:M,row:O,rowIndex:H})=>{s.value||(b.value=T({row:O,rowIndex:H,rows:c.value}),m.value=M,d.value=a({row:O,rowIndex:H}))}}}function Ft(e){const t=n(e,"icons");return{iconsLocal:_(()=>({actionAddRow:Pe,...t.value}))}}function It(e){const t=n(e,"keyId"),a=n(e,"rows"),s=n(e,"rowsFooter"),l=_(()=>a.value.length>0),r=_(()=>s.value.length>0);return{getRowKey:({row:i,rowIndex:c,isFooter:d=!1})=>{let b=c;if(t.value){const w=I(i,t.value);ce(w)||(b=w)}return`${d?"footer":"body"}_${b}`},hasRows:l,hasRowsFooter:r}}function kt(e){const t=n(e,"texts");return{textsLocal:_(()=>({actionsColumn:"_A_TABLE_FORM_ACTIONS_",actionAddRow:"_A_TABLE_FORM_ADD_ROW_",actionDelete:"_A_TABLE_FORM_DELETE_",actionDeleteConfirmBody:"_A_TABLE_FORM_DELETE_CONFIRM_BODY_",actionDeleteConfirmClose:"_A_TABLE_FORM_DELETE_CONFIRM_CLOSE_",actionDeleteConfirmHeader:"_A_TABLE_FORM_DELETE_CONFIRM_HEADER_",actionDeleteConfirmSave:"_A_TABLE_FORM_DELETE_CONFIRM_SAVE_",actionEdit:"_A_TABLE_FORM_EDIT_",actionEditCancel:"_A_TABLE_FORM_EDIT_CANCEL_",actionEditSave:"_A_TABLE_FORM_EDIT_SAVE_",editInfoText:void 0,emptyText:"_A_TABLE_FORM_EMPTY_",reorderColumn:"_A_TABLE_FORM_REORDER_COLUMN_",reorderDisabled:"_A_TABLE_FORM_REORDER_DISABLED_",reorderDown:"_A_TABLE_FORM_MOVE_DOWN_",reorderHandle:"_A_TABLE_FORM_REORDER_",reorderUp:"_A_TABLE_FORM_MOVE_UP_",...t.value}))}}function xt(e){const t=n(e,"widths");return{widthsLocal:_(()=>({actionsColumnSingle:64,actionsColumnDouble:112,dndColumn:56,...t.value}))}}const Z={name:"ATableForm",props:{actionsClasses:{type:Object,required:!1,default:()=>({})},actionsDisabledCallback:{type:Object,required:!1,default:()=>({})},actionsHideCallback:{type:Object,required:!1,default:()=>({})},actionsTitleCallback:{type:Object,required:!1,default:()=>({})},addRow:{type:Function,required:!1,default:void 0},columns:{type:Array,required:!0},columnsDefaultValue:{type:[String,Number],required:!1,default:""},changeModel:{type:Function,required:!1,default:void 0},errorIcon:{type:String,required:!1,default:Ue},extra:{type:Object,required:!1,default:void 0},focusAfterMove:{type:Boolean,required:!1,default:!0},icons:{type:Object,required:!1,default:()=>({})},id:{type:String,required:!1,default:()=>Qe("a_table_form_")},isActionsSticky:{type:Boolean,required:!1,default:!1},isAddable:{type:Boolean,required:!1,default:!1},isColumnsGrow:{type:Boolean,required:!1,default:!1},isDeletable:{type:Boolean,required:!1,default:!1},isDeletableConfirm:{type:Boolean,required:!1,default:!1},isDragAndDrop:{type:Boolean,required:!1,default:!1},isEditable:{type:Boolean,required:!1,default:!1},isEditOnRowClick:{type:Boolean,required:!1,default:!1},keyId:{type:String,required:!1,default:void 0},label:{type:[String,Number],required:!1,default:""},labelClass:{type:[String,Object,Array],required:!1,default:void 0},labelTag:{type:String,required:!1,default:"h2"},prepareEditModel:{type:Function,required:!1,default:void 0},rowClass:{type:[String,Object,Array,Function],required:!1,default:void 0},rowView:{type:String,required:!1,default:"table",validator:e=>["list","table"].includes(e)},rows:{type:Array,required:!1,default:()=>[]},rowsFooter:{type:Array,required:!1,default:()=>[]},saveRow:{type:Function,required:!1,default:()=>{}},texts:{type:Object,required:!1,default:()=>({})},widths:{type:Object,required:!1,default:()=>({})}},emits:["deleteRow","moveRow","updateRows"],setup(e,t){const a=n(e,"actionsDisabledCallback"),s=n(e,"actionsTitleCallback"),l=y(!1),{allColumnsLength:r,columnsVisible:o,hasActionsColumn:i}=gt(e,{isAddRowActive:l}),{getRowKey:c,hasRows:d,hasRowsFooter:b}=It(e),{textsLocal:m}=kt(e),{widthsLocal:w}=xt(e),{iconsLocal:E}=Ft(e),{actionsClassesLocal:R}=Tt(e),{activeEditRowKey:T,activeEditModel:B,activeEditFocusColumnId:q,canAddRow:x,hasActiveEditRow:M,hasRequiredEditableColumns:O,onAddRow:H,onCancelEditRow:W,onEditRow:ee}=Ot(e,{columnsVisible:o,getRowKey:c,isAddRowActive:l}),{columnsStylesGrow:te,destroyColumnsGrowObserver:p,initColumnsGrowObserver:C}=Dt(e,{columnsVisible:o,hasActionsColumn:i,hasActiveEditRow:M,widthsLocal:w});He(()=>{C()}),$e(()=>{p()});const{canMoveRowDown:u,canMoveRowUp:h,dragOverPosition:v,dragOverRowIndex:A,draggedRowIndex:D,isDndDisabledForRow:S,isDndLockedForRow:L,moveRowDown:N,moveRowUp:j,onDragend:X,onDragleave:ie,onDragover:P,onDragstart:$,onDrop:be}=Mt(e,t,{isDndDisabled:M}),{onDeleteRow:we}=Lt(e,t),ve=_(()=>{if(M.value)return!0;const oe=I(a.value,"add");return k(oe)?oe():!1}),Ee=_(()=>{const oe=I(s.value,"add");return k(oe)?oe():m.value.actionAddRow});return{activeEditFocusColumnId:q,activeEditRowKey:T,activeEditModel:B,allColumnsLength:r,addTitle:Ee,canAddRow:x,canMoveRowDown:u,canMoveRowUp:h,actionsClassesLocal:R,columnsStylesGrow:te,columnsVisible:o,draggedRowIndex:D,dragOverPosition:v,dragOverRowIndex:A,isDndDisabledForRow:S,isDndLockedForRow:L,getRowKey:c,hasActionsColumn:i,hasActiveEditRow:M,hasRequiredEditableColumns:O,hasRows:d,hasRowsFooter:b,iconsLocal:E,isAddDisabled:ve,isAddRowActive:l,moveRowDown:N,moveRowUp:j,onAddRow:H,onCancelEditRow:W,onDeleteRow:we,onDragend:X,onDragleave:ie,onDragover:P,onDragstart:$,onDrop:be,onEditRow:ee,textsLocal:m,widthsLocal:w}},render(){return f("div",{class:"a_table_form"},[this.label&&f(z,{class:["a_table_form__label",this.labelClass],html:this.label,tag:this.labelTag}),this.hasRequiredEditableColumns&&f(De),f("div",{class:"a_table_form__wrapper"},[f("table",{id:this.id,class:["a_table_form__table",{a_table_form_drag_active:this.draggedRowIndex!==void 0,a_table_form__table_list:this.rowView==="list"}]},[this.rowView==="table"&&f("thead",{class:"a_table_form__head"},[f(se,{id:this.id,actionsClasses:this.actionsClasses,actionsDisabledCallback:this.actionsDisabledCallback,actionsHideCallback:this.actionsHideCallback,actionsTitleCallback:this.actionsTitleCallback,allColumnsLength:this.allColumnsLength,canMoveRowDown:this.canMoveRowDown,canMoveRowUp:this.canMoveRowUp,cellTag:"th",changeModel:this.changeModel,columns:this.columnsVisible,columnsStylesGrow:this.columnsStylesGrow,draggedRowIndex:this.draggedRowIndex,extra:this.extra,hasActionsColumn:this.hasActionsColumn,hasActiveEditRow:this.hasActiveEditRow,isActionsSticky:this.isActionsSticky,isActiveEditMode:!1,isDeletable:this.isDeletable,isDeletableConfirm:this.isDeletableConfirm,isDndDisabled:this.hasActiveEditRow,isDragAndDrop:this.isDragAndDrop,isEditable:this.isEditable,isEditOnRowClick:!1,isHeader:!0,moveRowDown:this.moveRowDown,moveRowUp:this.moveRowUp,onCancelEditRow:this.onCancelEditRow,onDeleteRow:this.onDeleteRow,onDragend:this.onDragend,onDragstart:this.onDragstart,onEditRow:this.onEditRow,row:{},rowIndex:0,rowView:this.rowView,rows:this.rows,saveRow:this.saveRow,texts:this.textsLocal,trClass:"a_table_form__row a_table_form__row_head",widths:this.widthsLocal},this.$slots)]),f("tbody",{class:"a_table_form__body"},this.hasRows||this.isAddRowActive?[...this.rows.map((e,t)=>{const a=this.getRowKey({row:e,rowIndex:t});return f(se,{key:a,id:this.id,actionsClasses:this.actionsClassesLocal,actionsDisabledCallback:this.actionsDisabledCallback,actionsHideCallback:this.actionsHideCallback,actionsTitleCallback:this.actionsTitleCallback,allColumnsLength:this.allColumnsLength,canMoveRowDown:this.canMoveRowDown,canMoveRowUp:this.canMoveRowUp,changeModel:this.changeModel,columns:this.columnsVisible,columnsStylesGrow:this.columnsStylesGrow,draggedRowIndex:this.draggedRowIndex,editModel:this.activeEditRowKey===a?this.activeEditModel:void 0,editFocusColumnId:this.activeEditRowKey===a?this.activeEditFocusColumnId:void 0,errorIcon:this.errorIcon,extra:this.extra,hasActionsColumn:this.hasActionsColumn,hasActiveEditRow:this.hasActiveEditRow,isActionsSticky:this.isActionsSticky,isActiveEditMode:this.activeEditRowKey===a,isCreateMode:!1,isDeletable:this.isDeletable,isDeletableConfirm:this.isDeletableConfirm,isDndDisabled:this.isDndDisabledForRow(t),isDndLocked:this.isDndLockedForRow(t),isDragAndDrop:this.isDragAndDrop,isEditable:this.isEditable,isEditOnRowClick:this.isEditOnRowClick,moveRowDown:this.moveRowDown,moveRowUp:this.moveRowUp,onCancelEditRow:this.onCancelEditRow,onDeleteRow:this.onDeleteRow,onDragend:this.onDragend,onDragleave:this.onDragleave,onDragover:this.onDragover,onDragstart:this.onDragstart,onDrop:this.onDrop,onEditRow:this.onEditRow,row:e,rowClass:this.rowClass,rowIndex:t,rowView:this.rowView,rows:this.rows,saveRow:this.saveRow,texts:this.textsLocal,widths:this.widthsLocal,trClass:["a_table_form__row",{a_table_form__row_drag_after:this.dragOverRowIndex===t&&this.dragOverPosition==="after",a_table_form__row_drag_before:this.dragOverRowIndex===t&&this.dragOverPosition==="before",a_table_form__row_drag_over:this.dragOverRowIndex===t,a_table_form__row_dragging:this.draggedRowIndex===t}]},this.$slots)}),this.isAddRowActive&&f(se,{id:this.id,actionsClasses:this.actionsClassesLocal,actionsDisabledCallback:this.actionsDisabledCallback,actionsHideCallback:this.actionsHideCallback,actionsTitleCallback:this.actionsTitleCallback,allColumnsLength:this.allColumnsLength,canMoveRowDown:this.canMoveRowDown,canMoveRowUp:this.canMoveRowUp,changeModel:this.changeModel,columns:this.columnsVisible,columnsStylesGrow:this.columnsStylesGrow,draggedRowIndex:this.draggedRowIndex,editModel:this.activeEditModel,errorIcon:this.errorIcon,extra:this.extra,hasActionsColumn:this.hasActionsColumn,hasActiveEditRow:this.hasActiveEditRow,isActionsSticky:this.isActionsSticky,isActiveEditMode:!0,isCreateMode:!0,isDeletable:!1,isDeletableConfirm:!1,isDndDisabled:!0,isDragAndDrop:this.isDragAndDrop,isEditable:!0,isEditOnRowClick:!1,key:"body_create",moveRowDown:this.moveRowDown,moveRowUp:this.moveRowUp,onCancelEditRow:this.onCancelEditRow,onDeleteRow:this.onDeleteRow,onDragend:this.onDragend,onDragleave:this.onDragleave,onDragover:this.onDragover,onDragstart:this.onDragstart,onDrop:this.onDrop,onEditRow:this.onEditRow,row:{},rowClass:this.rowClass,rowIndex:this.rows.length,rowView:this.rowView,rows:this.rows,saveRow:this.addRow,texts:this.textsLocal,trClass:"a_table_form__row a_table_form__row_create",widths:this.widthsLocal},this.$slots)]:[f("tr",{class:"a_table_form__row a_table_form__row_empty"},[f("td",{class:"a_table_form__cell a_table_form__empty",colspan:this.allColumnsLength},[f(z,{tag:"span",text:this.textsLocal.emptyText})])])]),this.hasRowsFooter&&f("tfoot",{class:"a_table_form__foot"},this.rowsFooter.map((e,t)=>f(se,{id:this.id,actionsClasses:this.actionsClassesLocal,actionsDisabledCallback:this.actionsDisabledCallback,actionsHideCallback:this.actionsHideCallback,actionsTitleCallback:this.actionsTitleCallback,allColumnsLength:this.allColumnsLength,canMoveRowDown:this.canMoveRowDown,canMoveRowUp:this.canMoveRowUp,changeModel:this.changeModel,columns:this.columnsVisible,columnsStylesGrow:this.columnsStylesGrow,draggedRowIndex:this.draggedRowIndex,extra:this.extra,hasActionsColumn:this.hasActionsColumn,hasActiveEditRow:this.hasActiveEditRow,isActionsSticky:this.isActionsSticky,isActiveEditMode:!1,isDeletable:this.isDeletable,isDeletableConfirm:this.isDeletableConfirm,isDndDisabled:this.hasActiveEditRow,isDragAndDrop:this.isDragAndDrop,isEditable:this.isEditable,isEditOnRowClick:!1,isFooter:!0,key:this.getRowKey({isFooter:!0,row:e,rowIndex:t}),moveRowDown:this.moveRowDown,moveRowUp:this.moveRowUp,onCancelEditRow:this.onCancelEditRow,onDeleteRow:this.onDeleteRow,onDragend:this.onDragend,onDragstart:this.onDragstart,onEditRow:this.onEditRow,row:e,rowClass:this.rowClass,rowIndex:t,rowView:this.rowView,rows:this.rowsFooter,saveRow:this.saveRow,texts:this.textsLocal,widths:this.widthsLocal,trClass:"a_table_form__row a_table_form__row_footer"},this.$slots)))])]),this.canAddRow&&f("div",{class:"a_mt_3 a_text_right"},[f(V,{class:this.actionsClassesLocal.addRow,disabled:this.isAddDisabled,extra:this.extra,iconLeft:this.iconsLocal.actionAddRow,text:this.textsLocal.actionAddRow,textScreenReader:this.addTitle,title:this.addTitle,onClick:this.onAddRow})])])}};function St(){return{codeHtml:`<a-simple-table
  :columns="columns"
  :rows-footer="rowsFooter"
  :rows="rows"
  key-id="id"
  label="_A_TABLE_FORM_EXAMPLE_LABEL_"
/>
`}}function Bt(){return{codeJs:`import {
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
};`}}const qt={name:"PageTableFormBasic",components:{AlohaExample:Q,ATableForm:Z},setup(){const{codeHtml:e}=St(),{codeJs:t}=Bt(),a=[{id:"position",label:"_A_TABLE_FORM_COLUMN_POSITION_",maxWidth:96,minWidth:96,width:96,formElement:{type:"number"}},{id:"name",label:"_A_TABLE_FORM_COLUMN_NAME_",maxWidth:"18rem",minWidth:"12rem",width:"16rem",formElement:{type:"text"}},{id:"team",formElement:{translateData:!0,data:[{label:"_A_TABLE_FORM_TEAM_NORTH_",value:"north"},{label:"_A_TABLE_FORM_TEAM_WEST_",value:"west"},{label:"_A_TABLE_FORM_TEAM_SOUTH_",value:"south"},{label:"_A_TABLE_FORM_TEAM_EAST_",value:"east"}],keyId:"value",keyLabel:"label",type:"select"},label:"_A_TABLE_FORM_COLUMN_TEAM_",minWidth:"12rem"},{id:"score",footerDefaultValue:"68",footerKeyLabel:"score",formElement:{type:"integer"},label:"_A_TABLE_FORM_COLUMN_SCORE_",maxWidth:120,minWidth:120,width:120}],s=y([{id:1,name:"Марта Иванова",position:1,score:18,team:"north"},{id:2,name:"Олег Сидоров",position:2,score:17,team:"west"},{id:3,name:"Анна Петрова",position:3,score:16,team:"south"},{id:4,name:"Игорь Ковалёв",position:4,score:17,team:"east"}]);return{codeHtml:e,codeJs:t,columns:a,rows:s,rowsFooter:[{name:"_A_TABLE_FORM_FOOTER_TOTAL_",score:68}]}}};function Nt(e,t,a,s,l,r){const o=g("a-table-form"),i=g("aloha-example");return J(),K(i,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TABLE_FORM_EXAMPLE_HEADER_"},{default:Y(()=>[F(o,{columns:e.columns,"rows-footer":e.rowsFooter,rows:e.rows,"key-id":"id",label:"_A_TABLE_FORM_EXAMPLE_LABEL_"},null,8,["columns","rows-footer","rows"])]),_:1},8,["code-html","code-js"])}const Pt=G(qt,[["render",Nt]]);function Ut(){return{codeHtml:`<a-table-form
  :actions-disabled-callback="actionsDisabledCallback"
  :columns="columns"
  :is-drag-and-drop="true"
  :rows-footer="rowsFooter"
  :rows="rows"
  key-id="id"
  label="_A_TABLE_FORM_EXAMPLE_LABEL_"
  @update-rows="updateRows"
/>
`}}function Ht(){return{codeJs:`import {
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
};`}}const $t={name:"PageTableFormDND",components:{AlohaExample:Q,ATableForm:Z},setup(){const{codeHtml:e}=Ut(),{codeJs:t}=Ht(),a=[{id:"position",label:"_A_TABLE_FORM_COLUMN_POSITION_",maxWidth:96,minWidth:96,width:96,formElement:{type:"text"}},{id:"name",formElement:{type:"text"},label:"_A_TABLE_FORM_COLUMN_NAME_",maxWidth:"18rem",minWidth:"12rem",width:"16rem"},{id:"team",formElement:{translateData:!0,data:[{label:"_A_TABLE_FORM_TEAM_NORTH_",value:"north"},{label:"_A_TABLE_FORM_TEAM_WEST_",value:"west"},{label:"_A_TABLE_FORM_TEAM_SOUTH_",value:"south"},{label:"_A_TABLE_FORM_TEAM_EAST_",value:"east"}],keyId:"value",keyLabel:"label",type:"select"},label:"_A_TABLE_FORM_COLUMN_TEAM_",minWidth:"12rem"},{id:"score",footerDefaultValue:"68",footerKeyLabel:"score",formElement:{type:"integer"},label:"_A_TABLE_FORM_COLUMN_SCORE_",maxWidth:120,minWidth:120,width:120}],s=y([{id:1,name:"Марта Иванова",position:1,score:18,team:"north"},{dndDisabled:!0,id:2,name:"Олег Сидоров",position:2,score:17,team:"west"},{id:3,name:"Анна Петрова",position:3,score:16,team:"south"},{id:4,name:"Игорь Ковалёв",position:4,score:17,team:"east"}]);return{codeHtml:e,codeJs:t,columns:a,actionsDisabledCallback:{dnd:({row:i})=>i.dndDisabled},rows:s,rowsFooter:[{name:"_A_TABLE_FORM_FOOTER_TOTAL_",score:68}],updateRows:({rows:i,trigger:c})=>{s.value=i,console.log("trigger",c)}}}};function Wt(e,t,a,s,l,r){const o=g("a-table-form"),i=g("aloha-example");return J(),K(i,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TABLE_FORM_DND_HEADER_",description:"_A_TABLE_FORM_DND_DESCRIPTION_",props:["actions-disabled-callback","is-drag-and-drop"]},{default:Y(()=>[F(o,{"actions-disabled-callback":e.actionsDisabledCallback,columns:e.columns,"is-drag-and-drop":!0,"rows-footer":e.rowsFooter,rows:e.rows,"key-id":"id",label:"_A_TABLE_FORM_EXAMPLE_LABEL_",onUpdateRows:e.updateRows},null,8,["actions-disabled-callback","columns","rows-footer","rows","onUpdateRows"])]),_:1},8,["code-html","code-js"])}const jt=G($t,[["render",Wt]]);function Vt(){return{codeHtml:`<a-checkbox>
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
`}}function Gt(){return{codeJs:`import {
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
};`}}const Jt={name:"PageTableFormEdit",components:{ACheckbox:ue,AlohaExample:Q,ATableForm:Z},setup(){const{codeHtml:e}=Vt(),{codeJs:t}=Gt(),a=[{label:"is-deletable-confirm",value:"is-deletable-confirm"},{label:"is-deletable",value:"is-deletable"},{label:"is-editable",value:"is-editable"},{label:"is-edit-on-row-click",value:"is-edit-on-row-click"},{label:"is-addable",value:"is-addable"}],s=y(["is-deletable-confirm","is-deletable","is-editable","is-edit-on-row-click","is-addable"]),l={actionEditCancel:"abbrechen",actionEditSave:"speichern",editInfoText:"Nur diese Zeile ist gerade im Bearbeitungsmodus."},r=[{id:"position",label:"_A_TABLE_FORM_COLUMN_POSITION_",maxWidth:96,minWidth:96,width:96,formElement:{controlsType:"none",type:"integer"}},{id:"name",formElement:{type:"text",required:!0},keyLabel:"name",label:"_A_TABLE_FORM_COLUMN_NAME_",maxWidth:"18rem",minWidth:"12rem",width:"16rem"},{id:"team",formElement:{data:[{label:"_A_TABLE_FORM_TEAM_NORTH_",value:"north"},{label:"_A_TABLE_FORM_TEAM_WEST_",value:"west"},{label:"_A_TABLE_FORM_TEAM_SOUTH_",value:"south"},{label:"_A_TABLE_FORM_TEAM_EAST_",value:"east"}],keyId:"value",keyLabel:"label",translateData:!0,type:"select"},label:"_A_TABLE_FORM_COLUMN_TEAM_",minWidth:"12rem"},{id:"score",footerDefaultValue:"68",footerKeyLabel:"score",formElement:{controlsType:"none",min:0,type:"integer"},label:"_A_TABLE_FORM_COLUMN_SCORE_",maxWidth:120,minWidth:120,width:120}],o=y([{id:1,name:"Marta Ivanova",position:1,score:18,team:"north"},{id:2,name:"Oleg Sidorov",position:2,score:17,team:"west"},{id:3,name:"Anna Petrova",position:3,score:16,team:"south"},{id:4,name:"Igor Kovalev",position:4,score:17,team:"east"}]);return{addRow:({model:m})=>{var E;console.log("model ",m);const w={};if((E=m.name)!=null&&E.trim()||(w.name=["Name ist erforderlich."]),m.team||(w.team=["Team ist erforderlich."]),m.score<18&&(w.score=["Score must be at least 18."]),Object.keys(w).length)return{errors:w};o.value.push({id:o.value.length+1,...m})},codeHtml:e,codeJs:t,columns:r,dataCheckbox:a,deleteRow:({row:m,rowIndex:w})=>{o.value.splice(w,1),console.log("row",m),console.log("rowIndex",w)},modelCheckbox:s,rows:o,rowsFooter:[{name:"_A_TABLE_FORM_FOOTER_TOTAL_",score:68}],saveRow:async({model:m,rowIndex:w})=>{var R;await new Promise(T=>{setTimeout(T,300)});const E={};if((R=m.name)!=null&&R.trim()||(E.name=["Name ist erforderlich."]),m.team||(E.team=["Team ist erforderlich."]),m.score<18&&(E.score=["Score must be at least 18."]),Object.keys(E).length)return{errors:E};o.value.splice(w,1,m)},texts:l}}};function Kt(e,t,a,s,l,r){const o=g("a-checkbox"),i=g("a-table-form"),c=g("aloha-example");return J(),K(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TABLE_FORM_EDIT_HEADER_",description:"_A_TABLE_FORM_EDIT_DESCRIPTION_",props:["is-addable","is-deletable","is-deletable-confirm","is-editable","save-row","texts"]},{default:Y(()=>[F(o,{class:"a_mb_4",modelValue:e.modelCheckbox,"onUpdate:modelValue":t[0]||(t[0]=d=>e.modelCheckbox=d),data:e.dataCheckbox,"translate-data":!0,"key-id":"value","key-label":"label"},null,8,["modelValue","data"]),F(i,{"add-row":e.addRow,columns:e.columns,"is-addable":e.modelCheckbox.includes("is-addable"),"is-deletable-confirm":e.modelCheckbox.includes("is-deletable-confirm"),"is-deletable":e.modelCheckbox.includes("is-deletable"),"is-edit-on-row-click":e.modelCheckbox.includes("is-edit-on-row-click"),"is-editable":e.modelCheckbox.includes("is-editable"),"rows-footer":e.rowsFooter,rows:e.rows,"save-row":e.saveRow,texts:e.texts,"key-id":"id",label:"_A_TABLE_FORM_EXAMPLE_LABEL_",onDeleteRow:e.deleteRow},null,8,["add-row","columns","is-addable","is-deletable-confirm","is-deletable","is-edit-on-row-click","is-editable","rows-footer","rows","save-row","texts","onDeleteRow"])]),_:1},8,["code-html","code-js"])}const Yt=G(Jt,[["render",Kt]]);function Xt(){return{codeHtml:`<a-checkbox
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
`}}function zt(){return{codeJs:`import {
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
};`}}const Qt={name:"PageTableFormGrow",components:{ACheckbox:ue,AlohaExample:Q,ATableForm:Z},setup(){const{codeHtml:e}=Xt(),{codeJs:t}=zt(),a=[{label:"is-deletable",value:"is-deletable"},{label:"is-editable",value:"is-editable"},{label:"is-drag-and-drop",value:"is-drag-and-drop"}],s=y(["is-deletable","is-editable"]),l=[{id:"position",label:"_A_TABLE_FORM_COLUMN_POSITION_",minWidth:96,width:96,grow:1,formElement:{controlsType:"none",type:"integer"}},{id:"name",formElement:{type:"text"},label:"_A_TABLE_FORM_COLUMN_NAME_",minWidth:"12rem",width:"16rem",grow:2},{id:"team",formElement:{data:[{label:"_A_TABLE_FORM_TEAM_NORTH_",value:"north"},{label:"_A_TABLE_FORM_TEAM_WEST_",value:"west"},{label:"_A_TABLE_FORM_TEAM_SOUTH_",value:"south"},{label:"_A_TABLE_FORM_TEAM_EAST_",value:"east"}],keyId:"value",keyLabel:"label",translateData:!0,type:"select"},label:"_A_TABLE_FORM_COLUMN_TEAM_",minWidth:"12rem",width:"12rem",grow:1},{id:"score",footerDefaultValue:"68",footerKeyLabel:"score",formElement:{controlsType:"none",min:0,type:"integer"},label:"_A_TABLE_FORM_COLUMN_SCORE_",minWidth:120,width:120,grow:1}],r=[{id:"position",label:"_A_TABLE_FORM_COLUMN_POSITION_",minWidth:96,width:96,grow:1,formElement:{controlsType:"none",type:"integer"}},{id:"name",formElement:{type:"text"},label:"_A_TABLE_FORM_COLUMN_NAME_",minWidth:"12rem",width:"16rem",grow:3}],o=y([{id:1,name:"Marta Ivanova",position:1,score:18,team:"north"},{id:2,name:"Oleg Sidorov",position:2,score:17,team:"west"},{id:3,name:"Anna Petrova",position:3,score:16,team:"south"},{id:4,name:"Igor Kovalev",position:4,score:17,team:"east"}]);return{codeHtml:e,codeJs:t,columns1:l,columns2:r,dataCheckbox:a,deleteRow:({rowIndex:m})=>{o.value.splice(m,1)},modelCheckbox:s,rows:o,rowsFooter:[{name:"_A_TABLE_FORM_FOOTER_TOTAL_",score:68}],saveRow:({model:m,rowIndex:w})=>{o.value.splice(w,1,m)},texts:{editInfoText:"Only one row can be edited at a time."}}}},Zt={class:"a_mb_4"};function eo(e,t,a,s,l,r){const o=g("a-checkbox"),i=g("a-table-form"),c=g("aloha-example");return J(),K(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TABLE_FORM_GROW_HEADER_",description:"_A_TABLE_FORM_GROW_DESCRIPTION_",props:["is-columns-grow","is-deletable","is-drag-and-drop","is-editable"]},{default:Y(()=>[F(o,{class:"a_mb_4",modelValue:e.modelCheckbox,"onUpdate:modelValue":t[0]||(t[0]=d=>e.modelCheckbox=d),data:e.dataCheckbox,"key-id":"value","key-label":"label"},null,8,["modelValue","data"]),We("div",Zt,[F(i,{columns:e.columns1,"is-columns-grow":!0,"is-deletable":e.modelCheckbox.includes("is-deletable"),"is-drag-and-drop":e.modelCheckbox.includes("is-drag-and-drop"),"is-editable":e.modelCheckbox.includes("is-editable"),"rows-footer":e.rowsFooter,rows:e.rows,"save-row":e.saveRow,texts:e.texts,"key-id":"id",label:"_A_TABLE_FORM_EXAMPLE_LABEL_",onDeleteRow:e.deleteRow},null,8,["columns","is-deletable","is-drag-and-drop","is-editable","rows-footer","rows","save-row","texts","onDeleteRow"])]),F(i,{columns:e.columns2,"is-columns-grow":!0,"is-deletable":e.modelCheckbox.includes("is-deletable"),"is-drag-and-drop":e.modelCheckbox.includes("is-drag-and-drop"),"is-editable":e.modelCheckbox.includes("is-editable"),"rows-footer":e.rowsFooter,rows:e.rows,"save-row":e.saveRow,texts:e.texts,"key-id":"id",label:"_A_TABLE_FORM_EXAMPLE_LABEL_",onDeleteRow:e.deleteRow},null,8,["columns","is-deletable","is-drag-and-drop","is-editable","rows-footer","rows","save-row","texts","onDeleteRow"])]),_:1},8,["code-html","code-js"])}const to=G(Qt,[["render",eo]]);function oo(){return{codeHtml:`<a-table-form
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
`}}function ao(){return{codeJs:`import {
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
};`}}const ne=({id:e,label:t,negativeId:a,positiveId:s,type:l="integer"})=>({id:e,label:t,formElement:{children:[{classColumn:"a_column a_column_6",controlsType:"none",id:a,label:"_A_TABLE_FORM_LIST_NEGATIVE_",type:l},{classColumn:"a_column a_column_6",controlsType:"none",id:s,label:"_A_TABLE_FORM_LIST_POSITIVE_",type:l}],classColumn:"a_column a_column_4",classColumns:"a_columns a_columns_count_12 a_columns_gap_2",type:"fieldset"}}),so={name:"PageTableFormList",components:{AlohaExample:Q,ATableForm:Z},setup(){const{codeHtml:e}=oo(),{codeJs:t}=ao(),a=[{id:"fundingTypes",label:"_A_TABLE_FORM_LIST_FUNDING_TYPES_",formElement:{classColumn:"a_column a_column_12",data:[{label:"_A_TABLE_FORM_LIST_FUNDING_TYPE_FEES_",value:"fees"},{label:"_A_TABLE_FORM_LIST_FUNDING_TYPE_TRAVEL_",value:"travel"},{label:"_A_TABLE_FORM_LIST_FUNDING_TYPE_INVESTMENT_",value:"investment"}],keyId:"value",keyLabel:"label",required:!0,translateData:!0,type:"multiselect"}},ne({id:"percentDeviation",label:"_A_TABLE_FORM_LIST_PERCENT_DEVIATION_",negativeId:"percentNegative",positiveId:"percentPositive"}),ne({id:"amountDeviation",label:"_A_TABLE_FORM_LIST_AMOUNT_DEVIATION_",negativeId:"amountNegative",positiveId:"amountPositive",type:"currency"}),ne({id:"shareDeviation",label:"_A_TABLE_FORM_LIST_SHARE_DEVIATION_",negativeId:"shareNegative",positiveId:"sharePositive"}),{id:"exceedAsError",label:"_A_TABLE_FORM_LIST_EXCEED_AS_ERROR_",formElement:{classColumn:"a_column a_column_12",type:"oneCheckbox"}},{id:"validationMessage",label:"_A_TABLE_FORM_LIST_VALIDATION_MESSAGE_",formElement:{classColumn:"a_column a_column_12",required:!0,rows:2,type:"textarea"}}],s=y([{amountNegative:5300,amountPositive:5300,exceedAsError:!0,fundingTypes:["fees","travel","investment"],id:1,percentNegative:20,percentPositive:20,shareNegative:10,sharePositive:5,validationMessage:"The configured deviation threshold was exceeded."},{amountNegative:2500,amountPositive:3e3,exceedAsError:!1,fundingTypes:["travel"],id:2,percentNegative:10,percentPositive:15,shareNegative:4,sharePositive:6,validationMessage:"Please verify the entered values."}]),l=d=>{var m,w;const b={};return(m=d.fundingTypes)!=null&&m.length||(b.fundingTypes=["_A_TABLE_FORM_LIST_ERROR_REQUIRED_"]),(w=d.validationMessage)!=null&&w.trim()||(b.validationMessage=["_A_TABLE_FORM_LIST_ERROR_REQUIRED_"]),b};return{addRow:({model:d})=>{const b=l(d);if(Object.keys(b).length)return{errors:b};s.value.push({...d,id:Math.max(0,...s.value.map(m=>m.id))+1})},codeHtml:e,codeJs:t,columns:a,deleteRow:({rowIndex:d})=>{s.value.splice(d,1)},rows:s,saveRow:({model:d,rowIndex:b})=>{const m=l(d);if(Object.keys(m).length)return{errors:m};s.value.splice(b,1,d)},updateRows:({rows:d})=>{s.value=d}}}};function lo(e,t,a,s,l,r){const o=g("a-table-form"),i=g("aloha-example");return J(),K(i,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TABLE_FORM_LIST_HEADER_",description:"_A_TABLE_FORM_LIST_DESCRIPTION_",props:["row-view"]},{default:Y(()=>[F(o,{"add-row":e.addRow,columns:e.columns,"is-addable":!0,"is-deletable-confirm":!0,"is-drag-and-drop":!0,"is-editable":!0,rows:e.rows,"save-row":e.saveRow,"key-id":"id",label:"_A_TABLE_FORM_LIST_LABEL_","row-view":"list",onDeleteRow:e.deleteRow,onUpdateRows:e.updateRows},null,8,["add-row","columns","rows","save-row","onDeleteRow","onUpdateRows"])]),_:1},8,["code-html","code-js"])}const io=G(so,[["render",lo]]);function ro(){return{codeHtml:`<a-one-checkbox
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
`}}function no(){return{codeJs:`import {
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
};`}}const co={name:"PageTableFormSticky",components:{AlohaExample:Q,AOneCheckbox:Le,ATableForm:Z},setup(){const{codeHtml:e}=ro(),{codeJs:t}=no(),a=y(!0),s=Array.from({length:20},(r,o)=>{const i=o+1;return{id:`c${i}`,label:`${i}`,maxWidth:120,minWidth:120,width:120,formElement:{controlsType:"none",type:"integer"}}}),l=y(Array.from({length:6},(r,o)=>{const i={id:o+1};return s.forEach((c,d)=>{i[c.id]=(o+1)*100+d+1}),i}));return{codeHtml:e,codeJs:t,columns:s,isActionsSticky:a,rows:l}}};function uo(e,t,a,s,l,r){const o=g("a-one-checkbox"),i=g("a-table-form"),c=g("aloha-example");return J(),K(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TABLE_FORM_STICKY_HEADER_",description:"_A_TABLE_FORM_STICKY_DESCRIPTION_",props:["is-actions-sticky","is-deletable-confirm","is-editable"]},{default:Y(()=>[F(o,{class:"a_mb_4",modelValue:e.isActionsSticky,"onUpdate:modelValue":t[0]||(t[0]=d=>e.isActionsSticky=d),label:"isActionsSticky"},null,8,["modelValue"]),F(i,{columns:e.columns,"is-actions-sticky":e.isActionsSticky,"is-deletable-confirm":!0,"is-editable":!0,rows:e.rows,"key-id":"id",label:"20 columns"},null,8,["columns","is-actions-sticky","rows"])]),_:1},8,["code-html","code-js"])}const _o=G(co,[["render",uo]]);function mo(){return{pageTitle:_(()=>Me({placeholder:"_A_TABLE_FORM_PAGE_TITLE_"}))}}const fo={name:"PageTableForm",components:{AlohaPage:Ae,PageTableFormBasic:Pt,PageTableFormDND:jt,PageTableFormEdit:Yt,PageTableFormGrow:to,PageTableFormList:io,PageTableFormSticky:_o},setup(){const{pageTitle:e}=mo();return{pageTitle:e}}};function ho(e,t,a,s,l,r){const o=g("page-table-form-basic"),i=g("page-table-form-d-n-d"),c=g("page-table-form-edit"),d=g("page-table-form-list"),b=g("page-table-form-sticky"),m=g("page-table-form-grow"),w=g("aloha-page");return J(),K(w,{"page-title":e.pageTitle},{body:Y(()=>[F(o),F(i),F(c),F(d),F(b),F(m)]),_:1},8,["page-title"])}const Fo=G(fo,[["render",ho]]);export{Fo as default};
