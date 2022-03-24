import ATranslation from "../../../src/ATranslation/ATranslation";

export default {
  name: "PageStart",
  components: {
    ATranslation,
  },
  data() {
    return {
      frameworks: [
        {
          name: "Bootstrap",
          version: "5.1.x",
          link: "https://getbootstrap.com/",
        },
        {
          name: "Foundation",
          version: "6.7.4",
          link: "https://get.foundation/index.html",
        },
        {
          name: "UIkit",
          version: "3.9.4",
          link: "https://getuikit.com/",
        },
        {
          name: "Bulma",
          version: "0.9.3",
          link: "https://bulma.io/",
        },
        {
          name: "Materialize (noch nicht sicher)",
          version: "1.0.0",
          link: "https://materializecss.com/",
        },
      ],
    };
  },
};
