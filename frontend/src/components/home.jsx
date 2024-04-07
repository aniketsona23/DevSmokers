import MenuPanel from "./MenuPanel";
import NavBar from "./NavBar";
import TableData from "./TableData"

function Home(user,role) {


  return (
    <>
      <div className="main">
        <NavBar />
        <div className="bottom-layout">
          <MenuPanel className="menu-panel" role={role}/>
          <div className="dashboard">
            <TableData className="table" role={role} user={user}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
