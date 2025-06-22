export const ACarouselPluginOptions = {
  propsDefault: {

  },
  icons: {
    dots: `<svg version="1.1" xmlns="http://www.w3.org/2000/svg">
  <circle class="border" cx="16" cy="15" r="10"></circle>
  <circle class="tab-background" cx="16" cy="15" r="8"></circle>
  <circle class="tab" cx="16" cy="15" r="6"></circle>
</svg>`,
    squares: `<svg version="1.1" xmlns="http://www.w3.org/2000/svg">
  <rect class="border" x="6" y="5" width="20" height="20" rx="2" ry="2"></rect>
  <rect class="tab-background" x="8" y="7" width="16" height="16" rx="2" ry="2"></rect>
  <rect class="tab" x="10" y="9" width="12" height="12" rx="2" ry="2"></rect>
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
