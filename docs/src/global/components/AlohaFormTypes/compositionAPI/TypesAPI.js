import {
  computed,
} from "vue";

import AUiComponents from "../../../../../../src/ui/AUiComponents";
import AUiContainerComponents from "../../../../../../src/ui/AUiContainerComponents";
import {
  forEach,
} from "lodash";

export default function TypesAPI() {
  const LINKS_MAP = {
    ACheckbox: {
      name: "PageCheckbox",
    },
    AInput: {
      name: "PageInput",
    },
    AInputCurrency: {
      name: "PageInputCurrency",
    },
    ADatepicker: {
      name: "PageDatepicker",
    },
    ADatepickerRange: {
      name: "PageDatepickerRange",
    },
    AInputFile: undefined,
    AInputNumber: {
      name: "PageInputNumber",
    },
    AInputNumberRange: {
      name: "PageInputNumberRange",
    },
    AJson: {
      name: "PageJson",
    },
    AOneCheckbox: {
      name: "PageOneCheckbox",
    },
    ARadio: {
      name: "PageRadio",
    },
    ARouterLinkConfig: {
      name: "PageRouterLinkConfig",
    },
    ASelect: {
      name: "PageSelect",
    },
    ASwitch: {
      name: "PageSwitch",
    },
    ATemplate: {
      name: "PageTemplate",
    },
    ATextarea: {
      name: "PageTextarea",
    },
    AFieldset: {
      name: "PageFieldset",
    },
    AGroup: "",
  };

  const types = computed(() => {
    const TYPES = [];
    forEach({
      ...AUiComponents,
      ...AUiContainerComponents,
    }, (item, type) => {
      const TYPE = {
        type: LINKS_MAP[item.name] ? "link" : "text",
        to: LINKS_MAP[item.name],
        text: type,
      };
      TYPES.push(TYPE);
    });

    return TYPES;
  });

  return {
    types,
  };
}
