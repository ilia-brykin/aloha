export default {
  install: (app, icons = {}) => {
    app.provide("icons", icons);
  },
};
