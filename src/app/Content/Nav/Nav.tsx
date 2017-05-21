import * as React from 'react';
import {NavLink} from 'react-router-dom';

export default class Nav extends React.Component<any, any> {
	public render() {
		return (
			<nav className="nav">
				<NavLink activeClassName='active' to={this.props.devPath + "/"}>
					<h2>
						Główna
					</h2>
				</NavLink>
				<NavLink activeClassName='active' to={this.props.devPath + "/wypozyczalnia"}>
					<h2>
						Wypożyczalnia
					</h2>
				</NavLink>
				<NavLink activeClassName='active' to={this.props.devPath + "/realizacje"}>
					<h2>
						Realizacje
					</h2>
				</NavLink>
				<NavLink activeClassName='active' to={this.props.devPath + "/kontakt"}>
					<h2>
						Kontakt
					</h2>
				</NavLink>
			</nav>
		);
	};
};