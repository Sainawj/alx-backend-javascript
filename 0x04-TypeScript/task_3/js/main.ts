/// <reference path="./crud.d.ts" />
import { RowID, RowElement } from './interface';  // Ensure this file correctly exports RowID and RowElement
import * as CRUD from './crud';  // Import CRUD functions

// Create a new row element
const row: RowElement = {
    firstName: 'Jameson',
    lastName: 'Quiver',
};

// Insert the row and get a new row ID
const newRowID: RowID = CRUD.insertRow(row);

// Create an updated row element
const updatedRow: RowElement = { ...row, age: 23 };

// Update the row
CRUD.updateRow(newRowID, updatedRow);

// Delete the row
CRUD.deleteRow(newRowID);

