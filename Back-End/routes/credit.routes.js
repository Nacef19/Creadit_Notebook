const router = require("express").Router();
const creditController = require("../controllers/credit.controller");

router.get("/", creditController.showAllCredits);
router.post("/add/", creditController.addCredit);
router.put("/update/:customerName/", creditController.updateCredit);
router.delete("/deleteOne/:customerName/", creditController.deleteOneCredit);
router.delete("/deleteAll/", creditController.deleteAllCredits);

module.exports = router;
