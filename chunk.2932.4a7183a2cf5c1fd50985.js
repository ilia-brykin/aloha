"use strict";(self.webpackChunkaloha_vue_docs=self.webpackChunkaloha_vue_docs||[]).push([[2932],{8371:(e,l,t)=>{t.d(l,{A:()=>a});var n=t(6365);const o={name:"PageFilterImportCompositionApi",components:{AlohaExample:t(6269).A},props:{functionName:{type:String,required:!0}},setup(e){const{codeJs:l}=function(e){const l=(0,n.lW)(e,"functionName");return{codeJs:(0,n.EW)((()=>`import AFiltersAPI from "aloha-vue/src/compositionAPI/AFiltersAPI";\n\nexport default {\n  setup() {  \n    const {\n      ${l.value},\n    } = AFiltersAPI();\n  },\n};`))}}(e);return{codeJs:l}}},a=(0,t(6262).A)(o,[["render",function(e,l){const t=(0,n.g2)("aloha-example");return(0,n.uX)(),(0,n.Wv)(t,{"code-js":e.codeJs,header:"_PAGE_FUNCTIONS_IMPORT_COMPOSITION_API_HEADER_","is-code-visible-default":!0},null,8,["code-js"])}]])},1276:(e,l,t)=>{t.r(l),t.d(l,{default:()=>x});var n=t(6365),o=t(616),a=t(7791),u=t(2382),s=t(6269),r=t(3906);const i={name:"PageFilterBooleanExample",components:{AlohaExample:s.A},setup(){const{codeJs:e}={codeJs:(0,n.EW)((()=>`filterBoolean(true);\n// ${(0,r.A)(!0)}\nfilterBoolean(false);\n// ${(0,r.A)(!1)}\n\nfilterBoolean(1);\n// ${(0,r.A)(1)}\nfilterBoolean(0);\n// ${(0,r.A)(0)}\n\nfilterBoolean("aloha");\n// ${(0,r.A)("aloha")}\nfilterBoolean("");\n// ${(0,r.A)("")}`))};return{codeJs:e}}};var f=t(6262);const c=(0,f.A)(i,[["render",function(e,l){const t=(0,n.g2)("aloha-example");return(0,n.uX)(),(0,n.Wv)(t,{"code-js":e.codeJs,header:"_A_BASIC_USAGE_","is-code-visible-default":!0},null,8,["code-js"])}]]),p={name:"PageFilterBooleanTrueFalseValues",components:{AlohaExample:s.A},setup(){const{codeJs:e}={codeJs:(0,n.EW)((()=>`filterBoolean(true, { trueValue: "1", falseValue: "0" });\n// ${(0,r.A)(!0,{trueValue:"1",falseValue:"0"})}\nfilterBoolean(false, { trueValue: "1", falseValue: "0" });\n// ${(0,r.A)(!1,{trueValue:"1",falseValue:"0"})}\n\nfilterBoolean(1, { trueValue: "true", falseValue: "false" });\n// ${(0,r.A)(1,{trueValue:"true",falseValue:"false"})}\nfilterBoolean(0, { trueValue: "true", falseValue: "false" });\n// ${(0,r.A)(0,{trueValue:"true",falseValue:"false"})}`))};return{codeJs:e}}},_=(0,f.A)(p,[["render",function(e,l){const t=(0,n.g2)("aloha-example");return(0,n.uX)(),(0,n.Wv)(t,{"code-js":e.codeJs,header:"trueValue, falseValue","is-code-visible-default":!0},null,8,["code-js"])}]]),A={name:"PageFilterBooleanUseNil",components:{AlohaExample:s.A},setup(){const{codeJs:e}={codeJs:(0,n.EW)((()=>`filterBoolean(null, { useNil: true });\n// ${(0,r.A)(null,{useNil:!0})}\nfilterBoolean(null, { useNil: false });\n// ${(0,r.A)(null,{useNil:!1})}\n\nfilterBoolean(undefined, { useNil: true });\n// ${(0,r.A)(void 0,{useNil:!0})}\nfilterBoolean(undefined, { useNil: false });\n// ${(0,r.A)(void 0,{useNil:!1})}\n\nfilterBoolean("null", { useNil: true });\n// ${(0,r.A)("null",{useNil:!0})}\nfilterBoolean("null", { useNil: false });\n// ${(0,r.A)("null",{useNil:!1})}\n\nfilterBoolean("undefined", { useNil: true });\n// ${(0,r.A)("undefined",{useNil:!0})}\nfilterBoolean("undefined", { useNil: false });\n// ${(0,r.A)("undefined",{useNil:!1})}`))};return{codeJs:e}}},B=(0,f.A)(A,[["render",function(e,l){const t=(0,n.g2)("aloha-example");return(0,n.uX)(),(0,n.Wv)(t,{"code-js":e.codeJs,header:"useNil","is-code-visible-default":!0},null,8,["code-js"])}]]);var d=t(8371),N=t(4461),g=t(7332),m=t(6837);const E={name:"PageFilterBoolean",components:{AlohaPage:o.A,ATranslation:a.A,PageFilterArguments:u.A,PageFilterBooleanExample:c,PageFilterBooleanTrueFalseValues:_,PageFilterBooleanUseNil:B,PageFilterImportCompositionApi:d.A,PageFilterImportFunction:N.A,PageFilterTest:g.A},setup(){const{pageTitle:e}={pageTitle:"filterBoolean"},{argumentsText:l}={argumentsText:[{value:"value",types:["Any"],text:"_PAGE_FILTER_BOOLEAN_ARGUMENTS_VALUE_"},{value:'[trueValue="_YES_"]',types:["String"],text:"_PAGE_FILTER_BOOLEAN_ARGUMENTS_TRUE_VALUE_"},{value:'[falseValue="_NO_"]',types:["String"],text:"_PAGE_FILTER_BOOLEAN_ARGUMENTS_FALSE_VALUE_"},{value:"[useNil=true]",types:["Boolean"],text:"_PAGE_FILTER_BOOLEAN_ARGUMENTS_USE_NIL_"}]};return{argumentsText:l,pageTitle:e,test:m}}},x=(0,f.A)(E,[["render",function(e,l){const t=(0,n.g2)("a-translation"),o=(0,n.g2)("page-filter-import-function"),a=(0,n.g2)("page-filter-import-composition-api"),u=(0,n.g2)("page-filter-arguments"),s=(0,n.g2)("page-filter-boolean-example"),r=(0,n.g2)("page-filter-boolean-true-false-values"),i=(0,n.g2)("page-filter-boolean-use-nil"),f=(0,n.g2)("page-filter-test"),c=(0,n.g2)("aloha-page");return(0,n.uX)(),(0,n.Wv)(c,{"page-title":e.pageTitle},{body:(0,n.k6)((()=>[(0,n.bF)(t,{tag:"p",html:"_PAGE_FILTER_BOOLEAN_DESCRIPTION_"}),(0,n.bF)(o,{"function-name":"filterBoolean","type-import":"filters"}),(0,n.bF)(a,{"function-name":"filterBoolean"}),(0,n.bF)(u,{"function-description":'filterBoolean(value, { [trueValue="_YES_"], [falseValue="_NO_"], [useNil=true] })',"arguments-text":e.argumentsText},null,8,["arguments-text"]),(0,n.bF)(s),(0,n.bF)(r),(0,n.bF)(i),(0,n.bF)(f,{test:e.test},null,8,["test"])])),_:1},8,["page-title"])}]])},6837:e=>{e.exports='import filterBoolean from "../filterBoolean";\n\ndescribe("filterBoolean", () => {\n  test("value=true", () => {\n    expect(filterBoolean(true)).toBe("_YES_");\n    expect(filterBoolean(123)).toBe("_YES_");\n    expect(filterBoolean("1")).toBe("_YES_");\n    expect(filterBoolean(true, { trueValue: "yes" })).toBe("yes");\n  });\n\n  test("value=false", () => {\n    expect(filterBoolean(false)).toBe("_NO_");\n    expect(filterBoolean(0)).toBe("_NO_");\n    expect(filterBoolean("")).toBe("_NO_");\n    expect(filterBoolean(false, { falseValue: "no" })).toBe("no");\n  });\n\n  test("useNil=true", () => {\n    expect(filterBoolean(undefined, { useNil: true })).toBe("");\n    expect(filterBoolean(null, { useNil: true })).toBe("");\n    expect(filterBoolean(false, { useNil: true })).toBe("_NO_");\n    expect(filterBoolean(true, { useNil: true })).toBe("_YES_");\n  });\n\n  test("useNil=false", () => {\n    expect(filterBoolean(undefined, { useNil: false })).toBe("_NO_");\n    expect(filterBoolean(null, { useNil: false })).toBe("_NO_");\n    expect(filterBoolean(false, { useNil: false })).toBe("_NO_");\n    expect(filterBoolean(true, { useNil: false })).toBe("_YES_");\n  });\n});\n\n'}}]);
//# sourceMappingURL=chunk.2932.4a7183a2cf5c1fd50985.js.map