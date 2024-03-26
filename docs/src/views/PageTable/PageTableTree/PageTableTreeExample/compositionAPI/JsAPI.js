export default function JsAPI() {
  const codeJs = `import {
  ref,
} from "vue";

import ATable from "aloha-vue/src/ATable/ATable";
    
export default {
  name: "PageTableTreeExample",
  components: {
    ATable,
  },
  setup() {
     const columns = [
      {
        id: "column1",
        keyLabel: "id",
        label: "_A_TABLE_COLUMN_1_",
      },
      {
        id: "column2",
        keyLabel: "label",
        label: "_A_TABLE_COLUMN_2_",
      },
      {
        id: "column3",
        keyLabel: "test",
        label: "_A_TABLE_COLUMN_3_",
      },
    ];

    const data = ref([
      {
        id: "1",
        label: "label 1",
        test: "test 1",
      },
      {
        id: "2",
        label: "label 2",
        test: "test 2",
        children: [
          {
            id: "2_1",
            label: "label 2.1",
            test: "test 2.1",
          },
          {
            id: "2_2",
            label: "label 2.2",
            test: "test 2.2",
            children: [
              {
                id: "2_2_1",
                label: "label 2.2.1",
                test: "test 2.2.1",
              },
            ],
          },
          {
            id: "2_3",
            label: "label 2.3",
            test: "test 2.3",
          },
        ],
      },
      {
        id: "3",
        label: "label 3",
        test: "test 3",
        children: [
          {
            id: "3_1",
            label: "label 3.1",
            test: "test 3.1",
          },
          {
            id: "3_2",
            label: "label 3.2",
            test: "test 3.2",
          },
          {
            id: "3_3",
            label: "label 3.3",
            test: "test 3.3",
          },
        ],
      },
    ]);
    
    return {
      columns,
      data,
    };
  },
};`;

  return {
    codeJs,
  };
}
