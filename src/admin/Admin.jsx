import { Link, Outlet } from "react-router-dom";
import { Navbar} from "react-bootstrap";

const Admin = () => {
  return (
    <div>
      <div
        className="container d-flex justify-content-center"
        style={{ marginTop: "1em" }}
      >
        <h1>Admin Page</h1>
      </div>
      
      <Navbar  style = {{backgroundColor: "#5cdb95", marginTop:"1em"}}>
        
      <ul class="nav">
        <li class="nav-item">
          <Link to="users" className="nav-link">
            <span style={{color:"black"}}>Users</span>
          </Link>
        </li>
        <li class="nav-item">
          <Link to="posts" className="nav-link">
            <span style={{color:"black"}}>Posts</span>
          </Link>
        </li>
        <li class="nav-item">
          <Link to="questions" className="nav-link">
            <span style={{color:"black"}}>Questions</span>
          </Link>
        </li>
      </ul>
      </Navbar>

      <Outlet />
    </div>
  );
};

export default Admin;
