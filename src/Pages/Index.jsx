import React, { useState } from 'react';
import Alert from '@mui/material/Alert';

const HomePage = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1 className="bg-slate-900">TEstando o tw</h1>
      <div>
        <button type="button" onClick={() => setCount(count + 1)}>
          Click me
        </button>
        <Alert>{count}</Alert>
      </div>
    </div>
  );
};

export default HomePage;
