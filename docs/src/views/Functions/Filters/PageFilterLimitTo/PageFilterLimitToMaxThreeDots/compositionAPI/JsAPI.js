import {
  filterLimitTo,
} from "aloha-vue";

export default function JsAPI() {
  const TEXT = "Aloha...";

  const codeJs = `const TEXT = "Aloha...";

filterList(TEXT, { limit: 7, maxThreeDots: true });
// ${ filterLimitTo(TEXT, { limit: 7, maxThreeDots: true }) }
filterList(TEXT, { limit: 7, maxThreeDots: false });
// ${ filterLimitTo(TEXT, { limit: 7, maxThreeDots: false }) }

filterList(TEXT, { limit: 6, maxThreeDots: true });
// ${ filterLimitTo(TEXT, { limit: 6, maxThreeDots: true }) }
filterList(TEXT, { limit: 6, maxThreeDots: false });
// ${ filterLimitTo(TEXT, { limit: 6, maxThreeDots: false }) }

filterList(TEXT, { limit: 5, maxThreeDots: true });
// ${ filterLimitTo(TEXT, { limit: 5, maxThreeDots: true }) }
filterList(TEXT, { limit: 5, maxThreeDots: false });
// ${ filterLimitTo(TEXT, { limit: 5, maxThreeDots: false }) }`;

  return {
    codeJs,
  };
}
