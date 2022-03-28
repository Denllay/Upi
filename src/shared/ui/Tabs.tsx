import React from 'react';

import { Box, styled, Tab as MuiTab, Tabs as MuiTabs } from '@mui/material';

interface StyledTabsProps {
    children?: React.ReactNode;
    value: number;
    onChange: (event: React.SyntheticEvent, newValue: number) => void;
}

export const Tabs = styled((props: StyledTabsProps) => (
    <MuiTabs
        {...props}
        TabIndicatorProps={{ children: <span className='MuiTabs-indicatorSpan' /> }}
    />
))({
    '& .MuiTabs-indicator': {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },
    '& .MuiTabs-indicatorSpan': {
        width: '100%',
        backgroundColor: 'var(--color-primary)',
    },
});

interface StyledTabProps {
    label: string;
    value: number;
    className?: string;
}

export const Tab = styled((props: StyledTabProps) => <MuiTab disableRipple {...props} />)(
    ({ theme }) => ({
        textTransform: 'none',
        fontWeight: theme.typography.fontWeightRegular,
        fontSize: 24,
        marginRight: theme.spacing(3),
        marginLeft: theme.spacing(3),
        color: 'var(--color-dark)',

        '&.Mui-focusVisible': {
            backgroundColor: 'rgba(100, 95, 228, 0.32)',
        },
    })
);

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

export const TabPanel: React.FC<TabPanelProps> = ({ children, value, index }) => {
    return <Box>{value === index && children}</Box>;
};
