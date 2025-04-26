import { createClient } from "@/lib/supabase-client";
import { NextResponse } from "next/server";

// Initialize Supabase client
const supabase = createClient();

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    
    console.log("payload", payload);
    // Verify this is a call_analyzed event for a phone call
    if (
      payload.event !== "call_analyzed" ||
      payload.call?.call_type !== "phone_call"
    ) {
      return NextResponse.json(
        { error: "Not a valid call_analyzed event for phone calls" },
        { status: 200 }
      );
    }
    
    console.log("payload.call_analysis", payload.call.call_analysis);
    console.log(
      "payload.call.call_analysis.custom_analysis_data",
      payload.call.call_analysis.custom_analysis_data
    );
    
    // Extract relevant call data
    const callData = {
      id: payload.call.call_id,
      summary: payload.call.call_analysis?.call_summary || null,
      transcript: payload.call.transcript || null,
      recording_url: payload.call.recording_url,
      start_time: new Date(payload.call.start_timestamp),
      end_time: new Date(payload.call.end_timestamp),
      duration: Math.round(
        (payload.call.end_timestamp - payload.call.start_timestamp) / 1000
      ), // Convert ms to seconds and round to nearest integer
      from_number: "+18324472941",
      to_number: "+18328845714",
      // from_number: payload.call.from_number,
      // to_number: payload.call.to_number,
      agent_id: payload.call.agent_id,
      appointment_booked:
        payload.call.call_analysis?.custom_analysis_data?.appointment_booked ||
        false,
      rating: payload.call.call_analysis?.custom_analysis_data?.rating || null,
      call_type:
        payload.call.call_analysis?.custom_analysis_data?.call_type || null,
      successful: payload.call.call_analysis?.call_successful || false,
    };
    
    console.log("callData", callData);
    
    // Insert into Supabase
    const { error } = await supabase.from("calls").insert(callData);
    console.log("error", error);
    
    if (error) {
      console.error("Error inserting call data:", error);
      return NextResponse.json(
        { error: "Failed to store call data" },
        { status: 500 }
      );
    }
    
    console.log("Returning success");
    return NextResponse.json(
      { message: "Call data stored successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing webhook:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
} 