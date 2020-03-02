export type programLabels = {
  title: string;
  content: string;
};

export type note = {
  title: string;
  date: string;
  body: string;
  src: string;
  to: string;
};

export type rowDirectionCard = {
  src?: string;
  alt?: string;
  to: string;
};

export type information = {
  title: string;
  date: string;
};

export type UserInfo = {
  admin: boolean;
  newsComments: [];
  news: [];
  studentFiles: [];
  volunteerFiles: [];
  _id: string;
  name: string;
  email: string;
  googleId: Number;
  avatarUrl: string;
  register_date: Date;
};

export type News = {
  _id: string;
  title: string;
  description: string;
  creator: UserInfo;
  views: Number;
  createdAt: Date;
  newsComments: [];
};

export type ForStudents = {
  _id: string;
  fileName: string;
  description: string;
  fileUrl: string;
  creator: UserInfo;
  createdAt: Date;
};

export type ForVolunteers = {
  _id: string;
  fileName: string;
  description: string;
  fileUrl: string;
  creator: UserInfo;
  createdAt: Date;
};

/**=================================== Reducer State Type ========================================== */
export type NewsState = {
  news: {
    docs: News[];
    totalDocs: Number;
    limit: Number;
    hasPrevPage: boolean;
    hasNextPage: boolean;
    page: Number;
    totalPages: Number;
    offset: Number;
    prevPage: Number | null;
    nextPage: Number | null;
    pagingCounter: Number;
    meta: {};
  };
  newsDetail: string;
  msg: string;
};

export type ForVolunteersState = {
  isLoading: boolean;
  msg: string;
  fileList: [];
  paginationOptions: {};
};

export type UserState = {
  token: string | null;
  isAuthenciated: boolean;
  isLoading: boolean;
  user: UserInfo | null;
  msg: string | "";
};
