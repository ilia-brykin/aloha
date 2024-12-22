import{A as g,a as X}from"./chunk.AlohaExample.EbzvMVYS.js";import{A as U}from"./chunk.AlohaTableProps.tNGf395N.js";import{a as S,A as V,_ as p}from"./bundle.index.CDxzPDXT.js";import{aX as L,h as I,aY as k,aZ as Y,r as x,a as T,k as o,J as f,aO as h,H as R,O as r,N as w}from"./chunk.vendor.QyCKSPD8.js";import"./chunk.APageTabTitle.BuENQV3G.js";import"./chunk.AlohaHighlightjs.B-JG9i3D.js";import"./chunk.vendor-lodash.GuFqEw-8.js";import"./chunk.ATable.B3GW_q_G.js";import"./chunk.translations-ar.D11AFw12.js";import"./chunk.translations-de.pyWcnzxU.js";import"./chunk.translations-en.BA0L_EKE.js";import"./chunk.translations-es.C8Ue-qtF.js";import"./chunk.translations-fr.B97VMxCC.js";import"./chunk.translations-hr.DPNXGA_z.js";import"./chunk.translations-it.DrIj1yZQ.js";import"./chunk.translations-ru.B1FeJYZT.js";const j={name:"ADecimalIcon",components:{AIcon:S},props:{value:{type:Number,default:50},color:{type:String,default:"yellow"},icon:{type:String,default:L},size:{type:String,default:"medium",validator:e=>["small","medium","big"].includes(e)}},render(){const e={class:"a_decimal_rate_icon a_rate_icon_decimal",style:{position:"absolute",overflow:"hidden",width:`${this.value}%`,color:this.color}};return I("i",e,[I(S,{icon:this.icon,class:`a_decimal_rate_icon a_rate_icon_${this.size}`})])}},z={name:"ARateIcon",components:{AIcon:S,ADecimalIcon:j},props:{value:{type:Number,default:50},color:{type:String,default:"yellow"},icon:{type:String,default:k},iconFill:{type:String,default:L},size:{type:String,default:"medium",validator:e=>["small","medium","big"].includes(e)},isHovered:{type:Boolean,default:!1}},emits:["mouseenter","mouseleave","click","dblclick","mousemove"],setup(e,{emit:t}){return{handleMouseEnter(n){t("mouseenter",n)},handleMouseLeave(n){t("mouseleave",n)},handleClick(n){t("click",n)},handleDblClick(n){t("dblclick",n)},handleMouseMove(n){t("mousemove",n)}}},render(){return I("span",{class:`el-rate__item a_rate_icon_${this.size}`,style:{position:"relative",display:"inline-flex",alignItems:"center",justifyContent:"center"},onClick:this.handleClick,onDblclick:this.handleDblClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onMousemove:this.handleMouseMove},[I("div",{class:"a_rate_icon_align"},[I(S,{icon:this.icon,class:"a_decimal_rate_icon a_rate_decimal",color:this.color}),I(j,{icon:this.iconFill,value:this.value,color:this.color,size:this.size})])])}},A={name:"ARate",components:{AIcon:S,ATranslation:V,ARateIcon:z},props:{text:{type:String,default:null},extra:{type:Object,required:!1},rating:{type:Number,default:5},icon:{type:String,default:k},iconFill:{type:String,default:L},readonly:{type:Boolean,default:!1},showScore:{type:Boolean,default:!1},modelValue:{type:Number,default:0},color:{type:String,default:"yellow"},hoveredColor:{type:String,default:"orange"},halfIcon:{type:Boolean,default:!1},size:{type:String,default:"medium",validator:e=>["small","medium","big"].includes(e)}},emits:["update:modelValue"],setup(e,{emit:t}){const{text:n,rating:s,modelValue:d,showScore:i,readonly:a,icon:l,extra:J,color:C,hoveredColor:O,halfIcon:H,size:N}=Y(e),v=x(d.value),P=x(d.value),$=x(-1),D=T(()=>e.iconFill?e.iconFill:`${e.icon}Fill`),b=()=>{a.value||(v.value=0,t("update:modelValue",v.value))},y=(m,c)=>{if(a.value)return;$.value=c;let u=c+1;if(H.value){const _=m.target.getBoundingClientRect();u=m.clientX-_.left<_.width/2?c+.5:c+1}P.value=u},M=()=>{a.value||($.value=-1)},F=T(()=>Array(s.value).fill(null).map((m,c)=>c<=$.value?O.value:c<v.value?C.value:null)),q=(m,c)=>{if(a.value)return;let u=c+1;if(H.value){const _=m.target.getBoundingClientRect();u=m.clientX-_.left<_.width/2?c+.5:c+1}t("update:modelValue",u),v.value=u},B=T(()=>{const m=$.value>=0?P.value:v.value,c=Math.floor(m),u=m%1,_=Array(s.value).fill(0);for(let E=0;E<c;E++)_[E]=100;return u!==0&&c<s.value&&(_[c]=u*100),_});return{rating:s,showScore:i,readonly:a,icon:l,iconFill:D,text:n,extra:J,color:C,size:N,onMouseEnterIcon:y,onMouseLeaveIcon:M,onClickIcon:q,onDoubleClickIcon:b,onMouseMoveIcon:(m,c)=>{if(a.value)return;let u=c+1;if(H.value){const _=m.target.getBoundingClientRect();u=m.clientX-_.left<_.width/2?c+.5:c+1}P.value!==u&&(P.value=u,$.value=c)},modelValue:T(()=>v.value),iconValues:B,computedColor:F}},render(){return I("div",{class:"a_rate_container"},[...Array.from({length:this.rating},(e,t)=>I(z,{class:"a_rate_icon",icon:this.icon,iconFill:this.iconFill,value:this.iconValues[t],onClick:n=>this.onClickIcon(n,t),onDblclick:this.onDoubleClickIcon,onMouseenter:n=>this.onMouseEnterIcon(n,t),onMouseleave:this.onMouseLeaveIcon,onMousemove:n=>this.onMouseMoveIcon(n,t),color:this.computedColor[t],size:this.size,key:t})),this.showScore&&I("span",{class:"a_rate_score"},this.modelValue.toString()),I(V,{class:"a_rate_label",text:this.text,extra:this.extra})])}};function Z(){return{codeHtml:`<a-rate
   text="ARate"
  :model-value="modelValue"
  @modelValue="handleModelValueChange">
</a-rate>`}}function G(){return{codeJs:`import { 
  ARate,
} from "aloha-vue";
    
export default {
  name: "PageRateModelValue",
  components: {
    ARate,
  },
};`}}const W={name:"PageRateModelValue",components:{ARate:A,AlohaExample:g},setup(){const{codeHtml:e}=Z(),{codeJs:t}=G(),n=x(3);return{codeHtml:e,codeJs:t,handleModelValueChange:d=>{n.value=d},modelValue:n}}};function K(e,t,n,s,d,i){const a=o("a-rate"),l=o("aloha-example");return R(),f(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"ModelValue",description:"_A_RATE_DESCRIPTION_MODEL_VALUE_",props:"model-value"},{default:h(()=>[r(a,{text:"ARate","model-value":e.modelValue,onUpdate:e.handleModelValueChange},null,8,["model-value","onUpdate"])]),_:1},8,["code-html","code-js"])}const Q=p(W,[["render",K]]);function ee(){return{codeHtml:`<a-rate 
  :model-value="2.4"
  :readonly="true"
  text="2.4 readonly">
</a-rate>`}}function te(){return{codeJs:`import { 
  ARate,
} from "aloha-vue";
    
export default {
  name: "PageRateReadonly",
  components: {
    ARate,
  },
};`}}const oe={name:"PageRateReadonly",components:{ARate:A,AlohaExample:g},setup(){const{codeHtml:e}=ee(),{codeJs:t}=te();return{codeHtml:e,codeJs:t}}};function ae(e,t,n,s,d,i){const a=o("a-rate"),l=o("aloha-example");return R(),f(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"Readonly",description:"_A_RATE_DESCRIPTION_READONLY_",props:"readonly"},{default:h(()=>[r(a,{"model-value":2.4,readonly:!0,text:"2.4 readonly"})]),_:1},8,["code-html","code-js"])}const ne=p(oe,[["render",ae]]);function re(){return{codeHtml:`<a-rate 
  :half-icon="true">
</a-rate>`}}function le(){return{codeJs:`import { 
  ARate,
} from "aloha-vue";
    
export default {
  name: "PageRateHalfIcon",
  components: {
    ARate,
  },
};`}}const ce={name:"PageRateHalfIcon",components:{ARate:A,AlohaExample:g},setup(){const{codeHtml:e}=re(),{codeJs:t}=le();return{codeHtml:e,codeJs:t}}};function se(e,t,n,s,d,i){const a=o("a-rate"),l=o("aloha-example");return R(),f(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"Select half Icon",description:"_A_RATE_DESCRIPTION_HALF_ICON_",props:"half-icon"},{default:h(()=>[r(a,{"half-icon":!0})]),_:1},8,["code-html","code-js"])}const de=p(ce,[["render",se]]);function ie(){return{codeHtml:`<a-rate 
  size="small"
  text="small">
</a-rate>
<a-rate 
  size="medium"
  text="medium">
</a-rate>
<a-rate 
  size="big"
  text="big">
</a-rate>
`}}function ue(){return{codeJs:`import { 
  ARate,
} from "aloha-vue";
    
export default {
  name: "PageRateSize",
  components: {
    ARate,
  },
};`}}const me={name:"PageRateSize",components:{ARate:A,AlohaExample:g},setup(){const{codeHtml:e}=ie(),{codeJs:t}=ue();return{codeHtml:e,codeJs:t}}};function _e(e,t,n,s,d,i){const a=o("a-rate"),l=o("aloha-example");return R(),f(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"Sizes",description:"_A_RATE_DESCRIPTION_SIZE_",props:"size"},{default:h(()=>[r(a,{size:"small",text:"small"}),t[0]||(t[0]=w("br",null,null,-1)),r(a,{size:"medium",text:"medium"}),t[1]||(t[1]=w("br",null,null,-1)),r(a,{size:"big",text:"big"})]),_:1},8,["code-html","code-js"])}const pe=p(me,[["render",_e]]);function fe(){return{codeHtml:`<a-rate 
  color="gray"
  text="gray">
</a-rate>`}}function he(){return{codeJs:`import { 
  ARate,
} from "aloha-vue";
    
export default {
  name: "PageRateColor",
  components: {
    ARate,
  },
};`}}const Re={name:"PageRateColor",components:{ARate:A,AlohaExample:g},setup(){const{codeHtml:e}=fe(),{codeJs:t}=he();return{codeHtml:e,codeJs:t}}};function ge(e,t,n,s,d,i){const a=o("a-rate"),l=o("aloha-example");return R(),f(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"Color",description:"_A_RATE_DESCRIPTION_COLOR_",props:"color"},{default:h(()=>[r(a,{color:"gray",text:"gray"})]),_:1},8,["code-html","code-js"])}const Ae=p(Re,[["render",ge]]);function Ie(){return{codeHtml:`<a-rate 
  hovered-color="red"
  text="red">
</a-rate>`}}function ve(){return{codeJs:`import { 
  ARate,
} from "aloha-vue";
    
export default {
  name: "PageRateHoveredColor",
  components: {
    ARate,
  },
};`}}const $e={name:"PageRateHoveredColor",components:{ARate:A,AlohaExample:g},setup(){const{codeHtml:e}=Ie(),{codeJs:t}=ve();return{codeHtml:e,codeJs:t}}};function Pe(e,t,n,s,d,i){const a=o("a-rate"),l=o("aloha-example");return R(),f(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"HoveredColor",description:"_A_RATE_DESCRIPTION_HOVERED_COLOR_",props:"hovered-color"},{default:h(()=>[r(a,{"hovered-color":"red",text:"red"})]),_:1},8,["code-html","code-js"])}const Ee=p($e,[["render",Pe]]);function He(){return{codeHtml:`<a-rate 
  :rating="7">
</a-rate>`}}function Se(){return{codeJs:`import { 
  ARate,
} from "aloha-vue";
    
export default {
  name: "PageRateRating",
  components: {
    ARate,
  },
};`}}const Ce={name:"PageRateRating",components:{ARate:A,AlohaExample:g},setup(){const{codeHtml:e}=He(),{codeJs:t}=Se();return{codeHtml:e,codeJs:t}}};function ye(e,t,n,s,d,i){const a=o("a-rate"),l=o("aloha-example");return R(),f(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"Rating",description:"_A_RATE_DESCRIPTION_RATING_",props:"rating"},{default:h(()=>[r(a,{rating:7})]),_:1},8,["code-html","code-js"])}const Te=p(Ce,[["render",ye]]);function xe(){return{codeHtml:`<a-rate
 icon="ChatSquareText">
</a-rate>
<br />
<a-rate
 icon="ArrowRightCircle">
</a-rate>`}}function Je(){return{codeJs:`import { 
  ARate,
} from "aloha-vue";
    
export default {
  name: "PageRateIcon",
  components: {
    ARate,
  },
};`}}const Oe={name:"PageRateIcon",components:{ARate:A,AlohaExample:g},setup(){const{codeHtml:e}=xe(),{codeJs:t}=Je();return{codeHtml:e,codeJs:t}}};function Ne(e,t,n,s,d,i){const a=o("a-rate"),l=o("aloha-example");return R(),f(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"Icon",description:"_A_RATE_DESCRIPTION_ICON_",props:"icon"},{default:h(()=>[r(a,{icon:"ChatSquareText"}),t[0]||(t[0]=w("br",null,null,-1)),r(a,{icon:"ArrowRightCircle"})]),_:1},8,["code-html","code-js"])}const De=p(Oe,[["render",Ne]]);function be(){return{codeHtml:`<a-rate
 icon-fill="Star">
</a-rate>`}}function Me(){return{codeJs:`import { 
  ARate,
} from "aloha-vue";
    
export default {
  name: "PageRateIconFill",
  components: {
    ARate,
  },
};`}}const Ve={name:"PageRateIconFill",components:{ARate:A,AlohaExample:g},setup(){const{codeHtml:e}=be(),{codeJs:t}=Me();return{codeHtml:e,codeJs:t}}};function we(e,t,n,s,d,i){const a=o("a-rate"),l=o("aloha-example");return R(),f(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"IconFill",description:"_A_RATE_DESCRIPTION_ICON_FILL_",props:"icon-fill"},{default:h(()=>[r(a,{"icon-fill":"Star"})]),_:1},8,["code-html","code-js"])}const Le=p(Ve,[["render",we]]);function je(){return{codeHtml:`<a-rate
 :show-score="true">
</a-rate>`}}function ze(){return{codeJs:`import { 
  ARate,
} from "aloha-vue";
    
export default {
  name: "PageRateShowScore",
  components: {
    ARate,
  },
};`}}const ke={name:"PageRateShowScore",components:{ARate:A,AlohaExample:g},setup(){const{codeHtml:e}=je(),{codeJs:t}=ze();return{codeHtml:e,codeJs:t}}};function Fe(e,t,n,s,d,i){const a=o("a-rate"),l=o("aloha-example");return R(),f(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"ShowScore",description:"_A_RATE_DESCRIPTION_SHOW_SCORE_",props:"show-score"},{default:h(()=>[r(a,{"show-score":!0})]),_:1},8,["code-html","code-js"])}const qe=p(ke,[["render",Fe]]);function Be(){return{codeHtml:`<a-rate 
  text="text and extra">
</a-rate>`}}function Xe(){return{codeJs:`import { 
  ARate,
} from "aloha-vue";
    
export default {
  name: "PageRateTextExtra",
  components: {
    ARate,
  },
};`}}const Ue={name:"PageRateTextExtra",components:{ARate:A,AlohaExample:g},setup(){const{codeHtml:e}=Be(),{codeJs:t}=Xe();return{codeHtml:e,codeJs:t}}};function Ye(e,t,n,s,d,i){const a=o("a-rate"),l=o("aloha-example");return R(),f(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"Text - Extra",description:"_A_RATE_DESCRIPTION_TEXT_EXTRA_",props:["text","extra"]},{default:h(()=>[r(a,{text:"text and extra"})]),_:1},8,["code-html","code-js"])}const Ze=p(Ue,[["render",Ye]]);function Ge(){return{dataEvents:[{name:"update",description:"_A_RATE_EVENT_DESCRIPTION_",type:"Function"}]}}function We(){return{dataProps:[{name:"model-value",description:"_A_RATE_DESCRIPTION_MODEL_VALUE_",type:"Number",default:0,required:!1},{name:"size",description:"_A_RATE_DESCRIPTION_SIZE_",type:"String",default:"medium",required:!1},{name:"half-icon",description:"_A_RATE_DESCRIPTION_HALF_ICON_",type:"Boolean",default:!1,required:!1},{name:"readonly",description:"_A_RATE_DESCRIPTION_READONLY_",type:"Boolean",default:!1,required:!1},{name:"color",description:"_A_RATE_DESCRIPTION_COLOR_",type:"String",default:"yellow",required:!1},{name:"hovered-color",description:"_A_RATE_DESCRIPTION_HOVERED_COLOR_",type:"String",default:"orange",required:!1},{name:"rating",description:"_A_RATE_DESCRIPTION_RATING_",type:"Number",default:5,required:!1},{name:"icon",description:"_A_RATE_DESCRIPTION_ICON_",type:"String",default:"Star",required:!1},{name:"icon-fill",description:"_A_RATE_DESCRIPTION_ICON_FILL_",type:"String",default:void 0,required:!1},{name:"show-score",description:"_A_RATE_DESCRIPTION_SHOW_SCORE_",type:"Boolean",default:!1,required:!1},{name:"text",description:"_A_RATE_DESCRIPTION_TEXT_",type:"String",default:void 0,required:!1},{name:"extra",description:"_A_RATE_DESCRIPTION_EXTRA_",type:"String",default:void 0,required:!1}]}}const Ke={name:"PageRate",components:{AlohaPage:X,AlohaTableProps:U,ATranslation:V,PageRateModelValue:Q,PageRateReadonly:ne,PageRateHalfIcon:de,PageRateSize:pe,PageRateColor:Ae,PageRateHoveredColor:Ee,PageRateRating:Te,PageRateIcon:De,PageRateIconFill:Le,PageRateShowScore:qe,PageRateTextExtra:Ze},setup(){const{dataProps:e}=We(),{dataEvents:t}=Ge();return{dataEvents:t,dataProps:e}}};function Qe(e,t,n,s,d,i){const a=o("a-translation"),l=o("page-rate-model-value"),J=o("page-rate-size"),C=o("page-rate-half-icon"),O=o("page-rate-readonly"),H=o("page-rate-color"),N=o("page-rate-hovered-color"),v=o("page-rate-rating"),P=o("page-rate-icon"),$=o("page-rate-icon-fill"),D=o("page-rate-show-score"),b=o("page-rate-text-extra"),y=o("aloha-table-props"),M=o("aloha-page");return R(),f(M,{"page-title":"Rate"},{body:h(()=>[r(a,{tag:"p",html:"_A_RATE_DESCRIPTION_"}),r(l),r(J),r(C),r(O),r(H),r(N),r(v),r(P),r($),r(D),r(b),r(y,{data:e.dataProps},null,8,["data"]),r(y,{"table-label":"Events",data:e.dataEvents,columns:["name","type","description"]},null,8,["data"])]),_:1})}const Rt=p(Ke,[["render",Qe]]);export{Rt as default};
