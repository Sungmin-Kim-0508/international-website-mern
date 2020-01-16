import Video from "../model/Video";

export const videos = async (req, res) => {
  try {
    // sort({_id: -1}) means sorting by descending
    const videos = await Video.find({}).sort({ _id: -1 });
    res.send(videos);
  } catch (err) {
    console.error(err);
    res.send(err);
  }
};

export const getUpload = (req, res) => {
  res.send("Get Method Upload");
};
export const postUpload = async (req, res) => {
  const {
    body: { title, description },
    file: { path }
  } = req;

  const newVideo = await Video.create({
    fileUrl: path,
    title,
    description
  });
  res.send(newVideo);
};
export const videoDetail = async (req, res) => {
  const {
    params: { id }
  } = req;
  try {
    const video = await Video.findById(id);
    res.send(video);
  } catch (err) {
    console.error(err);
  }
};
export const getEditVideo = (req, res) => {
  res.send("Get Edit Video");
};

export const postEditVideo = async (req, res) => {
  const { id, title, description } = req.body;
  try {
    // _id is the id of column, title and description on the key also represent title and description of the column on mongodb
    await Video.findOneAndUpdate(
      { _id: id },
      { title: title, description: description }
    );
  } catch (error) {
    console.error(error);
  }
  res.send("post edit video");
};
export const getDeleteVideo = (req, res) => {
  // const { id } = req.body;
  res.send("Get Delete Video");
};

export const postDeleteVideo = async (req, res) => {
  const {
    body: { id }
  } = req;
  try {
    await Video.findOneAndRemove({ _id: id });
  } catch (err) {
    console.error(err);
  }
  res.send("Post Delete Video");
};

// Search
export const videoSearch = async (req, res) => {
  const {
    query: { keyword: keyword }
  } = req;

  let videos = [];
  try {
    videos = await Video.find({
      title: { $regex: keyword, $options: "i" }
    }).sort({ _id: -1 });
  } catch (error) {
    console.error(error);
  }
  res.send(videos);
};
