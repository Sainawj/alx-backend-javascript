namespace Subjects {
    // Define the Teacher interface with optional experienceTeachingJava property
    export interface Teacher {
      firstName: string; // Required property
      experienceTeachingJava?: number; // Optional property
    }
  
    // Java class extending Subject
    export class Java extends Subject {
      // Method to get the requirements for the Java course
      getRequirements(): string {
        return 'Here is the list of requirements for Java';
      }
  
      // Method to get the available teacher
      getAvailableTeacher(): string {
        // Check if a teacher is assigned and has teaching experience
        if (!this.teacher || (this.teacher.experienceTeachingJava ?? 0) <= 0) {
          return 'No available teacher';
        }
        return `Available Teacher: ${this.teacher.firstName}`;
      }
    }
  }