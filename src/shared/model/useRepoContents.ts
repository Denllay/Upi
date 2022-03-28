import { useGetRepoContentsQuery } from '@shared/api';
import { Base64Decode, sortFilesByType } from '@shared/lib';

import { useTypedParams } from '.';

export const useRepoContents = () => {
    const { branch, path, repository, username } = useTypedParams();

    const data = useGetRepoContentsQuery(
        { repository, username, branch, path },
        {
            selectFromResult: ({ data, isLoading, isUninitialized, ...rest }) => {
                if (Array.isArray(data)) {
                    const sortedData = [...data].sort(sortFilesByType);

                    const formatedData = {
                        type: 'dir' as const,
                        data: sortedData,
                    };

                    // ? @see isLoading - https://github.com/reduxjs/redux-toolkit/issues/1586

                    return { data: formatedData, isLoading: isLoading || isUninitialized, ...rest };
                }

                const { content = '', size, name = '' } = data || {};
                const [, fileExtension] = name.match(/\.([0-9a-z]+$)/i) || [];
                const decodeContent = Base64Decode(content);

                return {
                    data: { code: decodeContent, size, fileExtension, type: 'file' as const },
                    isLoading: isLoading || isUninitialized,
                    ...rest,
                };
            },
        }
    );

    return data;
};
