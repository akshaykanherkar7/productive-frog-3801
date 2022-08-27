const express = require("express");
const InvoiceController = express.Router();

const InvoiceModel = require("../Models/Invoice.model");

InvoiceController.post("/", async (req, res) => {
  const { issuedon, duedate, project, client, total, paid, userId } = req.body;

  const invoice = new InvoiceModel({
    issuedon,
    duedate,
    project,
    client,
    total,
    paid,
    userId,
  });
  await invoice.save();
  return res
    .status(200)
    .send({ message: "Invoice created successfully", invoice: invoice });
});

InvoiceController.get("/", async (req, res) => {
  const { userId } = req.body;
  const invoices = await InvoiceModel.find({ userId });
  if (!invoices) {
    return res.status(404).send({ message: "Invoices not found" });
  }
  return res.status(200).send(invoices);
});

InvoiceController.patch("/:id", async (req, res) => {
  const { id } = req.params;
  const { userId } = req.body;
  const invoice = await InvoiceModel.findOne({ _id: id });

  if (!invoice) {
    return res.status(404).send({ message: "Invoice not found" });
  }
  if (invoice.userId === userId) {
    const updated_invoice = await InvoiceModel.findOneAndUpdate(
      { _id: id },
      req.body,
      { new: true }
    );
    return res.status(200).send({
      message: "Invoice updated successfully",
      updated_invoice: updated_invoice,
    });
  } else {
    return res
      .status(401)
      .send({ message: "You are not authorized to update an invoice." });
  }
});

InvoiceController.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const { userId } = req.body;

  const invoice = await InvoiceModel.findOne({ _id: id });

  if (!invoice) {
    return res.status(401).send("Invoice not found");
  }
  if (invoice.userId === userId) {
    const deleted_invoice = await InvoiceModel.findOneAndDelete(
      { _id: id },
      { new: true }
    );
    return res.status(200).send({
      message: "invoice deleted successfully",
      deleted_invoice: deleted_invoice,
    });
  } else {
    return res
      .status(401)
      .send({ message: "You are not authorized to update an invoice." });
  }
});

module.exports = InvoiceController;
