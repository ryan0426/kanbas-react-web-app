import LessonControlButtons from "../Modules/LessionControlButtons"
import { BsGripVertical } from "react-icons/bs";
import { FaPlus, FaEnvelopeOpenText} from "react-icons/fa6";

export default function AssignmentContent(){
    <div>
        <BsGripVertical className="me-2 fs-3" />
        <FaEnvelopeOpenText className="fs-3 text" />
        <div
        className="wd-margin-all-around 
        
        wd-border-white
        wd-border-solid 
        wd-bg-color-white
        wd-fg-color-black" style={{width: "80%"}}>
        A1 <br/>
        <a style={{color : "red"}}>Multiple Modules |</a> <strong>Not available until</strong> May 13 at 12:00am |<br/> 
        <strong>Due</strong> May 20 at 11:59pm | 100 points
        </div>
        <LessonControlButtons />
    </div>
}