import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

import { InputText } from 'primereact/inputtext';
// import Popup from './DialougeBox';
import { Button } from 'primereact/button';
        

// Sample data for  table
const viewStudentAppData = [
    // Sample data goes here
];

export default function ViewStudentApp() {
    const [visible, setVisible] = useState(false);
    const [viewStudentApp, setViewStudentApp] = useState([]);
    const [globalFilterValue, setGlobalFilterValue] = useState('');
    const [selectedRows, setSelectedRows] = useState([]);

    useEffect(() => {
        // Assuming you set the data from an API call or any other source
        setViewStudentApp(viewStudentAppData);
    }, []);

    const onGlobalFilterChange = (e) => {
        setGlobalFilterValue(e.target.value);
    };

    const renderActionButton = (rowData) => {
        return (
            <button className="p-button p-button-primary" onClick={()=>{setVisible(true)}}>
                View
            </button>
        );
    };

    const filterTable = () => {
        const filteredData = viewStudentAppData.filter((item) => {
            return (
                item.studentName.toLowerCase().includes(globalFilterValue.toLowerCase()) ||
                item.projectTitle.toLowerCase().includes(globalFilterValue.toLowerCase()) ||
                item.studentId.toLowerCase().includes(globalFilterValue.toLowerCase()) ||
                item.gpsrn.toLowerCase().includes(globalFilterValue.toLowerCase()) ||
                item.date.toLowerCase().includes(globalFilterValue.toLowerCase()) ||
                item.status.toLowerCase().includes(globalFilterValue.toLowerCase())
            );
        });
        setViewStudentApp(filteredData);
    };
    const val = [{ studentName: 'John Doe', projectTitle: 'Project A', studentId: '001', gpsrn: '1234', date: '2024-04-07', status: 'Pending' },
    { studentName: 'Jane Smith', projectTitle: 'Project B', studentId: '002', gpsrn: '5678', date: '2024-04-08', status: 'Approved' },
    { studentName: 'Alice Johnson', projectTitle: 'Project C', studentId: '003', gpsrn: '91011', date: '2024-04-09', status: 'Rejected' }]
    return (
        <div className="card">
            <div className="flex justify-content-between">
                <InputText className="p-inputtext-lg" type="text" value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="Global Search" />
                <Button onClick={filterTable} label='Apply Filter' size='large'/>
            </div>
            <DataTable
                value={val}
                selection={selectedRows}
                onSelectionChange={(e) => setSelectedRows(e.value)}
                className="p-datatable-striped"
            >
                <Column
                    selectionMode="multiple"
                    headerStyle={{ width: '3rem' }}
                    style={{ textAlign: 'center' }}
                ></Column>
                <Column field="studentName" header="Student Name" style={{ width: '120px' }} />
                <Column field="projectTitle" header="Project Title" style={{ width: '120px' }} />
                <Column field="studentId" header="Student ID" style={{ width: '100px' }} />
                <Column field="gpsrn" header="GPSRN" style={{ width: '80px' }} />
                <Column field="date" header="Date" style={{ width: '80px' }} />
                <Column field="status" header="Status" style={{ width: '100px' }} />
                <Column style={{ width: '60px' }} />
                <Column body={renderActionButton} style={{ textAlign: 'center', width: '6em' }} />
            </DataTable>
        </div>
    );
}