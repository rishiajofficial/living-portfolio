import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { project_id } = body as { project_id: string };

  if (!project_id) {
    return NextResponse.json({ error: "project_id required" }, { status: 400 });
  }

  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    request.headers.get("x-real-ip") ??
    "anonymous";

  const voterId = `ip:${ip}`;

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !supabaseKey) {
    // Mock mode: always succeed
    return NextResponse.json({ success: true, mock: true });
  }

  const { createClient } = await import("@supabase/supabase-js");
  const supabase = createClient(supabaseUrl, supabaseKey);

  // Check for existing vote
  const { data: existing } = await supabase
    .from("votes")
    .select("id")
    .eq("project_id", project_id)
    .eq("voter_id", voterId)
    .maybeSingle();

  if (existing) {
    return NextResponse.json({ error: "Already voted" }, { status: 409 });
  }

  // Insert vote
  const { error: voteError } = await supabase
    .from("votes")
    .insert({ project_id, voter_id: voterId });

  if (voteError) {
    return NextResponse.json({ error: voteError.message }, { status: 500 });
  }

  // Increment vote count on projects table
  const { error: updateError } = await supabase.rpc("increment_vote_count", {
    p_project_id: project_id,
  });

  if (updateError) {
    console.error("Failed to increment vote count:", updateError.message);
  }

  return NextResponse.json({ success: true });
}
