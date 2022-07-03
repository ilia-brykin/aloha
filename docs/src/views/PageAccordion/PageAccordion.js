import AAccordion from "../../../../src/AAccordion/AAccordion";

export default {
  name: "PageAccordion",
  components: {
    AAccordion,
  },
  data() {
    return {
      items: [
        {
          label: "label 1",
          content: "content 1",
          items: [
            {
              label: "label 1.1",
              content: "content 1.1",
              items: [
                {
                  label: "label 1.1.1",
                  content: "content 1.1.1",
                },
                {
                  label: "label 1.1.2",
                  content: "content 1.1.2",
                },
                {
                  label: "label 1.1.3",
                  content: "content 1.1.3",
                },
              ],
            },
            {
              label: "label 1.2",
              content: "content 1.2",
            },
            {
              label: "label 1.3",
              content: "content 1.3",
              items: [
                {
                  label: "label 1.3.1",
                  content: "content 1.3.1",
                },
                {
                  label: "label 1.3.2",
                  content: "content 1.3.2",
                },
                {
                  label: "label 1.3.3",
                  content: "content 1.3.3",
                },
              ],
            },
          ],
        },
        {
          label: "level 2",
          content: "content 2",
        },
        {
          label: "level 3",
          content: "content 3",
        },
      ],
    };
  },
};
