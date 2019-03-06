const formidable = require('formidable');

function formParse(req, incomingForm = new formidable.IncomingForm()) {
  return new Promise((res, rej) => {
    incomingForm.parse(req, function(err, fields, files) {
      if (err) {
        rej(err);
      } else {
        res({ fields, files });
      }
    });
  });
}

module.exports.formParse = formParse;
