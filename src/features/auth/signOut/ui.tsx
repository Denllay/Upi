import React from 'react';
import { useDispatch } from 'react-redux';

import { Typography } from '@mui/material';
import { Button } from '@shared/ui';

import { SignOutUser } from './model';

export const SignOut = () => {
    const dispatch = useDispatch();
    const onSignOut = () => {
        dispatch(SignOutUser());
    };

    return (
        <Button variant='text' onClick={onSignOut}>
            <Typography variant='button'>Exit</Typography>
        </Button>
    );
};
