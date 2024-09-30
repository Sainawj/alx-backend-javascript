export default function createIteratorObject(report) {
  const employees = report.allEmployees; 
  const employeeList = []; 

  for (const department in employees) {
    if (employees.hasOwnProperty(department)) {
      employeeList.push(...employees[department]); 
    }
  }

  return employeeList[Symbol.iterator]();
}
