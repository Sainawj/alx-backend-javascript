namespace Subjects {
    // Define the Teacher interface with an optional experienceTeachingReact property
    export interface Teacher {
      firstName: string; // Required property
      experienceTeachingReact?: number; // Optional property
    }
  
     // React class extending Subject
    export class React extends Subject {
      // Method to get the requirements for the React course
      getRequirements(): string {
        return 'Here is the list of requirements for React';
      }
  
      // Method to get the available teacher
      getAvailableTeacher(): string {
        // Check if a teacher is assigned and has teaching experience
        if (!this.teacher || (this.teacher.experienceTeachingReact ?? 0) <= 0) {
          return 'No available teacher';
        }
        return `Available Teacher: ${this.teacher.firstName}`;
      }
    }
  }