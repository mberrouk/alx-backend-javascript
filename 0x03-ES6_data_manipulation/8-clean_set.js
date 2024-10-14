export default function cleanSet(set, startString) {
  if (!set || !startString || !(set instanceof Set) || !(typeof startString === 'string')) {
    return '';
  }

  const parts = [];
  for (const value of set.values()) {
    if (typeof value === 'string' && value.startsWith(startString)) {
      const part = value.substring(startString.length);
      if (part && part !== value) {
        parts.push(part);
      }
    }
  }
  return parts.join('-');
}
