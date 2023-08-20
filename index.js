const count = document.getElementById("countNum");
const incrementBtn = document.getElementById("incrementBtn");
const decrementBtn = document.getElementById("decrementBtn");

//initilalize state
const initialState = {
  counter: 0,
};

//actions
const Increment = () => {
  return {
    type: "increment",
  };
};
const Decrement = () => {
  return {
    type: "decrement",
  };
};

//create Reducer
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "increment":
      return {
        counter: state.counter + 1,
      };

    case "decrement":
      return {
        counter: state.counter - 1,
      };
    default:
      return state;
  }
};

//create a Redux store

let store = Redux.createStore(counterReducer);
const render = () => {
  count.innerHTML = store.getState().counter;
};

store.subscribe(() => render());
incrementBtn.addEventListener("click", () => {
  store.dispatch(Increment());
});

decrementBtn.addEventListener("click", () => {
  store.dispatch(Decrement());
});
