const Agent = require('../models/Agent');
const OpenAI = require('openai');
const { generateAudio } = require('../tts/tts');
const { recognizeAudio } = require('../stt/stt');

const apiKey = process.env.OPENAI_API_KEY; // Get the API key from the environment variable

const openai = new OpenAI({
  apiKey, // Use the apiKey variable
});

const createAgent = async (req, res) => {
  try {
    const { name, description } = req.body;
    const agent = new Agent({ name, description });
    await agent.save();
    res.status(201).json(agent);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getAgents = async (req, res) => {
  try {
    const agents = await Agent.find();
    res.json(agents);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getAgent = async (req, res) => {
  try {
    const agent = await Agent.findById(req.params.id);
    if (!agent) {
      return res.status(404).json({ message: 'Agent not found' });
    }
    res.json(agent);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateAgent = async (req, res) => {
  try {
    const { name, description } = req.body;
    const agent = await Agent.findByIdAndUpdate(
      req.params.id,
      { name, description },
      { new: true }
    );
    if (!agent) {
      return res.status(404).json({ message: 'Agent not found' });
    }
    res.json(agent);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const testAgent = async (req, res) => {
  const { message } = req.body;

  try {
    const completion = await openai.chat.completions.create({
      messages: [{ role: 'user', content: message }],
      model: 'gpt-3.5-turbo',
    });

    res.json(completion.choices[0].message);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};

const deleteAgent = async (req, res) => {
  try {
    const agent = await Agent.findByIdAndDelete(req.params.id);
    if (!agent) {
      return res.status(404).json({ message: 'Agent not found' });
    }
    res.json({ message: 'Agent deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const generateVoice = async (text) => {
  console.log('Generating voice for:', text);
  return generateAudio(text);
};

const recognizeVoice = async (audio) => {
  console.log('Recognizing audio:', audio);
  return recognizeAudio(audio);
};

const useAgent = async (req, res) => {
  try {
    const audio = req.body.audio;
    const text = await recognizeVoice(audio);

    const completion = await openai.chat.completions.create({
      messages: [{ role: 'user', content: text }],
      model: 'gpt-3.5-turbo',
    });
    const response = completion.choices[0].message.content;

    const responseAudio = await generateVoice(response);
    res.json({ audio: responseAudio });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createAgent,
  getAgents,
  getAgent,
  updateAgent,
  deleteAgent,
  testAgent,
  useAgent,
};