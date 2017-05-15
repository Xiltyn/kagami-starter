import {createStore, applyMiddleware} from "redux";
import logger from 'redux-logger';
import {DummyData} from './dataInitializer';
// Comment in in order to use promises in reducers ::
// import promise from "redux-promise-middlewar	e";
import contentReducer from "./app/Content/ContentReducer";

const initialState = {
	data: DummyData
};

export default createStore(
	contentReducer,
	initialState,
	applyMiddleware(logger)
);
