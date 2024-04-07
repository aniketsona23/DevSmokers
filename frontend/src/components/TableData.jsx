import { DataGrid } from "@mui/x-data-grid";

function TableData({columns,role,user}){
    if (role == 'faculty'){
        
    }
    else if (role == 'admin'){

    }
    else{

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