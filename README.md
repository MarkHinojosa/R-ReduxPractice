This is a simple implementation example of React-Redux

### Download Packages

`yarn`

### Run with

`npm start`

#### Notes:

1. Create directories:
   `src/redux/actions`
   `src/redux/reducers`

2. Create a new file for each reducer ex:
   `src/redux/reducers/loggedReducer.js`

3. Place appropiate switch cases:

   ```
   const loggedReducer = (state = false, action) => {
   switch (action.type) {
   case "SIGN_IN":
   return !state;

           default:
             return state;
             }

   };
   export default loggedReducer
   ```

4. Create index.js in the reducers folder and use "combineReducers":

````
 import { combineReducers } from "redux";
 import counter from "./counter.js.js";
 import logged from "./loggedReducer";

const rootReducer = combineReducers({ counter, logged });
export default rootReducer; ```
````

5. Create index.js in actions folder and insert appropriate constants:

````export const increment = () => {
  return { type: "INCREMENT" };
};

export const decrement = () => {
  return { type: "DECREMENT" };
}; ```
````

6. In App.js:

- import useSelector for access to store, and useDispatch to dispatch functions/actions in redux:

  `import { useSelector, useDispatch } from "react-redux";`

- import actions

  `import { increment, decrement } from "./redux/actions";`

- prepare redux methods to be able to be used

  `const counter = useSelector(state => state.counter);`

  `const dispatch = useDispatch();`

- use variables in jsx

  `<div>Counter {counter}</div>`

  `<button onClick={() => dispatch(increment())}>+</button>`

**\* NEED TO ADD INDEX.JS SECTION\*\***
