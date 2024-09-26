import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const requestHeaders = new Headers(req.headers);

  // Ensuring Netlify detects the form
  requestHeaders.set('X-Use-Client', 'true');

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}
