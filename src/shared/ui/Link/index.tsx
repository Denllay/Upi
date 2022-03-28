import React from 'react';
import { Link as RouterLink, LinkProps } from 'react-router-dom';

import styles from './styles.module.scss';

export const Link: React.FC<LinkProps> = ({ children, className = '', ...rest }) => {
    return (
        <RouterLink {...rest} className={`${styles.link} ${className}`}>
            {children}
        </RouterLink>
    );
};
