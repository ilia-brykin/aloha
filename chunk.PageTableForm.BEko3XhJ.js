import{A as G,a as se}from"./chunk.AlohaExample.CO0qr4S8.js";import{d as le,s as Q,A as U,c as S,b as ie,f as re,e as ne,h as de,i as ce,j as ue,_ as $,k as oe,l as _e,g as me}from"./bundle.index.RAvJ6zHU.js";import{t as n,d as w,h as u,M as X,l as he,aX as fe,L as we,O as be,C as Ae,aY as Ee,g as pe,r as R,z as ve,o as Re,j as ye,P as ge,E as De,Y as H,W,aU as j,f as y,$ as O,_ as Te}from"./chunk.vendor.BAXy2grE.js";import{i as Me,j as ee,l as P,M as Le,T as Oe,v as Ce,h as Fe,W as xe,r as te,a as Be,u as Ie}from"./chunk.vendor-lodash.CCzoES9g.js";import{A as Se}from"./chunk.AFormElement.I_q0gOj_.js";import"./chunk.APageTabTitle.Bc3B30SM.js";import"./chunk.AlohaHighlightjs.BK8yZFUI.js";import"./chunk.translations-ar.CE_3yjUF.js";import"./chunk.translations-de.R0YWY91X.js";import"./chunk.translations-en.DQ0Z316F.js";import"./chunk.translations-es.XN0jVhL-.js";import"./chunk.translations-fr.D5Z6d0-l.js";import"./chunk.translations-hr.BRYjTgZh.js";import"./chunk.translations-it.D6SsMt4V.js";import"./chunk.translations-ru.BfK09XlZ.js";function ke(e){const t=n(e,"column"),o=n(e,"isEditable"),s=n(e,"isEditMode");return{disabledLocal:w(()=>{var d,a;return!!((a=(d=t.value)==null?void 0:d.formElement)!=null&&a.disabled)||o.value&&!s.value})}}function qe(e){const t=n(e,"column"),o=n(e,"isEditable"),s=n(e,"isEditMode"),r=n(e,"isFooter");return{readonlyLocal:w(()=>{var a,i,c,m;return r.value?!0:o.value?(i=(a=t.value)==null?void 0:a.formElement)!=null&&i.useRowReadonly?!s.value:!!((m=(c=t.value)==null?void 0:c.formElement)!=null&&m.readonly):!0})}}function z(e){if(!(e==null||e===""))return typeof e=="number"?`${e}px`:e}function ae(e){const t=n(e,"column");return{columnStyles:w(()=>{const s={},r=z(t.value.width),d=z(t.value.maxWidth),a=z(t.value.minWidth);return r&&(s.width=r),d&&(s.maxWidth=d),a&&(s.minWidth=a),Me(t.value.style)?{...s,...t.value.style}:t.value.style?[s,t.value.style]:s})}}const Ne={name:"ATableFormCell",props:{column:{type:Object,required:!0},columnIndex:{type:Number,required:!0},columnStyle:{type:Object,required:!1,default:void 0},errorIcon:{type:String,required:!1,default:void 0},errors:{type:Object,required:!1,default:()=>({})},id:{type:String,required:!0},isEditMode:{type:Boolean,required:!1,default:!1},isEditable:{type:Boolean,required:!1,default:!1},isFooter:{type:Boolean,required:!1,default:!1},row:{type:Object,required:!0},rowData:{type:Object,required:!1,default:void 0},rowIndex:{type:Number,required:!0},rows:{type:Array,required:!0},tag:{type:String,required:!1,default:"td"}},emits:["updateRowData"],setup(e){const{columnStyles:t}=ae({column:e.column}),{readonlyLocal:o}=qe(e),{disabledLocal:s}=ke(e),r=w(()=>e.rowData||e.row);return{columnStyles:t,disabledLocal:s,readonlyLocal:o,rowDataLocal:r}},methods:{updateRowData({model:e}){this.$emit("updateRowData",{columnId:this.column.id,model:e})}},render(){const{type:e="text",...t}=this.column.formElement||{};return u(this.tag,{class:["a_table_form__cell",`a_table_form__cell_${this.tag}`,this.column.class,this.isFooter?this.column.classFooter:this.column.classRow],style:[this.columnStyles,this.columnStyle]},[u(Se,{id:this.column.id,errorIcon:this.errorIcon,idPrefix:this.id,...t,change:this.updateRowData,disabled:this.disabledLocal,errors:ee(this.errors,this.column.id),errorsClass:"a_sr_only",modelValue:ee(this.rowDataLocal,this.column.id),readonly:this.readonlyLocal,type:e})])}};function Pe(e,{isActionsDisabled:t=w(()=>!1)}){const o=n(e,"id"),s=n(e,"isDeletable"),r=n(e,"isDeletableConfirm"),d=n(e,"onDeleteRow"),a=n(e,"row"),i=n(e,"rowIndex"),c=n(e,"texts"),{closeConfirm:m,openConfirm:E}=le(),f=w(()=>`${o.value}_delete`),_=()=>{m(),X().then(()=>{Q({selector:`#${f.value}`})})},v=()=>{E({bodyHtml:c.value.actionDeleteConfirmBody,closeButtonText:c.value.actionDeleteConfirmClose,headerText:c.value.actionDeleteConfirmHeader,save:async()=>{await d.value({row:a.value,rowIndex:i.value}),m()},close:_,saveButtonText:c.value.actionDeleteConfirmSave})};return{idBtnDelete:f,onDeleteClick:()=>{if(!t.value){if(r.value){v();return}s.value&&d.value({row:a.value,rowIndex:i.value})}}}}function Ue(e){const t=n(e,"hasActiveEditRow"),o=n(e,"isActiveEditMode");return{isActionsDisabled:w(()=>t.value&&!o.value)}}const $e=56,He=112;function We(e){const t=n(e,"isDeletable"),o=n(e,"isDeletableConfirm"),s=n(e,"isEditable"),r=n(e,"isActiveEditMode");return{columnStyles:w(()=>{const a=t.value||o.value,i=s.value||r.value&&a?He:$e;return{maxWidth:`${i}px`,minWidth:`${i}px`,width:`${i}px`}})}}const je={name:"ATableFormCellAction",props:{hasActiveEditRow:{type:Boolean,required:!1,default:!1},id:{type:String,required:!0},isActiveEditMode:{type:Boolean,required:!1,default:!1},isActionsSticky:{type:Boolean,required:!1,default:!1},isDeletable:{type:Boolean,required:!1,default:!1},isDeletableConfirm:{type:Boolean,required:!1,default:!1},isEditable:{type:Boolean,required:!1,default:!1},isFooter:{type:Boolean,required:!1,default:!1},isHeader:{type:Boolean,required:!1,default:!1},isSaving:{type:Boolean,required:!1,default:!1},onCancelEditRow:{type:Function,required:!0},onDeleteRow:{type:Function,required:!0},onEditRow:{type:Function,required:!0},onSaveEditRow:{type:Function,required:!0},row:{type:Object,required:!0},rowIndex:{type:Number,required:!0},texts:{type:Object,required:!1,default:()=>({})}},setup(e){const{isActionsDisabled:t}=Ue(e),{idBtnDelete:o,onDeleteClick:s}=Pe(e,{isActionsDisabled:t}),{columnStyles:r}=We(e);return{columnStyles:r,idBtnDelete:o,isActionsDisabled:t,onDeleteClick:s}},render(){const e=this.isHeader?"th":"td";return u(e,{class:["a_table_form__cell",`a_table_form__cell_${e}`,"a_table_form__cell_actions",{a_table_form__cell_actions_sticky:this.isActionsSticky}],style:this.columnStyles},[this.isHeader?u("span",{class:"a_sr_only"},[u(U,{tag:"span",text:this.texts.actionsColumn})]):this.isFooter?null:u("div",{class:"a_table_form__actions",role:"group"},this.isActiveEditMode?[u(S,{class:"a_btn a_btn_transparent_primary a_table_form__action_button",disabled:this.isSaving,iconLeft:he,title:this.texts.actionEditCancel,textScreenReader:this.texts.actionEditCancel,onClick:()=>this.onCancelEditRow({row:this.row,rowIndex:this.rowIndex})}),u(S,{class:"a_btn a_btn_transparent_primary a_table_form__action_button",disabled:this.isSaving,iconLeft:fe,title:this.texts.actionEditSave,textScreenReader:this.texts.actionEditSave,onClick:()=>this.onSaveEditRow({row:this.row,rowIndex:this.rowIndex})})]:[(this.isDeletable||this.isDeletableConfirm)&&u(S,{id:this.idBtnDelete,class:"a_btn a_btn_transparent_danger a_table_form__action_button",disabled:this.isActionsDisabled,iconLeft:we,title:this.texts.actionDelete,textScreenReader:this.texts.actionDelete,onClick:this.onDeleteClick}),this.isEditable&&u(S,{class:"a_btn a_btn_transparent_primary a_table_form__action_button",disabled:this.isActionsDisabled,iconLeft:be,title:this.texts.actionEdit,textScreenReader:this.texts.actionEdit,onClick:()=>this.onEditRow({row:this.row,rowIndex:this.rowIndex})})])])}};function Ge(e){const t=n(e,"id"),o=w(()=>`${t.value}_up`);return{idBtnDown:w(()=>`${t.value}_down`),idBtnUp:o}}const Z=56,Je={name:"ATableFormCellDnd",props:{canMoveRowDown:{type:Function,required:!0},canMoveRowUp:{type:Function,required:!0},id:{type:String,required:!0},isDragAndDrop:{type:Boolean,required:!1,default:!1},isDndDisabled:{type:Boolean,required:!1,default:!1},isFooter:{type:Boolean,required:!1,default:!1},isHeader:{type:Boolean,required:!1,default:!1},moveRowDown:{type:Function,required:!0},moveRowUp:{type:Function,required:!0},onDragend:{type:Function,required:!0},onDragstart:{type:Function,required:!0},rowIndex:{type:Number,required:!0},texts:{type:Object,required:!1,default:()=>({})}},setup(e){const{idBtnDown:t,idBtnUp:o}=Ge(e);return{columnStyles:w(()=>({maxWidth:`${Z}px`,minWidth:`${Z}px`,width:`${Z}px`})),idBtnDown:t,idBtnUp:o}},render(){const e=this.isHeader?"th":"td",t=this.isDragAndDrop&&!this.isDndDisabled;return u(e,{class:["a_table_form__cell",`a_table_form__cell_${e}`,"a_table_form__cell_reorder"],style:this.columnStyles},[this.isHeader?u("span",{class:"a_sr_only"},[u(U,{tag:"span",text:this.texts.reorderColumn})]):this.isFooter?null:u("div",{class:"a_table_form__reorder_actions"},[this.canMoveRowUp(this.rowIndex)&&u(S,{id:this.idBtnUp,class:"a_sr_only_focusable a_btn a_btn_transparent_dark a_table_form__reorder_button",disabled:this.isDndDisabled,iconLeft:Ae,tabindex:this.isDndDisabled?-1:void 0,title:this.texts.reorderUp,textScreenReader:this.texts.reorderUp,onClick:()=>this.moveRowUp(this.rowIndex)}),u("span",{ariaHidden:!0,class:"a_table_form__reorder_handle",draggable:t,onDragend:t?this.onDragend:void 0,onDragstart:t?o=>this.onDragstart(o,this.rowIndex):void 0},[u(ie,{class:"a_table_form__reorder_icon",icon:Ee})]),u("span",{class:"a_sr_only"},[u(U,{tag:"span",text:this.texts.reorderHandle})]),this.canMoveRowDown(this.rowIndex)&&u(S,{id:this.idBtnDown,class:"a_sr_only_focusable a_btn a_btn_transparent_dark a_table_form__reorder_button",disabled:this.isDndDisabled,iconLeft:pe,tabindex:this.isDndDisabled?-1:void 0,title:this.texts.reorderDown,textScreenReader:this.texts.reorderDown,onClick:()=>this.moveRowDown(this.rowIndex)})])])}},Ve={name:"ATableFormTh",props:{column:{type:Object,required:!0},columnStyle:{type:Object,required:!1,default:void 0},isEditable:{type:Boolean,required:!1,default:!1}},setup(e){const{columnStyles:t}=ae({column:e.column});return{columnStyles:t}},render(){var e;return u("th",{class:["a_table_form__cell","a_table_form__cell_th",this.column.class],style:[this.columnStyles,this.columnStyle]},[this.column.label&&u(U,{html:this.column.label,tag:"span"}),this.isEditable&&((e=this.column.formElement)==null?void 0:e.required)&&u("span",{class:"a_label__required"},"*")])}};function Ke(e,{errorsLocal:t=R(void 0)}){const o=n(e,"onCancelEditRow"),s=n(e,"row"),r=n(e,"rows"),d=n(e,"rowIndex"),a=n(e,"saveRow"),i=R(!1),c=R(void 0),m=({columnId:_,model:v})=>{c.value||(c.value=P(s.value)||{}),Le(c.value,_,v),Oe(t.value,_)},E=()=>{o.value({row:s.value,rowIndex:d.value})};return{cancelEditRow:E,isSaving:i,modelLocal:c,saveEditRow:async()=>{if(!i.value){t.value={},i.value=!0;try{const _=await a.value({model:P(c.value),row:s.value,rowIndex:d.value,rows:r.value});if(_!=null&&_.errors){t.value=P(_.errors);return}E()}catch(_){t.value=_}finally{i.value=!1}}},updateModelLocal:m}}function Xe(e){const t=n(e,"columns"),o=R({}),s=w(()=>!Ce(o.value)),r=w(()=>{const d=[];return Fe(t.value,a=>{const i=P(a.formElement)||{};i.type=i.type||"text",i.label=i.label||a.label,i.id=i.id||a.id,d.push(i)}),d});return{errorsLocal:o,hasErrors:s,optionsListForErrors:r}}function Ye({idTr:e=w(()=>"")}){return{focusFirstEditableElement:()=>{const o=document.getElementById(e.value);if(!o)return;const r=Array.from(o.querySelectorAll(".a_table_form__cell:not(.a_table_form__cell_actions)")).map(d=>d.querySelector(re)).find(Boolean);r==null||r.focus()}}}function ze(e){const t=n(e,"id"),o=n(e,"isHeader"),s=n(e,"isFooter"),r=n(e,"rowIndex");return{idTr:w(()=>`${t.value}_${r.value}${o.value?"_header":""}${s.value?"_footer":""}`)}}const K={name:"ATableFormRow",props:{allColumnsLength:{type:Number,required:!0},canMoveRowDown:{type:Function,required:!0},canMoveRowUp:{type:Function,required:!0},cellTag:{type:String,required:!1,default:void 0},columns:{type:Array,required:!0},columnsStylesGrow:{type:Object,required:!1,default:()=>({})},draggedRowIndex:{type:Number,required:!1,default:void 0},editModel:{type:Object,required:!1,default:void 0},errorIcon:{type:String,required:!1,default:void 0},hasActionsColumn:{type:Boolean,required:!1,default:!1},hasActiveEditRow:{type:Boolean,required:!1,default:!1},id:{type:String,required:!0},isActiveEditMode:{type:Boolean,required:!1,default:!1},isActionsSticky:{type:Boolean,required:!1,default:!1},isCreateMode:{type:Boolean,required:!1,default:!1},isDeletable:{type:Boolean,required:!1,default:!1},isDeletableConfirm:{type:Boolean,required:!1,default:!1},isDndDisabled:{type:Boolean,required:!1,default:!1},isDragAndDrop:{type:Boolean,required:!1,default:!1},isEditable:{type:Boolean,required:!1,default:!1},isFooter:{type:Boolean,required:!1,default:!1},isHeader:{type:Boolean,required:!1,default:!1},moveRowDown:{type:Function,required:!0},moveRowUp:{type:Function,required:!0},onCancelEditRow:{type:Function,required:!0},onDeleteRow:{type:Function,required:!0},onDragend:{type:Function,required:!0},onDragleave:{type:Function,required:!1,default:void 0},onDragover:{type:Function,required:!1,default:void 0},onDragstart:{type:Function,required:!0},onDrop:{type:Function,required:!1,default:void 0},onEditRow:{type:Function,required:!0},row:{type:Object,required:!0},rowIndex:{type:Number,required:!0},rows:{type:Array,required:!0},saveRow:{type:Function,required:!0},texts:{type:Object,required:!1,default:()=>({})},trClass:{type:[String,Object,Array],required:!1,default:void 0}},setup(e){const{idTr:t}=ze(e),{focusFirstEditableElement:o}=Ye({idTr:t}),{errorsLocal:s,hasErrors:r,optionsListForErrors:d}=Xe(e),{cancelEditRow:a,isSaving:i,modelLocal:c,saveEditRow:m,updateModelLocal:E}=Ke(e,{errorsLocal:s});return{cancelEditRow:a,errorsLocal:s,focusFirstEditableElement:o,hasErrors:r,idTr:t,isSaving:i,modelLocal:c,optionsListForErrors:d,saveEditRow:m,updateModelLocal:E}},computed:{currentRowData(){return this.isActiveEditMode&&this.modelLocal?this.modelLocal:this.row},trClassLocal(){return[this.trClass,{a_table_form__row_active:!this.isHeader&&!this.isFooter&&this.isActiveEditMode,a_table_form__row_errors:!this.isHeader&&!this.isFooter&&this.hasErrors,a_table_form__row_inactive:!this.isHeader&&!this.isFooter&&this.hasActiveEditRow&&!this.isActiveEditMode}]}},watch:{isActiveEditMode:{immediate:!0,handler(e){if(e){this.modelLocal=P(this.editModel===void 0?this.row:this.editModel),this.errorsLocal={},X(()=>{this.focusFirstEditableElement()});return}this.errorsLocal={},this.isSaving=!1}}},render(){const e=[];return this.isActiveEditMode&&this.texts.editInfoText&&e.push(u("tr",{class:"a_table_form__row a_table_form__row_info",key:`info_${this.rowIndex}`},[u("td",{class:"a_table_form__cell a_table_form__cell_info",colspan:this.allColumnsLength},[u(ne,{alertClass:"a_table_form__info",html:this.texts.editInfoText,isVisible:!0,type:"info"})])])),e.push(u("tr",{id:this.idTr,"aria-grabbed":!this.isHeader&&!this.isFooter?this.draggedRowIndex===this.rowIndex:void 0,class:this.trClassLocal,key:`main_${this.rowIndex}`,onDragleave:this.onDragleave&&(t=>this.onDragleave(t,this.rowIndex)),onDragover:this.onDragover&&(t=>this.onDragover(t,this.rowIndex)),onDrop:this.onDrop&&(t=>this.onDrop(t,this.rowIndex))},[this.isDragAndDrop?u(Je,{id:this.idTr,canMoveRowDown:this.canMoveRowDown,canMoveRowUp:this.canMoveRowUp,isDndDisabled:this.isDndDisabled,isDragAndDrop:this.isDragAndDrop,isFooter:this.isFooter,isHeader:this.isHeader,moveRowDown:this.moveRowDown,moveRowUp:this.moveRowUp,onDragend:this.onDragend,onDragstart:this.onDragstart,rowIndex:this.rowIndex,texts:this.texts}):null,...this.columns.map((t,o)=>this.isHeader?u(Ve,{column:t,columnStyle:this.columnsStylesGrow[t.id],isEditable:this.isEditable}):u(Ne,{id:this.idTr,column:t,columnIndex:o,columnStyle:this.columnsStylesGrow[t.id],errorIcon:this.errorIcon,errors:this.errorsLocal,isEditable:this.isEditable,isEditMode:this.isActiveEditMode,isFooter:this.isFooter,onUpdateRowData:this.updateModelLocal,row:this.row,rowData:this.currentRowData,rowIndex:this.rowIndex,rows:this.rows,tag:this.cellTag},this.$slots)),this.hasActionsColumn?u(je,{id:this.idTr,hasActiveEditRow:this.hasActiveEditRow,isActiveEditMode:this.isActiveEditMode,isActionsSticky:this.isActionsSticky,isDeletable:this.isDeletable,isDeletableConfirm:this.isDeletableConfirm,isEditable:this.isEditable,isFooter:this.isFooter,isHeader:this.isHeader,isSaving:this.isSaving,onCancelEditRow:this.cancelEditRow,onDeleteRow:this.onDeleteRow,onEditRow:this.onEditRow,onSaveEditRow:this.saveEditRow,row:this.row,rowIndex:this.rowIndex,texts:this.texts}):null])),this.isActiveEditMode&&this.hasErrors&&e.push(u("tr",{class:"a_table_form__row a_table_form__row_errors",key:`errors_${this.rowIndex}`},[u("td",{class:"a_table_form__cell a_table_form__cell_errors",colspan:this.allColumnsLength},[u(de,{autoFocus:!0,closable:!1,errors:this.errorsLocal,optionsList:this.optionsListForErrors,idPrefix:this.idTr})])])),e}};function Ze(e){const t=n(e,"columns"),o=n(e,"isDeletable"),s=n(e,"isDeletableConfirm"),r=n(e,"isDragAndDrop"),d=n(e,"isEditable"),a=w(()=>!!(d.value||o.value||s.value));return{allColumnsLength:w(()=>{var m;let c=((m=t.value)==null?void 0:m.length)||0;return r.value&&(c+=1),a.value&&(c+=1),c}),hasActionsColumn:a}}const Qe=56,et=112,tt=56;function ot(e,{hasActionsColumn:t=w(()=>!1)}){const o=n(e,"columns"),s=n(e,"id"),r=n(e,"isColumnsGrow"),d=n(e,"isDeletable"),a=n(e,"isDeletableConfirm"),i=n(e,"isDragAndDrop"),c=n(e,"isEditable"),{remPx:m,scalePxWithRem:E}=ce(),f=R(void 0),_=R({}),v=w(()=>t.value?c.value?et:d.value||a.value?Qe:0:0),C=w(()=>i.value?tt:0),F=()=>{var A;return(A=document.getElementById(s.value))==null?void 0:A.parentElement},I=A=>{if(A==null||A==="")return 0;if(typeof A=="number")return+E(A)||0;if(typeof A!="string")return 0;const l=A.trim();return l?l.endsWith("rem")?(parseFloat(l)||0)*m.value:(l.endsWith("px"),parseFloat(l)||0):0},k=A=>{const l=`${A}px`;return{maxWidth:l,minWidth:l,width:l}},M=()=>{if(!r.value||!f.value){_.value={};return}const A=o.value||[],l=f.value-v.value-C.value;if(l<=0){_.value={};return}let h=0,p=0;if(A.forEach(L=>{const D=I(L.width);h+=D,p+=Math.max(0,+L.grow||0)}),h>=l||p<=0){_.value={};return}const b=l-h,T={};A.forEach(L=>{const D=I(L.width),x=Math.max(0,+L.grow||0);if(!L.id||!D)return;const q=D+(x>0?b*x/p:0);T[L.id]=k(q)}),_.value=T},g=new ResizeObserver(xe(A=>{var h,p;const l=(p=(h=A[0])==null?void 0:h.contentRect)==null?void 0:p.width;l&&(f.value=l,M())},100));return ve(()=>{const A=F();A&&(f.value=A.getBoundingClientRect().width,M(),g.observe(A))}),Re(()=>{const A=F();A&&g.unobserve(A)}),ye([o,t,r,d,a,i,c],()=>{M()},{deep:!0}),{columnsStylesGrow:_}}function at(e,{emit:t}){return{onDeleteRow:({row:s,rowIndex:r})=>{t("deleteRow",{row:s,rowIndex:r})}}}function st(e,{emit:t},{isDndDisabled:o=w(()=>!1)}={}){const s=n(e,"id"),r=n(e,"isDragAndDrop"),d=n(e,"rows"),a=R(void 0),i=R(void 0),c=R(void 0),m=R(void 0),E=()=>{var l;(l=m.value)==null||l.remove(),m.value=void 0},f=l=>{var x,q;const h=(q=(x=l.target)==null?void 0:x.closest)==null?void 0:q.call(x,"tr");if(!h)return;const p=h.getBoundingClientRect(),b=document.createElement("table"),T=document.createElement("tbody"),L=h.cloneNode(!0);b.className="a_table_form__table",b.style.borderCollapse="collapse",b.style.borderSpacing="0",b.style.width=`${p.width}px`,b.style.tableLayout="fixed",Array.from(h.children).forEach((V,Y)=>{const B=L.children[Y];if(B){const N=window.getComputedStyle(V);B.style.width=`${V.getBoundingClientRect().width}px`,B.style.backgroundColor=N.backgroundColor,B.style.borderTop=N.borderTop,B.style.borderRight=N.borderRight,B.style.borderBottom=N.borderBottom,B.style.borderLeft=N.borderLeft,B.style.color=N.color}}),T.appendChild(L),b.appendChild(T);const D=document.createElement("div");return D.className="a_table_form a_table_form__drag_preview",D.style.position="fixed",D.style.top="-10000px",D.style.left="-10000px",D.style.pointerEvents="none",D.style.zIndex="9999",D.appendChild(b),document.body.appendChild(D),m.value=D,{element:D,offsetX:Math.min(l.offsetX||0,p.width/2),offsetY:Math.min(l.offsetY||0,p.height/2)}},_=({fromIndex:l,toIndex:h,trigger:p})=>{if(!r.value||o.value||l===h||l<0||h<0||l>=d.value.length||h>=d.value.length)return;const b=[...d.value],[T]=b.splice(l,1);b.splice(h,0,T),t("updateRows",{rows:b,trigger:p}),t("moveRow",{fromIndex:l,row:T,toIndex:h})},v=({fromIndex:l,rowIndex:h,position:p="before"})=>{if(!r.value||o.value||l<0||h<0||l>=d.value.length||h>=d.value.length)return;let b=p==="after"?h+1:h;l<b&&(b-=1),_({fromIndex:l,toIndex:b,trigger:"dnd"})},C=l=>{_({fromIndex:l,toIndex:l-1,trigger:"moveRowUp"}),X().then(()=>{const h=Math.max(1,l-1);Q({selector:`#${s.value}_${h}_up`})})},F=l=>{_({fromIndex:l,toIndex:l+1,trigger:"moveRowDown"}),X().then(()=>{const h=Math.min(d.value.length-2,l+1);Q({selector:`#${s.value}_${h}_down`})})},I=(l,h)=>{if(!(!r.value||o.value)){if(l!=null&&l.dataTransfer){l.dataTransfer.effectAllowed="move",l.dataTransfer.setData("text/plain",`${h}`),E();const p=f(l);p&&l.dataTransfer.setDragImage(p.element,p.offsetX,p.offsetY)}a.value=h}},k=(l,h)=>{var b,T;if(!r.value||o.value)return;l.preventDefault();const p=(T=(b=l.currentTarget)==null?void 0:b.getBoundingClientRect)==null?void 0:T.call(b);if(p){const L=p.top+p.height/2;c.value=l.clientY<L?"before":"after"}else c.value="after";i.value=h},M=(l,h)=>{var b,T;if(!r.value||o.value)return;const p=l.relatedTarget;(T=(b=l.currentTarget)==null?void 0:b.contains)!=null&&T.call(b,p)||i.value===h&&(i.value=void 0,c.value=void 0)},g=(l,h)=>{!r.value||o.value||(l.preventDefault(),a.value!==void 0&&(v({fromIndex:a.value,position:c.value||"after",rowIndex:h}),E(),a.value=void 0,i.value=void 0,c.value=void 0))},A=()=>{E(),a.value=void 0,i.value=void 0,c.value=void 0};return{canMoveRowDown:w(()=>l=>l<d.value.length-1),canMoveRowUp:w(()=>l=>l>0),dragOverPosition:c,dragOverRowIndex:i,draggedRowIndex:a,onDragleave:M,moveRowDown:F,moveRowUp:C,onDragend:A,onDragover:k,onDragstart:I,onDrop:g}}function lt(e,{getRowKey:t=()=>{}}){const o=n(e,"addRow"),s=n(e,"columns"),r=n(e,"isAddable"),d=n(e,"isEditable"),a=n(e,"prepareEditModel"),i=n(e,"rows"),c=R(void 0),m=R(void 0),E=R(!1),f=w(()=>!!c.value||E.value),_=w(()=>r.value?te(o.value):!1),v=w(()=>d.value?s.value.some(M=>{var g;return!!((g=M.formElement)!=null&&g.required)}):!1),C=M=>{if(!te(a.value))return;const g=a.value(M);if((g==null?void 0:g.model)!==void 0)return P(g.model)};return{activeEditRowKey:c,activeEditModel:m,canAddRow:_,hasActiveEditRow:f,hasRequiredEditableColumns:v,isAddRowActive:E,onAddRow:()=>{f.value||!_.value||(c.value=void 0,m.value=C({rows:i.value}),E.value=!0)},onCancelEditRow:()=>{c.value=void 0,m.value=void 0,E.value=!1},onEditRow:({row:M,rowIndex:g})=>{E.value||(m.value=C({row:M,rowIndex:g,rows:i.value}),c.value=t({row:M,rowIndex:g}))}}}function it(e){const t=n(e,"icons");return{iconsLocal:w(()=>({actionAddRow:ge,...t.value}))}}function rt(e){const t=n(e,"keyId"),o=n(e,"rows"),s=n(e,"rowsFooter"),r=w(()=>o.value.length>0),d=w(()=>s.value.length>0);return{getRowKey:({row:i,rowIndex:c,isFooter:m=!1})=>{let E=c;if(t.value){const _=ee(i,t.value);Be(_)||(E=_)}return`${m?"footer":"body"}_${E}`},hasRows:r,hasRowsFooter:d}}function nt(e){const t=n(e,"texts");return{textsLocal:w(()=>({actionsColumn:"_A_TABLE_FORM_ACTIONS_",actionAddRow:"_A_TABLE_FORM_ADD_ROW_",actionDelete:"_A_TABLE_FORM_DELETE_",actionDeleteConfirmBody:"_A_TABLE_FORM_DELETE_CONFIRM_BODY_",actionDeleteConfirmClose:"_A_TABLE_FORM_DELETE_CONFIRM_CLOSE_",actionDeleteConfirmHeader:"_A_TABLE_FORM_DELETE_CONFIRM_HEADER_",actionDeleteConfirmSave:"_A_TABLE_FORM_DELETE_CONFIRM_SAVE_",actionEdit:"_A_TABLE_FORM_EDIT_",actionEditCancel:"_A_TABLE_FORM_EDIT_CANCEL_",actionEditSave:"_A_TABLE_FORM_EDIT_SAVE_",editInfoText:void 0,emptyText:"_A_TABLE_FORM_EMPTY_",reorderColumn:"_A_TABLE_FORM_REORDER_COLUMN_",reorderDown:"_A_TABLE_FORM_MOVE_DOWN_",reorderHandle:"_A_TABLE_FORM_REORDER_",reorderUp:"_A_TABLE_FORM_MOVE_UP_",...t.value}))}}const J={name:"ATableForm",props:{addRow:{type:Function,required:!1,default:void 0},columns:{type:Array,required:!0},columnsDefaultValue:{type:[String,Number],required:!1,default:""},errorIcon:{type:String,required:!1,default:De},extra:{type:Object,required:!1,default:void 0},icons:{type:Object,required:!1,default:()=>({})},id:{type:String,required:!1,default:()=>Ie("a_table_form_")},isDeletable:{type:Boolean,required:!1,default:!1},isDeletableConfirm:{type:Boolean,required:!1,default:!1},isActionsSticky:{type:Boolean,required:!1,default:!1},isAddable:{type:Boolean,required:!1,default:!1},isDragAndDrop:{type:Boolean,required:!1,default:!1},isColumnsGrow:{type:Boolean,required:!1,default:!1},isEditable:{type:Boolean,required:!1,default:!1},keyId:{type:String,required:!1,default:void 0},label:{type:[String,Number],required:!1,default:""},labelClass:{type:[String,Object,Array],required:!1,default:void 0},labelTag:{type:String,required:!1,default:"h2"},prepareEditModel:{type:Function,required:!1,default:void 0},rows:{type:Array,required:!1,default:()=>[]},rowsFooter:{type:Array,required:!1,default:()=>[]},saveRow:{type:Function,required:!1,default:()=>{}},texts:{type:Object,required:!1,default:()=>({})}},emits:["deleteRow","moveRow","updateRows"],setup(e,t){const{allColumnsLength:o,hasActionsColumn:s}=Ze(e),{getRowKey:r,hasRows:d,hasRowsFooter:a}=rt(e),{textsLocal:i}=nt(e),{iconsLocal:c}=it(e),{columnsStylesGrow:m}=ot(e,{hasActionsColumn:s}),{activeEditRowKey:E,activeEditModel:f,canAddRow:_,hasActiveEditRow:v,hasRequiredEditableColumns:C,isAddRowActive:F,onAddRow:I,onCancelEditRow:k,onEditRow:M}=lt(e,{getRowKey:r}),{canMoveRowDown:g,canMoveRowUp:A,dragOverPosition:l,dragOverRowIndex:h,draggedRowIndex:p,moveRowDown:b,moveRowUp:T,onDragend:L,onDragleave:D,onDragover:x,onDragstart:q,onDrop:V}=st(e,t,{isDndDisabled:v}),{onDeleteRow:Y}=at(e,t);return{activeEditRowKey:E,activeEditModel:f,allColumnsLength:o,canAddRow:_,canMoveRowDown:g,canMoveRowUp:A,columnsStylesGrow:m,draggedRowIndex:p,dragOverPosition:l,dragOverRowIndex:h,getRowKey:r,hasActionsColumn:s,hasActiveEditRow:v,hasRequiredEditableColumns:C,hasRows:d,hasRowsFooter:a,iconsLocal:c,isAddRowActive:F,moveRowDown:b,moveRowUp:T,onAddRow:I,onCancelEditRow:k,onDeleteRow:Y,onDragend:L,onDragleave:D,onDragover:x,onDragstart:q,onDrop:V,onEditRow:M,textsLocal:i}},render(){return u("div",{class:"a_table_form"},[this.label&&u(U,{class:["a_table_form__label",this.labelClass],html:this.label,tag:this.labelTag}),this.hasRequiredEditableColumns&&u(ue),u("div",{class:"a_table_form__wrapper"},[u("table",{id:this.id,class:["a_table_form__table",{a_table_form_drag_active:this.draggedRowIndex!==void 0}]},[u("thead",{class:"a_table_form__head"},[u(K,{id:this.id,allColumnsLength:this.allColumnsLength,canMoveRowDown:this.canMoveRowDown,canMoveRowUp:this.canMoveRowUp,cellTag:"th",columns:this.columns,columnsStylesGrow:this.columnsStylesGrow,draggedRowIndex:this.draggedRowIndex,hasActionsColumn:this.hasActionsColumn,hasActiveEditRow:!1,isActiveEditMode:!1,isActionsSticky:this.isActionsSticky,isDeletable:this.isDeletable,isDeletableConfirm:this.isDeletableConfirm,isDndDisabled:this.hasActiveEditRow,isDragAndDrop:this.isDragAndDrop,isEditable:this.isEditable,isHeader:!0,moveRowDown:this.moveRowDown,moveRowUp:this.moveRowUp,onCancelEditRow:this.onCancelEditRow,onDeleteRow:this.onDeleteRow,onDragend:this.onDragend,onDragstart:this.onDragstart,onEditRow:this.onEditRow,row:{},rowIndex:0,rows:this.rows,saveRow:this.saveRow,texts:this.textsLocal,trClass:"a_table_form__row a_table_form__row_head"},this.$slots)]),u("tbody",{class:"a_table_form__body"},this.hasRows||this.isAddRowActive?[...this.rows.map((e,t)=>{const o=this.getRowKey({row:e,rowIndex:t});return u(K,{id:this.id,allColumnsLength:this.allColumnsLength,canMoveRowDown:this.canMoveRowDown,canMoveRowUp:this.canMoveRowUp,columns:this.columns,columnsStylesGrow:this.columnsStylesGrow,draggedRowIndex:this.draggedRowIndex,editModel:this.activeEditRowKey===o?this.activeEditModel:void 0,errorIcon:this.errorIcon,hasActionsColumn:this.hasActionsColumn,hasActiveEditRow:this.hasActiveEditRow,isActiveEditMode:this.activeEditRowKey===o,isActionsSticky:this.isActionsSticky,isCreateMode:!1,isDeletable:this.isDeletable,isDeletableConfirm:this.isDeletableConfirm,isDndDisabled:this.hasActiveEditRow,isDragAndDrop:this.isDragAndDrop,isEditable:this.isEditable,key:o,moveRowDown:this.moveRowDown,moveRowUp:this.moveRowUp,onCancelEditRow:this.onCancelEditRow,onDeleteRow:this.onDeleteRow,onDragend:this.onDragend,onDragleave:this.onDragleave,onDragover:this.onDragover,onDragstart:this.onDragstart,onDrop:this.onDrop,onEditRow:this.onEditRow,row:e,rowIndex:t,rows:this.rows,saveRow:this.saveRow,texts:this.textsLocal,trClass:["a_table_form__row",{a_table_form__row_drag_after:this.dragOverRowIndex===t&&this.dragOverPosition==="after",a_table_form__row_drag_before:this.dragOverRowIndex===t&&this.dragOverPosition==="before",a_table_form__row_drag_over:this.dragOverRowIndex===t,a_table_form__row_dragging:this.draggedRowIndex===t}]},this.$slots)}),this.isAddRowActive&&u(K,{id:this.id,allColumnsLength:this.allColumnsLength,canMoveRowDown:this.canMoveRowDown,canMoveRowUp:this.canMoveRowUp,columns:this.columns,columnsStylesGrow:this.columnsStylesGrow,editModel:this.activeEditModel,errorIcon:this.errorIcon,draggedRowIndex:this.draggedRowIndex,hasActionsColumn:this.hasActionsColumn,hasActiveEditRow:this.hasActiveEditRow,isActiveEditMode:!0,isActionsSticky:this.isActionsSticky,isCreateMode:!0,isDeletable:!1,isDeletableConfirm:!1,isDndDisabled:!0,isDragAndDrop:!1,isEditable:this.isEditable,key:"body_create",moveRowDown:this.moveRowDown,moveRowUp:this.moveRowUp,onCancelEditRow:this.onCancelEditRow,onDeleteRow:this.onDeleteRow,onDragend:this.onDragend,onDragleave:this.onDragleave,onDragover:this.onDragover,onDragstart:this.onDragstart,onDrop:this.onDrop,onEditRow:this.onEditRow,row:{},rowIndex:this.rows.length,rows:this.rows,saveRow:this.addRow,texts:this.textsLocal,trClass:"a_table_form__row a_table_form__row_create"},this.$slots)]:[u("tr",{class:"a_table_form__row a_table_form__row_empty"},[u("td",{class:"a_table_form__cell a_table_form__empty",colspan:this.allColumnsLength},[u(U,{tag:"span",text:this.textsLocal.emptyText})])])]),this.hasRowsFooter&&u("tfoot",{class:"a_table_form__foot"},this.rowsFooter.map((e,t)=>u(K,{id:this.id,allColumnsLength:this.allColumnsLength,canMoveRowDown:this.canMoveRowDown,canMoveRowUp:this.canMoveRowUp,columns:this.columns,columnsStylesGrow:this.columnsStylesGrow,draggedRowIndex:this.draggedRowIndex,hasActionsColumn:this.hasActionsColumn,hasActiveEditRow:this.hasActiveEditRow,isActiveEditMode:!1,isActionsSticky:this.isActionsSticky,isDeletable:this.isDeletable,isDeletableConfirm:this.isDeletableConfirm,isDndDisabled:this.hasActiveEditRow,isDragAndDrop:this.isDragAndDrop,isEditable:this.isEditable,isFooter:!0,key:this.getRowKey({isFooter:!0,row:e,rowIndex:t}),moveRowDown:this.moveRowDown,moveRowUp:this.moveRowUp,onCancelEditRow:this.onCancelEditRow,onDeleteRow:this.onDeleteRow,onDragend:this.onDragend,onDragstart:this.onDragstart,onEditRow:this.onEditRow,row:e,rowIndex:t,rows:this.rowsFooter,saveRow:this.saveRow,texts:this.textsLocal,trClass:"a_table_form__row a_table_form__row_footer"},this.$slots)))])]),this.canAddRow&&u("div",{class:"a_mt_3 a_text_right"},[u(S,{class:"a_btn a_btn_outline_primary",disabled:this.hasActiveEditRow,extra:this.extra,iconLeft:this.iconsLocal.actionAddRow,text:this.textsLocal.actionAddRow,onClick:this.onAddRow})])])}};function dt(){return{codeHtml:`<a-simple-table
  :columns="columns"
  :rows-footer="rowsFooter"
  :rows="rows"
  key-id="id"
  label="_A_TABLE_FORM_EXAMPLE_LABEL_"
/>
`}}function ct(){return{codeJs:`import {
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
};`}}const ut={name:"PageTableFormBasic",components:{AlohaExample:G,ATableForm:J},setup(){const{codeHtml:e}=dt(),{codeJs:t}=ct(),o=[{id:"position",label:"_A_TABLE_FORM_COLUMN_POSITION_",maxWidth:96,minWidth:96,width:96,formElement:{type:"number"}},{id:"name",label:"_A_TABLE_FORM_COLUMN_NAME_",maxWidth:"18rem",minWidth:"12rem",width:"16rem",formElement:{type:"text"}},{id:"team",formElement:{translateData:!0,data:[{label:"_A_TABLE_FORM_TEAM_NORTH_",value:"north"},{label:"_A_TABLE_FORM_TEAM_WEST_",value:"west"},{label:"_A_TABLE_FORM_TEAM_SOUTH_",value:"south"},{label:"_A_TABLE_FORM_TEAM_EAST_",value:"east"}],keyId:"value",keyLabel:"label",type:"select"},label:"_A_TABLE_FORM_COLUMN_TEAM_",minWidth:"12rem"},{id:"score",footerDefaultValue:"68",footerKeyLabel:"score",formElement:{type:"integer"},label:"_A_TABLE_FORM_COLUMN_SCORE_",maxWidth:120,minWidth:120,width:120}],s=R([{id:1,name:"Марта Иванова",position:1,score:18,team:"north"},{id:2,name:"Олег Сидоров",position:2,score:17,team:"west"},{id:3,name:"Анна Петрова",position:3,score:16,team:"south"},{id:4,name:"Игорь Ковалёв",position:4,score:17,team:"east"}]);return{codeHtml:e,codeJs:t,columns:o,rows:s,rowsFooter:[{name:"_A_TABLE_FORM_FOOTER_TOTAL_",score:68}]}}};function _t(e,t,o,s,r,d){const a=y("a-table-form"),i=y("aloha-example");return H(),W(i,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TABLE_FORM_EXAMPLE_HEADER_"},{default:j(()=>[O(a,{columns:e.columns,"rows-footer":e.rowsFooter,rows:e.rows,"key-id":"id",label:"_A_TABLE_FORM_EXAMPLE_LABEL_"},null,8,["columns","rows-footer","rows"])]),_:1},8,["code-html","code-js"])}const mt=$(ut,[["render",_t]]);function ht(){return{codeHtml:`<a-simple-table
  :columns="columns"
  :is-drag-and-drop="true"
  :rows-footer="rowsFooter"
  :rows="rows"
  key-id="id"
  label="_A_TABLE_FORM_EXAMPLE_LABEL_"
  @update-rows="updateRows"
/>
`}}function ft(){return{codeJs:`import {
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
};`}}const wt={name:"PageTableFormDND",components:{AlohaExample:G,ATableForm:J},setup(){const{codeHtml:e}=ht(),{codeJs:t}=ft(),o=[{id:"position",label:"_A_TABLE_FORM_COLUMN_POSITION_",maxWidth:96,minWidth:96,width:96,formElement:{type:"text"}},{id:"name",formElement:{type:"text"},label:"_A_TABLE_FORM_COLUMN_NAME_",maxWidth:"18rem",minWidth:"12rem",width:"16rem"},{id:"team",formElement:{translateData:!0,data:[{label:"_A_TABLE_FORM_TEAM_NORTH_",value:"north"},{label:"_A_TABLE_FORM_TEAM_WEST_",value:"west"},{label:"_A_TABLE_FORM_TEAM_SOUTH_",value:"south"},{label:"_A_TABLE_FORM_TEAM_EAST_",value:"east"}],keyId:"value",keyLabel:"label",type:"select"},label:"_A_TABLE_FORM_COLUMN_TEAM_",minWidth:"12rem"},{id:"score",footerDefaultValue:"68",footerKeyLabel:"score",formElement:{type:"integer"},label:"_A_TABLE_FORM_COLUMN_SCORE_",maxWidth:120,minWidth:120,width:120}],s=R([{id:1,name:"Марта Иванова",position:1,score:18,team:"north"},{id:2,name:"Олег Сидоров",position:2,score:17,team:"west"},{id:3,name:"Анна Петрова",position:3,score:16,team:"south"},{id:4,name:"Игорь Ковалёв",position:4,score:17,team:"east"}]);return{codeHtml:e,codeJs:t,columns:o,rows:s,rowsFooter:[{name:"_A_TABLE_FORM_FOOTER_TOTAL_",score:68}],updateRows:({rows:a,trigger:i})=>{s.value=a,console.log("trigger",i)}}}};function bt(e,t,o,s,r,d){const a=y("a-table-form"),i=y("aloha-example");return H(),W(i,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TABLE_FORM_DND_HEADER_",description:"_A_TABLE_FORM_DND_DESCRIPTION_",props:"is-drag-and-drop"},{default:j(()=>[O(a,{columns:e.columns,"is-drag-and-drop":!0,"rows-footer":e.rowsFooter,rows:e.rows,"key-id":"id",label:"_A_TABLE_FORM_EXAMPLE_LABEL_",onUpdateRows:e.updateRows},null,8,["columns","rows-footer","rows","onUpdateRows"])]),_:1},8,["code-html","code-js"])}const At=$(wt,[["render",bt]]);function Et(){return{codeHtml:`<a-checkbox>
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
`}}function pt(){return{codeJs:`import {
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
};`}}const vt={name:"PageTableFormEdit",components:{ACheckbox:oe,AlohaExample:G,ATableForm:J},setup(){const{codeHtml:e}=Et(),{codeJs:t}=pt(),o=[{label:"is-deletable-confirm",value:"is-deletable-confirm"},{label:"is-deletable",value:"is-deletable"},{label:"is-editable",value:"is-editable"},{label:"is-addable",value:"is-addable"}],s=R(["is-deletable-confirm","is-deletable","is-editable","is-addable"]),r={actionEditCancel:"abbrechen",actionEditSave:"speichern",editInfoText:"Nur diese Zeile ist gerade im Bearbeitungsmodus."},d=[{id:"position",label:"_A_TABLE_FORM_COLUMN_POSITION_",maxWidth:96,minWidth:96,width:96,formElement:{controlsType:"none",type:"integer"}},{id:"name",formElement:{type:"text",required:!0},keyLabel:"name",label:"_A_TABLE_FORM_COLUMN_NAME_",maxWidth:"18rem",minWidth:"12rem",width:"16rem"},{id:"team",formElement:{data:[{label:"_A_TABLE_FORM_TEAM_NORTH_",value:"north"},{label:"_A_TABLE_FORM_TEAM_WEST_",value:"west"},{label:"_A_TABLE_FORM_TEAM_SOUTH_",value:"south"},{label:"_A_TABLE_FORM_TEAM_EAST_",value:"east"}],keyId:"value",keyLabel:"label",translateData:!0,type:"select"},label:"_A_TABLE_FORM_COLUMN_TEAM_",minWidth:"12rem"},{id:"score",footerDefaultValue:"68",footerKeyLabel:"score",formElement:{controlsType:"none",min:0,type:"integer"},label:"_A_TABLE_FORM_COLUMN_SCORE_",maxWidth:120,minWidth:120,width:120}],a=R([{id:1,name:"Marta Ivanova",position:1,score:18,team:"north"},{id:2,name:"Oleg Sidorov",position:2,score:17,team:"west"},{id:3,name:"Anna Petrova",position:3,score:16,team:"south"},{id:4,name:"Igor Kovalev",position:4,score:17,team:"east"}]);return{addRow:({model:f})=>{var v;console.log("model ",f);const _={};if((v=f.name)!=null&&v.trim()||(_.name=["Name ist erforderlich."]),f.team||(_.team=["Team ist erforderlich."]),f.score<18&&(_.score=["Score must be at least 18."]),Object.keys(_).length)return{errors:_};a.value.push({id:a.value.length+1,...f})},codeHtml:e,codeJs:t,columns:d,dataCheckbox:o,deleteRow:({row:f,rowIndex:_})=>{a.value.splice(_,1),console.log("row",f),console.log("rowIndex",_)},modelCheckbox:s,rows:a,rowsFooter:[{name:"_A_TABLE_FORM_FOOTER_TOTAL_",score:68}],saveRow:async({model:f,rowIndex:_})=>{var C;await new Promise(F=>{setTimeout(F,300)});const v={};if((C=f.name)!=null&&C.trim()||(v.name=["Name ist erforderlich."]),f.team||(v.team=["Team ist erforderlich."]),f.score<18&&(v.score=["Score must be at least 18."]),Object.keys(v).length)return{errors:v};a.value.splice(_,1,f)},texts:r}}};function Rt(e,t,o,s,r,d){const a=y("a-checkbox"),i=y("a-table-form"),c=y("aloha-example");return H(),W(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TABLE_FORM_EDIT_HEADER_",description:"_A_TABLE_FORM_EDIT_DESCRIPTION_",props:["is-addable","is-deletable","is-deletable-confirm","is-editable","save-row","texts"]},{default:j(()=>[O(a,{class:"a_mb_4",modelValue:e.modelCheckbox,"onUpdate:modelValue":t[0]||(t[0]=m=>e.modelCheckbox=m),data:e.dataCheckbox,"translate-data":!0,"key-id":"value","key-label":"label"},null,8,["modelValue","data"]),O(i,{"add-row":e.addRow,columns:e.columns,"is-addable":e.modelCheckbox.includes("is-addable"),"is-deletable-confirm":e.modelCheckbox.includes("is-deletable-confirm"),"is-deletable":e.modelCheckbox.includes("is-deletable"),"is-editable":e.modelCheckbox.includes("is-editable"),"rows-footer":e.rowsFooter,rows:e.rows,"save-row":e.saveRow,texts:e.texts,"key-id":"id",label:"_A_TABLE_FORM_EXAMPLE_LABEL_",onDeleteRow:e.deleteRow},null,8,["add-row","columns","is-addable","is-deletable-confirm","is-deletable","is-editable","rows-footer","rows","save-row","texts","onDeleteRow"])]),_:1},8,["code-html","code-js"])}const yt=$(vt,[["render",Rt]]);function gt(){return{codeHtml:`<a-checkbox
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
`}}function Dt(){return{codeJs:`import {
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
};`}}const Tt={name:"PageTableFormGrow",components:{ACheckbox:oe,AlohaExample:G,ATableForm:J},setup(){const{codeHtml:e}=gt(),{codeJs:t}=Dt(),o=[{label:"is-deletable",value:"is-deletable"},{label:"is-editable",value:"is-editable"},{label:"is-drag-and-drop",value:"is-drag-and-drop"}],s=R(["is-deletable","is-editable"]),r=[{id:"position",label:"_A_TABLE_FORM_COLUMN_POSITION_",minWidth:96,width:96,grow:1,formElement:{controlsType:"none",type:"integer"}},{id:"name",formElement:{type:"text"},label:"_A_TABLE_FORM_COLUMN_NAME_",minWidth:"12rem",width:"16rem",grow:2},{id:"team",formElement:{data:[{label:"_A_TABLE_FORM_TEAM_NORTH_",value:"north"},{label:"_A_TABLE_FORM_TEAM_WEST_",value:"west"},{label:"_A_TABLE_FORM_TEAM_SOUTH_",value:"south"},{label:"_A_TABLE_FORM_TEAM_EAST_",value:"east"}],keyId:"value",keyLabel:"label",translateData:!0,type:"select"},label:"_A_TABLE_FORM_COLUMN_TEAM_",minWidth:"12rem",width:"12rem",grow:1},{id:"score",footerDefaultValue:"68",footerKeyLabel:"score",formElement:{controlsType:"none",min:0,type:"integer"},label:"_A_TABLE_FORM_COLUMN_SCORE_",minWidth:120,width:120,grow:1}],d=[{id:"position",label:"_A_TABLE_FORM_COLUMN_POSITION_",minWidth:96,width:96,grow:1,formElement:{controlsType:"none",type:"integer"}},{id:"name",formElement:{type:"text"},label:"_A_TABLE_FORM_COLUMN_NAME_",minWidth:"12rem",width:"16rem",grow:3}],a=R([{id:1,name:"Marta Ivanova",position:1,score:18,team:"north"},{id:2,name:"Oleg Sidorov",position:2,score:17,team:"west"},{id:3,name:"Anna Petrova",position:3,score:16,team:"south"},{id:4,name:"Igor Kovalev",position:4,score:17,team:"east"}]);return{codeHtml:e,codeJs:t,columns1:r,columns2:d,dataCheckbox:o,deleteRow:({rowIndex:f})=>{a.value.splice(f,1)},modelCheckbox:s,rows:a,rowsFooter:[{name:"_A_TABLE_FORM_FOOTER_TOTAL_",score:68}],saveRow:({model:f,rowIndex:_})=>{a.value.splice(_,1,f)},texts:{editInfoText:"Only one row can be edited at a time."}}}},Mt={class:"a_mb_4"};function Lt(e,t,o,s,r,d){const a=y("a-checkbox"),i=y("a-table-form"),c=y("aloha-example");return H(),W(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TABLE_FORM_GROW_HEADER_",description:"_A_TABLE_FORM_GROW_DESCRIPTION_",props:["is-columns-grow","is-deletable","is-drag-and-drop","is-editable"]},{default:j(()=>[O(a,{class:"a_mb_4",modelValue:e.modelCheckbox,"onUpdate:modelValue":t[0]||(t[0]=m=>e.modelCheckbox=m),data:e.dataCheckbox,"key-id":"value","key-label":"label"},null,8,["modelValue","data"]),Te("div",Mt,[O(i,{columns:e.columns1,"is-columns-grow":!0,"is-deletable":e.modelCheckbox.includes("is-deletable"),"is-drag-and-drop":e.modelCheckbox.includes("is-drag-and-drop"),"is-editable":e.modelCheckbox.includes("is-editable"),"rows-footer":e.rowsFooter,rows:e.rows,"save-row":e.saveRow,texts:e.texts,"key-id":"id",label:"_A_TABLE_FORM_EXAMPLE_LABEL_",onDeleteRow:e.deleteRow},null,8,["columns","is-deletable","is-drag-and-drop","is-editable","rows-footer","rows","save-row","texts","onDeleteRow"])]),O(i,{columns:e.columns2,"is-columns-grow":!0,"is-deletable":e.modelCheckbox.includes("is-deletable"),"is-drag-and-drop":e.modelCheckbox.includes("is-drag-and-drop"),"is-editable":e.modelCheckbox.includes("is-editable"),"rows-footer":e.rowsFooter,rows:e.rows,"save-row":e.saveRow,texts:e.texts,"key-id":"id",label:"_A_TABLE_FORM_EXAMPLE_LABEL_",onDeleteRow:e.deleteRow},null,8,["columns","is-deletable","is-drag-and-drop","is-editable","rows-footer","rows","save-row","texts","onDeleteRow"])]),_:1},8,["code-html","code-js"])}const Ot=$(Tt,[["render",Lt]]);function Ct(){return{codeHtml:`<a-one-checkbox
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
`}}function Ft(){return{codeJs:`import {
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
};`}}const xt={name:"PageTableFormSticky",components:{AlohaExample:G,AOneCheckbox:_e,ATableForm:J},setup(){const{codeHtml:e}=Ct(),{codeJs:t}=Ft(),o=R(!0),s=Array.from({length:20},(d,a)=>{const i=a+1;return{id:`c${i}`,label:`${i}`,maxWidth:120,minWidth:120,width:120,formElement:{controlsType:"none",type:"integer"}}}),r=R(Array.from({length:6},(d,a)=>{const i={id:a+1};return s.forEach((c,m)=>{i[c.id]=(a+1)*100+m+1}),i}));return{codeHtml:e,codeJs:t,columns:s,isActionsSticky:o,rows:r}}};function Bt(e,t,o,s,r,d){const a=y("a-one-checkbox"),i=y("a-table-form"),c=y("aloha-example");return H(),W(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TABLE_FORM_STICKY_HEADER_",description:"_A_TABLE_FORM_STICKY_DESCRIPTION_",props:["is-actions-sticky","is-deletable-confirm","is-editable"]},{default:j(()=>[O(a,{class:"a_mb_4",modelValue:e.isActionsSticky,"onUpdate:modelValue":t[0]||(t[0]=m=>e.isActionsSticky=m),label:"isActionsSticky"},null,8,["modelValue"]),O(i,{columns:e.columns,"is-actions-sticky":e.isActionsSticky,"is-deletable-confirm":!0,"is-editable":!0,rows:e.rows,"key-id":"id",label:"20 columns"},null,8,["columns","is-actions-sticky","rows"])]),_:1},8,["code-html","code-js"])}const It=$(xt,[["render",Bt]]);function St(){return{pageTitle:w(()=>me({placeholder:"_A_TABLE_FORM_PAGE_TITLE_"}))}}const kt={name:"PageTableForm",components:{AlohaPage:se,PageTableFormBasic:mt,PageTableFormDND:At,PageTableFormEdit:yt,PageTableFormGrow:Ot,PageTableFormSticky:It},setup(){const{pageTitle:e}=St();return{pageTitle:e}}};function qt(e,t,o,s,r,d){const a=y("page-table-form-basic"),i=y("page-table-form-d-n-d"),c=y("page-table-form-edit"),m=y("page-table-form-sticky"),E=y("page-table-form-grow"),f=y("aloha-page");return H(),W(f,{"page-title":e.pageTitle},{body:j(()=>[O(a),O(i),O(c),O(m),O(E)]),_:1},8,["page-title"])}const Qt=$(kt,[["render",qt]]);export{Qt as default};
