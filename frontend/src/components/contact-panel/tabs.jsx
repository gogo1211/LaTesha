import React from 'react';
import PropTypes from 'prop-types';
import Color from 'color';
import { makeStyles } from '@material-ui/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const a11yProps = index => ({
  id: `full-width-tab-${index}`,
  'aria-controls': `full-width-tabpanel-${index}`,
});

const useTabsStyles = makeStyles(() => ({
  indicator: {
    display: 'none',
  },
}));

const useTabStyles = makeStyles(() => {
  return {
    root: ({ bgColor }) => ({
      opacity: 1,
      overflow: 'initial',
      padding: '10px 15px',
      borderTopLeftRadius: 8,
      borderTopRightRadius: 8,
      color: '#ACB5C3',
      backgroundColor: bgColor,
      transition: '0.2s',
      minWidth: 72,
      '&:before': {
        transition: '0.2s',
      },
      '& + $selected:before': {
        opacity: 0,
      },
      '&:hover': {
        '&:not($selected)': {
          backgroundColor: Color(bgColor)
            .whiten(0.6)
            .hex(),
        },
        '&::before': {
          opacity: 0,
        },
        '& + $root:before': {
          opacity: 0,
        },
      },
    }),
    selected: ({ selectedBgColor }) => ({
      backgroundColor: selectedBgColor,
      color: '#272C5E',
      '& + $root': {
        zIndex: 1,
      },
      '& + $root:before': {
        opacity: 0,
      },
    }),
    wrapper: {
      zIndex: 2,
      fontFamily: 'CircularStd-Medium',
      textTransform: 'initial',
      fontSize: '0.875rem',
    },
  };
});

export const InfoTabs = ({
  tabs, tabStyle, tabProps, ...props
}) => {
  const tabsClasses = useTabsStyles(props);
  const tabClasses = useTabStyles({ ...tabProps, ...tabStyle });
  return (
    <Tabs {...props} classes={tabsClasses}>
      {tabs.map((tab, index) => (
        <Tab key={tab.label} {...tabProps} {...tab} classes={tabClasses} {...a11yProps(index)} />
      ))}
    </Tabs>
  );
};

InfoTabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.node.isRequired,
    }),
  ),
  tabStyle: PropTypes.shape({
    bgColor: PropTypes.string,
    minWidth: PropTypes.shape({}),
  }),
  tabProps: PropTypes.shape({}),
};
InfoTabs.defaultProps = {
  tabs: [],
  tabStyle: {},
  tabProps: {},
};

export const TabPanel = (props) => {
  const {
    children, value, index, ...other
  } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
      style={{ backgroundColor: 'white' }}
    >
      <Box p={1}>{children}</Box>
    </Typography>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};
