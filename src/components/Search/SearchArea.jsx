import React from 'react';
import Box from '@mui/material/Box';
import SearchInputs from './SearchInputs';
import ONGList from './ONGList';
import { useState, useEffect } from 'react';
import ONGPagination from './ONGPagination';
import { getStartIndex, getEndIndex } from './paginationMath'

function SearchArea({ collectionCount, ONGs, onSaveONG, searchCriteria, onSetSearchCriteria }) {
  const [page, setPage] = React.useState(0);

  useEffect(() => {
    // onsetStart(getStartIndex(page, searchCriteria.numberOfONGs) - 1);

    onSetSearchCriteria({
      ...searchCriteria,
      'start': getStartIndex(page, searchCriteria.numberOfONGs) - 1
    });
  }, [page, searchCriteria.numberOfONGs])



  const handleChangePage = (pageCount) => {
    if (pageCount < 0 || pageCount > Math.floor(collectionCount / searchCriteria.numberOfONGs) - (collectionCount % searchCriteria.numberOfONGs ? 0 : 1))
      return;
    setPage(pageCount);
  };

  const handleChangeRowsPerPage = (event) => {
    // onsetNumberOfONGs(parseInt(event.target.value, 10));
    onSetSearchCriteria({
      ...searchCriteria, 'numberOfONGs': parseInt(event.target.value, 10)
    })
    setPage(0);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%', padding:'20px' }}>
      <SearchInputs searchCriteria={searchCriteria} onSetSearchCriteria={onSetSearchCriteria} />
      <ONGPagination collectionCount={collectionCount} onChangePage={handleChangePage} onChangeRowsPerPage={handleChangeRowsPerPage} page={page}
        rowsPerPage={searchCriteria.numberOfONGs} />
      <ONGList onSaveONG={onSaveONG} ONGs={ONGs.slice(getStartIndex(page, searchCriteria.numberOfONGs) -1, getEndIndex(page, searchCriteria.numberOfONGs, collectionCount))} />
    </Box>
  );
}

export default SearchArea;