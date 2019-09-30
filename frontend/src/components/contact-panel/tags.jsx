import { withStyles } from '@material-ui/styles';
import Chip from '@material-ui/core/Chip';

export const Tag = withStyles({
  root: {
    border: '1px solid #ececf4',
    borderRadius: 10,
    color: '#444ea5',
    margin: 5,
  },
  deletable: {
    '&:focus': {
      backgroundColor: 'white !important',
    },
  },
  deleteIcon: {
    fontSize: '0.7rem',
    color: '#ef3a39',
  },
})(Chip);

export const AddTag = withStyles({
  root: {
    width: 32,
  },
  label: {
    paddingLeft: 0,
  },
  deleteIcon: {
    fontSize: '1.5rem',
    color: '#f07760',
  },
})(Tag);
