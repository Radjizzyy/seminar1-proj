import React, { useState } from 'react';
import './App.css';

function App() {
  const [qrCode, setQrCode] = useState('');
  const [data, setData] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const fmt = 'png';
    try {
      const response = await fetch(
        `https://api.api-ninjas.com/v1/qrcode?data=${encodeURIComponent(data)}&format=${encodeURIComponent(fmt)}`,
        {
          method: 'GET',
          headers: {
            'X-Api-Key': 'oS1D1CdkuFmaxJgijtUfIA==xYeKG6y4rLpgx5XT'
          },
        }
      );

      if (!response.ok) {
        throw new Error('Failed to generate QR code: ' + response.status);
      }

      const result = await response.text();
      setQrCode(result);
    } catch (error) {
      console.error('Error fetching QR code:', error);
    }
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          id="data-input"
          type="text"
          value={data}
          onChange={(event) => setData(event.target.value)}
          placeholder="Enter data"
        />
        <button type="submit">Generate QR Code</button>
      </form>
      <div id="qr-code">
        {qrCode && (
          <div className="flex justify-center ml-2.5">
            <img
              className="w-64 m-auto border border-gray-200 shadow-md rounded cursor-pointer"
              src={`data:image/png;base64,${qrCode}`}
              alt="QR Code"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
