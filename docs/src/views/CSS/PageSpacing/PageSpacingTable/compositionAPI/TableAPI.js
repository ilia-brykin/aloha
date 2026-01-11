import {
  computed,
} from "vue";

import {
  getTranslatedText,
} from "aloha-vue";

export default function TableAPI() {
  const andTranslate = computed(() => {
    return getTranslatedText({
      placeholder: "_AND_",
    });
  });

  const rows = computed(() => {
    const AND_TRANSLATED = andTranslate.value;

    return [
      {
        property: "<code>margin</code>",
        shortcut: "a_m",
        classes: ["a_m_0", "a_m_1", "a_m_2", "a_m_3", "a_m_4", "a_m_5", "a_m_6", "a_m_auto"],
      },
      {
        property: "<code>margin-top</code>",
        shortcut: "a_mt",
        classes: ["a_mt_0", "a_mt_1", "a_mt_2", "a_mt_3", "a_mt_4", "a_mt_5", "a_mt_6", "a_mt_auto"],
      },
      {
        property: "<code>margin-right</code>",
        shortcut: "a_mr",
        classes: ["a_mr_0", "a_mr_1", "a_mr_2", "a_mr_3", "a_mr_4", "a_mr_5", "a_mr_6", "a_mr_auto"],
      },
      {
        property: "<code>margin-bottom</code>",
        shortcut: "a_mb",
        classes: ["a_mb_0", "a_mb_1", "a_mb_2", "a_mb_3", "a_mb_4", "a_mb_5", "a_mb_6", "a_mb_auto"],
      },
      {
        property: "<code>margin-left</code>",
        shortcut: "a_ml",
        classes: ["a_ml_0", "a_ml_1", "a_ml_2", "a_ml_3", "a_ml_4", "a_ml_5", "a_ml_6", "a_ml_auto"],
      },
      {
        property: `<code>margin-left</code> ${ AND_TRANSLATED } <code>margin-right</code>`,
        shortcut: "a_mx",
        classes: ["a_mx_0", "a_mx_1", "a_mx_2", "a_mx_3", "a_mx_4", "a_mx_5", "a_mx_6", "a_mx_auto"],
      },
      {
        property: `<code>margin-top</code> ${ AND_TRANSLATED } <code>margin-bottom</code>`,
        shortcut: "a_my",
        classes: ["a_my_0", "a_my_1", "a_my_2", "a_my_3", "a_my_4", "a_my_5", "a_my_6", "a_my_auto"],
      },
      {
        property: "<code>padding</code>",
        shortcut: "a_p",
        classes: ["a_p_0", "a_p_1", "a_p_2", "a_p_3", "a_p_4", "a_p_5", "a_p_6", "a_p_auto"],
      },
      {
        property: "<code>padding-top</code>",
        shortcut: "a_pt",
        classes: ["a_pt_0", "a_pt_1", "a_pt_2", "a_pt_3", "a_pt_4", "a_pt_5", "a_pt_6", "a_pt_auto"],
      },
      {
        property: "<code>padding-right</code>",
        shortcut: "a_pr",
        classes: ["a_pr_0", "a_pr_1", "a_pr_2", "a_pr_3", "a_pr_4", "a_pr_5", "a_pr_6", "a_pr_auto"],
      },
      {
        property: "<code>padding-bottom</code>",
        shortcut: "a_pb",
        classes: ["a_pb_0", "a_pb_1", "a_pb_2", "a_pb_3", "a_pb_4", "a_pb_5", "a_pb_6", "a_pb_auto"],
      },
      {
        property: "<code>padding-left</code>",
        shortcut: "a_pl",
        classes: ["a_pl_0", "a_pl_1", "a_pl_2", "a_pl_3", "a_pl_4", "a_pl_5", "a_pl_6", "a_pl_auto"],
      },
      {
        property: `<code>padding-left</code> ${ AND_TRANSLATED } <code>padding-right</code>`,
        shortcut: "a_px",
        classes: ["a_px_0", "a_px_1", "a_px_2", "a_px_3", "a_px_4", "a_px_5", "a_px_6", "a_px_auto"],
      },
      {
        property: `<code>padding-top</code> ${ AND_TRANSLATED } <code>padding-bottom</code>`,
        shortcut: "a_py",
        classes: ["a_py_0", "a_py_1", "a_py_2", "a_py_3", "a_py_4", "a_py_5", "a_py_6", "a_py_auto"],
      },
    ];
  });
  const colsFooter = ["0", "0.25rem", "0.5rem", "0.75rem", "1rem", "1.5rem", "2rem", "auto"];

  return {
    colsFooter,
    rows,
  };
}
