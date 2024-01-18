import { useState } from "react";
import "./Filter.css";
import CourseEntity from "../../../entities/Course";


interface FilterProps {
  data: CourseEntity[];
  setter: React.Dispatch<React.SetStateAction<CourseEntity[]>>;
}

function Filter(props: FilterProps) {
  const years = props.data.map((course) => course.Year);
  const uniqueYears = [...new Set(years)];

  const [currentYear, setCurrentYear] = useState<string>("");
  const [currentSearch, setCurrentSearch] = useState<string>("");

  const handleFilter = (search: string, year: string) => {
    let result = props.data;

    if (search !== "") {
      result = result.filter((course) =>
        course.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (year !== "") {
      result = result.filter((course) => course.Year === year);
    }

    props.setter(result);
  };

  return (
    <div className="filter d-flex justify-content-center align-items-center gap-2">
      <div className="input-group mb-4">
        <button className="btn" type="button" id="button-addon2">
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
          <ul
            className="dropdown-menu dropdown-menu-end mt-1"
            aria-labelledby="dropdownMenuYears"
          >
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
            {uniqueYears.map((year: string, index: number) => (
              <li key={index}>
                <a
                  className="dropdown-item"
                  href="#"
                  onClick={() => {
                    setCurrentYear(year);
                    handleFilter(currentSearch, year);
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
  );
}

export default Filter;
