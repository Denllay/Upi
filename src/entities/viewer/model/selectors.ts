import { useTypedSelector } from '@shared/model';

export const useViewer = () => {
    return useTypedSelector((store) => store.viewer);
};
