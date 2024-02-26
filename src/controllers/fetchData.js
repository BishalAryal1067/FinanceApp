import { supabase } from "./supabaseConnection.js";

// function to getBill Information
export default async function getBillInformation() {
  try {
    // Fetch data from the "Bill" table
    const { data, error } = await supabase.from("Bill").select("*");
    if (error) {
      throw new Error(error.message);
    }
    return data;
  } catch (error) {
    throw new Error("Failed to fetch data from Supabase: " + error.message);
  }
}
