const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema({
  clientusername: { type: String, required: true },
  clientfullname: { type: String, required: true },
  clientemail: { type: String, required: true },
  tags: { type: String, required: true },
  userId: { type: String, required: true },
});

const ClientModel = mongoose.model("client", clientSchema);

module.exports = ClientModel;
