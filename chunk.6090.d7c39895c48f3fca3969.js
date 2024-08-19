"use strict";(self.webpackChunkaloha_vue_docs=self.webpackChunkaloha_vue_docs||[]).push([[6090],{4317:(t,e,n)=>{n.d(e,{A:()=>p});var l=n(6365);const s={name:"PageFilterImportCompositionApi",components:{AlohaExample:n(1912).A},props:{functionName:{type:String,required:!0}},setup(t){const{codeJs:e}=function(t){const e=(0,l.lW)(t,"functionName");return{codeJs:(0,l.EW)((()=>`import AFiltersAPI from "aloha-vue/src/compositionAPI/AFiltersAPI";\n\nexport default {\n  setup() {  \n    const {\n      ${e.value},\n    } = AFiltersAPI();\n  },\n};`))}}(t);return{codeJs:e}}},p=(0,n(6262).A)(s,[["render",function(t,e){const n=(0,l.g2)("aloha-example");return(0,l.uX)(),(0,l.Wv)(n,{"code-js":t.codeJs,header:"_PAGE_FUNCTIONS_IMPORT_COMPOSITION_API_HEADER_","is-code-visible-default":!0},null,8,["code-js"])}]])},9612:(t,e,n)=>{n.r(e),n.d(e,{default:()=>f});var l=n(6365),s=n(8310),p=n(7791),i=n(6369),a=n(1912),c=n(1098);const o={name:"PageFilterEscapeHTMLExample",components:{AlohaExample:a.A},setup(){const{codeJs:t}={codeJs:`filterEscapeHtml("<script>alert('XSS Attack')<\/script>");\n// ${(0,c.A)('<script>alert("XSS Attack")<\/script>')}\n\nfilterEscapeHtml("Hello, World!");\n// ${(0,c.A)("Hello, World!")}`};return{codeJs:t}}};var r=n(6262);const u=(0,r.A)(o,[["render",function(t,e){const n=(0,l.g2)("aloha-example");return(0,l.uX)(),(0,l.Wv)(n,{"code-js":t.codeJs,header:"_A_BASIC_USAGE_","is-code-visible-default":!0},null,8,["code-js"])}]]);var m=n(4317),d=n(5475),g=n(3928);const A={name:"PageFilterEscapeHTML",components:{AlohaPage:s.A,ATranslation:p.A,PageFilterArguments:i.A,PageFilterEscapeHTMLExample:u,PageFilterImportCompositionApi:m.A,PageFilterImportFunction:d.A,PageFilterTest:g.A},setup(){const{pageTitle:t}={pageTitle:"filterEscapeHtml"},{argumentsText:e}={argumentsText:[{value:"value",types:["String"],text:"_PAGE_FILTER_ESCAPE_HTML_ARGUMENTS_VALUE_"}]};return{argumentsText:e,pageTitle:t,test:'import filterEscapeHtml from "../filterEscapeHtml";\n\ndescribe("filterEscapeHtml", () => {\n  it("should escape HTML special characters", () => {\n    const input = "<script>alert(\\"XSS Attack\\")<\/script>";\n    const expectedOutput = "&lt;script&gt;alert(\\"XSS Attack\\")&lt;/script&gt;";\n    expect(filterEscapeHtml(input)).toBe(expectedOutput);\n  });\n\n  it("should return the same string if no special characters", () => {\n    const input = "Hello, World!";\n    const expectedOutput = "Hello, World!";\n    expect(filterEscapeHtml(input)).toBe(expectedOutput);\n  });\n\n  it("should return an empty string if input is empty", () => {\n    const input = "";\n    const expectedOutput = "";\n    expect(filterEscapeHtml(input)).toBe(expectedOutput);\n  });\n\n  it("should escape only special HTML characters and leave the rest", () => {\n    const input = "Hello <strong>world</strong>";\n    const expectedOutput = "Hello &lt;strong&gt;world&lt;/strong&gt;";\n    expect(filterEscapeHtml(input)).toBe(expectedOutput);\n  });\n\n  it("should handle special characters like &, \\", \'", () => {\n    const input = "Fish & Chips \\"Delicious\\"";\n    const expectedOutput = "Fish &amp; Chips \\"Delicious\\"";\n    expect(filterEscapeHtml(input)).toBe(expectedOutput);\n  });\n\n  it("should escape HTML list tags", () => {\n    const input = "<ul><li>test</li></ul>";\n    const expectedOutput = "&lt;ul&gt;&lt;li&gt;test&lt;/li&gt;&lt;/ul&gt;";\n    expect(filterEscapeHtml(input)).toBe(expectedOutput);\n  });\n});\n'}}},f=(0,r.A)(A,[["render",function(t,e){const n=(0,l.g2)("a-translation"),s=(0,l.g2)("page-filter-import-function"),p=(0,l.g2)("page-filter-import-composition-api"),i=(0,l.g2)("page-filter-arguments"),a=(0,l.g2)("page-filter-escape-h-t-m-l-example"),c=(0,l.g2)("page-filter-test"),o=(0,l.g2)("aloha-page");return(0,l.uX)(),(0,l.Wv)(o,{"page-title":t.pageTitle},{body:(0,l.k6)((()=>[(0,l.bF)(n,{tag:"p",html:"_PAGE_FILTER_ESCAPE_HTML_DESCRIPTION_"}),(0,l.bF)(s,{"function-name":"filterEscapeHtml","type-import":"filters"}),(0,l.bF)(p,{"function-name":"filterEscapeHtml"}),(0,l.bF)(i,{"arguments-text":t.argumentsText,"function-description":"filterEscapeHtml(value)"},null,8,["arguments-text"]),(0,l.bF)(a),(0,l.bF)(c,{test:t.test},null,8,["test"])])),_:1},8,["page-title"])}]])}}]);
//# sourceMappingURL=chunk.6090.d7c39895c48f3fca3969.js.map