const mongoose = require('mongoose');

const Connection = async () => {
  MONGO_URI = "mongodb+srv://@cluster0.jm69tpb.mongodb.net/Inshorter?retryWrites=true&w=majority";
  await mongoose.connect(MONGO_URI, { useNewUrlParser: true });
};

module.exports = Connection; // Corrected "exports" typo here
