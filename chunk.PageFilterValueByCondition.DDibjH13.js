import{A as T,a as B}from"./chunk.AlohaExample.DvNteu_Q.js";import{P as C,a as $,b as N}from"./chunk.PageFilterTest.DqAaU4vw.js";import{P}from"./chunk.PageFilterImportCompositionApi.SJpM0ScA.js";import{aP as t,_ as u,A as x}from"./bundle.index.C9ZOQ16P.js";import{Z as r,Y as c,f as n,aV as O,a0 as o}from"./chunk.vendor.hDEvjBSB.js";import"./chunk.vendor-lodash.3C581RLn.js";import"./chunk.APageTabTitle.DAqWP6fw.js";import"./chunk.AlohaHighlightjs.B1uKbtWp.js";import"./chunk.translations-ar.D5QoWFzr.js";import"./chunk.translations-de.es3zy6A0.js";import"./chunk.translations-en.CYlx3VY3.js";import"./chunk.translations-es.zp4usr_r.js";import"./chunk.translations-fr.DtjnUZtG.js";import"./chunk.translations-hr.DZGEx8XX.js";import"./chunk.translations-it.D2jWnc95.js";import"./chunk.translations-ru.CUfkkkdW.js";const f={conditions:[{if:e=>e>3,then:e=>`(${e*3} Aloha)`},{if:e=>e<2,then:"aloha"}],defaultValue:e=>e/2};function F(){return{codeJs:`const options = {
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
// ${t(4,f)}
filterValueByCondition(1, options);
// ${t(1,f)}
filterValueByCondition(2, options);
// ${t(2,f)}`}}const L={name:"PageFilterValueByConditionFunction",components:{AlohaExample:T},setup(){const{codeJs:e}=F();return{codeJs:e}}};function R(e,a,l,_,p,d){const i=n("aloha-example");return r(),c(i,{"code-js":e.codeJs,header:"_PAGE_FILTER_VALUE_BY_CONDITION_FUNCTION_CONDITIONS_","is-code-visible-default":!0},null,8,["code-js"])}const S=u(L,[["render",R]]),s={conditions:[{if:e=>e===0,then:"zero"},{if:"value > 3",thenTemplate:"(${ value * 3 } Aloha)"},{if:e=>e<2,then:e=>`small: ${e}`}],defaultTemplate:"${ value / 2 }"};function U(){return{codeJs:`const options = {
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
// ${t(0,s)}
filterValueByCondition(4, options);
// ${t(4,s)}
filterValueByCondition(1, options);
// ${t(1,s)}
filterValueByCondition(2, options);
// ${t(2,s)}`}}const D={name:"PageFilterValueByConditionMixed",components:{AlohaExample:T},setup(){const{codeJs:e}=U();return{codeJs:e}}};function G(e,a,l,_,p,d){const i=n("aloha-example");return r(),c(i,{"code-js":e.codeJs,header:"_PAGE_FILTER_VALUE_BY_CONDITION_MIXED_CONDITIONS_","is-code-visible-default":!0},null,8,["code-js"])}const b=u(D,[["render",G]]),m={conditions:[{if:"value > 3",thenTemplate:"(${ value * 3 } Aloha)"},{if:"value < 2",then:"aloha"}],defaultTemplate:"${ value / 2 }"};function J(){return{codeJs:`const options = {
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
// ${t(4,m)}
filterValueByCondition(1, options);
// ${t(1,m)}
filterValueByCondition(2, options);
// ${t(2,m)}`}}const Y={name:"PageFilterValueByConditionStringExpression",components:{AlohaExample:T},setup(){const{codeJs:e}=J();return{codeJs:e}}};function M(e,a,l,_,p,d){const i=n("aloha-example");return r(),c(i,{"code-js":e.codeJs,header:"_PAGE_FILTER_VALUE_BY_CONDITION_STRING_EXPRESSIONS_AND_TEMPLATES_","is-code-visible-default":!0},null,8,["code-js"])}const j=u(Y,[["render",M]]);function k(){return{argumentsText:[{value:"value",types:["Any"],text:"_PAGE_FILTER_VALUE_BY_CONDITION_ARGUMENTS_VALUE_"},{value:"[conditions=[]]",types:["Array"],text:"_PAGE_FILTER_VALUE_BY_CONDITION_ARGUMENTS_CONDITIONS_"},{value:"[conditions[].if]",types:["Function","String"],text:"_PAGE_FILTER_VALUE_BY_CONDITION_ARGUMENTS_IF_"},{value:"[conditions[].then]",types:["Any","Function"],text:"_PAGE_FILTER_VALUE_BY_CONDITION_ARGUMENTS_THEN_"},{value:"[conditions[].thenTemplate]",types:["String"],text:"_PAGE_FILTER_VALUE_BY_CONDITION_ARGUMENTS_THEN_TEMPLATE_"},{value:'[defaultValue=""]',types:["Any","Function"],text:"_PAGE_FILTER_VALUE_BY_CONDITION_ARGUMENTS_DEFAULT_VALUE_"},{value:"[defaultTemplate]",types:["String"],text:"_PAGE_FILTER_VALUE_BY_CONDITION_ARGUMENTS_DEFAULT_TEMPLATE_"}]}}function z(){return{pageTitle:"filterValueByCondition"}}const H=`import {
  describe,
  expect,
  it,
} from "@jest/globals";

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
        thenTemplate: "(\${ value * 3 } Aloha)",
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
      defaultTemplate: "\${ value / 2 }",
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
`,X={name:"PageFilterValueByCondition",components:{AlohaPage:B,ATranslation:x,PageFilterArguments:N,PageFilterImportCompositionApi:P,PageFilterImportFunction:$,PageFilterTest:C,PageFilterValueByConditionFunction:S,PageFilterValueByConditionMixed:b,PageFilterValueByConditionStringExpression:j},setup(){const{pageTitle:e}=z(),{argumentsText:a}=k();return{argumentsText:a,pageTitle:e,test:H}}};function w(e,a,l,_,p,d){const i=n("a-translation"),h=n("page-filter-import-function"),v=n("page-filter-import-composition-api"),A=n("page-filter-arguments"),E=n("page-filter-value-by-condition-function"),g=n("page-filter-value-by-condition-string-expression"),I=n("page-filter-value-by-condition-mixed"),V=n("page-filter-test"),y=n("aloha-page");return r(),c(y,{"page-title":e.pageTitle},{body:O(()=>[o(i,{tag:"p",html:"_PAGE_FILTER_VALUE_BY_CONDITION_DESCRIPTION_"}),o(i,{tag:"p",html:"_PAGE_FILTER_VALUE_BY_CONDITION_SECURITY_"}),o(h,{"function-name":"filterValueByCondition","type-import":"filters"}),o(v,{"function-name":"filterValueByCondition"}),o(A,{"arguments-text":e.argumentsText,"function-description":'filterValueByCondition(value, { [conditions=[]], [defaultValue=""], [defaultTemplate] })'},null,8,["arguments-text"]),o(E),o(g),o(I),o(V,{test:e.test},null,8,["test"])]),_:1},8,["page-title"])}const _e=u(X,[["render",w]]);export{_e as default};
