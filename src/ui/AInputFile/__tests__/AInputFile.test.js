import {
  nextTick,
} from "vue";
import {
  afterEach,
  describe,
  expect,
  it,
} from "vitest";
import {
  mount,
} from "@vue/test-utils";

import {
  isFileAccepted,
} from "../utils/utils";

import AInputFile from "../AInputFile";

const wrappers = [];

const mountFile = (props = {}) => {
  const wrapper = mount(AInputFile, {
    props: {
      label: "Documents",
      "onUpdate:modelValue": model => wrapper.setProps({ modelValue: model }),
      ...props,
    },
    attachTo: document.body,
  });
  wrappers.push(wrapper);
  return wrapper;
};

const createFile = ({ name = "file.pdf", type = "application/pdf", size = 1000 } = {}) => {
  const FILE = new File(["x"], name, { type });
  Object.defineProperty(FILE, "size", { value: size });
  return FILE;
};

const selectFiles = async(wrapper, files) => {
  const INPUT = wrapper.get("input[type=file]");
  Object.defineProperty(INPUT.element, "files", { value: files, configurable: true });
  await INPUT.trigger("change");
};

const dropFiles = async(wrapper, files) => {
  const DATA_TRANSFER = { files, types: ["Files"], dropEffect: "" };
  const ZONE = wrapper.get(".a_input_file__dropzone");
  await ZONE.trigger("dragenter", { dataTransfer: DATA_TRANSFER });
  await ZONE.trigger("dragover", { dataTransfer: DATA_TRANSFER });
  expect(ZONE.classes()).toContain("a_input_file__dropzone_active");
  await ZONE.trigger("drop", { dataTransfer: DATA_TRANSFER });
};

const lastModel = wrapper => wrapper.emitted("update:modelValue")?.at(-1)?.[0];

afterEach(() => {
  wrappers.splice(0).forEach(wrapper => wrapper.unmount());
});

describe("isFileAccepted", () => {
  it("checks extensions, MIME types and MIME groups", () => {
    const PDF = { name: "Report.PDF", type: "application/pdf" };
    const PNG = { name: "photo.png", type: "image/png" };
    expect(isFileAccepted({ file: PDF, accept: "" })).toBe(true);
    expect(isFileAccepted({ file: PDF, accept: ".pdf" })).toBe(true);
    expect(isFileAccepted({ file: PDF, accept: "application/pdf" })).toBe(true);
    expect(isFileAccepted({ file: PNG, accept: "image/*" })).toBe(true);
    expect(isFileAccepted({ file: PNG, accept: ".pdf, .docx" })).toBe(false);
    expect(isFileAccepted({ file: { name: "x", type: "" }, accept: "image/*" })).toBe(false);
  });
});

