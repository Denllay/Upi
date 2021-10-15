import { useGetUserDataQuery } from '@shared/api';
import { useTypedSelector } from '.';

export const useUserData = (login?: string | null) => {
  const { login: initialLogin } = useTypedSelector((state) => state.viewer);

  const data = useGetUserDataQuery(login || initialLogin, {
    selectFromResult: ({ data, ...rest }) => {
      const { following = 0, followers = 0, login = '', avatar_url: avatarUrl = '' } = data || {};

      const formatedData = {
        following,
        followers,
        login,
        avatarUrl,
      };

      return { data: formatedData, ...rest };
    },
  });

  return data;
};
