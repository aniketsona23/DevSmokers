export const viewSopDopSat = [
  { field: "projectName", header: "Project Name", width: 20 },
  { field: "researchArea", header: "Research Area", width: 20 },
  { field: "professor", header: "Professor", width: 20 },
  { field: "gpsrn", header: "GPSRN", width: 20 },
  { field: "date", header: "Date", width: 20 },
  { field: "", header: "", width: 20 },
];

export const viewAppliedProject = [
  { field: "projectName", header: "Project Name", width: 20 },
  { field: "researchArea", header: "Research Area", width: 20 },
  { field: "professor", header: "Professor", width: 20 },
  { field: "gpsrn", header: "GPSRN", width: 20 },
  { field: "date", header: "Date", width: 20 },
  { field: "status", header: "Status", width: 20 },
  { field: "", header: "", width: 20 },
];

export const viewStudentOptions =[
    { field: "sop/dop/sat", header: "SOP/DOP/SAT", width: 20},
    { field: "profile", header: "Profile", width: 20},
    { field: "projects", header: "Projects", width: 20},
];

module.exports = {viewSopDopSat,viewAppliedProject, viewStudentOptions};
