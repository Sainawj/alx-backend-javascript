/**
 * Modifies the grades for students in a specified city.
 * @param {Array<Object>} students - An array of student objects, each with properties 'id', 'firstName', and 'location'.
 * @param {String} city - The city where the students are located.
 * @param {Array<Object>} newGrades - An array of grade objects with 'studentId' and 'grade' properties.
 * @returns {Array<Object>} - A list of updated student objects with their respective grades.
 */
export default function modifyGradesForCity(students, city, newGrades) {
    const noGradeAvailable = { grade: 'N/A' };
  
    if (Array.isArray(students)) {
      return students
        .filter(student => student.location === city)
        .map(student => {
          const studentGrade = newGrades.find(grade => grade.studentId === student.id) || noGradeAvailable;
          return {
            id: student.id,
            firstName: student.firstName,
            location: student.location,
            grade: studentGrade.grade,
          };
        });
    }
    return [];
  }
  