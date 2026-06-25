import{A as $,a as oe}from"./chunk.AlohaExample.-d4xrnrJ.js";import{d as ae,s as z,A as B,c as F,b as se,f as ie,e as re,h as ne,i as le,_ as S,j as de,k as ce,g as _e}from"./bundle.index.BMbHS0r2.js";import{t as c,d as w,h as n,M as U,l as ue,aX as me,L as he,O as fe,C as we,aY as be,g as Ae,r as R,E as Ee,P as pe,Y as k,W as q,aU as N,f as v,$ as L}from"./chunk.vendor.BAXy2grE.js";import{i as Re,j as G,l as I,M as ve,T as ye,v as De,h as ge,r as Te,a as Le,u as Me}from"./chunk.vendor-lodash.CCzoES9g.js";import{A as Fe}from"./chunk.AFormElement.DBglVEby.js";import"./chunk.APageTabTitle.DuQktD6b.js";import"./chunk.AlohaHighlightjs.BK8yZFUI.js";import"./chunk.translations-ar.B2OoBNnE.js";import"./chunk.translations-de.UgGe9j4v.js";import"./chunk.translations-en.0stqcWf2.js";import"./chunk.translations-es.BwgNL0Sc.js";import"./chunk.translations-fr.C2YYR8Jb.js";import"./chunk.translations-hr.B965uVG9.js";import"./chunk.translations-it.qkDQbydY.js";import"./chunk.translations-ru.x6UIBrxX.js";function Oe(e){const t=c(e,"column"),o=c(e,"isEditable"),s=c(e,"isEditMode");return{disabledLocal:w(()=>{var l,a;return!!((a=(l=t.value)==null?void 0:l.formElement)!=null&&a.disabled)||o.value&&!s.value})}}function Ce(e){const t=c(e,"column"),o=c(e,"isFooter"),s=c(e,"isEditable");return{readonlyLocal:w(()=>{var l,a;return o.value?!0:s.value?!!((a=(l=t.value)==null?void 0:l.formElement)!=null&&a.readonly):!0})}}function K(e){if(!(e==null||e===""))return typeof e=="number"?`${e}px`:e}function ee(e){const t=c(e,"column");return{columnStyles:w(()=>{const s={},r=K(t.value.width),l=K(t.value.maxWidth),a=K(t.value.minWidth);return r&&(s.width=r),l&&(s.maxWidth=l),a&&(s.minWidth=a),Re(t.value.style)?{...s,...t.value.style}:t.value.style?[s,t.value.style]:s})}}const xe={name:"ATableFormCell",props:{column:{type:Object,required:!0},columnIndex:{type:Number,required:!0},errorIcon:{type:String,required:!1,default:void 0},errors:{type:Object,required:!1,default:()=>({})},id:{type:String,required:!0},isEditMode:{type:Boolean,required:!1,default:!1},isEditable:{type:Boolean,required:!1,default:!1},isFooter:{type:Boolean,required:!1,default:!1},row:{type:Object,required:!0},rowData:{type:Object,required:!1,default:void 0},rowIndex:{type:Number,required:!0},rows:{type:Array,required:!0},tag:{type:String,required:!1,default:"td"}},emits:["updateRowData"],setup(e){const{columnStyles:t}=ee({column:e.column}),{readonlyLocal:o}=Ce(e),{disabledLocal:s}=Oe(e),r=w(()=>e.rowData||e.row);return{columnStyles:t,disabledLocal:s,readonlyLocal:o,rowDataLocal:r}},methods:{updateRowData({model:e}){this.$emit("updateRowData",{columnId:this.column.id,model:e})}},render(){const{type:e="text",...t}=this.column.formElement||{};return n(this.tag,{class:["a_table_form__cell",`a_table_form__cell_${this.tag}`,this.column.class,this.isFooter?this.column.classFooter:this.column.classRow],style:this.columnStyles},[n(Fe,{id:this.column.id,errorIcon:this.errorIcon,idPrefix:this.id,...t,change:this.updateRowData,disabled:this.disabledLocal,errors:G(this.errors,this.column.id),errorsClass:"a_sr_only",modelValue:G(this.rowDataLocal,this.column.id),readonly:this.readonlyLocal,type:e})])}};function Be(e,{isActionsDisabled:t=w(()=>!1)}){const o=c(e,"id"),s=c(e,"isDeletable"),r=c(e,"isDeletableConfirm"),l=c(e,"onDeleteRow"),a=c(e,"row"),i=c(e,"rowIndex"),_=c(e,"texts"),{closeConfirm:h,openConfirm:A}=ae(),b=w(()=>`${o.value}_delete`),u=()=>{h(),U().then(()=>{z({selector:`#${b.value}`})})},p=()=>{A({bodyHtml:_.value.actionDeleteConfirmBody,closeButtonText:_.value.actionDeleteConfirmClose,headerText:_.value.actionDeleteConfirmHeader,save:async()=>{await l.value({row:a.value,rowIndex:i.value}),h()},close:u,saveButtonText:_.value.actionDeleteConfirmSave})};return{idBtnDelete:b,onDeleteClick:()=>{if(!t.value){if(r.value){p();return}s.value&&l.value({row:a.value,rowIndex:i.value})}}}}function Ie(e){const t=c(e,"hasActiveEditRow"),o=c(e,"isActiveEditMode");return{isActionsDisabled:w(()=>t.value&&!o.value)}}const Se=56,ke=112;function qe(e){const t=c(e,"isDeletable"),o=c(e,"isDeletableConfirm"),s=c(e,"isEditable"),r=c(e,"isActiveEditMode");return{columnStyles:w(()=>{const a=t.value||o.value,i=s.value||r.value&&a?ke:Se;return{maxWidth:`${i}px`,minWidth:`${i}px`,width:`${i}px`}})}}const Ne={name:"ATableFormCellAction",props:{hasActiveEditRow:{type:Boolean,required:!1,default:!1},id:{type:String,required:!0},isActiveEditMode:{type:Boolean,required:!1,default:!1},isActionsSticky:{type:Boolean,required:!1,default:!1},isDeletable:{type:Boolean,required:!1,default:!1},isDeletableConfirm:{type:Boolean,required:!1,default:!1},isEditable:{type:Boolean,required:!1,default:!1},isFooter:{type:Boolean,required:!1,default:!1},isHeader:{type:Boolean,required:!1,default:!1},isSaving:{type:Boolean,required:!1,default:!1},onCancelEditRow:{type:Function,required:!0},onDeleteRow:{type:Function,required:!0},onEditRow:{type:Function,required:!0},onSaveEditRow:{type:Function,required:!0},row:{type:Object,required:!0},rowIndex:{type:Number,required:!0},texts:{type:Object,required:!1,default:()=>({})}},setup(e){const{isActionsDisabled:t}=Ie(e),{idBtnDelete:o,onDeleteClick:s}=Be(e,{isActionsDisabled:t}),{columnStyles:r}=qe(e);return{columnStyles:r,idBtnDelete:o,isActionsDisabled:t,onDeleteClick:s}},render(){const e=this.isHeader?"th":"td";return n(e,{class:["a_table_form__cell",`a_table_form__cell_${e}`,"a_table_form__cell_actions",{a_table_form__cell_actions_sticky:this.isActionsSticky}],style:this.columnStyles},[this.isHeader?n("span",{class:"a_sr_only"},[n(B,{tag:"span",text:this.texts.actionsColumn})]):this.isFooter?null:n("div",{class:"a_table_form__actions",role:"group"},this.isActiveEditMode?[n(F,{class:"a_btn a_btn_transparent_primary a_table_form__action_button",disabled:this.isSaving,iconLeft:ue,title:this.texts.actionEditCancel,textScreenReader:this.texts.actionEditCancel,onClick:()=>this.onCancelEditRow({row:this.row,rowIndex:this.rowIndex})}),n(F,{class:"a_btn a_btn_transparent_primary a_table_form__action_button",disabled:this.isSaving,iconLeft:me,title:this.texts.actionEditSave,textScreenReader:this.texts.actionEditSave,onClick:()=>this.onSaveEditRow({row:this.row,rowIndex:this.rowIndex})})]:[(this.isDeletable||this.isDeletableConfirm)&&n(F,{id:this.idBtnDelete,class:"a_btn a_btn_transparent_danger a_table_form__action_button",disabled:this.isActionsDisabled,iconLeft:he,title:this.texts.actionDelete,textScreenReader:this.texts.actionDelete,onClick:this.onDeleteClick}),this.isEditable&&n(F,{class:"a_btn a_btn_transparent_primary a_table_form__action_button",disabled:this.isActionsDisabled,iconLeft:fe,title:this.texts.actionEdit,textScreenReader:this.texts.actionEdit,onClick:()=>this.onEditRow({row:this.row,rowIndex:this.rowIndex})})])])}};function Pe(e){const t=c(e,"id"),o=w(()=>`${t.value}_up`);return{idBtnDown:w(()=>`${t.value}_down`),idBtnUp:o}}const Y=56,Ue={name:"ATableFormCellDnd",props:{canMoveRowDown:{type:Function,required:!0},canMoveRowUp:{type:Function,required:!0},id:{type:String,required:!0},isDragAndDrop:{type:Boolean,required:!1,default:!1},isDndDisabled:{type:Boolean,required:!1,default:!1},isFooter:{type:Boolean,required:!1,default:!1},isHeader:{type:Boolean,required:!1,default:!1},moveRowDown:{type:Function,required:!0},moveRowUp:{type:Function,required:!0},onDragend:{type:Function,required:!0},onDragstart:{type:Function,required:!0},rowIndex:{type:Number,required:!0},texts:{type:Object,required:!1,default:()=>({})}},setup(e){const{idBtnDown:t,idBtnUp:o}=Pe(e);return{columnStyles:w(()=>({maxWidth:`${Y}px`,minWidth:`${Y}px`,width:`${Y}px`})),idBtnDown:t,idBtnUp:o}},render(){const e=this.isHeader?"th":"td",t=this.isDragAndDrop&&!this.isDndDisabled;return n(e,{class:["a_table_form__cell",`a_table_form__cell_${e}`,"a_table_form__cell_reorder"],style:this.columnStyles},[this.isHeader?n("span",{class:"a_sr_only"},[n(B,{tag:"span",text:this.texts.reorderColumn})]):this.isFooter?null:n("div",{class:"a_table_form__reorder_actions"},[this.canMoveRowUp(this.rowIndex)&&n(F,{id:this.idBtnUp,class:"a_sr_only_focusable a_btn a_btn_transparent_dark a_table_form__reorder_button",disabled:this.isDndDisabled,iconLeft:we,tabindex:this.isDndDisabled?-1:void 0,title:this.texts.reorderUp,textScreenReader:this.texts.reorderUp,onClick:()=>this.moveRowUp(this.rowIndex)}),n("span",{ariaHidden:!0,class:"a_table_form__reorder_handle",draggable:t,onDragend:t?this.onDragend:void 0,onDragstart:t?o=>this.onDragstart(o,this.rowIndex):void 0},[n(se,{class:"a_table_form__reorder_icon",icon:be})]),n("span",{class:"a_sr_only"},[n(B,{tag:"span",text:this.texts.reorderHandle})]),this.canMoveRowDown(this.rowIndex)&&n(F,{id:this.idBtnDown,class:"a_sr_only_focusable a_btn a_btn_transparent_dark a_table_form__reorder_button",disabled:this.isDndDisabled,iconLeft:Ae,tabindex:this.isDndDisabled?-1:void 0,title:this.texts.reorderDown,textScreenReader:this.texts.reorderDown,onClick:()=>this.moveRowDown(this.rowIndex)})])])}},$e={name:"ATableFormTh",props:{column:{type:Object,required:!0},isEditable:{type:Boolean,required:!1,default:!1}},setup(e){const{columnStyles:t}=ee({column:e.column});return{columnStyles:t}},render(){var e;return n("th",{class:["a_table_form__cell","a_table_form__cell_th",this.column.class],style:this.columnStyles},[this.column.label&&n(B,{html:this.column.label,tag:"span"}),this.isEditable&&((e=this.column.formElement)==null?void 0:e.required)&&n("span",{"aria-hidden":!0,class:"a_label__required"}," *")])}};function He(e,{errorsLocal:t=R(void 0)}){const o=c(e,"onCancelEditRow"),s=c(e,"row"),r=c(e,"rows"),l=c(e,"rowIndex"),a=c(e,"saveRow"),i=R(!1),_=R(void 0),h=({columnId:u,model:p})=>{_.value||(_.value=I(s.value)||{}),ve(_.value,u,p),ye(t.value,u)},A=()=>{o.value({row:s.value,rowIndex:l.value})};return{cancelEditRow:A,isSaving:i,modelLocal:_,saveEditRow:async()=>{if(!i.value){t.value={},i.value=!0;try{const u=await a.value({model:I(_.value),row:s.value,rowIndex:l.value,rows:r.value});if(u!=null&&u.errors){t.value=I(u.errors);return}A()}catch(u){t.value=u}finally{i.value=!1}}},updateModelLocal:h}}function We(e){const t=c(e,"columns"),o=R({}),s=w(()=>!De(o.value)),r=w(()=>{const l=[];return ge(t.value,a=>{const i=I(a.formElement)||{};i.type=i.type||"text",i.label=i.label||a.label,i.id=i.id||a.id,l.push(i)}),l});return{errorsLocal:o,hasErrors:s,optionsListForErrors:r}}function je({idTr:e=w(()=>"")}){return{focusFirstEditableElement:()=>{const o=document.getElementById(e.value);if(!o)return;const r=Array.from(o.querySelectorAll(".a_table_form__cell:not(.a_table_form__cell_actions)")).map(l=>l.querySelector(ie)).find(Boolean);r==null||r.focus()}}}function Je(e){const t=c(e,"id"),o=c(e,"isHeader"),s=c(e,"isFooter"),r=c(e,"rowIndex");return{idTr:w(()=>`${t.value}_${r.value}${o.value?"_header":""}${s.value?"_footer":""}`)}}const P={name:"ATableFormRow",props:{allColumnsLength:{type:Number,required:!0},canMoveRowDown:{type:Function,required:!0},canMoveRowUp:{type:Function,required:!0},cellTag:{type:String,required:!1,default:void 0},columns:{type:Array,required:!0},draggedRowIndex:{type:Number,required:!1,default:void 0},errorIcon:{type:String,required:!1,default:void 0},hasActionsColumn:{type:Boolean,required:!1,default:!1},hasActiveEditRow:{type:Boolean,required:!1,default:!1},id:{type:String,required:!0},isActiveEditMode:{type:Boolean,required:!1,default:!1},isActionsSticky:{type:Boolean,required:!1,default:!1},isCreateMode:{type:Boolean,required:!1,default:!1},isDeletable:{type:Boolean,required:!1,default:!1},isDeletableConfirm:{type:Boolean,required:!1,default:!1},isDndDisabled:{type:Boolean,required:!1,default:!1},isDragAndDrop:{type:Boolean,required:!1,default:!1},isEditable:{type:Boolean,required:!1,default:!1},isFooter:{type:Boolean,required:!1,default:!1},isHeader:{type:Boolean,required:!1,default:!1},moveRowDown:{type:Function,required:!0},moveRowUp:{type:Function,required:!0},onCancelEditRow:{type:Function,required:!0},onDeleteRow:{type:Function,required:!0},onDragend:{type:Function,required:!0},onDragleave:{type:Function,required:!1,default:void 0},onDragover:{type:Function,required:!1,default:void 0},onDragstart:{type:Function,required:!0},onDrop:{type:Function,required:!1,default:void 0},onEditRow:{type:Function,required:!0},row:{type:Object,required:!0},rowIndex:{type:Number,required:!0},rows:{type:Array,required:!0},saveRow:{type:Function,required:!0},texts:{type:Object,required:!1,default:()=>({})},trClass:{type:[String,Object,Array],required:!1,default:void 0}},setup(e){const{idTr:t}=Je(e),{focusFirstEditableElement:o}=je({idTr:t}),{errorsLocal:s,hasErrors:r,optionsListForErrors:l}=We(e),{cancelEditRow:a,isSaving:i,modelLocal:_,saveEditRow:h,updateModelLocal:A}=He(e,{errorsLocal:s});return{cancelEditRow:a,errorsLocal:s,focusFirstEditableElement:o,hasErrors:r,idTr:t,isSaving:i,modelLocal:_,optionsListForErrors:l,saveEditRow:h,updateModelLocal:A}},computed:{currentRowData(){return this.isActiveEditMode&&this.modelLocal?this.modelLocal:this.row},trClassLocal(){return[this.trClass,{a_table_form__row_active:!this.isHeader&&!this.isFooter&&this.isActiveEditMode,a_table_form__row_errors:!this.isHeader&&!this.isFooter&&this.hasErrors,a_table_form__row_inactive:!this.isHeader&&!this.isFooter&&this.hasActiveEditRow&&!this.isActiveEditMode}]}},watch:{isActiveEditMode:{immediate:!0,handler(e){if(e){this.modelLocal=I(this.row),this.errorsLocal={},U(()=>{this.focusFirstEditableElement()});return}this.errorsLocal={},this.isSaving=!1}}},render(){const e=[];return this.isActiveEditMode&&this.texts.editInfoText&&e.push(n("tr",{class:"a_table_form__row a_table_form__row_info",key:`info_${this.rowIndex}`},[n("td",{class:"a_table_form__cell a_table_form__cell_info",colspan:this.allColumnsLength},[n(re,{alertClass:"a_table_form__info",html:this.texts.editInfoText,isVisible:!0,type:"info"})])])),e.push(n("tr",{id:this.idTr,"aria-grabbed":!this.isHeader&&!this.isFooter?this.draggedRowIndex===this.rowIndex:void 0,class:this.trClassLocal,key:`main_${this.rowIndex}`,onDragleave:this.onDragleave&&(t=>this.onDragleave(t,this.rowIndex)),onDragover:this.onDragover&&(t=>this.onDragover(t,this.rowIndex)),onDrop:this.onDrop&&(t=>this.onDrop(t,this.rowIndex))},[this.isDragAndDrop?n(Ue,{id:this.idTr,canMoveRowDown:this.canMoveRowDown,canMoveRowUp:this.canMoveRowUp,isDndDisabled:this.isDndDisabled,isDragAndDrop:this.isDragAndDrop,isFooter:this.isFooter,isHeader:this.isHeader,moveRowDown:this.moveRowDown,moveRowUp:this.moveRowUp,onDragend:this.onDragend,onDragstart:this.onDragstart,rowIndex:this.rowIndex,texts:this.texts}):null,...this.columns.map((t,o)=>this.isHeader?n($e,{column:t,isEditable:this.isEditable}):n(xe,{id:this.idTr,column:t,columnIndex:o,errorIcon:this.errorIcon,errors:this.errorsLocal,isEditable:this.isEditable,isEditMode:this.isActiveEditMode,isFooter:this.isFooter,onUpdateRowData:this.updateModelLocal,row:this.row,rowData:this.currentRowData,rowIndex:this.rowIndex,rows:this.rows,tag:this.cellTag},this.$slots)),this.hasActionsColumn?n(Ne,{id:this.idTr,hasActiveEditRow:this.hasActiveEditRow,isActiveEditMode:this.isActiveEditMode,isActionsSticky:this.isActionsSticky,isDeletable:this.isDeletable,isDeletableConfirm:this.isDeletableConfirm,isEditable:this.isEditable,isFooter:this.isFooter,isHeader:this.isHeader,isSaving:this.isSaving,onCancelEditRow:this.cancelEditRow,onDeleteRow:this.onDeleteRow,onEditRow:this.onEditRow,onSaveEditRow:this.saveEditRow,row:this.row,rowIndex:this.rowIndex,texts:this.texts}):null])),this.isActiveEditMode&&this.hasErrors&&e.push(n("tr",{class:"a_table_form__row a_table_form__row_errors",key:`errors_${this.rowIndex}`},[n("td",{class:"a_table_form__cell a_table_form__cell_errors",colspan:this.allColumnsLength},[n(ne,{autoFocus:!0,closable:!1,errors:this.errorsLocal,optionsList:this.optionsListForErrors,idPrefix:this.idTr})])])),e}};function Ve(e){const t=c(e,"columns"),o=c(e,"isDeletable"),s=c(e,"isDeletableConfirm"),r=c(e,"isDragAndDrop"),l=c(e,"isEditable"),a=w(()=>!!(l.value||o.value||s.value));return{allColumnsLength:w(()=>{var h;let _=((h=t.value)==null?void 0:h.length)||0;return r.value&&(_+=1),a.value&&(_+=1),_}),hasActionsColumn:a}}function Xe(e,{emit:t}){return{onDeleteRow:({row:s,rowIndex:r})=>{t("deleteRow",{row:s,rowIndex:r})}}}function Ke(e,{emit:t},{isDndDisabled:o=w(()=>!1)}={}){const s=c(e,"id"),r=c(e,"isDragAndDrop"),l=c(e,"rows"),a=R(void 0),i=R(void 0),_=R(void 0),h=R(void 0),A=()=>{var d;(d=h.value)==null||d.remove(),h.value=void 0},b=d=>{var C,Z;const m=(Z=(C=d.target)==null?void 0:C.closest)==null?void 0:Z.call(C,"tr");if(!m)return;const E=m.getBoundingClientRect(),f=document.createElement("table"),y=document.createElement("tbody"),O=m.cloneNode(!0);f.className="a_table_form__table",f.style.borderCollapse="collapse",f.style.borderSpacing="0",f.style.width=`${E.width}px`,f.style.tableLayout="fixed",Array.from(m.children).forEach((Q,te)=>{const M=O.children[te];if(M){const x=window.getComputedStyle(Q);M.style.width=`${Q.getBoundingClientRect().width}px`,M.style.backgroundColor=x.backgroundColor,M.style.borderTop=x.borderTop,M.style.borderRight=x.borderRight,M.style.borderBottom=x.borderBottom,M.style.borderLeft=x.borderLeft,M.style.color=x.color}}),y.appendChild(O),f.appendChild(y);const D=document.createElement("div");return D.className="a_table_form a_table_form__drag_preview",D.style.position="fixed",D.style.top="-10000px",D.style.left="-10000px",D.style.pointerEvents="none",D.style.zIndex="9999",D.appendChild(f),document.body.appendChild(D),h.value=D,{element:D,offsetX:Math.min(d.offsetX||0,E.width/2),offsetY:Math.min(d.offsetY||0,E.height/2)}},u=({fromIndex:d,toIndex:m,trigger:E})=>{if(!r.value||o.value||d===m||d<0||m<0||d>=l.value.length||m>=l.value.length)return;const f=[...l.value],[y]=f.splice(d,1);f.splice(m,0,y),t("updateRows",{rows:f,trigger:E}),t("moveRow",{fromIndex:d,row:y,toIndex:m})},p=({fromIndex:d,rowIndex:m,position:E="before"})=>{if(!r.value||o.value||d<0||m<0||d>=l.value.length||m>=l.value.length)return;let f=E==="after"?m+1:m;d<f&&(f-=1),u({fromIndex:d,toIndex:f,trigger:"dnd"})},g=d=>{u({fromIndex:d,toIndex:d-1,trigger:"moveRowUp"}),U().then(()=>{const m=Math.max(1,d-1);z({selector:`#${s.value}_${m}_up`})})},T=d=>{u({fromIndex:d,toIndex:d+1,trigger:"moveRowDown"}),U().then(()=>{const m=Math.min(l.value.length-2,d+1);z({selector:`#${s.value}_${m}_down`})})},W=(d,m)=>{if(!(!r.value||o.value)){if(d!=null&&d.dataTransfer){d.dataTransfer.effectAllowed="move",d.dataTransfer.setData("text/plain",`${m}`),A();const E=b(d);E&&d.dataTransfer.setDragImage(E.element,E.offsetX,E.offsetY)}a.value=m}},j=(d,m)=>{var f,y;if(!r.value||o.value)return;d.preventDefault();const E=(y=(f=d.currentTarget)==null?void 0:f.getBoundingClientRect)==null?void 0:y.call(f);if(E){const O=E.top+E.height/2;_.value=d.clientY<O?"before":"after"}else _.value="after";i.value=m},J=(d,m)=>{var f,y;if(!r.value||o.value)return;const E=d.relatedTarget;(y=(f=d.currentTarget)==null?void 0:f.contains)!=null&&y.call(f,E)||i.value===m&&(i.value=void 0,_.value=void 0)},V=(d,m)=>{!r.value||o.value||(d.preventDefault(),a.value!==void 0&&(p({fromIndex:a.value,position:_.value||"after",rowIndex:m}),A(),a.value=void 0,i.value=void 0,_.value=void 0))},X=()=>{A(),a.value=void 0,i.value=void 0,_.value=void 0};return{canMoveRowDown:w(()=>d=>d<l.value.length-1),canMoveRowUp:w(()=>d=>d>0),dragOverPosition:_,dragOverRowIndex:i,draggedRowIndex:a,onDragleave:J,moveRowDown:T,moveRowUp:g,onDragend:X,onDragover:j,onDragstart:W,onDrop:V}}function Ye(e,{getRowKey:t=()=>{}}){const o=c(e,"addRow"),s=c(e,"columns"),r=c(e,"isAddable"),l=c(e,"isEditable"),a=R(void 0),i=R(!1),_=w(()=>!!a.value||i.value),h=w(()=>r.value?Te(o.value):!1),A=w(()=>l.value?s.value.some(g=>{var T;return!!((T=g.formElement)!=null&&T.required)}):!1);return{activeEditRowKey:a,canAddRow:h,hasActiveEditRow:_,hasRequiredEditableColumns:A,isAddRowActive:i,onAddRow:()=>{_.value||!h.value||(a.value=void 0,i.value=!0)},onCancelEditRow:()=>{a.value=void 0,i.value=!1},onEditRow:({row:g,rowIndex:T})=>{i.value||(a.value=t({row:g,rowIndex:T}))}}}function ze(e){const t=c(e,"keyId"),o=c(e,"rows"),s=c(e,"rowsFooter"),r=w(()=>o.value.length>0),l=w(()=>s.value.length>0);return{getRowKey:({row:i,rowIndex:_,isFooter:h=!1})=>{let A=_;if(t.value){const u=G(i,t.value);Le(u)||(A=u)}return`${h?"footer":"body"}_${A}`},hasRows:r,hasRowsFooter:l}}function Ge(e){const t=c(e,"texts");return{textsLocal:w(()=>({actionsColumn:"_A_TABLE_FORM_ACTIONS_",actionAddRow:"_A_TABLE_FORM_ADD_ROW_",actionDelete:"_A_TABLE_FORM_DELETE_",actionDeleteConfirmBody:"_A_TABLE_FORM_DELETE_CONFIRM_BODY_",actionDeleteConfirmClose:"_A_TABLE_FORM_DELETE_CONFIRM_CLOSE_",actionDeleteConfirmHeader:"_A_TABLE_FORM_DELETE_CONFIRM_HEADER_",actionDeleteConfirmSave:"_A_TABLE_FORM_DELETE_CONFIRM_SAVE_",actionEdit:"_A_TABLE_FORM_EDIT_",actionEditCancel:"_A_TABLE_FORM_EDIT_CANCEL_",actionEditSave:"_A_TABLE_FORM_EDIT_SAVE_",editInfoText:void 0,emptyText:"_A_TABLE_FORM_EMPTY_",reorderColumn:"_A_TABLE_FORM_REORDER_COLUMN_",reorderDown:"_A_TABLE_FORM_MOVE_DOWN_",reorderHandle:"_A_TABLE_FORM_REORDER_",reorderUp:"_A_TABLE_FORM_MOVE_UP_",...t.value}))}}const H={name:"ATableForm",props:{addRow:{type:Function,required:!1,default:void 0},columns:{type:Array,required:!0},columnsDefaultValue:{type:[String,Number],required:!1,default:""},errorIcon:{type:String,required:!1,default:Ee},id:{type:String,required:!1,default:()=>Me("a_table_form_")},isDeletable:{type:Boolean,required:!1,default:!1},isDeletableConfirm:{type:Boolean,required:!1,default:!1},isActionsSticky:{type:Boolean,required:!1,default:!1},isAddable:{type:Boolean,required:!1,default:!1},isDragAndDrop:{type:Boolean,required:!1,default:!1},isEditable:{type:Boolean,required:!1,default:!1},keyId:{type:String,required:!1,default:void 0},label:{type:[String,Number],required:!1,default:""},labelClass:{type:[String,Object,Array],required:!1,default:void 0},labelTag:{type:String,required:!1,default:"h2"},rows:{type:Array,required:!1,default:()=>[]},rowsFooter:{type:Array,required:!1,default:()=>[]},saveRow:{type:Function,required:!1,default:()=>{}},texts:{type:Object,required:!1,default:()=>({})}},emits:["deleteRow","moveRow","updateRows"],setup(e,t){const{allColumnsLength:o,hasActionsColumn:s}=Ve(e),{getRowKey:r,hasRows:l,hasRowsFooter:a}=ze(e),{textsLocal:i}=Ge(e),{activeEditRowKey:_,canAddRow:h,hasActiveEditRow:A,hasRequiredEditableColumns:b,isAddRowActive:u,onAddRow:p,onCancelEditRow:g,onEditRow:T}=Ye(e,{getRowKey:r}),{canMoveRowDown:W,canMoveRowUp:j,dragOverPosition:J,dragOverRowIndex:V,draggedRowIndex:X,moveRowDown:d,moveRowUp:m,onDragend:E,onDragleave:f,onDragover:y,onDragstart:O,onDrop:D}=Ke(e,t,{isDndDisabled:A}),{onDeleteRow:C}=Xe(e,t);return{activeEditRowKey:_,allColumnsLength:o,canAddRow:h,canMoveRowDown:W,canMoveRowUp:j,draggedRowIndex:X,dragOverPosition:J,dragOverRowIndex:V,getRowKey:r,hasActionsColumn:s,hasActiveEditRow:A,hasRequiredEditableColumns:b,hasRows:l,hasRowsFooter:a,isAddRowActive:u,moveRowDown:d,moveRowUp:m,onAddRow:p,onCancelEditRow:g,onDeleteRow:C,onDragend:E,onDragleave:f,onDragover:y,onDragstart:O,onDrop:D,onEditRow:T,textsLocal:i}},render(){return n("div",{class:"a_table_form"},[this.label&&n(B,{class:["a_table_form__label",this.labelClass],html:this.label,tag:this.labelTag}),this.hasRequiredEditableColumns&&n(le),n("div",{class:"a_table_form__wrapper"},[n("table",{id:this.id,class:["a_table_form__table",{a_table_form_drag_active:this.draggedRowIndex!==void 0}]},[n("thead",{class:"a_table_form__head"},[n(P,{id:this.id,allColumnsLength:this.allColumnsLength,canMoveRowDown:this.canMoveRowDown,canMoveRowUp:this.canMoveRowUp,cellTag:"th",columns:this.columns,draggedRowIndex:this.draggedRowIndex,hasActionsColumn:this.hasActionsColumn,hasActiveEditRow:!1,isActiveEditMode:!1,isActionsSticky:this.isActionsSticky,isDeletable:this.isDeletable,isDeletableConfirm:this.isDeletableConfirm,isDndDisabled:this.hasActiveEditRow,isDragAndDrop:this.isDragAndDrop,isEditable:this.isEditable,isHeader:!0,moveRowDown:this.moveRowDown,moveRowUp:this.moveRowUp,onCancelEditRow:this.onCancelEditRow,onDeleteRow:this.onDeleteRow,onDragend:this.onDragend,onDragstart:this.onDragstart,onEditRow:this.onEditRow,row:{},rowIndex:0,rows:this.rows,saveRow:this.saveRow,texts:this.textsLocal,trClass:"a_table_form__row a_table_form__row_head"},this.$slots)]),n("tbody",{class:"a_table_form__body"},this.hasRows||this.isAddRowActive?[...this.rows.map((e,t)=>{const o=this.getRowKey({row:e,rowIndex:t});return n(P,{id:this.id,allColumnsLength:this.allColumnsLength,canMoveRowDown:this.canMoveRowDown,canMoveRowUp:this.canMoveRowUp,columns:this.columns,draggedRowIndex:this.draggedRowIndex,errorIcon:this.errorIcon,hasActionsColumn:this.hasActionsColumn,hasActiveEditRow:this.hasActiveEditRow,isActiveEditMode:this.activeEditRowKey===o,isActionsSticky:this.isActionsSticky,isCreateMode:!1,isDeletable:this.isDeletable,isDeletableConfirm:this.isDeletableConfirm,isDndDisabled:this.hasActiveEditRow,isDragAndDrop:this.isDragAndDrop,isEditable:this.isEditable,key:o,moveRowDown:this.moveRowDown,moveRowUp:this.moveRowUp,onCancelEditRow:this.onCancelEditRow,onDeleteRow:this.onDeleteRow,onDragend:this.onDragend,onDragleave:this.onDragleave,onDragover:this.onDragover,onDragstart:this.onDragstart,onDrop:this.onDrop,onEditRow:this.onEditRow,row:e,rowIndex:t,rows:this.rows,saveRow:this.saveRow,texts:this.textsLocal,trClass:["a_table_form__row",{a_table_form__row_drag_after:this.dragOverRowIndex===t&&this.dragOverPosition==="after",a_table_form__row_drag_before:this.dragOverRowIndex===t&&this.dragOverPosition==="before",a_table_form__row_drag_over:this.dragOverRowIndex===t,a_table_form__row_dragging:this.draggedRowIndex===t}]},this.$slots)}),this.isAddRowActive&&n(P,{id:this.id,allColumnsLength:this.allColumnsLength,canMoveRowDown:this.canMoveRowDown,canMoveRowUp:this.canMoveRowUp,columns:this.columns,errorIcon:this.errorIcon,draggedRowIndex:this.draggedRowIndex,hasActionsColumn:this.hasActionsColumn,hasActiveEditRow:this.hasActiveEditRow,isActiveEditMode:!0,isActionsSticky:this.isActionsSticky,isCreateMode:!0,isDeletable:!1,isDeletableConfirm:!1,isDndDisabled:!0,isDragAndDrop:!1,isEditable:this.isEditable,key:"body_create",moveRowDown:this.moveRowDown,moveRowUp:this.moveRowUp,onCancelEditRow:this.onCancelEditRow,onDeleteRow:this.onDeleteRow,onDragend:this.onDragend,onDragleave:this.onDragleave,onDragover:this.onDragover,onDragstart:this.onDragstart,onDrop:this.onDrop,onEditRow:this.onEditRow,row:{},rowIndex:this.rows.length,rows:this.rows,saveRow:this.addRow,texts:this.textsLocal,trClass:"a_table_form__row a_table_form__row_create"},this.$slots)]:[n("tr",{class:"a_table_form__row a_table_form__row_empty"},[n("td",{class:"a_table_form__cell a_table_form__empty",colspan:this.allColumnsLength},[n(B,{tag:"span",text:this.textsLocal.emptyText})])])]),this.hasRowsFooter&&n("tfoot",{class:"a_table_form__foot"},this.rowsFooter.map((e,t)=>n(P,{id:this.id,allColumnsLength:this.allColumnsLength,canMoveRowDown:this.canMoveRowDown,canMoveRowUp:this.canMoveRowUp,columns:this.columns,draggedRowIndex:this.draggedRowIndex,hasActionsColumn:this.hasActionsColumn,hasActiveEditRow:this.hasActiveEditRow,isActiveEditMode:!1,isActionsSticky:this.isActionsSticky,isDeletable:this.isDeletable,isDeletableConfirm:this.isDeletableConfirm,isDndDisabled:this.hasActiveEditRow,isDragAndDrop:this.isDragAndDrop,isEditable:this.isEditable,isFooter:!0,key:this.getRowKey({isFooter:!0,row:e,rowIndex:t}),moveRowDown:this.moveRowDown,moveRowUp:this.moveRowUp,onCancelEditRow:this.onCancelEditRow,onDeleteRow:this.onDeleteRow,onDragend:this.onDragend,onDragstart:this.onDragstart,onEditRow:this.onEditRow,row:e,rowIndex:t,rows:this.rowsFooter,saveRow:this.saveRow,texts:this.textsLocal,trClass:"a_table_form__row a_table_form__row_footer"},this.$slots)))]),this.canAddRow&&n("div",{class:"a_mt_3 a_text_right"},[n(F,{class:"a_btn a_btn_outline_primary",disabled:this.hasActiveEditRow,iconLeft:pe,text:this.textsLocal.actionAddRow,onClick:this.onAddRow})])])])}};function Ze(){return{codeHtml:`<a-simple-table
  :columns="columns"
  :rows-footer="rowsFooter"
  :rows="rows"
  key-id="id"
  label="_A_TABLE_FORM_EXAMPLE_LABEL_"
/>
`}}function Qe(){return{codeJs:`import {
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
};`}}const et={name:"PageTableFormBasic",components:{AlohaExample:$,ATableForm:H},setup(){const{codeHtml:e}=Ze(),{codeJs:t}=Qe(),o=[{id:"position",label:"_A_TABLE_FORM_COLUMN_POSITION_",maxWidth:96,minWidth:96,width:96,formElement:{type:"number"}},{id:"name",label:"_A_TABLE_FORM_COLUMN_NAME_",maxWidth:"18rem",minWidth:"12rem",width:"16rem",formElement:{type:"text"}},{id:"team",formElement:{translateData:!0,data:[{label:"_A_TABLE_FORM_TEAM_NORTH_",value:"north"},{label:"_A_TABLE_FORM_TEAM_WEST_",value:"west"},{label:"_A_TABLE_FORM_TEAM_SOUTH_",value:"south"},{label:"_A_TABLE_FORM_TEAM_EAST_",value:"east"}],keyId:"value",keyLabel:"label",type:"select"},label:"_A_TABLE_FORM_COLUMN_TEAM_",minWidth:"12rem"},{id:"score",footerDefaultValue:"68",footerKeyLabel:"score",formElement:{type:"integer"},label:"_A_TABLE_FORM_COLUMN_SCORE_",maxWidth:120,minWidth:120,width:120}],s=R([{id:1,name:"Марта Иванова",position:1,score:18,team:"north"},{id:2,name:"Олег Сидоров",position:2,score:17,team:"west"},{id:3,name:"Анна Петрова",position:3,score:16,team:"south"},{id:4,name:"Игорь Ковалёв",position:4,score:17,team:"east"}]);return{codeHtml:e,codeJs:t,columns:o,rows:s,rowsFooter:[{name:"_A_TABLE_FORM_FOOTER_TOTAL_",score:68}]}}};function tt(e,t,o,s,r,l){const a=v("a-table-form"),i=v("aloha-example");return k(),q(i,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TABLE_FORM_EXAMPLE_HEADER_"},{default:N(()=>[L(a,{columns:e.columns,"rows-footer":e.rowsFooter,rows:e.rows,"key-id":"id",label:"_A_TABLE_FORM_EXAMPLE_LABEL_"},null,8,["columns","rows-footer","rows"])]),_:1},8,["code-html","code-js"])}const ot=S(et,[["render",tt]]);function at(){return{codeHtml:`<a-simple-table
  :columns="columns"
  :is-drag-and-drop="true"
  :rows-footer="rowsFooter"
  :rows="rows"
  key-id="id"
  label="_A_TABLE_FORM_EXAMPLE_LABEL_"
  @update-rows="updateRows"
/>
`}}function st(){return{codeJs:`import {
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
};`}}const it={name:"PageTableFormDND",components:{AlohaExample:$,ATableForm:H},setup(){const{codeHtml:e}=at(),{codeJs:t}=st(),o=[{id:"position",label:"_A_TABLE_FORM_COLUMN_POSITION_",maxWidth:96,minWidth:96,width:96,formElement:{type:"text"}},{id:"name",formElement:{type:"text"},label:"_A_TABLE_FORM_COLUMN_NAME_",maxWidth:"18rem",minWidth:"12rem",width:"16rem"},{id:"team",formElement:{translateData:!0,data:[{label:"_A_TABLE_FORM_TEAM_NORTH_",value:"north"},{label:"_A_TABLE_FORM_TEAM_WEST_",value:"west"},{label:"_A_TABLE_FORM_TEAM_SOUTH_",value:"south"},{label:"_A_TABLE_FORM_TEAM_EAST_",value:"east"}],keyId:"value",keyLabel:"label",type:"select"},label:"_A_TABLE_FORM_COLUMN_TEAM_",minWidth:"12rem"},{id:"score",footerDefaultValue:"68",footerKeyLabel:"score",formElement:{type:"integer"},label:"_A_TABLE_FORM_COLUMN_SCORE_",maxWidth:120,minWidth:120,width:120}],s=R([{id:1,name:"Марта Иванова",position:1,score:18,team:"north"},{id:2,name:"Олег Сидоров",position:2,score:17,team:"west"},{id:3,name:"Анна Петрова",position:3,score:16,team:"south"},{id:4,name:"Игорь Ковалёв",position:4,score:17,team:"east"}]);return{codeHtml:e,codeJs:t,columns:o,rows:s,rowsFooter:[{name:"_A_TABLE_FORM_FOOTER_TOTAL_",score:68}],updateRows:({rows:a,trigger:i})=>{s.value=a,console.log("trigger",i)}}}};function rt(e,t,o,s,r,l){const a=v("a-table-form"),i=v("aloha-example");return k(),q(i,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TABLE_FORM_DND_HEADER_",description:"_A_TABLE_FORM_DND_DESCRIPTION_",props:"is-drag-and-drop"},{default:N(()=>[L(a,{columns:e.columns,"is-drag-and-drop":!0,"rows-footer":e.rowsFooter,rows:e.rows,"key-id":"id",label:"_A_TABLE_FORM_EXAMPLE_LABEL_",onUpdateRows:e.updateRows},null,8,["columns","rows-footer","rows","onUpdateRows"])]),_:1},8,["code-html","code-js"])}const nt=S(it,[["render",rt]]);function lt(){return{codeHtml:`<a-checkbox>
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
`}}function dt(){return{codeJs:`import {
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
};`}}const ct={name:"PageTableFormEdit",components:{ACheckbox:de,AlohaExample:$,ATableForm:H},setup(){const{codeHtml:e}=lt(),{codeJs:t}=dt(),o=[{label:"is-deletable-confirm",value:"is-deletable-confirm"},{label:"is-deletable",value:"is-deletable"},{label:"is-editable",value:"is-editable"},{label:"is-addable",value:"is-addable"}],s=R(["is-deletable-confirm","is-deletable","is-editable","is-addable"]),r={actionEditCancel:"abbrechen",actionEditSave:"speichern",editInfoText:"Nur diese Zeile ist gerade im Bearbeitungsmodus."},l=[{id:"position",label:"_A_TABLE_FORM_COLUMN_POSITION_",maxWidth:96,minWidth:96,width:96,formElement:{controlsType:"none",type:"integer"}},{id:"name",formElement:{type:"text",required:!0},keyLabel:"name",label:"_A_TABLE_FORM_COLUMN_NAME_",maxWidth:"18rem",minWidth:"12rem",width:"16rem"},{id:"team",formElement:{data:[{label:"_A_TABLE_FORM_TEAM_NORTH_",value:"north"},{label:"_A_TABLE_FORM_TEAM_WEST_",value:"west"},{label:"_A_TABLE_FORM_TEAM_SOUTH_",value:"south"},{label:"_A_TABLE_FORM_TEAM_EAST_",value:"east"}],keyId:"value",keyLabel:"label",translateData:!0,type:"select"},label:"_A_TABLE_FORM_COLUMN_TEAM_",minWidth:"12rem"},{id:"score",footerDefaultValue:"68",footerKeyLabel:"score",formElement:{controlsType:"none",min:0,type:"integer"},label:"_A_TABLE_FORM_COLUMN_SCORE_",maxWidth:120,minWidth:120,width:120}],a=R([{id:1,name:"Marta Ivanova",position:1,score:18,team:"north"},{id:2,name:"Oleg Sidorov",position:2,score:17,team:"west"},{id:3,name:"Anna Petrova",position:3,score:16,team:"south"},{id:4,name:"Igor Kovalev",position:4,score:17,team:"east"}]);return{addRow:({model:b})=>{var p;console.log("model ",b);const u={};if((p=b.name)!=null&&p.trim()||(u.name=["Name ist erforderlich."]),b.team||(u.team=["Team ist erforderlich."]),b.score<18&&(u.score=["Score must be at least 18."]),Object.keys(u).length)return{errors:u};a.value.push({id:a.value.length+1,...b})},codeHtml:e,codeJs:t,columns:l,dataCheckbox:o,deleteRow:({row:b,rowIndex:u})=>{a.value.splice(u,1),console.log("row",b),console.log("rowIndex",u)},modelCheckbox:s,rows:a,rowsFooter:[{name:"_A_TABLE_FORM_FOOTER_TOTAL_",score:68}],saveRow:async({model:b,rowIndex:u})=>{var g;await new Promise(T=>{setTimeout(T,300)});const p={};if((g=b.name)!=null&&g.trim()||(p.name=["Name ist erforderlich."]),b.team||(p.team=["Team ist erforderlich."]),b.score<18&&(p.score=["Score must be at least 18."]),Object.keys(p).length)return{errors:p};a.value.splice(u,1,b)},texts:r}}};function _t(e,t,o,s,r,l){const a=v("a-checkbox"),i=v("a-table-form"),_=v("aloha-example");return k(),q(_,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TABLE_FORM_EDIT_HEADER_",description:"_A_TABLE_FORM_EDIT_DESCRIPTION_",props:["is-addable","is-deletable","is-deletable-confirm","is-editable","save-row","texts"]},{default:N(()=>[L(a,{class:"a_mb_4",modelValue:e.modelCheckbox,"onUpdate:modelValue":t[0]||(t[0]=h=>e.modelCheckbox=h),data:e.dataCheckbox,"translate-data":!0,"key-id":"value","key-label":"label"},null,8,["modelValue","data"]),L(i,{"add-row":e.addRow,columns:e.columns,"is-addable":e.modelCheckbox.includes("is-addable"),"is-deletable-confirm":e.modelCheckbox.includes("is-deletable-confirm"),"is-deletable":e.modelCheckbox.includes("is-deletable"),"is-editable":e.modelCheckbox.includes("is-editable"),"rows-footer":e.rowsFooter,rows:e.rows,"save-row":e.saveRow,texts:e.texts,"key-id":"id",label:"_A_TABLE_FORM_EXAMPLE_LABEL_",onDeleteRow:e.deleteRow},null,8,["add-row","columns","is-addable","is-deletable-confirm","is-deletable","is-editable","rows-footer","rows","save-row","texts","onDeleteRow"])]),_:1},8,["code-html","code-js"])}const ut=S(ct,[["render",_t]]);function mt(){return{codeHtml:`<a-one-checkbox
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
`}}function ht(){return{codeJs:`import {
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
};`}}const ft={name:"PageTableFormSticky",components:{AlohaExample:$,AOneCheckbox:ce,ATableForm:H},setup(){const{codeHtml:e}=mt(),{codeJs:t}=ht(),o=R(!0),s=Array.from({length:20},(l,a)=>{const i=a+1;return{id:`c${i}`,label:`${i}`,maxWidth:120,minWidth:120,width:120,formElement:{controlsType:"none",type:"integer"}}}),r=R(Array.from({length:6},(l,a)=>{const i={id:a+1};return s.forEach((_,h)=>{i[_.id]=(a+1)*100+h+1}),i}));return{codeHtml:e,codeJs:t,columns:s,isActionsSticky:o,rows:r}}};function wt(e,t,o,s,r,l){const a=v("a-one-checkbox"),i=v("a-table-form"),_=v("aloha-example");return k(),q(_,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TABLE_FORM_STICKY_HEADER_",description:"_A_TABLE_FORM_STICKY_DESCRIPTION_",props:["is-actions-sticky","is-deletable-confirm","is-editable"]},{default:N(()=>[L(a,{class:"a_mb_4",modelValue:e.isActionsSticky,"onUpdate:modelValue":t[0]||(t[0]=h=>e.isActionsSticky=h),label:"isActionsSticky"},null,8,["modelValue"]),L(i,{columns:e.columns,"is-actions-sticky":e.isActionsSticky,"is-deletable-confirm":!0,"is-editable":!0,rows:e.rows,"key-id":"id",label:"20 columns"},null,8,["columns","is-actions-sticky","rows"])]),_:1},8,["code-html","code-js"])}const bt=S(ft,[["render",wt]]);function At(){return{pageTitle:w(()=>_e({placeholder:"_A_TABLE_FORM_PAGE_TITLE_"}))}}const Et={name:"PageTableForm",components:{AlohaPage:oe,PageTableFormBasic:ot,PageTableFormDND:nt,PageTableFormEdit:ut,PageTableFormSticky:bt},setup(){const{pageTitle:e}=At();return{pageTitle:e}}};function pt(e,t,o,s,r,l){const a=v("page-table-form-basic"),i=v("page-table-form-d-n-d"),_=v("page-table-form-edit"),h=v("page-table-form-sticky"),A=v("aloha-page");return k(),q(A,{"page-title":e.pageTitle},{body:N(()=>[L(a),L(i),L(_),L(h)]),_:1},8,["page-title"])}const kt=S(Et,[["render",pt]]);export{kt as default};
