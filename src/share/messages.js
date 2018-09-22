import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const styles = (theme) => ({
	close: {
		width: theme.spacing.unit * 4,
		height: theme.spacing.unit * 4,
	},
});

class SimpleSnackbar extends React.Component {
	state = {
		open: true
	};

	handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}
			this.setState({ open: false });
	};

	render() {
		const { classes, message } = this.props;
		return (
			<div>
				<Snackbar
					anchorOrigin={{
						vertical: 'top',
						horizontal: 'center'
					}}
					open={this.state.open}
					autoHideDuration={3000}
					onClose={this.handleClose}
					ContentProps={{
						'aria-describedby': 'message-id'
					}}
					message={<span id="message-id">{message}</span>}
					action={[
						<IconButton
							key="close"
							aria-label="Close"
							color="inherit"
							className={classes.close}
							onClick={this.handleClose}
						>
							<CloseIcon />
						</IconButton>
					]}
				/>
			</div>
		);
	}
}

SimpleSnackbar.propTypes = {
	classes: PropTypes.object.isRequired,
	message: PropTypes.string
};

export default withStyles(styles)(SimpleSnackbar);
