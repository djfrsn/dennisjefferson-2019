const Promise = require('bluebird');
const fs = require('fs');

function uploadFiles({ AWS, Bucket, files }) {
  const response = [];

  var s3 = new AWS.S3({
    Bucket: 'dmj-photos-optimized'
  });

  return files.map(item => {
    return new Promise((res, rej) => {
      var params = {
        Bucket,
        Key: item.name,
        Body: fs.readFileSync(item.path),
        ACL: 'public-read'
      };
      // console.log('params', params);
      // console.log('item', item);
      // res('ok');

      // TODO: write IAM policy for data access https://aws.amazon.com/blogs/security/writing-iam-policies-how-to-grant-access-to-an-amazon-s3-bucket/
      s3.upload(params, function(err, data) {
        if (err) {
          res({ error: true, Message: err });
        } else {
          response.push(data);
          if (response.length == files.length) {
            res({
              error: false,
              Message: 'File Uploaded Successfully',
              Data: response
            });
          }
        }
      });
    });
  });
}

module.exports.uploadFiles = uploadFiles;
