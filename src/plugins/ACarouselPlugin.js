export const ACarouselPluginOptions = {
  propsDefault: {

  },
  icons: {
    dots: `<svg version="1.1" xmlns="http://www.w3.org/2000/svg">
  <circle class="border" cx="1rem" cy="0.9375rem" r="0.625rem"></circle>
  <circle class="tab-background" cx="1rem" cy="0.9375rem" r="0.5rem"></circle>
  <circle class="tab" cx="1rem" cy="0.9375rem" r="0.375rem"></circle>
</svg>`,
    squares: `<svg version="1.1" xmlns="http://www.w3.org/2000/svg">
  <rect class="border" x="0.375rem" y="0.3125rem" width="1.25rem" height="1.25rem" rx="0.125rem" ry="0.125rem"></rect>
  <rect class="tab-background" x="0.5rem" y="0.4375rem" width="1rem" height="1rem" rx="0.125rem" ry="0.125rem"></rect>
  <rect class="tab" x="0.625rem" y="0.5625rem" width="0.75rem" height="0.75rem" rx="0.125rem" ry="0.125rem"></rect>
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
