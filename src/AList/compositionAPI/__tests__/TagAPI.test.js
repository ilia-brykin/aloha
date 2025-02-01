import {
  beforeEach,
  describe,
  expect,
  it,
} from "@jest/globals";

import TagAPI from "../TagAPI";

describe("TagAPI", () => {
  let props;

  beforeEach(() => {
    props = {
      tag: "ul",
      isHtml: false,
    };
  });

  it("returns tagLocal as span if isHtml is false and tag is 'ul' or 'ol'", () => {
    const { tagLocal } = TagAPI(props);
    expect(tagLocal.value).toBe("span");
  });

  it("returns tagLocal equal to tag 'ul' if isHtml is true", () => {
    props.isHtml = true;
    const { tagLocal } = TagAPI(props);
    expect(tagLocal.value).toBe("ul");
  });

  it("returns tagLocal equal to tag 'ol' if isHtml is true", () => {
    props.isHtml = true;
    props.tag = "ol";
    const { tagLocal } = TagAPI(props);
    expect(tagLocal.value).toBe("ol");
  });

  it("returns tagLocal equal to tag if tag is not 'ul' or 'ol'", () => {
    props.tag = "div";
    const { tagLocal } = TagAPI(props);
    expect(tagLocal.value).toBe("div");
  });
});
