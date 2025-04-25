const mongoose = require('mongoose');

        const agentSchema = new mongoose.Schema({
          name: {
            type: String,
            required: true,
          },
          description: String,
          // Add more fields as needed, e.g., configuration, connected APIs
        });

        const Agent = mongoose.model('Agent', agentSchema);

        module.exports = Agent;
