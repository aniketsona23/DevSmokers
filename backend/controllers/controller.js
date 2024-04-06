import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://arnpqxrwnkqpibcwtcjz.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFybnBxeHJ3bmtxcGliY3d0Y2p6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTEwNTE4ODMsImV4cCI6MjAyNjYyNzg4M30.7sfgVgUPrOI1qe_kPMUNoMKZuaCmb_HBG3FMqVImw8U"
);
//const users = {"aniket.sonawane1734@gmail.com":"student","f20220031@goa.bits-pilani.ac.in":"faculty","f20221185@goa.bits-pilani.ac.in":"admin"}
async function authenticate(email) {
  const { data: userData, error: userError } = await supabase
    .from("user_details")
    .select("user_role")
    .eq("user_email_id", email)
    .single();

  if (userError) {
    console.log("User Error");
    return "error"
  }

  if (!userData) {
    return "Invalid"
  }

  // If the email exists, return the corresponding role from the 'user_roles' column
  const { user_role } = userData;

  return user_role

  // if (email && users[email] ){

  //     return users[email]
  // }else{
  //     return ""
  // }
}

module.exports = { authenticate };
