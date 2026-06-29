import{A as H,a as oe}from"./chunk.AlohaExample.CE8y3gMY.js";import{d as ae,s as G,A as B,c as O,b as se,f as ie,e as re,h as ne,i as le,_ as S,j as de,k as ce,g as ue}from"./bundle.index.ChCjitYk.js";import{t as l,d as h,h as n,M as $,l as _e,aX as me,L as fe,O as he,C as we,aY as be,g as Ae,r as R,P as Ee,E as pe,Y as k,W as q,aU as N,f as v,$ as L}from"./chunk.vendor.BAXy2grE.js";import{i as Re,j as Z,l as I,M as ve,T as ye,v as De,h as ge,r as Te,a as Le,u as Me}from"./chunk.vendor-lodash.CCzoES9g.js";import{A as Oe}from"./chunk.AFormElement.8U2jXKHv.js";import"./chunk.APageTabTitle.CiRmUmgI.js";import"./chunk.AlohaHighlightjs.BK8yZFUI.js";import"./chunk.translations-ar.B2OoBNnE.js";import"./chunk.translations-de.UgGe9j4v.js";import"./chunk.translations-en.0stqcWf2.js";import"./chunk.translations-es.BwgNL0Sc.js";import"./chunk.translations-fr.C2YYR8Jb.js";import"./chunk.translations-hr.B965uVG9.js";import"./chunk.translations-it.qkDQbydY.js";import"./chunk.translations-ru.x6UIBrxX.js";function Fe(e){const t=l(e,"column"),o=l(e,"isEditable"),i=l(e,"isEditMode");return{disabledLocal:h(()=>{var c,a;return!!((a=(c=t.value)==null?void 0:c.formElement)!=null&&a.disabled)||o.value&&!i.value})}}function Ce(e){const t=l(e,"column"),o=l(e,"isEditable"),i=l(e,"isEditMode"),r=l(e,"isFooter");return{readonlyLocal:h(()=>{var a,s,u,_;return r.value?!0:o.value?(s=(a=t.value)==null?void 0:a.formElement)!=null&&s.useRowReadonly?!i.value:!!((_=(u=t.value)==null?void 0:u.formElement)!=null&&_.readonly):!0})}}function Y(e){if(!(e==null||e===""))return typeof e=="number"?`${e}px`:e}function ee(e){const t=l(e,"column");return{columnStyles:h(()=>{const i={},r=Y(t.value.width),c=Y(t.value.maxWidth),a=Y(t.value.minWidth);return r&&(i.width=r),c&&(i.maxWidth=c),a&&(i.minWidth=a),Re(t.value.style)?{...i,...t.value.style}:t.value.style?[i,t.value.style]:i})}}const xe={name:"ATableFormCell",props:{column:{type:Object,required:!0},columnIndex:{type:Number,required:!0},errorIcon:{type:String,required:!1,default:void 0},errors:{type:Object,required:!1,default:()=>({})},id:{type:String,required:!0},isEditMode:{type:Boolean,required:!1,default:!1},isEditable:{type:Boolean,required:!1,default:!1},isFooter:{type:Boolean,required:!1,default:!1},row:{type:Object,required:!0},rowData:{type:Object,required:!1,default:void 0},rowIndex:{type:Number,required:!0},rows:{type:Array,required:!0},tag:{type:String,required:!1,default:"td"}},emits:["updateRowData"],setup(e){const{columnStyles:t}=ee({column:e.column}),{readonlyLocal:o}=Ce(e),{disabledLocal:i}=Fe(e),r=h(()=>e.rowData||e.row);return{columnStyles:t,disabledLocal:i,readonlyLocal:o,rowDataLocal:r}},methods:{updateRowData({model:e}){this.$emit("updateRowData",{columnId:this.column.id,model:e})}},render(){const{type:e="text",...t}=this.column.formElement||{};return n(this.tag,{class:["a_table_form__cell",`a_table_form__cell_${this.tag}`,this.column.class,this.isFooter?this.column.classFooter:this.column.classRow],style:this.columnStyles},[n(Oe,{id:this.column.id,errorIcon:this.errorIcon,idPrefix:this.id,...t,change:this.updateRowData,disabled:this.disabledLocal,errors:Z(this.errors,this.column.id),errorsClass:"a_sr_only",modelValue:Z(this.rowDataLocal,this.column.id),readonly:this.readonlyLocal,type:e})])}};function Be(e,{isActionsDisabled:t=h(()=>!1)}){const o=l(e,"id"),i=l(e,"isDeletable"),r=l(e,"isDeletableConfirm"),c=l(e,"onDeleteRow"),a=l(e,"row"),s=l(e,"rowIndex"),u=l(e,"texts"),{closeConfirm:_,openConfirm:A}=ae(),b=h(()=>`${o.value}_delete`),m=()=>{_(),$().then(()=>{G({selector:`#${b.value}`})})},p=()=>{A({bodyHtml:u.value.actionDeleteConfirmBody,closeButtonText:u.value.actionDeleteConfirmClose,headerText:u.value.actionDeleteConfirmHeader,save:async()=>{await c.value({row:a.value,rowIndex:s.value}),_()},close:m,saveButtonText:u.value.actionDeleteConfirmSave})};return{idBtnDelete:b,onDeleteClick:()=>{if(!t.value){if(r.value){p();return}i.value&&c.value({row:a.value,rowIndex:s.value})}}}}function Ie(e){const t=l(e,"hasActiveEditRow"),o=l(e,"isActiveEditMode");return{isActionsDisabled:h(()=>t.value&&!o.value)}}const Se=56,ke=112;function qe(e){const t=l(e,"isDeletable"),o=l(e,"isDeletableConfirm"),i=l(e,"isEditable"),r=l(e,"isActiveEditMode");return{columnStyles:h(()=>{const a=t.value||o.value,s=i.value||r.value&&a?ke:Se;return{maxWidth:`${s}px`,minWidth:`${s}px`,width:`${s}px`}})}}const Ne={name:"ATableFormCellAction",props:{hasActiveEditRow:{type:Boolean,required:!1,default:!1},id:{type:String,required:!0},isActiveEditMode:{type:Boolean,required:!1,default:!1},isActionsSticky:{type:Boolean,required:!1,default:!1},isDeletable:{type:Boolean,required:!1,default:!1},isDeletableConfirm:{type:Boolean,required:!1,default:!1},isEditable:{type:Boolean,required:!1,default:!1},isFooter:{type:Boolean,required:!1,default:!1},isHeader:{type:Boolean,required:!1,default:!1},isSaving:{type:Boolean,required:!1,default:!1},onCancelEditRow:{type:Function,required:!0},onDeleteRow:{type:Function,required:!0},onEditRow:{type:Function,required:!0},onSaveEditRow:{type:Function,required:!0},row:{type:Object,required:!0},rowIndex:{type:Number,required:!0},texts:{type:Object,required:!1,default:()=>({})}},setup(e){const{isActionsDisabled:t}=Ie(e),{idBtnDelete:o,onDeleteClick:i}=Be(e,{isActionsDisabled:t}),{columnStyles:r}=qe(e);return{columnStyles:r,idBtnDelete:o,isActionsDisabled:t,onDeleteClick:i}},render(){const e=this.isHeader?"th":"td";return n(e,{class:["a_table_form__cell",`a_table_form__cell_${e}`,"a_table_form__cell_actions",{a_table_form__cell_actions_sticky:this.isActionsSticky}],style:this.columnStyles},[this.isHeader?n("span",{class:"a_sr_only"},[n(B,{tag:"span",text:this.texts.actionsColumn})]):this.isFooter?null:n("div",{class:"a_table_form__actions",role:"group"},this.isActiveEditMode?[n(O,{class:"a_btn a_btn_transparent_primary a_table_form__action_button",disabled:this.isSaving,iconLeft:_e,title:this.texts.actionEditCancel,textScreenReader:this.texts.actionEditCancel,onClick:()=>this.onCancelEditRow({row:this.row,rowIndex:this.rowIndex})}),n(O,{class:"a_btn a_btn_transparent_primary a_table_form__action_button",disabled:this.isSaving,iconLeft:me,title:this.texts.actionEditSave,textScreenReader:this.texts.actionEditSave,onClick:()=>this.onSaveEditRow({row:this.row,rowIndex:this.rowIndex})})]:[(this.isDeletable||this.isDeletableConfirm)&&n(O,{id:this.idBtnDelete,class:"a_btn a_btn_transparent_danger a_table_form__action_button",disabled:this.isActionsDisabled,iconLeft:fe,title:this.texts.actionDelete,textScreenReader:this.texts.actionDelete,onClick:this.onDeleteClick}),this.isEditable&&n(O,{class:"a_btn a_btn_transparent_primary a_table_form__action_button",disabled:this.isActionsDisabled,iconLeft:he,title:this.texts.actionEdit,textScreenReader:this.texts.actionEdit,onClick:()=>this.onEditRow({row:this.row,rowIndex:this.rowIndex})})])])}};function Pe(e){const t=l(e,"id"),o=h(()=>`${t.value}_up`);return{idBtnDown:h(()=>`${t.value}_down`),idBtnUp:o}}const z=56,Ue={name:"ATableFormCellDnd",props:{canMoveRowDown:{type:Function,required:!0},canMoveRowUp:{type:Function,required:!0},id:{type:String,required:!0},isDragAndDrop:{type:Boolean,required:!1,default:!1},isDndDisabled:{type:Boolean,required:!1,default:!1},isFooter:{type:Boolean,required:!1,default:!1},isHeader:{type:Boolean,required:!1,default:!1},moveRowDown:{type:Function,required:!0},moveRowUp:{type:Function,required:!0},onDragend:{type:Function,required:!0},onDragstart:{type:Function,required:!0},rowIndex:{type:Number,required:!0},texts:{type:Object,required:!1,default:()=>({})}},setup(e){const{idBtnDown:t,idBtnUp:o}=Pe(e);return{columnStyles:h(()=>({maxWidth:`${z}px`,minWidth:`${z}px`,width:`${z}px`})),idBtnDown:t,idBtnUp:o}},render(){const e=this.isHeader?"th":"td",t=this.isDragAndDrop&&!this.isDndDisabled;return n(e,{class:["a_table_form__cell",`a_table_form__cell_${e}`,"a_table_form__cell_reorder"],style:this.columnStyles},[this.isHeader?n("span",{class:"a_sr_only"},[n(B,{tag:"span",text:this.texts.reorderColumn})]):this.isFooter?null:n("div",{class:"a_table_form__reorder_actions"},[this.canMoveRowUp(this.rowIndex)&&n(O,{id:this.idBtnUp,class:"a_sr_only_focusable a_btn a_btn_transparent_dark a_table_form__reorder_button",disabled:this.isDndDisabled,iconLeft:we,tabindex:this.isDndDisabled?-1:void 0,title:this.texts.reorderUp,textScreenReader:this.texts.reorderUp,onClick:()=>this.moveRowUp(this.rowIndex)}),n("span",{ariaHidden:!0,class:"a_table_form__reorder_handle",draggable:t,onDragend:t?this.onDragend:void 0,onDragstart:t?o=>this.onDragstart(o,this.rowIndex):void 0},[n(se,{class:"a_table_form__reorder_icon",icon:be})]),n("span",{class:"a_sr_only"},[n(B,{tag:"span",text:this.texts.reorderHandle})]),this.canMoveRowDown(this.rowIndex)&&n(O,{id:this.idBtnDown,class:"a_sr_only_focusable a_btn a_btn_transparent_dark a_table_form__reorder_button",disabled:this.isDndDisabled,iconLeft:Ae,tabindex:this.isDndDisabled?-1:void 0,title:this.texts.reorderDown,textScreenReader:this.texts.reorderDown,onClick:()=>this.moveRowDown(this.rowIndex)})])])}},$e={name:"ATableFormTh",props:{column:{type:Object,required:!0},isEditable:{type:Boolean,required:!1,default:!1}},setup(e){const{columnStyles:t}=ee({column:e.column});return{columnStyles:t}},render(){var e;return n("th",{class:["a_table_form__cell","a_table_form__cell_th",this.column.class],style:this.columnStyles},[this.column.label&&n(B,{html:this.column.label,tag:"span"}),this.isEditable&&((e=this.column.formElement)==null?void 0:e.required)&&n("span",{class:"a_label__required"},"*")])}};function He(e,{errorsLocal:t=R(void 0)}){const o=l(e,"onCancelEditRow"),i=l(e,"row"),r=l(e,"rows"),c=l(e,"rowIndex"),a=l(e,"saveRow"),s=R(!1),u=R(void 0),_=({columnId:m,model:p})=>{u.value||(u.value=I(i.value)||{}),ve(u.value,m,p),ye(t.value,m)},A=()=>{o.value({row:i.value,rowIndex:c.value})};return{cancelEditRow:A,isSaving:s,modelLocal:u,saveEditRow:async()=>{if(!s.value){t.value={},s.value=!0;try{const m=await a.value({model:I(u.value),row:i.value,rowIndex:c.value,rows:r.value});if(m!=null&&m.errors){t.value=I(m.errors);return}A()}catch(m){t.value=m}finally{s.value=!1}}},updateModelLocal:_}}function We(e){const t=l(e,"columns"),o=R({}),i=h(()=>!De(o.value)),r=h(()=>{const c=[];return ge(t.value,a=>{const s=I(a.formElement)||{};s.type=s.type||"text",s.label=s.label||a.label,s.id=s.id||a.id,c.push(s)}),c});return{errorsLocal:o,hasErrors:i,optionsListForErrors:r}}function je({idTr:e=h(()=>"")}){return{focusFirstEditableElement:()=>{const o=document.getElementById(e.value);if(!o)return;const r=Array.from(o.querySelectorAll(".a_table_form__cell:not(.a_table_form__cell_actions)")).map(c=>c.querySelector(ie)).find(Boolean);r==null||r.focus()}}}function Je(e){const t=l(e,"id"),o=l(e,"isHeader"),i=l(e,"isFooter"),r=l(e,"rowIndex");return{idTr:h(()=>`${t.value}_${r.value}${o.value?"_header":""}${i.value?"_footer":""}`)}}const U={name:"ATableFormRow",props:{allColumnsLength:{type:Number,required:!0},canMoveRowDown:{type:Function,required:!0},canMoveRowUp:{type:Function,required:!0},cellTag:{type:String,required:!1,default:void 0},columns:{type:Array,required:!0},draggedRowIndex:{type:Number,required:!1,default:void 0},errorIcon:{type:String,required:!1,default:void 0},hasActionsColumn:{type:Boolean,required:!1,default:!1},hasActiveEditRow:{type:Boolean,required:!1,default:!1},id:{type:String,required:!0},isActiveEditMode:{type:Boolean,required:!1,default:!1},isActionsSticky:{type:Boolean,required:!1,default:!1},isCreateMode:{type:Boolean,required:!1,default:!1},isDeletable:{type:Boolean,required:!1,default:!1},isDeletableConfirm:{type:Boolean,required:!1,default:!1},isDndDisabled:{type:Boolean,required:!1,default:!1},isDragAndDrop:{type:Boolean,required:!1,default:!1},isEditable:{type:Boolean,required:!1,default:!1},isFooter:{type:Boolean,required:!1,default:!1},isHeader:{type:Boolean,required:!1,default:!1},moveRowDown:{type:Function,required:!0},moveRowUp:{type:Function,required:!0},onCancelEditRow:{type:Function,required:!0},onDeleteRow:{type:Function,required:!0},onDragend:{type:Function,required:!0},onDragleave:{type:Function,required:!1,default:void 0},onDragover:{type:Function,required:!1,default:void 0},onDragstart:{type:Function,required:!0},onDrop:{type:Function,required:!1,default:void 0},onEditRow:{type:Function,required:!0},row:{type:Object,required:!0},rowIndex:{type:Number,required:!0},rows:{type:Array,required:!0},saveRow:{type:Function,required:!0},texts:{type:Object,required:!1,default:()=>({})},trClass:{type:[String,Object,Array],required:!1,default:void 0}},setup(e){const{idTr:t}=Je(e),{focusFirstEditableElement:o}=je({idTr:t}),{errorsLocal:i,hasErrors:r,optionsListForErrors:c}=We(e),{cancelEditRow:a,isSaving:s,modelLocal:u,saveEditRow:_,updateModelLocal:A}=He(e,{errorsLocal:i});return{cancelEditRow:a,errorsLocal:i,focusFirstEditableElement:o,hasErrors:r,idTr:t,isSaving:s,modelLocal:u,optionsListForErrors:c,saveEditRow:_,updateModelLocal:A}},computed:{currentRowData(){return this.isActiveEditMode&&this.modelLocal?this.modelLocal:this.row},trClassLocal(){return[this.trClass,{a_table_form__row_active:!this.isHeader&&!this.isFooter&&this.isActiveEditMode,a_table_form__row_errors:!this.isHeader&&!this.isFooter&&this.hasErrors,a_table_form__row_inactive:!this.isHeader&&!this.isFooter&&this.hasActiveEditRow&&!this.isActiveEditMode}]}},watch:{isActiveEditMode:{immediate:!0,handler(e){if(e){this.modelLocal=I(this.row),this.errorsLocal={},$(()=>{this.focusFirstEditableElement()});return}this.errorsLocal={},this.isSaving=!1}}},render(){const e=[];return this.isActiveEditMode&&this.texts.editInfoText&&e.push(n("tr",{class:"a_table_form__row a_table_form__row_info",key:`info_${this.rowIndex}`},[n("td",{class:"a_table_form__cell a_table_form__cell_info",colspan:this.allColumnsLength},[n(re,{alertClass:"a_table_form__info",html:this.texts.editInfoText,isVisible:!0,type:"info"})])])),e.push(n("tr",{id:this.idTr,"aria-grabbed":!this.isHeader&&!this.isFooter?this.draggedRowIndex===this.rowIndex:void 0,class:this.trClassLocal,key:`main_${this.rowIndex}`,onDragleave:this.onDragleave&&(t=>this.onDragleave(t,this.rowIndex)),onDragover:this.onDragover&&(t=>this.onDragover(t,this.rowIndex)),onDrop:this.onDrop&&(t=>this.onDrop(t,this.rowIndex))},[this.isDragAndDrop?n(Ue,{id:this.idTr,canMoveRowDown:this.canMoveRowDown,canMoveRowUp:this.canMoveRowUp,isDndDisabled:this.isDndDisabled,isDragAndDrop:this.isDragAndDrop,isFooter:this.isFooter,isHeader:this.isHeader,moveRowDown:this.moveRowDown,moveRowUp:this.moveRowUp,onDragend:this.onDragend,onDragstart:this.onDragstart,rowIndex:this.rowIndex,texts:this.texts}):null,...this.columns.map((t,o)=>this.isHeader?n($e,{column:t,isEditable:this.isEditable}):n(xe,{id:this.idTr,column:t,columnIndex:o,errorIcon:this.errorIcon,errors:this.errorsLocal,isEditable:this.isEditable,isEditMode:this.isActiveEditMode,isFooter:this.isFooter,onUpdateRowData:this.updateModelLocal,row:this.row,rowData:this.currentRowData,rowIndex:this.rowIndex,rows:this.rows,tag:this.cellTag},this.$slots)),this.hasActionsColumn?n(Ne,{id:this.idTr,hasActiveEditRow:this.hasActiveEditRow,isActiveEditMode:this.isActiveEditMode,isActionsSticky:this.isActionsSticky,isDeletable:this.isDeletable,isDeletableConfirm:this.isDeletableConfirm,isEditable:this.isEditable,isFooter:this.isFooter,isHeader:this.isHeader,isSaving:this.isSaving,onCancelEditRow:this.cancelEditRow,onDeleteRow:this.onDeleteRow,onEditRow:this.onEditRow,onSaveEditRow:this.saveEditRow,row:this.row,rowIndex:this.rowIndex,texts:this.texts}):null])),this.isActiveEditMode&&this.hasErrors&&e.push(n("tr",{class:"a_table_form__row a_table_form__row_errors",key:`errors_${this.rowIndex}`},[n("td",{class:"a_table_form__cell a_table_form__cell_errors",colspan:this.allColumnsLength},[n(ne,{autoFocus:!0,closable:!1,errors:this.errorsLocal,optionsList:this.optionsListForErrors,idPrefix:this.idTr})])])),e}};function Ve(e){const t=l(e,"columns"),o=l(e,"isDeletable"),i=l(e,"isDeletableConfirm"),r=l(e,"isDragAndDrop"),c=l(e,"isEditable"),a=h(()=>!!(c.value||o.value||i.value));return{allColumnsLength:h(()=>{var _;let u=((_=t.value)==null?void 0:_.length)||0;return r.value&&(u+=1),a.value&&(u+=1),u}),hasActionsColumn:a}}function Xe(e,{emit:t}){return{onDeleteRow:({row:i,rowIndex:r})=>{t("deleteRow",{row:i,rowIndex:r})}}}function Ke(e,{emit:t},{isDndDisabled:o=h(()=>!1)}={}){const i=l(e,"id"),r=l(e,"isDragAndDrop"),c=l(e,"rows"),a=R(void 0),s=R(void 0),u=R(void 0),_=R(void 0),A=()=>{var d;(d=_.value)==null||d.remove(),_.value=void 0},b=d=>{var C,P;const f=(P=(C=d.target)==null?void 0:C.closest)==null?void 0:P.call(C,"tr");if(!f)return;const E=f.getBoundingClientRect(),w=document.createElement("table"),y=document.createElement("tbody"),F=f.cloneNode(!0);w.className="a_table_form__table",w.style.borderCollapse="collapse",w.style.borderSpacing="0",w.style.width=`${E.width}px`,w.style.tableLayout="fixed",Array.from(f.children).forEach((Q,te)=>{const M=F.children[te];if(M){const x=window.getComputedStyle(Q);M.style.width=`${Q.getBoundingClientRect().width}px`,M.style.backgroundColor=x.backgroundColor,M.style.borderTop=x.borderTop,M.style.borderRight=x.borderRight,M.style.borderBottom=x.borderBottom,M.style.borderLeft=x.borderLeft,M.style.color=x.color}}),y.appendChild(F),w.appendChild(y);const D=document.createElement("div");return D.className="a_table_form a_table_form__drag_preview",D.style.position="fixed",D.style.top="-10000px",D.style.left="-10000px",D.style.pointerEvents="none",D.style.zIndex="9999",D.appendChild(w),document.body.appendChild(D),_.value=D,{element:D,offsetX:Math.min(d.offsetX||0,E.width/2),offsetY:Math.min(d.offsetY||0,E.height/2)}},m=({fromIndex:d,toIndex:f,trigger:E})=>{if(!r.value||o.value||d===f||d<0||f<0||d>=c.value.length||f>=c.value.length)return;const w=[...c.value],[y]=w.splice(d,1);w.splice(f,0,y),t("updateRows",{rows:w,trigger:E}),t("moveRow",{fromIndex:d,row:y,toIndex:f})},p=({fromIndex:d,rowIndex:f,position:E="before"})=>{if(!r.value||o.value||d<0||f<0||d>=c.value.length||f>=c.value.length)return;let w=E==="after"?f+1:f;d<w&&(w-=1),m({fromIndex:d,toIndex:w,trigger:"dnd"})},g=d=>{m({fromIndex:d,toIndex:d-1,trigger:"moveRowUp"}),$().then(()=>{const f=Math.max(1,d-1);G({selector:`#${i.value}_${f}_up`})})},T=d=>{m({fromIndex:d,toIndex:d+1,trigger:"moveRowDown"}),$().then(()=>{const f=Math.min(c.value.length-2,d+1);G({selector:`#${i.value}_${f}_down`})})},j=(d,f)=>{if(!(!r.value||o.value)){if(d!=null&&d.dataTransfer){d.dataTransfer.effectAllowed="move",d.dataTransfer.setData("text/plain",`${f}`),A();const E=b(d);E&&d.dataTransfer.setDragImage(E.element,E.offsetX,E.offsetY)}a.value=f}},J=(d,f)=>{var w,y;if(!r.value||o.value)return;d.preventDefault();const E=(y=(w=d.currentTarget)==null?void 0:w.getBoundingClientRect)==null?void 0:y.call(w);if(E){const F=E.top+E.height/2;u.value=d.clientY<F?"before":"after"}else u.value="after";s.value=f},V=(d,f)=>{var w,y;if(!r.value||o.value)return;const E=d.relatedTarget;(y=(w=d.currentTarget)==null?void 0:w.contains)!=null&&y.call(w,E)||s.value===f&&(s.value=void 0,u.value=void 0)},X=(d,f)=>{!r.value||o.value||(d.preventDefault(),a.value!==void 0&&(p({fromIndex:a.value,position:u.value||"after",rowIndex:f}),A(),a.value=void 0,s.value=void 0,u.value=void 0))},K=()=>{A(),a.value=void 0,s.value=void 0,u.value=void 0};return{canMoveRowDown:h(()=>d=>d<c.value.length-1),canMoveRowUp:h(()=>d=>d>0),dragOverPosition:u,dragOverRowIndex:s,draggedRowIndex:a,onDragleave:V,moveRowDown:T,moveRowUp:g,onDragend:K,onDragover:J,onDragstart:j,onDrop:X}}function Ye(e,{getRowKey:t=()=>{}}){const o=l(e,"addRow"),i=l(e,"columns"),r=l(e,"isAddable"),c=l(e,"isEditable"),a=R(void 0),s=R(!1),u=h(()=>!!a.value||s.value),_=h(()=>r.value?Te(o.value):!1),A=h(()=>c.value?i.value.some(g=>{var T;return!!((T=g.formElement)!=null&&T.required)}):!1);return{activeEditRowKey:a,canAddRow:_,hasActiveEditRow:u,hasRequiredEditableColumns:A,isAddRowActive:s,onAddRow:()=>{u.value||!_.value||(a.value=void 0,s.value=!0)},onCancelEditRow:()=>{a.value=void 0,s.value=!1},onEditRow:({row:g,rowIndex:T})=>{s.value||(a.value=t({row:g,rowIndex:T}))}}}function ze(e){const t=l(e,"icons");return{iconsLocal:h(()=>({actionAddRow:Ee,...t.value}))}}function Ge(e){const t=l(e,"keyId"),o=l(e,"rows"),i=l(e,"rowsFooter"),r=h(()=>o.value.length>0),c=h(()=>i.value.length>0);return{getRowKey:({row:s,rowIndex:u,isFooter:_=!1})=>{let A=u;if(t.value){const m=Z(s,t.value);Le(m)||(A=m)}return`${_?"footer":"body"}_${A}`},hasRows:r,hasRowsFooter:c}}function Ze(e){const t=l(e,"texts");return{textsLocal:h(()=>({actionsColumn:"_A_TABLE_FORM_ACTIONS_",actionAddRow:"_A_TABLE_FORM_ADD_ROW_",actionDelete:"_A_TABLE_FORM_DELETE_",actionDeleteConfirmBody:"_A_TABLE_FORM_DELETE_CONFIRM_BODY_",actionDeleteConfirmClose:"_A_TABLE_FORM_DELETE_CONFIRM_CLOSE_",actionDeleteConfirmHeader:"_A_TABLE_FORM_DELETE_CONFIRM_HEADER_",actionDeleteConfirmSave:"_A_TABLE_FORM_DELETE_CONFIRM_SAVE_",actionEdit:"_A_TABLE_FORM_EDIT_",actionEditCancel:"_A_TABLE_FORM_EDIT_CANCEL_",actionEditSave:"_A_TABLE_FORM_EDIT_SAVE_",editInfoText:void 0,emptyText:"_A_TABLE_FORM_EMPTY_",reorderColumn:"_A_TABLE_FORM_REORDER_COLUMN_",reorderDown:"_A_TABLE_FORM_MOVE_DOWN_",reorderHandle:"_A_TABLE_FORM_REORDER_",reorderUp:"_A_TABLE_FORM_MOVE_UP_",...t.value}))}}const W={name:"ATableForm",props:{addRow:{type:Function,required:!1,default:void 0},columns:{type:Array,required:!0},columnsDefaultValue:{type:[String,Number],required:!1,default:""},errorIcon:{type:String,required:!1,default:pe},extra:{type:Object,required:!1,default:void 0},icons:{type:Object,required:!1,default:()=>({})},id:{type:String,required:!1,default:()=>Me("a_table_form_")},isDeletable:{type:Boolean,required:!1,default:!1},isDeletableConfirm:{type:Boolean,required:!1,default:!1},isActionsSticky:{type:Boolean,required:!1,default:!1},isAddable:{type:Boolean,required:!1,default:!1},isDragAndDrop:{type:Boolean,required:!1,default:!1},isEditable:{type:Boolean,required:!1,default:!1},keyId:{type:String,required:!1,default:void 0},label:{type:[String,Number],required:!1,default:""},labelClass:{type:[String,Object,Array],required:!1,default:void 0},labelTag:{type:String,required:!1,default:"h2"},rows:{type:Array,required:!1,default:()=>[]},rowsFooter:{type:Array,required:!1,default:()=>[]},saveRow:{type:Function,required:!1,default:()=>{}},texts:{type:Object,required:!1,default:()=>({})}},emits:["deleteRow","moveRow","updateRows"],setup(e,t){const{allColumnsLength:o,hasActionsColumn:i}=Ve(e),{getRowKey:r,hasRows:c,hasRowsFooter:a}=Ge(e),{textsLocal:s}=Ze(e),{iconsLocal:u}=ze(e),{activeEditRowKey:_,canAddRow:A,hasActiveEditRow:b,hasRequiredEditableColumns:m,isAddRowActive:p,onAddRow:g,onCancelEditRow:T,onEditRow:j}=Ye(e,{getRowKey:r}),{canMoveRowDown:J,canMoveRowUp:V,dragOverPosition:X,dragOverRowIndex:K,draggedRowIndex:d,moveRowDown:f,moveRowUp:E,onDragend:w,onDragleave:y,onDragover:F,onDragstart:D,onDrop:C}=Ke(e,t,{isDndDisabled:b}),{onDeleteRow:P}=Xe(e,t);return{activeEditRowKey:_,allColumnsLength:o,canAddRow:A,canMoveRowDown:J,canMoveRowUp:V,draggedRowIndex:d,dragOverPosition:X,dragOverRowIndex:K,getRowKey:r,hasActionsColumn:i,hasActiveEditRow:b,hasRequiredEditableColumns:m,hasRows:c,hasRowsFooter:a,iconsLocal:u,isAddRowActive:p,moveRowDown:f,moveRowUp:E,onAddRow:g,onCancelEditRow:T,onDeleteRow:P,onDragend:w,onDragleave:y,onDragover:F,onDragstart:D,onDrop:C,onEditRow:j,textsLocal:s}},render(){return n("div",{class:"a_table_form"},[this.label&&n(B,{class:["a_table_form__label",this.labelClass],html:this.label,tag:this.labelTag}),this.hasRequiredEditableColumns&&n(le),n("div",{class:"a_table_form__wrapper"},[n("table",{id:this.id,class:["a_table_form__table",{a_table_form_drag_active:this.draggedRowIndex!==void 0}]},[n("thead",{class:"a_table_form__head"},[n(U,{id:this.id,allColumnsLength:this.allColumnsLength,canMoveRowDown:this.canMoveRowDown,canMoveRowUp:this.canMoveRowUp,cellTag:"th",columns:this.columns,draggedRowIndex:this.draggedRowIndex,hasActionsColumn:this.hasActionsColumn,hasActiveEditRow:!1,isActiveEditMode:!1,isActionsSticky:this.isActionsSticky,isDeletable:this.isDeletable,isDeletableConfirm:this.isDeletableConfirm,isDndDisabled:this.hasActiveEditRow,isDragAndDrop:this.isDragAndDrop,isEditable:this.isEditable,isHeader:!0,moveRowDown:this.moveRowDown,moveRowUp:this.moveRowUp,onCancelEditRow:this.onCancelEditRow,onDeleteRow:this.onDeleteRow,onDragend:this.onDragend,onDragstart:this.onDragstart,onEditRow:this.onEditRow,row:{},rowIndex:0,rows:this.rows,saveRow:this.saveRow,texts:this.textsLocal,trClass:"a_table_form__row a_table_form__row_head"},this.$slots)]),n("tbody",{class:"a_table_form__body"},this.hasRows||this.isAddRowActive?[...this.rows.map((e,t)=>{const o=this.getRowKey({row:e,rowIndex:t});return n(U,{id:this.id,allColumnsLength:this.allColumnsLength,canMoveRowDown:this.canMoveRowDown,canMoveRowUp:this.canMoveRowUp,columns:this.columns,draggedRowIndex:this.draggedRowIndex,errorIcon:this.errorIcon,hasActionsColumn:this.hasActionsColumn,hasActiveEditRow:this.hasActiveEditRow,isActiveEditMode:this.activeEditRowKey===o,isActionsSticky:this.isActionsSticky,isCreateMode:!1,isDeletable:this.isDeletable,isDeletableConfirm:this.isDeletableConfirm,isDndDisabled:this.hasActiveEditRow,isDragAndDrop:this.isDragAndDrop,isEditable:this.isEditable,key:o,moveRowDown:this.moveRowDown,moveRowUp:this.moveRowUp,onCancelEditRow:this.onCancelEditRow,onDeleteRow:this.onDeleteRow,onDragend:this.onDragend,onDragleave:this.onDragleave,onDragover:this.onDragover,onDragstart:this.onDragstart,onDrop:this.onDrop,onEditRow:this.onEditRow,row:e,rowIndex:t,rows:this.rows,saveRow:this.saveRow,texts:this.textsLocal,trClass:["a_table_form__row",{a_table_form__row_drag_after:this.dragOverRowIndex===t&&this.dragOverPosition==="after",a_table_form__row_drag_before:this.dragOverRowIndex===t&&this.dragOverPosition==="before",a_table_form__row_drag_over:this.dragOverRowIndex===t,a_table_form__row_dragging:this.draggedRowIndex===t}]},this.$slots)}),this.isAddRowActive&&n(U,{id:this.id,allColumnsLength:this.allColumnsLength,canMoveRowDown:this.canMoveRowDown,canMoveRowUp:this.canMoveRowUp,columns:this.columns,errorIcon:this.errorIcon,draggedRowIndex:this.draggedRowIndex,hasActionsColumn:this.hasActionsColumn,hasActiveEditRow:this.hasActiveEditRow,isActiveEditMode:!0,isActionsSticky:this.isActionsSticky,isCreateMode:!0,isDeletable:!1,isDeletableConfirm:!1,isDndDisabled:!0,isDragAndDrop:!1,isEditable:this.isEditable,key:"body_create",moveRowDown:this.moveRowDown,moveRowUp:this.moveRowUp,onCancelEditRow:this.onCancelEditRow,onDeleteRow:this.onDeleteRow,onDragend:this.onDragend,onDragleave:this.onDragleave,onDragover:this.onDragover,onDragstart:this.onDragstart,onDrop:this.onDrop,onEditRow:this.onEditRow,row:{},rowIndex:this.rows.length,rows:this.rows,saveRow:this.addRow,texts:this.textsLocal,trClass:"a_table_form__row a_table_form__row_create"},this.$slots)]:[n("tr",{class:"a_table_form__row a_table_form__row_empty"},[n("td",{class:"a_table_form__cell a_table_form__empty",colspan:this.allColumnsLength},[n(B,{tag:"span",text:this.textsLocal.emptyText})])])]),this.hasRowsFooter&&n("tfoot",{class:"a_table_form__foot"},this.rowsFooter.map((e,t)=>n(U,{id:this.id,allColumnsLength:this.allColumnsLength,canMoveRowDown:this.canMoveRowDown,canMoveRowUp:this.canMoveRowUp,columns:this.columns,draggedRowIndex:this.draggedRowIndex,hasActionsColumn:this.hasActionsColumn,hasActiveEditRow:this.hasActiveEditRow,isActiveEditMode:!1,isActionsSticky:this.isActionsSticky,isDeletable:this.isDeletable,isDeletableConfirm:this.isDeletableConfirm,isDndDisabled:this.hasActiveEditRow,isDragAndDrop:this.isDragAndDrop,isEditable:this.isEditable,isFooter:!0,key:this.getRowKey({isFooter:!0,row:e,rowIndex:t}),moveRowDown:this.moveRowDown,moveRowUp:this.moveRowUp,onCancelEditRow:this.onCancelEditRow,onDeleteRow:this.onDeleteRow,onDragend:this.onDragend,onDragstart:this.onDragstart,onEditRow:this.onEditRow,row:e,rowIndex:t,rows:this.rowsFooter,saveRow:this.saveRow,texts:this.textsLocal,trClass:"a_table_form__row a_table_form__row_footer"},this.$slots)))])]),this.canAddRow&&n("div",{class:"a_mt_3 a_text_right"},[n(O,{class:"a_btn a_btn_outline_primary",disabled:this.hasActiveEditRow,extra:this.extra,iconLeft:this.iconsLocal.actionAddRow,text:this.textsLocal.actionAddRow,onClick:this.onAddRow})])])}};function Qe(){return{codeHtml:`<a-simple-table
  :columns="columns"
  :rows-footer="rowsFooter"
  :rows="rows"
  key-id="id"
  label="_A_TABLE_FORM_EXAMPLE_LABEL_"
/>
`}}function et(){return{codeJs:`import {
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
};`}}const tt={name:"PageTableFormBasic",components:{AlohaExample:H,ATableForm:W},setup(){const{codeHtml:e}=Qe(),{codeJs:t}=et(),o=[{id:"position",label:"_A_TABLE_FORM_COLUMN_POSITION_",maxWidth:96,minWidth:96,width:96,formElement:{type:"number"}},{id:"name",label:"_A_TABLE_FORM_COLUMN_NAME_",maxWidth:"18rem",minWidth:"12rem",width:"16rem",formElement:{type:"text"}},{id:"team",formElement:{translateData:!0,data:[{label:"_A_TABLE_FORM_TEAM_NORTH_",value:"north"},{label:"_A_TABLE_FORM_TEAM_WEST_",value:"west"},{label:"_A_TABLE_FORM_TEAM_SOUTH_",value:"south"},{label:"_A_TABLE_FORM_TEAM_EAST_",value:"east"}],keyId:"value",keyLabel:"label",type:"select"},label:"_A_TABLE_FORM_COLUMN_TEAM_",minWidth:"12rem"},{id:"score",footerDefaultValue:"68",footerKeyLabel:"score",formElement:{type:"integer"},label:"_A_TABLE_FORM_COLUMN_SCORE_",maxWidth:120,minWidth:120,width:120}],i=R([{id:1,name:"Марта Иванова",position:1,score:18,team:"north"},{id:2,name:"Олег Сидоров",position:2,score:17,team:"west"},{id:3,name:"Анна Петрова",position:3,score:16,team:"south"},{id:4,name:"Игорь Ковалёв",position:4,score:17,team:"east"}]);return{codeHtml:e,codeJs:t,columns:o,rows:i,rowsFooter:[{name:"_A_TABLE_FORM_FOOTER_TOTAL_",score:68}]}}};function ot(e,t,o,i,r,c){const a=v("a-table-form"),s=v("aloha-example");return k(),q(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TABLE_FORM_EXAMPLE_HEADER_"},{default:N(()=>[L(a,{columns:e.columns,"rows-footer":e.rowsFooter,rows:e.rows,"key-id":"id",label:"_A_TABLE_FORM_EXAMPLE_LABEL_"},null,8,["columns","rows-footer","rows"])]),_:1},8,["code-html","code-js"])}const at=S(tt,[["render",ot]]);function st(){return{codeHtml:`<a-simple-table
  :columns="columns"
  :is-drag-and-drop="true"
  :rows-footer="rowsFooter"
  :rows="rows"
  key-id="id"
  label="_A_TABLE_FORM_EXAMPLE_LABEL_"
  @update-rows="updateRows"
/>
`}}function it(){return{codeJs:`import {
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
};`}}const rt={name:"PageTableFormDND",components:{AlohaExample:H,ATableForm:W},setup(){const{codeHtml:e}=st(),{codeJs:t}=it(),o=[{id:"position",label:"_A_TABLE_FORM_COLUMN_POSITION_",maxWidth:96,minWidth:96,width:96,formElement:{type:"text"}},{id:"name",formElement:{type:"text"},label:"_A_TABLE_FORM_COLUMN_NAME_",maxWidth:"18rem",minWidth:"12rem",width:"16rem"},{id:"team",formElement:{translateData:!0,data:[{label:"_A_TABLE_FORM_TEAM_NORTH_",value:"north"},{label:"_A_TABLE_FORM_TEAM_WEST_",value:"west"},{label:"_A_TABLE_FORM_TEAM_SOUTH_",value:"south"},{label:"_A_TABLE_FORM_TEAM_EAST_",value:"east"}],keyId:"value",keyLabel:"label",type:"select"},label:"_A_TABLE_FORM_COLUMN_TEAM_",minWidth:"12rem"},{id:"score",footerDefaultValue:"68",footerKeyLabel:"score",formElement:{type:"integer"},label:"_A_TABLE_FORM_COLUMN_SCORE_",maxWidth:120,minWidth:120,width:120}],i=R([{id:1,name:"Марта Иванова",position:1,score:18,team:"north"},{id:2,name:"Олег Сидоров",position:2,score:17,team:"west"},{id:3,name:"Анна Петрова",position:3,score:16,team:"south"},{id:4,name:"Игорь Ковалёв",position:4,score:17,team:"east"}]);return{codeHtml:e,codeJs:t,columns:o,rows:i,rowsFooter:[{name:"_A_TABLE_FORM_FOOTER_TOTAL_",score:68}],updateRows:({rows:a,trigger:s})=>{i.value=a,console.log("trigger",s)}}}};function nt(e,t,o,i,r,c){const a=v("a-table-form"),s=v("aloha-example");return k(),q(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TABLE_FORM_DND_HEADER_",description:"_A_TABLE_FORM_DND_DESCRIPTION_",props:"is-drag-and-drop"},{default:N(()=>[L(a,{columns:e.columns,"is-drag-and-drop":!0,"rows-footer":e.rowsFooter,rows:e.rows,"key-id":"id",label:"_A_TABLE_FORM_EXAMPLE_LABEL_",onUpdateRows:e.updateRows},null,8,["columns","rows-footer","rows","onUpdateRows"])]),_:1},8,["code-html","code-js"])}const lt=S(rt,[["render",nt]]);function dt(){return{codeHtml:`<a-checkbox>
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
`}}function ct(){return{codeJs:`import {
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
};`}}const ut={name:"PageTableFormEdit",components:{ACheckbox:de,AlohaExample:H,ATableForm:W},setup(){const{codeHtml:e}=dt(),{codeJs:t}=ct(),o=[{label:"is-deletable-confirm",value:"is-deletable-confirm"},{label:"is-deletable",value:"is-deletable"},{label:"is-editable",value:"is-editable"},{label:"is-addable",value:"is-addable"}],i=R(["is-deletable-confirm","is-deletable","is-editable","is-addable"]),r={actionEditCancel:"abbrechen",actionEditSave:"speichern",editInfoText:"Nur diese Zeile ist gerade im Bearbeitungsmodus."},c=[{id:"position",label:"_A_TABLE_FORM_COLUMN_POSITION_",maxWidth:96,minWidth:96,width:96,formElement:{controlsType:"none",type:"integer"}},{id:"name",formElement:{type:"text",required:!0},keyLabel:"name",label:"_A_TABLE_FORM_COLUMN_NAME_",maxWidth:"18rem",minWidth:"12rem",width:"16rem"},{id:"team",formElement:{data:[{label:"_A_TABLE_FORM_TEAM_NORTH_",value:"north"},{label:"_A_TABLE_FORM_TEAM_WEST_",value:"west"},{label:"_A_TABLE_FORM_TEAM_SOUTH_",value:"south"},{label:"_A_TABLE_FORM_TEAM_EAST_",value:"east"}],keyId:"value",keyLabel:"label",translateData:!0,type:"select"},label:"_A_TABLE_FORM_COLUMN_TEAM_",minWidth:"12rem"},{id:"score",footerDefaultValue:"68",footerKeyLabel:"score",formElement:{controlsType:"none",min:0,type:"integer"},label:"_A_TABLE_FORM_COLUMN_SCORE_",maxWidth:120,minWidth:120,width:120}],a=R([{id:1,name:"Marta Ivanova",position:1,score:18,team:"north"},{id:2,name:"Oleg Sidorov",position:2,score:17,team:"west"},{id:3,name:"Anna Petrova",position:3,score:16,team:"south"},{id:4,name:"Igor Kovalev",position:4,score:17,team:"east"}]);return{addRow:({model:b})=>{var p;console.log("model ",b);const m={};if((p=b.name)!=null&&p.trim()||(m.name=["Name ist erforderlich."]),b.team||(m.team=["Team ist erforderlich."]),b.score<18&&(m.score=["Score must be at least 18."]),Object.keys(m).length)return{errors:m};a.value.push({id:a.value.length+1,...b})},codeHtml:e,codeJs:t,columns:c,dataCheckbox:o,deleteRow:({row:b,rowIndex:m})=>{a.value.splice(m,1),console.log("row",b),console.log("rowIndex",m)},modelCheckbox:i,rows:a,rowsFooter:[{name:"_A_TABLE_FORM_FOOTER_TOTAL_",score:68}],saveRow:async({model:b,rowIndex:m})=>{var g;await new Promise(T=>{setTimeout(T,300)});const p={};if((g=b.name)!=null&&g.trim()||(p.name=["Name ist erforderlich."]),b.team||(p.team=["Team ist erforderlich."]),b.score<18&&(p.score=["Score must be at least 18."]),Object.keys(p).length)return{errors:p};a.value.splice(m,1,b)},texts:r}}};function _t(e,t,o,i,r,c){const a=v("a-checkbox"),s=v("a-table-form"),u=v("aloha-example");return k(),q(u,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TABLE_FORM_EDIT_HEADER_",description:"_A_TABLE_FORM_EDIT_DESCRIPTION_",props:["is-addable","is-deletable","is-deletable-confirm","is-editable","save-row","texts"]},{default:N(()=>[L(a,{class:"a_mb_4",modelValue:e.modelCheckbox,"onUpdate:modelValue":t[0]||(t[0]=_=>e.modelCheckbox=_),data:e.dataCheckbox,"translate-data":!0,"key-id":"value","key-label":"label"},null,8,["modelValue","data"]),L(s,{"add-row":e.addRow,columns:e.columns,"is-addable":e.modelCheckbox.includes("is-addable"),"is-deletable-confirm":e.modelCheckbox.includes("is-deletable-confirm"),"is-deletable":e.modelCheckbox.includes("is-deletable"),"is-editable":e.modelCheckbox.includes("is-editable"),"rows-footer":e.rowsFooter,rows:e.rows,"save-row":e.saveRow,texts:e.texts,"key-id":"id",label:"_A_TABLE_FORM_EXAMPLE_LABEL_",onDeleteRow:e.deleteRow},null,8,["add-row","columns","is-addable","is-deletable-confirm","is-deletable","is-editable","rows-footer","rows","save-row","texts","onDeleteRow"])]),_:1},8,["code-html","code-js"])}const mt=S(ut,[["render",_t]]);function ft(){return{codeHtml:`<a-one-checkbox
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
};`}}const wt={name:"PageTableFormSticky",components:{AlohaExample:H,AOneCheckbox:ce,ATableForm:W},setup(){const{codeHtml:e}=ft(),{codeJs:t}=ht(),o=R(!0),i=Array.from({length:20},(c,a)=>{const s=a+1;return{id:`c${s}`,label:`${s}`,maxWidth:120,minWidth:120,width:120,formElement:{controlsType:"none",type:"integer"}}}),r=R(Array.from({length:6},(c,a)=>{const s={id:a+1};return i.forEach((u,_)=>{s[u.id]=(a+1)*100+_+1}),s}));return{codeHtml:e,codeJs:t,columns:i,isActionsSticky:o,rows:r}}};function bt(e,t,o,i,r,c){const a=v("a-one-checkbox"),s=v("a-table-form"),u=v("aloha-example");return k(),q(u,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TABLE_FORM_STICKY_HEADER_",description:"_A_TABLE_FORM_STICKY_DESCRIPTION_",props:["is-actions-sticky","is-deletable-confirm","is-editable"]},{default:N(()=>[L(a,{class:"a_mb_4",modelValue:e.isActionsSticky,"onUpdate:modelValue":t[0]||(t[0]=_=>e.isActionsSticky=_),label:"isActionsSticky"},null,8,["modelValue"]),L(s,{columns:e.columns,"is-actions-sticky":e.isActionsSticky,"is-deletable-confirm":!0,"is-editable":!0,rows:e.rows,"key-id":"id",label:"20 columns"},null,8,["columns","is-actions-sticky","rows"])]),_:1},8,["code-html","code-js"])}const At=S(wt,[["render",bt]]);function Et(){return{pageTitle:h(()=>ue({placeholder:"_A_TABLE_FORM_PAGE_TITLE_"}))}}const pt={name:"PageTableForm",components:{AlohaPage:oe,PageTableFormBasic:at,PageTableFormDND:lt,PageTableFormEdit:mt,PageTableFormSticky:At},setup(){const{pageTitle:e}=Et();return{pageTitle:e}}};function Rt(e,t,o,i,r,c){const a=v("page-table-form-basic"),s=v("page-table-form-d-n-d"),u=v("page-table-form-edit"),_=v("page-table-form-sticky"),A=v("aloha-page");return k(),q(A,{"page-title":e.pageTitle},{body:N(()=>[L(a),L(s),L(u),L(_)]),_:1},8,["page-title"])}const qt=S(pt,[["render",Rt]]);export{qt as default};
