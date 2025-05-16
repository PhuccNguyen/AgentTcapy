const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Mount routes
const mainRoutes = require('./routes/index.route');
app.use('/api', mainRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Backend is running at http://localhost:${PORT}`);
});
