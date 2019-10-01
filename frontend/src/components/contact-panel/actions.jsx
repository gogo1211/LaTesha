import { withStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';

const ActionStyle = {
  root: {
    boxShadow: 'none',
    textTransform: 'none',
    margin: '0 7.5px',
    padding: '7px 25px',
    borderRadius: '8px',
    fontFamily: 'CircularStd-Medium',
    fontSize: '0.75rem',
  },
};

const InviteStyle = {
  root: {
    backgroundColor: 'rgba(71,73,160,0.1)',
    color: '#4749A0',
  },
};

const CancelStyle = {
  root: {
    backgroundColor: 'rgba(255,126,92,0.1)',
    color: '#FF7E5C',
  },
};

const DeleteStyle = {
  root: {
    backgroundColor: 'rgba(255,76,67,0.1)',
    color: '#ff4c43',
  },
};

const Action = withStyles(ActionStyle)(Button);
export const Invite = withStyles(InviteStyle)(Action);
export const Cancel = withStyles(CancelStyle)(Action);
export const Delete = withStyles(DeleteStyle)(Action);
