const router = require("express").Router();
const middleware = require("./accounts-middleware");
const accountsModel = require("./accounts-model");
router.get("/", async (req, res, next) => {
  // KODLAR BURAYA
  try {
    const allAccounts = await accountsModel.getAll();
    res.json(allAccounts);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", middleware.checkAccountId, (req, res, next) => {
  // KODLAR BURAYA

  try {
    res.json(req.existAccount);
  } catch (error) {
    next(error);
  }
});

router.post(
  "/",
  middleware.checkAccountPayload,
  middleware.checkAccountNameUnique,
  async (req, res, next) => {
    // KODLAR BURAYA
    try {
      const insertedAccount = await accountsModel.create({
        name: req.body.name,
        budget: req.body.budget,
      });
      res.status(201).json(insertedAccount);
    } catch (error) {
      next(error);
    }
  }
);

router.put(
  "/:id",
  middleware.checkAccountId,
  middleware.checkAccountPayload,
  middleware.checkAccountNameUnique,
  async (req, res, next) => {
    // KODLAR BURAYA
    try {
      const updateAccount = await accountsModel.updateById(req.params.id, {
        name: req.body.name,
        budget: req.body.budget,
      });
      res.json(updateAccount);
    } catch (error) {
      next(error);
    }
  }
);

router.delete("/:id", middleware.checkAccountId, async (req, res, next) => {
  // KODLAR BURAYA

  try {
    await accountsModel.deleteById(req.params.id);
    res.json(req.existAccount); // middleware.checkAccountId burada existAccount değişkeni var. O yüzden bu şekilde yazdık!! Yani değişeni dönüyor.
  } catch (error) {
    next(error);
  }
});

//GLOBAL ERROR HANDLER

router.use((err, req, res, next) => {
  // eslint-disable-line
  // KODLAR BURAYA
  res.status(err.status || 500).json({
    customMessage: "Global handler tarafında hata alındı.",
    message: err.message,
  });
});

module.exports = router;
