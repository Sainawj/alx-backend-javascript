/**
 * Returns an array of student objects with their IDs, names, and locations.
 * @returns {Array<{id: number, firstName: string, location: string}>} - An array of student details.
 */
export default function fetchStudentList() {
    return [
      { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
      { id: 2, firstName: 'James', location: 'Columbia' },
      { id: 5, firstName: 'Serena', location: 'San Francisco' },
    ];
  }
  