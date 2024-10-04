export default function createReportObject(employeesList) {
  return {
    allEmployees: {
      ...employeesList,
    },
    getNumberOfDepartments(allEmployeesObj) {
      return Object.keys(allEmployeesObj).length;
    },
  };
}
