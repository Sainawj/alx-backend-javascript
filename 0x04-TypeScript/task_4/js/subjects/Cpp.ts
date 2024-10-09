namespace Subjects {
    // Define the Teacher interface with optional experienceTeachingC property
    export interface Teacher {
      firstName: string;
      experienceTeachingC?: number;
    }
    
    // Cpp class extending Subject
    export class Cpp extends Subject {
      getRequirements(): string {
        return 'Here is the list of requirements for Cpp';
      }
  
      getAvailableTeacher(): string {
        // Check if a teacher is assigned and has teaching experience
        if (!this.teacher || (this.teacher.experienceTeachingC ?? 0) <= 0) {
          return 'No available teacher';
        }
        return `Available Teacher: ${this.teacher.firstName}`;
      }
    }
  }