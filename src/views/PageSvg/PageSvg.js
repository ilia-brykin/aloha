import ASafeHtml from "../../../../src/directives/ASafeHtml";

export default {
  name: "PageSvg",
  components: {

  },
  directives: {
    ASafeHtml,
  },
  setup() {
    const pathD = `M3,1 
    A3,1 0 0,0 3,2
    A0.8,1 0 0,1 3,4 
    A3,1 0 0,0 0,5 
    V15 
    A5,1 0 1,0 10,15 
    V5 
    A3,1 0 0,0 7,4 
    A0.8,1 0 0,1 7,2 
    A3,1 0 0,0 7,1
    A2.4,1 0 0,0 3,1`;

    const linkHtml = "<a href='https://www.google.com/' target='_blank'>https://www.google.com/</a>";

    return {
      linkHtml,
      pathD,
    };
  },
};
