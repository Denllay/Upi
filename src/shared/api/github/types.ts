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
  git_url: string;
  ssh_url: string;
  clone_url: string;
  description: string | null;
  default_branch: string;
  stargazers_count: number;
  forks: number;
  owner: {
    login: string;
  };
}
export interface Branch {
  commit: {
    author: AuthorBranch;
    sha: string;
    url: string;
    commit: {
      message: string;
    };
    committer: {
      avatar_url: string;
    };
  };
  name: string;
}
export interface LastCommit {
  commit: {
    message: string;
  };
  author: {
    login: string;
    avatar_url: string;
  };
}
interface RepoContents {
  download_url: string;
  name: string;
  path: string;
  sha: string;
  size: string;
  url: string;
}
export interface RepoDirContents extends RepoContents {
  type: 'dir';
}

export interface RepoFileContents extends RepoContents {
  content: string;
  type: 'file';
}
export interface RepoContentsParams {
  ref?: string;
}
interface AuthorBranch {
  avatar_url: string;
  login: string;
}

export interface GetRepo {
  username: string;
  repository: string;
}
export interface StarRepo extends GetRepo {}
export interface GetBranch extends GetRepo {
  branch: string;
}

export interface GetREADMERepo extends GetRepo {}

export interface GetRepoContents extends GetRepo {
  path?: string;
  branch?: string;
}
export interface GetLastComment extends GetRepoContents {}
