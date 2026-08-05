import{A as Y,a as Re}from"./chunk.AlohaExample.X7bJSYT1.js";import{d as pe,s as le,A as Z,c as X,b as Te,e as ye,f as ae,h as Ce,i as De,j as ge,k as Le,_ as W,l as ue,m as Me,g as Oe}from"./bundle.index.C9x2O_xd.js";import{t as n,d as _,h as f,M as de,aX as Fe,l as Ie,L as ke,O as xe,C as Se,aY as Be,aZ as qe,g as Pe,r as y,j as Ne,P as Ue,E as He,z as $e,o as We,Y as j,W as V,aU as G,f as T,$ as O,_ as je}from"./chunk.vendor.BEEJbev-.js";import{i as Ve,r as I,j as k,a as ce,l as U,M as Ge,T as Je,v as Ke,h as Xe,W as Ye,d as ze,b as Qe,u as Ze}from"./chunk.vendor-lodash.CwOx-Q_g.js";import{A as et}from"./chunk.AFormElement.D3z8wl5Q.js";import"./chunk.APageTabTitle.BE9J__Ca.js";import"./chunk.AlohaHighlightjs.De6fh8wy.js";import"./chunk.translations-ar.C8fTj2r_.js";import"./chunk.translations-de.Br6VchLw.js";import"./chunk.translations-en.nC7vGy4-.js";import"./chunk.translations-es.D9gmKdOe.js";import"./chunk.translations-fr.CqO4ugU-.js";import"./chunk.translations-hr.BFWQeCYn.js";import"./chunk.translations-it.H2-CdKR-.js";import"./chunk.translations-ru.CVFiHLkc.js";function tt(e,{formElement:t}={}){const o=n(e,"column"),a=n(e,"isEditable"),l=n(e,"isEditMode"),i=t||_(()=>{var r;return(r=o.value)==null?void 0:r.formElement});return{disabledLocal:_(()=>{var r;return!!((r=i.value)!=null&&r.disabled)||a.value&&!l.value})}}function ot(e,{formElement:t}={}){const o=n(e,"column"),a=n(e,"isEditable"),l=n(e,"isEditMode"),i=n(e,"isFooter"),s=t||_(()=>{var c;return(c=o.value)==null?void 0:c.formElement});return{readonlyLocal:_(()=>{var c,d;return i.value?!0:a.value?(c=s.value)!=null&&c.useRowReadonly?!l.value:!!((d=s.value)!=null&&d.readonly):!0})}}function at(e){const t=n(e,"column"),o=n(e,"isFooter"),a=_(()=>o.value?t.value.footerSlot:t.value.slot),l=_(()=>o.value?t.value.footerSlotAfter:t.value.slotAfter),i=_(()=>!!a.value),s=_(()=>!!l.value);return{hasSlot:i,hasSlotAfter:s,slotName:a,slotNameAfter:l}}function re(e){if(!(e==null||e===""))return typeof e=="number"?`${e}px`:e}function _e(e){const t=n(e,"column");return{columnStyles:_(()=>{const a={},l=re(t.value.width),i=re(t.value.maxWidth),s=re(t.value.minWidth);return l&&(a.width=l),i&&(a.maxWidth=i),s&&(a.minWidth=s),Ve(t.value.style)?{...a,...t.value.style}:t.value.style?[a,t.value.style]:a})}}function me({column:e,columnIndex:t,isCreateMode:o,isEditMode:a,row:l,rowData:i,rowIndex:s,rows:r}){const c=(e==null?void 0:e.formElement)||{};return!a||o||!I(e==null?void 0:e.formElementEditPropsCallback)?c:{...c,...e.formElementEditPropsCallback({column:e,columnIndex:t,row:l,rowData:i,rowIndex:s,rows:r})}}const st={name:"ATableFormCell",props:{column:{type:Object,required:!0},columnIndex:{type:Number,required:!0},columnStyle:{type:Object,required:!1,default:void 0},errorIcon:{type:String,required:!1,default:void 0},errors:{type:Object,required:!1,default:()=>({})},id:{type:String,required:!0},isCreateMode:{type:Boolean,required:!1,default:!1},isEditMode:{type:Boolean,required:!1,default:!1},isEditable:{type:Boolean,required:!1,default:!1},isFooter:{type:Boolean,required:!1,default:!1},row:{type:Object,required:!0},rowData:{type:Object,required:!1,default:void 0},rowIndex:{type:Number,required:!0},rows:{type:Array,required:!0},tag:{type:String,required:!1,default:"td"}},emits:["updateRowData"],setup(e){const t=_(()=>e.rowData||e.row),o=_(()=>me({column:e.column,columnIndex:e.columnIndex,isCreateMode:e.isCreateMode,isEditMode:e.isEditMode,row:e.row,rowData:t.value,rowIndex:e.rowIndex,rows:e.rows})),{columnStyles:a}=_e({column:e.column}),{readonlyLocal:l}=ot(e,{formElement:o}),{disabledLocal:i}=tt(e,{formElement:o}),{hasSlot:s,hasSlotAfter:r,slotName:c,slotNameAfter:d}=at(e);return{columnStyles:a,disabledLocal:i,formElementLocal:o,hasSlot:s,hasSlotAfter:r,readonlyLocal:l,rowDataLocal:t,slotName:c,slotNameAfter:d}},methods:{updateRowData({item:e,model:t}){this.$emit("updateRowData",{column:this.column,columnId:this.column.id,item:e,model:t,value:t})}},render(){const{type:e="text",...t}=this.formElementLocal,o={column:this.column,columnIndex:this.columnIndex,row:this.row,rowIndex:this.rowIndex,rows:this.rows};return f(this.tag,{class:["a_table_form__cell",`a_table_form__cell_${this.tag}`,this.column.class,this.isFooter?this.column.classFooter:this.column.classRow],"data-column-id":this.column.id,style:[this.columnStyles,this.columnStyle]},[this.hasSlot&&this.$slots[this.slotName]?this.$slots[this.slotName](o):f(et,{id:this.column.id,errorIcon:this.errorIcon,idPrefix:this.id,...t,change:this.updateRowData,disabled:this.disabledLocal,errors:k(this.errors,this.column.id),errorsClass:"a_sr_only",modelValue:k(this.rowDataLocal,this.column.id),readonly:this.readonlyLocal,type:e}),this.hasSlotAfter&&this.$slots[this.slotNameAfter]?this.$slots[this.slotNameAfter](o):null])}};function lt(e,{idBtnDelete:t=_(()=>""),isActionsDisabled:o=_(()=>!1)}){const a=n(e,"id"),l=n(e,"isDeletable"),i=n(e,"isDeletableConfirm"),s=n(e,"onDeleteRow"),r=n(e,"row"),c=n(e,"rowIndex"),d=n(e,"texts"),{closeConfirm:h,openConfirm:u}=pe(),b=()=>{h(),de().then(()=>{le({selector:`#${t.value}`})})},v=()=>{u({bodyHtml:d.value.actionDeleteConfirmBody,closeButtonText:d.value.actionDeleteConfirmClose,headerText:d.value.actionDeleteConfirmHeader,save:async()=>{await s.value({btnDeleteId:t.value,row:r.value,rowIndex:c.value,rowId:a.value}),h()},close:b,saveButtonText:d.value.actionDeleteConfirmSave})};return{onDeleteClick:()=>{if(!o.value){if(i.value){v();return}l.value&&s.value({btnDeleteId:t.value,row:r.value,rowIndex:c.value,rowId:a.value})}}}}function it(e){const t=n(e,"actionsDisabledCallback"),o=n(e,"hasActiveEditRow"),a=n(e,"isActiveEditMode"),l=n(e,"row"),i=n(e,"rowIndex"),s=_(()=>o.value&&!a.value),r=_(()=>{if(s.value)return!0;const d=k(t.value,"delete");return I(d)?d({row:l.value,rowIndex:i.value}):!1}),c=_(()=>{if(s.value)return!0;const d=k(t.value,"edit");return I(d)?d({row:l.value,rowIndex:i.value}):!1});return{isDeleteDisabled:r,isEditDisabled:c}}function rt(e){const t=n(e,"actionsHideCallback"),o=n(e,"row"),a=n(e,"rowIndex"),l=_(()=>{const s=k(t.value,"delete");return I(s)?s({row:o.value,rowIndex:a.value}):!1}),i=_(()=>{const s=k(t.value,"edit");return I(s)?s({row:o.value,rowIndex:a.value}):!1});return{isDeleteHidden:l,isEditHidden:i}}function nt(e){const t=n(e,"id"),o=_(()=>`${t.value}_delete`),a=_(()=>`${t.value}_edit`),l=_(()=>`${t.value}_cancel`),i=_(()=>`${t.value}_save`);return{idBtnCancel:l,idBtnDelete:o,idBtnEdit:a,idBtnSave:i}}function dt(e){const t=n(e,"hasActiveEditRow"),o=n(e,"isDeletable"),a=n(e,"isDeletableConfirm"),l=n(e,"isEditable"),i=n(e,"isActiveEditMode"),s=n(e,"widths");return{columnStyles:_(()=>{const c=o.value||a.value,d=t.value||i.value||l.value&&c?s.value.actionsColumnDouble:s.value.actionsColumnSingle;return{maxWidth:`${d}px`,minWidth:`${d}px`,width:`${d}px`}})}}function ct(e){const t=n(e,"row"),o=n(e,"rowIndex"),a=n(e,"texts"),l=n(e,"actionsTitleCallback"),i=_(()=>{const r=k(l.value,"delete");return I(r)?r({row:t.value,rowIndex:o.value}):a.value.actionDelete}),s=_(()=>{const r=k(l.value,"edit");return I(r)?r({row:t.value,rowIndex:o.value}):a.value.actionEdit});return{deleteTitle:i,editTitle:s}}const ut={name:"ATableFormCellAction",props:{actionsClasses:{type:Object,required:!1,default:()=>({})},actionsDisabledCallback:{type:Object,required:!1,default:()=>({})},actionsHideCallback:{type:Object,required:!1,default:()=>({})},actionsTitleCallback:{type:Object,required:!1,default:()=>({})},extra:{type:Object,required:!1,default:void 0},hasActiveEditRow:{type:Boolean,required:!1,default:!1},id:{type:String,required:!0},isActionsSticky:{type:Boolean,required:!1,default:!1},isActiveEditMode:{type:Boolean,required:!1,default:!1},isDeletable:{type:Boolean,required:!1,default:!1},isDeletableConfirm:{type:Boolean,required:!1,default:!1},isEditable:{type:Boolean,required:!1,default:!1},isFooter:{type:Boolean,required:!1,default:!1},isHeader:{type:Boolean,required:!1,default:!1},isSaving:{type:Boolean,required:!1,default:!1},onCancelEditRow:{type:Function,required:!0},onDeleteRow:{type:Function,required:!0},onEditRow:{type:Function,required:!0},onSaveEditRow:{type:Function,required:!0},row:{type:Object,required:!0},rowIndex:{type:Number,required:!0},texts:{type:Object,required:!1,default:()=>({})},widths:{type:Object,required:!1,default:()=>({})}},setup(e){const{isDeleteDisabled:t,isEditDisabled:o}=it(e),{isDeleteHidden:a,isEditHidden:l}=rt(e),{idBtnCancel:i,idBtnDelete:s,idBtnEdit:r,idBtnSave:c}=nt(e),{onDeleteClick:d}=lt(e,{idBtnDelete:s,isActionsDisabled:t}),{columnStyles:h}=dt(e),{deleteTitle:u,editTitle:b}=ct(e);return{columnStyles:h,deleteTitle:u,editTitle:b,idBtnCancel:i,idBtnDelete:s,idBtnEdit:r,idBtnSave:c,isDeleteDisabled:t,isDeleteHidden:a,isEditDisabled:o,isEditHidden:l,onDeleteClick:d}},render(){const e=this.isHeader?"th":"td";return f(e,{class:["a_table_form__cell",`a_table_form__cell_${e}`,"a_table_form__cell_actions",{a_table_form__cell_actions_sticky:this.isActionsSticky}],style:this.columnStyles},[this.isHeader?f("span",{class:"a_sr_only"},[f(Z,{tag:"span",text:this.texts.actionsColumn})]):this.isFooter?null:f("div",{class:"a_table_form__actions",role:"group"},this.isActiveEditMode?[f(X,{id:this.idBtnSave,class:["a_table_form__action_button",this.actionsClasses.editSave],disabled:this.isSaving,extra:this.extra,iconLeft:Fe,title:this.texts.actionEditSave,textScreenReader:this.texts.actionEditSave,onClick:()=>this.onSaveEditRow({id:this.id,row:this.row,rowIndex:this.rowIndex})}),f(X,{id:this.idBtnCancel,class:["a_table_form__action_button",this.actionsClasses.editCancel],disabled:this.isSaving,extra:this.extra,iconLeft:Ie,title:this.texts.actionEditCancel,textScreenReader:this.texts.actionEditCancel,onClick:()=>this.onCancelEditRow({id:this.id,row:this.row,rowIndex:this.rowIndex,trigger:"cancel"})})]:[(this.isDeletable||this.isDeletableConfirm)&&!this.isDeleteHidden&&f(X,{id:this.idBtnDelete,class:["a_table_form__action_button",this.actionsClasses.delete],disabled:this.isDeleteDisabled,extra:this.extra,iconLeft:ke,title:this.deleteTitle,textScreenReader:this.deleteTitle,onClick:this.onDeleteClick}),this.isEditable&&!this.isEditHidden&&f(X,{id:this.idBtnEdit,class:["a_table_form__action_button",this.actionsClasses.edit],disabled:this.isEditDisabled,extra:this.extra,iconLeft:xe,title:this.editTitle,textScreenReader:this.editTitle,onClick:()=>this.onEditRow({id:this.id,row:this.row,rowIndex:this.rowIndex})})])])}};function _t(e){const t=n(e,"id"),o=_(()=>`${t.value}_up`);return{idBtnDown:_(()=>`${t.value}_down`),idBtnUp:o}}const mt={name:"ATableFormCellDnd",props:{canMoveRowDown:{type:Function,required:!0},canMoveRowUp:{type:Function,required:!0},id:{type:String,required:!0},isCreateMode:{type:Boolean,required:!1,default:!1},isDragAndDrop:{type:Boolean,required:!1,default:!1},isDndDisabled:{type:Boolean,required:!1,default:!1},isDndLocked:{type:Boolean,required:!1,default:!1},isFooter:{type:Boolean,required:!1,default:!1},isHeader:{type:Boolean,required:!1,default:!1},moveRowDown:{type:Function,required:!0},moveRowUp:{type:Function,required:!0},onDragend:{type:Function,required:!0},onDragstart:{type:Function,required:!0},rowIndex:{type:Number,required:!0},texts:{type:Object,required:!1,default:()=>({})},widths:{type:Object,required:!1,default:()=>({})}},setup(e){const{idBtnDown:t,idBtnUp:o}=_t(e);return{columnStyles:_(()=>({maxWidth:`${e.widths.dndColumn}px`,minWidth:`${e.widths.dndColumn}px`,width:`${e.widths.dndColumn}px`})),idBtnDown:t,idBtnUp:o}},render(){const e=this.isHeader?"th":"td",t=this.isDragAndDrop&&!this.isDndDisabled;return f(e,{class:["a_table_form__cell",`a_table_form__cell_${e}`,"a_table_form__cell_reorder"],style:this.columnStyles},[this.isHeader?f("span",{class:"a_sr_only"},[f(Z,{tag:"span",text:this.texts.reorderColumn})]):this.isCreateMode||this.isFooter?null:f("div",{class:"a_table_form__reorder_actions"},[this.canMoveRowUp(this.rowIndex)&&f(X,{id:this.idBtnUp,class:"a_sr_only_focusable a_btn a_btn_transparent_dark a_table_form__reorder_button",disabled:this.isDndDisabled,iconLeft:Se,preventKeyboardRepeat:!0,tabindex:this.isDndDisabled?-1:void 0,title:this.texts.reorderUp,textScreenReader:this.texts.reorderUp,onClick:()=>this.moveRowUp(this.rowIndex)}),f("span",{ariaHidden:!0,class:["a_table_form__reorder_handle",{a_table_form__reorder_handle_disabled:this.isDndDisabled}],draggable:t,onDragend:t?this.onDragend:void 0,onDragstart:t?o=>this.onDragstart(o,this.rowIndex):void 0},[f(Te,{class:"a_table_form__reorder_icon",icon:this.isDndLocked?Be:qe})]),f("span",{class:"a_sr_only"},[f(Z,{tag:"span",text:this.isDndDisabled?this.texts.reorderDisabled:this.texts.reorderHandle})]),this.canMoveRowDown(this.rowIndex)&&f(X,{id:this.idBtnDown,class:"a_sr_only_focusable a_btn a_btn_transparent_dark a_table_form__reorder_button",disabled:this.isDndDisabled,iconLeft:Pe,preventKeyboardRepeat:!0,tabindex:this.isDndDisabled?-1:void 0,title:this.texts.reorderDown,textScreenReader:this.texts.reorderDown,onClick:()=>this.moveRowDown(this.rowIndex)})])])}};function fe(e,{isEditMode:t,isRowDisabled:o}={}){var l;const a=U(e||{});return a.useRowReadonly&&(a.readonly=!t),(l=a.children)!=null&&l.length&&(a.children=a.children.map(i=>fe(i,{isEditMode:t}))),o&&(a.disabled=!0),a}function ft(e){const t=n(e,"columns"),o=n(e,"isCreateMode"),a=n(e,"isEditable"),l=n(e,"isEditMode"),i=n(e,"row"),s=n(e,"rowData"),r=n(e,"rowIndex"),c=n(e,"rows");return{dataForm:_(()=>{const h=a.value&&!l.value;return t.value.map((u,b)=>{const v=me({column:u,columnIndex:b,isCreateMode:o.value,isEditMode:l.value,row:i.value,rowData:s.value||i.value,rowIndex:r.value,rows:c.value}),A=fe(v,{isEditMode:l.value,isRowDisabled:h});return A.id=u.id,ce(A.label)&&(A.label=u.label),A["data-column-id"]=u.id,A})})}}function we(e,t){return(e==null?void 0:e.some(o=>(o==null?void 0:o.id)===t||we(o==null?void 0:o.children,t)))||!1}const wt={name:"ATableFormCellList",props:{columns:{type:Array,required:!0},errors:{type:Object,required:!1,default:()=>({})},id:{type:String,required:!0},isCreateMode:{type:Boolean,required:!1,default:!1},isEditMode:{type:Boolean,required:!1,default:!1},isEditable:{type:Boolean,required:!1,default:!1},isFooter:{type:Boolean,required:!1,default:!1},row:{type:Object,required:!0},rowData:{type:Object,required:!1,default:void 0},rowIndex:{type:Number,required:!0},rows:{type:Array,required:!0}},emits:["updateRowData"],setup(e){const{dataForm:t}=ft(e);return{dataForm:t,rowDataLocal:_(()=>e.rowData||e.row)}},methods:{updateRowData({fullModel:e,id:t,item:o,model:a}){const l=this.columns.find(i=>{var s;return i.id===t||we((s=i.formElement)==null?void 0:s.children,t)});this.$emit("updateRowData",{column:l,columnId:t,fullModel:e,item:o,model:a})}},render(){return f("td",{class:["a_table_form__cell","a_table_form__cell_td","a_table_form__cell_list"]},[f(ye,{data:this.dataForm,errors:this.errors,idPrefix:this.id,modelValue:this.rowDataLocal,readonly:this.isFooter||!this.isEditable,showErrors:!0,showRequiredText:!1,tag:"div",useFlatErrors:!0,useFlatModel:!0,onChange:this.updateRowData},this.$slots)])}},ht={name:"ATableFormTh",props:{column:{type:Object,required:!0},columnStyle:{type:Object,required:!1,default:void 0},isEditable:{type:Boolean,required:!1,default:!1}},setup(e){const{columnStyles:t}=_e({column:e.column});return{columnStyles:t}},render(){var e;return f("th",{class:["a_table_form__cell","a_table_form__cell_th",this.column.class],style:[this.columnStyles,this.columnStyle]},[this.column.slotHeader&&this.$slots[this.column.slotHeader]?this.$slots[this.column.slotHeader]({column:this.column,isEditable:this.isEditable}):this.column.label&&f(Z,{html:this.column.label,tag:"span"}),this.isEditable&&((e=this.column.formElement)==null?void 0:e.required)&&f("span",{class:"a_label__required"},"*")])}};function bt(e,{hasErrors:t=_(()=>!1)}){const o=n(e,"hasActiveEditRow"),a=n(e,"isActiveEditMode"),l=n(e,"isCreateMode"),i=n(e,"isFooter"),s=n(e,"isHeader"),r=n(e,"row"),c=n(e,"rowClass"),d=n(e,"rowIndex"),h=n(e,"trClass"),u=_(()=>I(c.value)?c.value({row:r.value,rowIndex:d.value,rowindex:d.value,isCreateMode:l.value,isFooter:i.value,isHeader:s.value}):c.value),b=_(()=>[h.value,u.value,{a_table_form__row_active:!s.value&&!i.value&&a.value,a_table_form__row_errors:!s.value&&!i.value&&t.value,a_table_form__row_inactive:!s.value&&!i.value&&o.value&&!a.value}]);return{rowClassLocal:u,trClassLocal:b}}function vt(e,{errorsLocal:t=y(void 0)}){const o=n(e,"changeModel"),a=n(e,"onCancelEditRow"),l=n(e,"row"),i=n(e,"rows"),s=n(e,"rowIndex"),r=n(e,"saveRow"),c=y(!1),d=y(void 0),h=({column:v,columnId:A,fullModel:C,item:B,model:q})=>{d.value||(d.value=U(l.value)||{});let x;o.value&&(x=o.value({modelAll:d.value,row:l.value,column:v,fullModel:C,model:q,item:B})),x!=null&&x.model?d.value=U(x.model):C!==void 0?d.value=U(C):Ge(d.value,A,q),Je(t.value,A)},u=({trigger:v,id:A}={})=>{a.value({row:l.value,rowIndex:s.value,trigger:v,id:A})};return{cancelEditRow:u,isSaving:c,modelLocal:d,saveEditRow:async({id:v}={})=>{if(!c.value){t.value={},c.value=!0;try{const A=await r.value({model:U(d.value),row:l.value,rowIndex:s.value,rows:i.value});if(A!=null&&A.errors){t.value=U(A.errors);return}u({trigger:"save",id:v})}catch(A){t.value=A}finally{c.value=!1}}},updateModelLocal:h}}function Et(e){const t=n(e,"columns"),o=y({}),a=_(()=>!Ke(o.value)),l=_(()=>{const i=[];return Xe(t.value,s=>{const r=U(s.formElement)||{};r.type=r.type||"text",r.label=r.label||s.label,r.id=r.id||s.id,i.push(r)}),i});return{errorsLocal:o,hasErrors:a,optionsListForErrors:l}}function At({idTr:e=_(()=>"")}){return{focusEditableElementByColumnId:a=>{if(!a)return!1;const l=document.getElementById(e.value),i=Array.from((l==null?void 0:l.querySelectorAll("[data-column-id]"))||[]).find(c=>c.dataset.columnId===`${a}`),s=document.getElementById(`${e.value}${a}`),r=(i==null?void 0:i.querySelector(ae))||(s!=null&&s.matches(ae)?s:s==null?void 0:s.querySelector(ae));return r?(r.focus(),!0):!1},focusFirstEditableElement:()=>{const a=document.getElementById(e.value);if(!a)return;const i=Array.from(a.querySelectorAll(".a_table_form__cell:not(.a_table_form__cell_actions)")).map(s=>s.querySelector(ae)).find(Boolean);i==null||i.focus()}}}function Rt(e){const t=n(e,"id"),o=n(e,"isHeader"),a=n(e,"isFooter"),l=n(e,"rowIndex");return{idTr:_(()=>`${t.value}_${l.value}${o.value?"_header":""}${a.value?"_footer":""}`)}}const pt=["a","button","[contenteditable]","[role='button']","[role='checkbox']","[role='combobox']","[role='link']","[role='menuitem']","[role='option']","[role='radio']","[role='switch']","[role='textbox']"].join(","),Tt=e=>!!e&&(e.disabled||e.hasAttribute("readonly")||e.getAttribute("aria-disabled")==="true"||e.getAttribute("aria-readonly")==="true"),yt=(e,t)=>{var i,s,r,c;const o=(s=(i=e.target)==null?void 0:i.closest)==null?void 0:s.call(i,"[data-column-id]");if(o!=null&&o.dataset.columnId)return o.dataset.columnId;const a=(c=(r=e.target)==null?void 0:r.closest)==null?void 0:c.call(r,"[id]"),l=a==null?void 0:a.id;if(l!=null&&l.startsWith(t))return l.slice(t.length)},se={name:"ATableFormRow",props:{actionsClasses:{type:Object,required:!1,default:()=>({})},actionsDisabledCallback:{type:Object,required:!1,default:()=>({})},actionsHideCallback:{type:Object,required:!1,default:()=>({})},actionsTitleCallback:{type:Object,required:!1,default:()=>({})},allColumnsLength:{type:Number,required:!0},canMoveRowDown:{type:Function,required:!0},canMoveRowUp:{type:Function,required:!0},cellTag:{type:String,required:!1,default:void 0},changeModel:{type:Function,required:!1,default:void 0},columns:{type:Array,required:!0},columnsStylesGrow:{type:Object,required:!1,default:()=>({})},draggedRowIndex:{type:Number,required:!1,default:void 0},editModel:{type:Object,required:!1,default:void 0},editFocusColumnId:{type:[String,Number],required:!1,default:void 0},errorIcon:{type:String,required:!1,default:void 0},extra:{type:Object,required:!1,default:void 0},hasActionsColumn:{type:Boolean,required:!1,default:!1},hasActiveEditRow:{type:Boolean,required:!1,default:!1},id:{type:String,required:!0},isActionsSticky:{type:Boolean,required:!1,default:!1},isActiveEditMode:{type:Boolean,required:!1,default:!1},isCreateMode:{type:Boolean,required:!1,default:!1},isDeletable:{type:Boolean,required:!1,default:!1},isDeletableConfirm:{type:Boolean,required:!1,default:!1},isDndDisabled:{type:Boolean,required:!1,default:!1},isDndLocked:{type:Boolean,required:!1,default:!1},isDragAndDrop:{type:Boolean,required:!1,default:!1},isEditable:{type:Boolean,required:!1,default:!1},isEditOnRowClick:{type:Boolean,required:!1,default:!1},isFooter:{type:Boolean,required:!1,default:!1},isHeader:{type:Boolean,required:!1,default:!1},moveRowDown:{type:Function,required:!0},moveRowUp:{type:Function,required:!0},onCancelEditRow:{type:Function,required:!0},onDeleteRow:{type:Function,required:!0},onDragend:{type:Function,required:!0},onDragleave:{type:Function,required:!1,default:void 0},onDragover:{type:Function,required:!1,default:void 0},onDragstart:{type:Function,required:!0},onDrop:{type:Function,required:!1,default:void 0},onEditRow:{type:Function,required:!0},row:{type:Object,required:!0},rowClass:{type:[String,Object,Array,Function],required:!1,default:void 0},rowIndex:{type:Number,required:!0},rows:{type:Array,required:!0},rowView:{type:String,required:!1,default:"table",validator:e=>["list","table"].includes(e)},saveRow:{type:Function,required:!0},texts:{type:Object,required:!1,default:()=>({})},trClass:{type:[String,Object,Array],required:!1,default:void 0},widths:{type:Object,required:!1,default:()=>({})}},setup(e){const{idTr:t}=Rt(e),{focusEditableElementByColumnId:o,focusFirstEditableElement:a}=At({idTr:t}),{errorsLocal:l,hasErrors:i,optionsListForErrors:s}=Et(e),{rowClassLocal:r,trClassLocal:c}=bt(e,{hasErrors:i}),{cancelEditRow:d,isSaving:h,modelLocal:u,saveEditRow:b,updateModelLocal:v}=vt(e,{errorsLocal:l});return{cancelEditRow:d,errorsLocal:l,focusFirstEditableElement:a,focusEditableElementByColumnId:o,hasErrors:i,rowClassLocal:r,idTr:t,isSaving:h,modelLocal:u,optionsListForErrors:s,saveEditRow:b,trClassLocal:c,updateModelLocal:v}},computed:{canEditOnRowClick(){if(!this.isEditOnRowClick||!this.isEditable||this.isActiveEditMode||this.isCreateMode||this.isFooter||this.isHeader||this.hasActiveEditRow)return!1;const e=k(this.actionsHideCallback,"edit");if(I(e)&&e({row:this.row,rowIndex:this.rowIndex}))return!1;const t=k(this.actionsDisabledCallback,"edit");return!(I(t)&&t({row:this.row,rowIndex:this.rowIndex}))},currentRowData(){return this.isActiveEditMode&&this.modelLocal?this.modelLocal:this.row}},methods:{onRowClick(e){var o,a,l,i;if(!this.canEditOnRowClick||(a=(o=e.target)==null?void 0:o.closest)!=null&&a.call(o,".a_table_form__cell_actions, .a_table_form__cell_reorder"))return;const t=(i=(l=e.target)==null?void 0:l.closest)==null?void 0:i.call(l,pt);t&&!Tt(t)||this.onEditRow({focusColumnId:yt(e,this.idTr),id:this.idTr,row:this.row,rowIndex:this.rowIndex})}},watch:{isActiveEditMode:{immediate:!0,handler(e){if(e){this.modelLocal=U(this.editModel===void 0?this.row:this.editModel),this.errorsLocal={},de(()=>{this.focusEditableElementByColumnId(this.editFocusColumnId)||this.focusFirstEditableElement()});return}this.errorsLocal={},this.isSaving=!1}}},render(){const e=[];return this.isActiveEditMode&&this.texts.editInfoText&&e.push(f("tr",{class:"a_table_form__row a_table_form__row_info",key:`info_${this.rowIndex}`},[f("td",{class:"a_table_form__cell a_table_form__cell_info",colspan:this.allColumnsLength},[f(Ce,{alertClass:"a_table_form__info",html:this.texts.editInfoText,isVisible:!0,type:"info"})])])),e.push(f("tr",{id:this.idTr,"aria-grabbed":!this.isHeader&&!this.isFooter?this.draggedRowIndex===this.rowIndex:void 0,class:[this.trClassLocal,{a_table_form__row_edit_on_click:this.canEditOnRowClick}],key:`main_${this.rowIndex}`,onClick:this.onRowClick,onDragleave:this.onDragleave&&(t=>this.onDragleave(t,this.rowIndex)),onDragover:this.onDragover&&(t=>this.onDragover(t,this.rowIndex)),onDrop:this.onDrop&&(t=>this.onDrop(t,this.rowIndex))},[this.isDragAndDrop?f(mt,{id:this.idTr,canMoveRowDown:this.canMoveRowDown,canMoveRowUp:this.canMoveRowUp,isCreateMode:this.isCreateMode,isDndDisabled:this.isDndDisabled,isDndLocked:this.isDndLocked,isDragAndDrop:this.isDragAndDrop,isFooter:this.isFooter,isHeader:this.isHeader,moveRowDown:this.moveRowDown,moveRowUp:this.moveRowUp,onDragend:this.onDragend,onDragstart:this.onDragstart,rowIndex:this.rowIndex,texts:this.texts,widths:this.widths}):null,...this.rowView==="list"&&!this.isHeader?[f(wt,{id:this.idTr,columns:this.columns,errors:this.errorsLocal,isCreateMode:this.isCreateMode,isEditable:this.isEditable,isEditMode:this.isActiveEditMode,isFooter:this.isFooter,onUpdateRowData:this.updateModelLocal,row:this.row,rowData:this.currentRowData,rowIndex:this.rowIndex,rows:this.rows},this.$slots)]:this.columns.map((t,o)=>this.isHeader?f(ht,{column:t,columnStyle:this.columnsStylesGrow[t.id],isEditable:this.isEditable},this.$slots):f(st,{id:this.idTr,column:t,columnIndex:o,columnStyle:this.columnsStylesGrow[t.id],errorIcon:this.errorIcon,errors:this.errorsLocal,isCreateMode:this.isCreateMode,isEditable:this.isEditable,isEditMode:this.isActiveEditMode,isFooter:this.isFooter,onUpdateRowData:this.updateModelLocal,row:this.row,rowData:this.currentRowData,rowIndex:this.rowIndex,rows:this.rows,tag:this.cellTag},this.$slots)),this.hasActionsColumn?f(ut,{id:this.idTr,actionsClasses:this.actionsClasses,actionsDisabledCallback:this.actionsDisabledCallback,actionsHideCallback:this.actionsHideCallback,actionsTitleCallback:this.actionsTitleCallback,extra:this.extra,hasActiveEditRow:this.hasActiveEditRow,isActionsSticky:this.isActionsSticky,isActiveEditMode:this.isActiveEditMode,isDeletable:this.isDeletable,isDeletableConfirm:this.isDeletableConfirm,isEditable:this.isEditable,isFooter:this.isFooter,isHeader:this.isHeader,isSaving:this.isSaving,onCancelEditRow:this.cancelEditRow,onDeleteRow:this.onDeleteRow,onEditRow:this.onEditRow,onSaveEditRow:this.saveEditRow,row:this.row,rowIndex:this.rowIndex,texts:this.texts,widths:this.widths}):null])),this.rowView==="table"&&this.isActiveEditMode&&this.hasErrors&&e.push(f("tr",{class:"a_table_form__row a_table_form__row_errors",key:`errors_${this.rowIndex}`},[f("td",{class:"a_table_form__cell a_table_form__cell_errors",colspan:this.allColumnsLength},[f(De,{autoFocus:!0,closable:!1,errors:this.errorsLocal,optionsList:this.optionsListForErrors,idPrefix:this.idTr})])])),e}};function Ct(e){const t=n(e,"actionsClasses");return{actionsClassesLocal:_(()=>({delete:"a_btn a_btn_transparent_danger",edit:"a_btn a_btn_transparent_primary",editCancel:"a_btn a_btn_transparent_primary",editSave:"a_btn a_btn_transparent_primary",addRow:"a_btn a_btn_outline_primary",...t.value}))}}function Dt(e,{isAddRowActive:t=_(()=>!1)}={}){const o=n(e,"columns"),a=n(e,"isDeletable"),l=n(e,"isDeletableConfirm"),i=n(e,"isDragAndDrop"),s=n(e,"isEditable"),r=n(e,"rowView"),c=_(()=>!!(s.value||a.value||l.value||t.value)),d=_(()=>o.value.filter(u=>u.isRender!==!1));return{allColumnsLength:_(()=>{let u=r.value==="list"?1:d.value.length;return i.value&&(u+=1),c.value&&(u+=1),u}),columnsVisible:d,hasActionsColumn:c}}const gt=2;function Lt(e,{columnsVisible:t=_(()=>[]),hasActionsColumn:o=_(()=>!1),hasActiveEditRow:a=_(()=>!1),widthsLocal:l=_(()=>({}))}){const i=n(e,"id"),s=n(e,"isColumnsGrow"),r=n(e,"isDeletable"),c=n(e,"isDeletableConfirm"),d=n(e,"isDragAndDrop"),h=n(e,"isEditable"),{remPx:u,scalePxWithRem:b}=ge(),v=y(void 0),A=y({});let C,B;const q=_(()=>o.value?a.value||h.value&&(r.value||c.value)?l.value.actionsColumnDouble:l.value.actionsColumnSingle:0),x=_(()=>d.value?l.value.dndColumn:0),M=()=>{var p;return(p=document.getElementById(i.value))==null?void 0:p.parentElement},F=p=>{if(ce(p)||p==="")return 0;if(ze(p))return+b(p)||0;if(!Qe(p))return 0;const D=p.trim();return D?D.endsWith("rem")?(parseFloat(D)||0)*u.value:(D.endsWith("px"),parseFloat(D)||0):0},H=p=>{const D=`${p}px`;return{maxWidth:D,minWidth:D,width:D}},J=()=>{if(!s.value||!v.value){A.value={};return}const p=t.value||[],D=v.value-q.value-x.value-gt;if(D<=0){A.value={};return}let m=0,w=0;if(p.forEach(L=>{const P=F(L.width);m+=P,w+=Math.max(0,+L.grow||0)}),m>=D||!p.length){A.value={};return}const E=D-m,R=w>0,g=R?w:p.length,S={};p.forEach(L=>{const P=F(L.width),K=R?Math.max(0,+L.grow||0):1;if(!L.id||R&&!P)return;const Q=P+(K>0?E*K/g:0);S[L.id]=H(Q)}),A.value=S},ee=()=>{if(!s.value||C)return;const p=M();p&&(B=p,C=new ResizeObserver(Ye(D=>{var w,E;const m=(E=(w=D[0])==null?void 0:w.contentRect)==null?void 0:E.width;m&&(v.value=m,J())},100)),v.value=p.getBoundingClientRect().width,J(),C.observe(p))},te=()=>{C&&(B&&C.unobserve(B),C.disconnect(),C=void 0,B=void 0)};return Ne([t,o,a,r,c,d,h,l],()=>{J()},{deep:!0}),{columnsStylesGrow:A,destroyColumnsGrowObserver:te,initColumnsGrowObserver:ee}}function Mt(e,{emit:t}){return{onDeleteRow:({row:a,rowIndex:l,rowId:i,btnDeleteId:s})=>{t("deleteRow",{row:a,rowIndex:l,rowId:i,btnDeleteId:s})}}}function Ot(e,{emit:t},{isDndDisabled:o=_(()=>!1)}={}){const a=n(e,"actionsDisabledCallback"),l=n(e,"focusAfterMove"),i=n(e,"id"),s=n(e,"isDragAndDrop"),r=n(e,"rows"),c=y(void 0),d=y(void 0),h=y(void 0),u=y(void 0),b=m=>{const w=k(a.value,"dnd");return I(w)?!!w({row:r.value[m],rowIndex:m}):!1},v=m=>o.value||b(m),A=(m,w)=>{const E=Math.min(m,w),R=Math.max(m,w);for(let g=E;g<=R;g++)if(v(g))return!0;return!1},C=()=>{var m;(m=u.value)==null||m.remove(),u.value=void 0},B=m=>{var P,K;const w=(K=(P=m.target)==null?void 0:P.closest)==null?void 0:K.call(P,"tr");if(!w)return;const E=w.getBoundingClientRect(),R=document.createElement("table"),g=document.createElement("tbody"),S=w.cloneNode(!0);R.className="a_table_form__table",R.style.borderCollapse="collapse",R.style.borderSpacing="0",R.style.width=`${E.width}px`,R.style.tableLayout="fixed",Array.from(w.children).forEach((Q,ie)=>{const N=S.children[ie];if(N){const $=window.getComputedStyle(Q);N.style.width=`${Q.getBoundingClientRect().width}px`,N.style.backgroundColor=$.backgroundColor,N.style.borderTop=$.borderTop,N.style.borderRight=$.borderRight,N.style.borderBottom=$.borderBottom,N.style.borderLeft=$.borderLeft,N.style.color=$.color}}),g.appendChild(S),R.appendChild(g);const L=document.createElement("div");return L.className="a_table_form a_table_form__drag_preview",L.style.position="fixed",L.style.top="-10000px",L.style.left="-10000px",L.style.pointerEvents="none",L.style.zIndex="9999",L.appendChild(R),document.body.appendChild(L),u.value=L,{element:L,offsetX:Math.min(m.offsetX||0,E.width/2),offsetY:Math.min(m.offsetY||0,E.height/2)}},q=({focusId:m,fromIndex:w,toIndex:E,trigger:R})=>{if(!s.value||o.value||w===E||w<0||E<0||w>=r.value.length||E>=r.value.length||A(w,E))return;const g=[...r.value],[S]=g.splice(w,1);g.splice(E,0,S),t("updateRows",{focusId:m,rows:g,trigger:R,fromIndex:w,toIndex:E}),t("moveRow",{focusId:m,fromIndex:w,row:S,toIndex:E})},x=({fromIndex:m,rowIndex:w,position:E="before"})=>{if(!s.value||o.value||m<0||w<0||m>=r.value.length||w>=r.value.length)return;let R=E==="after"?w+1:w;m<R&&(R-=1),q({fromIndex:m,toIndex:R,trigger:"dnd"})},M=({focusId:m})=>{l.value&&de().then(()=>{le({selector:`#${m}`})})},F=m=>{const w=Math.max(1,m-1),E=`${i.value}_${w}_up`;q({focusId:E,fromIndex:m,toIndex:m-1,trigger:"moveRowUp"}),M({focusId:E})},H=m=>{const w=Math.min(r.value.length-2,m+1),E=`${i.value}_${w}_down`;q({focusId:E,fromIndex:m,toIndex:m+1,trigger:"moveRowDown"}),M({focusId:E})},J=(m,w)=>{if(!(!s.value||v(w))){if(m!=null&&m.dataTransfer){m.dataTransfer.effectAllowed="move",m.dataTransfer.setData("text/plain",`${w}`),C();const E=B(m);E&&m.dataTransfer.setDragImage(E.element,E.offsetX,E.offsetY)}c.value=w}},ee=(m,w)=>{var R,g;if(!s.value||v(w))return;m.preventDefault();const E=(g=(R=m.currentTarget)==null?void 0:R.getBoundingClientRect)==null?void 0:g.call(R);if(E){const S=E.top+E.height/2;h.value=m.clientY<S?"before":"after"}else h.value="after";d.value=w},te=(m,w)=>{var R,g;if(!s.value||v(w))return;const E=m.relatedTarget;(g=(R=m.currentTarget)==null?void 0:R.contains)!=null&&g.call(R,E)||d.value===w&&(d.value=void 0,h.value=void 0)},p=(m,w)=>{!s.value||v(w)||(m.preventDefault(),c.value!==void 0&&(x({fromIndex:c.value,position:h.value||"after",rowIndex:w}),C(),c.value=void 0,d.value=void 0,h.value=void 0))},D=()=>{C(),c.value=void 0,d.value=void 0,h.value=void 0};return{canMoveRowDown:_(()=>m=>m<r.value.length-1),canMoveRowUp:_(()=>m=>m>0),dragOverPosition:h,dragOverRowIndex:d,draggedRowIndex:c,isDndDisabledForRow:v,isDndLockedForRow:b,onDragleave:te,moveRowDown:H,moveRowUp:F,onDragend:D,onDragover:ee,onDragstart:J,onDrop:p}}const he=e=>{var t;return e!=null&&e.required?!0:((t=e==null?void 0:e.children)==null?void 0:t.some(he))||!1};function Ft(e,{columnsVisible:t=_(()=>[]),getRowKey:o=()=>{},isAddRowActive:a=y(!1)}){const l=n(e,"addRow"),i=n(e,"isAddable"),s=n(e,"isEditable"),r=n(e,"prepareEditModel"),c=n(e,"rows"),d=y(void 0),h=y(void 0),u=y(void 0),b=_(()=>!!d.value||a.value),v=_(()=>i.value?I(l.value):!1),A=_(()=>!s.value&&!i.value?!1:t.value.some(M=>he(M.formElement))),C=M=>{if(!I(r.value))return;const F=r.value(M);if((F==null?void 0:F.model)!==void 0)return U(F.model)};return{activeEditFocusColumnId:u,activeEditRowKey:d,activeEditModel:h,canAddRow:v,hasActiveEditRow:b,hasRequiredEditableColumns:A,isAddRowActive:a,onAddRow:()=>{b.value||!v.value||(d.value=void 0,h.value=C({rows:c.value}),u.value=void 0,a.value=!0)},onCancelEditRow:({trigger:M,id:F}={})=>{d.value=void 0,h.value=void 0,u.value=void 0,a.value=!1,M==="cancel"?setTimeout(()=>{le({selector:`#${F}_edit`})}):M==="save"&&setTimeout(()=>{le({selector:`#${F}`})})},onEditRow:({focusColumnId:M,row:F,rowIndex:H})=>{a.value||(h.value=C({row:F,rowIndex:H,rows:c.value}),u.value=M,d.value=o({row:F,rowIndex:H}))}}}function It(e){const t=n(e,"icons");return{iconsLocal:_(()=>({actionAddRow:Ue,...t.value}))}}function kt(e){const t=n(e,"keyId"),o=n(e,"rows"),a=n(e,"rowsFooter"),l=_(()=>o.value.length>0),i=_(()=>a.value.length>0);return{getRowKey:({row:r,rowIndex:c,isFooter:d=!1})=>{let h=c;if(t.value){const b=k(r,t.value);ce(b)||(h=b)}return`${d?"footer":"body"}_${h}`},hasRows:l,hasRowsFooter:i}}function xt(e){const t=n(e,"texts");return{textsLocal:_(()=>({actionsColumn:"_A_TABLE_FORM_ACTIONS_",actionAddRow:"_A_TABLE_FORM_ADD_ROW_",actionDelete:"_A_TABLE_FORM_DELETE_",actionDeleteConfirmBody:"_A_TABLE_FORM_DELETE_CONFIRM_BODY_",actionDeleteConfirmClose:"_A_TABLE_FORM_DELETE_CONFIRM_CLOSE_",actionDeleteConfirmHeader:"_A_TABLE_FORM_DELETE_CONFIRM_HEADER_",actionDeleteConfirmSave:"_A_TABLE_FORM_DELETE_CONFIRM_SAVE_",actionEdit:"_A_TABLE_FORM_EDIT_",actionEditCancel:"_A_TABLE_FORM_EDIT_CANCEL_",actionEditSave:"_A_TABLE_FORM_EDIT_SAVE_",editInfoText:void 0,emptyText:"_A_TABLE_FORM_EMPTY_",reorderColumn:"_A_TABLE_FORM_REORDER_COLUMN_",reorderDisabled:"_A_TABLE_FORM_REORDER_DISABLED_",reorderDown:"_A_TABLE_FORM_MOVE_DOWN_",reorderHandle:"_A_TABLE_FORM_REORDER_",reorderUp:"_A_TABLE_FORM_MOVE_UP_",...t.value}))}}function St(e){const t=n(e,"widths");return{widthsLocal:_(()=>({actionsColumnSingle:64,actionsColumnDouble:112,dndColumn:56,...t.value}))}}const z={name:"ATableForm",props:{actionsClasses:{type:Object,required:!1,default:()=>({})},actionsDisabledCallback:{type:Object,required:!1,default:()=>({})},actionsHideCallback:{type:Object,required:!1,default:()=>({})},actionsTitleCallback:{type:Object,required:!1,default:()=>({})},addRow:{type:Function,required:!1,default:void 0},columns:{type:Array,required:!0},columnsDefaultValue:{type:[String,Number],required:!1,default:""},changeModel:{type:Function,required:!1,default:void 0},errorIcon:{type:String,required:!1,default:He},extra:{type:Object,required:!1,default:void 0},focusAfterMove:{type:Boolean,required:!1,default:!0},icons:{type:Object,required:!1,default:()=>({})},id:{type:String,required:!1,default:()=>Ze("a_table_form_")},isActionsSticky:{type:Boolean,required:!1,default:!1},isAddable:{type:Boolean,required:!1,default:!1},isColumnsGrow:{type:Boolean,required:!1,default:!1},isDeletable:{type:Boolean,required:!1,default:!1},isDeletableConfirm:{type:Boolean,required:!1,default:!1},isDragAndDrop:{type:Boolean,required:!1,default:!1},isEditable:{type:Boolean,required:!1,default:!1},isEditOnRowClick:{type:Boolean,required:!1,default:!1},keyId:{type:String,required:!1,default:void 0},label:{type:[String,Number],required:!1,default:""},labelClass:{type:[String,Object,Array],required:!1,default:void 0},labelTag:{type:String,required:!1,default:"h2"},prepareEditModel:{type:Function,required:!1,default:void 0},rowClass:{type:[String,Object,Array,Function],required:!1,default:void 0},rowView:{type:String,required:!1,default:"table",validator:e=>["list","table"].includes(e)},rows:{type:Array,required:!1,default:()=>[]},rowsFooter:{type:Array,required:!1,default:()=>[]},saveRow:{type:Function,required:!1,default:()=>{}},texts:{type:Object,required:!1,default:()=>({})},widths:{type:Object,required:!1,default:()=>({})}},emits:["deleteRow","moveRow","updateRows"],setup(e,t){const o=n(e,"actionsDisabledCallback"),a=n(e,"actionsTitleCallback"),l=y(!1),{allColumnsLength:i,columnsVisible:s,hasActionsColumn:r}=Dt(e,{isAddRowActive:l}),{getRowKey:c,hasRows:d,hasRowsFooter:h}=kt(e),{textsLocal:u}=xt(e),{widthsLocal:b}=St(e),{iconsLocal:v}=It(e),{actionsClassesLocal:A}=Ct(e),{activeEditRowKey:C,activeEditModel:B,activeEditFocusColumnId:q,canAddRow:x,hasActiveEditRow:M,hasRequiredEditableColumns:F,onAddRow:H,onCancelEditRow:J,onEditRow:ee}=Ft(e,{columnsVisible:s,getRowKey:c,isAddRowActive:l}),{columnsStylesGrow:te,destroyColumnsGrowObserver:p,initColumnsGrowObserver:D}=Lt(e,{columnsVisible:s,hasActionsColumn:r,hasActiveEditRow:M,widthsLocal:b});$e(()=>{D()}),We(()=>{p()});const{canMoveRowDown:m,canMoveRowUp:w,dragOverPosition:E,dragOverRowIndex:R,draggedRowIndex:g,isDndDisabledForRow:S,isDndLockedForRow:L,moveRowDown:P,moveRowUp:K,onDragend:Q,onDragleave:ie,onDragover:N,onDragstart:$,onDrop:be}=Ot(e,t,{isDndDisabled:M}),{onDeleteRow:ve}=Mt(e,t),Ee=_(()=>{if(M.value)return!0;const oe=k(o.value,"add");return I(oe)?oe():!1}),Ae=_(()=>{const oe=k(a.value,"add");return I(oe)?oe():u.value.actionAddRow});return{activeEditFocusColumnId:q,activeEditRowKey:C,activeEditModel:B,allColumnsLength:i,addTitle:Ae,canAddRow:x,canMoveRowDown:m,canMoveRowUp:w,actionsClassesLocal:A,columnsStylesGrow:te,columnsVisible:s,draggedRowIndex:g,dragOverPosition:E,dragOverRowIndex:R,isDndDisabledForRow:S,isDndLockedForRow:L,getRowKey:c,hasActionsColumn:r,hasActiveEditRow:M,hasRequiredEditableColumns:F,hasRows:d,hasRowsFooter:h,iconsLocal:v,isAddDisabled:Ee,isAddRowActive:l,moveRowDown:P,moveRowUp:K,onAddRow:H,onCancelEditRow:J,onDeleteRow:ve,onDragend:Q,onDragleave:ie,onDragover:N,onDragstart:$,onDrop:be,onEditRow:ee,textsLocal:u,widthsLocal:b}},render(){return f("div",{class:"a_table_form"},[this.label&&f(Z,{class:["a_table_form__label",this.labelClass],html:this.label,tag:this.labelTag}),this.hasRequiredEditableColumns&&f(Le),f("div",{class:"a_table_form__wrapper"},[f("table",{id:this.id,class:["a_table_form__table",{a_table_form_drag_active:this.draggedRowIndex!==void 0,a_table_form__table_list:this.rowView==="list"}]},[this.rowView==="table"&&f("thead",{class:"a_table_form__head"},[f(se,{id:this.id,actionsClasses:this.actionsClasses,actionsDisabledCallback:this.actionsDisabledCallback,actionsHideCallback:this.actionsHideCallback,actionsTitleCallback:this.actionsTitleCallback,allColumnsLength:this.allColumnsLength,canMoveRowDown:this.canMoveRowDown,canMoveRowUp:this.canMoveRowUp,cellTag:"th",changeModel:this.changeModel,columns:this.columnsVisible,columnsStylesGrow:this.columnsStylesGrow,draggedRowIndex:this.draggedRowIndex,extra:this.extra,hasActionsColumn:this.hasActionsColumn,hasActiveEditRow:this.hasActiveEditRow,isActionsSticky:this.isActionsSticky,isActiveEditMode:!1,isDeletable:this.isDeletable,isDeletableConfirm:this.isDeletableConfirm,isDndDisabled:this.hasActiveEditRow,isDragAndDrop:this.isDragAndDrop,isEditable:this.isEditable,isEditOnRowClick:!1,isHeader:!0,moveRowDown:this.moveRowDown,moveRowUp:this.moveRowUp,onCancelEditRow:this.onCancelEditRow,onDeleteRow:this.onDeleteRow,onDragend:this.onDragend,onDragstart:this.onDragstart,onEditRow:this.onEditRow,row:{},rowIndex:0,rowView:this.rowView,rows:this.rows,saveRow:this.saveRow,texts:this.textsLocal,trClass:"a_table_form__row a_table_form__row_head",widths:this.widthsLocal},this.$slots)]),f("tbody",{class:"a_table_form__body"},this.hasRows||this.isAddRowActive?[...this.rows.map((e,t)=>{const o=this.getRowKey({row:e,rowIndex:t});return f(se,{key:o,id:this.id,actionsClasses:this.actionsClassesLocal,actionsDisabledCallback:this.actionsDisabledCallback,actionsHideCallback:this.actionsHideCallback,actionsTitleCallback:this.actionsTitleCallback,allColumnsLength:this.allColumnsLength,canMoveRowDown:this.canMoveRowDown,canMoveRowUp:this.canMoveRowUp,changeModel:this.changeModel,columns:this.columnsVisible,columnsStylesGrow:this.columnsStylesGrow,draggedRowIndex:this.draggedRowIndex,editModel:this.activeEditRowKey===o?this.activeEditModel:void 0,editFocusColumnId:this.activeEditRowKey===o?this.activeEditFocusColumnId:void 0,errorIcon:this.errorIcon,extra:this.extra,hasActionsColumn:this.hasActionsColumn,hasActiveEditRow:this.hasActiveEditRow,isActionsSticky:this.isActionsSticky,isActiveEditMode:this.activeEditRowKey===o,isCreateMode:!1,isDeletable:this.isDeletable,isDeletableConfirm:this.isDeletableConfirm,isDndDisabled:this.isDndDisabledForRow(t),isDndLocked:this.isDndLockedForRow(t),isDragAndDrop:this.isDragAndDrop,isEditable:this.isEditable,isEditOnRowClick:this.isEditOnRowClick,moveRowDown:this.moveRowDown,moveRowUp:this.moveRowUp,onCancelEditRow:this.onCancelEditRow,onDeleteRow:this.onDeleteRow,onDragend:this.onDragend,onDragleave:this.onDragleave,onDragover:this.onDragover,onDragstart:this.onDragstart,onDrop:this.onDrop,onEditRow:this.onEditRow,row:e,rowClass:this.rowClass,rowIndex:t,rowView:this.rowView,rows:this.rows,saveRow:this.saveRow,texts:this.textsLocal,widths:this.widthsLocal,trClass:["a_table_form__row",{a_table_form__row_drag_after:this.dragOverRowIndex===t&&this.dragOverPosition==="after",a_table_form__row_drag_before:this.dragOverRowIndex===t&&this.dragOverPosition==="before",a_table_form__row_drag_over:this.dragOverRowIndex===t,a_table_form__row_dragging:this.draggedRowIndex===t}]},this.$slots)}),this.isAddRowActive&&f(se,{id:this.id,actionsClasses:this.actionsClassesLocal,actionsDisabledCallback:this.actionsDisabledCallback,actionsHideCallback:this.actionsHideCallback,actionsTitleCallback:this.actionsTitleCallback,allColumnsLength:this.allColumnsLength,canMoveRowDown:this.canMoveRowDown,canMoveRowUp:this.canMoveRowUp,changeModel:this.changeModel,columns:this.columnsVisible,columnsStylesGrow:this.columnsStylesGrow,draggedRowIndex:this.draggedRowIndex,editModel:this.activeEditModel,errorIcon:this.errorIcon,extra:this.extra,hasActionsColumn:this.hasActionsColumn,hasActiveEditRow:this.hasActiveEditRow,isActionsSticky:this.isActionsSticky,isActiveEditMode:!0,isCreateMode:!0,isDeletable:!1,isDeletableConfirm:!1,isDndDisabled:!0,isDragAndDrop:this.isDragAndDrop,isEditable:!0,isEditOnRowClick:!1,key:"body_create",moveRowDown:this.moveRowDown,moveRowUp:this.moveRowUp,onCancelEditRow:this.onCancelEditRow,onDeleteRow:this.onDeleteRow,onDragend:this.onDragend,onDragleave:this.onDragleave,onDragover:this.onDragover,onDragstart:this.onDragstart,onDrop:this.onDrop,onEditRow:this.onEditRow,row:{},rowClass:this.rowClass,rowIndex:this.rows.length,rowView:this.rowView,rows:this.rows,saveRow:this.addRow,texts:this.textsLocal,trClass:"a_table_form__row a_table_form__row_create",widths:this.widthsLocal},this.$slots)]:[f("tr",{class:"a_table_form__row a_table_form__row_empty"},[f("td",{class:"a_table_form__cell a_table_form__empty",colspan:this.allColumnsLength},[f(Z,{tag:"span",text:this.textsLocal.emptyText})])])]),this.hasRowsFooter&&f("tfoot",{class:"a_table_form__foot"},this.rowsFooter.map((e,t)=>f(se,{id:this.id,actionsClasses:this.actionsClassesLocal,actionsDisabledCallback:this.actionsDisabledCallback,actionsHideCallback:this.actionsHideCallback,actionsTitleCallback:this.actionsTitleCallback,allColumnsLength:this.allColumnsLength,canMoveRowDown:this.canMoveRowDown,canMoveRowUp:this.canMoveRowUp,changeModel:this.changeModel,columns:this.columnsVisible,columnsStylesGrow:this.columnsStylesGrow,draggedRowIndex:this.draggedRowIndex,extra:this.extra,hasActionsColumn:this.hasActionsColumn,hasActiveEditRow:this.hasActiveEditRow,isActionsSticky:this.isActionsSticky,isActiveEditMode:!1,isDeletable:this.isDeletable,isDeletableConfirm:this.isDeletableConfirm,isDndDisabled:this.hasActiveEditRow,isDragAndDrop:this.isDragAndDrop,isEditable:this.isEditable,isEditOnRowClick:!1,isFooter:!0,key:this.getRowKey({isFooter:!0,row:e,rowIndex:t}),moveRowDown:this.moveRowDown,moveRowUp:this.moveRowUp,onCancelEditRow:this.onCancelEditRow,onDeleteRow:this.onDeleteRow,onDragend:this.onDragend,onDragstart:this.onDragstart,onEditRow:this.onEditRow,row:e,rowClass:this.rowClass,rowIndex:t,rowView:this.rowView,rows:this.rowsFooter,saveRow:this.saveRow,texts:this.textsLocal,widths:this.widthsLocal,trClass:"a_table_form__row a_table_form__row_footer"},this.$slots)))])]),this.canAddRow&&f("div",{class:"a_mt_3 a_text_right"},[f(X,{class:this.actionsClassesLocal.addRow,disabled:this.isAddDisabled,extra:this.extra,iconLeft:this.iconsLocal.actionAddRow,text:this.textsLocal.actionAddRow,textScreenReader:this.addTitle,title:this.addTitle,onClick:this.onAddRow})])])}};function Bt(){return{codeHtml:`<a-simple-table
  :columns="columns"
  :rows-footer="rowsFooter"
  :rows="rows"
  key-id="id"
  label="_A_TABLE_FORM_EXAMPLE_LABEL_"
/>
`}}function qt(){return{codeJs:`import {
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
};`}}const Pt={name:"PageTableFormBasic",components:{AlohaExample:Y,ATableForm:z},setup(){const{codeHtml:e}=Bt(),{codeJs:t}=qt(),o=[{id:"position",label:"_A_TABLE_FORM_COLUMN_POSITION_",maxWidth:96,minWidth:96,width:96,formElement:{type:"number"}},{id:"name",label:"_A_TABLE_FORM_COLUMN_NAME_",maxWidth:"18rem",minWidth:"12rem",width:"16rem",formElement:{type:"text"}},{id:"team",formElement:{translateData:!0,data:[{label:"_A_TABLE_FORM_TEAM_NORTH_",value:"north"},{label:"_A_TABLE_FORM_TEAM_WEST_",value:"west"},{label:"_A_TABLE_FORM_TEAM_SOUTH_",value:"south"},{label:"_A_TABLE_FORM_TEAM_EAST_",value:"east"}],keyId:"value",keyLabel:"label",type:"select"},label:"_A_TABLE_FORM_COLUMN_TEAM_",minWidth:"12rem"},{id:"score",footerDefaultValue:"68",footerKeyLabel:"score",formElement:{type:"integer"},label:"_A_TABLE_FORM_COLUMN_SCORE_",maxWidth:120,minWidth:120,width:120}],a=y([{id:1,name:"Марта Иванова",position:1,score:18,team:"north"},{id:2,name:"Олег Сидоров",position:2,score:17,team:"west"},{id:3,name:"Анна Петрова",position:3,score:16,team:"south"},{id:4,name:"Игорь Ковалёв",position:4,score:17,team:"east"}]);return{codeHtml:e,codeJs:t,columns:o,rows:a,rowsFooter:[{name:"_A_TABLE_FORM_FOOTER_TOTAL_",score:68}]}}};function Nt(e,t,o,a,l,i){const s=T("a-table-form"),r=T("aloha-example");return j(),V(r,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TABLE_FORM_EXAMPLE_HEADER_"},{default:G(()=>[O(s,{columns:e.columns,"rows-footer":e.rowsFooter,rows:e.rows,"key-id":"id",label:"_A_TABLE_FORM_EXAMPLE_LABEL_"},null,8,["columns","rows-footer","rows"])]),_:1},8,["code-html","code-js"])}const Ut=W(Pt,[["render",Nt]]);function Ht(){return{codeHtml:`<a-table-form
  :actions-disabled-callback="actionsDisabledCallback"
  :columns="columns"
  :is-drag-and-drop="true"
  :rows-footer="rowsFooter"
  :rows="rows"
  key-id="id"
  label="_A_TABLE_FORM_EXAMPLE_LABEL_"
  @update-rows="updateRows"
/>
`}}function $t(){return{codeJs:`import {
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
};`}}const Wt={name:"PageTableFormDND",components:{AlohaExample:Y,ATableForm:z},setup(){const{codeHtml:e}=Ht(),{codeJs:t}=$t(),o=[{id:"position",label:"_A_TABLE_FORM_COLUMN_POSITION_",maxWidth:96,minWidth:96,width:96,formElement:{type:"text"}},{id:"name",formElement:{type:"text"},label:"_A_TABLE_FORM_COLUMN_NAME_",maxWidth:"18rem",minWidth:"12rem",width:"16rem"},{id:"team",formElement:{translateData:!0,data:[{label:"_A_TABLE_FORM_TEAM_NORTH_",value:"north"},{label:"_A_TABLE_FORM_TEAM_WEST_",value:"west"},{label:"_A_TABLE_FORM_TEAM_SOUTH_",value:"south"},{label:"_A_TABLE_FORM_TEAM_EAST_",value:"east"}],keyId:"value",keyLabel:"label",type:"select"},label:"_A_TABLE_FORM_COLUMN_TEAM_",minWidth:"12rem"},{id:"score",footerDefaultValue:"68",footerKeyLabel:"score",formElement:{type:"integer"},label:"_A_TABLE_FORM_COLUMN_SCORE_",maxWidth:120,minWidth:120,width:120}],a=y([{id:1,name:"Марта Иванова",position:1,score:18,team:"north"},{dndDisabled:!0,id:2,name:"Олег Сидоров",position:2,score:17,team:"west"},{id:3,name:"Анна Петрова",position:3,score:16,team:"south"},{id:4,name:"Игорь Ковалёв",position:4,score:17,team:"east"}]);return{codeHtml:e,codeJs:t,columns:o,actionsDisabledCallback:{dnd:({row:r})=>r.dndDisabled},rows:a,rowsFooter:[{name:"_A_TABLE_FORM_FOOTER_TOTAL_",score:68}],updateRows:({rows:r,trigger:c})=>{a.value=r,console.log("trigger",c)}}}};function jt(e,t,o,a,l,i){const s=T("a-table-form"),r=T("aloha-example");return j(),V(r,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TABLE_FORM_DND_HEADER_",description:"_A_TABLE_FORM_DND_DESCRIPTION_",props:["actions-disabled-callback","is-drag-and-drop"]},{default:G(()=>[O(s,{"actions-disabled-callback":e.actionsDisabledCallback,columns:e.columns,"is-drag-and-drop":!0,"rows-footer":e.rowsFooter,rows:e.rows,"key-id":"id",label:"_A_TABLE_FORM_EXAMPLE_LABEL_",onUpdateRows:e.updateRows},null,8,["actions-disabled-callback","columns","rows-footer","rows","onUpdateRows"])]),_:1},8,["code-html","code-js"])}const Vt=W(Wt,[["render",jt]]);function Gt(){return{codeHtml:`<a-checkbox>
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
`}}function Jt(){return{codeJs:`import {
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
};`}}const Kt={name:"PageTableFormEdit",components:{ACheckbox:ue,AlohaExample:Y,ATableForm:z},setup(){const{codeHtml:e}=Gt(),{codeJs:t}=Jt(),o=[{label:"is-deletable-confirm",value:"is-deletable-confirm"},{label:"is-deletable",value:"is-deletable"},{label:"is-editable",value:"is-editable"},{label:"is-edit-on-row-click",value:"is-edit-on-row-click"},{label:"is-addable",value:"is-addable"}],a=y(["is-deletable-confirm","is-deletable","is-editable","is-edit-on-row-click","is-addable"]),l={actionEditCancel:"abbrechen",actionEditSave:"speichern",editInfoText:"Nur diese Zeile ist gerade im Bearbeitungsmodus."},i=[{id:"position",label:"_A_TABLE_FORM_COLUMN_POSITION_",maxWidth:96,minWidth:96,width:96,formElement:{controlsType:"none",type:"integer"}},{id:"name",formElement:{type:"text",required:!0},keyLabel:"name",label:"_A_TABLE_FORM_COLUMN_NAME_",maxWidth:"18rem",minWidth:"12rem",width:"16rem"},{id:"team",formElement:{data:[{label:"_A_TABLE_FORM_TEAM_NORTH_",value:"north"},{label:"_A_TABLE_FORM_TEAM_WEST_",value:"west"},{label:"_A_TABLE_FORM_TEAM_SOUTH_",value:"south"},{label:"_A_TABLE_FORM_TEAM_EAST_",value:"east"}],keyId:"value",keyLabel:"label",translateData:!0,type:"select"},label:"_A_TABLE_FORM_COLUMN_TEAM_",minWidth:"12rem"},{id:"score",footerDefaultValue:"68",footerKeyLabel:"score",formElement:{controlsType:"none",min:0,type:"integer"},label:"_A_TABLE_FORM_COLUMN_SCORE_",maxWidth:120,minWidth:120,width:120}],s=y([{id:1,name:"Marta Ivanova",position:1,score:18,team:"north"},{id:2,name:"Oleg Sidorov",position:2,score:17,team:"west"},{id:3,name:"Anna Petrova",position:3,score:16,team:"south"},{id:4,name:"Igor Kovalev",position:4,score:17,team:"east"}]);return{addRow:({model:u})=>{var v;console.log("model ",u);const b={};if((v=u.name)!=null&&v.trim()||(b.name=["Name ist erforderlich."]),u.team||(b.team=["Team ist erforderlich."]),u.score<18&&(b.score=["Score must be at least 18."]),Object.keys(b).length)return{errors:b};s.value.push({id:s.value.length+1,...u})},codeHtml:e,codeJs:t,columns:i,dataCheckbox:o,deleteRow:({row:u,rowIndex:b})=>{s.value.splice(b,1),console.log("row",u),console.log("rowIndex",b)},modelCheckbox:a,rows:s,rowsFooter:[{name:"_A_TABLE_FORM_FOOTER_TOTAL_",score:68}],saveRow:async({model:u,rowIndex:b})=>{var A;await new Promise(C=>{setTimeout(C,300)});const v={};if((A=u.name)!=null&&A.trim()||(v.name=["Name ist erforderlich."]),u.team||(v.team=["Team ist erforderlich."]),u.score<18&&(v.score=["Score must be at least 18."]),Object.keys(v).length)return{errors:v};s.value.splice(b,1,u)},texts:l}}};function Xt(e,t,o,a,l,i){const s=T("a-checkbox"),r=T("a-table-form"),c=T("aloha-example");return j(),V(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TABLE_FORM_EDIT_HEADER_",description:"_A_TABLE_FORM_EDIT_DESCRIPTION_",props:["is-addable","is-deletable","is-deletable-confirm","is-editable","save-row","texts"]},{default:G(()=>[O(s,{class:"a_mb_4",modelValue:e.modelCheckbox,"onUpdate:modelValue":t[0]||(t[0]=d=>e.modelCheckbox=d),data:e.dataCheckbox,"translate-data":!0,"key-id":"value","key-label":"label"},null,8,["modelValue","data"]),O(r,{"add-row":e.addRow,columns:e.columns,"is-addable":e.modelCheckbox.includes("is-addable"),"is-deletable-confirm":e.modelCheckbox.includes("is-deletable-confirm"),"is-deletable":e.modelCheckbox.includes("is-deletable"),"is-edit-on-row-click":e.modelCheckbox.includes("is-edit-on-row-click"),"is-editable":e.modelCheckbox.includes("is-editable"),"rows-footer":e.rowsFooter,rows:e.rows,"save-row":e.saveRow,texts:e.texts,"key-id":"id",label:"_A_TABLE_FORM_EXAMPLE_LABEL_",onDeleteRow:e.deleteRow},null,8,["add-row","columns","is-addable","is-deletable-confirm","is-deletable","is-edit-on-row-click","is-editable","rows-footer","rows","save-row","texts","onDeleteRow"])]),_:1},8,["code-html","code-js"])}const Yt=W(Kt,[["render",Xt]]);function zt(){return{codeHtml:`<a-table-form
  :columns="columns"
  :is-editable="true"
  :rows="rows"
  :save-row="saveRow"
  key-id="id"
  label="_A_TABLE_FORM_EXAMPLE_LABEL_"
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
        id: "name",
        formElement: {
          type: "text",
        },
        label: "_A_TABLE_FORM_COLUMN_NAME_",
      },
      {
        id: "status",
        formElement: {
          data: [
            { label: "_A_TABLE_FORM_EDIT_PROPS_STATUS_EDITABLE_", value: "editable" },
            { label: "_A_TABLE_FORM_EDIT_PROPS_STATUS_LOCKED_", value: "locked" },
          ],
          keyId: "value",
          keyLabel: "label",
          translateData: true,
          type: "select",
        },
        label: "_A_TABLE_FORM_EDIT_PROPS_COLUMN_STATUS_",
      },
      {
        id: "score",
        formElement: {
          min: 0,
          type: "integer",
        },
        formElementEditPropsCallback: ({ rowData }) => ({
          disabled: rowData.status === "locked",
        }),
        label: "_A_TABLE_FORM_COLUMN_SCORE_",
      },
    ];
    const rows = ref([
      { id: 1, name: "Marta Ivanova", score: 18, status: "editable" },
      { id: 2, name: "Oleg Sidorov", score: 17, status: "locked" },
    ]);
    const saveRow = ({ model, rowIndex }) => {
      rows.value.splice(rowIndex, 1, model);
    };

    return {
      columns,
      rows,
      saveRow,
    };
  },
};`}}const Zt={name:"PageTableFormEditProps",components:{AlohaExample:Y,ATableForm:z},setup(){const{codeHtml:e}=zt(),{codeJs:t}=Qt(),o=[{id:"name",formElement:{required:!0,type:"text"},label:"_A_TABLE_FORM_COLUMN_NAME_"},{id:"status",formElement:{data:[{label:"_A_TABLE_FORM_EDIT_PROPS_STATUS_EDITABLE_",value:"editable"},{label:"_A_TABLE_FORM_EDIT_PROPS_STATUS_LOCKED_",value:"locked"}],keyId:"value",keyLabel:"label",translateData:!0,type:"select"},label:"_A_TABLE_FORM_EDIT_PROPS_COLUMN_STATUS_"},{id:"score",formElement:{controlsType:"none",min:0,type:"integer"},formElementEditPropsCallback:({rowData:i})=>({disabled:i.status==="locked"}),label:"_A_TABLE_FORM_COLUMN_SCORE_",maxWidth:120,minWidth:120,width:120}],a=y([{id:1,name:"Marta Ivanova",score:18,status:"editable"},{id:2,name:"Oleg Sidorov",score:17,status:"locked"}]);return{codeHtml:e,codeJs:t,columns:o,rows:a,saveRow:({model:i,rowIndex:s})=>{a.value.splice(s,1,i)}}}};function eo(e,t,o,a,l,i){const s=T("a-table-form"),r=T("aloha-example");return j(),V(r,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TABLE_FORM_EDIT_PROPS_HEADER_",description:"_A_TABLE_FORM_EDIT_PROPS_DESCRIPTION_",props:["is-editable","save-row"]},{default:G(()=>[O(s,{columns:e.columns,"is-editable":!0,rows:e.rows,"save-row":e.saveRow,"key-id":"id",label:"_A_TABLE_FORM_EXAMPLE_LABEL_"},null,8,["columns","rows","save-row"])]),_:1},8,["code-html","code-js"])}const to=W(Zt,[["render",eo]]);function oo(){return{codeHtml:`<a-checkbox
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
`}}function ao(){return{codeJs:`import {
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
};`}}const so={name:"PageTableFormGrow",components:{ACheckbox:ue,AlohaExample:Y,ATableForm:z},setup(){const{codeHtml:e}=oo(),{codeJs:t}=ao(),o=[{label:"is-deletable",value:"is-deletable"},{label:"is-editable",value:"is-editable"},{label:"is-drag-and-drop",value:"is-drag-and-drop"}],a=y(["is-deletable","is-editable"]),l=[{id:"position",label:"_A_TABLE_FORM_COLUMN_POSITION_",minWidth:96,width:96,grow:1,formElement:{controlsType:"none",type:"integer"}},{id:"name",formElement:{type:"text"},label:"_A_TABLE_FORM_COLUMN_NAME_",minWidth:"12rem",width:"16rem",grow:2},{id:"team",formElement:{data:[{label:"_A_TABLE_FORM_TEAM_NORTH_",value:"north"},{label:"_A_TABLE_FORM_TEAM_WEST_",value:"west"},{label:"_A_TABLE_FORM_TEAM_SOUTH_",value:"south"},{label:"_A_TABLE_FORM_TEAM_EAST_",value:"east"}],keyId:"value",keyLabel:"label",translateData:!0,type:"select"},label:"_A_TABLE_FORM_COLUMN_TEAM_",minWidth:"12rem",width:"12rem",grow:1},{id:"score",footerDefaultValue:"68",footerKeyLabel:"score",formElement:{controlsType:"none",min:0,type:"integer"},label:"_A_TABLE_FORM_COLUMN_SCORE_",minWidth:120,width:120,grow:1}],i=[{id:"position",label:"_A_TABLE_FORM_COLUMN_POSITION_",minWidth:96,width:96,grow:1,formElement:{controlsType:"none",type:"integer"}},{id:"name",formElement:{type:"text"},label:"_A_TABLE_FORM_COLUMN_NAME_",minWidth:"12rem",width:"16rem",grow:3}],s=y([{id:1,name:"Marta Ivanova",position:1,score:18,team:"north"},{id:2,name:"Oleg Sidorov",position:2,score:17,team:"west"},{id:3,name:"Anna Petrova",position:3,score:16,team:"south"},{id:4,name:"Igor Kovalev",position:4,score:17,team:"east"}]);return{codeHtml:e,codeJs:t,columns1:l,columns2:i,dataCheckbox:o,deleteRow:({rowIndex:u})=>{s.value.splice(u,1)},modelCheckbox:a,rows:s,rowsFooter:[{name:"_A_TABLE_FORM_FOOTER_TOTAL_",score:68}],saveRow:({model:u,rowIndex:b})=>{s.value.splice(b,1,u)},texts:{editInfoText:"Only one row can be edited at a time."}}}},lo={class:"a_mb_4"};function io(e,t,o,a,l,i){const s=T("a-checkbox"),r=T("a-table-form"),c=T("aloha-example");return j(),V(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TABLE_FORM_GROW_HEADER_",description:"_A_TABLE_FORM_GROW_DESCRIPTION_",props:["is-columns-grow","is-deletable","is-drag-and-drop","is-editable"]},{default:G(()=>[O(s,{class:"a_mb_4",modelValue:e.modelCheckbox,"onUpdate:modelValue":t[0]||(t[0]=d=>e.modelCheckbox=d),data:e.dataCheckbox,"key-id":"value","key-label":"label"},null,8,["modelValue","data"]),je("div",lo,[O(r,{columns:e.columns1,"is-columns-grow":!0,"is-deletable":e.modelCheckbox.includes("is-deletable"),"is-drag-and-drop":e.modelCheckbox.includes("is-drag-and-drop"),"is-editable":e.modelCheckbox.includes("is-editable"),"rows-footer":e.rowsFooter,rows:e.rows,"save-row":e.saveRow,texts:e.texts,"key-id":"id",label:"_A_TABLE_FORM_EXAMPLE_LABEL_",onDeleteRow:e.deleteRow},null,8,["columns","is-deletable","is-drag-and-drop","is-editable","rows-footer","rows","save-row","texts","onDeleteRow"])]),O(r,{columns:e.columns2,"is-columns-grow":!0,"is-deletable":e.modelCheckbox.includes("is-deletable"),"is-drag-and-drop":e.modelCheckbox.includes("is-drag-and-drop"),"is-editable":e.modelCheckbox.includes("is-editable"),"rows-footer":e.rowsFooter,rows:e.rows,"save-row":e.saveRow,texts:e.texts,"key-id":"id",label:"_A_TABLE_FORM_EXAMPLE_LABEL_",onDeleteRow:e.deleteRow},null,8,["columns","is-deletable","is-drag-and-drop","is-editable","rows-footer","rows","save-row","texts","onDeleteRow"])]),_:1},8,["code-html","code-js"])}const ro=W(so,[["render",io]]);function no(){return{codeHtml:`<a-table-form
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
`}}function co(){return{codeJs:`import {
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
};`}}const ne=({id:e,label:t,negativeId:o,positiveId:a,type:l="integer"})=>({id:e,label:t,formElement:{children:[{classColumn:"a_column a_column_6",controlsType:"none",id:o,label:"_A_TABLE_FORM_LIST_NEGATIVE_",type:l},{classColumn:"a_column a_column_6",controlsType:"none",id:a,label:"_A_TABLE_FORM_LIST_POSITIVE_",type:l}],classColumn:"a_column a_column_4",classColumns:"a_columns a_columns_count_12 a_columns_gap_2",type:"fieldset"}}),uo={name:"PageTableFormList",components:{AlohaExample:Y,ATableForm:z},setup(){const{codeHtml:e}=no(),{codeJs:t}=co(),o=[{id:"fundingTypes",label:"_A_TABLE_FORM_LIST_FUNDING_TYPES_",formElement:{classColumn:"a_column a_column_12",data:[{label:"_A_TABLE_FORM_LIST_FUNDING_TYPE_FEES_",value:"fees"},{label:"_A_TABLE_FORM_LIST_FUNDING_TYPE_TRAVEL_",value:"travel"},{label:"_A_TABLE_FORM_LIST_FUNDING_TYPE_INVESTMENT_",value:"investment"}],keyId:"value",keyLabel:"label",required:!0,translateData:!0,type:"multiselect"}},ne({id:"percentDeviation",label:"_A_TABLE_FORM_LIST_PERCENT_DEVIATION_",negativeId:"percentNegative",positiveId:"percentPositive"}),ne({id:"amountDeviation",label:"_A_TABLE_FORM_LIST_AMOUNT_DEVIATION_",negativeId:"amountNegative",positiveId:"amountPositive",type:"currency"}),ne({id:"shareDeviation",label:"_A_TABLE_FORM_LIST_SHARE_DEVIATION_",negativeId:"shareNegative",positiveId:"sharePositive"}),{id:"exceedAsError",label:"_A_TABLE_FORM_LIST_EXCEED_AS_ERROR_",formElement:{classColumn:"a_column a_column_12",type:"oneCheckbox"}},{id:"validationMessage",label:"_A_TABLE_FORM_LIST_VALIDATION_MESSAGE_",formElement:{classColumn:"a_column a_column_12",required:!0,rows:2,type:"textarea"}}],a=y([{amountNegative:5300,amountPositive:5300,exceedAsError:!0,fundingTypes:["fees","travel","investment"],id:1,percentNegative:20,percentPositive:20,shareNegative:10,sharePositive:5,validationMessage:"The configured deviation threshold was exceeded."},{amountNegative:2500,amountPositive:3e3,exceedAsError:!1,fundingTypes:["travel"],id:2,percentNegative:10,percentPositive:15,shareNegative:4,sharePositive:6,validationMessage:"Please verify the entered values."}]),l=d=>{var u,b;const h={};return(u=d.fundingTypes)!=null&&u.length||(h.fundingTypes=["_A_TABLE_FORM_LIST_ERROR_REQUIRED_"]),(b=d.validationMessage)!=null&&b.trim()||(h.validationMessage=["_A_TABLE_FORM_LIST_ERROR_REQUIRED_"]),h};return{addRow:({model:d})=>{const h=l(d);if(Object.keys(h).length)return{errors:h};a.value.push({...d,id:Math.max(0,...a.value.map(u=>u.id))+1})},codeHtml:e,codeJs:t,columns:o,deleteRow:({rowIndex:d})=>{a.value.splice(d,1)},rows:a,saveRow:({model:d,rowIndex:h})=>{const u=l(d);if(Object.keys(u).length)return{errors:u};a.value.splice(h,1,d)},updateRows:({rows:d})=>{a.value=d}}}};function _o(e,t,o,a,l,i){const s=T("a-table-form"),r=T("aloha-example");return j(),V(r,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TABLE_FORM_LIST_HEADER_",description:"_A_TABLE_FORM_LIST_DESCRIPTION_",props:["row-view"]},{default:G(()=>[O(s,{"add-row":e.addRow,columns:e.columns,"is-addable":!0,"is-deletable-confirm":!0,"is-drag-and-drop":!0,"is-editable":!0,rows:e.rows,"save-row":e.saveRow,"key-id":"id",label:"_A_TABLE_FORM_LIST_LABEL_","row-view":"list",onDeleteRow:e.deleteRow,onUpdateRows:e.updateRows},null,8,["add-row","columns","rows","save-row","onDeleteRow","onUpdateRows"])]),_:1},8,["code-html","code-js"])}const mo=W(uo,[["render",_o]]);function fo(){return{codeHtml:`<a-one-checkbox
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
`}}function wo(){return{codeJs:`import {
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
};`}}const ho={name:"PageTableFormSticky",components:{AlohaExample:Y,AOneCheckbox:Me,ATableForm:z},setup(){const{codeHtml:e}=fo(),{codeJs:t}=wo(),o=y(!0),a=Array.from({length:20},(i,s)=>{const r=s+1;return{id:`c${r}`,label:`${r}`,maxWidth:120,minWidth:120,width:120,formElement:{controlsType:"none",type:"integer"}}}),l=y(Array.from({length:6},(i,s)=>{const r={id:s+1};return a.forEach((c,d)=>{r[c.id]=(s+1)*100+d+1}),r}));return{codeHtml:e,codeJs:t,columns:a,isActionsSticky:o,rows:l}}};function bo(e,t,o,a,l,i){const s=T("a-one-checkbox"),r=T("a-table-form"),c=T("aloha-example");return j(),V(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TABLE_FORM_STICKY_HEADER_",description:"_A_TABLE_FORM_STICKY_DESCRIPTION_",props:["is-actions-sticky","is-deletable-confirm","is-editable"]},{default:G(()=>[O(s,{class:"a_mb_4",modelValue:e.isActionsSticky,"onUpdate:modelValue":t[0]||(t[0]=d=>e.isActionsSticky=d),label:"isActionsSticky"},null,8,["modelValue"]),O(r,{columns:e.columns,"is-actions-sticky":e.isActionsSticky,"is-deletable-confirm":!0,"is-editable":!0,rows:e.rows,"key-id":"id",label:"20 columns"},null,8,["columns","is-actions-sticky","rows"])]),_:1},8,["code-html","code-js"])}const vo=W(ho,[["render",bo]]);function Eo(){return{pageTitle:_(()=>Oe({placeholder:"_A_TABLE_FORM_PAGE_TITLE_"}))}}const Ao={name:"PageTableForm",components:{AlohaPage:Re,PageTableFormBasic:Ut,PageTableFormDND:Vt,PageTableFormEdit:Yt,PageTableFormEditProps:to,PageTableFormGrow:ro,PageTableFormList:mo,PageTableFormSticky:vo},setup(){const{pageTitle:e}=Eo();return{pageTitle:e}}};function Ro(e,t,o,a,l,i){const s=T("page-table-form-basic"),r=T("page-table-form-d-n-d"),c=T("page-table-form-edit"),d=T("page-table-form-edit-props"),h=T("page-table-form-list"),u=T("page-table-form-sticky"),b=T("page-table-form-grow"),v=T("aloha-page");return j(),V(v,{"page-title":e.pageTitle},{body:G(()=>[O(s),O(r),O(c),O(d),O(h),O(u),O(b)]),_:1},8,["page-title"])}const qo=W(Ao,[["render",Ro]]);export{qo as default};
