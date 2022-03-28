export const getPathUrl = (str: string) => {
    const regex = /(http[s]?:\/\/)?([^\/\s]+\/)(.*)/;

    return str.match(regex);
};
