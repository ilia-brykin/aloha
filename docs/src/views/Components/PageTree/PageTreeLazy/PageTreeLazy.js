import AlohaExample from "../../../../global/components/AlohaExample/AlohaExample.vue";
import {
  ATree,
} from "aloha-vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageTreeLazy",
  components: {
    AlohaExample,
    ATree,
  },
  setup() {
    const data = [
      { id: "documents", label: "Documents" },
      { id: "photos", label: "Photos" },
      { id: "readme", label: "readme.txt", isLeaf: true },
    ];

    // Simulated request. Return a Promise with the children; isLeaf marks nodes without children.
    const load = ({ item, level }) => {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(level < 3 ?
            [
              { id: `${ item.id }_a`, label: `${ item.label } A` },
              { id: `${ item.id }_b`, label: `${ item.label } B` },
              { id: `${ item.id }_file`, label: "file.pdf", isLeaf: true },
            ] :
            []);
        }, 800);
      });
    };

    const {
      codeHtml,
    } = HtmlAPI();

    const {
      codeJs,
    } = JsAPI();

    return {
      codeHtml,
      codeJs,
      data,
      load,
    };
  },
};
