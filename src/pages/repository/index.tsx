import { useGetUserRepoQuery } from '@shared/api';
import React from 'react';
import { useParams } from 'react-router';

interface Param {
  nick: string;
  repository: string;
}

const Repository = () => {
  const { nick, repository } = useParams<Param>();
  const { data } = useGetUserRepoQuery({ repoName: repository, ownerName: nick });
  console.log(data);

  return <div>{data?.name}</div>;
};

export default Repository;
