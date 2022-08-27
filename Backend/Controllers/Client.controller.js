const express = require("express");
const ClientController = express.Router();

const ClientModel = require("../Models/Client.model");
const Clientlogger = require("../Middlewares/Clientlogger");

ClientController.post("/", Clientlogger, async (req, res) => {
  const { clientusername, clientfullname, clientemail, tags, userId } =
    req.body;

  const client = new ClientModel({
    clientusername,
    clientfullname,
    clientemail,
    tags,
    userId,
  });
  await client.save();
  return res
    .status(200)
    .send({ message: "Client added successfully", client: client });
});

ClientController.get("/", async (req, res) => {
  const { userId } = req.body;
  const client = await ClientModel.find({ userId });
  return res.status(200).send(client);
});

ClientController.patch("/:id", async (req, res) => {
  const { id } = req.params;
  const { userId } = req.body;
  const client = await ClientModel.findOne({ _id: id });

  if (client.userId === userId) {
    const updated_client = await ClientModel.findOneAndUpdate(
      { _id: id },
      req.body,
      { new: true }
    );
    return res.status(200).send({
      message: "Client Detail Updated Successfully",
      client: updated_client,
    });
  } else {
    return res.status(404).send("Client Not Found");
  }
});

ClientController.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const { userId } = req.body;

  const client = await ClientModel.findOne({ _id: id });
  if (!client) {
    return res.status(404).send("Client Not Found");
  }
  if (client.userId === userId) {
    const deleted_client = await ClientModel.findOneAndDelete(
      { _id: id },
      { new: true }
    );
    return res.status(200).send({
      message: "Client Detail Deleted Successfully",
      client: deleted_client,
    });
  } else {
    return res.status(404).send("Client Not Found");
  }
});

module.exports = ClientController;
