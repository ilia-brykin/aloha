import {
  filterSearchHighlight,
} from "aloha-vue";

export default function JsAPI() {
  const codeJs = `filterSearchHighlight("Aloha <strong>Vue</strong> is a <a href="https://vue.com">framework</a>", { searchModel: "vue", isHtml: true });
// ${ filterSearchHighlight("Aloha <strong>Vue</strong> is a <a href=\"https://vue.com\">framework</a>", { searchModel: "vue", isHtml: true }) }

filterSearchHighlight("<div><p>Vue is amazing.</p><span>Vue framework</span></div>", { searchModel: "vue", isHtml: true });
// ${ filterSearchHighlight("<div><p>Vue is amazing.</p><span>Vue framework</span></div>", { searchModel: "Vue", isHtml: true }) }

filterSearchHighlight("<div><h1>Vue.js</h1><p>This is a Vue framework.</p></div>", { searchModel: "vue", isHtml: true });
// ${ filterSearchHighlight("<div><h1>Vue.js</h1><p>This is a Vue framework.</p></div>", { searchModel: "Vue", isHtml: true }) }

filterSearchHighlight("<p>Welcome to <strong>Vue</strong><span>.js</span> world.</p>", { searchModel: "vue", isHtml: true });
// ${ filterSearchHighlight("<p>Welcome to <strong>Vue</strong><span>.js</span> world.</p>", { searchModel: "Vue", isHtml: true }) }`;

  return {
    codeJs,
  };
}
