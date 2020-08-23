const Ajv = require('ajv');
var Schema = require('./schema');

var ajv = new Ajv({
  allErrors: true,
  removeAdditional: true
});

let checkValidation = (req,res,next)=>{
    var { url } = req;
    var n = url.indexOf('?');
    url = url.substring(0, n != -1 ? n : url.length);
    url = (url.substring(1)).toLowerCase();
    let reqData = {...req.body , ...req.params , ...req.query};
    var validate = ajv.compile(Schema[url]);
    var valid = validate(reqData);
    if (!valid) return res.send(validate.errors);
    next();
}

module.exports = {
  checkValidation
}