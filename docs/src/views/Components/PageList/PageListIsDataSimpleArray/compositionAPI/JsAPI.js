export default function JsAPI() {
  const codeJs = `import { 
  AList,
} from "aloha-vue";
    
export default {
  name: "PageListIsDataSimpleArray",
  components: {
    AList,
  },
  setup() {
    const items1 = [
      "label 1",
      "label 2",
      "label 3",
      "label 4",
    ];
    const items2 = [
      "Level 1",
      [
        "Level 2",
        [
          "Level 2.1",
          "Level 2.2",
        ],
      ],
      [
        "Level 3",
        [
          "Level 3.1",
          [
            "Level 3.2",
            [
              "Level 3.2.1",
              "Level 3.2.2",
            ],
          ],
        ],
      ],
    ];

    return {
      items1,
      items2,
    };
  },
};`;

  return {
    codeJs,
  };
}
