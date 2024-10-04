import { FaPlus, FaEnvelopeOpenText} from "react-icons/fa6";
import LessonControlButtons from "../Modules/LessionControlButtons";
import AssignmentControlButtons from "./AssignmentControlButtons";
import AssignmentControls from "./AssignmentsControls";
import { BsGripVertical } from "react-icons/bs";
import { Link } from "react-router-dom";
import AssignmentContent from "./AssignmentContent";
export default function Assignments() {
    return (
      <div id="wd-assignments">

        <AssignmentControls/>

        <ul id="wd-modules" className="list-group rounded-0">
          <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary"> 
              <BsGripVertical className="me-2 fs-3" />
              ASSIGNMENTS
              <AssignmentControlButtons/>
            </div>
            <ul className="wd-lessons list-group rounded-0">
              <li className="wd-lesson list-group-item p-3 ps-1" >
                <div>
                  <BsGripVertical className="me-2 fs-3" />
                  <FaEnvelopeOpenText className="fs-3 text" />
                  <LessonControlButtons />
                  <div
                  className="wd-margin-all-around 
                  wd-border-white
                  wd-border-solid 
                  wd-bg-color-white
                  wd-fg-color-black" style={{width: "80%"}} >
                    <a className="wd-assignment-link"
                      href="#/Kanbas/Courses/1234/Assignments/123">
                      A1
                    </a>
                  <br/>
                  <a style={{color : "red"}}>Multiple Modules |</a> <strong>Not available until</strong> May 13 at 12:00am |<br/> 
                  <strong>Due</strong> May 20 at 11:59pm | 100 points
                  </div>
                </div>
              </li>
              <li className="wd-lesson list-group-item p-3 ps-1">
                <BsGripVertical className="me-2 fs-3" />
                <FaEnvelopeOpenText className="fs-3 text" />
                <LessonControlButtons />
                <div
                  className="wd-margin-all-around 
                  wd-border-white
                  wd-border-solid 
                  wd-bg-color-white
                  wd-fg-color-black" style={{width: "80%"}}>
                  <a className="wd-assignment-link"
                      href="#/Kanbas/Courses/1234/Assignments/123">
                      A2
                    </a> <br/>
                  <a style={{color : "red"}}>Multiple Modules |</a> <strong>Not available until</strong> May 13 at 12:00am |<br/> 
                  <strong>Due</strong> May 20 at 11:59pm | 100 points
                  </div>
                
              </li>
              <li className="wd-lesson list-group-item p-3 ps-1">
                <BsGripVertical className="me-2 fs-3" />
                <FaEnvelopeOpenText className="fs-3 text" />
                <LessonControlButtons />
                <div
                  className="wd-margin-all-around 
                  wd-border-white
                  wd-border-solid 
                  wd-bg-color-white
                  wd-fg-color-black" style={{width: "80%"}}>
                  <a className="wd-assignment-link"
                      href="#/Kanbas/Courses/1234/Assignments/123">
                      A3
                    </a> <br/>
                  <a style={{color : "red"}}>Multiple Modules |</a> <strong>Not available until</strong> May 13 at 12:00am |<br/> 
                  <strong>Due</strong> May 20 at 11:59pm | 100 points
                  </div>
                
              </li>
            </ul>
          </li>

        </ul>
      </div>
  );}
  