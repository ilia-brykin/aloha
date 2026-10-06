import{Tt as e,Ut as t,kt as n,qt as r,zt as i}from"./chunk.vendor.CZPox1kV.js";import{Z as a,ot as o,t as s}from"./bundle.index.BmSiyQNH.js";import{n as c,t as l}from"./chunk.AlohaExample.CD4LlhAz.js";import{n as u,r as d,t as f}from"./chunk.PageFilterTest.DKKVbW-u.js";import{t as p}from"./chunk.PageFilterImportCompositionApi.BMcX_RFK.js";var m={conditions:[{if:e=>e>3,then:e=>`(${e*3} Aloha)`},{if:e=>e<2,then:`aloha`}],defaultValue:e=>e/2};function h(){return{codeJs:`const options = {
  conditions: [
    {
      if: value => value > 3,
      then: value => \`(\${ value * 3 } Aloha)\`,
    },
    {
      if: value => value < 2,
      then: "aloha",
    },
  ],
  defaultValue: value => value / 2,
};

filterValueByCondition(4, options);
// ${o(4,m)}
filterValueByCondition(1, options);
// ${o(1,m)}
filterValueByCondition(2, options);
// ${o(2,m)}`}}var g={name:`PageFilterValueByConditionFunction`,components:{AlohaExample:l},setup(){let{codeJs:e}=h();return{codeJs:e}}};function _(n,r,a,o,s,c){let l=t(`aloha-example`);return i(),e(l,{"code-js":n.codeJs,header:`_PAGE_FILTER_VALUE_BY_CONDITION_FUNCTION_CONDITIONS_`,"is-code-visible-default":!0},null,8,[`code-js`])}var v=s(g,[[`render`,_]]),y={conditions:[{if:e=>e===0,then:`zero`},{if:`value > 3`,thenTemplate:"(${ value * 3 } Aloha)"},{if:e=>e<2,then:e=>`small: ${e}`}],defaultTemplate:"${ value / 2 }"};function b(){return{codeJs:`const options = {
  conditions: [
    {
      if: value => value === 0,
      then: "zero",
    },
    {
      if: "value > 3",
      thenTemplate: "(\${ value * 3 } Aloha)",
    },
    {
      if: value => value < 2,
      then: value => \`small: \${ value }\`,
    },
  ],
  defaultTemplate: "\${ value / 2 }",
};

filterValueByCondition(0, options);
// ${o(0,y)}
filterValueByCondition(4, options);
// ${o(4,y)}
filterValueByCondition(1, options);
// ${o(1,y)}
filterValueByCondition(2, options);
// ${o(2,y)}`}}var x={name:`PageFilterValueByConditionMixed`,components:{AlohaExample:l},setup(){let{codeJs:e}=b();return{codeJs:e}}};function S(n,r,a,o,s,c){let l=t(`aloha-example`);return i(),e(l,{"code-js":n.codeJs,header:`_PAGE_FILTER_VALUE_BY_CONDITION_MIXED_CONDITIONS_`,"is-code-visible-default":!0},null,8,[`code-js`])}var C=s(x,[[`render`,S]]),w={conditions:[{if:`value > 3`,thenTemplate:"(${ value * 3 } Aloha)"},{if:`value < 2`,then:`aloha`}],defaultTemplate:"${ value / 2 }"};function T(){return{codeJs:`const options = {
  conditions: [
    {
      if: "value > 3",
      thenTemplate: "(\${ value * 3 } Aloha)",
    },
    {
      if: "value < 2",
      then: "aloha",
    },
  ],
  defaultTemplate: "\${ value / 2 }",
};

filterValueByCondition(4, options);
// ${o(4,w)}
filterValueByCondition(1, options);
// ${o(1,w)}
filterValueByCondition(2, options);
// ${o(2,w)}`}}var E={name:`PageFilterValueByConditionStringExpression`,components:{AlohaExample:l},setup(){let{codeJs:e}=T();return{codeJs:e}}};function D(n,r,a,o,s,c){let l=t(`aloha-example`);return i(),e(l,{"code-js":n.codeJs,header:`_PAGE_FILTER_VALUE_BY_CONDITION_STRING_EXPRESSIONS_AND_TEMPLATES_`,"is-code-visible-default":!0},null,8,[`code-js`])}var O=s(E,[[`render`,D]]);function k(){return{argumentsText:[{value:`value`,types:[`Any`],text:`_PAGE_FILTER_VALUE_BY_CONDITION_ARGUMENTS_VALUE_`},{value:`[conditions=[]]`,types:[`Array`],text:`_PAGE_FILTER_VALUE_BY_CONDITION_ARGUMENTS_CONDITIONS_`},{value:`[conditions[].if]`,types:[`Function`,`String`],text:`_PAGE_FILTER_VALUE_BY_CONDITION_ARGUMENTS_IF_`},{value:`[conditions[].then]`,types:[`Any`,`Function`],text:`_PAGE_FILTER_VALUE_BY_CONDITION_ARGUMENTS_THEN_`},{value:`[conditions[].thenTemplate]`,types:[`String`],text:`_PAGE_FILTER_VALUE_BY_CONDITION_ARGUMENTS_THEN_TEMPLATE_`},{value:`[defaultValue=""]`,types:[`Any`,`Function`],text:`_PAGE_FILTER_VALUE_BY_CONDITION_ARGUMENTS_DEFAULT_VALUE_`},{value:`[defaultTemplate]`,types:[`String`],text:`_PAGE_FILTER_VALUE_BY_CONDITION_ARGUMENTS_DEFAULT_TEMPLATE_`}]}}function A(){return{pageTitle:`filterValueByCondition`}}var j=`import {
  describe,
  expect,
  it,
} from "vitest";

import filterValueByCondition from "../filterValueByCondition";

describe("Filter value by condition", () => {
  it("Returns the value from the first matching function condition", () => {
    const conditions = [
      {
        if: value => value > 3,
        then: value => \`(\${ value * 3 } Aloha)\`,
      },
      {
        if: value => value < 2,
        then: "aloha",
      },
    ];

    expect(filterValueByCondition(4, { conditions })).toBe("(12 Aloha)");
  });

  it("Returns the value from the first matching string expression condition", () => {
    const conditions = [
      {
        if: "value > 3",
        thenTemplate: \`(\\\${ value * 3 } Aloha)\`,
      },
      {
        if: "value < 2",
        then: "aloha",
      },
    ];

    expect(filterValueByCondition(1, { conditions })).toBe("aloha");
    expect(filterValueByCondition(4, { conditions })).toBe("(12 Aloha)");
  });

  it("Returns defaultValue if no condition matches", () => {
    const conditions = [
      {
        if: "value > 3",
        then: "aloha",
      },
    ];

    expect(filterValueByCondition(2, {
      conditions,
      defaultValue: value => value / 2,
    })).toBe(1);
  });

  it("Returns defaultTemplate if no condition matches", () => {
    const conditions = [
      {
        if: "value > 3",
        then: "aloha",
      },
    ];

    expect(filterValueByCondition(2, {
      conditions,
      defaultTemplate: \`\\\${ value / 2 }\`,
    })).toBe("1");
  });

  it("Returns an empty string if no condition matches and no default value is set", () => {
    const conditions = [
      {
        if: "value > 3",
        then: "aloha",
      },
    ];

    expect(filterValueByCondition(2, { conditions })).toBe("");
  });

  it("Skips invalid string expressions", () => {
    const conditions = [
      {
        if: "value >",
        then: "invalid",
      },
      {
        if: "value < 3",
        then: "valid",
      },
    ];

    expect(filterValueByCondition(2, { conditions })).toBe("valid");
  });
});
`,M={name:`PageFilterValueByCondition`,components:{AlohaPage:c,ATranslation:a,PageFilterArguments:d,PageFilterImportCompositionApi:p,PageFilterImportFunction:u,PageFilterTest:f,PageFilterValueByConditionFunction:v,PageFilterValueByConditionMixed:C,PageFilterValueByConditionStringExpression:O},setup(){let{pageTitle:e}=A(),{argumentsText:t}=k();return{argumentsText:t,pageTitle:e,test:j}}};function N(a,o,s,c,l,u){let d=t(`a-translation`),f=t(`page-filter-import-function`),p=t(`page-filter-import-composition-api`),m=t(`page-filter-arguments`),h=t(`page-filter-value-by-condition-function`),g=t(`page-filter-value-by-condition-string-expression`),_=t(`page-filter-value-by-condition-mixed`),v=t(`page-filter-test`),y=t(`aloha-page`);return i(),e(y,{"page-title":a.pageTitle},{body:r(()=>[n(d,{tag:`p`,html:`_PAGE_FILTER_VALUE_BY_CONDITION_DESCRIPTION_`}),n(d,{tag:`p`,html:`_PAGE_FILTER_VALUE_BY_CONDITION_SECURITY_`}),n(f,{"function-name":`filterValueByCondition`,"type-import":`filters`}),n(p,{"function-name":`filterValueByCondition`}),n(m,{"arguments-text":a.argumentsText,"function-description":`filterValueByCondition(value, { [conditions=[]], [defaultValue=""], [defaultTemplate] })`},null,8,[`arguments-text`]),n(h),n(g),n(_),n(v,{test:a.test},null,8,[`test`])]),_:1},8,[`page-title`])}var P=s(M,[[`render`,N]]);export{P as default};