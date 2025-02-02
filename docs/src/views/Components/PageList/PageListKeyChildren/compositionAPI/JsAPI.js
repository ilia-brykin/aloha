export default function JsAPI() {
  const codeJs = `import { 
  AList,
} from "aloha-vue";
    
export default {
  name: "PageListKeyChildren",
  components: {
    AList,
  },
  setup() {
    const items = [
      {
        label: "Parent 1",
        children: [
          {
            label: "Child 1" 
          },
          {
            label: "Child 2"
          }
        ],
      },
      {
        label: "Parent 2",
        children: [
          {
            label: "Child 3" 
          },
          {
            label: "Child 4"
          }
        ],
      }
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
