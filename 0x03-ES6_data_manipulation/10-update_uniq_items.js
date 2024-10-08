const updateUniqueItems = (items) => {
  // Check if the input is a Map
  if (!(items instanceof Map)) {
    throw new Error("Cannot process");
  }

  // Iterate over the entries in the Map
  for (const [key, value] of items.entries()) {
    // If the quantity is 1, update it to 100
    if (value === 1) {
      items.set(key, 100);
    }
  }

  // Return the updated Map
  return items;
};

export default updateUniqueItems;
