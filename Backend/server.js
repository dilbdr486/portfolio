const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/api/save-to-excel', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // Process form data (e.g., log it or send it to another service)
    console.log('Form Data:', { name, email, message });

    res.status(200).send({ message: 'Form data received successfully!' });
  } catch (error) {
    console.error('Error processing form data:', error);
    res.status(500).send({ message: 'Failed to process form data.' });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
