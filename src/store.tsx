import {createStore, applyMiddleware, compose} from "redux";
import logger from 'redux-logger';
import {DummyData} from './dataInitializer';
// Comment in in order to use promises in reducers ::
// import promise from "redux-promise-middlewar	e";
import contentReducer from "./app/Content/ContentReducer";

const initialState = {
	data: DummyData
};

const middleware = [
	logger
];

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
	contentReducer,
	initialState,
	composeEnhancers(
		applyMiddleware(...middleware)
	)
);




