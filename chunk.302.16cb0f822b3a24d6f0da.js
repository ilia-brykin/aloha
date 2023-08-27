"use strict";(self.webpackChunkaloha_vue_docs=self.webpackChunkaloha_vue_docs||[]).push([[302],{713:(e,l,a)=>{a.r(l),a.d(l,{default:()=>r});var n=a(2147),t=a(8455),_=a(3403),o=a(1083),d=a(3059);const i={name:"PageTableFiltersExample",components:{AlohaExample:_.Z,ATable:o.Z},setup(){const{codeHtml:e}={codeHtml:'<a-table\n  :columns="columns"\n  :data="data"\n  label="_A_TABLE_GROUP_SIMPLE_LABEL_"\n  key-id="id"\n>\n</a-table>'},{codeJs:l}={codeJs:'import {\n  ref,\n} from "vue";\n\nimport ATable from "aloha-vue/src/ATable/ATable";\n    \nexport default {\n  name: "PageTableSimpleExample",\n  components: {\n    ATable,\n  },\n  setup() {\n     const columns = [\n      {\n        id: "column1",\n        keyLabel: "id",\n        label: "_A_TABLE_COLUMN_1_",\n      },\n      {\n        id: "column2",\n        keyLabel: "aloha",\n        label: "_A_TABLE_COLUMN_2_",\n      },\n      {\n        id: "column3",\n        keyLabel: "aloha",\n        label: "_A_TABLE_COLUMN_3_",\n      },\n      {\n        id: "column4",\n        keyLabel: "aloha",\n        label: "_A_TABLE_COLUMN_4_",\n      },\n      {\n        id: "column5",\n        keyLabel: "aloha",\n        label: "_A_TABLE_COLUMN_5_",\n      },\n    ];\n\n    const data = ref([]);\n\n    const setData = () => {\n      const DATA = [];\n      times(20, item => {\n        DATA.push({\n          id: item,\n          aloha: `aloha ${ item }`,\n        });\n      });\n      data.value = DATA;\n    };\n\n    setData();\n    \n    return {\n      columns,\n      data,\n    };\n  },\n};'},a=(0,n.iH)([]),t=(0,n.iH)({});return(()=>{const e=[];(0,d.times)(20,(l=>{e.push({id:l,aloha:`aloha ${l}`})})),a.value=e})(),{codeHtml:e,codeJs:l,columns:[{id:"column1",keyLabel:"id",label:"_A_TABLE_COLUMN_1_"},{id:"column2",keyLabel:"aloha",label:"_A_TABLE_COLUMN_2_"},{id:"column3",keyLabel:"aloha",label:"_A_TABLE_COLUMN_3_"},{id:"column4",keyLabel:"aloha",label:"_A_TABLE_COLUMN_4_"},{id:"column5",keyLabel:"aloha",label:"_A_TABLE_COLUMN_5_"}],data:a,modelFilters:t,filters:[{type:"text",id:"search",label:"_A_TABLE_FILTER_SEARCH_",main:!0},{type:"text",id:"aloha",label:"_A_TABLE_FILTER_TEXT_",alwaysVisible:!0},{type:"date",id:"date",label:"_A_TABLE_FILTER_DATE_",alwaysVisible:!0}],updateModelFilters:({model:e}={})=>{t.value=(0,d.cloneDeep)(e)}}}};var s=a(1419);const A=(0,s.Z)(i,[["render",function(e,l){const a=(0,n.up)("a-table"),t=(0,n.up)("aloha-example");return(0,n.wg)(),(0,n.j4)(t,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TABLE_GROUP_FILTERS_HEADER_",description:"_A_TABLE_GROUP_FILTERS_DESCRIPTION_",props:"filters"},{default:(0,n.w5)((()=>[(0,n._)("div",null,[(0,n.Wm)(a,{columns:e.columns,data:e.data,label:"_A_TABLE_GROUP_FILTERS_LABEL_","key-id":"id",filters:e.filters,"model-filters":e.modelFilters,onUpdateModelFilters:e.updateModelFilters},null,8,["columns","data","filters","model-filters","onUpdateModelFilters"])])])),_:1},8,["code-html","code-js"])}]]),m={name:"PageTableFiltersDefaultHide",components:{AlohaExample:_.Z,ATable:o.Z},setup(){const{codeHtml:e}={codeHtml:'<a-table\n  :columns="columns"\n  :data="data"\n  label="_A_TABLE_GROUP_FILTERS_LABEL_"\n  key-id="id"\n  :filters="filters"\n  :model-filters="modelFilters"\n  @update-model-filters="updateModelFilters"\n>\n</a-table>'},{codeJs:l}={codeJs:'import {\n  ref,\n} from "vue";\n\nimport ATable from "aloha-vue/src/ATable/ATable";\n    \nexport default {\n  name: "PageTableFiltersDefaultHide",\n  components: {\n    ATable,\n  },\n  setup() {\n     const columns = [\n      {\n        id: "column1",\n        keyLabel: "id",\n        label: "_A_TABLE_COLUMN_1_",\n      },\n      {\n        id: "column2",\n        keyLabel: "aloha",\n        label: "_A_TABLE_COLUMN_2_",\n      },\n      {\n        id: "column3",\n        keyLabel: "aloha",\n        label: "_A_TABLE_COLUMN_3_",\n      },\n      {\n        id: "column4",\n        keyLabel: "aloha",\n        label: "_A_TABLE_COLUMN_4_",\n      },\n      {\n        id: "column5",\n        keyLabel: "aloha",\n        label: "_A_TABLE_COLUMN_5_",\n      },\n    ];\n    const filters = [\n      {\n        type: "text",\n        id: "search",\n        label: "_A_TABLE_FILTER_SEARCH_",\n        main: true,\n      },\n      {\n        type: "text",\n        id: "aloha",\n        label: "_A_TABLE_FILTER_TEXT_",\n        alwaysVisible: true,\n      },\n      {\n        type: "date",\n        id: "date",\n        label: "_A_TABLE_FILTER_DATE_",\n      },\n      {\n        type: "text",\n        id: "aloha1",\n        label: "_A_TABLE_FILTER_EXTRA_",\n      },\n    ];\n    const data = ref([]);\n    const modelFilters = ref({});\n\n    const updateModelFilters = ({ model } = {}) => {\n      modelFilters.value = cloneDeep(model);\n    };\n\n    const setData = () => {\n      const DATA = [];\n      times(20, item => {\n        DATA.push({\n          id: item,\n          aloha: `aloha ${ item }`,\n        });\n      });\n      data.value = DATA;\n    };\n\n    setData();\n    \n    return {\n      columns,\n      data,\n      modelFilters,\n      filters,\n      updateModelFilters,\n    };\n  },\n};'},a=(0,n.iH)([]),t=(0,n.iH)({});return(()=>{const e=[];(0,d.times)(20,(l=>{e.push({id:l,aloha:`aloha ${l}`})})),a.value=e})(),{codeHtml:e,codeJs:l,columns:[{id:"column1",keyLabel:"id",label:"_A_TABLE_COLUMN_1_"},{id:"column2",keyLabel:"aloha",label:"_A_TABLE_COLUMN_2_"},{id:"column3",keyLabel:"aloha",label:"_A_TABLE_COLUMN_3_"},{id:"column4",keyLabel:"aloha",label:"_A_TABLE_COLUMN_4_"},{id:"column5",keyLabel:"aloha",label:"_A_TABLE_COLUMN_5_"}],data:a,modelFilters:t,filters:[{type:"text",id:"search",label:"_A_TABLE_FILTER_SEARCH_",main:!0},{type:"text",id:"aloha",label:"_A_TABLE_FILTER_TEXT_",alwaysVisible:!0},{type:"date",id:"date",label:"_A_TABLE_FILTER_DATE_"},{type:"text",id:"aloha1",label:"_A_TABLE_FILTER_EXTRA_"}],updateModelFilters:({model:e}={})=>{t.value=(0,d.cloneDeep)(e)}}}},L=(0,s.Z)(m,[["render",function(e,l){const a=(0,n.up)("a-table"),t=(0,n.up)("aloha-example");return(0,n.wg)(),(0,n.j4)(t,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TABLE_GROUP_FILTERS_DEFAULT_HIDE_HEADER_",description:"_A_TABLE_GROUP_FILTERS_DEFAULT_HIDE_DESCRIPTION_",props:"filters"},{default:(0,n.w5)((()=>[(0,n._)("div",null,[(0,n.Wm)(a,{columns:e.columns,data:e.data,label:"_A_TABLE_GROUP_FILTERS_LABEL_","key-id":"id",filters:e.filters,"model-filters":e.modelFilters,onUpdateModelFilters:e.updateModelFilters},null,8,["columns","data","filters","model-filters","onUpdateModelFilters"])])])),_:1},8,["code-html","code-js"])}]]);var c=a(8405);const u={name:"PageTableFilters",components:{AlohaPage:t.Z,PageTableFiltersExample:A,PageTableFiltersDefaultHide:L},setup(){const{pageTitle:e}=function(){const e=(0,n.Fl)((()=>(0,c.Gd)({placeholder:"_A_TABLE_FILTERS_"})));return{pageTitle:(0,n.Fl)((()=>`ATable ${e.value}`))}}();return{pageTitle:e}}},r=(0,s.Z)(u,[["render",function(e,l){const a=(0,n.up)("page-table-filters-example"),t=(0,n.up)("page-table-filters-default-hide"),_=(0,n.up)("aloha-page");return(0,n.wg)(),(0,n.j4)(_,{"page-title":e.pageTitle},{body:(0,n.w5)((()=>[(0,n.Wm)(a),(0,n.Wm)(t)])),_:1},8,["page-title"])}]])}}]);
//# sourceMappingURL=chunk.302.16cb0f822b3a24d6f0da.js.map