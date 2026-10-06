import{Tt as e,Ut as t,kt as n,qt as r,zt as i}from"./chunk.vendor.CZPox1kV.js";import{Z as a,ft as o,t as s}from"./bundle.index.BmSiyQNH.js";import{n as c,t as l}from"./chunk.AlohaExample.CD4LlhAz.js";import{n as u,r as d,t as f}from"./chunk.PageFilterTest.DKKVbW-u.js";import{t as p}from"./chunk.PageFilterImportCompositionApi.BMcX_RFK.js";function m(){return{codeJs:`const ITEMS = ["label 1", "label 2", "label 3"];

filterList(ITEMS, {
  isHtml: false,
  isSimpleArray: true,
});
// ${o([`label 1`,`label 2`,`label 3`],{isHtml:!1,isSimpleArray:!0})}`}}var h={name:`PageFilterListIsHtml`,components:{AlohaExample:l},setup(){let{codeJs:e}=m();return{codeJs:e}}};function g(n,r,a,o,s,c){let l=t(`aloha-example`);return i(),e(l,{"code-js":n.codeJs,header:`isHtml=false`,"is-code-visible-default":!0},null,8,[`code-js`])}var _=s(h,[[`render`,g]]);function v(){return{codeJs:`const ITEMS = ["label 1", "label 2", "label 3"];

filterList(ITEMS, {
  isSimpleArray: true,
});
// ${o([`label 1`,`label 2`,`label 3`],{isSimpleArray:!0})}`}}var y={name:`PageFilterListIsSimpleArray`,components:{AlohaExample:l},setup(){let{codeJs:e}=v();return{codeJs:e}}};function b(n,r,a,o,s,c){let l=t(`aloha-example`);return i(),e(l,{"code-js":n.codeJs,header:`isSimpleArray=true`,"is-code-visible-default":!0},null,8,[`code-js`])}var x=s(y,[[`render`,b]]);function S(){return{codeJs:`const ITEMS = [
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
// ${o([`Level 1`,[`Level 2`,[`Level 2.1`,`Level 2.2`]],[`Level 3`,[`Level 3.1`,[`Level 3.2`,[`Level 3.2.1`,`Level 3.2.2`]]]]],{isSimpleArray:!0})}

filterList([["x1", ["x1.1", "x1.2"]], { isSimpleArray: true })
// ${o([[`x1`,[`x1.1`,`x1.2`]]],{isSimpleArray:!0})}

filterList(["x0", ["x1", ["x1.1", "x1.2"]], "x3"], { isSimpleArray: true })
// ${o([`x0`,[`x1`,[`x1.1`,`x1.2`]],`x3`],{isSimpleArray:!0})}`}}var C={name:`PageFilterListIsSimpleArrayTree`,components:{AlohaExample:l},setup(){let{codeJs:e}=S();return{codeJs:e}}};function w(n,r,a,o,s,c){let l=t(`aloha-example`);return i(),e(l,{"code-js":n.codeJs,header:`_PAGE_FILTER_LIST_IS_SIMPLE_ARRAY_TREE_HEADER_`,"is-code-visible-default":!0},null,8,[`code-js`])}var T=s(C,[[`render`,w]]);function E(){return{codeJs:`const ITEMS = [
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
// ${o([{label:`Level 1`,children:[{label:`Level 1.1`,children:[{label:`Level 1.1.1`},{label:`Level 1.1.2`}]},{label:`Level 1.2`}]},{label:`Level 2`,children:[{label:`Level 2.1`},{label:`Level 2.2`}]}],{keyLabel:`label`,keyChildren:`children`})}`}}var D={name:`PageFilterListKeyChildren`,components:{AlohaExample:l},setup(){let{codeJs:e}=E();return{codeJs:e}}};function O(n,r,a,o,s,c){let l=t(`aloha-example`);return i(),e(l,{"code-js":n.codeJs,header:`keyChildren`,"is-code-visible-default":!0},null,8,[`code-js`])}var k=s(D,[[`render`,O]]);function A(){return{codeJs:`const ITEMS = [
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
// ${o([{label:`label 1`},{label:`label 2`},{label:`label 3`},{label:`label 4`}],{keyLabel:`label`})}`}}var j={name:`PageFilterListKeyLabel`,components:{AlohaExample:l},setup(){let{codeJs:e}=A();return{codeJs:e}}};function M(n,r,a,o,s,c){let l=t(`aloha-example`);return i(),e(l,{"code-js":n.codeJs,header:`keyLabel`,"is-code-visible-default":!0},null,8,[`code-js`])}var N=s(j,[[`render`,M]]);function P(){return{codeJs:`const ITEMS = [
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
// ${o([{label:`label 1`},{label:`label 2`},{label:`label 3`},{label:`label 4`}],{keyLabelCallback:({item:e})=>`+ ${e.label}`})}`}}var F={name:`PageFilterListKeyLabelCallback`,components:{AlohaExample:l},setup(){let{codeJs:e}=P();return{codeJs:e}}};function I(n,r,a,o,s,c){let l=t(`aloha-example`);return i(),e(l,{"code-js":n.codeJs,header:`keyLabelCallback`,"is-code-visible-default":!0},null,8,[`code-js`])}var L=s(F,[[`render`,I]]);function R(){return{codeJs:`const ITEMS = ["label 1", "label 2", "label 3"];

filterList(ITEMS, {
  listClass: "a_list_without_styles",
  isSimpleArray: true,
});
// ${o([`label 1`,`label 2`,`label 3`],{listClass:`a_list_without_styles`,isSimpleArray:!0})}`}}var z={name:`PageFilterListListClass`,components:{AlohaExample:l},setup(){let{codeJs:e}=R();return{codeJs:e}}};function B(n,r,a,o,s,c){let l=t(`aloha-example`);return i(),e(l,{"code-js":n.codeJs,header:`listClass`,"is-code-visible-default":!0},null,8,[`code-js`])}var ee=s(z,[[`render`,B]]);function V(){let e=[`label 1`,`label 2`,`label 3`];return{codeJs:`const ITEMS = ["label 1", "label 2", "label 3"];

filterList(ITEMS, {
  isHtml: false,
  isSimpleArray: true,
  separator: "; ",
});
// ${o(e,{isHtml:!1,isSimpleArray:!0,separator:`; `})}

filterList(ITEMS, {
  isHtml: false,
  isSimpleArray: true,
  lastSeparator: " & ",
  separator: ", ",
});
// ${o(e,{isHtml:!1,isSimpleArray:!0,lastSeparator:` & `,separator:`, `})}


filterList(ITEMS, {
  isHtml: true,
  isSimpleArray: true,
  separator: ";",
});
// ${o(e,{isHtml:!0,isSimpleArray:!0,separator:`;`})}`}}var H={name:`PageFilterListSeparator`,components:{AlohaExample:l},setup(){let{codeJs:e}=V();return{codeJs:e}}};function U(n,r,a,o,s,c){let l=t(`aloha-example`);return i(),e(l,{"code-js":n.codeJs,header:`separator / lastSeparator`,"is-code-visible-default":!0},null,8,[`code-js`])}var W=s(H,[[`render`,U]]);function G(){let e=[`label 1`,`label 2`,`label 3`];return{codeJs:`const ITEMS = ["label 1", "label 2", "label 3"];

filterList(ITEMS, {
  isHtml: true,
  isSimpleArray: true,
  separatorHtml: "<hr>",
});
// ${o(e,{isHtml:!0,isSimpleArray:!0,separatorHtml:`<hr>`})}

filterList(ITEMS, {
  isHtml: true,
  isSimpleArray: true,
  separatorHtml: "<div>Aloha</div>",
});
// ${o(e,{isHtml:!0,isSimpleArray:!0,separatorHtml:`<div>Aloha</div>`})}`}}var K={name:`PageFilterListSeparatorHtml`,components:{AlohaExample:l},setup(){let{codeJs:e}=G();return{codeJs:e}}};function q(n,r,a,o,s,c){let l=t(`aloha-example`);return i(),e(l,{"code-js":n.codeJs,header:`separatorHtml`,"is-code-visible-default":!0},null,8,[`code-js`])}var J=s(K,[[`render`,q]]);function Y(){return{codeJs:`const ITEMS = ["label 1", "label 2", "label 3"];

filterList(ITEMS, {
  tag: "ol",
  isSimpleArray: true,
});
// ${o([`label 1`,`label 2`,`label 3`],{tag:`ol`,isSimpleArray:!0})}`}}var X={name:`PageFilterListTag`,components:{AlohaExample:l},setup(){let{codeJs:e}=Y();return{codeJs:e}}};function Z(n,r,a,o,s,c){let l=t(`aloha-example`);return i(),e(l,{"code-js":n.codeJs,header:`tag`,"is-code-visible-default":!0},null,8,[`code-js`])}var Q=s(X,[[`render`,Z]]);function $(){return{argumentsText:[{value:`array`,types:[`Array`],text:`_PAGE_FILTER_LIST_ARGUMENTS_ARRAY_`},{value:`[defaultValue=""]`,types:[`String`],text:`_PAGE_FILTER_LIST_ARGUMENTS_DEFAULT_VALUE_`},{value:`[isHtml=true]`,types:[`Boolean`],text:`_PAGE_FILTER_LIST_ARGUMENTS_IS_HTML_`},{value:`[isSimpleArray=false]`,types:[`Boolean`],text:`_PAGE_FILTER_LIST_ARGUMENTS_IS_SIMPLE_ARRAY_`},{value:`[keyChildren=""]`,types:[`String`],text:`_PAGE_FILTER_LIST_ARGUMENTS_KEY_CHILDREN_`},{value:`[keyLabel=""]`,types:[`String`],text:`_PAGE_FILTER_LIST_ARGUMENTS_KEY_LABEL_`},{value:`[keyLabelCallback]`,types:[`Function`],text:`_PAGE_FILTER_LIST_ARGUMENTS_KEY_LABEL_CALLBACK_`},{value:`[lastSeparator]`,types:[`String`],text:`_PAGE_FILTER_LIST_ARGUMENTS_LAST_SEPARATOR_`},{value:`[listClass=""]`,types:[`String`],text:`_PAGE_FILTER_LIST_ARGUMENTS_LIST_CLASS_`},{value:`[separator]`,types:[`String`],text:`_PAGE_FILTER_LIST_ARGUMENTS_SEPARATOR_`},{value:`[separatorHtml=""]`,types:[`String`],text:`_PAGE_FILTER_LIST_ARGUMENTS_SEPARATOR_HTML_`},{value:`[tag="ul"]`,types:[`String`],text:`_PAGE_FILTER_LIST_ARGUMENTS_TAG_`}]}}function te(){return{pageTitle:`filterList`}}var ne=`import {
  describe,
  expect,
  it,
} from "vitest";

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


`,re={name:`PageFilterList`,components:{AlohaPage:c,ATranslation:a,PageFilterArguments:d,PageFilterImportCompositionApi:p,PageFilterImportFunction:u,PageFilterListIsHtml:_,PageFilterListIsSimpleArray:x,PageFilterListIsSimpleArrayTree:T,PageFilterListKeyChildren:k,PageFilterListKeyLabel:N,PageFilterListKeyLabelCallback:L,PageFilterListListClass:ee,PageFilterListSeparator:W,PageFilterListSeparatorHtml:J,PageFilterListTag:Q,PageFilterTest:f},setup(){let{pageTitle:e}=te(),{argumentsText:t}=$();return{argumentsText:t,pageTitle:e,test:ne}}};function ie(a,o,s,c,l,u){let d=t(`a-translation`),f=t(`page-filter-import-function`),p=t(`page-filter-import-composition-api`),m=t(`page-filter-arguments`),h=t(`page-filter-list-is-simple-array`),g=t(`page-filter-list-key-label`),_=t(`page-filter-list-key-label-callback`),v=t(`page-filter-list-is-html`),y=t(`page-filter-list-separator`),b=t(`page-filter-list-separator-html`),x=t(`page-filter-list-tag`),S=t(`page-filter-list-list-class`),C=t(`page-filter-list-key-children`),w=t(`page-filter-list-is-simple-array-tree`),T=t(`page-filter-test`),E=t(`aloha-page`);return i(),e(E,{"page-title":a.pageTitle},{body:r(()=>[n(d,{tag:`p`,html:`_PAGE_FILTER_LIST_DESCRIPTION_`}),n(f,{"function-name":`filterList`,"type-import":`filters`}),n(p,{"function-name":`filterList`}),n(m,{"arguments-text":a.argumentsText,"function-description":`filterList(array, { [defaultValue=""], [isHtml=true], [isSimpleArray=false], [keyChildren=""], [keyLabel=""], [keyLabelCallback], [lastSeparator], [listClass=""], [separator], [separatorHtml=", "], [tag="ul"] })`},null,8,[`arguments-text`]),n(h),n(g),n(_),n(v),n(y),n(b),n(x),n(S),n(C),n(w),n(T,{test:a.test},null,8,[`test`])]),_:1},8,[`page-title`])}var ae=s(re,[[`render`,ie]]);export{ae as default};