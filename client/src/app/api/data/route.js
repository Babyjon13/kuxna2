// app/api/saveText/route.js
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const { text } = await req.json();

    if (!text) {
      return new NextResponse(JSON.stringify({ error: 'Text is required' }), { status: 400 });
    }

    const data = { text };

    // Здесь вы можете сохранить данные в базе данных или файле

    return new NextResponse(JSON.stringify({ message: 'Data saved successfully', data }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new NextResponse(JSON.stringify({ error: error.message }), { status: 500 });
  }
}