export async function POST(req) {
  try {
    const body = await req.json(); // Parse incoming request
    const { fullName, email, message } = body;

    return new Response(
      JSON.stringify({ message: "Message received!", data: { fullName, email, message } }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error processing request:", error); // Log the error for debugging
    return new Response(JSON.stringify({ error: "Invalid request" }), { status: 400 });
  }
}
