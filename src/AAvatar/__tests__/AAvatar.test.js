import {
  h,
} from "vue";
import {
  describe,
  expect,
  it,
} from "vitest";
import {
  mount,
} from "@vue/test-utils";

import AAvatarGroup from "../../AAvatarGroup/AAvatarGroup";

import {
  getColorForText,
} from "../compositionAPI/ColorAPI";

import AAvatar from "../AAvatar";

describe("AAvatar", () => {
  it("shows the initials of the name as an image with the name", () => {
    const wrapper = mount(AAvatar, { props: { name: "Anna Maria Becker" } });
    const root = wrapper.get(".a_avatar");
    expect(wrapper.get(".a_avatar__initials").text()).toBe("AB");
    expect(root.attributes("role")).toBe("img");
    expect(root.attributes("aria-label")).toBe("Anna Maria Becker");
    expect(root.classes()).toEqual(expect.arrayContaining(["a_avatar_medium", "a_avatar_circle", `a_avatar_${ getColorForText("Anna Maria Becker") }`]));
  });

  it("chooses always the same color for the same name", () => {
    expect(getColorForText("Anna Becker")).toBe(getColorForText("Anna Becker"));
    const COLORS = new Set(["Anna", "Ben", "Clara", "David", "Eva", "Felix", "Greta", "Hans"].map(name => getColorForText(name)));
    expect(COLORS.size).toBeGreaterThan(3);
    expect(COLORS.has("danger")).toBe(false);
  });

  it("shows the image and falls back to the initials on an error", async() => {
    const wrapper = mount(AAvatar, { props: { name: "Anna Becker", src: "anna.png" } });
    const image = wrapper.get("img");
    expect(image.attributes("alt")).toBe("");
    expect(wrapper.get(".a_avatar").classes()).toContain("a_avatar_with_image");
    await image.trigger("error");
    expect(wrapper.find("img").exists()).toBe(false);
    expect(wrapper.get(".a_avatar__initials").text()).toBe("AB");
    expect(wrapper.emitted("error")).toHaveLength(1);

    await wrapper.setProps({ src: "anna2.png" });
    expect(wrapper.find("img").exists()).toBe(true);
  });

  it("shows an icon without a name and uses alt", () => {
    const wrapper = mount(AAvatar);
    expect(wrapper.find(".a_avatar__icon").exists()).toBe(true);
    expect(wrapper.get(".a_avatar").attributes("aria-label")).toBe("_A_AVATAR_ARIA_LABEL_");
    expect(wrapper.get(".a_avatar").classes()).toContain("a_avatar_gray");

    const withAlt = mount(AAvatar, { props: { name: "Anna Becker", alt: "Profile of Anna" } });
    expect(withAlt.get(".a_avatar").attributes("aria-label")).toBe("Profile of Anna");
  });

  it("adds the status to the accessible name", () => {
    const wrapper = mount(AAvatar, { props: { name: "Anna Becker", status: "online" } });
    expect(wrapper.get(".a_avatar").attributes("aria-label")).toBe("Anna Becker, _A_AVATAR_STATUS_ONLINE_");
    expect(wrapper.get(".a_avatar__status").classes()).toContain("a_avatar__status_online");
    expect(wrapper.get(".a_avatar__status").attributes("aria-hidden")).toBe("true");
  });

  it("is hidden for screen readers when decorative", () => {
    const wrapper = mount(AAvatar, { props: { name: "Anna Becker", decorative: true } });
    const root = wrapper.get(".a_avatar");
    expect(root.attributes("aria-hidden")).toBe("true");
    expect(root.attributes("role")).toBeUndefined();
    expect(root.attributes("aria-label")).toBeUndefined();
  });

  it("supports size, shape, color, initials and the default slot", () => {
    const wrapper = mount(AAvatar, { props: { name: "Anna Becker", size: 64, shape: "square", color: "success", initials: "XY" } });
    const root = wrapper.get(".a_avatar");
    expect(root.attributes("style")).toContain("--a_avatar_size: 64px");
    expect(root.classes()).toEqual(expect.arrayContaining(["a_avatar_square", "a_avatar_success"]));
    expect(wrapper.get(".a_avatar__initials").text()).toBe("XY");

    const slot = mount(AAvatar, { props: { name: "Bot" }, slots: { default: () => h("b", "AI") } });
    expect(slot.get("b").text()).toBe("AI");
  });
});

describe("AAvatarGroup", () => {
  const avatars = names => names.map(name => h(AAvatar, { name }));

  it("shows max avatars and a +N avatar", () => {
    const wrapper = mount(AAvatarGroup, {
      props: { max: 2, label: "Team", size: "small", shape: "square" },
      slots: { default: () => avatars(["Anna Becker", "Ben Ott", "Clara Lenz", "David Roth"]) },
    });
    const group = wrapper.get(".a_avatar_group");
    expect(group.attributes("role")).toBe("group");
    expect(group.attributes("aria-label")).toBe("Team");
    const items = wrapper.findAll(".a_avatar");
    expect(items).toHaveLength(3);
    expect(items[0].classes()).toEqual(expect.arrayContaining(["a_avatar_small", "a_avatar_square"]));
    expect(items[2].text()).toBe("+2");
    expect(items[2].attributes("aria-label")).toBe("_A_AVATAR_GROUP_MORE_{{count}}_");
  });

  it("shows all avatars without max", () => {
    const wrapper = mount(AAvatarGroup, {
      slots: { default: () => avatars(["Anna Becker", "Ben Ott", "Clara Lenz"]) },
    });
    expect(wrapper.findAll(".a_avatar")).toHaveLength(3);
    expect(wrapper.find(".a_avatar_group__more").exists()).toBe(false);
  });
});
