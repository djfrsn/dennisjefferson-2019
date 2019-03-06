const AWS = require('aws-sdk');
// const fs = require('fs');
// const path = require('path');

//configuring the AWS environment
AWS.config.update({
  accessKeyId: process.env.S3_ACCESS_KEY,
  secretAccessKey: process.env.S3_SECRET
});

var s3 = new AWS.S3();

async function getPhotos() {
  return [
    {
      src:
        'https://scontent-lax3-1.cdninstagram.com/vp/2703c9e5e441d2c8dd2370f5e5cdf5b4/5D1E6EC4/t51.2885-15/e35/53699539_156053975395117_5335796242065307045_n.jpg?_nc_ht=scontent-lax3-1.cdninstagram.com'
    }
  ];
}
async function uploadPhotos(req, res) {
  console.log('upload s3', s3);
  console.log('req', req.body);

  res.send('ok!');
  return [
    {
      src:
        'https://scontent-lax3-1.cdninstagram.com/vp/2703c9e5e441d2c8dd2370f5e5cdf5b4/5D1E6EC4/t51.2885-15/e35/53699539_156053975395117_5335796242065307045_n.jpg?_nc_ht=scontent-lax3-1.cdninstagram.com'
    }
  ];
}

module.exports.uploadPhotos = uploadPhotos;
module.exports.getPhotos = getPhotos;
