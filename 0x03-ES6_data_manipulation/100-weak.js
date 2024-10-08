/**
 * A WeakMap to keep track of API endpoints and their respective call counts.
 */
export const endpointCallTracker = new WeakMap();

/**
 * The maximum allowed number of calls to an API endpoint.
 */
const MAX_CALLS = 5;

/**
 * Monitors the number of requests made to a specific API endpoint.
 * @param {Object} endpoint - The API endpoint to track.
 * @param {String} endpoint.protocol - The protocol used by the endpoint (e.g., 'http').
 * @param {String} endpoint.name - The name or address of the API endpoint.
 * @throws {Error} - Throws an error if the number of calls exceeds the allowed limit.
 */
export function monitorAPICalls(endpoint) {
  if (!endpointCallTracker.has(endpoint)) {
    endpointCallTracker.set(endpoint, 0);
  }
  
  const callCount = endpointCallTracker.get(endpoint) + 1;
  endpointCallTracker.set(endpoint, callCount);
  
  if (callCount >= MAX_CALLS) {
    throw new Error('Endpoint load is high');
  }
}
