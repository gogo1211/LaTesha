import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import Container from '@material-ui/core/Container';
import { Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Popover from '@material-ui/core/Popover';
import InputBase from '@material-ui/core/InputBase';

import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Close';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';

import { InfoTabs, TabPanel } from './tabs';

const styles = {
  panel: {
    width: '480px',
    height: '100%',
    textAlign: 'center',
    // backgroundImage: 'url("./image/1.png")',
    backgroundSize: 'cover',
    overflow: 'hidden',
    // opacity: 0.7,
  },
  avatar: {
    margin: '20px auto 0',
    width: '90px',
    height: '90px',
    color: 'white',
    backgroundColor: '#7f88b2',
    borderRadius: '30px',
    fontSize: '2.5em',
  },
  name: {
    margin: '12px 0 7px',
    color: '#292e5d',
  },
  actionContainer: {
    marginTop: 50,
    marginBottom: 25,
  },
  infoContainer: {
    padding: '25px 20px',
    backgroundColor: '#f5f6fa',
    height: '100%',
  },
};

const Tag = withStyles({
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

const AddTag = withStyles({
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

const Action1 = withStyles({
  root: {
    backgroundColor: '#ececf4',
    color: '#444ea5',
  },
})(Action);

const Action2 = withStyles({
  root: {
    backgroundColor: '#faeae8',
    color: '#f07760',
  },
})(Action);

const Action3 = withStyles({
  root: {
    backgroundColor: '#faeae8',
    color: '#ef3a39',
  },
})(Action);

const InfoItem = withStyles({
  box: {
    textAlign: 'left',
    padding: '0 0 10px 4px',
  },
  subtitle2: {
    textTransform: 'uppercase',
    color: '#aeb6c5',
  },
  h6: {
    color: '#292e5d',
  },
  div: {
    display: 'flex',
    alignItems: 'center',
  },
})(({ classes, data: { title, value, icon } }) => (
  <Box className={classes.box}>
    <Typography className={classes.subtitle2} variant="subtitle2">
      { title }
    </Typography>
    <Typography className={classes.div} variant="div">
      { icon }
      <Typography className={classes.h6} variant="h6">
        { value }
      </Typography>
    </Typography>
  </Box>
));

const AddInput = withStyles({
  root: {
    backgroundColor: '#f5f6fa',
    borderRadius: 15,
    padding: '5px 10px',
  },
  input: {
    padding: 0,
    '&::placeholder': {
      color: '#9fa2bd',
      opacity: 1,
    },
    '&:-ms-input-placeholder': {
      color: '#9fa2bd',
    },
    '&::-ms-input-placeholder': {
      color: '#9fa2bd',
    },
  },
})(InputBase);

const AddTagPopover = withStyles({
  paper: {
    marginTop: 10,
    padding: 10,
    borderRadius: 10,
    overflow: 'visible',
    transform: 'translate(10px, 0) !important',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: '-20px',
      right: 10,
      borderBottom: '10px solid white',
      borderRight: '10px solid transparent',
      borderLeft: '10px solid transparent',
      borderTop: '10px solid transparent',
      zIndex: 10,
    },
  },
})(Popover);

const getAvatarName = (name) => {
  if (!name) {
    return '?';
  }
  const nameSplit = name.toUpperCase().split(' ');
  if (nameSplit.length === 1) {
    return nameSplit[0] ? nameSplit[0].charAt(0) : '?';
  }
  return nameSplit[0].charAt(0) + nameSplit[1].charAt(0);
};

const ContactPanel = ({ classes, item }) => {
  const [index, setIndex] = useState(0);
  const [popover, setPopover] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  return (
    <div className={classes.panel}>
      <Avatar className={classes.avatar}>{getAvatarName(item.name)}</Avatar>
      <Typography className={classes.name} variant="h6">
        { item.name }
      </Typography>
      <Container>
        <Tag variant="outlined" deleteIcon={<CloseIcon />} label="HOST" onDelete={() => console.log('close')} />
        <Tag variant="outlined" deleteIcon={<CloseIcon />} label="ADMIN" onDelete={() => console.log('close')} />
        <Tag variant="outlined" deleteIcon={<CloseIcon />} label="TAG 3" onDelete={() => console.log('close')} />
        <AddTag
          variant="outlined"
          deleteIcon={<AddIcon />}
          onDelete={(event) => {
            setAnchorEl(event.currentTarget);
            setPopover(true);
          }}
        />
      </Container>
      <Container className={classes.actionContainer}>
        <Action1 variant="contained">Invite</Action1>
        <Action2 variant="contained">Cancel</Action2>
        <Action3 variant="contained">Delete</Action3>
      </Container>
      <Container className={classes.infoContainer}>
        <InfoTabs
          style={{ alignSelf: 'flex-end' }}
          tabs={[
            { label: 'Main Info' },
            { label: 'History' },
            { label: 'Messages 2' },
          ]}
          tabStyle={{
            bgColor: '#f5f6fa',
            selectedBgColor: '#ffffff',
            color: 'rgba(0,0,0,0.87)',
          }}
          tabProps={{
            disableRipple: true,
          }}
          value={index}
          onChange={(e, i) => setIndex(i)}
        />
        <TabPanel value={index} index={0}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <InfoItem data={{ title: 'Phone', value: '+1 073 2714 007' }} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InfoItem data={{ title: 'IP Address', value: '12312319391023091' }} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InfoItem data={{ title: 'Country', value: 'USA', icon: <EmojiEmotionsIcon /> }} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InfoItem data={{ title: 'Time on webinar', value: '1hr' }} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InfoItem data={{ title: 'LTV', value: '$50' }} />
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={index} index={1}>
          History Panel
        </TabPanel>
        <TabPanel value={index} index={2}>
          Message Panel
        </TabPanel>
      </Container>
      <AddTagPopover
        open={popover}
        anchorEl={anchorEl}
        className={classes.popover}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        onClose={() => {
          setAnchorEl(null);
          setPopover(false);
        }}
      >
        <AddInput
          className={classes.margin}
          placeholder="Type tag"
          inputProps={{ 'aria-label': 'naked' }}
        />
      </AddTagPopover>
    </div>
  );
};

ContactPanel.propTypes = {
  classes: PropTypes.object.isRequired,
  item: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContactPanel);
