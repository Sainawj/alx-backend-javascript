// crud.ts

// Define a RowElement interface for the row structure
export interface RowElement {  // Added 'export' keyword here
    firstName: string;
    lastName: string;
    age?: number; // Optional property
}

// Define RowID type as a number
export type RowID = number; // Add this line to define RowID

// Function to simulate inserting a row into a data structure
// Logs the inserted row and returns a random ID for it
export function insertRow(row: RowElement): RowID { // Use RowID as the return type
    console.log('Insert row:', row);
    // Generate and return a random row ID
    return Math.floor(Math.random() * 1000) as RowID; // Cast to RowID
}

// Function to simulate deleting a row by ID
// Logs the row ID being deleted
export function deleteRow(rowId: RowID): void { // Use RowID here
    console.log('Delete row with id:', rowId);
    // No return value needed
}

// Function to simulate updating a row by ID
// Logs the updated row and its ID
export function updateRow(rowId: RowID, row: RowElement): RowID { // Use RowID as the parameter type
    console.log(`Update row with id ${rowId}:`, row);
    // Return the same row ID after updating
    return rowId;
}
