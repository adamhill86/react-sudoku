export function clone<T>(items: T): T {
  if (Array.isArray(items)) {
    return items.map(item => Array.isArray(item) ? clone(item) : item) as any as T;
  }
  return items;
}
