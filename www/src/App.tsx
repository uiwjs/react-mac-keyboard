import { useState } from 'react';
import '@uiw/github-corners';
import '@wcj/dark-mode';
import MacKeyboard from '@uiw/react-mac-keyboard';

const APP =  () => {
  const [keyCode, setKeyCode] = useState<number[]>([]);
  return (
    <MacKeyboard
      keyCode={keyCode}
      onMouseDown={(e, item) => {
        if (item.keycode > -1) {
          setKeyCode([item.keycode]);
        }
      }}
      onMouseUp={() =>{
        setKeyCode([]);
      }}
    />
  );
}

export default APP;
