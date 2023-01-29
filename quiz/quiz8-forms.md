1. In a vanilla JS app, at what point in the form submission process do you gather all the data from the filled-out form?
  Ans: Right before the form is submitted.

2. In a React app, when do you gather all the data from the filled-out form?
  Ans: As the form is being filled out. The data is all held in the local state.

3. Which attribute in the form elements (value, name, onChange, etc.) should match the property name being held in state for that input?
  Ans: Name property.

4. What's different about a saving the data from a checkbox element vs. other form elements?
  Ans: The different is other types save a value, therefore checkbox save an attribute checked which is a boolean.

5. How do you watch for a form submit? How can you trigger a form submit?
  Ans: With an onSubmit handler on the form element. And you can click that button to trigger.