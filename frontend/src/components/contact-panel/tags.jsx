import { withStyles } from '@material-ui/styles';
import Chip from '@material-ui/core/Chip';

const tagStyle = {
  root: {
    height: 21,
    border: '1px solid #ececf4',
    borderRadius: 6,
    color: '#444ea5',
    margin: '0 2.5px',
  },
  label: {
    fontSize: '0.625rem',
  },
  deletable: {
    '&:focus': {
      backgroundColor: 'white !important',
    },
  },
  deleteIcon: {
    fontSize: '0.625rem',
    color: '#FF7E5C',
  },
};

const addTagStyle = {
  root: {
    width: 21,
  },
  label: {
    paddingLeft: 0,
  },
  deleteIcon: {
    fontSize: '1rem',
    color: '#f07760',
  },
};

export const Tag = withStyles(tagStyle)(Chip);
export const AddTag = withStyles(addTagStyle)(Tag);
