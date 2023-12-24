import { details } from "../src/recommendation/details";

test("details function generates the correct element", () => {
  const ad = {
    name: "Ad Name",
    branding: "Brand",
    origin: "sponsored",
  };
  const result = details(ad);
  expect(result.tagName).toBe("div");
  expect(result.className).toBe("ad-details");
  expect(result.children.length).toBe(2);
  expect(result.children[0].tagName).toBe("div");
});
