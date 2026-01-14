1. What is JSX, and why is it used?
Ans: JSX is a syntax extension for JavaScript that looks like HTML. It is used in React to describe the UI structure in a readable way and is converted into React elements.

2. What is the difference between State and Props?

State: Component’s internal, mutable data; can change over time; local to the component.

Props: Data passed from parent to child; immutable by the child; used for configuration.

3. What is the useState hook, and how does it work?
Ans: useState is a React Hook that allows functional components to have state. It returns the current state and a function to update it, causing the component to re-render on change.

4. How can you share state between components in React?
Ans: State can be shared by lifting it up to the nearest common parent and passing it via props, using the Context API, or using state management libraries like Redux.

5. How is event handling done in React?
Ans: React events are handled using camelCase attributes. Functions are passed as handlers, and the component re-renders when state changes inside the event handler.