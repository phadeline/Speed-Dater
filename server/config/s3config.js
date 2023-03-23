const AWS = require("aws-sdk");

module.exports = new AWS.S3(
  {
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    },
    region: process.env.AWS_BUCKET_REGION,
    params: {
      // ACL: "public-read",
      Bucket: process.env.AWS_BUCKET_NAME,
    },
  },
  {
    app: {
      storageDir: "tmp",
    },
  }
);
