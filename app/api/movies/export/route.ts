import { NextResponse } from "next/server"
import { query } from "@/lib/db"

export async function GET() {
  try {
    const movies = await query("SELECT * FROM movies ORDER BY title ASC")

    // Return JSON data for download
    return new NextResponse(JSON.stringify(movies, null, 2), {
      headers: {
        "Content-Type": "application/json",
        "Content-Disposition": 'attachment; filename="movie-watchlist.json"',
      },
    })
  } catch (error) {
    console.error("Error exporting movies:", error)
    return NextResponse.json({ error: "Failed to export movies" }, { status: 500 })
  }
}
