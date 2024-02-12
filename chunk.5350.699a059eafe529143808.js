"use strict";(self.webpackChunkaloha_vue_docs=self.webpackChunkaloha_vue_docs||[]).push([[5350],{3344:(e,l,t)=>{t.d(l,{c:()=>o});var n=t(7736);const a={name:"PageFilterTest",components:{AlohaExample:t(7800).c},props:{test:{type:String,required:!0}}},o=(0,t(8152).c)(a,[["render",function(e,l){const t=(0,n.E1)("aloha-example");return(0,n.Wz)(),(0,n.Az)(t,{"code-js":e.test,header:"_PAGE_FUNCTIONS_TESTS_HEADER_","is-code-visible-default":!1},null,8,["code-js"])}]])},1456:(e,l,t)=>{t.r(l),t.d(l,{default:()=>A});var n=t(7736),a=t(184),o=t(8640),u=t(5092),s=t(7800),r=t(3668);const i={name:"PageFilterBooleanExample",components:{AlohaExample:s.c},setup(){const{codeJs:e}={codeJs:(0,n.S6)((()=>`filterBoolean(true);\n// ${(0,r.c)(!0)}\nfilterBoolean(false);\n// ${(0,r.c)(!1)}\n\nfilterBoolean(1);\n// ${(0,r.c)(1)}\nfilterBoolean(0);\n// ${(0,r.c)(0)}\n\nfilterBoolean("aloha");\n// ${(0,r.c)("aloha")}\nfilterBoolean("");\n// ${(0,r.c)("")}`))};return{codeJs:e}}};var c=t(8152);const f=(0,c.c)(i,[["render",function(e,l){const t=(0,n.E1)("aloha-example");return(0,n.Wz)(),(0,n.Az)(t,{"code-js":e.codeJs,header:"_A_BASIC_USAGE_","is-code-visible-default":!0},null,8,["code-js"])}]]),_={name:"PageFilterBooleanTrueFalseValues",components:{AlohaExample:s.c},setup(){const{codeJs:e}={codeJs:(0,n.S6)((()=>`filterBoolean(true, { trueValue: "1", falseValue: "0" });\n// ${(0,r.c)(!0,{trueValue:"1",falseValue:"0"})}\nfilterBoolean(false, { trueValue: "1", falseValue: "0" });\n// ${(0,r.c)(!1,{trueValue:"1",falseValue:"0"})}\n\nfilterBoolean(1, { trueValue: "true", falseValue: "false" });\n// ${(0,r.c)(1,{trueValue:"true",falseValue:"false"})}\nfilterBoolean(0, { trueValue: "true", falseValue: "false" });\n// ${(0,r.c)(0,{trueValue:"true",falseValue:"false"})}`))};return{codeJs:e}}},p=(0,c.c)(_,[["render",function(e,l){const t=(0,n.E1)("aloha-example");return(0,n.Wz)(),(0,n.Az)(t,{"code-js":e.codeJs,header:"trueValue, falseValue","is-code-visible-default":!0},null,8,["code-js"])}]]),B={name:"PageFilterBooleanUseNil",components:{AlohaExample:s.c},setup(){const{codeJs:e}={codeJs:(0,n.S6)((()=>`filterBoolean(null, { useNil: true });\n// ${(0,r.c)(null,{useNil:!0})}\nfilterBoolean(null, { useNil: false });\n// ${(0,r.c)(null,{useNil:!1})}\n\nfilterBoolean(undefined, { useNil: true });\n// ${(0,r.c)(void 0,{useNil:!0})}\nfilterBoolean(undefined, { useNil: false });\n// ${(0,r.c)(void 0,{useNil:!1})}\n\nfilterBoolean("null", { useNil: true });\n// ${(0,r.c)("null",{useNil:!0})}\nfilterBoolean("null", { useNil: false });\n// ${(0,r.c)("null",{useNil:!1})}\n\nfilterBoolean("undefined", { useNil: true });\n// ${(0,r.c)("undefined",{useNil:!0})}\nfilterBoolean("undefined", { useNil: false });\n// ${(0,r.c)("undefined",{useNil:!1})}`))};return{codeJs:e}}},d=(0,c.c)(B,[["render",function(e,l){const t=(0,n.E1)("aloha-example");return(0,n.Wz)(),(0,n.Az)(t,{"code-js":e.codeJs,header:"useNil","is-code-visible-default":!0},null,8,["code-js"])}]]);var E=t(2416),N=t(4140),m=t(3344),g=t(8008);const x={name:"PageFilterBoolean",components:{AlohaPage:a.c,ATranslation:o.c,PageFilterArguments:u.c,PageFilterBooleanExample:f,PageFilterBooleanTrueFalseValues:p,PageFilterBooleanUseNil:d,PageFilterImportCompositionApi:E.c,PageFilterImportFunction:N.c,PageFilterTest:m.c},setup(){const{pageTitle:e}={pageTitle:"filterBoolean"},{argumentsText:l}={argumentsText:[{value:"value",types:["Any"],text:"_PAGE_FILTER_BOOLEAN_ARGUMENTS_VALUE_"},{value:'[trueValue="_YES_"]',types:["String"],text:"_PAGE_FILTER_BOOLEAN_ARGUMENTS_TRUE_VALUE_"},{value:'[falseValue="_NO_"]',types:["String"],text:"_PAGE_FILTER_BOOLEAN_ARGUMENTS_FALSE_VALUE_"},{value:"[useNil=true]",types:["Boolean"],text:"_PAGE_FILTER_BOOLEAN_ARGUMENTS_USE_NIL_"}]};return{argumentsText:l,pageTitle:e,test:g}}},A=(0,c.c)(x,[["render",function(e,l){const t=(0,n.E1)("a-translation"),a=(0,n.E1)("page-filter-import-function"),o=(0,n.E1)("page-filter-import-composition-api"),u=(0,n.E1)("page-filter-arguments"),s=(0,n.E1)("page-filter-boolean-example"),r=(0,n.E1)("page-filter-boolean-true-false-values"),i=(0,n.E1)("page-filter-boolean-use-nil"),c=(0,n.E1)("page-filter-test"),f=(0,n.E1)("aloha-page");return(0,n.Wz)(),(0,n.Az)(f,{"page-title":e.pageTitle},{body:(0,n.Ql)((()=>[(0,n.K2)(t,{tag:"p",html:"_PAGE_FILTER_BOOLEAN_DESCRIPTION_"}),(0,n.K2)(a,{"function-name":"filterBoolean"}),(0,n.K2)(o,{"function-name":"filterBoolean"}),(0,n.K2)(u,{"function-description":'filterBoolean(value, { [trueValue="_YES_"], [falseValue="_NO_"], [useNil=true] })',"arguments-text":e.argumentsText},null,8,["arguments-text"]),(0,n.K2)(s),(0,n.K2)(r),(0,n.K2)(i),(0,n.K2)(c,{test:e.test},null,8,["test"])])),_:1},8,["page-title"])}]])},8008:e=>{e.exports='import filterBoolean from "../filterBoolean";\n\ndescribe("filterBoolean", () => {\n  test("value=true", () => {\n    expect(filterBoolean(true)).toBe("_YES_");\n    expect(filterBoolean(123)).toBe("_YES_");\n    expect(filterBoolean("1")).toBe("_YES_");\n    expect(filterBoolean(true, { trueValue: "yes" })).toBe("yes");\n  });\n\n  test("value=false", () => {\n    expect(filterBoolean(false)).toBe("_NO_");\n    expect(filterBoolean(0)).toBe("_NO_");\n    expect(filterBoolean("")).toBe("_NO_");\n    expect(filterBoolean(false, { falseValue: "no" })).toBe("no");\n  });\n\n  test("useNil=true", () => {\n    expect(filterBoolean(undefined, { useNil: true })).toBe("");\n    expect(filterBoolean(null, { useNil: true })).toBe("");\n    expect(filterBoolean(false, { useNil: true })).toBe("_NO_");\n    expect(filterBoolean(true, { useNil: true })).toBe("_YES_");\n  });\n\n  test("useNil=false", () => {\n    expect(filterBoolean(undefined, { useNil: false })).toBe("_NO_");\n    expect(filterBoolean(null, { useNil: false })).toBe("_NO_");\n    expect(filterBoolean(false, { useNil: false })).toBe("_NO_");\n    expect(filterBoolean(true, { useNil: false })).toBe("_YES_");\n  });\n});\n\n'}}]);
//# sourceMappingURL=chunk.5350.699a059eafe529143808.js.map