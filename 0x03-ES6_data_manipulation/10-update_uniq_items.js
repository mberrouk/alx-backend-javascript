export default function updateUniqueItems(inMap) {
  if (!(inMap instanceof Map)) {
    throw new Error('Cannot process');
  }
  inMap.forEach((value, key) => {
    if (value === 1) {
      inMap.set(key, 100);
    }
  });
}
