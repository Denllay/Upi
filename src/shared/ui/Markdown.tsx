import { List, ListItem, Typography } from '@mui/material';
import React from 'react';
import ReactMarkdown, { Components } from 'react-markdown';

const markdownComponents: Components = {
  h3({ children }) {
    return <Typography variant="h5">{children}</Typography>;
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
  return <ReactMarkdown components={markdownComponents}>{children as string}</ReactMarkdown>;
};
