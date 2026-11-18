export default function JsAPI() {
  const codeJs = `import {
  ASkeleton,
} from "aloha-vue";

export default {
  name: "PageSkeletonAnimated",
  components: {
    ASkeleton,
  },
};`;

  return {
    codeJs,
  };
}
