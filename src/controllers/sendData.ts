import { supabase } from "./supabaseConnection.ts";

// function to upload Bill Information
export async function sendBillInformation(payload) {
  const { data, error } = await supabase
    .from("Bill")
    .insert({ user: payload.user, bill_detail: payload.bill_detail });

  return error;
}
