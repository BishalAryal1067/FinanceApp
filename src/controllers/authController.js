import {supabase} from "@controller/supabaseConnection";

const loginUser = async (email, password) =>{
  const {data, err} = await supabase.auth.signInWithPassword({
    email : email,
    password: password
  })
  return {data, err}
}

const logoutUser = async () =>{ 
  const { err } = await supabase.auth.signOut();
  return {err};
}

export {loginUser, logoutUser};
