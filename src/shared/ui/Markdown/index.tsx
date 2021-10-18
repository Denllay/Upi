import React from 'react';
import { List, ListItem, styled, Typography as MuiTypography, TypographyProps } from '@mui/material';
import ReactMarkdown, { Components } from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import '@shared/assets/fonts/rubik.scss';
import styles from './styles.module.scss';

const markdownComponents: Components = {
  h3({ children }) {
    return (
      <Typography sx={{ marginTop: 3, fontWeight: 400 }} variant="h5">
        {children}
      </Typography>
    );
  },

  p({ children }) {
    return <Typography variant="subtitle1">{children}</Typography>;
  },

  ul({ children }) {
    return <List>{children}</List>;
  },

  li({ children }) {
    return (
      <ListItem className={styles.li}>
        <Typography variant="subtitle1">{children}</Typography>
      </ListItem>
    );
  },
};

export const Markdown: React.FC = ({ children }) => {
  return (
    <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]} components={markdownComponents}>
      {children as string}
    </ReactMarkdown>
  );
};

const Typography = styled(MuiTypography)<TypographyProps>(({ theme }) => ({
  fontFamily: 'Rubik, sans-serif',
}));
