const {createClient} = require("@supabase/supabase-js");
const e = require("express");
const key= process.env.API_KEY
const supabase = createClient(
  "https://arnpqxrwnkqpibcwtcjz.supabase.co",
  key
);


async function authenticate(email) {
  const { data: userData, error: userError } = await supabase
    .from("users_details")
    .select("user_role")
    .eq("users_email_id", email)
    .single();

    if (userError && userError.code!== "PGRST116") {
    console.log(userError);
    return "error"
  }

  if (!userData) {
    return "Invalid"
  }
  const { user_role } = userData;

  return user_role;
}

async function getApplications({studId,projId}){
  if (studId){
    const { data: userData, error: userError } = await supabase
    .from("student_project_applications")
    .select("*")
    .eq("student_id", studId);
    console.log(studId, projId)
    if (userError && userError.code!== "PGRST116") {
    console.log(userError);
    return "error"
  }

  if (!userData) {
    return "Invalid"
  }
  console.log(userData)
  //const {  } = userData;

  return userData;
    
  }

  else if(projId){
    const { data: userData, error: userError } = await supabase
    .from("sop_dop_sat_projects")
    .select("*")
    .eq("project_id", projId);

    if (userError && userError.code!== "PGRST116") {
    console.log(userError);
    return "error"
  }

  if (!userData) {
    return "Invalid"
  }
  console.log(userData)
  //const {  } = userData;

  return userData;

  }
  else
  {
    const { data: userData, error: userError } = await supabase
    .from("sop_dop_projects")
    .select("*")
    if (userError && userError.code!== "PGRST116") {
      console.log(userError);
      return "error"
    }
    if (!userData) {
      return "Invalid"
    }
    console.log(userData)
    //const {  } = userData;
  
    return userData;

  }
}

async function getProjects({facultyId}){
  //console.log(facultyId)
  const { data: userData, error: userError } = await supabase
    .from("sop_dop_sat_projects")
    .select("*")
    .eq("faculty_id", facultyId);

    if (userError && userError.code!== "PGRST116") {
    console.log(userError);
    return "error"
  }

  if (!userData) {
    return "Invalid"
  }
  console.log(userData)
  //const {  } = userData;

  return userData;
}



module.exports = { authenticate , getApplications,getProjects };