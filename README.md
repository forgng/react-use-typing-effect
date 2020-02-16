# react-use-typing

react-use-typing is a simple hook to simulate the typing effect over a word or an array of words

![typing](./typing.gif)

## Usage

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

## Params

- over: `string` | `string[]`. the word(s) over which the effect is used. E.g `"single string"` or `["first string", "second string"]`
- loop: `boolean`. If true will restart from the beginning a
- charSpeed: `number`: typing effect speed in **milliseconds**
- delayEnd: `number`. Time added after the end of each word before going to the next word or restarting. Expressed in **milliseconds**
