

import React, { useState } from "react";
import './RTI.css';

function RequestList() {
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [rows, setRows] = useState(
    Array(5).fill().map(() => ({
      registration: "",
      name: "",
      date: "",
      pdf: null,
      pdfUrl: null
    }))
  );

  const handleItemsPerPageChange = (e) => {
    const count = parseInt(e.target.value, 10);
    setItemsPerPage(count);
    setRows(
      Array(count).fill().map(() => ({
        registration: "",
        name: "",
        date: "",
        pdf: null,
        pdfUrl: null
      }))
    );
  };

  const handleInputChange = (index, field, value) => {
    const updatedRows = [...rows];
    updatedRows[index][field] = value;
    setRows(updatedRows);
  };

  const handleFileChange = (index, e) => {
    const file = e.target.files[0];
    if (file) {
      const updatedRows = [...rows];
      const fileUrl = URL.createObjectURL(file);
      updatedRows[index].pdf = file;
      updatedRows[index].pdfUrl = fileUrl;
      setRows(updatedRows);
    }
  };

  const triggerFileUpload = (index) => {
    document.getElementById(`file-input-${index}`).click();
  };

  return (
    <div className="request-container">
      <div className="welcom">
        <h3>Welcome to PIO Module of RTI-MIS</h3>
      </div>

      <div className="public">
        <h4>PUBLIC AUTHORITY: Tripura Public Service Commission</h4>
        <h4 className="middle">ROLE:PIO</h4>
        <h4 className="user">
          <label>USER:</label>
          <input type="text" />
        </h4>
      </div>

      <div className="items-control">
        <label>
          Items per page:&nbsp;
          <select onChange={handleItemsPerPageChange} value={itemsPerPage}>
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
          </select>
        </label>
      </div>

      <div className="table-responsive">
        <table className="request-table">
          <thead>
            <tr>
              <th></th>
              <th>Registration Number<br />(নিবন্ধন নম্বর)</th>
              <th>Name<br />(নাম)</th>
              <th>Received Date<br />(প্রাপ্ত তারিখ)</th>
              <th>PDF</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index}>
                <td><input type="radio" name="request" /></td>
                <td>
                  <input
                    type="text"
                    placeholder="GOTPC/R/"
                    value={row.registration}
                    onChange={(e) =>
                      handleInputChange(index, "registration", e.target.value)
                    }
                  />
                </td>
                <td>
                  <input
                    type="text"
                    className="red-text"
                    placeholder="XXXXX XXXX"
                    value={row.name}
                    onChange={(e) =>
                      handleInputChange(index, "name", e.target.value)
                    }
                  />
                </td>
                <td>
                  <input
                    type="date"
                    value={row.date}
                    onChange={(e) =>
                      handleInputChange(index, "date", e.target.value)
                    }
                  />
                </td>
                <td>
                  <input
                    type="file"
                    id={`file-input-${index}`}
                    className="hidden-file"
                    accept="application/pdf"
                    onChange={(e) => handleFileChange(index, e)}
                  />
                  {row.pdfUrl ? (
                    <a
                      className="pdf-icon uploaded"
                      href={row.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      📎 {row.pdf.name}
                    </a>
                  ) : (
                    <span
                      className="pdf-icon"
                      onClick={() => triggerFileUpload(index)}
                    >
                      📄
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RequestList;
