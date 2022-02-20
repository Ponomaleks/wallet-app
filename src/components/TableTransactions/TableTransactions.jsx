import React from 'react';
import PropTypes from 'prop-types';
// import { styled } from '@mui/material/styles';
import { makeStyles } from '@material-ui/core/styles';
import {
  Checkbox,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
} from '@material-ui/core';

import DeleteIcon from '@material-ui/icons/Delete';
import formatNumber from '../../service/formatNumber';
// import MocData from '../../devData.json';
import './TableTransactions.module.css';

function createData(
  date,
  typeTransaction,
  name,
  commentary,
  amountTransaction,
  balance,
) {
  return {
    date,
    typeTransaction,
    name,
    commentary,
    amountTransaction,
    balance,
  };
}
// const data = MocData.map(arr => {
//   const a = new Object(arr);
//   return a;
// });
// const data = JSON.parse(MocData);

// console.log(data);

// const rows = [
//   createData(
//     data.date,
//     data.typeTransaction,
//     data.name,
//     data.commentary,
//     data.amountTransaction,
//     data.balance
//   ),
// ];

const rows = [
  createData('22.01.01', '+', 'personal', 'pers', 10000.0, 23000.0),
  createData('22.01.02', '-', 'food', 'ice cream', 1000.0, 22000.0),
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
}

const headCells = [
  {
    id: 'date',
    date: true,
    disablePadding: true,
    label: 'Date',
  },
  {
    id: 'typeTransaction',
    numeric: false,
    disablePadding: false,
    label: 'Type',
  },
  {
    id: 'name',
    numeric: false,
    disablePadding: false,
    label: 'Category',
  },
  {
    id: 'commentary',
    numeric: false,
    disablePadding: false,
    label: 'Commentary',
  },
  {
    id: 'amountTransaction',
    numeric: true,
    disablePadding: false,
    label: 'Sum',
  },
  {
    id: 'balance',
    numeric: true,
    disablePadding: false,
    label: 'Balance',
  },
  // { id: 'calories', numeric: true, disablePadding: false, label: 'Calories' },
  // { id: 'fat', numeric: true, disablePadding: false, label: 'Fat (g)' },
  // { id: 'carbs', numeric: true, disablePadding: false, label: 'Carbs (g)' },
  // { id: 'protein', numeric: true, disablePadding: false, label: 'Protein (g)' },
];

function EnhancedTableHead(props) {
  const {
    classes,
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler = property => event => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ 'aria-label': 'select all desserts' }}
          />
        </TableCell>
        {headCells.map(headCell => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const useStyles = makeStyles(theme => ({
  root: {
    width: '700px',
    '& > *': {
      margin: theme.spacing(1),
    },
    fontFamily: 'Circe-Regular',
    fontSize: '16px',
    lineHeight: 1.473,
    textTransform: 'none',
    [theme.breakpoints.down(1280)]: {
      width: '688px',
    },
  },
  paper: {
    width: '100%',
    borderRadius: '30px',
  },
  table: {
    width: '688px',
    '&:first-child td': {
      paddingLeft: '4px',
      // border: 0,
      // fontSize: '18px',
      // fontFamily: 'Circe Bold',
    },
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
  greenText: {
    fontWeight: 700,
    color: '#24cca7',
  },
  redText: {
    fontWeight: 700,
    color: '#FF6596',
  },
}));

const TableTransactions = () => {
  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('date');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = event => {
    if (event.target.checked) {
      const newSelecteds = rows.map(n => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // const handleChangeDense = event => {
  //   setDense(event.target.checked);
  // };

  const isSelected = name => selected.indexOf(name) !== -1;

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
            aria-label="enhanced table"
          >
            <EnhancedTableHead
              classes={classes}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />

            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.name);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={event => handleClick(event, row.name)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.name}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <IconButton aria-label="delete">
                          <DeleteIcon />
                        </IconButton>
                      </TableCell>
                      <TableCell align="right">{row.date}</TableCell>
                      <TableCell align="center">
                        {row.typeTransaction}
                      </TableCell>
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                      >
                        {row.name}
                      </TableCell>
                      <TableCell>{row.commentary}</TableCell>
                      <TableCell
                        align="right"
                        className={
                          row.typeTransaction === '+'
                            ? classes.greenText + ' ' + classes.value
                            : classes.redText + ' ' + classes.value
                        }
                      >
                        {' '}
                        {formatNumber(row.amountTransaction, {
                          precision: 2,
                          thousand: ' ',
                        })}
                      </TableCell>
                      <TableCell align="center">
                        {formatNumber(row.balance, {
                          precision: 2,
                          thousand: ' ',
                        })}
                      </TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                  <TableCell colSpan={7} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
};

export { TableTransactions };
