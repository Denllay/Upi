import React, { useState } from 'react';
import { Field, SlidePopper } from '@shared/ui';
import { Box } from '@mui/material';
import { useGetSearchScopes, usePopper } from '@shared/model';
import { SearchScope } from '@entities/search/ui';
import styles from './styles.module.scss';

export const SearchHeader = () => {
  const { openPopper, isOpen, anchorEl } = usePopper<HTMLInputElement>();
  const [searchData, setSearchData] = useState('');
  const scopeList = useGetSearchScopes();

  const activeStyles = (style: string) => (isOpen ? styles[`${style}_active`] : '');

  const scopesEl = scopeList.map((props) => {
    return <SearchScope {...props} searchData={searchData} key={props.type} />;
  });

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchData(e.target.value);
  };

  return (
    <Box className={`${styles.main} ${activeStyles('main')}`}>
      <Field
        onClick={openPopper}
        ref={anchorEl}
        className={`${styles.search} ${activeStyles('search')}`}
        value={searchData}
        onChange={onChangeSearch}
        placeholder="Search"
      />

      <SlidePopper timeout={500} open={isOpen} anchorEl={anchorEl.current} placement="bottom-end">
        <Box className={styles.popper}>{scopesEl}</Box>
      </SlidePopper>
    </Box>
  );
};
