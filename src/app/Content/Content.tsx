import * as React from 'react';
import {connect} from "react-redux";
import {ContentAddElement} from "./ContentActions";
import ContentStyles from "./ContentStyles";
import {BrowserRouter as Router, Route, IndexRoute} from 'react-router-dom';
import Nav from "./Nav/Nav";
import Rental from "./Rental/Rental";
import Contact from "./Contact/Contact";
import Portfolio from "./Portfolio/Portfolio";
import Home from "./Home/Home";

class Content extends React.Component <any, any> {
	public render() {
		// set to FALSE before running $npm build
		let isInDevelopment:boolean = true;
		let devPath = !isInDevelopment ? '' : '/dev';
		console.log(devPath)
		return (
			<Router>
				<div className="content-wrapper" style={ContentStyles}>
					<Nav devPath={devPath}/>
					<Route exact path={devPath + "/"} render={() =>
						<Home data={this.props.data}/>
					}/>
					<Route path={devPath + "/wypozyczalnia"} component={Rental}/>
					<Route path={devPath + "/realizacje"} component={Portfolio}/>
					<Route path={devPath + "/kontakt"} component={Contact}/>
				</div>
			</Router>
		)
	}
}
const mapStateToProps = (state) => {
	return {
		data: state.data
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		ContentAddElement: (newItem) => {
			dispatch(ContentAddElement(newItem));
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Content);