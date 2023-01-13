export function getStartIndex (page, rowsPerPage) {
    return page * rowsPerPage + 1;
  }

export function getEndIndex (page, rowsPerPage, collectionCount) {
  let endIndex = (page + 1) * rowsPerPage <  collectionCount ? (page + 1) * rowsPerPage : collectionCount;
  // console.log(endIndex)
    return endIndex;
  }