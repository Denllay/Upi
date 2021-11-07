import React, { useState } from 'react';
import { Field, SlidePopper } from '@shared/ui';
import { Box } from '@mui/material';
import { usePopper } from '@shared/model';
import { Scope } from './Scope';
import { searchModel } from '@features/search';
import styles from './styles.module.scss';

export const Scopes = () => {
  const { openPopper, isOpen, anchorEl } = usePopper<HTMLInputElement>();
  const { queryParam = '' } = searchModel.useSearch();
  const [searchData, setSearchData] = useState(queryParam);
  const scopeList = searchModel.useGetSearchScopes();

  const isActivePopper = isOpen && !!searchData;

  const activeStyles = (style: string) => (isActivePopper ? styles[`${style}_active`] : '');

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchData(e.target.value);
  };

  const scopeListEl = scopeList.map((props) => {
    return <Scope searchData={searchData} key={props.type} {...props} />;
  });

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

      <SlidePopper timeout={500} open={isActivePopper} anchorEl={anchorEl.current} placement="bottom-end">
        <Box className={styles.popper}>{scopeListEl}</Box>
      </SlidePopper>
    </Box>
  );
};
