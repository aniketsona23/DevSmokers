import React from "react";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Dialog } from 'primereact/dialog';
import { Button} from 'primereact/button';
import './styles/viewApplication.css'

const ViewAppPopup = () => {
  const renderActionButton = (rowData) => {
    return (
        <button className="p-button p-button-primary" >
            View
        </button>
    );
};
  return (
    // <Dialog
    // className= "view-application"
    //   header="Application ID"
    //   // visible={visible}
    //   style={{ width: "50vw" }}
    //   // onHide={() => setVisible(false)}
    // >
    <div className="main">
      <h1>View Application</h1>
      <div className="first-section">
        <div className="left-panel">
          <div className="input-set">
            <label htmlFor="">Student Name</label>
            <input type="text" name="sname" id="sname" />
          </div>
          <div className="input-set">
            <label htmlFor="">Student ID</label>
            <input type="text" name="sid" id="sname" />
          </div>
          <div className="input-set">
            <label htmlFor="">Student Comments</label>
            <input type="text" name="scomments" id="sname" />
          </div>
        </div>
        <div className="right-panel">
          <div className="input-set">
            <label htmlFor="">Project Title</label>
            <input type="text" name="ptitle" id="ptitle" />
          </div>
          <div className="input-set">
            <label htmlFor="">Project ID</label>
            <input type="text" name="pid" id="pid" />
          </div>
          <div className="input-set">
            <label htmlFor="">Student Justification</label>
            <input type="text" name="sjust" id="sjust" />
          </div>
        </div>
      </div>
      <DataTable className="view-app-table">
        <Column field="projectTitle" header="Project Title" style={{ width: '120px' }}/>
        <Column body={renderActionButton} style={{ textAlign: 'center', width: '6em' }} />
      </DataTable>
      <div className="input-set">
        <label htmlFor="faccomment">Your Comment</label>
        <textarea name="faccomment" id="faccomment" />
      </div>
      <div className="btn-section">
        <Button size="large" className="btn">Back</Button>
        <Button size="large" className="btn">Accept</Button>
        <Button size="large" className="btn">Reject</Button>
      </div>
    </div>
  );
};

export default ViewAppPopup;
