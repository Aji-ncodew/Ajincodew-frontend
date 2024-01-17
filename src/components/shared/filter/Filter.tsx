import { useState } from "react";
import "./Filter.css";

function Filter(props: any) {
  const years = props.data.map((session: any) => session.academicYear);
  const uniqueYears = [...new Set(years)];

  const [currentYear, setCurrentYear] = useState("");
  const [currentSearch, setCurrentSearch] = useState("");

  const handleFilter = (search: String, year: String) => {
    var result = props.data;
    if (search === "" && year === "") {
      props.setter(result);
    } else if (search === "" && year !== "") {
      result = props.data.filter(
        (session: any) => session.academicYear === year
      );
      props.setter(result);
    } else if (search !== "" && year === "") {
      result = props.data.filter((session: any) =>
        session.title.toLowerCase().includes(search.toLowerCase())
      );
      props.setter(result);
    } else {
      result = props.data
        .filter((session: any) => session.academicYear === year)
        .filter((session: any) =>
          session.title.toLowerCase().includes(search.toLowerCase())
        );
      props.setter(result);
    }
  };

  return (
    <>
      <div className="filter d-flex justify-content-center align-items-center gap-2">
        <div className="input-group mb-4">
          <button className="btn " type="button" id="button-addon2">
            <i className="bi bi-search"></i>
          </button>
          <input
            type="text"
            className="form-control"
            placeholder="Search by title"
            aria-label="Search by title"
            aria-describedby="button-addon2"
            onChange={(e) => {
              setCurrentSearch(e.target.value);
              handleFilter(e.target.value, currentYear);
            }}
          />
          <div className="dropdown">
            <a
              className="btn dropdown-toggle"
              href="#"
              role="button"
              id="dropdownMenuYears"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="bi bi-filter"></i>
            </a>
            <ul className="dropdown-menu dropdown-menu-end mt-1" aria-labelledby="dropdownMenuYears">
              <li>
                <a
                  className="dropdown-item"
                  href="#"
                  onClick={() => {
                    setCurrentYear("");
                    handleFilter(currentSearch, "");
                  }}
                >
                  All Years
                </a>
              </li>
              {uniqueYears.map((year: any, index: any) => (
                <li key={index}>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={(e) => {
                      setCurrentYear(e.currentTarget.textContent!);
                      handleFilter(currentSearch, e.currentTarget.textContent!);
                    }}
                  >
                    {year}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Filter;
