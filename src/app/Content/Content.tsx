import * as React from 'react';
import {connect} from "react-redux";
import {ContentAddElement} from "./ContentActions";
import OneDumbComponent from "./OneDumbComponent/OneDumbComponent";
import ContentStyles from "./ContentStyles";

class Content extends React.Component <any, any> {
	public render() {
		return(
			<div className="content-wrapper" style={ContentStyles}>
				<OneDumbComponent data={this.props.data} />
			</div>
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