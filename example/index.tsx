import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import useTypingEffect from '../.';

const WORDS = ['first', 'second', 'third'];

function App() {
  const displayWithTypingEffect = useTypingEffect({
    over: WORDS,
    loop: true,
    charSpeed: 100,
    delayEnd: 500,
  });

  return (
    <div className="container">
      <span className="typingText">{displayWithTypingEffect}</span>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
