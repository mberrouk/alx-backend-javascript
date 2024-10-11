export default function getStudentsByLocation(studentsList, cityName) {
  if (studentsList instanceof Array) {
    return studentsList.filter((value) => value.location === cityName);
  }
  return [];
}
