import {
  AFieldset,
  AGroup,
  AValidatedJson,
} from "../index";

import {
  AFormPluginOptions,
} from "../plugins/AFormPlugin";

export default {
  fieldset: AFieldset,
  group: AGroup,
  validatedJson: AValidatedJson,
  ...AFormPluginOptions.containerComponents,
};
