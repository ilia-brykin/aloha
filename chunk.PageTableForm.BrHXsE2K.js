import{A as Y,a as we}from"./chunk.AlohaExample.WQRa5PG2.js";import{d as ve,s as ae,A as K,c as W,b as Ae,e as Ee,f as Re,h as pe,i as Te,j as ye,k as De,_ as j,l as de,m as ge,g as Ce}from"./bundle.index.rCR1ohfK.js";import{t as l,d as _,h as m,M as re,l as Le,aX as Me,L as Oe,O as Fe,C as Ie,aY as xe,aZ as ke,g as Se,r as g,j as Be,P as qe,E as Ne,z as Pe,o as Ue,Y as V,W as G,aU as J,f as D,$ as M,_ as He}from"./chunk.vendor.BEEJbev-.js";import{i as $e,j as x,r as k,a as ne,l as N,M as We,T as je,v as Ve,h as Ge,W as Je,d as Ke,b as Ye,u as Xe}from"./chunk.vendor-lodash.CwOx-Q_g.js";import{A as ze}from"./chunk.AFormElement.eRRDqq03.js";import"./chunk.APageTabTitle.DaiwHevB.js";import"./chunk.AlohaHighlightjs.De6fh8wy.js";import"./chunk.translations-ar.C-5fhGmj.js";import"./chunk.translations-de.DCUTmhwe.js";import"./chunk.translations-en.BwLyv-AK.js";import"./chunk.translations-es.CHkqKKCX.js";import"./chunk.translations-fr.CiNnfS8h.js";import"./chunk.translations-hr.BtDa3-Lh.js";import"./chunk.translations-it.BSfWCMA4.js";import"./chunk.translations-ru.CAQSfiHN.js";function Qe(e){const t=l(e,"column"),o=l(e,"isEditable"),a=l(e,"isEditMode");return{disabledLocal:_(()=>{var n,s;return!!((s=(n=t.value)==null?void 0:n.formElement)!=null&&s.disabled)||o.value&&!a.value})}}function Ze(e){const t=l(e,"column"),o=l(e,"isEditable"),a=l(e,"isEditMode"),r=l(e,"isFooter");return{readonlyLocal:_(()=>{var s,i,c,d;return r.value?!0:o.value?(i=(s=t.value)==null?void 0:s.formElement)!=null&&i.useRowReadonly?!a.value:!!((d=(c=t.value)==null?void 0:c.formElement)!=null&&d.readonly):!0})}}function et(e){const t=l(e,"column"),o=l(e,"isFooter"),a=_(()=>o.value?t.value.footerSlot:t.value.slot),r=_(()=>o.value?t.value.footerSlotAfter:t.value.slotAfter),n=_(()=>!!a.value),s=_(()=>!!r.value);return{hasSlot:n,hasSlotAfter:s,slotName:a,slotNameAfter:r}}function le(e){if(!(e==null||e===""))return typeof e=="number"?`${e}px`:e}function ce(e){const t=l(e,"column");return{columnStyles:_(()=>{const a={},r=le(t.value.width),n=le(t.value.maxWidth),s=le(t.value.minWidth);return r&&(a.width=r),n&&(a.maxWidth=n),s&&(a.minWidth=s),$e(t.value.style)?{...a,...t.value.style}:t.value.style?[a,t.value.style]:a})}}const tt={name:"ATableFormCell",props:{column:{type:Object,required:!0},columnIndex:{type:Number,required:!0},columnStyle:{type:Object,required:!1,default:void 0},errorIcon:{type:String,required:!1,default:void 0},errors:{type:Object,required:!1,default:()=>({})},id:{type:String,required:!0},isEditMode:{type:Boolean,required:!1,default:!1},isEditable:{type:Boolean,required:!1,default:!1},isFooter:{type:Boolean,required:!1,default:!1},row:{type:Object,required:!0},rowData:{type:Object,required:!1,default:void 0},rowIndex:{type:Number,required:!0},rows:{type:Array,required:!0},tag:{type:String,required:!1,default:"td"}},emits:["updateRowData"],setup(e){const{columnStyles:t}=ce({column:e.column}),{readonlyLocal:o}=Ze(e),{disabledLocal:a}=Qe(e),{hasSlot:r,hasSlotAfter:n,slotName:s,slotNameAfter:i}=et(e),c=_(()=>e.rowData||e.row);return{columnStyles:t,disabledLocal:a,hasSlot:r,hasSlotAfter:n,readonlyLocal:o,rowDataLocal:c,slotName:s,slotNameAfter:i}},methods:{updateRowData({item:e,model:t}){this.$emit("updateRowData",{column:this.column,columnId:this.column.id,item:e,model:t,value:t})}},render(){const{type:e="text",...t}=this.column.formElement||{},o={column:this.column,columnIndex:this.columnIndex,row:this.row,rowIndex:this.rowIndex,rows:this.rows};return m(this.tag,{class:["a_table_form__cell",`a_table_form__cell_${this.tag}`,this.column.class,this.isFooter?this.column.classFooter:this.column.classRow],style:[this.columnStyles,this.columnStyle]},[this.hasSlot&&this.$slots[this.slotName]?this.$slots[this.slotName](o):m(ze,{id:this.column.id,errorIcon:this.errorIcon,idPrefix:this.id,...t,change:this.updateRowData,disabled:this.disabledLocal,errors:x(this.errors,this.column.id),errorsClass:"a_sr_only",modelValue:x(this.rowDataLocal,this.column.id),readonly:this.readonlyLocal,type:e}),this.hasSlotAfter&&this.$slots[this.slotNameAfter]?this.$slots[this.slotNameAfter](o):null])}};function ot(e,{idBtnDelete:t=_(()=>""),isActionsDisabled:o=_(()=>!1)}){const a=l(e,"id"),r=l(e,"isDeletable"),n=l(e,"isDeletableConfirm"),s=l(e,"onDeleteRow"),i=l(e,"row"),c=l(e,"rowIndex"),d=l(e,"texts"),{closeConfirm:f,openConfirm:h}=ve(),w=()=>{f(),re().then(()=>{ae({selector:`#${t.value}`})})},R=()=>{h({bodyHtml:d.value.actionDeleteConfirmBody,closeButtonText:d.value.actionDeleteConfirmClose,headerText:d.value.actionDeleteConfirmHeader,save:async()=>{await s.value({btnDeleteId:t.value,row:i.value,rowIndex:c.value,rowId:a.value}),f()},close:w,saveButtonText:d.value.actionDeleteConfirmSave})};return{onDeleteClick:()=>{if(!o.value){if(n.value){R();return}r.value&&s.value({btnDeleteId:t.value,row:i.value,rowIndex:c.value,rowId:a.value})}}}}function at(e){const t=l(e,"actionsDisabledCallback"),o=l(e,"hasActiveEditRow"),a=l(e,"isActiveEditMode"),r=l(e,"row"),n=l(e,"rowIndex"),s=_(()=>o.value&&!a.value),i=_(()=>{if(s.value)return!0;const d=x(t.value,"delete");return k(d)?d({row:r.value,rowIndex:n.value}):!1}),c=_(()=>{if(s.value)return!0;const d=x(t.value,"edit");return k(d)?d({row:r.value,rowIndex:n.value}):!1});return{isDeleteDisabled:i,isEditDisabled:c}}function st(e){const t=l(e,"actionsHideCallback"),o=l(e,"row"),a=l(e,"rowIndex"),r=_(()=>{const s=x(t.value,"delete");return k(s)?s({row:o.value,rowIndex:a.value}):!1}),n=_(()=>{const s=x(t.value,"edit");return k(s)?s({row:o.value,rowIndex:a.value}):!1});return{isDeleteHidden:r,isEditHidden:n}}function lt(e){const t=l(e,"id"),o=_(()=>`${t.value}_delete`),a=_(()=>`${t.value}_edit`),r=_(()=>`${t.value}_cancel`),n=_(()=>`${t.value}_save`);return{idBtnCancel:r,idBtnDelete:o,idBtnEdit:a,idBtnSave:n}}function it(e){const t=l(e,"isDeletable"),o=l(e,"isDeletableConfirm"),a=l(e,"isEditable"),r=l(e,"isActiveEditMode"),n=l(e,"widths");return{columnStyles:_(()=>{const i=t.value||o.value,c=a.value||r.value&&i?n.value.actionsColumnDouble:n.value.actionsColumnSingle;return{maxWidth:`${c}px`,minWidth:`${c}px`,width:`${c}px`}})}}function rt(e){const t=l(e,"row"),o=l(e,"rowIndex"),a=l(e,"texts"),r=l(e,"actionsTitleCallback"),n=_(()=>{const i=x(r.value,"delete");return k(i)?i({row:t.value,rowIndex:o.value}):a.value.actionDelete}),s=_(()=>{const i=x(r.value,"edit");return k(i)?i({row:t.value,rowIndex:o.value}):a.value.actionEdit});return{deleteTitle:n,editTitle:s}}const nt={name:"ATableFormCellAction",props:{actionsClasses:{type:Object,required:!1,default:()=>({})},actionsDisabledCallback:{type:Object,required:!1,default:()=>({})},actionsHideCallback:{type:Object,required:!1,default:()=>({})},actionsTitleCallback:{type:Object,required:!1,default:()=>({})},extra:{type:Object,required:!1,default:void 0},hasActiveEditRow:{type:Boolean,required:!1,default:!1},id:{type:String,required:!0},isActionsSticky:{type:Boolean,required:!1,default:!1},isActiveEditMode:{type:Boolean,required:!1,default:!1},isDeletable:{type:Boolean,required:!1,default:!1},isDeletableConfirm:{type:Boolean,required:!1,default:!1},isEditable:{type:Boolean,required:!1,default:!1},isFooter:{type:Boolean,required:!1,default:!1},isHeader:{type:Boolean,required:!1,default:!1},isSaving:{type:Boolean,required:!1,default:!1},onCancelEditRow:{type:Function,required:!0},onDeleteRow:{type:Function,required:!0},onEditRow:{type:Function,required:!0},onSaveEditRow:{type:Function,required:!0},row:{type:Object,required:!0},rowIndex:{type:Number,required:!0},texts:{type:Object,required:!1,default:()=>({})},widths:{type:Object,required:!1,default:()=>({})}},setup(e){const{isDeleteDisabled:t,isEditDisabled:o}=at(e),{isDeleteHidden:a,isEditHidden:r}=st(e),{idBtnCancel:n,idBtnDelete:s,idBtnEdit:i,idBtnSave:c}=lt(e),{onDeleteClick:d}=ot(e,{idBtnDelete:s,isActionsDisabled:t}),{columnStyles:f}=it(e),{deleteTitle:h,editTitle:w}=rt(e);return{columnStyles:f,deleteTitle:h,editTitle:w,idBtnCancel:n,idBtnDelete:s,idBtnEdit:i,idBtnSave:c,isDeleteDisabled:t,isDeleteHidden:a,isEditDisabled:o,isEditHidden:r,onDeleteClick:d}},render(){const e=this.isHeader?"th":"td";return m(e,{class:["a_table_form__cell",`a_table_form__cell_${e}`,"a_table_form__cell_actions",{a_table_form__cell_actions_sticky:this.isActionsSticky}],style:this.columnStyles},[this.isHeader?m("span",{class:"a_sr_only"},[m(K,{tag:"span",text:this.texts.actionsColumn})]):this.isFooter?null:m("div",{class:"a_table_form__actions",role:"group"},this.isActiveEditMode?[m(W,{id:this.idBtnCancel,class:["a_table_form__action_button",this.actionsClasses.editCancel],disabled:this.isSaving,extra:this.extra,iconLeft:Le,title:this.texts.actionEditCancel,textScreenReader:this.texts.actionEditCancel,onClick:()=>this.onCancelEditRow({id:this.id,row:this.row,rowIndex:this.rowIndex,trigger:"cancel"})}),m(W,{id:this.idBtnSave,class:["a_table_form__action_button",this.actionsClasses.editSave],disabled:this.isSaving,extra:this.extra,iconLeft:Me,title:this.texts.actionEditSave,textScreenReader:this.texts.actionEditSave,onClick:()=>this.onSaveEditRow({id:this.id,row:this.row,rowIndex:this.rowIndex})})]:[(this.isDeletable||this.isDeletableConfirm)&&!this.isDeleteHidden&&m(W,{id:this.idBtnDelete,class:["a_table_form__action_button",this.actionsClasses.delete],disabled:this.isDeleteDisabled,extra:this.extra,iconLeft:Oe,title:this.deleteTitle,textScreenReader:this.deleteTitle,onClick:this.onDeleteClick}),this.isEditable&&!this.isEditHidden&&m(W,{id:this.idBtnEdit,class:["a_table_form__action_button",this.actionsClasses.edit],disabled:this.isEditDisabled,extra:this.extra,iconLeft:Fe,title:this.editTitle,textScreenReader:this.editTitle,onClick:()=>this.onEditRow({id:this.id,row:this.row,rowIndex:this.rowIndex})})])])}};function dt(e){const t=l(e,"id"),o=_(()=>`${t.value}_up`);return{idBtnDown:_(()=>`${t.value}_down`),idBtnUp:o}}const ct={name:"ATableFormCellDnd",props:{canMoveRowDown:{type:Function,required:!0},canMoveRowUp:{type:Function,required:!0},id:{type:String,required:!0},isCreateMode:{type:Boolean,required:!1,default:!1},isDragAndDrop:{type:Boolean,required:!1,default:!1},isDndDisabled:{type:Boolean,required:!1,default:!1},isFooter:{type:Boolean,required:!1,default:!1},isHeader:{type:Boolean,required:!1,default:!1},moveRowDown:{type:Function,required:!0},moveRowUp:{type:Function,required:!0},onDragend:{type:Function,required:!0},onDragstart:{type:Function,required:!0},rowIndex:{type:Number,required:!0},texts:{type:Object,required:!1,default:()=>({})},widths:{type:Object,required:!1,default:()=>({})}},setup(e){const{idBtnDown:t,idBtnUp:o}=dt(e);return{columnStyles:_(()=>({maxWidth:`${e.widths.dndColumn}px`,minWidth:`${e.widths.dndColumn}px`,width:`${e.widths.dndColumn}px`})),idBtnDown:t,idBtnUp:o}},render(){const e=this.isHeader?"th":"td",t=this.isDragAndDrop&&!this.isDndDisabled;return m(e,{class:["a_table_form__cell",`a_table_form__cell_${e}`,"a_table_form__cell_reorder"],style:this.columnStyles},[this.isHeader?m("span",{class:"a_sr_only"},[m(K,{tag:"span",text:this.texts.reorderColumn})]):this.isCreateMode||this.isFooter?null:m("div",{class:"a_table_form__reorder_actions"},[this.canMoveRowUp(this.rowIndex)&&m(W,{id:this.idBtnUp,class:"a_sr_only_focusable a_btn a_btn_transparent_dark a_table_form__reorder_button",disabled:this.isDndDisabled,iconLeft:Ie,preventKeyboardRepeat:!0,tabindex:this.isDndDisabled?-1:void 0,title:this.texts.reorderUp,textScreenReader:this.texts.reorderUp,onClick:()=>this.moveRowUp(this.rowIndex)}),m("span",{ariaHidden:!0,class:["a_table_form__reorder_handle",{a_table_form__reorder_handle_disabled:this.isDndDisabled}],draggable:t,onDragend:t?this.onDragend:void 0,onDragstart:t?o=>this.onDragstart(o,this.rowIndex):void 0},[m(Ae,{class:"a_table_form__reorder_icon",icon:this.isDndDisabled?xe:ke})]),m("span",{class:"a_sr_only"},[m(K,{tag:"span",text:this.isDndDisabled?this.texts.reorderDisabled:this.texts.reorderHandle})]),this.canMoveRowDown(this.rowIndex)&&m(W,{id:this.idBtnDown,class:"a_sr_only_focusable a_btn a_btn_transparent_dark a_table_form__reorder_button",disabled:this.isDndDisabled,iconLeft:Se,preventKeyboardRepeat:!0,tabindex:this.isDndDisabled?-1:void 0,title:this.texts.reorderDown,textScreenReader:this.texts.reorderDown,onClick:()=>this.moveRowDown(this.rowIndex)})])])}};function ue(e,{isEditMode:t,isRowDisabled:o}={}){var r;const a=N(e||{});return a.useRowReadonly&&(a.readonly=!t),(r=a.children)!=null&&r.length&&(a.children=a.children.map(n=>ue(n,{isEditMode:t}))),o&&(a.disabled=!0),a}function ut(e){const t=l(e,"columns"),o=l(e,"isEditable"),a=l(e,"isEditMode");return{dataForm:_(()=>{const n=o.value&&!a.value;return t.value.map(s=>{const i=ue(s.formElement,{isEditMode:a.value,isRowDisabled:n});return i.id=s.id,ne(i.label)&&(i.label=s.label),i})})}}function _e(e,t){return(e==null?void 0:e.some(o=>(o==null?void 0:o.id)===t||_e(o==null?void 0:o.children,t)))||!1}const _t={name:"ATableFormCellList",props:{columns:{type:Array,required:!0},errors:{type:Object,required:!1,default:()=>({})},id:{type:String,required:!0},isEditable:{type:Boolean,required:!1,default:!1},isEditMode:{type:Boolean,required:!1,default:!1},isFooter:{type:Boolean,required:!1,default:!1},row:{type:Object,required:!0},rowData:{type:Object,required:!1,default:void 0},rowIndex:{type:Number,required:!0},rows:{type:Array,required:!0}},emits:["updateRowData"],setup(e){const{dataForm:t}=ut(e);return{dataForm:t,rowDataLocal:_(()=>e.rowData||e.row)}},methods:{updateRowData({fullModel:e,id:t,item:o,model:a}){const r=this.columns.find(n=>{var s;return n.id===t||_e((s=n.formElement)==null?void 0:s.children,t)});this.$emit("updateRowData",{column:r,columnId:t,fullModel:e,item:o,model:a})}},render(){return m("td",{class:["a_table_form__cell","a_table_form__cell_td","a_table_form__cell_list"]},[m(Ee,{data:this.dataForm,errors:this.errors,idPrefix:this.id,modelValue:this.rowDataLocal,readonly:this.isFooter||!this.isEditable,showErrors:!0,showRequiredText:!1,tag:"div",useFlatErrors:!0,useFlatModel:!0,onChange:this.updateRowData},this.$slots)])}},mt={name:"ATableFormTh",props:{column:{type:Object,required:!0},columnStyle:{type:Object,required:!1,default:void 0},isEditable:{type:Boolean,required:!1,default:!1}},setup(e){const{columnStyles:t}=ce({column:e.column});return{columnStyles:t}},render(){var e;return m("th",{class:["a_table_form__cell","a_table_form__cell_th",this.column.class],style:[this.columnStyles,this.columnStyle]},[this.column.slotHeader&&this.$slots[this.column.slotHeader]?this.$slots[this.column.slotHeader]({column:this.column,isEditable:this.isEditable}):this.column.label&&m(K,{html:this.column.label,tag:"span"}),this.isEditable&&((e=this.column.formElement)==null?void 0:e.required)&&m("span",{class:"a_label__required"},"*")])}};function ft(e,{hasErrors:t=_(()=>!1)}){const o=l(e,"hasActiveEditRow"),a=l(e,"isActiveEditMode"),r=l(e,"isCreateMode"),n=l(e,"isFooter"),s=l(e,"isHeader"),i=l(e,"row"),c=l(e,"rowClass"),d=l(e,"rowIndex"),f=l(e,"trClass"),h=_(()=>k(c.value)?c.value({row:i.value,rowIndex:d.value,rowindex:d.value,isCreateMode:r.value,isFooter:n.value,isHeader:s.value}):c.value),w=_(()=>[f.value,h.value,{a_table_form__row_active:!s.value&&!n.value&&a.value,a_table_form__row_errors:!s.value&&!n.value&&t.value,a_table_form__row_inactive:!s.value&&!n.value&&o.value&&!a.value}]);return{rowClassLocal:h,trClassLocal:w}}function ht(e,{errorsLocal:t=g(void 0)}){const o=l(e,"changeModel"),a=l(e,"onCancelEditRow"),r=l(e,"row"),n=l(e,"rows"),s=l(e,"rowIndex"),i=l(e,"saveRow"),c=g(!1),d=g(void 0),f=({column:R,columnId:A,fullModel:O,item:S,model:q})=>{d.value||(d.value=N(r.value)||{});let y;o.value&&(y=o.value({modelAll:d.value,row:r.value,column:R,fullModel:O,model:q,item:S})),y!=null&&y.model?d.value=N(y.model):O!==void 0?d.value=N(O):We(d.value,A,q),je(t.value,A)},h=({trigger:R,id:A}={})=>{a.value({row:r.value,rowIndex:s.value,trigger:R,id:A})};return{cancelEditRow:h,isSaving:c,modelLocal:d,saveEditRow:async({id:R}={})=>{if(!c.value){t.value={},c.value=!0;try{const A=await i.value({model:N(d.value),row:r.value,rowIndex:s.value,rows:n.value});if(A!=null&&A.errors){t.value=N(A.errors);return}h({trigger:"save",id:R})}catch(A){t.value=A}finally{c.value=!1}}},updateModelLocal:f}}function bt(e){const t=l(e,"columns"),o=g({}),a=_(()=>!Ve(o.value)),r=_(()=>{const n=[];return Ge(t.value,s=>{const i=N(s.formElement)||{};i.type=i.type||"text",i.label=i.label||s.label,i.id=i.id||s.id,n.push(i)}),n});return{errorsLocal:o,hasErrors:a,optionsListForErrors:r}}function wt({idTr:e=_(()=>"")}){return{focusFirstEditableElement:()=>{const o=document.getElementById(e.value);if(!o)return;const r=Array.from(o.querySelectorAll(".a_table_form__cell:not(.a_table_form__cell_actions)")).map(n=>n.querySelector(Re)).find(Boolean);r==null||r.focus()}}}function vt(e){const t=l(e,"id"),o=l(e,"isHeader"),a=l(e,"isFooter"),r=l(e,"rowIndex");return{idTr:_(()=>`${t.value}_${r.value}${o.value?"_header":""}${a.value?"_footer":""}`)}}const oe={name:"ATableFormRow",props:{actionsClasses:{type:Object,required:!1,default:()=>({})},actionsDisabledCallback:{type:Object,required:!1,default:()=>({})},actionsHideCallback:{type:Object,required:!1,default:()=>({})},actionsTitleCallback:{type:Object,required:!1,default:()=>({})},allColumnsLength:{type:Number,required:!0},canMoveRowDown:{type:Function,required:!0},canMoveRowUp:{type:Function,required:!0},cellTag:{type:String,required:!1,default:void 0},changeModel:{type:Function,required:!1,default:void 0},columns:{type:Array,required:!0},columnsStylesGrow:{type:Object,required:!1,default:()=>({})},draggedRowIndex:{type:Number,required:!1,default:void 0},editModel:{type:Object,required:!1,default:void 0},errorIcon:{type:String,required:!1,default:void 0},extra:{type:Object,required:!1,default:void 0},hasActionsColumn:{type:Boolean,required:!1,default:!1},hasActiveEditRow:{type:Boolean,required:!1,default:!1},id:{type:String,required:!0},isActionsSticky:{type:Boolean,required:!1,default:!1},isActiveEditMode:{type:Boolean,required:!1,default:!1},isCreateMode:{type:Boolean,required:!1,default:!1},isDeletable:{type:Boolean,required:!1,default:!1},isDeletableConfirm:{type:Boolean,required:!1,default:!1},isDndDisabled:{type:Boolean,required:!1,default:!1},isDragAndDrop:{type:Boolean,required:!1,default:!1},isEditable:{type:Boolean,required:!1,default:!1},isFooter:{type:Boolean,required:!1,default:!1},isHeader:{type:Boolean,required:!1,default:!1},moveRowDown:{type:Function,required:!0},moveRowUp:{type:Function,required:!0},onCancelEditRow:{type:Function,required:!0},onDeleteRow:{type:Function,required:!0},onDragend:{type:Function,required:!0},onDragleave:{type:Function,required:!1,default:void 0},onDragover:{type:Function,required:!1,default:void 0},onDragstart:{type:Function,required:!0},onDrop:{type:Function,required:!1,default:void 0},onEditRow:{type:Function,required:!0},row:{type:Object,required:!0},rowClass:{type:[String,Object,Array,Function],required:!1,default:void 0},rowIndex:{type:Number,required:!0},rows:{type:Array,required:!0},rowView:{type:String,required:!1,default:"table"},saveRow:{type:Function,required:!0},texts:{type:Object,required:!1,default:()=>({})},trClass:{type:[String,Object,Array],required:!1,default:void 0},widths:{type:Object,required:!1,default:()=>({})}},setup(e){const{idTr:t}=vt(e),{focusFirstEditableElement:o}=wt({idTr:t}),{errorsLocal:a,hasErrors:r,optionsListForErrors:n}=bt(e),{rowClassLocal:s,trClassLocal:i}=ft(e,{hasErrors:r}),{cancelEditRow:c,isSaving:d,modelLocal:f,saveEditRow:h,updateModelLocal:w}=ht(e,{errorsLocal:a});return{cancelEditRow:c,errorsLocal:a,focusFirstEditableElement:o,hasErrors:r,rowClassLocal:s,idTr:t,isSaving:d,modelLocal:f,optionsListForErrors:n,saveEditRow:h,trClassLocal:i,updateModelLocal:w}},computed:{currentRowData(){return this.isActiveEditMode&&this.modelLocal?this.modelLocal:this.row}},watch:{isActiveEditMode:{immediate:!0,handler(e){if(e){this.modelLocal=N(this.editModel===void 0?this.row:this.editModel),this.errorsLocal={},re(()=>{this.focusFirstEditableElement()});return}this.errorsLocal={},this.isSaving=!1}}},render(){const e=[];return this.isActiveEditMode&&this.texts.editInfoText&&e.push(m("tr",{class:"a_table_form__row a_table_form__row_info",key:`info_${this.rowIndex}`},[m("td",{class:"a_table_form__cell a_table_form__cell_info",colspan:this.allColumnsLength},[m(pe,{alertClass:"a_table_form__info",html:this.texts.editInfoText,isVisible:!0,type:"info"})])])),e.push(m("tr",{id:this.idTr,"aria-grabbed":!this.isHeader&&!this.isFooter?this.draggedRowIndex===this.rowIndex:void 0,class:this.trClassLocal,key:`main_${this.rowIndex}`,onDragleave:this.onDragleave&&(t=>this.onDragleave(t,this.rowIndex)),onDragover:this.onDragover&&(t=>this.onDragover(t,this.rowIndex)),onDrop:this.onDrop&&(t=>this.onDrop(t,this.rowIndex))},[this.isDragAndDrop?m(ct,{id:this.idTr,canMoveRowDown:this.canMoveRowDown,canMoveRowUp:this.canMoveRowUp,isCreateMode:this.isCreateMode,isDndDisabled:this.isDndDisabled,isDragAndDrop:this.isDragAndDrop,isFooter:this.isFooter,isHeader:this.isHeader,moveRowDown:this.moveRowDown,moveRowUp:this.moveRowUp,onDragend:this.onDragend,onDragstart:this.onDragstart,rowIndex:this.rowIndex,texts:this.texts,widths:this.widths}):null,...this.rowView==="list"&&!this.isHeader?[m(_t,{id:this.idTr,columns:this.columns,errors:this.errorsLocal,isEditable:this.isEditable,isEditMode:this.isActiveEditMode,isFooter:this.isFooter,onUpdateRowData:this.updateModelLocal,row:this.row,rowData:this.currentRowData,rowIndex:this.rowIndex,rows:this.rows},this.$slots)]:this.columns.map((t,o)=>this.isHeader?m(mt,{column:t,columnStyle:this.columnsStylesGrow[t.id],isEditable:this.isEditable},this.$slots):m(tt,{id:this.idTr,column:t,columnIndex:o,columnStyle:this.columnsStylesGrow[t.id],errorIcon:this.errorIcon,errors:this.errorsLocal,isEditable:this.isEditable,isEditMode:this.isActiveEditMode,isFooter:this.isFooter,onUpdateRowData:this.updateModelLocal,row:this.row,rowData:this.currentRowData,rowIndex:this.rowIndex,rows:this.rows,tag:this.cellTag},this.$slots)),this.hasActionsColumn?m(nt,{id:this.idTr,actionsClasses:this.actionsClasses,actionsDisabledCallback:this.actionsDisabledCallback,actionsHideCallback:this.actionsHideCallback,actionsTitleCallback:this.actionsTitleCallback,extra:this.extra,hasActiveEditRow:this.hasActiveEditRow,isActionsSticky:this.isActionsSticky,isActiveEditMode:this.isActiveEditMode,isDeletable:this.isDeletable,isDeletableConfirm:this.isDeletableConfirm,isEditable:this.isEditable,isFooter:this.isFooter,isHeader:this.isHeader,isSaving:this.isSaving,onCancelEditRow:this.cancelEditRow,onDeleteRow:this.onDeleteRow,onEditRow:this.onEditRow,onSaveEditRow:this.saveEditRow,row:this.row,rowIndex:this.rowIndex,texts:this.texts,widths:this.widths}):null])),this.rowView==="table"&&this.isActiveEditMode&&this.hasErrors&&e.push(m("tr",{class:"a_table_form__row a_table_form__row_errors",key:`errors_${this.rowIndex}`},[m("td",{class:"a_table_form__cell a_table_form__cell_errors",colspan:this.allColumnsLength},[m(Te,{autoFocus:!0,closable:!1,errors:this.errorsLocal,optionsList:this.optionsListForErrors,idPrefix:this.idTr})])])),e}};function At(e){const t=l(e,"actionsClasses");return{actionsClassesLocal:_(()=>({delete:"a_btn a_btn_transparent_danger",edit:"a_btn a_btn_transparent_primary",editCancel:"a_btn a_btn_transparent_primary",editSave:"a_btn a_btn_transparent_primary",addRow:"a_btn a_btn_outline_primary",...t.value}))}}function Et(e){const t=l(e,"columns"),o=l(e,"isDeletable"),a=l(e,"isDeletableConfirm"),r=l(e,"isDragAndDrop"),n=l(e,"isEditable"),s=l(e,"rowView"),i=_(()=>!!(n.value||o.value||a.value)),c=_(()=>t.value.filter(f=>f.isRender!==!1));return{allColumnsLength:_(()=>{let f=s.value==="list"?1:c.value.length;return r.value&&(f+=1),i.value&&(f+=1),f}),columnsVisible:c,hasActionsColumn:i}}const Rt=2;function pt(e,{columnsVisible:t=_(()=>[]),hasActionsColumn:o=_(()=>!1),widthsLocal:a=_(()=>({}))}){const r=l(e,"id"),n=l(e,"isColumnsGrow"),s=l(e,"isDeletable"),i=l(e,"isDeletableConfirm"),c=l(e,"isDragAndDrop"),d=l(e,"isEditable"),{remPx:f,scalePxWithRem:h}=ye(),w=g(void 0),R=g({});let A,O;const S=_(()=>o.value?d.value?a.value.actionsColumnDouble:s.value||i.value?a.value.actionsColumnSingle:0:0),q=_(()=>c.value?a.value.dndColumn:0),y=()=>{var T;return(T=document.getElementById(r.value))==null?void 0:T.parentElement},L=T=>{if(ne(T)||T==="")return 0;if(Ke(T))return+h(T)||0;if(!Ye(T))return 0;const C=T.trim();return C?C.endsWith("rem")?(parseFloat(C)||0)*f.value:(C.endsWith("px"),parseFloat(C)||0):0},H=T=>{const C=`${T}px`;return{maxWidth:C,minWidth:C,width:C}},$=()=>{if(!n.value||!w.value){R.value={};return}const T=t.value||[],C=w.value-S.value-q.value-Rt;if(C<=0){R.value={};return}let u=0,b=0;if(T.forEach(p=>{const I=L(p.width);u+=I,b+=Math.max(0,+p.grow||0)}),u>=C||b<=0){R.value={};return}const v=C-u,E={};T.forEach(p=>{const I=L(p.width),F=Math.max(0,+p.grow||0);if(!p.id||!I)return;const P=I+(F>0?v*F/b:0);E[p.id]=H(P)}),R.value=E},z=()=>{if(!n.value||A)return;const T=y();T&&(O=T,A=new ResizeObserver(Je(C=>{var b,v;const u=(v=(b=C[0])==null?void 0:b.contentRect)==null?void 0:v.width;u&&(w.value=u,$())},100)),w.value=T.getBoundingClientRect().width,$(),A.observe(T))},Q=()=>{A&&(O&&A.unobserve(O),A.disconnect(),A=void 0,O=void 0)};return Be([t,o,s,i,c,d,a],()=>{$()},{deep:!0}),{columnsStylesGrow:R,destroyColumnsGrowObserver:Q,initColumnsGrowObserver:z}}function Tt(e,{emit:t}){return{onDeleteRow:({row:a,rowIndex:r,rowId:n,btnDeleteId:s})=>{t("deleteRow",{row:a,rowIndex:r,rowId:n,btnDeleteId:s})}}}function yt(e,{emit:t},{isDndDisabled:o=_(()=>!1)}={}){const a=l(e,"actionsDisabledCallback"),r=l(e,"focusAfterMove"),n=l(e,"id"),s=l(e,"isDragAndDrop"),i=l(e,"rows"),c=g(void 0),d=g(void 0),f=g(void 0),h=g(void 0),w=u=>{if(o.value)return!0;const b=x(a.value,"dnd");return k(b)?!!b({row:i.value[u],rowIndex:u}):!1},R=(u,b)=>{const v=Math.min(u,b),E=Math.max(u,b);for(let p=v;p<=E;p++)if(w(p))return!0;return!1},A=()=>{var u;(u=h.value)==null||u.remove(),h.value=void 0},O=u=>{var P,ee;const b=(ee=(P=u.target)==null?void 0:P.closest)==null?void 0:ee.call(P,"tr");if(!b)return;const v=b.getBoundingClientRect(),E=document.createElement("table"),p=document.createElement("tbody"),I=b.cloneNode(!0);E.className="a_table_form__table",E.style.borderCollapse="collapse",E.style.borderSpacing="0",E.style.width=`${v.width}px`,E.style.tableLayout="fixed",Array.from(b.children).forEach((te,se)=>{const B=I.children[se];if(B){const U=window.getComputedStyle(te);B.style.width=`${te.getBoundingClientRect().width}px`,B.style.backgroundColor=U.backgroundColor,B.style.borderTop=U.borderTop,B.style.borderRight=U.borderRight,B.style.borderBottom=U.borderBottom,B.style.borderLeft=U.borderLeft,B.style.color=U.color}}),p.appendChild(I),E.appendChild(p);const F=document.createElement("div");return F.className="a_table_form a_table_form__drag_preview",F.style.position="fixed",F.style.top="-10000px",F.style.left="-10000px",F.style.pointerEvents="none",F.style.zIndex="9999",F.appendChild(E),document.body.appendChild(F),h.value=F,{element:F,offsetX:Math.min(u.offsetX||0,v.width/2),offsetY:Math.min(u.offsetY||0,v.height/2)}},S=({focusId:u,fromIndex:b,toIndex:v,trigger:E})=>{if(!s.value||o.value||b===v||b<0||v<0||b>=i.value.length||v>=i.value.length||R(b,v))return;const p=[...i.value],[I]=p.splice(b,1);p.splice(v,0,I),t("updateRows",{focusId:u,rows:p,trigger:E,fromIndex:b,toIndex:v}),t("moveRow",{focusId:u,fromIndex:b,row:I,toIndex:v})},q=({fromIndex:u,rowIndex:b,position:v="before"})=>{if(!s.value||o.value||u<0||b<0||u>=i.value.length||b>=i.value.length)return;let E=v==="after"?b+1:b;u<E&&(E-=1),S({fromIndex:u,toIndex:E,trigger:"dnd"})},y=({focusId:u})=>{r.value&&re().then(()=>{ae({selector:`#${u}`})})},L=u=>{const b=Math.max(1,u-1),v=`${n.value}_${b}_up`;S({focusId:v,fromIndex:u,toIndex:u-1,trigger:"moveRowUp"}),y({focusId:v})},H=u=>{const b=Math.min(i.value.length-2,u+1),v=`${n.value}_${b}_down`;S({focusId:v,fromIndex:u,toIndex:u+1,trigger:"moveRowDown"}),y({focusId:v})},$=(u,b)=>{if(!(!s.value||w(b))){if(u!=null&&u.dataTransfer){u.dataTransfer.effectAllowed="move",u.dataTransfer.setData("text/plain",`${b}`),A();const v=O(u);v&&u.dataTransfer.setDragImage(v.element,v.offsetX,v.offsetY)}c.value=b}},z=(u,b)=>{var E,p;if(!s.value||w(b))return;u.preventDefault();const v=(p=(E=u.currentTarget)==null?void 0:E.getBoundingClientRect)==null?void 0:p.call(E);if(v){const I=v.top+v.height/2;f.value=u.clientY<I?"before":"after"}else f.value="after";d.value=b},Q=(u,b)=>{var E,p;if(!s.value||w(b))return;const v=u.relatedTarget;(p=(E=u.currentTarget)==null?void 0:E.contains)!=null&&p.call(E,v)||d.value===b&&(d.value=void 0,f.value=void 0)},T=(u,b)=>{!s.value||w(b)||(u.preventDefault(),c.value!==void 0&&(q({fromIndex:c.value,position:f.value||"after",rowIndex:b}),A(),c.value=void 0,d.value=void 0,f.value=void 0))},C=()=>{A(),c.value=void 0,d.value=void 0,f.value=void 0};return{canMoveRowDown:_(()=>u=>u<i.value.length-1),canMoveRowUp:_(()=>u=>u>0),dragOverPosition:f,dragOverRowIndex:d,draggedRowIndex:c,isDndDisabledForRow:w,onDragleave:Q,moveRowDown:H,moveRowUp:L,onDragend:C,onDragover:z,onDragstart:$,onDrop:T}}const me=e=>{var t;return e!=null&&e.required?!0:((t=e==null?void 0:e.children)==null?void 0:t.some(me))||!1};function Dt(e,{columnsVisible:t=_(()=>[]),getRowKey:o=()=>{}}){const a=l(e,"addRow"),r=l(e,"isAddable"),n=l(e,"isEditable"),s=l(e,"prepareEditModel"),i=l(e,"rows"),c=g(void 0),d=g(void 0),f=g(!1),h=_(()=>!!c.value||f.value),w=_(()=>r.value?k(a.value):!1),R=_(()=>n.value?t.value.some(y=>me(y.formElement)):!1),A=y=>{if(!k(s.value))return;const L=s.value(y);if((L==null?void 0:L.model)!==void 0)return N(L.model)};return{activeEditRowKey:c,activeEditModel:d,canAddRow:w,hasActiveEditRow:h,hasRequiredEditableColumns:R,isAddRowActive:f,onAddRow:()=>{h.value||!w.value||(c.value=void 0,d.value=A({rows:i.value}),f.value=!0)},onCancelEditRow:({trigger:y,id:L}={})=>{c.value=void 0,d.value=void 0,f.value=!1,y==="cancel"?setTimeout(()=>{ae({selector:`#${L}_edit`})}):y==="save"&&setTimeout(()=>{ae({selector:`#${L}`})})},onEditRow:({row:y,rowIndex:L})=>{f.value||(d.value=A({row:y,rowIndex:L,rows:i.value}),c.value=o({row:y,rowIndex:L}))}}}function gt(e){const t=l(e,"icons");return{iconsLocal:_(()=>({actionAddRow:qe,...t.value}))}}function Ct(e){const t=l(e,"keyId"),o=l(e,"rows"),a=l(e,"rowsFooter"),r=_(()=>o.value.length>0),n=_(()=>a.value.length>0);return{getRowKey:({row:i,rowIndex:c,isFooter:d=!1})=>{let f=c;if(t.value){const w=x(i,t.value);ne(w)||(f=w)}return`${d?"footer":"body"}_${f}`},hasRows:r,hasRowsFooter:n}}function Lt(e){const t=l(e,"texts");return{textsLocal:_(()=>({actionsColumn:"_A_TABLE_FORM_ACTIONS_",actionAddRow:"_A_TABLE_FORM_ADD_ROW_",actionDelete:"_A_TABLE_FORM_DELETE_",actionDeleteConfirmBody:"_A_TABLE_FORM_DELETE_CONFIRM_BODY_",actionDeleteConfirmClose:"_A_TABLE_FORM_DELETE_CONFIRM_CLOSE_",actionDeleteConfirmHeader:"_A_TABLE_FORM_DELETE_CONFIRM_HEADER_",actionDeleteConfirmSave:"_A_TABLE_FORM_DELETE_CONFIRM_SAVE_",actionEdit:"_A_TABLE_FORM_EDIT_",actionEditCancel:"_A_TABLE_FORM_EDIT_CANCEL_",actionEditSave:"_A_TABLE_FORM_EDIT_SAVE_",editInfoText:void 0,emptyText:"_A_TABLE_FORM_EMPTY_",reorderColumn:"_A_TABLE_FORM_REORDER_COLUMN_",reorderDisabled:"_A_TABLE_FORM_REORDER_DISABLED_",reorderDown:"_A_TABLE_FORM_MOVE_DOWN_",reorderHandle:"_A_TABLE_FORM_REORDER_",reorderUp:"_A_TABLE_FORM_MOVE_UP_",...t.value}))}}function Mt(e){const t=l(e,"widths");return{widthsLocal:_(()=>({actionsColumnSingle:56,actionsColumnDouble:112,dndColumn:56,...t.value}))}}const X={name:"ATableForm",props:{actionsClasses:{type:Object,required:!1,default:()=>({})},actionsDisabledCallback:{type:Object,required:!1,default:()=>({})},actionsHideCallback:{type:Object,required:!1,default:()=>({})},actionsTitleCallback:{type:Object,required:!1,default:()=>({})},addRow:{type:Function,required:!1,default:void 0},columns:{type:Array,required:!0},columnsDefaultValue:{type:[String,Number],required:!1,default:""},changeModel:{type:Function,required:!1,default:void 0},errorIcon:{type:String,required:!1,default:Ne},extra:{type:Object,required:!1,default:void 0},focusAfterMove:{type:Boolean,required:!1,default:!0},icons:{type:Object,required:!1,default:()=>({})},id:{type:String,required:!1,default:()=>Xe("a_table_form_")},isActionsSticky:{type:Boolean,required:!1,default:!1},isAddable:{type:Boolean,required:!1,default:!1},isColumnsGrow:{type:Boolean,required:!1,default:!1},isDeletable:{type:Boolean,required:!1,default:!1},isDeletableConfirm:{type:Boolean,required:!1,default:!1},isDragAndDrop:{type:Boolean,required:!1,default:!1},isEditable:{type:Boolean,required:!1,default:!1},keyId:{type:String,required:!1,default:void 0},label:{type:[String,Number],required:!1,default:""},labelClass:{type:[String,Object,Array],required:!1,default:void 0},labelTag:{type:String,required:!1,default:"h2"},prepareEditModel:{type:Function,required:!1,default:void 0},rowClass:{type:[String,Object,Array,Function],required:!1,default:void 0},rowView:{type:String,required:!1,default:"table",validator:e=>["list","table"].includes(e)},rows:{type:Array,required:!1,default:()=>[]},rowsFooter:{type:Array,required:!1,default:()=>[]},saveRow:{type:Function,required:!1,default:()=>{}},texts:{type:Object,required:!1,default:()=>({})},widths:{type:Object,required:!1,default:()=>({})}},emits:["deleteRow","moveRow","updateRows"],setup(e,t){const o=l(e,"actionsDisabledCallback"),a=l(e,"actionsTitleCallback"),{allColumnsLength:r,columnsVisible:n,hasActionsColumn:s}=Et(e),{getRowKey:i,hasRows:c,hasRowsFooter:d}=Ct(e),{textsLocal:f}=Lt(e),{widthsLocal:h}=Mt(e),{iconsLocal:w}=gt(e),{actionsClassesLocal:R}=At(e),{columnsStylesGrow:A,destroyColumnsGrowObserver:O,initColumnsGrowObserver:S}=pt(e,{columnsVisible:n,hasActionsColumn:s,widthsLocal:h});Pe(()=>{S()}),Ue(()=>{O()});const{activeEditRowKey:q,activeEditModel:y,canAddRow:L,hasActiveEditRow:H,hasRequiredEditableColumns:$,isAddRowActive:z,onAddRow:Q,onCancelEditRow:T,onEditRow:C}=Dt(e,{columnsVisible:n,getRowKey:i}),{canMoveRowDown:u,canMoveRowUp:b,dragOverPosition:v,dragOverRowIndex:E,draggedRowIndex:p,isDndDisabledForRow:I,moveRowDown:F,moveRowUp:P,onDragend:ee,onDragleave:te,onDragover:se,onDragstart:B,onDrop:U}=yt(e,t,{isDndDisabled:H}),{onDeleteRow:fe}=Tt(e,t),he=_(()=>{if(H.value)return!0;const Z=x(o.value,"add");return k(Z)?Z():!1}),be=_(()=>{const Z=x(a.value,"add");return k(Z)?Z():f.value.actionAddRow});return{activeEditRowKey:q,activeEditModel:y,allColumnsLength:r,addTitle:be,canAddRow:L,canMoveRowDown:u,canMoveRowUp:b,actionsClassesLocal:R,columnsStylesGrow:A,columnsVisible:n,draggedRowIndex:p,dragOverPosition:v,dragOverRowIndex:E,isDndDisabledForRow:I,getRowKey:i,hasActionsColumn:s,hasActiveEditRow:H,hasRequiredEditableColumns:$,hasRows:c,hasRowsFooter:d,iconsLocal:w,isAddDisabled:he,isAddRowActive:z,moveRowDown:F,moveRowUp:P,onAddRow:Q,onCancelEditRow:T,onDeleteRow:fe,onDragend:ee,onDragleave:te,onDragover:se,onDragstart:B,onDrop:U,onEditRow:C,textsLocal:f,widthsLocal:h}},render(){return m("div",{class:"a_table_form"},[this.label&&m(K,{class:["a_table_form__label",this.labelClass],html:this.label,tag:this.labelTag}),this.hasRequiredEditableColumns&&m(De),m("div",{class:"a_table_form__wrapper"},[m("table",{id:this.id,class:["a_table_form__table",{a_table_form_drag_active:this.draggedRowIndex!==void 0,a_table_form__table_list:this.rowView==="list"}]},[this.rowView==="table"&&m("thead",{class:"a_table_form__head"},[m(oe,{id:this.id,actionsClasses:this.actionsClasses,actionsDisabledCallback:this.actionsDisabledCallback,actionsHideCallback:this.actionsHideCallback,actionsTitleCallback:this.actionsTitleCallback,allColumnsLength:this.allColumnsLength,canMoveRowDown:this.canMoveRowDown,canMoveRowUp:this.canMoveRowUp,cellTag:"th",changeModel:this.changeModel,columns:this.columnsVisible,columnsStylesGrow:this.columnsStylesGrow,draggedRowIndex:this.draggedRowIndex,extra:this.extra,hasActionsColumn:this.hasActionsColumn,hasActiveEditRow:!1,isActionsSticky:this.isActionsSticky,isActiveEditMode:!1,isDeletable:this.isDeletable,isDeletableConfirm:this.isDeletableConfirm,isDndDisabled:this.hasActiveEditRow,isDragAndDrop:this.isDragAndDrop,isEditable:this.isEditable,isHeader:!0,moveRowDown:this.moveRowDown,moveRowUp:this.moveRowUp,onCancelEditRow:this.onCancelEditRow,onDeleteRow:this.onDeleteRow,onDragend:this.onDragend,onDragstart:this.onDragstart,onEditRow:this.onEditRow,row:{},rowIndex:0,rowView:this.rowView,rows:this.rows,saveRow:this.saveRow,texts:this.textsLocal,trClass:"a_table_form__row a_table_form__row_head",widths:this.widthsLocal},this.$slots)]),m("tbody",{class:"a_table_form__body"},this.hasRows||this.isAddRowActive?[...this.rows.map((e,t)=>{const o=this.getRowKey({row:e,rowIndex:t});return m(oe,{key:o,id:this.id,actionsClasses:this.actionsClassesLocal,actionsDisabledCallback:this.actionsDisabledCallback,actionsHideCallback:this.actionsHideCallback,actionsTitleCallback:this.actionsTitleCallback,allColumnsLength:this.allColumnsLength,canMoveRowDown:this.canMoveRowDown,canMoveRowUp:this.canMoveRowUp,changeModel:this.changeModel,columns:this.columnsVisible,columnsStylesGrow:this.columnsStylesGrow,draggedRowIndex:this.draggedRowIndex,editModel:this.activeEditRowKey===o?this.activeEditModel:void 0,errorIcon:this.errorIcon,extra:this.extra,hasActionsColumn:this.hasActionsColumn,hasActiveEditRow:this.hasActiveEditRow,isActionsSticky:this.isActionsSticky,isActiveEditMode:this.activeEditRowKey===o,isCreateMode:!1,isDeletable:this.isDeletable,isDeletableConfirm:this.isDeletableConfirm,isDndDisabled:this.isDndDisabledForRow(t),isDragAndDrop:this.isDragAndDrop,isEditable:this.isEditable,moveRowDown:this.moveRowDown,moveRowUp:this.moveRowUp,onCancelEditRow:this.onCancelEditRow,onDeleteRow:this.onDeleteRow,onDragend:this.onDragend,onDragleave:this.onDragleave,onDragover:this.onDragover,onDragstart:this.onDragstart,onDrop:this.onDrop,onEditRow:this.onEditRow,row:e,rowClass:this.rowClass,rowIndex:t,rowView:this.rowView,rows:this.rows,saveRow:this.saveRow,texts:this.textsLocal,widths:this.widthsLocal,trClass:["a_table_form__row",{a_table_form__row_drag_after:this.dragOverRowIndex===t&&this.dragOverPosition==="after",a_table_form__row_drag_before:this.dragOverRowIndex===t&&this.dragOverPosition==="before",a_table_form__row_drag_over:this.dragOverRowIndex===t,a_table_form__row_dragging:this.draggedRowIndex===t}]},this.$slots)}),this.isAddRowActive&&m(oe,{id:this.id,actionsClasses:this.actionsClassesLocal,actionsDisabledCallback:this.actionsDisabledCallback,actionsHideCallback:this.actionsHideCallback,actionsTitleCallback:this.actionsTitleCallback,allColumnsLength:this.allColumnsLength,canMoveRowDown:this.canMoveRowDown,canMoveRowUp:this.canMoveRowUp,changeModel:this.changeModel,columns:this.columnsVisible,columnsStylesGrow:this.columnsStylesGrow,draggedRowIndex:this.draggedRowIndex,editModel:this.activeEditModel,errorIcon:this.errorIcon,extra:this.extra,hasActionsColumn:this.hasActionsColumn,hasActiveEditRow:this.hasActiveEditRow,isActionsSticky:this.isActionsSticky,isActiveEditMode:!0,isCreateMode:!0,isDeletable:!1,isDeletableConfirm:!1,isDndDisabled:!0,isDragAndDrop:this.isDragAndDrop,isEditable:this.isEditable,key:"body_create",moveRowDown:this.moveRowDown,moveRowUp:this.moveRowUp,onCancelEditRow:this.onCancelEditRow,onDeleteRow:this.onDeleteRow,onDragend:this.onDragend,onDragleave:this.onDragleave,onDragover:this.onDragover,onDragstart:this.onDragstart,onDrop:this.onDrop,onEditRow:this.onEditRow,row:{},rowClass:this.rowClass,rowIndex:this.rows.length,rowView:this.rowView,rows:this.rows,saveRow:this.addRow,texts:this.textsLocal,trClass:"a_table_form__row a_table_form__row_create",widths:this.widthsLocal},this.$slots)]:[m("tr",{class:"a_table_form__row a_table_form__row_empty"},[m("td",{class:"a_table_form__cell a_table_form__empty",colspan:this.allColumnsLength},[m(K,{tag:"span",text:this.textsLocal.emptyText})])])]),this.hasRowsFooter&&m("tfoot",{class:"a_table_form__foot"},this.rowsFooter.map((e,t)=>m(oe,{id:this.id,actionsClasses:this.actionsClassesLocal,actionsDisabledCallback:this.actionsDisabledCallback,actionsHideCallback:this.actionsHideCallback,actionsTitleCallback:this.actionsTitleCallback,allColumnsLength:this.allColumnsLength,canMoveRowDown:this.canMoveRowDown,canMoveRowUp:this.canMoveRowUp,changeModel:this.changeModel,columns:this.columnsVisible,columnsStylesGrow:this.columnsStylesGrow,draggedRowIndex:this.draggedRowIndex,extra:this.extra,hasActionsColumn:this.hasActionsColumn,hasActiveEditRow:this.hasActiveEditRow,isActionsSticky:this.isActionsSticky,isActiveEditMode:!1,isDeletable:this.isDeletable,isDeletableConfirm:this.isDeletableConfirm,isDndDisabled:this.hasActiveEditRow,isDragAndDrop:this.isDragAndDrop,isEditable:this.isEditable,isFooter:!0,key:this.getRowKey({isFooter:!0,row:e,rowIndex:t}),moveRowDown:this.moveRowDown,moveRowUp:this.moveRowUp,onCancelEditRow:this.onCancelEditRow,onDeleteRow:this.onDeleteRow,onDragend:this.onDragend,onDragstart:this.onDragstart,onEditRow:this.onEditRow,row:e,rowClass:this.rowClass,rowIndex:t,rowView:this.rowView,rows:this.rowsFooter,saveRow:this.saveRow,texts:this.textsLocal,widths:this.widthsLocal,trClass:"a_table_form__row a_table_form__row_footer"},this.$slots)))])]),this.canAddRow&&m("div",{class:"a_mt_3 a_text_right"},[m(W,{class:this.actionsClassesLocal.addRow,disabled:this.isAddDisabled,extra:this.extra,iconLeft:this.iconsLocal.actionAddRow,text:this.textsLocal.actionAddRow,textScreenReader:this.addTitle,title:this.addTitle,onClick:this.onAddRow})])])}};function Ot(){return{codeHtml:`<a-simple-table
  :columns="columns"
  :rows-footer="rowsFooter"
  :rows="rows"
  key-id="id"
  label="_A_TABLE_FORM_EXAMPLE_LABEL_"
/>
`}}function Ft(){return{codeJs:`import {
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
};`}}const It={name:"PageTableFormBasic",components:{AlohaExample:Y,ATableForm:X},setup(){const{codeHtml:e}=Ot(),{codeJs:t}=Ft(),o=[{id:"position",label:"_A_TABLE_FORM_COLUMN_POSITION_",maxWidth:96,minWidth:96,width:96,formElement:{type:"number"}},{id:"name",label:"_A_TABLE_FORM_COLUMN_NAME_",maxWidth:"18rem",minWidth:"12rem",width:"16rem",formElement:{type:"text"}},{id:"team",formElement:{translateData:!0,data:[{label:"_A_TABLE_FORM_TEAM_NORTH_",value:"north"},{label:"_A_TABLE_FORM_TEAM_WEST_",value:"west"},{label:"_A_TABLE_FORM_TEAM_SOUTH_",value:"south"},{label:"_A_TABLE_FORM_TEAM_EAST_",value:"east"}],keyId:"value",keyLabel:"label",type:"select"},label:"_A_TABLE_FORM_COLUMN_TEAM_",minWidth:"12rem"},{id:"score",footerDefaultValue:"68",footerKeyLabel:"score",formElement:{type:"integer"},label:"_A_TABLE_FORM_COLUMN_SCORE_",maxWidth:120,minWidth:120,width:120}],a=g([{id:1,name:"Марта Иванова",position:1,score:18,team:"north"},{id:2,name:"Олег Сидоров",position:2,score:17,team:"west"},{id:3,name:"Анна Петрова",position:3,score:16,team:"south"},{id:4,name:"Игорь Ковалёв",position:4,score:17,team:"east"}]);return{codeHtml:e,codeJs:t,columns:o,rows:a,rowsFooter:[{name:"_A_TABLE_FORM_FOOTER_TOTAL_",score:68}]}}};function xt(e,t,o,a,r,n){const s=D("a-table-form"),i=D("aloha-example");return V(),G(i,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TABLE_FORM_EXAMPLE_HEADER_"},{default:J(()=>[M(s,{columns:e.columns,"rows-footer":e.rowsFooter,rows:e.rows,"key-id":"id",label:"_A_TABLE_FORM_EXAMPLE_LABEL_"},null,8,["columns","rows-footer","rows"])]),_:1},8,["code-html","code-js"])}const kt=j(It,[["render",xt]]);function St(){return{codeHtml:`<a-table-form
  :actions-disabled-callback="actionsDisabledCallback"
  :columns="columns"
  :is-drag-and-drop="true"
  :rows-footer="rowsFooter"
  :rows="rows"
  key-id="id"
  label="_A_TABLE_FORM_EXAMPLE_LABEL_"
  @update-rows="updateRows"
/>
`}}function Bt(){return{codeJs:`import {
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
};`}}const qt={name:"PageTableFormDND",components:{AlohaExample:Y,ATableForm:X},setup(){const{codeHtml:e}=St(),{codeJs:t}=Bt(),o=[{id:"position",label:"_A_TABLE_FORM_COLUMN_POSITION_",maxWidth:96,minWidth:96,width:96,formElement:{type:"text"}},{id:"name",formElement:{type:"text"},label:"_A_TABLE_FORM_COLUMN_NAME_",maxWidth:"18rem",minWidth:"12rem",width:"16rem"},{id:"team",formElement:{translateData:!0,data:[{label:"_A_TABLE_FORM_TEAM_NORTH_",value:"north"},{label:"_A_TABLE_FORM_TEAM_WEST_",value:"west"},{label:"_A_TABLE_FORM_TEAM_SOUTH_",value:"south"},{label:"_A_TABLE_FORM_TEAM_EAST_",value:"east"}],keyId:"value",keyLabel:"label",type:"select"},label:"_A_TABLE_FORM_COLUMN_TEAM_",minWidth:"12rem"},{id:"score",footerDefaultValue:"68",footerKeyLabel:"score",formElement:{type:"integer"},label:"_A_TABLE_FORM_COLUMN_SCORE_",maxWidth:120,minWidth:120,width:120}],a=g([{id:1,name:"Марта Иванова",position:1,score:18,team:"north"},{dndDisabled:!0,id:2,name:"Олег Сидоров",position:2,score:17,team:"west"},{id:3,name:"Анна Петрова",position:3,score:16,team:"south"},{id:4,name:"Игорь Ковалёв",position:4,score:17,team:"east"}]);return{codeHtml:e,codeJs:t,columns:o,actionsDisabledCallback:{dnd:({row:i})=>i.dndDisabled},rows:a,rowsFooter:[{name:"_A_TABLE_FORM_FOOTER_TOTAL_",score:68}],updateRows:({rows:i,trigger:c})=>{a.value=i,console.log("trigger",c)}}}};function Nt(e,t,o,a,r,n){const s=D("a-table-form"),i=D("aloha-example");return V(),G(i,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TABLE_FORM_DND_HEADER_",description:"_A_TABLE_FORM_DND_DESCRIPTION_",props:["actions-disabled-callback","is-drag-and-drop"]},{default:J(()=>[M(s,{"actions-disabled-callback":e.actionsDisabledCallback,columns:e.columns,"is-drag-and-drop":!0,"rows-footer":e.rowsFooter,rows:e.rows,"key-id":"id",label:"_A_TABLE_FORM_EXAMPLE_LABEL_",onUpdateRows:e.updateRows},null,8,["actions-disabled-callback","columns","rows-footer","rows","onUpdateRows"])]),_:1},8,["code-html","code-js"])}const Pt=j(qt,[["render",Nt]]);function Ut(){return{codeHtml:`<a-checkbox>
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
`}}function Ht(){return{codeJs:`import {
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
};`}}const $t={name:"PageTableFormEdit",components:{ACheckbox:de,AlohaExample:Y,ATableForm:X},setup(){const{codeHtml:e}=Ut(),{codeJs:t}=Ht(),o=[{label:"is-deletable-confirm",value:"is-deletable-confirm"},{label:"is-deletable",value:"is-deletable"},{label:"is-editable",value:"is-editable"},{label:"is-addable",value:"is-addable"}],a=g(["is-deletable-confirm","is-deletable","is-editable","is-addable"]),r={actionEditCancel:"abbrechen",actionEditSave:"speichern",editInfoText:"Nur diese Zeile ist gerade im Bearbeitungsmodus."},n=[{id:"position",label:"_A_TABLE_FORM_COLUMN_POSITION_",maxWidth:96,minWidth:96,width:96,formElement:{controlsType:"none",type:"integer"}},{id:"name",formElement:{type:"text",required:!0},keyLabel:"name",label:"_A_TABLE_FORM_COLUMN_NAME_",maxWidth:"18rem",minWidth:"12rem",width:"16rem"},{id:"team",formElement:{data:[{label:"_A_TABLE_FORM_TEAM_NORTH_",value:"north"},{label:"_A_TABLE_FORM_TEAM_WEST_",value:"west"},{label:"_A_TABLE_FORM_TEAM_SOUTH_",value:"south"},{label:"_A_TABLE_FORM_TEAM_EAST_",value:"east"}],keyId:"value",keyLabel:"label",translateData:!0,type:"select"},label:"_A_TABLE_FORM_COLUMN_TEAM_",minWidth:"12rem"},{id:"score",footerDefaultValue:"68",footerKeyLabel:"score",formElement:{controlsType:"none",min:0,type:"integer"},label:"_A_TABLE_FORM_COLUMN_SCORE_",maxWidth:120,minWidth:120,width:120}],s=g([{id:1,name:"Marta Ivanova",position:1,score:18,team:"north"},{id:2,name:"Oleg Sidorov",position:2,score:17,team:"west"},{id:3,name:"Anna Petrova",position:3,score:16,team:"south"},{id:4,name:"Igor Kovalev",position:4,score:17,team:"east"}]);return{addRow:({model:h})=>{var R;console.log("model ",h);const w={};if((R=h.name)!=null&&R.trim()||(w.name=["Name ist erforderlich."]),h.team||(w.team=["Team ist erforderlich."]),h.score<18&&(w.score=["Score must be at least 18."]),Object.keys(w).length)return{errors:w};s.value.push({id:s.value.length+1,...h})},codeHtml:e,codeJs:t,columns:n,dataCheckbox:o,deleteRow:({row:h,rowIndex:w})=>{s.value.splice(w,1),console.log("row",h),console.log("rowIndex",w)},modelCheckbox:a,rows:s,rowsFooter:[{name:"_A_TABLE_FORM_FOOTER_TOTAL_",score:68}],saveRow:async({model:h,rowIndex:w})=>{var A;await new Promise(O=>{setTimeout(O,300)});const R={};if((A=h.name)!=null&&A.trim()||(R.name=["Name ist erforderlich."]),h.team||(R.team=["Team ist erforderlich."]),h.score<18&&(R.score=["Score must be at least 18."]),Object.keys(R).length)return{errors:R};s.value.splice(w,1,h)},texts:r}}};function Wt(e,t,o,a,r,n){const s=D("a-checkbox"),i=D("a-table-form"),c=D("aloha-example");return V(),G(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TABLE_FORM_EDIT_HEADER_",description:"_A_TABLE_FORM_EDIT_DESCRIPTION_",props:["is-addable","is-deletable","is-deletable-confirm","is-editable","save-row","texts"]},{default:J(()=>[M(s,{class:"a_mb_4",modelValue:e.modelCheckbox,"onUpdate:modelValue":t[0]||(t[0]=d=>e.modelCheckbox=d),data:e.dataCheckbox,"translate-data":!0,"key-id":"value","key-label":"label"},null,8,["modelValue","data"]),M(i,{"add-row":e.addRow,columns:e.columns,"is-addable":e.modelCheckbox.includes("is-addable"),"is-deletable-confirm":e.modelCheckbox.includes("is-deletable-confirm"),"is-deletable":e.modelCheckbox.includes("is-deletable"),"is-editable":e.modelCheckbox.includes("is-editable"),"rows-footer":e.rowsFooter,rows:e.rows,"save-row":e.saveRow,texts:e.texts,"key-id":"id",label:"_A_TABLE_FORM_EXAMPLE_LABEL_",onDeleteRow:e.deleteRow},null,8,["add-row","columns","is-addable","is-deletable-confirm","is-deletable","is-editable","rows-footer","rows","save-row","texts","onDeleteRow"])]),_:1},8,["code-html","code-js"])}const jt=j($t,[["render",Wt]]);function Vt(){return{codeHtml:`<a-checkbox
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
`}}function Gt(){return{codeJs:`import {
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
};`}}const Jt={name:"PageTableFormGrow",components:{ACheckbox:de,AlohaExample:Y,ATableForm:X},setup(){const{codeHtml:e}=Vt(),{codeJs:t}=Gt(),o=[{label:"is-deletable",value:"is-deletable"},{label:"is-editable",value:"is-editable"},{label:"is-drag-and-drop",value:"is-drag-and-drop"}],a=g(["is-deletable","is-editable"]),r=[{id:"position",label:"_A_TABLE_FORM_COLUMN_POSITION_",minWidth:96,width:96,grow:1,formElement:{controlsType:"none",type:"integer"}},{id:"name",formElement:{type:"text"},label:"_A_TABLE_FORM_COLUMN_NAME_",minWidth:"12rem",width:"16rem",grow:2},{id:"team",formElement:{data:[{label:"_A_TABLE_FORM_TEAM_NORTH_",value:"north"},{label:"_A_TABLE_FORM_TEAM_WEST_",value:"west"},{label:"_A_TABLE_FORM_TEAM_SOUTH_",value:"south"},{label:"_A_TABLE_FORM_TEAM_EAST_",value:"east"}],keyId:"value",keyLabel:"label",translateData:!0,type:"select"},label:"_A_TABLE_FORM_COLUMN_TEAM_",minWidth:"12rem",width:"12rem",grow:1},{id:"score",footerDefaultValue:"68",footerKeyLabel:"score",formElement:{controlsType:"none",min:0,type:"integer"},label:"_A_TABLE_FORM_COLUMN_SCORE_",minWidth:120,width:120,grow:1}],n=[{id:"position",label:"_A_TABLE_FORM_COLUMN_POSITION_",minWidth:96,width:96,grow:1,formElement:{controlsType:"none",type:"integer"}},{id:"name",formElement:{type:"text"},label:"_A_TABLE_FORM_COLUMN_NAME_",minWidth:"12rem",width:"16rem",grow:3}],s=g([{id:1,name:"Marta Ivanova",position:1,score:18,team:"north"},{id:2,name:"Oleg Sidorov",position:2,score:17,team:"west"},{id:3,name:"Anna Petrova",position:3,score:16,team:"south"},{id:4,name:"Igor Kovalev",position:4,score:17,team:"east"}]);return{codeHtml:e,codeJs:t,columns1:r,columns2:n,dataCheckbox:o,deleteRow:({rowIndex:h})=>{s.value.splice(h,1)},modelCheckbox:a,rows:s,rowsFooter:[{name:"_A_TABLE_FORM_FOOTER_TOTAL_",score:68}],saveRow:({model:h,rowIndex:w})=>{s.value.splice(w,1,h)},texts:{editInfoText:"Only one row can be edited at a time."}}}},Kt={class:"a_mb_4"};function Yt(e,t,o,a,r,n){const s=D("a-checkbox"),i=D("a-table-form"),c=D("aloha-example");return V(),G(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TABLE_FORM_GROW_HEADER_",description:"_A_TABLE_FORM_GROW_DESCRIPTION_",props:["is-columns-grow","is-deletable","is-drag-and-drop","is-editable"]},{default:J(()=>[M(s,{class:"a_mb_4",modelValue:e.modelCheckbox,"onUpdate:modelValue":t[0]||(t[0]=d=>e.modelCheckbox=d),data:e.dataCheckbox,"key-id":"value","key-label":"label"},null,8,["modelValue","data"]),He("div",Kt,[M(i,{columns:e.columns1,"is-columns-grow":!0,"is-deletable":e.modelCheckbox.includes("is-deletable"),"is-drag-and-drop":e.modelCheckbox.includes("is-drag-and-drop"),"is-editable":e.modelCheckbox.includes("is-editable"),"rows-footer":e.rowsFooter,rows:e.rows,"save-row":e.saveRow,texts:e.texts,"key-id":"id",label:"_A_TABLE_FORM_EXAMPLE_LABEL_",onDeleteRow:e.deleteRow},null,8,["columns","is-deletable","is-drag-and-drop","is-editable","rows-footer","rows","save-row","texts","onDeleteRow"])]),M(i,{columns:e.columns2,"is-columns-grow":!0,"is-deletable":e.modelCheckbox.includes("is-deletable"),"is-drag-and-drop":e.modelCheckbox.includes("is-drag-and-drop"),"is-editable":e.modelCheckbox.includes("is-editable"),"rows-footer":e.rowsFooter,rows:e.rows,"save-row":e.saveRow,texts:e.texts,"key-id":"id",label:"_A_TABLE_FORM_EXAMPLE_LABEL_",onDeleteRow:e.deleteRow},null,8,["columns","is-deletable","is-drag-and-drop","is-editable","rows-footer","rows","save-row","texts","onDeleteRow"])]),_:1},8,["code-html","code-js"])}const Xt=j(Jt,[["render",Yt]]);function zt(){return{codeHtml:`<a-table-form
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
`}}function Qt(){return{codeJs:`import {
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
};`}}const ie=({id:e,label:t,negativeId:o,positiveId:a,type:r="integer"})=>({id:e,label:t,formElement:{children:[{classColumn:"a_column a_column_6",controlsType:"none",id:o,label:"_A_TABLE_FORM_LIST_NEGATIVE_",type:r},{classColumn:"a_column a_column_6",controlsType:"none",id:a,label:"_A_TABLE_FORM_LIST_POSITIVE_",type:r}],classColumn:"a_column a_column_4",classColumns:"a_columns a_columns_count_12 a_columns_gap_2",type:"fieldset"}}),Zt={name:"PageTableFormList",components:{AlohaExample:Y,ATableForm:X},setup(){const{codeHtml:e}=zt(),{codeJs:t}=Qt(),o=[{id:"fundingTypes",label:"_A_TABLE_FORM_LIST_FUNDING_TYPES_",formElement:{classColumn:"a_column a_column_12",data:[{label:"_A_TABLE_FORM_LIST_FUNDING_TYPE_FEES_",value:"fees"},{label:"_A_TABLE_FORM_LIST_FUNDING_TYPE_TRAVEL_",value:"travel"},{label:"_A_TABLE_FORM_LIST_FUNDING_TYPE_INVESTMENT_",value:"investment"}],keyId:"value",keyLabel:"label",required:!0,translateData:!0,type:"multiselect"}},ie({id:"percentDeviation",label:"_A_TABLE_FORM_LIST_PERCENT_DEVIATION_",negativeId:"percentNegative",positiveId:"percentPositive"}),ie({id:"amountDeviation",label:"_A_TABLE_FORM_LIST_AMOUNT_DEVIATION_",negativeId:"amountNegative",positiveId:"amountPositive",type:"currency"}),ie({id:"shareDeviation",label:"_A_TABLE_FORM_LIST_SHARE_DEVIATION_",negativeId:"shareNegative",positiveId:"sharePositive"}),{id:"exceedAsError",label:"_A_TABLE_FORM_LIST_EXCEED_AS_ERROR_",formElement:{classColumn:"a_column a_column_12",type:"oneCheckbox"}},{id:"validationMessage",label:"_A_TABLE_FORM_LIST_VALIDATION_MESSAGE_",formElement:{classColumn:"a_column a_column_12",required:!0,rows:2,type:"textarea"}}],a=g([{amountNegative:5300,amountPositive:5300,exceedAsError:!0,fundingTypes:["fees","travel","investment"],id:1,percentNegative:20,percentPositive:20,shareNegative:10,sharePositive:5,validationMessage:"The configured deviation threshold was exceeded."},{amountNegative:2500,amountPositive:3e3,exceedAsError:!1,fundingTypes:["travel"],id:2,percentNegative:10,percentPositive:15,shareNegative:4,sharePositive:6,validationMessage:"Please verify the entered values."}]),r=d=>{var h,w;const f={};return(h=d.fundingTypes)!=null&&h.length||(f.fundingTypes=["_A_TABLE_FORM_LIST_ERROR_REQUIRED_"]),(w=d.validationMessage)!=null&&w.trim()||(f.validationMessage=["_A_TABLE_FORM_LIST_ERROR_REQUIRED_"]),f};return{addRow:({model:d})=>{const f=r(d);if(Object.keys(f).length)return{errors:f};a.value.push({...d,id:Math.max(0,...a.value.map(h=>h.id))+1})},codeHtml:e,codeJs:t,columns:o,deleteRow:({rowIndex:d})=>{a.value.splice(d,1)},rows:a,saveRow:({model:d,rowIndex:f})=>{const h=r(d);if(Object.keys(h).length)return{errors:h};a.value.splice(f,1,d)},updateRows:({rows:d})=>{a.value=d}}}};function eo(e,t,o,a,r,n){const s=D("a-table-form"),i=D("aloha-example");return V(),G(i,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TABLE_FORM_LIST_HEADER_",description:"_A_TABLE_FORM_LIST_DESCRIPTION_",props:["row-view"]},{default:J(()=>[M(s,{"add-row":e.addRow,columns:e.columns,"is-addable":!0,"is-deletable-confirm":!0,"is-drag-and-drop":!0,"is-editable":!0,rows:e.rows,"save-row":e.saveRow,"key-id":"id",label:"_A_TABLE_FORM_LIST_LABEL_","row-view":"list",onDeleteRow:e.deleteRow,onUpdateRows:e.updateRows},null,8,["add-row","columns","rows","save-row","onDeleteRow","onUpdateRows"])]),_:1},8,["code-html","code-js"])}const to=j(Zt,[["render",eo]]);function oo(){return{codeHtml:`<a-one-checkbox
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
`}}function ao(){return{codeJs:`import {
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
};`}}const so={name:"PageTableFormSticky",components:{AlohaExample:Y,AOneCheckbox:ge,ATableForm:X},setup(){const{codeHtml:e}=oo(),{codeJs:t}=ao(),o=g(!0),a=Array.from({length:20},(n,s)=>{const i=s+1;return{id:`c${i}`,label:`${i}`,maxWidth:120,minWidth:120,width:120,formElement:{controlsType:"none",type:"integer"}}}),r=g(Array.from({length:6},(n,s)=>{const i={id:s+1};return a.forEach((c,d)=>{i[c.id]=(s+1)*100+d+1}),i}));return{codeHtml:e,codeJs:t,columns:a,isActionsSticky:o,rows:r}}};function lo(e,t,o,a,r,n){const s=D("a-one-checkbox"),i=D("a-table-form"),c=D("aloha-example");return V(),G(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TABLE_FORM_STICKY_HEADER_",description:"_A_TABLE_FORM_STICKY_DESCRIPTION_",props:["is-actions-sticky","is-deletable-confirm","is-editable"]},{default:J(()=>[M(s,{class:"a_mb_4",modelValue:e.isActionsSticky,"onUpdate:modelValue":t[0]||(t[0]=d=>e.isActionsSticky=d),label:"isActionsSticky"},null,8,["modelValue"]),M(i,{columns:e.columns,"is-actions-sticky":e.isActionsSticky,"is-deletable-confirm":!0,"is-editable":!0,rows:e.rows,"key-id":"id",label:"20 columns"},null,8,["columns","is-actions-sticky","rows"])]),_:1},8,["code-html","code-js"])}const io=j(so,[["render",lo]]);function ro(){return{pageTitle:_(()=>Ce({placeholder:"_A_TABLE_FORM_PAGE_TITLE_"}))}}const no={name:"PageTableForm",components:{AlohaPage:we,PageTableFormBasic:kt,PageTableFormDND:Pt,PageTableFormEdit:jt,PageTableFormGrow:Xt,PageTableFormList:to,PageTableFormSticky:io},setup(){const{pageTitle:e}=ro();return{pageTitle:e}}};function co(e,t,o,a,r,n){const s=D("page-table-form-basic"),i=D("page-table-form-d-n-d"),c=D("page-table-form-edit"),d=D("page-table-form-list"),f=D("page-table-form-sticky"),h=D("page-table-form-grow"),w=D("aloha-page");return V(),G(w,{"page-title":e.pageTitle},{body:J(()=>[M(s),M(i),M(c),M(d),M(f),M(h)]),_:1},8,["page-title"])}const go=j(no,[["render",co]]);export{go as default};
