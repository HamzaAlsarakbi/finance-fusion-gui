import React from 'react';

const Dashboard: React.FC = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Dashboard</h1>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          marginTop: '20px',
        }}
      >
        <div
          style={{ border: '1px solid #ccc', padding: '10px', width: '30%' }}
        >
          <h2>Account Balance</h2>
          <p>$10,000</p>
        </div>
        <div
          style={{ border: '1px solid #ccc', padding: '10px', width: '30%' }}
        >
          <h2>Recent Transactions</h2>
          <ul>
            <li>Transaction 1 - $100</li>
            <li>Transaction 2 - $200</li>
            <li>Transaction 3 - $300</li>
          </ul>
        </div>
        <div
          style={{ border: '1px solid #ccc', padding: '10px', width: '30%' }}
        >
          <h2>Upcoming Bills</h2>
          <ul>
            <li>Bill 1 - $50</li>
            <li>Bill 2 - $75</li>
            <li>Bill 3 - $100</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
