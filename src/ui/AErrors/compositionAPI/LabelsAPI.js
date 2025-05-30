import {
  computed,
  toRef,
} from "vue";

import {
  getHtmlId,
} from "../../compositionApi/UiAPI";

import {
  AKeyChildren,
  AKeyId,
  AKeyLabel,
  AKeyLink,
} from "../../../const/AKeys";
import {
  forEach,
  isUndefined,
} from "lodash-es";

export default function LabelsAPI(props) {
  const optionsList = toRef(props, "optionsList");
  const idPrefix = toRef(props, "idPrefix");
  const useFlatErrors = toRef(props, "useFlatErrors");

  const getLabelsFromChildren = ({ children }) => {
    let labelsFromChildren = {};
    forEach(children, childOptions => {
      labelsFromChildren[childOptions.id] = {
        [AKeyLabel]: childOptions.labelError || childOptions.label,
        [AKeyLink]: !isUndefined(childOptions.isErrorLink) ? childOptions.isErrorLink : true,
        [AKeyId]: getHtmlId({
          id: childOptions.id,
          idPrefix: childOptions.idPrefix || idPrefix.value,
          htmlId: childOptions.htmlId,
        }),
      };
      if (childOptions?.children?.length) {
        if (useFlatErrors.value) {
          labelsFromChildren = {
            ...labelsFromChildren,
            ...getLabelsFromChildren(childOptions.children),
          };
        } else {
          labelsFromChildren[childOptions.id][AKeyChildren] = getLabelsFromChildren(childOptions.children);
        }
      }
    });

    return labelsFromChildren;
  };

  const labelsLocal = computed(() => {
    let labelsFromOptionsList = {};
    optionsList.value.forEach(options => {
      labelsFromOptionsList[options.id] = {
        [AKeyLabel]: options.labelError || options.label,
        [AKeyLink]: !isUndefined(options.isErrorLink) ? options.isErrorLink : true,
        [AKeyId]: getHtmlId({
          id: options.id,
          idPrefix: options.idPrefix || idPrefix.value,
          htmlId: options.htmlId,
        }),
      };
      if (options.children && options.children.length) {
        if (useFlatErrors.value) {
          labelsFromOptionsList = {
            ...labelsFromOptionsList,
            ...getLabelsFromChildren({
              children: options.children,
            }),
          };
        } else {
          labelsFromOptionsList[options.id][AKeyChildren] = getLabelsFromChildren({
            children: options.children,
          });
        }
      }
    });

    return labelsFromOptionsList;
  });

  return {
    labelsLocal,
  };
}
