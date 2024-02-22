import { supabase } from "./supabaseConnection.js";

// function to getBill Information
export default async function getBillInformation() {
  const { data, error } = await supabase.from("Bill").select("*")
  return { data, error};
}