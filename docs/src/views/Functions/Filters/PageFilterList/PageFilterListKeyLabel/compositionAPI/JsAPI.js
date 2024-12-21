import {
  filterList,
} from "../../../../../../../../src";

export default function JsAPI() {
  const ITEMS = [
    {
      label: "label 1",
    },
    {
      label: "label 2",
    },
    {
      label: "label 3",
    },
    {
      label: "label 4",
    },
  ];

  const codeJs = `const ITEMS = [
  {
    label: "label 1",
  },
  {
    label: "label 2",
  },
  {
    label: "label 3",
  },
  {
    label: "label 4",
  },
];

filterList(ITEMS, {
  keyLabel: "label",
});
// ${ filterList(ITEMS, { keyLabel: "label" }) }`;

  return {
    codeJs,
  };
}
