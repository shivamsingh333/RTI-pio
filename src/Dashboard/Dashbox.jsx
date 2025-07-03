import React, { useEffect, useState } from 'react';
//import Card from './Card';

const RTIDashboard = () => {
  const [data, setData] = useState({
    disposedPending: 0
    newRequests: 0,
    underProcess: 0,
    appealsRaised: 0,
    appealsDisposed: 0,
    serverTime: ''
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/dashboard');
        const result = await res.json();
        setData(result);
      } catch (err) {
        console.error('Failed to fetch data:', err);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={containerStyle}>
      <div style={sectionTitle}>PUBLIC AUTHORITY : Tripura Public Service Commission</div>
      <div style={{ fontStyle: 'italic', fontSize: '14px', marginTop: '5px' }}>
        Last updated: {new Date(data.serverTime).toLocaleString()}
      </div>
      <div style={cardContainer}>
        <Card label="PENDING FOR DISPOSED OFF" count={data.disposedPending} />
        <div style={{ textAlign: 'center' }}>
          <div style={sectionTitle}>Welcome to PIO Module of RTI-MIS</div>
          <div style={subtitle}>ROLE : PIO</div>
          <Card
            label="RTI REQUESTS"
            subLabel1="NEW"
            count1={data.newRequests}
            subLabel2="UNDER PROCESS"
            count2={data.underProcess}
          />
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={sectionTitle}>USER : SHRI XXXX XXXX</div>
          <Card
            label="APPEALS"
            subLabel1="RAISED"
            count1={data.appealsRaised}
            subLabel2="DISPOSED"
            count2={data.appealsDisposed}
          />
        </div>
      </div>
    </div>
  );
};

const containerStyle = {
  fontFamily: 'Arial, sans-serif',
  padding: '20px',
  background: '#fdfdfd',
};

const sectionTitle = {
  color: '#870000',
  fontWeight: 'bold',
  marginBottom: '10px',
  fontSize: '16px',
};

const subtitle = {
  fontSize: '14px',
  marginBottom: '10px',
  fontWeight: 'bold',
  color: '#870000',
};

const cardContainer = {
  display: 'flex',
  justifyContent: 'space-around',
  marginTop: '20px',
  flexWrap: 'wrap',
};

export default RTIDashboard;
