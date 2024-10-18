import { BiSearch, BiDotsVerticalRounded, BiPlus } from "react-icons/bi";
import { FaCheckCircle } from "react-icons/fa";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { BsGripVertical, BsFileText } from "react-icons/bs";
import { Link, useParams } from "react-router-dom"; 
import * as db from "../../Database"; 
export default function Assignments() {
  const { cid } = useParams(); 
  const assignments = db.assignments; 

  const filteredAssignments = assignments.filter(
    (assignment) => assignment.course === cid
  );
    return (
      <div id="wd-assignments">

        <div className="d-flex justify-content-between align-items-center mb-4">
          <div className="d-flex align-items-center">
            <BiSearch className="fs-4 me-2" />
            <input
              id="wd-search-assignment"
              className="form-control"
              placeholder="Search for Assignments"
              style={{ width: "300px" }}
            />
          </div>
          <div className="d-flex justify-content-end">
            <button className="btn btn-outline-secondary me-2 d-flex align-items-center">
              <BiPlus className="me-2" /> Group
            </button>
            <button className="btn btn-danger d-flex align-items-center">
              <BiPlus className="me-2" /> Assignment
            </button>
          </div>
        </div>

        <ul id="wd-modules" className="list-group rounded-0">
          <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary"> 
              <BsGripVertical className="me-2 fs-3" />
              ASSIGNMENTS
              <AssignmentControlButtons/>
            </div>
            <ul className="wd-lessons list-group rounded-0">
              {filteredAssignments.length > 0 ? (
                filteredAssignments.map((assignment, index) => (
                  <li
                    key={assignment._id}
                    className="wd-assignment-list-item d-flex align-items-start p-3 mb-3 border-start border-3 border-success"
                  >
                    <BsGripVertical className="me-2 fs-3" />
                    <BsFileText className="fs-4 text-success me-3" />
                    <div className="flex-grow-1">
                      <Link
                        to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                        className="wd-assignment-link text-decoration-none fw-bold"
                      >
                        A{index + 1}
                      </Link>
                      <p className="text-muted mb-1">
                      <span style={{ color: "red" }}>Multiple Modules</span> | <strong>Not available until</strong> May 6 at 12:00am |
                      </p>
                      <p className="mb-0">Due May 13 at 11:59pm | 100 pts</p>
                    </div>
                    <FaCheckCircle className="text-success fs-4 me-3" />
                    <BiDotsVerticalRounded className="fs-4" />
                  </li>
                ))
              ) : (
                <li>No assignments found for this course.</li>
              )}
            </ul>
          </li>

        </ul>
      </div>
  );}
  