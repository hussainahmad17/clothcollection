import { NextResponse } from "next/server"

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const text = searchParams.get("text") || "Placeholder"
  const width = Number.parseInt(searchParams.get("width") || "400", 10)
  const height = Number.parseInt(searchParams.get("height") || "400", 10)

  // Create an SVG placeholder
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#f0f0f0"/>
      <text x="50%" y="50%" font-family="Arial" font-size="24" fill="#888" text-anchor="middle" dominant-baseline="middle">${text}</text>
    </svg>
  `

  return new NextResponse(svg, {
    headers: {
      "Content-Type": "image/svg+xml",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  })
}

