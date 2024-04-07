import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

import { InputText } from 'primereact/inputtext';
        
import { Button } from 'primereact/button';
        

// Sample data for  table
const viewStudentAppData = [
    // Sample data goes here
];

export default function ViewStudentApp() {
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

    const filterTable = () => {
        // Implement filtering logic here
        // You can filter viewStudentAppData based on globalFilterValue
        // Update the state with the filtered data
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

    return (
        <div className="card">
            <div className="flex justify-content-between">
                <InputText className="p-inputtext-lg" type="text" value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="Global Search" />
                <Button onClick={filterTable} label='Apply Filter' size='large'/>
            </div>
            <DataTable
                value={viewStudentApp}
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
            </DataTable>
        </div>
    );
}