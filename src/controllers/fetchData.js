import { supabase } from "./supabaseConnection.js";

// //getting bills from bill table
// let { data: bill } = await supabase.from("Bill").select("*");

// export default { bill };

export async function getBillInformation() {
  const { data, error } = await supabase.from("Bill").select("*")
  return { data, error};
}
