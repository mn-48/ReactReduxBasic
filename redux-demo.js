const redux = require('redux')

// reducer function
// eta duita perameter input ney
// object return kore

const counterReducer = (state = {counter: 0}, action) => {

    return {
        counter: state.counter + 1
    }
}

//  central store
const store = redux.createStore(counterReducer);


// subscriber
// etar kono input parameter thakbe na
const counterSubscriber = () => {
    const latestState = store.getState();
    console.log(latestState)
}

store.subscribe(counterSubscriber)

// Dispatch/ Trigger --> type sob somoy unique hobe
store.dispatch({type: 'increment'});