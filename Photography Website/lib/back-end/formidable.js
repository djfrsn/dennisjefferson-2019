const formidable = require('formidable');

function formParse(req, incomingForm = new formidable.IncomingForm()) {
  return new Promise((res, rej) => {
    incomingForm.parse(req, function(err, fields, files) {
      if (err) {
        rej(err);
      } else {
        res({ fields, files: Object.keys(files).map(key => files[key]) });
      }
    });
  });
}

module.exports.formParse = formParse;
