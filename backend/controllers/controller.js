const {createClient} = require("@supabase/supabase-js")
const key= process.env.API_KEY
const supabase = createClient(
  "https://arnpqxrwnkqpibcwtcjz.supabase.co",
  key
);
//const users = {"aniket.sonawane1734@gmail.com":"student","f20220031@goa.bits-pilani.ac.in":"faculty","f20221185@goa.bits-pilani.ac.in":"admin"}
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

  // If the email exists, return the corresponding role from the 'user_roles' column
  const { user_role } = userData;

  return user_role;
}

module.exports = { authenticate };