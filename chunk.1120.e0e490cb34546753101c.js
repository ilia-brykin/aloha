"use strict";(self.webpackChunkaloha_vue_docs=self.webpackChunkaloha_vue_docs||[]).push([[1120],{4212:(e,t,l)=>{l.r(t),l.d(t,{default:()=>b});var a=l(7736);const s=(0,a.QD)("h1",null,"ACollapse",-1),n=(0,a.QD)("span",null,"ACollapse",-1),o=(0,a.QD)("div",{class:"py-3"},null,-1),i=(0,a.QD)("span",null,"ACollapse",-1),r={key:0};var p=l(3568);const d={name:"ACollapse",inheritAttrs:!1,props:{id:{type:String,required:!1,default:(0,p.uniqueId)("collapse_")},idControl:{type:String,required:!1,default:(0,p.uniqueId)("collapse_control_")},disabled:{type:Boolean,required:!1},label:{type:String,required:!1},tag:{type:String,default:"button"},tagControl:{type:String,default:"div"},attributesControl:{type:Object,required:!1},isOpen:{type:Boolean,required:!1},stop:{type:Boolean,required:!1},prevent:{type:Boolean,required:!1}},emits:["toggle"],data(){return{isOpenLocal:this.isOpen||!1}},computed:{ariaExpanded(){return`${this.isOpenLocal}`},attributesLocal(){const e=(0,p.cloneDeep)(this.$attrs);return"button"===this.tag?(e.type="button",this.disabled&&(e.disabled=!0)):(e.role="button",this.disabled&&(e["aria-disabled"]=!0)),e}},watch:{isOpen(){this.isOpenLocal=this.isOpen}},methods:{toggle(e){this.disabled||(this.isOpenLocal=!this.isOpenLocal,this.$emit("toggle",{isOpen:this.isOpenLocal,id:this.id}),this.stop&&e.stopPropagation(),this.prevent&&e.preventDefault())}}};var u=l(8152);const c={name:"PageCollapse",components:{ACollapse:(0,u.c)(d,[["render",function(e,t){return(0,a.Wz)(),(0,a.An)(a.ae,null,[((0,a.Wz)(),(0,a.Az)((0,a.WY)(e.tag),(0,a.Gu)({id:e.id,"aria-expanded":e.ariaExpanded,"aria-controls":e.idControl},e.attributesLocal,{onClick:t[0]||(t[0]=t=>e.toggle(t))}),{default:(0,a.Ql)((()=>[(0,a.oF)(e.$slots,"label",{isOpen:e.isOpenLocal}),e.label?((0,a.Wz)(),(0,a.An)("span",r,(0,a.WA)(e.label),1)):(0,a.g1)("v-if",!0)])),_:3},16,["id","aria-expanded","aria-controls"])),((0,a.Wz)(),(0,a.Az)((0,a.WY)(e.tagControl),(0,a.Gu)({class:["collapse",{show:e.isOpenLocal}],id:e.idControl},e.attributesControl),{default:(0,a.Ql)((()=>[(0,a.oF)(e.$slots,"control",{isOpen:e.isOpenLocal})])),_:3},16,["id","class"]))],64)}]])}},b=(0,u.c)(c,[["render",function(e,t){const l=(0,a.E1)("a-collapse");return(0,a.Wz)(),(0,a.An)("div",null,[s,(0,a.K2)(l,{class:"btn btn-primary",label:"Aloha"},{control:(0,a.Ql)((()=>[n])),_:1}),o,(0,a.K2)(l,{class:"btn btn-default"},{label:(0,a.Ql)((e=>[(0,a.QD)("span",{class:(0,a.WN)({"text-danger":e.isOpen})},"Click Me",2)])),control:(0,a.Ql)((()=>[i])),_:1})])}]])}}]);
//# sourceMappingURL=chunk.1120.e0e490cb34546753101c.js.map