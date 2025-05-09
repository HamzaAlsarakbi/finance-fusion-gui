import React, { useState } from 'react';

export const ClockMenu: React.FC = () => {
  const [isClockedIn, setIsClockedIn] = useState(false);
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [timestamp, setTimestamp] = useState<string | null>(null);

  const handleClockIn = () => {
    setIsClockedIn(true);
    setTimestamp(new Date().toLocaleString());
  };

  const handleClockOut = () => {
    setIsClockedIn(false);
    setTimestamp(new Date().toLocaleString());
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Clock Menu</h1>
      <h2>Time: {time}</h2>
      {timestamp && <p>Last Action: {timestamp}</p>}
      <button
        onClick={isClockedIn ? handleClockOut : handleClockIn}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer',
          backgroundColor: isClockedIn ? '#f44336' : '#4caf50',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
        }}
      >
        {isClockedIn ? 'Clock Out' : 'Clock In'}
      </button>
    </div>
  );
};
