// Create instances of different Subject classes
export const cpp: Subjects.Cpp = new Subjects.Cpp(); // Instance for C++ subject
export const java: Subjects.Java = new Subjects.Java(); // Instance for Java subject
export const react: Subjects.React = new Subjects.React(); // Instance for React subject

// Create a Teacher object for C
export const cTeacher: Subjects.Teacher = {
  firstName: 'Dennis', // Teacher's first name
  lastName: 'Ritchie', // Teacher's last name
  experienceTeachingC: 10, // Years of experience teaching C
};

// C++ subject operations
console.log('C++'); // Log the subject name
cpp.setTeacher = cTeacher; // Assign the C teacher to the C++ subject
console.log(cpp.getRequirements()); // Get and log the requirements for the C++ subject
console.log(cpp.getAvailableTeacher()); // Get and log the available teacher for the C++ subject

// Java subject operations
console.log('Java'); // Log the subject name
java.setTeacher = cTeacher; // Assign the C teacher to the Java subject
console.log(java.getRequirements()); // Get and log the requirements for the Java subject
console.log(java.getAvailableTeacher()); // Get and log the available teacher for the Java subject

// React subject operations
console.log('React'); // Log the subject name
react.setTeacher = cTeacher; // Assign the C teacher to the React subject
console.log(react.getRequirements()); // Get and log the requirements for the React subject
console.log(react.getAvailableTeacher()); // Get and log the available teacher for the React subject
