const { createClient } = require("@supabase/supabase-js");
const e = require("express");
const key = process.env.API_KEY;
const supabase = createClient("https://arnpqxrwnkqpibcwtcjz.supabase.co", key);

async function authenticate(email) {
  const { data: userData, error: userError } = await supabase
    .from("users_details")
    .select("user_role")
    .eq("users_email_id", email)  
    .single();
  
  if (userError && userError.code !== "PGRST116") {
    console.log(userError);
    return "error";
  }

  if (!userData) {
    return "Invalid";
  }
  const { user_role } = userData;
  return user_role;
}

async function getApplications({ studId, projId }) {
  if (studId) {
    const { data: userData, error: userError } = await supabase
      .from("student_project_applications")
      .select("*")
      .eq("student_id", studId);
    console.log(studId, projId);
    if (userError && userError.code !== "PGRST116") {
      console.log(userError);
      return "error";
    }

    if (!userData) {
      return "Invalid";
    }
    console.log(userData);

    return userData;
  } else if (projId) {
    const { data: userData, error: userError } = await supabase
      .from("sop_dop_sat_projects")
      .select("*")
      .eq("project_id", projId);

    if (userError && userError.code !== "PGRST116") {
      console.log(userError);
      return "error";
    }

    if (!userData) {
      return "Invalid";
    }
    console.log(userData);
    //const {  } = userData;

    return userData;
  } else {
    const { data: userData, error: userError } = await supabase
      .from("sop_dop_projects")
      .select("*");
    if (userError && userError.code !== "PGRST116") {
      console.log(userError);
      return "error";
    }
    if (!userData) {
      return "Invalid";
    }
    console.log(userData);
    //const {  } = userData;

    return userData;
  }
}

async function getProjects({ facultyId }) {
  //console.log(facultyId)
  const { data: userData, error: userError } = await supabase
    .from("sop_dop_sat_projects")
    .select("*")
    .eq("faculty_id", facultyId);

  if (userError && userError.code !== "PGRST116") {
    console.log(userError);
    return "error";
  }

  if (!userData) {
    return "Invalid";
  }
  console.log(userData);
  //const {  } = userData;

  return userData;
}

async function addProject(fields) {
  try {
      const { project_id, gpsrn, project_title, project_description, date, research_areas, status, max_students, faculty_id } = fields;
      const { data, error } = await supabase.from('sop_dop_sat_projects').insert([
          { project_id, gpsrn, project_title, project_description, date, research_areas, status, max_students, faculty_id }
      ]);
      //console.log(fields)
      if (error) {
          console.error('Error inserting data:', error);
          return { success: false, error: error.message };
      } else {
          console.log('Data inserted successfully:', data);
          return { success: true };
      }
  } catch (error) {
      console.error('Error inserting data:', error);
      return { success: false, error: error.message };
  }
}


async function applyApp(fields){
  try {
      const { application_id, student_id, project_id, gpsrn, comments, justification, faculty_comment, application_date, status_application, project_title } = fields;
      // Ensure the status value is one of the allowed enum values
      if (!['accepted', 'rejected', 'pending'].includes(status_application)) {
          throw new Error(`Invalid status value: ${status_application}`);
      }
      const { data, error } = await supabase.from('student_project_applications').insert([
            { application_id, student_id, project_id, gpsrn, comments, justification, faculty_comment, application_date, status_application, project_title }
      ]);
      console.log(fields)
      if (error) {
          console.error('Error inserting data:', error);
          return { success: false, error: error.message };
      } else {  
          console.log('Data inserted successfully:', data);
          return { success: true };
      }
  } catch (error) {
      console.error('Error inserting data:', error);
      return { success: false, error: error.message };
  }
}

async function changeStatus({ projId, appId, status }) {
  try {
      if (projId && status) {
          const { data, error } = await supabase.from('sop_dop_sat_projects').update({"status": status }).eq('project_id', projId);
          if (error) {
              console.error('Error updating status:', error.message);
              return { success: false, error: error.message };
          } else {
              console.log('Status updated successfully for projId:', projId);
              return { success: true };
          }
      } else if (appId && status) {
          const { data, error } = await supabase.from('student_project_applications').update({"status_application": status }).eq('application_id', appId);
          if (error) {
              console.error('Error updating status:', error.message);
              return { success: false, error: error.message };
          } else {
              console.log('Status updated successfully for studentId:', appId);
              return { success: true };
          }
      } else {
          console.error('Invalid parameters');
          return { success: false, error: 'Invalid parameters' };
      }
  } catch (error) {
      console.error('Error updating status:', error.message);
      return { success: false, error: error.message };
  }
}


async function dropProj({ projId }) {
  try {
      const { data, error } = await supabase.from('sop_dop_sat_projects').delete().eq('project_id', projId);
      console.log(projId)
      if (error) {
          console.error('Error deleting project:', error.message);
          return { success: false, error: error.message };
      } else {
          console.log('Project deleted successfully:', data);
          return { success: true };
      } 
  } catch (error) {
      console.error('Error deleting project:', error.message);
      return { success: false, error: error.message };
  }
}
module.exports = { authenticate, getApplications, getProjects ,addProject,applyApp , changeStatus,dropProj};
