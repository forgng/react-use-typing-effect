# use-typing-effect

use-typing-effect is a simple hook to simulate the typing effect over a word or an array of words

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

- **over**: `string` | `string[]`. the word(s) over which the effect is used. Works with single strings e.g `"single string"` or array of strings `["first string", "second string"]`
- **loop**: `boolean (default: true)` . If true will restart from the beginning at the end of the iteration.
- **charSpeed**: `number (default: 100)`: typing effect speed in **milliseconds**
- **delayEnd**: `number (default: 500)`. Time added after the end of each word before going to the next word or restarting. Expressed in **milliseconds**
