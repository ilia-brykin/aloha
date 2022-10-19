import {
  ref,
} from "vue";

const previewRef = ref(undefined);

export default function PreviewRightRewAPI() {
  const removePreviewRef = () => {
    previewRef.value = undefined;
  };

  return {
    previewRef,
    removePreviewRef,
  };
}
