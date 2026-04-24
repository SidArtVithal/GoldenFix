import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', textAlign: 'center', padding: '4rem' }}>
      <h1>Welcome to GoldenFix</h1>
      <p>This is a simple React app created in your repository.</p>
      <div style={{ marginTop: '2rem' }}>
        <button
          style={{
            padding: '0.75rem 1.5rem',
            borderRadius: '0.75rem',
            border: '1px solid #333',
            background: '#fff',
            cursor: 'pointer'
          }}
          onClick={() => setCount((count) => count + 1)}
        >
          Count: {count}
        </button>
      </div>
    </div>
  );
}

export default App;
