const mongoose = require("mongoose");

const invoiceSchema = mongoose.Schema({
  issuedon: { type: String, required: true },
  duedate: { type: String, required: true },
  project: { type: String, required: true },
  client: { type: String, required: true },
  total: { type: Number, required: true },
  paid: { type: Number, required: true },
  userId: { type: String, required: true },
});

const InvoiceModel = mongoose.model("invoice", invoiceSchema);

module.exports = InvoiceModel;
