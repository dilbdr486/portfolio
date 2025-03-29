import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors({
  origin: process.env.VERCEL_URL || 'http://localhost:3000', // Allow Vercel URL or localhost
}));
app.use(express.json()); // Replaces body-parser

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Define Mongoose schema and model
const FormDataSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
}, { timestamps: true });

const FormData = mongoose.model('FormData', FormDataSchema);

app.post('/api/save-to-excel', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // Save form data to MongoDB
    const formData = new FormData({ name, email, message });
    await formData.save();

    res.status(200).send({ message: 'Form data saved successfully!' });
  } catch (error) {
    console.error('Error saving form data:', error);
    res.status(500).send({ message: 'Failed to save form data.' });
  }
});

app.get('/', (req, res) => {
  res.send('Server is running and deployed on Vercel!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
