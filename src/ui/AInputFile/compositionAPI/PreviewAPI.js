import {
  onBeforeUnmount,
  toRef,
} from "vue";

import {
  isImageFile,
} from "../utils/utils";

export default function PreviewAPI(props) {
  const isPreview = toRef(props, "isPreview");

  // One object URL per file; they are released when the file is removed or the component is unmounted
  const urls = new Map();

  const getPreviewUrl = model => {
    if (!isPreview.value) {
      return undefined;
    }
    if (model.previewUrl) {
      return model.previewUrl;
    }
    const FILE = model.file;
    if (!isImageFile(FILE) || typeof URL === "undefined" || !URL.createObjectURL) {
      return undefined;
    }
    if (!urls.has(FILE)) {
      urls.set(FILE, URL.createObjectURL(FILE));
    }
    return urls.get(FILE);
  };

  const releasePreviewUrl = model => {
    const FILE = model?.file;
    if (FILE && urls.has(FILE)) {
      URL.revokeObjectURL(urls.get(FILE));
      urls.delete(FILE);
    }
  };

  onBeforeUnmount(() => {
    urls.forEach(url => URL.revokeObjectURL(url));
    urls.clear();
  });

  return {
    getPreviewUrl,
    releasePreviewUrl,
  };
}
