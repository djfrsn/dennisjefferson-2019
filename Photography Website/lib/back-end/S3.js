var Promise = require('bluebird');

function uploadFiles({ Bucket, files }) {
  const response = [];

  return files.map(item => {
    return new Promise((res, rej) => {
      var params = {
        Bucket,
        Key: item.originalname,
        Body: item.buffer,
        ACL: 'public-read'
      };
      res('ok');
      // s3bucket.upload(params, function(err, data) {
      //   if (err) {
      //     res({ error: true, Message: err });
      //   } else {
      //     response.push(data);
      //     if (response.length == files.length) {
      //       res({
      //         error: false,
      //         Message: 'File Uploaded Successfully',
      //         Data: response
      //       });
      //     }
      //   }
      // });
    });
  });
}

module.exports.uploadFiles = uploadFiles;
