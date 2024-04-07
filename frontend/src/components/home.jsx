import MenuPanel from "./MenuPanel";
import NavBar from "./NavBar";
import TableData from "./TableData"

function Home() {
  columns = [
    { field: "id", headerName: "ID", width: 40 },
    { field: "name", headerName: "Name", width: 40 },
    { field: "", headerName: "ID", width: 40, type: "" },
  ];

  rows=[]

  return (
    <>
      <div className="main">
        <NavBar />
        <div className="bottom-layout">
          <MenuPanel />
          <div className="dashboard">
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
