export const ensureHasLength = (value, expectedLength) => {
  expect(value).toHaveLength(expectedLength);
};

export const ensureNotNull = (value) => {
  expect(value).not.toBeNull();
};

export const ensureIsDefined = (value) => {
  expect(value).toBeDefined();
};
export const ensureEqual = (actual, expected) => {
  expect(actual).toEqual(expected);
};

export const ensureIsArray = (value) => {
  expect(Array.isArray(value)).toBeTruthy();
};
