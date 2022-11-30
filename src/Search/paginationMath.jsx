export function getStartIndex (page, rowsPerPage) {
    return page * rowsPerPage + 1;
  }

export function getEndIndex (page, rowsPerPage, collectionCount) {
    return (page + 1) * rowsPerPage <  collectionCount ? (page + 1) * rowsPerPage : collectionCount;
  }