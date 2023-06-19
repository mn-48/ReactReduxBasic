const redux = require('redux')

// reducer function
// eta duita perameter input ney
// object return kore

const counterReducer = (state = {counter: 0}, action) => {
    if (action.type === "increment"){
        return {
            counter: state.counter + 1, // ekhane comma dite hobe
        };
    }
    if (action.type === "decrement"){
        return {
            counter: state.counter - 1, // ekhane comma dite hobe
        };
    }

    
}

//  central store
const store = redux.createStore(counterReducer);
// console.log(store.getState());

// subscriber
// etar kono input parameter thakbe na
const counterSubscriber = () => {
    const latestState = store.getState();
    console.log(latestState)
}

store.subscribe(counterSubscriber);

// Dispatch/ Trigger eta ekta js object perameter input nibe --> type sob somoy unique hobe
store.dispatch({type: 'increment'});
store.dispatch({type: 'decrement'});