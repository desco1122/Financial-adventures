const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Replace with your MongoDB connection string
const dbURI = 'mongodb+srv://finadven:9KKZMaEizjdgFoV8@cluster0.fubdjxk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

// Define Routes
app.use('/api/auth', require('./routes/auth'));

app.get('/', (req, res) => {
    res.send('Hello from the backend!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));