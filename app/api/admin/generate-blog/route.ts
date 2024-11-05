import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: Request) {
  try {
    const { topic } = await request.json();

    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: `You are an expert content writer specializing in African education and culture. 
          Create a blog post based on the given topic. The response should be in JSON format with:
          {
            "title": "Engaging blog title",
            "content": "Well-structured blog content with paragraphs",
            "imagePrompt": "Detailed prompt for generating a relevant image"
          }`
        },
        {
          role: "user",
          content: topic
        }
      ],
      temperature: 0.7,
    });

    const blogPost = JSON.parse(completion.choices[0].message.content || '{}');
    
    return NextResponse.json(blogPost);
  } catch (error) {
    console.error('Blog generation error:', error);
    return NextResponse.json(
      { error: 'Failed to generate blog post' },
      { status: 500 }
    );
  }
}