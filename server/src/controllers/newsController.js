import News from "../model/News";
import User from "../model/User";

export const newsHome = async (req, res) => {
  try {
    const allNews = await News.find({})
      .sort({ _id: -1 })
      .populate("creator");
    res.send(allNews);
  } catch (err) {
    res.status(500).json({
      msg: `Internal Server Error : ${err}`
    });
  }
};

export const getNewsPagination = async (req, res) => {
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
    const pageNews = await News.paginate({}, options);
    res.send(pageNews);
  } catch (err) {
    res.status(500).json({
      msg: `Internal Server Error : ${err}`
    });
  }
};

export const getNewsSearch = async (req, res) => {
  const { keyword, pageNum } = req.query;
  let searchedNews = [];

  const options = {
    page: pageNum,
    limit: 10,
    collaction: {
      locale: "en"
    },
    sort: { _id: -1 },
    populate: "creator"
  };

  try {
    searchedNews = await News.paginate(
      {
        title: { $regex: keyword, $options: "i" }
        // "creator.admin": { $regex: keyword, $options: "i" }
      },
      options
    );
    res.send(searchedNews);
  } catch (err) {
    res.status(500).json({
      msg: `Internal Server Error : ${err}`
    });
  }
};
export const newsDetail = async (req, res) => {
  const {
    params: { id }
  } = req;

  try {
    const {
      _id,
      createdAt,
      creator,
      description,
      newsComments,
      title,
      views
    } = await News.findById(id).populate("creator");
    const defaultUserInfo = {
      admin: false,
      newsComments: [],
      news: [],
      studentFiles: [],
      volunteerFiles: [],
      _id: "",
      name: "",
      email: "",
      googleId: 0,
      avatarUrl: "",
      register_date: new Date()
    };
    const newsDetail = {
      _id,
      createdAt,
      creator: creator ? creator : defaultUserInfo,
      description,
      newsComments,
      title,
      views
    };
    res.send(newsDetail);
  } catch (err) {
    res.status(500).json({
      msg: `Internal Server Error : ${err}`
    });
  }
};

export const getUploadNews = (req, res) => res.send("upload news");
export const postUploadNews = async (req, res) => {
  const { title, description, _id } = req.body;
  try {
    if (title === "" || description === "") {
      res.status(400).json({ msg: "Enter title or description" });
    }
    const user = await User.findById(_id).select("-password");
    const newNews = await News.create({
      title,
      description,
      creator: _id // Make sure to put {creator: _id} before doing 'user.news.push(newNews._id)
    });

    // Add the creator's name
    user.news.push(newNews._id);

    user.save();
    res.send(newNews);
  } catch (err) {
    res.status(500).json({
      msg: `Internal Server Error : ${err}`
    });
  }
};

export const getEditNews = (req, res) => res.send("edit news");
export const postEditNews = async (req, res) => {
  const { title, description } = req.body;
  const { id } = req.params;

  try {
    const editedNews = await News.findOneAndUpdate(
      { _id: id },
      { title, description }
    );
    res.send(editedNews);
  } catch (err) {
    res.status(500).json({
      msg: `Internal Server Error : ${err}`
    });
  }
};

export const getDeleteNews = (req, res) => res.send("GET delete news");

export const postDeleteNews = async (req, res) => {
  const { userId } = req.body;
  const { id } = req.params;

  try {
    const user = await User.findById(userId).select("-password");
    user.news.pull(id);
    await News.findOneAndDelete({ _id: id });
    user.save();

    res.end();
  } catch (err) {
    res.status(500).json({
      msg: `Internal Server Error : ${err}`
    });
  }
};

export const postRegisterView = async (req, res) => {
  const {
    params: { id }
  } = req;

  try {
    const news = await News.findById(id);
    news.views++;
    news.save();
    res.status(200);
  } catch (error) {
    res.status(400).json({ msg: error });
  } finally {
    res.end();
  }
};
