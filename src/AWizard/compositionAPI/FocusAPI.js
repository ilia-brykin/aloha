import {
  nextTick,
  toRef,
} from "vue";

export default function FocusAPI(props) {
  const hasFocusJump = toRef(props, "hasFocusJump");
  const id = toRef(props, "id");

  const getHeading = stepIndex => document.getElementById(`${ id.value }_${ stepIndex }_heading`);

  // the heading "Step 2 of 4: Address" of the new step gets the focus, the screen reader reads it
  const setFocusToActiveStep = ({ stepActive }) => {
    if (hasFocusJump.value &&
      !window.isScrollDisabled) { // for autotests
      nextTick(() => {
        getHeading(stepActive)?.focus();
      });
    }
  };

  // the step was not changed (beforeStepChange): the focus goes to the error summary or the first invalid field
  const setFocusToInvalid = ({ stepActive }) => {
    nextTick(() => {
      const PANE = document.getElementById(`${ id.value }_${ stepActive }_content`);
      const TARGET = PANE?.querySelector(".a_errors, [aria-invalid=\"true\"]") || getHeading(stepActive);
      TARGET?.focus();
    });
  };

  return {
    setFocusToActiveStep,
    setFocusToInvalid,
  };
}
