import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
	margin: {
		margin: theme.spacing.unit
	},
	cssRoot: {
		backgroundColor: '#16a085',
		'&:hover': {
			backgroundColor: '#ff5722'
		}
	}
});
class SimpleMenu extends React.Component {
	state = {
		anchorEl: null,
	};

	handleClick = (event) => {
		this.setState({ anchorEl: event.currentTarget });
	};

	handleClose = (option) => {
		this.setState({ anchorEl: null });
		if (typeof option !== 'object') this.props.optionHandle(option);
	};

	render() {
		const { options, classes } = this.props;

		return (
			<div>
				<Button
					aria-owns={this.state.anchorEl ? 'simple-menu' : null}
					onClick={this.handleClick}
					variant="contained"
					color="primary"
					className={classNames(classes.margin, classes.cssRoot)}
				>
					Menu
				</Button>
				<Menu
					id="simple-menu"
					anchorEl={this.state.anchorEl}
					open={Boolean(this.state.anchorEl)}
					onClose={this.handleClose}
				>
					{options.map((option) => (
						<MenuItem key={option} onClick={this.handleClose.bind(this, option)}>
							{option}
						</MenuItem>
					))}
				</Menu>
			</div>
		);
	}
}

SimpleMenu.propTypes = {
	classes: PropTypes.object.isRequired,
	options: PropTypes.array,
	optionHandle: PropTypes.func
};

export default withStyles(styles)(SimpleMenu);
