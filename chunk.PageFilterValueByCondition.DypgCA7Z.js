import{t as e}from"./chunk.AlohaPage.BX4p4AoC.js";import{n as t,r as n,t as r}from"./chunk.PageFilterTest.Byh0zWnC.js";import{t as i}from"./chunk.PageFilterImportCompositionApi.BwHWEVWt.js";import{t as a}from"./chunk.AlohaExample.Dv0nVKNW.js";import{it as o,pt as s}from"./bundle.index.TygFUoMz.js";import{Bt as c,It as l,Zt as u,an as d,tn as f}from"./chunk.vendor.C763F6L5.js";import{t as p}from"./chunk._plugin-vue_export-helper.BDNMzG2s.js";var m={conditions:[{if:e=>e>3,then:e=>`(${e*3} Aloha)`},{if:e=>e<2,then:`aloha`}],defaultValue:e=>e/2};function h(){return{codeJs:`const options = {
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
// ${s(4,m)}
filterValueByCondition(1, options);
// ${s(1,m)}
filterValueByCondition(2, options);
// ${s(2,m)}`}}var g={name:`PageFilterValueByConditionFunction`,components:{AlohaExample:a},setup(){let{codeJs:e}=h();return{codeJs:e}}};function _(e,t,n,r,i,a){let o=f(`aloha-example`);return u(),l(o,{"code-js":e.codeJs,header:`_PAGE_FILTER_VALUE_BY_CONDITION_FUNCTION_CONDITIONS_`,"is-code-visible-default":!0},null,8,[`code-js`])}var v=p(g,[[`render`,_]]),y={conditions:[{if:e=>e===0,then:`zero`},{if:`value > 3`,thenTemplate:"(${ value * 3 } Aloha)"},{if:e=>e<2,then:e=>`small: ${e}`}],defaultTemplate:"${ value / 2 }"};function b(){return{codeJs:`const options = {
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
// ${s(0,y)}
filterValueByCondition(4, options);
// ${s(4,y)}
filterValueByCondition(1, options);
// ${s(1,y)}
filterValueByCondition(2, options);
// ${s(2,y)}`}}var x={name:`PageFilterValueByConditionMixed`,components:{AlohaExample:a},setup(){let{codeJs:e}=b();return{codeJs:e}}};function S(e,t,n,r,i,a){let o=f(`aloha-example`);return u(),l(o,{"code-js":e.codeJs,header:`_PAGE_FILTER_VALUE_BY_CONDITION_MIXED_CONDITIONS_`,"is-code-visible-default":!0},null,8,[`code-js`])}var C=p(x,[[`render`,S]]),w={conditions:[{if:`value > 3`,thenTemplate:"(${ value * 3 } Aloha)"},{if:`value < 2`,then:`aloha`}],defaultTemplate:"${ value / 2 }"};function T(){return{codeJs:`const options = {
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
// ${s(4,w)}
filterValueByCondition(1, options);
// ${s(1,w)}
filterValueByCondition(2, options);
// ${s(2,w)}`}}var E={name:`PageFilterValueByConditionStringExpression`,components:{AlohaExample:a},setup(){let{codeJs:e}=T();return{codeJs:e}}};function D(e,t,n,r,i,a){let o=f(`aloha-example`);return u(),l(o,{"code-js":e.codeJs,header:`_PAGE_FILTER_VALUE_BY_CONDITION_STRING_EXPRESSIONS_AND_TEMPLATES_`,"is-code-visible-default":!0},null,8,[`code-js`])}var O=p(E,[[`render`,D]]);function k(){return{argumentsText:[{value:`value`,types:[`Any`],text:`_PAGE_FILTER_VALUE_BY_CONDITION_ARGUMENTS_VALUE_`},{value:`[conditions=[]]`,types:[`Array`],text:`_PAGE_FILTER_VALUE_BY_CONDITION_ARGUMENTS_CONDITIONS_`},{value:`[conditions[].if]`,types:[`Function`,`String`],text:`_PAGE_FILTER_VALUE_BY_CONDITION_ARGUMENTS_IF_`},{value:`[conditions[].then]`,types:[`Any`,`Function`],text:`_PAGE_FILTER_VALUE_BY_CONDITION_ARGUMENTS_THEN_`},{value:`[conditions[].thenTemplate]`,types:[`String`],text:`_PAGE_FILTER_VALUE_BY_CONDITION_ARGUMENTS_THEN_TEMPLATE_`},{value:`[defaultValue=""]`,types:[`Any`,`Function`],text:`_PAGE_FILTER_VALUE_BY_CONDITION_ARGUMENTS_DEFAULT_VALUE_`},{value:`[defaultTemplate]`,types:[`String`],text:`_PAGE_FILTER_VALUE_BY_CONDITION_ARGUMENTS_DEFAULT_TEMPLATE_`}]}}function A(){return{pageTitle:`filterValueByCondition`}}var j=`import {
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
`,M={name:`PageFilterValueByCondition`,components:{AlohaPage:e,ATranslation:o,PageFilterArguments:n,PageFilterImportCompositionApi:i,PageFilterImportFunction:t,PageFilterTest:r,PageFilterValueByConditionFunction:v,PageFilterValueByConditionMixed:C,PageFilterValueByConditionStringExpression:O},setup(){let{pageTitle:e}=A(),{argumentsText:t}=k();return{argumentsText:t,pageTitle:e,test:j}}};function N(e,t,n,r,i,a){let o=f(`a-translation`),s=f(`page-filter-import-function`),p=f(`page-filter-import-composition-api`),m=f(`page-filter-arguments`),h=f(`page-filter-value-by-condition-function`),g=f(`page-filter-value-by-condition-string-expression`),_=f(`page-filter-value-by-condition-mixed`),v=f(`page-filter-test`),y=f(`aloha-page`);return u(),l(y,{"page-title":e.pageTitle},{body:d(()=>[c(o,{tag:`p`,html:`_PAGE_FILTER_VALUE_BY_CONDITION_DESCRIPTION_`}),c(o,{tag:`p`,html:`_PAGE_FILTER_VALUE_BY_CONDITION_SECURITY_`}),c(s,{"function-name":`filterValueByCondition`,"type-import":`filters`}),c(p,{"function-name":`filterValueByCondition`}),c(m,{"arguments-text":e.argumentsText,"function-description":`filterValueByCondition(value, { [conditions=[]], [defaultValue=""], [defaultTemplate] })`},null,8,[`arguments-text`]),c(h),c(g),c(_),c(v,{test:e.test},null,8,[`test`])]),_:1},8,[`page-title`])}var P=p(M,[[`render`,N]]);export{P as default};