import React, { useContext } from 'react';
import StakeholderDetail from './StakeholderDetail';
import {
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableSortLabel,
  TablePagination,
} from '@material-ui/core';
import { StakeholdersContext } from '../../context/StakeholdersContext';

function StakeholderTable() {
  const {
    stakeholders,
    count,
    columns,
    page,
    rowsPerPage,
    orderBy,
    order,
    setPage,
    setRowsPerPage,
    sort,
  } = useContext(StakeholdersContext);

  const handleRowsPerPageChange = (e) => {
    setRowsPerPage(e.target.value);
  };

  const handlePageChange = (e, page) => {
    setPage(page);
  };

  const handleSort = (col, order) => {
    console.log('sort col', { col, order });
    sort({ col, order });
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              {columns.map((col) => (
                <TableCell
                  key={col.value}
                  onClick={() => handleSort(col.value, !order)}
                >
                  <TableSortLabel
                    active={col.value === !!orderBy}
                    direction={order ? 'asc' : 'desc'}
                  >
                    {col.label}
                  </TableSortLabel>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {stakeholders &&
              stakeholders.map((stakeholder) => (
                <React.Fragment key={stakeholder.id}>
                  {/* Main stakeholder */}
                  <StakeholderDetail row={stakeholder} columns={columns} />
                  {stakeholder.children &&
                    stakeholder.children.map((child) => (
                      <StakeholderDetail
                        key={child.id}
                        row={child}
                        columns={columns}
                        child
                      />
                    ))}
                </React.Fragment>
              ))}
          </TableBody>
        </Table>
        <TablePagination
          component="div"
          rowsPerPage={rowsPerPage}
          rowsPerPageOptions={[5, 10, 20]}
          onChangeRowsPerPage={handleRowsPerPageChange}
          count={count}
          page={page}
          onChangePage={handlePageChange}
        />
      </TableContainer>
    </>
  );
}

export default StakeholderTable;
