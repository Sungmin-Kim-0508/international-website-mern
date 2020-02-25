const HOME = "/";
const ABOUT = "/about";
const NEWS = "/news";
const SEARCH = "/search";
const FOR_STUDENTS = "/forStudents";
const FOR_VOLUNTEERS = "/forVoluneers";
const CONTACT = "/contact";
const SIGN_IN = "/signIn";
const SIGN_UP = "/signUp";

const NEWS_UPLOAD = `/upload-news`;
const NEWS_EDIT = `/edit-news`;
const NEWS_DELETE = `/delete-news`;
const NEWS_PAGE = "news-page";

const USER_INFO = "/userInfo";

const AUTH = "/auth";
const AUTH_GOOGLE = `${AUTH}/google`;
const AUTH_FACEBOOK = `${AUTH}/facebook`;

export default {
  home: HOME,
  auth_google: AUTH_GOOGLE,
  auth_facebook: AUTH_FACEBOOK,
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
  newsPage: NEWS_PAGE,
  userInfo: USER_INFO
};
