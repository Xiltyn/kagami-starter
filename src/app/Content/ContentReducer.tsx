const contentReducer = (state, action) => {
	switch (action.type) {
		// Exemplary action Type which changes categoryId of the first NewTodoPrototype to categoryId passed inside
		// corresponding action
		case "ACTION_TYPE_NAME":
			state = {
				...state,
				NewTodoPrototype: state.NewTodoPrototype.map(prototype => prototype.id === '0' ?
					{
						...prototype,
						categoryId: action.categoryId,
						currentStep: action.currentStep
					} :
					prototype
				)
			};
			break;
	}
	return state;
};

export default contentReducer;