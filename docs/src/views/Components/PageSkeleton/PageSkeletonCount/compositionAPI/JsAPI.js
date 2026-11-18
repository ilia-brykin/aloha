export default function JsAPI() {
  const codeJs = `import {
  ASkeleton,
  ASkeletonItem,
} from "aloha-vue";

export default {
  name: "PageSkeletonCount",
  components: {
    ASkeleton,
    ASkeletonItem,
  },
};`;

  return {
    codeJs,
  };
}