describe("AInputFile", () => {
  it("names the input by the label and the button and describes it by the hint", () => {
    const wrapper = mountFile({ accept: ".pdf,.png", maxSize: 5 * 1024 * 1024 });
    const INPUT = wrapper.get("input[type=file]");
    const ID = INPUT.attributes("id");
    expect(INPUT.attributes("aria-labelledby")).toBe(`${ ID }_label ${ ID }_button_text`);
    expect(wrapper.get(`#${ ID }_button_text`).text()).toBe("_A_INPUT_FILE_SELECT_FILE_");
    expect(INPUT.attributes("accept")).toBe(".pdf,.png");
    expect(INPUT.attributes("aria-describedby")).toContain(`${ ID }_hint`);
    expect(wrapper.get(".a_input_file__hint").text()).toBe("_A_INPUT_FILE_HINT_ACCEPT_{{accept}}_ · _A_INPUT_FILE_HINT_MAX_SIZE_{{size}}_");
  });

  it("selects a file and shows its name and size", async() => {
    const wrapper = mountFile();
    await selectFiles(wrapper, [createFile({ size: 2048 })]);
    expect(lastModel(wrapper)).toMatchObject({ name: "file.pdf", size: 2048, type: "application/pdf" });
    expect(wrapper.get(".a_input_file__name").text()).toBe("file.pdf");
    expect(wrapper.get(".a_input_file__size").text()).toBe("2,0 _A_FILE_SIZE_KB_");
    expect(wrapper.get("[aria-live]").text()).toBe("_A_INPUT_FILE_ADDED_{{count}}_");
    expect(wrapper.get("input[type=file]").element.value).toBe("");
  });

  it("rejects files with a wrong type, a too large size or too many files", async() => {
    const wrapper = mountFile({ isMultiple: true, accept: ".pdf", maxSize: 1000, maxFiles: 2 });
    await selectFiles(wrapper, [
      createFile({ name: "a.pdf" }),
      createFile({ name: "b.png", type: "image/png" }),
      createFile({ name: "c.pdf", size: 5000 }),
      createFile({ name: "d.pdf" }),
      createFile({ name: "e.pdf" }),
    ]);
    expect(lastModel(wrapper).map(model => model.name)).toEqual(["a.pdf", "d.pdf"]);
    const REJECTED = wrapper.emitted("reject")[0][0].files;
    expect(REJECTED.map(item => [item.name, item.reason])).toEqual([["b.png", "type"], ["c.pdf", "size"], ["e.pdf", "count"]]);
    expect(wrapper.findAll(".a_input_file__rejected_list li")).toHaveLength(3);

    await wrapper.get(".a_input_file__rejected_close").trigger("click");
    expect(wrapper.find(".a_input_file__rejected").exists()).toBe(false);
  });

  it("replaces or appends files", async() => {
    const wrapper = mountFile({ isMultiple: true });
    await selectFiles(wrapper, [createFile({ name: "a.pdf" })]);
    await selectFiles(wrapper, [createFile({ name: "b.pdf" })]);
    expect(lastModel(wrapper).map(model => model.name)).toEqual(["b.pdf"]);

    await wrapper.setProps({ isAppend: true });
    await selectFiles(wrapper, [createFile({ name: "c.pdf" })]);
    expect(lastModel(wrapper).map(model => model.name)).toEqual(["b.pdf", "c.pdf"]);
  });

  it("removes a file and moves the focus", async() => {
    const wrapper = mountFile({ isMultiple: true });
    await selectFiles(wrapper, [createFile({ name: "a.pdf" }), createFile({ name: "b.pdf" })]);
    const BUTTONS = wrapper.findAll(".a_input_file__remove");
    expect(BUTTONS[0].text()).toBe("_A_INPUT_FILE_REMOVE_{{name}}_");
    await BUTTONS[0].trigger("click");
    await nextTick();
    expect(lastModel(wrapper).map(model => model.name)).toEqual(["b.pdf"]);
    expect(wrapper.emitted("remove")[0][0]).toMatchObject({ index: 0, model: { name: "a.pdf" } });
    expect(document.activeElement).toBe(wrapper.get(".a_input_file__remove").element);

    await wrapper.get(".a_input_file__remove").trigger("click");
    await nextTick();
    expect(lastModel(wrapper)).toEqual([]);
    expect(document.activeElement).toBe(wrapper.get("input[type=file]").element);
  });

  it("adds dropped files in the dropzone", async() => {
    const wrapper = mountFile({ isDropzone: true });
    expect(wrapper.get(".a_input_file__dropzone_text").text()).toContain("_A_INPUT_FILE_DROP_TEXT_FILE_");
    await dropFiles(wrapper, [createFile({ name: "a.pdf" }), createFile({ name: "b.pdf" })]);
    expect(lastModel(wrapper)).toMatchObject({ name: "a.pdf" });
    expect(wrapper.emitted("reject")[0][0].files[0]).toMatchObject({ name: "b.pdf", reason: "count" });
    expect(wrapper.get(".a_input_file__dropzone").classes()).not.toContain("a_input_file__dropzone_active");
  });

  it("ignores dropped files when disabled", async() => {
    const wrapper = mountFile({ isDropzone: true, disabled: true });
    await wrapper.get(".a_input_file__dropzone").trigger("drop", { dataTransfer: { files: [createFile()], types: ["Files"] } });
    expect(wrapper.emitted("update:modelValue")).toBeUndefined();
    expect(wrapper.get("input[type=file]").attributes("disabled")).toBeDefined();
  });

  it("shows the upload status of the files", () => {
    const wrapper = mountFile({
      isMultiple: true,
      modelValue: [
        { name: "a.pdf", size: 1000, progress: 40 },
        { name: "b.pdf", size: 1000, status: "success", url: "/files/b.pdf" },
        { name: "c.pdf", size: 1000, status: "error", errorText: "Server error" },
      ],
    });
    expect(wrapper.find(".a_input_file__progress").exists()).toBe(true);
    expect(wrapper.get(".a_input_file__status_success").text()).toBe("_A_INPUT_FILE_UPLOADED_");
    expect(wrapper.get("a.a_input_file__name").attributes("href")).toBe("/files/b.pdf");
    expect(wrapper.get(".a_input_file__status_error").text()).toBe("Server error");
    expect(wrapper.findAll(".a_input_file__item")[2].classes()).toContain("a_input_file__item_error");
  });

  it("shows the files with links when readonly", () => {
    const wrapper = mountFile({ readonly: true, modelValue: { name: "a.pdf", size: 1000, url: "/files/a.pdf" } });
    expect(wrapper.find("input[type=file]").exists()).toBe(false);
    expect(wrapper.get("a.a_input_file__name").attributes("href")).toBe("/files/a.pdf");
    expect(wrapper.find(".a_input_file__remove").exists()).toBe(false);
  });
});
