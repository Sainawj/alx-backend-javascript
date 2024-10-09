// interface.ts

// Define a type alias for RowID
export type RowID = number;

// Define an interface for RowElement
export interface RowElement {
  firstName: string;
  lastName: string;
  age?: number; // Optional property
  [key: string]: any; // Allows additional properties
}
