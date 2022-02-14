const redux = require("redux");
const counterReducder = (state = { counter: 0 }, action) => {
  return {
    counter: state.counter + 1,
  };
};
const store = redux.createStore(counterReducder);
const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};
store.subscribe(counterSubscriber);
store.dispatch({ type: "increment" });
