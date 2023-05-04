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
    const customerName = req.body.customerName;
    const credit = req.body.credit;
    const updatedDate = req.body.updatedDate;
    const credits = await Credit.create({ customerName, credit, updatedDate });
    res.status(200).send(credits);
  } catch (err) {
    res.status(500).send(err);
  }
};

const updateCredit = async (req, res) => {
  try {
    const customerName = req.params.customerName;
    const credit = req.body.credit;
    const updatedDate = req.body.updatedDate;
    const credits = await Credit.findOneAndUpdate(
      { customerName: customerName },
      { credit: credit, updatedDate: updatedDate },
      { new: true },
    );
    res.status(200).send(credits);
  } catch (err) {
    res.status(500).send(err);
  }
};

const deleteOneCredit = async (req, res) => {
  try {
    const customerName = req.params.customerName;
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

module.exports = { showAllCredits, addCredit, updateCredit, deleteOneCredit, deleteAllCredits };
