import {
  vi,
} from "vitest";

export function mockVueInject(mock_injects) {
  vi.doMock("vue", async() => {
    const originalVue = await vi.importActual("vue");
    const ref = originalVue.ref;

    return {
      ...originalVue,
      inject: vi.fn((key, defaultValue) => {
        if (Object.hasOwn(mock_injects, key)) {
          return ref(mock_injects[key]);
        }
        return ref(defaultValue);
      }),
    };
  });
}
