import { db } from "~/server/db";
import { posts_01 } from '~/server/db/schema';
import { NextResponse } from "next/server";
import { z } from "zod";



const contentSchema = z.object({
    content: z.string().min(1, "Content cannot be empty"),
});

type RequestData = {
  content: string;
};

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
        const db_result = await db.insert(posts_01).values({ content: result.data.content });

        return NextResponse.json({ message: "Text uploaded successfully"}, { status: 200 });
      } catch (error) {
        console.error("Error uploading text:", error);
        return NextResponse.json({ error: "Failed to upload text" }, { status: 500 });
      }
    };
  