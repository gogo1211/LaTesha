import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Drawer from '@material-ui/core/Drawer';

import ContactPanel from './contact-panel';
import Loader from './loader';

const columns = [
  { id: 'name', label: 'Name', minWidth: 50 },
  { id: 'email', label: 'Email', minWidth: 100 },
];

const styles = {
  root: {
    textAlign: 'center',
    margin: '30px',
    padding: '10px',
  },
  tableWrapper: {
    maxHeight: 407,
    overflow: 'auto',
  },
  drawer: {
    width: '25vw',
    minWidth: '300px',
    textAlign: 'center',
  },
};

class Contacts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      rowsPerPage: 10,
      open: false,
      selectedItem: {},
    };
  }

  componentDidMount() {
    const { fetchContacts } = this.props;
    fetchContacts();
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

  render() {
    const { classes, loading, contacts } = this.props;
    const {
      page, rowsPerPage, open, selectedItem,
    } = this.state;

    if (loading) {
      return (
        <div className={classes.root}>
          <Loader loading={loading} />
        </div>
      );
    }

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
                {
                  contacts.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.id} onClick={() => this.selectContact(row)}>
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === 'number' ? column.format(value) : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  ))
                }
              </TableBody>
            </Table>
          </div>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={contacts.length}
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
          <ContactPanel item={selectedItem} />
        </Drawer>
      </React.Fragment>
    );
  }
}

Contacts.propTypes = {
  classes: PropTypes.object,
  contacts: PropTypes.array,
  fetchContacts: PropTypes.func.isRequired,
  loading: PropTypes.bool,
};

export default withStyles(styles)(Contacts);
