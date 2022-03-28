import { useGetRepoREADMEQuery } from '@shared/api';
import { Base64Decode } from '@shared/lib';

export const useREADMERepo = ({
    username,
    repository = username,
}: {
    username: string;
    repository?: string;
}) => {
    const data = useGetRepoREADMEQuery(
        { repository, username },
        {
            selectFromResult: ({ data, isLoading, isUninitialized, ...rest }) => {
                const { content = '' } = data || {};

                const README = Base64Decode(content);

                // ? @see isLoading - https://github.com/reduxjs/redux-toolkit/issues/1586
                return { data: README, isLoading: isLoading || isUninitialized, ...rest };
            },
        }
    );

    return data;
};
