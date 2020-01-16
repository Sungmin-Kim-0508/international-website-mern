import VolunteerFile from "../model/VolunteerFile";
import User from "../model/User";
import path from "path";

export const getFilesListVolunteers = async (req, res) => {
  try {
    const files = await VolunteerFile.find({}).sort({ _id: -1 });
    res.send(files);
  } catch (error) {
    res.status(500).json({
      msg: `Internal Server Error : ${err}`
    });
  }
};

export const getFilesPagination = async (req, res) => {
  const { pageNum } = req.query;
  let { limit } = req.query;
  limit = limit === 0 || limit === null || limit === undefined ? 10 : limit;
  const options = {
    page: pageNum,
    limit: limit,
    collaction: {
      locale: "en"
    },
    sort: { _id: -1 },
    populate: "creator"
  };

  try {
    const pageFiles = await VolunteerFile.paginate({}, options);
    res.send(pageFiles);
  } catch (err) {
    res.status(500).json({
      msg: `Internal Server Error : ${err}`
    });
  }
};

export const postFileUploadVolunteers = (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: "No file uploaded" });
  }

  const { fileName, description, _id } = req.body;

  // In req.files.file, 'file' pertains to formData.append('file')
  const file = req.files.file;
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
  const storagePath = path.join(__dirname, "..", "uploadTest", "uploads");
  const fileUrl = `${storagePath}\\${fileName}_${timestamp}.${extension}`;
  file.mv(`${fileUrl}`, async err => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }

    try {
      const user = await User.findById(_id).select("-password");
      const newFile = await VolunteerFile.create({
        fileUrl,
        fileName,
        description,
        creator: _id
      });
      user.volunteerFiles.push(newFile._id);
      user.save();
      res.send(newFile);
    } catch (err) {
      res.status(500).json({
        msg: `Internal Server Error : ${err}`
      });
    }
  });
};

export const postDeleteFileVolunteers = async (req, res) => {
  const { id } = req.params;
  const { userId } = req.body;

  try {
    const user = await User.findById(userId).select("-password");
    user.volunteerFiles.pull(id);
    await VolunteerFile.findOneAndDelete({ _id: id });
    user.save();
    res.end();
  } catch (error) {
    res.status(500).json({
      msg: `Internal Server Error : ${error}`
    });
  }
};
