export default function JsAPI() {
  const codeJs = `import { 
  AList,
} from "aloha-vue";
    
export default {
  name: "PageListClassGroup",
  components: {
    AList,
  },
  setup() {
    const items = [
      {
        label: "label 1",
      },
      {
        label: "label 2",
      },
      {
        label: "label 3",
      },
      {
        label: "label 4",
      },
    ];

    return {
      items,
    };
  },
};`;

  return {
    codeJs,
  };
}
