const HOME = "/";
const ABOUT = "/about";
const NEWS = "/news";
const SEARCH = "/search";
const FOR_STUDENTS = "/forStudents";
const FOR_VOLUNTEERS = "/forVoluneers";
const CONTACT = "/contact";
const SIGN_IN = "/signIn";
const SIGN_UP = "/signUp";

const NEWS_UPLOAD = `${NEWS}/upload-news`;
const NEWS_EDIT = `${NEWS}/edit-news`;
const NEWS_DELETE = `${NEWS}/delete-news`;
const NEWS_PAGE = "news-page";

const AUTH = "/auth";
const AUTH_GOOGLE = `${AUTH}/google`;

export default {
  home: HOME,
  auth_google: AUTH_GOOGLE,
  about: ABOUT,
  news: NEWS,
  forStudents: FOR_STUDENTS,
  forVolunteers: FOR_VOLUNTEERS,
  contact: CONTACT,
  signIn: SIGN_IN,
  signUp: SIGN_UP,
  newsUpload: NEWS_UPLOAD,
  search: SEARCH,
  newsEdit: NEWS_EDIT,
  newsDelete: NEWS_DELETE,
  newsPage: NEWS_PAGE
};
