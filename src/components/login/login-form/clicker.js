import { useState } from 'react';
import { useErrorHandler } from 'react-error-boundary';

const MAX_COUNT_ALLOWED = 5;

export default function Clicker() {
  const [counter, setCounter] = useState(0);
  const handleError = useErrorHandler();

  const handleClicker = () => {
    try {
      if (counter === MAX_COUNT_ALLOWED) {
        throw new Error();
      } else {
        setCounter((c) => c + 1);
      }
    } catch (e) {
      handleError(e);
      console.log('bruh', e);
    }
  };
  return (
    <div>
      <button type="button" onClick={handleClicker}>
        Counter Button: {counter}
      </button>
    </div>
  );
}
