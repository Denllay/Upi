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
  owner: {
    login: string;
  };
}

export interface GetRepo {
  ownerName: string;
  repoName: string;
}
