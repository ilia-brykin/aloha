import ATooltip from "../../../../src/ATooltip/ATooltip";

export default {
  name: "PageTitle",
  components: {
    ATooltip,
  },
  setup() {
    const text = `<img style="width: 50px;" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==" onclick="alert('...und hier sende ich z.B. den Cookie an eine externe Webseite. Dein Cookie: ' + document.cookie);" />`;

    return {
      text,
    };
  },
};
