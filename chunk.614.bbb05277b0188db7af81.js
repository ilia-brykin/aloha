"use strict";(self.webpackChunkaloha_vue_docs=self.webpackChunkaloha_vue_docs||[]).push([[614],{658:(e,s,r)=>{r.r(s),r.d(s,{default:()=>o});var a=r(2147);const l=(0,a._)("h1",null,"PageProgress",-1),i=(0,a._)("h2",null,"Small",-1),u=(0,a._)("h2",null,"Medium",-1),t=(0,a._)("h2",null,"Large",-1),n=(0,a._)("h2",null,"Revers",-1);var _=r(5890);const c={name:"PageProgress",components:{AProgress:{name:"AProgress",props:{classProgressBar:{type:[String,Object],required:!1,default:void 0},isInteger:{type:Boolean,required:!1},isRevers:{type:Boolean,required:!1},isValueVisible:{type:Boolean,required:!1,default:!0},max:{type:Number,required:!1,default:100},min:{type:Number,required:!1,default:0},value:{type:Number,required:!1,default:0}},setup(e){const{filterCurrency:s}=(0,_.Z)(),r=(0,a.Vh)(e,"isInteger"),{widthPercent:l}=function(e){const s=(0,a.Vh)(e,"min"),r=(0,a.Vh)(e,"max"),l=(0,a.Vh)(e,"value"),i=(0,a.Fl)((()=>r.value-s.value));return{widthPercent:(0,a.Fl)((()=>Math.abs(100*l.value/i.value)))}}(e);return{valuePercent:(0,a.Fl)((()=>r.value?s(l.value,{suffix:"%",digits:0}):s(l.value,{suffix:"%",digits:2}))),widthPercent:l}},render(){return(0,a.h)("div",{class:["a_progress",{a_progress_revers:this.isRevers}]},[(0,a.h)("div",{class:["a_progress__bar",this.classProgressBar],role:"progressbar","aria-valuenow":this.value,"aria-valuemin":this.min,"aria-valuemax":this.max,style:{width:`${this.widthPercent}%`}},[this.isValueVisible&&(0,a.h)("span",{class:"a_progress__text"},this.valuePercent)])])}}}},o=(0,r(1419).Z)(c,[["render",function(e,s){const r=(0,a.up)("a-progress");return(0,a.wg)(),(0,a.iD)("div",null,[l,(0,a.Wm)(r,{value:-3,"is-integer":!0,min:-5,max:0}),(0,a.Wm)(r,{class:"a_mt_4",value:50,"is-value-visible":!1}),(0,a.Wm)(r,{class:"a_mt_4",value:20.2,"is-integer":!1,"class-progress-bar":"a_bg_success"}),i,(0,a.Wm)(r,{class:"a_mt_4 a_progress_small",value:20.2,"is-integer":!1,"class-progress-bar":"a_bg_success"}),u,(0,a.Wm)(r,{class:"a_mt_4 a_progress_medium",value:20.2,"is-integer":!1,"class-progress-bar":"a_bg_success"}),t,(0,a.Wm)(r,{class:"a_mt_4 a_progress_large",value:20.2,"is-integer":!1,"class-progress-bar":"a_bg_success"}),n,(0,a.Wm)(r,{class:"a_mt_4 a_progress_large",value:20.2,"is-integer":!1,"class-progress-bar":"a_bg_success","is-revers":!0,"is-value-visible":!1})])}]])}}]);
//# sourceMappingURL=chunk.614.bbb05277b0188db7af81.js.map