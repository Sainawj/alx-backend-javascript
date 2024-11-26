// Importing express and route handler module
import express from 'express';
import mapRoutes from './routes';

// Initialize the app
const app = express();
// Define the port for the server
const PORT = 1245;

// Set up the routes using the imported mapRoutes function
mapRoutes(app);

// Start the server and listen on the defined port
app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});

// Export the app using ES modules syntax
export default app;
