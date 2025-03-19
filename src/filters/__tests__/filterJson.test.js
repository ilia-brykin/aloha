import {
  describe,
  expect,
  it,
} from "@jest/globals";

import filterJson from "../filterJson";

describe("filterJson", () => {
  it("returns empty string when input value is null", () => {
    expect(filterJson(null)).toBe("");
  });

  it("returns empty string when input value is undefined", () => {
    expect(filterJson(undefined)).toBe("");
  });

  it("returns a stringified JSON when input value is a valid JSON", () => {
    const value = { key: "value" };
    const expectedOutput = JSON.stringify(value, null, 2);

    expect(filterJson(value)).toBe(expectedOutput);
  });

  it("returns empty string when an error occurs during stringifying", () => {
    const circularReference = {};
    circularReference.self = circularReference;

    expect(filterJson(circularReference)).toBe("");
  });

  it("returns formatted HTML output when isHtml is true", () => {
    const value = { key: "value" };
    const expectedOutput = `<pre class="a_code_content">${ JSON.stringify(value, null, 2) }</pre>`;

    expect(filterJson(value, { isHtml: true })).toBe(expectedOutput);
  });

  it("returns formatted HTML output with custom class", () => {
    const value = { key: "value" };
    const expectedOutput = `<pre class="custom_class">${ JSON.stringify(value, null, 2) }</pre>`;

    expect(filterJson(value, { isHtml: true, jsonClass: "custom_class" })).toBe(expectedOutput);
  });

  it("returns formatted HTML output with custom tag", () => {
    const value = { key: "value" };
    const expectedOutput = `<div class="a_code_content">${ JSON.stringify(value, null, 2) }</div>`;

    expect(filterJson(value, { isHtml: true, tag: "div" })).toBe(expectedOutput);
  });

  it("returns formatted HTML output with custom tag and class", () => {
    const value = { key: "value" };
    const expectedOutput = `<span class="custom_class">${ JSON.stringify(value, null, 2) }</span>`;

    expect(filterJson(value, { isHtml: true, tag: "span", jsonClass: "custom_class" })).toBe(expectedOutput);
  });

  it("returns correctly formatted JSON when using a replacer function", () => {
    const value = { key1: "value1", key2: "value2" };
    const replacer = (key, val) => (key === "key1" ? undefined : val);
    const expectedOutput = JSON.stringify(value, replacer, 2);

    expect(filterJson(value, { replacer })).toBe(expectedOutput);
  });

  it("returns correctly formatted JSON with a custom space indentation", () => {
    const value = { key: "value" };
    const expectedOutput = JSON.stringify(value, null, 4);

    expect(filterJson(value, { space: 4 })).toBe(expectedOutput);
  });
});
