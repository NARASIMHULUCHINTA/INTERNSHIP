const intialState = {
    count: 0,
    length: 10,
    maxcount: 100,
    changeValue: '1',
};

const counterReducer = (state = intialState, action) => {
    switch (action.type) {
        case "increment":
            return {
                ...state,
                count: state.count + parseInt(state.changeValue),
            };
        case "decrement":
            return {
                ...state,
                count: state.count - parseInt(state.changeValue),
            };
        case "changeValue":
            return {
                ...state,
                changeValue: action.payload,
            }
        default:
            return state;
    }
}

/*counterReducer({ type: 'increment' })
counterReducer({ type: 'increment' })
counterReducer({ type: 'increment' })


counterReducer({ type: 'decrement' })
counterReducer({ type: 'decrement' })*/

export default counterReducer;