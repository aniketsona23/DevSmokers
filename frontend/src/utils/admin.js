viewAdminApplications = [
  { field: "studentName", header: "Student Name", width: 20 },
  { field: "projectTitle", header: "Project Title", width: 20 },
  { field: "studentId", header: "Student ID", width: 20 },
  { field: "gpsrn", header: "GPSRN", width: 20 },
  { field: "date", header: "Date", width: 20 },
  { field: "status", header: "Status", width: 20 },
  { field: "", header: "", width: 20 },
];

viewAdminProjects = [
  { field: "projectName", header: "Project Name", width: 20 },
  { field: "projectId", header: "Project ID", width: 20 },
  { field: "no.ofStudents", header: "No. of Students", width: 20 },
  { field: "gpsrn", header: "GPSRN", width: 20 },
  { field: "date", header: "Date", width: 20 },
  { field: "status", header: "Status", width: 20 },
  { field: "", header: "", width: 20 },
];

module.exports={viewAdminApplications,viewAdminProjects}