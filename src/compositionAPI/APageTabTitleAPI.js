import {
  ref, watch,
} from "vue";

const baseTitle = ref("");

export default function APageTabTitleAPI({
  title = ref(""),
}) {
  const setPageTabTitle = () => {
    let pageTitle = "";
    if (title.value) {
      pageTitle = title.value;
      if (baseTitle.value) {
        pageTitle += ` - ${ baseTitle.value }`;
      }
    } else if (baseTitle.value) {
      pageTitle = baseTitle.value;
    }
    document.title = pageTitle;
  };

  setPageTabTitle();

  watch(title, () => {
    setPageTabTitle();
  });
}

export function setBaseTitle(baseTitleArg = "") {
  baseTitle.value = baseTitleArg;
}
