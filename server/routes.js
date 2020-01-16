// Global
const HOME = "/";
const ABOUT = "/about";
const CONTACT = "/contact";
const SEARCH = "/search";
const SIGN_IN = "/signIn";
const SIGN_OUT = "/signOut";
const SIGN_UP = "/signUp";

// Users

const USERS = "/users";
const USER_DETAIL = "/:id";
const EDIT_PROFILE = "/edit-profile";
const CHANGE_PASSWORD = "/change-password";
const FORGET_PASSWORD = "/forget-password";

// Google Oauth

const AUTH_GOOGLE = "/auth/google";
const AUTH_GOOGLE_CALLBACK = "/auth/google/callback";

// Facebook Auth
const AUTH_FACEBOOK = "/auth/facebook";

// News
const NEWS = "/news";
const NEWS_DETAIL = "/:id";
const UPLOAD_NEWS = "/upload-news";
const EDIT_NEWS = "/:id/edit-news";
const DELETE_NEWS = "/:id/delete-news";
const NEWS_PAGE = "/news-page";

// Videos

const VIDEOS = "/videos";
const UPLOAD = "/upload";
const SEARCH_VIDEO = "/search/videos";
const VIDEO_DETAIL = "/:id";
const EDIT_VIDEO = "/:id/edit";
const DELETE_VIDEO = "/:id/delete";

// For Students

const FOR_STUDENTS = "/forStudents";
const DELETE_STUDENTS = "/:id/delete-students";
const STUDENT_PAGE = "/student-page";

// For Volunteers

const FOR_VOLUNTEERS = "/forVolunteers";
const DELETE_VOLUNTEERS = "/:id/delete-volunteers";
const VOLUNTEERS_PAGE = "/volunteer-page";

// API

const API = "/api";
const REGISTER_VIEW = "/:id/view";

const routes = {
  api: API,
  registerView: REGISTER_VIEW,
  home: HOME,
  about: ABOUT,
  news: NEWS,
  forStudent: FOR_STUDENTS,
  studentPage: STUDENT_PAGE,
  forVolunteers: FOR_VOLUNTEERS,
  volunteerPage: VOLUNTEERS_PAGE,
  contact: CONTACT,
  search: SEARCH,
  signIn: SIGN_IN,
  signOut: SIGN_OUT,
  signUp: SIGN_UP,
  users: USERS,
  userDetail: USER_DETAIL,
  editProfile: EDIT_PROFILE,
  forgetPassword: FORGET_PASSWORD,
  changePassword: CHANGE_PASSWORD,
  authGoogle: AUTH_GOOGLE,
  authGoogleCallback: AUTH_GOOGLE_CALLBACK,
  authFacebook: AUTH_FACEBOOK,
  newsPage: NEWS_PAGE,
  newsDetail: NEWS_DETAIL,
  editNews: EDIT_NEWS,
  uploadNews: UPLOAD_NEWS,
  deleteNews: DELETE_NEWS,
  videos: VIDEOS,
  upload: UPLOAD,
  videoDetail: VIDEO_DETAIL,
  searchVideo: SEARCH_VIDEO,
  editVideo: EDIT_VIDEO,
  deleteVideo: DELETE_VIDEO,
  deleteStudents: DELETE_STUDENTS,
  deleteVolunteers: DELETE_VOLUNTEERS
};

export default routes;
