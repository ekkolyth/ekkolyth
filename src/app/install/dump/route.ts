import { NextResponse } from 'next/server'

const INSTALL_SCRIPT_URL = 'https://raw.githubusercontent.com/ekkolyth/dump/main/scripts/install.sh'

export async function GET() {
  const res = await fetch(INSTALL_SCRIPT_URL, { next: { revalidate: 60 } })
  const script = await res.text()

  return new NextResponse(script, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'no-cache',
    },
  })
}
