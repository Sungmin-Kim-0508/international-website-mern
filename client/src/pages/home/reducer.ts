import { createReducer } from "typesafe-actions";
import { HomeAction } from "./types";
import {
  defaultNews,
  defaultForStudents,
  defaultForVolunteers
} from "commons/defaultState";
import { HomeState } from "./types";
import {
  NEWS_LOADING,
  NEWS_SEARCHING,
  LOAD_SUCCESS,
  NEWS_LOADED,
  NEWS_PAGINATION_LOADED,
  NEWS_SEARCHED,
  UPLOAD_NEWS,
  EDIT_NEWS,
  DELETE_NEWS
} from "./actions";

const initialState: HomeState = {
  news: defaultNews,
  forStudents: defaultForStudents,
  forVolunteers: defaultForVolunteers,
  isNewsLoading: false,
  isNewsSearching: false
};

const home = createReducer<HomeState, HomeAction>(initialState, {
  [NEWS_LOADING]: state => ({
    ...state,
    news: defaultNews,
    isNewsLoading: true,
    isNewsSearching: false
  }),
  [NEWS_LOADED]: state => {
    return {
      ...state,
      isNewsLoading: false,
      isNewsSearching: false
    };
  },
  [NEWS_PAGINATION_LOADED]: (state, { payload: news }) => {
    return {
      ...state,
      news: news,
      isNewsLoading: false,
      isNewsSearching: false
    };
  }
});

export default home;

// export default function(state = initialState, action: HomeAction) {
//   switch (action.type) {
//     case NEWS_LOADING: {
//       return {
//         ...state,
//         isNewsLoading: false,
//         isSearching: false,
//         news: [],
//         paginationOptions: {},
//         msg: null
//       };
//     }

//     case NEWS_SEARCHING:
//       return {
//         ...state,
//         isLoading: true,
//         isSearching: true,
//         news: [],
//         paginationOptions: {},
//         msg: null
//       };
//     case NEWS_LOADED:
//     case LOAD_SUCCESS:
//       return {
//         ...state,
//         isLoading: false,
//         isSearching: false,
//         news: action.payload
//       };
//     case NEWS_PAGINATION_LOADED: {
//       const { news } = action.payload;
//       return {
//         ...state,
//         isLoading: false,
//         isSearching: false,
//         news: news.docs,
//         paginationOptions: {
//           hasNextPage: news.hasNextPage,
//           hasPrevPage: news.hasPrevPage,
//           pagingCounter: news.pagingCounter,
//           page: news.page,
//           totalPages: news.totalPages
//         }
//       };
//     }

//     case NEWS_SEARCHED:
//       return {
//         ...state,
//         isLoading: false,
//         isSearching: true,
//         news: action.payload.news.docs
//       };
//     // case NEWS_DETAIL:
//     //   return {
//     //     ...state,
//     //     isLoading: false,
//     //     newsDetail: action.payload
//     //   };
//     // case UPLOAD_NEWS:
//     //   return {
//     //     ...state,
//     //     news: [action.payload, ...state.news.news],
//     //     isLoading: false,
//     //     msg: "Upload Success!"
//     //   };
//     // case EDIT_NEWS: {
//     //     const { payload } = action;
//     //   const { news } = state.news

//     //   let existingItem = news.filter(item => payload._id !== item._id);
//     //   return {
//     //     ...state,
//     //     news: [payload, ...existingItem],
//     //     isLoading: false,
//     //     msg: "Edit Success!"
//     //   };
//     // }

//     // case DELETE_NEWS: {
//     //     const {news } = state.news

//     //   return {
//     //     ...state,
//     //     news: news.filter((item : News) => item._id !== action.payload),
//     //     isLoading: false,
//     //     msg: "Delete Success!"
//     //   };
//     // }

//     default:
//       return state;
//   }
// }
