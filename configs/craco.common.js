const path = require('path');
const PATH_SRC = path.resolve(`${__dirname}/../src`);

module.exports = {
    webpack: {
        alias: {
            '@features': `${PATH_SRC}/features/`,
            '@entities': `${PATH_SRC}/entities/`,
            '@shared': `${PATH_SRC}/shared/`,
            '@widgets': `${PATH_SRC}/widgets/`,
            '@pages': `${PATH_SRC}/pages/`,
            '@app': `${PATH_SRC}/app/`,
        },
    },
};
