import React from 'react';

import { Box, ButtonProps, PopperPlacementType, styled } from '@mui/material';
import { usePopper } from '@shared/model';

import { Button as UIButton, Popper } from '../';

import styles from './styles.module.scss';

interface Props {
    list: JSX.Element[] | undefined;
    buttonClassName?: string;
    contentClassName?: string;
    placement?: PopperPlacementType;
}

export const Select: React.FC<Props & ButtonProps> = ({
    list,
    children,
    buttonClassName = '',
    contentClassName = '',
    placement = 'bottom-start',
    ...props
}) => {
    const { isOpen, togglePopper, anchorEl } = usePopper<HTMLButtonElement>();
    return (
        <>
            <Button
                className={`${styles.button} ${buttonClassName}`}
                onClick={togglePopper}
                ref={anchorEl}
                {...props}
            >
                {children}
            </Button>

            <Popper open={isOpen} anchorEl={anchorEl.current} placement={placement}>
                <Box className={`${styles.popper} ${contentClassName}`}>{list}</Box>
            </Popper>
        </>
    );
};

const Button = styled(UIButton)<ButtonProps>(() => ({
    backgroundColor: 'var(--color-warning)',
    borderRadius: 5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2px 5px',
    boxShadow: 'none',

    '&:hover': {
        backgroundColor: 'var(--color-warning)',
        boxShadow: 'none',
    },
}));
