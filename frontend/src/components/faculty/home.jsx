import MenuPanel from "../MenuPanel";
import NavBar from "../NavBar";
import TableData from "../TableData"
import { viewFacultyOptions } from "../../utils/faculty";
import "./styles/home.css"

function Home(user,role) {


  return (
    <>
      <div className="main">
        <NavBar />
        <div className="bottom-layout">
          <MenuPanel className="menu-panel" cols={viewFacultyOptions}/>
          <div className="dashboard">
            <TableData className="table" role={role} user={user}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
