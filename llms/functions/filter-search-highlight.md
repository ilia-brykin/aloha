# filterSearchHighlight

The function **filterSearchHighlight** is used to mark a search term in a value by enclosing the search term with **HTML** tags. It allows customization of the search term and the **CSS** class for highlighting.

## Import as Function

```js
import { filterSearchHighlight } from "aloha-vue";
```

## Import as composition API

```js
import { AFiltersAPI } from "aloha-vue";

export default {
  setup() {  
    const {
      filterSearchHighlight,
    } = AFiltersAPI();
  },
};
```

## Arguments

```js
filterSearchHighlight(value, { [searchModel=""], [searchClass="a_search_highlight"], [tag="mark"], [attributes=[]], [caseSensitive=false], [isHtml=false] })
```

- **value** (String): The value in which the search term should be highlighted
- **[searchModel=""]** (String): The search term that should be highlighted in the value
- **[searchClass="a_search_highlight"]** (String): A **CSS** class that should style the highlighted part of the value
- **[tag="mark"]** (String): The **HTML** tag to use instead of mark
- **[attributes=[]]** (String): List of additional attributes in the format **['key="value"', 'key2="value2"']**
- **[caseSensitive=false]** (Boolean): Whether the search should be case-sensitive
- **[isHtml=false]** (Boolean): Whether to interpret value as **HTML** and search inside text content only.

## searchModel

```js
filterSearchHighlight("Lorem ipsum dolor sit amet consectetur adipisicing elit.", { searchModel: "ipsum" });
// Lorem <mark class="a_search_highlight">ipsum</mark> dolor sit amet consectetur adipisicing elit.

filterSearchHighlight("Lorem ipsum dolor sit amet consectetur adipisicing elit.", { searchModel: "it" });
// Lorem ipsum dolor s<mark class="a_search_highlight">it</mark> amet consectetur adipisicing el<mark class="a_search_highlight">it</mark>.

filterSearchHighlight("Lorem ipsum dolor sit amet consectetur adipisicing elit.", { searchModel: "aloha" });
// Lorem ipsum dolor sit amet consectetur adipisicing elit.
```

## searchClass

```js
filterSearchHighlight("Lorem ipsum dolor sit amet consectetur adipisicing elit.", { searchModel: "ipsum", searchClass: "test_class" });
// Lorem <mark class="test_class">ipsum</mark> dolor sit amet consectetur adipisicing elit.
```

## tag

```js
filterSearchHighlight("Lorem ipsum dolor sit amet consectetur adipisicing elit.", { searchModel: "ipsum", tag: "strong" });
// Lorem <strong class="a_search_highlight">ipsum</strong> dolor sit amet consectetur adipisicing elit.
```

## attributes

```js
filterSearchHighlight("Lorem ipsum dolor sit amet consectetur adipisicing elit.", { searchModel: "ipsum", attributes: ["data-aloha='search'", "title='Highlight'"] });
// Lorem <mark class="a_search_highlight" data-aloha='search' title='Highlight'>ipsum</mark> dolor sit amet consectetur adipisicing elit.
```

## caseSensitive

```js
filterSearchHighlight("Aloha Vue vue.", { searchModel: "Vue", caseSensitive: true });
// Aloha <mark class="a_search_highlight">Vue</mark> vue.

filterSearchHighlight("Aloha Vue vue.", { searchModel: "Vue", caseSensitive: false });
// Aloha <mark class="a_search_highlight">Vue</mark> <mark class="a_search_highlight">vue</mark>.
```

## isHtml

```js
filterSearchHighlight("Aloha <strong>Vue</strong> is a <a href="https://vue.com">framework</a>", { searchModel: "vue", isHtml: true });
// Aloha <strong><mark class="a_search_highlight">Vue</mark></strong> is a <a href="https://vue.com">framework</a>

filterSearchHighlight("<div><p>Vue is amazing.</p><span>Vue framework</span></div>", { searchModel: "vue", isHtml: true });
// <div><p><mark class="a_search_highlight">Vue</mark> is amazing.</p><span><mark class="a_search_highlight">Vue</mark> framework</span></div>

filterSearchHighlight("<div><h1>Vue.js</h1><p>This is a Vue framework.</p></div>", { searchModel: "vue", isHtml: true });
// <div><h1><mark class="a_search_highlight">Vue</mark>.js</h1><p>This is a <mark class="a_search_highlight">Vue</mark> framework.</p></div>

filterSearchHighlight("<p>Welcome to <strong>Vue</strong><span>.js</span> world.</p>", { searchModel: "vue", isHtml: true });
// <p>Welcome to <strong><mark class="a_search_highlight">Vue</mark></strong><span>.js</span> world.</p>
```
