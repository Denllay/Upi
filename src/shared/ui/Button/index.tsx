import { Button as MuiButton, ButtonProps, styled } from '@mui/material';

export const Button = styled(MuiButton)<ButtonProps>(({ theme }) => ({
  background: theme.palette.primary.main,
  color: theme.palette.text.primary,
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
}));
