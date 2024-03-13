export function mockVueInject(mock_injects) {
  jest.mock("vue", () => {
    const originalVue = jest.requireActual("vue");
    const ref = originalVue.ref;

    return {
      ...originalVue,
      inject: jest.fn((key, defaultValue) => {
        if (mock_injects[key]) {
          return ref(mock_injects[key]);
        }
        return ref(defaultValue);
      }),
    };
  });
}
