import * as React from 'react';
import {connect} from "react-redux";


export default class OneDumbComponent extends React.Component <any, any> {
	public render() {
		console.log( this.props.data );

		return(
			<p>
				Kagami React-Redux boilerplate for Front-End development
			</p>
		)
	}
}

