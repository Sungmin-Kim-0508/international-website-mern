import StudentFile from "../model/StudentFile";
import User from "../model/User";
import path from "path";
import { genFileUrl, extractFileName } from "../../src/utils/directory_manu";
import { GCPuploadFile, GCPDownloadFile } from "../utils/gcp_config";

export const getFilesList = async (req, res) => {
  try {
    const files = await StudentFile.find({}).sort({ _id: -1 });
    res.send(files);
  } catch (error) {
    res.status(500).json({
      msg: `Internal Server Error : ${err}`
    });
  }
};

export const getStudentsFilesPagination = async (req, res) => {
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
    const pageFiles = await StudentFile.paginate({}, options);
    res.send(pageFiles);
  } catch (err) {
    res.status(500).json({
      msg: `Internal Server Error : ${err}`
    });
  }
};

export const postFileUploadStudents = (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: "No file uploaded" });
  }

  const { fileName, description, _id } = req.body;
  // In req.files.studentFile, 'studentFile' pertains to formData.append('studentFile')
  const studentFile = req.files.studentFile;

  const storagePath = `uploads/studentFiles/`;
  const fileUrl = genFileUrl(studentFile, fileName, storagePath);
  studentFile.mv(`${fileUrl}`, async err => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }

    try {
      const { isUploaded, msg } = GCPuploadFile(studentFile, fileUrl);
      const user = await User.findById(_id).select("-password");
      const newFile = await StudentFile.create({
        fileUrl,
        fileName,
        description,
        creator: _id
      });
      user.studentFiles.push(newFile._id);
      user.save();
      res.send(newFile);
    } catch (err) {
      res.status(500).json({
        msg: `Internal Server Error : ${err}`
      });
    }
  });
};

export const postDownloadFile = async (req, res) => {
  const { fileUrl } = req.body;
  const fileName = extractFileName(fileUrl);
  console.log(fileUrl);
  try {
    GCPDownloadFile(fileName, fileUrl);
  } catch (error) {
    res.status(500).json({
      msg: `Internal Server Error : ${error}`
    });
  }
};

export const postDeleteFileStudents = async (req, res) => {
  const { id } = req.params;
  const { userId } = req.body;
  try {
    const user = await User.findById(userId).select("-password");
    user.studentFiles.pull(id);
    await StudentFile.findOneAndDelete({ _id: id });
    user.save();
    res.end();
  } catch (error) {
    res.status(500).json({
      msg: `Internal Server Error : ${error}`
    });
  }
};
