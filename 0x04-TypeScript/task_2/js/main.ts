// Interface defining the Director's tasks
export interface DirectorInterface {
  workFromHome(): string;      // Method to indicate if the Director works from home
  getCoffeeBreak(): string;    // Method to indicate coffee break availability
  workDirectorTasks(): string; // Method for handling Director-specific tasks
}

// Interface defining the Teacher's tasks
export interface TeacherInterface {
  workFromHome(): string;      // Method to indicate if the Teacher works from home
  getCoffeeBreak(): string;    // Method to indicate coffee break availability
  workTeacherTasks(): string;  // Method for handling Teacher-specific tasks
}

// Class implementing DirectorInterface, defining behaviors for a Director
export class Director implements DirectorInterface {
  workFromHome() {
    return 'Working from home';  // Directors can work from home
  }

  getCoffeeBreak() {
    return 'Getting a coffee break';  // Directors can take coffee breaks
  }

  workDirectorTasks() {
    return 'Getting to director tasks';  // Task for Directors
  }
}

// Class implementing TeacherInterface, defining behaviors for a Teacher
export class Teacher implements TeacherInterface {
  workFromHome() {
    return 'Cannot work from home';  // Teachers are not allowed to work from home
  }

  getCoffeeBreak() {
    return 'Cannot have a break';  // Teachers cannot take breaks
  }

  workTeacherTasks() {
    return 'Getting to work';  // Task for Teachers
  }
}

// Function to create an employee based on salary
// Returns a Teacher if salary is below 500, otherwise returns a Director
export function createEmployee(salary: (number | string)): (Director | Teacher) {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();  // If salary < 500, return a Teacher
  }
  return new Director();    // Otherwise, return a Director
}

// Function to check if an employee is a Director
export function isDirector(employee: (Director | Teacher)): boolean {
  return employee instanceof Director;  // Returns true if employee is a Director
}

// Function to execute the tasks of the employee based on their role
export function executeWork(employee: (Director | Teacher)): string {
  if (isDirector(employee)) {
    return (employee as Director).workDirectorTasks();  // Execute Director tasks
  }
  return (employee as Teacher).workTeacherTasks();      // Execute Teacher tasks
}

// Define a type for subjects that can only be 'Math' or 'History'
export type Subjects = ('Math' | 'History');

// Function to indicate what class is being taught based on the subject
export function teachClass(todayClass: Subjects): string {
  if (todayClass === 'Math') {
    return 'Teaching Math';  // Return statement for Math class
  }
  if (todayClass === 'History') {
    return 'Teaching History';  // Return statement for History class
  }
}
