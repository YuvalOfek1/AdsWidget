import { branding } from "../src/recommendation/branding";

test("branding function generates the correct element", () => {
  const result = branding("Brand", "sponsored");
  expect(result.tagName).toBe("DIV");
  expect(result.className).toBe("ad-branding");
  expect(result.textContent).toBe(" Brand | Sponsored");
});
