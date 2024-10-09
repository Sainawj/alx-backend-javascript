// Interface for Teacher, includes basic teacher attributes
export interface Educator {
  readonly firstName: string; // Teacher's first name (read-only)
  readonly lastName: string;  // Teacher's last name (read-only)
  fullTimeEmployee: boolean;  // Indicates if the teacher is full-time
  yearsOfExperience?: number; // Optional property for experience
  location: string;           // Location where the teacher is based
  [key: string]: any;         // Index signature for additional dynamic properties
}

// Directors interface extends Educator, adding numberOfReports
export interface Executive extends Educator {
  numberOfReports: number;    // Number of reports the director oversees
}

// Function interface to format and print a teacher's name
export interface FormatTeacherName {
  (firstName: string, lastName: string): string;
}

// Function to print the formatted name of a teacher
export function formatTeacherName(firstName: string, lastName: string): string {
  // Returns a string in the format "F. LastName"
  return `${firstName[0]}. ${lastName}`;
}

// Interface for a Student class constructor
export interface IStudentClassConstructor {
  new (firstName: string, lastName: string): IStudentClass; // Constructor signature
}

// Interface for Student class, defining methods
export interface IStudentClass {
  workOnHomework(): string;  // Method to indicate homework status
  displayName(): string;     // Method to display student's first name
}

// Implementation of the Student class
export class Student implements IStudentClass {
  private _firstName: string; // Student's first name, private member
  private _lastName: string;  // Student's last name, private member

  // Constructor to initialize student properties
  constructor(firstName: string, lastName: string) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  // Method indicating that the student is working on homework
  workOnHomework() {
    return 'Currently working'; // Return status message
  }

  // Method to display the student's first name
  displayName() {
    return this._firstName; // Return the student's first name
  }
}

// Function to create a new Student instance using the constructor
export function instantiateStudent(
  ctor: IStudentClassConstructor,
  firstName: string,
  lastName: string
): IStudentClass {
  // Instantiate and return a new student object
  return new ctor(firstName, lastName);
}
