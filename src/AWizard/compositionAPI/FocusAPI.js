import {
  ref,
  toRef,
} from "vue";

import {
  setFocusToElement,
} from "../../utils/utilsDOM";

export default function FocusAPI(props) {
  const hasFocusJump = toRef(props, "hasFocusJump");
  const id = toRef(props, "id");

  const wizardTabsRef = ref([]);

  const setFocusToActiveStep = ({ stepActive }) => {
    if (hasFocusJump.value) {
      setTimeout(() => {
        const FOCUS_ID_SELECTOR = `#${ id.value }_${ stepActive }_focus`;
        setFocusToElement({
          selector: FOCUS_ID_SELECTOR,
        });
      });
    }
  };

  return {
    setFocusToActiveStep,
    wizardTabsRef,
  };
}
