import React from 'react';
import { Components } from 'react-markdown';

import {
    List,
    ListItem,
    styled,
    Typography as MuiTypography,
    TypographyProps,
} from '@mui/material';

import { HConfig } from './types';

import styles from './styles.module.scss';

const Typography = styled(MuiTypography)<TypographyProps>(() => ({
    fontFamily: 'Rubik',
}));

const hConfig: HConfig[] = [
    { type: 'h1', mt: 2, fontWeight: 700, fontSize: 42 },
    { type: 'h2', mt: 1, fontWeight: 500, fontSize: 35 },
    { type: 'h3', fontWeight: 400, fontSize: 27 },
    { type: 'h4', fontWeight: 300, fontSize: 24 },
    { type: 'h5', fontWeight: 300, fontSize: 20 },
    { type: 'h6', mt: 1, fontWeight: 300, fontSize: 18 },
];

const addHToConfig = (config: Components, hConfig: HConfig[]) => {
    const copyConfig: Components = { ...config };

    for (const { type, ...rest } of hConfig) {
        const renderH: React.FC = ({ children }) => <Typography sx={rest}>{children}</Typography>;

        copyConfig[type] = renderH;
    }

    return copyConfig;
};

const markdownComponents: Components = {
    p({ children }) {
        return <Typography variant='subtitle1'>{children}</Typography>;
    },

    ul({ children }) {
        return <List>{children}</List>;
    },

    li({ children }) {
        return (
            <ListItem className={styles.li}>
                <Typography variant='subtitle1'>{children}</Typography>
            </ListItem>
        );
    },

    img({ src }) {
        return <img alt='markdown image' className={styles.img} src={src} />;
    },
};

export default addHToConfig(markdownComponents, hConfig);
