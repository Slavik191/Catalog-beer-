import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import './Progress.sass';

const styles = theme => ({
    progress: {
        margin: theme.spacing.unit * 2,
    },
});

function Progress(props) {
    const { classes } = props;
    return (
        <div className = 'progress'>
            <CircularProgress className={classes.progress} size={50} />            
        </div>
    );
}

Progress.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Progress);