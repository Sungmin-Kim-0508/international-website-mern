/**
 *
 * @param {object} file             - The object that comes from req.files
 * @param {string} fileName         - The file name that comes from req.body.fileName
 * @param {string} storagePath      - The storage path of google cloud bucket where you want to store files
 *                                  - Note: Make sure add '/' at the end of path.
 *                                  - ex) myRoot/myFolder/
 * @returns {string}                - Returns fileUrl that looks like "uploads/myFolder/myPdf_1580921232.pdf"
 */
const genFileUrl = (file, fileName, storagePath) => {
  /**
   *  Reference : https://stackoverflow.com/questions/680929/how-to-extract-extension-from-filename-string-in-javascript
   * 
   * (?:         # begin non-capturing group
      \.         # a dot
      (          # begin capturing group (captures the actual extension)
      [^.]+      # anything except a dot, multiple times
      )          # end capturing group
      )?         # end non-capturing group, make it optional
      $          # anchor to the end of the string
   */

  const extensionRegx = /(?:\.([^.]+))?$/;
  const extension = extensionRegx.exec(file.name)[1];
  const timestamp = Date.now();
  const fileUrl = `${storagePath}${fileName}_${timestamp}.${extension}`;
  return fileUrl;
};

exports.genFileUrl = genFileUrl;

const extractFileName = fileUrl => {
  const fileNameArray = fileUrl.split("/");
  const fileName = fileNameArray[fileNameArray.length - 1];
  return fileName;
};

exports.extractFileName = extractFileName;
