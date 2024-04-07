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
    
  }else if(projId){

  }else{

  }
}

async function getProjects({facultyId}){
  if (facultyId){
    
  }
}



module.exports = { authenticate , getApplications,getProjects };