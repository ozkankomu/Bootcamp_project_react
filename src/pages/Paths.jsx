import { NavLink, Outlet } from "react-router-dom";

const Paths = () => {
  return (
    <div className="container mt-4">
      <h1>
        Online IT Courses to Become a Qualified IT Professional with Clarusway
      </h1>

      <p className="fs-5">
        Join outstanding companies with rewarding salaries. We offer the
        highest-demand IT skills YOU need for success! CHOOSE THE BEST COURSE
        FOR YOU Upgrade your career with the best online training led by top IT
        experts!
      </p>
      <div>
        <NavLink className="btn btn-danger w-50" to="">
          Full Stack
        </NavLink>
        <NavLink className="btn btn-success  w-50" to="aws">
          Aws-Devops
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
};

export default Paths;
