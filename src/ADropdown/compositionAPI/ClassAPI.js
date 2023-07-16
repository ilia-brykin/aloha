import {
  computed,
  toRef,
} from "vue";

import {
  assign,
  isPlainObject,
  isString,
} from "lodash-es";

export default function ClassAPI(props) {
  const buttonClass = toRef(props, "buttonClass");
  const classProps = toRef(props, "class");

  const buttonClassLocal = computed(() => {
    let classLocal = {};

    if (buttonClass.value) {
      if (isString(buttonClass.value)) {
        classLocal[buttonClass.value] = true;
      } else if (isPlainObject(buttonClass.value)) {
        classLocal = assign(classLocal, buttonClass.value);
      }
    }
    if (classProps.value) {
      if (isString(classProps.value)) {
        classLocal[classProps.value] = true;
      } else if (isPlainObject(classProps.value)) {
        classLocal = assign(classLocal, classProps.value);
      }
    }

    return classLocal;
  });


  return {
    buttonClassLocal,
  };
}
