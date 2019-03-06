var Promise = require('bluebird');

function uploadFiles({ Bucket, files }) {
  const response = [];

  return files.map(item => {
    return new Promise((res, rej) => {
      // var params = {
      //   Bucket,
      //   Key: item.name,
      //   Body: fs.readFileSync(item.path),
      //   ACL: 'public-read'
      // };
      // console.log('params', params);

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
