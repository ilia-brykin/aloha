import AList from "../../../../src/AList/AList";

export default {
  name: "PageList",
  components: {
    AList,
  },
  data() {
    return {
      items: [
        {
          label: "label 1",
          items: [
            {
              label: "label 1.1",
              items: [
                {
                  label: "label 1.1.1",
                },
                {
                  label: "label 1.1.2",
                },
                {
                  label: "label 1.1.3",
                },
              ],
            },
            {
              label: "label 1.2",
            },
            {
              label: "label 1.3",
              items: [
                {
                  label: "label 1.3.1",
                },
                {
                  label: "label 1.3.2",
                },
                {
                  label: "label 1.3.3",
                },
              ],
            },
          ],
        },
        {
          label: "level 2",
        },
        {
          label: "level 3",
        },
      ],
    };
  },
};
