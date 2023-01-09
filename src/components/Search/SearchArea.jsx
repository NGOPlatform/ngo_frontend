import React from 'react';
import Box from '@mui/material/Box';
import SearchInputs from './SearchInputs';
import ONGList from './ONGList';
import { useState, useEffect } from 'react';
import ONGPagination from './ONGPagination';
import { getStartIndex, getEndIndex } from './paginationMath'

function SearchArea({collectionCount, ONGs, onSaveONG, searchCriteria, onSetSearchCriteria }) {
  const [page, setPage] = React.useState(0);

  useEffect(() => {
    // onsetStart(getStartIndex(page, searchCriteria.numberOfONGs) - 1);
  }, [ page, searchCriteria.numberOfONGs])



  const handleChangePage = (pageCount) => {
    if (pageCount < 0 || pageCount > Math.floor(collectionCount / searchCriteria.numberOfONGs) - (collectionCount % searchCriteria.numberOfONGs ? 0 : 1))
      return;
    setPage(pageCount);
  };

  const handleChangeRowsPerPage = (event) => {
    // onsetNumberOfONGs(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Box px={4} sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <SearchInputs onSetSearchCriteria={onSetSearchCriteria}/>
      <ONGPagination collectionCount={collectionCount} onChangePage={handleChangePage} onChangeRowsPerPage={handleChangeRowsPerPage} page={page} rowsPerPage={searchCriteria.numberOfONGs} />
      <ONGList onSaveONG={onSaveONG} ONGs={ONGs} />
    </Box>
  );
}

export default SearchArea;