import{A as p,a as Y}from"./chunk.AlohaExample.DP07rcYT.js";import{A as M}from"./chunk.AlohaTableProps.D9RwdJyO.js";import{A as g,G as x,I as k,l as R,_ as b,g as w}from"./bundle.index.Bfjir3JZ.js";import{g as y,c as H,f as X,u as z,a2 as Q}from"./chunk.vendor-lodash.ClBXVCWL.js";import{t as A,a as E,h as C,r as L,b as W,m as o,C as u,L as T,B as m,G as s,F as O,M as P}from"./chunk.vendor.D-Y3mz6a.js";import{j as Z}from"./chunk.AForm.BmE6PJIS.js";import"./chunk.ATable.C8iW1cYn.js";import"./chunk.utilsMath.7PmiGUbm.js";import"./chunk.vendor-tinymce.2RT9eEW9.js";import"./chunk.ADatepicker.CABFQpE3.js";import"./chunk.UiMixinProps.BVfs3aDc.js";import"./chunk.AInputNumber.mDBop4Df.js";import"./chunk.ATinymce.BZGkgrOt.js";function J(e){const t=A(e,"activeTabIdLocal"),a=A(e,"index"),l=A(e,"keyId"),c=A(e,"parentId"),d=A(e,"tab"),_=E(()=>l.value?y(d.value,l.value):a.value),n=E(()=>t.value===_.value),i=E(()=>`${c.value}_${a.value}`);return{idForContent:E(()=>`${i.value}_content`),idLocal:i,isActive:n,tabIdLocal:_}}function ee(e){const t=A(e,"tab"),a=A(e,"keyContent");return{contentLocal:E(()=>{if(a.value)return y(t.value,a.value)})}}const te={name:"ATabsContent",props:{activeTabIdLocal:{type:[String,Number],required:!0},index:{type:Number,required:!0},keyContent:{type:String,required:!1,default:"content"},keyId:{type:String,required:!1,default:void 0},parentId:{type:String,required:!0},tab:{type:Object,required:!0}},setup(e){const{idForContent:t,idLocal:a,isActive:l,tabIdLocal:c}=J(e),{contentLocal:d}=ee(e);return{contentLocal:d,idForContent:t,idLocal:a,isActive:l,tabIdLocal:c}},render(){let e="";return this.tab.slotContent&&this.$slots[this.tab.slotContent]?e=this.$slots[this.tab.slotContent]({activeTabId:this.activeTabIdLocal,contentId:this.idForContent,index:this.index,isActive:this.isActive,parentId:this.parentId,tab:this.tab,tabId:this.tabIdLocal}):this.$slots.content?e=this.$slots.content({activeTabId:this.activeTabIdLocal,contentId:this.idForContent,index:this.index,isActive:this.isActive,parentId:this.parentId,tab:this.tab,tabId:this.tabIdLocal}):this.contentLocal&&(e=C(g,{html:this.contentLocal})),C("div",{id:this.idForContent,"aria-labelledby":this.idLocal,class:["a_tabs__content",{a_tabs__content_show:this.isActive}],role:"tabpanel"},[e])}};function ae({isDisabled:e=E(()=>!1)}){return{tabindexLocal:E(()=>e.value?-1:0)}}function _e(e,{emit:t},{isDisabled:a=E(()=>!1),tabIdLocal:l=E(()=>"")}){const c=A(e,"index"),d=A(e,"tab"),_=i=>{a.value||t("changeTab",{$event:i,tab:d.value,tabId:l.value,index:c.value})};return{changeTabLocal:_,keydownTab:i=>{(i.keyCode===x.enter||i.keyCode===x.space)&&(_(i),i.stopPropagation(),i.preventDefault())}}}function ne(e){const t=A(e,"disabled"),a=A(e,"keyDisabled"),l=A(e,"tab");return{isDisabled:E(()=>{if(t.value||a.value&&y(l.value,a.value)===!0)return!0})}}function oe(e){const t=A(e,"tab"),a=A(e,"keyLabel");return{labelLocal:E(()=>{if(a.value)return y(t.value,a.value)})}}function se(e){const t=A(e,"tab"),a=A(e,"keyTitle");return{titleLocal:E(()=>{if(a.value)return y(t.value,a.value)})}}const le={name:"ATabsTab",props:{activeTabIdLocal:{type:[String,Number],required:!0},disabled:{type:Boolean,required:!1},index:{type:Number,required:!0},isTitleHtml:{type:Boolean,required:!1,default:void 0},keyDisabled:{type:String,required:!1,default:void 0},keyId:{type:String,required:!1,default:void 0},keyLabel:{type:String,required:!1,default:"label"},keyTitle:{type:String,required:!1,default:"title"},parentId:{type:String,required:!0},tab:{type:Object,required:!0},titlePlacement:{type:String,required:!1,default:"top",validator:e=>k.indexOf(e)!==-1}},emits:["changeTab"],setup(e,t){const{idForContent:a,idLocal:l,isActive:c,tabIdLocal:d}=J(e),{isDisabled:_}=ne(e),{tabindexLocal:n}=ae({isDisabled:_}),{changeTabLocal:i,keydownTab:S}=_e(e,t,{isDisabled:_,tabIdLocal:d}),{labelLocal:h}=oe(e),{titleLocal:r}=se(e);return{changeTabLocal:i,idForContent:a,idLocal:l,isActive:c,isDisabled:_,keydownTab:S,labelLocal:h,tabindexLocal:n,tabIdLocal:d,titleLocal:r}},render(){let e="";return this.tab.slotTab&&this.$slots[this.tab.slotTab]?e=this.$slots[this.tab.slotTab]({activeTabId:this.activeTabIdLocal,contentId:this.idForContent,index:this.index,isActive:this.isActive,parentId:this.parentId,tab:this.tab,tabId:this.tabIdLocal}):this.$slots.tab?e=this.$slots.tab({activeTabId:this.activeTabIdLocal,contentId:this.idForContent,index:this.index,isActive:this.isActive,parentId:this.parentId,tab:this.tab,tabId:this.tabIdLocal}):this.labelLocal&&(e=C(g,{html:this.labelLocal,tag:"span"})),C("li",{class:["a_tabs__list__item",this.tab.classLi]},[C(R,{id:this.idLocal,"aria-controls":this.idForContent,ariaDisabled:this.isDisabled,ariaSelected:this.isActive,class:["a_tabs__list__link",this.tab.class,{a_tabs__list__link_active:this.isActive,a_tabs__list__link_disabled:this.isDisabled}],classDefault:"",isTitleHtml:this.isTitleHtml,role:"tab",tabindex:this.tabindexLocal,tag:"a",titlePlacement:this.titlePlacement,type:"button",title:this.titleLocal,onClick:this.changeTabLocal,onKeydown:this.keydownTab},()=>[e])])}};function de(e,{emit:t}){const a=A(e,"activeTabId"),l=A(e,"data"),c=A(e,"isChangeOutside"),d=A(e,"keyActive"),_=A(e,"keyId"),n=L(void 0),i=()=>{H(a.value)||(n.value=a.value)};return{activeTabIdLocal:n,changeTab:({$event:r,tab:I,tabId:N,index:v})=>{n.value!==N&&(c.value||(n.value=N),t("change",{$event:r,tab:I,tabId:N,index:v}))},initActiveTabIdLocal:()=>{i(),H(n.value)&&(d.value&&(X(l.value,(r,I)=>{if(y(r,d.value))return _.value?n.value=y(r,_.value)||I:n.value=I,!1}),!H(n.value))||(_.value?n.value=y(l.value,`[0].${_.value}`)||0:n.value=0))},setActiveTabIdLocal:i}}const B={name:"ATabs",props:{activeTabId:{type:[String,Number],required:!1,default:void 0},data:{type:Array,required:!0},disabled:{type:Boolean,required:!1,default:void 0},id:{type:String,required:!1,default:()=>z("a_tabs_")},isBoxed:{type:Boolean,required:!1,default:void 0},isChangeOutside:{type:Boolean,required:!1,default:void 0},isTitleHtml:{type:Boolean,required:!1,default:void 0},isVertical:{type:Boolean,required:!1,default:void 0},keyActive:{type:String,required:!1,default:"active"},keyContent:{type:String,required:!1,default:"content"},keyDisabled:{type:String,required:!1,default:void 0},keyId:{type:String,required:!1,default:void 0},keyLabel:{type:String,required:!1,default:"label"},keyTitle:{type:String,required:!1,default:"title"},titlePlacement:{type:String,required:!1,default:"top",validator:e=>k.indexOf(e)!==-1}},emits:["change"],setup(e,t){const a=A(e,"activeTabId"),{activeTabIdLocal:l,changeTab:c,initActiveTabIdLocal:d,setActiveTabIdLocal:_}=de(e,t);return d(),W(a,()=>{_()}),{activeTabIdLocal:l,changeTab:c}},render(){return C("div",{id:this.id,class:["a_tabs",{a_tabs_boxed:this.isBoxed,a_tabs_vertical:this.isVertical}]},[C("div",{class:"a_tabs__box"},[C("ul",{class:"a_tabs__list",role:"tablist"},[this.data.map((e,t)=>C(le,{key:t,activeTabIdLocal:this.activeTabIdLocal,disabled:this.disabled,index:t,isTitleHtml:this.isTitleHtml,keyDisabled:this.keyDisabled,keyId:this.keyId,keyLabel:this.keyLabel,keyTitle:this.keyTitle,parentId:this.id,tab:e,titlePlacement:this.titlePlacement,onChangeTab:this.changeTab},this.$slots))])]),C("div",{class:"a_tabs__contents"},[this.data.map((e,t)=>C(te,{key:t,activeTabIdLocal:this.activeTabIdLocal,index:t,keyContent:this.keyContent,keyId:this.keyId,parentId:this.id,tab:e},this.$slots))])])}};function ce(){return{codeHtml:`<a-tabs
  :data="data1"
  active-tab-id="3"
  key-id="id"
></a-tabs>
<a-tabs
  :active-tab-id="2"
  :data="data2"
  class="a_mt_3"
></a-tabs>`}}function ie(){return{codeJs:`import ATabs from "aloha-vue/src/ATabs/ATabs";
    
export default {
  name: "PageTabsActiveTabId",
  components: {
    ATabs,
  },
  setup() {
    const data1 = [
      {
        label: "_A_TABS_TAB_1_",
        content: "_A_TABS_CONTENT_1_",
        id: "1",
      },
      {
        label: "_A_TABS_TAB_2_",
        content: "_A_TABS_CONTENT_2_",
        id: "2",
      },
      {
        label: "_A_TABS_TAB_3_",
        content: "_A_TABS_CONTENT_3_",
        id: "3",
      },
      {
        label: "_A_TABS_TAB_4_",
        content: "_A_TABS_CONTENT_4_",
        id: "4",
      },
    ];
    
    const data2 = [
      {
        label: "_A_TABS_TAB_1_",
        content: "_A_TABS_CONTENT_1_",
      },
      {
        label: "_A_TABS_TAB_2_",
        content: "_A_TABS_CONTENT_2_",
      },
      {
        label: "_A_TABS_TAB_3_",
        content: "_A_TABS_CONTENT_3_",
      },
      {
        label: "_A_TABS_TAB_4_",
        content: "_A_TABS_CONTENT_4_",
      },
    ];
    
    return {
      data1,
      data2,
    };
  },
};`}}const Te={name:"PageTabsActiveTabId",components:{AlohaExample:p,ATabs:B},setup(){const e=[{label:"_A_TABS_TAB_1_",content:"_A_TABS_CONTENT_1_",id:"1"},{label:"_A_TABS_TAB_2_",content:"_A_TABS_CONTENT_2_",id:"2"},{label:"_A_TABS_TAB_3_",content:"_A_TABS_CONTENT_3_",id:"3"},{label:"_A_TABS_TAB_4_",content:"_A_TABS_CONTENT_4_",id:"4"}],t=[{label:"_A_TABS_TAB_1_",content:"_A_TABS_CONTENT_1_"},{label:"_A_TABS_TAB_2_",content:"_A_TABS_CONTENT_2_"},{label:"_A_TABS_TAB_3_",content:"_A_TABS_CONTENT_3_"},{label:"_A_TABS_TAB_4_",content:"_A_TABS_CONTENT_4_"}],{codeHtml:a}=ce(),{codeJs:l}=ie();return{codeHtml:a,codeJs:l,data1:e,data2:t}}};function Ae(e,t,a,l,c,d){const _=o("a-tabs"),n=o("aloha-example");return m(),u(n,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TABS_GROUP_ACTIVE_TAB_ID_HEADER_",description:"_A_TABS_GROUP_ACTIVE_TAB_ID_DESCRIPTION_",props:["active-tab-id"]},{default:T(()=>[s(_,{data:e.data1,"active-tab-id":"3","key-id":"id"},null,8,["data"]),s(_,{class:"a_mt_3","active-tab-id":2,data:e.data2},null,8,["data"])]),_:1},8,["code-html","code-js"])}const re=b(Te,[["render",Ae]]);function be(){return{codeHtml:`<a-tabs
  :data="data"
></a-tabs>`}}function ue(){return{codeJs:`import ATabs from "aloha-vue/src/ATabs/ATabs";
    
export default {
  name: "PageTabsBasic",
  components: {
    ATabs,
  },
  setup() {
    const data = [
      {
        label: "_A_TABS_TAB_1_",
        content: "_A_TABS_CONTENT_1_",
      },
      {
        label: "_A_TABS_TAB_2_",
        content: "_A_TABS_CONTENT_2_",
      },
      {
        label: "_A_TABS_TAB_3_",
        content: "_A_TABS_CONTENT_3_",
      },
    ];
    
    return {
      data,
    };
  },
};`}}const me={name:"PageTabsBasic",components:{AlohaExample:p,ATabs:B},setup(){const e=[{label:"_A_TABS_TAB_1_",content:"_A_TABS_CONTENT_1_"},{label:"_A_TABS_TAB_2_",content:"_A_TABS_CONTENT_2_"},{label:"_A_TABS_TAB_3_",content:"_A_TABS_CONTENT_3_"}],{codeHtml:t}=be(),{codeJs:a}=ue();return{codeHtml:t,codeJs:a,data:e}}};function pe(e,t,a,l,c,d){const _=o("a-tabs"),n=o("aloha-example");return m(),u(n,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_BASIC_USAGE_",props:["data"]},{default:T(()=>[s(_,{data:e.data},null,8,["data"])]),_:1},8,["code-html","code-js"])}const Be=b(me,[["render",pe]]);function Se(){return{codeHtml:`<a-form
  v-model="model"
  :data="dataForm"
>
  <template
    v-slot:deleteButton
  >
    <div>
      <a-element
        :disabled="!model.deleteTab"
        class="a_btn a_btn_primary"
        text="_A_GLOBAL_DELETE_"
        type="button"
        @click="deleteTab"
      ></a-element>
    </div>
  </template>
  
  <template
    v-slot:deleteButton
  >
    <div>
      <a-element
        :disabled="!model.addTab"
        class="a_btn a_btn_primary"
        text="_A_GLOBAL_ADD_"
        type="button"
        @click="deleteTab"
      ></a-element>
    </div>
  </template>
</a-form>
<a-tabs
  :data="data"
  :disabled="model.disabled"
  :is-boxed="model.isBoxed"
  :is-title-html="model.isTitleHtml"
  :is-vertical="model.isVertical"
  :title-placement="model.titlePlacement"
  key-content="label"
  key-title="label"
></a-tabs>`}}function Ie(){return{codeJs:`import {
  computed,
  ref,
} from "vue";

import AElement from "aloha-vue/src/AElement/AElement";
import AForm from "aloha-vue/src/ui/AForm/AForm";
import ATabs from "aloha-vue/src/ATabs/ATabs";
    
export default {
  name: "PageTabsComplex",
  components: {
    AElement,
    AForm,
    ATabs,
  },
  setup() {
    const data = ref([
      {
        id: 1,
        label: "Lorem",
      },
      {
        id: 2,
        label: "ipsum",
      },
      {
        id: 3,
        label: "dolor",
      },
      {
        id: 4,
        label: "sit",
      },
      {
        id: 5,
        label: "amet",
      },
      {
        id: 6,
        label: "consectetur",
      },
      {
        id: 7,
        label: "adipisicing",
      },
      {
        id: 8,
        label: "elit",
      },
      {
        id: 9,
        label: "Maxime",
      },
      {
        id: 10,
        label: "mollitia",
      },
      {
        id: 11,
        label: "molestiae",
      },
      {
        id: 12,
        label: "quas",
      },
      {
        id: 13,
        label: "vel",
      },
      {
        id: 14,
        label: "sint",
      },
    ]);
    const model = ref({
      disabled: false,
      isBoxed: false,
      isTitleHtml: false,
      isVertical: false,
      titlePlacement: "top",
    });

    const dataForm = computed(() => {
      return [
        {
          id: "disabled",
          label: "_A_TABS_LABEL_DISABLED_",
          type: "switch",
          classColumn: "a_column a_column_6 a_column_12_touch",
        },
        {
          id: "isBoxed",
          label: "_A_TABS_LABEL_IS_BOXED_",
          type: "switch",
          classColumn: "a_column a_column_6 a_column_12_touch",
        },
        {
          id: "isTitleHtml",
          label: "_A_TABS_LABEL_IS_TITLE_HTML_",
          type: "switch",
          classColumn: "a_column a_column_6 a_column_12_touch",
        },
        {
          id: "isVertical",
          label: "_A_TABS_LABEL_IS_VERTICAL_",
          type: "switch",
          classColumn: "a_column a_column_6 a_column_12_touch",
        },
        {
          id: "titlePlacement",
          label: "_A_TABS_LABEL_TITLE_PLACEMENT_",
          type: "select",
          data: placements,
          isDataSimpleArray: true,
          deselectable: false,
          isLabelFloat: false,
        },
        {
          id: "deleteTabs",
          label: "_A_TABS_LABEL_DELETE_TABS_",
          type: "fieldset",
          classColumn: "a_column a_column_6 a_column_12_touch",
          children: [
            {
              id: "deleteTab",
              label: "_A_TABS_TAB_",
              type: "select",
              data: data.value,
              isLabelFloat: false,
              keyLabel: "label",
              keyId: "id",
              search: true,
            },
            {
              type: "template",
              slotName: "deleteButton",
            },
          ],
        },
        {
          id: "addTabs",
          label: "_A_TABS_LABEL_ADD_TABS_",
          type: "fieldset",
          classColumn: "a_column a_column_6 a_column_12_touch",
          children: [
            {
              id: "addTab",
              label: "_A_TABS_TAB_",
              type: "text",
              isLabelFloat: false,
            },
            {
              type: "template",
              slotName: "addButton",
            },
          ],
        },
      ];
    });

    const deleteTab = () => {
      const TAB_INDEX = findIndex(data.value, ["id", model.value.deleteTab]);
      if (TAB_INDEX !== -1) {
        data.value.splice(TAB_INDEX, 1);
      }
      model.value.deleteTab = undefined;
    };

    const addTab = () => {
      const LAST_ID = data.value[data.value.length - 1]?.id || 0;
      data.value.push({
        label: model.value.addTab,
        id: LAST_ID + 1,
      });

      model.value.addTab = undefined;
    };
    
    return {
      addTab,
      data,
      dataForm,
      deleteTab,
      model,
    };
  },
};`}}const fe={name:"PageTabsComplex",components:{AElement:R,AForm:Z,AlohaExample:p,ATabs:B},setup(){const e=L([{id:1,label:"Lorem"},{id:2,label:"ipsum"},{id:3,label:"dolor"},{id:4,label:"sit"},{id:5,label:"amet"},{id:6,label:"consectetur"},{id:7,label:"adipisicing"},{id:8,label:"elit"},{id:9,label:"Maxime"},{id:10,label:"mollitia"},{id:11,label:"molestiae"},{id:12,label:"quas"},{id:13,label:"vel"},{id:14,label:"sint"}]),t=L({disabled:!1,isBoxed:!1,isTitleHtml:!1,isVertical:!1,titlePlacement:"top"}),a=E(()=>[{id:"disabled",label:"_A_TABS_LABEL_DISABLED_",type:"switch",classColumn:"a_column a_column_6 a_column_12_touch"},{id:"isBoxed",label:"_A_TABS_LABEL_IS_BOXED_",type:"switch",classColumn:"a_column a_column_6 a_column_12_touch"},{id:"isTitleHtml",label:"_A_TABS_LABEL_IS_TITLE_HTML_",type:"switch",classColumn:"a_column a_column_6 a_column_12_touch"},{id:"isVertical",label:"_A_TABS_LABEL_IS_VERTICAL_",type:"switch",classColumn:"a_column a_column_6 a_column_12_touch"},{id:"titlePlacement",label:"_A_TABS_LABEL_TITLE_PLACEMENT_",type:"select",data:k,isDataSimpleArray:!0,deselectable:!1,isLabelFloat:!1},{id:"deleteTabs",label:"_A_TABS_LABEL_DELETE_TABS_",type:"fieldset",classColumn:"a_column a_column_6 a_column_12_touch",children:[{id:"deleteTab",label:"_A_TABS_TAB_",type:"select",data:e.value,isLabelFloat:!1,keyLabel:"label",keyId:"id",search:!0},{type:"template",slotName:"deleteButton"}]},{id:"addTabs",label:"_A_TABS_LABEL_ADD_TABS_",type:"fieldset",classColumn:"a_column a_column_6 a_column_12_touch",children:[{id:"addTab",label:"_A_TABS_TAB_",type:"text",isLabelFloat:!1},{type:"template",slotName:"addButton"}]}]),l=()=>{const n=Q(e.value,["id",t.value.deleteTab]);n!==-1&&e.value.splice(n,1),t.value.deleteTab=void 0},c=()=>{var i;const n=((i=e.value[e.value.length-1])==null?void 0:i.id)||0;e.value.push({label:t.value.addTab,id:n+1}),t.value.addTab=void 0},{codeHtml:d}=Se(),{codeJs:_}=Ie();return{addTab:c,codeHtml:d,codeJs:_,data:e,dataForm:a,deleteTab:l,model:t}}};function Ee(e,t,a,l,c,d){const _=o("a-element"),n=o("a-form"),i=o("a-tabs"),S=o("aloha-example");return m(),u(S,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TABS_GROUP_COMPLEX_HEADER_",description:"_A_TABS_GROUP_COMPLEX_DESCRIPTION_"},{default:T(()=>[s(n,{modelValue:e.model,"onUpdate:modelValue":t[0]||(t[0]=h=>e.model=h),data:e.dataForm},{deleteButton:T(()=>[O("div",null,[s(_,{class:"a_btn a_btn_primary",disabled:!e.model.deleteTab,text:"_A_GLOBAL_DELETE_",type:"button",onClick:e.deleteTab},null,8,["disabled","onClick"])])]),addButton:T(()=>[O("div",null,[s(_,{class:"a_btn a_btn_primary",disabled:!e.model.addTab,text:"_A_GLOBAL_ADD_",type:"button",onClick:e.addTab},null,8,["disabled","onClick"])])]),_:1},8,["modelValue","data"]),s(i,{data:e.data,disabled:e.model.disabled,"is-boxed":e.model.isBoxed,"is-title-html":e.model.isTitleHtml,"is-vertical":e.model.isVertical,"title-placement":e.model.titlePlacement,"key-content":"label","key-title":"label"},null,8,["data","disabled","is-boxed","is-title-html","is-vertical","title-placement"])]),_:1},8,["code-html","code-js"])}const he=b(fe,[["render",Ee]]);function Ne(){return{codeHtml:`<a-tabs
  :data="data"
  :disabled="true"
></a-tabs>`}}function ve(){return{codeJs:`import ATabs from "aloha-vue/src/ATabs/ATabs";
    
export default {
  name: "PageTabsDisabled",
  components: {
    ATabs,
  },
  setup() {
    const data = [
      {
        label: "_A_TABS_TAB_1_",
        content: "_A_TABS_CONTENT_1_",
      },
      {
        label: "_A_TABS_TAB_2_",
        content: "_A_TABS_CONTENT_2_",
      },
      {
        label: "_A_TABS_TAB_3_",
        content: "_A_TABS_CONTENT_3_",
      },
    ];
    
    return {
      data,
    };
  },
};`}}const Ce={name:"PageTabsDisabled",components:{AlohaExample:p,ATabs:B},setup(){const e=[{label:"_A_TABS_TAB_1_",content:"_A_TABS_CONTENT_1_"},{label:"_A_TABS_TAB_2_",content:"_A_TABS_CONTENT_2_"},{label:"_A_TABS_TAB_3_",content:"_A_TABS_CONTENT_3_"}],{codeHtml:t}=Ne(),{codeJs:a}=ve();return{codeHtml:t,codeJs:a,data:e}}};function Oe(e,t,a,l,c,d){const _=o("a-tabs"),n=o("aloha-example");return m(),u(n,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TABS_GROUP_DISABLED_HEADER_",description:"_A_TABS_GROUP_DISABLED_DESCRIPTION_",props:["disabled"]},{default:T(()=>[s(_,{data:e.data,disabled:!0},null,8,["data"])]),_:1},8,["code-html","code-js"])}const Pe=b(Ce,[["render",Oe]]);function ye(){return{codeHtml:`<a-tabs
  :data="data"
  key-id="slotTab"
>
  <template
    v-slot:tab1="{ activeTabId, contentId, index, isActive, parentId, tab, tabId }"
  >
    <a-translation
      class="a_mr_2"
      tag="span"
      text="_A_TABS_TAB_"
    ></a-translation>
    <span>{{ index + 1 }}</span>
  </template>
  
  <template
    v-slot:tab2="{ activeTabId, contentId, index, isActive, parentId, tab, tabId }"
  >
    <a-translation
      class="a_mr_2"
      tag="span"
      text="_A_TABS_TAB_"
    ></a-translation>
    <span>{{ index + 1 }}</span>
  </template>
  
  <template
    v-slot:tab3="{ activeTabId, contentId, index, isActive, parentId, tab, tabId }"
  >
    <a-translation
      class="a_mr_2"
      tag="span"
      text="_A_TABS_TAB_"
    ></a-translation>
    <span>{{ index + 1 }}</span>
  </template>
  
  <template
    v-slot:content1="{ activeTabId, contentId, index, isActive, parentId, tab, tabId }"
  >
    <span>{{ tabId }}</span>
  </template>
  
  <template
    v-slot:content2="{ activeTabId, contentId, index, isActive, parentId, tab, tabId }"
  >
    <span>{{ tabId }}</span>
  </template>
  
  <template
    v-slot:content3="{ activeTabId, contentId, index, isActive, parentId, tab, tabId }"
  >
    <span>{{ tabId }}</span>
  </template>
</a-tabs>`}}function ge(){return{codeJs:`import ATabs from "aloha-vue/src/ATabs/ATabs";
import ATranslation from "aloha-vue/src/ATranslation/ATranslation";
    
export default {
  name: "PageTabsDynamicSlots",
  components: {
    ATabs,
    ATranslation,
  },
  setup() {
    const data = [
      {
        slotTab: "tab1",
        slotContent: "content1",
      },
      {
        slotTab: "tab2",
        slotContent: "content2",
      },
      {
        slotTab: "tab3",
        slotContent: "content3",
      },
    ];
    
    return {
      data,
    };
  },
};`}}const Le={name:"PageTabsDynamicSlots",components:{AlohaExample:p,ATabs:B,ATranslation:g},setup(){const e=[{slotTab:"tab1",slotContent:"content1"},{slotTab:"tab2",slotContent:"content2"},{slotTab:"tab3",slotContent:"content3"}],{codeHtml:t}=ye(),{codeJs:a}=ge();return{codeHtml:t,codeJs:a,data:e}}};function $e(e,t,a,l,c,d){const _=o("a-translation"),n=o("a-tabs"),i=o("aloha-example");return m(),u(i,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TABS_GROUP_DYNAMIC_SLOTS_HEADER_",description:"_A_TABS_GROUP_DYNAMIC_SLOTS_DESCRIPTION_",props:["data"],slots:["slotTab","slotContent"]},{default:T(()=>[s(n,{data:e.data,"key-id":"slotTab"},{tab1:T(({activeTabId:S,contentId:h,index:r,isActive:I,parentId:N,tab:v,tabId:f})=>[s(_,{class:"a_mr_2",tag:"span",text:"_A_TABS_TAB_"}),O("span",null,P(r+1),1)]),tab2:T(({activeTabId:S,contentId:h,index:r,isActive:I,parentId:N,tab:v,tabId:f})=>[s(_,{class:"a_mr_2",tag:"span",text:"_A_TABS_TAB_"}),O("span",null,P(r+1),1)]),tab3:T(({activeTabId:S,contentId:h,index:r,isActive:I,parentId:N,tab:v,tabId:f})=>[s(_,{class:"a_mr_2",tag:"span",text:"_A_TABS_TAB_"}),O("span",null,P(r+1),1)]),content1:T(({activeTabId:S,contentId:h,index:r,isActive:I,parentId:N,tab:v,tabId:f})=>[O("span",null,P(f),1)]),content2:T(({activeTabId:S,contentId:h,index:r,isActive:I,parentId:N,tab:v,tabId:f})=>[O("span",null,P(f),1)]),content3:T(({activeTabId:S,contentId:h,index:r,isActive:I,parentId:N,tab:v,tabId:f})=>[O("span",null,P(f),1)]),_:1},8,["data"])]),_:1},8,["code-html","code-js"])}const De=b(Le,[["render",$e]]);function He(){return{codeHtml:`<a-tabs
  :data="data"
  :is-boxed="true"
></a-tabs>
<a-tabs
  :data="data"
  :is-boxed="false"
  class="a_mt_3"
></a-tabs>`}}function ke(){return{codeJs:`import ATabs from "aloha-vue/src/ATabs/ATabs";
    
export default {
  name: "PageTabsIsBoxed",
  components: {
    ATabs,
  },
  setup() {
    const data = [
      {
        label: "_A_TABS_TAB_1_",
        content: "_A_TABS_CONTENT_1_",
      },
      {
        label: "_A_TABS_TAB_2_",
        content: "_A_TABS_CONTENT_2_",
      },
      {
        label: "_A_TABS_TAB_3_",
        content: "_A_TABS_CONTENT_3_",
      },
    ];
    
    return {
      data,
    };
  },
};`}}const Re={name:"PageTabsIsBoxed",components:{AlohaExample:p,ATabs:B},setup(){const e=[{label:"_A_TABS_TAB_1_",content:"_A_TABS_CONTENT_1_"},{label:"_A_TABS_TAB_2_",content:"_A_TABS_CONTENT_2_"},{label:"_A_TABS_TAB_3_",content:"_A_TABS_CONTENT_3_"}],{codeHtml:t}=He(),{codeJs:a}=ke();return{codeHtml:t,codeJs:a,data:e}}};function xe(e,t,a,l,c,d){const _=o("a-tabs"),n=o("aloha-example");return m(),u(n,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TABS_GROUP_IS_BOXED_HEADER_",description:"_A_TABS_GROUP_IS_BOXED_DESCRIPTION_",props:["is-boxed"]},{default:T(()=>[s(_,{data:e.data,"is-boxed":!0},null,8,["data"]),s(_,{class:"a_mt_3",data:e.data,"is-boxed":!1},null,8,["data"])]),_:1},8,["code-html","code-js"])}const Je=b(Re,[["render",xe]]);function qe(){return{codeHtml:`<a-tabs
  :data="data"
  :active-tab-id="activeTabId"
  :is-change-outside="true"
  key-id="id"
  @change="changeTab"
></a-tabs>`}}function Ge(){return{codeJs:`import ATabs from "aloha-vue/src/ATabs/ATabs";
    
export default {
  name: "PageTabsIsChangeOutside",
  components: {
    ATabs,
  },
  setup() {
    const activeTabId = ref("1");
    const data = [
      {
        label: "_A_TABS_TAB_1_",
        content: "_A_TABS_CONTENT_1_",
        id: "1",
      },
      {
        label: "_A_TABS_TAB_2_",
        content: "_A_TABS_CONTENT_2_",
        id: "2",
      },
      {
        label: "_A_TABS_TAB_3_",
        content: "_A_TABS_CONTENT_3_",
        id: "3",
      },
      {
        label: "_A_TABS_TAB_4_",
        content: "_A_TABS_CONTENT_4_",
        id: "4",
      },
    ];

    const changeTab = ({ $event, tab, tabId, index }) => {
      console.log("$event, tab, tabId, index", $event, tab, tabId, index);
      activeTabId.value = tabId;
    };
    
    return {
      activeTabId,
      changeTab,
      data,
    };
  },
};`}}const Ke={name:"PageTabsIsChangeOutside",components:{AlohaExample:p,ATabs:B},setup(){const e=L("1"),t=[{label:"_A_TABS_TAB_1_",content:"_A_TABS_CONTENT_1_",id:"1"},{label:"_A_TABS_TAB_2_",content:"_A_TABS_CONTENT_2_",id:"2"},{label:"_A_TABS_TAB_3_",content:"_A_TABS_CONTENT_3_",id:"3"},{label:"_A_TABS_TAB_4_",content:"_A_TABS_CONTENT_4_",id:"4"}],a=({$event:d,tab:_,tabId:n,index:i})=>{console.log("$event, tab, tabId, index",d,_,n,i),e.value=n},{codeHtml:l}=qe(),{codeJs:c}=Ge();return{activeTabId:e,changeTab:a,codeHtml:l,codeJs:c,data:t}}};function je(e,t,a,l,c,d){const _=o("a-tabs"),n=o("aloha-example");return m(),u(n,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TABS_GROUP_IS_CHANGE_OUTSIDE_HEADER_",description:"_A_TABS_GROUP_IS_CHANGE_OUTSIDE_DESCRIPTION_",props:["is-change-outside","active-tab-id"],emits:["change"]},{default:T(()=>[s(_,{data:e.data,"active-tab-id":e.activeTabId,"is-change-outside":!0,"key-id":"id",onChange:e.changeTab},null,8,["data","active-tab-id","onChange"])]),_:1},8,["code-html","code-js"])}const Ue=b(Ke,[["render",je]]);function Fe(){return{codeHtml:`<a-tabs
  :data="data"
  :is-vertical="true"
></a-tabs>
<a-tabs
  :data="data"
  :is-boxed="true"
  :is-vertical="true"
  class="a_mt_3"
></a-tabs>
<a-tabs
  :data="data"
  :is-vertical="false"
  class="a_mt_3"
></a-tabs>`}}function Ve(){return{codeJs:`import ATabs from "aloha-vue/src/ATabs/ATabs";
    
export default {
  name: "PageTabsIsVertical",
  components: {
    ATabs,
  },
  setup() {
    const data = [
      {
        label: "_A_TABS_TAB_1_",
        content: "_A_TABS_CONTENT_1_",
      },
      {
        label: "_A_TABS_TAB_2_",
        content: "_A_TABS_CONTENT_2_",
      },
      {
        label: "_A_TABS_TAB_3_",
        content: "_A_TABS_CONTENT_3_",
      },
    ];
    
    return {
      data,
    };
  },
};`}}const Ye={name:"PageTabsIsVertical",components:{AlohaExample:p,ATabs:B},setup(){const e=[{label:"_A_TABS_TAB_1_",content:"_A_TABS_CONTENT_1_"},{label:"_A_TABS_TAB_2_",content:"_A_TABS_CONTENT_2_"},{label:"_A_TABS_TAB_3_",content:"_A_TABS_CONTENT_3_"}],{codeHtml:t}=Fe(),{codeJs:a}=Ve();return{codeHtml:t,codeJs:a,data:e}}};function Me(e,t,a,l,c,d){const _=o("a-tabs"),n=o("aloha-example");return m(),u(n,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TABS_GROUP_IS_VERTICAL_HEADER_",description:"_A_TABS_GROUP_IS_VERTICAL_DESCRIPTION_",props:["is-vertical"]},{default:T(()=>[s(_,{data:e.data,"is-vertical":!0},null,8,["data"]),s(_,{class:"a_mt_3",data:e.data,"is-boxed":!0,"is-vertical":!0},null,8,["data"]),s(_,{class:"a_mt_3",data:e.data,"is-vertical":!1},null,8,["data"])]),_:1},8,["code-html","code-js"])}const we=b(Ye,[["render",Me]]);function Xe(){return{codeHtml:`<a-tabs
  :data="data"
  key-active="active"
></a-tabs>`}}function ze(){return{codeJs:`import ATabs from "aloha-vue/src/ATabs/ATabs";
    
export default {
  name: "PageTabsKeyActive",
  components: {
    ATabs,
  },
  setup() {
    const data = [
      {
        label: "_A_TABS_TAB_1_",
        content: "_A_TABS_CONTENT_1_",
      },
      {
        label: "_A_TABS_TAB_2_",
        content: "_A_TABS_CONTENT_2_",
      },
      {
        label: "_A_TABS_TAB_3_",
        content: "_A_TABS_CONTENT_3_",
        active: true,
      },
      {
        label: "_A_TABS_TAB_4_",
        content: "_A_TABS_CONTENT_4_",
      },
    ];
    
    return {
      data,
    };
  },
};`}}const Qe={name:"PageTabsKeyActive",components:{AlohaExample:p,ATabs:B},setup(){const e=[{label:"_A_TABS_TAB_1_",content:"_A_TABS_CONTENT_1_"},{label:"_A_TABS_TAB_2_",content:"_A_TABS_CONTENT_2_"},{label:"_A_TABS_TAB_3_",content:"_A_TABS_CONTENT_3_",active:!0},{label:"_A_TABS_TAB_4_",content:"_A_TABS_CONTENT_4_"}],{codeHtml:t}=Xe(),{codeJs:a}=ze();return{codeHtml:t,codeJs:a,data:e}}};function We(e,t,a,l,c,d){const _=o("a-tabs"),n=o("aloha-example");return m(),u(n,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TABS_GROUP_KEY_ACTIVE_HEADER_",description:"_A_TABS_GROUP_KEY_ACTIVE_DESCRIPTION_",props:["key-active"]},{default:T(()=>[s(_,{data:e.data,"key-active":"active"},null,8,["data"])]),_:1},8,["code-html","code-js"])}const Ze=b(Qe,[["render",We]]);function et(){return{codeHtml:`<a-tabs
  :data="data"
  key-content="aloha"
></a-tabs>`}}function tt(){return{codeJs:`import ATabs from "aloha-vue/src/ATabs/ATabs";
    
export default {
  name: "PageTabsKeyContent",
  components: {
    ATabs,
  },
  setup() {
    const data = [
      {
        label: "_A_TABS_TAB_1_",
        aloha: "<strong>_A_TABS_CONTENT_1_</strong>",
      },
      {
        label: "_A_TABS_TAB_2_",
        aloha: "<strong>_A_TABS_CONTENT_2_</strong>",
      },
      {
        label: "_A_TABS_TAB_3_",
        aloha: "<strong>_A_TABS_CONTENT_3_</strong>",
      },
    ];
    
    return {
      data,
    };
  },
};`}}const at={name:"PageTabsKeyContent",components:{AlohaExample:p,ATabs:B},setup(){const e=[{label:"_A_TABS_TAB_1_",aloha:"<strong>_A_TABS_CONTENT_1_</strong>"},{label:"_A_TABS_TAB_2_",aloha:"<strong>_A_TABS_CONTENT_2_</strong>"},{label:"_A_TABS_TAB_3_",aloha:"<strong>_A_TABS_CONTENT_3_</strong>"}],{codeHtml:t}=et(),{codeJs:a}=tt();return{codeHtml:t,codeJs:a,data:e}}};function _t(e,t,a,l,c,d){const _=o("a-tabs"),n=o("aloha-example");return m(),u(n,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TABS_GROUP_KEY_CONTENT_HEADER_",description:"_A_TABS_GROUP_KEY_CONTENT_DESCRIPTION_",props:["key-content"]},{default:T(()=>[s(_,{data:e.data,"key-content":"aloha"},null,8,["data"])]),_:1},8,["code-html","code-js"])}const nt=b(at,[["render",_t]]);function ot(){return{codeHtml:`<a-tabs
  :data="data"
  key-disabled="disabled"
></a-tabs>`}}function st(){return{codeJs:`import ATabs from "aloha-vue/src/ATabs/ATabs";
    
export default {
  name: "PageTabsKeyDisabled",
  components: {
    ATabs,
  },
  setup() {
    const data = [
      {
        label: "_A_TABS_TAB_1_",
        content: "_A_TABS_CONTENT_1_",
        disabled: true,
      },
      {
        label: "_A_TABS_TAB_2_",
        content: "_A_TABS_CONTENT_2_",
      },
      {
        label: "_A_TABS_TAB_3_",
        content: "_A_TABS_CONTENT_3_",
        disabled: true,
      },
      {
        label: "_A_TABS_TAB_4_",
        content: "_A_TABS_CONTENT_4_",
        disabled: false,
      },
    ];
    
    return {
      data,
    };
  },
};`}}const lt={name:"PageTabsKeyDisabled",components:{AlohaExample:p,ATabs:B},setup(){const e=[{label:"_A_TABS_TAB_1_",content:"_A_TABS_CONTENT_1_",disabled:!0},{label:"_A_TABS_TAB_2_",content:"_A_TABS_CONTENT_2_"},{label:"_A_TABS_TAB_3_",content:"_A_TABS_CONTENT_3_",disabled:!0},{label:"_A_TABS_TAB_4_",content:"_A_TABS_CONTENT_4_",disabled:!1}],{codeHtml:t}=ot(),{codeJs:a}=st();return{codeHtml:t,codeJs:a,data:e}}};function dt(e,t,a,l,c,d){const _=o("a-tabs"),n=o("aloha-example");return m(),u(n,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TABS_GROUP_KEY_DISABLED_HEADER_",description:"_A_TABS_GROUP_KEY_DISABLED_DESCRIPTION_",props:["key-disabled"]},{default:T(()=>[s(_,{data:e.data,"key-disabled":"disabled"},null,8,["data"])]),_:1},8,["code-html","code-js"])}const ct=b(lt,[["render",dt]]);function it(){return{codeHtml:`<a-tabs
  :data="data"
  key-id="id"
></a-tabs>`}}function Tt(){return{codeJs:`import ATabs from "aloha-vue/src/ATabs/ATabs";
    
export default {
  name: "PageTabsKeyId",
  components: {
    ATabs,
  },
  setup() {
    const data = [
      {
        label: "_A_TABS_TAB_1_",
        content: "_A_TABS_CONTENT_1_",
        id: "1",
      },
      {
        label: "_A_TABS_TAB_2_",
        content: "_A_TABS_CONTENT_2_",
        id: "2",
      },
      {
        label: "_A_TABS_TAB_3_",
        content: "_A_TABS_CONTENT_3_",
        id: "3",
      },
    ];
    
    return {
      data,
    };
  },
};`}}const At={name:"PageTabsKeyId",components:{AlohaExample:p,ATabs:B},setup(){const e=[{label:"_A_TABS_TAB_1_",content:"_A_TABS_CONTENT_1_",id:"1"},{label:"_A_TABS_TAB_2_",content:"_A_TABS_CONTENT_2_",id:"2"},{label:"_A_TABS_TAB_3_",content:"_A_TABS_CONTENT_3_",id:"3"}],{codeHtml:t}=it(),{codeJs:a}=Tt();return{codeHtml:t,codeJs:a,data:e}}};function rt(e,t,a,l,c,d){const _=o("a-tabs"),n=o("aloha-example");return m(),u(n,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TABS_GROUP_KEY_ID_HEADER_",description:"_A_TABS_GROUP_KEY_ID_DESCRIPTION_",props:["key-id"]},{default:T(()=>[s(_,{data:e.data,"key-id":"id"},null,8,["data"])]),_:1},8,["code-html","code-js"])}const bt=b(At,[["render",rt]]);function ut(){return{codeHtml:`<a-tabs
  :data="data"
  key-label="name"
></a-tabs>`}}function mt(){return{codeJs:`import ATabs from "aloha-vue/src/ATabs/ATabs";
    
export default {
  name: "PageTabsKeyLabel",
  components: {
    ATabs,
  },
  setup() {
    const data = [
      {
        name: "_A_TABS_TAB_1_",
        content: "_A_TABS_CONTENT_1_",
      },
      {
        name: "_A_TABS_TAB_2_",
        content: "_A_TABS_CONTENT_2_",
      },
      {
        name: "_A_TABS_TAB_3_",
        content: "_A_TABS_CONTENT_3_",
      },
    ];
    
    return {
      data,
    };
  },
};`}}const pt={name:"PageTabsKeyLabel",components:{AlohaExample:p,ATabs:B},setup(){const e=[{name:"_A_TABS_TAB_1_",content:"_A_TABS_CONTENT_1_"},{name:"_A_TABS_TAB_2_",content:"_A_TABS_CONTENT_2_"},{name:"_A_TABS_TAB_3_",content:"_A_TABS_CONTENT_3_"}],{codeHtml:t}=ut(),{codeJs:a}=mt();return{codeHtml:t,codeJs:a,data:e}}};function Bt(e,t,a,l,c,d){const _=o("a-tabs"),n=o("aloha-example");return m(),u(n,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TABS_GROUP_KEY_LABEL_HEADER_",description:"_A_TABS_GROUP_KEY_LABEL_DESCRIPTION_",props:["key-label"]},{default:T(()=>[s(_,{data:e.data,"key-label":"name"},null,8,["data"])]),_:1},8,["code-html","code-js"])}const St=b(pt,[["render",Bt]]);function It(){return{codeHtml:`<a-tabs
  :data="data"
  key-title="label"
></a-tabs>`}}function ft(){return{codeJs:`import ATabs from "aloha-vue/src/ATabs/ATabs";
    
export default {
  name: "PageTabsKeyTitle",
  components: {
    ATabs,
  },
  setup() {
    const data = [
      {
        label: "_A_TABS_TAB_1_",
        content: "_A_TABS_CONTENT_1_",
      },
      {
        label: "_A_TABS_TAB_2_",
        content: "_A_TABS_CONTENT_2_",
      },
      {
        label: "_A_TABS_TAB_3_",
        content: "_A_TABS_CONTENT_3_",
      },
    ];
    
    return {
      data,
    };
  },
};`}}const Et={name:"PageTabsKeyTitle",components:{AlohaExample:p,ATabs:B},setup(){const e=[{label:"_A_TABS_TAB_1_",content:"_A_TABS_CONTENT_1_"},{label:"_A_TABS_TAB_2_",content:"_A_TABS_CONTENT_2_"},{label:"_A_TABS_TAB_3_",content:"_A_TABS_CONTENT_3_"}],{codeHtml:t}=It(),{codeJs:a}=ft();return{codeHtml:t,codeJs:a,data:e}}};function ht(e,t,a,l,c,d){const _=o("a-tabs"),n=o("aloha-example");return m(),u(n,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TABS_GROUP_KEY_TITLE_HEADER_",description:"_A_TABS_GROUP_KEY_TITLE_DESCRIPTION_",props:["key-title"]},{default:T(()=>[s(_,{data:e.data,"key-title":"label"},null,8,["data"])]),_:1},8,["code-html","code-js"])}const Nt=b(Et,[["render",ht]]);function vt(){return{codeHtml:`<a-tabs
  :data="data"
  key-id="id"
>
  <template
    v-slot:tab="{ activeTabId, contentId, index, isActive, parentId, tab, tabId }"
  >
    <span>{{ index + 1 }}</span>
    <a-element
      :icon-left="tab.icon"
      class="a_ml_2"
      type="text"
    ></a-element>
    <a-translation
      :text="tab.name"
      class="a_ml_2"
      tag="span"
    ></a-translation>
  </template>
  
  <template
    v-slot:content="{ activeTabId, contentId, index, isActive, parentId, tab, tabId }"
  >
    <span>{{ tab.content }}</span>
  </template>
</a-tabs>`}}function Ct(){return{codeJs:`import AElement from "aloha-vue/src/AElement/AElement";
import ATabs from "aloha-vue/src/ATabs/ATabs";
import ATranslation from "aloha-vue/src/ATranslation/ATranslation";
    
export default {
  name: "PageTabsStaticSlots",
  components: {
    AElement,
    ATabs,
    ATranslation,
  },
  setup() {
    const data = [
      {
        id: "1",
        name: "_A_TABS_TAB_1_",
        icon: "Gear",
        content: "_A_TABS_CONTENT_1_",
      },
      {
        id: "2",
        name: "_A_TABS_TAB_2_",
        icon: "CodeSquare",
        content: "_A_TABS_CONTENT_2_",
      },
      {
        id: "3",
        name: "_A_TABS_TAB_3_",
        icon: "EjectFill",
        content: "_A_TABS_CONTENT_3_",
      },
      {
        id: "4",
        name: "_A_TABS_TAB_4_",
        icon: "InputCursor",
        content: "_A_TABS_CONTENT_4_",
      },
    ];
    
    return {
      data,
    };
  },
};`}}const Ot={name:"PageTabsStaticSlots",components:{AElement:R,AlohaExample:p,ATabs:B,ATranslation:g},setup(){const e=[{id:"1",name:"_A_TABS_TAB_1_",icon:"Gear",content:"_A_TABS_CONTENT_1_"},{id:"2",name:"_A_TABS_TAB_2_",icon:"CodeSquare",content:"_A_TABS_CONTENT_2_"},{id:"3",name:"_A_TABS_TAB_3_",icon:"EjectFill",content:"_A_TABS_CONTENT_3_"},{id:"4",name:"_A_TABS_TAB_4_",icon:"InputCursor",content:"_A_TABS_CONTENT_4_"}],{codeHtml:t}=vt(),{codeJs:a}=Ct();return{codeHtml:t,codeJs:a,data:e}}};function Pt(e,t,a,l,c,d){const _=o("a-element"),n=o("a-translation"),i=o("a-tabs"),S=o("aloha-example");return m(),u(S,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TABS_GROUP_STATIC_SLOTS_HEADER_",description:"_A_TABS_GROUP_STATIC_SLOTS_DESCRIPTION_",props:["data"],slots:["tab","content"]},{default:T(()=>[s(i,{data:e.data,"key-id":"id"},{tab:T(({activeTabId:h,contentId:r,index:I,isActive:N,parentId:v,tab:f,tabId:$})=>[O("span",null,P(I+1),1),s(_,{class:"a_ml_2","icon-left":f.icon,type:"text"},null,8,["icon-left"]),s(n,{class:"a_ml_2",text:f.name,tag:"span"},null,8,["text"])]),content:T(({activeTabId:h,contentId:r,index:I,isActive:N,parentId:v,tab:f,tabId:$})=>[O("span",null,P(f.content),1)]),_:1},8,["data"])]),_:1},8,["code-html","code-js"])}const yt=b(Ot,[["render",Pt]]);function gt(){return{codeHtml:`<a-tabs
  :data="data"
  :is-title-html="true"
  key-title="label"
></a-tabs>`}}function Lt(){return{codeJs:`import ATabs from "aloha-vue/src/ATabs/ATabs";
    
export default {
  name: "PageTabsTitleHtml",
  components: {
    ATabs,
  },
  setup() {
    const data = [
      {
        label: "_A_TABS_TAB_1_",
        content: "_A_TABS_CONTENT_1_",
      },
      {
        label: "_A_TABS_TAB_2_",
        content: "_A_TABS_CONTENT_2_",
      },
      {
        label: "_A_TABS_TAB_3_",
        content: "_A_TABS_CONTENT_3_",
      },
    ];
    
    return {
      data,
    };
  },
};`}}const $t={name:"PageTabsTitleHtml",components:{AlohaExample:p,ATabs:B},setup(){const e=[{label:"_A_TABS_TAB_1_",content:"_A_TABS_CONTENT_1_"},{label:"_A_TABS_TAB_2_",content:"_A_TABS_CONTENT_2_"},{label:"_A_TABS_TAB_3_",content:"_A_TABS_CONTENT_3_"}],{codeHtml:t}=gt(),{codeJs:a}=Lt();return{codeHtml:t,codeJs:a,data:e}}};function Dt(e,t,a,l,c,d){const _=o("a-tabs"),n=o("aloha-example");return m(),u(n,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TABS_GROUP_TITLE_HTML_HEADER_",description:"_A_TABS_GROUP_TITLE_HTML_DESCRIPTION_",props:["is-title-html","key-title"]},{default:T(()=>[s(_,{data:e.data,"is-title-html":!0,"key-title":"label"},null,8,["data"])]),_:1},8,["code-html","code-js"])}const Ht=b($t,[["render",Dt]]);function kt(){return{dataEvents:[{name:"change",description:"_A_TABS_EVENTS_CHANGE_DESCRIPTION_",type:"Function"}]}}function Rt(){const e=E(()=>w({placeholder:"_A_TABS_COMPONENT_NAME_"}));return{pageTitle:E(()=>`ATabs${e.value?` (${e.value})`:""}`)}}function xt(){return{dataProps:[{name:"active-tab-id",description:"_A_TABS_PROPS_ACTIVE_TAB_ID_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"data",description:"_A_TABS_PROPS_DATA_DESCRIPTION_",type:"Array",default:void 0,required:!0},{name:"disabled",description:"_A_TABS_PROPS_DISABLED_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"id",description:"_A_GLOBAL_PROPS_ID_DESCRIPTION_",type:"String",default:'() => uniqueId("a_tabs_")',required:!1},{name:"is-boxed",description:"_A_TABS_PROPS_IS_BOXED_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"is-change-outside",description:"_A_TABS_PROPS_IS_CHANGE_OUTSIDE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"is-title-html",description:"_A_GLOBAL_PROPS_IS_TITLE_HTML_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"is-vertical",description:"_A_TABS_PROPS_IS_VERTICAL_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"key-active",description:"_A_TABS_PROPS_KEY_ACTIVE_DESCRIPTION_",type:"String",default:"active",required:!1},{name:"key-content",description:"_A_TABS_PROPS_KEY_CONTENT_DESCRIPTION_",type:"String",default:"content",required:!1},{name:"key-disabled",description:"_A_TABS_PROPS_KEY_DISABLED_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"key-id",description:"_A_TABS_PROPS_KEY_ID_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"key-label",description:"_A_TABS_PROPS_KEY_LABEL_DESCRIPTION_",type:"String",default:"label",required:!1},{name:"key-title",description:"_A_TABS_PROPS_KEY_TITLE_DESCRIPTION_",type:"String",default:"title",required:!1},{name:"title-placement",description:"_A_GLOBAL_PROPS_TITLE_PLACEMENT_DESCRIPTION_",type:"String",default:"top",required:!1}]}}function Jt(){return{dataSlots:[{name:"content",description:"_A_TABS_SLOTS_CONTENT_DESCRIPTION_"},{name:"slotContent",description:"_A_TABS_SLOTS_SLOT_CONTENT_DESCRIPTION_"},{name:"slotTab",description:"_A_TABS_SLOTS_SLOT_TAB_DESCRIPTION_"},{name:"tab",description:"_A_TABS_SLOTS_TAB_DESCRIPTION_"}]}}const qt={name:"PageTabs",components:{AlohaPage:Y,AlohaTableProps:M,ATranslation:g,PageTabsActiveTabId:re,PageTabsBasic:Be,PageTabsComplex:he,PageTabsDisabled:Pe,PageTabsDynamicSlots:De,PageTabsIsBoxed:Je,PageTabsIsChangeOutside:Ue,PageTabsIsVertical:we,PageTabsKeyActive:Ze,PageTabsKeyContent:nt,PageTabsKeyDisabled:ct,PageTabsKeyId:bt,PageTabsKeyLabel:St,PageTabsKeyTitle:Nt,PageTabsStaticSlots:yt,PageTabsTitleHtml:Ht},setup(){const{pageTitle:e}=Rt(),{dataProps:t}=xt(),{dataEvents:a}=kt(),{dataSlots:l}=Jt();return{dataEvents:a,dataProps:t,dataSlots:l,pageTitle:e}}};function Gt(e,t,a,l,c,d){const _=o("a-translation"),n=o("page-tabs-basic"),i=o("page-tabs-disabled"),S=o("page-tabs-key-disabled"),h=o("page-tabs-key-label"),r=o("page-tabs-key-content"),I=o("page-tabs-key-title"),N=o("page-tabs-title-html"),v=o("page-tabs-is-boxed"),f=o("page-tabs-is-vertical"),$=o("page-tabs-key-id"),q=o("page-tabs-key-active"),G=o("page-tabs-active-tab-id"),K=o("page-tabs-is-change-outside"),j=o("page-tabs-static-slots"),U=o("page-tabs-dynamic-slots"),F=o("page-tabs-complex"),D=o("aloha-table-props"),V=o("aloha-page");return m(),u(V,{"page-title":e.pageTitle},{body:T(()=>[s(_,{tag:"p",html:"_A_TABS_COMPONENT_DESCRIPTION_"}),s(n),s(i),s(S),s(h),s(r),s(I),s(N),s(v),s(f),s($),s(q),s(G),s(K),s(j),s(U),s(F),s(D,{data:e.dataProps},null,8,["data"]),s(D,{"table-label":"Slots",data:e.dataSlots,columns:["name","description"]},null,8,["data"]),s(D,{"table-label":"Events",data:e.dataEvents,columns:["name","type","description"]},null,8,["data"])]),_:1},8,["page-title"])}const ea=b(qt,[["render",Gt]]);export{ea as default};
