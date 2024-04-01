"use strict";(self.webpackChunkaloha_vue_docs=self.webpackChunkaloha_vue_docs||[]).push([[2410],{5272:(a,l,e)=>{e.r(l),e.d(l,{default:()=>G});var o=e(6365);const n={class:"a_columns a_columns_count_12"},d={class:"a_column a_column_6"},t=(0,o.Lk)("br",null,null,-1),_=["innerHTML"],h=["innerHTML"],s=(0,o.Lk)("br",null,null,-1),r=["innerHTML"],c=["innerHTML"];var i=e(8310),A=e(635),m=e(7791),u=e(816),b=e(883);const E={class:"a_columns a_columns_count_12"},p={class:"a_column a_column_6 a_columns_count_12_touch"};var S=e(1912);const R={name:"PageSelectBasic",components:{AlohaExample:S.A,ASelect:b.A},setup(){const{codeHtml:a}={codeHtml:'<a-select\n  v-model="model"\n  :data="data"\n  key-id="id"\n  key-label="label"\n  label="Aloha"\n  type="select"\n></a-select>\n<div>model: {{ model }}</div>'},{codeJs:l}={codeJs:'import {\n  ref,\n} from "vue";\n\nimport ASelect from "aloha-vue/src/ui/ASelect/ASelect";\n    \nexport default {\n  name: "PageSelectBasic",\n  components: {\n    ASelect,\n  },\n  setup() {\n    const data = [\n      {\n        label: "Aloha 1",\n        id: "aloha_1",\n      },\n      {\n        label: "Aloha 2",\n        id: "aloha_2",\n      },\n      {\n        label: "Aloha 3",\n        id: "aloha_3",\n      },\n      {\n        label: "Aloha 4",\n        id: "aloha_4",\n      },\n      {\n        label: "Aloha 5",\n        id: "aloha_5",\n      },\n    ];\n    const model = ref(undefined);\n\n    return {\n      data,\n      model,\n    };\n  },\n};'};return{codeHtml:a,codeJs:l,data:[{label:"Aloha 1",id:"aloha_1"},{label:"Aloha 2",id:"aloha_2"},{label:"Aloha 3",id:"aloha_3"},{label:"Aloha 4",id:"aloha_4"},{label:"Aloha 5",id:"aloha_5"}],model:(0,o.KR)(void 0)}}};var T=e(6262);const L=(0,T.A)(R,[["render",function(a,l){const e=(0,o.g2)("a-select"),n=(0,o.g2)("aloha-example");return(0,o.uX)(),(0,o.Wv)(n,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_BASIC_USAGE_",props:["model-value","data","key-id","key-label","label","type"]},{default:(0,o.k6)((()=>[(0,o.Lk)("div",E,[(0,o.Lk)("div",p,[(0,o.bF)(e,{modelValue:a.model,"onUpdate:modelValue":l[0]||(l[0]=l=>a.model=l),data:a.data,"key-id":"id","key-label":"label",label:"Aloha",type:"select"},null,8,["modelValue","data"]),(0,o.Lk)("div",null,"model: "+(0,o.v_)(a.model),1)])])])),_:1},8,["code-html","code-js"])}]]),y={class:"a_columns a_columns_count_12"},f={class:"a_column a_column_6 a_columns_count_12_touch"},v={name:"PageSelectDataExtra",components:{AlohaExample:S.A,ASelect:b.A},setup(){const{codeHtml:a}={codeHtml:'<a-select\n  v-model="model1"\n  :data="data"\n  :data-extra="dataExtraArrayOfArrays"\n  key-id="id"\n  key-label="label"\n  label="Data extra (Array of Arrays)"\n  :search="true"\n></a-select>\n<div>model1: {{ model1 }}</div>\n<a-select\n  v-model="model2"\n  class="a_mt_3"\n  :data="data"\n  :data-extra="dataExtraArrayOfObjects"\n  key-id="id"\n  key-label="label"\n  label="Data extra (Array of Objects)"\n  :search="true"\n></a-select>\n<div>model2: {{ model2 }}</div>'},{codeJs:l}={codeJs:'import {\n  ref,\n} from "vue";\n\nimport ASelect from "aloha-vue/src/ui/ASelect/ASelect";\n    \nexport default {\n  name: "PageSelectDataExtra",\n  components: {\n    ASelect,\n  },\n  setup() {\n    const data = [\n      {\n        label: "Aloha -1",\n        id: "aloha_-1",\n        aloha: "",\n      },\n      {\n        label: "Aloha 0",\n        id: "aloha_0",\n        aloha: "",\n        alohaBR: "Köln",\n      },\n      {\n        label: "Aloha 1",\n        id: "aloha_1",\n        aloha: "Buba",\n        alohaBR: "Köln",\n      },\n      {\n        label: "Aloha 2",\n        id: "aloha_2",\n        aloha: "Buba",\n        alohaBR: "Köln",\n      },\n      {\n        label: "Aloha 3",\n        id: "aloha_3",\n        aloha: "Sandra",\n        alohaBR: "Köln",\n      },\n      {\n        label: "Aloha 4",\n        id: "aloha_4",\n        aloha: "Sandra",\n        alohaBR: "Köln",\n      },\n      {\n        label: "Aloha 5",\n        id: "aloha_5",\n        aloha: "Coco",\n        alohaBR: "Düsseldorf",\n      },\n      {\n        label: "Aloha 6",\n        id: "aloha_6",\n        aloha: "Coco",\n        alohaBR: "Düsseldorf",\n      },\n      {\n        label: "Aloha 7",\n        id: "aloha_7",\n        aloha: "Alex",\n        alohaBR: "Düsseldorf",\n      },\n      {\n        label: "Aloha 8",\n        id: "aloha_8",\n        aloha: "Alex",\n        alohaBR: "Düsseldorf",\n      },\n    ];\n    const dataExtraArrayOfArrays = [\n      ["extra_id_1", "Extra 1"],\n      ["extra_id_2", "Extra 2"],\n    ];\n    const dataExtraArrayOfObjects = [\n      {\n        label: "Extra 1",\n        id: "extra_id_1",\n      },\n      {\n        label: "Extra 2",\n        id: "extra_id_2",\n      },\n    ];\n    const model1 = ref(undefined);\n    const model2 = ref(undefined);\n\n    return {\n      data,\n      dataExtraArrayOfArrays,\n      dataExtraArrayOfObjects,\n      model1,\n      model2,\n    };\n  },\n};'};return{codeHtml:a,codeJs:l,data:[{label:"Aloha -1",id:"aloha_-1",aloha:""},{label:"Aloha 0",id:"aloha_0",aloha:"",alohaBR:"Köln"},{label:"Aloha 1",id:"aloha_1",aloha:"Buba",alohaBR:"Köln"},{label:"Aloha 2",id:"aloha_2",aloha:"Buba",alohaBR:"Köln"},{label:"Aloha 3",id:"aloha_3",aloha:"Sandra",alohaBR:"Köln"},{label:"Aloha 4",id:"aloha_4",aloha:"Sandra",alohaBR:"Köln"},{label:"Aloha 5",id:"aloha_5",aloha:"Coco",alohaBR:"Düsseldorf"},{label:"Aloha 6",id:"aloha_6",aloha:"Coco",alohaBR:"Düsseldorf"},{label:"Aloha 7",id:"aloha_7",aloha:"Alex",alohaBR:"Düsseldorf"},{label:"Aloha 8",id:"aloha_8",aloha:"Alex",alohaBR:"Düsseldorf"}],dataExtraArrayOfArrays:[["extra_id_1","Extra 1"],["extra_id_2","Extra 2"]],dataExtraArrayOfObjects:[{label:"Extra 1",id:"extra_id_1"},{label:"Extra 2",id:"extra_id_2"}],model1:(0,o.KR)(void 0),model2:(0,o.KR)(void 0)}}},k=(0,T.A)(v,[["render",function(a,l){const e=(0,o.g2)("a-select"),n=(0,o.g2)("aloha-example");return(0,o.uX)(),(0,o.Wv)(n,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_SELECT_GROUP_DATA_EXTRA_HEADER_",description:"_A_SELECT_GROUP_DATA_EXTRA_DESCRIPTION_",props:"data-extra"},{default:(0,o.k6)((()=>[(0,o.Lk)("div",y,[(0,o.Lk)("div",f,[(0,o.bF)(e,{modelValue:a.model1,"onUpdate:modelValue":l[0]||(l[0]=l=>a.model1=l),data:a.data,"data-extra":a.dataExtraArrayOfArrays,"key-id":"id","key-label":"label",label:"Data extra (Array of Arrays)",search:!0},null,8,["modelValue","data","data-extra"]),(0,o.Lk)("div",null,"model1: "+(0,o.v_)(a.model1),1),(0,o.bF)(e,{class:"a_mt_3",modelValue:a.model2,"onUpdate:modelValue":l[1]||(l[1]=l=>a.model2=l),data:a.data,"data-extra":a.dataExtraArrayOfObjects,"key-id":"id","key-label":"label",label:"Data extra (Array of Objects)",search:!0},null,8,["modelValue","data","data-extra"]),(0,o.Lk)("div",null,"model2: "+(0,o.v_)(a.model2),1)])])])),_:1},8,["code-html","code-js"])}]]),B={class:"a_columns a_columns_count_12"},C={class:"a_column a_column_6 a_columns_count_12_touch"},g={name:"PageSelectGroup",components:{AlohaExample:S.A,ASelect:b.A},setup(){const{codeHtml:a}={codeHtml:'<a-select\n  v-model="model"\n  :data="data"\n  key-id="id"\n  key-label="label"\n  :key-group="[\'alohaBR\', \'aloha\']"\n  label="Aloha"\n  type="select"\n></a-select>\n<div>model: {{ model }}</div>'},{codeJs:l}={codeJs:'import {\n  ref,\n} from "vue";\n\nimport ASelect from "aloha-vue/src/ui/ASelect/ASelect";\n    \nexport default {\n  name: "PageSelectGroup",\n  components: {\n    ASelect,\n  },\n  setup() {\n    const data = [\n      {\n        label: "Aloha 0",\n        id: "aloha_0",\n        aloha: "",\n        alohaBR: "Köln",\n      },\n      {\n        label: "Aloha 1",\n        id: "aloha_1",\n        aloha: "Buba",\n        alohaBR: "Köln",\n      },\n      {\n        label: "Aloha 2",\n        id: "aloha_2",\n        aloha: "Buba",\n        alohaBR: "Köln",\n      },\n      {\n        label: "Aloha 3",\n        id: "aloha_3",\n        aloha: "Sandra",\n        alohaBR: "Köln",\n      },\n      {\n        label: "Aloha 4",\n        id: "aloha_4",\n        aloha: "Sandra",\n        alohaBR: "Köln",\n      },\n      {\n        label: "Aloha 5",\n        id: "aloha_5",\n        aloha: "Coco",\n        alohaBR: "Düsseldorf",\n      },\n      {\n        label: "Aloha 6",\n        id: "aloha_6",\n        aloha: "Coco",\n        alohaBR: "Düsseldorf",\n      },\n      {\n        label: "Aloha 7",\n        id: "aloha_7",\n        aloha: "Alex",\n        alohaBR: "Düsseldorf",\n      },\n      {\n        label: "Aloha 8",\n        id: "aloha_8",\n        aloha: "Alex",\n        alohaBR: "Düsseldorf",\n      },\n    ];\n    const model = ref(undefined);\n\n    return {\n      data,\n      model,\n    };\n  },\n};'};return{codeHtml:a,codeJs:l,data:[{label:"Aloha 0",id:"aloha_0",aloha:"",alohaBR:"Köln"},{label:"Aloha 1",id:"aloha_1",aloha:"Buba",alohaBR:"Köln"},{label:"Aloha 2",id:"aloha_2",aloha:"Buba",alohaBR:"Köln"},{label:"Aloha 3",id:"aloha_3",aloha:"Sandra",alohaBR:"Köln"},{label:"Aloha 4",id:"aloha_4",aloha:"Sandra",alohaBR:"Köln"},{label:"Aloha 5",id:"aloha_5",aloha:"Coco",alohaBR:"Düsseldorf"},{label:"Aloha 6",id:"aloha_6",aloha:"Coco",alohaBR:"Düsseldorf"},{label:"Aloha 7",id:"aloha_7",aloha:"Alex",alohaBR:"Düsseldorf"},{label:"Aloha 8",id:"aloha_8",aloha:"Alex",alohaBR:"Düsseldorf"}],model:(0,o.KR)(void 0)}}},P=(0,T.A)(g,[["render",function(a,l){const e=(0,o.g2)("a-select"),n=(0,o.g2)("aloha-example");return(0,o.uX)(),(0,o.Wv)(n,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_SELECT_GROUP_GROUPS_HEADER_",description:"_A_SELECT_GROUP_GROUPS_DESCRIPTION_",props:"key-group"},{default:(0,o.k6)((()=>[(0,o.Lk)("div",B,[(0,o.Lk)("div",C,[(0,o.bF)(e,{modelValue:a.model,"onUpdate:modelValue":l[0]||(l[0]=l=>a.model=l),data:a.data,"key-id":"id","key-label":"label","key-group":["alohaBR","aloha"],label:"Aloha",type:"select"},null,8,["modelValue","data"]),(0,o.Lk)("div",null,"model: "+(0,o.v_)(a.model),1)])])])),_:1},8,["code-html","code-js"])}]]),O={class:"a_columns a_columns_count_12"},D={class:"a_column a_column_6 a_columns_count_12_touch"},x={name:"PageSelectKeyDisabled",components:{AlohaExample:S.A,ASelect:b.A},setup(){const{codeHtml:a}={codeHtml:'<a-select\n  v-model="model"\n  :data="data"\n  key-id="id"\n  key-label="label"\n  :key-group="[\'alohaBR\', \'aloha\']"\n  key-disabled="disabled"\n  label="Aloha group"\n></a-select>\n<div>model: {{ model }}</div>\n<a-select\n  v-model="model"\n  class="a_mt_3"\n  :data="data"\n  key-id="id"\n  key-label="label"\n  key-disabled="disabled"\n  label="Aloha"\n></a-select>\n<div>model: {{ model }}</div>'},{codeJs:l}={codeJs:'import {\n  ref,\n} from "vue";\n\nimport ASelect from "aloha-vue/src/ui/ASelect/ASelect";\n    \nexport default {\n  name: "PageSelectKeyDisabled",\n  components: {\n    ASelect,\n  },\n  setup() {\n    const data = [\n      {\n        label: "Aloha -1",\n        id: "aloha_-1",\n        aloha: "",\n        disabled: true,\n      },\n      {\n        label: "Aloha 0",\n        id: "aloha_0",\n        aloha: "",\n        alohaBR: "Köln",\n        disabled: true,\n      },\n      {\n        label: "Aloha 1",\n        id: "aloha_1",\n        aloha: "Buba",\n        alohaBR: "Köln",\n        disabled: true,\n      },\n      {\n        label: "Aloha 2",\n        id: "aloha_2",\n        aloha: "Buba",\n        alohaBR: "Köln",\n        disabled: true,\n      },\n      {\n        label: "Aloha 3",\n        id: "aloha_3",\n        aloha: "Sandra",\n        alohaBR: "Köln",\n      },\n      {\n        label: "Aloha 4",\n        id: "aloha_4",\n        aloha: "Sandra",\n        alohaBR: "Köln",\n      },\n      {\n        label: "Aloha 5",\n        id: "aloha_5",\n        aloha: "Coco",\n        alohaBR: "Düsseldorf",\n      },\n      {\n        label: "Aloha 6",\n        id: "aloha_6",\n        aloha: "Coco",\n        alohaBR: "Düsseldorf",\n      },\n      {\n        label: "Aloha 7",\n        id: "aloha_7",\n        aloha: "Alex",\n        alohaBR: "Düsseldorf",\n      },\n      {\n        label: "Aloha 8",\n        id: "aloha_8",\n        aloha: "Alex",\n        alohaBR: "Düsseldorf",\n      },\n    ];\n    const model = ref(undefined);\n\n    return {\n      data,\n      model,\n    };\n  },\n};'};return{codeHtml:a,codeJs:l,data:[{label:"Aloha -1",id:"aloha_-1",aloha:"",disabled:!0},{label:"Aloha 0",id:"aloha_0",aloha:"",alohaBR:"Köln",disabled:!0},{label:"Aloha 1",id:"aloha_1",aloha:"Buba",alohaBR:"Köln",disabled:!0},{label:"Aloha 2",id:"aloha_2",aloha:"Buba",alohaBR:"Köln",disabled:!0},{label:"Aloha 3",id:"aloha_3",aloha:"Sandra",alohaBR:"Köln"},{label:"Aloha 4",id:"aloha_4",aloha:"Sandra",alohaBR:"Köln"},{label:"Aloha 5",id:"aloha_5",aloha:"Coco",alohaBR:"Düsseldorf"},{label:"Aloha 6",id:"aloha_6",aloha:"Coco",alohaBR:"Düsseldorf"},{label:"Aloha 7",id:"aloha_7",aloha:"Alex",alohaBR:"Düsseldorf"},{label:"Aloha 8",id:"aloha_8",aloha:"Alex",alohaBR:"Düsseldorf"}],model:(0,o.KR)(void 0)}}},I=(0,T.A)(x,[["render",function(a,l){const e=(0,o.g2)("a-select"),n=(0,o.g2)("aloha-example");return(0,o.uX)(),(0,o.Wv)(n,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_SELECT_GROUP_KEY_DISABLED_HEADER_",description:"_A_SELECT_GROUP_KEY_DISABLED_DESCRIPTION_",props:"key-disabled"},{default:(0,o.k6)((()=>[(0,o.Lk)("div",O,[(0,o.Lk)("div",D,[(0,o.bF)(e,{modelValue:a.model,"onUpdate:modelValue":l[0]||(l[0]=l=>a.model=l),data:a.data,"key-id":"id","key-label":"label","key-group":["alohaBR","aloha"],"key-disabled":"disabled",label:"Aloha group"},null,8,["modelValue","data"]),(0,o.Lk)("div",null,"model: "+(0,o.v_)(a.model),1),(0,o.bF)(e,{class:"a_mt_3",modelValue:a.model,"onUpdate:modelValue":l[1]||(l[1]=l=>a.model=l),data:a.data,"key-id":"id","key-label":"label","key-disabled":"disabled",label:"Aloha"},null,8,["modelValue","data"]),(0,o.Lk)("div",null,"model: "+(0,o.v_)(a.model),1)])])])),_:1},8,["code-html","code-js"])}]]),N={class:"a_columns a_columns_count_12"},K={class:"a_column a_column_6 a_columns_count_12_touch"},H={name:"PageSelectSearch",components:{AlohaExample:S.A,ASelect:b.A},setup(){const{codeHtml:a}={codeHtml:'<a-select\n  v-model="model"\n  :data="data"\n  key-id="id"\n  key-label="label"\n  :key-group="[\'alohaBR\', \'aloha\']"\n  label="Aloha group"\n  :search="true"\n></a-select>\n<div>model: {{ model }}</div>\n<a-select\n  v-model="model"\n  class="a_mt_3"\n  :data="data"\n  key-id="id"\n  key-label="label"\n  label="Aloha"\n  :search="true"\n></a-select>\n<div>model: {{ model }}</div>'},{codeJs:l}={codeJs:'import {\n  ref,\n} from "vue";\n\nimport ASelect from "aloha-vue/src/ui/ASelect/ASelect";\n    \nexport default {\n  name: "PageSelectSearch",\n  components: {\n    ASelect,\n  },\n  setup() {\n    const data = [\n      {\n        label: "Aloha -1",\n        id: "aloha_-1",\n        aloha: "",\n      },\n      {\n        label: "Aloha 0",\n        id: "aloha_0",\n        aloha: "",\n        alohaBR: "Köln",\n      },\n      {\n        label: "Aloha 1",\n        id: "aloha_1",\n        aloha: "Buba",\n        alohaBR: "Köln",\n      },\n      {\n        label: "Aloha 2",\n        id: "aloha_2",\n        aloha: "Buba",\n        alohaBR: "Köln",\n      },\n      {\n        label: "Aloha 3",\n        id: "aloha_3",\n        aloha: "Sandra",\n        alohaBR: "Köln",\n      },\n      {\n        label: "Aloha 4",\n        id: "aloha_4",\n        aloha: "Sandra",\n        alohaBR: "Köln",\n      },\n      {\n        label: "Aloha 5",\n        id: "aloha_5",\n        aloha: "Coco",\n        alohaBR: "Düsseldorf",\n      },\n      {\n        label: "Aloha 6",\n        id: "aloha_6",\n        aloha: "Coco",\n        alohaBR: "Düsseldorf",\n      },\n      {\n        label: "Aloha 7",\n        id: "aloha_7",\n        aloha: "Alex",\n        alohaBR: "Düsseldorf",\n      },\n      {\n        label: "Aloha 8",\n        id: "aloha_8",\n        aloha: "Alex",\n        alohaBR: "Düsseldorf",\n      },\n    ];\n    const model = ref(undefined);\n\n    return {\n      data,\n      model,\n    };\n  },\n};'};return{codeHtml:a,codeJs:l,data:[{label:"Aloha -1",id:"aloha_-1",aloha:""},{label:"Aloha 0",id:"aloha_0",aloha:"",alohaBR:"Köln"},{label:"Aloha 1",id:"aloha_1",aloha:"Buba",alohaBR:"Köln"},{label:"Aloha 2",id:"aloha_2",aloha:"Buba",alohaBR:"Köln"},{label:"Aloha 3",id:"aloha_3",aloha:"Sandra",alohaBR:"Köln"},{label:"Aloha 4",id:"aloha_4",aloha:"Sandra",alohaBR:"Köln"},{label:"Aloha 5",id:"aloha_5",aloha:"Coco",alohaBR:"Düsseldorf"},{label:"Aloha 6",id:"aloha_6",aloha:"Coco",alohaBR:"Düsseldorf"},{label:"Aloha 7",id:"aloha_7",aloha:"Alex",alohaBR:"Düsseldorf"},{label:"Aloha 8",id:"aloha_8",aloha:"Alex",alohaBR:"Düsseldorf"}],model:(0,o.KR)(void 0)}}},V=(0,T.A)(H,[["render",function(a,l){const e=(0,o.g2)("a-select"),n=(0,o.g2)("aloha-example");return(0,o.uX)(),(0,o.Wv)(n,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_SELECT_GROUP_SEARCH_HEADER_",description:"_A_SELECT_GROUP_SEARCH_DESCRIPTION_",props:"search"},{default:(0,o.k6)((()=>[(0,o.Lk)("div",N,[(0,o.Lk)("div",K,[(0,o.bF)(e,{modelValue:a.model,"onUpdate:modelValue":l[0]||(l[0]=l=>a.model=l),data:a.data,"key-id":"id","key-label":"label","key-group":["alohaBR","aloha"],label:"Aloha group",search:!0},null,8,["modelValue","data"]),(0,o.Lk)("div",null,"model: "+(0,o.v_)(a.model),1),(0,o.bF)(e,{class:"a_mt_3",modelValue:a.model,"onUpdate:modelValue":l[1]||(l[1]=l=>a.model=l),data:a.data,"key-id":"id","key-label":"label",label:"Aloha",search:!0},null,8,["modelValue","data"]),(0,o.Lk)("div",null,"model: "+(0,o.v_)(a.model),1)])])])),_:1},8,["code-html","code-js"])}]]),M={class:"a_columns a_columns_count_12"},F={class:"a_column a_column_6 a_columns_count_12_touch"},U={name:"PageSelectTranslateData",components:{AlohaExample:S.A,ASelect:b.A},setup(){const{codeHtml:a}={codeHtml:'<a-select\n  v-model="model"\n  :data="data"\n  key-id="id"\n  key-label="label"\n  label="Aloha"\n  :search="true"\n  :translate-data="true"\n  type="select"\n></a-select>\n<div>model: {{ model }}</div>'},{codeJs:l}={codeJs:'import {\n  ref,\n} from "vue";\n\nimport ASelect from "aloha-vue/src/ui/ASelect/ASelect";\n    \nexport default {\n  name: "PageSelectTranslateData",\n  components: {\n    ASelect,\n  },\n  setup() {\n    const data = [\n      {\n        label: "_A_SELECT_ELEMENT_0_",\n        id: "aloha_0",\n      },\n      {\n        label: "_A_SELECT_ELEMENT_1_",\n        id: "aloha_1",\n      },\n      {\n        label: "_A_SELECT_ELEMENT_2_",\n        id: "aloha_2",\n      },\n      {\n        label: "_A_SELECT_ELEMENT_3_",\n        id: "aloha_3",\n      },\n      {\n        label: "_A_SELECT_ELEMENT_4_",\n        id: "aloha_4",\n      },\n      {\n        label: "_A_SELECT_ELEMENT_5_",\n        id: "aloha_5",\n      },\n      {\n        label: "_A_SELECT_ELEMENT_6_",\n        id: "aloha_6",\n      },\n      {\n        label: "_A_SELECT_ELEMENT_7_",\n        id: "aloha_7",\n      },\n      {\n        label: "_A_SELECT_ELEMENT_8_",\n        id: "aloha_8",\n      },\n    ];\n    const model = ref(undefined);\n\n    return {\n      data,\n      model,\n    };\n  },\n};'};return{codeHtml:a,codeJs:l,data:[{label:"_A_SELECT_ELEMENT_0_",id:"aloha_0"},{label:"_A_SELECT_ELEMENT_1_",id:"aloha_1"},{label:"_A_SELECT_ELEMENT_2_",id:"aloha_2"},{label:"_A_SELECT_ELEMENT_3_",id:"aloha_3"},{label:"_A_SELECT_ELEMENT_4_",id:"aloha_4"},{label:"_A_SELECT_ELEMENT_5_",id:"aloha_5"},{label:"_A_SELECT_ELEMENT_6_",id:"aloha_6"},{label:"_A_SELECT_ELEMENT_7_",id:"aloha_7"},{label:"_A_SELECT_ELEMENT_8_",id:"aloha_8"}],model:(0,o.KR)(void 0)}}},J=(0,T.A)(U,[["render",function(a,l){const e=(0,o.g2)("a-select"),n=(0,o.g2)("aloha-example");return(0,o.uX)(),(0,o.Wv)(n,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_SELECT_GROUP_TRANSLATE_DATA_HEADER_",description:"_A_SELECT_GROUP_TRANSLATE_DATA_DESCRIPTION_",props:"translate-data"},{default:(0,o.k6)((()=>[(0,o.Lk)("div",M,[(0,o.Lk)("div",F,[(0,o.bF)(e,{modelValue:a.model,"onUpdate:modelValue":l[0]||(l[0]=l=>a.model=l),data:a.data,"key-id":"id","key-label":"label",label:"Aloha",search:!0,"translate-data":!0,type:"select"},null,8,["modelValue","data"]),(0,o.Lk)("div",null,"model: "+(0,o.v_)(a.model),1)])])])),_:1},8,["code-html","code-js"])}]]);var j=e(2187);const X={name:"PageSelect",components:{AlohaPage:i.A,AlohaTableProps:A.A,ATranslation:m.A,AIcon:u.A,ASelect:b.A,PageSelectBasic:L,PageSelectDataExtra:k,PageSelectGroup:P,PageSelectSearch:V,PageSelectKeyDisabled:I,PageSelectTranslateData:J},setup(){const{pageTitle:a}=function(){const a=(0,o.EW)((()=>(0,j.a1)({placeholder:"_A_SELECT_COMPONENT_NAME_"})));return{pageTitle:(0,o.EW)((()=>"ASelect"+(a.value?` (${a.value})`:"")))}}(),{dataProps:l}={dataProps:[{name:"alert-class",description:"_A_ALERT_PROPS_ALERT_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"alert-content-class",description:"_A_ALERT_PROPS_ALERT_CONTENT_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"btn-close-attributes",description:"_A_ALERT_PROPS_BTN_CLOSE_ATTRIBUTES_DESCRIPTION_",type:"Object",default:"{}",required:!1},{name:"closable",description:"_A_ALERT_PROPS_CLOSABLE_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"show-icon",description:"_A_ALERT_PROPS_HAS_ICON_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"html",description:"_A_ALERT_PROPS_HTML_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"icon",description:"_A_ALERT_PROPS_ICON_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"icon-class",description:"_A_ALERT_PROPS_ICON_CLASS_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"is-visible",description:"_A_ALERT_PROPS_IS_VISIBLE_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"removeAlertOnClose",description:"_A_ALERT_PROPS_REMOVE_ALERT_ON_CLOSE_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"safe-html",description:"_A_ALERT_PROPS_SAFE_HTML_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"text",description:"_A_ALERT_PROPS_TEXT_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"text-close",description:"_A_ALERT_PROPS_TEXT_CLOSE_DESCRIPTION_",type:"String",default:"_ALERT_CLOSE_",required:!1},{name:"type",description:"_A_ALERT_PROPS_TYPE_DESCRIPTION_",type:"String",default:"danger",required:!1}]},{dataSlots:e}={dataSlots:[{name:"default",description:"_A_ALERT_SLOTS_DEFAULT_DESCRIPTION_"}]},{dataEvents:n}={dataEvents:[{name:"close",description:"_A_ALERT_EVENTS_CLOSE_DESCRIPTION_",type:"Function"}]},{dataExposes:d}={dataExposes:[{name:"close",description:"_A_ALERT_EXPOSES_CLOSE_DESCRIPTION_",type:"Function"},{name:"isHidden",description:"_A_ALERT_EXPOSES_IS_HIDDEN_DESCRIPTION_",type:"Boolean"}]};return{dataEvents:n,dataExposes:d,dataProps:l,dataSlots:e,pageTitle:a}},data:()=>({model:void 0,modelArr:void 0,modelArr2:void 0,data:[{label:"Aloha 1",id:"aloha_1",group:"group 1"},{label:"Aloha 2",id:"aloha_2"},{label:"Aloha 3",id:"aloha_3",group:"group 1"},{label:"Aloha 4",id:"aloha_4"},{label:"Aloha 5",id:"aloha_5",group:"group 2"},{label:"AlohaAlohaAlohaAlohaAlohaAlohaAl ohaAlohaAlohaAlohaAlohaAloha AlohaAlohaAlohaAlohaAlohaAlohaAloha 6",id:"aloha_6",group:"group 2"},{label:"AlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAloha 7",id:"aloha_7",group:"group 2"},{label:"AlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAloha 8",id:"aloha_8"}]}),methods:{getLabel:({item:a})=>`callback: ${a.label}`}},G=(0,T.A)(X,[["render",function(a,l){const e=(0,o.g2)("a-translation"),i=(0,o.g2)("page-select-basic"),A=(0,o.g2)("page-select-group"),m=(0,o.g2)("page-select-search"),u=(0,o.g2)("page-select-key-disabled"),b=(0,o.g2)("page-select-translate-data"),E=(0,o.g2)("page-select-data-extra"),p=(0,o.g2)("a-select"),S=(0,o.g2)("a-icon"),R=(0,o.g2)("aloha-page");return(0,o.uX)(),(0,o.Wv)(R,{"page-title":a.pageTitle},{body:(0,o.k6)((()=>[(0,o.bF)(e,{tag:"p",html:"_A_SELECT_COMPONENT_DESCRIPTION_"}),(0,o.bF)(i),(0,o.bF)(A),(0,o.bF)(m),(0,o.bF)(u),(0,o.bF)(b),(0,o.bF)(E),(0,o.Lk)("div",null,[(0,o.Lk)("div",n,[(0,o.Lk)("div",d,[(0,o.bF)(p,{modelValue:a.model,"onUpdate:modelValue":l[0]||(l[0]=l=>a.model=l),data:a.data,"key-id":"id","key-label":"label",label:"Test label",type:"select",search:!0,"key-group":"group","sort-order-group":"desc","is-menu-width-as-button":!1,"menu-width-type":"by_content"},null,8,["modelValue","data"]),(0,o.Lk)("div",null,"model: "+(0,o.v_)(a.model),1)])]),(0,o.bF)(p,{modelValue:a.model,"onUpdate:modelValue":l[1]||(l[1]=l=>a.model=l),data:a.data,"key-id":"id","key-label-callback":a.getLabel,label:"Test label callback",type:"select",search:!0,"sort-order":"desc"},null,8,["modelValue","data","key-label-callback"]),t,(0,o.bF)(p,{modelValue:a.modelArr,"onUpdate:modelValue":l[2]||(l[2]=l=>a.modelArr=l),data:a.data,"key-id":"id","key-label":"label",label:"Test label multiselect",type:"multiselect",search:!0,"is-select-all":!0,"is-deselect-all":!0,"slot-name":"test","max-count-multiselect":2},{test:(0,o.k6)((({label:a,labelFiltered:l})=>[(0,o.bF)(S,{class:"a_mr_1",icon:"Cog"}),l?((0,o.uX)(),(0,o.CE)("span",{key:0,innerHTML:l},null,8,_)):((0,o.uX)(),(0,o.CE)("span",{key:1,innerHTML:a},null,8,h))])),_:1},8,["modelValue","data"]),(0,o.Lk)("div",null,"modelArr: "+(0,o.v_)(a.modelArr),1),s,(0,o.bF)(p,{modelValue:a.modelArr2,"onUpdate:modelValue":l[3]||(l[3]=l=>a.modelArr2=l),data:a.data,"key-id":"id","key-label":"label",label:"Test label multiselect2",type:"multiselect",search:!0,"is-select-all":!0,"is-deselect-all":!0,"is-selection-closeable":!1,"slot-name":"aloha"},{aloha:(0,o.k6)((({label:a,labelFiltered:l})=>[(0,o.bF)(S,{class:"a_mr_1",icon:"Cog"}),l?((0,o.uX)(),(0,o.CE)("span",{key:0,innerHTML:l},null,8,r)):((0,o.uX)(),(0,o.CE)("span",{key:1,innerHTML:a},null,8,c))])),_:1},8,["modelValue","data"]),(0,o.Lk)("div",null,"modelArr2: "+(0,o.v_)(a.modelArr2),1)])])),_:1},8,["page-title"])}]])}}]);
//# sourceMappingURL=chunk.2410.c41a48fe36c7db08e8e4.js.map