import{A as L,a as g}from"./chunk.AlohaExample.DQald-L_.js";import{ah as p,aM as B}from"./bundle.index.D1OA29U_.js";import{Z as T}from"./chunk.vendor-lodash.DHCI5OYQ.js";import{bf as h,bc as A,aQ as u,br as r,bi as n,aP as m,aV as d,bn as E,aN as b}from"./chunk.vendor.B7xidcyX.js";import{c as P}from"./chunk.ATable.Cjx2y3oc.js";import"./chunk.APageTabTitle.BjEZe9gt.js";import"./chunk.AlohaHighlightjs.5M2Lhx9-.js";import"./chunk.translations-ar.ChuYlDzT.js";import"./chunk.translations-de.6pPcJRrO.js";import"./chunk.translations-en.DT3q5fLP.js";import"./chunk.translations-es.B6sZfxDK.js";import"./chunk.translations-fr.ecArFLfS.js";import"./chunk.translations-hr.DhAqHXEL.js";import"./chunk.translations-it.DjP2RsZa.js";import"./chunk.translations-ru.L_V4Dr6V.js";function v(){return{codeHtml:`<a-table
  :columns="columns"
  :data="data"
  label="_A_TABLE_GROUP_SIMPLE_LABEL_"
  key-id="id"
>
</a-table>`}}function f(){return{codeJs:`import {
  ref,
} from "vue";

import { ATable } from "aloha-vue";
    
export default {
  name: "PageTablePreviewRight",
  components: {
    ATable,
  },
  setup() {
     const columns = [
      {
        id: "column1",
        keyLabel: "id",
        label: "_A_TABLE_COLUMN_1_",
      },
      {
        id: "column2",
        keyLabel: "aloha",
        label: "_A_TABLE_COLUMN_2_",
      },
      {
        id: "column3",
        keyLabel: "aloha",
        label: "_A_TABLE_COLUMN_3_",
      },
      {
        id: "column4",
        keyLabel: "aloha",
        label: "_A_TABLE_COLUMN_4_",
      },
      {
        id: "column5",
        keyLabel: "aloha",
        label: "_A_TABLE_COLUMN_5_",
      },
    ];

    const data = ref([]);

    const setData = () => {
      const DATA = [];
      times(20, item => {
        DATA.push({
          id: item,
          aloha: \`aloha \${ item }\`,
        });
      });
      data.value = DATA;
    };

    setData();
    
    return {
      columns,
      data,
    };
  },
};`}}const O={name:"PageTablePreviewRight",components:{AlohaExample:L,ATable:P},setup(){const{codeHtml:e}=v(),{codeJs:t}=f(),i=[{id:"column1",keyLabel:"id",label:"_A_TABLE_COLUMN_1_"},{id:"column2",keyLabel:"aloha",label:"_A_TABLE_COLUMN_2_"},{id:"column3",keyLabel:"aloha",label:"_A_TABLE_COLUMN_3_"},{id:"column4",keyLabel:"aloha",label:"_A_TABLE_COLUMN_4_"},{id:"column5",keyLabel:"aloha",label:"_A_TABLE_COLUMN_5_"}],o=h([]),c=()=>{const a=[];T(20,l=>{a.push({id:l,aloha:`aloha ${l}`})}),o.value=a},_=({row:a})=>a.id===2||a.id===4;return c(),{codeHtml:e,codeJs:t,columns:i,data:o,disableRowPreview:_}}};function N(e,t,i,o,c,_){const a=n("a-table"),l=n("aloha-example");return A(),u(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TABLE_GROUP_PREVIEW_RIGHT_HEADER_",description:"_A_TABLE_GROUP_PREVIEW_RIGHT_DESCRIPTION_"},{default:r(()=>[m("div",null,[d(a,{columns:e.columns,data:e.data,label:"_A_TABLE_GROUP_SIMPLE_LABEL_","key-id":"id",preview:"right","disabled-preview-row-callback":e.disableRowPreview},{preview:r(s=>[m("pre",null,E(s),1)]),_:1},8,["columns","data","disabled-preview-row-callback"])])]),_:1},8,["code-html","code-js"])}const k=p(O,[["render",N]]);function R(){return{codeHtml:`<a-table
  :columns="columns"
  :data="data"
  label="_A_TABLE_GROUP_SIMPLE_LABEL_"
  key-id="id"
>
</a-table>`}}function U(){return{codeJs:`import {
  ref,
} from "vue";

import { ATable } from "aloha-vue";
    
export default {
  name: "PageTablePreviewRightPagination",
  components: {
    ATable,
  },
  setup() {
     const columns = [
      {
        id: "column1",
        keyLabel: "id",
        label: "_A_TABLE_COLUMN_1_",
      },
      {
        id: "column2",
        keyLabel: "aloha",
        label: "_A_TABLE_COLUMN_2_",
      },
      {
        id: "column3",
        keyLabel: "aloha",
        label: "_A_TABLE_COLUMN_3_",
      },
      {
        id: "column4",
        keyLabel: "aloha",
        label: "_A_TABLE_COLUMN_4_",
      },
      {
        id: "column5",
        keyLabel: "aloha",
        label: "_A_TABLE_COLUMN_5_",
      },
    ];

    const data = ref([]);

    const setData = () => {
      const DATA = [];
      times(20, item => {
        DATA.push({
          id: item,
          aloha: \`aloha \${ item }\`,
        });
      });
      data.value = DATA;
    };

    setData();
    
    return {
      columns,
      data,
    };
  },
};`}}const y={name:"PageTablePreviewRight",components:{AlohaExample:L,ATable:P},setup(){const{codeHtml:e}=R(),{codeJs:t}=U(),i=[{id:"column1",keyLabel:"id",label:"_A_TABLE_COLUMN_1_"},{id:"column2",keyLabel:"aloha",label:"_A_TABLE_COLUMN_2_"},{id:"column3",keyLabel:"aloha",label:"_A_TABLE_COLUMN_3_"},{id:"column4",keyLabel:"aloha",label:"_A_TABLE_COLUMN_4_"},{id:"column5",keyLabel:"aloha",label:"_A_TABLE_COLUMN_5_"}],o=h([]);return(()=>{const _=[];T(20,a=>{_.push({id:a,aloha:`aloha ${a}`})}),o.value=_})(),{codeHtml:e,codeJs:t,columns:i,data:o}}};function I(e,t,i,o,c,_){const a=n("a-table"),l=n("aloha-example");return A(),u(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TABLE_GROUP_PREVIEW_RIGHT_PAGINATION_HEADER_",description:"_A_TABLE_GROUP_PREVIEW_RIGHT_PAGINATION_DESCRIPTION_",props:["preview","pagination.use"]},{default:r(()=>[m("div",null,[d(a,{columns:e.columns,data:e.data,label:"_A_TABLE_GROUP_SIMPLE_LABEL_","key-id":"id",preview:"right",pagination:{use:!0}},{preview:r(s=>[m("pre",null,E(s),1)]),_:1},8,["columns","data"])])]),_:1},8,["code-html","code-js"])}const M=p(y,[["render",I]]);function w(){const e=b(()=>B({placeholder:"_A_TABLE_SIMPLE_"}));return{pageTitle:b(()=>`ATable ${e.value}`)}}const C={name:"PageTablePreview",components:{AlohaPage:g,PageTablePreviewRight:k,PageTablePreviewRightPagination:M},setup(){const{pageTitle:e}=w();return{pageTitle:e}}};function $(e,t,i,o,c,_){const a=n("page-table-preview-right"),l=n("page-table-preview-right-pagination"),s=n("aloha-page");return A(),u(s,{"page-title":e.pageTitle},{body:r(()=>[d(a),d(l)]),_:1},8,["page-title"])}const X=p(C,[["render",$]]);export{X as default};
