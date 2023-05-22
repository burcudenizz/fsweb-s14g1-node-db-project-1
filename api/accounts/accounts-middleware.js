const accountsModel=require("./accounts-model");
const yup= require("yup");


exports.checkAccountPayload = (req, res, next) => {
  // KODLAR BURAYA
  // Not: Validasyon için Yup(şu an yüklü değil!) kullanabilirsiniz veya kendiniz manuel yazabilirsiniz.



}

exports.checkAccountNameUnique = (req, res, next) => {
  // KODLAR BURAYA
}

exports.checkAccountId = (req, res, next) => {
  // KODLAR BURAYA

try{
const existAccount= accountsModel.getById(req.params.id)
if(!existAccount){
  res.status(404).json({message:"account not found"})
} else {
  req.existAccount = existAccount;
  next();
}



}catch(error){
  next(error);
}

}
