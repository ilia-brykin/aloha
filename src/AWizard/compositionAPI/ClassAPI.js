import {
  computed,
  toRef,
} from "vue";

import {
  snakeCase,
} from "lodash";

export default function ClassAPI(props, {
  subTypeLocal = computed(() => undefined),
}) {
  const type = toRef(props, "type");
  const isStepsJustified = toRef(props, "isStepsJustified");

  const classWizard = computed(() => {
    let classWizardLocal = `a_wizard a_wizard_${ type.value }`;
    if (isStepsJustified.value) {
      classWizardLocal += " a_wizard_justified";
    }

    if (subTypeLocal.value) {
      classWizardLocal += ` a_wizard_${ type.value }_${ snakeCase(subTypeLocal.value) }`;
    }
    return classWizardLocal;
  });

  return {
    classWizard,
  };
}
