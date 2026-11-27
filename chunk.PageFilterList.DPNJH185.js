import{t as e}from"./chunk.AlohaPage.BIw9NYpI.js";import{n as t,r as n,t as r}from"./chunk.PageFilterTest.CI3luh4y.js";import{t as i}from"./chunk.PageFilterImportCompositionApi.CoQWM7Rj.js";import{t as a}from"./chunk.AlohaExample.CEueonn8.js";import{Pt as o,mn as s,t as c}from"./bundle.index.Dor-y9Rj.js";import{Jt as l,Ut as u,mn as d,on as f,un as p}from"./chunk.vendor.Bjd2408Z.js";function m(){return{codeJs:`const ITEMS = ["label 1", "label 2", "label 3"];

filterList(ITEMS, {
  isHtml: false,
  isSimpleArray: true,
});
// ${o([`label 1`,`label 2`,`label 3`],{isHtml:!1,isSimpleArray:!0})}`}}var h={name:`PageFilterListIsHtml`,components:{AlohaExample:a},setup(){let{codeJs:e}=m();return{codeJs:e}}};function g(e,t,n,r,i,a){let o=p(`aloha-example`);return f(),u(o,{"code-js":e.codeJs,header:`isHtml=false`,"is-code-visible-default":!0},null,8,[`code-js`])}var _=c(h,[[`render`,g]]);function v(){return{codeJs:`const ITEMS = ["label 1", "label 2", "label 3"];

filterList(ITEMS, {
  isSimpleArray: true,
});
// ${o([`label 1`,`label 2`,`label 3`],{isSimpleArray:!0})}`}}var y={name:`PageFilterListIsSimpleArray`,components:{AlohaExample:a},setup(){let{codeJs:e}=v();return{codeJs:e}}};function b(e,t,n,r,i,a){let o=p(`aloha-example`);return f(),u(o,{"code-js":e.codeJs,header:`isSimpleArray=true`,"is-code-visible-default":!0},null,8,[`code-js`])}var x=c(y,[[`render`,b]]);function S(){return{codeJs:`const ITEMS = [
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
// ${o([`x0`,[`x1`,[`x1.1`,`x1.2`]],`x3`],{isSimpleArray:!0})}`}}var C={name:`PageFilterListIsSimpleArrayTree`,components:{AlohaExample:a},setup(){let{codeJs:e}=S();return{codeJs:e}}};function w(e,t,n,r,i,a){let o=p(`aloha-example`);return f(),u(o,{"code-js":e.codeJs,header:`_PAGE_FILTER_LIST_IS_SIMPLE_ARRAY_TREE_HEADER_`,"is-code-visible-default":!0},null,8,[`code-js`])}var T=c(C,[[`render`,w]]);function E(){return{codeJs:`const ITEMS = [
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
// ${o([{label:`Level 1`,children:[{label:`Level 1.1`,children:[{label:`Level 1.1.1`},{label:`Level 1.1.2`}]},{label:`Level 1.2`}]},{label:`Level 2`,children:[{label:`Level 2.1`},{label:`Level 2.2`}]}],{keyLabel:`label`,keyChildren:`children`})}`}}var D={name:`PageFilterListKeyChildren`,components:{AlohaExample:a},setup(){let{codeJs:e}=E();return{codeJs:e}}};function O(e,t,n,r,i,a){let o=p(`aloha-example`);return f(),u(o,{"code-js":e.codeJs,header:`keyChildren`,"is-code-visible-default":!0},null,8,[`code-js`])}var k=c(D,[[`render`,O]]);function A(){return{codeJs:`const ITEMS = [
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
// ${o([{label:`label 1`},{label:`label 2`},{label:`label 3`},{label:`label 4`}],{keyLabel:`label`})}`}}var j={name:`PageFilterListKeyLabel`,components:{AlohaExample:a},setup(){let{codeJs:e}=A();return{codeJs:e}}};function M(e,t,n,r,i,a){let o=p(`aloha-example`);return f(),u(o,{"code-js":e.codeJs,header:`keyLabel`,"is-code-visible-default":!0},null,8,[`code-js`])}var N=c(j,[[`render`,M]]);function P(){return{codeJs:`const ITEMS = [
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
// ${o([{label:`label 1`},{label:`label 2`},{label:`label 3`},{label:`label 4`}],{keyLabelCallback:({item:e})=>`+ ${e.label}`})}`}}var F={name:`PageFilterListKeyLabelCallback`,components:{AlohaExample:a},setup(){let{codeJs:e}=P();return{codeJs:e}}};function I(e,t,n,r,i,a){let o=p(`aloha-example`);return f(),u(o,{"code-js":e.codeJs,header:`keyLabelCallback`,"is-code-visible-default":!0},null,8,[`code-js`])}var L=c(F,[[`render`,I]]);function R(){return{codeJs:`const ITEMS = ["label 1", "label 2", "label 3"];

filterList(ITEMS, {
  listClass: "a_list_without_styles",
  isSimpleArray: true,
});
// ${o([`label 1`,`label 2`,`label 3`],{listClass:`a_list_without_styles`,isSimpleArray:!0})}`}}var z={name:`PageFilterListListClass`,components:{AlohaExample:a},setup(){let{codeJs:e}=R();return{codeJs:e}}};function ee(e,t,n,r,i,a){let o=p(`aloha-example`);return f(),u(o,{"code-js":e.codeJs,header:`listClass`,"is-code-visible-default":!0},null,8,[`code-js`])}var B=c(z,[[`render`,ee]]);function V(){let e=[`label 1`,`label 2`,`label 3`];return{codeJs:`const ITEMS = ["label 1", "label 2", "label 3"];

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
// ${o(e,{isHtml:!0,isSimpleArray:!0,separator:`;`})}`}}var H={name:`PageFilterListSeparator`,components:{AlohaExample:a},setup(){let{codeJs:e}=V();return{codeJs:e}}};function U(e,t,n,r,i,a){let o=p(`aloha-example`);return f(),u(o,{"code-js":e.codeJs,header:`separator / lastSeparator`,"is-code-visible-default":!0},null,8,[`code-js`])}var W=c(H,[[`render`,U]]);function G(){let e=[`label 1`,`label 2`,`label 3`];return{codeJs:`const ITEMS = ["label 1", "label 2", "label 3"];

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
// ${o(e,{isHtml:!0,isSimpleArray:!0,separatorHtml:`<div>Aloha</div>`})}`}}var K={name:`PageFilterListSeparatorHtml`,components:{AlohaExample:a},setup(){let{codeJs:e}=G();return{codeJs:e}}};function q(e,t,n,r,i,a){let o=p(`aloha-example`);return f(),u(o,{"code-js":e.codeJs,header:`separatorHtml`,"is-code-visible-default":!0},null,8,[`code-js`])}var J=c(K,[[`render`,q]]);function Y(){return{codeJs:`const ITEMS = ["label 1", "label 2", "label 3"];

filterList(ITEMS, {
  tag: "ol",
  isSimpleArray: true,
});
// ${o([`label 1`,`label 2`,`label 3`],{tag:`ol`,isSimpleArray:!0})}`}}var X={name:`PageFilterListTag`,components:{AlohaExample:a},setup(){let{codeJs:e}=Y();return{codeJs:e}}};function Z(e,t,n,r,i,a){let o=p(`aloha-example`);return f(),u(o,{"code-js":e.codeJs,header:`tag`,"is-code-visible-default":!0},null,8,[`code-js`])}var Q=c(X,[[`render`,Z]]);function $(){return{argumentsText:[{value:`array`,types:[`Array`],text:`_PAGE_FILTER_LIST_ARGUMENTS_ARRAY_`},{value:`[defaultValue=""]`,types:[`String`],text:`_PAGE_FILTER_LIST_ARGUMENTS_DEFAULT_VALUE_`},{value:`[isHtml=true]`,types:[`Boolean`],text:`_PAGE_FILTER_LIST_ARGUMENTS_IS_HTML_`},{value:`[isSimpleArray=false]`,types:[`Boolean`],text:`_PAGE_FILTER_LIST_ARGUMENTS_IS_SIMPLE_ARRAY_`},{value:`[keyChildren=""]`,types:[`String`],text:`_PAGE_FILTER_LIST_ARGUMENTS_KEY_CHILDREN_`},{value:`[keyLabel=""]`,types:[`String`],text:`_PAGE_FILTER_LIST_ARGUMENTS_KEY_LABEL_`},{value:`[keyLabelCallback]`,types:[`Function`],text:`_PAGE_FILTER_LIST_ARGUMENTS_KEY_LABEL_CALLBACK_`},{value:`[lastSeparator]`,types:[`String`],text:`_PAGE_FILTER_LIST_ARGUMENTS_LAST_SEPARATOR_`},{value:`[listClass=""]`,types:[`String`],text:`_PAGE_FILTER_LIST_ARGUMENTS_LIST_CLASS_`},{value:`[separator]`,types:[`String`],text:`_PAGE_FILTER_LIST_ARGUMENTS_SEPARATOR_`},{value:`[separatorHtml=""]`,types:[`String`],text:`_PAGE_FILTER_LIST_ARGUMENTS_SEPARATOR_HTML_`},{value:`[tag="ul"]`,types:[`String`],text:`_PAGE_FILTER_LIST_ARGUMENTS_TAG_`}]}}function te(){return{pageTitle:`filterList`}}var ne=`import {
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


`,re={name:`PageFilterList`,components:{AlohaPage:e,ATranslation:s,PageFilterArguments:n,PageFilterImportCompositionApi:i,PageFilterImportFunction:t,PageFilterListIsHtml:_,PageFilterListIsSimpleArray:x,PageFilterListIsSimpleArrayTree:T,PageFilterListKeyChildren:k,PageFilterListKeyLabel:N,PageFilterListKeyLabelCallback:L,PageFilterListListClass:B,PageFilterListSeparator:W,PageFilterListSeparatorHtml:J,PageFilterListTag:Q,PageFilterTest:r},setup(){let{pageTitle:e}=te(),{argumentsText:t}=$();return{argumentsText:t,pageTitle:e,test:ne}}};function ie(e,t,n,r,i,a){let o=p(`a-translation`),s=p(`page-filter-import-function`),c=p(`page-filter-import-composition-api`),m=p(`page-filter-arguments`),h=p(`page-filter-list-is-simple-array`),g=p(`page-filter-list-key-label`),_=p(`page-filter-list-key-label-callback`),v=p(`page-filter-list-is-html`),y=p(`page-filter-list-separator`),b=p(`page-filter-list-separator-html`),x=p(`page-filter-list-tag`),S=p(`page-filter-list-list-class`),C=p(`page-filter-list-key-children`),w=p(`page-filter-list-is-simple-array-tree`),T=p(`page-filter-test`),E=p(`aloha-page`);return f(),u(E,{"page-title":e.pageTitle},{body:d(()=>[l(o,{tag:`p`,html:`_PAGE_FILTER_LIST_DESCRIPTION_`}),l(s,{"function-name":`filterList`,"type-import":`filters`}),l(c,{"function-name":`filterList`}),l(m,{"arguments-text":e.argumentsText,"function-description":`filterList(array, { [defaultValue=""], [isHtml=true], [isSimpleArray=false], [keyChildren=""], [keyLabel=""], [keyLabelCallback], [lastSeparator], [listClass=""], [separator], [separatorHtml=", "], [tag="ul"] })`},null,8,[`arguments-text`]),l(h),l(g),l(_),l(v),l(y),l(b),l(x),l(S),l(C),l(w),l(T,{test:e.test},null,8,[`test`])]),_:1},8,[`page-title`])}var ae=c(re,[[`render`,ie]]);export{ae as default};