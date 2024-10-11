export default function getStudentIdsSum(studentArr) {
  return studentArr.reduce((accumulator, currentValue) => {
    if (typeof (accumulator) !== 'undefined') {
      return accumulator + currentValue.id;
    }
    return 0;
  }, 0);
}

/* Other version
 *
 * export default function getStudentIdsSum(studentArr) {
 *  return studentArr.reduce((accum, curr) => accum.id || accum + curr.id , 0);
 * }
 *
 */
