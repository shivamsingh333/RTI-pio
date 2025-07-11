import React, { useEffect, useState } from "react";

const RTIRequestDetails = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulated fetch call (replace with your real API endpoint)
    fetch("https://your-api-endpoint.com/rti-request")
      .then((res) => res.json())
      .then((resData) => {
        setData(resData);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading RTI Request...</p>;
  if (!data) return <p>No data found.</p>;

  return (
    <div className="rti-form">
      <h2>RTI Application Details</h2>
      <div><strong>Registration No:</strong> {data.registrationNo}</div>
      <div><strong>Date of Receipt:</strong> {data.dateOfReceipt}</div>
      <div><strong>Name:</strong> {data.name}</div>
      <div><strong>Gender:</strong> {data.gender}</div>
      <div><strong>Address:</strong> {data.address}</div>
      <div><strong>Phone:</strong> {data.phone}</div>
      <div><strong>Email:</strong> {data.email}</div>
      <div><strong>State:</strong> {data.state}</div>
      <div><strong>Country:</strong> {data.country}</div>
      <div><strong>Citizenship:</strong> {data.citizenship}</div>
      <div><strong>Information Supply Mode:</strong> {data.informationMode}</div>
      <div><strong>BPL Status:</strong> {data.bplStatus ? "Yes" : "No"}</div>
      <div><strong>Text of Application:</strong> {data.text}</div>
      <div><strong>Request Pertains To:</strong> {data.requestTo}</div>
    </div>
  );
};

export default RTIRequestDetails;
