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
  const [enrolling, setEnrolling] = useState<boolean>(false);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);
  const dispatch = useDispatch();
  const findCoursesForUser = async () => {
    try {
      const courses = await userClient.findCoursesForUser(currentUser._id);
      setCourses(courses);
    } catch (error) {
      console.error(error);
    }
  };
 
  const fetchCourses = async () => {
    try {
      const allCourses = await courseClient.fetchAllCourses();
      const enrolledCourses = await userClient.findCoursesForUser(
        currentUser._id
      );
      const courses = allCourses.map((course: any) => {
        if (enrolledCourses.find((c: any) => c._id === course._id)) {
          return { ...course, enrolled: true };
        } else {
          return course;
        }
      });
      setCourses(courses);
    } catch (error) {
      console.error(error);
    }
  }; 

  const updateEnrollment = async (courseId: string, enrolled: boolean) => {
    if (enrolled) {
      await userClient.enrollIntoCourse(currentUser._id, courseId);
    } else {
      await userClient.unenrollFromCourse(currentUser._id, courseId);
    }
    setCourses(
      courses.map((course) => {
        if (course._id === courseId) {
          return { ...course, enrolled: enrolled };
        } else {
          return course;
        }
      })
    );
  };
 

useEffect(() => {
  if (enrolling) {
    fetchCourses();
  } else {
    findCoursesForUser();
  }
}, [currentUser, enrolling]);

  const [course, setCourse] = useState<any>({
    _id: "1234", name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15", description: "New Description",
  });
  const addNewCourse = async () => {
    const newCourse = await courseClient.createCourse(course);
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
              enrolling={enrolling} 
              setEnrolling={setEnrolling}
              updateEnrollment={updateEnrollment}
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
