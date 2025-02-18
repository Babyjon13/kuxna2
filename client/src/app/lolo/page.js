// app/page.js
'use client';

import { useState } from 'react';

export default function HomePage() {
  const [text, setText] = useState('');
  const [response, setResponse] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text }),
    });

    const data = await res.json();
    setResponse(data);
  };

  return (
    <div>
      <h1>Save Text to JSON</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter text"
          required
        />
        <button type="submit">Submit</button>
      </form>
      {response && <p>{response.message[1] || response.error}</p>}
    </div>
  );
}
