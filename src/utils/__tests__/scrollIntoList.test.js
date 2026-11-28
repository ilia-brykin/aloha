import {
  describe,
  expect,
  it,
} from "vitest";

import {
  scrollIntoList,
} from "../scrollIntoList";

const element = rect => ({ getBoundingClientRect: () => rect, scrollTop: 100 });

describe("scrollIntoList", () => {
  const LIST_RECT = { top: 100, bottom: 300 };

  it("an option below the list: the list scrolls down by the difference", () => {
    const LIST = element(LIST_RECT);
    scrollIntoList(element({ top: 320, bottom: 350 }), LIST);
    expect(LIST.scrollTop).toBe(150);
  });

  it("an option above the list: the list scrolls up by the difference", () => {
    const LIST = element(LIST_RECT);
    scrollIntoList(element({ top: 60, bottom: 90 }), LIST);
    expect(LIST.scrollTop).toBe(60);
  });

  it("a visible option, no option, no list: nothing changes", () => {
    const LIST = element(LIST_RECT);
    scrollIntoList(element({ top: 150, bottom: 180 }), LIST);
    expect(LIST.scrollTop).toBe(100);
    expect(() => scrollIntoList(null, LIST)).not.toThrow();
    expect(() => scrollIntoList(element({ top: 0, bottom: 1 }), null)).not.toThrow();
  });
});
