import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/1234/Home">
            <img src="course.png" width={200} />
            <div>
              <h5>
                CS1234 React JS
              </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course"> 
            <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/1234/Home">
            <img src="course.png" width={200} />
            <div>
              <h5>
                 CS5520
              </h5>
              <p className="wd-dashboard-course-title">
                Mobile Application Development
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course"> 
            <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/1234/Home">
            <img src="course.png" width={200} />
            <div>
              <h5>
                 CS5800
              </h5>
              <p className="wd-dashboard-course-title">
                Algorithm
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course"> 
            <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/1234/Home">
            <img src="course.png" width={200} />
            <div>
              <h5>
                 CS5100
              </h5>
              <p className="wd-dashboard-course-title">
                Foundations of AI
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course"> 
            <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/1234/Home">
            <img src="course.png" width={200} />
            <div>
              <h5>
                 Orientation
              </h5>
              <p className="wd-dashboard-course-title">
                Master's Orientation
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course"> 
            <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/1234/Home">
            <img src="course.png" width={200} />
            <div>
              <h5>
                 COOP
              </h5>
              <p className="wd-dashboard-course-title">
                COOP Tutorial
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course"> 
            <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/1234/Home">
            <img src="course.png" width={200} />
            <div>
              <h5>
                 CS5330
              </h5>
              <p className="wd-dashboard-course-title">
                Pattern Recognition
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
