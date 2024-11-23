import { Routes, Route, Navigate } from "react-router";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import Courses from "./Courses";
import "./styles.css";
import { useEffect, useState } from "react";
import ProtectedRoute from "./Account/ProtectedRoute";
import Session from "./Account/Session";
import * as userClient from "./Account/client";
import { useSelector, useDispatch } from "react-redux";
import * as courseClient from "./Courses/client";
import * as EnrollmentClient from "./Dashboard/client";
import { addEnrollment, removeEnrollment, setEnrollments } from "./Dashboard/reducer";

export default function Kanbas() {
  const [courses, setCourses] = useState<any[]>([]);
  const [allCourses, setAllCourses] = useState<any[]>([]);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);
  const dispatch = useDispatch();
  const fetchCourses = async () => {
    try {
      const courses = await userClient.findMyCourses();
      setCourses(courses);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchAllCourses = async () => {
    try {
        const availableCourses = await courseClient.fetchAllCourses(); 
        if (!availableCourses || availableCourses.length === 0) {
            console.warn("No available courses found.");
            return;
        }
        setAllCourses(availableCourses);
    } catch (error) {
        console.error(error);
    }
};

useEffect(() => {
    if (currentUser) {
        fetchCourses();
        fetchAllCourses();
    }
}, [currentUser]);

  const [course, setCourse] = useState<any>({
    _id: "1234", name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15", description: "New Description",
  });
  const addNewCourse = async () => {
    const newCourse = await userClient.createCourse(course);
    setCourses([ ...courses, newCourse ]);
  };
  const deleteCourse = async (courseId: string) => {
    const status = await courseClient.deleteCourse(courseId);
    setCourses(courses.filter((course) => course._id !== courseId));
  };
  const updateCourse = async () => {
    await courseClient.updateCourse(course);
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };

  const handleEnroll = async (courseId: string) => {
    try {
        const newEnrollment = await EnrollmentClient.enrollInCourse(currentUser._id, courseId);
        dispatch(addEnrollment({ courseId: course._id, userId: currentUser._id }))
        const updatedEnrollments = [
            ...enrollments,
            { _id: newEnrollment._id, user: currentUser._id, course: courseId },
        ];
        dispatch(setEnrollments(updatedEnrollments)); 
        setCourses([...courses, allCourses.find((course) => course._id === courseId)]);
    } catch (error) {
        console.error("Error enrolling in course:", error);
    }
  };

  const handleUnenroll = async (courseId: string) => {
    try {
        await EnrollmentClient.unenrollFromCourse(currentUser._id, courseId);
        dispatch(removeEnrollment({ courseId: course._id, userId: currentUser._id }));
        const updatedEnrollments = enrollments.filter(
            (enrollment: any) => enrollment.course !== courseId
        );
        dispatch(setEnrollments(updatedEnrollments)); 
        setCourses(courses.filter((course) => course._id !== courseId));
    } catch (error) {
        console.error("Error unenrolling from course:", error);
    }
  };

  return (
    <Session>
      <div id="wd-kanbas">
      <KanbasNavigation />
      <div className="wd-main-content-offset p-3">
        <Routes>
          <Route path="/" element={<Navigate to="Account" />} />
          <Route path="/Account/*" element={<Account />} />
          <Route path="/Dashboard" element={<ProtectedRoute><Dashboard 
              courses={courses}
              course={course}
              allCourses={allCourses}
              setCourse={setCourse}
              addNewCourse={addNewCourse}
              deleteCourse={deleteCourse}
              updateCourse={updateCourse}
              handleEnroll={handleEnroll}
              handleUnenroll={handleUnenroll}
              /></ProtectedRoute>} />
          <Route path="/Courses/:cid/*" element={<ProtectedRoute><Courses courses={courses}/></ProtectedRoute>} />
          <Route path="Calendar"       element={<h1>Calendar</h1>} />
          <Route path="Inbox"          element={<h1>Inbox</h1>} />
        </Routes>
      </div>
    </div>
    </Session>
  );
}
