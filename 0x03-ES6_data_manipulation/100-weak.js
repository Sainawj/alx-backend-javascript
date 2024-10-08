// Create an instance of WeakMap
export const weakMap = new WeakMap();

export const queryAPI = (endpoint) => {
  // Check if the endpoint is already in the WeakMap
  if (!weakMap.has(endpoint)) {
    // Initialize the count to 0 if not already present
    weakMap.set(endpoint, 0);
  }

  // Get the current count for the endpoint
  const currentCount = weakMap.get(endpoint);
  
  // Increment the count
  weakMap.set(endpoint, currentCount + 1);

  // Check if the count is >= 5
  if (currentCount + 1 >= 5) {
    throw new Error('Endpoint load is high');
  }
};

