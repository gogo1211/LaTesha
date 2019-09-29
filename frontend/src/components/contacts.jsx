import React from 'react';
import { withStyles } from '@material-ui/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Drawer from '@material-ui/core/Drawer';
import Avatar from '@material-ui/core/Avatar';

const columns = [
  { id: 'name', label: 'Name', minWidth: 200 },
  { id: 'email', label: 'Email', minWidth: 100 },
];

const rows = [
  { name: 'Ryder King', email: 'ryder.king@fsstudio.com' },
  { name: 'Daniel Havelka', email: 'daniel707@yahoo.com' },
  { name: 'Budai Benedek', email: 'budai.sport@gmail.com' },
  { name: 'Ingvar Kristmundsson', email: 'webdev677@hotmail.com' },
  { name: 'Gobind Dayal', email: 'gobind@ainsoft.com' },
];

const styles = {
  root: {
    margin: '30px',
    padding: '10px',
  },
  tableWrapper: {
    maxHeight: 407,
    overflow: 'auto',
  },
  drawer: {
    width: '400px',
  },
  avatar: {
    margin: '10px',
    color: 'white',
    backgroundColor: 'darkorange',
  },
};

class Contacts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      rowsPerPage: 10,
      open: false,
      selectedItem: null,
    };
  }

  handleChangePage = (event, newPage) => {
    this.setState({ page: newPage });
  };

  handleChangeRowsPerPage = event => this.setState({
    rowsPerPage: +event.target.value,
    page: 0,
  });

  selectContact = item => this.setState({
    selectedItem: item,
    open: true,
  });

  getAvatarName = (name) => {
    if (!name) {
      return '?';
    }
    const nameSplit = name.toUpperCase().split(' ')
    if (nameSplit.length === 1) {
      return nameSplit[0] ? nameSplit[0].charAt(0) : '?';
    }
    return nameSplit[0].charAt(0) + nameSplit[1].charAt(0);
  }

  render() {
    const { classes } = this.props;
    const { page, rowsPerPage, open, selectedItem } = this.state;

    return (
      <React.Fragment>
      <Paper className={classes.root}>
        <div className={classes.tableWrapper}>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                {columns.map(column => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code} onClick={() => this.setState({ open: true })}>
                    {columns.map(column => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number' ? column.format(value) : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          backIconButtonProps={{
            'aria-label': 'previous page',
          }}
          nextIconButtonProps={{
            'aria-label': 'next page',
          }}
          onChangePage={this.handleChangePage}
          onChangeRowsPerPage={this.handleChangeRowsPerPage}
        />
      </Paper>
      <Drawer anchor="right" open={open} onClose={() => this.setState({ open: false })}>
        <div className={classes.drawer}>
          <Avatar className={classes.avatar}>NA</Avatar>
        </div>
      </Drawer>
      </React.Fragment>
    );
  }
};

export default withStyles(styles)(Contacts);
