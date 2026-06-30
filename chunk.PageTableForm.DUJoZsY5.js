import{A as Y,a as ce}from"./chunk.AlohaExample.CV23krCV.js";import{d as ue,s as te,A as W,c as P,b as _e,f as me,e as he,h as fe,i as be,j as we,_ as j,k as oe,l as Ae,g as ve}from"./bundle.index.yYjszMW-.js";import{t as i,d as f,h as u,M as Q,l as Ee,aX as pe,L as Re,O as ye,C as ge,aY as De,g as Te,r as R,j as Ce,P as Me,E as Oe,z as Le,o as Fe,Y as G,W as J,aU as V,f as g,$ as M,_ as xe}from"./chunk.vendor.BAXy2grE.js";import{i as ke,j as B,r as S,l as $,M as Be,T as Ie,v as Se,h as qe,W as Ne,a as ae,d as Pe,b as Ue,u as He}from"./chunk.vendor-lodash.CCzoES9g.js";import{A as $e}from"./chunk.AFormElement.C27reUim.js";import"./chunk.APageTabTitle.B4HdDTif.js";import"./chunk.AlohaHighlightjs.BK8yZFUI.js";import"./chunk.translations-ar.CE_3yjUF.js";import"./chunk.translations-de.R0YWY91X.js";import"./chunk.translations-en.DQ0Z316F.js";import"./chunk.translations-es.XN0jVhL-.js";import"./chunk.translations-fr.D5Z6d0-l.js";import"./chunk.translations-hr.BRYjTgZh.js";import"./chunk.translations-it.D6SsMt4V.js";import"./chunk.translations-ru.BfK09XlZ.js";function We(e){const t=i(e,"column"),o=i(e,"isEditable"),s=i(e,"isEditMode");return{disabledLocal:f(()=>{var r,a;return!!((a=(r=t.value)==null?void 0:r.formElement)!=null&&a.disabled)||o.value&&!s.value})}}function je(e){const t=i(e,"column"),o=i(e,"isEditable"),s=i(e,"isEditMode"),n=i(e,"isFooter");return{readonlyLocal:f(()=>{var a,l,d,_;return n.value?!0:o.value?(l=(a=t.value)==null?void 0:a.formElement)!=null&&l.useRowReadonly?!s.value:!!((_=(d=t.value)==null?void 0:d.formElement)!=null&&_.readonly):!0})}}function ee(e){if(!(e==null||e===""))return typeof e=="number"?`${e}px`:e}function se(e){const t=i(e,"column");return{columnStyles:f(()=>{const s={},n=ee(t.value.width),r=ee(t.value.maxWidth),a=ee(t.value.minWidth);return n&&(s.width=n),r&&(s.maxWidth=r),a&&(s.minWidth=a),ke(t.value.style)?{...s,...t.value.style}:t.value.style?[s,t.value.style]:s})}}const Ge={name:"ATableFormCell",props:{column:{type:Object,required:!0},columnIndex:{type:Number,required:!0},columnStyle:{type:Object,required:!1,default:void 0},errorIcon:{type:String,required:!1,default:void 0},errors:{type:Object,required:!1,default:()=>({})},id:{type:String,required:!0},isEditMode:{type:Boolean,required:!1,default:!1},isEditable:{type:Boolean,required:!1,default:!1},isFooter:{type:Boolean,required:!1,default:!1},row:{type:Object,required:!0},rowData:{type:Object,required:!1,default:void 0},rowIndex:{type:Number,required:!0},rows:{type:Array,required:!0},tag:{type:String,required:!1,default:"td"}},emits:["updateRowData"],setup(e){const{columnStyles:t}=se({column:e.column}),{readonlyLocal:o}=je(e),{disabledLocal:s}=We(e),n=f(()=>e.rowData||e.row);return{columnStyles:t,disabledLocal:s,readonlyLocal:o,rowDataLocal:n}},methods:{updateRowData({model:e}){this.$emit("updateRowData",{columnId:this.column.id,model:e})}},render(){const{type:e="text",...t}=this.column.formElement||{};return u(this.tag,{class:["a_table_form__cell",`a_table_form__cell_${this.tag}`,this.column.class,this.isFooter?this.column.classFooter:this.column.classRow],style:[this.columnStyles,this.columnStyle]},[u($e,{id:this.column.id,errorIcon:this.errorIcon,idPrefix:this.id,...t,change:this.updateRowData,disabled:this.disabledLocal,errors:B(this.errors,this.column.id),errorsClass:"a_sr_only",modelValue:B(this.rowDataLocal,this.column.id),readonly:this.readonlyLocal,type:e})])}};function Je(e,{isActionsDisabled:t=f(()=>!1)}){const o=i(e,"id"),s=i(e,"isDeletable"),n=i(e,"isDeletableConfirm"),r=i(e,"onDeleteRow"),a=i(e,"row"),l=i(e,"rowIndex"),d=i(e,"texts"),{closeConfirm:_,openConfirm:v}=ue(),b=f(()=>`${o.value}_delete`),h=()=>{_(),Q().then(()=>{te({selector:`#${b.value}`})})},E=()=>{v({bodyHtml:d.value.actionDeleteConfirmBody,closeButtonText:d.value.actionDeleteConfirmClose,headerText:d.value.actionDeleteConfirmHeader,save:async()=>{await r.value({row:a.value,rowIndex:l.value}),_()},close:h,saveButtonText:d.value.actionDeleteConfirmSave})};return{idBtnDelete:b,onDeleteClick:()=>{if(!t.value){if(n.value){E();return}s.value&&r.value({row:a.value,rowIndex:l.value})}}}}function Ve(e){const t=i(e,"actionsDisabledCallback"),o=i(e,"hasActiveEditRow"),s=i(e,"isActiveEditMode"),n=i(e,"row"),r=i(e,"rowIndex"),a=f(()=>o.value&&!s.value),l=f(()=>{if(a.value)return!0;const _=B(t.value,"delete");return S(_)?_({row:n.value,rowIndex:r.value}):!1}),d=f(()=>{if(a.value)return!0;const _=B(t.value,"edit");return S(_)?_({row:n.value,rowIndex:r.value}):!1});return{isDeleteDisabled:l,isEditDisabled:d}}function Ke(e){const t=i(e,"actionsHideCallback"),o=i(e,"row"),s=i(e,"rowIndex"),n=f(()=>{const a=B(t.value,"delete");return S(a)?a({row:o.value,rowIndex:s.value}):!1}),r=f(()=>{const a=B(t.value,"edit");return S(a)?a({row:o.value,rowIndex:s.value}):!1});return{isDeleteHidden:n,isEditHidden:r}}function Xe(e){const t=i(e,"isDeletable"),o=i(e,"isDeletableConfirm"),s=i(e,"isEditable"),n=i(e,"isActiveEditMode"),r=i(e,"widths");return{columnStyles:f(()=>{const l=t.value||o.value,d=s.value||n.value&&l?r.value.actionsColumnDouble:r.value.actionsColumnSingle;return{maxWidth:`${d}px`,minWidth:`${d}px`,width:`${d}px`}})}}function Ye(e){const t=i(e,"row"),o=i(e,"rowIndex"),s=i(e,"texts"),n=i(e,"actionsTitleCallback"),r=f(()=>{const l=B(n.value,"delete");return S(l)?l({row:t.value,rowIndex:o.value}):s.value.actionDelete}),a=f(()=>{const l=B(n.value,"edit");return S(l)?l({row:t.value,rowIndex:o.value}):s.value.actionEdit});return{deleteTitle:r,editTitle:a}}const ze={name:"ATableFormCellAction",props:{hasActiveEditRow:{type:Boolean,required:!1,default:!1},actionsDisabledCallback:{type:Object,required:!1,default:()=>({})},actionsHideCallback:{type:Object,required:!1,default:()=>({})},actionsTitleCallback:{type:Object,required:!1,default:()=>({})},id:{type:String,required:!0},isActiveEditMode:{type:Boolean,required:!1,default:!1},isActionsSticky:{type:Boolean,required:!1,default:!1},isDeletable:{type:Boolean,required:!1,default:!1},isDeletableConfirm:{type:Boolean,required:!1,default:!1},isEditable:{type:Boolean,required:!1,default:!1},isFooter:{type:Boolean,required:!1,default:!1},isHeader:{type:Boolean,required:!1,default:!1},isSaving:{type:Boolean,required:!1,default:!1},onCancelEditRow:{type:Function,required:!0},onDeleteRow:{type:Function,required:!0},onEditRow:{type:Function,required:!0},onSaveEditRow:{type:Function,required:!0},row:{type:Object,required:!0},rowIndex:{type:Number,required:!0},texts:{type:Object,required:!1,default:()=>({})},widths:{type:Object,required:!1,default:()=>({})}},setup(e){const{isDeleteDisabled:t,isEditDisabled:o}=Ve(e),{isDeleteHidden:s,isEditHidden:n}=Ke(e),{idBtnDelete:r,onDeleteClick:a}=Je(e,{isActionsDisabled:t}),{columnStyles:l}=Xe(e),{deleteTitle:d,editTitle:_}=Ye(e);return{columnStyles:l,deleteTitle:d,editTitle:_,idBtnDelete:r,isDeleteDisabled:t,isDeleteHidden:s,isEditDisabled:o,isEditHidden:n,onDeleteClick:a}},render(){const e=this.isHeader?"th":"td";return u(e,{class:["a_table_form__cell",`a_table_form__cell_${e}`,"a_table_form__cell_actions",{a_table_form__cell_actions_sticky:this.isActionsSticky}],style:this.columnStyles},[this.isHeader?u("span",{class:"a_sr_only"},[u(W,{tag:"span",text:this.texts.actionsColumn})]):this.isFooter?null:u("div",{class:"a_table_form__actions",role:"group"},this.isActiveEditMode?[u(P,{class:"a_btn a_btn_transparent_primary a_table_form__action_button",disabled:this.isSaving,iconLeft:Ee,title:this.texts.actionEditCancel,textScreenReader:this.texts.actionEditCancel,onClick:()=>this.onCancelEditRow({row:this.row,rowIndex:this.rowIndex})}),u(P,{class:"a_btn a_btn_transparent_primary a_table_form__action_button",disabled:this.isSaving,iconLeft:pe,title:this.texts.actionEditSave,textScreenReader:this.texts.actionEditSave,onClick:()=>this.onSaveEditRow({row:this.row,rowIndex:this.rowIndex})})]:[(this.isDeletable||this.isDeletableConfirm)&&!this.isDeleteHidden&&u(P,{id:this.idBtnDelete,class:"a_btn a_btn_transparent_danger a_table_form__action_button",disabled:this.isDeleteDisabled,iconLeft:Re,title:this.deleteTitle,textScreenReader:this.deleteTitle,onClick:this.onDeleteClick}),this.isEditable&&!this.isEditHidden&&u(P,{class:"a_btn a_btn_transparent_primary a_table_form__action_button",disabled:this.isEditDisabled,iconLeft:ye,title:this.editTitle,textScreenReader:this.editTitle,onClick:()=>this.onEditRow({row:this.row,rowIndex:this.rowIndex})})])])}};function Ze(e){const t=i(e,"id"),o=f(()=>`${t.value}_up`);return{idBtnDown:f(()=>`${t.value}_down`),idBtnUp:o}}const Qe={name:"ATableFormCellDnd",props:{canMoveRowDown:{type:Function,required:!0},canMoveRowUp:{type:Function,required:!0},id:{type:String,required:!0},isCreateMode:{type:Boolean,required:!1,default:!1},isDragAndDrop:{type:Boolean,required:!1,default:!1},isDndDisabled:{type:Boolean,required:!1,default:!1},isFooter:{type:Boolean,required:!1,default:!1},isHeader:{type:Boolean,required:!1,default:!1},moveRowDown:{type:Function,required:!0},moveRowUp:{type:Function,required:!0},onDragend:{type:Function,required:!0},onDragstart:{type:Function,required:!0},rowIndex:{type:Number,required:!0},texts:{type:Object,required:!1,default:()=>({})},widths:{type:Object,required:!1,default:()=>({})}},setup(e){const{idBtnDown:t,idBtnUp:o}=Ze(e);return{columnStyles:f(()=>({maxWidth:`${e.widths.dndColumn}px`,minWidth:`${e.widths.dndColumn}px`,width:`${e.widths.dndColumn}px`})),idBtnDown:t,idBtnUp:o}},render(){const e=this.isHeader?"th":"td",t=this.isDragAndDrop&&!this.isDndDisabled;return u(e,{class:["a_table_form__cell",`a_table_form__cell_${e}`,"a_table_form__cell_reorder"],style:this.columnStyles},[this.isHeader?u("span",{class:"a_sr_only"},[u(W,{tag:"span",text:this.texts.reorderColumn})]):this.isCreateMode||this.isFooter?null:u("div",{class:"a_table_form__reorder_actions"},[this.canMoveRowUp(this.rowIndex)&&u(P,{id:this.idBtnUp,class:"a_sr_only_focusable a_btn a_btn_transparent_dark a_table_form__reorder_button",disabled:this.isDndDisabled,iconLeft:ge,tabindex:this.isDndDisabled?-1:void 0,title:this.texts.reorderUp,textScreenReader:this.texts.reorderUp,onClick:()=>this.moveRowUp(this.rowIndex)}),u("span",{ariaHidden:!0,class:"a_table_form__reorder_handle",draggable:t,onDragend:t?this.onDragend:void 0,onDragstart:t?o=>this.onDragstart(o,this.rowIndex):void 0},[u(_e,{class:"a_table_form__reorder_icon",icon:De})]),u("span",{class:"a_sr_only"},[u(W,{tag:"span",text:this.texts.reorderHandle})]),this.canMoveRowDown(this.rowIndex)&&u(P,{id:this.idBtnDown,class:"a_sr_only_focusable a_btn a_btn_transparent_dark a_table_form__reorder_button",disabled:this.isDndDisabled,iconLeft:Te,tabindex:this.isDndDisabled?-1:void 0,title:this.texts.reorderDown,textScreenReader:this.texts.reorderDown,onClick:()=>this.moveRowDown(this.rowIndex)})])])}},et={name:"ATableFormTh",props:{column:{type:Object,required:!0},columnStyle:{type:Object,required:!1,default:void 0},isEditable:{type:Boolean,required:!1,default:!1}},setup(e){const{columnStyles:t}=se({column:e.column});return{columnStyles:t}},render(){var e;return u("th",{class:["a_table_form__cell","a_table_form__cell_th",this.column.class],style:[this.columnStyles,this.columnStyle]},[this.column.label&&u(W,{html:this.column.label,tag:"span"}),this.isEditable&&((e=this.column.formElement)==null?void 0:e.required)&&u("span",{class:"a_label__required"},"*")])}};function tt(e,{errorsLocal:t=R(void 0)}){const o=i(e,"onCancelEditRow"),s=i(e,"row"),n=i(e,"rows"),r=i(e,"rowIndex"),a=i(e,"saveRow"),l=R(!1),d=R(void 0),_=({columnId:h,model:E})=>{d.value||(d.value=$(s.value)||{}),Be(d.value,h,E),Ie(t.value,h)},v=()=>{o.value({row:s.value,rowIndex:r.value})};return{cancelEditRow:v,isSaving:l,modelLocal:d,saveEditRow:async()=>{if(!l.value){t.value={},l.value=!0;try{const h=await a.value({model:$(d.value),row:s.value,rowIndex:r.value,rows:n.value});if(h!=null&&h.errors){t.value=$(h.errors);return}v()}catch(h){t.value=h}finally{l.value=!1}}},updateModelLocal:_}}function ot(e){const t=i(e,"columns"),o=R({}),s=f(()=>!Se(o.value)),n=f(()=>{const r=[];return qe(t.value,a=>{const l=$(a.formElement)||{};l.type=l.type||"text",l.label=l.label||a.label,l.id=l.id||a.id,r.push(l)}),r});return{errorsLocal:o,hasErrors:s,optionsListForErrors:n}}function at({idTr:e=f(()=>"")}){return{focusFirstEditableElement:()=>{const o=document.getElementById(e.value);if(!o)return;const n=Array.from(o.querySelectorAll(".a_table_form__cell:not(.a_table_form__cell_actions)")).map(r=>r.querySelector(me)).find(Boolean);n==null||n.focus()}}}function st(e){const t=i(e,"id"),o=i(e,"isHeader"),s=i(e,"isFooter"),n=i(e,"rowIndex");return{idTr:f(()=>`${t.value}_${n.value}${o.value?"_header":""}${s.value?"_footer":""}`)}}const Z={name:"ATableFormRow",props:{allColumnsLength:{type:Number,required:!0},canMoveRowDown:{type:Function,required:!0},canMoveRowUp:{type:Function,required:!0},cellTag:{type:String,required:!1,default:void 0},columns:{type:Array,required:!0},columnsStylesGrow:{type:Object,required:!1,default:()=>({})},actionsDisabledCallback:{type:Object,required:!1,default:()=>({})},actionsHideCallback:{type:Object,required:!1,default:()=>({})},actionsTitleCallback:{type:Object,required:!1,default:()=>({})},draggedRowIndex:{type:Number,required:!1,default:void 0},editModel:{type:Object,required:!1,default:void 0},errorIcon:{type:String,required:!1,default:void 0},hasActionsColumn:{type:Boolean,required:!1,default:!1},hasActiveEditRow:{type:Boolean,required:!1,default:!1},id:{type:String,required:!0},isActiveEditMode:{type:Boolean,required:!1,default:!1},isActionsSticky:{type:Boolean,required:!1,default:!1},isCreateMode:{type:Boolean,required:!1,default:!1},isDeletable:{type:Boolean,required:!1,default:!1},isDeletableConfirm:{type:Boolean,required:!1,default:!1},isDndDisabled:{type:Boolean,required:!1,default:!1},isDragAndDrop:{type:Boolean,required:!1,default:!1},isEditable:{type:Boolean,required:!1,default:!1},isFooter:{type:Boolean,required:!1,default:!1},isHeader:{type:Boolean,required:!1,default:!1},moveRowDown:{type:Function,required:!0},moveRowUp:{type:Function,required:!0},onCancelEditRow:{type:Function,required:!0},onDeleteRow:{type:Function,required:!0},onDragend:{type:Function,required:!0},onDragleave:{type:Function,required:!1,default:void 0},onDragover:{type:Function,required:!1,default:void 0},onDragstart:{type:Function,required:!0},onDrop:{type:Function,required:!1,default:void 0},onEditRow:{type:Function,required:!0},row:{type:Object,required:!0},rowIndex:{type:Number,required:!0},rows:{type:Array,required:!0},saveRow:{type:Function,required:!0},texts:{type:Object,required:!1,default:()=>({})},trClass:{type:[String,Object,Array],required:!1,default:void 0},widths:{type:Object,required:!1,default:()=>({})}},setup(e){const{idTr:t}=st(e),{focusFirstEditableElement:o}=at({idTr:t}),{errorsLocal:s,hasErrors:n,optionsListForErrors:r}=ot(e),{cancelEditRow:a,isSaving:l,modelLocal:d,saveEditRow:_,updateModelLocal:v}=tt(e,{errorsLocal:s});return{cancelEditRow:a,errorsLocal:s,focusFirstEditableElement:o,hasErrors:n,idTr:t,isSaving:l,modelLocal:d,optionsListForErrors:r,saveEditRow:_,updateModelLocal:v}},computed:{currentRowData(){return this.isActiveEditMode&&this.modelLocal?this.modelLocal:this.row},trClassLocal(){return[this.trClass,{a_table_form__row_active:!this.isHeader&&!this.isFooter&&this.isActiveEditMode,a_table_form__row_errors:!this.isHeader&&!this.isFooter&&this.hasErrors,a_table_form__row_inactive:!this.isHeader&&!this.isFooter&&this.hasActiveEditRow&&!this.isActiveEditMode}]}},watch:{isActiveEditMode:{immediate:!0,handler(e){if(e){this.modelLocal=$(this.editModel===void 0?this.row:this.editModel),this.errorsLocal={},Q(()=>{this.focusFirstEditableElement()});return}this.errorsLocal={},this.isSaving=!1}}},render(){const e=[];return this.isActiveEditMode&&this.texts.editInfoText&&e.push(u("tr",{class:"a_table_form__row a_table_form__row_info",key:`info_${this.rowIndex}`},[u("td",{class:"a_table_form__cell a_table_form__cell_info",colspan:this.allColumnsLength},[u(he,{alertClass:"a_table_form__info",html:this.texts.editInfoText,isVisible:!0,type:"info"})])])),e.push(u("tr",{id:this.idTr,"aria-grabbed":!this.isHeader&&!this.isFooter?this.draggedRowIndex===this.rowIndex:void 0,class:this.trClassLocal,key:`main_${this.rowIndex}`,onDragleave:this.onDragleave&&(t=>this.onDragleave(t,this.rowIndex)),onDragover:this.onDragover&&(t=>this.onDragover(t,this.rowIndex)),onDrop:this.onDrop&&(t=>this.onDrop(t,this.rowIndex))},[this.isDragAndDrop?u(Qe,{id:this.idTr,canMoveRowDown:this.canMoveRowDown,canMoveRowUp:this.canMoveRowUp,isCreateMode:this.isCreateMode,isDndDisabled:this.isDndDisabled,isDragAndDrop:this.isDragAndDrop,isFooter:this.isFooter,isHeader:this.isHeader,moveRowDown:this.moveRowDown,moveRowUp:this.moveRowUp,onDragend:this.onDragend,onDragstart:this.onDragstart,rowIndex:this.rowIndex,texts:this.texts,widths:this.widths}):null,...this.columns.map((t,o)=>this.isHeader?u(et,{column:t,columnStyle:this.columnsStylesGrow[t.id],isEditable:this.isEditable}):u(Ge,{id:this.idTr,column:t,columnIndex:o,columnStyle:this.columnsStylesGrow[t.id],errorIcon:this.errorIcon,errors:this.errorsLocal,isEditable:this.isEditable,isEditMode:this.isActiveEditMode,isFooter:this.isFooter,onUpdateRowData:this.updateModelLocal,row:this.row,rowData:this.currentRowData,rowIndex:this.rowIndex,rows:this.rows,tag:this.cellTag},this.$slots)),this.hasActionsColumn?u(ze,{actionsDisabledCallback:this.actionsDisabledCallback,actionsHideCallback:this.actionsHideCallback,id:this.idTr,hasActiveEditRow:this.hasActiveEditRow,isActiveEditMode:this.isActiveEditMode,isActionsSticky:this.isActionsSticky,isDeletable:this.isDeletable,isDeletableConfirm:this.isDeletableConfirm,isEditable:this.isEditable,isFooter:this.isFooter,isHeader:this.isHeader,isSaving:this.isSaving,onCancelEditRow:this.cancelEditRow,onDeleteRow:this.onDeleteRow,onEditRow:this.onEditRow,onSaveEditRow:this.saveEditRow,row:this.row,rowIndex:this.rowIndex,texts:this.texts,actionsTitleCallback:this.actionsTitleCallback,widths:this.widths}):null])),this.isActiveEditMode&&this.hasErrors&&e.push(u("tr",{class:"a_table_form__row a_table_form__row_errors",key:`errors_${this.rowIndex}`},[u("td",{class:"a_table_form__cell a_table_form__cell_errors",colspan:this.allColumnsLength},[u(fe,{autoFocus:!0,closable:!1,errors:this.errorsLocal,optionsList:this.optionsListForErrors,idPrefix:this.idTr})])])),e}};function lt(e){const t=i(e,"columns"),o=i(e,"isDeletable"),s=i(e,"isDeletableConfirm"),n=i(e,"isDragAndDrop"),r=i(e,"isEditable"),a=f(()=>!!(r.value||o.value||s.value));return{allColumnsLength:f(()=>{var _;let d=((_=t.value)==null?void 0:_.length)||0;return n.value&&(d+=1),a.value&&(d+=1),d}),hasActionsColumn:a}}function it(e,{hasActionsColumn:t=f(()=>!1),widthsLocal:o=f(()=>({}))}){const s=i(e,"columns"),n=i(e,"id"),r=i(e,"isColumnsGrow"),a=i(e,"isDeletable"),l=i(e,"isDeletableConfirm"),d=i(e,"isDragAndDrop"),_=i(e,"isEditable"),{remPx:v,scalePxWithRem:b}=be(),h=R(void 0),E=R({});let D,x;const U=f(()=>t.value?_.value?o.value.actionsColumnDouble:a.value||l.value?o.value.actionsColumnSingle:0:0),H=f(()=>d.value?o.value.dndColumn:0),C=()=>{var m;return(m=document.getElementById(n.value))==null?void 0:m.parentElement},T=m=>{if(ae(m)||m==="")return 0;if(Pe(m))return+b(m)||0;if(!Ue(m))return 0;const A=m.trim();return A?A.endsWith("rem")?(parseFloat(A)||0)*v.value:(A.endsWith("px"),parseFloat(A)||0):0},K=m=>{const A=`${m}px`;return{maxWidth:A,minWidth:A,width:A}},c=()=>{if(!r.value||!h.value){E.value={};return}const m=s.value||[],A=h.value-U.value-H.value;if(A<=0){E.value={};return}let O=0,y=0;if(m.forEach(F=>{const q=T(F.width);O+=q,y+=Math.max(0,+F.grow||0)}),O>=A||y<=0){E.value={};return}const k=A-O,N={};m.forEach(F=>{const q=T(F.width),L=Math.max(0,+F.grow||0);if(!F.id||!q)return;const I=q+(L>0?k*L/y:0);N[F.id]=K(I)}),E.value=N},w=()=>{if(!r.value||D)return;const m=C();m&&(x=m,D=new ResizeObserver(Ne(A=>{var y,k;const O=(k=(y=A[0])==null?void 0:y.contentRect)==null?void 0:k.width;O&&(h.value=O,c())},100)),h.value=m.getBoundingClientRect().width,c(),D.observe(m))},p=()=>{D&&(x&&D.unobserve(x),D.disconnect(),D=void 0,x=void 0)};return Ce([s,t,a,l,d,_,o],()=>{c()},{deep:!0}),{columnsStylesGrow:E,destroyColumnsGrowObserver:p,initColumnsGrowObserver:w}}function nt(e,{emit:t}){return{onDeleteRow:({row:s,rowIndex:n})=>{t("deleteRow",{row:s,rowIndex:n})}}}function rt(e,{emit:t},{isDndDisabled:o=f(()=>!1)}={}){const s=i(e,"id"),n=i(e,"isDragAndDrop"),r=i(e,"rows"),a=R(void 0),l=R(void 0),d=R(void 0),_=R(void 0),v=()=>{var c;(c=_.value)==null||c.remove(),_.value=void 0},b=c=>{var k,N;const w=(N=(k=c.target)==null?void 0:k.closest)==null?void 0:N.call(k,"tr");if(!w)return;const p=w.getBoundingClientRect(),m=document.createElement("table"),A=document.createElement("tbody"),O=w.cloneNode(!0);m.className="a_table_form__table",m.style.borderCollapse="collapse",m.style.borderSpacing="0",m.style.width=`${p.width}px`,m.style.tableLayout="fixed",Array.from(w.children).forEach((F,q)=>{const L=O.children[q];if(L){const I=window.getComputedStyle(F);L.style.width=`${F.getBoundingClientRect().width}px`,L.style.backgroundColor=I.backgroundColor,L.style.borderTop=I.borderTop,L.style.borderRight=I.borderRight,L.style.borderBottom=I.borderBottom,L.style.borderLeft=I.borderLeft,L.style.color=I.color}}),A.appendChild(O),m.appendChild(A);const y=document.createElement("div");return y.className="a_table_form a_table_form__drag_preview",y.style.position="fixed",y.style.top="-10000px",y.style.left="-10000px",y.style.pointerEvents="none",y.style.zIndex="9999",y.appendChild(m),document.body.appendChild(y),_.value=y,{element:y,offsetX:Math.min(c.offsetX||0,p.width/2),offsetY:Math.min(c.offsetY||0,p.height/2)}},h=({fromIndex:c,toIndex:w,trigger:p})=>{if(!n.value||o.value||c===w||c<0||w<0||c>=r.value.length||w>=r.value.length)return;const m=[...r.value],[A]=m.splice(c,1);m.splice(w,0,A),t("updateRows",{rows:m,trigger:p}),t("moveRow",{fromIndex:c,row:A,toIndex:w})},E=({fromIndex:c,rowIndex:w,position:p="before"})=>{if(!n.value||o.value||c<0||w<0||c>=r.value.length||w>=r.value.length)return;let m=p==="after"?w+1:w;c<m&&(m-=1),h({fromIndex:c,toIndex:m,trigger:"dnd"})},D=c=>{h({fromIndex:c,toIndex:c-1,trigger:"moveRowUp"}),Q().then(()=>{const w=Math.max(1,c-1);te({selector:`#${s.value}_${w}_up`})})},x=c=>{h({fromIndex:c,toIndex:c+1,trigger:"moveRowDown"}),Q().then(()=>{const w=Math.min(r.value.length-2,c+1);te({selector:`#${s.value}_${w}_down`})})},U=(c,w)=>{if(!(!n.value||o.value)){if(c!=null&&c.dataTransfer){c.dataTransfer.effectAllowed="move",c.dataTransfer.setData("text/plain",`${w}`),v();const p=b(c);p&&c.dataTransfer.setDragImage(p.element,p.offsetX,p.offsetY)}a.value=w}},H=(c,w)=>{var m,A;if(!n.value||o.value)return;c.preventDefault();const p=(A=(m=c.currentTarget)==null?void 0:m.getBoundingClientRect)==null?void 0:A.call(m);if(p){const O=p.top+p.height/2;d.value=c.clientY<O?"before":"after"}else d.value="after";l.value=w},C=(c,w)=>{var m,A;if(!n.value||o.value)return;const p=c.relatedTarget;(A=(m=c.currentTarget)==null?void 0:m.contains)!=null&&A.call(m,p)||l.value===w&&(l.value=void 0,d.value=void 0)},T=(c,w)=>{!n.value||o.value||(c.preventDefault(),a.value!==void 0&&(E({fromIndex:a.value,position:d.value||"after",rowIndex:w}),v(),a.value=void 0,l.value=void 0,d.value=void 0))},K=()=>{v(),a.value=void 0,l.value=void 0,d.value=void 0};return{canMoveRowDown:f(()=>c=>c<r.value.length-1),canMoveRowUp:f(()=>c=>c>0),dragOverPosition:d,dragOverRowIndex:l,draggedRowIndex:a,onDragleave:C,moveRowDown:x,moveRowUp:D,onDragend:K,onDragover:H,onDragstart:U,onDrop:T}}function dt(e,{getRowKey:t=()=>{}}){const o=i(e,"addRow"),s=i(e,"columns"),n=i(e,"isAddable"),r=i(e,"isEditable"),a=i(e,"prepareEditModel"),l=i(e,"rows"),d=R(void 0),_=R(void 0),v=R(!1),b=f(()=>!!d.value||v.value),h=f(()=>n.value?S(o.value):!1),E=f(()=>r.value?s.value.some(C=>{var T;return!!((T=C.formElement)!=null&&T.required)}):!1),D=C=>{if(!S(a.value))return;const T=a.value(C);if((T==null?void 0:T.model)!==void 0)return $(T.model)};return{activeEditRowKey:d,activeEditModel:_,canAddRow:h,hasActiveEditRow:b,hasRequiredEditableColumns:E,isAddRowActive:v,onAddRow:()=>{b.value||!h.value||(d.value=void 0,_.value=D({rows:l.value}),v.value=!0)},onCancelEditRow:()=>{d.value=void 0,_.value=void 0,v.value=!1},onEditRow:({row:C,rowIndex:T})=>{v.value||(_.value=D({row:C,rowIndex:T,rows:l.value}),d.value=t({row:C,rowIndex:T}))}}}function ct(e){const t=i(e,"icons");return{iconsLocal:f(()=>({actionAddRow:Me,...t.value}))}}function ut(e){const t=i(e,"keyId"),o=i(e,"rows"),s=i(e,"rowsFooter"),n=f(()=>o.value.length>0),r=f(()=>s.value.length>0);return{getRowKey:({row:l,rowIndex:d,isFooter:_=!1})=>{let v=d;if(t.value){const h=B(l,t.value);ae(h)||(v=h)}return`${_?"footer":"body"}_${v}`},hasRows:n,hasRowsFooter:r}}function _t(e){const t=i(e,"texts");return{textsLocal:f(()=>({actionsColumn:"_A_TABLE_FORM_ACTIONS_",actionAddRow:"_A_TABLE_FORM_ADD_ROW_",actionDelete:"_A_TABLE_FORM_DELETE_",actionDeleteConfirmBody:"_A_TABLE_FORM_DELETE_CONFIRM_BODY_",actionDeleteConfirmClose:"_A_TABLE_FORM_DELETE_CONFIRM_CLOSE_",actionDeleteConfirmHeader:"_A_TABLE_FORM_DELETE_CONFIRM_HEADER_",actionDeleteConfirmSave:"_A_TABLE_FORM_DELETE_CONFIRM_SAVE_",actionEdit:"_A_TABLE_FORM_EDIT_",actionEditCancel:"_A_TABLE_FORM_EDIT_CANCEL_",actionEditSave:"_A_TABLE_FORM_EDIT_SAVE_",editInfoText:void 0,emptyText:"_A_TABLE_FORM_EMPTY_",reorderColumn:"_A_TABLE_FORM_REORDER_COLUMN_",reorderDown:"_A_TABLE_FORM_MOVE_DOWN_",reorderHandle:"_A_TABLE_FORM_REORDER_",reorderUp:"_A_TABLE_FORM_MOVE_UP_",...t.value}))}}function mt(e){const t=i(e,"widths");return{widthsLocal:f(()=>({actionsColumnSingle:56,actionsColumnDouble:112,dndColumn:56,...t.value}))}}const z={name:"ATableForm",props:{actionsDisabledCallback:{type:Object,required:!1,default:()=>({})},actionsHideCallback:{type:Object,required:!1,default:()=>({})},actionsTitleCallback:{type:Object,required:!1,default:()=>({})},addRow:{type:Function,required:!1,default:void 0},columns:{type:Array,required:!0},columnsDefaultValue:{type:[String,Number],required:!1,default:""},errorIcon:{type:String,required:!1,default:Oe},extra:{type:Object,required:!1,default:void 0},icons:{type:Object,required:!1,default:()=>({})},id:{type:String,required:!1,default:()=>He("a_table_form_")},isActionsSticky:{type:Boolean,required:!1,default:!1},isAddable:{type:Boolean,required:!1,default:!1},isColumnsGrow:{type:Boolean,required:!1,default:!1},isDeletable:{type:Boolean,required:!1,default:!1},isDeletableConfirm:{type:Boolean,required:!1,default:!1},isDragAndDrop:{type:Boolean,required:!1,default:!1},isEditable:{type:Boolean,required:!1,default:!1},keyId:{type:String,required:!1,default:void 0},label:{type:[String,Number],required:!1,default:""},labelClass:{type:[String,Object,Array],required:!1,default:void 0},labelTag:{type:String,required:!1,default:"h2"},prepareEditModel:{type:Function,required:!1,default:void 0},rows:{type:Array,required:!1,default:()=>[]},rowsFooter:{type:Array,required:!1,default:()=>[]},saveRow:{type:Function,required:!1,default:()=>{}},texts:{type:Object,required:!1,default:()=>({})},widths:{type:Object,required:!1,default:()=>({})}},emits:["deleteRow","moveRow","updateRows"],setup(e,t){const o=i(e,"actionsDisabledCallback"),s=i(e,"actionsTitleCallback"),{allColumnsLength:n,hasActionsColumn:r}=lt(e),{getRowKey:a,hasRows:l,hasRowsFooter:d}=ut(e),{textsLocal:_}=_t(e),{widthsLocal:v}=mt(e),{iconsLocal:b}=ct(e),{columnsStylesGrow:h,destroyColumnsGrowObserver:E,initColumnsGrowObserver:D}=it(e,{hasActionsColumn:r,widthsLocal:v});Le(()=>{D()}),Fe(()=>{E()});const{activeEditRowKey:x,activeEditModel:U,canAddRow:H,hasActiveEditRow:C,hasRequiredEditableColumns:T,isAddRowActive:K,onAddRow:c,onCancelEditRow:w,onEditRow:p}=dt(e,{getRowKey:a}),{canMoveRowDown:m,canMoveRowUp:A,dragOverPosition:O,dragOverRowIndex:y,draggedRowIndex:k,moveRowDown:N,moveRowUp:F,onDragend:q,onDragleave:L,onDragover:I,onDragstart:le,onDrop:ie}=rt(e,t,{isDndDisabled:C}),{onDeleteRow:ne}=nt(e,t),re=f(()=>{if(C.value)return!0;const X=B(o.value,"add");return S(X)?X():!1}),de=f(()=>{const X=B(s.value,"add");return S(X)?X():_.value.actionAddRow});return{activeEditRowKey:x,activeEditModel:U,allColumnsLength:n,addTitle:de,canAddRow:H,canMoveRowDown:m,canMoveRowUp:A,columnsStylesGrow:h,draggedRowIndex:k,dragOverPosition:O,dragOverRowIndex:y,getRowKey:a,hasActionsColumn:r,hasActiveEditRow:C,hasRequiredEditableColumns:T,hasRows:l,hasRowsFooter:d,iconsLocal:b,isAddDisabled:re,isAddRowActive:K,moveRowDown:N,moveRowUp:F,onAddRow:c,onCancelEditRow:w,onDeleteRow:ne,onDragend:q,onDragleave:L,onDragover:I,onDragstart:le,onDrop:ie,onEditRow:p,textsLocal:_,widthsLocal:v}},render(){return u("div",{class:"a_table_form"},[this.label&&u(W,{class:["a_table_form__label",this.labelClass],html:this.label,tag:this.labelTag}),this.hasRequiredEditableColumns&&u(we),u("div",{class:"a_table_form__wrapper"},[u("table",{id:this.id,class:["a_table_form__table",{a_table_form_drag_active:this.draggedRowIndex!==void 0}]},[u("thead",{class:"a_table_form__head"},[u(Z,{id:this.id,allColumnsLength:this.allColumnsLength,canMoveRowDown:this.canMoveRowDown,canMoveRowUp:this.canMoveRowUp,cellTag:"th",columns:this.columns,columnsStylesGrow:this.columnsStylesGrow,draggedRowIndex:this.draggedRowIndex,hasActionsColumn:this.hasActionsColumn,hasActiveEditRow:!1,isActiveEditMode:!1,isActionsSticky:this.isActionsSticky,actionsDisabledCallback:this.actionsDisabledCallback,actionsHideCallback:this.actionsHideCallback,actionsTitleCallback:this.actionsTitleCallback,isDeletable:this.isDeletable,isDeletableConfirm:this.isDeletableConfirm,isDndDisabled:this.hasActiveEditRow,isDragAndDrop:this.isDragAndDrop,isEditable:this.isEditable,isHeader:!0,moveRowDown:this.moveRowDown,moveRowUp:this.moveRowUp,onCancelEditRow:this.onCancelEditRow,onDeleteRow:this.onDeleteRow,onDragend:this.onDragend,onDragstart:this.onDragstart,onEditRow:this.onEditRow,row:{},rowIndex:0,rows:this.rows,saveRow:this.saveRow,texts:this.textsLocal,widths:this.widthsLocal,trClass:"a_table_form__row a_table_form__row_head"},this.$slots)]),u("tbody",{class:"a_table_form__body"},this.hasRows||this.isAddRowActive?[...this.rows.map((e,t)=>{const o=this.getRowKey({row:e,rowIndex:t});return u(Z,{id:this.id,allColumnsLength:this.allColumnsLength,canMoveRowDown:this.canMoveRowDown,canMoveRowUp:this.canMoveRowUp,columns:this.columns,columnsStylesGrow:this.columnsStylesGrow,draggedRowIndex:this.draggedRowIndex,editModel:this.activeEditRowKey===o?this.activeEditModel:void 0,errorIcon:this.errorIcon,hasActionsColumn:this.hasActionsColumn,hasActiveEditRow:this.hasActiveEditRow,isActiveEditMode:this.activeEditRowKey===o,isActionsSticky:this.isActionsSticky,actionsDisabledCallback:this.actionsDisabledCallback,actionsHideCallback:this.actionsHideCallback,actionsTitleCallback:this.actionsTitleCallback,isCreateMode:!1,isDeletable:this.isDeletable,isDeletableConfirm:this.isDeletableConfirm,isDndDisabled:this.hasActiveEditRow,isDragAndDrop:this.isDragAndDrop,isEditable:this.isEditable,key:o,moveRowDown:this.moveRowDown,moveRowUp:this.moveRowUp,onCancelEditRow:this.onCancelEditRow,onDeleteRow:this.onDeleteRow,onDragend:this.onDragend,onDragleave:this.onDragleave,onDragover:this.onDragover,onDragstart:this.onDragstart,onDrop:this.onDrop,onEditRow:this.onEditRow,row:e,rowIndex:t,rows:this.rows,saveRow:this.saveRow,texts:this.textsLocal,widths:this.widthsLocal,trClass:["a_table_form__row",{a_table_form__row_drag_after:this.dragOverRowIndex===t&&this.dragOverPosition==="after",a_table_form__row_drag_before:this.dragOverRowIndex===t&&this.dragOverPosition==="before",a_table_form__row_drag_over:this.dragOverRowIndex===t,a_table_form__row_dragging:this.draggedRowIndex===t}]},this.$slots)}),this.isAddRowActive&&u(Z,{id:this.id,allColumnsLength:this.allColumnsLength,canMoveRowDown:this.canMoveRowDown,canMoveRowUp:this.canMoveRowUp,columns:this.columns,columnsStylesGrow:this.columnsStylesGrow,editModel:this.activeEditModel,errorIcon:this.errorIcon,draggedRowIndex:this.draggedRowIndex,hasActionsColumn:this.hasActionsColumn,hasActiveEditRow:this.hasActiveEditRow,isActiveEditMode:!0,isActionsSticky:this.isActionsSticky,actionsDisabledCallback:this.actionsDisabledCallback,actionsHideCallback:this.actionsHideCallback,actionsTitleCallback:this.actionsTitleCallback,isCreateMode:!0,isDeletable:!1,isDeletableConfirm:!1,isDndDisabled:!0,isDragAndDrop:this.isDragAndDrop,isEditable:this.isEditable,key:"body_create",moveRowDown:this.moveRowDown,moveRowUp:this.moveRowUp,onCancelEditRow:this.onCancelEditRow,onDeleteRow:this.onDeleteRow,onDragend:this.onDragend,onDragleave:this.onDragleave,onDragover:this.onDragover,onDragstart:this.onDragstart,onDrop:this.onDrop,onEditRow:this.onEditRow,row:{},rowIndex:this.rows.length,rows:this.rows,saveRow:this.addRow,texts:this.textsLocal,widths:this.widthsLocal,trClass:"a_table_form__row a_table_form__row_create"},this.$slots)]:[u("tr",{class:"a_table_form__row a_table_form__row_empty"},[u("td",{class:"a_table_form__cell a_table_form__empty",colspan:this.allColumnsLength},[u(W,{tag:"span",text:this.textsLocal.emptyText})])])]),this.hasRowsFooter&&u("tfoot",{class:"a_table_form__foot"},this.rowsFooter.map((e,t)=>u(Z,{id:this.id,allColumnsLength:this.allColumnsLength,canMoveRowDown:this.canMoveRowDown,canMoveRowUp:this.canMoveRowUp,columns:this.columns,columnsStylesGrow:this.columnsStylesGrow,draggedRowIndex:this.draggedRowIndex,hasActionsColumn:this.hasActionsColumn,hasActiveEditRow:this.hasActiveEditRow,isActiveEditMode:!1,isActionsSticky:this.isActionsSticky,actionsDisabledCallback:this.actionsDisabledCallback,actionsHideCallback:this.actionsHideCallback,actionsTitleCallback:this.actionsTitleCallback,isDeletable:this.isDeletable,isDeletableConfirm:this.isDeletableConfirm,isDndDisabled:this.hasActiveEditRow,isDragAndDrop:this.isDragAndDrop,isEditable:this.isEditable,isFooter:!0,key:this.getRowKey({isFooter:!0,row:e,rowIndex:t}),moveRowDown:this.moveRowDown,moveRowUp:this.moveRowUp,onCancelEditRow:this.onCancelEditRow,onDeleteRow:this.onDeleteRow,onDragend:this.onDragend,onDragstart:this.onDragstart,onEditRow:this.onEditRow,row:e,rowIndex:t,rows:this.rowsFooter,saveRow:this.saveRow,texts:this.textsLocal,widths:this.widthsLocal,trClass:"a_table_form__row a_table_form__row_footer"},this.$slots)))])]),this.canAddRow&&u("div",{class:"a_mt_3 a_text_right"},[u(P,{class:"a_btn a_btn_outline_primary",disabled:this.isAddDisabled,extra:this.extra,iconLeft:this.iconsLocal.actionAddRow,text:this.textsLocal.actionAddRow,textScreenReader:this.addTitle,title:this.addTitle,onClick:this.onAddRow})])])}};function ht(){return{codeHtml:`<a-simple-table
  :columns="columns"
  :rows-footer="rowsFooter"
  :rows="rows"
  key-id="id"
  label="_A_TABLE_FORM_EXAMPLE_LABEL_"
/>
`}}function ft(){return{codeJs:`import {
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
};`}}const bt={name:"PageTableFormBasic",components:{AlohaExample:Y,ATableForm:z},setup(){const{codeHtml:e}=ht(),{codeJs:t}=ft(),o=[{id:"position",label:"_A_TABLE_FORM_COLUMN_POSITION_",maxWidth:96,minWidth:96,width:96,formElement:{type:"number"}},{id:"name",label:"_A_TABLE_FORM_COLUMN_NAME_",maxWidth:"18rem",minWidth:"12rem",width:"16rem",formElement:{type:"text"}},{id:"team",formElement:{translateData:!0,data:[{label:"_A_TABLE_FORM_TEAM_NORTH_",value:"north"},{label:"_A_TABLE_FORM_TEAM_WEST_",value:"west"},{label:"_A_TABLE_FORM_TEAM_SOUTH_",value:"south"},{label:"_A_TABLE_FORM_TEAM_EAST_",value:"east"}],keyId:"value",keyLabel:"label",type:"select"},label:"_A_TABLE_FORM_COLUMN_TEAM_",minWidth:"12rem"},{id:"score",footerDefaultValue:"68",footerKeyLabel:"score",formElement:{type:"integer"},label:"_A_TABLE_FORM_COLUMN_SCORE_",maxWidth:120,minWidth:120,width:120}],s=R([{id:1,name:"Марта Иванова",position:1,score:18,team:"north"},{id:2,name:"Олег Сидоров",position:2,score:17,team:"west"},{id:3,name:"Анна Петрова",position:3,score:16,team:"south"},{id:4,name:"Игорь Ковалёв",position:4,score:17,team:"east"}]);return{codeHtml:e,codeJs:t,columns:o,rows:s,rowsFooter:[{name:"_A_TABLE_FORM_FOOTER_TOTAL_",score:68}]}}};function wt(e,t,o,s,n,r){const a=g("a-table-form"),l=g("aloha-example");return G(),J(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TABLE_FORM_EXAMPLE_HEADER_"},{default:V(()=>[M(a,{columns:e.columns,"rows-footer":e.rowsFooter,rows:e.rows,"key-id":"id",label:"_A_TABLE_FORM_EXAMPLE_LABEL_"},null,8,["columns","rows-footer","rows"])]),_:1},8,["code-html","code-js"])}const At=j(bt,[["render",wt]]);function vt(){return{codeHtml:`<a-simple-table
  :columns="columns"
  :is-drag-and-drop="true"
  :rows-footer="rowsFooter"
  :rows="rows"
  key-id="id"
  label="_A_TABLE_FORM_EXAMPLE_LABEL_"
  @update-rows="updateRows"
/>
`}}function Et(){return{codeJs:`import {
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
};`}}const pt={name:"PageTableFormDND",components:{AlohaExample:Y,ATableForm:z},setup(){const{codeHtml:e}=vt(),{codeJs:t}=Et(),o=[{id:"position",label:"_A_TABLE_FORM_COLUMN_POSITION_",maxWidth:96,minWidth:96,width:96,formElement:{type:"text"}},{id:"name",formElement:{type:"text"},label:"_A_TABLE_FORM_COLUMN_NAME_",maxWidth:"18rem",minWidth:"12rem",width:"16rem"},{id:"team",formElement:{translateData:!0,data:[{label:"_A_TABLE_FORM_TEAM_NORTH_",value:"north"},{label:"_A_TABLE_FORM_TEAM_WEST_",value:"west"},{label:"_A_TABLE_FORM_TEAM_SOUTH_",value:"south"},{label:"_A_TABLE_FORM_TEAM_EAST_",value:"east"}],keyId:"value",keyLabel:"label",type:"select"},label:"_A_TABLE_FORM_COLUMN_TEAM_",minWidth:"12rem"},{id:"score",footerDefaultValue:"68",footerKeyLabel:"score",formElement:{type:"integer"},label:"_A_TABLE_FORM_COLUMN_SCORE_",maxWidth:120,minWidth:120,width:120}],s=R([{id:1,name:"Марта Иванова",position:1,score:18,team:"north"},{id:2,name:"Олег Сидоров",position:2,score:17,team:"west"},{id:3,name:"Анна Петрова",position:3,score:16,team:"south"},{id:4,name:"Игорь Ковалёв",position:4,score:17,team:"east"}]);return{codeHtml:e,codeJs:t,columns:o,rows:s,rowsFooter:[{name:"_A_TABLE_FORM_FOOTER_TOTAL_",score:68}],updateRows:({rows:a,trigger:l})=>{s.value=a,console.log("trigger",l)}}}};function Rt(e,t,o,s,n,r){const a=g("a-table-form"),l=g("aloha-example");return G(),J(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TABLE_FORM_DND_HEADER_",description:"_A_TABLE_FORM_DND_DESCRIPTION_",props:"is-drag-and-drop"},{default:V(()=>[M(a,{columns:e.columns,"is-drag-and-drop":!0,"rows-footer":e.rowsFooter,rows:e.rows,"key-id":"id",label:"_A_TABLE_FORM_EXAMPLE_LABEL_",onUpdateRows:e.updateRows},null,8,["columns","rows-footer","rows","onUpdateRows"])]),_:1},8,["code-html","code-js"])}const yt=j(pt,[["render",Rt]]);function gt(){return{codeHtml:`<a-checkbox>
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
`}}function Dt(){return{codeJs:`import {
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
};`}}const Tt={name:"PageTableFormEdit",components:{ACheckbox:oe,AlohaExample:Y,ATableForm:z},setup(){const{codeHtml:e}=gt(),{codeJs:t}=Dt(),o=[{label:"is-deletable-confirm",value:"is-deletable-confirm"},{label:"is-deletable",value:"is-deletable"},{label:"is-editable",value:"is-editable"},{label:"is-addable",value:"is-addable"}],s=R(["is-deletable-confirm","is-deletable","is-editable","is-addable"]),n={actionEditCancel:"abbrechen",actionEditSave:"speichern",editInfoText:"Nur diese Zeile ist gerade im Bearbeitungsmodus."},r=[{id:"position",label:"_A_TABLE_FORM_COLUMN_POSITION_",maxWidth:96,minWidth:96,width:96,formElement:{controlsType:"none",type:"integer"}},{id:"name",formElement:{type:"text",required:!0},keyLabel:"name",label:"_A_TABLE_FORM_COLUMN_NAME_",maxWidth:"18rem",minWidth:"12rem",width:"16rem"},{id:"team",formElement:{data:[{label:"_A_TABLE_FORM_TEAM_NORTH_",value:"north"},{label:"_A_TABLE_FORM_TEAM_WEST_",value:"west"},{label:"_A_TABLE_FORM_TEAM_SOUTH_",value:"south"},{label:"_A_TABLE_FORM_TEAM_EAST_",value:"east"}],keyId:"value",keyLabel:"label",translateData:!0,type:"select"},label:"_A_TABLE_FORM_COLUMN_TEAM_",minWidth:"12rem"},{id:"score",footerDefaultValue:"68",footerKeyLabel:"score",formElement:{controlsType:"none",min:0,type:"integer"},label:"_A_TABLE_FORM_COLUMN_SCORE_",maxWidth:120,minWidth:120,width:120}],a=R([{id:1,name:"Marta Ivanova",position:1,score:18,team:"north"},{id:2,name:"Oleg Sidorov",position:2,score:17,team:"west"},{id:3,name:"Anna Petrova",position:3,score:16,team:"south"},{id:4,name:"Igor Kovalev",position:4,score:17,team:"east"}]);return{addRow:({model:b})=>{var E;console.log("model ",b);const h={};if((E=b.name)!=null&&E.trim()||(h.name=["Name ist erforderlich."]),b.team||(h.team=["Team ist erforderlich."]),b.score<18&&(h.score=["Score must be at least 18."]),Object.keys(h).length)return{errors:h};a.value.push({id:a.value.length+1,...b})},codeHtml:e,codeJs:t,columns:r,dataCheckbox:o,deleteRow:({row:b,rowIndex:h})=>{a.value.splice(h,1),console.log("row",b),console.log("rowIndex",h)},modelCheckbox:s,rows:a,rowsFooter:[{name:"_A_TABLE_FORM_FOOTER_TOTAL_",score:68}],saveRow:async({model:b,rowIndex:h})=>{var D;await new Promise(x=>{setTimeout(x,300)});const E={};if((D=b.name)!=null&&D.trim()||(E.name=["Name ist erforderlich."]),b.team||(E.team=["Team ist erforderlich."]),b.score<18&&(E.score=["Score must be at least 18."]),Object.keys(E).length)return{errors:E};a.value.splice(h,1,b)},texts:n}}};function Ct(e,t,o,s,n,r){const a=g("a-checkbox"),l=g("a-table-form"),d=g("aloha-example");return G(),J(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TABLE_FORM_EDIT_HEADER_",description:"_A_TABLE_FORM_EDIT_DESCRIPTION_",props:["is-addable","is-deletable","is-deletable-confirm","is-editable","save-row","texts"]},{default:V(()=>[M(a,{class:"a_mb_4",modelValue:e.modelCheckbox,"onUpdate:modelValue":t[0]||(t[0]=_=>e.modelCheckbox=_),data:e.dataCheckbox,"translate-data":!0,"key-id":"value","key-label":"label"},null,8,["modelValue","data"]),M(l,{"add-row":e.addRow,columns:e.columns,"is-addable":e.modelCheckbox.includes("is-addable"),"is-deletable-confirm":e.modelCheckbox.includes("is-deletable-confirm"),"is-deletable":e.modelCheckbox.includes("is-deletable"),"is-editable":e.modelCheckbox.includes("is-editable"),"rows-footer":e.rowsFooter,rows:e.rows,"save-row":e.saveRow,texts:e.texts,"key-id":"id",label:"_A_TABLE_FORM_EXAMPLE_LABEL_",onDeleteRow:e.deleteRow},null,8,["add-row","columns","is-addable","is-deletable-confirm","is-deletable","is-editable","rows-footer","rows","save-row","texts","onDeleteRow"])]),_:1},8,["code-html","code-js"])}const Mt=j(Tt,[["render",Ct]]);function Ot(){return{codeHtml:`<a-checkbox
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
`}}function Lt(){return{codeJs:`import {
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
};`}}const Ft={name:"PageTableFormGrow",components:{ACheckbox:oe,AlohaExample:Y,ATableForm:z},setup(){const{codeHtml:e}=Ot(),{codeJs:t}=Lt(),o=[{label:"is-deletable",value:"is-deletable"},{label:"is-editable",value:"is-editable"},{label:"is-drag-and-drop",value:"is-drag-and-drop"}],s=R(["is-deletable","is-editable"]),n=[{id:"position",label:"_A_TABLE_FORM_COLUMN_POSITION_",minWidth:96,width:96,grow:1,formElement:{controlsType:"none",type:"integer"}},{id:"name",formElement:{type:"text"},label:"_A_TABLE_FORM_COLUMN_NAME_",minWidth:"12rem",width:"16rem",grow:2},{id:"team",formElement:{data:[{label:"_A_TABLE_FORM_TEAM_NORTH_",value:"north"},{label:"_A_TABLE_FORM_TEAM_WEST_",value:"west"},{label:"_A_TABLE_FORM_TEAM_SOUTH_",value:"south"},{label:"_A_TABLE_FORM_TEAM_EAST_",value:"east"}],keyId:"value",keyLabel:"label",translateData:!0,type:"select"},label:"_A_TABLE_FORM_COLUMN_TEAM_",minWidth:"12rem",width:"12rem",grow:1},{id:"score",footerDefaultValue:"68",footerKeyLabel:"score",formElement:{controlsType:"none",min:0,type:"integer"},label:"_A_TABLE_FORM_COLUMN_SCORE_",minWidth:120,width:120,grow:1}],r=[{id:"position",label:"_A_TABLE_FORM_COLUMN_POSITION_",minWidth:96,width:96,grow:1,formElement:{controlsType:"none",type:"integer"}},{id:"name",formElement:{type:"text"},label:"_A_TABLE_FORM_COLUMN_NAME_",minWidth:"12rem",width:"16rem",grow:3}],a=R([{id:1,name:"Marta Ivanova",position:1,score:18,team:"north"},{id:2,name:"Oleg Sidorov",position:2,score:17,team:"west"},{id:3,name:"Anna Petrova",position:3,score:16,team:"south"},{id:4,name:"Igor Kovalev",position:4,score:17,team:"east"}]);return{codeHtml:e,codeJs:t,columns1:n,columns2:r,dataCheckbox:o,deleteRow:({rowIndex:b})=>{a.value.splice(b,1)},modelCheckbox:s,rows:a,rowsFooter:[{name:"_A_TABLE_FORM_FOOTER_TOTAL_",score:68}],saveRow:({model:b,rowIndex:h})=>{a.value.splice(h,1,b)},texts:{editInfoText:"Only one row can be edited at a time."}}}},xt={class:"a_mb_4"};function kt(e,t,o,s,n,r){const a=g("a-checkbox"),l=g("a-table-form"),d=g("aloha-example");return G(),J(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TABLE_FORM_GROW_HEADER_",description:"_A_TABLE_FORM_GROW_DESCRIPTION_",props:["is-columns-grow","is-deletable","is-drag-and-drop","is-editable"]},{default:V(()=>[M(a,{class:"a_mb_4",modelValue:e.modelCheckbox,"onUpdate:modelValue":t[0]||(t[0]=_=>e.modelCheckbox=_),data:e.dataCheckbox,"key-id":"value","key-label":"label"},null,8,["modelValue","data"]),xe("div",xt,[M(l,{columns:e.columns1,"is-columns-grow":!0,"is-deletable":e.modelCheckbox.includes("is-deletable"),"is-drag-and-drop":e.modelCheckbox.includes("is-drag-and-drop"),"is-editable":e.modelCheckbox.includes("is-editable"),"rows-footer":e.rowsFooter,rows:e.rows,"save-row":e.saveRow,texts:e.texts,"key-id":"id",label:"_A_TABLE_FORM_EXAMPLE_LABEL_",onDeleteRow:e.deleteRow},null,8,["columns","is-deletable","is-drag-and-drop","is-editable","rows-footer","rows","save-row","texts","onDeleteRow"])]),M(l,{columns:e.columns2,"is-columns-grow":!0,"is-deletable":e.modelCheckbox.includes("is-deletable"),"is-drag-and-drop":e.modelCheckbox.includes("is-drag-and-drop"),"is-editable":e.modelCheckbox.includes("is-editable"),"rows-footer":e.rowsFooter,rows:e.rows,"save-row":e.saveRow,texts:e.texts,"key-id":"id",label:"_A_TABLE_FORM_EXAMPLE_LABEL_",onDeleteRow:e.deleteRow},null,8,["columns","is-deletable","is-drag-and-drop","is-editable","rows-footer","rows","save-row","texts","onDeleteRow"])]),_:1},8,["code-html","code-js"])}const Bt=j(Ft,[["render",kt]]);function It(){return{codeHtml:`<a-one-checkbox
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
`}}function St(){return{codeJs:`import {
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
};`}}const qt={name:"PageTableFormSticky",components:{AlohaExample:Y,AOneCheckbox:Ae,ATableForm:z},setup(){const{codeHtml:e}=It(),{codeJs:t}=St(),o=R(!0),s=Array.from({length:20},(r,a)=>{const l=a+1;return{id:`c${l}`,label:`${l}`,maxWidth:120,minWidth:120,width:120,formElement:{controlsType:"none",type:"integer"}}}),n=R(Array.from({length:6},(r,a)=>{const l={id:a+1};return s.forEach((d,_)=>{l[d.id]=(a+1)*100+_+1}),l}));return{codeHtml:e,codeJs:t,columns:s,isActionsSticky:o,rows:n}}};function Nt(e,t,o,s,n,r){const a=g("a-one-checkbox"),l=g("a-table-form"),d=g("aloha-example");return G(),J(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TABLE_FORM_STICKY_HEADER_",description:"_A_TABLE_FORM_STICKY_DESCRIPTION_",props:["is-actions-sticky","is-deletable-confirm","is-editable"]},{default:V(()=>[M(a,{class:"a_mb_4",modelValue:e.isActionsSticky,"onUpdate:modelValue":t[0]||(t[0]=_=>e.isActionsSticky=_),label:"isActionsSticky"},null,8,["modelValue"]),M(l,{columns:e.columns,"is-actions-sticky":e.isActionsSticky,"is-deletable-confirm":!0,"is-editable":!0,rows:e.rows,"key-id":"id",label:"20 columns"},null,8,["columns","is-actions-sticky","rows"])]),_:1},8,["code-html","code-js"])}const Pt=j(qt,[["render",Nt]]);function Ut(){return{pageTitle:f(()=>ve({placeholder:"_A_TABLE_FORM_PAGE_TITLE_"}))}}const Ht={name:"PageTableForm",components:{AlohaPage:ce,PageTableFormBasic:At,PageTableFormDND:yt,PageTableFormEdit:Mt,PageTableFormGrow:Bt,PageTableFormSticky:Pt},setup(){const{pageTitle:e}=Ut();return{pageTitle:e}}};function $t(e,t,o,s,n,r){const a=g("page-table-form-basic"),l=g("page-table-form-d-n-d"),d=g("page-table-form-edit"),_=g("page-table-form-sticky"),v=g("page-table-form-grow"),b=g("aloha-page");return G(),J(b,{"page-title":e.pageTitle},{body:V(()=>[M(a),M(l),M(d),M(_),M(v)]),_:1},8,["page-title"])}const so=j(Ht,[["render",$t]]);export{so as default};
