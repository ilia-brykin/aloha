import filterEmail from "../filterEmail";

describe("filterEmail", () => {
  test("basic email", () => {
    expect(filterEmail("user@aloha.com")).toBe('<a href="mailto:user@aloha.com">user@aloha.com</a>');
  });

  test("email with CSS class", () => {
    expect(filterEmail("contact@aloha.com", { linkClass: "email-link" })).toBe('<a href="mailto:contact@aloha.com" class="email-link">contact@aloha.com</a>');
  });

  test("empty email", () => {
    expect(filterEmail("")).toBe('');
  });

  test("null email", () => {
    expect(filterEmail(null)).toBe('');
  });

  test("undefined email", () => {
    expect(filterEmail(undefined)).toBe('');
  });

  test("numeric value (invalid email)", () => {
    expect(filterEmail(12345)).toBe('');
  });

  test("email with special characters", () => {
    expect(filterEmail("name.surname+filter@company.org")).toBe('<a href="mailto:name.surname+filter@company.org">name.surname+filter@company.org</a>');
  });

  test("email with combined class attribute", () => {
    expect(filterEmail("hr@enterprise.net", { linkClass: "external contact" })).toBe('<a href="mailto:hr@enterprise.net" class="external contact">hr@enterprise.net</a>');
  });
});

