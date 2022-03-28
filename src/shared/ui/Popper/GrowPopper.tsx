import React from 'react';

import { Box, Grow, PopperProps } from '@mui/material';

import { Popper as UIPopper } from './index';

interface Props {
    timeout?: number;
}

export const GrowPopper: React.FC<PopperProps & Props> = ({
    children,
    open,
    timeout,
    ...props
}) => {
    return (
        <UIPopper open={open} {...props} transition>
            {({ TransitionProps }) => (
                <Grow
                    {...TransitionProps}
                    style={{ transformOrigin: '0 0 0' }}
                    timeout={timeout}
                    in={open}
                >
                    <Box>{children}</Box>
                </Grow>
            )}
        </UIPopper>
    );
};
