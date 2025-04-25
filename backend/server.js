const path = require('path'); // Add this line
const dotenv = require('dotenv'); // this line must be before any other require
dotenv.config({ path: path.resolve(__dirname, '.env') }); // this line must be before any other require
const express = require('express');
const mongoose = require('mongoose');
const agentRoutes = require('./routes/agents');
const twilio = require('twilio');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

// New root route handler (correct placement)
app.get('/', (req, res) => {
  res.send('Server is working!');
});

app.use('/api/agents', agentRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

  app.post('/twilio-webhook', (req, res) => {
    try{
      const twiml = new twilio.twiml.VoiceResponse();
      twiml.say('Hello from AI agent');
      twiml.hangup();
      res.type('text/xml');
      res.send(twiml.toString());
    }
    catch(err){
      console.error(err);
      res.status(500).send('Error');
    }
  });  

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});