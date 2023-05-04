const Credit = require("../database-mongo/credit.model.js");

const showAllCredits = async (req, res) => {
  try {
    const credits = await Credit.find();
    res.status(200).send(credits);
  } catch (err) {
    res.status(500).send(err);
  }
};

const addCredit = async (req, res) => {
  try {
    const customerName = req.body.customerName.trim();
    const credit = req.body.credit.trim();
    const updatedDate = req.body.updatedDate;
    const credits = await Credit.create({ customerName, credit, updatedDate });
    res.status(200).send(credits);
  } catch (err) {
    res.status(500).send(err);
  }
};

const updateCredit = async (req, res) => {
  try {
    const customerName = req.params.customerName.trim();
    const credit = req.body.credit.trim();
    const updatedDate = Date.now();
    const credits = await Credit.updateOne(
      { customerName: customerName },
      { $set: { credit: credit, updatedDate: updatedDate } },
      { new: true },
    );
    const newCred = await Credit.find({ customerName: customerName });
    res.status(200).send(credits);
  } catch (err) {
    res.status(500).send(err);
  }
};

const deleteOneCredit = async (req, res) => {
  try {
    const customerName = req.params.customerName.trim();
    if (customerName) {
      const credits = await Credit.deleteOne({ customerName: customerName });
      res.status(200).send(credits);
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

const deleteAllCredits = async (req, res) => {
  try {
    const credits = await Credit.deleteMany();
    res.status(200).send(credits);
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = {
  showAllCredits,
  addCredit,
  updateCredit,
  deleteOneCredit,
  deleteAllCredits,
};
