
import { FaPlus, FaSearch } from 'react-icons/fa';
import { BsGripVertical, BsSearch } from "react-icons/bs";
export default function AssignmentControls() {
  return (

        <div className="list-group-item p-3 ps-1">
          
          

          <button id="wd-add-module-btn" className="btn btn-lg btn-danger me-1 float-end">
          <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
          Assignment</button>

          <button id="wd-view-progress" className="btn btn-lg btn-secondary me-1 float-end">
          <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
          View Progress</button>

          <div className="input-group mb-3" style={{ maxWidth: '300px' }}>
            <span className="input-group-text bg-white border-end-0">
              <BsSearch />
            </span>
            <input
              id="wd-search-assignment"
              type="text"
              className="form-control border-start-0"
              placeholder="Search..."
              aria-label="Search for Assignments"
            />
          </div>

          

        </div>
);}