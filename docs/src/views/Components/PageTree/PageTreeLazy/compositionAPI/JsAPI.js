export default function JsAPI() {
  const codeJs = `import {
  ATree,
} from "aloha-vue";

export default {
  name: "PageTreeLazy",
  components: {
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
              { id: \`\${ item.id }_a\`, label: \`\${ item.label } A\` },
              { id: \`\${ item.id }_b\`, label: \`\${ item.label } B\` },
              { id: \`\${ item.id }_file\`, label: "file.pdf", isLeaf: true },
            ] :
            []);
        }, 800);
      });
    };

    return {
      data,
      load,
    };
  },
};`;

  return {
    codeJs,
  };
}
