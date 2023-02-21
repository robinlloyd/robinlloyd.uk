---
title: "React Hooks - A Deep Dive"
subtitle: "Part 1: React Hooks Overview"
date: "2023-02-03"
tags: ["react", "hooks", "javascript"]
series: { name: "React Hooks - A Deep Dive", slug: "react-hooks-deep-dive" }
previewImage: "/images/deep-dive-into-react-hooks.jpg"
---

## Other posts in this series

- [React Hooks - A Deep Dive](/posts/deep-dive-into-react-hooks)
- [React Hooks - useState](/posts/react-hooks-usestate)

This is the introductory post introducing the concept of hooks and my reason for writing about them. Other posts in the series will be added as they are published.

## Why am I writing this?

I've been using React Hooks for a while now, and understand the basics, but have never really done a deep dive on when to use certain hooks. I want a better understanding of whether other hooks or custom hooks are better than commonly accepted methods, and how to use them in a way that is easy to understand and maintain.

I'm writing this series to help me understand hooks better by providing examples, links to documentation, and adding my own thoughts and opinions. If anyone else stumbles across this series and finds it useful, that's great too!

## What are React Hooks?

Hooks were introduced with React 16.8 and allow developers to use certain React features without having to write a class component. For example, class components are no longer necessary in order to use lifecycle methods and state management. Hooks are also a way to share logic between components, which allows for cleaner component code and higher reusability.

Below are some examples of the old way of using state using a class component, and the new way using hooks.

### Class Component

```jsx
class MyStatusComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      status: 'awaiting submission'
    }
  }

  handleStatusUpdate = () => {
    this.setState({ status: 'submitted' })
  }

  render() {
    return (
      <div>
        <span>{this.state.status}</span>
        <button onClick={this.handleStatusUpdate}>Submit</button>
      </div>
    )
  }
}
```

### Hooks

```jsx
const MyStatusComponent = () => {
  const [status, setStatus] = useState('awaiting submission')

  const handleStatusUpdate = () => {
    setStatus('submitted')
  }

  return (
    <div>
      <span>{status}</span>
      <button onClick={handleStatusUpdate}>Submit</button>
    </div>
  )
}
```

Note that the class version of the component uses significantly more code than the hook version of the same component. Line count doesn't count for everything when it comes to clean code, but the hooks version is much easier to read and understand.

## How do we use React Hooks?

We've already glimpsed an example of how to use hooks in the previous section, but let's take a look at the syntax in more detail, using the `useState` hook as an example.

```jsx
const [status, setStatus] = useState('awaiting submission')
```

This piece of code is doing a few things at once, so let's break it down. The `useState` function is setting an initial state to be used as the default value. In this case, this means that before a user interacts with the page, the `status` variable value will be set to *"awaiting submission"*.

The `useState` function returns an array with two values `[status, setStatus]`. The first variable holds the value of the state, and the second variable is a function that can be used to update the state. The second variable is used to update the state, which will update the value of the first variable.

These can be named whatever you like, although it's common to give the first variable a name that makes sense for the data it's holding, and the second variable typically starts with `set` followed by the name of the first variable. So in this case we end up with `status` and `setStatus`.

To use multiple states, you can call `useState` multiple times, and you'd name the variables accordingly.

```jsx
const [status, setStatus] = useState('awaiting submission')
const [name, setName] = useState('John Smith')
```

## What are the different types of React Hooks?

There are a few different types of hooks: built-in hooks and custom hooks.

### Built-in Hooks

Built-in hooks are hooks that come with React. These are the hooks that you can use without having to write any custom code.

The latest react documentation (currently in beta) categorises the following built-in hooks:

#### [State Hooks](https://beta.reactjs.org/reference/react#state-hooks)

- `useState`
- `useReducer`

#### [Context Hooks](https://beta.reactjs.org/reference/react#context-hooks)

- `useContext`

#### [Ref Hooks](https://beta.reactjs.org/reference/react#ref-hooks)

- `useRef`
- `useImperativeHandle`

#### [Effect Hooks](https://beta.reactjs.org/reference/react#effect-hooks)

- `useEffect`
- `useLayoutEffect`
- `useInsertionEffect`

#### [Performance Hooks](https://beta.reactjs.org/reference/react#performance-hooks)

- `useMemo`
- `useCallback`
- `useTransition`
- `useDeferredValue`

#### [Other Hooks](https://beta.reactjs.org/reference/react#other-hooks)

- `useDebugValue`
- `useDebugValue`
- `useSyncExternalStore`

#### [Custom Hooks](https://beta.reactjs.org/reference/react#your-own-hooks)

You can create your own custom hooks. We'll get into this later in the series.
