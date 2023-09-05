"use strict";(self.webpackChunkaloha_vue_docs=self.webpackChunkaloha_vue_docs||[]).push([[205],{4743:(e,l,a)=>{a.r(l),a.d(l,{default:()=>C});var t=a(2147),n=a(3588),s=a(9699),i=a(780),o=a(7069),_=a(3403);const d={name:"PageListClassGroup",components:{AList:o.Z,AlohaExample:_.Z},setup(){const{codeHtml:e}={codeHtml:'<a-list\n  :data="items"\n  key-label="label"\n  class-main="a_list_group" class-item="a_list_group__item">\n</a-list>\n<a-list\n  class="a_mt_5"\n  :data="items"\n  key-label="label"\n  class-main="a_list_group a_list_group_gap"\n  class-item="a_list_group__item">\n</a-list>\n<a-list\n  class="a_mt_5"\n  :data="items"\n  key-label="label"\n  class-main="a_list_group a_list_group_edge"\n  class-item="a_list_group__item">\n</a-list>'},{codeJs:l}={codeJs:'import AList from "aloha-vue/src/AList/AList";\n    \nexport default {\n  name: "PageListClassGroup",\n  components: {\n    AList,\n  },\n  setup() {\n    const items = [\n      {\n        label: "label 1",\n      },\n      {\n        label: "label 2",\n      },\n      {\n        label: "label 3",\n      },\n      {\n        label: "label 4",\n      },\n    ];\n\n    return {\n      items,\n    };\n  },\n};'};return{codeHtml:e,codeJs:l,items:[{label:"label 1"},{label:"label 2"},{label:"label 3"},{label:"label 4"}]}}};var m=a(1419);const c=(0,m.Z)(d,[["render",function(e,l){const a=(0,t.up)("a-list"),n=(0,t.up)("aloha-example");return(0,t.wg)(),(0,t.j4)(n,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_LIST_GROUP_CLASS_GROUP_HEADER_",description:"_A_LIST_GROUP_CLASS_GROUP_DESCRIPTION_",props:["class-main","class-item"]},{default:(0,t.w5)((()=>[(0,t.Wm)(a,{data:e.items,"key-label":"label","class-main":"a_list_group","class-item":"a_list_group__item"},null,8,["data"]),(0,t.Wm)(a,{class:"a_mt_5",data:e.items,"key-label":"label","class-main":"a_list_group a_list_group_gap","class-item":"a_list_group__item"},null,8,["data"]),(0,t.Wm)(a,{class:"a_mt_5",data:e.items,"key-label":"label","class-main":"a_list_group a_list_group_edge","class-item":"a_list_group__item"},null,8,["data"])])),_:1},8,["code-html","code-js"])}]]),r={name:"PageListKeyChildren",components:{AList:o.Z,AlohaExample:_.Z},setup(){const{codeHtml:e}={codeHtml:'<a-list\n  :data="items"\n  key-label="label"\n  key-children="children">\n</a-list>'},{codeJs:l}={codeJs:'import AList from "aloha-vue/src/AList/AList";\n    \nexport default {\n  name: "PageListKeyChildren",\n  components: {\n    AList,\n  },\n  setup() {\n    const items = [\n      {\n        label: "Parent 1",\n        children: [\n          {\n            label: "Child 1" \n          },\n          {\n            label: "Child 2"\n          }\n        ],\n      },\n      {\n        label: "Parent 2",\n        children: [\n          {\n            label: "Child 3" \n          },\n          {\n            label: "Child 4"\n          }\n        ],\n      }\n    ];\n\n    return {\n      items,\n    };\n  },\n};'};return{codeHtml:e,codeJs:l,items:[{label:"Parent 1",children:[{label:"Child 1"},{label:"Child 2"}]},{label:"Parent 2",children:[{label:"Child 3"},{label:"Child 4"}]}]}}},b=(0,m.Z)(r,[["render",function(e,l){const a=(0,t.up)("a-list"),n=(0,t.up)("aloha-example");return(0,t.wg)(),(0,t.j4)(n,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_LIST_KEY_CHILDREN_HEADER_",description:"_A_LIST_KEY_CHILDREN_DESCRIPTION_",props:["keyChildren"]},{default:(0,t.w5)((()=>[(0,t.Wm)(a,{data:e.items,"key-label":"label","key-children":"children"},null,8,["data"])])),_:1},8,["code-html","code-js"])}]]),p={name:"PageListKeyLabelCallback",components:{AList:o.Z,AlohaExample:_.Z},setup(){const{codeHtml:e}={codeHtml:'<a-list\n  :data="items"\n  :key-label-callback="keyLabelCallback"\n  key-label="label">\n</a-list>'},{codeJs:l}={codeJs:'import AList from "aloha-vue/src/AList/AList";\n    \nexport default {\n  name: "PageListKeyLabelCallback",\n  components: {\n    AList,\n  },\n  setup() {\n    const items = [\n      {\n        label: "label 1",\n      },\n      {\n        label: "label 2",\n      },\n      {\n        label: "label 3",\n      },\n      {\n        label: "label 4",\n      },\n    ];\n\n    return {\n      items,\n    };\n  },\n};'};return{codeHtml:e,codeJs:l,items:[{label:"Item 1"},{label:"Item 2"},{label:"Item 3"},{label:"Item 4"}],keyLabelCallback:({item:e,itemIndex:l})=>`${e.label} - Index: ${l}`}}},u=(0,m.Z)(p,[["render",function(e,l){const a=(0,t.up)("a-list"),n=(0,t.up)("aloha-example");return(0,t.wg)(),(0,t.j4)(n,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_LIST_KEY_LABEL_CALLBACK_HEADER_",description:"_A_LIST_KEY_LABEL_CALLBACK_DESCRIPTION_",props:["keyLabelCallback"]},{default:(0,t.w5)((()=>[(0,t.Wm)(a,{data:e.items,"key-label-callback":e.keyLabelCallback,"key-label":"label"},null,8,["data","key-label-callback"])])),_:1},8,["code-html","code-js"])}]]),L={name:"PageListTagLabelTag",components:{AList:o.Z,AlohaExample:_.Z},setup(){const{codeHtml:e}={codeHtml:'<a-list\n  :data="items"\n  key-label="label"\n  tag="div"\n  label-tag="h3">\n</a-list>'},{codeJs:l}={codeJs:'import AList from "aloha-vue/src/AList/AList";\n    \nexport default {\n  name: "PageListTagLabelTag",\n  components: {\n    AList,\n  },\n  setup() {\n    const items = [\n      {\n        label: "label 1",\n      },\n      {\n        label: "label 2",\n      },\n      {\n        label: "label 3",\n      },\n      {\n        label: "label 4",\n      },\n    ];\n\n    return {\n      items,\n    };\n  },\n};'};return{codeHtml:e,codeJs:l,items:[{label:"Item 1"},{label:"Item 2"},{label:"Item 3"},{label:"Item 4"}]}}},A=(0,m.Z)(L,[["render",function(e,l){const a=(0,t.up)("a-list"),n=(0,t.up)("aloha-example");return(0,t.wg)(),(0,t.j4)(n,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_LIST_TAG_LABEL_TAG_HEADER_",description:"_A_LIST_TAG_LABEL_TAG_DESCRIPTION_",props:["tag","labelTag"]},{default:(0,t.w5)((()=>[(0,t.Wm)(a,{data:e.items,"key-label":"label",tag:"div","label-tag":"span"},null,8,["data"])])),_:1},8,["code-html","code-js"])}]]),h={name:"PageListWithSlot",components:{AList:o.Z,AlohaExample:_.Z},setup(){const{codeHtml:e}={codeHtml:'<a-list\n  :data="items"\n  key-children="items">\n    <template\n      v-slot:listItem="vm">\n      <pre>{{ vm.item.label }}</pre>\n    </template>\n</a-list>'},{codeJs:l}={codeJs:'import AList from "aloha-vue/src/AList/AList";\n    \nexport default {\n  name: "PageListWithSlot",\n  components: {\n    AList,\n  },\n  setup() {\n    const items = [\n      {\n        label: "label 1",\n        items: [\n          {\n            label: "label 1.1",\n            items: [\n              {\n                label: "label 1.1.1",\n              },\n              {\n                label: "label 1.1.2",\n              },\n              {\n                label: "label 1.1.3",\n              },\n            ],\n          },\n          {\n            label: "label 1.2",\n          },\n          {\n            label: "label 1.3",\n            items: [\n              {\n                label: "label 1.3.1",\n              },\n              {\n                label: "label 1.3.2",\n              },\n              {\n                label: "label 1.3.3",\n              },\n            ],\n          },\n        ],\n      },\n      {\n        label: "level 2",\n      },\n      {\n        label: "level 3",\n      },\n    ];\n\n    return {\n      items,\n    };\n  },\n};'};return{codeHtml:e,codeJs:l,items:[{label:"label 1",items:[{label:"label 1.1",items:[{label:"label 1.1.1"},{label:"label 1.1.2"},{label:"label 1.1.3"}]},{label:"label 1.2"},{label:"label 1.3",items:[{label:"label 1.3.1"},{label:"label 1.3.2"},{label:"label 1.3.3"}]}]},{label:"level 2"},{label:"level 3"}]}}},g=(0,m.Z)(h,[["render",function(e,l){const a=(0,t.up)("a-list"),n=(0,t.up)("aloha-example");return(0,t.wg)(),(0,t.j4)(n,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_LIST_WITH_SLOT_HEADER_",description:"_A_LIST_WITH_SLOT_DESCRIPTION_"},{default:(0,t.w5)((()=>[(0,t.Wm)(a,{data:e.items,"key-children":"items"},{listItem:(0,t.w5)((e=>[(0,t._)("pre",null,(0,t.zw)(e.item.label),1)])),_:1},8,["data"])])),_:1},8,["code-html","code-js"])}]]),I={name:"AListWithoutChildren",components:{AList:o.Z,AlohaExample:_.Z},setup(){const{codeHtml:e}={codeHtml:'<a-list\n  :data="items"\n  key-label="label">\n</a-list>'},{codeJs:l}={codeJs:'import AList from "aloha-vue/src/AList/AList";\n    \nexport default {\n  name: "AListWithoutChildren",\n  components: {\n    AList,\n  },\n  setup() {\n    const items = [\n      {\n        label: "label 1",\n      },\n      {\n        label: "label 2",\n      },\n      {\n        label: "label 3",\n      },\n    ];\n\n    return {\n      items,\n    };\n  },\n};'};return{codeHtml:e,codeJs:l,items:[{label:"level 1"},{label:"level 2"},{label:"level 3"}]}}},T=(0,m.Z)(I,[["render",function(e,l){const a=(0,t.up)("a-list"),n=(0,t.up)("aloha-example");return(0,t.wg)(),(0,t.j4)(n,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_LIST_WITHOUT_CHILDREN_HEADER_",description:"_A_LIST_WITHOUT_CHILDREN_DESCRIPTION_"},{default:(0,t.w5)((()=>[(0,t.Wm)(a,{data:e.items,"key-label":"label"},null,8,["data"])])),_:1},8,["code-html","code-js"])}]]);var P=a(8405);const S={name:"PageList",components:{AlohaPage:n.Z,AlohaTableProps:s.Z,ATranslation:i.Z,AList:o.Z,PageListClassGroup:c,PageListKeyChildren:b,PageListKeyLabelCallback:u,PageListTagLabelTag:A,PageListWithSlot:g,PageListWithoutChildren:T},setup(){const{pageTitle:e}=function(){const e=(0,t.Fl)((()=>(0,P.Gd)({placeholder:"_A_LIST_COMPONENT_NAME_"})));return{pageTitle:(0,t.Fl)((()=>"AList"+(e.value?` (${e.value})`:"")))}}(),{dataProps:l}={dataProps:[{name:"classMain",description:"_A_LIST_CLASS_MAIN_PROP_DESCRIPTION_",type:"String / Object / Array",default:void 0,required:!1},{name:"classItem",description:"_A_LIST_CLASS_ITEM_PROP_DESCRIPTION_",type:"String / Object / Array",default:void 0,required:!1},{name:"keyLabel",description:"_A_LIST_KEY_LABEL_PROP_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"keyLabelCallback",description:"_A_LIST_KEY_LABEL_CALLBACK_PROP_DESCRIPTION_",type:"Function",default:void 0,required:!1},{name:"keyChildren",description:"_A_LIST_KEY_CHILDREN_PROP_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"tag",description:"_A_LIST_TAG_PROP_DESCRIPTION_",type:"String",default:"ul",required:!1},{name:"labelTag",description:"_A_LIST_LABEL_TAG_PROP_DESCRIPTION_",type:"String",default:"li",required:!1},{name:"data",description:"_A_LIST_DATA_PROP_DESCRIPTION_",type:"Array",default:"[]",required:!1}]},{dataSlots:a}={dataSlots:[{name:"default",description:"_A_LIST_SLOT_DESCRIPTION_"}]};return{dataProps:l,dataSlots:a,pageTitle:e}}},C=(0,m.Z)(S,[["render",function(e,l){const a=(0,t.up)("a-translation"),n=(0,t.up)("page-list-class-group"),s=(0,t.up)("page-list-without-children"),i=(0,t.up)("page-list-key-children"),o=(0,t.up)("page-list-key-label-callback"),_=(0,t.up)("page-list-tag-label-tag"),d=(0,t.up)("page-list-with-slot"),m=(0,t.up)("aloha-table-props"),c=(0,t.up)("aloha-page");return(0,t.wg)(),(0,t.j4)(c,{"page-title":e.pageTitle},{body:(0,t.w5)((()=>[(0,t.Wm)(a,{tag:"p",html:"_A_LIST_COMPONENT_DESCRIPTION_"}),(0,t.Wm)(n),(0,t.Wm)(s),(0,t.Wm)(i),(0,t.Wm)(o),(0,t.Wm)(_),(0,t.Wm)(d),(0,t.Wm)(m,{data:e.dataProps},null,8,["data"]),(0,t.Wm)(m,{"table-label":"Slots",data:e.dataSlots,columns:["name","description"]},null,8,["data"])])),_:1},8,["page-title"])}]])}}]);
//# sourceMappingURL=chunk.205.fc4f728947c0e7b6c59c.js.map