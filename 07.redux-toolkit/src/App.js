import React from 'react';
import {createStore} from 'redux';
import {Provider, useDispatch, useSelector} from 'react-redux';

import logo from './logo.svg';
import './App.css';
import store from './store';
import counterSlice from './counterSlice';
import {up} from './counterSlice';



// function reducer(state, action){
//   if(action.type === 'up'){
//     return {...state, value: state.value + action.step}
//   }
//   return state;
// }
// const initialState = {value: 0};
// const store = createStore(reducer, initialState);

// createStore(reducer);

function Counter(){
  const dispatch = useDispatch();
  const count = useSelector((state) => {
    // console.log(state);
    return state.counter.value
  });
  return(
    <div>
      <button onClick={() => {
        // dispatch({type: 'counterSlice/up', step: 2});
        dispatch(up(2));
      }}>+</button> {count}
    </div>
  )
}

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Counter />
      </div>
    </Provider>
  );
}

export default App;
