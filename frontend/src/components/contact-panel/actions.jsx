import { withStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';

const Action = withStyles({
  root: {
    boxShadow: 'none',
    textTransform: 'none',
    margin: '0 7.5px',
    padding: '7px 25px',
    borderRadius: '8px',
    fontFamily: 'CircularStd-Medium',
    fontSize: '0.75rem',
  },
})(Button);

export const Invite = withStyles({
  root: {
    backgroundColor: 'rgba(71,73,160,0.1)',
    color: '#4749A0',
  },
})(Action);

export const Cancel = withStyles({
  root: {
    backgroundColor: 'rgba(255,126,92,0.1)',
    color: '#FF7E5C',
  },
})(Action);

export const Delete = withStyles({
  root: {
    backgroundColor: 'rgba(255,76,67,0.1)',
    color: '#ff4c43',
  },
})(Action);
