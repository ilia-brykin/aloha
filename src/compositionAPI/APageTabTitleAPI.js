import {
  ref, watch,
} from "vue";

const BASE_TITLE = ref("");

export default function APageTabTitleAPI({
  title = ref(""),
}) {
  const setPageTabTitle = () => {
    let pageTitle = BASE_TITLE.value;
    if (title.value) {
      pageTitle = `${ title.value } - ${ pageTitle }`;
    }
    document.title = pageTitle;
  };

  setPageTabTitle();

  watch(title, () => {
    setPageTabTitle();
  });
}

export function setBaseTitle({ baseTitle = "" }) {
  BASE_TITLE.value = baseTitle;
}
