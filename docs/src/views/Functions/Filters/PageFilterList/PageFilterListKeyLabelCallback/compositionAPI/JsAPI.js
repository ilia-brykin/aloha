import filterList from "../../../../../../../../src/filters/filterList";

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

  const keyLabelCallback = ({ item }) => {
    return `+ ${ item.label }`;
  };

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

const keyLabelCallback = ({ item }) => {
  return \`+ \${ item.label }\`;
};

filterList(ITEMS, {
  keyLabelCallback,
});
// ${ filterList(ITEMS, { keyLabelCallback }) }`;

  return {
    codeJs,
  };
}
