import React from 'react';
import useInterval from './useInterval';

export interface Props {
  over: string | string[];
  charSpeed?: number;
  loop?: boolean;
  delayEnd?: number;
}

function useTypingEffect({
  over,
  charSpeed = 100,
  loop = true,
  delayEnd = 500,
}: Props): string {
  const savedMessage = React.useRef<string[]>(['']);
  const inWordIndex = React.useRef<number>(0);
  const inArrayIndex = React.useRef<number>(0);

  React.useEffect(() => {
    if (typeof over === 'string') {
      savedMessage.current = [over];
    } else if (Array.isArray(over)) {
      savedMessage.current = over.map(el => el.toString());
    }
  }, [over]);
  if (typeof over === 'string') {
  }

  const [display, setDisplay] = React.useState<string>(
    savedMessage.current
      ? savedMessage.current[inArrayIndex.current][inWordIndex.current]
      : ''
  );

  //Go to next
  useInterval(() => {
    if (
      inWordIndex.current <=
      savedMessage.current[inArrayIndex.current].length + delayEnd / charSpeed
    ) {
      inWordIndex.current = inWordIndex.current + 1;
      setDisplay(
        savedMessage.current[inArrayIndex.current].slice(0, inWordIndex.current)
      );
    } else {
      //Current word is finisched
      if (inArrayIndex.current < savedMessage.current.length - 1) {
        inArrayIndex.current = inArrayIndex.current + 1;
      } else if (loop) {
        inArrayIndex.current = 0;
      }
      inWordIndex.current = 0;
    }
  }, charSpeed);

  return display;
}

export default useTypingEffect;
