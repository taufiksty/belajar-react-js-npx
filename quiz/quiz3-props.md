1. What do props help us accomplish?
  Ans: Props help us to make a component code simpler and reusable, because it using an objects we can call.

2. How do you pass a prop into your component?
  Ans: We can pass a prop as we write jsx as usual, but if a prop not an attribute of element it can be necessary. Example:
  ```
  <MyImage img="???" />
  <MyTitle title="???" />
  ```

3. Can I pass a custom prop (e.g. `blahblablah={true}`) to a native DOM element? (e.g. <div blahblahblah={true}>) Why or why not?
  Ans: Its can't. Because the JSX we use to describe native DOM elements will be turned into REAL DOM elements by React. And real DOM elements only have the properties/attributes specified in the HTML specification. (Which doesn't include properties like `blahblahblah`)

4. How do I receive props in a component?
```
function Navbar(props) {
  console.log(props.property);
  return (
    <header>
      ...
    </header>
  );
}
```
  Ans: By adding arguments on Navbar function like `props` and then using an object call like {props.property}

5. What data type is `props` when the component receives it?
  Ans: An object.