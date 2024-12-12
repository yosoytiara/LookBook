const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const dbURI =
  'mongodb+srv://testing456:love45ghdswr@cluster0.dsdvd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB Atlas');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB Atlas:', err);
  });
const app = express();
app.use(cors());
app.use(bodyParser.json());

const UserClosetSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, // This field is mandatory
  },
  category: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const UserCloset = mongoose.model('items', UserClosetSchema);

app.post('/api/form', async (req, res) => {
  try {
    const formData = new UserCloset(req.body);
    await formData.save();
    res.status(200).json({ message: 'Data saved successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Error saving data', error });
  }
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});

const corsOptions = {
  origin: 'http://localhost:3000', // Allow only requests from the React frontend
  methods: 'GET,POST', // You can specify the methods allowed
};

app.use(cors(corsOptions));
// module.exports = UserCloset;
