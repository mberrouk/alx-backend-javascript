export default function hasValuesFromArray(setCheck, arr) {
  return arr.every((element) => setCheck.has(element));
}
