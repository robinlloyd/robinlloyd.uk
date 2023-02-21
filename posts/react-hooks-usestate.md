---
title: "React Hooks - useState"
subtitle: "Part 2: The useState Hook"
date: "2023-02-17"
tags: ["react", "hooks", "javascript", "useState"]
series: { name: "React Hooks - A Deep Dive", slug: "react-hooks-deep-dive" }
previewImage: "/images/react-hooks-usestate.jpg"
---

## Other posts in this series

- [React Hooks - A Deep Dive](/posts/deep-dive-into-react-hooks)
- [React Hooks - useState](/posts/react-hooks-usestate)

`useState` is one of the most important and used hooks in React. At a high level, it allows you to use state in functional components.

This piece of code is doing a few things at once, so let's break it down. The `useState` function is setting an initial state to be used as the default value. In this case, this means that before a user interacts with the page, the `status` variable value will be set to *"awaiting submission"*.

The `useState` function returns an array with two values `[status, setStatus]`. The first variable holds the value of the state, and the second variable is a function that can be used to update the state. The second variable is used to update the state, which will update the value of the first variable.

These can be named whatever you like, although it's common to give the first variable a name that makes sense for the data it's holding, and the second variable typically starts with `set` followed by the name of the first variable. So in this case we end up with `status` and `setStatus`.

To use multiple states, you can call `useState` multiple times, and you'd name the variables accordingly.

```jsx
const [status, setStatus] = useState('awaiting submission')
const [name, setName] = useState('John Smith')
```

## Good examples of when to use useState

- When you need to add state to a functional component
- When you want to update the UI in response to user actions
- When you want to update the state in response to API responses or other external events
- When you want to pass state down to child components via props.

## Bad examples of when to use useState

- When you have deeply nested state that is hard to manage
- When you have a large state object that is difficult

## A commmon gotcha

```jsx
import React, { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount(count + 1)
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  )
}
```

In this example, we use useState to add a count state value to our component. We initialize count to 0 and provide that as the initial state value to useState. We then use setCount to update the count value when the user clicks on the button.

While this code works in most cases, it can lead to issues if we want to update the state based on its current value. For example, if we want to increment the counter by two instead of one, we might try to do something like this:

```jsx
const handleClick = () => {
  setCount(count + 1)
  setCount(count + 1)
}
```

However, this code will not work as expected, because the setCount function does not update the state immediately. Instead, it schedules an update to the state and merges it with any pending updates. In this case, the second call to setCount will use the old value of count, which will be 0, and the counter will only be incremented once.

To avoid this issue, we can use a callback function in the setCount method that receives the current state value as a parameter and returns the new state value based on it. This ensures that we always use the most up-to-date state value.

Here's an example of using a callback function to increment the counter by two:

```jsx
const handleClick = () => {
  setCount((prevCount) => prevCount + 1)
  setCount((prevCount) => prevCount + 1)
}
```

In this example, we use the setCount function with a callback that receives the previous count value as an argument and returns the new count value based on it. This ensures that the second call to setCount uses the updated state value from the first call, and the counter is incremented by two.

Using a callback function to update state is especially important when dealing with complex state values or multiple state values that depend on each other. By using a callback function to update the state, you can ensure that you always have the most up-to-date state value and avoid state update issues that can be hard to debug.
