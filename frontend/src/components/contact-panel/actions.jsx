import { withStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';

const Action = withStyles({
  root: {
    boxShadow: 'none',
    textTransform: 'none',
    margin: '0 10px',
    padding: '8px 35px',
    borderRadius: '10px',
    fontSize: '1rem',
  },
})(Button);

export const Invite = withStyles({
  root: {
    backgroundColor: '#ececf4',
    color: '#444ea5',
  },
})(Action);

export const Cancel = withStyles({
  root: {
    backgroundColor: '#faeae8',
    color: '#f07760',
  },
})(Action);

export const Delete = withStyles({
  root: {
    backgroundColor: '#faeae8',
    color: '#ef3a39',
  },
})(Action);
