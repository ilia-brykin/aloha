import {
  ref,
} from "vue";

import Aloha from "../AIcon/Icons/Aloha";
import _NoImage from "../AIcon/Icons/_NoImage";

export const iconPluginOptions = ref({
  icons: {
    _NoImage,
    Aloha,
  },
});


export default {
  install: (app, {
    icons = {},
  } = {}) => {
    iconPluginOptions.value.icons = {
      ...iconPluginOptions.value.icons,
      ...icons,
    };
  },
};
