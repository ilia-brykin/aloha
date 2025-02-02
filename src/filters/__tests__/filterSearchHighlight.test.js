import {
  describe,
  expect,
  it,
} from "@jest/globals";

import filterSearchHighlight from "../filterSearchHighlight";

describe("filterSearchHighlight function", () => {
  // test focuses on a single use case
  it("should return empty string when the value provided is non truthy", () => {
    const result = filterSearchHighlight(null, {
      searchModel: "",
      searchClass: "a_search_highlight",
    });
    expect(result).toBe("");
  });

  it("should return original value when searchModel is empty, undefined or null", () => {
    let result = filterSearchHighlight("test value", {
      searchModel: "",
      searchClass: "a_search_highlight",
    });
    expect(result).toBe("test value");

    result = filterSearchHighlight("test value", {
      searchModel: undefined,
      searchClass: "a_search_highlight",
    });
    expect(result).toBe("test value");

    result = filterSearchHighlight("test value", {
      searchModel: null,
      searchClass: "a_search_highlight",
    });
    expect(result).toBe("test value");
  });

  it("should return value with replaced searchModel content wrapped in mark with searchClass, when searchModel is provided", () => {
    let result = filterSearchHighlight("test searchModel", {
      searchModel: "searchModel",
      searchClass: "test",
    });
    expect(result).toBe("test <mark class=\"test\">searchModel</mark>");

    result = filterSearchHighlight("test searchModel", {
      searchModel: "searchModel",
    });
    expect(result).toBe("test <mark class=\"a_search_highlight\">searchModel</mark>");
  });

  // Test for `tag` argument
  it("should wrap matched text in the specified HTML tag", () => {
    const result = filterSearchHighlight("Aloha Vue", {
      searchModel: "Vue",
      tag: "strong",
    });
    expect(result).toBe("Aloha <strong class=\"a_search_highlight\">Vue</strong>");
  });

  it("should use the default mark tag if tag is not provided", () => {
    const result = filterSearchHighlight("Aloha Vue", {
      searchModel: "Vue",
    });
    expect(result).toBe("Aloha <mark class=\"a_search_highlight\">Vue</mark>");
  });

  // Test for `attributes` argument
  it("should add extra attributes to the tag", () => {
    const result = filterSearchHighlight("Aloha Vue", {
      searchModel: "Vue",
      attributes: ["data-aloha=\"search\"", "title=\"Highlight\""],
    });
    expect(result).toBe("Aloha <mark class=\"a_search_highlight\" data-aloha=\"search\" title=\"Highlight\">Vue</mark>");
  });

  // Test for `caseSensitive` argument
  it("should replace text case-sensitively when caseSensitive is true", () => {
    const result = filterSearchHighlight("Aloha Vue vue", {
      searchModel: "Vue",
      caseSensitive: true,
    });
    expect(result).toBe("Aloha <mark class=\"a_search_highlight\">Vue</mark> vue");
  });

  it("should replace text case-insensitively by default", () => {
    const result = filterSearchHighlight("Aloha Vue vue", {
      searchModel: "Vue",
    });
    expect(result).toBe("Aloha <mark class=\"a_search_highlight\">Vue</mark> <mark class=\"a_search_highlight\">vue</mark>");
  });
});

describe("filterSearchHighlight with isHtml=true", () => {
  it("should highlight 'Vue' inside strong tag and ignore href attribute", () => {
    const input = "Aloha <strong>Vue</strong> is a <a href=\"https://vue.com\">framework</a>";
    const result = filterSearchHighlight(input, { searchModel: "vue", isHtml: true });

    expect(result).toBe("Aloha <strong><mark class=\"a_search_highlight\">Vue</mark></strong> is a <a href=\"https://vue.com\">framework</a>");
  });

  it("should highlight multiple occurrences of 'Vue' across different tags", () => {
    const input = "<div><p>Vue is amazing.</p><span>Vue framework</span></div>";
    const result = filterSearchHighlight(input, { searchModel: "Vue", isHtml: true });

    expect(result).toBe("<div><p><mark class=\"a_search_highlight\">Vue</mark> is amazing.</p><span><mark class=\"a_search_highlight\">Vue</mark> framework</span></div>");
  });

  it("should not break HTML structure when highlighting text", () => {
    const input = "<div><h1>Vue.js</h1><p>This is a Vue framework.</p></div>";
    const result = filterSearchHighlight(input, { searchModel: "Vue", isHtml: true });

    expect(result).toBe("<div><h1><mark class=\"a_search_highlight\">Vue</mark>.js</h1><p>This is a <mark class=\"a_search_highlight\">Vue</mark> framework.</p></div>");
  });

  it("should NOT highlight 'Vue.js' if it is split across multiple tags", () => {
    const input = "<p>Welcome to <strong>Vue</strong><span>.js</span> world.</p>";
    const result = filterSearchHighlight(input, { searchModel: "Vue.js", isHtml: true });

    expect(result).toBe("<p>Welcome to <strong>Vue</strong><span>.js</span> world.</p>");
  });

  it("should NOT highlight text inside HTML attributes", () => {
    const input = "<a href=\"https://vue.com\" title=\"Vue framework\">Click here</a>";
    const result = filterSearchHighlight(input, { searchModel: "Vue", isHtml: true });

    expect(result).toBe("<a href=\"https://vue.com\" title=\"Vue framework\">Click here</a>");
  });
});
