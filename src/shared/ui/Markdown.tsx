import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import markDownConfig from '@shared/config/markdown';
import '@shared/assets/fonts/rubik.scss';

export const Markdown: React.FC = ({ children }) => {
  return (
    <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]} components={markDownConfig}>
      {children as string}
    </ReactMarkdown>
  );
};
