"use strict";(self.webpackChunkaloha_vue_docs=self.webpackChunkaloha_vue_docs||[]).push([[9969],{4317:(e,t,r)=>{r.d(t,{A:()=>u});var n=r(6365);const i={name:"PageFilterImportCompositionApi",components:{AlohaExample:r(1912).A},props:{functionName:{type:String,required:!0}},setup(e){const{codeJs:t}=function(e){const t=(0,n.lW)(e,"functionName");return{codeJs:(0,n.EW)((()=>`import AFiltersAPI from "aloha-vue/src/compositionAPI/AFiltersAPI";\n\nexport default {\n  setup() {  \n    const {\n      ${t.value},\n    } = AFiltersAPI();\n  },\n};`))}}(e);return{codeJs:t}}},u=(0,r(6262).A)(i,[["render",function(e,t){const r=(0,n.g2)("aloha-example");return(0,n.uX)(),(0,n.Wv)(r,{"code-js":e.codeJs,header:"_PAGE_FUNCTIONS_IMPORT_COMPOSITION_API_HEADER_","is-code-visible-default":!0},null,8,["code-js"])}]])},7925:(e,t,r)=>{r.r(t),r.d(t,{default:()=>F});var n=r(6365),i=r(8310),u=r(7791),o=r(6369),s=r(1912),a=r(127);const l={name:"PageFilterCurrencyDigitGrouping",components:{AlohaExample:s.A},setup(){const{codeJs:e}={codeJs:`filterCurrency(1000222.55, { digitGrouping: false });\n// ${(0,a.A)(1000222.55,{digitGrouping:!1})}\n\nfilterCurrency(1000222.55, { digitGrouping: true });\n// ${(0,a.A)(1000222.55,{digitGrouping:!0})}`};return{codeJs:e}}};var c=r(6262);const g=(0,c.A)(l,[["render",function(e,t){const r=(0,n.g2)("aloha-example");return(0,n.uX)(),(0,n.Wv)(r,{"code-js":e.codeJs,header:"digitGrouping","is-code-visible-default":!0},null,8,["code-js"])}]]),p={name:"PageFilterCurrencyDigits",components:{AlohaExample:s.A},setup(){const{codeJs:e}={codeJs:`filterCurrency(2000, { digits: 0 });\n// ${(0,a.A)(2e3,{digits:0})}\n\nfilterCurrency("25.53451", { digits: 4 });\n// ${(0,a.A)("25.53451",{digits:4})}`};return{codeJs:e}}},d=(0,c.A)(p,[["render",function(e,t){const r=(0,n.g2)("aloha-example");return(0,n.uX)(),(0,n.Wv)(r,{"code-js":e.codeJs,header:"digits","is-code-visible-default":!0},null,8,["code-js"])}]]),f={name:"PageFilterCurrencyExample",components:{AlohaExample:s.A},setup(){const{codeJs:e}={codeJs:`filterCurrency(123456);\n// ${(0,a.A)(123456)}\n\nfilterCurrency("1000000.2345");\n// ${(0,a.A)("1000000.2345")}\n\nfilterCurrency("aloha");\n// ${(0,a.A)("aloha")}\n\nfilterCurrency(undefined);\n// ${(0,a.A)(void 0)}`};return{codeJs:e}}},m=(0,c.A)(f,[["render",function(e,t){const r=(0,n.g2)("aloha-example");return(0,n.uX)(),(0,n.Wv)(r,{"code-js":e.codeJs,header:"_A_BASIC_USAGE_","is-code-visible-default":!0},null,8,["code-js"])}]]),A={name:"PageFilterCurrencySuffix",components:{AlohaExample:s.A},setup(){const{codeJs:e}={codeJs:`filterCurrency(2000, { suffix: "€" });\n// ${(0,a.A)(2e3,{suffix:"€"})}\n\nfilterCurrency("25.5", { suffix: "%" });\n// ${(0,a.A)("25.5",{suffix:"%"})}`};return{codeJs:e}}},C=(0,c.A)(A,[["render",function(e,t){const r=(0,n.g2)("aloha-example");return(0,n.uX)(),(0,n.Wv)(r,{"code-js":e.codeJs,header:"suffix","is-code-visible-default":!0},null,8,["code-js"])}]]);var _=r(4317),y=r(5475),x=r(3928);const E={name:"PageFilterCurrency",components:{AlohaPage:i.A,ATranslation:u.A,PageFilterArguments:o.A,PageFilterCurrencyDigitGrouping:g,PageFilterCurrencyDigits:d,PageFilterCurrencyExample:m,PageFilterCurrencySuffix:C,PageFilterImportCompositionApi:_.A,PageFilterImportFunction:y.A,PageFilterTest:x.A},setup(){const{pageTitle:e}={pageTitle:"filterCurrency"},{argumentsText:t}={argumentsText:[{value:"value",types:["Number","String"],text:"_PAGE_FILTER_CURRENCY_ARGUMENTS_VALUE_"},{value:'[suffix="€"]',types:["String"],text:"_PAGE_FILTER_CURRENCY_ARGUMENTS_SUFFIX_"},{value:"[digits=2]",types:["Number"],text:"_PAGE_FILTER_CURRENCY_ARGUMENTS_DIGITS_"},{value:"[digitGrouping=true]",types:["Boolean"],text:"_PAGE_FILTER_CURRENCY_ARGUMENTS_DIGIT_GROUPING_"}]};return{argumentsText:t,pageTitle:e,test:'import filterCurrency from "../filterCurrency";\n\ndescribe("filterCurrency", () => {\n  it("should properly format a given number with default parameters", () => {\n    expect(filterCurrency(1234.5678)).toEqual("1.234,57 €");\n  });\n\n  it("should properly format a given number with custom parameters", () => {\n    expect(filterCurrency(1234.5678, { suffix: "$", digits: 3, digitGrouping: false })).toEqual("1234,568 $");\n  });\n\n  it("should return undefined when a non-number value is passed", () => {\n    expect(filterCurrency(null)).toEqual("");\n  });\n});\n'}}},F=(0,c.A)(E,[["render",function(e,t){const r=(0,n.g2)("a-translation"),i=(0,n.g2)("page-filter-import-function"),u=(0,n.g2)("page-filter-import-composition-api"),o=(0,n.g2)("page-filter-arguments"),s=(0,n.g2)("page-filter-currency-example"),a=(0,n.g2)("page-filter-currency-suffix"),l=(0,n.g2)("page-filter-currency-digits"),c=(0,n.g2)("page-filter-currency-digit-grouping"),g=(0,n.g2)("page-filter-test"),p=(0,n.g2)("aloha-page");return(0,n.uX)(),(0,n.Wv)(p,{"page-title":e.pageTitle},{body:(0,n.k6)((()=>[(0,n.bF)(r,{tag:"p",html:"_PAGE_FILTER_CURRENCY_DESCRIPTION_"}),(0,n.bF)(i,{"function-name":"filterCurrency","type-import":"filters"}),(0,n.bF)(u,{"function-name":"filterCurrency"}),(0,n.bF)(o,{"arguments-text":e.argumentsText,"function-description":'filterCurrency(value, { [suffix="€"], [digits=2], [digitGrouping=true] })'},null,8,["arguments-text"]),(0,n.bF)(s),(0,n.bF)(a),(0,n.bF)(l),(0,n.bF)(c),(0,n.bF)(g,{test:e.test},null,8,["test"])])),_:1},8,["page-title"])}]])}}]);
//# sourceMappingURL=chunk.9969.721a19afee64b3bb1fdd.js.map