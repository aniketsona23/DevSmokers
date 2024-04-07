import MenuPanel from "./MenuPanel";
import NavBar from "./NavBar";
import { DataGrid } from "@mui/x-data-grid";

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
            <DataGrid
              rows={rows}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: 5 },
                },
              }}
              pageSizeOptions={[5, 10]}
              checkboxSelection
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
