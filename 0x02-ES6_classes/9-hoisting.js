// Represents a class at Holberton School
export class HolbertonClass {
    /**
     * Initializes a new instance of HolbertonClass.
     * 
     * @param {number} year - The year of the class.
     * @param {string} location - The location of the class.
     */
    constructor(year, location) {
      this._year = year; // Stores the year of the class.
      this._location = location; // Stores the location of the class.
    }
  
    /**
     * Retrieves the year of the class.
     * 
     * @returns {number} - The year of the class.
     */
    get year() {
      return this._year;
    }
  
    /**
     * Retrieves the location of the class.
     * 
     * @returns {string} - The location of the class.
     */
    get location() {
      return this._location;
    }
  }
  
  // Represents a student in Holberton School
  export class StudentHolberton {
    /**
     * Initializes a new instance of StudentHolberton.
     * 
     * @param {string} firstName - The first name of the student.
     * @param {string} lastName - The last name of the student.
     * @param {HolbertonClass} holbertonClass - The class the student belongs to.
     */
    constructor(firstName, lastName, holbertonClass) {
      this._firstName = firstName; // Stores the student's first name.
      this._lastName = lastName; // Stores the student's last name.
      this._holbertonClass = holbertonClass; // Stores the class the student belongs to.
    }
  
    /**
     * Returns the full name of the student.
     * 
     * @returns {string} - The student's full name.
     */
    get fullName() {
      return `${this._firstName} ${this._lastName}`;
    }
  
    /**
     * Retrieves the class the student belongs to.
     * 
     * @returns {HolbertonClass} - The class of the student.
     */
    get holbertonClass() {
      return this._holbertonClass;
    }
  
    /**
     * Returns a detailed description of the student, including the class year and location.
     * 
     * @returns {string} - The student's full name, class year, and class location.
     */
    get fullStudentDescription() {
      return `${this._firstName} ${this._lastName} - \
  ${this._holbertonClass.year} - ${this._holbertonClass.location}`;
    }
  }
  
  // Creating instances of HolbertonClass for 2019 and 2020
  const class2019 = new HolbertonClass(2019, 'San Francisco');
  const class2020 = new HolbertonClass(2020, 'San Francisco');
  
  // Creating instances of StudentHolberton
  const student1 = new StudentHolberton('Guillaume', 'Salva', class2020);
  const student2 = new StudentHolberton('John', 'Doe', class2020);
  const student3 = new StudentHolberton('Albert', 'Clinton', class2019);
  const student4 = new StudentHolberton('Donald', 'Bush', class2019);
  const student5 = new StudentHolberton('Jason', 'Sandler', class2019);
  
  // Exporting an array of all students
  const listOfStudents = [student1, student2, student3, student4, student5];
  
  export default listOfStudents;
  