# filterList

The function creates a list from an array.

## Import as Function

```js
import { filterList } from "aloha-vue";
```

## Import as composition API

```js
import { AFiltersAPI } from "aloha-vue";

export default {
  setup() {  
    const {
      filterList,
    } = AFiltersAPI();
  },
};
```

## Arguments

```js
filterList(array, { [defaultValue=""], [isHtml=true], [isSimpleArray=false], [keyChildren=""], [keyLabel=""], [keyLabelCallback], [lastSeparator], [listClass=""], [separator], [separatorHtml=", "], [tag="ul"] })
```

- **array** (Array): The array for the list
- **[defaultValue=""]** (String): _PAGE_FILTER_LIST_ARGUMENTS_DEFAULT_VALUE_
- **[isHtml=true]** (Boolean): If **True**, an HTML list (<ul><li>...</li></ul>) is created. Otherwise, a text list is generated
- **[isSimpleArray=false]** (Boolean): Indicates whether only a simple array without objects is used
- **[keyChildren=""]** (String): Key for child elements (only if **isSimpleArray=false**)
- **[keyLabel=""]** (String): Key for the label to be displayed (only if **isSimpleArray=false**)
- **[keyLabelCallback]** (Function): Function for generating labels with two parameters (**item**, **itemIndex**)
- **[lastSeparator]** (String): Specifies the separator to be used before the final element in the list.
- **[listClass=""]** (String): CSS class e.g.: (a_list_without_styles)
- **[separator]** (String): Separator between elements (only if **isHtml=false**)
- **[separatorHtml=""]** (String): _PAGE_FILTER_LIST_ARGUMENTS_SEPARATOR_HTML_
- **[tag="ul"]** (String): HTML tag for the entire list

## isSimpleArray=true

```js
const ITEMS = ["label 1", "label 2", "label 3"];

filterList(ITEMS, {
  isSimpleArray: true,
});
// <ul><li>label 1</li><li>label 2</li><li>label 3</li></ul>
```

## keyLabel

```js
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

filterList(ITEMS, {
  keyLabel: "label",
});
// <ul><li>label 1</li><li>label 2</li><li>label 3</li><li>label 4</li></ul>
```

## keyLabelCallback

```js
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

filterList(ITEMS, {
  keyLabelCallback,
});
// <ul><li>+ label 1</li><li>+ label 2</li><li>+ label 3</li><li>+ label 4</li></ul>
```

## isHtml=false

```js
const ITEMS = ["label 1", "label 2", "label 3"];

filterList(ITEMS, {
  isHtml: false,
  isSimpleArray: true,
});
// label 1, label 2, label 3
```

## separator / lastSeparator

```js
const ITEMS = ["label 1", "label 2", "label 3"];

filterList(ITEMS, {
  isHtml: false,
  isSimpleArray: true,
  separator: "; ",
});
// label 1; label 2; label 3

filterList(ITEMS, {
  isHtml: false,
  isSimpleArray: true,
  lastSeparator: " & ",
  separator: ", ",
});
// label 1, label 2 & label 3

filterList(ITEMS, {
  isHtml: true,
  isSimpleArray: true,
  separator: ";",
});
// <ul><li>label 1;</li><li>label 2;</li><li>label 3</li></ul>
```

## separatorHtml

```js
const ITEMS = ["label 1", "label 2", "label 3"];

filterList(ITEMS, {
  isHtml: true,
  isSimpleArray: true,
  separatorHtml: "<hr>",
});
// <ul><li>label 1<hr></li><li>label 2<hr></li><li>label 3</li></ul>

filterList(ITEMS, {
  isHtml: true,
  isSimpleArray: true,
  separatorHtml: "<div>Aloha</div>",
});
// <ul><li>label 1<div>Aloha</div></li><li>label 2<div>Aloha</div></li><li>label 3</li></ul>
```

## tag

```js
const ITEMS = ["label 1", "label 2", "label 3"];

filterList(ITEMS, {
  tag: "ol",
  isSimpleArray: true,
});
// <ol><li>label 1</li><li>label 2</li><li>label 3</li></ol>
```

## listClass

```js
const ITEMS = ["label 1", "label 2", "label 3"];

filterList(ITEMS, {
  listClass: "a_list_without_styles",
  isSimpleArray: true,
});
// <ul class="a_list_without_styles"><li>label 1</li><li>label 2</li><li>label 3</li></ul>
```

## keyChildren

```js
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

filterList(ITEMS, {
  keyLabel: "label",
  keyChildren: "children",
});
// <ul><li>Level 1<ul><li>Level 1.1<ul><li>Level 1.1.1</li><li>Level 1.1.2</li></ul></li><li>Level 1.2</li></ul></li><li>Level 2<ul><li>Level 2.1</li><li>Level 2.2</li></ul></li></ul>
```

## Tree structure isSimpleArray=true

```js
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

filterList(ITEMS, {
  isSimpleArray: true,
});
// <ul><li>Level 1</li><li>Level 2<ul><li>Level 2.1</li><li>Level 2.2</li></ul></li><li>Level 3<ul><li>Level 3.1</li><li>Level 3.2<ul><li>Level 3.2.1</li><li>Level 3.2.2</li></ul></li></ul></li></ul>

filterList([["x1", ["x1.1", "x1.2"]], { isSimpleArray: true })
// <ul><li>x1<ul><li>x1.1</li><li>x1.2</li></ul></li></ul>

filterList(["x0", ["x1", ["x1.1", "x1.2"]], "x3"], { isSimpleArray: true })
// <ul><li>x0</li><li>x1<ul><li>x1.1</li><li>x1.2</li></ul></li><li>x3</li></ul>
```
