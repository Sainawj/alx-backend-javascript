/**
 * Calculates the total sum of student IDs from a given array of student objects.
 * @param {Array<Object>} students - An array of student objects, each with an 'id', 'firstName', and 'location' property.
 * @returns {Number} - The total sum of all student IDs.
 */
export default function calculateTotalStudentIds(students) {
    if (Array.isArray(students)) {
      return students.reduce(
        (total, student) => (typeof total === 'number' ? total : total.id) + student.id,
        0
      );
    }
    return 0;
  }