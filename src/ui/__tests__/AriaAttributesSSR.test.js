import {
  createSSRApp,
  h,
} from "vue";
import {
  describe,
  expect,
  it,
} from "vitest";
import {
  AButton,
  AInput,
  AOneCheckbox,
  ATextarea,
} from "../../index";

import {
  renderToString,
} from "vue/server-renderer";

// the HTML of the server (Nuxt) must have aria-* attributes, not ariaInvalid / ariainvalid
const render = component => renderToString(createSSRApp({ render: () => component }));

const expectNoCamelCaseAria = html => {
  expect(html).not.toMatch(/\saria[A-Z]/);
  expect(html).not.toMatch(/\saria(invalid|required|hidden|expanded|disabled|selected|label)=/);
};

describe("aria attributes in the HTML of SSR", () => {
  it("AInput with an error: aria-invalid and aria-required", async() => {
    const HTML = await render(h(AInput, {
      id: "name",
      label: "Name",
      required: true,
      errors: ["Required"],
      modelValue: "",
    }));

    expect(HTML).toContain("aria-invalid=\"true\"");
    expect(HTML).toContain("aria-required=\"true\"");
    expectNoCamelCaseAria(HTML);
  });

  it("ATextarea without an error: aria-invalid false", async() => {
    const HTML = await render(h(ATextarea, {
      id: "text",
      label: "Text",
      modelValue: "",
    }));

    expect(HTML).toContain("aria-invalid=\"false\"");
    expectNoCamelCaseAria(HTML);
  });

  it("AOneCheckbox with an error: aria-invalid and aria-required", async() => {
    const HTML = await render(h(AOneCheckbox, {
      id: "terms",
      label: "Terms",
      required: true,
      errors: ["Required"],
      modelValue: false,
    }));

    expect(HTML).toContain("aria-invalid=\"true\"");
    expect(HTML).toContain("aria-required=\"true\"");
    expectNoCamelCaseAria(HTML);
  });

  it("AButton with an icon: aria-hidden on the icon", async() => {
    const HTML = await render(h(AButton, {
      iconLeft: "<svg viewBox=\"0 0 16 16\"></svg>",
      textScreenReader: "Settings",
    }));

    expect(HTML).toContain("aria-hidden=\"true\"");
    expectNoCamelCaseAria(HTML);
  });
});
