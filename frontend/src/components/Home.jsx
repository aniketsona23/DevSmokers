import MenuPanel from "./MenuPanel";
import NavBar from "./NavBar";
import TableData from "./TableData"
import { viewStudentOptions } from "../utils/student";
import { viewFacultyOptions } from "../utils/faculty";
import { viewAdminOptions } from "../utils/admin";
import "./styles/home.css"

function Home(user,role) {
    if (role == "student"){
        cols = viewStudentOptions
    }
    else if( role == "faculty"){
        cols = viewFacultyOptions
    }
    else{
        cols = viewAdminOptions
    }

  return (
    <>
      <div className="main">
        <NavBar />
        <div className="bottom-layout">
          <MenuPanel className="menu-panel" cols={cols}/>
          <div className="dashboard">
            <TableData className="table" role={role} user={user}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
