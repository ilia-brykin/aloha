import filterList from "../../../../../../../src/filters/filterList";

export default function JsAPI() {
  const ITEMS = [
    "Level 1",
    [
      "Level 2",
      [
        "Level 2.1",
        "Level 2.2",
      ],
    ],
    [
      "Level 3",
      [
        "Level 3.1",
        [
          "Level 3.2",
          [
            "Level 3.2.1",
            "Level 3.2.2",
          ],
        ],
      ],
    ],
  ];

  const codeJs = `const ITEMS = [
  "Level 1",
    [
      "Level 2",
      [
        "Level 2.1",
        "Level 2.2",
      ],
    ],
    [
      "Level 3",
      [
        "Level 3.1",
        [
          "Level 3.2",
          [
            "Level 3.2.1",
            "Level 3.2.2",
          ],
        ],
      ],
    ],
  ];

filterList(ITEMS, {
  isSimpleArray: true,
});
// ${ filterList(ITEMS, { isSimpleArray: true }) }

filterList([["x1", ["x1.1", "x1.2"]], { isSimpleArray: true })
// ${ filterList([["x1", ["x1.1", "x1.2"]]], { isSimpleArray: true }) }

filterList(["x0", ["x1", ["x1.1", "x1.2"]], "x3"], { isSimpleArray: true })
// ${ filterList(["x0", ["x1", ["x1.1", "x1.2"]], "x3"], { isSimpleArray: true }) }`;

  return {
    codeJs,
  };
}
