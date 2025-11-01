export async function GET() {
  // Fallback demo checkout: immediately redirect to mock subscribe route
  return Response.json({ url: '/api/mock-subscribe' });
}
