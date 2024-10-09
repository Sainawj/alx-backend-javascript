// src/main.ts

// Define the interface for a Student
export interface StudentInfo {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two student objects
const studentOne: StudentInfo = {
  firstName: "Liam",
  lastName: "Smith",
  age: 20,
  location: "Toronto, Canada",
};

const studentTwo: StudentInfo = {
  firstName: "Emma",
  lastName: "Johnson",
  age: 21,
  location: "Berlin, Germany",
};

// Create an array to hold the student objects
const studentList: Array<StudentInfo> = [studentOne, studentTwo];

// Define CSS styles for the table
const tableStyles = `
  html {
    margin: 0;
    height: 100%;
  }
  body {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80%;
    margin: 10%;
  }
  table {
    border-collapse: collapse;
  }
  th {
    font-weight: bold;
  }
  td {
    padding: 10px;
    border: 1px solid #ccc;
  }
  td:hover {
    background-color: #f0f0f0;
  }
  td:nth-child(1) {
    text-align: center;
  }
`;

/**
 * Renders a table displaying the students' first names and locations.
 * @param students The list of students to display.
 */
export const renderStudentTable = (students: Array<StudentInfo>): void => {
  const table = document.createElement('table');
  const tableHeader = document.createElement('thead');
  const headerRow = document.createElement('tr');

  // Create table headers
  headerRow.insertAdjacentHTML('beforeend', '<th>First Name</th>');
  headerRow.insertAdjacentHTML('beforeend', '<th>Location</th>');
  tableHeader.appendChild(headerRow);

  // Fill the table with student data
  const tableBody = document.createElement('tbody');
  for (const student of students) {
    const row = document.createElement('tr');
    row.insertAdjacentHTML('beforeend', `<td>${student.firstName}</td>`);
    row.insertAdjacentHTML('beforeend', `<td>${student.location}</td>`);
    tableBody.appendChild(row);
  }

  // Assemble the complete table
  table.appendChild(tableHeader);
  table.appendChild(tableBody);
  document.body.appendChild(table);
};

// Call the function to render the table
renderStudentTable(studentList);

// Add styles to the document
const styleElement = document.createElement('style');
styleElement.innerHTML = tableStyles;
document.head.appendChild(styleElement);
document.title = 'Student Directory';
