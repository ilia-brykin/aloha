import AUiComponents from "../../../../ui/AUiComponents";
import AUiContainerComponents from "../../../../ui/AUiContainerComponents";
import {
  AFormPluginOptions,
} from "../../../../plugins/AFormPlugin";

export default function ComponentTypesAPI() {
  const componentTypesMapping = () => ({
    ...AUiComponents,
    ...AUiContainerComponents,
    ...AFormPluginOptions.components,
    ...AFormPluginOptions.containerComponents,
  });

  return {
    componentTypesMapping,
  };
}
