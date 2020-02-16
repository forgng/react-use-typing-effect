# react-use-typing

It's a simple hook to simulate the typing effect with a word or an array of words

![typing](./typing.gif)

## usage

```tsx
const WORDS = ['first', 'second', 'third'];

function App() {
  const displayWithTypingEffect = useTypingEffect({
    over: WORDS,
    loop: true,
    charSpeed: 100,
    delayEnd: 500,
  });

  return <div>{displayWithTypingEffect}</div>;
}

ReactDOM.render(<App />, document.getElementById('root'));
```
