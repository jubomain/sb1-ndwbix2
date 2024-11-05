import { NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';

export async function POST(request: Request) {
  try {
    const course = await request.json();

    // Store the course in the database
    await sql`
      INSERT INTO courses (
        title,
        description,
        content,
        created_at
      ) VALUES (
        ${course.title},
        ${course.description},
        ${JSON.stringify(course)},
        NOW()
      )
    `;

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Course creation error:', error);
    return NextResponse.json(
      { error: 'Failed to create course' },
      { status: 500 }
    );
  }
}