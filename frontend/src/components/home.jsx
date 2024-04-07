import MenuPanel from "./MenuPanel";
import NavBar from "./NavBar";
import TableData from "./TableData"

function Home(user,role) {


  return (
    <>
      <div className="main">
        <NavBar />
        <div className="bottom-layout">
          <MenuPanel className="menu-panel"/>
          <div className="dashboard">
            <TableData role={role} user={user}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
