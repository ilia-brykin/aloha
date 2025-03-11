import {
  computed,
  ref,
} from "vue";

import {
  forEach,
  isEmpty,
  isUndefined,
} from "lodash-es";

const popupOpenIds = ref({});

export default function APopupAPI({ id, idRef } = {}) {
  const isPopupOpen = computed(() => {
    if (idRef) {
      return isCurrentPopupOpen({ id: idRef.value });
    }
    return isCurrentPopupOpen({ id });
  });

  const isOnePopupOpen = computed(() => {
    let isOneOpen = false;
    if (isEmpty(popupOpenIds.value)) {
      return isOneOpen;
    }
    forEach(popupOpenIds.value, _isOpen => {
      if (_isOpen) {
        isOneOpen = true;
        return false;
      }
    });

    return isOneOpen;
  });

  return {
    closePopup,
    isCurrentPopupOpen,
    isOnePopupOpen,
    isPopupOpen,
    openPopup,
    popupOpenIds,
    togglePopup,
  };
}

export function isCurrentPopupOpen({ id }) {
  return !!popupOpenIds.value[id];
}

function openPopup({ id }) {
  popupOpenIds.value[id] = true;
}

function closePopup({ id }) {
  if (id in popupOpenIds.value) {
    delete popupOpenIds.value[id];
  }
}

export function togglePopup({ id, statusOpen }) {
  if (isUndefined(statusOpen)) {
    if (popupOpenIds.value[id]) {
      closePopup({ id });
    } else {
      openPopup({ id });
    }
  } else if (statusOpen) {
    openPopup({ id });
  } else {
    closePopup({ id });
  }
}
