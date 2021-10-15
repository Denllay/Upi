import { Link as MuiLink, LinkProps, styled } from '@mui/material';

export const Link = styled(MuiLink)<LinkProps>(({ theme }) => ({
  textDecorationColor: 'transparent',
  '&:hover': {
    color: theme.palette.action.hover,
  },
}));
