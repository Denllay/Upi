export interface UserData {
  login: string;
  avatar_url: string;
  followers: number;
  following: number;
}
export interface Readme {
  content: string;
}

export interface Repo {
  name: string;
  description: string | null;
  default_branch: string;
  owner: {
    login: string;
  };
}
export interface Branch {
  commit: {
    sha: string;
    url: string;
  };
  name: string;
}
export interface GetRepo {
  username: string;
  repository: string;
}

export interface GetREADMERepo extends GetRepo {}
