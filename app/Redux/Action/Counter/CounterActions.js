/*const incrementvalueAction = () => {
    return { type: "increment" };
}

const decrementvalueAction = () => {
    return { type: "decrement" };
}*/

const incrementdecrementvalueAction = (actionType) => {
    /*if (actionType === 'increment') {
        return {
            type: "increment"
        }
    }
    else if (actionType === 'decrement') {
        return {
            type: "decrement"
        }
    }*/

    switch (actionType) {
        case "increment":
            return {
                type: "increment"
            }
        case "decrement":
            return {
                type: "decrement"
            }
    }
}

const setCustomvalueAction = (text) => {
    return { type: "changeValue", payload: text };
}

export {
    //incrementvalueAction,
    //decrementvalueAction,
    setCustomvalueAction,
    incrementdecrementvalueAction,
}