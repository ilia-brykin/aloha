import filterList from "../../../../../../../src/filters/filterList";

export default function JsAPI() {
  const ITEMS = [
    {
      label: "Level 1",
      children: [
        {
          label: "Level 1.1",
          children: [
            {
              label: "Level 1.1.1",
            },
            {
              label: "Level 1.1.2",
            },
          ],
        },
        {
          label: "Level 1.2",
        },
      ],
    },
    {
      label: "Level 2",
      children: [
        {
          label: "Level 2.1",
        },
        {
          label: "Level 2.2",
        },
      ],
    },
  ];

  const codeJs = `const ITEMS = [
  {
    label: "Level 1",
    children: [
      {
        label: "Level 1.1",
        children: [
          {
            label: "Level 1.1.1",
          },
          {
            label: "Level 1.1.2",
          },
        ],
      },
      {
        label: "Level 1.2",
      },
    ],
  },
  {
    label: "Level 2",
    children: [
      {
        label: "Level 2.1",
      },
      {
        label: "Level 2.2",
      },
    ],
  },
];

filterList(ITEMS, {
  keyLabel: "label",
  keyChildren: "children",
});
// ${ filterList(ITEMS, { keyLabel: "label", keyChildren: "children" }) }`;

  return {
    codeJs,
  };
}
