import {
  computed,
  toRef,
} from "vue";

import {
  isNil,
} from "lodash-es";

/*
 * How a screen reader announces the alert when it appears.
 * role="alert": at once (assertive), role="status": after the current sentence (polite).
 * aria-atomic: "true" reads the whole alert, "false" only the changed part.
 */
export const ANNOUNCE_ATTRIBUTES = {
  alert: { role: "alert", ariaAtomic: "true" },
  "alert-changes": { role: "alert", ariaAtomic: "false" },
  status: { role: "status", ariaAtomic: "true" },
  "status-changes": { role: "status", ariaAtomic: "false" },
  none: { role: undefined, ariaAtomic: undefined },
};

export default function AttributesAPI(props) {
  const announce = toRef(props, "announce");
  const ariaAtomic = toRef(props, "ariaAtomic");
  const role = toRef(props, "role");

  const announceAttributes = computed(() => {
    return ANNOUNCE_ATTRIBUTES[announce.value] || ANNOUNCE_ATTRIBUTES.alert;
  });

  // the props (or attributes) role and aria-atomic win over announce
  const ariaAtomicLocal = computed(() => {
    if (!isNil(ariaAtomic.value) && ariaAtomic.value !== "") {
      return String(ariaAtomic.value);
    }

    return announceAttributes.value.ariaAtomic;
  });

  const roleLocal = computed(() => {
    if (role.value) {
      return role.value;
    }

    return announceAttributes.value.role;
  });

  return {
    ariaAtomicLocal,
    roleLocal,
  };
}
