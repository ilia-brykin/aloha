export const ACarouselPluginOptions = {
  propsDefault: {

  },
  icons: {
    dots: `<svg width="34" height="34" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <circle class="border" cx="16" cy="15" r="10"></circle>
  <circle class="tab-background" cx="16" cy="15" r="8"></circle>
  <circle class="tab" cx="16" cy="15" r="6"></circle>
</svg>`,
  },
};


export default {
  install: (app, {
    propsDefault = {},
    icons = {},
  } = {}) => {
    ACarouselPluginOptions.propsDefault = {
      ...ACarouselPluginOptions.propsDefault,
      ...propsDefault,
    };
    ACarouselPluginOptions.icons = {
      ...ACarouselPluginOptions.icons,
      ...icons,
    };
  },
};
