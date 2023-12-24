import { thumbnail } from '../src/recommendation/thumbnail';

test('thumbnail function generates the correct image element', () => {
  const result = thumbnail('https://example.com/image.jpg');
  expect(result.tagName).toBe('IMG');
  expect(result.className).toBe('ad-thumbnail');
  expect(result.src).toBe('https://example.com/image.jpg');
});

test('thumbnail function generates the correct image element when no image is provided', () => {
  const result = thumbnail('');
  expect(result.tagName).toBe('IMG');
  expect(result.className).toBe('ad-thumbnail');
  expect(result.src).toBe('https://fl-1.cdn.flockler.com/embed/no-image.svg');
});


