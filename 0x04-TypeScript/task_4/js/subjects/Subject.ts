namespace Subjects {
    // Class representing a Subject
    export class Subject {
      // Property to hold the Teacher assigned to the Subject
      teacher: Subjects.Teacher;
  
      // Setter method to assign a Teacher to the Subject
      set setTeacher(teacher: Subjects.Teacher) {
        this.teacher = teacher; // Assign the incoming teacher to the teacher property
      }
    }
  }
  