import React, { useEffect, useState } from 'react';

const Dashboard = () => {
  const [data, setData] = useState({
    disposedPending: 0,
    newRequests: 0,
    underProcess: 0,
    appealsRaised: 0,
    appealsDisposed: 0,
  });

  // Simulating fetch
  useEffect(() => {
    // Replace with real API call
    const fetchData = async () => {
      // Simulated data
      const fetchedData = {
        disposedPending: 4,
        newRequests: 3,
        underProcess: 6,
        appealsRaised: 6,
        appealsDisposed: 7,
      };
      setData(fetchedData);
    };

    fetchData();
  }, []);

  return (
    <div style={containerStyle}>
      <div style={sectionTitle}>PUBLIC AUTHORITY : Tripura Public Service Commission</div>
      <div style={cardContainer}>
        <Card
          label="PENDING FOR DISPOSED OFF"
          count={data.disposedPending}
        />

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

const Card = ({ label, count, subLabel1, count1, subLabel2, count2 }) => {
  return (
    <div style={cardStyle}>
      <div style={iconStyle}>📩</div>
      <div style={cardContent}>
        {subLabel1 && subLabel2 ? (
          <>
            <div>{subLabel1}</div>
            <div style={numberStyle}>{count1}</div>
            <div>{label}</div>
            <div>{subLabel2}</div>
            <div style={numberStyle}>{count2}</div>
          </>
        ) : (
          <>
            <div>{label}</div>
            <div style={numberStyle}>{count}</div>
          </>
        )}
      </div>
    </div>
  );
};

// 🧩 Styles
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

const cardStyle = {
  backgroundColor: '#f3f3f3',
  border: '3px solid #1f75cc',
  borderRadius: '8px',
  padding: '15px',
  width: '220px',
  textAlign: 'center',
  boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
  marginBottom: '20px',
};

const iconStyle = {
  fontSize: '40px',
  color: '#f58220',
  marginBottom: '10px',
};

const cardContent = {
  color: '#870000',
  fontWeight: 'bold',
};

const numberStyle = {
  fontSize: '20px',
  color: 'black',
  margin: '4px 0',
};

export default Dashboard;
