import { useEffect, useState } from 'react';

export function useAnimate(msg, delay) {
  const [text, setText] = useState('');

  useEffect(() => {
    let nbr = -1;

    function scribe() {
      if (nbr >= msg.length - 1) {
        nbr = -1;
        setText('');
      } else {
        nbr++;
        setText((realText) => realText + msg[nbr]);
      }
    }

    const timer = setInterval(scribe, delay);

    return () => clearInterval(timer);
  }, []);
  return text;
}
