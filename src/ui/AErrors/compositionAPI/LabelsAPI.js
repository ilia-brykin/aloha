import {
  computed,
  toRef,
} from "vue";

import {
  getHtmlId,
} from "../../compositionApi/UiAPI";
import {
  forEach,
  isUndefined,
} from "lodash-es";

export default function LabelsAPI(props) {
  const optionsList = toRef(props, "optionsList");
  const idPrefix = toRef(props, "idPrefix");

  const getLabelsFromChildren = children => {
    let labelsFromChildren = {};
    forEach(children, childOptions => {
      labelsFromChildren[childOptions.id] = {
        label: childOptions.labelError || childOptions.label,
        link: !isUndefined(childOptions.isErrorLink) ? childOptions.isErrorLink : true,
        id: getHtmlId({
          id: childOptions.id,
          idPrefix: childOptions.idPrefix || idPrefix.value,
          htmlId: childOptions.htmlId,
        }),
      };
      if (childOptions.children && childOptions.children.length) {
        labelsFromChildren = {
          ...labelsFromChildren,
          ...getLabelsFromChildren(childOptions.children),
        };
      }
    });

    return labelsFromChildren;
  };

  const labelsLocal = computed(() => {
    let labelsFromOptionsList = {};
    optionsList.value.forEach(options => {
      labelsFromOptionsList[options.id] = {
        label: options.labelError || options.label,
        link: !isUndefined(options.isErrorLink) ? options.isErrorLink : true,
        id: getHtmlId({
          id: options.id,
          idPrefix: options.idPrefix || idPrefix.value,
          htmlId: options.htmlId,
        }),
      };
      if (options.children && options.children.length) {
        labelsFromOptionsList = {
          ...labelsFromOptionsList,
          ...getLabelsFromChildren(options.children),
        };
      }
    });
    return labelsFromOptionsList;
  });

  return {
    labelsLocal,
  };
}
