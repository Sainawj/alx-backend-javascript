/**
 * Generates a map with grocery items as keys and their corresponding quantities as values.
 * @returns {Map<string, number>} - A map containing grocery items and their respective quantities.
 */
export default function getGroceryList() {
    const groceryItems = [
      ['Apples', 10],
      ['Tomatoes', 10],
      ['Pasta', 1],
      ['Rice', 1],
      ['Bananas', 5],
    ];
    return new Map(groceryItems);
  }
  