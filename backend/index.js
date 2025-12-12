const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

connectDB().catch(err => { console.error(err); process.exit(1); });

app.use('/api/users', require('./routes/users'));

const PORT = process.env.PORT || 3001;
app.listen(PORT, ()=> console.log('Server running on port', PORT));
