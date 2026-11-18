export default function JsAPI() {
  const codeJs = `import {
  AButton,
  ASkeleton,
} from "aloha-vue";
import {
  ref,
} from "vue";

export default {
  name: "PageSkeletonLoading",
  components: {
    AButton,
    ASkeleton,
  },
  setup() {
    const loading = ref(true);

    const load = () => {
      loading.value = true;
      setTimeout(() => {
        loading.value = false;
      }, 2000);
    };

    load();

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
