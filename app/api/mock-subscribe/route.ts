export async function GET() {
  const headers = new Headers();
  const oneYear = 60 * 60 * 24 * 365;
  headers.append(
    'Set-Cookie',
    `subscribed=true; Path=/; Max-Age=${oneYear}; SameSite=Lax; Secure`
  );
  headers.append('Location', '/success');
  return new Response(null, { status: 302, headers });
}
