import{A as b,a as P}from"./chunk.AlohaExample.hQI5Jr0F.js";import{U as s,_ as o,A as k}from"./bundle.index.CGdZpDI2.js";import{P as M,a as J,b as H}from"./chunk.PageFilterTest.NRL-fUhD.js";import{P as C}from"./chunk.PageFilterImportCompositionApi.Cl5IXcK_.js";import{k as l,Q as c,O as p,aR as F,V as i}from"./chunk.vendor.CQXHzgd8.js";import"./chunk.vendor-lodash.Cdu0tpky.js";import"./chunk.APageTabTitle.BoJJkmX0.js";import"./chunk.AlohaHighlightjs.dTNt8W7q.js";import"./chunk.translations-ar.Bl94ryzA.js";import"./chunk.translations-de.B7d9jdMO.js";import"./chunk.translations-en.BtgGWXka.js";import"./chunk.translations-es.BSOZWCCF.js";import"./chunk.translations-fr.CcWHH1cx.js";import"./chunk.translations-hr.CJ7NF5Fz.js";import"./chunk.translations-it.DU_NwUPS.js";import"./chunk.translations-ru.FgtNK4nl.js";function R(){return{codeJs:`const ITEMS = ["label 1", "label 2", "label 3"];

filterList(ITEMS, {
  isHtml: false,
  isSimpleArray: true,
});
// ${s(["label 1","label 2","label 3"],{isHtml:!1,isSimpleArray:!0})}`}}const B={name:"PageFilterListIsHtml",components:{AlohaExample:b},setup(){const{codeJs:e}=R();return{codeJs:e}}};function G(e,t,r,n,_,u){const a=l("aloha-example");return p(),c(a,{"code-js":e.codeJs,header:"isHtml=false","is-code-visible-default":!0},null,8,["code-js"])}const j=o(B,[["render",G]]);function w(){return{codeJs:`const ITEMS = ["label 1", "label 2", "label 3"];

filterList(ITEMS, {
  isSimpleArray: true,
});
// ${s(["label 1","label 2","label 3"],{isSimpleArray:!0})}`}}const N={name:"PageFilterListIsSimpleArray",components:{AlohaExample:b},setup(){const{codeJs:e}=w();return{codeJs:e}}};function U(e,t,r,n,_,u){const a=l("aloha-example");return p(),c(a,{"code-js":e.codeJs,header:"isSimpleArray=true","is-code-visible-default":!0},null,8,["code-js"])}const K=o(N,[["render",U]]);function Y(){return{codeJs:`const ITEMS = [
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
// ${s(["x0",["x1",["x1.1","x1.2"]],"x3"],{isSimpleArray:!0})}`}}const O={name:"PageFilterListIsSimpleArrayTree",components:{AlohaExample:b},setup(){const{codeJs:e}=Y();return{codeJs:e}}};function V(e,t,r,n,_,u){const a=l("aloha-example");return p(),c(a,{"code-js":e.codeJs,header:"_PAGE_FILTER_LIST_IS_SIMPLE_ARRAY_TREE_HEADER_","is-code-visible-default":!0},null,8,["code-js"])}const z=o(O,[["render",V]]);function D(){return{codeJs:`const ITEMS = [
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
// ${s([{label:"Level 1",children:[{label:"Level 1.1",children:[{label:"Level 1.1.1"},{label:"Level 1.1.2"}]},{label:"Level 1.2"}]},{label:"Level 2",children:[{label:"Level 2.1"},{label:"Level 2.2"}]}],{keyLabel:"label",keyChildren:"children"})}`}}const Q={name:"PageFilterListKeyChildren",components:{AlohaExample:b},setup(){const{codeJs:e}=D();return{codeJs:e}}};function q(e,t,r,n,_,u){const a=l("aloha-example");return p(),c(a,{"code-js":e.codeJs,header:"keyChildren","is-code-visible-default":!0},null,8,["code-js"])}const W=o(Q,[["render",q]]);function X(){return{codeJs:`const ITEMS = [
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
// ${s([{label:"label 1"},{label:"label 2"},{label:"label 3"},{label:"label 4"}],{keyLabel:"label"})}`}}const Z={name:"PageFilterListKeyLabel",components:{AlohaExample:b},setup(){const{codeJs:e}=X();return{codeJs:e}}};function ee(e,t,r,n,_,u){const a=l("aloha-example");return p(),c(a,{"code-js":e.codeJs,header:"keyLabel","is-code-visible-default":!0},null,8,["code-js"])}const le=o(Z,[["render",ee]]);function te(){return{codeJs:`const ITEMS = [
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
// ${s([{label:"label 1"},{label:"label 2"},{label:"label 3"},{label:"label 4"}],{keyLabelCallback:({item:n})=>`+ ${n.label}`})}`}}const ae={name:"PageFilterListKeyLabelCallback",components:{AlohaExample:b},setup(){const{codeJs:e}=te();return{codeJs:e}}};function ie(e,t,r,n,_,u){const a=l("aloha-example");return p(),c(a,{"code-js":e.codeJs,header:"keyLabelCallback","is-code-visible-default":!0},null,8,["code-js"])}const se=o(ae,[["render",ie]]);function re(){return{codeJs:`const ITEMS = ["label 1", "label 2", "label 3"];

filterList(ITEMS, {
  listClass: "a_list_without_styles",
  isSimpleArray: true,
});
// ${s(["label 1","label 2","label 3"],{listClass:"a_list_without_styles",isSimpleArray:!0})}`}}const ne={name:"PageFilterListListClass",components:{AlohaExample:b},setup(){const{codeJs:e}=re();return{codeJs:e}}};function oe(e,t,r,n,_,u){const a=l("aloha-example");return p(),c(a,{"code-js":e.codeJs,header:"listClass","is-code-visible-default":!0},null,8,["code-js"])}const ce=o(ne,[["render",oe]]);function pe(){const e=["label 1","label 2","label 3"];return{codeJs:`const ITEMS = ["label 1", "label 2", "label 3"];

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
// ${s(e,{isHtml:!0,isSimpleArray:!0,separator:";"})}`}}const _e={name:"PageFilterListSeparator",components:{AlohaExample:b},setup(){const{codeJs:e}=pe();return{codeJs:e}}};function ue(e,t,r,n,_,u){const a=l("aloha-example");return p(),c(a,{"code-js":e.codeJs,header:"separator / lastSeparator","is-code-visible-default":!0},null,8,["code-js"])}const be=o(_e,[["render",ue]]);function Le(){const e=["label 1","label 2","label 3"];return{codeJs:`const ITEMS = ["label 1", "label 2", "label 3"];

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
// ${s(e,{isHtml:!0,isSimpleArray:!0,separatorHtml:"<div>Aloha</div>"})}`}}const me={name:"PageFilterListSeparatorHtml",components:{AlohaExample:b},setup(){const{codeJs:e}=Le();return{codeJs:e}}};function de(e,t,r,n,_,u){const a=l("aloha-example");return p(),c(a,{"code-js":e.codeJs,header:"separatorHtml","is-code-visible-default":!0},null,8,["code-js"])}const fe=o(me,[["render",de]]);function Se(){return{codeJs:`const ITEMS = ["label 1", "label 2", "label 3"];

filterList(ITEMS, {
  tag: "ol",
  isSimpleArray: true,
});
// ${s(["label 1","label 2","label 3"],{tag:"ol",isSimpleArray:!0})}`}}const ve={name:"PageFilterListTag",components:{AlohaExample:b},setup(){const{codeJs:e}=Se();return{codeJs:e}}};function ye(e,t,r,n,_,u){const a=l("aloha-example");return p(),c(a,{"code-js":e.codeJs,header:"tag","is-code-visible-default":!0},null,8,["code-js"])}const Te=o(ve,[["render",ye]]);function Ae(){return{argumentsText:[{value:"array",types:["Array"],text:"_PAGE_FILTER_LIST_ARGUMENTS_ARRAY_"},{value:'[defaultValue=""]',types:["String"],text:"_PAGE_FILTER_LIST_ARGUMENTS_DEFAULT_VALUE_"},{value:"[isHtml=true]",types:["Boolean"],text:"_PAGE_FILTER_LIST_ARGUMENTS_IS_HTML_"},{value:"[isSimpleArray=false]",types:["Boolean"],text:"_PAGE_FILTER_LIST_ARGUMENTS_IS_SIMPLE_ARRAY_"},{value:'[keyChildren=""]',types:["String"],text:"_PAGE_FILTER_LIST_ARGUMENTS_KEY_CHILDREN_"},{value:'[keyLabel=""]',types:["String"],text:"_PAGE_FILTER_LIST_ARGUMENTS_KEY_LABEL_"},{value:"[keyLabelCallback]",types:["Function"],text:"_PAGE_FILTER_LIST_ARGUMENTS_KEY_LABEL_CALLBACK_"},{value:"[lastSeparator]",types:["String"],text:"_PAGE_FILTER_LIST_ARGUMENTS_LAST_SEPARATOR_"},{value:'[listClass=""]',types:["String"],text:"_PAGE_FILTER_LIST_ARGUMENTS_LIST_CLASS_"},{value:"[separator]",types:["String"],text:"_PAGE_FILTER_LIST_ARGUMENTS_SEPARATOR_"},{value:'[separatorHtml=""]',types:["String"],text:"_PAGE_FILTER_LIST_ARGUMENTS_SEPARATOR_HTML_"},{value:'[tag="ul"]',types:["String"],text:"_PAGE_FILTER_LIST_ARGUMENTS_TAG_"}]}}function Ie(){return{pageTitle:"filterList"}}const he=`import filterList from "../filterList";

describe("filterList", () => {
  test("isSimpleArray=true", () => {
    expect(filterList(["label 1", "label 2", "label 3"])).toBe("<ul><li>label 1</li><li>label 2</li><li>label 3</li></ul>");
    expect(filterList(["label 1", "label 2", "label 3"], { isSimpleArray: true })).toBe("<ul><li>label 1</li><li>label 2</li><li>label 3</li></ul>");
    expect(filterList(["label 1"])).toBe("<ul><li>label 1</li></ul>");
    expect(filterList([])).toBe("");
  });

  test("keyLabel", () => {
    const LIST = [
      { label: "label 1" },
      { label: "label 2" },
      { label: "label 3" },
      { label: "label 4" },
    ];

    expect(filterList(LIST, { keyLabel: "label" })).toBe("<ul><li>label 1</li><li>label 2</li><li>label 3</li><li>label 4</li></ul>");
    expect(filterList(LIST, { keyLabel: "aloha" })).toBe("<ul><li></li><li></li><li></li><li></li></ul>");
  });

  test("keyLabelCallback", () => {
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

  test("isHtml=false", () => {
    expect(filterList(["label 1", "label 2", "label 3"], { isHtml: false })).toBe("label 1, label 2, label 3");
    expect(filterList(["aloha"], { isHtml: false })).toBe("aloha");
    expect(filterList(["x", "y", "z"], { isHtml: false })).toBe("x, y, z");
    expect(filterList(123, { isHtml: false })).toBe("");
  });

  test("separator isHtml=false", () => {
    expect(filterList(["label 1", "label 2", "label 3"], { isHtml: false, separator: "," })).toBe("label 1,label 2,label 3");
    expect(filterList(["label 1", "label 2", "label 3"], { isHtml: false, separator: "; " })).toBe("label 1; label 2; label 3");
    expect(filterList(["x", "y", "z"], { isHtml: false, separator: " - " })).toBe("x - y - z");
  });

  test("separator isHtml=true", () => {
    expect(filterList(["label 1", "label 2", "label 3"], { isHtml: true, separator: "," })).toBe("<ul><li>label 1,</li><li>label 2,</li><li>label 3</li></ul>");
    expect(filterList(["label 1", "label 2", "label 3"], { isHtml: true, separator: ";" })).toBe("<ul><li>label 1;</li><li>label 2;</li><li>label 3</li></ul>");
  });

  test("separatorHtml", () => {
    expect(filterList(["label 1", "label 2", "label 3"], { isHtml: true, separatorHtml: "<hr>" })).toBe("<ul><li>label 1<hr></li><li>label 2<hr></li><li>label 3</li></ul>");
    expect(filterList(["label 1", "label 2", "label 3"], { isHtml: true, separatorHtml: "<div>Aloha</div>" })).toBe("<ul><li>label 1<div>Aloha</div></li><li>label 2<div>Aloha</div></li><li>label 3</li></ul>");
  });

  test("tag", () => {
    expect(filterList(["label 1", "label 2", "label 3"], { tag: "ul" })).toBe("<ul><li>label 1</li><li>label 2</li><li>label 3</li></ul>");
    expect(filterList(["label 1", "label 2", "label 3"], { tag: "ol" })).toBe("<ol><li>label 1</li><li>label 2</li><li>label 3</li></ol>");
  });

  test("listClass", () => {
    expect(filterList(["label 1", "label 2", "label 3"], { listClass: "test" })).toBe("<ul class=\\"test\\"><li>label 1</li><li>label 2</li><li>label 3</li></ul>");
    expect(filterList(["label 1", "label 2", "label 3"], { listClass: "a_list_without_styles" })).toBe("<ul class=\\"a_list_without_styles\\"><li>label 1</li><li>label 2</li><li>label 3</li></ul>");
  });

  test("keyChildren", () => {
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
      listClass: "a_list_without_styles"
    })).toBe("<ul class=\\"a_list_without_styles\\"><li>Level 1<ul class=\\"a_list_without_styles\\"><li>Level 1.1<ul class=\\"a_list_without_styles\\"><li>Level 1.1.1</li><li>Level 1.1.2</li></ul></li><li>Level 1.2</li></ul></li><li>Level 2<ul class=\\"a_list_without_styles\\"><li>Level 2.1</li><li>Level 2.2</li></ul></li></ul>");
    expect(filterList(LIST, {
      keyLabel: "label",
      keyChildren: "children",
      tag: "ol",
    })).toBe("<ol><li>Level 1<ol><li>Level 1.1<ol><li>Level 1.1.1</li><li>Level 1.1.2</li></ol></li><li>Level 1.2</li></ol></li><li>Level 2<ol><li>Level 2.1</li><li>Level 2.2</li></ol></li></ol>");
  });

  test("tree isSimpleArray=true", () => {
    const LIST = ["Level 1", ["Level 2", ["Level 2.1", "Level 2.2"]], ["Level 3", ["Level 3.1", ["Level 3.2", ["Level 3.2.1", "Level 3.2.2"]]]]];

    expect(filterList(LIST, { isSimpleArray: true, })).toBe("<ul><li>Level 1</li><li>Level 2<ul><li>Level 2.1</li><li>Level 2.2</li></ul></li><li>Level 3<ul><li>Level 3.1</li><li>Level 3.2<ul><li>Level 3.2.1</li><li>Level 3.2.2</li></ul></li></ul></li></ul>");

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


`,xe={name:"PageFilterList",components:{AlohaPage:P,ATranslation:k,PageFilterArguments:M,PageFilterImportCompositionApi:C,PageFilterImportFunction:J,PageFilterListIsHtml:j,PageFilterListIsSimpleArray:K,PageFilterListIsSimpleArrayTree:z,PageFilterListKeyChildren:W,PageFilterListKeyLabel:le,PageFilterListKeyLabelCallback:se,PageFilterListListClass:ce,PageFilterListSeparator:be,PageFilterListSeparatorHtml:fe,PageFilterListTag:Te,PageFilterTest:H},setup(){const{pageTitle:e}=Ie(),{argumentsText:t}=Ae();return{argumentsText:t,pageTitle:e,test:he}}};function Ee(e,t,r,n,_,u){const a=l("a-translation"),L=l("page-filter-import-function"),m=l("page-filter-import-composition-api"),d=l("page-filter-arguments"),f=l("page-filter-list-is-simple-array"),S=l("page-filter-list-key-label"),v=l("page-filter-list-key-label-callback"),y=l("page-filter-list-is-html"),T=l("page-filter-list-separator"),A=l("page-filter-list-separator-html"),I=l("page-filter-list-tag"),h=l("page-filter-list-list-class"),x=l("page-filter-list-key-children"),E=l("page-filter-list-is-simple-array-tree"),g=l("page-filter-test"),$=l("aloha-page");return p(),c($,{"page-title":e.pageTitle},{body:F(()=>[i(a,{tag:"p",html:"_PAGE_FILTER_LIST_DESCRIPTION_"}),i(L,{"function-name":"filterList","type-import":"filters"}),i(m,{"function-name":"filterList"}),i(d,{"arguments-text":e.argumentsText,"function-description":'filterList(array, { [defaultValue=""], [isHtml=true], [isSimpleArray=false], [keyChildren=""], [keyLabel=""], [keyLabelCallback], [lastSeparator], [listClass=""], [separator], [separatorHtml=", "], [tag="ul"] })'},null,8,["arguments-text"]),i(f),i(S),i(v),i(y),i(T),i(A),i(I),i(h),i(x),i(E),i(g,{test:e.test},null,8,["test"])]),_:1},8,["page-title"])}const Ke=o(xe,[["render",Ee]]);export{Ke as default};
