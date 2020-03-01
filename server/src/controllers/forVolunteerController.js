import VolunteerFile from "../model/VolunteerFile";
import User from "../model/User";
import { GCPuploadFile, GCPdeleteFile } from "../../src/utils/gcp_config";
import { genFileUrl } from "../../src/utils/directory_manu";

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

export const postFileUploadVolunteers = async (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: "No file uploaded" });
  }

  const { fileName, description, _id } = req.body;

  // In req.files.volunteerFile, 'volunteerFile' pertains to formData.append('volunteerFile', file) on React.js Side
  const { volunteerFile } = req.files;

  const storagePath = `uploads/volunteerFiles/`;
  const fileUrl = genFileUrl(volunteerFile, fileName, storagePath);
  volunteerFile.mv(fileUrl, async err => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }

    try {
      const { isUploaded, msg } = GCPuploadFile(volunteerFile, fileUrl);
      // if (!isUploaded) {
      //   return res.json({
      //     msg
      //   });
      // }
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
    const { fileUrl } = await VolunteerFile.findById(id);
    GCPdeleteFile(fileUrl);
    await VolunteerFile.findOneAndDelete({ _id: id });
    user.save();
    res.end();
  } catch (error) {
    res.status(500).json({
      msg: `Internal Server Error : ${error}`
    });
  }
};
