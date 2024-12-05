import { Link } from "react-router-dom";
import { addEnrollment, removeEnrollment, setEnrollments } from "./reducer";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";

export default function Dashboard(
    { courses, course, allCourses, setCourse, addNewCourse, deleteCourse, updateCourse, handleEnroll, handleUnenroll, enrolling, setEnrolling,updateEnrollment }: {
        courses: any[];
        course: any;
        allCourses: any[];
        setCourse: (course: any) => void;
        addNewCourse: (courseId: string) => void;
        deleteCourse: (course: any) => void;
        updateCourse: () => void;
        handleEnroll: (courseId: string) => void;
        handleUnenroll: (courseId: string) => void;
        enrolling: boolean; 
        setEnrolling: (enrolling: boolean) => void;
        updateEnrollment: (courseId: string, enrolled: boolean) => void
    }) {
    const dispatch = useDispatch();
    const { currentUser } = useSelector((state: any) => state.accountReducer);

    useEffect(() => {
      }, [dispatch]);

    

    const [showAllCourses, setShowAllCourses] = useState(false);
    const visibleCourses = showAllCourses ? allCourses : courses;

    function truncateText(text: string, maxLength: number) {
        if (text.length > maxLength) {
            return text.substring(0, maxLength) + '...';
        }

        return text;
    }

    console.log(courses);
    console.log(allCourses);

    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">
                Dashboard
                <button onClick={() => setEnrolling(!enrolling)} className="float-end btn btn-primary" >
                    {enrolling ? "My Courses" : "All Courses"}
                </button>
            </h1>
            <hr />
            <h2 id="wd-dashboard-published">
                Published Courses ({visibleCourses.length})
            </h2>
            <hr />
            {currentUser.role === 'STUDENT' && (
                <>
                    <button id="wd-enrollments-course-click" className="btn btn-primary float-end me-2"
                        onClick={() => setShowAllCourses(!showAllCourses)}>
                        {showAllCourses ? 'Show Enrollments' : 'Show All Courses'}
                    </button>
                    <br />
                    <br />
                    <hr />
                </>
            )}
            {currentUser.role === 'FACULTY' && (
                <>
                    <div className="d-flex justify-content-between ">
                        <h3 className="m-0">
                            New Course
                        </h3>
                        <div>
                        <button
                            className="btn btn-warning me-2"
                            onClick={updateCourse} id="wd-update-course-click">
                            Update
                        </button>
                        <button
                            id="wd-add-new-course-click"
                            className="btn btn-primary float-end"
                            onClick={() => {
                                const courseId = new Date().getTime().toString()

                                addNewCourse(courseId);
                                dispatch(addEnrollment({ courseId: courseId, userId: currentUser._id }));
                            }}>
                            Add
                        </button>
                        </div>
                    </div>
                    <br />
                    <input
                        id="wd-course-name"
                        className="form-control mb-2"
                        value={course.name}
                        onChange={(event) => setCourse({ ...course, name: event.target.value })} />
                    <textarea
                        id="wd-course-description"
                        className="form-control"
                        value={course.description}
                        onChange={(event) => setCourse({ ...course, description: event.target.value })} />
                    <hr />
                </>)}
            <div id="wd-dashboard-courses" className="row g-4">
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    {courses.map((course) => {
                        const isEnrolled = courses.some((c) => c._id === course._id);
                        return (
                            <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                                <div className="card rounded-3 overflow-hidden shadow" style={{ height: "100%", display: 'flex', flexDirection: 'column' }}>
                                    <Link className="wd-dashboard-course-link" to={isEnrolled ? `/Kanbas/Courses/${course._id}/Home` : `/Kanbas/Dashboard`} style={{ flex: '1', textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                                        <img
                                            style={{ height: '160px', objectFit: 'cover', textDecoration: "none", color: "navy", fontWeight: "bold" }}
                                            width="100%"
                                            alt={course.name}
                                            src="course.png"
                                        />
                                        <div className="card-body" style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                                            <h5 className="wd-dashboard-course-title card-title" style={{ color: 'darkblue' }}>
                                            {truncateText(course.name, 22)}
                                            {enrolling && (
                                                <button onClick={(event) => {
                                                        event.preventDefault();
                                                        updateEnrollment(course._id, !course.enrolled);
                                                    }}
                                                
                                                    className={`btn ${ course.enrolled ? "btn-danger" : "btn-success" } float-end`} >
                                                    {course.enrolled ? "Unenroll" : "Enroll"}
                                                </button>
                                            )}
                                            </h5>
                                            <p className="wd-dashboard-course-title card-text overflow-y-hidden" style={{ flexGrow: 1, color: 'gray', fontSize: '0.85rem', marginTop: '-0.5rem', maxHeight: 100 }}>
                                                {course.description}
                                            </p>
                                            <br />
                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <button className="btn btn-primary">
                                                Go
                                            </button>
                                            {currentUser.role === 'STUDENT' && (
                                            isEnrolled ? (
                                                <button className="btn btn-danger" onClick={(event) => {
                                                    event.preventDefault()
                                                    handleUnenroll(course._id);
                                                }}>
                                                    Unenroll
                                                </button>
                                            ) : (
                                                <button className="btn btn-success" onClick={(event) => {
                                                    event.preventDefault()
                                                    handleEnroll(course._id);
                                                }}>
                                                    Enroll
                                                </button>
                                            )
                                            )}
                                            {currentUser.role === 'FACULTY' && (
                                            <>
                                            <button id="wd-edit-course-click"
                                                onClick={(event) => {
                                                    event.preventDefault();
                                                    setCourse(course)
                                                }}
                                                className="btn btn-warning me-2" style={{ marginLeft: 'auto' }} >
                                                Edit
                                            </button>
                                            <button onClick={(event) => {
                                                event.preventDefault();
                                                deleteCourse(course._id);
                                            }} className="btn btn-danger" id="wd-delete-course-click">
                                                Delete
                                            </button></>)}
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div >
        </div >
    );
}
