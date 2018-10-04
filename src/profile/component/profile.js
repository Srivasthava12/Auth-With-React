import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './stylesForProfile.css';
import { selectUserInfo } from '../../user/selector';
import Menu from '../../share/simpleMenu';
import { optionHandle } from '../helper';

export class Profile extends React.Component {
	options = [ 'Profile', 'ChangePassword', 'Log Out' ];
	render() {
		const { userInfo } = this.props;
		return (
			<div>
				<aside className="profile-card">
					<header>
						<h1>{userInfo.name}</h1>

						<h2>{userInfo.email}</h2>
					</header>

					<div className="profile-bio">
						<p>
							The world isn't perfect. But it's there for us, doing the best it can....that's what makes
							it so damn beautiful.
						</p>
						<Menu options={this.options} optionHandle={optionHandle} />
					</div>
				</aside>
			</div>
		);
	}
}

Profile.propTypes = {
	userInfo: PropTypes.object
};

const mapStateToProps = (state) => ({
	userInfo: selectUserInfo(state)
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
