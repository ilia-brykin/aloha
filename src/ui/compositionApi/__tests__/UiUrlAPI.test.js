import {
  effectScope,
  nextTick,
  reactive,
  watch,
} from "vue";
import {
  afterEach,
  describe,
  expect,
  it,
  vi,
} from "vitest";
import {
  flushPromises,
} from "@vue/test-utils";

import UiDataFromServerAPI from "../UiDataFromServerAPI";
import UiUrlAPI from "../UiUrlAPI";

const { getListHttp } = vi.hoisted(() => ({
  getListHttp: vi.fn(() => Promise.resolve([])),
}));

vi.mock("../../../compositionAPI/AHttpAPI", () => ({
  default: () => ({ getListHttp }),
}));

let scope;

afterEach(() => {
  scope?.stop();
  getListHttp.mockClear();
});

describe("UI URL templates", () => {
  it.each([undefined, "", "foo/bar/", "foo/{{ id/"])("preserves URL %s without a complete placeholder", url => {
    const props = reactive({ url, urlTemplateData: { id: 1 } });
    const { urlLocal } = UiUrlAPI(props);

    expect(urlLocal.value).toBe(url);
    props.urlTemplateData.id = 2;
    expect(urlLocal.value).toBe(url);
  });

  it("uses translation placeholders with nested paths and repeated values", () => {
    const props = reactive({
      url: "foo/{{ id }}/bar/{{ aloha.bar }}/{{id}}/",
      urlTemplateData: { id: 0, aloha: { bar: false } },
    });
    const { urlLocal } = UiUrlAPI(props);

    expect(urlLocal.value).toBe("foo/0/bar/false/0/");
    props.urlTemplateData.aloha.bar = "baz";
    expect(urlLocal.value).toBe("foo/0/bar/baz/0/");
  });

  it.each([false, true])("only calls the URL watcher when the resolved URL changes (deep: %s)", async deep => {
    const props = reactive({
      url: "foo/{{ id }}/bar/{{ aloha.bar }}/",
      urlTemplateData: { id: 1, aloha: { bar: "baz" }, unused: 0 },
    });
    const callback = vi.fn();
    let api;
    scope = effectScope();
    scope.run(() => {
      api = UiDataFromServerAPI(props);
      watch(api.urlPropsComputed, callback, { deep });
    });

    props.urlTemplateData.unused++;
    await nextTick();
    props.urlTemplateData = { id: 1, aloha: { bar: "baz" }, unused: 2 };
    await nextTick();
    props.urlTemplateData.id = "1";
    await nextTick();
    expect(callback).not.toHaveBeenCalled();

    props.urlTemplateData.aloha.bar = "new";
    await nextTick();
    expect(callback).toHaveBeenCalledTimes(1);
    expect(api.urlPropsComputed.value[1]).toBe("foo/1/bar/new/");

    props.url = "other/{{ id }}/";
    await nextTick();
    expect(callback).toHaveBeenCalledTimes(2);
  });

  it("reloads using the resolved URL and resets the model only when it changes", async() => {
    const props = reactive({
      url: "foo/{{ id }}/",
      urlTemplateData: { id: 1 },
      urlParams: { limit: 10 },
    });
    const changeModel = vi.fn();
    scope = effectScope();
    scope.run(() => {
      const api = UiDataFromServerAPI(props, { changeModel });
      watch(api.urlPropsComputed, api.updateUrlPropsComputed);
      api.loadDataFromServer();
    });
    await flushPromises();
    expect(getListHttp).toHaveBeenLastCalledWith(expect.objectContaining({
      url: "foo/1/",
      urlParams: { limit: 10 },
    }));

    props.urlTemplateData = { id: 1, unused: true };
    await flushPromises();
    expect(getListHttp).toHaveBeenCalledTimes(1);
    expect(changeModel).not.toHaveBeenCalled();

    props.urlTemplateData.id = 2;
    await flushPromises();
    expect(getListHttp).toHaveBeenCalledTimes(2);
    expect(getListHttp).toHaveBeenLastCalledWith(expect.objectContaining({ url: "foo/2/" }));
    expect(changeModel).toHaveBeenCalledTimes(1);
  });

  it("uses the resolved URL for search and the retrieve fallback", async() => {
    const props = reactive({
      url: "foo/{{ id }}/",
      urlTemplateData: { id: 1 },
      searchApi: true,
      searchApiKey: "search",
      keyId: "pk",
      modelValue: 42,
    });
    scope = effectScope();
    const api = scope.run(() => UiDataFromServerAPI(props));

    api.onSearchInApi({ search: "hello" });
    await flushPromises();
    expect(getListHttp).toHaveBeenLastCalledWith({
      url: "foo/1/",
      urlParams: { search: "hello" },
    });

    await api.loadDataFromServerForRetrieve();
    expect(getListHttp).toHaveBeenLastCalledWith({
      url: "foo/1/",
      urlParams: { pk: [42], limit: 1 },
    });

    props.urlRetrieve = "retrieve/";
    await flushPromises();
    expect(getListHttp).toHaveBeenLastCalledWith(expect.objectContaining({ url: "retrieve/" }));
  });
});
