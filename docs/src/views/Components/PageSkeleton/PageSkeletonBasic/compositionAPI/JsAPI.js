export default function JsAPI() {
  const codeJs = `import {
  ASkeleton,
} from "aloha-vue";

export default {
  name: "PageSkeletonBasic",
  components: {
    ASkeleton,
  },
};`;

  return {
    codeJs,
  };
}
