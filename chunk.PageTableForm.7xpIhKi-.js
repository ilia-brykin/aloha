import{A as Z,a as me}from"./chunk.AlohaExample.DgUiUrTr.js";import{d as he,s as ae,A as j,c as $,b as fe,f as be,e as we,h as ve,i as Ae,j as Ee,_ as G,k as ne,l as Re,g as pe}from"./bundle.index.CMibbGGJ.js";import{t as s,d as _,h as m,M as ie,l as ye,aX as De,L as Ce,O as ge,C as Te,aY as Me,aZ as Le,g as Oe,r as D,j as Fe,P as xe,E as ke,z as Be,o as Se,Y as V,W as J,aU as K,f as T,$ as F,_ as Ie}from"./chunk.vendor.BEEJbev-.js";import{i as qe,j as B,r as S,l as W,M as Ne,T as Pe,v as He,h as Ue,W as $e,a as re,d as We,b as je,u as Ge}from"./chunk.vendor-lodash.CwOx-Q_g.js";import{A as Ve}from"./chunk.AFormElement.CwTmYta8.js";import"./chunk.APageTabTitle.zKto--AH.js";import"./chunk.AlohaHighlightjs.De6fh8wy.js";import"./chunk.translations-ar.elbT6Y_t.js";import"./chunk.translations-de.Cuff5Ky-.js";import"./chunk.translations-en.CtPp-H2K.js";import"./chunk.translations-es.DzYMGThG.js";import"./chunk.translations-fr.DcK5skg0.js";import"./chunk.translations-hr.C_RX54US.js";import"./chunk.translations-it.BofMQSkf.js";import"./chunk.translations-ru.BFp9cKv_.js";function Je(e){const t=s(e,"column"),a=s(e,"isEditable"),l=s(e,"isEditMode");return{disabledLocal:_(()=>{var r,o;return!!((o=(r=t.value)==null?void 0:r.formElement)!=null&&o.disabled)||a.value&&!l.value})}}function Ke(e){const t=s(e,"column"),a=s(e,"isEditable"),l=s(e,"isEditMode"),n=s(e,"isFooter");return{readonlyLocal:_(()=>{var o,i,c,d;return n.value?!0:a.value?(i=(o=t.value)==null?void 0:o.formElement)!=null&&i.useRowReadonly?!l.value:!!((d=(c=t.value)==null?void 0:c.formElement)!=null&&d.readonly):!0})}}function Xe(e){const t=s(e,"column"),a=s(e,"isFooter"),l=_(()=>a.value?t.value.footerSlot:t.value.slot),n=_(()=>a.value?t.value.footerSlotAfter:t.value.slotAfter),r=_(()=>!!l.value),o=_(()=>!!n.value);return{hasSlot:r,hasSlotAfter:o,slotName:l,slotNameAfter:n}}function le(e){if(!(e==null||e===""))return typeof e=="number"?`${e}px`:e}function de(e){const t=s(e,"column");return{columnStyles:_(()=>{const l={},n=le(t.value.width),r=le(t.value.maxWidth),o=le(t.value.minWidth);return n&&(l.width=n),r&&(l.maxWidth=r),o&&(l.minWidth=o),qe(t.value.style)?{...l,...t.value.style}:t.value.style?[l,t.value.style]:l})}}const Ye={name:"ATableFormCell",props:{column:{type:Object,required:!0},columnIndex:{type:Number,required:!0},columnStyle:{type:Object,required:!1,default:void 0},errorIcon:{type:String,required:!1,default:void 0},errors:{type:Object,required:!1,default:()=>({})},id:{type:String,required:!0},isEditMode:{type:Boolean,required:!1,default:!1},isEditable:{type:Boolean,required:!1,default:!1},isFooter:{type:Boolean,required:!1,default:!1},row:{type:Object,required:!0},rowData:{type:Object,required:!1,default:void 0},rowIndex:{type:Number,required:!0},rows:{type:Array,required:!0},tag:{type:String,required:!1,default:"td"}},emits:["updateRowData"],setup(e){const{columnStyles:t}=de({column:e.column}),{readonlyLocal:a}=Ke(e),{disabledLocal:l}=Je(e),{hasSlot:n,hasSlotAfter:r,slotName:o,slotNameAfter:i}=Xe(e),c=_(()=>e.rowData||e.row);return{columnStyles:t,disabledLocal:l,hasSlot:n,hasSlotAfter:r,readonlyLocal:a,rowDataLocal:c,slotName:o,slotNameAfter:i}},methods:{updateRowData({item:e,model:t}){this.$emit("updateRowData",{column:this.column,columnId:this.column.id,item:e,model:t,value:t})}},render(){const{type:e="text",...t}=this.column.formElement||{},a={column:this.column,columnIndex:this.columnIndex,row:this.row,rowIndex:this.rowIndex,rows:this.rows};return m(this.tag,{class:["a_table_form__cell",`a_table_form__cell_${this.tag}`,this.column.class,this.isFooter?this.column.classFooter:this.column.classRow],style:[this.columnStyles,this.columnStyle]},[this.hasSlot&&this.$slots[this.slotName]?this.$slots[this.slotName](a):m(Ve,{id:this.column.id,errorIcon:this.errorIcon,idPrefix:this.id,...t,change:this.updateRowData,disabled:this.disabledLocal,errors:B(this.errors,this.column.id),errorsClass:"a_sr_only",modelValue:B(this.rowDataLocal,this.column.id),readonly:this.readonlyLocal,type:e}),this.hasSlotAfter&&this.$slots[this.slotNameAfter]?this.$slots[this.slotNameAfter](a):null])}};function ze(e,{idBtnDelete:t=_(()=>""),isActionsDisabled:a=_(()=>!1)}){const l=s(e,"id"),n=s(e,"isDeletable"),r=s(e,"isDeletableConfirm"),o=s(e,"onDeleteRow"),i=s(e,"row"),c=s(e,"rowIndex"),d=s(e,"texts"),{closeConfirm:v,openConfirm:f}=he(),b=()=>{v(),ie().then(()=>{ae({selector:`#${t.value}`})})},R=()=>{f({bodyHtml:d.value.actionDeleteConfirmBody,closeButtonText:d.value.actionDeleteConfirmClose,headerText:d.value.actionDeleteConfirmHeader,save:async()=>{await o.value({btnDeleteId:t.value,row:i.value,rowIndex:c.value,rowId:l.value}),v()},close:b,saveButtonText:d.value.actionDeleteConfirmSave})};return{onDeleteClick:()=>{if(!a.value){if(r.value){R();return}n.value&&o.value({btnDeleteId:t.value,row:i.value,rowIndex:c.value,rowId:l.value})}}}}function Ze(e){const t=s(e,"actionsDisabledCallback"),a=s(e,"hasActiveEditRow"),l=s(e,"isActiveEditMode"),n=s(e,"row"),r=s(e,"rowIndex"),o=_(()=>a.value&&!l.value),i=_(()=>{if(o.value)return!0;const d=B(t.value,"delete");return S(d)?d({row:n.value,rowIndex:r.value}):!1}),c=_(()=>{if(o.value)return!0;const d=B(t.value,"edit");return S(d)?d({row:n.value,rowIndex:r.value}):!1});return{isDeleteDisabled:i,isEditDisabled:c}}function Qe(e){const t=s(e,"actionsHideCallback"),a=s(e,"row"),l=s(e,"rowIndex"),n=_(()=>{const o=B(t.value,"delete");return S(o)?o({row:a.value,rowIndex:l.value}):!1}),r=_(()=>{const o=B(t.value,"edit");return S(o)?o({row:a.value,rowIndex:l.value}):!1});return{isDeleteHidden:n,isEditHidden:r}}function et(e){const t=s(e,"id"),a=_(()=>`${t.value}_delete`),l=_(()=>`${t.value}_edit`),n=_(()=>`${t.value}_cancel`),r=_(()=>`${t.value}_save`);return{idBtnCancel:n,idBtnDelete:a,idBtnEdit:l,idBtnSave:r}}function tt(e){const t=s(e,"isDeletable"),a=s(e,"isDeletableConfirm"),l=s(e,"isEditable"),n=s(e,"isActiveEditMode"),r=s(e,"widths");return{columnStyles:_(()=>{const i=t.value||a.value,c=l.value||n.value&&i?r.value.actionsColumnDouble:r.value.actionsColumnSingle;return{maxWidth:`${c}px`,minWidth:`${c}px`,width:`${c}px`}})}}function ot(e){const t=s(e,"row"),a=s(e,"rowIndex"),l=s(e,"texts"),n=s(e,"actionsTitleCallback"),r=_(()=>{const i=B(n.value,"delete");return S(i)?i({row:t.value,rowIndex:a.value}):l.value.actionDelete}),o=_(()=>{const i=B(n.value,"edit");return S(i)?i({row:t.value,rowIndex:a.value}):l.value.actionEdit});return{deleteTitle:r,editTitle:o}}const at={name:"ATableFormCellAction",props:{actionsClasses:{type:Object,required:!1,default:()=>({})},actionsDisabledCallback:{type:Object,required:!1,default:()=>({})},actionsHideCallback:{type:Object,required:!1,default:()=>({})},actionsTitleCallback:{type:Object,required:!1,default:()=>({})},extra:{type:Object,required:!1,default:void 0},hasActiveEditRow:{type:Boolean,required:!1,default:!1},id:{type:String,required:!0},isActionsSticky:{type:Boolean,required:!1,default:!1},isActiveEditMode:{type:Boolean,required:!1,default:!1},isDeletable:{type:Boolean,required:!1,default:!1},isDeletableConfirm:{type:Boolean,required:!1,default:!1},isEditable:{type:Boolean,required:!1,default:!1},isFooter:{type:Boolean,required:!1,default:!1},isHeader:{type:Boolean,required:!1,default:!1},isSaving:{type:Boolean,required:!1,default:!1},onCancelEditRow:{type:Function,required:!0},onDeleteRow:{type:Function,required:!0},onEditRow:{type:Function,required:!0},onSaveEditRow:{type:Function,required:!0},row:{type:Object,required:!0},rowIndex:{type:Number,required:!0},texts:{type:Object,required:!1,default:()=>({})},widths:{type:Object,required:!1,default:()=>({})}},setup(e){const{isDeleteDisabled:t,isEditDisabled:a}=Ze(e),{isDeleteHidden:l,isEditHidden:n}=Qe(e),{idBtnCancel:r,idBtnDelete:o,idBtnEdit:i,idBtnSave:c}=et(e),{onDeleteClick:d}=ze(e,{idBtnDelete:o,isActionsDisabled:t}),{columnStyles:v}=tt(e),{deleteTitle:f,editTitle:b}=ot(e);return{columnStyles:v,deleteTitle:f,editTitle:b,idBtnCancel:r,idBtnDelete:o,idBtnEdit:i,idBtnSave:c,isDeleteDisabled:t,isDeleteHidden:l,isEditDisabled:a,isEditHidden:n,onDeleteClick:d}},render(){const e=this.isHeader?"th":"td";return m(e,{class:["a_table_form__cell",`a_table_form__cell_${e}`,"a_table_form__cell_actions",{a_table_form__cell_actions_sticky:this.isActionsSticky}],style:this.columnStyles},[this.isHeader?m("span",{class:"a_sr_only"},[m(j,{tag:"span",text:this.texts.actionsColumn})]):this.isFooter?null:m("div",{class:"a_table_form__actions",role:"group"},this.isActiveEditMode?[m($,{id:this.idBtnCancel,class:["a_table_form__action_button",this.actionsClasses.editCancel],disabled:this.isSaving,extra:this.extra,iconLeft:ye,title:this.texts.actionEditCancel,textScreenReader:this.texts.actionEditCancel,onClick:()=>this.onCancelEditRow({id:this.id,row:this.row,rowIndex:this.rowIndex,trigger:"cancel"})}),m($,{id:this.idBtnSave,class:["a_table_form__action_button",this.actionsClasses.editSave],disabled:this.isSaving,extra:this.extra,iconLeft:De,title:this.texts.actionEditSave,textScreenReader:this.texts.actionEditSave,onClick:()=>this.onSaveEditRow({id:this.id,row:this.row,rowIndex:this.rowIndex})})]:[(this.isDeletable||this.isDeletableConfirm)&&!this.isDeleteHidden&&m($,{id:this.idBtnDelete,class:["a_table_form__action_button",this.actionsClasses.delete],disabled:this.isDeleteDisabled,extra:this.extra,iconLeft:Ce,title:this.deleteTitle,textScreenReader:this.deleteTitle,onClick:this.onDeleteClick}),this.isEditable&&!this.isEditHidden&&m($,{id:this.idBtnEdit,class:["a_table_form__action_button",this.actionsClasses.edit],disabled:this.isEditDisabled,extra:this.extra,iconLeft:ge,title:this.editTitle,textScreenReader:this.editTitle,onClick:()=>this.onEditRow({id:this.id,row:this.row,rowIndex:this.rowIndex})})])])}};function st(e){const t=s(e,"id"),a=_(()=>`${t.value}_up`);return{idBtnDown:_(()=>`${t.value}_down`),idBtnUp:a}}const lt={name:"ATableFormCellDnd",props:{canMoveRowDown:{type:Function,required:!0},canMoveRowUp:{type:Function,required:!0},id:{type:String,required:!0},isCreateMode:{type:Boolean,required:!1,default:!1},isDragAndDrop:{type:Boolean,required:!1,default:!1},isDndDisabled:{type:Boolean,required:!1,default:!1},isFooter:{type:Boolean,required:!1,default:!1},isHeader:{type:Boolean,required:!1,default:!1},moveRowDown:{type:Function,required:!0},moveRowUp:{type:Function,required:!0},onDragend:{type:Function,required:!0},onDragstart:{type:Function,required:!0},rowIndex:{type:Number,required:!0},texts:{type:Object,required:!1,default:()=>({})},widths:{type:Object,required:!1,default:()=>({})}},setup(e){const{idBtnDown:t,idBtnUp:a}=st(e);return{columnStyles:_(()=>({maxWidth:`${e.widths.dndColumn}px`,minWidth:`${e.widths.dndColumn}px`,width:`${e.widths.dndColumn}px`})),idBtnDown:t,idBtnUp:a}},render(){const e=this.isHeader?"th":"td",t=this.isDragAndDrop&&!this.isDndDisabled;return m(e,{class:["a_table_form__cell",`a_table_form__cell_${e}`,"a_table_form__cell_reorder"],style:this.columnStyles},[this.isHeader?m("span",{class:"a_sr_only"},[m(j,{tag:"span",text:this.texts.reorderColumn})]):this.isCreateMode||this.isFooter?null:m("div",{class:"a_table_form__reorder_actions"},[this.canMoveRowUp(this.rowIndex)&&m($,{id:this.idBtnUp,class:"a_sr_only_focusable a_btn a_btn_transparent_dark a_table_form__reorder_button",disabled:this.isDndDisabled,iconLeft:Te,preventKeyboardRepeat:!0,tabindex:this.isDndDisabled?-1:void 0,title:this.texts.reorderUp,textScreenReader:this.texts.reorderUp,onClick:()=>this.moveRowUp(this.rowIndex)}),m("span",{ariaHidden:!0,class:["a_table_form__reorder_handle",{a_table_form__reorder_handle_disabled:this.isDndDisabled}],draggable:t,onDragend:t?this.onDragend:void 0,onDragstart:t?a=>this.onDragstart(a,this.rowIndex):void 0},[m(fe,{class:"a_table_form__reorder_icon",icon:this.isDndDisabled?Me:Le})]),m("span",{class:"a_sr_only"},[m(j,{tag:"span",text:this.isDndDisabled?this.texts.reorderDisabled:this.texts.reorderHandle})]),this.canMoveRowDown(this.rowIndex)&&m($,{id:this.idBtnDown,class:"a_sr_only_focusable a_btn a_btn_transparent_dark a_table_form__reorder_button",disabled:this.isDndDisabled,iconLeft:Oe,preventKeyboardRepeat:!0,tabindex:this.isDndDisabled?-1:void 0,title:this.texts.reorderDown,textScreenReader:this.texts.reorderDown,onClick:()=>this.moveRowDown(this.rowIndex)})])])}},it={name:"ATableFormTh",props:{column:{type:Object,required:!0},columnStyle:{type:Object,required:!1,default:void 0},isEditable:{type:Boolean,required:!1,default:!1}},setup(e){const{columnStyles:t}=de({column:e.column});return{columnStyles:t}},render(){var e;return m("th",{class:["a_table_form__cell","a_table_form__cell_th",this.column.class],style:[this.columnStyles,this.columnStyle]},[this.column.slotHeader&&this.$slots[this.column.slotHeader]?this.$slots[this.column.slotHeader]({column:this.column,isEditable:this.isEditable}):this.column.label&&m(j,{html:this.column.label,tag:"span"}),this.isEditable&&((e=this.column.formElement)==null?void 0:e.required)&&m("span",{class:"a_label__required"},"*")])}};function nt(e,{hasErrors:t=_(()=>!1)}){const a=s(e,"hasActiveEditRow"),l=s(e,"isActiveEditMode"),n=s(e,"isCreateMode"),r=s(e,"isFooter"),o=s(e,"isHeader"),i=s(e,"row"),c=s(e,"rowClass"),d=s(e,"rowIndex"),v=s(e,"trClass"),f=_(()=>S(c.value)?c.value({row:i.value,rowIndex:d.value,rowindex:d.value,isCreateMode:n.value,isFooter:r.value,isHeader:o.value}):c.value),b=_(()=>[v.value,f.value,{a_table_form__row_active:!o.value&&!r.value&&l.value,a_table_form__row_errors:!o.value&&!r.value&&t.value,a_table_form__row_inactive:!o.value&&!r.value&&a.value&&!l.value}]);return{rowClassLocal:f,trClassLocal:b}}function rt(e,{errorsLocal:t=D(void 0)}){const a=s(e,"changeModel"),l=s(e,"onCancelEditRow"),n=s(e,"row"),r=s(e,"rows"),o=s(e,"rowIndex"),i=s(e,"saveRow"),c=D(!1),d=D(void 0),v=({column:R,columnId:A,item:x,model:I})=>{d.value||(d.value=W(n.value)||{});let k;a.value&&(k=a.value({modelAll:d.value,row:n.value,column:R,model:I,item:x})),k!=null&&k.model?d.value=W(k.model):Ne(d.value,A,I),Pe(t.value,A)},f=({trigger:R,id:A}={})=>{l.value({row:n.value,rowIndex:o.value,trigger:R,id:A})};return{cancelEditRow:f,isSaving:c,modelLocal:d,saveEditRow:async({id:R}={})=>{if(!c.value){t.value={},c.value=!0;try{const A=await i.value({model:W(d.value),row:n.value,rowIndex:o.value,rows:r.value});if(A!=null&&A.errors){t.value=W(A.errors);return}f({trigger:"save",id:R})}catch(A){t.value=A}finally{c.value=!1}}},updateModelLocal:v}}function dt(e){const t=s(e,"columns"),a=D({}),l=_(()=>!He(a.value)),n=_(()=>{const r=[];return Ue(t.value,o=>{const i=W(o.formElement)||{};i.type=i.type||"text",i.label=i.label||o.label,i.id=i.id||o.id,r.push(i)}),r});return{errorsLocal:a,hasErrors:l,optionsListForErrors:n}}function ct({idTr:e=_(()=>"")}){return{focusFirstEditableElement:()=>{const a=document.getElementById(e.value);if(!a)return;const n=Array.from(a.querySelectorAll(".a_table_form__cell:not(.a_table_form__cell_actions)")).map(r=>r.querySelector(be)).find(Boolean);n==null||n.focus()}}}function ut(e){const t=s(e,"id"),a=s(e,"isHeader"),l=s(e,"isFooter"),n=s(e,"rowIndex");return{idTr:_(()=>`${t.value}_${n.value}${a.value?"_header":""}${l.value?"_footer":""}`)}}const oe={name:"ATableFormRow",props:{actionsClasses:{type:Object,required:!1,default:()=>({})},actionsDisabledCallback:{type:Object,required:!1,default:()=>({})},actionsHideCallback:{type:Object,required:!1,default:()=>({})},actionsTitleCallback:{type:Object,required:!1,default:()=>({})},allColumnsLength:{type:Number,required:!0},canMoveRowDown:{type:Function,required:!0},canMoveRowUp:{type:Function,required:!0},cellTag:{type:String,required:!1,default:void 0},changeModel:{type:Function,required:!1,default:void 0},columns:{type:Array,required:!0},columnsStylesGrow:{type:Object,required:!1,default:()=>({})},draggedRowIndex:{type:Number,required:!1,default:void 0},editModel:{type:Object,required:!1,default:void 0},errorIcon:{type:String,required:!1,default:void 0},extra:{type:Object,required:!1,default:void 0},hasActionsColumn:{type:Boolean,required:!1,default:!1},hasActiveEditRow:{type:Boolean,required:!1,default:!1},id:{type:String,required:!0},isActionsSticky:{type:Boolean,required:!1,default:!1},isActiveEditMode:{type:Boolean,required:!1,default:!1},isCreateMode:{type:Boolean,required:!1,default:!1},isDeletable:{type:Boolean,required:!1,default:!1},isDeletableConfirm:{type:Boolean,required:!1,default:!1},isDndDisabled:{type:Boolean,required:!1,default:!1},isDragAndDrop:{type:Boolean,required:!1,default:!1},isEditable:{type:Boolean,required:!1,default:!1},isFooter:{type:Boolean,required:!1,default:!1},isHeader:{type:Boolean,required:!1,default:!1},moveRowDown:{type:Function,required:!0},moveRowUp:{type:Function,required:!0},onCancelEditRow:{type:Function,required:!0},onDeleteRow:{type:Function,required:!0},onDragend:{type:Function,required:!0},onDragleave:{type:Function,required:!1,default:void 0},onDragover:{type:Function,required:!1,default:void 0},onDragstart:{type:Function,required:!0},onDrop:{type:Function,required:!1,default:void 0},onEditRow:{type:Function,required:!0},row:{type:Object,required:!0},rowClass:{type:[String,Object,Array,Function],required:!1,default:void 0},rowIndex:{type:Number,required:!0},rows:{type:Array,required:!0},saveRow:{type:Function,required:!0},texts:{type:Object,required:!1,default:()=>({})},trClass:{type:[String,Object,Array],required:!1,default:void 0},widths:{type:Object,required:!1,default:()=>({})}},setup(e){const{idTr:t}=ut(e),{focusFirstEditableElement:a}=ct({idTr:t}),{errorsLocal:l,hasErrors:n,optionsListForErrors:r}=dt(e),{rowClassLocal:o,trClassLocal:i}=nt(e,{hasErrors:n}),{cancelEditRow:c,isSaving:d,modelLocal:v,saveEditRow:f,updateModelLocal:b}=rt(e,{errorsLocal:l});return{cancelEditRow:c,errorsLocal:l,focusFirstEditableElement:a,hasErrors:n,rowClassLocal:o,idTr:t,isSaving:d,modelLocal:v,optionsListForErrors:r,saveEditRow:f,trClassLocal:i,updateModelLocal:b}},computed:{currentRowData(){return this.isActiveEditMode&&this.modelLocal?this.modelLocal:this.row}},watch:{isActiveEditMode:{immediate:!0,handler(e){if(e){this.modelLocal=W(this.editModel===void 0?this.row:this.editModel),this.errorsLocal={},ie(()=>{this.focusFirstEditableElement()});return}this.errorsLocal={},this.isSaving=!1}}},render(){const e=[];return this.isActiveEditMode&&this.texts.editInfoText&&e.push(m("tr",{class:"a_table_form__row a_table_form__row_info",key:`info_${this.rowIndex}`},[m("td",{class:"a_table_form__cell a_table_form__cell_info",colspan:this.allColumnsLength},[m(we,{alertClass:"a_table_form__info",html:this.texts.editInfoText,isVisible:!0,type:"info"})])])),e.push(m("tr",{id:this.idTr,"aria-grabbed":!this.isHeader&&!this.isFooter?this.draggedRowIndex===this.rowIndex:void 0,class:this.trClassLocal,key:`main_${this.rowIndex}`,onDragleave:this.onDragleave&&(t=>this.onDragleave(t,this.rowIndex)),onDragover:this.onDragover&&(t=>this.onDragover(t,this.rowIndex)),onDrop:this.onDrop&&(t=>this.onDrop(t,this.rowIndex))},[this.isDragAndDrop?m(lt,{id:this.idTr,canMoveRowDown:this.canMoveRowDown,canMoveRowUp:this.canMoveRowUp,isCreateMode:this.isCreateMode,isDndDisabled:this.isDndDisabled,isDragAndDrop:this.isDragAndDrop,isFooter:this.isFooter,isHeader:this.isHeader,moveRowDown:this.moveRowDown,moveRowUp:this.moveRowUp,onDragend:this.onDragend,onDragstart:this.onDragstart,rowIndex:this.rowIndex,texts:this.texts,widths:this.widths}):null,...this.columns.map((t,a)=>this.isHeader?m(it,{column:t,columnStyle:this.columnsStylesGrow[t.id],isEditable:this.isEditable},this.$slots):m(Ye,{id:this.idTr,column:t,columnIndex:a,columnStyle:this.columnsStylesGrow[t.id],errorIcon:this.errorIcon,errors:this.errorsLocal,isEditable:this.isEditable,isEditMode:this.isActiveEditMode,isFooter:this.isFooter,onUpdateRowData:this.updateModelLocal,row:this.row,rowData:this.currentRowData,rowIndex:this.rowIndex,rows:this.rows,tag:this.cellTag},this.$slots)),this.hasActionsColumn?m(at,{id:this.idTr,actionsClasses:this.actionsClasses,actionsDisabledCallback:this.actionsDisabledCallback,actionsHideCallback:this.actionsHideCallback,actionsTitleCallback:this.actionsTitleCallback,extra:this.extra,hasActiveEditRow:this.hasActiveEditRow,isActionsSticky:this.isActionsSticky,isActiveEditMode:this.isActiveEditMode,isDeletable:this.isDeletable,isDeletableConfirm:this.isDeletableConfirm,isEditable:this.isEditable,isFooter:this.isFooter,isHeader:this.isHeader,isSaving:this.isSaving,onCancelEditRow:this.cancelEditRow,onDeleteRow:this.onDeleteRow,onEditRow:this.onEditRow,onSaveEditRow:this.saveEditRow,row:this.row,rowIndex:this.rowIndex,texts:this.texts,widths:this.widths}):null])),this.isActiveEditMode&&this.hasErrors&&e.push(m("tr",{class:"a_table_form__row a_table_form__row_errors",key:`errors_${this.rowIndex}`},[m("td",{class:"a_table_form__cell a_table_form__cell_errors",colspan:this.allColumnsLength},[m(ve,{autoFocus:!0,closable:!1,errors:this.errorsLocal,optionsList:this.optionsListForErrors,idPrefix:this.idTr})])])),e}};function _t(e){const t=s(e,"actionsClasses");return{actionsClassesLocal:_(()=>({delete:"a_btn a_btn_transparent_danger",edit:"a_btn a_btn_transparent_primary",editCancel:"a_btn a_btn_transparent_primary",editSave:"a_btn a_btn_transparent_primary",addRow:"a_btn a_btn_outline_primary",...t.value}))}}function mt(e){const t=s(e,"columns"),a=s(e,"isDeletable"),l=s(e,"isDeletableConfirm"),n=s(e,"isDragAndDrop"),r=s(e,"isEditable"),o=_(()=>!!(r.value||a.value||l.value)),i=_(()=>t.value.filter(d=>d.isRender!==!1));return{allColumnsLength:_(()=>{let d=i.value.length;return n.value&&(d+=1),o.value&&(d+=1),d}),columnsVisible:i,hasActionsColumn:o}}const ht=2;function ft(e,{columnsVisible:t=_(()=>[]),hasActionsColumn:a=_(()=>!1),widthsLocal:l=_(()=>({}))}){const n=s(e,"id"),r=s(e,"isColumnsGrow"),o=s(e,"isDeletable"),i=s(e,"isDeletableConfirm"),c=s(e,"isDragAndDrop"),d=s(e,"isEditable"),{remPx:v,scalePxWithRem:f}=Ae(),b=D(void 0),R=D({});let A,x;const I=_(()=>a.value?d.value?l.value.actionsColumnDouble:o.value||i.value?l.value.actionsColumnSingle:0:0),k=_(()=>c.value?l.value.dndColumn:0),M=()=>{var y;return(y=document.getElementById(n.value))==null?void 0:y.parentElement},C=y=>{if(re(y)||y==="")return 0;if(We(y))return+f(y)||0;if(!je(y))return 0;const g=y.trim();return g?g.endsWith("rem")?(parseFloat(g)||0)*v.value:(g.endsWith("px"),parseFloat(g)||0):0},H=y=>{const g=`${y}px`;return{maxWidth:g,minWidth:g,width:g}},U=()=>{if(!r.value||!b.value){R.value={};return}const y=t.value||[],g=b.value-I.value-k.value-ht;if(g<=0){R.value={};return}let u=0,h=0;if(y.forEach(p=>{const O=C(p.width);u+=O,h+=Math.max(0,+p.grow||0)}),u>=g||h<=0){R.value={};return}const w=g-u,E={};y.forEach(p=>{const O=C(p.width),L=Math.max(0,+p.grow||0);if(!p.id||!O)return;const N=O+(L>0?w*L/h:0);E[p.id]=H(N)}),R.value=E},X=()=>{if(!r.value||A)return;const y=M();y&&(x=y,A=new ResizeObserver($e(g=>{var h,w;const u=(w=(h=g[0])==null?void 0:h.contentRect)==null?void 0:w.width;u&&(b.value=u,U())},100)),b.value=y.getBoundingClientRect().width,U(),A.observe(y))},Y=()=>{A&&(x&&A.unobserve(x),A.disconnect(),A=void 0,x=void 0)};return Fe([t,a,o,i,c,d,l],()=>{U()},{deep:!0}),{columnsStylesGrow:R,destroyColumnsGrowObserver:Y,initColumnsGrowObserver:X}}function bt(e,{emit:t}){return{onDeleteRow:({row:l,rowIndex:n,rowId:r,btnDeleteId:o})=>{t("deleteRow",{row:l,rowIndex:n,rowId:r,btnDeleteId:o})}}}function wt(e,{emit:t},{isDndDisabled:a=_(()=>!1)}={}){const l=s(e,"actionsDisabledCallback"),n=s(e,"focusAfterMove"),r=s(e,"id"),o=s(e,"isDragAndDrop"),i=s(e,"rows"),c=D(void 0),d=D(void 0),v=D(void 0),f=D(void 0),b=u=>{if(a.value)return!0;const h=B(l.value,"dnd");return S(h)?!!h({row:i.value[u],rowIndex:u}):!1},R=(u,h)=>{const w=Math.min(u,h),E=Math.max(u,h);for(let p=w;p<=E;p++)if(b(p))return!0;return!1},A=()=>{var u;(u=f.value)==null||u.remove(),f.value=void 0},x=u=>{var N,ee;const h=(ee=(N=u.target)==null?void 0:N.closest)==null?void 0:ee.call(N,"tr");if(!h)return;const w=h.getBoundingClientRect(),E=document.createElement("table"),p=document.createElement("tbody"),O=h.cloneNode(!0);E.className="a_table_form__table",E.style.borderCollapse="collapse",E.style.borderSpacing="0",E.style.width=`${w.width}px`,E.style.tableLayout="fixed",Array.from(h.children).forEach((te,se)=>{const q=O.children[se];if(q){const P=window.getComputedStyle(te);q.style.width=`${te.getBoundingClientRect().width}px`,q.style.backgroundColor=P.backgroundColor,q.style.borderTop=P.borderTop,q.style.borderRight=P.borderRight,q.style.borderBottom=P.borderBottom,q.style.borderLeft=P.borderLeft,q.style.color=P.color}}),p.appendChild(O),E.appendChild(p);const L=document.createElement("div");return L.className="a_table_form a_table_form__drag_preview",L.style.position="fixed",L.style.top="-10000px",L.style.left="-10000px",L.style.pointerEvents="none",L.style.zIndex="9999",L.appendChild(E),document.body.appendChild(L),f.value=L,{element:L,offsetX:Math.min(u.offsetX||0,w.width/2),offsetY:Math.min(u.offsetY||0,w.height/2)}},I=({focusId:u,fromIndex:h,toIndex:w,trigger:E})=>{if(!o.value||a.value||h===w||h<0||w<0||h>=i.value.length||w>=i.value.length||R(h,w))return;const p=[...i.value],[O]=p.splice(h,1);p.splice(w,0,O),t("updateRows",{focusId:u,rows:p,trigger:E,fromIndex:h,toIndex:w}),t("moveRow",{focusId:u,fromIndex:h,row:O,toIndex:w})},k=({fromIndex:u,rowIndex:h,position:w="before"})=>{if(!o.value||a.value||u<0||h<0||u>=i.value.length||h>=i.value.length)return;let E=w==="after"?h+1:h;u<E&&(E-=1),I({fromIndex:u,toIndex:E,trigger:"dnd"})},M=({focusId:u})=>{n.value&&ie().then(()=>{ae({selector:`#${u}`})})},C=u=>{const h=Math.max(1,u-1),w=`${r.value}_${h}_up`;I({focusId:w,fromIndex:u,toIndex:u-1,trigger:"moveRowUp"}),M({focusId:w})},H=u=>{const h=Math.min(i.value.length-2,u+1),w=`${r.value}_${h}_down`;I({focusId:w,fromIndex:u,toIndex:u+1,trigger:"moveRowDown"}),M({focusId:w})},U=(u,h)=>{if(!(!o.value||b(h))){if(u!=null&&u.dataTransfer){u.dataTransfer.effectAllowed="move",u.dataTransfer.setData("text/plain",`${h}`),A();const w=x(u);w&&u.dataTransfer.setDragImage(w.element,w.offsetX,w.offsetY)}c.value=h}},X=(u,h)=>{var E,p;if(!o.value||b(h))return;u.preventDefault();const w=(p=(E=u.currentTarget)==null?void 0:E.getBoundingClientRect)==null?void 0:p.call(E);if(w){const O=w.top+w.height/2;v.value=u.clientY<O?"before":"after"}else v.value="after";d.value=h},Y=(u,h)=>{var E,p;if(!o.value||b(h))return;const w=u.relatedTarget;(p=(E=u.currentTarget)==null?void 0:E.contains)!=null&&p.call(E,w)||d.value===h&&(d.value=void 0,v.value=void 0)},y=(u,h)=>{!o.value||b(h)||(u.preventDefault(),c.value!==void 0&&(k({fromIndex:c.value,position:v.value||"after",rowIndex:h}),A(),c.value=void 0,d.value=void 0,v.value=void 0))},g=()=>{A(),c.value=void 0,d.value=void 0,v.value=void 0};return{canMoveRowDown:_(()=>u=>u<i.value.length-1),canMoveRowUp:_(()=>u=>u>0),dragOverPosition:v,dragOverRowIndex:d,draggedRowIndex:c,isDndDisabledForRow:b,onDragleave:Y,moveRowDown:H,moveRowUp:C,onDragend:g,onDragover:X,onDragstart:U,onDrop:y}}function vt(e,{columnsVisible:t=_(()=>[]),getRowKey:a=()=>{}}){const l=s(e,"addRow"),n=s(e,"isAddable"),r=s(e,"isEditable"),o=s(e,"prepareEditModel"),i=s(e,"rows"),c=D(void 0),d=D(void 0),v=D(!1),f=_(()=>!!c.value||v.value),b=_(()=>n.value?S(l.value):!1),R=_(()=>r.value?t.value.some(M=>{var C;return!!((C=M.formElement)!=null&&C.required)}):!1),A=M=>{if(!S(o.value))return;const C=o.value(M);if((C==null?void 0:C.model)!==void 0)return W(C.model)};return{activeEditRowKey:c,activeEditModel:d,canAddRow:b,hasActiveEditRow:f,hasRequiredEditableColumns:R,isAddRowActive:v,onAddRow:()=>{f.value||!b.value||(c.value=void 0,d.value=A({rows:i.value}),v.value=!0)},onCancelEditRow:({trigger:M,id:C}={})=>{c.value=void 0,d.value=void 0,v.value=!1,M==="cancel"?setTimeout(()=>{ae({selector:`#${C}_edit`})}):M==="save"&&setTimeout(()=>{ae({selector:`#${C}`})})},onEditRow:({row:M,rowIndex:C})=>{v.value||(d.value=A({row:M,rowIndex:C,rows:i.value}),c.value=a({row:M,rowIndex:C}))}}}function At(e){const t=s(e,"icons");return{iconsLocal:_(()=>({actionAddRow:xe,...t.value}))}}function Et(e){const t=s(e,"keyId"),a=s(e,"rows"),l=s(e,"rowsFooter"),n=_(()=>a.value.length>0),r=_(()=>l.value.length>0);return{getRowKey:({row:i,rowIndex:c,isFooter:d=!1})=>{let v=c;if(t.value){const b=B(i,t.value);re(b)||(v=b)}return`${d?"footer":"body"}_${v}`},hasRows:n,hasRowsFooter:r}}function Rt(e){const t=s(e,"texts");return{textsLocal:_(()=>({actionsColumn:"_A_TABLE_FORM_ACTIONS_",actionAddRow:"_A_TABLE_FORM_ADD_ROW_",actionDelete:"_A_TABLE_FORM_DELETE_",actionDeleteConfirmBody:"_A_TABLE_FORM_DELETE_CONFIRM_BODY_",actionDeleteConfirmClose:"_A_TABLE_FORM_DELETE_CONFIRM_CLOSE_",actionDeleteConfirmHeader:"_A_TABLE_FORM_DELETE_CONFIRM_HEADER_",actionDeleteConfirmSave:"_A_TABLE_FORM_DELETE_CONFIRM_SAVE_",actionEdit:"_A_TABLE_FORM_EDIT_",actionEditCancel:"_A_TABLE_FORM_EDIT_CANCEL_",actionEditSave:"_A_TABLE_FORM_EDIT_SAVE_",editInfoText:void 0,emptyText:"_A_TABLE_FORM_EMPTY_",reorderColumn:"_A_TABLE_FORM_REORDER_COLUMN_",reorderDisabled:"_A_TABLE_FORM_REORDER_DISABLED_",reorderDown:"_A_TABLE_FORM_MOVE_DOWN_",reorderHandle:"_A_TABLE_FORM_REORDER_",reorderUp:"_A_TABLE_FORM_MOVE_UP_",...t.value}))}}function pt(e){const t=s(e,"widths");return{widthsLocal:_(()=>({actionsColumnSingle:56,actionsColumnDouble:112,dndColumn:56,...t.value}))}}const Q={name:"ATableForm",props:{actionsClasses:{type:Object,required:!1,default:()=>({})},actionsDisabledCallback:{type:Object,required:!1,default:()=>({})},actionsHideCallback:{type:Object,required:!1,default:()=>({})},actionsTitleCallback:{type:Object,required:!1,default:()=>({})},addRow:{type:Function,required:!1,default:void 0},columns:{type:Array,required:!0},columnsDefaultValue:{type:[String,Number],required:!1,default:""},changeModel:{type:Function,required:!1,default:void 0},errorIcon:{type:String,required:!1,default:ke},extra:{type:Object,required:!1,default:void 0},focusAfterMove:{type:Boolean,required:!1,default:!0},icons:{type:Object,required:!1,default:()=>({})},id:{type:String,required:!1,default:()=>Ge("a_table_form_")},isActionsSticky:{type:Boolean,required:!1,default:!1},isAddable:{type:Boolean,required:!1,default:!1},isColumnsGrow:{type:Boolean,required:!1,default:!1},isDeletable:{type:Boolean,required:!1,default:!1},isDeletableConfirm:{type:Boolean,required:!1,default:!1},isDragAndDrop:{type:Boolean,required:!1,default:!1},isEditable:{type:Boolean,required:!1,default:!1},keyId:{type:String,required:!1,default:void 0},label:{type:[String,Number],required:!1,default:""},labelClass:{type:[String,Object,Array],required:!1,default:void 0},labelTag:{type:String,required:!1,default:"h2"},prepareEditModel:{type:Function,required:!1,default:void 0},rowClass:{type:[String,Object,Array,Function],required:!1,default:void 0},rows:{type:Array,required:!1,default:()=>[]},rowsFooter:{type:Array,required:!1,default:()=>[]},saveRow:{type:Function,required:!1,default:()=>{}},texts:{type:Object,required:!1,default:()=>({})},widths:{type:Object,required:!1,default:()=>({})}},emits:["deleteRow","moveRow","updateRows"],setup(e,t){const a=s(e,"actionsDisabledCallback"),l=s(e,"actionsTitleCallback"),{allColumnsLength:n,columnsVisible:r,hasActionsColumn:o}=mt(e),{getRowKey:i,hasRows:c,hasRowsFooter:d}=Et(e),{textsLocal:v}=Rt(e),{widthsLocal:f}=pt(e),{iconsLocal:b}=At(e),{actionsClassesLocal:R}=_t(e),{columnsStylesGrow:A,destroyColumnsGrowObserver:x,initColumnsGrowObserver:I}=ft(e,{columnsVisible:r,hasActionsColumn:o,widthsLocal:f});Be(()=>{I()}),Se(()=>{x()});const{activeEditRowKey:k,activeEditModel:M,canAddRow:C,hasActiveEditRow:H,hasRequiredEditableColumns:U,isAddRowActive:X,onAddRow:Y,onCancelEditRow:y,onEditRow:g}=vt(e,{columnsVisible:r,getRowKey:i}),{canMoveRowDown:u,canMoveRowUp:h,dragOverPosition:w,dragOverRowIndex:E,draggedRowIndex:p,isDndDisabledForRow:O,moveRowDown:L,moveRowUp:N,onDragend:ee,onDragleave:te,onDragover:se,onDragstart:q,onDrop:P}=wt(e,t,{isDndDisabled:H}),{onDeleteRow:ce}=bt(e,t),ue=_(()=>{if(H.value)return!0;const z=B(a.value,"add");return S(z)?z():!1}),_e=_(()=>{const z=B(l.value,"add");return S(z)?z():v.value.actionAddRow});return{activeEditRowKey:k,activeEditModel:M,allColumnsLength:n,addTitle:_e,canAddRow:C,canMoveRowDown:u,canMoveRowUp:h,actionsClassesLocal:R,columnsStylesGrow:A,columnsVisible:r,draggedRowIndex:p,dragOverPosition:w,dragOverRowIndex:E,isDndDisabledForRow:O,getRowKey:i,hasActionsColumn:o,hasActiveEditRow:H,hasRequiredEditableColumns:U,hasRows:c,hasRowsFooter:d,iconsLocal:b,isAddDisabled:ue,isAddRowActive:X,moveRowDown:L,moveRowUp:N,onAddRow:Y,onCancelEditRow:y,onDeleteRow:ce,onDragend:ee,onDragleave:te,onDragover:se,onDragstart:q,onDrop:P,onEditRow:g,textsLocal:v,widthsLocal:f}},render(){return m("div",{class:"a_table_form"},[this.label&&m(j,{class:["a_table_form__label",this.labelClass],html:this.label,tag:this.labelTag}),this.hasRequiredEditableColumns&&m(Ee),m("div",{class:"a_table_form__wrapper"},[m("table",{id:this.id,class:["a_table_form__table",{a_table_form_drag_active:this.draggedRowIndex!==void 0}]},[m("thead",{class:"a_table_form__head"},[m(oe,{id:this.id,actionsClasses:this.actionsClasses,actionsDisabledCallback:this.actionsDisabledCallback,actionsHideCallback:this.actionsHideCallback,actionsTitleCallback:this.actionsTitleCallback,allColumnsLength:this.allColumnsLength,canMoveRowDown:this.canMoveRowDown,canMoveRowUp:this.canMoveRowUp,cellTag:"th",changeModel:this.changeModel,columns:this.columnsVisible,columnsStylesGrow:this.columnsStylesGrow,draggedRowIndex:this.draggedRowIndex,extra:this.extra,hasActionsColumn:this.hasActionsColumn,hasActiveEditRow:!1,isActionsSticky:this.isActionsSticky,isActiveEditMode:!1,isDeletable:this.isDeletable,isDeletableConfirm:this.isDeletableConfirm,isDndDisabled:this.hasActiveEditRow,isDragAndDrop:this.isDragAndDrop,isEditable:this.isEditable,isHeader:!0,moveRowDown:this.moveRowDown,moveRowUp:this.moveRowUp,onCancelEditRow:this.onCancelEditRow,onDeleteRow:this.onDeleteRow,onDragend:this.onDragend,onDragstart:this.onDragstart,onEditRow:this.onEditRow,row:{},rowIndex:0,rows:this.rows,saveRow:this.saveRow,texts:this.textsLocal,trClass:"a_table_form__row a_table_form__row_head",widths:this.widthsLocal},this.$slots)]),m("tbody",{class:"a_table_form__body"},this.hasRows||this.isAddRowActive?[...this.rows.map((e,t)=>{const a=this.getRowKey({row:e,rowIndex:t});return m(oe,{key:a,id:this.id,actionsClasses:this.actionsClassesLocal,actionsDisabledCallback:this.actionsDisabledCallback,actionsHideCallback:this.actionsHideCallback,actionsTitleCallback:this.actionsTitleCallback,allColumnsLength:this.allColumnsLength,canMoveRowDown:this.canMoveRowDown,canMoveRowUp:this.canMoveRowUp,changeModel:this.changeModel,columns:this.columnsVisible,columnsStylesGrow:this.columnsStylesGrow,draggedRowIndex:this.draggedRowIndex,editModel:this.activeEditRowKey===a?this.activeEditModel:void 0,errorIcon:this.errorIcon,extra:this.extra,hasActionsColumn:this.hasActionsColumn,hasActiveEditRow:this.hasActiveEditRow,isActionsSticky:this.isActionsSticky,isActiveEditMode:this.activeEditRowKey===a,isCreateMode:!1,isDeletable:this.isDeletable,isDeletableConfirm:this.isDeletableConfirm,isDndDisabled:this.isDndDisabledForRow(t),isDragAndDrop:this.isDragAndDrop,isEditable:this.isEditable,moveRowDown:this.moveRowDown,moveRowUp:this.moveRowUp,onCancelEditRow:this.onCancelEditRow,onDeleteRow:this.onDeleteRow,onDragend:this.onDragend,onDragleave:this.onDragleave,onDragover:this.onDragover,onDragstart:this.onDragstart,onDrop:this.onDrop,onEditRow:this.onEditRow,row:e,rowClass:this.rowClass,rowIndex:t,rows:this.rows,saveRow:this.saveRow,texts:this.textsLocal,widths:this.widthsLocal,trClass:["a_table_form__row",{a_table_form__row_drag_after:this.dragOverRowIndex===t&&this.dragOverPosition==="after",a_table_form__row_drag_before:this.dragOverRowIndex===t&&this.dragOverPosition==="before",a_table_form__row_drag_over:this.dragOverRowIndex===t,a_table_form__row_dragging:this.draggedRowIndex===t}]},this.$slots)}),this.isAddRowActive&&m(oe,{id:this.id,actionsClasses:this.actionsClassesLocal,actionsDisabledCallback:this.actionsDisabledCallback,actionsHideCallback:this.actionsHideCallback,actionsTitleCallback:this.actionsTitleCallback,allColumnsLength:this.allColumnsLength,canMoveRowDown:this.canMoveRowDown,canMoveRowUp:this.canMoveRowUp,changeModel:this.changeModel,columns:this.columnsVisible,columnsStylesGrow:this.columnsStylesGrow,draggedRowIndex:this.draggedRowIndex,editModel:this.activeEditModel,errorIcon:this.errorIcon,extra:this.extra,hasActionsColumn:this.hasActionsColumn,hasActiveEditRow:this.hasActiveEditRow,isActionsSticky:this.isActionsSticky,isActiveEditMode:!0,isCreateMode:!0,isDeletable:!1,isDeletableConfirm:!1,isDndDisabled:!0,isDragAndDrop:this.isDragAndDrop,isEditable:this.isEditable,key:"body_create",moveRowDown:this.moveRowDown,moveRowUp:this.moveRowUp,onCancelEditRow:this.onCancelEditRow,onDeleteRow:this.onDeleteRow,onDragend:this.onDragend,onDragleave:this.onDragleave,onDragover:this.onDragover,onDragstart:this.onDragstart,onDrop:this.onDrop,onEditRow:this.onEditRow,row:{},rowClass:this.rowClass,rowIndex:this.rows.length,rows:this.rows,saveRow:this.addRow,texts:this.textsLocal,trClass:"a_table_form__row a_table_form__row_create",widths:this.widthsLocal},this.$slots)]:[m("tr",{class:"a_table_form__row a_table_form__row_empty"},[m("td",{class:"a_table_form__cell a_table_form__empty",colspan:this.allColumnsLength},[m(j,{tag:"span",text:this.textsLocal.emptyText})])])]),this.hasRowsFooter&&m("tfoot",{class:"a_table_form__foot"},this.rowsFooter.map((e,t)=>m(oe,{id:this.id,actionsClasses:this.actionsClassesLocal,actionsDisabledCallback:this.actionsDisabledCallback,actionsHideCallback:this.actionsHideCallback,actionsTitleCallback:this.actionsTitleCallback,allColumnsLength:this.allColumnsLength,canMoveRowDown:this.canMoveRowDown,canMoveRowUp:this.canMoveRowUp,changeModel:this.changeModel,columns:this.columnsVisible,columnsStylesGrow:this.columnsStylesGrow,draggedRowIndex:this.draggedRowIndex,extra:this.extra,hasActionsColumn:this.hasActionsColumn,hasActiveEditRow:this.hasActiveEditRow,isActionsSticky:this.isActionsSticky,isActiveEditMode:!1,isDeletable:this.isDeletable,isDeletableConfirm:this.isDeletableConfirm,isDndDisabled:this.hasActiveEditRow,isDragAndDrop:this.isDragAndDrop,isEditable:this.isEditable,isFooter:!0,key:this.getRowKey({isFooter:!0,row:e,rowIndex:t}),moveRowDown:this.moveRowDown,moveRowUp:this.moveRowUp,onCancelEditRow:this.onCancelEditRow,onDeleteRow:this.onDeleteRow,onDragend:this.onDragend,onDragstart:this.onDragstart,onEditRow:this.onEditRow,row:e,rowClass:this.rowClass,rowIndex:t,rows:this.rowsFooter,saveRow:this.saveRow,texts:this.textsLocal,widths:this.widthsLocal,trClass:"a_table_form__row a_table_form__row_footer"},this.$slots)))])]),this.canAddRow&&m("div",{class:"a_mt_3 a_text_right"},[m($,{class:this.actionsClassesLocal.addRow,disabled:this.isAddDisabled,extra:this.extra,iconLeft:this.iconsLocal.actionAddRow,text:this.textsLocal.actionAddRow,textScreenReader:this.addTitle,title:this.addTitle,onClick:this.onAddRow})])])}};function yt(){return{codeHtml:`<a-simple-table
  :columns="columns"
  :rows-footer="rowsFooter"
  :rows="rows"
  key-id="id"
  label="_A_TABLE_FORM_EXAMPLE_LABEL_"
/>
`}}function Dt(){return{codeJs:`import {
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
};`}}const Ct={name:"PageTableFormBasic",components:{AlohaExample:Z,ATableForm:Q},setup(){const{codeHtml:e}=yt(),{codeJs:t}=Dt(),a=[{id:"position",label:"_A_TABLE_FORM_COLUMN_POSITION_",maxWidth:96,minWidth:96,width:96,formElement:{type:"number"}},{id:"name",label:"_A_TABLE_FORM_COLUMN_NAME_",maxWidth:"18rem",minWidth:"12rem",width:"16rem",formElement:{type:"text"}},{id:"team",formElement:{translateData:!0,data:[{label:"_A_TABLE_FORM_TEAM_NORTH_",value:"north"},{label:"_A_TABLE_FORM_TEAM_WEST_",value:"west"},{label:"_A_TABLE_FORM_TEAM_SOUTH_",value:"south"},{label:"_A_TABLE_FORM_TEAM_EAST_",value:"east"}],keyId:"value",keyLabel:"label",type:"select"},label:"_A_TABLE_FORM_COLUMN_TEAM_",minWidth:"12rem"},{id:"score",footerDefaultValue:"68",footerKeyLabel:"score",formElement:{type:"integer"},label:"_A_TABLE_FORM_COLUMN_SCORE_",maxWidth:120,minWidth:120,width:120}],l=D([{id:1,name:"Марта Иванова",position:1,score:18,team:"north"},{id:2,name:"Олег Сидоров",position:2,score:17,team:"west"},{id:3,name:"Анна Петрова",position:3,score:16,team:"south"},{id:4,name:"Игорь Ковалёв",position:4,score:17,team:"east"}]);return{codeHtml:e,codeJs:t,columns:a,rows:l,rowsFooter:[{name:"_A_TABLE_FORM_FOOTER_TOTAL_",score:68}]}}};function gt(e,t,a,l,n,r){const o=T("a-table-form"),i=T("aloha-example");return V(),J(i,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TABLE_FORM_EXAMPLE_HEADER_"},{default:K(()=>[F(o,{columns:e.columns,"rows-footer":e.rowsFooter,rows:e.rows,"key-id":"id",label:"_A_TABLE_FORM_EXAMPLE_LABEL_"},null,8,["columns","rows-footer","rows"])]),_:1},8,["code-html","code-js"])}const Tt=G(Ct,[["render",gt]]);function Mt(){return{codeHtml:`<a-table-form
  :actions-disabled-callback="actionsDisabledCallback"
  :columns="columns"
  :is-drag-and-drop="true"
  :rows-footer="rowsFooter"
  :rows="rows"
  key-id="id"
  label="_A_TABLE_FORM_EXAMPLE_LABEL_"
  @update-rows="updateRows"
/>
`}}function Lt(){return{codeJs:`import {
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
};`}}const Ot={name:"PageTableFormDND",components:{AlohaExample:Z,ATableForm:Q},setup(){const{codeHtml:e}=Mt(),{codeJs:t}=Lt(),a=[{id:"position",label:"_A_TABLE_FORM_COLUMN_POSITION_",maxWidth:96,minWidth:96,width:96,formElement:{type:"text"}},{id:"name",formElement:{type:"text"},label:"_A_TABLE_FORM_COLUMN_NAME_",maxWidth:"18rem",minWidth:"12rem",width:"16rem"},{id:"team",formElement:{translateData:!0,data:[{label:"_A_TABLE_FORM_TEAM_NORTH_",value:"north"},{label:"_A_TABLE_FORM_TEAM_WEST_",value:"west"},{label:"_A_TABLE_FORM_TEAM_SOUTH_",value:"south"},{label:"_A_TABLE_FORM_TEAM_EAST_",value:"east"}],keyId:"value",keyLabel:"label",type:"select"},label:"_A_TABLE_FORM_COLUMN_TEAM_",minWidth:"12rem"},{id:"score",footerDefaultValue:"68",footerKeyLabel:"score",formElement:{type:"integer"},label:"_A_TABLE_FORM_COLUMN_SCORE_",maxWidth:120,minWidth:120,width:120}],l=D([{id:1,name:"Марта Иванова",position:1,score:18,team:"north"},{dndDisabled:!0,id:2,name:"Олег Сидоров",position:2,score:17,team:"west"},{id:3,name:"Анна Петрова",position:3,score:16,team:"south"},{id:4,name:"Игорь Ковалёв",position:4,score:17,team:"east"}]);return{codeHtml:e,codeJs:t,columns:a,actionsDisabledCallback:{dnd:({row:i})=>i.dndDisabled},rows:l,rowsFooter:[{name:"_A_TABLE_FORM_FOOTER_TOTAL_",score:68}],updateRows:({rows:i,trigger:c})=>{l.value=i,console.log("trigger",c)}}}};function Ft(e,t,a,l,n,r){const o=T("a-table-form"),i=T("aloha-example");return V(),J(i,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TABLE_FORM_DND_HEADER_",description:"_A_TABLE_FORM_DND_DESCRIPTION_",props:["actions-disabled-callback","is-drag-and-drop"]},{default:K(()=>[F(o,{"actions-disabled-callback":e.actionsDisabledCallback,columns:e.columns,"is-drag-and-drop":!0,"rows-footer":e.rowsFooter,rows:e.rows,"key-id":"id",label:"_A_TABLE_FORM_EXAMPLE_LABEL_",onUpdateRows:e.updateRows},null,8,["actions-disabled-callback","columns","rows-footer","rows","onUpdateRows"])]),_:1},8,["code-html","code-js"])}const xt=G(Ot,[["render",Ft]]);function kt(){return{codeHtml:`<a-checkbox>
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
`}}function Bt(){return{codeJs:`import {
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
};`}}const St={name:"PageTableFormEdit",components:{ACheckbox:ne,AlohaExample:Z,ATableForm:Q},setup(){const{codeHtml:e}=kt(),{codeJs:t}=Bt(),a=[{label:"is-deletable-confirm",value:"is-deletable-confirm"},{label:"is-deletable",value:"is-deletable"},{label:"is-editable",value:"is-editable"},{label:"is-addable",value:"is-addable"}],l=D(["is-deletable-confirm","is-deletable","is-editable","is-addable"]),n={actionEditCancel:"abbrechen",actionEditSave:"speichern",editInfoText:"Nur diese Zeile ist gerade im Bearbeitungsmodus."},r=[{id:"position",label:"_A_TABLE_FORM_COLUMN_POSITION_",maxWidth:96,minWidth:96,width:96,formElement:{controlsType:"none",type:"integer"}},{id:"name",formElement:{type:"text",required:!0},keyLabel:"name",label:"_A_TABLE_FORM_COLUMN_NAME_",maxWidth:"18rem",minWidth:"12rem",width:"16rem"},{id:"team",formElement:{data:[{label:"_A_TABLE_FORM_TEAM_NORTH_",value:"north"},{label:"_A_TABLE_FORM_TEAM_WEST_",value:"west"},{label:"_A_TABLE_FORM_TEAM_SOUTH_",value:"south"},{label:"_A_TABLE_FORM_TEAM_EAST_",value:"east"}],keyId:"value",keyLabel:"label",translateData:!0,type:"select"},label:"_A_TABLE_FORM_COLUMN_TEAM_",minWidth:"12rem"},{id:"score",footerDefaultValue:"68",footerKeyLabel:"score",formElement:{controlsType:"none",min:0,type:"integer"},label:"_A_TABLE_FORM_COLUMN_SCORE_",maxWidth:120,minWidth:120,width:120}],o=D([{id:1,name:"Marta Ivanova",position:1,score:18,team:"north"},{id:2,name:"Oleg Sidorov",position:2,score:17,team:"west"},{id:3,name:"Anna Petrova",position:3,score:16,team:"south"},{id:4,name:"Igor Kovalev",position:4,score:17,team:"east"}]);return{addRow:({model:f})=>{var R;console.log("model ",f);const b={};if((R=f.name)!=null&&R.trim()||(b.name=["Name ist erforderlich."]),f.team||(b.team=["Team ist erforderlich."]),f.score<18&&(b.score=["Score must be at least 18."]),Object.keys(b).length)return{errors:b};o.value.push({id:o.value.length+1,...f})},codeHtml:e,codeJs:t,columns:r,dataCheckbox:a,deleteRow:({row:f,rowIndex:b})=>{o.value.splice(b,1),console.log("row",f),console.log("rowIndex",b)},modelCheckbox:l,rows:o,rowsFooter:[{name:"_A_TABLE_FORM_FOOTER_TOTAL_",score:68}],saveRow:async({model:f,rowIndex:b})=>{var A;await new Promise(x=>{setTimeout(x,300)});const R={};if((A=f.name)!=null&&A.trim()||(R.name=["Name ist erforderlich."]),f.team||(R.team=["Team ist erforderlich."]),f.score<18&&(R.score=["Score must be at least 18."]),Object.keys(R).length)return{errors:R};o.value.splice(b,1,f)},texts:n}}};function It(e,t,a,l,n,r){const o=T("a-checkbox"),i=T("a-table-form"),c=T("aloha-example");return V(),J(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TABLE_FORM_EDIT_HEADER_",description:"_A_TABLE_FORM_EDIT_DESCRIPTION_",props:["is-addable","is-deletable","is-deletable-confirm","is-editable","save-row","texts"]},{default:K(()=>[F(o,{class:"a_mb_4",modelValue:e.modelCheckbox,"onUpdate:modelValue":t[0]||(t[0]=d=>e.modelCheckbox=d),data:e.dataCheckbox,"translate-data":!0,"key-id":"value","key-label":"label"},null,8,["modelValue","data"]),F(i,{"add-row":e.addRow,columns:e.columns,"is-addable":e.modelCheckbox.includes("is-addable"),"is-deletable-confirm":e.modelCheckbox.includes("is-deletable-confirm"),"is-deletable":e.modelCheckbox.includes("is-deletable"),"is-editable":e.modelCheckbox.includes("is-editable"),"rows-footer":e.rowsFooter,rows:e.rows,"save-row":e.saveRow,texts:e.texts,"key-id":"id",label:"_A_TABLE_FORM_EXAMPLE_LABEL_",onDeleteRow:e.deleteRow},null,8,["add-row","columns","is-addable","is-deletable-confirm","is-deletable","is-editable","rows-footer","rows","save-row","texts","onDeleteRow"])]),_:1},8,["code-html","code-js"])}const qt=G(St,[["render",It]]);function Nt(){return{codeHtml:`<a-checkbox
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
`}}function Pt(){return{codeJs:`import {
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
};`}}const Ht={name:"PageTableFormGrow",components:{ACheckbox:ne,AlohaExample:Z,ATableForm:Q},setup(){const{codeHtml:e}=Nt(),{codeJs:t}=Pt(),a=[{label:"is-deletable",value:"is-deletable"},{label:"is-editable",value:"is-editable"},{label:"is-drag-and-drop",value:"is-drag-and-drop"}],l=D(["is-deletable","is-editable"]),n=[{id:"position",label:"_A_TABLE_FORM_COLUMN_POSITION_",minWidth:96,width:96,grow:1,formElement:{controlsType:"none",type:"integer"}},{id:"name",formElement:{type:"text"},label:"_A_TABLE_FORM_COLUMN_NAME_",minWidth:"12rem",width:"16rem",grow:2},{id:"team",formElement:{data:[{label:"_A_TABLE_FORM_TEAM_NORTH_",value:"north"},{label:"_A_TABLE_FORM_TEAM_WEST_",value:"west"},{label:"_A_TABLE_FORM_TEAM_SOUTH_",value:"south"},{label:"_A_TABLE_FORM_TEAM_EAST_",value:"east"}],keyId:"value",keyLabel:"label",translateData:!0,type:"select"},label:"_A_TABLE_FORM_COLUMN_TEAM_",minWidth:"12rem",width:"12rem",grow:1},{id:"score",footerDefaultValue:"68",footerKeyLabel:"score",formElement:{controlsType:"none",min:0,type:"integer"},label:"_A_TABLE_FORM_COLUMN_SCORE_",minWidth:120,width:120,grow:1}],r=[{id:"position",label:"_A_TABLE_FORM_COLUMN_POSITION_",minWidth:96,width:96,grow:1,formElement:{controlsType:"none",type:"integer"}},{id:"name",formElement:{type:"text"},label:"_A_TABLE_FORM_COLUMN_NAME_",minWidth:"12rem",width:"16rem",grow:3}],o=D([{id:1,name:"Marta Ivanova",position:1,score:18,team:"north"},{id:2,name:"Oleg Sidorov",position:2,score:17,team:"west"},{id:3,name:"Anna Petrova",position:3,score:16,team:"south"},{id:4,name:"Igor Kovalev",position:4,score:17,team:"east"}]);return{codeHtml:e,codeJs:t,columns1:n,columns2:r,dataCheckbox:a,deleteRow:({rowIndex:f})=>{o.value.splice(f,1)},modelCheckbox:l,rows:o,rowsFooter:[{name:"_A_TABLE_FORM_FOOTER_TOTAL_",score:68}],saveRow:({model:f,rowIndex:b})=>{o.value.splice(b,1,f)},texts:{editInfoText:"Only one row can be edited at a time."}}}},Ut={class:"a_mb_4"};function $t(e,t,a,l,n,r){const o=T("a-checkbox"),i=T("a-table-form"),c=T("aloha-example");return V(),J(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TABLE_FORM_GROW_HEADER_",description:"_A_TABLE_FORM_GROW_DESCRIPTION_",props:["is-columns-grow","is-deletable","is-drag-and-drop","is-editable"]},{default:K(()=>[F(o,{class:"a_mb_4",modelValue:e.modelCheckbox,"onUpdate:modelValue":t[0]||(t[0]=d=>e.modelCheckbox=d),data:e.dataCheckbox,"key-id":"value","key-label":"label"},null,8,["modelValue","data"]),Ie("div",Ut,[F(i,{columns:e.columns1,"is-columns-grow":!0,"is-deletable":e.modelCheckbox.includes("is-deletable"),"is-drag-and-drop":e.modelCheckbox.includes("is-drag-and-drop"),"is-editable":e.modelCheckbox.includes("is-editable"),"rows-footer":e.rowsFooter,rows:e.rows,"save-row":e.saveRow,texts:e.texts,"key-id":"id",label:"_A_TABLE_FORM_EXAMPLE_LABEL_",onDeleteRow:e.deleteRow},null,8,["columns","is-deletable","is-drag-and-drop","is-editable","rows-footer","rows","save-row","texts","onDeleteRow"])]),F(i,{columns:e.columns2,"is-columns-grow":!0,"is-deletable":e.modelCheckbox.includes("is-deletable"),"is-drag-and-drop":e.modelCheckbox.includes("is-drag-and-drop"),"is-editable":e.modelCheckbox.includes("is-editable"),"rows-footer":e.rowsFooter,rows:e.rows,"save-row":e.saveRow,texts:e.texts,"key-id":"id",label:"_A_TABLE_FORM_EXAMPLE_LABEL_",onDeleteRow:e.deleteRow},null,8,["columns","is-deletable","is-drag-and-drop","is-editable","rows-footer","rows","save-row","texts","onDeleteRow"])]),_:1},8,["code-html","code-js"])}const Wt=G(Ht,[["render",$t]]);function jt(){return{codeHtml:`<a-one-checkbox
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
`}}function Gt(){return{codeJs:`import {
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
};`}}const Vt={name:"PageTableFormSticky",components:{AlohaExample:Z,AOneCheckbox:Re,ATableForm:Q},setup(){const{codeHtml:e}=jt(),{codeJs:t}=Gt(),a=D(!0),l=Array.from({length:20},(r,o)=>{const i=o+1;return{id:`c${i}`,label:`${i}`,maxWidth:120,minWidth:120,width:120,formElement:{controlsType:"none",type:"integer"}}}),n=D(Array.from({length:6},(r,o)=>{const i={id:o+1};return l.forEach((c,d)=>{i[c.id]=(o+1)*100+d+1}),i}));return{codeHtml:e,codeJs:t,columns:l,isActionsSticky:a,rows:n}}};function Jt(e,t,a,l,n,r){const o=T("a-one-checkbox"),i=T("a-table-form"),c=T("aloha-example");return V(),J(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TABLE_FORM_STICKY_HEADER_",description:"_A_TABLE_FORM_STICKY_DESCRIPTION_",props:["is-actions-sticky","is-deletable-confirm","is-editable"]},{default:K(()=>[F(o,{class:"a_mb_4",modelValue:e.isActionsSticky,"onUpdate:modelValue":t[0]||(t[0]=d=>e.isActionsSticky=d),label:"isActionsSticky"},null,8,["modelValue"]),F(i,{columns:e.columns,"is-actions-sticky":e.isActionsSticky,"is-deletable-confirm":!0,"is-editable":!0,rows:e.rows,"key-id":"id",label:"20 columns"},null,8,["columns","is-actions-sticky","rows"])]),_:1},8,["code-html","code-js"])}const Kt=G(Vt,[["render",Jt]]);function Xt(){return{pageTitle:_(()=>pe({placeholder:"_A_TABLE_FORM_PAGE_TITLE_"}))}}const Yt={name:"PageTableForm",components:{AlohaPage:me,PageTableFormBasic:Tt,PageTableFormDND:xt,PageTableFormEdit:qt,PageTableFormGrow:Wt,PageTableFormSticky:Kt},setup(){const{pageTitle:e}=Xt();return{pageTitle:e}}};function zt(e,t,a,l,n,r){const o=T("page-table-form-basic"),i=T("page-table-form-d-n-d"),c=T("page-table-form-edit"),d=T("page-table-form-sticky"),v=T("page-table-form-grow"),f=T("aloha-page");return V(),J(f,{"page-title":e.pageTitle},{body:K(()=>[F(o),F(i),F(c),F(d),F(v)]),_:1},8,["page-title"])}const ho=G(Yt,[["render",zt]]);export{ho as default};
