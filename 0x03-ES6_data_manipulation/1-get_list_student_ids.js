/**
 * Extracts and returns the IDs from a list of student objects.
 * @param {Array<{id: number, firstName: string, location: string}>} students - An array of student objects.
 * @returns {number[]} - An array of student IDs or an empty array if input is invalid.
 */
export default function extractStudentIds(students) {
    if (Array.isArray(students)) {
      return students.map(student => student.id);
    }
    return [];
  }
  