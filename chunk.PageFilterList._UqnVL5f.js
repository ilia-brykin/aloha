import{A as b,a as P}from"./chunk.AlohaExample.C-Z3uUeD.js";import{P as M,a as k,b as J}from"./chunk.PageFilterTest.DHeSvKix.js";import{P as H}from"./chunk.PageFilterImportCompositionApi.BeNlZ6JJ.js";import{U as s,_ as o,A as C}from"./bundle.index.CE2r4xEW.js";import{R as c,e as l,U as p,aR as R,Y as a}from"./chunk.vendor.C8MJL5OZ.js";import"./chunk.vendor-lodash.D7ZMGyiW.js";import"./chunk.APageTabTitle.CflP0n6m.js";import"./chunk.AlohaHighlightjs.BioRad36.js";import"./chunk.translations-ar.CSRM3YJ8.js";import"./chunk.translations-de.Cdlrfk3w.js";import"./chunk.translations-en.BVrNHVVQ.js";import"./chunk.translations-es.DXEdiuYo.js";import"./chunk.translations-fr.CVKEU5Mu.js";import"./chunk.translations-hr.DL1l5v8s.js";import"./chunk.translations-it.BKw_NW0S.js";import"./chunk.translations-ru.CQ8apMH7.js";function F(){return{codeJs:`const ITEMS = ["label 1", "label 2", "label 3"];

filterList(ITEMS, {
  isHtml: false,
  isSimpleArray: true,
});
// ${s(["label 1","label 2","label 3"],{isHtml:!1,isSimpleArray:!0})}`}}const B={name:"PageFilterListIsHtml",components:{AlohaExample:b},setup(){const{codeJs:e}=F();return{codeJs:e}}};function G(e,t,r,n,_,u){const i=l("aloha-example");return p(),c(i,{"code-js":e.codeJs,header:"isHtml=false","is-code-visible-default":!0},null,8,["code-js"])}const j=o(B,[["render",G]]);function U(){return{codeJs:`const ITEMS = ["label 1", "label 2", "label 3"];

filterList(ITEMS, {
  isSimpleArray: true,
});
// ${s(["label 1","label 2","label 3"],{isSimpleArray:!0})}`}}const w={name:"PageFilterListIsSimpleArray",components:{AlohaExample:b},setup(){const{codeJs:e}=U();return{codeJs:e}}};function N(e,t,r,n,_,u){const i=l("aloha-example");return p(),c(i,{"code-js":e.codeJs,header:"isSimpleArray=true","is-code-visible-default":!0},null,8,["code-js"])}const K=o(w,[["render",N]]);function Y(){return{codeJs:`const ITEMS = [
  "Level 1",
    [
      "Level 2",
      [
        "Level 2.1",
        "Level 2.2",
      ],
    ],
    [
      "Level 3",
      [
        "Level 3.1",
        [
          "Level 3.2",
          [
            "Level 3.2.1",
            "Level 3.2.2",
          ],
        ],
      ],
    ],
  ];

filterList(ITEMS, {
  isSimpleArray: true,
});
// ${s(["Level 1",["Level 2",["Level 2.1","Level 2.2"]],["Level 3",["Level 3.1",["Level 3.2",["Level 3.2.1","Level 3.2.2"]]]]],{isSimpleArray:!0})}

filterList([["x1", ["x1.1", "x1.2"]], { isSimpleArray: true })
// ${s([["x1",["x1.1","x1.2"]]],{isSimpleArray:!0})}

filterList(["x0", ["x1", ["x1.1", "x1.2"]], "x3"], { isSimpleArray: true })
// ${s(["x0",["x1",["x1.1","x1.2"]],"x3"],{isSimpleArray:!0})}`}}const z={name:"PageFilterListIsSimpleArrayTree",components:{AlohaExample:b},setup(){const{codeJs:e}=Y();return{codeJs:e}}};function D(e,t,r,n,_,u){const i=l("aloha-example");return p(),c(i,{"code-js":e.codeJs,header:"_PAGE_FILTER_LIST_IS_SIMPLE_ARRAY_TREE_HEADER_","is-code-visible-default":!0},null,8,["code-js"])}const O=o(z,[["render",D]]);function V(){return{codeJs:`const ITEMS = [
  {
    label: "Level 1",
    children: [
      {
        label: "Level 1.1",
        children: [
          {
            label: "Level 1.1.1",
          },
          {
            label: "Level 1.1.2",
          },
        ],
      },
      {
        label: "Level 1.2",
      },
    ],
  },
  {
    label: "Level 2",
    children: [
      {
        label: "Level 2.1",
      },
      {
        label: "Level 2.2",
      },
    ],
  },
];

filterList(ITEMS, {
  keyLabel: "label",
  keyChildren: "children",
});
// ${s([{label:"Level 1",children:[{label:"Level 1.1",children:[{label:"Level 1.1.1"},{label:"Level 1.1.2"}]},{label:"Level 1.2"}]},{label:"Level 2",children:[{label:"Level 2.1"},{label:"Level 2.2"}]}],{keyLabel:"label",keyChildren:"children"})}`}}const q={name:"PageFilterListKeyChildren",components:{AlohaExample:b},setup(){const{codeJs:e}=V();return{codeJs:e}}};function Q(e,t,r,n,_,u){const i=l("aloha-example");return p(),c(i,{"code-js":e.codeJs,header:"keyChildren","is-code-visible-default":!0},null,8,["code-js"])}const W=o(q,[["render",Q]]);function X(){return{codeJs:`const ITEMS = [
  {
    label: "label 1",
  },
  {
    label: "label 2",
  },
  {
    label: "label 3",
  },
  {
    label: "label 4",
  },
];

filterList(ITEMS, {
  keyLabel: "label",
});
// ${s([{label:"label 1"},{label:"label 2"},{label:"label 3"},{label:"label 4"}],{keyLabel:"label"})}`}}const Z={name:"PageFilterListKeyLabel",components:{AlohaExample:b},setup(){const{codeJs:e}=X();return{codeJs:e}}};function ee(e,t,r,n,_,u){const i=l("aloha-example");return p(),c(i,{"code-js":e.codeJs,header:"keyLabel","is-code-visible-default":!0},null,8,["code-js"])}const le=o(Z,[["render",ee]]);function te(){return{codeJs:`const ITEMS = [
  {
    label: "label 1",
  },
  {
    label: "label 2",
  },
  {
    label: "label 3",
  },
  {
    label: "label 4",
  },
];

const keyLabelCallback = ({ item }) => {
  return \`+ \${ item.label }\`;
};

filterList(ITEMS, {
  keyLabelCallback,
});
// ${s([{label:"label 1"},{label:"label 2"},{label:"label 3"},{label:"label 4"}],{keyLabelCallback:({item:n})=>`+ ${n.label}`})}`}}const ie={name:"PageFilterListKeyLabelCallback",components:{AlohaExample:b},setup(){const{codeJs:e}=te();return{codeJs:e}}};function ae(e,t,r,n,_,u){const i=l("aloha-example");return p(),c(i,{"code-js":e.codeJs,header:"keyLabelCallback","is-code-visible-default":!0},null,8,["code-js"])}const se=o(ie,[["render",ae]]);function re(){return{codeJs:`const ITEMS = ["label 1", "label 2", "label 3"];

filterList(ITEMS, {
  listClass: "a_list_without_styles",
  isSimpleArray: true,
});
// ${s(["label 1","label 2","label 3"],{listClass:"a_list_without_styles",isSimpleArray:!0})}`}}const ne={name:"PageFilterListListClass",components:{AlohaExample:b},setup(){const{codeJs:e}=re();return{codeJs:e}}};function oe(e,t,r,n,_,u){const i=l("aloha-example");return p(),c(i,{"code-js":e.codeJs,header:"listClass","is-code-visible-default":!0},null,8,["code-js"])}const ce=o(ne,[["render",oe]]);function pe(){const e=["label 1","label 2","label 3"];return{codeJs:`const ITEMS = ["label 1", "label 2", "label 3"];

filterList(ITEMS, {
  isHtml: false,
  isSimpleArray: true,
  separator: "; ",
});
// ${s(e,{isHtml:!1,isSimpleArray:!0,separator:"; "})}

filterList(ITEMS, {
  isHtml: false,
  isSimpleArray: true,
  lastSeparator: " & ",
  separator: ", ",
});
// ${s(e,{isHtml:!1,isSimpleArray:!0,lastSeparator:" & ",separator:", "})}


filterList(ITEMS, {
  isHtml: true,
  isSimpleArray: true,
  separator: ";",
});
// ${s(e,{isHtml:!0,isSimpleArray:!0,separator:";"})}`}}const _e={name:"PageFilterListSeparator",components:{AlohaExample:b},setup(){const{codeJs:e}=pe();return{codeJs:e}}};function ue(e,t,r,n,_,u){const i=l("aloha-example");return p(),c(i,{"code-js":e.codeJs,header:"separator / lastSeparator","is-code-visible-default":!0},null,8,["code-js"])}const be=o(_e,[["render",ue]]);function Le(){const e=["label 1","label 2","label 3"];return{codeJs:`const ITEMS = ["label 1", "label 2", "label 3"];

filterList(ITEMS, {
  isHtml: true,
  isSimpleArray: true,
  separatorHtml: "<hr>",
});
// ${s(e,{isHtml:!0,isSimpleArray:!0,separatorHtml:"<hr>"})}

filterList(ITEMS, {
  isHtml: true,
  isSimpleArray: true,
  separatorHtml: "<div>Aloha</div>",
});
// ${s(e,{isHtml:!0,isSimpleArray:!0,separatorHtml:"<div>Aloha</div>"})}`}}const me={name:"PageFilterListSeparatorHtml",components:{AlohaExample:b},setup(){const{codeJs:e}=Le();return{codeJs:e}}};function de(e,t,r,n,_,u){const i=l("aloha-example");return p(),c(i,{"code-js":e.codeJs,header:"separatorHtml","is-code-visible-default":!0},null,8,["code-js"])}const fe=o(me,[["render",de]]);function Se(){return{codeJs:`const ITEMS = ["label 1", "label 2", "label 3"];

filterList(ITEMS, {
  tag: "ol",
  isSimpleArray: true,
});
// ${s(["label 1","label 2","label 3"],{tag:"ol",isSimpleArray:!0})}`}}const ve={name:"PageFilterListTag",components:{AlohaExample:b},setup(){const{codeJs:e}=Se();return{codeJs:e}}};function ye(e,t,r,n,_,u){const i=l("aloha-example");return p(),c(i,{"code-js":e.codeJs,header:"tag","is-code-visible-default":!0},null,8,["code-js"])}const Te=o(ve,[["render",ye]]);function Ae(){return{argumentsText:[{value:"array",types:["Array"],text:"_PAGE_FILTER_LIST_ARGUMENTS_ARRAY_"},{value:'[defaultValue=""]',types:["String"],text:"_PAGE_FILTER_LIST_ARGUMENTS_DEFAULT_VALUE_"},{value:"[isHtml=true]",types:["Boolean"],text:"_PAGE_FILTER_LIST_ARGUMENTS_IS_HTML_"},{value:"[isSimpleArray=false]",types:["Boolean"],text:"_PAGE_FILTER_LIST_ARGUMENTS_IS_SIMPLE_ARRAY_"},{value:'[keyChildren=""]',types:["String"],text:"_PAGE_FILTER_LIST_ARGUMENTS_KEY_CHILDREN_"},{value:'[keyLabel=""]',types:["String"],text:"_PAGE_FILTER_LIST_ARGUMENTS_KEY_LABEL_"},{value:"[keyLabelCallback]",types:["Function"],text:"_PAGE_FILTER_LIST_ARGUMENTS_KEY_LABEL_CALLBACK_"},{value:"[lastSeparator]",types:["String"],text:"_PAGE_FILTER_LIST_ARGUMENTS_LAST_SEPARATOR_"},{value:'[listClass=""]',types:["String"],text:"_PAGE_FILTER_LIST_ARGUMENTS_LIST_CLASS_"},{value:"[separator]",types:["String"],text:"_PAGE_FILTER_LIST_ARGUMENTS_SEPARATOR_"},{value:'[separatorHtml=""]',types:["String"],text:"_PAGE_FILTER_LIST_ARGUMENTS_SEPARATOR_HTML_"},{value:'[tag="ul"]',types:["String"],text:"_PAGE_FILTER_LIST_ARGUMENTS_TAG_"}]}}function Ie(){return{pageTitle:"filterList"}}const he=`import {
  describe,
  expect,
  it,
} from "@jest/globals";

import filterList from "../filterList";

describe("filterList", () => {
  it("isSimpleArray=true", () => {
    expect(filterList(["label 1", "label 2", "label 3"])).toBe("<ul><li>label 1</li><li>label 2</li><li>label 3</li></ul>");
    expect(filterList(["label 1", "label 2", "label 3"], { isSimpleArray: true })).toBe("<ul><li>label 1</li><li>label 2</li><li>label 3</li></ul>");
    expect(filterList(["label 1"])).toBe("<ul><li>label 1</li></ul>");
    expect(filterList([])).toBe("");
  });

  it("keyLabel", () => {
    const LIST = [
      { label: "label 1" },
      { label: "label 2" },
      { label: "label 3" },
      { label: "label 4" },
    ];

    expect(filterList(LIST, { keyLabel: "label" })).toBe("<ul><li>label 1</li><li>label 2</li><li>label 3</li><li>label 4</li></ul>");
    expect(filterList(LIST, { keyLabel: "aloha" })).toBe("<ul><li></li><li></li><li></li><li></li></ul>");
  });

  it("keyLabelCallback", () => {
    const LIST = [
      { label: "label 1" },
      { label: "label 2" },
      { label: "label 3" },
      { label: "label 4" },
    ];

    const keyLabelCallback = ({ item }) => {
      return \`+ \${ item.label }\`;
    };

    expect(filterList(LIST, { keyLabelCallback })).toBe("<ul><li>+ label 1</li><li>+ label 2</li><li>+ label 3</li><li>+ label 4</li></ul>");
    expect(filterList(LIST, { keyLabelCallback: () => "Aloha" })).toBe("<ul><li>Aloha</li><li>Aloha</li><li>Aloha</li><li>Aloha</li></ul>");
  });

  it("isHtml=false", () => {
    expect(filterList(["label 1", "label 2", "label 3"], { isHtml: false })).toBe("label 1, label 2, label 3");
    expect(filterList(["aloha"], { isHtml: false })).toBe("aloha");
    expect(filterList(["x", "y", "z"], { isHtml: false })).toBe("x, y, z");
    expect(filterList(123, { isHtml: false })).toBe("");
  });

  it("separator isHtml=false", () => {
    expect(filterList(["label 1", "label 2", "label 3"], { isHtml: false, separator: "," })).toBe("label 1,label 2,label 3");
    expect(filterList(["label 1", "label 2", "label 3"], { isHtml: false, separator: "; " })).toBe("label 1; label 2; label 3");
    expect(filterList(["x", "y", "z"], { isHtml: false, separator: " - " })).toBe("x - y - z");
  });

  it("separator isHtml=true", () => {
    expect(filterList(["label 1", "label 2", "label 3"], { isHtml: true, separator: "," })).toBe("<ul><li>label 1,</li><li>label 2,</li><li>label 3</li></ul>");
    expect(filterList(["label 1", "label 2", "label 3"], { isHtml: true, separator: ";" })).toBe("<ul><li>label 1;</li><li>label 2;</li><li>label 3</li></ul>");
  });

  it("separatorHtml", () => {
    expect(filterList(["label 1", "label 2", "label 3"], { isHtml: true, separatorHtml: "<hr>" })).toBe("<ul><li>label 1<hr></li><li>label 2<hr></li><li>label 3</li></ul>");
    expect(filterList(["label 1", "label 2", "label 3"], { isHtml: true, separatorHtml: "<div>Aloha</div>" })).toBe("<ul><li>label 1<div>Aloha</div></li><li>label 2<div>Aloha</div></li><li>label 3</li></ul>");
  });

  it("tag", () => {
    expect(filterList(["label 1", "label 2", "label 3"], { tag: "ul" })).toBe("<ul><li>label 1</li><li>label 2</li><li>label 3</li></ul>");
    expect(filterList(["label 1", "label 2", "label 3"], { tag: "ol" })).toBe("<ol><li>label 1</li><li>label 2</li><li>label 3</li></ol>");
  });

  it("listClass", () => {
    expect(filterList(["label 1", "label 2", "label 3"], { listClass: "test" })).toBe("<ul class=\\"test\\"><li>label 1</li><li>label 2</li><li>label 3</li></ul>");
    expect(filterList(["label 1", "label 2", "label 3"], { listClass: "a_list_without_styles" })).toBe("<ul class=\\"a_list_without_styles\\"><li>label 1</li><li>label 2</li><li>label 3</li></ul>");
  });

  it("keyChildren", () => {
    const LIST = [
      {
        label: "Level 1",
        children: [
          {
            label: "Level 1.1",
            children: [
              {
                label: "Level 1.1.1",
              },
              {
                label: "Level 1.1.2",
              },
            ],
          },
          {
            label: "Level 1.2",
          },
        ],
      },
      {
        label: "Level 2",
        children: [
          {
            label: "Level 2.1",
          },
          {
            label: "Level 2.2",
          },
        ],
      },
    ];

    expect(filterList(LIST, {
      keyLabel: "label",
      keyChildren: "children",
    })).toBe("<ul><li>Level 1<ul><li>Level 1.1<ul><li>Level 1.1.1</li><li>Level 1.1.2</li></ul></li><li>Level 1.2</li></ul></li><li>Level 2<ul><li>Level 2.1</li><li>Level 2.2</li></ul></li></ul>");
    expect(filterList(LIST, {
      keyLabel: "label",
      keyChildren: "children",
      listClass: "a_list_without_styles",
    })).toBe("<ul class=\\"a_list_without_styles\\"><li>Level 1<ul class=\\"a_list_without_styles\\"><li>Level 1.1<ul class=\\"a_list_without_styles\\"><li>Level 1.1.1</li><li>Level 1.1.2</li></ul></li><li>Level 1.2</li></ul></li><li>Level 2<ul class=\\"a_list_without_styles\\"><li>Level 2.1</li><li>Level 2.2</li></ul></li></ul>");
    expect(filterList(LIST, {
      keyLabel: "label",
      keyChildren: "children",
      tag: "ol",
    })).toBe("<ol><li>Level 1<ol><li>Level 1.1<ol><li>Level 1.1.1</li><li>Level 1.1.2</li></ol></li><li>Level 1.2</li></ol></li><li>Level 2<ol><li>Level 2.1</li><li>Level 2.2</li></ol></li></ol>");
  });

  it("tree isSimpleArray=true", () => {
    const LIST = ["Level 1", ["Level 2", ["Level 2.1", "Level 2.2"]], ["Level 3", ["Level 3.1", ["Level 3.2", ["Level 3.2.1", "Level 3.2.2"]]]]];

    expect(filterList(LIST, { isSimpleArray: true })).toBe("<ul><li>Level 1</li><li>Level 2<ul><li>Level 2.1</li><li>Level 2.2</li></ul></li><li>Level 3<ul><li>Level 3.1</li><li>Level 3.2<ul><li>Level 3.2.1</li><li>Level 3.2.2</li></ul></li></ul></li></ul>");

    expect(filterList(LIST, {
      isSimpleArray: true,
      listClass: "a_list_without_styles",
    })).toBe("<ul class=\\"a_list_without_styles\\"><li>Level 1</li><li>Level 2<ul class=\\"a_list_without_styles\\"><li>Level 2.1</li><li>Level 2.2</li></ul></li><li>Level 3<ul class=\\"a_list_without_styles\\"><li>Level 3.1</li><li>Level 3.2<ul class=\\"a_list_without_styles\\"><li>Level 3.2.1</li><li>Level 3.2.2</li></ul></li></ul></li></ul>");

    expect(filterList(LIST, {
      isSimpleArray: true,
      tag: "ol",
    })).toBe("<ol><li>Level 1</li><li>Level 2<ol><li>Level 2.1</li><li>Level 2.2</li></ol></li><li>Level 3<ol><li>Level 3.1</li><li>Level 3.2<ol><li>Level 3.2.1</li><li>Level 3.2.2</li></ol></li></ol></li></ol>");

    expect(filterList([["x1", ["x1.1", "x1.2"]]], { isSimpleArray: true })).toBe("<ul><li>x1<ul><li>x1.1</li><li>x1.2</li></ul></li></ul>");

    expect(filterList(["x0", ["x1", ["x1.1", "x1.2"]], "x3"], { isSimpleArray: true })).toBe("<ul><li>x0</li><li>x1<ul><li>x1.1</li><li>x1.2</li></ul></li><li>x3</li></ul>");
  });
});


`,xe={name:"PageFilterList",components:{AlohaPage:P,ATranslation:C,PageFilterArguments:J,PageFilterImportCompositionApi:H,PageFilterImportFunction:k,PageFilterListIsHtml:j,PageFilterListIsSimpleArray:K,PageFilterListIsSimpleArrayTree:O,PageFilterListKeyChildren:W,PageFilterListKeyLabel:le,PageFilterListKeyLabelCallback:se,PageFilterListListClass:ce,PageFilterListSeparator:be,PageFilterListSeparatorHtml:fe,PageFilterListTag:Te,PageFilterTest:M},setup(){const{pageTitle:e}=Ie(),{argumentsText:t}=Ae();return{argumentsText:t,pageTitle:e,test:he}}};function Ee(e,t,r,n,_,u){const i=l("a-translation"),L=l("page-filter-import-function"),m=l("page-filter-import-composition-api"),d=l("page-filter-arguments"),f=l("page-filter-list-is-simple-array"),S=l("page-filter-list-key-label"),v=l("page-filter-list-key-label-callback"),y=l("page-filter-list-is-html"),T=l("page-filter-list-separator"),A=l("page-filter-list-separator-html"),I=l("page-filter-list-tag"),h=l("page-filter-list-list-class"),x=l("page-filter-list-key-children"),E=l("page-filter-list-is-simple-array-tree"),g=l("page-filter-test"),$=l("aloha-page");return p(),c($,{"page-title":e.pageTitle},{body:R(()=>[a(i,{tag:"p",html:"_PAGE_FILTER_LIST_DESCRIPTION_"}),a(L,{"function-name":"filterList","type-import":"filters"}),a(m,{"function-name":"filterList"}),a(d,{"arguments-text":e.argumentsText,"function-description":'filterList(array, { [defaultValue=""], [isHtml=true], [isSimpleArray=false], [keyChildren=""], [keyLabel=""], [keyLabelCallback], [lastSeparator], [listClass=""], [separator], [separatorHtml=", "], [tag="ul"] })'},null,8,["arguments-text"]),a(f),a(S),a(v),a(y),a(T),a(A),a(I),a(h),a(x),a(E),a(g,{test:e.test},null,8,["test"])]),_:1},8,["page-title"])}const Ke=o(xe,[["render",Ee]]);export{Ke as default};
