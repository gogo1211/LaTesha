import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  Avatar,
  Box,
  Container,
  Grid,
  InputBase,
  Typography,
  Popover,
} from '@material-ui/core';

import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Close';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';

import { Tag, AddTag } from './tags';
import { Invite, Cancel, Delete } from './actions';
import { InfoTabs, TabPanel } from './tabs';

const styles = {
  panel: {
    width: '350px',
    height: '100%',
    textAlign: 'center',
    backgroundSize: 'cover',
    overflow: 'hidden',
  },
  avatar: {
    margin: '14px auto 0',
    width: '65px',
    height: '65px',
    color: 'white',
    backgroundColor: '#7f88b2',
    borderRadius: '20px',
    fontSize: '1.75em',
  },
  name: {
    margin: '11px 0 10px',
    fontFamily: 'CircularStd-Medium',
    fontSize: '1rem',
    color: '#272c5e',
  },
  email: {
    fontFamily: 'CircularStd-Book',
    fontSize: '0.875rem',
    color: '#272C5E',
    margin: '10px 0',
  },
  actionContainer: {
    marginBottom: 15,
  },
  infoContainer: {
    padding: '15px 20px',
    backgroundColor: '#F5F6FA',
    height: '100%',
  },
};

const InfoItem = withStyles({
  box: {
    textAlign: 'left',
    padding: '0 0 10px 4px',
  },
  subtitle2: {
    fontFamily: 'CircularStd-Medium',
    fontSize: '0.625rem',
    textTransform: 'uppercase',
    color: '#ACB5C3',
  },
  h6: {
    fontFamily: 'CircularStd-Book',
    fontSize: '0.875rem',
    color: '#272C5E',
  },
  div: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '3px',
  },
})(({ classes, data: { title, value, icon } }) => (
  <Box className={classes.box}>
    <Typography className={classes.subtitle2} variant="subtitle2">
      { title }
    </Typography>
    <Box className={classes.div}>
      { icon }
      <Typography className={classes.h6} variant="h6">
        { value }
      </Typography>
    </Box>
  </Box>
));

const AddInput = withStyles({
  root: {
    backgroundColor: '#F5F6FA',
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
      <Typography className={classes.email} variant="h6">
        { item.email }
      </Typography>
      <Box className={classes.actionContainer}>
        <Invite variant="contained">Invite</Invite>
        <Cancel variant="contained">Cancel</Cancel>
        <Delete variant="contained">Delete</Delete>
      </Box>
      <Box className={classes.infoContainer}>
        <InfoTabs
          style={{ alignSelf: 'flex-end' }}
          tabs={[
            { label: 'Main Info' },
            { label: 'History' },
            { label: 'Messages 2' },
          ]}
          tabStyle={{
            bgColor: '#F5F6FA',
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
      </Box>
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
