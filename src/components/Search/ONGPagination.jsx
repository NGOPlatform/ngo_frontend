import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Select from '@mui/material/Select';
import { Box, Typography } from '@mui/material';
import {getStartIndex, getEndIndex} from './paginationMath'
export default function ONGPagination({ collectionCount, onChangeRowsPerPage, onChangePage, page, rowsPerPage }) {

  const leftRightIconStyle = {
    backgroundColor: '#f1ecff',
    color: '#7b48ff',
    width: 25,
    height: 25,
    borderRadius: "5px"
  }


  return (
    <Box sx={{ overflow: 'visible', display: 'flex', justifyContent: 'space-between', padding: '5px 0px' }}>
      <Typography id="demo-simple-select-label">articole pe pagina: </Typography>
      <Select
        sx={{ height: 25, border: 0 }}
        value={rowsPerPage}
        onChange={onChangeRowsPerPage}
      >
        <MenuItem value={3}>3</MenuItem>
        <MenuItem value={5}>5</MenuItem>
        <MenuItem value={10}>10</MenuItem>
        <MenuItem value={25}>25</MenuItem>
      </Select >{

        <Typography >{getStartIndex(page, rowsPerPage)}-{getEndIndex(page, rowsPerPage, collectionCount)} of {collectionCount}</Typography>
      }
      <Box sx={{ display: 'flex', gap: 1 }}>
        <ArrowLeftIcon onClick={(e) => { onChangePage(page - 1) }} sx={leftRightIconStyle} />
        <ArrowRightIcon onClick={(e) => { onChangePage(page + 1) }} sx={leftRightIconStyle} />
      </Box>
    </Box>
  );
}