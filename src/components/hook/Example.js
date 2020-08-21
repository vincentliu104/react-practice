import React, { useState } from 'react';

function Example() {
  // 宣告一個新的 state 變數，我們叫他「count」
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button type="button" onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default Example;
