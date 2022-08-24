import {
  setBaseTitle,
} from "../compositionAPI/APageTabTitleAPI";

export default {
  install: (app, baseTitle = "") => {
    setBaseTitle({ baseTitle });
  },
};
