"use server";
import { db } from "~/server/db";
import { posts_01 } from '~/server/db/schema';
import { NextResponse } from "next/server";
import { z } from "zod";

/*
const contentSchema = z.object({
    content: z.string().min(1, "Content cannot be empty").regex(/^\s+$/, "Content cannot contain spaces"),
});

type RequestData = {
  content: string;
}; */

export default async function uploadData(title: string, content: string): Promise<{message: string} | { error: string }> {
  try {
    // Insert the data into the database
    await db.insert(posts_01).values({ title, content });

    // Return a success message or the inserted data
    return { message: "Data uploaded successfully!"};
  } catch (error) {
    console.error("Error uploading data:", error);
    return { error: "Failed to upload text" };
  }
}

/*
export async function POST(req: Request) {
    const data = await req.json() as RequestData;
    const result = contentSchema.safeParse(data)


    if (!result.success) {
        return NextResponse.json(
          { error: result.error.format() },
          { status: 400 }
        );
      }

      try {
        // Insert the content into the PostgreSQL table using Drizzle ORM
        const db_result = await db.insert(posts_01).values({ content: result.data.content });
    
    
        // Respond with a success message
    
    
        return NextResponse.json({ message: "Text uploaded successfully"}, { status: 200 });
      } catch (error) {
        console.error("Error uploading text:", error);
        return NextResponse.json({ error: "Failed to upload text" }, { status: 500 });
      }
    
}; */