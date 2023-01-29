1. What is a "side effect" in React? What are some examples?
  Ans: Any code that affects an outside system. Ex. When call an API, local storage, websockets, two states to keep in sync.

2. What is NOT a "side effect" in React? Examples?
  Ans: Anything that React is in charge of. Ex. Maintaining state, keeping the UI in sync with the data, render DOM elements.

3. When does React run your useEffect function? When does it NOT run the effect function?
  Ans: After rendering jsx. When the second parameter of use Effect compared with actual loop.

4. How would you explain what the "dependecies array" is?
  Ans: It is an array who controlled useEffect to run the function hook.