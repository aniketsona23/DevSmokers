import { DataGrid } from "@mui/x-data-grid";
import {viewStudentApp,viewOldAd} from "../utils/faculty"
import {viewAdminApplications,viewAdminProjects} from "../utils/admin"
import {viewSopDopSat,viewAppliedProject} from "../utils/student"

function TableData({role,user}){
    var rows = []
    if (role == 'faculty'){
        var columns = viewStudentApp 
    }
    else if (role == 'admin'){
        var columns = viewAdminApplications
    }
    else{
        var columns = viewSopDopSat
    }
    return(
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
    ) 
}

export default TableData