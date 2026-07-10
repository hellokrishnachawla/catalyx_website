import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const response = await fetch(
      process.env.NEXT_PUBLIC_CONTACT_API!,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    if (!response.ok) {
      return NextResponse.json(
        { success: false, message: "Failed to send to Google Sheets." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Message sent successfully!",
    });

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Server error.",
      },
      { status: 500 }
    );
  }
}