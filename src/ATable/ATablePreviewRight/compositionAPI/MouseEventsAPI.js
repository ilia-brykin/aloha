import {
  ref,
} from "vue";

import {
  get,
} from "lodash-es";

export default function MouseEventsAPI({ emit }, {
  previewRef = ref(undefined),
}) {
  const mousedown = ({ clientWidth }) => {
    emit("mousedownResizePreviewRight", {
      clientWidth,
    });
  };

  const mousemove = ({ clientX }) => {
    emit("mousemoveResizePreviewRight", {
      clientX,
      previewRef: previewRef.value,
    });
  };

  const mouseup = () => {
    emit("mouseupResizePreviewRight", {
      previewRightWidth: get(previewRef, "value.offsetWidth"),
    });
  };

  return {
    mousedown,
    mousemove,
    mouseup,
  };
}
