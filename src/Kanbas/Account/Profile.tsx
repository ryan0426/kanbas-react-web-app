import { Link } from "react-router-dom";
export default function Profile() {
  return (
    <div id="wd-profile-screen">

      <h1>Profile</h1>
      <input id="wd-username"
             placeholder="alice"
             className="form-control mb-2"/>
      <input id="wd-password"
             placeholder="123" type="password"
             className="form-control mb-2"/>
      <input id="wd-firstname"
             placeholder="Alice"
             className="form-control mb-2"/>
      <input id="wd-lastname"
             placeholder="Wonderland"
             className="form-control mb-2"/>
      <input id="wd-dob"
             placeholder="mm/dd/yyyy" type="date" 
             className="form-control mb-2"/>
      <input id="wd-email"
             placeholder="alice@wonderland.com" type="email" 
             className="form-control mb-2"/>
      <input id="wd-role"
             placeholder="User"
             className="form-control mb-2"/>

      <Link id="wd-signin-btn"
            to="/Kanbas/Account/Profile"
            className="btn btn-danger w-100">
            Signout </Link>
    </div>
);}
