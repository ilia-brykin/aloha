import {
  computed,
  ref,
} from "vue";

import {
  isUndefined,
} from "lodash-es";

const popupOpenIds = ref({});

export default function APopupAPI({ id, idRef }) {
  const isPopupOpen = computed(() => {
    if (idRef) {
      return isCurrentPopupOpen({ id: idRef.value });
    }
    return isCurrentPopupOpen({ id });
  });

  return {
    closePopup,
    isCurrentPopupOpen,
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
  } else {
    if (statusOpen) {
      openPopup({ id });
    } else {
      closePopup({ id });
    }
  }
}
