import React from "react";
import "./Table.css"; // Import the CSS file for styling

const Table = ({ data }) => {
  return (
    <div className="table-container">
      <table className="table">
        <thead>
          <tr>
            {Object.keys(data[0]).map((key, index) => (
              <th key={index} className="header-cell">
                {key}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {Object.values(row).map((value, cellIndex) => (
                <td key={cellIndex} className="data-cell">
                  {value ? value : "x"}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
