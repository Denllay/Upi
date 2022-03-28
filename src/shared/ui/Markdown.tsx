import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';

import markDownConfig from '@shared/config/markdown';

import '@shared/assets/fonts/rubik.scss';

export const Markdown: React.FC = ({ children }) => {
    return (
        <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
            components={markDownConfig}
        >
            {children as string}
        </ReactMarkdown>
    );
};
