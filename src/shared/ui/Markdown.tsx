import { List, ListItem, Typography } from '@mui/material';
import React from 'react';
import ReactMarkdown, { Components } from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

const markdownComponents: Components = {
  h3({ children }) {
    return (
      <Typography sx={{ marginTop: 3 }} variant="h5">
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
      <ListItem>
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
