const { Storage } = require("@google-cloud/storage");
const path = require("path");
const os = require("os");

/**
 * reference: https://dev.to/idiglove/file-upload-with-react-express-and-google-cloud-storage-with-folder-structure-2i5j
 */

const storage = new Storage({
  projectId: "international-website-mern",
  keyFilename: path.join(
    __dirname,
    "../../international-website-mern-5ca9fba931ea.json"
  )
});

/**
 *
 * @param {object} file - The object that comes from req.files.myFile
 * @param {string} fileUrl   - The path including file name where you want to store files in google bucket
 */
const GCPuploadFile = async (file, fileUrl) => {
  try {
    let bucket = storage.bucket(process.env.GOOGLE_CLOUD_BUCKET_NAME);

    let fileUpload = bucket.file(fileUrl);
    const blobStream = fileUpload.createWriteStream({
      metadata: {
        contentType: file.memetype
      }
    });

    blobStream.on("error", error => {
      console.log("Unable to upload. - " + error);
      return new Error(`Unable to upload. - ${error}`);
    });

    blobStream.on("finish", () => {
      const url = `https://storage.googleapis.com/${bucket.name}/${fileUpload.name}`;
      console.log(url);
    });
    blobStream.end(file.data);
    return {
      isUploaded: true,
      msg: ""
    };
  } catch (error) {
    console.log(error);
    return {
      isUploaded: false,
      msg: error
    };
  }
};

/**
 *
 * @param {string} fileUrl - The path including file name where you want to delete files in google bucket
 */

const GCPdeleteFile = async fileUrl => {
  try {
    await storage
      .bucket(process.env.GOOGLE_CLOUD_BUCKET_NAME)
      .file(fileUrl)
      .delete()
      .notification();

    console.log(`Successfully delete file`);
    return `Successfully delete file`;
  } catch (error) {
    console.log(error);
    return `Faile to delete file in bucket - ${error}`;
  }
};

const GCPDownloadFile = async (fileName, fileUrl) => {
  const options = {
    destination: fileUrl
  };
  await storage
    .bucket(process.env.GOOGLE_CLOUD_BUCKET_NAME)
    .file(fileUrl)
    .download(`${os.homedir()}\\downloads\\${fileName}`);

  console.log("Done");
};

module.exports = {
  GCPuploadFile,
  GCPdeleteFile,
  GCPDownloadFile
}