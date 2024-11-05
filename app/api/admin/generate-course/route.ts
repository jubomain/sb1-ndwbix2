import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: Request) {
  try {
    const { prompt } = await request.json();

    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: `You are an expert curriculum designer specializing in African-centered education. 
          Create a detailed course structure based on the following prompt. 
          The response should be in JSON format with the following structure:
          {
            "title": "Course title",
            "description": "Course description",
            "modules": [
              {
                "title": "Module title",
                "lessons": [
                  {
                    "title": "Lesson title",
                    "content": "Lesson content overview",
                    "duration": "Estimated duration",
                    "resources": ["Resource 1", "Resource 2"]
                  }
                ]
              }
            ]
          }`
        },
        {
          role: "user",
          content: prompt
        }
      ],
      temperature: 0.7,
    });

    const courseStructure = JSON.parse(completion.choices[0].message.content || '{}');
    
    return NextResponse.json(courseStructure);
  } catch (error) {
    console.error('Course generation error:', error);
    return NextResponse.json(
      { error: 'Failed to generate course' },
      { status: 500 }
    );
  }
}