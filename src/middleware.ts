import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * ============================================================================
 * PROJECT KILL-SWITCH / MAINTENANCE SWITCH
 * ============================================================================
 * - true  => Entire website is OFF. All routes return a genuine 404 Not Found.
 * - false => Website is ON and functions normally.
 * 
 * TO RESTORE THE WEBSITE IN THE FUTURE:
 * Simply change `IS_SITE_OFF = false;` (or delete this file), commit & push to GitHub.
 * ============================================================================
 */
export const IS_SITE_OFF = true;

export function middleware(request: NextRequest) {
  if (IS_SITE_OFF) {
    return new NextResponse(
      `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>404: This page could not be found</title>
  <style>
    body {
      margin: 0;
      color: #000;
      background: #fff;
      font-family: system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
      height: 100vh;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .container {
      display: flex;
      align-items: center;
      justify-content: center;
      line-height: 48px;
    }
    h1 {
      border-right: 1px solid rgba(0, 0, 0, .3);
      margin: 0 20px 0 0;
      padding: 0 23px 0 0;
      font-size: 24px;
      font-weight: 500;
      vertical-align: top;
      display: inline-block;
    }
    h2 {
      font-size: 14px;
      font-weight: 400;
      line-height: 28px;
      margin: 0;
      display: inline-block;
    }
    @media (prefers-color-scheme: dark) {
      body {
        color: #fff;
        background: #000;
      }
      h1 {
        border-right: 1px solid rgba(255, 255, 255, .3);
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>404</h1>
    <h2>This page could not be found.</h2>
  </div>
</body>
</html>`,
      {
        status: 404,
        headers: {
          'Content-Type': 'text/html; charset=utf-8',
          'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0',
          'Pragma': 'no-cache',
          'Expires': '0',
        },
      }
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths including root, pages, and API routes
     */
    '/:path*',
  ],
};
