import { Input as MuiInput, styled, InputProps } from '@mui/material';

export const Field = styled(MuiInput)<InputProps>(({ theme }) => ({
  background: theme.palette.primary.main,
  color: theme.palette.text.primary,
  borderRadius: 5,
  paddingLeft: 10,

  '&::before': {
    display: 'none',
  },
  '&::after': {
    display: 'none',
  },
}));
