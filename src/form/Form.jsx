import './Form.css';
import React, { useState } from "react";
import axios from "axios";

function RTIRequestDetails() {
  const [formData, setFormData] = useState({
    registrationNo: "GOTI",
    receiptDate: "",
    language: "Hindi",
    name: "",
    gender: "Male",
    address: "",
    phone: "",
    mobile: "",
    email: "",
    country: "India",
    state: "",
    status: "Details not provided",
    education: "Details not provided",
    citizenship: "Indian",
    belowPovertyLine: "",
    amountPaid: "",
    libertyConcern: "",
    pertainsTo: "",
    rtiText: "",
    category: "",
    decision: "",
    fileNo: "",
    disposalType: "Full Information Supplied",
    infoProvided: "",
    uploadWebsite: false,
  });

  const [uploadReply, setUploadReply] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleFileChange = (e) => {
    setUploadReply(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dataToSend = new FormData();
    for (let key in formData) {
      dataToSend.append(key, formData[key]);
    }
    if (uploadReply) {
      dataToSend.append("uploadReply", uploadReply);
    }

    try {
      const res = await axios.post("http://localhost:5000/rti-request", dataToSend, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Form submitted successfully!");
      console.log(res.data);
    } catch (err) {
      alert("Error submitting form");
      console.error(err);
    }
  };

  const states = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
    "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
    "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
    "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana",
    "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"
  ];

  return (
    <form onSubmit={handleSubmit} className="rti-form">
      <h2><span className="required">*</span> Fields are mandatory</h2>

      {[
        { label: "Registration No. (নিবন্ধন নম্বর)", name: "registrationNo", type: "text", readonly: true },
        { label: "Type of Receipt (রসিদের ধরণ)", value: "Online Receipt", readonly: true },
        { label: "Date of Receipt (রসিদ প্রদানের তারিখ)", name: "receiptDate", type: "date" },
        { label: "Language of Request (অনুরোধের ভাষা)", name: "language", type: "select", options: ["Hindi", "English", "Bengali"] },
        { label: "Name (নাম)", name: "name", type: "text" },
        { label: "Gender (লিঙ্গ)", name: "gender", type: "select", options: ["Male", "Female", "Other"] },
        { label: "Address (ঠিকানা)", name: "address", type: "text" },
        { label: "Phone No.(ফোন নম্বর)", name: "phone", type: "tel" },
        { label: "Mobile No.(মোবাইল নম্বর)", name: "mobile", type: "tel" },
        { label: "Email (ইমেল)", name: "email", type: "email" },
        { label: "Country (দেশ)", name: "country", type: "select", options: ["India", "Others"] },
        { label: "State (রাজ্য)", name: "state", type: "select", options: states },
        { label: "Status (অবস্থা)", name: "status", type: "select", options: ["Details not provided", "Single", "Married"] },
        { label: "Educational Status (শিক্ষাগত অবস্থা)", name: "education", type: "select", options: ["Details not provided", "10th", "12th", "Graduate", "Post Graduate"] },
        { label: "Citizenship Status (নাগরিকত্বের অবস্থা)", name: "citizenship", type: "text" },
        { label: "Mode(s) of Info Supply (তথ্য সরবরাহের পদ্ধতি)", value: "Hard Copy", readonly: true },
        { label: "Is Requester BPL?(অনুরোধকারী গরিব সীমার নিচে আছেন কি)", name: "belowPovertyLine", type: "select", options: ["", "Yes", "No"] },
        { label: "Amount Paid (পরিশোধিত অর্থরাশি)", name: "amountPaid", type: "text" },
        { label: "Liberty Concerned (মুক্তিসংক্রান্ত)", name: "libertyConcern", type: "text" },
        { label: "Request Pertains To (অনুরোধ সম্পর্কিত বিষয়ে)", name: "pertainsTo", type: "text" },
      ].map((field, idx) => (
        <div className="form-row" key={idx}>
          <label>{field.label}{["name", "receiptDate", "email", "mobile", "address", "language", "gender", "country", "citizenship", "belowPovertyLine", "rtiText", "category"].includes(field.name) && <span className="required">*</span>}:</label>
          {field.readonly ? (
            <div className="form-value">{field.value || formData[field.name]}</div>
          ) : field.type === "select" ? (
            <select name={field.name} value={formData[field.name]} onChange={handleChange}>
              {field.options.map((opt, i) => (
                <option key={i} value={opt}>{opt}</option>
              ))}
            </select>
          ) : (
            <input type={field.type} name={field.name} value={formData[field.name]} onChange={handleChange} />
          )}
        </div>
      ))}

      <div className="form-row">
        <label>Text of RTI Application (বিনিয়োগের পাঠ্য)<span className="required">*</span>:</label>
        <textarea name="rtiText" value={formData.rtiText} onChange={handleChange}></textarea>
      </div>

      <div className="form-row">
        <label>Please Select the Category of Request(অনুরোধের বিভাগের নির্বাচন করুন)<span className="required">*</span>:</label>
        <select name="category" value={formData.category} onChange={handleChange}>
          <option value="">PLEASE SELECT CATEGORY</option>
          <option>Health</option><option>Education</option><option>Legal Aid</option><option>Employment</option><option>Other</option>
        </select>
      </div>

      <div className="form-row">
        <label>Decision (সিদ্ধান্ত):</label>
        <select name="decision" value={formData.decision} onChange={handleChange}>
          <option value="">REQUEST DISPOSE OF</option>
          <option>Approved</option><option>Rejected</option><option>Pending</option>
        </select>
      </div>

      <div className="form-row">
        <label>File No.(ফাইল নম্বর):</label>
        <input type="text" name="fileNo" value={formData.fileNo} onChange={handleChange} />
      </div>

      <div className="form-row">
        <label>Type of Disposal (মীমাংসার ধরন):</label>
        <select name="disposalType" value={formData.disposalType} onChange={handleChange}>
          <option>Full Information Supplied</option>
          <option>Accepted</option><option>Rejected</option><option>Transferred</option><option>Closed</option>
        </select>
      </div>

      <div className="form-row">
        <label>Information Provided To Citizen:</label>
        <textarea name="infoProvided" value={formData.infoProvided} onChange={handleChange}></textarea>
      </div>

      <div className="form-row">
        <label>Upload Reply Document (PDF only):</label>
        <input type="file" accept=".pdf" onChange={handleFileChange} />
      </div>

      <div className="form-row">
        <label>Upload to Website (ওয়েবসাইটে আপলোড করুন):</label>
        <input type="checkbox" name="uploadWebsite" checked={formData.uploadWebsite} onChange={handleChange} />
      </div>

      <div className="form-row">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default RTIRequestDetails;


