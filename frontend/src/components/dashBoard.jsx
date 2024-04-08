import MenuPanel from "./MenuPanel";
import NavBar from "./NavBar";
import TableData from "./TableData"
import { viewStudentOptions } from "../utils/student";
import { viewFacultyOptions } from "../utils/faculty";
import { viewAdminOptions } from "../utils/admin";
import "./styles/home.css"

async function DashBoard(user,role,action) {

  return (
        <div className="bottom-layout">
          <MenuPanel className="menu-panel" cols={cols}/>
          <div className="dashboard">
            <TableData className="table" data = {data.data} role={role} user={user}/>
          </div>
        </div>
  );
}

export default DashBoard;
