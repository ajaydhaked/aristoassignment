const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();


const app = express();

app.use(cors({
  origin: '*',  // Allow requests from any origin
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', require('./routes/data'));
app.use('/', require('./routes/savedPages'));
app.get('/', (req, res) => {
  res.send('Backend is Live!!!');
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;