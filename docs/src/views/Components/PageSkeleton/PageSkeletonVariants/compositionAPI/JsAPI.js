export default function JsAPI() {
  const codeJs = `import {
  ASkeleton,
  ASkeletonItem,
} from "aloha-vue";

export default {
  name: "PageSkeletonVariants",
  components: {
    ASkeleton,
    ASkeletonItem,
  },
};`;

  return {
    codeJs,
  };
}
