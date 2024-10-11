export default function getListStudentIds(arrObj) {
  if (!(arrObj instanceof Array)) {
    return ([]);
  }
  return arrObj.map((value) => value.id);
}
