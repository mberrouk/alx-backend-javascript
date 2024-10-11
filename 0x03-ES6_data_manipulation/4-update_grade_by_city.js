export default function updateStudentGradeByCity(studList, city, newGrades) {
  const ngrade = { grade: 'N/A' };

  return studList
    .filter((value) => value.location === city)
    .map((value) => ({
      id: value.id,
      firstName: value.firstName,
      location: value.location,
      grade: (newGrades
        .filter((grade) => grade.studentId === value.id)
        .pop() || ngrade).grade,
    }));
}
