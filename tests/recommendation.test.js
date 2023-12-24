import recommendation from "../src/recommendation";

test("recommendation function generates the correct element", () => {
  const ad = {
    thumbnail: [{ url: "https://example.com/image.jpg" }],
    url: "https://example.com",
    origin: "sponsored",
  };
  const result = recommendation(ad);
  expect(result.tagName).toBe("DIV");
  expect(result.className).toBe("ad-card");
  expect(result.children.length).toBe(2);
  expect(result.children[0].tagName).toBe("IMG");
  expect(result.children[0].className).toBe("ad-thumbnail");
});
