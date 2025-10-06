import {
  computed,
  toRef,
} from "vue";

import AValidatedJsonErrorLabelsAPI from "../../AValidatedJson/compositionAPI/AValidatedJsonErrorLabelsAPI";
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

  const {
    aValidatedJsonErrorLabels,
  } = AValidatedJsonErrorLabelsAPI();

  const getLabelsFromChildren = ({ children }) => {
    let labelsFromChildren = {};
    forEach(children, childOptions => {
      const HTML_ID = getHtmlId({
        id: childOptions.id,
        idPrefix: childOptions.idPrefix || idPrefix.value,
        htmlId: childOptions.htmlId,
      });
      labelsFromChildren[childOptions.id] = {
        [AKeyLabel]: childOptions.labelError || childOptions.label,
        [AKeyLink]: !isUndefined(childOptions.isErrorLink) ? childOptions.isErrorLink : true,
        [AKeyId]: HTML_ID,
      };
      if (childOptions.type === "validatedJson" && ["list", "json"].includes(childOptions.mode)) {
        labelsFromChildren[childOptions.id][AKeyChildren] = getLabelForValidatedJson({ options: childOptions, htmlId: HTML_ID });
      } else if (childOptions?.children?.length) {
        if (useFlatErrors.value) {
          labelsFromChildren = {
            ...labelsFromChildren,
            ...getLabelsFromChildren({ children: childOptions.children }),
          };
        } else {
          labelsFromChildren[childOptions.id][AKeyChildren] = getLabelsFromChildren({ children: childOptions.children });
        }
      }
    });

    return labelsFromChildren;
  };

  const labelsLocal = computed(() => {
    let labelsFromOptionsList = {};
    optionsList.value.forEach(options => {
      const HTML_ID = getHtmlId({
        id: options.id,
        idPrefix: options.idPrefix || idPrefix.value,
        htmlId: options.htmlId,
      });
      labelsFromOptionsList[options.id] = {
        [AKeyLabel]: options.labelError || options.label,
        [AKeyLink]: !isUndefined(options.isErrorLink) ? options.isErrorLink : true,
        [AKeyId]: HTML_ID,
      };
      if (options.type === "validatedJson" && ["list", "json"].includes(options.mode)) {
        labelsFromOptionsList[options.id][AKeyChildren] = getLabelForValidatedJson({ options, htmlId: HTML_ID });
      } else if (options.children && options.children.length) {
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

  function getLabelForValidatedJson({ options, htmlId }) {
    const labelsFromChildren = {};
    const LABELS = aValidatedJsonErrorLabels.value[options.id];
    if (LABELS) {
      forEach(LABELS, (label, id) => {
        labelsFromChildren[id] = {
          [AKeyLabel]: label,
          [AKeyLink]: true,
          [AKeyId]: getHtmlId({
            id: id,
            idPrefix: `${ htmlId }_`,
          }),
        };
        if (options?.children?.length) {
          labelsFromChildren[id][AKeyChildren] = getLabelsFromChildren({
            children: options.children,
          });
        }
      });
    }

    return labelsFromChildren;
  }

  return {
    labelsLocal,
  };
}
