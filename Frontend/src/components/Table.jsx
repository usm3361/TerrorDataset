import { useState } from "react";
import "../App.css";

const Table = ({ ter }) => {
  const keys = Object.keys(ter[0]);
  const [terf, setTerf] = useState(ter);

  function hendleInput(e) {
    setTerf(
      ter.filter((t) =>
        keys.some((k) => t[k].toLowerCase().includes(e.target.value)),
      ),
    );
  }
  function searchMinYear(e) {
    setTerf(ter.filter((t) => +t.iyear >= e.target.value));
  }

  return (
    <>
      <div className="filter">

      <label htmlFor="allfilters">search Country or City</label>
      <input type="search" id="allfilters" onChange={hendleInput} />
      <label htmlFor="minYear">search by min year</label>
      <input type="search" id="minYear" onChange={searchMinYear} />
      </div>

      <div className="table-container">
        <table className="terror-table">
          <thead>
            <tr>
              <th>Event ID</th>
              <th>Year</th>
              <th>Country</th>
              <th>Region</th>
              <th>City</th>
              <th>Attack Type</th>
              <th>Target Type</th>
              <th>Target</th>
            </tr>
          </thead>
          <tbody>
            {terf?.map((data, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "even-row" : "odd-row"}
              >
                <td>{data.eventid}</td>
                <td>{data.iyear}</td>
                <td>{data.country_txt}</td>
                <td>{data.region_txt}</td>
                <td>{data.city}</td>
                <td>{data.attacktype1_txt}</td>
                <td>{data.targtype1_txt}</td>
                <td>{data.target1}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
