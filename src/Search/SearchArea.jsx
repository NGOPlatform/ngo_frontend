import React from 'react';
import Box from '@mui/material/Box';
import SearchInputs from './SearchInputs';
import ONGList from './ONGList';
import { useState, useEffect } from 'react';
import ONGPagination from './ONGPagination';
import { getStartIndex, getEndIndex } from './paginationMath'

function SearchArea({ONGs,onSaveONG}) {
  const filterONGs = (ONGs,page,rowsPerPage) => {
    return ONGs.slice(getStartIndex(page, rowsPerPage) -1, getEndIndex(page, rowsPerPage, ONGs.length) )
   }
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(3);
  const [filteredONGs, setFilteredONGs] = useState([])

  useEffect(() => {
    setFilteredONGs(filterONGs(ONGs,page,rowsPerPage));
  }, [ONGs,page,rowsPerPage])

  

  const handleChangePage = (pageCount) => {
    if (pageCount < 0 || pageCount > Math.floor(ONGs.length / rowsPerPage) - (ONGs.length % rowsPerPage ? 0 : 1))
      return;
    setPage(pageCount);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Box px={4} sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <SearchInputs />
      <ONGPagination collectionCount={ONGs.length} onChangePage={handleChangePage} onChangeRowsPerPage={handleChangeRowsPerPage} page={page} rowsPerPage={rowsPerPage} />
      <ONGList onSaveONG={onSaveONG} ONGs={filteredONGs} />
    </Box>
  );
}

export default SearchArea;