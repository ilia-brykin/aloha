import {
  reactive,
} from "vue";

import UIExcludeRenderAttributesAPI from "../UIExcludeRenderAttributesAPI";

describe("UIExcludeRenderAttributesAPI", () => {
  it("returns attributes with undefined values for exclusion", () => {
    const props = reactive({
      excludeRenderAttributes: ["data-test", "aria-label"],
    });

    const {
      attributesToExcludeFromRender,
    } = UIExcludeRenderAttributesAPI(props);

    expect(attributesToExcludeFromRender.value).toEqual({
      "data-test": undefined,
      "aria-label": undefined,
    });
  });

  it("returns empty attributes for empty array", () => {
    const props = reactive({
      excludeRenderAttributes: [],
    });

    const {
      attributesToExcludeFromRender,
    } = UIExcludeRenderAttributesAPI(props);

    expect(attributesToExcludeFromRender.value).toEqual({});
  });
});
