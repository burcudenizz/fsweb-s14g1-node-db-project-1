const router = require('express').Router()
const middleware = require("./accounts-middleware")
const accountsModel= require("./accounts-model");
router.get('/', (req, res, next) => {
  // KODLAR BURAYA

try{
const allAccounts = accountsModel.getAll();
res.json(allAccounts);
}catch(error){
  next(error);
}

})

router.get('/:id', (req, res, next) => {
  // KODLAR BURAYA
})

router.post('/', (req, res, next) => {
  // KODLAR BURAYA
})

router.put('/:id', (req, res, next) => {
  // KODLAR BURAYA
});

router.delete('/:id', (req, res, next) => {
  // KODLAR BURAYA
})

router.use((err, req, res, next) => { // eslint-disable-line
  // KODLAR BURAYA
res.status(err.status || 500).json({customMessage:"Global handler tarafında hata alındı."})
})

module.exports = router;
