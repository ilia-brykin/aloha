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
          label: "label labellabe llabellabellabellab ellabellabel1 labellabellabellabellabellabe labellabellabellabellabellabe labellabellabellabellabellabe labellabellabellabellabellabe labellabellabellabellabellabe labellabellabellabellabellabelabellabellabellabellabellabe llabellabellabel",
          content: "content 1",
          slotContent: "aloha",
          keyIsRenderBodyByFirstOpen: true,
          id: "aloha_1",
          children: [
            {
              label: "label 1.1",
              content: "content 1.1",
              keyIsRenderBodyByFirstOpen: true,
              id: "aloha_1",
              children: [
                {
                  label: "label 1.1.1",
                  content: "content 1.1.1",
                  id: "aloha_1",
                },
                {
                  label: "label 1.1.2",
                  content: "content 1.1.2",
                  id: "aloha_2",
                },
                {
                  label: "label 1.1.3",
                  content: "content 1.1.3",
                  readonly: true,
                  isCaret: false,
                  id: "aloha_3",
                },
              ],
            },
            {
              label: "label 1.2",
              content: "content 1.2",
              id: "aloha_2",
            },
            {
              label: "label 1.3",
              content: "content 1.3",
              id: "aloha_3",
              children: [
                {
                  label: "label 1.3.1",
                  content: "content 1.3.1",
                  id: "aloha_1",
                },
                {
                  label: "label 1.3.2",
                  content: "content 1.3.2",
                  id: "aloha_2",
                },
                {
                  label: "label 1.3.3",
                  content: "content 1.3.3",
                  id: "aloha_3",
                },
              ],
            },
          ],
        },
        {
          label: "level 2",
          content: "content 2",
          id: "aloha_2",
        },
        {
          label: "level 3",
          content: "content 3",
          id: "aloha_3",
        },
      ],
      indexesForOpenDefault: ["0", "0.0", "0.1", "1"],
    };
  },
  mounted() {
    this.closeFirstItem();
  },
  methods: {
    closeFirstItem() {
      setTimeout(() => {
        this.items.shift();
      }, 2000);
    },

    toggleAccordion(arg) {
      console.log("arg", arg);
    },
  },
};
