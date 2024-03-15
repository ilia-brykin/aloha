"use strict";(self.webpackChunkaloha_vue_docs=self.webpackChunkaloha_vue_docs||[]).push([[2408],{4317:(e,t,a)=>{a.d(t,{A:()=>i});var n=a(6365);const l={name:"PageFilterImportCompositionApi",components:{AlohaExample:a(1912).A},props:{functionName:{type:String,required:!0}},setup(e){const{codeJs:t}=function(e){const t=(0,n.lW)(e,"functionName");return{codeJs:(0,n.EW)((()=>`import AFiltersAPI from "aloha-vue/src/compositionAPI/AFiltersAPI";\n\nexport default {\n  setup() {  \n    const {\n      ${t.value},\n    } = AFiltersAPI();\n  },\n};`))}}(e);return{codeJs:t}}},i=(0,a(6262).A)(l,[["render",function(e,t){const a=(0,n.g2)("aloha-example");return(0,n.uX)(),(0,n.Wv)(a,{"code-js":e.codeJs,header:"_PAGE_FUNCTIONS_IMPORT_COMPOSITION_API_HEADER_","is-code-visible-default":!0},null,8,["code-js"])}]])},6150:(e,t,a)=>{a.r(t),a.d(t,{default:()=>_});var n=a(6365),l=a(8310),i=a(7791),o=a(6369),r=a(1912),s=a(6914);const m={name:"PageFilterEmailExample",components:{AlohaExample:r.A},setup(){const{codeJs:e}={codeJs:`filterEmail("example@example.com");\n// ${(0,s.A)("example@example.com")}\n\nfilterEmail(undefined);\n// ${(0,s.A)(void 0)}`};return{codeJs:e}}};var c=a(6262);const p=(0,c.A)(m,[["render",function(e,t){const a=(0,n.g2)("aloha-example");return(0,n.uX)(),(0,n.Wv)(a,{"code-js":e.codeJs,header:"_A_BASIC_USAGE_","is-code-visible-default":!0},null,8,["code-js"])}]]),u={name:"PageFilterEmailLinkClass",components:{AlohaExample:r.A},setup(){const{codeJs:e}={codeJs:`filterEmail("example@example.com", { linkClass: "a_btn a_btn_link" });\n// ${(0,s.A)("example@example.com",{linkClass:"a_btn a_btn_link"})}`};return{codeJs:e}}},f=(0,c.A)(u,[["render",function(e,t){const a=(0,n.g2)("aloha-example");return(0,n.uX)(),(0,n.Wv)(a,{"code-js":e.codeJs,header:"linkClass","is-code-visible-default":!0},null,8,["code-js"])}]]);var d=a(4317),g=a(5475),A=a(3928);const E={name:"PageFilterEmail",components:{AlohaPage:l.A,ATranslation:i.A,PageFilterArguments:o.A,PageFilterEmailExample:p,PageFilterEmailLinkClass:f,PageFilterImportCompositionApi:d.A,PageFilterImportFunction:g.A,PageFilterTest:A.A},setup(){const{pageTitle:e}={pageTitle:"filterEmail"},{argumentsText:t}={argumentsText:[{value:"email",types:["String"],text:"_PAGE_FILTER_EMAIL_ARGUMENTS_EMAIL_"},{value:"[linkClass]",types:["String"],text:"_PAGE_FILTER_EMAIL_ARGUMENTS_LINK_CLASS_"}]};return{argumentsText:t,pageTitle:e,test:'import filterEmail from "../filterEmail";\n\ndescribe("filterEmail", () => {\n  test("basic email", () => {\n    expect(filterEmail("user@aloha.com")).toBe("<a href=\\"mailto:user@aloha.com\\">user@aloha.com</a>");\n  });\n\n  test("email with CSS class", () => {\n    expect(filterEmail("contact@aloha.com", { linkClass: "email-link" })).toBe("<a href=\\"mailto:contact@aloha.com\\" class=\\"email-link\\">contact@aloha.com</a>");\n  });\n\n  test("empty email", () => {\n    expect(filterEmail("")).toBe("");\n  });\n\n  test("null email", () => {\n    expect(filterEmail(null)).toBe("");\n  });\n\n  test("undefined email", () => {\n    expect(filterEmail(undefined)).toBe("");\n  });\n\n  test("numeric value (invalid email)", () => {\n    expect(filterEmail(12345)).toBe("");\n  });\n\n  test("email with special characters", () => {\n    expect(filterEmail("name.surname+filter@company.org")).toBe("<a href=\\"mailto:name.surname+filter@company.org\\">name.surname+filter@company.org</a>");\n  });\n\n  test("email with combined class attribute", () => {\n    expect(filterEmail("hr@enterprise.net", { linkClass: "external contact" })).toBe("<a href=\\"mailto:hr@enterprise.net\\" class=\\"external contact\\">hr@enterprise.net</a>");\n  });\n});\n\n'}}},_=(0,c.A)(E,[["render",function(e,t){const a=(0,n.g2)("a-translation"),l=(0,n.g2)("page-filter-import-function"),i=(0,n.g2)("page-filter-import-composition-api"),o=(0,n.g2)("page-filter-arguments"),r=(0,n.g2)("page-filter-email-example"),s=(0,n.g2)("page-filter-email-link-class"),m=(0,n.g2)("page-filter-test"),c=(0,n.g2)("aloha-page");return(0,n.uX)(),(0,n.Wv)(c,{"page-title":e.pageTitle},{body:(0,n.k6)((()=>[(0,n.bF)(a,{tag:"p",html:"_PAGE_FILTER_EMAIL_DESCRIPTION_"}),(0,n.bF)(l,{"function-name":"filterEmail","type-import":"filters"}),(0,n.bF)(i,{"function-name":"filterEmail"}),(0,n.bF)(o,{"arguments-text":e.argumentsText,"function-description":"filterEmail(email, { [linkClass] })"},null,8,["arguments-text"]),(0,n.bF)(r),(0,n.bF)(s),(0,n.bF)(m,{test:e.test},null,8,["test"])])),_:1},8,["page-title"])}]])}}]);
//# sourceMappingURL=chunk.2408.4d73082e5a25139899ff.js.map