export default function createReportObject(employeesList) {
  return {
    allEmployees: {
      ...employeesList,  // spread syntax to include all departments and employees
    },
    getNumberOfDepartments() {
      return Object.keys(this.allEmployees).length; //  number of keys in allEmployees
    },
  };
}
