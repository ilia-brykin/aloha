export default function JsAPI() {
  const codeJs = `import {
  AButton,
  ASkeleton,
} from "aloha-vue";
import {
  ref,
} from "vue";

export default {
  name: "PageSkeletonThrottle",
  components: {
    AButton,
    ASkeleton,
  },
  setup() {
    const loading = ref(false);

    const load = ({ duration }) => {
      loading.value = true;
      setTimeout(() => {
        loading.value = false;
      }, duration);
    };

    return {
      load,
      loading,
    };
  },
};`;

  return {
    codeJs,
  };
}
