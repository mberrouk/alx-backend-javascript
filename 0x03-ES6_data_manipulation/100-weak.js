export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }
  const loadTime = weakMap.get(endpoint) + 1;
  if (loadTime >= 5) {
    throw new Error('Endpoint load is high');
  }
  weakMap.set(endpoint, loadTime);
}
