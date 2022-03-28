import { useGetUserDataQuery } from '@shared/api';

import { useTypedSelector } from '.';

export const useUserData = (username?: string | null) => {
    const { login: initialUsername } = useTypedSelector((state) => state.viewer);

    const data = useGetUserDataQuery(username || initialUsername, {
        selectFromResult: ({ data, isLoading, isUninitialized, ...rest }) => {
            const {
                following = 0,
                followers = 0,
                login = '',
                avatar_url: avatarUrl = '',
            } = data || {};

            const formatedData = {
                following,
                followers,
                login,
                avatarUrl,
            };

            // ? @see isLoading - https://github.com/reduxjs/redux-toolkit/issues/1586
            return { data: formatedData, isLoading: isLoading || isUninitialized, ...rest };
        },
    });

    return data;
};
