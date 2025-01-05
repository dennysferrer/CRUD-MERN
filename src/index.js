import app from './app.js';
import { connectDB } from './db.js';

const port = process.env.PORT || 3000;

// Connect to the database
connectDB();

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})